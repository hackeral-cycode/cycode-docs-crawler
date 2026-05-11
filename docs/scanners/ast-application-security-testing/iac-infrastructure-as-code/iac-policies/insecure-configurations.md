# Insecure Configurations | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/insecure-configurations

---

# Insecure Configurations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/insecure-configurations.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

API Gateway Lacking Security Policy or Not Using TLS 1.2

This policy checks whether an AWS API Gateway has a security policy defined and if it is configured to use TLS 1.2. Implementing these settings is crucial for adhering to best practices for security and data protection.

High

AWS

Rego Query

API Gateway Without Correct Security Policy Detected

This policy checks whether an AWS API Gateway has a security policy defined and if it is configured to use TLS 1.2. Implementing these settings is crucial for adhering to best practices for security and data protection.

High

AWS

Rego Query

AWS Redshift Cluster Public Accessibility Misconfiguration Detected

This policy checks if a AWS Redshift Cluster is publicly accessible. All RedShift clusters must not be publicly accessible to minimize potential security vulnerabilities. The ‘PubliclyAccessible’ property must be defined and set to false.

High

AWS

Public Exposure, Rego Query

Default SSL Certificate Detected in AWS CloudFront Distribution

This policy validates the SSL certificate configuration for AWS CloudFront distributions. Using custom SSL certificates is critical for limiting access to content only to defined users by utilizing an alternate domain name rather than the default one.

High

AWS

Certification, Rego Query

Detected AWS KMS Key with Overly Permissive Access Policy

This policy checks for the secure configuration of an AWS KMS key access policy. If the policy for the KMS key permits any principle to perform any action on any resource, it exposes all data encrypted with the key to potential unauthorized access. To maintain a high standard of data security, it is crucial that KMS key access policy restricts access to only necessary services and identities.

High

AWS

Vulnerabilities, Rego Query

Detected Default SSL Certificate in CloudFront Distribution

This policy validates the SSL certificate configuration for AWS CloudFront distributions. Using custom SSL certificates is critical for limiting access to content only to defined users by utilizing an alternate domain name rather than the default one.

High

AWS

Certification, Rego Query

Inadequate Password Policies in AWS IAM User Login Profiles Detected

This policy verifies that the AWS IAM user login profiles enforce mandatory password resets and maintain a satisfactory password length. Adherence to such password policies positively contributes to a robust security posture.

High

AWS

IAM, Credentials, Rego Query

MFA Not Enforced for AWS IAM User Authentication

This policy checks whether users authenticate using Multi-factor Authentication (MFA) in the AWS IAM user policy. Enforcing MFA for user authentication provides an additional layer of security and reduces the risk of unauthorized access.

High

AWS

Authentication, Rego Query

Misconfigured AWS Redshift Cluster Public Accessibility Detected

This policy checks if a AWS Redshift Cluster is publicly accessible. All RedShift clusters must not be publicly accessible to minimize potential security vulnerabilities. The ‘PubliclyAccessible’ property must be defined and set to false.

High

AWS

Public Exposure, Rego Query

Public Accessibility Enabled on AWS RDS Database Instance

This policy checks if the ‘publicly\_accessible’ setting is correctly configured for AWS RDS Database Instances. To secure data and restrict unauthorized access, this property should not be set to true.

High

AWS

Public Exposure, Rego Query

Publicly Accessible RDS Instance Detected

This policy checks if the AWS RDS instances are configured to be publicly accessible. Publicly accessible RDS instances can pose a security risk as they can be accessed from outside the VPC. The setting ‘PubliclyAccessible’ should ideally be set to false to avoid such risks.

High

AWS

Public Exposure, Rego Query

Root User Not Authenticated With MFA in IAM User Policy

This policy checks if the root user of the AWS IAM user policy is authenticated with Multifactor Authentication (MFA). This is a critical security measure to ensure that users are prompted for additional authentication information when they sign in, providing an added level of identity verification.

High

AWS

Authentication, Rego Query

