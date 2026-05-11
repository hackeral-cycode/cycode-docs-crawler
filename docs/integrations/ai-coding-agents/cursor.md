# Cursor | Cycode Docs

Source: https://docs.cycode.com/integrations/ai-coding-agents/cursor

---

# Cursor

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/ai-coding-agents/cursor.md "Edit this page")

Updated on Apr 12, 2026 • Published on Apr 12, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Cursor integration allows you to collect developer activity and usage data from the [Cursor](https://cursor.com/) AI code editor.

Once connected, Cycode syncs daily usage metrics for each developer, providing visibility into how your team uses AI-assisted coding features such as autocomplete (Tab), Agent mode, Chat, and inline edits.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

Requirement

Details

**Cycode Role**

User with **Admin** or **Owner** role

**Cursor Plan**

Cursor **Team** plan or higher

**Cursor Role**

**Team Admin** in Cursor (required to create an Admin API key)

**API Key Type**

**Admin API key**. A personal/user API key will **not** work and will result in a connection error.

## Setting Up the Integration [Copied!](#setting-up-the-integration "Copy link to this section")

1.  In Cycode, navigate to **Integrations → AI Coding Agents → Cursor**.
    
2.  Click **Add Integration**.
    
3.  Enter the **Admin API key** and give the integration a name (e.g., “Cycode”).
    
4.  Click **Save**.
    
5.  The integration status will appear as **Connected** once the key is validated.
    

## Data Sync Behavior [Copied!](#data-sync-behavior "Copy link to this section")

*   **Sync frequency:** Data is synced **once a day**.
    
*   **Initial scan:** On first connection, Cycode retrieves the **last 90 days** of historical usage data.
    
*   **Ongoing sync:** After the initial scan, new data is fetched daily for the previous day.
    
*   **Time period:** All data shown on the developer card is scoped to the date range selected in the Developers Usage page. Changing the date range recalculates all metrics.
    

## Data Returned per Developer (Card View) [Copied!](#data-returned-per-developer-card-view "Copy link to this section")

When you open a developer’s card and view the **Cursor** section, the following data is displayed:

Field

Description

**Lines generated**

Total code lines produced by AI across all interaction modes, split into **added** and **deleted**. Tracked at the moment of change in the editor, regardless of whether changes are later committed.

**Used models**

The AI models the developer used during the selected period (e.g., Claude 4.5 Haiku, Claude 4.6 Sonnet, GPT-5). “Default” indicates Cursor’s auto-select mode, where Cursor automatically picks the best model for each request.

**Accepted lines**

The subset of AI-generated lines that the developer explicitly accepted from the suggestions proposed. Split into **added** and **deleted**. This is always equal to or less than Lines generated.

**Agent requests**

Number of prompts sent in Cursor’s **Agent mode** — the most autonomous mode, capable of exploring the codebase, running terminal commands, and making multi-file changes.

**Chat requests**

Number of messages sent in Cursor’s **Chat / Ask mode**, used for asking questions or getting explanations without direct code edits.

**Tab acceptance rate**

The ratio of accepted Tab completions to total Tab completions is shown. Tab completions are Cursor’s autocomplete suggestions — short, inline code predictions that appear as the developer types. The developer presses **Tab** to accept or ignores/dismisses the suggestion.**Note**: Tab completions are tracked separately from lines generated — accepting a Tab completion does **not** count toward the Lines generated or Accepted lines metrics.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
