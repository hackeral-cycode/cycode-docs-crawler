# Secrets dashboard | Cycode Docs

Source: https://docs.cycode.com/dashboards/scanner-dashboards/secrets-dashboard

---

# Secrets dashboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/scanner-dashboards/secrets-dashboard.md "Edit this page")

Updated on Apr 16, 2025 • Published on Jul 31, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Secrets dashboard provides a visual overview of the data regarding secrets that Cycode detects in your environment. Use the dashboard to monitor these secrets, track your security posture, and prioritize where to begin remediation.

In the Secrets dashboard, you can:

*   See an overview of all the secrets detected in your environment
    
*   Understand the spread of secrets across your delivery pipeline
    
*   See which are the top secrets at risk, which are publicly exposed, and which are propagated (the same secret has been detected in multiple stages of the SDLC)
    
*   Measure the mean time to resolve a secrets violation (MTTR)
    
*   Monitor the coverage of secret scanning in code repositories and risk reduction based on blocking pull requests where violations are detected
    

Note

By default, the data in the Secrets dashboard is displayed by risk. You can toggle the display between risk and severity as needed.

### Filters [Copied!](#filters "Copy link to this section")

The following filters are available for the Secrets dashboard.

Filter

Description

**General**

Status

View based on the current status of the associated violations:

*   Open
*   Resolved
*   Ignored

Cycode project

View secrets that were detected in a specific project.

**Global**

Created date

View secrets that were detected within a specified date range.

Risk score

Grade that Cycode calculates and applies based on multiple factors. For more information, go to [How Cycode calculates risk](/additional-cycode-features/cycode-risk-score/risk-score-calculation) .

Policy severity

View secrets associated with violations of a specific severity.

Security tool

If you have integrated third-party security tools, view secrets that were detected using specific tools.

Source

View secrets that were detected in a specific source. 

Note

The default value is none.

**Assets**

Organization

View secrets that were detected in a specific organization.

## Secret widgets [Copied!](#secret-widgets "Copy link to this section")

These widgets show visualized data about secret violations. In aggregated data widgets, you can click the data to drill through and see additional details. In time trend widgets,  you can hover over the graph to see individual data points.

Widget

Description

Secret values with violations

Total number of secrets associated with violations.

Open secret violations

Total number of secret violations that are open in the selected date range.

Sources

Total number of sources where secrets were detected.

Open secret violations by risk

Number of secret violations, broken down by risk/severity level.

Secret violations by age

Number of secret violations, shown broken down by when they were first detected.

Top 5 sources

Number of secret violations, broken down by where they were detected.

Secret violations over time

Number of secret violations that were detected vs. remediated, shown as trends over time.

Secret values by validity

Number of secrets detected, broken down by status (active, inactive, or unknown).

Top publicly exposed secret values

The top secrets that are publicly exposed, along with their risk scores.

Secret violations MTTR by risk

Average amount of time (in days) it takes to resolve a secret violation, broken down by risk/severity level.

Secret violations MTTR over time

Average amount of time (in days) it takes to resolve a secret violation, shown as trends over time.

Secret violations SLA status

SLA of currently open secret violations, broken down by status.

Secrets prioritization funnel

Visualization of all currently open secret violations filtered according to project business impact (high), detected in latest code, secrets that are publicly exposed, valid secrets, and secrets that were recently detected.

Top secret values at risk

The top 5 risky secrets that have been detected, shown with their risk scores. You can drill through to see all risky secrets.

Open violations in code

Total number of secret violations that were detected in the code stage of the SLDC, along with the source.

Open violations in build

Total number of secret violations that were detected in the build stage of the SLDC, along with the source.

Open violations in artifacts

Total number of secret violations that were detected in code artifacts, along with the source.

Open violations in cloud

Total number of secret violations that were detected in the cloud, along with the source.

Open violations in productivity tools

Total number of secret violations that were detected in productivity tools such as Slack and Jira, along with the source.

Top secret value types by risk

The top secret types that have been detected in your environment, organized by risk/severity level.

Top secret values found in multiple sources

The top 5 secrets that have been detected in more than one source, shown with their risk scores. You can drill through to see all secrets.

Top 5 remediated secret policies

The top 5 secret types that are associated with closed violations.

Projects at highest secret risk/severity

Projects with the highest risk of a secret being exposed, or where the most sensitive data is at risk. Also shows business impact, MTTR, project owner, and the number of violations along with the associated risk/severity level. You can drill through to see all projects.

Repositories with highest secret risk/severity

Repositories with the highest risk of a secret being exploited, or where the most sensitive data is at risk. Also shows the repository owner, and the number of violations along with the associated risk/severity level. You can drill through to see all repositories.

PRs with secret violations

Percentage of PRs where secrets were detected.

Secret violations resolved in PRs

Percentage of PRs where secret violations were remediated.

Secret violations ignored in PRs

Percentage of PRs where secret violations were ignored.

Secret PRs status

Visualization that shows the total number of PRs, filtered on PRs with violations and then PRs that were blocked due to violations.

Secret violations in PRs over time

Trend of secret violations that were detected in PRs that are open, resolved, and ignored over the defined date range.

Top secret types in PR

The top types of secrets that are detected in PRs, along with the number of occurrences for each during the defined date range.

Total prevented secret violations

Total number of secrets that were detected in PRs.

Total detected secret violations

Total number of secret violations that were detected, broken down by risk/severity level.

Total remediated secret violations

Total number of secret violations that were detected and remediated (either resolved or ignored), broken down by MTTR.

Secret performance over time

Trend of how many secrets were detected, remediated, and blocked from being merged during the defined date range.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