S3 Bucket Without Restriction of Public Access Detected

This policy validates if the AWS S3 Bucket restricts public bucket access. Restricting public access to S3 buckets prevents unauthorized access and potential data leakage.

High

AWS

Public Exposure, Rego Query

The S3 bucket used to store CloudTrail logs is publicly accessible

High

AWS

Public Exposure

Azure App Service FTPS Not Enforced

This policy checks if the FTPS enforcement setting is enabled in the Azure App Service’s configuration. For enhanced data protection and to comply with security best practices, this setting must be enabled.

High

Azure

Rego Query

Azure Kubernetes Service (AKS) API Exposed Publicly

The Azure Kubernetes Service (AKS) API should not be publicly accessible. Disabling its private cluster option exposes it to the internet, potentially leading to unauthorized access. To protect the data and configuration settings of AKS clusters, always enable private cluster communication.

High

Azure

Rego Query

An identical alias cannot be used in different FROMs

An identical alias cannot be used in different FROMs

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

COPY –from refers to the current FROM alias

COPY –from cannot mention existing FROM alias as it cannot copy from itself

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

COPY with 2 or more arguments should end with slash

If more than two arguments are used in COPY instruction, the last argument should end with a slash (/)

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Multiple ENTRYPOINT instructions

Only one ENTRYPOINT should be defined in a Dockerfile

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Port out of range

Unix ports that are out of range from 0 to 65535 are exposed

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Ports, Rego Query

RUN should not include sudo commands

Using sudo in RUN is not a recommended approach security-wise

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Specific user should be defined

The image will run as root unless a lesser privileged user is defined

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

WORKDIR path is not an absolute path

Absolute paths should be used for your WORKDIR

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Amazon EKS Public Endpoint Enabled

This policy checks if the public endpoint access setting of an Amazon EKS cluster is set to false. This is important for maintaining security as enabling public access might expose the cluster to potential risks.

Medium

AWS

Public Exposure, Rego Query

API Gateway Stage without SSL Client Certificate

This policy verifies the association of SSL client certificate to AWS API Gateway Stages to ensure secure and authorized API communications. Enabling SSL client certificates provide an added level of security by verifying the requester’s identity.

Medium

AWS

Rego Query

AWS EC2 Instance Detected Without VPC

This policy checks if the AWS EC2 instances are configured within a VPC (Virtual Private Cloud). Instances outside of a VPC can be more vulnerable to security risks.

Medium

AWS

Rego Query

AWS EC2 Subnet has MapPublicIpOnLaunch enabled

This policy verifies the AWS EC2 Subnet configuration to ensure that public IP mapping is disabled to prevent unintended exposure of resources on the internet.

Medium

AWS

Public Exposure, Rego Query

AWS IAM Account Password Policy Does Not Allow Password Changes

This policy validates the ability of users to change their passwords under the AWS IAM Account password policy. Enabling this setting enhances user account management security and mitigates potential security vulnerabilities.

Medium

AWS

Credentials, Rego Query

AWS KMS Customer Master Key Unusable Status Detected

This policy ensures that all AWS Key Management Service (KMS) Customer Master Keys (CMKs) are set as usable by confirming the ‘is\_enabled’ attribute is set to true. A usable CMK is crucial for proper encryption and decryption processes.

Medium

AWS

Stale Users & Services, Rego Query

AWS Lambda Function Detected Without Tags

This policy mandates the association of tags to all AWS Lambda Functions. Proper tagging provides better management, cost tracking and facilitates fine-grained access control. Un-tagged Lambda functions can lead to operational, financial and security risk.

Medium

AWS

Rego Query

AWS Lambda Function Tracing Configuration Not Found or Inactive

This policy checks if TracingConfig is enabled for AWS Lambda functions. Enabling tracing provides insights into the execution of the functions, helping understand their behavior and optimize their performance.

Medium

AWS

Rego Query

AWS Lambda Function Without Associated Tags Detected

