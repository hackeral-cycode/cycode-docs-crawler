# AI usage dashboard | Cycode Docs

Source: https://docs.cycode.com/cycode-ai/usage-dashboard

---

# AI usage dashboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-ai/usage-dashboard.md "Edit this page")

Updated on Apr 28, 2026 • Published on Apr 28, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The AI usage dashboard provides visibility into how the Cycode platform’s AI features consume tokens against your monthly budget. Use the dashboard to monitor your token consumption, identify which AI features and which users are driving consumption, and review individual AI requests in a detailed log.

To open the dashboard, go to **Admin Settings > Cycode AI > AI Usage**.

## Token balance alerts [Copied!](#token-balance-alerts "Copy link to this section")

When your remaining monthly budget gets low, a banner appears at the top of the dashboard.

Banner

When it appears

What it means

**Low token balance**

Less than 10% of your monthly budget remains.

At your current rate of consumption, you may reach your token limit before the next monthly reset. Contact support to increase your token allowance.

**No tokens left**

Less than 0.1% of your monthly budget remains.

You have reached the token limit of your current AI package and platform AI features are no longer available. Contact support to increase your token allowance, or wait for the next monthly reset.

The next reset date for your monthly budget is shown on the **Token consumption** widget.

## Widgets [Copied!](#widgets "Copy link to this section")

The widgets at the top of the dashboard summarize your overall AI token consumption.

Note

In widgets that contain donut charts, hover over a segment of the chart to see the actual number.

Widget

Description

**Token consumption**

Monthly token consumption shown against your available budget. The next reset date for the current monthly cycle is shown next to the widget.

**Consumption per feature**

Token consumption broken down by AI feature (for example, AI Remediation, CVE Assistant, Risk Summary). The top features are shown individually; the rest are grouped under **Others**.

**Consumption per user**

Token consumption broken down by user. The top users are shown individually; the rest are grouped under **Others**.

## Detailed tables [Copied!](#detailed-tables "Copy link to this section")

Below the widgets, three tabs let you drill into the data behind each summary.

### Token consumption [Copied!](#token-consumption "Copy link to this section")

A row-by-row log of every AI request, useful for auditing usage at the request level.

Column

Description

**Date and time**

When the request was made.

**Feature**

The AI feature that handled the request.

**User email**

The user who triggered the request.

**Tokens consumed**

The number of tokens the request consumed.

**Filters:** Time frame, feature, and search by user email.

### Consumption per user [Copied!](#consumption-per-user "Copy link to this section")

Token consumption aggregated by user across the selected time frame.

Column

Description

**Email**

The user’s email address.

**Tokens consumed**

The total number of tokens the user has consumed in the selected time frame.

**Requests**

The total number of AI requests the user has made.

**Filters:** Time frame and search by email.

### Consumption per feature [Copied!](#consumption-per-feature "Copy link to this section")

Token consumption aggregated by AI feature across the current monthly cycle, ordered by tokens consumed.

Column

Description

**Feature**

The name of the AI feature.

**Requests**

The total number of AI requests handled by the feature.

**Tokens consumed this month**

The total number of tokens the feature has consumed, with a bar showing the relative share of overall consumption.

**Filter:** Search by feature name.

## Related [Copied!](#related "Copy link to this section")

*   [Cycode AI](/cycode-ai/)
*   [AI features](/cycode-settings/admin-settings/ai-features/)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
