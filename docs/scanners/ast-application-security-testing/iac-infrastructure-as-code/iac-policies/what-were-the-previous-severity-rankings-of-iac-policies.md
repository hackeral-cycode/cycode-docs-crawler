# What were the previous severity rankings of IaC policies? | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/what-were-the-previous-severity-rankings-of-iac-policies

---

# What were the previous severity rankings of IaC policies?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/what-were-the-previous-severity-rankings-of-iac-policies.md "Edit this page")

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

As part of our continuous monitoring and updates and according to a new assessment we conducted, we’ve decided to refresh some of the default severities of the infrastructure as code (IaC) security policies to better reflect the impact of those policies and to provide a more granular prioritization. When the new severity is applied to the policy, this will automatically update any violations detected under that policy to the new severity level. Of course, if you’ve manually changed a policy’s severity, this change will **not** override your changes. Any future manual changes you make will also be maintained.

As part of this update, we also revamped the names of the policies to make them more clear and concise, as well as their violation display name, remediation steps and additional data. Ultimately the goal of this update is to provide a more actionable and useful set of security checks for IaC users.

This update will go into effect during November 2023, in a gradual manner, and will contain the following:

*   New policy names, descriptions and severities will be reflected in the Policies page of the Cycode console.
*   Existing violations of these policies will also get the new names, descriptions, and severities retroactively. They will also contain the new remediation data that will now consist of actionable steps as well as relevant links for additional relevant knowledge.
*   Users who have manually changed policy severities -your changes will be applied to those policies.

Note that this change is **not revertible**.

## Additional Information [Copied!](#additional-information "Copy link to this section")

ALL IaC violations will have remediation data after the changes are applied.

*   92 high severity policies will receive a new Medium severity.
*   4% of the policies were removed due to changes in the IaC framework that no longer require these checks

The table below contains the set of policies with their pre- and post-change names and severities. Note that policies that support multiple IaC frameworks will appear more than once (the violation display names will become IaC framework-dependent after these changes).

Old Policy Name

New Policy Name

IaC framework

Old Severity

New Severity

Violation Display Name

Check resources to ensure they configure the seccomp default profile properly

Kubernetes Seccomp Profile Configuration

Kubernetes

High

Medium

Inadequate Seccomp Profile Configuration Detected

Check resources to ensure they configure the seccomp default profile properly

Kubernetes Seccomp Profile Configuration

Terraform

High

Medium

Improperly Configured Seccomp Profile Detected in Kubernetes Resources

Ensure that secure parameters are not hardcoded

\-

Arm

Medium

Medium

\-

AKS Private Cluster Disabled

Private Communication Required for Azure Kubernetes Service (AKS) API

Terraform

High

High

Azure Kubernetes Service (AKS) API Exposed Publicly

Ensure containers not sharing the host network namespace

Kubernetes Container Host Network Namespace Sharing Configuration

Kubernetes

High

High

Host Network Namespace Sharing Detected in Kubernetes Containers

Ensure SQL Server Database has alerts enabled

\-

Arm

Medium

Medium

\-

IAM Group Without Users

\-

Terraform

Low

Low

\-

Ensure Storage Blob Service Container is not publicly accessible

Public Access Restriction on Storage Blob Service Containers

Arm

High

High

Azure Storage Blob Service Container Publicly Accessible

DynamoDB Table Point In Time Recovery Disabled

\-

Terraform

Info

Info

\-

Ensure stack policy is configured

\-

Terraform

Medium

Medium

\-

Ensure ‘Enable connecting to serial ports’ is not enabled for VM Instance

GCP VM Instance Serial Ports Accessibility Policy

Terraform

High

Medium

Serial Ports Accessibility Detected in GCP VM Instance

Ensure AWS password policy doesn’t include unchangeable passwords

AWS IAM Account Password Policy - User Change Capability

Terraform

High

Medium

AWS IAM Account Password Policy Does Not Allow Password Changes

Ensure that a valid deletion window has been defined for the KMS key

AWS KMS Key Deletion Window Configuration

Terraform

High

High

AWS KMS Key without Valid Deletion Window Detected

Ensure that no role or cluster role is bound to a default service

Kubernetes: Role Binding to Default Service Account

Kubernetes

High

High

Kubernetes Role or Cluster Role Bound to Default Service Account

Ensure that no role or cluster role is bound to a default service

Kubernetes: Role Binding to Default Service Account

Terraform

High

High

Role Binding to Default Service Account Detected in Kubernetes

Redis Cache is not configured with security and operational updates

\-

Terraform

Medium

Medium

\-

Restrict the number of hosts allowed to access the Redis Cache

\-

Terraform

Medium

Medium

\-

Specify memory limits

\-

Kubernetes

Medium

Medium

\-

Specify memory limits

\-

Terraform

Medium

Medium

\-

App Service Authentication Disabled

\-

Terraform

Info

Info

\-

Protect access to back-end resources through API

\-

Terraform

Low

Low

\-

Ensure rotation for customer created CMKs is enabled

AWS Customer Master Keys Rotation Configuration

CloudFormation

High

Medium

Disabled Rotation for AWS Customer Master Keys Detected

Allow specific ports in the EC2 network ACL protocols

\-

CloudFormation

Medium

Medium

\-

Checks if any static websites are hosted on buckets

AWS S3 Static Website Hosting Status

Terraform

High

Medium

Static Website Hosting Detected on AWS S3 Bucket

Ensure IAM DB authentication is set

AWS RDS Database Instance with IAM Authentication Enabled

CloudFormation

High

Medium

IAM Database Authentication Not Enabled

Ensure that logging for Azure KeyVault is ‘Enabled’

Azure Key Vault Logging State

Terraform

High

Remove

Logging for Azure Key Vault is Disabled

Ensure that SQS has KMS master key defined

\-

CloudFormation

Medium

Medium

\-

Ensure that SQS has KMS master key defined

\-

Terraform

Medium

Medium

\-

Enable private Kubernetes clusters

GCP Private Cluster Configuration in Kubernetes Clusters

Terraform

High

High

GCP Kubernetes Clusters Without Private Clusters Enabled Detected

Enable the EMR security configuration for at-rest and in-transit encryption

EMR SecurityConfiguration Encryption Configuration

CloudFormation

High

Medium

EMR SecurityConfiguration Encryption Not Properly Configured

Ensure that the AWS IAM password policy has a uppercase character

\-

CloudFormation

Medium

Medium

\-

Ensure that the AWS IAM password policy has a uppercase character

\-

Terraform

Medium

Medium

\-

Ensure shell script is encrypted

\-

Terraform

Medium

Medium

\-

Check the firewall configuration for access to Redis from Azure

Azure Redis Firewall Rule Configuration

Terraform

High

High

Azure Redis Firewall Rule Allowing Unrestricted Access Detected

Ensure access keys are rotated every 90 days or less

\-

CloudFormation

Medium

Medium

\-

Ensure CloudTrail trails are integrated with CloudWatch Logs

\-

Terraform

Medium

Medium

\-

Ensure CloudTrail trails are integrated with CloudWatch Logs

\-

CloudFormation

Medium

Medium

\-

Ensure S3 bucket website host is enabled

\-

CloudFormation

Medium

Medium

\-

Ensure S3 bucket website host is enabled

\-

Terraform

Medium

Medium

\-

Enable default encryption on Amazon Elastic Block Store (EBS)

EBS Default Encryption Configuration

Terraform

High

Medium

EBS Default Encryption Not Enabled

Limit access to ECR Network ACL

\-

Terraform

Medium

Medium

\-

Elasticsearch Log Disabled

\-

Terraform

Medium

Medium

\-

Ensure logging is enabled for RedShift Cluster

\-

CloudFormation

Medium

Medium

\-

Ensure logging is enabled for RedShift Cluster

\-

Terraform

Medium

Medium

\-

Ensure default network access rule for Storage Accounts is set to deny

Azure Storage Account Default Network Access Rule Configuration

Arm

High

Medium

Insecure Network Access Default Setting Detected on Microsoft Storage Account

Ensure default network access rule for Storage Accounts is set to deny

Azure Storage Account Default Network Access Rule Configuration

Terraform

High

Medium

Azure Storage Account Network Access Configured to ‘Allow’

Ensure that the PasswordResetRequired property is enabled in the User Login Profile

\-

CloudFormation

Medium

Medium

\-

Ensure that the CloudFront Protocol uses version TLS 1.2 or higher

AWS CloudFront Distribution Minimum Protocol Configuration

CloudFormation

High

Medium

CloudFront Distribution Without Minimum Protocol TLS 1.2 Detected

Ensure that the CloudFront Protocol uses version TLS 1.2 or higher

AWS CloudFront Distribution Minimum Protocol Configuration

Terraform

High

Medium

Insecure Minimum Protocol version for AWS CloudFront Distribution Detected

Enable automatic minor upgrades

\-

CloudFormation

Medium

Medium

\-

Ensure that Cloud Storage bucket is not anonymously or publicly accessible

GCP Cloud Storage Anonymous or Publicly Accessible Buckets

Terraform

High

High

Publicly Accessible GCP Cloud Storage Bucket Detected

Ensure that the EC2 instance does not have a public IP

\-

Terraform

Medium

Medium

\-

Ensure that SNS Topic is not publicly accessible for subscription

\-

Terraform

Medium

Medium

\-

Ensure capabilities are limited for a container

\-

Kubernetes

Medium

Medium

\-

Minimize the admission of privileged containers

Kubernetes Container Privilege Configuration

Kubernetes

High

Medium

Kubernetes Container Running in Privileged Mode Detected

Minimize the admission of privileged containers

Kubernetes Container Privilege Configuration

Terraform

High

Medium

Detected Kubernetes Container with Unwanted Privileged Status

Ensure Storage logging is enabled for Queue service for read, write and delete requests

\-

Terraform

Medium

Medium

\-

Ensure Storage logging is enabled for Queue service for read, write and delete requests

\-

Arm

Medium

Medium

\-

Minimize the admission of root containers

K8s Container Running As Root Check

Kubernetes

High

High

Containers Running as Root Detected

Minimize the admission of root containers

K8s Container Running As Root Check

Terraform

High

High

Kubernetes Pod Security Policy Allowing Root Privileges Detected

Container Host Pid Is True

\-

Kubernetes

Medium

Medium

\-

Container Host Pid Is True

\-

Terraform

Medium

Medium

\-

Authentication Without MFA

AWS IAM User Authentication With MFA

Terraform

High

High

MFA Not Enforced for AWS IAM User Authentication

Ensure all S3 buckets employ encryption-at-rest

AWS S3 Bucket Server Side Encryption Configuration

CloudFormation

High

Remove

AWS S3 Bucket Without Server-Side Encryption Detected

Ensure all S3 buckets employ encryption-at-rest

AWS S3 Bucket Server Side Encryption Configuration

Terraform

High

Remove

AWS S3 Buckets Without Defined Server Side Encryption Detected

Google Compute Network Using Firewall Rule that Allows All Ports

\-

Terraform

Medium

Medium

\-

Ensure that IAM users are not assigned the Service Account User or Service Account Token Creator roles at project level

GCP Project IAM Member Service Account Permissions Configuration

Terraform

High

High

Detected serviceAccountTokenCreator or serviceAccountUser role(s) for a GCP Project IAM Member Service Account

Ensure that the S3 Bucket does not allow the Delete action from all principals

S3 Bucket Delete Actions From All Principals

CloudFormation

High

High

S3 Bucket Allows Delete Actions From All Principals

Ensure that the S3 Bucket does not allow the Delete action from all principals

S3 Bucket Delete Actions From All Principals

Terraform

High

High

S3 Bucket Policy Allows Delete Action From All Principals Detected

