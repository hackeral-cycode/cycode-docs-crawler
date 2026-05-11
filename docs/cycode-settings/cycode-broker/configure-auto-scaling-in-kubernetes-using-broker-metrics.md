# Configure auto-scaling in Kubernetes using Broker metrics | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/cycode-broker/configure-auto-scaling-in-kubernetes-using-broker-metrics

---

# Configure auto-scaling in Kubernetes using Broker metrics

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/cycode-broker/configure-auto-scaling-in-kubernetes-using-broker-metrics.md "Edit this page")

Updated on May 6, 2025 • Published on Apr 2, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Broker client exposes queue-related, real-time metrics that you can use to configure auto-scaling in Kubernetes using the native Kubernetes Horizontal Pod Autoscaler (HPA) or an external scaler like KEDA.

The queue metrics are exposed through the following two endpoints:

*   For the KEDA scaler: **/api/v1/metrics/pending-task-count**
*   For Promethus scraping: **/metrics**

### Supported Broker client versions [Copied!](#supported-broker-client-versions "Copy link to this section")

v0.25.1 and higher

## Metrics endpoints for the Broker client [Copied!](#metrics-endpoints-for-the-broker-client "Copy link to this section")

### Prometheus-compatible (detailed metrics) [Copied!](#prometheus-compatible-detailed-metrics "Copy link to this section")

#### Route [Copied!](#route "Copy link to this section")

```
GET /metrics
```

#### Exposed metrics [Copied!](#exposed-metrics "Copy link to this section")

```
1
2
3
4
5
6
7
```

```text
# HELP total_pending_tasks Total queued tasks 
# TYPE total_pending_tasks gauge 
total_pending_tasks 48 
# HELP total_queue_pending_tasks Total queued tasks per queue 
# TYPE total_queue_pending_tasks gauge 
total_queue_pending_tasks{queue_name="requests"} 30 
total_queue_pending_tasks{queue_name="clone"} 18
```

### KEDA-compatible (simple metrics) [Copied!](#keda-compatible-simple-metrics "Copy link to this section")

This API exposes the total number of pending tasks.

#### Route [Copied!](#route-1 "Copy link to this section")

```
GET /api/v1/metrics/pending-task-count
```

#### Response [Copied!](#response "Copy link to this section")

```
1
2
3
```

```json
{ 
    "pending_task_count": 48
}
```

### HPA configuration examples [Copied!](#hpa-configuration-examples "Copy link to this section")

#### KEDA-based scaling [Copied!](#keda-based-scaling "Copy link to this section")

Triggers scaling when **total pending tasks** exceeds 50.

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
```

```yaml
apiVersion: keda.sh/v1alpha1 
kind: ScaledObject 
metadata: 
  name: broker-client-keda-scaler 
  namespace : default 
spec: 
  scaleTargetRef : 
    name : broker-client 
  minReplicaCount: 1 
  maxReplicaCount:  10 
  triggers: 
     - type: metrics-api 
      metadata: 
        url: http://broker-client-service:9494/api/v1/metrics/pending-task-count 
        valueLocation: pending_task_count 
        targetValue :  "50"
```

#### Prometheus-based HPA [Copied!](#prometheus-based-hpa "Copy link to this section")

**Based on total pending tasks**

Triggers scaling when **total pending tasks** exceeds 50.

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
```

```yaml
apiVersion: autoscaling/v2 
kind: HorizontalPodAutoscaler 
metadata : 
  name: broker-client-total-pending-hpa 
spec: 
  scaleTargetRef: 
     apiVersion: apps/v1 
    kind: Deployment 
    name: broker-client 
   minReplicas: 1 
  maxReplicas: 10 
  metrics: 
    - type: External 
       external: 
         metric: 
          name: total_pending_tasks 
         target : 
           type: Value 
           value: "50"
```

**Based on specific queue (for example, “requests”)**

Triggers scaling when **requests queue** passes 30 tasks.

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
```

```yaml
apiVersion: autoscaling/v2 
kind: HorizontalPodAutoscaler 
metadata: 
  name: broker-client-rest-queue-hpa 
spec: 
  scaleTargetRef: 
     apiVersion : apps/v1 
    kind: Deployment 
    name: broker-client 
   minReplicas: 1 
  maxReplicas: 10 
  metrics: 
    - type: External 
      external: 
         metric: 
          name: total_queue_pending_tasks 
          selector : 
             matchLabels: 
               queue_name: "requests" 
         target: 
          type: Value 
           value : "30"
```

**Combined Logic (multiple triggers)**

If any of the following conditions are true, scaling will happen.

*   **total\_pending\_tasks** > 50.
*   **total\_queue\_pending\_tasks**{queue\_name=”**requests**”} > 20.
*   **total\_queue\_pending\_tasks**{queue\_name=”**clone**”} > 25.

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
```

