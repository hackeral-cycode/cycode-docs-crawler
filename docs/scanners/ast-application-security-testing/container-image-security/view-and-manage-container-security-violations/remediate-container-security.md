# Remediate container security | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/remediate-container-security

---

# Remediate container security

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/remediate-container-security.md "Edit this page")

Updated on Sep 29, 2025 • Published on Jul 23, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Maestro provides AI-generated remediation suggestions for vulnerabilities that are discovered during container scans. Maestro analyzes the vulnerability to trace its origin and provides a targeted action plan for resolution, indicating whether the fix should be applied in a code repository or a Dockerfile.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

The violation must be traceable back to a code repository within the Cycode exposure path.

## Generate a remediation suggestion [Copied!](#generate-a-remediation-suggestion "Copy link to this section")

1.  In the Violations view, go to **Container security** and click a violation to open the card.
    
2.  Click the **Remediation** tab and scroll down to the **Maestro** area.
    
3.  Click **Generate**.
    
    1.  Maestro analyzes the vulnerability and presents a suggested remediation plan in plain text. The suggestion includes the specific steps or commands required to resolve the violation.
    2.  If Maestro can’t generate a suggestion due to missing information, an error message is displayed with an option to try again.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
