# Anthropic Console | Cycode Docs

Source: https://docs.cycode.com/integrations/ai-coding-agents/anthropic-console

---

# Anthropic Console

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/ai-coding-agents/anthropic-console.md "Edit this page")

Updated on Apr 12, 2026 • Published on Apr 12, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Anthropic Console integration allows you to collect developer activity and usage data from [Claude Code](https://docs.anthropic.com/en/api/claude-code-analytics-api) , Anthropic’s agentic command-line coding tool.

Once connected, Cycode syncs daily aggregated usage metrics per developer, providing visibility into AI-assisted coding sessions, lines of code changes, tool acceptance rates, and model-level cost breakdowns.

**Note:** This integration connects to the [**Anthropic Console**](http://console.anthropic.com) - the developer platform for the Claude API. This is not related to [Claude.ai](http://Claude.ai) , which is Anthropic’s consumer chat product.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

Requirement

Details

**Cycode Role**

User with **Admin** or **Owner** role

**Anthropic Plan**

Anthropic **Team** plan or higher

**Anthropic Role**

**Admin** or **Owner** of the Anthropic Console workspace (required to create an Admin API key)

**API Key Type**

**Admin API key** — generated from the Anthropic Console under [Settings → Admin Keys](https://platform.claude.com/settings/admin-keys) . A standard (user) API key will **not** work and will result in a connection error.

## Setting Up the Integration [Copied!](#setting-up-the-integration "Copy link to this section")

1.  In the Anthropic Console, go to [**Settings → Admin Keys**](https://platform.claude.com/settings/admin-keys) and generate a new **Admin API key**. If you do not see this page, you are not an admin/owner on the workspace and must request one from your Anthropic workspace administrator.
    
2.  In Cycode, navigate to **Integrations → AI Coding Agents → Anthropic Console**.
    
3.  Click **Add Integration**.
    
4.  Enter the **Admin API key** and give the integration a name (e.g., “Cycode Platform”).
    
5.  Click **Save**.
    
6.  The integration status will appear as **Connected** once the key is validated.
    

## Data Sync Behavior [Copied!](#data-sync-behavior "Copy link to this section")

*   **Sync frequency:** Data is synced **once a day**.
    
*   **Initial scan:** On first connection, Cycode retrieves the **last 90 days** of historical usage data.
    
*   **Ongoing sync:** After the initial scan, new data is fetched daily. Anthropic’s analytics data is typically available with up to a 1-hour delay from when user activity occurs.
    
*   **Time period:** All data shown on the developer card is scoped to the date range selected in the Developers Usage page. Changing the date range recalculates all metrics.
    

## Data Returned per Developer (Card View) [Copied!](#data-returned-per-developer-card-view "Copy link to this section")

When you open a developer’s card and view the **Anthropic Console** section, the following data is displayed:

Field

Description

**Lines generated**

Total code lines changed by Claude Code across all files during the selected period. Split into **added**(lines inserted) and **deleted** (lines removed).

**Used models**

The Claude models the developer used during the selected period, identified by their full model string.

**Accepted / Rejected**

Number of Claude Code tool proposals the developer accepted or rejected. Aggregated across all tool types:**Edit**(targeted edits to existing files),**Write**(creating or overwriting entire files), and **NotebookEdit** (edits to Jupyter notebook cells). Acceptance rate = accepted / (accepted + rejected) × 100.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