Ensure that a single port is defined for the AWS GameLift Fleet EC2

\-

CloudFormation

Medium

Medium

\-

Minimize the admission of containers with capabilities assigned #2

Kubernetes Container Capabilities Assignment Configuration

Kubernetes

High

High

Excessive Capabilities Assigned to Kubernetes Containers

Set the API endpoint type in the Gateway to PRIVATE

\-

CloudFormation

Medium

Medium

\-

Set the API endpoint type in the Gateway to PRIVATE

\-

Terraform

Medium

Medium

\-

Ensure that S3 Buckets are configured with ‘Block public access

AWS S3 Bucket Public Access Restriction

CloudFormation

High

High

S3 Bucket Allows Actions From All Principals

Ensure that S3 Buckets are configured with ‘Block public access

AWS S3 Bucket Public Access Restriction

Terraform

High

High

Detected AWS S3 Bucket without Public Access Restriction

Ensure Container CPU Requests are Equal to Its Limits

\-

Kubernetes

Low

Remove

\-

Ensure that the MQ broker is not publicly accessible

\-

CloudFormation

Medium

Medium

\-

Ensure that the MQ broker is not publicly accessible

\-

Terraform

Medium

Medium

\-

Define liveness probes

\-

Kubernetes

Medium

Medium

\-

Define liveness probes

\-

Terraform

Medium

Medium

\-

Ensure that CloudTrail log file validation is enabled

\-

CloudFormation

Low

Low

\-

Ensure that CloudTrail log file validation is enabled

\-

Terraform

Low

Low

\-

Ensure that IAM policies are applied to groups

\-

CloudFormation

Low

Low

\-

Ensure that IAM policies are applied to groups

\-

Terraform

Low

Low

\-

RDS must not be defined with public interface, which means the attribute ‘PubliclyAccessible’ must be set to false.

AWS RDS Public Interface Configuration

CloudFormation

High

High

Publicly Accessible RDS Instance Detected

Ensure RedShift KMS CMK is set

\-

CloudFormation

Medium

Medium

\-

Prefer using secrets as files over secrets as environment

Kubernetes Container Secrets as Environment Variables Configuration

Kubernetes

High

High

Secrets Detected as Environment Variables in Kubernetes Containers

Prefer using secrets as files over secrets as environment

Kubernetes Container Secrets as Environment Variables Configuration

Terraform

High

High

Secrets Detected as Environment Variables in Kubernetes Containers

Limit the access scope to AWS Relational Database Service (RDS)

\-

CloudFormation

Medium

Medium

\-

Limit the access scope to AWS Relational Database Service (RDS)

\-

Terraform

Medium

Medium

\-

Ensure server parameter ’log\_retention\_days’ is greater than 3 days for PostgreSQL Database Server

Azure PostgreSQL Database Server Log Retention Period

Terraform

High

Remove

Inadequate PostgreSQL Database Server Log Retention Period Detected

Enable logging to Azure Monitoring from Azure Kubernetes Service

\-

Arm

Medium

Medium

\-

Ensure logging is enabled for MSK cluster

\-

Terraform

Medium

Medium

\-

EMR Without VPC

\-

Terraform

Low

Low

\-

Check the firewall configuration for access to Redis

Azure Redis Cache Firewall Configuration

Terraform

High

High

Redis Firewall Rule Allowing Unrestricted Access Detected

Ensure that the S3 buckets do not allow public policies

Public Policy Permission for AWS S3 Bucket

Terraform

High

High

Public Policy Configuration Missing or Misconfigured for AWS S3 Bucket

Ensure that Resource Locks are set for mission critical Azure resources

Azure Container Registry Lock Configuration

Terraform

High

Medium

Azure Container Registry without Associated Lock Detected

Ensure objects are not using deprecated version of API

Kubernetes Object API Version Deprecation Check

Kubernetes

High

Medium

Deprecated API Version Detected in Kubernetes Object

CloudTrail Not Integrated With CloudWatch

\-

CloudFormation

Medium

Medium

\-

CloudTrail Not Integrated With CloudWatch

\-

Terraform

Medium

Medium

\-

App Service Not Using Latest TLS Encryption Version

Azure App Service TLS Encryption Version

Terraform

High

Medium

App Service Not Using Latest TLS Encryption Version Detected

Consider using an internal load balancer

\-

Kubernetes

Medium

Medium

\-

Consider using an internal load balancer

\-

Terraform

Medium

Medium

\-

Consider specifying credentials in a more safe way

Unsafe EC2 Instance AWS CloudFormation Authentication

CloudFormation

High

High

AWS EC2 Instance CloudFormation Clear Text Authentication Detected

Minimize the admission of privileged resources

Kubernetes Resource Allow Privilege Escalation Policy

Kubernetes

High

Medium

Detected Kubernetes Resource with Allow Privilege Escalation

Ensure that environmental variables do not use plaintext for sensitive data such as passwords

Plaintext Passwords in AWS ECS Task Definitions

CloudFormation

High

High

AWS ECS Task Definition with Plaintext Password Found

Ensure that environmental variables do not use plaintext for sensitive data such as passwords

Plaintext Passwords in AWS ECS Task Definitions

Terraform

High

High

Detected Plaintext Password in AWS ECS Task Definition

Ensure that Azure Kubernetes Service’s API services have an authorized IP range

Arm

Medium

Medium

Ensure EKS logging is enabled

Terraform

Low

Low

Ensure that security groups deny traffic by default

CloudFormation Default Security Groups Traffic Allowance

CloudFormation

High

High

Traffic Allowed in Default Security Groups Detected

Ensure that security groups deny traffic by default

CloudFormation Default Security Groups Traffic Allowance

Terraform

High

High

Default Security Group with Unrestricted Traffic Detected

Ensure API gateway usage plan is set

\-

Terraform

Low

Low

\-

Enable logging for a Google compute subnetwork resource

\-

Terraform

Medium

Medium

\-

Ensure that all IAM users belong to at least one group

\-

CloudFormation

Low

Low

\-

Ensure API gateway using SSL certificate

API Gateway SSL Client Certificate Authorization

CloudFormation

High

Medium

API Gateway Stage without SSL Client Certificate

Ensure API gateway using SSL certificate

API Gateway SSL Client Certificate Authorization

Terraform

High

Medium

Missing SSL Client Certificate in AWS API Gateway Stage

Ensure no root user account access key exists

AWS Root Account Access Keys Status

CloudFormation

High

High

Root User Access Keys Found on AWS IAM

Ensure no root user account access key exists

AWS Root Account Access Keys Status

Terraform

High

High

Active AWS Root Account Access Keys Detected

Ensure that the Support Policy has at least one role or group associated with it

\-

CloudFormation

Low

Low

\-

Ensure high availability with PodDisruptionBudget

\-

Kubernetes

Low

Low

\-

Ensure high availability with PodDisruptionBudget

\-

Terraform

Low

Low

\-

Ensure that the AWS IAM password policy requires at least one symbol

\-

CloudFormation

Medium

Medium

\-

Ensure that the AWS IAM password policy requires at least one symbol

\-

Terraform

Medium

Medium

\-

Define labels for Kubernetes Clusters

GCP Kubernetes Cluster Labels Policy

Terraform

High

Medium

GCP Kubernetes Cluster Detected Without Labels

Ensure that Azure standard pricing tier is active

\-

Terraform

Medium

Medium

\-

Ensure that Azure standard pricing tier is active

\-

Arm

Medium

Medium

\-

User with IAM Role

\-

Terraform

Low

Low

\-

Limit access to AWS AMIs

\-

Terraform

Medium

Medium

\-

Ensure that the expiration date is set on all keys

Azure Key Vault Key Expiration Configuration

Terraform

High

Medium

Azure Key Vault Key Without Expiration Date Detected

Ensure that the SQS Queue Policy does not allow NotPrincipal

\-

CloudFormation

Medium

Medium

\-

EC2 Instance Monitoring Disabled

\-

Terraform

Info

Info

\-

Ensure that IAM policies do not grant full permissions

\-

CloudFormation

Medium

Medium

\-

Ensure that IAM policies do not grant full permissions

\-

Terraform

Medium

Medium

\-

Consider enabling CloudTrail logging

AWS CloudTrail Logging Configuration

CloudFormation

High

Remove

AWS CloudTrail Logging Disabled Detected

Consider enabling CloudTrail logging

AWS CloudTrail Logging Configuration

Terraform

High

Remove

AWS CloudTrail Logging Disabled

Ensure CloudTrail log file validation is enabled

AWS CloudTrail Log File Validation Configuration

CloudFormation

High

Medium

CloudTrail Log File Validation Lack or Disabled

Google Compute Network Using Firewall Rule that Allows Port Range

\-

Terraform

Low

Low

\-

Ensure AWS access key is not hard coded

\-

Terraform

Medium

Medium

\-

Ensure “Block Project-wide SSH keys” is enabled for VM instances

GCP VM Instance Project-Wide SSH Keys Configuration

Terraform

High

High

Project-Wide SSH Keys Not Enabled in GCP VM Instances

Ensure that sensitive ports are not exposed to small public networks

\-

Terraform

Medium

Medium

\-

Ensure that the AWS Lambda functions have associated tags

\-

CloudFormation

Medium

Medium

\-

Ensure that the AWS Lambda functions have associated tags

\-

Terraform

Medium

Medium

\-

Ensure Storage Accounts force the use of HTTPS

Azure Storage Account HTTPS Access Policy Configuration

Arm

High

High

Azure Storage Account Not Forcing HTTPS Traffic Detected

Enable data encryption-at-rest on ElastiCache

AWS ElastiCache Redis Cluster AtRestEncryption Configuration

CloudFormation

High

Medium

AWS ElastiCache Redis Cluster Without AtRestEncryption Detected

Ensure SageMaker endpoint has Key ID set

CloudFormation

Medium

Medium

Ensure no security groups allow ingress from 0.0.0.0/0 to remote server administration ports

CloudFormation Security Group Outbound Traffic Regulation

CloudFormation

High

High

Unrestricted Egress Access Detected in Security Group

Ensure that the SQS Queue Policy does not include wildcard (\*) Principals

SQS Queue Policy With Wildcard Principals

CloudFormation

High

High

Unsafe SQS Queue Policy Detected

Ensure that the SQS Queue Policy does not include wildcard (\*) Principals

SQS Queue Policy With Wildcard Principals

Terraform

High

High

Exposed AWS SQS Queue Detected

App Service Managed Identity Disabled

Azure App Service Managed Identity Configuration

Terraform

High

Medium

Disabled Managed Identity for Azure App Service Detected

Ensure KMS key is rotated

\-

CloudFormation

Medium

Medium

\-

Limit the range of ports allowed by TCP/UDP protocol NetworkAclEntry

\-

CloudFormation

Medium

Medium

\-

A StatefulSet requests volume storage

Kubernetes StatefulSet Volume Storage Request Policy

Kubernetes

High

Medium

StatefulSet Missing Volume Storage Request Detected

A StatefulSet requests volume storage

Kubernetes StatefulSet Volume Storage Request Policy

Terraform

High

Medium

StatefulSet without Volume Storage Requests Detected

Ensure MFA is enabled for the “root user” account

AWS IAM User Authentication with MFA

Terraform

High

High

Missing MFA in AWS IAM User Authentication

DynamoDB Table Not Encrypted

\-

Terraform

Medium

Medium

\-

Ensure that the cluster-admin role is only used where required (RBAC)

Kubernetes Cluster Admin Role Binding with Super User Permissions

Kubernetes

High

High

Detected Use of “Cluster-Admin” Role in Kubernetes ClusterRoleBinding

Ensure that the cluster-admin role is only used where required (RBAC)

Kubernetes Cluster Admin Role Binding with Super User Permissions

