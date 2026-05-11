# AI risk | Cycode Docs

Source: https://docs.cycode.com/dashboards/ai-security/ai-risk

---

# AI risk

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/ai-security/ai-risk.md "Edit this page")

Updated on Mar 22, 2026 • Published on Mar 17, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The AI risk dashboard provides a visual summary of the security risks associated with AI usage in your environment. Use the dashboard to monitor AI-related violations, track your risk posture, and prioritize remediation efforts.

Note

Data in the AI risk dashboard is displayed according to the risk score calculated by Cycode (not severity level). For more information about risk score, go to [Cycode risk score](/additional-cycode-features/cycode-risk-score/) .

## AI risk widgets [Copied!](#ai-risk-widgets "Copy link to this section")

The widgets in the AI risk dashboard show data about AI security risks in your environment.

Note

For widgets with aggregated data, you can click on the data to drill through and view more details.

### Violation status [Copied!](#violation-status "Copy link to this section")

These widgets are always visible in the dashboard.

Widget

Description

**Open AI violations by risk**

Distribution of open AI violations according to risk.

**AI violations by age**

Distribution of open AI violations according to how long has passed since they were detected.

### Policy impact summary and CWE breakdown [Copied!](#policy-impact-summary-and-cwe-breakdown "Copy link to this section")

Widget

Description

**Policy impact summary**

Summary of SAST-AI security policies, showing the policy name, associated CWE, severity level, and remediation progress.

**CWE breakdown**

Distribution of AI violations by their CWE classification.

### AI packages and vulnerabilities [Copied!](#ai-packages-and-vulnerabilities "Copy link to this section")

Widget

Description

**Highest-risk AI packages**

The AI packages in your environment with the highest risk scores, showing package name, version, and risk score.

**Vulnerabilities in AI packages at highest risk**

The CVEs detected in your AI packages that have the highest Cycode risk score.

### AI secrets [Copied!](#ai-secrets "Copy link to this section")

Note

In widgets that contain donut charts and distribution by percentage, hover over a segment of the chart to see the actual number.

Widget

Description

**Top AI secret values at risk**

The top AI-related secrets detected in your environment, ranked by risk score.

**AI secrets by secret type**

Distribution of AI secrets by type, along with the total count of unique secret types detected.

### Projects and repositories at highest risk [Copied!](#projects-and-repositories-at-highest-risk "Copy link to this section")

Widget

Description

**Projects with AI at highest risk**

Projects with AI-related violations at the highest risk of a secret being exposed, or where the most sensitive data is at risk. Also shows business impact, MTTR, project owner, and the number of violations. Click a row to open the project card.

**Repositories with AI at highest risk**

Repositories with AI-related violations at the highest risk of a secret being exploited, or where the most sensitive data is at risk. Also shows the repository owner, and the number of violations along with the associated risk/severity level. Click a row to open the repository card.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
