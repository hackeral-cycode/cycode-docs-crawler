# Backup | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/backup

---

# Backup

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/backup.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

AWS CloudFormation StackSet Instance Retention Disabled Detected

This policy checks if the ‘retain\_stack’ feature in AWS CloudFormation StackSet instance is enabled. Retaining the stack is crucial for preserving the stack and its associated resources during resource destruction, thus assuring business continuity and preventing accidental data loss.

Medium

AWS

Data Reliability, Rego Query

AWS RDS Automatic Backup Not Configured

This policy checks whether AWS RDS instances have automatic backups configured. Keeping backups for your databases is crucial for maintaining data security in case of any accidental deletion or systemic failure.

Medium

AWS

Data Reliability, Rego Query

AWS RDS DB Instance Without Deletion Protection Detected

This policy checks if the AWS RDS Database Instance has deletion protection enabled. For secure management of database resources and to prevent accidental deletions, the deletion protection attribute must be set to true.

Medium

AWS

Data Reliability, Rego Query

AWS RDS Instance without Multi-AZ Deployment Detected

This policy verifies whether the AWS RDS instances have a Multi-AZ deployment enabled. Using Multi-AZ deployment for RDS instances increases fault tolerance in case of a database problem and enhances the availability of databases.

Medium

AWS

Data Reliability, Rego Query

ElastiCache Redis Cluster Without Backup Detected

This policy verifies that an ElastiCache Redis cluster has a ‘snapshot\_retention\_limit’ set higher than 0. This is crucial to ensure that backup snapshots are retained, thereby aiding in data recovery in case of any unforeseen data loss.

Medium

AWS

Rego Query

Missing or Invalid Backup Settings for RDS Instance

This policy checks whether AWS RDS instances have automatic backups configured. Keeping backups for your databases is crucial for maintaining data security in case of any accidental deletion or systemic failure.

Medium

AWS

Data Reliability, Rego Query

Microsoft Key Vault Recoverability Settings Misconfiguration Detected

This policy checks if the ’enableSoftDelete’ and ’enablePurgeProtection’ properties are set to true for Microsoft Key Vault instances. Enabling these properties ensures that vaulted items are recoverable in case of accidental deletion, thus maintaining the integrity and availability of sensitive data.

Low

Azure

Data Reliability, Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