```yaml
apiVersion: autoscaling/v2 
kind: HorizontalPodAutoscaler 
metadata: 
  name: broker-client-multi-metric-hpa 
spec: 
  scaleTargetRef: 
     apiVersion : apps/v1 
    kind: Deployment 
    name: broker-client 
  minReplicas: 1 
  maxReplicas: 10 
  metrics : 
    - type: External 
       external: 
         metric: 
          name : total_pending_tasks 
        target: 
           type: Value 
          value: "50" 
    - type : External 
      external : 
         metric: 
          name : total_queue_pending_tasks 
          selector: 
             matchLabels: 
              queue_name : "requests" 
         target: 
          type: Value 
           value : "20" 
     - type: External 
      external : 
         metric : 
          name: total_queue_pending_tasks 
          selector: 
             matchLabels : 
              queue_name: "clone" 
         target: 
           type: Value 
          value : "25"
```

Important

*   Make sure the Prometheus adapter is installed and configured to expose your metrics.
*   The HTTP scaler needs for KEDA to be installed, and the scaler must be able to reach the pod.

## HPA threshold recommendations [Copied!](#hpa-threshold-recommendations "Copy link to this section")

This section provides guidance to help you define sensible threshold values when configuring your HPA based on the queue metrics exposed by the Broker client.

### Requests queue and total pending tasks [Copied!](#requests-queue-and-total-pending-tasks "Copy link to this section")

For the requests queue (metric: **total\_queue\_pending\_tasks{queue\_name=“requests”}**) and the global total pending tasks queue (metric:**total\_pending\_tasks**), threshold values depend on your specific workload and concurrency requirements.

To help you estimate a good starting point, it’s important to understand how the Broker client processes tasks:

Parameter

Description

PARALLELISM\_DEGREE

Defines how many tasks the Broker client can process in parallel. The system processes up to 3 tasks at the same time.

Processing Frequency

The Broker client pulls and executes tasks every 200 ms.

This means that for each 200ms interval, the Broker client can process up to 3 tasks.

#### Suggested formula [Copied!](#suggested-formula "Copy link to this section")

You can use the following formula to estimate how many tasks a single Broker-client instance can process per second:

```
1
```

```text
Tasks per second = (1000ms / 200ms) * PARALLELISM_DEGREE
```

With the default = 3:

```
1
```

```text
Tasks per second = (1000 / 200) * 3 = 15 tasks/sec
```

So under ideal conditions a single Broker-client instance can process approximately 15 requests per second.

#### Determine the scaling threshold [Copied!](#determine-the-scaling-threshold "Copy link to this section")

After you know how many tasks a Broker client pod can handle per second, you can define a scaling threshold, meaning the number of pending tasks in the system that will trigger scaling.

#### What is the buffer? [Copied!](#what-is-the-buffer "Copy link to this section")

The buffer is a multiplier that defines how much total system load you want to allow before scaling occurs. It helps answer the question “How much total pending work should the system tolerate before scaling more pods?”

A larger buffer means more tolerance (slower scaling), while a smaller buffer means less tolerance (faster scaling).

#### Example threshold calculation [Copied!](#example-threshold-calculation "Copy link to this section")

With the default configuration:

*   PARALLELISM\_DEGREE = 3
*   Tasks per second per pod = (1000ms / 200ms) \* 3 = 15
*   Buffer = 5

```
1
```

```text
Threshold = 15 (tasks/sec) × 5 (buffer) = 75 tasks
```

If the system detects 75 or more pending tasks, this is a good indication that more pods may be needed.

#### Summary [Copied!](#summary "Copy link to this section")

This table summarizes the threshold recommendation for the above example.

Parameter

Value

Description

Tasks per second

15

Each pod can process ~15 tasks/sec

Buffer (multiplier)

5

System-wide pending task tolerance

Scale threshold

75

Suggested HPA threshold to trigger scaling

### Clone queue [Copied!](#clone-queue "Copy link to this section")

The Broker client processes clone tasks serially (one at a time) per pod, with a fixed delay of 1 second between tasks (metric: **total\_queue\_pending\_tasks{queue\_name=“clone”}**).

#### Suggested formula [Copied!](#suggested-formula-1 "Copy link to this section")

To estimate how many clone tasks a single broker-client instance can process per second:

```
1
```

```text
Tasks per second = 1000ms / 1000ms = 1 clone task/sec
```

So each pod can handle approximately 1 clone task per second.

#### Determine the scaling threshold [Copied!](#determine-the-scaling-threshold-1 "Copy link to this section")

To determine when to scale, apply a buffer multiplier that defines how much backlog you’re willing to tolerate before increasing replicas.

#### Example threshold calculation [Copied!](#example-threshold-calculation-1 "Copy link to this section")

With:

*   Clone processing rate per pod = 1 task/sec
*   Buffer = 20

```
1
```

```text
Threshold = 1 (task/sec) × 20 (buffer) = 20 tasks
```

#### Summary [Copied!](#summary-1 "Copy link to this section")

This table summarizes the threshold recommendation for the above example.

Parameter

Value

Description

Tasks per second

1

Each pod can process 1 clone task/sec.

Buffer (multiplier)

20

Tolerated load before scaling.

Scale threshold

20

Suggested threshold to trigger scaling.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
