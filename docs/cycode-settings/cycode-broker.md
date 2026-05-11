# Cycode Broker | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/cycode-broker

---

# Cycode Broker

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/cycode-broker/_index.md "Edit this page")

Updated on Jul 22, 2025 • Published on Aug 6, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Standard Cycode deployments provide customers with two options:

*   A **SaaS deployment** that connects the organization’s integrated systems (SCMs, Cloud, CI/CD, workflows) with Cycode’s SaaS platform, operated on AWS through the North Virginia (us-east-1) data center.
    
*   A **full on-premise deployment (Cycode Enterprise Server)** that deploys Cycode using a setup where your data is stored on your own servers, and you install and manage the software. Deploying using an on-premise software infrastructure means that all the software is stored on your hardware on your company’s premises. This requires your company’s IT department to maintain the infrastructure on their own.
    

The Cycode Broker is a tool that acts as a liaison between Cycode and your on-premise deployment, allowing Cycode to scan your code without gaining network access to your internal assets. Cycode Broker provides on-premise customers a hybrid solution, providing them with all the benefits of a SaaS cloud-based deployment but still allowing them to isolate their on-prem cluster from the world.

### What does the Cycode Broker provide? [Copied!](#what-does-the-cycode-broker-provide "Copy link to this section")

The broker communicates with the Cycode SaaS platform, which allows your internal assets to be scanned without the need to make them accessible to the internet.

Similarly to a financial broker, the Cycode Broker runs in your environment and has access to your internal systems.

1.  The Broker polls the Cycode SaaS for tasks to perform.
    
2.  The SaaS then responds with the relevant internal integration/connector tasks.
    
3.  The Broker performs the requested tasks and then returns the response to the SaaS environment.
    

For example:

1.  The Broker polls the SaaS and requests tasks.
    
2.  It then retrieves a new task to `get all repositories`.
    

### Which integrations are supported by the Cycode Broker? [Copied!](#which-integrations-are-supported-by-the-cycode-broker "Copy link to this section")

The following integrations are supported:

*   GitHub Enterprise (App)
    
*   GitLab Enterprise
    
*   JFrog Artifactory
    
*   Gerrit
    
*   Bitbucket Server
    
*   Jenkins (if you don’t want to install the plugin)
    
*   Nexus
    
*   AzureDevops Server
    
*   Alerting/ticketing systems such as Jira Server and Jira Data Center
    
*   All Security tools
    

For information on how to integrate these tools, go to [Cycode integrations](/integrations/) .

### Should I set up my Broker per network or per integration? [Copied!](#should-i-set-up-my-broker-per-network-or-per-integration "Copy link to this section")

Cycode recommends setting up one Broker per integration. However, we also support the option of having one Broker per network. For more information, go to [Broker setup considerations](/cycode-settings/cycode-broker/integrating-the-cycode-broker-with-the-cycode-saas-platform#broker-setup-considerations) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
