# Identity and Access Management | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/identity-and-access-management

---

# Identity and Access Management

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/identity-and-access-management.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

Active AWS Root Account Access Keys Detected

This policy verifies that the root account does not possess any active AWS IAM access keys. Active access keys associated with the root account represent a significant security risk and should be deactivated.

High

AWS

Permissions, Root, Rego Query

AWS IAM User Without MFA Detected

This policy evaluates the configuration of MFA (Multi-Factor Authentication) for AWS IAM User. MFA adds an extra layer of protection on top of a user name and password to secure IAM users’ credentials. It is recommended to require users to authenticate with MFA, including both root and IAM users.

High

AWS

Authentication, Rego Query

AWS S3 Bucket Allows List Actions From All Principals

This policy ensures that List actions on AWS S3 Buckets are not permitted for all principals. This prevents potential unauthorized access to private data or unauthorized data manipulation or deletion by limiting the Effect to ‘Allow’ only when the ‘Action’ is List, for specific principals.

High

AWS

Rego Query

AWS S3 bucket with public READ/WRITE access detected

This policy checks if the AWS S3 bucket is publicly accessible for READ/WRITE. This configuration can pose a significant security risk, making it crucial to prevent unrestricted public access to S3 buckets.

High

AWS

Rego Query

Detected Access Keys Associated with AWS IAM Root Account

This policy checks if there are any access keys associated with the root AWS IAM account. Having access keys linked to the root account exposes security risks such as potential unauthorized access and compromises account integrity.

High

AWS

IAM, Root, Rego Query

Detected AWS S3 Bucket without Public Access Restriction

This policy checks if the AWS S3 bucket has restricted public access. Public access should be restricted to uphold the security of data stored in the S3 bucket, ensuring it is not accessible to unauthorised individuals.

High

AWS

Public Exposure, Rego Query

Detected IAM Policy with Full Administrative Privileges

This policy detects AWS IAM policies providing full administrative privileges across all resources. It checks whether any IAM policy allows full ("\*") access rights to all resources. This high-level of privileges can lead to potential unauthorized access and alterations, defeating the principle of least privilege and posing major security risks.

High

AWS

Least Privilege, Permissions, IAM, Rego Query

Detected S3 Bucket Policy Allowing Get Actions From All Principals

This policy ensures that S3 Buckets do not allow Get Actions from all principals to prevent unauthorized data tampering, deletion, or leakage of private information over the internet. The policy verifies that the ‘Effect’ must not be ‘Allow’ when the ‘Action’ is ‘Get’ for all principals.

High

AWS

Rego Query

Detected S3 Bucket that Allows All Principals to Execute Put Actions

This policy verifies that S3 buckets in CloudFormation aren’t configured to allow put actions from all principals. Allowing such behavior can lead to unauthorized data tampering or deletion, and the possibility of leaking private information to the entire internet.

High

AWS

Rego Query

Detected S3 Bucket with Public Read Access

This policy checks if S3 buckets have a public read access control configuration set. Publicly accessible S3 buckets pose a security risk and data exposure, therefore, this setting must not be enabled.

High

AWS

Permissions, Least Privilege, Rego Query

Exposed AWS SQS Queue Detected

This policy checks for dangerous permissions in the Action statements of an SQS Queue Policy. Granting broad permissions could potentially expose the queue to various attack vectors.

High

AWS

Permissions, Rego Query

IAM Policies with Full Administrative Privileges Detected

This policy detects AWS IAM policies providing full administrative privileges across all resources. It checks whether any IAM policy allows full ("\*") access rights to all resources. This high-level of privileges can lead to potential unauthorized access and alterations, defeating the principle of least privilege and posing major security risks.

High

AWS

Least Privilege, Permissions, IAM, Rego Query

Missing MFA in AWS IAM User Authentication

This policy checks if AWS IAM user authentication includes Multi-factor Authentication (MFA). It is crucial to ensure an additional layer of security by enforcing MFA.

High

AWS

Authentication, Root, Rego Query

Open Read Access Detected in S3 Bucket Policy

This policy checks if an S3 bucket Access Control List (ACL) gives read permissions to any authenticated AWS user. This configuration could unintentionally expose private data to authenticated users who do not require access. It is critical to limit access to S3 buckets to maintain data security and comply with best practices.

High

AWS

Rego Query

Public Policy Configuration Missing or Misconfigured for AWS S3 Bucket

