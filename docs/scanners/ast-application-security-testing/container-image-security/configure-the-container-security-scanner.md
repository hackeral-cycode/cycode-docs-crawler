# Configure the container security scanner | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner

---

# Configure the container security scanner

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner.md "Edit this page")

Updated on Jul 23, 2025 • Published on Jul 23, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

You have to integrate your container registries so that Cycode can scan the images stored there.

Cycode supports the following container registries:

*   Amazon Elastic Container Registry
    
*   DockerHub
    
*   GitLab Container Registry
    
*   Google Cloud Registry
    
*   JFrog
    
*   Kubernetes
    

Note

Scans of Amazon Elastic Container Registry (ECR) and Google Cloud Registry (GCR) incur some monetary cost on the customer end for each container scanned.

Using Cycode to scan for vulnerabilities may increase your container registry costs, depending on:

*   Your agreement with the relevant third-party registry provider
    
*   Number of scanned assets and frequency
    

To help you control these costs, Cycode enables you to configure the scope (from full registries to specific containers) and frequency (daily, weekly, and continuous monitoring) of the scans, as well as tag-based custom classification of containers.

Important

If your system uses multiple platform images (a single container image that supports multiple architectures), Cycode only scans one platform. The scanner looks first for an amd64 platform. If there isn’t one, the scanner then looks for an arm64 platform.

This approach is meant to reduce unnecessary scanning and assumes that there aren’t major differences between the platforms.

## Configure container scanning [Copied!](#configure-container-scanning "Copy link to this section")

1.  Go to **Settings** > **Modules** > **Container Security** > **Container Scanning**.
    
2.  In the **Enable container scanning** area, toggle container scanning on or off. When enabled, every container registry that you select will be scanned for secrets and vulnerabilities based on the current settings applied.
    
3.  In the **Scan Scope** area, configure the following:
    
    Option
    
    Description
    
    **Scan mode**
    
    Select one:Scan images by tagsScan recently addedScan Kubernetes/ECS imagesFor details about each scan mode, see below.
    
    **Select container repositories**
    
    Check one or more repositories from the list. For repositories that contain multiple sub-repositories, You can drill through and select individual sub-repositories. When you select the required container repositories, Cycode shows the number of repositories that meet the criteria.
    
4.  Click **Save changes**.
    

Important

If you change the scan mode, all the vulnerabilities that were associated with the previous scan mode are deleted.

### Scan images by tags [Copied!](#scan-images-by-tags "Copy link to this section")

When you scan images by tags, you have to configure the **Select container tags** area.

**To configure scanning by tags**

Set up a query that determines the following:

*   Scan containers that have either **All** or **Any** of the following tags.
    
*   Use the following operators to indicate how Cycode should scan based on each tag:
    
    Operator
    
    Description
    
    Equals
    
    Scans images that have this tag.
    
    Not Equals
    
    Scans all images that don’t have this tag.
    
    Contains
    
    Scans images with tags that contain the provided substring.
    
    Not Contains
    
    Scans all images with tags that don’t contain the provided substring.
    

If you configure multiple tags, Cycode scans containers that match the logic for all the tags as an AND function. This means that Cycode only scans containers that meet all the conditions in the query.

Note

By default, Cycodedoesn’t scan all containers if a specific tag is not provided. Cycode periodically scans only the containers that have the `latest` tag from the configured list of repositories that are activated in the **Assets to Scan** section.

### Scan recently added [Copied!](#scan-recently-added "Copy link to this section")

You can scan the last image that was pushed to a repository.

### Scan Kubernetes/ECS images [Copied!](#scan-kubernetesecs-images "Copy link to this section")

You can scan only images that run on Kubernetes or Amazon ECS clusters.

## Configure the scan frequency [Copied!](#configure-the-scan-frequency "Copy link to this section")

1.  In the **Scan frequency** area, you can set how often Cycode scans your containers for newly-added container images.
    
    Option
    
    Description
    
    **Periodically**
    
    Select how often you want Cycode to scan the repositories:  
    • **Daily**  
    • **Weekly**
    
    **Event based**
    
    Cycode scans incoming container images whenever a new event occurs in the repository.
    
2.  To ensure that repositories that have already been scanned for existing vulnerabilities are also protected from newly released vulnerabilities, in the **Recurring scans** area turn on **Enable recurring scans** and configure the scan frequency.
    
    Important
    
    Recurring scans can be implemented daily or weekly. Both options may result in increased costs to your container registry plan, especially the daily scan.
    
3.  Click **Save Changes**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