This policy mandates the association of tags to all AWS Lambda Functions. Proper tagging provides better management, cost tracking and facilitates fine-grained access control. Un-tagged Lambda functions can lead to operational, financial and security risk.

Medium

AWS

Rego Query

AWS Lambda Functions Without Active Tracing Config Detected

This policy checks if TracingConfig is enabled for AWS Lambda functions. Enabling tracing provides insights into the execution of the functions, helping understand their behavior and optimize their performance.

Medium

AWS

Rego Query

AWS S3 Bucket without MFA Delete Enabled Found

This policy checks if the MFA Delete option is enabled for AWS S3 Buckets. Having this option active adds an extra layer of security to your S3 objects by requiring multi-factor authentication (MFA) to delete objects.

Medium

AWS

Authentication, Rego Query

CloudFront Distribution Without Minimum Protocol TLS 1.2 Detected

This policy checks if CloudFront distribution has minimum protocol version set to TLS 1.2 as per secure internet protocols standard. This standard ensures that all client connections using lower or weak protocols are rejected by enforcing the secure protocol.

Medium

AWS

Rego Query

Detected Open Access to AWS API Gateway Method

This policy verifies that the API Gateway Method has an authorization restriction, except for the HTTP OPTIONS method. Enforcing authorization restrictions on API Gateway methods is crucial to prevent unauthorized access and potential security threats.

Medium

AWS

Rego Query

Detected Privileged Container Properties in AWS Batch Job Definition

This policy verifies if privileged container properties are enabled in AWS Batch Job Definitions. Allowing privileged container may escalate security risks such as unauthorized access and data infringement.

Medium

AWS

Least Privilege, Rego Query

ECR Repository Image Tag Is Not Immutable

This policy ensures that the image tag of the AWS Elastic Container Registry (ECR) repository is set to immutable. This prevents overwriting of image tags, which could potentially lead to unexpected changes in running applications or denial of service.

Medium

AWS

Rego Query

IAM User LoginProfile Password in Plaintext Detected

This policy checks if the AWS IAM user’s login profile password is not in plaintext. In order to secure user data and credentials, the user login profile password should be encrypted.

Medium

AWS

IAM, Rego Query

Improper AWS EC2 Route Table Configuration Detected

This policy checks the configuration of the AWS EC2 Route Tables. The policy validates that all traffic is not permitted by default and that NAT gateways are utilized, enhancing the security of the network.

Medium

AWS

Rego Query

Insecure Minimum Protocol version for AWS CloudFront Distribution Detected

This policy checks if CloudFront distribution has minimum protocol version set to TLS 1.2 as per secure internet protocols standard. This standard ensures that all client connections using lower or weak protocols are rejected by enforcing the secure protocol.

Medium

AWS

Rego Query

Insufficient AWS Organizations’ Policies Configuration Detected

This policy verifies that AWS Service Control Policies (SCPs) are configured to ensure full control over AWS services and actions across multiple AWS accounts. SCPs provide central control over the maximum available permissions for all accounts in your organization. Proper configuration is crucial to maintain secure, efficient, and effective management of resources and actions.

Medium

AWS

Rego Query

Missing SSL Client Certificate in AWS API Gateway Stage

This policy verifies the association of SSL client certificate to AWS API Gateway Stages to ensure secure and authorized API communications. Enabling SSL client certificates provide an added level of security by verifying the requester’s identity.

Medium

AWS

Rego Query

Multiple Access Keys for IAM User Detected

This policy checks if an AWS IAM user has more than one access key. To maintain a secure environment and reduce the risk of unauthorized access, it is limited to one access key per user.

Medium

AWS

Rego Query

Mutable AWS ECR Repository Image Tag Configuration Detected

This policy ensures that the image tag of the AWS Elastic Container Registry (ECR) repository is set to immutable. This prevents overwriting of image tags, which could potentially lead to unexpected changes in running applications or denial of service.

Medium

AWS

Rego Query

Open Authorization Detected in API Gateway Method

