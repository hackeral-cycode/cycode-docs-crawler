# Observability | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/observability

---

# Observability

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/observability.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

AWS CMK Rotation Not Enabled

This policy validates whether the rotation for AWS Customer Master Keys (CMK) is enabled. To maintain secure key management, rotating keys helps decrease the potential impact of a compromised key as data encrypted with a new key cannot be accessed with an old key.

High

AWS

Rego Query

AWS KMS Key Rotation Not Enabled

This policy validates whether the rotation for AWS Customer Master Keys (CMK) is enabled. To maintain secure key management, rotating keys helps decrease the potential impact of a compromised key as data encrypted with a new key cannot be accessed with an old key.

High

AWS

Rego Query

AWS KMS Key without Valid Deletion Window Detected

This policy checks if the AWS KMS Key resource has a valid deletion window setting. Implementing a deletion window for KMS keys ensures that accidental deletions can be recovered, thereby providing a protective measure for sensitive data.

High

AWS

Rego Query

Access Log Disabled for AWS Elastic Load Balancer Detected

This policy checks if the access logging is enabled for AWS Elastic Load Balancing. Enabling access logs can aid in troubleshooting and auditing, which is crucial for maintaining secure and compliant operations.

Medium

AWS

Rego Query

Access Log Disabled or Incorrectly Configured for CloudFront Distribution

This policy verifies if the access log is enabled for a CloudFront Distribution and if the log bucket is correctly configured. For maintaining visibility and auditing purposes, access logs should be enabled and correctly configured.

Medium

AWS

Rego Query

Access Logging Settings Not Defined for AWS API Gateway V2 Stage Resource

This policy checks if the access logging settings are defined for the AWS API Gateway V2 Stage. Defining these settings is crucial to monitor and troubleshoot API traffic, they provide valuable insights about requests hitting your API and help to prevent potential security risks.

Medium

AWS

Rego Query

API Gateway Deployment Without API Gateway UsagePlan Associated Detected

This policy checks if an API Gateway Deployment has an API Gateway UsagePlan defined and associated. An API Gateway usage plan is an important aspect of managing and controlling the usage of your APIs, which can ultimately protect your APIs and data from overuse and exploitation.

Medium

AWS

Rego Query

API Gateway V2 Stage Access Logging Settings Not Defined

This policy checks if the access logging settings are defined for the AWS API Gateway V2 Stage. Defining these settings is crucial to monitor and troubleshoot API traffic, they provide valuable insights about requests hitting your API and help to prevent potential security risks.

Medium

AWS

Rego Query

AWS API Gateway Stage without X-Ray Tracing

This policy verifies that X-Ray tracing is enabled in AWS API Gateway stage settings. X-Ray tracing provides insights on the behavior of your applications, making it crucial for optimizing application performance and investigating issues.

Medium

AWS

Rego Query

AWS CloudFormation Stack Notifications Disabled

This policy checks if notifications are enabled for the AWS CloudFormation stack. Enabling this helps in tracking the progress of stack operations and troubleshoot in case of issues by receiving notifications about each stack events.

Medium

AWS

Rego Query

AWS CloudFormation Stack Notifications Not Enabled

This policy checks if notifications are enabled for the AWS CloudFormation stack. Enabling this helps in tracking the progress of stack operations and troubleshoot in case of issues by receiving notifications about each stack events.

Medium

AWS

Rego Query

AWS CloudTrail Multi-Region Setting Disabled

This policy checks if AWS CloudTrail has its Multi-region setting enabled. This is vital for capturing event history for all AWS regions, hence covering all activities for full visibility and governance.

Medium

AWS

Rego Query

AWS CloudTrail Not Integrated with CloudWatch

This policy checks if AWS CloudTrail has been integrated with CloudWatch. Integrating CloudTrail with CloudWatch is essential for effective log monitoring and management, crucial for identifying and acting upon suspicious activities in your AWS environment.

Medium

AWS

Rego Query

AWS CloudWatch Metrics Disabled for API Gateway Method Settings

This policy checks whether the AWS CloudWatch Metrics are enabled for API Gateway Method Settings. It’s important for tracking API usage, monitor performance, and troubleshoot issues.

Medium

AWS

