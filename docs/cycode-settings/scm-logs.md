# SCM Logs | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/scm-logs

---

# SCM Logs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/scm-logs.md "Edit this page")

* * *

Use the **SCM Logs** module to view and validate the raw events that Cycode receives from your connected SCM providers (GitHub, GitLab, Bitbucket, Azure DevOps, and others). This helps you confirm that Cycode is receiving and processing your organization’s SCM activity - commits, pushes, pull request updates, and configuration changes - across every connected SCM.

To view the SCM logs, go to **Settings > Activity > SCM Logs**.

## Permissions [Copied!](#permissions "Copy link to this section")

Access to the SCM Logs page is restricted by role:

*   **Owner** and **Admin** roles can access SCM Logs by default.
    
*   Other built-in roles do not have access by default.
    

To grant access to a **custom role**, edit the role and enable the **View SCM Logs** permission. You’ll find it in **Settings > Member Management > Roles & Permissions**: open or create the custom role, expand the **Audit** module in the **Select permissions by module** list, and select **View SCM Logs** (alongside View & Review Audit Logs).

## Page overview [Copied!](#page-overview "Copy link to this section")

The page is made up of two parts:

*   A **histogram** that visualizes event volume over time.
    
*   An **events table** that lists each event with its key metadata, plus the raw webhook payload on demand.
    

Both areas respond to the same set of filters, so narrowing the scope updates the chart and the table together.

## Events distribution over time [Copied!](#events-distribution-over-time "Copy link to this section")

The histogram at the top of the page shows the number of SCM events Cycode received, distributed across the selected time range. Use it to spot gaps in event delivery, sudden traffic spikes, or quiet periods that may indicate a connection issue.

*   The chart automatically adjusts its granularity to the selected time range, bucketing events by minute, hour, or day as the range narrows or widens.
    
*   The chart respects every filter applied to the table - changing the SCM Provider, Organization, Repository, or any per-column filter immediately refines the histogram.
    
*   You can drag across the chart to zoom into a narrower window and refocus both the histogram and the table on that period.
    

## SCM Log Details [Copied!](#scm-log-details "Copy link to this section")

The SCM Logs table includes the following information.

Column

Description

Time

Date and time the event was received by Cycode.

Event Type

The kind of SCM event (for example, push, pull request opened, repository updated).

Actor

The user who triggered the event, as reported by the SCM.

Location

Where the event originated, shown as a breadcrumb chain of the SCM provider, organization (or workspace), repository, and branch (when relevant).

Commit SHA

Full commit hash, with a one-click copy action.

Commit Message

The commit message attached to the event, when present.

You can sort the table by Time and Event Type, and reorder or hide columns from the column selector.

## Filtering and Searching in the SCM Logs [Copied!](#filtering-and-searching-in-the-scm-logs "Copy link to this section")

You can narrow the SCM Logs to specific events using the free-text Search box and the structured filters at the top of the page. Search and filters combine: results match the search text **and** every active filter (including the time frame). The histogram updates together with the table.

To reset the view to all events in the selected time frame, click **Clear filters** in the toolbar.

### Search Within Event Content [Copied!](#search-within-event-content "Copy link to this section")

The Search field runs a free-text search across the full content of every event - not just the values shown in the visible columns. Because the raw webhook payload is included in the search, you can locate events by any value that appears anywhere in the payload, such as commit properties (ID, message, author name or email), file names included in the event, repository or branch references, vulnerability identifiers, URL fragments, and any other field carried by the webhook.

### Filter the Events [Copied!](#filter-the-events "Copy link to this section")

The page exposes filters both above the table and on individual column headers. Each filter is searchable and supports multi-select. The available values are populated from events received in the selected time frame.

Filter

Where to find it

Use it to

SCM Provider

Above the table

Limit the view to one or more SCMs (for example, GitHub or Bitbucket Cloud).

Organization

Above the table

Focus on specific organizations or workspaces.

Repository

Above the table

Focus on one or more repositories.

Branch

Branch column header

Focus on activity for one or more branches.

Event Type

Event Type column header

Limit the view to specific kinds of events (for example, push, pull request opened).

Actor

Actor column header

Limit the view to events triggered by specific users.

Commit Message

Commit Message column header

Limit the view to events with specific commit messages.

### Set a Time Frame [Copied!](#set-a-time-frame "Copy link to this section")

Click the **Time Frame** filter at the top of the page to limit the events to a specific time range. Pick a preset (last 24 hours, last 7 days, last 30 days, or last 2 months), or specify a custom **Before**, **After**, or **Between** range.

## Inspecting the Raw Webhook Payload [Copied!](#inspecting-the-raw-webhook-payload "Copy link to this section")

For full visibility into what Cycode received from the SCM, expand a row to reveal the raw webhook payload exactly as it arrived from the provider.

1.  In the events table, click the chevron at the start of any row.
    
2.  The expanded section shows the webhook payload as formatted JSON.
    
3.  Use the **Copy** button to copy the full payload to your clipboard for sharing with support or for debugging integration questions.
    

If an event has no associated payload, the row cannot be expanded.

## Exporting SCM Logs to CSV [Copied!](#exporting-scm-logs-to-csv "Copy link to this section")

You can export the current view of the SCM Logs table to a CSV file. This is useful for sharing event data with other teams or for offline analysis.

1.  Apply the filters and time frame you want to export.
    
2.  Click the **Export to CSV** button in the table toolbar.
    
3.  The CSV file is downloaded with a filename that includes today’s date (for example, `SCM Logs - 2026-05-26.csv`).
    

The CSV includes the same columns visible in the table for the current filter set.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
