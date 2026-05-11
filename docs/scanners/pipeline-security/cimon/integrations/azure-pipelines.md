# Azure Pipelines | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/integrations/azure-pipelines

---

# Azure Pipelines

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/integrations/azure-pipelines.md "Edit this page")

Updated on Apr 15, 2025 • Published on Apr 15, 2025

* * *

Several mechanisms have been implemented to allow seamless integration with Azure Pipelines.

## Azure Pipelines hosted runners support [Copied!](#azure-pipelines-hosted-runners-support "Copy link to this section")

The most popular environment for running Azure Pipelines build is through hosted runners. As soon as a job is submitted, it is translated into a VM created by Azure and run on an Azure-backed cloud.

Since Cimon Agent is runner-aware, it’s aware of the runner environment and adapts itself accordingly. There are several ways in which the functionality reflects this:

*   **Hosted runner support**\- Cimon is compatible with **any** Ubuntu-based hosted runner
    
*   **Allowed hosts** - Azure-related hosts will be added automatically, including `dev.azure.com`, `*.vsblob.visualstudio.com`, etc.
    
*   **Ignored IPs** - Cimon ignores internal IPs communication, such as the Azure metadata IP address `169.254.169.254`, `127.0.0.1`, and more
    
*   **Performance** - To improve the performance, Cimon tracks the descendant processes of the pipeline runner process `Agent.Worker` in the case of Azure Pipelines (it will also track docker-related processes due to their relevance)
    
*   **GitHub Reporters** - Cimon outputs the report according to the runner identified; for Azure Pipelines, this will generate a job summary report
    

## Cimon Azure Pipelines task [Copied!](#cimon-azure-pipelines-task "Copy link to this section")

As part of Cimon, we provide a custom task for deploying agents seamlessly within any Azure Pipelines build. The task is reachable by installing the Cimon extension on the official marketplace, which can be found at .

The task is based on the NodeJS engine and contains simple `pre` and `post` scripts to start and gracefully shut down the agent’s container. Cimon is run as a privileged container in detached mode and joins the runners’ process and network namespaces to see all the processes and network connections on the host.

### Usage [Copied!](#usage "Copy link to this section")

The core of the Azure Pipelines integration is installing Cimon simply by introducing the Cimon task in your Azure Pipelines Workflow as follows:

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
```

```yaml
steps:
  - task: Cimon@0
    inputs:
      # Cimon client ID for authentication
      clientId: $(CIMON_CLIENT_ID)

      # Cimon secret for authentication
      secret: $(CIMON_SECRET)

      # Whether Cimon is run in detection only or prevention mode.
      # In prevention mode it will block forbidden network traffic
      # and possibly fail the corresponding job run.
      # Default: false
      prevent: ""

      # A comma or white space separated list of
      # allowed IP addresses
      allowedIps: ""

      # A comma or white space separated list of allowed domain names.
      # The left-most label can be the wildcard character (*) to match
      # multiple subdomains (e.g. *.example.com).
      #
      # The following domains are added implicitly for Azure Pipelines runner:
      # - dev.azure.com
      # - *.vsblob.visualstudio.com
      # - *.visualstudio.com
      allowedHosts: ""

      # Whether process tree is included in job summary.
      # For complex job definitions it may be way too verbose.
      # Default: false
      reportProcessTree: ""

      # Includes slack webhook endpoint to report findings.
      # Report is sent when security event found on prevent mode.
      slackWebhookEndpoint: ""

      # Log level (used for debugging Cimon)
      # Default: "info"
      logLevel: ""

      # Set of key=value pairs that describe Cimon features
      featureGates: ""

      # Fail the CI if Cimon encountered an error
      # Default: false
      failOnError: ""
```

### Job summary report [Copied!](#job-summary-report "Copy link to this section")

Cimon uploads the final report as a job summary for the Azure Pipelines job, which is available in the “Extensions” tab.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