Terraform

High

High

Excessive Use of Kubernetes Cluster Admin Role Detected

Ensure phone number is set for security Contacts

\-

Arm

Low

Low

\-

Ensure Image digest configuration

\-

Kubernetes

Low

Low

\-

Ensure Image digest configuration

\-

Terraform

Low

Low

\-

Ensure Kubernetes Image Host Port is set

Kubernetes Image Host Port Specification

Kubernetes

High

Medium

Kubernetes Image Host Port Not Specified

Ensure no privilege escalation allowed in PSP

\-

Kubernetes

Medium

Medium

\-

KMS Crypto Key is Publicly Accessible

GCP KMS Crypto Key Accessibility Configuration

Terraform

High

High

Publicly Accessible GCP KMS Crypto Key Detected

Use the Content Delivery Network (CDN) service

\-

CloudFormation

Low

Low

\-

Use the Content Delivery Network (CDN) service

\-

Terraform

Low

Low

\-

Ensure no HTTPS or SSL proxy load balancers permit SSL policies with weak cipher suites

\-

Terraform

Medium

Medium

\-

Ensure CloudWatch logging is enabled

\-

CloudFormation

Medium

Medium

\-

Ensure CloudWatch logging is enabled

\-

Terraform

Medium

Medium

\-

Ensure StatefulSet has PodAntiAffinity configured

\-

Kubernetes

Medium

Medium

Ensure that logs delivered by CloudTrail are encrypted using KMS

CloudTrail Logs Encryption with KMS

CloudFormation

High

Medium

CloudTrail Logs Encryption Not Detected

Ensure that logs delivered by CloudTrail are encrypted using KMS

CloudTrail Logs Encryption with KMS

Terraform

High

Medium

Unencrypted CloudTrail Log Files Detected

Restrict permission to create pods in a cluster

\-

Kubernetes

Low

Low

\-

Restrict permission to create pods in a cluster

\-

Terraform

Low

Low

\-

Ensure that the AWS IAM password policy requires at least 14 characters

\-

CloudFormation

Medium

Medium

\-

Ensure that the AWS IAM password policy requires at least 14 characters

\-

Terraform

Medium

Medium

\-

Set the Amazon EKS public endpoint to false

\-

Terraform

Medium

Medium

\-

Ensure that AWS Elasticsearch enables support for slow logs

\-

CloudFormation

Medium

Medium

\-

Ensure that AWS Elasticsearch enables support for slow logs

\-

Terraform

Medium

Medium

\-

ECR Repository Not Encrypted With CMK

\-

Terraform

Low

Low

\-

Provide an account admin’s email in case of a security alert

\-

Arm

Info

Info

\-

Ensure multi-factor authentication

AWS IAM User MFA Authentication Policy

Terraform

High

High

AWS IAM User Without MFA Detected

ElastiCache Replication Group Not Encrypted At Rest

\-

Terraform

Medium

Medium

\-

Handle exposed, open ports

\-

Terraform

Medium

Medium

\-

Ensure NET\_RAW capabilities are set for containers

\-

Kubernetes

Medium

Medium

\-

Ensure that AWS::ApiGatewayV2::Stage AccessLogSettings is defined for API Gateway

\-

CloudFormation

Medium

Medium

\-

Ensure that AWS::ApiGatewayV2::Stage AccessLogSettings is defined for API Gateway

\-

Terraform

Medium

Medium

\-

Ensure server parameter ’log\_connections’ is set to ‘ON’ for PostgreSQL Database Server

Azure PostgreSQL Database Log Connections Configuration

Arm

High

Remove

log\_connections’ in Microsoft.DBforPostgreSQL/servers/configurations is not set to ‘on’

Ensure server parameter ’log\_connections’ is set to ‘ON’ for PostgreSQL Database Server

Azure PostgreSQL Database Log Connections Configuration

Terraform

High

Remove

Azure PostgreSQL Database Log Connections Parameter Not Set to ‘ON’

Enable file system encryption on Amazon Elastic File System

AWS EFS Encryption Configuration

CloudFormation

High

High

Unencrypted Amazon Elastic Filesystem Detected

Enable file system encryption on Amazon Elastic File System

AWS EFS Encryption Configuration

Terraform

High

High

Unencrypted AWS EFS Detected

Ensure that the AWS Relational Database Service (RDS) is using a Multi-AZ deployment configuration

\-

CloudFormation

Medium

Medium

\-

Ensure RDS database is encrypted

AWS RDS Database Instance Encryption Verification

CloudFormation

High

Medium

Unencrypted AWS RDS Database Instance Found

Ensure RDS database is encrypted

AWS RDS Database Instance Encryption Verification

Terraform

High

Medium

AWS RDS Instance Storage Not Encrypted

Ensure that the SQS policy only allows required actions

\-

Terraform

Medium

Medium

\-

ELB Access Log Disabled

\-

Terraform

Medium

Medium

\-

Ensure sufficent SQL Server Database Audit Retetion period

\-

Arm

Medium

Medium

\-

Ensure Alexa skill is not exposed

\-

CloudFormation

Medium

Medium

\-

Ensure that BigQuery datasets are not anonymously or publicly accessible (Configured in Terraform files) (v2)

GCP BigQuery Dataset Public Access Check

Terraform

High

High

Publicly Accessible GCP BigQuery Dataset Detected

Set the Security Center alert notifications to ‘ON’

\-

Terraform

Medium

Medium

\-

Set the Security Center alert notifications to ‘ON’

\-

Arm

Medium

Medium

\-

Ensure that the connection between CloudFront and the origin is encrypted

CloudFront to Origin Server Connection Encryption

CloudFormation

High

Medium

Unencrypted Connection between CloudFront and Origin Server Detected

Ensure that the IoT policy only allows specified actions

CloudFormation

Medium

Medium

Ensure launch configuration EBS is encrypted

AWS Launch Configuration EBS Encryption

Terraform

High

Medium

Unencrypted AWS Launch Configuration EBS Detected

Ensure IAM password policy requires minimum length of 14 or greater

AWS IAM Password Minimum Length Policy

CloudFormation

High

Medium

Inadequate IAM User Password Length Detected

Ensure IAM password policy requires minimum length of 14 or greater

AWS IAM Password Minimum Length Policy

Terraform

High

Medium

AWS IAM Account Password Does Not Meet Minimum Length Requirement

Ensure EBS volume encryption is enabled

AWS EBS Volume Encryption Status

CloudFormation

High

Medium

EBS Volume Without KmsKeyId Value Detected

Ensure EBS volume encryption is enabled

AWS EBS Volume Encryption Status

Terraform

High

Medium

AWS EBS Volume Listed without Encryption

Ensure viewer allows HTTPS

AWS CloudFront Distribution Viewer Protocol Policy

Terraform

High

High

AWS CloudFront Distribution Allows Unencrypted Connection

Ensure that ‘Public access level’ is set to Private for blob containers

Azure Storage Container Public Access Configuration

Terraform

High

High

Azure Storage Container Public Access Enabled

Ensure containers are not ran with host IPC namespace

Shared Host IPC Namespace for Containers

Kubernetes

High

Medium

Host’s IPC Namespace Sharing Enabled in Kubernetes Environment

Ensure containers are not ran with host IPC namespace

Shared Host IPC Namespace for Containers

Terraform

High

Medium

Container Detected Sharing the Host IPC Namespace

Ensure that the AWS Lambda functions have tracing enabled

\-

CloudFormation

Medium

Medium

\-

Ensure that the AWS Lambda functions have tracing enabled

\-

Terraform

Medium

Medium

\-

Ensure S3 bucket is not publicly readable

Public Read Access for S3 Buckets

Terraform

High

High

S3 Bucket Detected with Public Read Access

AKS Uses Azure Policies Add-On Disabled

\-

Terraform

Low

Low

\-

GKE Using Default Service Account

\-

Terraform

Medium

Medium

\-

Minimize access to secrets (RBAC)

\-

Kubernetes

Medium

Medium

\-

Minimize access to secrets (RBAC)

\-

Terraform

Medium

Medium

\-

Ensure strong Network Watcher Flow Log retention policy

\-

Arm

Medium

Medium

\-

Do not admit privileged containers (Configured in Kubernetes files) (v2)

Admittance of Privileged Containers

Kubernetes

High

High

Privileged Container Detected

Use corporate credentials instead of Gmail accounts

GCP Project IAM Binding Email Account Verification

Terraform

High

Medium

Non-Corporate Email Account Found in GCP IAM Binding

Containers should not share the host network namespace

Admittance of Containers with NET\_RAW Capability

Kubernetes

High

Medium

Container Detected Sharing the Host Network Namespace

Containers should not share the host network namespace

Admittance of Containers with NET\_RAW Capability

Terraform

High

Medium

Container Detected with NET\_RAW Capability

Disable the Kubernetes Dashboard

\-

Terraform

Low

Low

\-

Disable the Kubernetes Dashboard

\-

Arm

Low

Low

\-

Ensure VPC flow logging is enabled in all VPCs

AWS VPC Flow Logs Configuration

Terraform

High

Remove

VPC without Associated Flow Log Detected

Ensure VM disks for critical VMs are encrypted with Customer Supplied Encryption Keys

\-

Terraform

Medium

Medium

\-

Ensure IAM Users Receive Permissions Only Through Groups

AWS IAM Policy Attachment to Users Configuration

CloudFormation

High

Low

Direct User Association Detected in AWS IAM Policy

Ensure IAM Users Receive Permissions Only Through Groups

AWS IAM Policy Attachment to Users Configuration

Terraform

High

Low

Direct IAM Policy Attachments to User Detected

Ensure that the policy is up-to-date and not vulnerable

AWS KMS Key with Vulnerable Policy

Terraform

High

High

Detected AWS KMS Key with Overly Permissive Access Policy

Ensure NET\_RAW Capabilities not Being Dropped

Admittance of Containers with NET\_RAW Capability

Kubernetes

High

Medium

Container Detected with NET\_RAW Capability

ElastiCache Replication Group Not Encrypted At Transit

\-

Terraform

Medium

Medium

\-

High Access Key Rotation Period

\-

CloudFormation

Medium

Medium

\-

Ensure Storage Account is using the latest version of TLS encryption

Azure Storage Account TLS Encryption Version Configuration

Terraform

High

Medium

Outdated or Missing TLS Encryption Version Detected in Azure Storage Account

Ensure CloudTrail logs are encrypted at rest using KMS CMKs

\-

CloudFormation

Medium

Medium

\-

Ensure that the AWS Security Group Egress CIDR is not open to the world

\-

CloudFormation

Medium

Medium

\-

Ensure KMS encryption keys are rotated within a period of 90 days

Google KMS Crypto Key Rotation Period

Terraform

High

Medium

Google KMS Crypto Key Rotation Period Exceeds 90 days or Missing

The default namespace should not be used

Avoid Using Default Namespace in Kubernetes

Kubernetes

High

Medium

Kubernetes Resource Deployed in Default Namespace Detected

The default namespace should not be used

Avoid Using Default Namespace in Kubernetes

Terraform

High

Medium

Kubernetes Resource Deployed in Default Namespace Detected

Consider using resources from a source other than the default VPC

\-

Terraform

Medium

Medium

\-

Select a different service type instead of NodePort

\-

Kubernetes

Low

Low

\-

Select a different service type instead of NodePort

\-

Terraform

Low

Low

\-

Enable auditing for Microsoft Azure SQL servers.

\-

Terraform

Medium

Medium

\-

Enable auditing for Microsoft Azure SQL servers.

\-

Arm

Medium

Medium

\-

ElastiCache Redis Cluster Without Backup

\-

Terraform

Medium

Medium

\-

Ensure PSP doesn’t allow sharing host process

\-

Kubernetes

