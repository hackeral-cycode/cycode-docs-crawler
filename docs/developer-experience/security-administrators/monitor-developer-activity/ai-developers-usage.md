# AI Developers usage | Cycode Docs

Source: https://docs.cycode.com/developer-experience/security-administrators/monitor-developer-activity/ai-developers-usage

---

# AI Developers usage

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/security-administrators/monitor-developer-activity/ai-developers-usage.md "Edit this page")

Updated on Apr 12, 2026 • Published on Apr 12, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Developers Usage page provides a centralized view of AI code agent activity across your organization. It aggregates data from all connected integrations (Cursor, Anthropic Console) into a single dashboard, allowing security and engineering leaders to monitor how developers interact with AI code agents over time.

All data on this page is affected by the **Date Range** filter at the top. Changing the date range recalculates the summary widgets, the developers’ table, and individual developer cards.

## Summary Widgets [Copied!](#summary-widgets "Copy link to this section")

Three widgets at the top of the page summarize AI code agent activity for the selected date range.

**Active Developers** — The number of unique developers who generated at least one line of code using an AI code agent and used a model during the selected period.

**Lines Generated** — The total number of code lines proposed by AI code agents across all developers and connected integrations within the selected date range. This includes all AI-generated code, whether the developer ultimately accepted or rejected it.

**Acceptance Rate** — The average rate at which active developers accepted AI-generated suggestions during the selected period. While Lines Generated reflects the total volume of code proposed by AI code agents, Acceptance Rate reflects how much of that output developers actually approved and kept.

## Developers Table [Copied!](#developers-table "Copy link to this section")

Column

Description

**User**

Developer’s name and email address.

**Code agents**

The AI code agent tools the developer used during the selected period.

**Lines generated**

Total code lines proposed by AI for this developer across all connected code agents — includes both accepted and rejected suggestions.

**Acceptance rate**

Percentage of AI-proposed suggestions the developer accepted out of all suggestions proposed.

## Developer Card [Copied!](#developer-card "Copy link to this section")

Clicking a developer row opens a detailed card with a deeper breakdown of their activity.

### Card Header [Copied!](#card-header "Copy link to this section")

Displays the developer’s name, email, time period label (e.g., “Last 3 Months”), and three summary stats: **Lines Generated**, **Acceptance Rate**, and **Active Tools**.

### Code Agents Breakdown [Copied!](#code-agents-breakdown "Copy link to this section")

The card shows a separate section for each code agent the developer uses, with agent-specific metrics:

*   **For Anthropic Console** — Lines generated (added/deleted), Used models, and Accepted/Rejected counts. See the [Anthropic Console Integration](/integrations/ai-coding-agents/anthropic-console) documentation for field details.
*   **For Cursor** — Lines generated (added/deleted), Used models, Accepted lines (added/deleted), Agent requests, Chat requests, and Tab acceptance rate. See the [Cursor Integration](/integrations/ai-coding-agents/cursor) documentation for field details.

### Tabs [Copied!](#tabs "Copy link to this section")

*   **Overview** — The default view with the metrics described above.
*   **Interaction Logs** — A detailed log of individual AI interactions for this developer (when available).

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