This policy confirms if public policy block is enacted for an AWS S3 Bucket which ensures restricted access and higher data protection. The absence or misconfiguration of public policy block may lead to data exposure.

High

AWS

Public Exposure, Rego Query

Public Read/Write Access Detected for AWS S3 Bucket

This policy checks if the AWS S3 bucket is publicly accessible for READ/WRITE. This configuration can pose a significant security risk, making it crucial to prevent unrestricted public access to S3 buckets.

High

AWS

Rego Query

Root User Access Keys Found on AWS IAM

This policy verifies that the root account does not possess any active AWS IAM access keys. Active access keys associated with the root account represent a significant security risk and should be deactivated.

High

AWS

Permissions, Root, Rego Query

S3 Bucket ACL Allows Read Access to All Authenticated Users

This policy checks if an S3 bucket Access Control List (ACL) gives read permissions to any authenticated AWS user. This configuration could unintentionally expose private data to authenticated users who do not require access. It is critical to limit access to S3 buckets to maintain data security and comply with best practices.

High

AWS

Rego Query

S3 Bucket Allowing Put Actions from All Principals Detected in CloudFormation

This policy verifies that S3 buckets in CloudFormation aren’t configured to allow put actions from all principals. Allowing such behavior can lead to unauthorized data tampering or deletion, and the possibility of leaking private information to the entire internet.

High

AWS

Rego Query

S3 Bucket Allowing Restore Actions from All Principals Detected

This policy checks the permissions of AWS S3 bucket policies, specifically for any restore actions that allow all principals. This is important as allowing restore actions to all principals exposes the risk of unauthorized data tampering or potential data leaks.

High

AWS

Rego Query

S3 Bucket Allows Actions From All Principals

This policy checks if the AWS S3 bucket has restricted public access. Public access should be restricted to uphold the security of data stored in the S3 bucket, ensuring it is not accessible to unauthorised individuals.

High

AWS

Public Exposure, Rego Query

S3 Bucket Allows Delete Actions From All Principals

This policy checks if an AWS S3 Bucket policy allows delete actions from all principals. To maintain data security, avoid leaking private information to the entire internet, and prevent unauthorized data tampering or deletion, no bucket policy should allow all principals to perform delete actions.

High

AWS

Rego Query

S3 Bucket Allows List Action From All Principals Detected

This policy ensures that List actions on AWS S3 Buckets are not permitted for all principals. This prevents potential unauthorized access to private data or unauthorized data manipulation or deletion by limiting the Effect to ‘Allow’ only when the ‘Action’ is List, for specific principals.

High

AWS

Rego Query

S3 Bucket Allows Write\_ACP Action From All Principals Detected

This policy checks if S3 Buckets allow Write\_ACP Action From All Principals. It prevents leaking private information to the entire internet or allows unauthorized data tampering or deletion. The ‘Effect’ must not be ‘Allow’ when the ‘Action’ is Write\_ACP, for all Principals.

High

AWS

Rego Query

S3 Bucket Configured To Allow Access To All Principals

This policy verifies that AWS S3 buckets do not allow access to all principals. Allowing every principal could potentially expose sensitive data or enable unauthorized tampering or deletion of information.

High

AWS

Permissions, Rego Query

S3 Bucket Policy Allows Delete Action From All Principals Detected

This policy checks if an AWS S3 Bucket policy allows delete actions from all principals. To maintain data security, avoid leaking private information to the entire internet, and prevent unauthorized data tampering or deletion, no bucket policy should allow all principals to perform delete actions.

High

AWS

Rego Query

S3 Bucket With All Permissions Detected

This policy checks if AWS S3 bucket access policy allows all permissions. Granting all permissions would potentially expose private information or allow unauthorized data tampering or deletion.

High

AWS

Permissions, Rego Query

S3 Bucket with All Permissions Detected

This policy checks if AWS S3 bucket access policy allows all permissions. Granting all permissions would potentially expose private information or allow unauthorized data tampering or deletion.

High

AWS

Permissions, Rego Query

Unrestricted Get Action on AWS S3 Bucket Detected

This policy ensures that S3 Buckets do not allow Get Actions from all principals to prevent unauthorized data tampering, deletion, or leakage of private information over the internet. The policy verifies that the ‘Effect’ must not be ‘Allow’ when the ‘Action’ is ‘Get’ for all principals.

High

AWS

Rego Query

Unsafe SQS Queue Policy Detected

This policy checks for dangerous permissions in the Action statements of an SQS Queue Policy. Granting broad permissions could potentially expose the queue to various attack vectors.

