# Access Control | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/access-control

---

# Access Control

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/access-control.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

AWS Elasticsearch Domain without IAM Authentication Detected

This policy validates if IAM Authentication is present for AWS Elasticsearch. For secure data access management and to comply with best practices, every Elasticsearch domain must enforce IAM Authentication.

Medium

AWS

Rego Query

AWS IAM User with Access to Console Detected

This policy checks if AWS IAM Users have access to the AWS management console. To adhere to the principle of least privilege and enhance security, AWS IAM Users should not be routinely granted console access.

Medium

AWS

Rego Query

IAM:passrole Permission with Wildcard (\*) Detected

This policy checks if the IAM Role PassRole action has wildcard permission. The IAM:passrole permission allows a resource to pass a role to an AWS service. Granting this action with a wildcard (\*) is overly permissive and might expose the infrastructure to various security threats.

Medium

AWS

Rego Query

Wildcard Detected in Elasticsearch Domain Policy

This policy checks if the ElasticSearch Domain policy avoids wildcard in ‘Action’ and ‘Principal’. Having specific configurations for ‘Action’ and ‘Principal’ prevents unauthorized entities to perform unexpected actions.

Medium

AWS

Rego Query

KMS admin role and CryptoKey role assigned to the same member in GCP IAM Policy

This policy checks if the same member has been assigned both KMS admin role and CryptoKey role in a Google Project IAM Policy. Assigning both roles to a single member could pose a security risk.

Medium

GCP

Rego Query

EC2 Instance Using Default Security Group Detected

This policy checks if EC2 instances are using the default security group. It is industry standard to not use the default security group because it typically allows unrestricted access, which may expose your instances to potential security risks.

Low

AWS

Rego Query

Unassociated AWS IAM Group Detected

This policy checks if there are users associated with IAM Groups in the AWS account. Associating users with groups helps in managing permissions and roles efficiently and reduces the risk of unauthorized access.

Low

AWS

Rego Query

Azure App Service Authentication is Disabled or Missing

This policy checks if the Azure App Service Authentication is enabled. Enabling authentication settings ensures secure access, restricting unauthorized users from accessing the App services.

Info

Azure

Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
