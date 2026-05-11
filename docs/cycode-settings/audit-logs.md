# Audit Logs | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/audit-logs

---

# Audit Logs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/audit-logs.md "Edit this page")

Updated on Nov 19, 2024 • Published on Nov 14, 2024

* * *

Use the **Audit Logs** module to review the actions taken by the members of your organization in the Cycode platform. This helps to secure your Cycode account.

To view the Audit logs, go to **Settings > Activity > Audit Logs**.

![](/assets/image-1731581421987.png)

This displays the Audit Logs:

![](/assets/97e7a4a-image.png)

The Audit Logs are designed to let you view all the relevant information per log without having to open additional windows. All the relevant information about the log is displayed by hovering over the Description column.

![](/assets/6fbaf47-image.png)

## Audit Log Details [Copied!](#audit-log-details "Copy link to this section")

The Audit Logs table includes the following information.

Column name

Description

Date

Contains the date of the action being logged

Cycode Member

Contains the name of the Cycode user who completed the action being logged (see note below)

Resource Type

Details the type of resource acted upon

Action

Details the action being logged: created, deleted, disabled, enabled, modified

Description

Hover over this field to view all the relevant information about the log

IP Address

Displays the IP address of the Cycode user who performed the action

User Agent

Displays the user agent who performed the action

Reviewed (checkbox)

Once you’ve reviewed a log, you can mark it as reviewed by selecting its checkbox

Status Changed By

Once a violation’s status has been changed, the this column shows the name of the person who implemented the change. Note that this information is availble to admins, security champions, team leads, and more.

Last Reviewed By

Once a log has been reviewed, the Last Reviewed By column shows the name of the user who reviewed it and the date it was reviewed. The column always displays the last review log (i.e., the Cycode member name , date and time), which will only be updated the next time the log is reviewed (by the same user or another one).

Known Limitation

An unknown user in the Audit Logs can be a deleted member or a service account audit event.

## Filtering and Searching in the Audit Logs [Copied!](#filtering-and-searching-in-the-audit-logs "Copy link to this section")

In the Audit logs, you can use the Search field to search for a specific log. You can also filter for specific logs using by selecting from the following options:

![](/assets/880f7c8-image.png)

### Filter by Cycode Member [Copied!](#filter-by-cycode-member "Copy link to this section")

Selecting **Cycode Member** displays a popup list of available members, which enables you to select which members to audit

### Filter by Resource Type [Copied!](#filter-by-resource-type "Copy link to this section")

Selecting **Resource Type** displays a popup list of available actions, which enables you to select which resource type you wish to audit:

![](/assets/d50db62-image.png)

### Filter by Action [Copied!](#filter-by-action "Copy link to this section")

Selecting **Action** displays a popup list of available actions, which enables you to select which actions you wish to audit:

![](/assets/be70101-image.png)

### Filter by Reviewed [Copied!](#filter-by-reviewed "Copy link to this section")

Selecting **Reviewed** enables you to decide to view only the actions that were reviewed, not reviewed, or both:

![](/assets/e6c0c80-image.png)

### Filter for Cycode Automation Events [Copied!](#filter-for-cycode-automation-events "Copy link to this section")

Because the Audit Log includes both user action events and Cycode automation events, to reduce the amount of data being generated, you can choose whether you wish to see the Cycode automation events or not.

1.  Click **+Add Filter** and from the dropdown, select **Cycode automation audit.**

![](/assets/a611e4d-image.png)

2.  Specify whether to include the automation or not in the logs.

### Filter by Reviewer [Copied!](#filter-by-reviewer "Copy link to this section")

You can also filter the Audit Log list by whether the log was reviewed or not.

1.  Click **+Add Filter** and from the dropdown, select **Reviewed.**

![](/assets/67703e9-image.png)

2.  Specify whether to include the reviewed logs or or not in the list.

### Set a Time Range [Copied!](#set-a-time-range "Copy link to this section")

1.  To filter audit logs by time range, click **+Add Filter** and from the dropdown select **Time Range**.

![](/assets/b093ed9-image.png)

2.  Specify the Before, After, and Between dates.

## Data Retention [Copied!](#data-retention "Copy link to this section")

Data collected in the Audit Log is always retained.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
