# Manage secret validity checks | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks

---

# Manage secret validity checks

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/_index.md "Edit this page")

Updated on Oct 20, 2025 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

When Cycode detects a potential secret, it can also check whether the secret is active or inactive. Active secrets pose a higher risk than inactive ones, so you can prioritize remediation efforts.

Note

To validate a secret, Cycode performs a non-intrusive API call to the relevant service provider to check if the secret is in a usable state. For more information, go to [Validity check APIs](/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/validity-check-apis) .

Cycode runs validity checks on detected secrets according to the following schedule:

*   Secrets less than one year old - validated weekly
    
*   Secrets older than one year - validated every 30 days
    

You can also do an ad-hoc validity check for a specific policy as described in [Validity check APIs](/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/validity-check-apis/) .

## Enable validity checks [Copied!](#enable-validity-checks "Copy link to this section")

Secret status validation must be enabled in the global settings, and then enabled/disabled per policy (secret type). By default, secret status validation is disabled.

*   Secrets that previously showed **Active**, **Inactive**, or **Failed** in the **Secret validity** column will instead show **Validation disabled**.
    
*   When you hover over the secret validity status value you will see the following message: **Validity check is disabled**
    

Additionally, in the **Policies** > **Secrets** view, if you show the **Validity check** column the value for all the policies in the table will be **Disabled**.

### Configure validity check per policy [Copied!](#configure-validity-check-per-policy "Copy link to this section")

1.  In the Settings view, go to **Modules** > **Secrets** > **Validity checks**.
    
2.  Enable the **Enable secret validity checks** option.
    
3.  In the **Select secret types to validate** area, enable the policies for which Cycode should validate the secret status.
    

Note

When you make changes to the validity check settings, it may take some time before updates appear in the Violations view.

### View policies according to validity check [Copied!](#view-policies-according-to-validity-check "Copy link to this section")

In the **Policies** > **Secrets** view, show the **Validity check** column to see which policies have validity checking enabled.

The following values are displayed per policy based on what is configured in the global settings.

Value

Description

**Enabled**

Cycode validates the secret status for violations detected by this policy.

**Disabled**

Validity checking is turned off for this policy.

**Not available**

Validity checking isn’t supported for this policy.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
