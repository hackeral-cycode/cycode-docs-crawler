# Requirements | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/requirements

---

# Requirements

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/requirements/_index.md "Edit this page")

Updated on Apr 14, 2024 • Published on Mar 28, 2024

* * *

🚧 Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

This page covers all the requirements for the Cycode Enterprise Server (aka on-premise), regardless of what installation type is being used.

## Basic Requirements [Copied!](#basic-requirements "Copy link to this section")

The following are the main requirements:

*   Kubernetes v1.22-v1.24
    
*   Admin access to the Kubernetes environment
    
*   [kubectl](https://kubernetes.io/docs/tasks/tools/)
    

## Installation Type Requirements [Copied!](#installation-type-requirements "Copy link to this section")

#### [AWS](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html) [Copied!](#aws "Copy link to this section")

#### [GCP](https://cloud.google.com/sdk/docs/install) [Copied!](#gcp "Copy link to this section")

#### [Azure](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) [Copied!](#azure "Copy link to this section")

## YAML Configuration File [Copied!](#yaml-configuration-file "Copy link to this section")

A YAML configuration file is required for all Cycode installations. This is a file that is provided by Cycode and can be found in this documentation.

For more details on this configuration file, see [this reference page](/cycode-enterprise-server/configure-your-on-premise-installation) .

## Hardware Requirements [Copied!](#hardware-requirements "Copy link to this section")

The sizing of the Kubernetes cluster will mostly depend on the size and number of the repositories being integrated (focused mainly on the number of commits). The minimum requirements for the Cycode installation can be seen below.

Note

The following requirements are based on the number commits found in all the organizations expected to be integrated into Cycode. These numbers reflect the resources required for every 1000 commits.

Hardware Resource

Resource Value

CPU/Node

16

Memory/Node

64 GB of RAM

Minimum Ephemeral Disk Space

400 GB SSD

Persistent Volumes

1 TB

Number of Nodes

4

## Network Requirements [Copied!](#network-requirements "Copy link to this section")

The integrations and tools being integrated into Cycode will change the network requirements for the installation, but the following must be met (at the minimum):

*   `*.frontegg.com` - used for user authentication
    
*   `us-east1-docker.pkg.dev/cycode-artifacts` - used to pull the Cycode installation documents
    
*   `api.{{environment}}.{{domain}}`
    
*   `app.{{environment}}.{{domain}}`
    
*   `monitor.{{environment}}.{{domain}}`
    
*   All Pod IPs in the cluster (usually a CIDR tied to these)
    

### Load Balancer Setups [Copied!](#load-balancer-setups "Copy link to this section")

Below are a list of load balancer setups that are supported:

*   [Internal Load Balancer Only](/cycode-enterprise-server/requirements/internal-load-balancer-only)
    
*   [External Load Balancer Only](/cycode-enterprise-server/requirements/external-load-balancer-only)
    

### S3 Storage Solution Alternatives [Copied!](#s3-storage-solution-alternatives "Copy link to this section")

We support the use of the following S3 compatible storage systems with Cycode:

*   Minio (Default Method)
    
*   AWS S3 Bucket
    
*   Google Cloud Storage Bucket
    

### Certificate Guides [Copied!](#certificate-guides "Copy link to this section")

To learn more about what is required for the certificates for Cycode, visit [this page](/cycode-enterprise-server/requirements/ssl-requirements) for more details.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
