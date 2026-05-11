# View and manage secret violations | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/view-and-manage-secret-violations

---

# View and manage secret violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/view-and-manage-secret-violations/_index.md "Edit this page")

Updated on Mar 23, 2026 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The **Violations** > **Secrets** view provides a comprehensive view of all detected secret violations and their associated risk. It enables you to:

*   Group and filter secrets by context.
    
*   Drill down into details using secret value or secret violation cards.
    
*   Prioritize remediation based on risk scores and tags such as **Verified by AI**.
    

For more information about the Violations view, go to [Violations](/view-and-manage-violations/) .

### Group by [Copied!](#group-by "Copy link to this section")

The **Group By** view allows you to configure how the secret violations are displayed. You can group by the following options:

Option

Description

**None**

View a list of violations sorted by status.

**Policy**

View violations sorted into groups by policy (secret type).

**Secret value**

View a list of violations according to the secret SHA.

**Repository**

View violations sorted into groups based on where they were detected.

To view the secret violation card, click a row in the table.

Note

If you’re in the **Secrets** > **Secret value** view, clicking a row opens the secret value card.

## View secret data [Copied!](#view-secret-data "Copy link to this section")

### View all secret violations [Copied!](#view-all-secret-violations "Copy link to this section")

When grouped by **None**, the **Violations** > **Secrets** view lists each secret violation separately along with the following information.

Column

Description

Violation status

Status of the violation. By default, the view is filtered to show open violations.

Risk score

Custom score assigned by Cycode based on specific risk factors.

Secret SHA

Unique identifier of the secret value.

Found in

Full path to the location where the secret violation was detected.

SLA status

If configured for your organization, shows the SLA status of the violation.

Secret value

The value of the secret, shown in a tooltip upon hover over the key icon. **Note**: When secrets obfuscation is enabled, restricted roles see asterisks instead of the actual secret value to reduce exposure risk.

Validity

Validity status of the secret value. You can manually trigger a validity check from this column.

### View by policy/secret type [Copied!](#view-by-policysecret-type "Copy link to this section")

When grouped by **Policy**, the **Violations** > **Secrets** view shows violations grouped by the policy that was used to detect them as follows:

Column

Description

Policy and category

Secret type and category of the policy.

Source

Locations where the policy detected violations.

SDLC stages

Software Deployment Life Cycle stage where Cycode detected the secret violation, namely code, build, artifacts, or cloud.

Violations by risk

Number of detected violations that match the policy, grouped by severity of the risk score.

Last violation

Most recent date and time that a violation matching the policy was detected.

### View by secret value [Copied!](#view-by-secret-value "Copy link to this section")

When grouped by **Secret Value**, the **Violations** > **Secrets** view shows violations grouped by the specific secret value of each violation with the following information:

Column

Description

Secret SHA

Unique identifier of the secret value.

Last Introduced

Date and time a new violation with this secret value was most recently detected.

Source

Locations where the secret value was detected.

Secret tags

All tags that are associated with the secret’s violations.

Risk score

Max risk score assigned by Cycode based on specific risk factors.

Violations by risk

Number of detected violations that contain the secret value, grouped by severity of the risk score.

Hover over the key icon in the last column to view the value of the secret. When secrets obfuscation is enabled, restricted roles see asterisks instead of the actual secret value to reduce exposure risk.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