This policy verifies that the API Gateway Method has an authorization restriction, except for the HTTP OPTIONS method. Enforcing authorization restrictions on API Gateway methods is crucial to prevent unauthorized access and potential security threats.

Medium

AWS

Rego Query

Privileged Container Properties Detected in AWS Batch Job Definition

This policy verifies if privileged container properties are enabled in AWS Batch Job Definitions. Allowing privileged container may escalate security risks such as unauthorized access and data infringement.

Medium

AWS

Least Privilege, Rego Query

Public CIDR IP Detected in AWS Database Security Group

This policy checks if the ingress CIDR IP address specified in the AWS Database Security Group is public. To maintain secure network access to the database, this setting must be configured to a private IP address.

Medium

AWS

Public Exposure, Rego Query

Publicly Accessible Amazon MQ Broker Detected

This policy verifies that no Amazon MQ Brokers are publicly accessible in the infrastructure. Limiting public access to your MQ Brokers helps protect your resources from unauthorized access.

Medium

AWS

Public Exposure, Rego Query

Publicly Accessible AWS MQ Broker Detected

This policy verifies that no Amazon MQ Brokers are publicly accessible in the infrastructure. Limiting public access to your MQ Brokers helps protect your resources from unauthorized access.

Medium

AWS

Public Exposure, Rego Query

RSA Key Length Less Than 256 Bytes Detected in AWS Service Certificate

This policy checks if the certificate used in AWS services like API Gateway Domain Name, IAM Server Certificate, and ACM Certificate uses an RSA key with a length of at least 256 bytes. Utilizing a longer key length helps in providing stronger security.

Medium

AWS

Rego Query

SageMaker Notebook Instance with Enabled Direct Internet Access Detected

This policy ensures that direct internet access is disabled on SageMaker notebook instances in AWS CloudFormation. It’s important to limit online access for sensitive resources like SageMaker notebook instances to prevent potential security threats.

Medium

AWS

Root, Public Exposure, Rego Query

Security Configuration Missing for EMR Cluster

This policy verifies if the security configuration is defined for an EMR Cluster. For maintaining secure data processing and to avoid potential security risks, this configuration should be defined.

Medium

AWS

Rego Query

Static Website Hosting Detected on AWS S3 Bucket

This policy checks if any static websites are being hosted on AWS S3 buckets, which could be a potential security risk if not performed under secure conditions.

Medium

AWS

Rego Query

Unusable Customer Master Key Configuration Detected

This policy ensures that all AWS Key Management Service (KMS) Customer Master Keys (CMKs) are set as usable by confirming the ‘is\_enabled’ attribute is set to true. A usable CMK is crucial for proper encryption and decryption processes.

Medium

AWS

Stale Users & Services, Rego Query

Basic Authentication for Azure Instances Detected

This policy checks if Azure Virtual Machine instances have password authentication enabled. For security reasons, password-based authentication should be disabled to reduce the risk of unauthorized access, specifically for Linux VMs.

Medium

Azure

Authentication, SSH, Rego Query

Password Authentication Enabled for Azure Virtual Machine

This policy checks if Azure Virtual Machine instances have password authentication enabled. For security reasons, password-based authentication should be disabled to reduce the risk of unauthorized access, specifically for Linux VMs.

Medium

Azure

Authentication, SSH, Rego Query

apk add should be executed with pinned version

Executing apk add without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

apt-get should declare a pinned version

When executing apt-get, package versions should be pinned

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

apt-get should include -y flag

Executing apt-get without -y may require manual input

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

COPY –from without existing FROM alias

When using COPY –from command, it is expected to use the FROM alias that was defined before

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

dnf clean all should be used after dnf install

In order to clean package cached data, dnf clean all should be executed after dnf install

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

dnf install should include a specific version

Executing dnf install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

FROM instruction used with –platform flag

It is not recommended to use the –platform flag with FROM instruction

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

gem install executed without specifying a version

Executing gem install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

JSON format should be used in CMD and ENTRYPOINT instructions

