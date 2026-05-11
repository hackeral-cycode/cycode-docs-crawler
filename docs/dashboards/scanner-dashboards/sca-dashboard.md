# SCA dashboard | Cycode Docs

Source: https://docs.cycode.com/dashboards/scanner-dashboards/sca-dashboard

---

# SCA dashboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/scanner-dashboards/sca-dashboard.md "Edit this page")

Updated on Mar 8, 2026 • Published on Jul 31, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The SCA dashboard provides an intuitive, visual summary of the software composition analysis (SCA) violations detected in your environment. The dashboard enables you to monitor risks from vulnerable dependencies and non-permissive licenses, track remediation progress, and prioritize which issues require immediate attention.

From the SCA dashboard, you can do the following:

*   See an overview of open violations, unique vulnerabilities, and packages with non-permissive licenses.
    
*   Visualize violation trends over time and by age.
    
*   Track your service level agreement (SLA) status.
    
*   Use the prioritization funnel to focus on the most critical findings.
    
*   Explore package-level intelligence, including reachable and exploitable violations.
    
*   Monitor how your pull requests (PRs) perform regarding SCA security.
    

## View the SCA dashboard [Copied!](#view-the-sca-dashboard "Copy link to this section")

To show the SCA dashboard, go to **Dashboards** > **Scanners** > **SCA**. The dashboard is a collection of widgets, described below, that provide a broad range of high-level metrics.

You can filter the dashboard view to refine the data displayed in the widgets.

### SCA violations [Copied!](#sca-violations "Copy link to this section")

#### Summary information [Copied!](#summary-information "Copy link to this section")

The widgets in the top left of the dashboard display metrics about the detected violations, to give you an immediate picture of your security posture.

Widget

Description

**Open SCA violations**

Total number of open SCA violations in your environment. Click to open the **Violations** > **SCA** view filtered on open SCA violations.

**Vulnerabilities**

Number of unique vulnerabilities (CVEs) detected across your dependencies. Click to open the **Violations** > **SCA** view grouped by vulnerability ID.

**Auto-fix available**

Number of open violations that have an automated fix available. Click to open the **Violations** > **SCA** view filtered on violations with an available auto-fix.

**Violations with non-permissive licenses**

Number of open violations associated with dependencies that use non-permissive licenses. Click to open the **Violations** > **SCA** view filtered on the relevant licenses.

#### Violation data [Copied!](#violation-data "Copy link to this section")

The widgets around the summary information provide data about the nature and age of the current open violations.

Widget

Description

**SCA violations by risk**

Bar chart that shows violations distributed by severity (**Critical**, **High**, **Medium**, **Low**, **Info**, and **N/A**). Click a severity to open the **Violations** > **SCA** view filtered on open violations with that severity.

**SCA violations by age**

Bar chart that shows violations distributed by how long they have been open (**0–30 days**, **30–90 days**, and **90+ days**). Click a range to open the **Violations** > **SCA** view filtered on open violations in that age range.

**SCA violations over time**

Line graph that shows the total number of open vs. remediated violations based on their detection date. Hover over the graph to view actual numbers per date.

**SCA SLA status**

Donut chart that shows open violations distributed by their SLA status (**On track**, **Near to be missed**, and **Missed**) according to your defined SLAs.

Note

SLA settings are configured by your system administrator.

**SCA prioritization funnel**

Visually applies a sequence of filters to highlight the violations that demand immediate action. The funnel is configurable, allowing you to adjust which filters are applied. Default funnel:**Status**(open) >**Dev dependencies**(excludes dev-only dependencies) >**Direct dependency**(explicitly declared as direct dependencies) >**Has fix version**(fixed version of affected package is available) >**Risk score**(70–100) >**Reachability**(vulnerable code path is reachable) >**Created date** (detected in the last 30 days)

#### Package intelligence [Copied!](#package-intelligence "Copy link to this section")

This section provides deeper insight into the characteristics of your vulnerable dependencies.

Widget

Description

**Reachable violations**

Number of violations in packages where the vulnerable code path is reachable from your application. Click to open the **Violations** > **SCA** view filtered on reachable violations.

**Exploitable violations**

Number of violations associated with vulnerabilities that have known exploits. Click to open the **Violations** > **SCA** view filtered on violations with mature exploits.

**Vulnerability types**

Bar chart that shows violations distributed by dependency type:

*   **Direct** \- violations in packages explicitly declared in your manifest
*   **Indirect** \- violations in transitive dependencies

Click a dependency type to open the **Violations** > **SCA** view filtered on that value.

**Vulnerabilities by dependency type and environment**

Grouped bar chart that compares Direct/Indirect dependencies against Development/Non-development environments. Click a dependency type to open the **Violations** > **SCA** view filtered on that value.

#### Top risks and packages [Copied!](#top-risks-and-packages "Copy link to this section")

This section identifies specific areas of concern.

Widget

Description

**Highest-risk packages**

List of the 5 packages with the most critical open violations, showing the package version and number of affected repositories. Click a row to view the violations for that package. Click **See all** to open the **Inventory** > **Packages** view.

**Most used non-permissive licenses**

Llist of the top 5 non-permissive licenses detected across your dependencies, ranked by number of violations. Click a row to open the **Violations** > **SCA** view filtered on that license. Click **See all** to open the **Violations** > **SCA** view filtered on all non-permissive licenses.

**Vulnerabilities at highest risk**

List of the 5 violations with the highest risk scores. Click a row to open the violation card.

**Open violations by risks and tools**

Matrix chart showing the distribution of violations by risk across each security tool. Click a spot to open the **Violations** > **SCA** view filtered on that security tool.

**Projects at highest SCA risk**

Table listing the 5 Cycode projects with the highest SCA risk exposure, including violation counts and MTTR. Click a row to open the project card. Click **See all** to open the Projects view.

**Repositories at highest SCA risk**

Table listing the 5 repositories with the SCA risk exposure. Click a row to open the repository card. Click **See all** to open the **Inventory** > **Repositories** view.

#### Pull Request (PR) activity [Copied!](#pull-request-pr-activity "Copy link to this section")

This section provides insight into your “shift left” strategy and how developers handle SCA security during the coding process.

Widget

Description

PRs without SCA violations

Percentage of pull requests that passed SCA scans without issues.

SCA violations resolved in PRs

Percentage of detected violations that were fixed by developers before merging their code.

SCA violations ignored in PRs

Percentage of detected violations where developers chose to ignore the violation.

SCA PR status

Funnel view showing the amount of PRs per status, from **Open** to **PRs with violations** to **Blocked PRs** based on policy violations.

SCA violations in PRs over time

Line chart showing the total number of SCA violations detected in PRs as a trend over the displayed time period.

#### Performance over time [Copied!](#performance-over-time "Copy link to this section")

This section tracks the overall effectiveness of your SCA remediation efforts over time.

Widget

Description

Total prevented SCA violations

Cumulative number of SCA violations that were detected and addressed before reaching production as a result of the PR scanning process.

Total open SCA violations

Cumulative number of currently open violations, distributed by risk score. Click to open the **Violations** > **SCA** view filtered on the risk score.

Total remediated SCA violations

Cumulative number of violations that were resolved or ignored, distributed by time period. Click to open the **Violations** > **SCA** view filtered on the time period.

SCA Violations by status over time

Line chart showing open and remediated violations based on their detection date.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