Medium

Medium

\-

Unrestricted Security Group Ingress

AWS Security Group Ingress Configuration

Terraform

High

High

Unrestricted AWS Security Group Ingress Detected

Ensure that the CloudTrail SNS topic has an appropriate name

\-

Terraform

Medium

Medium

\-

Ensure that rotation is enabled for Customer Master Keys (CMKs)

AWS KMS Key Rotation Configuration

CloudFormation

High

High

AWS KMS Key Rotation Not Enabled

Ensure that rotation is enabled for Customer Master Keys (CMKs)

AWS KMS Key Rotation Configuration

Terraform

High

High

AWS CMK Rotation Not Enabled

Ensure IAM password policy prevents password reuse

\-

Terraform

Medium

Medium

\-

Enable volume encryption on Amazon Elastic Block Store (EBS)

AWS EBS Volume Encryption Verification

Terraform

High

Medium

AWS EBS Volume Encryption Not Enabled

Enable automatic minor upgrades

\-

Terraform

Medium

Medium

\-

Minimize the admission of containers with the NET\_RAW capability

Kubernetes Container Capabilities Configuration

Kubernetes

High

High

Container Using NET\_RAW Capability Detected

Minimize the admission of containers with the NET\_RAW capability

Kubernetes Container Capabilities Configuration

Terraform

High

High

Kubernetes Container Not Dropping ‘NET\_RAW’ or ‘ALL’ Capabilities

Ensure that ‘OS and Data’ disks are encrypted with CMK

Encryption Activation On Managed Disk

Arm

High

Medium

Azure Disk Encryption Not Enabled

Ensure that ‘OS and Data’ disks are encrypted with CMK

Encryption Activation On Managed Disk

Terraform

High

Medium

Azure Managed Disk Encryption Not Active

Ensure that SageMaker Notebook is placed in a VPC

AWS SageMaker Notebook Placement In VPC

CloudFormation

High

Medium

SageMaker Notebook Instance Not Placed in A VPC

Ensure that password reuse is configured to 24 passwords remembered

\-

Terraform

Medium

Medium

\-

Dynamodb VPC Endpoint Without Route Table Association

\-

Terraform

Medium

Medium

\-

Ensure Netptune cluster storage is encrypted

\-

CloudFormation

Medium

Medium

\-

Ensure Netptune cluster storage is encrypted

\-

Terraform

Medium

Medium

\-

Workload is mounting a volume with sensitive OS Directory

\-

Kubernetes

Medium

Medium

\-

Workload is mounting a volume with sensitive OS Directory

\-

Terraform

Medium

Medium

\-

Apply security context to your pods and containers

Kubernetes Pods and Containers Security Context Configuration

Kubernetes

High

Low

Missing Security Context in Kubernetes Pods or Containers

Apply security context to your pods and containers

Kubernetes Pods and Containers Security Context Configuration

Terraform

High

Low

Missing Kubernetes Pod or Container Security Context

Configre a deadline for cronjobs

\-

Terraform

Low

Low

\-

Enable Google Project Auto Create Network

\-

Terraform

Medium

Medium

\-

Update the CA certificate identifier to ‘rds-ca-2019’

AWS RDS DB Instance Certificate Identifier Configuration

Terraform

High

Medium

Outdated AWS RDS DB Instance CA Certificate Identifier Detected

Ensure web app redirects all HTTP traffic to HTTPS in Azure App Service

Azure Web App Service HTTPS Traffic Configuration

Arm

High

High

Microsoft Web Site Not Forcing HTTPS Detected

Ensure web app redirects all HTTP traffic to HTTPS in Azure App Service

Azure Web App Service HTTPS Traffic Configuration

Terraform

High

High

Azure Web App Service Accepting Non-HTTPS Traffic

App Service FTPS Enforce Disabled

Azure App Service FTPS Enforcement Configuration

Terraform

High

High

Azure App Service FTPS Not Enforced

Specify memory requests

\-

Kubernetes

Medium

Medium

\-

Specify memory requests

\-

Terraform

Medium

Medium

\-

Ensure that the network policy targets at least one pod

\-

Kubernetes

Medium

Medium

\-

Ensure that the network policy targets at least one pod

\-

Terraform

Medium

Medium

\-

Ensure Role Definitions don’t allow custom subscription role creation

\-

Arm

Medium

Medium

\-

Enable network policy for Kubernetes Engine Clusters

Google Kubernetes Engine Cluster Network Policy Configuration

Terraform

High

Medium

Incorrect Network Policy Configuration for Google Kubernetes Engine Cluster

Ensure IAM DB authentication is set

IAM Database Authentication Configuration

Terraform

High

Medium

IAM Database Auth Not Enabled For AWS RDS Instance

Check if the Amazon Organizations’ policies ensure that all features are enabled to achieve full control over the use of AWS services and actions across multiple AWS accounts using Service Control Policies (SCPs).

\-

Terraform

Medium

Medium

\-

Ensure AWS Kinesis is encrypted

AWS Kinesis Stream Encryption Configuration

Terraform

High

Medium

AWS Kinesis Stream Lacks Adequate Encryption

Ensure that KMS keys are changed at least every 365 days

GCP KMS Crypto Key Rotation Period Policy

Terraform

High

High

GCP KMS Crypto Key with Extended Rotation Period Detected

Ensure that ELBv2 (Elastic Load Balancing v2) access logs are enabled

\-

CloudFormation

Medium

Medium

\-

Configure the Azure Virtual Network subnet with a network security group

\-

Terraform

Medium

Medium

\-

Ensure that the HTTP port is closed if it is unused

Security Group HTTP Port Access

CloudFormation

High

High

Open HTTP Port in Security Group Detected

Ensure that the HTTP port is closed if it is unused

Security Group HTTP Port Access

Terraform

High

High

HTTP Port Open in AWS Security Group

Check if object versioning should be enabled

GCP Cloud Storage Bucket Object Versioning Configuration

Terraform

High

Remove

Object Versioning Not Enabled on GCP Cloud Storage Bucket

Ensure server parameter ‘connection\_throttling’ is set to ‘ON’ for PostgreSQL Database Server

Azure PostgreSQL Server Connection Throttling Configuration

Arm

High

Medium

Disabled Connection Throttling on Azure Postgres SQL Server

Ensure server parameter ‘connection\_throttling’ is set to ‘ON’ for PostgreSQL Database Server

Azure PostgreSQL Server Connection Throttling Configuration

Terraform

High

Medium

Azure PostgreSQL Server Without Connection Throttling Detected

Ensure that the Security Group has a VPC attached

CloudFormation

Medium

Medium

Enable data-at-rest encryption on ElastiCache

ElastiCache Replication Group Encryption Configuration

CloudFormation

High

High

ElastiCache Redis Clusters Lack Transit Encryption

Ensure no exposed privileges when running batch job

\-

CloudFormation

Medium

Medium

\-

Ensure no exposed privileges when running batch job

\-

Terraform

Medium

Medium

\-

Ensure server parameter ’log\_checkpoints’ is set to ‘ON’ for PostgreSQL Database

\-

Terraform

Low

Low

\-

Ensure server parameter ’log\_checkpoints’ is set to ‘ON’ for PostgreSQL Database

\-

Arm

Low

Low

\-

Ensure Drop capabilities exist

Kubernetes Container Security Context Capabilities Drop Check

Kubernetes

High

Medium

Kubernetes Container Missing ‘Drop’ Capabilities in Security Context

Ensure that the IAM policies have the minimal amount of access required to perform their tasks

\-

CloudFormation

Medium

Medium

\-

Ensure that the IAM policies have the minimal amount of access required to perform their tasks

\-

Terraform

Medium

Medium

\-

Ensure that the S3 Bucket does not allow Get actions from all principals

S3 Bucket Policy for Get Actions Configuration

CloudFormation

High

High

Detected S3 Bucket Policy Allowing Get Actions From All Principals

Ensure that the S3 Bucket does not allow Get actions from all principals

S3 Bucket Policy for Get Actions Configuration

Terraform

High

High

Unrestricted Get Action on AWS S3 Bucket Detected

Define the service account

\-

Terraform

Medium

Medium

\-

Consider enabling client certificate authentication on Microsoft.Web/sites.

Azure Website Client Certificate Authentication Policy

Arm

High

Medium

Azure Website Without Client Certificate Authentication

Handle an exposed, open port to a wide private network

Sensitive Port Exposure Control for Private Network

Terraform

High

High

Sensitive Port Open for Wide Private Network Detected

S3 bucket without restriction of public bucket

AWS S3 Bucket Public Access Configuration

Terraform

High

High

S3 Bucket Without Restriction of Public Access Detected

Enable node auto-upgrades for Kubernetes Clusters

GCP Kubernetes Cluster Node Auto Upgrade Configuration

Terraform

High

Medium

Undetected or Disabled Node ‘auto\_upgrade’ Setting for GCP Kubernetes Clusters

Limit access to specific CIDR blocks

AWS EKS Cluster Public Access CIDRs Restriction

Terraform

High

High

AWS EKS Cluster Public Endpoint Has Extensive Access

Ensure that SSH access is restricted from the internet

GCP Firewall SSH Access Configuration

Terraform

High

High

GCP Firewall allows unrestricted SSH access

App Service Without Latest Python Version

\-

Terraform

Low

Low

\-

Ensure that the DynamoDB Table Billing Mode is set to a recommended mode

\-

CloudFormation

Low

Low

\-

Ensure that Access Logging is enabled for API Gateway

\-

Terraform

Medium

Medium

\-

Ensure that the S3 bucket does not allow Put actions from all principals

CloudFormation S3 Bucket Policy Allowing Put Actions from All Principals

CloudFormation

High

High

S3 Bucket Allowing Put Actions from All Principals Detected in CloudFormation

Ensure that the S3 bucket does not allow Put actions from all principals

CloudFormation S3 Bucket Policy Allowing Put Actions from All Principals

Terraform

High

High

Detected S3 Bucket that Allows All Principals to Execute Put Actions

Ensure that a password expiration policy has been configured

\-

Terraform

Medium

Medium

\-

Ensure that ELB Listeners do not have Policies with insecure Ciphers

AWS ELB Security Policy Weak Cipher Configuration

CloudFormation

High

High

ELB Utilizing Weak Ciphers Detected in CloudFormation Configuration

Ensure that ELB Listeners do not have Policies with insecure Ciphers

AWS ELB Security Policy Weak Cipher Configuration

Terraform

High

High

AWS ELB security policy with weak cipher detected.

Ensure websites has ‘Http20Enabled’ set

\-

Arm

Low

Low

\-

Ensure that the IoT policy only allows specified resources

\-

CloudFormation

Medium

Medium

\-

Restrict permissions to mount volumes using the OS directory

\-

Kubernetes

Medium

Medium

\-

Restrict permissions to mount volumes using the OS directory

\-

Terraform

Medium

Medium

\-

Ensure SDB domain is not declared

\-

CloudFormation

Low

Low

\-

Ensure that Cloud SQL database instances are configured with automated backups

GCP Cloud SQL Database Backup Configuration

Terraform

High

Remove

GCP Cloud SQL Database Instance Missing or Disabled Backup Configuration Detected

Tiller Service should be deleted

Kubernetes Tiller Service Existence Check

Kubernetes

High

Medium

Detected Tiller Service In Kubernetes Configuration

Ensure that the S3 bucket does not allow Restore actions from all Principals

S3 Bucket Policy Allowing Restore Actions from All Principals

CloudFormation

High

High

S3 Bucket Allowing Restore Actions from All Principals Detected

IAM Access Keys Associated To Root Account

AWS IAM Root Account Access Key Association Verification

CloudFormation

High

High

Detected Access Keys Associated with AWS IAM Root Account