Rego Query

AWS Config Configuration Aggregator All Regions not Enabled

This policy checks if the AWS Config Configuration Aggregator is set to include all regions. Not including all regions could pose a blind spot risk because it limits the visibility of configuration changes made in the infrastructure of the unconfigured regions.

Medium

AWS

Rego Query

AWS Config Configuration Aggregator Not Set to All Regions

This policy checks if the AWS Config Configuration Aggregator is set to include all regions. Not including all regions could pose a blind spot risk because it limits the visibility of configuration changes made in the infrastructure of the unconfigured regions.

Medium

AWS

Rego Query

AWS Elasticsearch instance logs not enabled

This policy verifies that the logging options are properly configured on the AWS Elasticsearch Domain resources. As per the best security practice and to maintain both observability and traceability desired on your AWS Elasticsearch instances, it should have logs enabled.

Medium

AWS

Rego Query

AWS Elasticsearch Slow Logs Feature Disabled or Not Configured

This policy checks if the slow logs feature is enabled in AWS Elasticsearch Service. Slow logs help you understand and optimize slow-running search and indexing requests, which is crucial for maintaining performance and operational efficiency.

Medium

AWS

Rego Query

AWS Elasticsearch Slow Logs Support Not Enabled

This policy checks if the slow logs feature is enabled in AWS Elasticsearch Service. Slow logs help you understand and optimize slow-running search and indexing requests, which is crucial for maintaining performance and operational efficiency.

Medium

AWS

Rego Query

AWS ELB Access Logging Disabled Detected

This policy verifies that AWS Elastic Load Balancing (ELB) has access logging enabled. Enabling access logging for ELB is crucial for error investigations and ensuring the security of your AWS infrastructure.

Medium

AWS

Rego Query

AWS GuardDuty Detector Found Inactive

This policy verifies the activation status of AWS GuardDuty detectors. For effective threat detection and incident response, the GuardDuty service must be enabled in all AWS accounts and regions.

Medium

AWS

Rego Query

AWS SNS Topic without Subscribers Detected

This policy checks if an AWS SNS Topic has subscribers defined. For effective use of SNS topics and to ensure that messages published to the topics reach the intended recipients, each SNS topic must have at least one subscriber.

Medium

AWS

Public Exposure, Rego Query

Disabled AWS GuardDuty Detector Detected

This policy verifies the activation status of AWS GuardDuty detectors. For effective threat detection and incident response, the GuardDuty service must be enabled in all AWS accounts and regions.

Medium

AWS

Rego Query

ELBv2 ALB Access Log Not Enabled in AWS CloudFormation

This policy checks if the access log for ELBv2 Application Load Balancers (ALBs) are enabled. These logs capture detailed information about requests sent to the load balancer, playing a crucial role in maintaining, monitoring and troubleshooting its operations. Therefore, keeping the access log enabled is considered a best practice to uphold security and smooth functioning.

Medium

AWS

Rego Query

Inadequate AWS CloudWatch Log Groups Retention Period Configuration Detected.

This policy checks if AWS CloudWatch Log groups have appropriate retention days specified. It’s crucial to configure retention days for AWS CloudWatch Log Groups according to best practices for efficient log data management and compliance.

Medium

AWS

Rego Query

Logging Disabled for AWS CloudTrail

This policy verifies if the access log is enabled for a CloudFront Distribution and if the log bucket is correctly configured. For maintaining visibility and auditing purposes, access logs should be enabled and correctly configured.

Medium

AWS

Rego Query

Missing CloudTrail Integration with CloudWatch

This policy checks if AWS CloudTrail has been integrated with CloudWatch. Integrating CloudTrail with CloudWatch is essential for effective log monitoring and management, crucial for identifying and acting upon suspicious activities in your AWS environment.

Medium

AWS

Rego Query

Missing SNS Topic Name for AWS CloudTrail

This policy checks if the SNS topic name for AWS CloudTrail is configured. The configuration is necessary for efficiently using Amazon SNS with AWS CloudTrail and ensuring proper event notifications.

Medium

AWS

Rego Query

Multi-Region Disabled in AWS CloudTrail

This policy checks if AWS CloudTrail has its Multi-region setting enabled. This is vital for capturing event history for all AWS regions, hence covering all activities for full visibility and governance.

