# Project Leaderboard | Cycode Docs

Source: https://docs.cycode.com/cycode-projects/project-leaderboard

---

# Project Leaderboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-projects/project-leaderboard.md "Edit this page")

Updated on Apr 12, 2026 • Published on Apr 9, 2026

* * *

## Project Leaderboard [Copied!](#project-leaderboard "Copy link to this section")

The Project Leaderboard lets you compare security performance across projects. It ranks projects by risk score, remediation activity, and SLA compliance, making it easy to see which projects are falling behind and which are leading the way.

The leaderboard is designed for comparison, not real-time monitoring. Use it to benchmark projects against each other, spot patterns, and prioritize where to focus.

Note

The Project Leaderboard is only available for tenants with risk score enabled.

## How data is collected [Copied!](#how-data-is-collected "Copy link to this section")

Leaderboard metrics are calculated from periodic snapshots rather than real-time data. The system samples project data at regular intervals to generate scores, trends, and comparisons. This means recent changes may take a short time to appear. Trend indicators (such as “Most Improved” and the Trend column) compare the latest snapshot against the snapshot from 30 days ago.

* * *

Note

Trend-based comparisons use data from up to 30 days ago. If less than 30 days of data is available, the comparison is made against the earliest available snapshot.

* * *

## Widgets [Copied!](#widgets "Copy link to this section")

Four widgets at the top of the page provide a quick overview of the most important patterns across your projects.

Widget

What it shows

Top Performers

The 3 projects with the most remediated violations. Highlights teams actively closing security issues.

Most Improved

The 3 projects with the largest risk score decrease, comparing the latest snapshot to up to 30 days ago.

Highest Risk

The 3 projects with the highest risk score. If multiple projects share the same score, the ones at that level the longest are shown first.

Needs Attention

Projects that have exceeded their remediation SLA deadline, sorted by how long they’ve been in breach. The longest-breached projects are shown first.

* * *

## Quick presets [Copied!](#quick-presets "Copy link to this section")

Presets let you re-sort the project table by common criteria with a single click. Selecting a preset updates the sort order and highlights the active preset.

Preset

What it does

Most at Risk

Sorts by the highest-risk open violation per project. If multiple projects have the same score, projects where that violation has been open the longest are shown first.

Most Open Violations

Sorts by open violation count, highest first. Useful for identifying where unresolved issues are concentrated.

Best Performers

Sorts by total remediated violations, highest first. Highlights teams closing the most security issues.

Slowest Response

Sorts by MTTR (Mean Time to Remediate), slowest first. Identifies where violations take the longest to fix.

Most Active

Sorts by violations acted on (remediated or ignored) in the last 30 days, highest first. Shows which teams are actively triaging.

Least Active

Sorts by violations acted on in the last 30 days, lowest first. Surfaces potentially neglected projects.

You can also sort manually using the “Sort by” dropdown and direction toggle below the presets.

* * *

## Project table [Copied!](#project-table "Copy link to this section")

The table lists all projects with the following columns:

Column

Description

Rank

Position based on the current sort order. The top 3 projects are highlighted. Rank updates when you change the sort or select a preset.

Project

Project name and type (e.g., Application, Team, Infrastructure).

Risk Score

Composite score from 0-100 reflecting the project’s security posture. Displayed as a risk badge and numeric score.

Open Violations

Number of violations currently open and unresolved. Includes all severity levels.

Remediated

Total number of violations that have been fixed.

MTTR

Mean Time to Remediate - the average number of days between when a violation is detected and when it is resolved.

SLA Status

Whether the project is meeting its remediation timeline. Three states: Breached (missed the deadline), At Risk (approaching the deadline), Meeting SLA (on track).

PR Activity

Number of pull requests opened in repositories within the project scope over the last 30 days.

Acted On (30d)

Number of violations remediated or ignored in the last 30 days. This column is visible when the Most Active or Least Active preset is selected.

Trend

Direction of change for the current sort metric, comparing the latest snapshot to up to 30 days ago. ↗ = improving, ↘ = declining, - = stable.

* * *

## Footer stats [Copied!](#footer-stats "Copy link to this section")

Summary statistics are shown at the bottom of the page to provide a high-level benchmark across all projects.

Stat

Description

Total Projects

Number of projects in the current view.

Avg Open Violations

Average number of open violations per project.

Avg MTTR

Average mean time to remediate across all projects.

SLA Compliance

Percentage of projects currently meeting their remediation SLA.

Note

The summary widgets and footer statistics always reflect all projects. They are not affected by the selected preset or sort order.

## Table actions [Copied!](#table-actions "Copy link to this section")

*   Column selector - Choose which columns are visible in the table.
*   Export CSV - Download the current table data as a CSV file.
*   Export PDF - Download a PDF of the leaderboard summary and the top 10 projects from the table, ordered by the currently selected preset. The PDF shows only the top 10, not the full project table.

* * *

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