IAM Access Keys Associated To Root Account

AWS IAM Root Account Access Key Association Verification

Terraform

High

High

Active AWS Root Account Access Keys Detected

Ensure read-only filesystem is used for containers

Kubernetes Containers Filesystem Configuration

Kubernetes

High

Medium

Writable Filesystem Enabled on Kubernetes Container

App Service Without Latest PHP Version

\-

Terraform

Low

Low

\-

Ensure SageMaker data encryption is enabled

AWS SageMaker Notebook Data Encryption Configuration

CloudFormation

High

Medium

Data Encryption Disabled or Not Specified for AWS SageMaker Notebook Detected

Ensure that IAM password policies have been set up

AWS IAM User Login Profile Password Policy Verification

Terraform

High

High

Inadequate Password Policies in AWS IAM User Login Profiles Detected

Ensure that Cloud Audit Logging is configured properly across all services and all users from a project

GCP IAM Audit Logging Configuration

Terraform

High

Remove

GCP IAM Audit Logging Configuration Defective

Ensure ‘Enforce SSL connection’ is set to ‘ENABLED’ for MySQL Database Server

Azure MySQL Database SSL Connection Enforcement

Arm

High

High

Azure MySQL Server Lacks SSL Enforcement or has SSL Enforcement Disabled

Ensure ‘Enforce SSL connection’ is set to ‘ENABLED’ for MySQL Database Server

Azure MySQL Database SSL Connection Enforcement

Terraform

High

High

Azure MySQL Database Server Without SSL Enforcement Detected

Ensure that containers do not have CAP\_SYS\_ADMIN Linux capability

\-

Kubernetes

Medium

Medium

\-

Ensure that containers do not have CAP\_SYS\_ADMIN Linux capability

\-

Terraform

Medium

Medium

\-

Define the Pod’s Service Account Name

\-

Kubernetes

Medium

Medium

\-

Define the Pod’s Service Account Name

\-

Terraform

Medium

Medium

\-

Ensure volume claim template

\-

Kubernetes

Medium

Medium

\-

Ensure volume claim template

\-

Terraform

Medium

Medium

\-

EC2 Instance Using Default Security Group

\-

Terraform

Low

Low

\-

Ensure that the AWS Security Group ingress has a single port

\-

CloudFormation

Medium

Medium

\-

EC2 Instance Using Default VPC

\-

Terraform

Low

Low

\-

Ensure that only usable Customer Master Keys (CMKs) are used in the Key Management Service (KMS)

\-

CloudFormation

Medium

Medium

\-

Ensure that only usable Customer Master Keys (CMKs) are used in the Key Management Service (KMS)

\-

Terraform

Medium

Medium

\-

Prevent Unsafe Sysctls

Kubernetes Cluster Unsafe Sysctls Policy Check

Kubernetes

High

Medium

Unsafe Sysctls Configuration Detected in Kubernetes Cluster

Prevent Unsafe Sysctls

Kubernetes Cluster Unsafe Sysctls Policy Check

Terraform

High

Medium

Unsafe Sysctls Configuration Detected in Kubernetes Cluster

Ensure that the AWS IAM password policy requires at least one number

\-

CloudFormation

Medium

Medium

\-

Set up App Service Authentication

\-

Arm

Info

Info

\-

Ensure that the S3 Bucket ACL only allows Read access to specific users

Public Access Control to S3 Buckets

CloudFormation

High

High

Detected S3 Bucket with Public Read Access

IAM User With Access To Console

Terraform

Medium

Medium

Ensure that the AWS Config Configuration Aggregator has all\_regions set to ’true’

AWS Config Configuration Aggregator All Region Configuration

CloudFormation

High

Medium

AWS Config Configuration Aggregator Not Set to All Regions

Ensure that the AWS Config Configuration Aggregator has all\_regions set to ’true’

AWS Config Configuration Aggregator All Region Configuration

Terraform

High

Medium

AWS Config Configuration Aggregator All Regions not Enabled

Ensure that the S3 bucket only allow WriteACP actions from specified principals

AWS S3 Bucket Write\_ACP Action From All Principals

Terraform

High

High

S3 Bucket Allows Write\_ACP Action From All Principals Detected

Ensure that SNS topic has KMS master key ID defined

\-

CloudFormation

Medium

Medium

\-

Ensure image is defined

\-

Kubernetes

Low

Low

\-

Ensure image is defined

\-

Terraform

Low

Low

\-

Ensure that the IAM access key is only active for ‘root’ users

\-

Terraform

Medium

Medium

\-

Ensure KMS Key ID is specified

\-

CloudFormation

Medium

Medium

\-

Verify whether the readiness probe should be configured

\-

Terraform

Medium

Medium

\-

Enable encryption of AWS AMI

Encryption of AWS AMIs

Terraform

High

High

AWS AMI Encryption Not Enabled

Ensure that RSASHA1 is not used for the key-signing key in Cloud DNS DNSSEC

GCP DNSSEC Algorithm Configuration

Terraform

High

High

Weak Algorithm Detected in GCP DNSSEC Configuration

Ensure that RSASHA1 is not used for the zone-signing key in Cloud DNS DNSSEC

GCP DNSSEC Algorithm Configuration

Terraform

High

High

Deprecated RSA/SHA-1 algorithm detected in DNSSEC configuration

Ensure that Microsoft.Web/sites are using the latest version of TLS

Web App TLS Version Configuration Check

Arm

High

Medium

Azure Web App Not Configured to Use Latest TLS Version

Enable ElastiSearch domain encryption with KMS

Elasticsearch Domain Encryption with KMS in AWS CloudFormation

CloudFormation

High

Medium

Non-Encrypted Elasticsearch Domain Detected in AWS CloudFormation

Enable ElastiSearch domain encryption with KMS

Elasticsearch Domain Encryption with KMS in AWS CloudFormation

Terraform

High

Medium

AWS Elasticsearch Domain Not Encrypted with KMS Detected

Google Compute Subnetwork with Private Google Access Disabled

\-

Terraform

Low

Low

\-

S3 bucket without enabled MFA Delete

\-

Terraform

Medium

Medium

\-

Consider enabling Geo-Restriction

\-

CloudFormation

Low

Low

\-

Prevent multiple pods from being scheduled on the same node

\-

Kubernetes

Low

Low

\-

Prevent multiple pods from being scheduled on the same node

\-

Terraform

Low

Low

\-

Ensure that Cloud SQL database instances do not have public IPs

GCP SQL Database Public Accessibility Configuration

Terraform

High

Medium

Publicly Accesible GCP SQL Database Detected

Ensure that the admission control plugin AlwaysPullImages is set

Kubernetes Container Image Pull Policy Configuration

Kubernetes

High

Medium

Non-Compliant Kubernetes Container Image Pull Policy Detected

Ensure that the admission control plugin AlwaysPullImages is set

Kubernetes Container Image Pull Policy Configuration

Terraform

High

Medium

Non-Always Image Pull Policy Detected in Kubernetes Configuration

Ensure CPU limits are set

\-

Kubernetes

Medium

Medium

\-

Ensure CPU limits are set

\-

Terraform

Medium

Medium

\-

Ensure that IAM policies are applied to user groups

\-

CloudFormation

Medium

Medium

\-

Ensure WebApp has Azure active directory enabled

\-

Arm

Low

Low

\-

Ensure that the remote desktop port is closed if it is unused

Remote Desktop (RDP) Port Open Policy

CloudFormation

High

High

Remoted Desktop Port Open to Public Detected in EC2 Security Group

Ensure that the remote desktop port is closed if it is unused

Remote Desktop (RDP) Port Open Policy

Terraform

High

High

Remote Desktop Port Open Detected in AWS Security Group

Ensure that containers do not have full access to host’s /proc command

\-

Kubernetes

Medium

Medium

\-

Ensure that containers do not have full access to host’s /proc command

\-

Terraform

Medium

Medium

\-

Ensure RedShift cluster is encrypted

AWS Redshift Cluster Encryption Configuration

CloudFormation

High

Medium

AWS Redshift Cluster Encryption Not Enabled

Ensure RedShift cluster is encrypted

AWS Redshift Cluster Encryption Configuration

Terraform

High

Medium

Unencrypted or Undefined Encryption Field in AWS Redshift Cluster Detected

Configure containers with AppArmor

\-

Kubernetes

Low

Low

\-

Configure containers with AppArmor

\-

Terraform

Low

Low

\-

Ensure that the AWS Security Group Egress CIDR is not open to the world

\-

CloudFormation

Medium

Medium

\-

Consider enabling CloudWatch metrics

\-

Terraform

Medium

Medium

\-

Enable a client certificate for Kubernetes Clusters

GCP Kubernetes Client Certificate Configuration

Terraform

High

Medium

Client Certificate Disabled on GCP Kubernetes Cluster

Ensure AWS Kinesis uses server side encryption

AWS Kinesis Stream Server Side Encryption Configuration

CloudFormation

High

Medium

AWS Kinesis Stream Without Server Side Encryption Detected

Ensure AWS Kinesis uses server side encryption

AWS Kinesis Stream Server Side Encryption Configuration

Terraform

High

Medium

Insufficient AWS Kinesis Stream Server Side Encryption Configuration Detected

Define Host Aliases

Kubernetes Pod Host Aliases Configuration

Kubernetes

High

Medium

Kubernetes Pod without Defined Host Aliases Detected

Define Host Aliases

Kubernetes Pod Host Aliases Configuration

Terraform

High

Medium

Undefined or Empty Host Aliases in Kubernetes Pod Detected

ElastiCache Using Default Port

Terraform

Low

Low

Minimize the admission of containers with added capabilities

Kubernetes Container Security Policy for Added Capabilities

Kubernetes

High

Medium

Kubernetes Container with Added Capabilities Detected

Minimize the admission of containers with added capabilities

Kubernetes Container Security Policy for Added Capabilities

Terraform

High

Medium

Kubernetes Pod with Extra Capabilities Detected

Ensure SQL Alert Policy has emails detfined

\-

Arm

Info

Info

\-

IP Forwarding Enabled

\-

Terraform

Medium

Medium

\-

Set MSSQL audit retention period

\-

Terraform

Medium

Medium

\-

Ensure that Service Account Tokens are only mounted where necessary

Kubernetes Auto Mount Service Account Tokens Control

Kubernetes

High

Medium

Service Account Tokens Auto Mounting Enabled Detected

Ensure that Service Account Tokens are only mounted where necessary

Kubernetes Auto Mount Service Account Tokens Control

Terraform

High

Medium

Automount of Service Account Tokens Enabled in Kubernetes Resources

Ensure S3 bucket server-side encryption is enabled

AWS S3 Bucket Server Side Encryption

Terraform

High

High

Improper Server Side Encryption Configuration for AWS S3 Bucket

Ensure that the security configuration of the EMR cluster has been defined

\-

CloudFormation

Medium

Medium

\-

Ensure that the Azure Kubernetes Service cluster has RBAC enabled

Azure Container Service (AKS) Role-Based Access Control Configuration

Arm

High

High

Azure AKS Cluster RBAC Not Enabled

Ensure that the Azure Kubernetes Service cluster has RBAC enabled

Azure Container Service (AKS) Role-Based Access Control Configuration

Terraform

High

High

Azure AKS Instance Lacks RBAC or RBAC not Enabled

Ensure that sensitive ports are not exposed to the entire network

Sensitive Network Port Exposure

Terraform

High

High

Sensitive Port Exposed to Entire Network

Ensure that RDP access is restricted from the internet

Azure Network Security Rule RDP Internet Exposure

Arm

High

High

Azure Network Security Group has RDP Access Open to the Internet

Ensure that RDP access is restricted from the internet

Azure Network Security Rule RDP Internet Exposure

