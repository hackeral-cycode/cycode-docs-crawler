# Database Services | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/database-services

---

# Database Services

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/database-services.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

Automatic Minor Version Upgrades Disabled for AWS RDS Instance

This policy checks if automatic minor version upgrades are enabled for AWS RDS instances. Enabling this property ensures that your DB instances are automatically updated with minor engine version upgrades when they become available, thus minimizing the impact of unplanned downtime and increasing security and reliability.

Medium

AWS

Rego Query

RDS Instance Auto Minor Version Upgrade Feature Disabled Detected

This policy validates whether the automatic minor version upgrade feature is enabled for AWS RDS Instances. Enabling auto minor version upgrades for RDS Instances ensures that you benefit from new updates, bug fixes, and security patches, thereby aiding in maintaining a robust and secure infrastructure.

Medium

AWS

Data Reliability, Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
