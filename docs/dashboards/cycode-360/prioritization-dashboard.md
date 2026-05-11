# Prioritization dashboard | Cycode Docs

Source: https://docs.cycode.com/dashboards/cycode-360/prioritization-dashboard

---

# Prioritization dashboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/cycode-360/prioritization-dashboard.md "Edit this page")

Updated on Nov 25, 2025 • Published on Jan 9, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Prioritization dashboard identifies the most critical security issues within your organization. You can view violations prioritized by risk level, scanner categories, and age.

* * *

## Widgets [Copied!](#widgets "Copy link to this section")

### Open violations and assignees [Copied!](#open-violations-and-assignees "Copy link to this section")

These widgets display the current count of open violations within your organization, and the number of users assigned to these violations. This provides a snapshot of how many issues remain unresolved and the distribution of responsibility among team members.

### Top 5 risks [Copied!](#top-5-risks "Copy link to this section")

This widget displays a table of the top five violations by risk, with the policy name, relevant secondary information (such as CVE or CWE identifier, if applicable), and the risk score for each violation. Click a row to view the violation card directly so you can review details and take action without navigating away from the dashboard.

### Violations breakdown [Copied!](#violations-breakdown "Copy link to this section")

The Violation breakdown area contains the following four widgets, each offering a unique perspective on open violations to help you better understand and manage risks.

Widget

Description

Violations by risk

Displays a breakdown of open violations by severity level for a clear view of your organization’s overall risk profile.

Violations by age

Tracks how long violations have remained open, so you can identify delays and prioritize overdue issues.

Violations by age and risk

Compares violations across both age and severity, to identify patterns in risk level vs. resolution timeline.

Critical and high risk over time

Shows the number of violations marked as critical and high risk over time, so you can monitor trends and assess the effectiveness of your risk mitigation efforts.

### Violations by category [Copied!](#violations-by-category "Copy link to this section")

This widget displays open violations in a donut chart categorized by scanner type (for example, SAST, SCA, Secrets, and IaC). You can see where risks are concentrated across different scanning categories and identify areas that need immediate attention.

### Prioritization funnel [Copied!](#prioritization-funnel "Copy link to this section")

The Prioritization funnel widget helps you prioritize critical security violations in key projects by progressively narrowing the scope of identified violations using a series of filters.

### Project status [Copied!](#project-status "Copy link to this section")

The project area contains several widgets that provide an overview of your organization’s projects and their associated risks.

Widget

Description

Total projects

Shows the overall number of projects in your system, categorized by health.

Violations not associated with projects

Shows unresolved violations that aren’t tied to specific projects (this ensures that no risks are overlooked).

Projects at highest risk

Highlights the projects with the highest overall risk, including business impact, MTTR, ownership, and the risk levels of the associated violations.

Click a project to open it directly in the Violations page, so you can take immediate action and improve your security posture.

* * *

Explore the other AppSec dashboards

*   [Visibility dashboard](/dashboards/cycode-360/visibility-dashboard)
*   [Remediation dashboard](/dashboards/cycode-360/remediation-dashboard)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
