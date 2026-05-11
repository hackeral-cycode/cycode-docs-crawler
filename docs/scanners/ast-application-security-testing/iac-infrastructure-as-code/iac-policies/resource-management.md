# Resource Management | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/resource-management

---

# Resource Management

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/resource-management.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

AWS CloudFormation Stack Without Defined Stack Policy Detected

This policy validates whether a stack policy is defined for AWS CloudFormation Stacks, to safeguard stack resources from potential update actions. A stack policy serves as a layer of protection to prevent updates on certain stack resources, thereby strengthening the infrastructure’s resiliency.

Medium

AWS

Rego Query

Disabled Managed Identity for Azure App Service Detected

This policy checks if the Azure App Service instances have managed identity enabled. Using managed identities for Azure resources improves security by eliminating the need for developers to manage credentials.

Medium

Azure

Rego Query

Detected Service Account with Improper Privileges

This policy checks if a service account is assigned with improper privileges such as admin, editor, owner, or write roles. Assigning improper privileges to a service account is a potential security threat as it could lead to unintended access or undesired operations.

Medium

GCP

Rego Query

API Gateway Stage without Associated API Gateway UsagePlan Detected

This policy ensures that an AWS API Gateway stage has an associated API Gateway UsagePlan. This association is important for managing and limiting API usage, enforcing quotas and managing the cost of API calls.

Low

AWS

Rego Query

SimpleDB Domain Resource Declared in AWS Infrastructure

This policy checks if a SimpleDB Domain component is declared as a resource in AWS infrastructure set-up. As per recommended best practices, SimpleDB Domain resources shouldn’t be declared to maintain optimal cloud performance and security standards.

Low

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
