# Cycode Broker analytics | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/cycode-broker/cycode-broker-analytics

---

# Cycode Broker analytics

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/cycode-broker/cycode-broker-analytics.md "Edit this page")

Updated on Oct 5, 2025 • Published on Aug 6, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Cycode Broker acts as a liaison between Cycode and your on-premise deployment, allowing Cycode to scan your code without gaining network access to your internal assets. Cycode shows Broker statistics for each instance in a card, so you can view the data you need to determine whether you have to scale your Broker.

## View the Broker analytics [Copied!](#view-the-broker-analytics "Copy link to this section")

To view Broker analytics, go to **Settings > Integrations > Brokers** and click a Broker instance to open its card, which has the tabs described below.

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab provides the following summary information about the Broker instance:

**Overview area**

Item

Description

Created at

Date and time this instance of the Broker was initiated.

Last heartbeat

Date and time of the last heartbeat ping.

Version

Version of the Broker that is currently installed.

Logs enabled

Indicates whether the Broker logs are enabled.

**Analytics area**

Item

Description

Pending tasks

Number of tasks currently pending for the Broker (REST/GraphQL/Stream).

Broker client replicas

Number of Broker instances on the host machine.

Calculated at

Date and time when the analytics were last calculated.

Calculated interval

How often the Broker statistics are calculated.

### Resource tabs [Copied!](#resource-tabs "Copy link to this section")

The resource tabs track usage over time, with graphs that visualize the absolute resource consumption, total absolute allocation of the resource, and the relative amount of resource being consumed by the Broker client instance.

The clients are listed below the graph in a table, which shows the minimum and maximum amount of resource consumption for each, along with the average resource consumption.

Select a time frame from the dropdown list above the graph to see the relevant metrics in the graph and the table.

#### Memory usage [Copied!](#memory-usage "Copy link to this section")

The Memory usage tab tracks the amount of memory being used by the Broker over time. The graph shows how much memory each Broker client instance consumed during the specified time period.

Hover over the graph to see the following additional information per client.

Item

Description

Memory usage

Absolute amount of memory used by the Broker client at that point in time.

Memory limit

Total amount of memory allocated for use by the Broker clients.

Usage

Relative amount of memory used by the Broker client as a percentage of the total allocated memory.

#### CPU usage [Copied!](#cpu-usage "Copy link to this section")

The CPU usage tab tracks the amount of CPU resources being used by the Broker over time. The graph shows how much of the CPU resources each Broker client instance consumed during the specified time period.

Hover over the graph to see the following additional information per client.

Item

Description

CPU usage

Absolute amount of CPU resources used by the Broker client at that point in time.

CPU limit

Total amount of CPU resources allocated for use by the Broker clients.

Usage

Relative amount of CPU resources used by the Broker client as a percentage of the total allocated.

#### Disk usage [Copied!](#disk-usage "Copy link to this section")

The Disk usage tab tracks the amount of disk resources being used by the Broker over time. The graph shows how much disk space each Broker client instance consumed during the specified time period.

Hover over the graph to see the following additional information per client.

Item

Description

Disk usage

Absolute amount of disk space used by the Broker client at that point in time.

Disk capacity

Total amount of disk resources allocated for use by the Broker clients.

Usage

Relative amount of disk resources used by the Broker client as a percentage of the total allocated.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
