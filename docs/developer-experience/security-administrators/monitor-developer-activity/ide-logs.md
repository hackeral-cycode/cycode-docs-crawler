# IDE logs | Cycode Docs

Source: https://docs.cycode.com/developer-experience/security-administrators/monitor-developer-activity/ide-logs

---

# IDE logs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/security-administrators/monitor-developer-activity/ide-logs.md "Edit this page")

Updated on Jul 7, 2025 • Published on Jun 10, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The IDE Logs dashboard can be used to monitor and display the activity of security scans originating from developers’ IDEs. Users can view high-level statistics on adoption and usage, along with a detailed log of each scan.

## View aggregated IDE log data [Copied!](#view-aggregated-ide-log-data "Copy link to this section")

The IDE log data is summarized in the following widgets, which provide a high-level overview of the statistics.

Widget

Description

Plugin adoption by IDE tool

Bar chart that shows the distribution of plugin usage across different IDEs.

Top 4 users

Bar chart that highlights the most active users running scans.

Scans by category

Horizontal bar chart that shows the total number of scans according to security category.

Note

The data in the widgets reflect scans that were completed successfully. Scans that are running, pending, or completed with an error aren’t included.

## View IDE log details [Copied!](#view-ide-log-details "Copy link to this section")

The IDE logs are shown in the table, which provides the following information about each log item. You can drill through to see more details about a specific IDE log by clicking to open the card.

Column

Description

Last scan date

Date and time the scan was last run.

User

User who initiated the scan.

Repository

Code repository that was scanned.

Status

Final status of the scan.

Violations

Visual summary of findings, showing the number of critical/high violations out of the total. A color-coded bar reflects the severity distribution.

Organization

Parent organization or tenant for the scan.

Category

Type of security scan that Cycode ran.

Duration

Time it took for the scan to complete.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