Medium

AWS

Rego Query

Resources Detected in the Default AWS VPC

This policy checks if the AWS infrastructure is utilizing the default VPC. Utilizing the default VPC for hosting resources is considered a bad practice as it can lead to potential security risks. Resources should be hosted in user-created VPCs for improved control and management.

Medium

AWS

Rego Query

X-Ray Tracing Not Enabled on AWS API Gateway Stage

This policy verifies that X-Ray tracing is enabled in AWS API Gateway stage settings. X-Ray tracing provides insights on the behavior of your applications, making it crucial for optimizing application performance and investigating issues.

Medium

AWS

Rego Query

Azure Log Profile Categories Misconfiguration Detected

This policy checks if the categories of an Azure Log Profile are set to ‘Write’, ‘Delete’, and/or ‘Action’. Azure Log Profiles should be properly configured to capture relevant management events for auditing purposes.

Medium

Azure

Rego Query

Insufficient Retention Period or Disabled Flow Log Detected in Network Watcher

This policy checks if the network watcher flow log retention policy is enabled and set to retain logs for more than 90 days. This helps ensure that network traffic data is available for an adequate period of time for anomaly detection and security analysis.

Medium

Azure

Rego Query

Invalid Retention Policy or Retention Period for Microsoft Insights Log Profile

This policy validates if a retention policy is enabled on Microsoft Insights log profiles and checks if the retention period is set to more than 365 days or to 0 for indefinite retention. Proper log retention is crucial for maintaining historic activity logs, aiding in security audits and detecting anomalous behaviors.

Medium

Azure

Rego Query

SQL Server Database Audit Log Retention Period Is Less Than 90 Days

This policy checks the retention period for Audit Logs in SQL Server Database auditing settings. For enhanced security and compliance, audit logs should be retained for at least 90 days.

Medium

Azure

Rego Query

GCP Cloud Storage Bucket Versioning Disabled

This policy verifies whether versioning is enabled for Google Cloud Storage buckets. Enabling versioning ensures that older versions of objects are retained, providing protection against inadvertent deletes or alterations.

Medium

GCP

Rego Query

AWS ECS Cluster not Enabling Container Insights

This policy checks if container insights are enabled in the AWS ECS cluster. It is important to enable container insights to monitor, troubleshoot and set alarms for your Amazon ECS resources.

Low

AWS

Rego Query

AWS Global Accelerator Flow Logs Disabled

This policy checks if flow logs are enabled for AWS Global Accelerator. Enabling flow logs provides visibility into traffic patterns and performance, and aids in the identification and resolution of security and compliance issues.

Low

AWS

Rego Query

CloudTrail Log File Validation Disabled

This policy checks if log file validation is enabled in the AWS CloudTrail. Enabling log file validation is crucial for maintaining the integrity of CloudTrail logs, auditing security events and preventing unauthorized modifications.

Low

AWS

Rego Query

Control Plane Logging Is Disabled for Amazon EKS Cluster

This policy checks for the activation of control plane logging for Amazon Elastic Kubernetes Service (EKS) clusters. Ensuring logging capabilities is crucial for identifying and investigating security incidents, troubleshooting issues, and auditing activities within an Amazon EKS cluster

Low

AWS

Rego Query

Disabled or Missing CloudTrail Log File Validation in AWS Configuration

This policy checks if log file validation is enabled in the AWS CloudTrail. Enabling log file validation is crucial for maintaining the integrity of CloudTrail logs, auditing security events and preventing unauthorized modifications.

Low

AWS

Rego Query

Missing or Incomplete AWS DocumentDB Cluster Logging Configuration

This policy verifies that DocumentDB (MongoDB-compatible) clusters have auditing and profiling logs enabled. Logging allows tracking and maintaining a record of activities that were performed. It’s a critical component of AWS resource management and security.

Low

AWS

Rego Query

AWS EC2 Instance Detailed Monitoring Disabled

This policy checks if the EC2 instances have detailed monitoring enabled. Detailed monitoring provides data in 1-minute periods which allows for more granular observability of the instance performance and enhances the ability to respond to changes in usage patterns.

Info

AWS

Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