Terraform

High

High

RDP Port Exposed to the Internet in Azure Network Security Configuration

Ensure that Cloud SQL database instances are not open to the world

Google Cloud SQL Database Public Accessibility

Terraform

High

High

Publicly Accessible Google Cloud SQL Database Instance Detected

Ensure containers are not ran with allowPrivilegeEscalation

Kubernetes Containers Privilege Escalation Configuration

Kubernetes

High

High

Privilege Escalation Enabled on Kubernetes Container

Ensure containers are not ran with allowPrivilegeEscalation

Kubernetes Containers Privilege Escalation Configuration

Terraform

High

High

Privilege Escalation Enabled on Kubernetes Container

Ensure that ElastiCache nodes are using a Multi-AZ deployment configuration

\-

Terraform

Medium

Medium

\-

Ensure that the AWS Security Group ingress has specific protocols defined

\-

CloudFormation

Medium

Medium

\-

Ensure Container Memory Requests are Equal to Its Limits

Kubernetes Pod Container Memory Requests and Limits Equivalence

Kubernetes

High

Remove

Inconsistent Container Memory Requests and Limits Detected

Define encryption options in AmazonMQ Broker

\-

CloudFormation

Medium

Medium

\-

Define encryption options in AmazonMQ Broker

\-

Terraform

Medium

Medium

\-

ElastiCache Without VPC

\-

Terraform

Low

Low

\-

Ensure that the root container filesystem is mounted as read-only

\-

Terraform

Low

Low

\-

Ensure that Elastic Load Balancing (ELB) access logs are enabled

\-

CloudFormation

Medium

Medium

\-

Ensure stack notifications are enabled

\-

CloudFormation

Medium

Medium

\-

Ensure stack notifications are enabled

\-

Terraform

Medium

Medium

\-

Ensure that only valid log profile categories are set

\-

Arm

Medium

Medium

\-

Ensure that logging for Azure KeyVault is ‘Enabled’

Azure Key Vault Auditing Configuration

Terraform

High

Remove

Azure Key Vault Auditing Disabled or not Targetted correctly

Ensure that the Google Project IAM Member Service does not have an admin role

\-

Terraform

Medium

Medium

\-

IAM User Has Too Many Access Keys

\-

Terraform

Medium

Medium

\-

Ensure that unknown ports are not exposed to the internet

AWS Security Group Unidentified Port Exposure Configuration

Terraform

High

High

AWS Security Group Has Unidentified Port Exposed To Internet

DocDB Logging Is Disabled

\-

Terraform

Low

Low

\-

Configure the instance in a Virtual Private Cloud (VPC)

\-

Terraform

Medium

Medium

\-

Ensure PostgreSQL Databases have SSL enabled

PostgreSQL Server SSL Configuration for Azure Resource Manager

Arm

High

High

SSL Enforcement for PostgreSQL Server is Disabled or Not Set

Ensure that Cloud Storage buckets have uniform bucket-level access enabled

Google Cloud Storage Bucket Level Access Activation

Terraform

High

Medium

Google Storage Bucket Level Access Not Configured or Disabled

Ensure that sensitive ports are not exposed to wide private networks

\-

Terraform

Medium

Medium

\-

Enable Stackdriver Logging on Kubernetes Engine Clusters

Logging for GCP Kubernetes Engine Clusters

Terraform

High

Remove

Stackdriver Logging service is disabled for GCP Kubernetes Engine Clusters

Ensure server parameter ’log\_disconnections’ is set to ‘ON’ for PostgreSQL Database Server

Azure PostgreSQL Configuration Log Disconnections

Terraform

High

Remove

Azure PostgreSQL ’log\_disconnections’ Parameter Not Set to ‘ON’

Retrieve sensitive information using appropriate tools

\-

CloudFormation

Low

Low

\-

Ensure that the S3 Bucket ACL only allows Read access to specific authenticated users

S3 Bucket ACL Read Permission to Any Authenticated User

CloudFormation

High

High

Open Read Access Detected in S3 Bucket Policy

Ensure that the S3 Bucket ACL only allows Read access to specific authenticated users

S3 Bucket ACL Read Permission to Any Authenticated User

Terraform

High

High

S3 Bucket ACL Allows Read Access to All Authenticated Users

Protect the CloudFront Distribution with a Web Application Firewall (WAF)

\-

CloudFormation

Low

Low

\-

Protect the CloudFront Distribution with a Web Application Firewall (WAF)

\-

Terraform

Low

Low

\-

Consider enabling AWS X-Ray for API Gateway

\-

CloudFormation

Medium

Medium

\-

Consider enabling AWS X-Ray for API Gateway

\-

Terraform

Medium

Medium

\-

Ensure Kubernetes roles not using wildcards

Kubernetes RBAC Wildcard Usage in Rules

Kubernetes

High

Medium

Kubernetes Role or ClusterRole with Wildcard Detected in Rules

Ensure Redis version is compliant

\-

Terraform

Medium

Medium

\-

Ensure the S3 bucket has access logging enabled

AWS S3 Bucket Logging Configuration

CloudFormation

High

Remove

S3 Bucket Server Access Logging Disabled in CloudFormation Template

Ensure the S3 bucket has access logging enabled

AWS S3 Bucket Logging Configuration

Terraform

High

Remove

S3 Bucket Without Logging Detected

Ensure that a retention period is specified for CloudWatch

\-

Terraform

Medium

Medium

\-

Ensure CPU requests are set

\-

Kubernetes

Medium

Medium

\-

Ensure CPU requests are set

\-

Terraform

Medium

Medium

\-

Associate file system tags with Amazon Elastic File System (EFS)

\-

CloudFormation

Low

Low

\-

Ensure that the labels in the metadata are valid

\-

Kubernetes

Low

Low

\-

Ensure that the labels in the metadata are valid

\-

Terraform

Low

Low

\-

Ensure that the S3 Bucket ACL only allows Read or Write access to specific users

AWS S3 Bucket Public Access Configuration

CloudFormation

High

High

Public Read/Write Access Detected for AWS S3 Bucket

Ensure that the S3 Bucket ACL only allows Read or Write access to specific users

AWS S3 Bucket Public Access Configuration

Terraform

High

High

AWS S3 bucket with public READ/WRITE access detected

Disable basic authentication on Google Kubernetes Engine (GKE)

GCP Google Kubernetes Engine Basic Authentication Status

Terraform

High

High

GCP GKE Basic Authentication Enabled Detected

Enable alias IP address ranges for Kubernetes Clusters

GCP Kubernetes Clusters with Alias IP Ranges Configuration

Terraform

High

Medium

GCP Kubernetes Cluster created without Alias IP Ranges or with invalid networking mode

Elasticsearch Domain With Vulnerable Policy

\-

Terraform

Medium

Medium

\-

Ensure that non-SSL connections are disabled for Redis Cache resources

\-

Terraform

Medium

Medium

\-

Ensure that CloudWatch Logging is enabled for API Gateway

\-

Terraform

Medium

Medium

\-

Ensure that the Google Project IAM Member Binding Service account does not have a token creator or account user role

\-

Terraform

Medium

Medium

\-

Ensure that Security Group access through 0.0.0.0/0 for RDP (port:3389) is removed

CloudFormation Security Groups RDP Access Restrictions

CloudFormation

High

High

RDP Unrestricted Access in Security Groups Detected

Ensure RDS storage is encrypted

AWS RDS DBCluster Storage Encryption Configuration

CloudFormation

High

Medium

Insecure RDS DBCluster Storage Encryption Configuration Detected

S3 Bucket SSE Disabled

S3 Bucket Encryption Configuration Validation

CloudFormation

High

Medium

Misconfigured or Missing S3 Bucket Encryption

Google Storage Bucket Level Access Disabled

\-

Terraform

Medium

Medium

\-

Ensure that ‘Auditing’ is set to ‘On’

Azure SQL Server Auditing Status

Terraform

High

Remove

Azure SQL Server Auditing Disabled

Ensure that the EC2 Instance does not have a public IP

AWS EC2 Subnet Public IP Mapping Configuration

CloudFormation

High

Medium

AWS EC2 Subnet has MapPublicIpOnLaunch enabled

Ensure that ‘Secure transfer required’ is set to ‘Enabled’

Azure Storage Account HTTPS Configuration

Terraform

High

High

Azure Storage Account Lacks Forced HTTPS

Ensure EBS with KMS key

\-

CloudFormation

Medium

Medium

\-

Cloud Storage Bucket Versioning Disabled

GCP Cloud Storage Bucket Versioning Configuration

Terraform

High

Medium

GCP Cloud Storage Bucket Versioning Disabled

Consider enabling CloudTrail multi-region

\-

CloudFormation

Medium

Medium

\-

Consider enabling CloudTrail multi-region

\-

Terraform

Medium

Medium

\-

Ensure that the AWS Relational Database Service (RDS) is using deletion protection

\-

CloudFormation

Medium

Medium

\-

Ensure that Security Groups do not use Meta IP (0.0.0.0/0)

CloudFormation Security Groups Open Ports Policy

CloudFormation

High

High

CloudFormation Security Groups Allows All Traffic

Ensure that Network Watcher is ‘Enabled’

Network Watcher Flow Logging Status

Terraform

High

Medium

Disabled Network Watcher Flow Log in Azure Detected

Enable content encoding on the API gateway

\-

CloudFormation

Medium

Medium

\-

Enable content encoding on the API gateway

\-

Terraform

Medium

Medium

\-

Check if OS Login is disabled for any VM instance

\-

Terraform

Medium

Medium

\-

Elasticsearch Without IAM Authentication

\-

Terraform

Medium

Medium

\-

Enable log connections for the PostgreSQL database

\-

Terraform

Medium

Medium

\-

Service Account with Improper Privileges

\-

Terraform

Medium

Medium

\-

Check the WAF configuration

\-

Terraform

Medium

Medium

\-

Ensure that ELB Listeners do not have Policies with insecure Protocols

AWS ELB Security Protocols Configuration

CloudFormation

High

High

Elastic Load Balancing Using Insecure Protocols Detected

Ensure that ELB Listeners do not have Policies with insecure Protocols

AWS ELB Security Protocols Configuration

Terraform

High

High

Insecure Protocol Detected in AWS ELB Security Policy

KMS Admin and CryptoKey Roles In Use

\-

Terraform

Medium

Medium

\-

Ensure ElasticCache memcache is enabled

AWS ElastiCache Cluster Engine Configuration

CloudFormation

High

Medium

Improper Engine Type on ElastiCache Detected

Ensure ElasticCache memcache is enabled

AWS ElastiCache Cluster Engine Configuration

Terraform

High

Medium

Memcached Enabled on AWS ElastiCache Cluster

Ensure that the Docker daemon socket is not exposed to containers

\-

Kubernetes

Low

Low

\-

Ensure that the Docker daemon socket is not exposed to containers

\-

Terraform

Low

Low

\-

Ensure AWS access key is not hard coded

\-

Terraform

Medium

Medium

\-

Ensure a valid object is targeted

\-

Kubernetes

Low

Low

\-

Ensure a valid object is targeted

\-

Terraform

Low

Low

\-

Ensure that ‘Auditing’ Retention is ‘greater than 90 days’ for SQL servers

Azure SQL Server Audit Retention Configuration

Terraform

High

Remove

Azure SQL Server Audit Retention Less Than 90 Days Detected

Ensure that the S3 Bucket only allows specific principals to access it

AWS S3 Bucket Access To Any Principal Configuration

Terraform

High

High

S3 Bucket Configured To Allow Access To All Principals

Ensure that the IAM User Login Profile password is not a plaintext string

\-

CloudFormation

Medium

Medium

\-

NAT gateways are recommended, and not the default route which permits all traffic, in Route Tables.