High

AWS

Permissions, Rego Query

Azure AKS Cluster RBAC Not Enabled

The policy verifies that role-based access control (RBAC) is enabled for Azure Container Service (AKS) instances. Enabling RBAC helps manage user roles and privileges for enhanced security.

High

Azure

Permissions, Rego Query

Azure AKS Instance Lacks RBAC or RBAC not Enabled

The policy verifies that role-based access control (RBAC) is enabled for Azure Container Service (AKS) instances. Enabling RBAC helps manage user roles and privileges for enhanced security.

High

Azure

Permissions, Rego Query

Detected serviceAccountTokenCreator or serviceAccountUser role(s) for a GCP Project IAM Member Service Account

This policy checks if a GCP Project IAM Member Service Account doesn’t have the roles/iam.serviceAccountTokenCreator or roles/iam.serviceAccountUser role associated with it. Granting these roles to a Service Account can expose sensitive IAM permissions which can lead to unauthorized access or privilege escalation.

High

GCP

Least Privilege, Permissions, IAM, Rego Query

Publicly Accessible Google Cloud Storage Bucket Detected

The policy ensures that the Google Cloud Storage buckets are not publicly accessible. This is an essential principle for maintaining the secure configuration of Cloud Storage, preventing unauthorized data access, and avoid potential data breaches.

High

GCP

Rego Query

Active IAM Access Key Detected for Non-Root User

This policy validates the active status of AWS IAM Access keys. Active keys linked to non-root users pose a potential security risk.

Medium

AWS

IAM, Permissions, Least Privilege, Root, Rego Query

API Gateway Method Without API Key Detected

This policy checks if an API Key is required on a method request in the API Gateway. This is crucial to prevent unauthorized access to API Gateway methods.

Medium

AWS

Rego Query

API Gateway Method Without API Key Requirement Detected

This policy checks if an API Key is required on a method request in the API Gateway. This is crucial to prevent unauthorized access to API Gateway methods.

Medium

AWS

Rego Query

AWS Access Key Rotation Rule Not Found

This policy checks if there is a rule that enforces access keys to be rotated within 90 days. Regular rotation of access keys ensures that data stays secure and reduces the risk of unauthorized data accesses.

Medium

AWS

Credentials, Rego Query

AWS Cognito UserPool Without MFA Configuration Identified

This policy checks if the AWS Cognito UserPool has Multi-Factor Authentication (MFA) defined for users. Enabling MFA provides an extra layer of security by requiring users to validate their identity by presenting two or more separate evidence for authentication.

Medium

AWS

Authentication, SecOps, Rego Query

AWS Cognito UserPool Without MFA Detected

This policy checks if the AWS Cognito UserPool has Multi-Factor Authentication (MFA) defined for users. Enabling MFA provides an extra layer of security by requiring users to validate their identity by presenting two or more separate evidence for authentication.

Medium

AWS

Authentication, SecOps, Rego Query

AWS ECR Repository Configured for Public Access

This policy verifies that the Amazon ECR image repositories do not permit public access. Restricting public access to ECR repositories is crucial for safeguarding sensitive information and maintaining secure architecture.

Medium

AWS

Rego Query

AWS IAM Account Password Does Not Meet Minimum Length Requirement

This policy verifies that AWS IAM password policy is configured to include a minimum password length. Following this standard enhances account security by preventing vulnerabilities associated with short passwords.

Medium

AWS

IAM, Credentials, Rego Query

AWS IoT Policy with Wildcard Action Detected

This policy evaluates the configuration of AWS IoT policies to ensure that no actions are allowed unconditionally using a wildcard \*. Such broad permissions can lead to potential security risks due to uncontrolled access.

Medium

AWS

Rego Query

AWS KMS Principal Parameter Set As Wildcard Detected

This policy aims at checking the configuration of AWS KMS Principal. It ensures the Principal parameter is not set as a wildcard (\*), as this configuration could potentially allow all AWS users access to the KMS keys, posing a critical security risk.

Medium

AWS

Rego Query

AWS Lambda Permission Principal Wildcard Detected

This policy checks if the principal attribute in AWS Lambda permissions contain wildcards. The use of wildcards can lead to unnecessary exposure of Lambda functions, posing a potential security risk. As such, wildcards should not be used in principal attributes.

Medium

AWS

Permissions, Rego Query

AWS S3 Bucket Allows Public ACL

This policy checks whether an AWS S3 Bucket has disabled public access block settings or has been configured to host websites. It’s dangerous to disable block public access settings or to write a bucket policy that grants public read access.

