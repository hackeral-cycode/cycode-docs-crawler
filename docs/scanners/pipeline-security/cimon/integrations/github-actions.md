# GitHub Actions | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/integrations/github-actions

---

# GitHub Actions

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/integrations/github-actions.md "Edit this page")

Updated on May 26, 2024 • Published on Apr 14, 2024

* * *

Cycode has implemented several mechanisms to allow seamless integration with GitHub Actions.

## GitHub-hosted runners support [Copied!](#github-hosted-runners-support "Copy link to this section")

The most popular environment for running GitHub Actions build is GitHub-hosted runners. As soon as a job is submitted, it is translated into a VM created by GitHub and run on GitHub’s Azure-backed cloud.

Since Cimon Agent is runner-aware, it’s aware of the runner environment and adapts itself accordingly. There are several ways in which the functionality reflects this:

*   **Hosted runner support**\- Cimon is compatible with **any** Ubuntu-based hosted runner
    
*   **Allowed hosts** - Github-related hosts are added automatically, including `github.com`, `api.github.com`, etc.
    
*   **Ignored IPs** - Cimon ignores internal IPs communication, such as the Azure metadata IP address `169.254.169.254`, `127.0.0.1`, and more
    
*   **Performance** - To improve the performance, Cimon tracks the descendant processes of the pipeline runner process, `Runner.Worker` in the case of GitHub Actions (it will also track docker-related processes due to their relevance)
    
*   **GitHub Reporters** - Cimon outputs the report according to the runner identified; for GitHub Actions, this will generate a job summary report
    

Note

