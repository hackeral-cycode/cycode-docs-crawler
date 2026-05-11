# How does it work? | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/overview/how-does-it-work

---

# How does it work?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/overview/how-does-it-work.md "Edit this page")

* * *

## What is eBPF? [Copied!](#what-is-ebpf "Copy link to this section")

[eBPF (extended Berkeley Packet Filter)](https://ebpf.io/) is a powerful technology that allows developers to run custom code inside the Linux kernel without requiring kernel modifications. eBPF programs can be used to monitor various runtime information, such as network packets, system calls, and kernel events, making it a powerful tool for security monitoring and analysis. eBPF programs can also be dynamically loaded and unloaded, making it easy to adapt to changing security needs. Additionally, eBPF programs are sandboxed, meaning they can run safely without affecting the stability of the kernel, making it a safe and efficient way to monitor and secure applications.

Suppose we want to monitor network traffic to detect and block any attempts to exploit a particular vulnerability. We can write an eBPF program that captures incoming network packets, inspects them for known attack patterns, and blocks any packets that match the pattern. Additionally, the eBPF program can monitor the processes receiving the network traffic and block any suspicious processes attempting to exploit the vulnerability.

The eBPF program can be loaded into the kernel and run in real time, allowing for continuous monitoring of the network traffic and processes. If the program detects any packets or processes that match the known attack patterns, it can take action to block the traffic, kill the process, or alert system administrators. This allows for real-time detection and mitigation of security threats, helping to protect the system from potential attacks.

eBPF benefits include:

*   Flexibility: allows running custom code inside the Linux kernel without requiring kernel modifications, making it highly flexible and adaptable
    
*   Safety: eBPF programs are sandboxed, meaning they can run safely without affecting the stability of the kernel
    
*   Performance: eBPF programs are designed for high-performance, low-overhead monitoring and analysis of system events
    
*   Security: can be used to detect and mitigate security threats by monitoring network activity, identifying malicious behavior, and enforcing access control policies
    
*   Customization: eBPF programs can be dynamically loaded and unloaded, making it easy to adapt to changing security needs
    

## Why use eBPF? [Copied!](#why-use-ebpf "Copy link to this section")

By utilizing the latest eBPF technology, Cimon monitors and mitigates attacks within the kernel, denying malicious access to users’ assets as soon as they arise. Unlike similar user-mode-based solutions, an eBPF-based solution like Cimon offers highly secure, scalable, seamless integration and non-intrusive behavior.

Currently, attacks are mitigated immediately in the kernel by sending a `SIGKILL(9)` signal to a process that attempts forbidden action (see man pages for the `bpf_send_signal()` helper).

## eBPF high-level architecture [Copied!](#ebpf-high-level-architecture "Copy link to this section")

Cimon comprises the user-space loader application (the `cimon` executable binary) and a set of secure kernel-space BPF sensor applications (`sensor.network.bpf.o`, `sensor.process.bpf.o`, and `sensor.file-system.bpf.o`).

The loader attaches the sensor applications to various kernel hook points to handle selected kernel events. As a result of handling kernel events, each sensor application generates secondary events (i.e., `network_event`, `process_event`, and `file_system_event`), which are aggregated by the loader application.

To facilitate event sourcing, Cimon generates certain events itself. For example, the Cimon loader application constructs a process tree by traversing the `/proc` virtual file system, which is then incrementally updated by applying events of type `process_event` produced by the `sensor.process.ebpf.o` sensor.

![](/assets/55d8d6d-cimon-high-level-architecture.png)

The primary function of Cimon is to instrument the Pipeline Runner Application (the main application of the pipeline, e.g., `Runner.Worker` for GitHub Actions), Container Runtime (container runtime process, e.g., `containerd`/`dockerd`), and its descendant processes. Data collected by Cimon can be used to prevent specific supply chain attacks. For example, Cimon loads the `sensor.process.ebpf.o` that probes `execve` system calls to discover processes created during workflow execution and builds a comprehensive process tree. Similarly, the `sensor.network.ebpf.o` sensor intercepts outbound TCP/IP and UDP/IP connections and blocks forbidden network traffic.

Each sensor application is a fairly independent, configurable module that instruments particular Linux subsystems to generate specific events. The events, primarily defined by the sensor’s type, are sent from kernel space to user space via specialized BPF maps called ring buffers. The events aggregated by Cimon can be further processed by external Integrators via a dedicated HTTP or gRPC stream endpoint. For example, a networking event can be transformed into a comment on a specific Git commit, then displayed in the GitHub UI. Alternatively, the same network event can be browsed in the Cimon platform or sent as the payload with an HTTP POST request to a webhook endpoint.

![](/assets/89aae78-cimon-sensors.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
