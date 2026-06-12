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

### Skills executed and MCP servers [Copied!](#skills-executed-and-mcp-servers "Copy link to this section")

Note

The **Skills executed** and **MCP servers** sections are available only for tenants on the Cursor **Enterprise** plan. Tenants on lower Cursor plans will not see these sections in the developer card.

The Cursor integration also reports the skills and MCP servers each developer invoked from Cursor during the selected date range. Cycode enriches this data by correlating it with the inventory of skills and MCP servers detected across your codebase.

#### Skills executed [Copied!](#skills-executed "Copy link to this section")

A list of skills the developer invoked from Cursor during the selected date range, with the execution count for each skill.

Clicking a skill name opens the **Inventory → Skills** view, filtered by that skill’s name. Because the same skill name can appear in multiple repositories (for example, a `promptfoo-evals` skill defined under both `.claude/skills/` and a `plugins/` directory), the filter returns every location where that skill is defined.

#### MCP servers [Copied!](#mcp-servers "Copy link to this section")

A list of MCP servers the developer invoked from Cursor during the selected date range. The following fields are reported for each MCP server:

Field

Description

**Server name**

The MCP server the developer called (for example, `atlassian`, `slack`).

**Calls**

Total number of calls the developer made to this MCP server during the selected date range.

**Tools used**

The distinct tools (capabilities) on this MCP server that the developer invoked. Shows the total count followed by each tool name with its own call count (for example, `getJiraIssue` 4, `createJiraIssue` 3). When more tools were used than fit in the row, the remainder is summarized as `+N`.

##### Inventory correlation

Cycode correlates each MCP server reported by Cursor with the [MCP inventory](/inventory/application-insights/adlc-security#mcps) by matching the server endpoint:

*   **When a match is found** — The developer card additionally shows the MCP server’s **authorization status** (**Authorized** or **Unauthorized**, based on your organization’s MCP governance policies). Clicking the server name opens its [inventory card](/inventory/application-insights/adlc-security#mcps) , where you can review the server type, URL, repositories where it was detected, labels, and evidence path.
*   **When no match is found** — Only the fields in the table above are shown. No authorization status is displayed and the server name is not clickable.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