\-

CloudFormation

Medium

Medium

\-

Check if access to the Cloud Storage bucket should be limited

Google Cloud Storage Bucket Public Accessibility

Terraform

High

High

Publicly Accessible Google Cloud Storage Bucket Detected

Ensure that the Route53 Record Set is defined

\-

Terraform

Medium

Medium

\-

Ensure that the AWS CloudFormation has an embedded template

\-

Terraform

Low

Low

\-

Enable the Pod Security Policy controller

GCP Kubernetes Cluster Pod Security Policy Configuration

Terraform

High

Medium

Pod Security Policy Controller Disabled for GCP Kubernetes Cluster

Ensure CloudTrail is enabled in all regions

AWS CloudTrail Multi-Region Logging Activation

CloudFormation

High

Medium

AWS CloudTrail Multi-Region Not Enabled

Ensure CloudTrail is enabled in all regions

AWS CloudTrail Multi-Region Logging Activation

Terraform

High

Medium

AWS CloudTrail Multi-Region Logging Not Activated

Ensure that the Security Group does not allow unlimited outbound (egress) traffic

AWS EC2 Security Group Outbound Traffic Configuration

CloudFormation

High

High

Unrestricted Outbound Traffic Detected in EC2 Security Group

Ensure that Azure Kubernetes Service has a network policy defined.

Azure Kubernetes Service Network Policy Configuration

Arm

High

High

Azure Kubernetes Service Without Network Policy Defined Detected

Ensure that Azure Kubernetes Service has a network policy defined.

Azure Kubernetes Service Network Policy Configuration

Terraform

High

High

Improper Azure Kubernetes Service Network Policy Configuration Detected

Ensure S3 bucket is not publicly writeable

S3 Bucket Access Control List (ACL) Configuration

Terraform

High

High

Public Write Access Enabled on S3 Bucket ACL

IAM Role Policy passRole Allows All

\-

Terraform

Medium

Medium

\-

Ensure logging is enabled for MQ broker

\-

CloudFormation

Medium

Medium

\-

Ensure logging is enabled for MQ broker

\-

Terraform

Medium

Medium

\-

Ensure that the IP address of the DB Security Group is not ‘0.0.0.0/0’ (IPv4) or ‘::/0’ (IPv6)

AWS DB Security Group Public Scope Configuration

Terraform

High

High

Public IP Address Scope Detected in AWS DB Security Group

Ensure MSK cluster data is encrypted

\-

CloudFormation

Medium

Medium

\-

Ensure MSK cluster data is encrypted

\-

Terraform

Medium

Medium

\-

Ensure IAM policies that allow full “\*:\*” administrative privileges are not attached

AWS IAM Policies with Full Administrative Privileges

CloudFormation

High

High

Detected IAM Policy with Full Administrative Privileges

Ensure IAM policies that allow full “\*:\*” administrative privileges are not attached

AWS IAM Policies with Full Administrative Privileges

Terraform

High

High

IAM Policies with Full Administrative Privileges Detected

Enable Stackdriver Monitoring on Kubernetes Engine Clusters

GCP Kubernetes Engine Cluster Stackdriver Monitoring Configuration

Terraform

High

Remove

Missing or Invalid Stackdriver Monitoring Configuration in GCP Kubernetes Engine Cluster

Attach IAM policies to groups instead of users

\-

CloudFormation

Medium

Medium

\-

Ensure that the Cloud SQL database instance requires all incoming connections to use SSL

GCP SQL Database Instance SSL Requirement Configuration

Terraform

High

High

GCP SQL Database Instance Detected without SSL for Incoming Connections

Ensure that Lambda permission has been configured correctly

\-

CloudFormation

Low

Low

\-

Ensure that Lambda permission has been configured correctly

\-

Terraform

Low

Low

\-

Ensure that Security Group traffic to SSH (port:22) is limited

Security Groups Unrestricted Access to SSH

CloudFormation

High

High

Security Groups allows all traffic for SSH (port:22)

Ensure that Security Group traffic to SSH (port:22) is limited

Security Groups Unrestricted Access to SSH

Terraform

High

High

Public Accessibility of SSH Detected in AWS Security Group

Enable logging on cloud storage

GCP Cloud Storage Bucket Logging Configuration

Terraform

High

High

GCP Cloud Storage Bucket Without Logging

Enable PostgreSQL geo-redundant backups

Azure PostgreSQL Server Geo-Redundant Backup Configuration

Terraform

High

Low

Azure PostgreSQL Server without Geo-Redundant Backup

Google Compute Network Using Default Firewall Rule

\-

Terraform

Medium

Medium

\-

Ensure Container CPU Requests are Equal to Its Limits

Kubernetes Pod Resource Limits and Requests Configuration

Kubernetes

High

Remove

Non-Matching Kubernetes Pod Resource Limits and Requests Configured

Add multi-factor authentication (MFA) with the Cognito UserPool

\-

CloudFormation

Medium

Medium

\-

Add multi-factor authentication (MFA) with the Cognito UserPool

\-

Terraform

Medium

Medium

\-

Provide unpredictable SQL server admin account names

\-

Terraform

Medium

Medium

\-

Ensure that the ECR image tag is immutable

\-

CloudFormation

Medium

Medium

\-

Ensure that the ECR image tag is immutable

\-

Terraform

Medium

Medium

\-

EKS cluster logging is not enabled

\-

Terraform

Low

Low

\-

Enable filesystem encryption on Amazon Elastic Filesystem using KMS CMK customer-managed keys

Amazon EFS Filesystem Encryption via KMS CMK

CloudFormation

High

High

Non-encrypted Amazon EFS Filesystem or not using KMS CMK Detected

Enable filesystem encryption on Amazon Elastic Filesystem using KMS CMK customer-managed keys

Amazon EFS Filesystem Encryption via KMS CMK

Terraform

High

High

EFS Without KMS Key ID Detected

Ensure that Lambda permissions only allow specific principals

\-

CloudFormation

Medium

Medium

\-

Ensure that Lambda permissions only allow specific principals

\-

Terraform

Medium

Medium

\-

Minimize the admission of containers with capabilities assigned

\-

Kubernetes

High

High

\-

Ensure that the S3 bucket does not allow List actions from all principals

AWS S3 Bucket Policy List Actions Control

CloudFormation

High

High

AWS S3 Bucket Allows List Actions From All Principals

Ensure that the S3 bucket does not allow List actions from all principals

AWS S3 Bucket Policy List Actions Control

Terraform

High

High

S3 Bucket Allows List Action From All Principals Detected

Ensure that AWS::ApiGateway::UsagePlan is enabled for API Gateway

\-

Terraform

Medium

Medium

\-

App Service HTTP2 Disabled

\-

Terraform

Low

Low

\-

Ensure that IAM policies do not grant ‘AssumeRole’ permissions across all services

\-

CloudFormation

Low

Low

\-

Ensure that IAM policies do not grant ‘AssumeRole’ permissions across all services

\-

Terraform

Low

Low

\-

Disable legacy authorization in Kubernetes Engine Clusters

GCP Kubernetes Engine Legacy Authorization Status

Terraform

High

High

Enabled Legacy Authorization On GCP Kubernetes Engine Cluster Detected

Disk Encryption Disabled

\-

Terraform

Medium

Medium

\-

Ensure Key Vault is recoverable

Microsoft Key Vault Recoverability Settings

Arm

High

Low

Microsoft Key Vault Recoverability Settings Misconfiguration Detected

Ensure that the AWS Security Group egress has a single port

\-

CloudFormation

Medium

Medium

\-

Ensure the default security group of every VPC restricts all traffic

Default Security Groups Traffic Control

CloudFormation

High

High

Default Security Group Allowing Traffic Detected

Ensure the default security group of every VPC restricts all traffic

Default Security Groups Traffic Control

Terraform

High

High

Default Security Group Allows Unrestricted Inbound and Outbound Traffic

Ensure that the AWS Security Group Egress CIDR is not open to the world

\-

CloudFormation

Medium

Medium

\-

Ensure that automatic backup is configured for the AWS Relational Database Service (RDS)

\-

CloudFormation

Medium

Medium

\-

Ensure that automatic backup is configured for the AWS Relational Database Service (RDS)

\-

Terraform

Medium

Medium

\-

Ensure that the Auto Scaling Group has load balancers (ELBs)

\-

CloudFormation

Medium

Medium

\-

Ensure that the Auto Scaling Group has load balancers (ELBs)

\-

Terraform

Medium

Medium

\-

Ensure that the ELB is set up with SSL

Load Balancer SSL Configuration

CloudFormation

High

High

Load Balancer Detected Without SSL Configuration

Protect the Application Load Balancer (ALB) with a Web Application Firewall (WAF)

\-

Terraform

Medium

Medium

\-

Ensure API gateway allows secured access

API Gateway Method Authorization Restriction

CloudFormation

High

Medium

Open Authorization Detected in API Gateway Method

Ensure API gateway allows secured access

API Gateway Method Authorization Restriction

Terraform

High

Medium

Detected Open Access to AWS API Gateway Method

Ensure ‘Trusted Microsoft Services’ is enabled for Storage Account access

Azure Storage Account Trusted Microsoft Services Configuration

Arm

High

Medium

Trusted Microsoft Services not Enabled for Azure Storage Account

Ensure ‘Trusted Microsoft Services’ is enabled for Storage Account access

Azure Storage Account Trusted Microsoft Services Configuration

Terraform

High

Medium

Trusted Microsoft Services Not Enabled for Azure Storage Account

Ensure that CloudFront access log is enabled for the distribution

\-

CloudFormation

Medium

Medium

\-

Ensure that CloudFront access log is enabled for the distribution

\-

Terraform

Medium

Medium

\-

Apply a deny rule to all IP addresses

\-

CloudFormation

Medium

Medium

\-

Ensure SNS Topic is not publicly accessible

\-

CloudFormation

Medium

Medium

\-

Provide a description for the security group rule

\-

CloudFormation

Low

Low

\-

Ensure no SQL Databases allow ingress 0.0.0.0/0

Azure SQL Server Ingress Configuration

Arm

High

High

SQL Database Server Firewall allows all IP addresses

Ensure no SQL Databases allow ingress 0.0.0.0/0

Azure SQL Server Ingress Configuration

Terraform

High

High

All IP Addresses Allowed in Azure SQL Server Firewall

Elasticsearch Domain Not Encrypted Node To Node

\-

Terraform

Medium

Medium

\-

Ensure that the expiration date is set on all Secrets

Azure Key Vault Secret Expiration Date Configuration

Arm

High

Medium

Azure Key Vault Secret Without Expiration Date Detected

Ensure that the expiration date is set on all Secrets

Azure Key Vault Secret Expiration Date Configuration

Terraform

High

Medium

Azure Key Vault Secret Without Expiration Date Detected

Enable Google Container node pool auto-repair

\-

Terraform

Medium

Medium

\-

Global Accelerator Flow Logs Disabled

\-

Terraform

Low

Low

\-

EC2 Not EBS Optimized

\-

Terraform

Info

Info

\-

Handle an exposed, open port to the entire network

Network Security Rule for Azure Sensitive Port Exposure

Terraform

High

High

Sensitive Azure Network Security Rule Detected

Block connection requests through all Application Load Balancers (ALBs) over HTTP

Blocking HTTP Connections for AWS Application Load Balancers

CloudFormation

High

High

AWS ALBs Allowing HTTP Connection Requests Found

Block connection requests through all Application Load Balancers (ALBs) over HTTP

Blocking HTTP Connections for AWS Application Load Balancers

Terraform

High

High

AWS ALB Configured to Listen on HTTP

Ensure IAM groups are managed policies

\-

CloudFormation

Medium

Medium

