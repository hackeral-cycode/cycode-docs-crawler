# Token budget and plans | Cycode Docs

Source: https://docs.cycode.com/cycode-ai/token-budget-and-plans

---

# Token budget and plans

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-ai/token-budget-and-plans.md "Edit this page")

* * *

## Overview [Copied!](#overview "Copy link to this section")

AI features in the Cycode platform — including Maestro and the agents it orchestrates — consume tokens against a monthly AI budget that’s allocated to your organization. This page explains the budget model, how consumption is measured, and what happens when you approach or reach your monthly limit.

For the dashboard that visualizes consumption in real time, see [AI usage dashboard](/cycode-ai/usage-dashboard/) .

## Complimentary tier [Copied!](#complimentary-tier "Copy link to this section")

Every Cycode organization receives a complimentary AI package. The starter tier includes **50 million tokens per month**, and complete ASPM tenants are automatically upgraded to the **pro tier** with **100 million tokens per month** at no additional cost. The complimentary tier is shared across all AI features and across all users in the organization.

If your organization needs additional capacity, contact your Cycode account team to upgrade to a higher AI tier.

## What counts as token consumption [Copied!](#what-counts-as-token-consumption "Copy link to this section")

Every request that Maestro or one of its agents processes consumes tokens. Tokens are counted for both the input (Maestro reading your prompt and the supporting context, such as code or violation data) and the output (Maestro’s response).

Examples of operations that consume tokens:

*   Sending a message in Maestro chat.
*   Triggering an exploitability analysis on a SAST, SCA, or IaC violation.
*   Generating an AI remediation suggestion.
*   Running a CVE analysis or change impact analysis.
*   Submitting a Context Intelligence Graph natural-language query.

## Monthly reset [Copied!](#monthly-reset "Copy link to this section")

Your token budget resets at the start of every monthly cycle. The next reset date is shown on the **Token consumption** widget of the [AI usage dashboard](/cycode-ai/usage-dashboard/) .

Unused tokens don’t carry over from one month to the next.

## Low and zero balance behavior [Copied!](#low-and-zero-balance-behavior "Copy link to this section")

When your remaining monthly budget gets low, Cycode surfaces a banner on the AI usage dashboard.

State

Trigger

Effect

**Low token balance**

Less than 10% of your monthly budget remains.

A warning banner is shown on the AI usage dashboard. AI features continue to function.

**No tokens left**

Less than 0.1% of your monthly budget remains.

A blocking banner is shown. AI features are unavailable until either the next monthly reset or until your tier is upgraded.

To increase your token allowance before the next reset, contact your Cycode account team or Cycode support.

## Disable AI features [Copied!](#disable-ai-features "Copy link to this section")

If you want to stop AI consumption entirely, an admin can disable AI features tenant-wide from **Settings > Admin Settings > AI Features**. For more information, see [AI features](/cycode-settings/admin-settings/ai-features/) .

## Related [Copied!](#related "Copy link to this section")

*   [AI usage dashboard](/cycode-ai/usage-dashboard/)
*   [Maestro](/cycode-ai/maestro/)
*   [AI features](/cycode-settings/admin-settings/ai-features/)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
