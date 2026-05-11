# Secret validity status | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/prioritize-secret-violations/secret-validity-status

---

# Secret validity status

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/prioritize-secret-violations/secret-validity-status.md "Edit this page")

Updated on Oct 29, 2025 • Published on Sep 4, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

When Cycode scans for secrets, it can also check whether a detected secret is active or inactive. This helps you prioritize remediation by focusing on secrets that still pose a risk.

## Status values [Copied!](#status-values "Copy link to this section")

Cycode uses the following tags to indicate the validity of a secret:

Status

Description

**Active**

Cycode confirmed the secret is valid and currently usable.

**Inactive**

Cycode confirmed the secret is no longer valid or usable.

**Unknown**

Cycode couldn’t determine the status of the secret.

**Failed to validate**

An error occurred during the validation process.

**Validation not available**

Validity check isn’t supported for this secret type.

**Validation disabled**

Validity check isn’t enabled for this secret type.

**Checking**

Validation is still in progress.

## Show secret violations based on validity status [Copied!](#show-secret-violations-based-on-validity-status "Copy link to this section")

In environments where secret validity checks are enabled, you can view violations based on their secret validity status.

### View the secret validity status [Copied!](#view-the-secret-validity-status "Copy link to this section")

1.  In the Violations view, violation card, or the secret value card, add the **Validity check** column to the table.
    
2.  To filter on a specific status, apply the **Validity check** filter and select one or more options, which are displayed according to the available data.
    

## Validity check date and time stamp [Copied!](#validity-check-date-and-time-stamp "Copy link to this section")

Cycode records the last time the validity check was done for a secret and the result. This information is shown as a tooltip in the **Secret SHA** column of the Violations view, and in the **Validity check** column in the violation card (Violations tab).

Status

Description

Active

“Cycode verified this secret as active. Last verified as active: \[GMT\].”

Inactive

“Cycode verified this secret as inactive. Last verified as active: \[GMT\].”

Transition Active → Inactive

“Cycode verified this secret as inactive. Last verified as active: \[GMT\]. First verified as inactive: \[GMT\].”

## Trigger a validity check manually [Copied!](#trigger-a-validity-check-manually "Copy link to this section")

You can manually trigger a secret validity check in any of the following ways:

*   In the Violations table, show the **Validity** column and click the **Re-validate secret value** icon for a specific secret.
    
*   In a violation card for a specific secret, in the **Secret validity** area click the **Re-validate secret value** icon.
    
*   In the **Violations** view >**Secrets** page, group the view by **None** or **Secret value**, then select one or more rows and click **Revalidate**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
