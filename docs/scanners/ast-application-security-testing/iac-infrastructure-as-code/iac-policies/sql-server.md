# SQL Server | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/sql-server

---

# SQL Server

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/sql-server.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

GCP SQL Database Instance Detected without SSL for Incoming Connections

This policy checks if the GCP SQL Database instances are configured with SSL for incoming connections. Leveraging SSL for database connections enhances security by encrypting the data during transmission and protecting from unauthorized access or data breaches.

High

GCP

Rego Query

Publicly Accessible Google Cloud SQL Database Instance Detected

This policy checks if any Google Cloud SQL instances are publicly accessible. It is important to ensure that database instances are not publicly accessible to protect sensitive data and prevent unauthorized access.

High

GCP

Public Exposure, Rego Query

Publicly Accesible GCP SQL Database Detected

This policy ensures that no Google SQL Database instances are publicly accessible. Avoiding public exposure of databases limits potential vulnerabilities and promotes better access control and security.

Medium

GCP

Public Exposure, Rego Query

GCP Cloud SQL Database Instance Missing or Disabled Backup Configuration Detected

This policy checks if the backup configuration for all Cloud SQL Database instances on Google Cloud Platform (GCP) is enabled. It is crucial to constantly back up your databases to prevent data loss in the event of accidental deletion or cloud-based failure.

Info

GCP

Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
