# Logging | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/logging

---

# Logging

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/logging.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

S3 bucket access logging is disabled on the CloudTrail S3 bucket

High

AWS

GCP Cloud Storage Bucket Without Logging

This policy checks if logging is enabled in GCP Cloud Storage Buckets for monitoring and log analysis. Enabling logging in storage buckets is crucial for auditing and finding potential security threats or anomalies.

High

GCP

Rego Query

Amazon MQ Broker Logging is Disabled

This policy checks if the AWS MQ Broker has logging enabled. Logging is necessary for auditing and general performance analysis, contributing to secure and efficient operations.

Medium

AWS

Rego Query

API Gateway Deployment Without Access Log Setting Detected

This policy verifies that the API Gateway has access log setting defined when it’s attached to an API Gateway stage as this provides valuable insights for troubleshooting, understanding usage patterns, and gaining a perspective of the API’s data flow.

Medium

AWS

Rego Query

AWS CloudTrail Multi-Region Logging Not Activated

This policy validates if the multi-region trail setting in AWS CloudTrail is enabled. The multi-region trail setting allows for the logging of API calls from all AWS regions. This ensures comprehensive visibility and control over activities in your AWS account, aiding in detecting and responding to security incidents more efficiently.

Medium

AWS

Rego Query

AWS CloudTrail Multi-Region Not Enabled

This policy validates if the multi-region trail setting in AWS CloudTrail is enabled. The multi-region trail setting allows for the logging of API calls from all AWS regions. This ensures comprehensive visibility and control over activities in your AWS account, aiding in detecting and responding to security incidents more efficiently.

Medium

AWS

Rego Query

AWS CloudTrail Not Integrated with CloudWatch Detected

This policy checks if AWS CloudTrail logs are integrated with CloudWatch. This is important to ensure effective monitoring, logging and alerting mechanisms are in place for AWS account activity tracking.

Medium

AWS

Rego Query

AWS CloudWatch Logs for APIs is not enabled

This policy checks if CloudWatch Logs for API Gateway are enabled to identify potential security incidents, faults and performance trends. Enabling CloudWatch Logs for API Gateway creates a near real-time stream of system events that describe changes in AWS resources.

Medium

AWS

Rego Query

AWS MQ Broker Logging Disabled

This policy checks if the AWS MQ Broker has logging enabled. Logging is necessary for auditing and general performance analysis, contributing to secure and efficient operations.

Medium

AWS

Rego Query

CloudTrail Log File Validation Lack or Disabled

This policy checks if CloudTrail log file validation is enabled. Validation of log files provides an additional layer of security by detecting changes to log files after they are delivered. See AWS documentation for more details.

Medium

AWS

Rego Query

CloudTrail not Integrated with CloudWatch Detected

This policy checks if AWS CloudTrail logs are integrated with CloudWatch. This is important to ensure effective monitoring, logging and alerting mechanisms are in place for AWS account activity tracking.

Medium

AWS

Rego Query

CloudWatch Logging Disabled for Route53 Hosted Zones

This policy checks whether logging is enabled for Amazon Route53 Hosted Zones via AWS CloudWatch. It is important to monitor DNS query logs to secure hosted zones and track changes made to the DNS records by spotting unauthorized access or anomalies.

Medium

AWS

Rego Query

CloudWatch Logging Disabled on Route53 Hosted Zone

This policy checks whether logging is enabled for Amazon Route53 Hosted Zones via AWS CloudWatch. It is important to monitor DNS query logs to secure hosted zones and track changes made to the DNS records by spotting unauthorized access or anomalies.

Medium

AWS

Rego Query

Disabled MSK Cluster Logging Detected

This policy checks if logging is enabled in the configuration of Amazon Managed Streaming for Kafka (MSK) Clusters. For auditing purposes and ensuring compliance with security best practices, logging should be enabled.

Medium

AWS

Rego Query

Disabled Rotation for AWS Customer Master Keys Detected

This policy checks if rotation is enabled for Customer Master Keys (CMK) in AWS. Rotation of CMKs is necessary for better security management and to avoid potential security risks, hence, it must be enabled.

