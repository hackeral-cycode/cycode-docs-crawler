# Cloud Security policies | Cycode Docs

Source: https://docs.cycode.com/scanners/cloud-security/cloud-security-policies

---

# Cloud Security policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/cloud-security/cloud-security-policies.md "Edit this page")

Updated on Jul 18, 2024 • Published on Jul 18, 2024

* * *

Cloud Security policies analyze your cloud configurations. The **Cloud Security scanner** assesses cloud environments to identify and mitigate security risks. This scanner is vital for ensuring the security of cloud-based resources, providing continuous monitoring and evaluation of cloud configurations, permissions, and deployments to prevent unauthorized access and data breaches.

## Best Practices [Copied!](#best-practices "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Ensure AWS config is enabled in all regions

High

AWS

AWS DB Cluster Untagged

Medium

AWS

Tags

AWS DB Instance Untagged

Medium

AWS

Tags

AWS EC2 Image Untagged

Medium

AWS

Tags

AWS EC2 Instance Exposed Publicly

Medium

AWS

Public Exposure

AWS EC2 Instance Untagged

Medium

AWS

Tags

AWS EC2 Volume Untagged

Medium

AWS

Tags

## Database Services [Copied!](#database-services "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Ensure that Azure SQL server ‘Auditing’ Retention is ‘greater than 90 days

Ensure that Azure SQL server ‘Auditing’ Retention is ‘greater than 90 days

Medium

AWS

Data Reliability

Ensure that the “log\_checkpoints” database flag for Cloud SQL PostgreSQL instance is set to “on”

Medium

GCP

Ensure that the “log\_disconnections” database flag for Cloud SQL PostgreSQL instance is set to “on”

Medium

GCP

Ensure that the “log\_lock\_waits” database flag for Cloud SQL PostgreSQL instance is set to “on”

Medium

GCP

Ensure that the “log\_min\_duration\_statement” database flag for Cloud SQL PostgreSQL instance is set to “-1” (disabled)

Medium

GCP

Ensure that the “log\_min\_messages” database flag for Cloud SQL PostgreSQL instance is set appropriately

Medium

GCP

Ensure that the “log\_temp\_files” database flag for Cloud SQL PostgreSQL instance is set to ‘0’ (on)

Medium

GCP

## Drift Detection [Copied!](#drift-detection "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Ensure no configuration change (drift) between resource actual configuration and its expected IaC configuration

Finds any delta (i.e., drift) between your configuration files and production configuration, which can be due to debugging / deployment / or other actions taken on these environments

Medium

AWS, Azure, GCP

Ensure no configuration change (drift) between the resource terraform state and the matching cloud resource

Finds any delta (i.e., drift) between the resource terraform state and the matching cloud resource

Medium

AWS

## Storage [Copied!](#storage "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

AWS S3 Bucket PublicAccessBlock Not Set

Medium

AWS

Public Exposure

## Virtual Machines [Copied!](#virtual-machines "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Ensure OS login is enabled for a Project

Enabling OS login binds SSH certificates to IAM users and facilitates effective SSH certificate management.

High

GCP

Permissions

Infected file detected in cloud resource

Enable this policy to be notified when infected files are detected in cloud resources.

High

AWS

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