Medium

AWS

Public Exposure, Rego Query

AWS SNS Topic Accessible For Subscription detected

This policy checks if an AWS SNS Topic is accessible for subscriptions. Allowing unrestricted access can lead to unauthorized data access and potential security risks. This setting must be configured to restrict access.

Medium

AWS

Public Exposure, Rego Query

AWS SNS Topic Policy with Simultaneous Allow and NotAction Detected

This policy checks if an AWS SNS Topic policy has ‘Effect: Allow’ and argument ‘NotAction’ simultaneously. These two arguments should not be used together in the policy for the AWS SNS Topic. If ‘Effect: Allow’ is used, the argument should be ‘Action’. This is to ensure that the policy does not unintentionally allow more permissions than intended.

Medium

AWS

Public Exposure, Rego Query

AWS SQS Queue Policy Allows ALL (\*) Actions

This policy verifies if the SQS queue policy allows ALL (\*) actions which can lead to unintended access and potential security risks. A secure queue policy should only allow required actions.

Medium

AWS

Rego Query

AWS SQS Queue Policy with NotAction Detected

This policy verifies the AWS SQS Queue Policy’s ‘NotAction’ settings. The ‘NotAction’ setting in SQS Queue Policy should not be enabled as it can potentially expose the queue to unauthorized actions. The actions specified in ‘NotAction’ are the only actions that are limited.

Medium

AWS

Permissions, Rego Query

Detected AWS SNS Topic Policy with Allow Effect and NotAction Argument Simultaneously

This policy checks if an AWS SNS Topic policy has ‘Effect: Allow’ and argument ‘NotAction’ simultaneously. These two arguments should not be used together in the policy for the AWS SNS Topic. If ‘Effect: Allow’ is used, the argument should be ‘Action’. This is to ensure that the policy does not unintentionally allow more permissions than intended.

Medium

AWS

Public Exposure, Rego Query

Detected IAM Policy Directly Applied to Users

This policy checks if IAM policies are applied directly to users. For better access management and to minimize potential security risks, IAM policies should be tied to groups, not individuals.

Medium

AWS

IAM, Least Privilege, SecOps, Rego Query

Detected Wildcard in AWS Lambda Permission Principal

This policy checks if the principal attribute in AWS Lambda permissions contain wildcards. The use of wildcards can lead to unnecessary exposure of Lambda functions, posing a potential security risk. As such, wildcards should not be used in principal attributes.

Medium

AWS

Permissions, Rego Query

IAM Account Password Policy Lacks Required Symbols

This policy checks if the AWS IAM Account password policy requires the use of symbols. Requiring symbols in passwords enhances account security and helps mitigate potential brute-force attacks.

Medium

AWS

IAM, Credentials, Rego Query

IAM Account Password Policy Not Requiring Uppercase Characters

This policy checks if the AWS IAM account password policy enforces at least one uppercase character in passwords. Enforcing this complexity requirement increases the security of user accounts by making the passwords harder to guess or crack.

Medium

AWS

IAM, Credentials, Rego Query

IAM Account Password Policy without Lowercase Letter Requirement Detected

This policy checks if the password policy for AWS IAM Accounts requires at least one lowercase letter. This requirement enhances the security of user credentials by mandating more complex passwords.

Medium

AWS

IAM, Credentials, Rego Query

IAM Account Password Reuse Prevention Not Properly Configured

This policy checks whether the AWS IAM account password policy has the password reuse prevention properly configured. A setting that prevents password reuse enhances the security of user accounts and helps to defend against unauthorized access attempts.

Medium

AWS

IAM, Credentials, Rego Query

IAM Policies With Full Permission Detected

This policy checks if any IAM policy is granting full permissions. This is a crucial security measure to prevent excessive permissions that might pose security risks.

Medium

AWS

IAM, Least Privilege, SecOps, Permissions, Rego Query

IAM Policy Grants Full Permissions Detected

This policy checks if any IAM policy is granting full permissions. This is a crucial security measure to prevent excessive permissions that might pose security risks.

Medium

AWS

IAM, Least Privilege, SecOps, Permissions, Rego Query

IAM Policy With Full Administrative Privileges Detected

This policy checks if IAM policies are granting full administrative privileges. Providing full administrative rights can potentially give unrestricted access to manage all aspects of the AWS account, posing a serious security risk.

Medium

AWS

IAM, Least Privilege, Rego Query