Medium

AWS

Rego Query

Logging Not Enabled for Redshift Cluster

This policy verifies that logging is enabled for Redshift Clusters to ensure visibility of events for security analysis and operational troubleshooting.

Medium

AWS

Rego Query

Redshift Cluster Logging Disabled

This policy verifies that logging is enabled for Redshift Clusters to ensure visibility of events for security analysis and operational troubleshooting.

Medium

AWS

Rego Query

Azure Kubernetes Service Monitoring Logging Disabled Detected

This policy checks if Azure Kubernetes Service has logging to Azure Monitoring enabled. Monitoring logs in Azure Kubernetes Service is crucial for maintaining operational visibility and proactively detecting any security-related anomalies.

Medium

Azure

Rego Query

Azure MSSQL Server with Auditing Disabled Detected

This policy verifies that auditing is enabled on Azure MSSQL Servers to ensure that there is a comprehensive set of audit and log data to report and alert on unusual and potentially harmful attempts to access data. Enabling auditing is a critical aspect of security best practices.

Medium

Azure

Rego Query

Azure PostgreSQL Database ’log\_retention’ Parameter is Off

This policy verifies if the ’log\_retention’ server parameter is set to ‘ON’ for an Azure PostgreSQL Database. Activating this function ensures that the database system maintains logs, which are crucial for monitoring, troubleshooting, and ensuring database security

Medium

Azure

Rego Query

Azure SQL Server Database Auditing not Enabled

This policy verifies that auditing is enabled on Azure MSSQL Servers to ensure that there is a comprehensive set of audit and log data to report and alert on unusual and potentially harmful attempts to access data. Enabling auditing is a critical aspect of security best practices.

Medium

Azure

Rego Query

Incorrect Azure Storage Account Logging Permissions Detected

This policy verifies that logging permissions for the queue service on Azure Storage Accounts are correctly set up. Proper logging is necessary to monitor and troubleshoot services, and permissions should be set appropriately to ensure only authorized entities can read, write, or delete these logs.

Medium

Azure

Rego Query

Logging Disabled for GCP Compute Subnetwork Resource

This policy validates if logging is enabled for Google Compute Subnetwork resources. Enabling logging ensures visibility and auditability of actions taken on these resources, which is a standard best practice for maintaining security compliance.

Medium

GCP

Rego Query

Missing Required AWS EKS Cluster Log Types Detected

This policy verifies if all required control plane log types are enabled for AWS EKS clusters. Ensuring comprehensive logging for the control plane is key in maintaining an insight into cluster activities and facilitates timely detection and troubleshooting of issues, failures or security threats.

Low

AWS

Rego Query

PostgreSQL Log\_Checkpoints Setting Not Configured Correctly

This policy checks if the parameter ’log\_checkpoints’ on Azure PostgreSQL servers is set to ‘ON’. This parameter significantly influences database stability and data durability. Setting this parameter to ‘ON’ can effectively safeguard the database from crashes and should be maintained for optimal database configuration.

Low

Azure

Rego Query

Unoptimized PostgreSQL Server Log Checkpoint Configuration Detected

This policy checks if the parameter ’log\_checkpoints’ on Azure PostgreSQL servers is set to ‘ON’. This parameter significantly influences database stability and data durability. Setting this parameter to ‘ON’ can effectively safeguard the database from crashes and should be maintained for optimal database configuration.

Low

Azure

Rego Query

AWS CloudTrail Logging Disabled

This policy checks if logging is enabled for AWS CloudTrail. Logging provides important security and auditing capabilities and must be enabled for secure management and monitoring.

Info

AWS

Rego Query

AWS CloudTrail Logging Disabled Detected

This policy checks if logging is enabled for AWS CloudTrail. Logging provides important security and auditing capabilities and must be enabled for secure management and monitoring.

Info

AWS

Rego Query

S3 Bucket Server Access Logging Disabled in CloudFormation Template

