# SAST violations | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations

---

# SAST violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/_index.md "Edit this page")

Updated on Aug 28, 2025 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The SAST page provides a high-level overview of security vulnerabilities across your software repositories. Use the SAST Violation data to help security teams and developers identify, prioritize, and manage code-level security risks.

When you open the SAST page, Cycode displays the scan results for the [SAST policies](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/) that are built in to the platform. These are the detected violations that are displayed in the Violations page.

## View SAST violations [Copied!](#view-sast-violations "Copy link to this section")

To show the **SAST** violations page, go to **Violations > Violation Category > SAST**.

### View aggregated SAST violation data [Copied!](#view-aggregated-sast-violation-data "Copy link to this section")

The following widgets provide a summary of your overall SAST security posture.

Widget

Description

**Risk**

Risk score

Bar chart that displays the distribution of risk scores for the detected violations. You can adjust the slider in the widget to set a custom range for the risk score and filter the table accordingly.

Detection time

Time-series area chart that shows when the violations were detected. You can adjust the slider in the widget to set a custom date range and filter the table accordingly.

Prioritization funnel

Narrows down the initial findings to a smaller, manageable set of high-priority issues according to severity.

**Severity**

Total

Quick-look summary that reflects your selection in the **Group by** aggregation option.

Detection time

Time-series area chart that shows when the violations were detected. You can adjust the slider in the widget to set a custom date range and filter the table accordingly.

Violations by severity

Stacked bar chart that shows the violations according to severity level, making it easy to understand the risk distribution.

### View SAST violation details [Copied!](#view-sast-violation-details "Copy link to this section")

The SAST table shows a list of the repositories that were scanned, along with the following information. For more details about a specific row, click to show the violation card.

#### Grouped by none [Copied!](#grouped-by-none "Copy link to this section")

Column

Description

Policy name

The type of vulnerability that was detected.

Security tool

Name of the security tool that scanned the repository.

Location

Breadcrumb trail to the exact location of the vulnerability in the source code.

Detected At

The date and time when the violation was detected.

SLA

Indicates whether the violation is being addressed within the organization’s required timeframe.

Risk status details

Summary of the current state of the violation, including risk score, status, and assigned tickets (if any).

#### Grouped by policy [Copied!](#grouped-by-policy "Copy link to this section")

Column

Description

Policy name

Identifies the category of the vulnerability, including the policy name and the corresponding CWE ID.

Language

Programming languages affected by the policy.

Source

SCM where the violations were detected.

Violations by risk/severity

Summary of the violations for each policy, including the total count of violations and the risk score range or severity

Last detection

Date and time of the most recently detected violation for this policy.

#### Grouped by repository [Copied!](#grouped-by-repository "Copy link to this section")

Column

Description

Repository name

Name of the code repository that was scanned.

Location

Breadcrumb trail with the SCM and organization or project where the repository is located.

Labels

Tags that are assigned to the repository. Cycode assigns a number of labels to provide repository insights.

Visibility

Access level of the repository, such as private or public.

Violations by risk/severity

Number of violations categorized by risk score range or severity.

Last detection

Date of the most recent scan that found violations.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
