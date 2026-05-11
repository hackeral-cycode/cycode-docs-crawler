# Supported artifact/containers workloads, container registries and languages | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security/supported-artifact-containers-workloads-container-registries-and-languages

---

# Supported artifact/containers workloads, container registries and languages

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/supported-artifact-containers-workloads-container-registries-and-languages.md "Edit this page")

Updated on Nov 17, 2024 • Published on Nov 17, 2024

* * *

## Supported workloads [Copied!](#supported-workloads "Copy link to this section")

Cycode can detect the following workloads in the cluster:

*   Deployment
    
*   ReplicaSet
    
*   ReplicationController
    
*   DaemonSet
    
*   StatefulSet
    
*   Job
    
*   CronJob
    
*   DeploymentConfig (OpenShift)
    
*   Pod, when these pods have no parent or owner references
    

## Supported container registries [Copied!](#supported-container-registries "Copy link to this section")

Cycode supports the following container registries:

*   [Amazon Elastic Container Registry (ECR) integration](/integrations/artifact-tools/amazon-elastic-container-registry-ecr-integration)
    
*   [Azure Container Registry (ACR) integration](/integrations/artifact-tools/azure-container-registry-acr-integration)
    
*   [Docker Hub integration](/integrations/artifact-tools/docker-hub-integration)
    
*   [GitLab Container Registry](/integrations/artifact-tools/gitlab-container-registry)
    
*   [Google Container Registry (GCR)](/integrations/artifact-tools/google-container-registry-gcr)
    
*   [Google Artifact Registry (GAR)](/integrations/artifact-tools/google-artifact-registry-gar)
    
*   [JFrog Artifactory](/integrations/security-tools/jfrog-artifactory-and-xray)
    
*   [Nexus](/integrations/artifact-tools/nexus)
    
*   [Quay](/integrations/artifact-tools/quay)
    
*   [Generic container registry integration](/integrations/artifact-tools/generic-container-registry-integration) (Generic supports all Docker API V2 integrations, which addresses all on-prem containers)
    

## Supported languages [Copied!](#supported-languages "Copy link to this section")

Cycode supports the following languages:

*   Node
    
*   Go
    
*   Java
    
*   PHP
    
*   Python
    

## Scanning capabilities [Copied!](#scanning-capabilities "Copy link to this section")

Cycode runs two types of scans in containers:

*   Secrets
    
    *   In the manifest
    *   In the layers
*   Vulnerabilities
    
    *   In images that come from the operating system, from third party packages, or vulnerabilities in the code

## Scan sync [Copied!](#scan-sync "Copy link to this section")

For cloud providers, we sync every 3 hours; for JFrog and DockerHub, the sync is every 20 minutes.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
