# IaC violations | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations

---

# IaC violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/_index.md "Edit this page")

Updated on Feb 10, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Cycode IaC scanner identifies configuration errors throughout the development lifecycle, from developer workflows to production, so you can remediate and ensure that your configurations are secure and adhere to best practices.

When you navigate to the IaC page in the Violations view, you can see violations that were detected based on the [IaC Policies](/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/) .

## View the IaC violation list [Copied!](#view-the-iac-violation-list "Copy link to this section")

To view the IaC violations, go to **Violations > Violation Category > IaC**. Cycode displays the following information about your SDLC violations.

### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Risk score

Visualizes the spread of vulnerabilities according to the calculated Cycode risk score, with an adjustable slider so you can customize the risk score range of the violations that are shown in the table. Also shows the total number of open IaC violations.

Detection time

A timeline showing when vulnerabilities were first discovered, with an adjustable slider so you can customize the date range of violations that are shown in the table. A significant spike in activity suggests an increase in scans or a new influx of vulnerabilities.

Prioritization funnel

Funnel that filters down the total violations by risk score > high + critical severity > critical severity > CWE top 10 > created date to highlight the violations that should be remediated first.

### IaC violation table [Copied!](#iac-violation-table "Copy link to this section")

The IaC page shows the following details about each violation. To drill through and view the violation card, click a row in the table.

For more information about the violation card, go to [IaC violation card](/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/iac-violation-card) .

Column

Description

Violation status

Current status of the violation: Open, Resolved, or Ignored

Risk score

The Cycode risk score assigned to the violation.

Security tool

The name of the security tool that detected the violation.

Found in

The source where the violation was detected and path to the location.

First detected

The date and time stamp when the violation was first detected.

SLA status

Shows the remediation status of the violation: On track, Near to be missed, or Missed

## Manage IaC violations [Copied!](#manage-iac-violations "Copy link to this section")

For information on the actions you can perform to manage violations, go to [View and manage violations](/view-and-manage-violations/) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
