# Virtual Machines | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/virtual-machines

---

# Virtual Machines

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/virtual-machines.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

GCP VM Instance Utilizing Default Service Account with Full Cloud API Access

This policy verifies no VM instances are using the default service account with full access to all Cloud APIs. Such unrestricted access could lead to inadvertent data exposure or allow potential security risks.

High

GCP

Rego Query

Project-Wide SSH Keys Not Enabled in GCP VM Instances

This policy checks if SSH keys are enabled at the project level for GCP VM Instances. Enabling SSH keys at the project level allows for a higher level of security by restricting SSH access to only those users that possess corresponding private keys.

High

GCP

SSH, Rego Query

Serial Ports Accessibility Detected in GCP VM Instance

This policy checks if serial ports are enabled in GCP VM instances. Disabling serial ports helps to mitigate potential security risks such as unauthorized data access.

Medium

GCP

Ports, Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
