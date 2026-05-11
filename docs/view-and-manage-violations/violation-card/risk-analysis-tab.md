# Risk Analysis tab | Cycode Docs

Source: https://docs.cycode.com/view-and-manage-violations/violation-card/risk-analysis-tab

---

# Risk Analysis tab

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/view-and-manage-violations/violation-card/risk-analysis-tab.md "Edit this page")

Updated on Oct 5, 2025 • Published on Oct 30, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Risk Analysis tab contains detailed information to help you understand the risk posed by this violation.

### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

The following summary tiles provide a high-level summary of the level of risk.

Tile

Description

Risk score

Overall score calculated by Cycode.

Note

For more information, go to [Risk score calculation](/additional-cycode-features/cycode-risk-score/risk-score-calculation).

CVSS

Metric that measures the severity of the software vulnerability and assigns a score from 1.0 to 10.0.

EPSS

Metric that estimates the likelihood that this vulnerability can be exploited.

### Risk details [Copied!](#risk-details "Copy link to this section")

The following information is displayed.

Item

Description

Exposure path

Tracks the potential for exposure back to the root cause of the violation.

Note

For more information, go to [Exposure paths](/view-and-manage-violations/violation-card/risk-analysis-tab).

Risk summary

Ask Maestro for a clear risk summary that explains all the factors.

Risk score history

View the changes in the risk score over time as either a graph or a table.

Risk factors

Variables that were used to calculate the current risk score (shown at the top of the tab), in order of importance. Hover over the tooltip of each factor to learn more about how it contributes to the risk score. The risk factors are shown in the following order:

*   **In effect** - these factors were identified and contributed to the risk score
*   **No effect** - these factors were identified in the violation but didn’t affect the risk score
*   **Not detected** - these factors weren’t detected when the violation was analyzed

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