\-

Ensure PSP doesn’t allow sharing host IPC namespace

\-

Kubernetes

Medium

Medium

\-

Ensure that the DB Instance does not have a public IP

AWS Database Security Group Public IP Configuration

Terraform

High

Medium

Public CIDR IP Detected in AWS Database Security Group

Dashboard is enabled

Kubernetes Dashboard Enabled

Kubernetes

High

Medium

Kubernetes Dashboard Is Enabled In Specification

Ensure that IAM User embeds managed policies

CloudFormation

Medium

Medium

Consider using custom SSL certificates

AWS CloudFront Default SSL Certificate Configuration

CloudFormation

High

High

Detected Default SSL Certificate in CloudFront Distribution

Consider using custom SSL certificates

AWS CloudFront Default SSL Certificate Configuration

Terraform

High

High

Default SSL Certificate Detected in AWS CloudFront Distribution

Ensure that SNS Topic does not have Allow and NotAction simultaneously

\-

CloudFormation

Medium

Medium

\-

Ensure that SNS Topic does not have Allow and NotAction simultaneously

\-

Terraform

Medium

Medium

\-

AKS Disk Encryption Set ID Undefined

\-

Terraform

Medium

Medium

\-

Ensure CloudFront uses secure ciphers

AWS CloudFront Distribution Secure Ciphers Usage

CloudFormation

High

Medium

Insecure Minimum Protocol Version for CloudFront Viewer Certificate

Ensure CloudFront uses secure ciphers

AWS CloudFront Distribution Secure Ciphers Usage

Terraform

High

Medium

Insecure Ciphers Detected in CloudFront Distribution

Ensure that the DB Instance is not publicly accessible

AWS RDS Database Instance Public Accessibility Configuration

Terraform

High

High

Public Accessibility Enabled on AWS RDS Database Instance

PSP With Added Capabilities

\-

Kubernetes

Medium

Medium

\-

PSP With Added Capabilities

\-

Terraform

Medium

Medium

\-

Ensure that the API Gateway method has been configured with an API key

\-

CloudFormation

Medium

Medium

\-

Ensure that the API Gateway method has been configured with an API key

\-

Terraform

Medium

Medium

\-

Ensure that the SQS Queue Policy does not allow NotAction

\-

CloudFormation

Medium

Medium

\-

Ensure user data doesn’t contain private key

AWS Launch Configuration User Data Private Key Handling

CloudFormation

High

High

Encoded RSA Private Key Detected in User Data

Ensure user data doesn’t contain private key

AWS Launch Configuration User Data Private Key Handling

Terraform

High

High

Encoded RSA private key detected in AWS Launch Configuration user data

Ensure that the certificate uses an RSA key with a minimum size of 256 bytes

AWS Certificate RSA Key Byte Length Check

Terraform

High

Medium

RSA Key Length Less Than 256 Bytes Detected in AWS Service Certificate

Ensure that Azure Active Directory Admin is configured

Azure Active Directory Administrator for SQL Server Configuration Check

Terraform

High

Medium

Azure Active Directory Administrator Not Configured for SQL Server

Ensure that the Key Management System (KMS) encrypts storage on instances that might host a database

AWS KMS Encrypted Storage Configuration

CloudFormation

High

High

Detected Storage Not Encrypted by KMS for Database Hosting Instances

Enable data encryption-at-rest on ElasticSearch domains

AWS Elastic Search Domain Data-at-Rest Encryption Configuration

CloudFormation

High

Medium

Data-at-Rest Encryption Not Enabled for AWS Elastic Search Domain

Enable data encryption-at-rest on ElasticSearch domains

AWS Elastic Search Domain Data-at-Rest Encryption Configuration

Terraform

High

Medium

ElasticSearch Encryption at Rest Disabled

Increase the log profile retention policy

\-

Arm

Medium

Medium

\-

Ensure that the AWS IAM password policy has a lowercase character

\-

CloudFormation

Medium

Medium

\-

Ensure that the AWS IAM password policy has a lowercase character

\-

Terraform

Medium

Medium

\-

Provide unpredictable name for SQL Server Active Directory Account Name

\-

Terraform

Medium

Medium

\-

Ensure a support role has been created to manage incidents with AWS Support (Configured in CloudFormation files) (v2)

\-

CloudFormation

Medium

Medium

\-

Ensure that the AWS Security Group Ingress CIDR uses recommended prefix lengths

\-

CloudFormation

Low

Low

\-

Enable master authentication on Kubernetes Engine Clusters

GCP Kubernetes Engine Cluster Master Authentication Configuration

Terraform

High

Medium

GCP Kubernetes Engine Cluster Master Authentication Misconfiguration Detected

Ensure that instances are not configured to use the default service account with full access to all Cloud APIs

GCP VM Instance Default Service Account Configuration

Terraform

High

High

GCP VM Instance Utilizing Default Service Account with Full Cloud API Access

Ensure that an EncryptionKey is defined for CodeBuild

\-

CloudFormation

Medium

Medium

\-

Ensure that the SQS policy only allows required actions

\-

Terraform

Medium

Medium

\-

Verify if access to SQL Analysis Services Port 2383 (TCP) can be restricted

\-

Terraform

Medium

Medium

\-

Ensure that the IAM role only allows specific principals to assume it

\-

CloudFormation

Low

Low

\-

Ensure that the IAM role only allows specific principals to assume it

\-

Terraform

Low

Low

\-

Ensure default seccomp profile set to docker/default or runtime/default

Kubernetes PodSecurityPolicy Seccomp Profile Configuration

Kubernetes

High

Medium

Inappropriate Seccomp Profile for Kubernetes PodSecurityPolicy Detected

DOCDB Cluster Encrypted With AWS Managed Key

Terraform

Medium

Medium

AWS Redshift Clusters must not be publicly accessible

AWS Redshift Cluster Public Accessibility Configuration

CloudFormation

High

High

Misconfigured AWS Redshift Cluster Public Accessibility Detected

AWS Redshift Clusters must not be publicly accessible

AWS Redshift Cluster Public Accessibility Configuration

Terraform

High

High

AWS Redshift Cluster Public Accessibility Misconfiguration Detected

Ensure that stack retention is enabled

\-

Terraform

Medium

Medium

\-

ECS Cluster with Container Insights Disabled

\-

Terraform

Low

Low

\-

Ensure that the AWS DynamoDB is encrypted using AWS Managed CMK

AWS DynamoDB Table Encryption With AWS Managed CMK

CloudFormation

High

High

DynamoDB Table Not Encrypted with AWS Managed CMK

Ensure that SSH access is restricted from the internet

Azure Network Security Rule SSH Exposed to Internet

Arm

High

High

Unrestricted SSH Access Detected in Azure Network Security Group

Ensure that SSH access is restricted from the internet

Azure Network Security Rule SSH Exposed to Internet

Terraform

High

High

SSH Port Exposed to Internet in Azure Network Security Group or Rule

ECR Repository Without Policy

\-

Terraform

Low

Low

\-

Ensure that default service accounts are not actively used

Kubernetes Default Service Accounts Usage

Kubernetes

High

Medium

Active Use of Default Service Account Detected

Ensure that default service accounts are not actively used

Kubernetes Default Service Accounts Usage

Terraform

High

Medium

Default Service Account Used in Kubernetes Configuration

Ensure Host IPC namespace is not shared

Kubernetes Pod IPC Namespace Isolation

Kubernetes

High

Medium

Kubernetes Pod Sharing Host IPC Namespace Detected

Ensure API gateway using secured policy

API Gateway Security Policy Configuration

CloudFormation

High

High

API Gateway Lacking Security Policy or Not Using TLS 1.2

Ensure API gateway using secured policy

API Gateway Security Policy Configuration

Terraform

High

High

API Gateway Without Correct Security Policy Detected

Ensure that ’network\_rules’ have been defined for the public storage account

Azure Storage Account Public Network Access

Terraform

High

Medium

Azure Storage Account Network Rules Open to Public Detected

Ensure server parameter ’log\_duration’ is set to ‘ON’ for PostgreSQL Database Server

Azure PostgreSQL ’log\_duration’ Setting Configuration

Terraform

High

Remove

PostgreSQL ’log\_duration’ Parameter Not Set to ‘ON’

Ensure ‘Enforce SSL connection’ is set to ‘ENABLED’ for PostgreSQL Database Server

Azure PostgreSQL Server SSL Enforcement Configuration

Terraform

High

High

Azure PostgreSQL Server Configuration with Disabled SSL Enforcement Detected

Ensure Azure Instances Using Strong Authentication (SSH Keys)

Azure Virtual Machine Password Authentication Check

Arm

High

Medium

Basic Authentication for Azure Instances Detected

Ensure Azure Instances Using Strong Authentication (SSH Keys)

Azure Virtual Machine Password Authentication Check

Terraform

High

Medium

Password Authentication Enabled for Azure Virtual Machine

Enable snapshot encryption on Amazon Elastic Block Store (EBS)

AWS EBS Volume Snapshot Encryption Configuration

Terraform

High

Medium

Unencrypted AWS EBS Volume Snapshot Detected

Ensure RDS cluster storage is encrypted

AWS RDS Cluster Storage Encryption

Terraform

High

Medium

Unencrypted AWS RDS Cluster Storage Detected

Ensure that Security Groups do not have open admin ports

IaC Security Groups Ports Configuration

CloudFormation

High

High

Prohibited Ports Open in Security Groups Detected

Ensure that MFA is used for user authentication

AWS IAM User Policy Without MFA

Terraform

High

High

Root User Not Authenticated With MFA in IAM User Policy

S3 bucket with ignore public ACL

\-

Terraform

Low

Low

\-

Consider using a Container-Optimized OS (COS) for Kubernetes Engine Cluster node images

GCP Node Image Type for Kubernetes Engine Clusters

Terraform

High

Low

Non-Container-Optimized OS (COS) Detected in Kubernetes Engine Clusters Node Image

Ensure that a GuardDuty detector is enabled

\-

CloudFormation

Medium

Medium

\-

Ensure that a GuardDuty detector is enabled

\-

Terraform

Medium

Medium

\-

SageMaker must have disabled internet access and root access for Creating Notebook Instances.

\-

CloudFormation

Medium

Medium

\-

Ensure that AWS config rules identify encrypted volumes as a source

\-

CloudFormation

Medium

Medium

\-

Ensure that AWS config rules identify encrypted volumes as a source

\-

Terraform

Medium

Medium

\-

Ensure that KMS only allows specific principals to assume it

\-

CloudFormation

Medium

Medium

\-

Ensure that RDP access is restricted from the Internet

Google Cloud Firewall Ingress For RDP Access

Terraform

High

High

Ingress for RDP Access Allowed in Google Cloud Firewall

Ensure that the S3 bucket is not configured with all permissions

AWS S3 Bucket Access Policy Configuration

CloudFormation

High

High

S3 Bucket with All Permissions Detected

Ensure that the S3 bucket is not configured with all permissions

AWS S3 Bucket Access Policy Configuration

Terraform

High

High

S3 Bucket With All Permissions Detected

Ensure that Lambda runs via a private API Gateway

\-

CloudFormation

Medium

Medium

\-

Ensure that Lambda runs via a private API Gateway

\-

Terraform

Medium

Medium

\-

Shielded VM Disabled

\-

Terraform

Medium

Medium

\-

Ensure no added capabilities allowed in PSP

Kubernetes Pod Security Policy Extra Capabilities Check

Kubernetes

High

Medium

Extra Capabilities Detected in Pod Security Policy

Ensure that DNSSEC is enabled for Cloud DNS

GCP Cloud DNS Zone DNSSEC Configuration

Terraform

High

Medium

GCP Cloud DNS managed zone without DNSSEC detected

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
