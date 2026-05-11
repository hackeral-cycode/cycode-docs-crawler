# Cimon in the Cycode Platform | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/overview/cimon-in-the-cycode-platform

---

# Cimon in the Cycode Platform

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/overview/cimon-in-the-cycode-platform.md "Edit this page")

Updated on Feb 16, 2025 • Published on Feb 13, 2025

* * *

## Integrating CI/MON [Copied!](#integrating-cimon "Copy link to this section")

Integrating CI/Mon can be easily configured under the settings section. Follow these steps to set up the integration:

1.  Navigate to Settings and select “CI/Mon”
    
2.  Press the “Integrate” button to begin the setup process.
    
3.  A new service account will be created.
    
4.  Choose from one of the supported Continuous Integration platforms to complete the setup.
    

![Screenshot 2024-05-26 at 10.13.49.png](/assets/screenshot-202024-05-26-20at-2010-13-49.png)

## Configuration [Copied!](#configuration "Copy link to this section")

CI/Mon supports a two-tier hierarchy for policies, allowing for comprehensive control over access and operational guidelines:

1.  Company Level Policy: This policy applies to the entire company and establishes the baseline rules for all CI workflows within the company.
2.  Workflow Level Policy: This policy applies to individual workflows, providing specific guidelines and rules for each workflow.

## Learning Mechanism [Copied!](#learning-mechanism "Copy link to this section")

CI/Mon is designed to continuously refine its network anomaly detection capabilities through iterative learning post-deployment. Utilizing network sensors, it collects and aggregates data to analyze network patterns. Once the learning phase concludes, the agent can accurately identify deviations from expected behavior, effectively detecting network anomalies in the host environment. Upon detecting any suspicious connections, CI/Mon generates alerts visible in the report, enhancing network security and threat response.

### Configuring CI/Mon Company Level Policy [Copied!](#configuring-cimon-company-level-policy "Copy link to this section")

To configure the organizational level policy in CI/Mon, follow these steps:

1.  Navigate to Settings and select “CI/Mon”
2.  Configure Trusted Hosts and IPs: Add the trusted hosts and IP addresses to the company-level policy. This ensures that network connections to these specified hosts and IPs will be approved.

![image.png](/assets/image-28179-29.png)

## Build Report [Copied!](#build-report "Copy link to this section")

Cimon Agent seamlessly integrates with Cycode by transmitting build reports generated from build workflows. With each Cimon run, a report is sent, initiating the creation of a new ‘Build Report’ entity.

![](/assets/121e7df-image.png)

## Overview [Copied!](#overview "Copy link to this section")

Each build report offers an extensive summary of network events and process executions. The overview section displays all permitted hosts and IPs, and the associated build workflow, and proposes a new Cimon build policy based on the specifics of this report.

![](/assets/4714c54-image.png)

### Network [Copied!](#network "Copy link to this section")

The network section displays all network connections executed within the build workflow, along with the corresponding PID that initiated each connection.

![](/assets/d47da5f-image.png)

### Process [Copied!](#process "Copy link to this section")

The processes section lists all processes executed during the build workflow, along with the network connection established by each of them.

![](/assets/41761ff-image.png)

## Build Workflow [Copied!](#build-workflow "Copy link to this section")

The build workflow entity encompasses all the workflow details along with the applied Cimon policy. This policy will be incorporated into a tenant-level policy.

![](/assets/deb8a2a-image.png)

### Build Policy [Copied!](#build-policy "Copy link to this section")

The Build Policy Tab provides control over the Cimon policy to be applied. Allowed hosts and IPs can be directly configured from this tab.

![](/assets/65eae71-image.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
