# Kubernetes support | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/enterprise-ready/kubernetes-support

---

# Kubernetes support

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/enterprise-ready/kubernetes-support.md "Edit this page")

Updated on Mar 27, 2025 • Published on Mar 27, 2025

* * *

## VM vs Kubernetes runners [Copied!](#vm-vs-kubernetes-runners "Copy link to this section")

Hosted runners enable the execution of jobs in temporary environments. Each time a new job is queued, a new ephemeral virtual machine (VM) is created to execute the build workflow. Self-hosted runners, however, can operate on various platforms, including Docker Containers or Kubernetes pods.

While setting up Cimon in ephemeral VMs is done using the workflow file, setting up Cimon in Kubernetes requires a different approach.

## How Kubernetes runners operate [Copied!](#how-kubernetes-runners-operate "Copy link to this section")

When utilizing a Kubernetes runner, a dedicated pod actively monitors for incoming jobs. Later, as new jobs enter the queue, each job starts a new pod. Pods usually do not operate with elevated or “privileged” permissions.

Hence, setting up Cimon in this setup poses a challenge. Cimon requires kernel-level permissions for monitoring network, process, and file system events via [eBPF](https://ebpf.io/) .

To overcome this challenge, we created Cimon v2 to support dynamic job assignments and run Cimon as a [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) .

## Running Cimon as a DaemonSet [Copied!](#running-cimon-as-a-daemonset "Copy link to this section")

When running Cimon as a `DaemonSet`we ensure that one Cimon pod will always run on every node in the cluster.

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
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
```

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: cimon-ds
  namespace: cimon
spec:
  selector:
    matchLabels:
      name: cimon
  template:
    metadata:
      labels:
        name: cimon
    spec:
      containers:
        - name: cimon
          image: cycodelabs/cimon:v0
          imagePullPolicy: Always
          envFrom:
            - configMapRef:
                name: cimon-config
                optional: true
            - secretRef:
                name: cimon-secrets
                optional: true
          env:
            - name: CIMON_AGENT_MODE
              value: '1'
          securityContext:
            runAsUser: 0
            capabilities:
              add:
                - SYS_RESOURCE # To set rlimit and load BPF programs.
                - BPF # To manage BPF objects.
                - SYS_ADMIN # To load and attach BPF programs as well. SYS_RESOURCE and SYS_BPF seem not to be enough.
                - SYS_PTRACE # Allows enumerating procfs for process discovery.
              drop:
                - ALL
          volumeMounts:
            - name: tracefs
              mountPath: /sys/kernel/tracing
            - name: debugfs
              mountPath: /sys/kernel/debug
          resources:
            limits:
              memory: 600Mi
            requests:
              cpu: 100m
              memory: 600Mi
      volumes:
        - name: tracefs
          hostPath:
            path: /sys/kernel/tracing
            type: Directory
        - name: debugfs
          hostPath:
            path: /sys/kernel/debug
            type: Directory
      hostNetwork: true # Discovering interfaces to attach XDP probes.
      hostPID: true # Discovering processes from procfs directory.
      terminationGracePeriodSeconds: 30
```

*   Line 17: Runs on the latest Cimon image.
*   Lines 19-25: Apply Cycode credentials from the environment variables.
*   Lines 24-28: Enable eBPF capabilities.

## Applying Cimon [Copied!](#applying-cimon "Copy link to this section")

To start Cimon, execute the following`kubectl` commands:

```
1
2
3
```

```bash
kubectl create ns cimon
kubectl create secret generic cimon-secrets --from-literal=CIMON_CLIENT_ID="11111111-..." --from-literal=CIMON_SECRET="11111111-..." -n cimon
kubectl apply -f https://cimon-releases.s3.amazonaws.com/cimon-ds.yml
```

## Expected behavior [Copied!](#expected-behavior "Copy link to this section")

A new Cimon pod should start on each node inside the cluster.

![](/assets/0a3ab91-image.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
