# CLI logs | Cycode Docs

Source: https://docs.cycode.com/developer-experience/security-administrators/monitor-developer-activity/cli-logs

---

# CLI logs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/security-administrators/monitor-developer-activity/cli-logs.md "Edit this page")

Updated on Jul 7, 2025 • Published on Jun 10, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The CLI Logs dashboard can be used to monitor and audit security scans that developers initiate using the CLI. The dashboard provides a high-level summary along with a detailed, granular log of scan activities.

Cycode’s CLI logs are somewhat different from other Cycode logs because the CLI scan can be performed without a repository or organization (for example, scan just files and folders), and may also include scans without branches or commits.

## View aggregated CLI log data [Copied!](#view-aggregated-cli-log-data "Copy link to this section")

The CLI log data is summarized in the following widgets, which provide a high-level overview of the statistics.

Widget

Description

Top 4 users

Bar chart that highlights the users who have run the most CLI scans.

Scans by category

Horizontal bar chart that shows the total number of scans according to security category.

Top 5 versions

Bar chart that shows the distribution of scans across different versions of the CLI tool. This is useful for tracking adoption and ensuring users are using up-to-date versions.

Note

The data in the widgets reflect scans that were completed successfully. Scans that are running, pending, or completed with an error aren’t included.

## View CLI log details [Copied!](#view-cli-log-details "Copy link to this section")

The CLI logs are shown in the table, which provides the following information about each log item. You can drill through to see more details about a specific CLI log by clicking to open the card.

Column

Description

Scan Date

Date and time the scan was run.

User

User who initiated the scan.

CLI Scan Type

Details about the command that was run (for example, path or commit history) and the target directory (…/manifest).

Violations

Visual summary of findings, showing the number of critical/high violations out of the total. A color-coded bar reflects the severity distribution.

Organization

Organization or workspace where the scan was run.

Category

Type of security scan that Cycode ran.

Duration

Time it took for the scan to complete.

Status

Final status of the scan.

## Plugin and developer activity coverage [Copied!](#plugin-and-developer-activity-coverage "Copy link to this section")

The CLI Logs dashboard tracks CLI scan activity. The following items describe what is and is not exposed through CLI Logs and related developer-engagement widgets:

*   The **Plugin Users by Version** widget on the Developer Engagement dashboard shows the number of users running each plugin version, including outdated versions. The widget does not expose specific user identities, and the user counts are not clickable.
*   There is no direct way to list which specific users have installed the CLI or IDE plugin. Only plugin usage (scan activity) is tracked. To identify users who are running a particular plugin version, cross-reference the **Top 4 users** widget and the CLI logs table with IDE and CLI scan activity.
*   IP address is not currently captured or displayed for developer CLI scans.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
