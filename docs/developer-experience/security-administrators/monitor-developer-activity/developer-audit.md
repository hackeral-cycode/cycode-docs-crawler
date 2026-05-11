# Developer audit | Cycode Docs

Source: https://docs.cycode.com/developer-experience/security-administrators/monitor-developer-activity/developer-audit

---

# Developer audit

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/security-administrators/monitor-developer-activity/developer-audit.md "Edit this page")

Updated on Jul 7, 2025 • Published on Jun 10, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Developer Audit page shows developer audit logs so you can track and review developer activity within Pull Requests.

## View aggregated audit log data [Copied!](#view-aggregated-audit-log-data "Copy link to this section")

The developer audit log data is summarized in the following widgets, which provide a high-level overview of the statistics.

Widget

Description

Review statistics

Bar chart that shows how many pull requests were reviewed and how many weren’t.

Top 4 actions

Bar chart that shows which actions were most frequently performed by developers on pull requests.

Top reviewers

Bar chart that highlights the most active reviewers.

Note

The data in the widgets reflect scans that were completed successfully. Scans that are running, pending, or completed with an error aren’t included.

## View developer audit log details [Copied!](#view-developer-audit-log-details "Copy link to this section")

The developer audit logs are shown in the table, which provides the following information about each log item. You can drill through to see more details about a specific audit log by clicking to open the card.

Column

Description

Action

Specific action that the user performed (for example, **Ignore Violation**).

Category

Type of security scan that Cycode ran.

SCM User

Username of the person who performed the action, as identified by the SCM.

PR Comment

Any comment left in the pull request related to this action.

Location

Repository associated to this action.

Date

Date and time the action was taken.

Reviewed By

User who reviewed this specific audit entry. Unreviewed pull requests have nothing shown in this column.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
