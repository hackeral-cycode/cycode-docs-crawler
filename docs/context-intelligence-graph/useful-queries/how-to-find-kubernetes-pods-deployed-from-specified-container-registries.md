# How to find Kubernetes pods deployed from specified container registries | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries/how-to-find-kubernetes-pods-deployed-from-specified-container-registries

---

# How to find Kubernetes pods deployed from specified container registries

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/how-to-find-kubernetes-pods-deployed-from-specified-container-registries.md "Edit this page")

Updated on Jan 20, 2026 • Published on Aug 11, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how to get a list of Kubernetes pods deployed for multiple container images, for container repositories, and for container registries using the Context Intelligence Graph query.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The Cycode member has an Owner or Admin role
*   Access to the Graph view
*   [Container Scanning](/scanners/ast-application-security-testing/container-image-security) integration enabled and container repositories selected
*   [Kubernetes](/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/kubernetes) integration

## Instructions [Copied!](#instructions "Copy link to this section")

You can generate the Context Intelligence Graph query with two different options:

**Container Scanning** Integration set to **ON** and Container Repositories selected +**Kubernetes Integration** enabled  
Run the query as follows to get the best insights:  
![](/assets/image-397.png)

**Container Scanning** Integration set to **ON** and **Container Repositories** selected.  
Run the query as follows to get the best insights:  
![](/assets/image-398.png)

## Outcome [Copied!](#outcome "Copy link to this section")

The query gives you a list of Kubernetes pods tied to container umages, connected to container repositories, connected to the container registry.

You can also filter the following for more focused results:

*   Kubernete Pod: ID, Name, Namespace
*   Container Registries: IDs or Names
*   Container Repositories: IDs or Names
*   Container Images: Provider, Tags, Names and IDs

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