IAM Role with Full Administrative Privileges Detected

This policy checks if IAM policies are granting full administrative privileges. Providing full administrative rights can potentially give unrestricted access to manage all aspects of the AWS account, posing a serious security risk.

Medium

AWS

IAM, Least Privilege, Rego Query

IAM User Login Password Without Numeric Characters Detected

This policy checks if the password for an IAM user’s login profile contains at least one numeric character. Having a numeric character in the password enhances its complexity, making it more secure against brute force and dictionary attacks.

Medium

AWS

IAM, Credentials, Rego Query

IAM User Login Password Without Uppercase Letter Detected

This policy checks if the AWS IAM account password policy enforces at least one uppercase character in passwords. Enforcing this complexity requirement increases the security of user accounts by making the passwords harder to guess or crack.

Medium

AWS

IAM, Credentials, Rego Query

IAM User Login Profile Password Does Not Meet Minimum Length Requirement

This policy validates if the AWS IAM account password policy has a set minimum length. Ensuring the minimum password length increases the strength of user credentials, hence mitigates potential security risks posed by weak passwords.

Medium

AWS

IAM, Credentials, Rego Query

IAM User Password Without Lowercase Letter Identified

This policy checks if the password policy for AWS IAM Accounts requires at least one lowercase letter. This requirement enhances the security of user credentials by mandating more complex passwords.

Medium

AWS

IAM, Credentials, Rego Query

IAM User Password Without Symbol Detected

This policy checks if the AWS IAM Account password policy requires the use of symbols. Requiring symbols in passwords enhances account security and helps mitigate potential brute-force attacks.

Medium

AWS

IAM, Credentials, Rego Query

Inadequate IAM User Password Length Detected

This policy verifies that AWS IAM password policy is configured to include a minimum password length. Following this standard enhances account security by preventing vulnerabilities associated with short passwords.

Medium

AWS

IAM, Credentials, Rego Query

Inline Policies Detected in IAM User

This policy checks if IAM users are using managed policies instead of inline policies. Managed Policies are generally used for sharing permissions with multiple users or roles which makes permissions easier to manage. For better management and to avoid potential security risks, IAM users should use managed policies.

Medium

AWS

IAM, Rego Query

Insufficient Minimum Length In AWS IAM Password Policy Detected

This policy validates if the AWS IAM account password policy has a set minimum length. Ensuring the minimum password length increases the strength of user credentials, hence mitigates potential security risks posed by weak passwords.

Medium

AWS

IAM, Credentials, Rego Query

Lambda Function Accessible via Public API Gateway Detected

This policy verifies that the AWS Lambda functions are not publicly accessible via the API Gateway. Publically accessible Lambda functions can be invoked by anonymous users which could lead to unauthorized access or misuse of the application.

Medium

AWS

Public Exposure, Rego Query

Managed IAM Policy Directly Attached to User Detected

This policy validates if any managed IAM policies have been directly applied to users. For robust and efficient IAM governance, IAM policies should be assigned to groups and not directly to a user.

Medium

AWS

IAM, Rego Query

Public AWS Lambda Function via API Gateway Detected

This policy verifies that the AWS Lambda functions are not publicly accessible via the API Gateway. Publically accessible Lambda functions can be invoked by anonymous users which could lead to unauthorized access or misuse of the application.

Medium

AWS

Public Exposure, Rego Query

Public AWS SQS Policy Detected

This policy verifies if the AWS Simple Queue Service (SQS) policy has public access. Allowing public access to the SQS queues may lead to unauthorized data access or loss, which can have significant security implications.

Medium

AWS

Rego Query

S3 Bucket with Disabled Public Access Block or Website Hosting Configuration Detected

This policy checks whether an AWS S3 Bucket has disabled public access block settings or has been configured to host websites. It’s dangerous to disable block public access settings or to write a bucket policy that grants public read access.

Medium

AWS

Public Exposure, Rego Query

Shared AMI Used by Multiple Accounts Detected

This policy checks the access control for Shared Amazon Machine Images (AMIs) and validates if it is being used by more than one AWS account. Sharing AMIs with multiple accounts can have potential security risks and should be avoided for protecting sensitive data.

Medium

AWS

Least Privilege, Permissions, Rego Query

Unassociated AWS IAM Support Access Policy Detected

This policy checks if the AWS IAM policy named ‘AWSSupportAccess’ is associated with any roles, users or groups. For secure policy management, these associations must be ensured.

Medium

AWS

Rego Query

