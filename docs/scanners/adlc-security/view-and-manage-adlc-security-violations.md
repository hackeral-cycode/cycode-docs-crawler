# View and manage ADLC security violations | Cycode Docs

Source: https://docs.cycode.com/scanners/adlc-security/view-and-manage-adlc-security-violations

---

# View and manage ADLC security violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/adlc-security/view-and-manage-adlc-security-violations.md "Edit this page")

Updated on Mar 26, 2026 • Published on Mar 22, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The ADLC security view aggregates existing violations that were detected by the following scanners, which are available in their respective views but are actually a sub-category because they also involve an AI tool. The view also displays violations that are based on custom ADLC security policies created in the Policies view. This provides an AI-focused risk view of the tenant.

*   SAST
    
*   Secrets
    

Note

For more information about creating a custom policy, go to [Create and manage custom policies](/policies/create-and-manage-custom-policies/) .

## View the ADLC security violation list [Copied!](#view-the-adlc-security-violation-list "Copy link to this section")

To view the ADLC security violations, go to **Violations > Modules > ADLC Security**. Cycode displays the following information about AI-related violations.

### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Risk score

Visualizes the spread of violations according to the calculated Cycode risk score, with an adjustable slider so you can customize the risk score range of the violations that are shown in the table. Also shows the total number of open AI-related violations.

Detection time

A timeline showing when violations were first discovered, with an adjustable slider so you can customize the date range of violations that are shown in the table. A significant spike in activity suggests an increase in scans or a new influx of violations.

Prioritization funnel

Funnel that filters down the total violations by risk score > high + critical severity > critical severity > created date to highlight the violations that should be remediated first.

### ADLC security violation table [Copied!](#adlc-security-violation-table "Copy link to this section")

The ADLC security view shows the following details about each violation. To drill through and view the violation card, click a row in the table.

Column

Description

Violation status

Current status of the violation: **Open**, **Resolved**, or **Ignored**

Risk score

The Cycode risk score assigned to the violation.

Policy and category

Name and category of the policy.

Security tool

The name of the security tool that detected the violation.

Found in

The source where the violation was detected and path to the location.

First detected

The date and time stamp when the violation was first detected.

SLA status

Shows the remediation status of the violation: **On track**, **Near to be missed**, or **Missed**

## Manage ADLC security violations [Copied!](#manage-adlc-security-violations "Copy link to this section")

For information on the actions you can perform to manage violations, go to [View and manage violations](/view-and-manage-violations/) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
