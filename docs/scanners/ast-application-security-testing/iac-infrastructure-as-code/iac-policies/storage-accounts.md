# Storage Accounts | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/storage-accounts

---

# Storage Accounts

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/storage-accounts.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

Azure Storage Account Lacks Forced HTTPS

This policy checks if Azure Storage Accounts are configured to use HTTPS. This is important because it ensures that data in transit is always encrypted, thereby enhancing the overall security posture.

High

Azure

Rego Query

Azure Storage Container Public Access Enabled

This policy checks if an Azure Storage Container is publicly accessible or not. For data security and to prevent unauthorized access, this setting needs to be private.

High

Azure

Public Exposure, Rego Query

Azure Storage Account Network Access Configured to ‘Allow’

This policy checks if the default network access rule for storage accounts is set to ‘Deny’. This configuration is crucial to ensure that all network connections to storage accounts are denied by default, reducing the risk of unauthorized access.

Medium

Azure

Rego Query

Insecure Network Access Default Setting Detected on Microsoft Storage Account

This policy checks if the default network access rule for storage accounts is set to ‘Deny’. This configuration is crucial to ensure that all network connections to storage accounts are denied by default, reducing the risk of unauthorized access.

Medium

Azure

Rego Query

Trusted Microsoft Services Not Enabled for Azure Storage Account

This policy checks if Trusted Microsoft Services are enabled for Storage Account access in Azure. Enabling this setting allows Microsoft to bypass the network rules defined on the storage account. This ensures that trusted Microsoft services can access the storage account even if ‘deny’ network rules are in effect.

Medium

Azure

Rego Query

Trusted Microsoft Services not Enabled for Azure Storage Account

This policy checks if Trusted Microsoft Services are enabled for Storage Account access in Azure. Enabling this setting allows Microsoft to bypass the network rules defined on the storage account. This ensures that trusted Microsoft services can access the storage account even if ‘deny’ network rules are in effect.

Medium

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