GitHub Actions also allows running jobs inside [containers](https://docs.github.com/en/actions/using-jobs/running-jobs-in-a-container) . The setup adds several constraints and hasn’t been fully tested.

Therefore, when using Cimon on GitHub-hosted machines, we recommend running it natively instead of in a container.

## GitHub self-hosted runners support [Copied!](#github-self-hosted-runners-support "Copy link to this section")

In GitHub, users can set up runners in a bare-metal environment or use the [Actions Runner Controller](https://github.com/actions/actions-runner-controller) to support Kubernetes runners.

### Kubernetes support [Copied!](#kubernetes-support "Copy link to this section")

If you’re using K8s-based runners, refer to the [Kubernetes guidelines](/scanners/pipeline-security/cimon/enterprise-ready/kubernetes-support) .

## Cimon GitHub Action [Copied!](#cimon-github-action "Copy link to this section")

As part of Cimon, we provide a custom action for deploying agents seamlessly within any GitHub Actions build. The repository containing the action can be found at . The action also could be found on GitHub’s official marketplace at .

The action is based on the NodeJS engine and contains simple `main` and `post` scripts to start and gracefully shut down the agent’s container. Cimon is run as a privileged container in detached mode and joins the runners’ process and network namespaces to see all the processes and network connections on the host.

### Usage [Copied!](#usage "Copy link to this section")

The action supports the following parameters:

Name

Default

Description

`client-id`

Cimon client ID for authentication

`secret`

Cimon secret for authentication

`url`

Cimon endpoint for authentication

`prevent`

`false`

Enable prevention mode

`allowed-ips`

A comma or white space separated list of allowed IP addresses

`allowed-hosts`

A comma or white space separated list of allowed domain names. The left-most label can be the wildcard character (`*`) to match multiple subdomains (e.g. `*.example.com`).

`ignored-ip-nets`

A comma or white space separated list of ignored IP networks in CIDR notation, e.g. 10.0.0.0/8, 172.16.0.0/12. This setting is mandatory if your workflow runs containers attached to a custom network with configured sub-range. In other words, inter-container networking is usually ignored by Cimon. Cimon implicitly ignores 10.0.0.0/8 and 172.16.0.0/12 networks.

`github-token`

`${{ github.token }}`

GitHub token (used to overcome GitHub rate limiting)

`report-job-summary`

`true`

Report results through job summary output

`report-process-tree`

`false`

Enable to report the process tree

`slack-webhook-endpoint`

Slack webhook endpoint to report security events

`apply-fs-events`

`false`

Enable processing filesystem events and display them in the process tree report

`log-level`

`info`

Log level (Used for debugging)

`feature-gates`

Set of key=value pairs that describe Cimon features

`fail-on-error`

`false`

Fail the CI if Cimon encountered an error

The build script will update actions’ entry points code in the dist directory, which should be added to the Git repository.

## Job summary report [Copied!](#job-summary-report "Copy link to this section")

### What is a job summary? [Copied!](#what-is-a-job-summary "Copy link to this section")

The [job summary](https://github.blog/2022-05-09-supercharging-github-actions-with-job-summaries/) feature provides a more detailed and customizable summary of the results of each job in a workflow, including the ability to include custom metadata, rich text formatting, and images.

Cimon generates a summary report for every job defined in a workflow. The layout and contents of the report depend on the runtime mode, i.e., detect or prevent.

Here is an example of a standard security report in GitHub:

### Detect Mode [Copied!](#detect-mode "Copy link to this section")

![](/assets/5c6f76a-cimon-detect.png)

### Prevent Mode [Copied!](#prevent-mode "Copy link to this section")

![](/assets/273a1f6-cimon-prevent.png)

### Understanding reports [Copied!](#understanding-reports "Copy link to this section")

The **headline** indicates whether any risk was detected at runtime. If detected, the subsequent sections provide enough information to understand which program was blocked due to a forbidden network connection, including a process identifier, destination address, port, and protocol.

The **Policy Suggestion** section shows the recommended Cimon GitHub action configuration to apply in prevent mode. In other words, based on that information, Cimon builds a profile of network events in detect mode and suggests allowed IP addresses and hosts as input configurations in prevent mode.

A typical section is a list of **Network Events**, i.e., outbound TCP and UDP connections, which includes the integer process identifier (PID) that initiated the connection, process name, destination IP address and port, and resolved host. The last column indicates forbidden connections that are blocked in prevention mode.

Another typical section shows **Resolved Domains**, i.e., DNS mapping between hosts and corresponding IP addresses.

If reporting process tree is enabled, a summary report includes the **Process Tree** captured during workflow execution by instrumenting GitHub runner’s application (`Runner.Worker`) and container runtime (`containerd`/`dockerd`) and their descendants. Effectively, it shows all processes and programs with command-line arguments run during workflow execution.

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
```

```coffeescript
Runner.Worker(1528) [ /home/runner/runners/2.301.1/bin/Runner.Worker spawnclient 112 115 ]
  node(4101) [ /home/runner/runners/2.301.1/externals/node16/bin/node /home/runner/work/cimon/cimon/./.github/actions/agent-javascript-action/dist/main/index.js ]
  node(4299) [ /home/runner/runners/2.301.1/externals/node16/bin/node /home/runner/work/_actions/actions/checkout/93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8/dist/index.js ]
    git(4310) [ /usr/bin/git version ]
    git(4311) [ /usr/bin/git config --global --add safe.directory /home/runner/work/cimon/cimon/Hello-World ]
    git(4312) [ /usr/bin/git init /home/runner/work/cimon/cimon/Hello-World ]
containerd(672) [ /usr/bin/containerd ]
  containerd-shim(4419) [ /usr/bin/containerd-shim-runc-v2 -namespace moby -address /run/containerd/containerd.sock -publish-binary /usr/bin/containerd -id 8bd93947b2ac106fae58e095807422f0acc6bd170f76520e645328a170f502c4 start ]
    containerd-shim(4427) [ /usr/bin/containerd-shim-runc-v2 -namespace moby -id 8bd93947b2ac106fae58e095807422f0acc6bd170f76520e645328a170f502c4 -address /run/containerd/containerd.sock ]
      runc(4437) [ /usr/bin/runc --root /var/run/docker/runtime-runc/moby --log /run/containerd/io.containerd.runtime.v2.task/moby/8bd93947b2ac106fae58e095807422f0acc6bd170f76520e645328a170f502c4/log.json --log-format json create --bundle /run/containerd/io.containerd.runtime.v2.tas ]
        exe(4446) [ runc init ]
        6(4446) [ runc init ]
            wget(4448) [ /bin/wget --timeout=1 https://yahoo.com ]
[...]
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
