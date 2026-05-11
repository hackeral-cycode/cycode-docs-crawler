# CI/MON FAQs | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/ci-mon-faqs

---

# CI/MON FAQs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/ci-mon-faqs.md "Edit this page")

Updated on May 5, 2025 • Published on May 21, 2024

* * *

## General FAQs [Copied!](#general-faqs "Copy link to this section")

### Who is Cimon? [Copied!](#who-is-cimon "Copy link to this section")

Cimon the beaver was a master builder who loved nothing more than working with his paws and teeth to create new things. One day, he noticed that the software developers in his community were struggling with supply-chain attacks, and he knew he had to help.

With his sharp teeth and keen senses, Cimon built a runtime security solution that could detect and prevent these attacks, using eBPF technology to monitor the system and protect against threats.

Cimon’s hard work and dedication paid off, and his platform became popular with developers worldwide. They admired his beaver-like traits of hard work, persistence, and attention to detail, and he became known as the go-to beaver for preventing supply-chain attacks.

From that day on, Cimon continued to use his beaver skills to help protect the software supply chain, always staying vigilant and ready to build something new to keep the developers safe.

### How does Cimon prevent supply-chain attacks? [Copied!](#how-does-cimon-prevent-supply-chain-attacks "Copy link to this section")

Cimon prevents supply-chain attacks by monitoring and preventing the golden pillars of CI/CD pipeline security: process execution, network access, and file access. It enables you to detect a breach, identify a compromised pipeline runner, deny access to the source code, and mitigate exfiltration attempts.

### What is eBPF technology? [Copied!](#what-is-ebpf-technology "Copy link to this section")

Extended Berkeley Packet Filter (eBPF) is a revolutionary technology that enables the Linux kernel to execute custom programs within the kernel context safely. eBPF is highly efficient and allows developers to write code that can be run inside the kernel without needing kernel modifications or the risk of crashing the system. In the context of Cimon, eBPF is used to monitor and mitigate attacks within the kernel.

### How to build the right security policy in Cimon? [Copied!](#how-to-build-the-right-security-policy-in-cimon "Copy link to this section")

First, you should go through the learning phase and run Cimon in detect mode to monitor the CI pipeline behavior. The Cimon report will suggest the correct security policy to apply for the prevention phase. Once applied, any deviation will be terminated, leaving your pipeline harmless.

### How much does Cimon cost? [Copied!](#how-much-does-cimon-cost "Copy link to this section")

Cimon is totally free! So get started and unleash the power of the beaver!

### How does Cimon protect users’ privacy? [Copied!](#how-does-cimon-protect-users-privacy "Copy link to this section")

We prioritize the privacy of our users and only collect the necessary information to enhance their experience and improve our product. We utilize this information to present the report findings to the user on the Cimon platform and to assist the user in creating project-specific security policies. Refer to our privacy policy for more details on our privacy practices, including data collection, usage, protection, and user rights.

### Which CI/CD platforms does Cimon support? [Copied!](#which-cicd-platforms-does-cimon-support "Copy link to this section")

Currently, Cimon only supports GitHub App integration and GitHub Actions security. In the future, it will expand its support with additional platforms, such as CircleCI/GitLab/Jenkins.

## Installation [Copied!](#installation "Copy link to this section")

### How can I get started with Cimon? [Copied!](#how-can-i-get-started-with-cimon "Copy link to this section")

To get started with Cimon, follow these steps:

*   Install the Cimon GitHub App.
*   Generate an API key in the Cimon platform.
*   Add the Cimon Action to your workflow.

More info can be found on our [getting started](/scanners/pipeline-security/cimon/overview) page.

### How do I define Cimon actions in my workflow? [Copied!](#how-do-i-define-cimon-actions-in-my-workflow "Copy link to this section")

To get Cimon to learn your pipeline, we recommend starting it on “Detect Mode.” Here’s an example:

```
- uses: cycodelabs/cimon-action@v0
  with:
    client-id: ${{ secrets.CIMON_CLIENT_ID }}
    secret: ${{ secrets.CIMON_SECRET }}
```

To use Cimon in “Prevent Mode,” add `prevent: true` to your configuration. Additionally, you can define `allowed-hosts` and `allowed-ips` to allow access to specific hosts or IP addresses.

```
- uses: cycodelabs/cimon-action@v0
  with:
    client-id: ${{ secrets.CIMON_CLIENT_ID }}
    secret: ${{ secrets.CIMON_SECRET }}
    prevent: true
    allowed-hosts: >
      objects.githubusercontent.com
      proxy.golang.org
      storage.googleapis.com
    allowed-ips: >
      34.121.123.45
```