This policy checks if logging is enabled for AWS S3 buckets. Logging should be enabled to ensure tracking and investigation of any issues related to data access and security incidents.

Info

AWS

Public Exposure, Permissions, Rego Query

S3 Bucket Without Logging Detected

This policy checks if logging is enabled for AWS S3 buckets. Logging should be enabled to ensure tracking and investigation of any issues related to data access and security incidents.

Info

AWS

Public Exposure, Permissions, Rego Query

VPC without Associated Flow Log Detected

This policy checks if AWS VPC resources have an associated Flow Log. Flow Logs enable capturing network traffic for a subnet or VPC, which is essential for monitoring and troubleshooting connectivity issues or unwanted traffic patterns.

Info

AWS

Rego Query

’log\_connections’ in Microsoft.DBforPostgreSQL/servers/configurations is not set to ‘on’

This policy verifies if the ’log\_connections’ server parameter for an Azure PostgreSQL Database is set to ‘ON’. Enabling this setting ensures that all connection attempts to the database are logged, thereby enhancing the visibility and auditability of database activities.

Info

Azure

Rego Query

Azure Key Vault Auditing Disabled or not Targetted correctly

This policy verifies if auditing is enabled for the Azure Key Vault. Auditing is crucial for monitoring activity and detecting potential security threats. Without enabled auditing, activities within the Key Vault could go unnoticed, compromising security.

Info

Azure

Rego Query

Azure PostgreSQL ’log\_disconnections’ Parameter Not Set to ‘ON’

This policy checks if the ’log\_disconnections’ setting is turned on in the Azure PostgreSQL configuration. This is crucial for maintaining security standards as it logs any disconnections in the database, enabling efficient audit trails and anomaly detection.

Info

Azure

Rego Query

Azure PostgreSQL Database Log Connections Parameter Not Set to ‘ON’

This policy verifies if the ’log\_connections’ server parameter for an Azure PostgreSQL Database is set to ‘ON’. Enabling this setting ensures that all connection attempts to the database are logged, thereby enhancing the visibility and auditability of database activities.

Info

Azure

Rego Query

Azure SQL Server Audit Retention Less Than 90 Days Detected

This policy audits the retention period configuration for Azure SQL Server. It ensures that the audit retention days specified in the extended auditing policy is more than 90 days; this helps in maintaining a comprehensive audit trail and aids in security and compliance.

Info

Azure

Rego Query

Azure SQL Server Auditing Disabled

This policy verifies that auditing is enabled on Azure SQL Servers. Having auditing enabled is important as it provides insights into database activities and potential security violations for forensic analysis and compliance audits.

Info

Azure

Rego Query

Inadequate PostgreSQL Database Server Log Retention Period Detected

This policy checks if the PostgreSQL Database Server retains logs for less than 3 days. For proper auditing and debugging, the logs need to be retained for a minimum of 3 days.

Info

Azure

Rego Query

Logging for Azure Key Vault is Disabled

This policy verifies that logging is enabled for Azure Key Vault. Maintaining an audit trail of access and other activities can help in troubleshooting and ensuring that the key vault is used correctly and securely.

Info

Azure

Rego Query

PostgreSQL ’log\_duration’ Parameter Not Set to ‘ON’

This policy validates that the ’log\_duration’ server parameter is set to ‘ON’ for Azure PostgreSQL Database. It is crucial to have this setting enabled for proper logging and monitoring.

Info

Azure

Rego Query

GCP IAM Audit Logging Configuration Defective

This policy checks whether all necessary audit log configurations are set for GCP IAM roles, including the logging of data reads, data writes, and admin reads. This policy also verifies that no members have been exempted. Correct audit logging configuration is critical for monitoring and identifying potentially malicious activity within the GCP IAM roles.

Info

GCP

Rego Query

Stackdriver Logging service is disabled for GCP Kubernetes Engine Clusters

This policy checks if Stackdriver logging service is enabled for Kubernetes Engine Clusters on GCP. Stackdriver logging service is essential for monitoring, troubleshoot, and set alerts for your GKE environment.

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