Unsafe AWS SQS Queue Policy Principal Configuration Detected

This policy checks if an AWS SQS Queue policy has an ‘Allow’ statement along with a ‘NotPrincipal’ attribute. AWS strongly advises against this configuration as it raises potential security risks.

Medium

AWS

Permissions, Rego Query

Wildcard Resource Detected in AWS IoT Policy

This policy verifies that no wildcard ‘\*’ is used in the resource field of an AWS IoT Policy. Using a wildcard can lead to unintentional access permissions, causing potential security breaches.

Medium

AWS

Rego Query

Role Definitions Allowing Custom Subscription Role Creation Detected

This policy checks if role definitions allow for the creation of custom subscription roles. This setup could potentially cause security risks and thus, must be restricted.

Medium

Azure

Permissions, Rego Query

OS Login Disabled in GCP VM Instance Detected

This policy checks if the OS Login is deactivated in any VM instance. To ensure secure remote login management and to avoid potential security risks, this setting must be enabled.

Medium

GCP

Rego Query

AWS IAM Support Policy Missing Role, User or Group Association Detected

This policy checks if all AWS IAM Support policies have roles, users, and groups associated with them. This ensures adequate management and security, as unassociated policies can lead to potential vulnerabilities.

Low

AWS

Stale Users & Services, Rego Query

AWS IAM User without Group Membership Detected

This policy checks if AWS IAM Users are assigned to at least one group. Grouping IAM Users helps in managing permissions efficiently and enhances security by ensuring that IAM Users are not endowed with unnecessary privileges.

Low

AWS

IAM, Least Privilege, SecOps, Rego Query

Direct IAM Policy Attachments to User Detected

This policy checks that IAM policies are not directly attached to users. In order to maintain least privilege and segregation of duties, IAM policies should be attached to groups or roles instead.

Low

AWS

Least Privilege, Permissions, IAM, Rego Query

Direct User Assigned IAM Policy Detected

This policy checks if IAM policies are applied directly to users, which is a security best practice violation. IAM policies should be assigned to groups instead of direct users to maintain secure access management.

Low

AWS

IAM, Rego Query

Direct User Association Detected in AWS IAM Policy

This policy checks that IAM policies are not directly attached to users. In order to maintain least privilege and segregation of duties, IAM policies should be attached to groups or roles instead.

Low

AWS

Least Privilege, Permissions, IAM, Rego Query

IAM Policy Directly Attached to User Account Detected

This policy checks if IAM policies are applied directly to users, which is a security best practice violation. IAM policies should be assigned to groups instead of direct users to maintain secure access management.

Low

AWS

IAM, Rego Query

IAM Policy Grants ‘AssumeRole’ Permission to All Services Detected

This policy checks if an AWS IAM Role allows all services or principals to assume it. Granting unrestricted access may lead to unauthorized operations being performed, posing a security risk.

Low

AWS

IAM, Least Privilege, SecOps, Permissions, Rego Query

IAM Role Allows All Principals to Assume it

This policy checks if an AWS IAM Role has a trust policy that allows all principals to assume this role. In order to adhere to the principle of least privilege and avoid unintended access, the trust policy should be restricted to specific principals.

Low

AWS

IAM, Permissions, Least Privilege, Rego Query

IAM Role Allows All Services or Principals to Assume Detected

This policy checks if an AWS IAM Role has a trust policy that allows all principals to assume this role. In order to adhere to the principle of least privilege and avoid unintended access, the trust policy should be restricted to specific principals.

Low

AWS

IAM, Permissions, Least Privilege, Rego Query

IAM Role Allows All Services or Principals to Assume it

This policy checks if an AWS IAM Role allows all services or principals to assume it. Granting unrestricted access may lead to unauthorized operations being performed, posing a security risk.

Low

AWS

IAM, Least Privilege, SecOps, Permissions, Rego Query

Azure WebApp Missing or Incorrect Active Directory Identity Configuration

This policy checks if Azure WebApps have Active Directory enabled with ‘identity.type’ set to ‘SystemAssigned’ or ‘userAssignedIdentities’ set to ’true’. Enabling Active Directory ensures controlled, secure access and identity management for the app, which is crucial for preventing unauthorized access.

Low

Azure

Permissions, Rego Query

App Service Authentication Not Set for Azure App Service

This policy checks if the Azure App Service has App Service Authentication set. Enabling App Service Authentication helps to secure and restrict access to the web app. Thus, this configuration is critical for maintaining security standards.

Info

Azure

Authentication, Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
