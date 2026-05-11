# Developer engagement | Cycode Docs

Source: https://docs.cycode.com/dashboards/developer-engagement

---

# Developer engagement

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/developer-engagement.md "Edit this page")

Updated on Nov 25, 2025 • Published on Jun 9, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Developer Engagement dashboard can be used to improve collaboration between AppSec and R&D, giving security administrators visibility into developer activities via the Cycode platform so they can monitor developer workflows and tool adoption.

Use the Developer Engagement dashboard to track the adoption and engagement of Cycode in developer tools, particularly IDE plugins, CLI tools, and pull request scans.

Key metrics include:

*   Plugin adoption rates
    
*   Usage in different IDEs
    
*   Violation handling in pull requests
    

## View developer engagement metrics [Copied!](#view-developer-engagement-metrics "Copy link to this section")

The Developer Engagement dashboard contains the following widgets where you can view statistics about developer activity regarding pull requests and violations in pull requests, along with IDE metrics.

Widget

Description

**Developer engagement and general PR statistics**

Developer engagement rate

Gauge chart that measures the engagement of developers with Cycode.

PR remediation activity

Heatmap that shows the activity of pull request remediation over time.

PR scan coverage

Radar chart that visualizes the coverage of different types of security scans within pull requests. It scores different categories like Secrets, IaC, SCA, and SAST.

**Violation statistics in PRs**

Violations by severity

Bar chart that breaks down the total number of violations by their severity level.

Violations in PR by SCM

Categorizes violations based on the Source Code Management (SCM) system.

Violations in PR by category

Bar chart that shows the distribution of violations found in pull requests across different security categories.

PRs with violations

Shows the percentage of pull requests that have violations.

Violations resolved in PRs

Shows the percentage of violations in pull requests that have been resolved.

Violations ignored in PRs

Shows the percentage of violations in pull requests that have been ignored.

Violations in PRs over time

Line graph that shows the trend of different pull request statuses over time.

PRs status

Area chart that displays the status of pull requests:

*   Open
*   PRs with violations
*   Blocked PRs

PR status over time

Line graph that tracks the number of open pull requests and pull requests with violations over a period of time.

**IDE metrics**

Installed plugins

Shows how many developers have the plugin installed versus the total number of users.

Plugin adoption by IDE tool

Shows the plugin installations according to specific development tool or CLI.

Plugin users by version

Show the distribution of users across different versions of the plugin.

IDE scan by category

Donut chart that shows the breakdown of violation types found by IDE scans.

Plugin adoption over time

Line graph that tracks the total number of users vs. the number of plugin users over a period of time.

Violations in IDE over time

Bar chart that displays the number of security violations detected within the IDE over time, categorized by type.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
