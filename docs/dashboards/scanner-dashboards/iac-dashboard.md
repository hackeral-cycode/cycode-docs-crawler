# IaC dashboard | Cycode Docs

Source: https://docs.cycode.com/dashboards/scanner-dashboards/iac-dashboard

---

# IaC dashboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/scanner-dashboards/iac-dashboard.md "Edit this page")

Updated on Jan 1, 2026 • Published on Dec 10, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The IaC dashboard provides an intuitive, visual summary of the infrastructure as code (IaC) violations detected in your environment. This dashboard helps you monitor risks, track remediation progress, and prioritize the misconfigurations that require immediate attention.

From the IaC dashboard, you can:

*   Get an overview of open violations, affected repositories, and providers
    
*   Visualize violation trends over time and by age
    
*   Track your service level agreement (SLA) status and Mean Time To Resolve (MTTR)
    
*   Use the prioritization funnel to focus on the most critical findings
    
*   Monitor how your pull requests (PRs) perform regarding IaC security
    

## View the IaC dashboard [Copied!](#view-the-iac-dashboard "Copy link to this section")

To open the IaC dashboard, go to **Dashboards** > **IaC**.

The dashboard contains the sections described below. Most of the widgets in the sections allow you to drill down into the data. Click on a specific bar or segment to open the Violations view with the relevant filters automatically applied.

### IaC violations overview [Copied!](#iac-violations-overview "Copy link to this section")

This section displays high-level metrics to give you an immediate sense of your security posture.

Widget

Description

Open IaC violations

Total number of unresolved violations found in your environment.

Repositories with IaC violations

Number of repositories that contain at least one open violation.

Providers with violations

Number of unique providers (such as AWS, Azure, or Google Cloud) associated with the findings.

### Violation breakdowns [Copied!](#violation-breakdowns "Copy link to this section")

This section helps you understand the nature and age of your violations.

Widget

Description

Open IaC violations by risk

Bar chart that shows the number of of violations in each severity category (Critical, High, Medium, Low, Info, and N/A).

IaC violations by age

Bar chart that shows the number of violations based on how many days they’ve been open (0–30, 30–90, and 90+).

IaC violations over time

Line graph that tracks the total number of violations that were detected during the specified time range.

### SLA status and MTTR [Copied!](#sla-status-and-mttr "Copy link to this section")

This section helps you track how efficiently your team resolves violations based on your system-wide SLA settings.

Widget

Description

IaC violations SLA status

Donut chart that shows the number of open violations that are within the defined SLA and the number of those that have exceeded it.

IaC MTTR by risk

Radial chart that shows the Mean Time To Resolve (in days) for violations in each severity category.

IaC MTTR over time

Line graph that shows trends in remediation speed per severity category over the specified time range.

### IaC prioritization funnel [Copied!](#iac-prioritization-funnel "Copy link to this section")

The prioritization funnel helps you identify the most critical violations by filtering down to the most urgent subset. The funnel applies a fixed sequence of filters to highlight the specific violations that require immediate action.

The funnel filters violations in the following order:

1.  **Risk score**: Violations with a score of 70 or higher.
    
2.  **Severity**: Violations with a severity of High or Critical.
    
3.  **Critical severity**: Violations with a severity of Critical.
    
4.  **CWE Top 25**: Violations associated with one or more of the CWE Top 25 most dangerous software vulnerabilities.
    
5.  **Age**: Violations created more than 1 month ago.
    

### Risks and categories [Copied!](#risks-and-categories "Copy link to this section")

This section identifies the following specific areas of concern.

Widget

Description

Most critical open IaC violations

Table that lists the violations with the highest risk scores. Click any item to view its full details.

IaC violations by provider

Donut chart that shows the percentage of violations found in specific technologies, such as Kubernetes, Terraform, and Dockerfile. Hover over a category to see the actual count.

IaC violations by risk and provider

Heatmap chart showing how many violations exist according to risk score, per IaC provider.

IaC open violations by sub-category

Donut chart that shows the percentage of open violations based on specific types of misconfigurations, such as insecure configurations, networking, and encryption.

Projects and repositories at highest risk

Tables that list the projects and repositories with the highest volume and severity of violations.

### Pull Request (PR) activity [Copied!](#pull-request-pr-activity "Copy link to this section")

This section provides insights into your “shift left” strategy and how developers handle IaC security during the coding process. In addition, it provides a graphical view of the number of pull requests scanned for secret violations during the selected period of time, namely how many PRs contained violations that exceeded the configured severity threshold and failed, versus how many passed successfully.

Widget

Description

PRs without IaC violations

Percentage of pull requests that passed IaC scans with no violations above the configured threshold detected.

IaC violations resolved in PRs

Number of violations that were remediated by developers before they merged their code.

IaC violations ignored in PRs

Number of violations that were marked as **ignore** by the developer before they merged their code.

IaC PR status

Funnel view that shows the flow of PRs from **Open** to **Blocked** based on violations that were detected.

IaC violations in PRs over time

Line graph that shows the trend of the number of violations detected in PRs over time (months).

Total prevented violations

Summary of violations that were detected and remediated or prevented during the PR workflow.

Total open violations

Bar chart of the current total of open violations according to severity.

Total remediated violations

Bar chart that shows the total number of resolved violations according to the past X days.

IaC violations by status over time

Line chart that provides a visual scorecard of your current remediation workflow. Strong **Prevented** and **Remediated** showings indicate that violations are being discovered and resolved earlier in the development cycle, while high **Open** numbers indicate that more violations are being created than resolved.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