## How do I generate an API key for Cimon? [Copied!](#how-do-i-generate-an-api-key-for-cimon "Copy link to this section")

Cimon API keys consist of two values: `client-id` and `secret`. You can generate an API key in the platform on the “Access Token” page. These values should be saved in GitHub organization settings as GitHub Actions secrets and titled `CIMON_CLIENT_ID` and `CIMON_SECRET`.

## Troubleshoot [Copied!](#troubleshoot "Copy link to this section")

### Cimon just detected an unwanted connection. Am I at risk? [Copied!](#cimon-just-detected-an-unwanted-connection-am-i-at-risk "Copy link to this section")

Not necessarily. A few reasons could lead to it:

*   You updated the pipeline with additional services that weren’t present during the learning phase. The way to handle this is by updating the policy or, if the changes are significant, going through the learning phase again.
*   Your learning phase needed to be more thorough and to cover edge cases. These are the drawbacks of this approach, but it definitely didn’t put your pipeline at any security risk. The solution is to update the policy with the discovered profile.
*   One of the components in your pipeline has unwanted behavior that may be malicious. We recommend investigating it and understanding its root cause.

### Error: failed removing memory limit: failed to set memlock rlimit: operation not permitted [Copied!](#error-failed-removing-memory-limit-failed-to-set-memlock-rlimit-operation-not-permitted "Copy link to this section")

This error indicates that Cimon wasn’t run with sufficient privileges.

*   If Cimon is run locally, it should be run with `sudo` - `sudo ./cimon agent`
*   If Cimon is run through a container image, it should be given `--privileged` flag to the `docker run` of the container.
*   If Cimon is run through the Kubernetes environment, it should be given the following capabilities:

```
1
2
3
4
5
6
```

```yaml
securityContext:
    capabilities:
        add:
        - SYS_RESOURCE # To set rlimit and load BPF programs.
        - BPF # To manage BPF objects.
        - SYS_ADMIN # To load and attach BPF programs as well. SYS_RESOURCE and SYS_BPF seem not to be enough.
```

### `Error: failed starting filesystem sensor: failed attaching BPF program to tracepoint: neither debugfs nor tracefs are mounted` [Copied!](#error-failed-starting-filesystem-sensor-failed-attaching-bpf-program-to-tracepoint-neither-debugfs-nor-tracefs-are-mounted "Copy link to this section")

To properly hook tracepoints in the kernel, the [debugfs](https://docs.kernel.org/filesystems/debugfs.html) should be mounted at `/sys/kernel/debug`.  
If running Cimon natively:

*   Verify that `/sys/kernel/debug` exists. If it doesn’t, try to mount `debugfs` using the following script: `sudo mount -t debugfs none /sys/kernel/debug`.
*   If the `debugfs` doesn’t exist for your OS, verify that you’re using a supported Linux version and distribution.
    *   If running Cimon within a container:
        *   Verify that the path is mounted into the container: `--volume /sys/kernel/debug:/sys/kernel/debug:ro`.
    *   If running Cimon within a Kubernetes environment:
        *   Verify that the path is mounted in the pod definition:

```
...
spec:
    containers:
        ...
        volumeMounts:
        - name: sys-kernel-debug
            mountPath: /sys/kernel/debug
            readOnly: true
    volumes:
    - name: sys-kernel-debug
        hostPath:
        path: /sys/kernel/debug
```

### `Error: failed constructing network sensor: failed loading and assigning base BPF objects: field ExitUDPRecvmsgProg: program exit_udp_recvmsg: load program: invalid argument: invalid func unknown#195896080 (86 line(s) omitted)` (or something similar) [Copied!](#error-failed-constructing-network-sensor-failed-loading-and-assigning-base-bpf-objects-field-exitudprecvmsgprog-program-exit_udp_recvmsg-load-program-invalid-argument-invalid-func-unknown195896080-86-lines-omitted-or-something-similar "Copy link to this section")

These errors indicated that the program failed to load the BPF program to the kernel. It usually shows a lack of support for eBPF or some of the used features.

The solution is updating the OS to the latest kernel and distribution. Follow the Cimon guidelines for the [supported versions](/scanners/pipeline-security/cimon/overview/supported-features) and distros.

## How do I contact Cimon support? [Copied!](#how-do-i-contact-cimon-support "Copy link to this section")

You can contact Cimon support by emailing [support.cimon@cycode.com](mailto:support.cimon@cycode.com) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