Users should use JSON format when declaring CMD and ENTRYPOINT instructions

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Meaningful tag should be used

Using latest as a tag does not provide sufficient information regarding the image, consider using a more informative tag

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Multiple CMD instructions

Only one CMD can be defined in a Dockerfile

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

pip install should be executed with pinned version

Executing pip install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

pip install should be executed without cache

pip install should be used with –no-cache-dir flag to reduce the image size

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

RUN should not include cd command

Use WORKDIR instead of navigating to a specific path using cd command

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

SHELL instruction should not be used

RUN instruction should be used instead of SHELL

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

SSH, Rego Query

Update and install should be executed in the same RUN instruction

Update and install commands should not be executed in separate RUN instructions, but should be combined using &&

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Use apt-get or apt-cache instead of apt

Usage of apt is generally discouraged and is considered unstable

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

User should not be left ‘root’

If you had to use ‘root’ user in your Dockerfile, make sure to change it at the end to a less privileged user to avoid abuse

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Permissions, Root, Rego Query

User should use either wget or curl

Use either wget or curl, there is no need to include both commands that act in the same manner

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

yum clean all should be used after yum install

In order to clean package cached data, yum clean all should be executed after yum install

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

yum install executed without specifying a version

Executing yum install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

yum should include -y flag

Executing yum without -y may require manual input

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

zypper install should include a specific version

Executing zypper install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

zypper should be used with non-interactive switch

Executing zypper should be used with non-interactive switch to remove manual input

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Disabled Google Storage Bucket Level Access Detected

This policy verifies that the Google Storage Bucket Level Access is enabled. Enabling this feature provides a uniform permissions environment for each object in the bucket, improving security by eliminating the risk of Access Control Lists (ACLs) accidentally allowing broader access to objects.

Medium

GCP

Rego Query

GCP Compute Instance Launched Without Shielded VM

This policy verifies that Compute instances in Google Cloud Platform (GCP) are launched with Shielded VM enabled. Shielded VMs provide verifiable integrity to Virtual Machines, ensuring they are launched without security vulnerabilities, reducing the risk of insider attacks and improving the security posture.

Medium

GCP

Rego Query

Open Access to AWS API Gateway Method Detected

This policy verifies the authorization configuration for AWS API Gateway methods, specifically checking for methods that have authorization mode set to ‘NONE’. These methods are openly accessible, making them potential security risks. It is recommended to use appropriate authorization strategies for all API Gateway methods.

Low

AWS

Rego Query

Public Access to S3 Bucket Not Blocked

This policy verifies the ‘ignore public ACL’ setting for AWS S3 bucket public access block. To prevent unrestricted public access to S3 buckets, this setting must be enabled.

Low

AWS

Public Exposure, Rego Query

HTTP/2 Disabled in Azure App Service

This policy ensures that the HTTP/2 protocol is enabled for Azure App Services, which can help enhance performance and security of your web apps. By enabling HTTP/2, your web apps can benefit from the features provided by the protocol such as reduced latency, multiplexing, and header compression.

Low

Azure

Rego Query

Avoid exposing port 22

Exposing port 22 should only be done when absolutely necessary

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

SSH, Ports, Rego Query

Avoid using Add to fetch packages

Use either curl or wget to fetch packages instead of Add

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

chown should not be used

Only execution permission should be set rather than changing ownership

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Permissions, Rego Query

HEALTHCHECK instruction should be used

It is recommended to use the HEALTHCHECK instruction to allow Docker to test the container well being

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Use COPY instruction instead of ADD instruction

COPY instruction should be used instead of ADD (except for tar files)

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Use LABEL instruction instead of MAINTAINER

LABEL instruction is considered more recommended than MAINTAINER instruction

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Prevent apt-get from installing additional packages

apt-get should be used with –no-install-recommends flag

Info

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Running specific POSIX commands or run utilities should be avoided

It is not recommended to execute some POSIX commands/interactive utilities from within a Docker container

Info

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
