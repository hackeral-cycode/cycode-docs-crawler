# View and manage projects | Cycode Docs

Source: https://docs.cycode.com/cycode-projects/view-and-manage-projects

---

# View and manage projects

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-projects/view-and-manage-projects.md "Edit this page")

Updated on Mar 22, 2026 • Published on Jul 2, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Projects view provides a comprehensive snapshot of all your Cycode projects, including a dashboard where you can view overall metrics and all available projects according to group hierarchy.

Individual group and project dashboards provide a detailed view of current risks, their sources, and trends over time including the efficiency of remediation efforts.

Note

Users with member and viewer roles can only see the violations and settings for the projects they are assigned to.

### Project metrics [Copied!](#project-metrics "Copy link to this section")

The Projects dashboard has the following widgets to provide the following overall metrics for your Cycode projects.

Widget

Description

Violations not associated with projects

Total number of violations detected by the platform that aren’t associated with projects. Click this widget to go to the Violations view.

Total projects

Total number of projects that you are assigned to, broken down by risk.

Low performance

Project with the longest Mean Time To Resolution (MTTR). This can indicate higher risk because the vulnerabilities are resolved more slowly.

Top performance

Project with the shortest Mean Time To Resolution (MTTR). This can indicate lower risk because the vulnerabilities are resolved more rapidly.

Note

You can create workflows to handle violations that aren’t associated with any project, for example when they relate to non-relevant assets. This can help to reduce the noise caused by these violations.

You can also create additional projects and associate the assets that aren’t currently part of a project. This will ensure that they have dedicated ownership and are appropriately managed.

### Understand your project risk [Copied!](#understand-your-project-risk "Copy link to this section")

The risk score is calculated by aggregating all the violations related to the project and evaluating the following:

*   The amount of critical violations (risk score 90-100) out of all violations
    
*   Highest risk score among all violations for the project
    
*   Average resolution time (MTTR) for all resolved violations associated with the project
    

Tip

You can see which projects are at the highest risk and require immediate action in the **Risk** and **Violation by Risk** table columns.

## View all groups and projects [Copied!](#view-all-groups-and-projects "Copy link to this section")

The project table shows your all your accessible groups and the Cycode projects they contain, along with the following information.

Name

Description

Name

The name of the group or project. If available, the description is shown as a tooltip.

Impact

**HBI**\- High Business Impact  
**MBI**\- Medium Business Impact  
**LBI** - Low Business Impact

Category

The violation category (or categories) selected for the project; violations associated with the project will only be from the selected category.

Project manager

The name of the project manager(s) assigned to the project

Members

The number of members assigned to the project, including Viewers.

Scope

At the group level, shows how many sub-groups and projects are included. At the project level, shows the total assets (for example, organizations) assigned to the project.

Max risk

The maximum risk score assigned to this project (see explanation in callout below)

Violations by risk

The total number of violations distributed by risk score.

MTTR

The average time it took to remedy all the closed violations related to the project during the previous 90 days. If no violations were closed during that time, the value is N/A.

Administrators can filter the table on projects that contain asset collisions. All users can sort the table on the **Impact** column.

## View a specific Cycode group or project [Copied!](#view-a-specific-cycode-group-or-project "Copy link to this section")

The secondary navigation pane on the left shows a simple list of groups and projects according to the group hierarchy. Find the group or project you want to view and click it to see its information, which is displayed in the following tabs.

### Overview [Copied!](#overview-1 "Copy link to this section")

Note

Available for both groups and projects.

The Overview tab provides a high-level, visual summary of the status of a group or project. This tab is designed to give users immediate awareness of key indicators, such as risk, activity, membership, and automation.

The Overview tab contains the following widgets.

Widget

Description

Group/Project details

Table that presents core contextual information about the group or project to help users understand how it fits into the organization.

Risk insights

Visual risk score that highlights the overall risk posture of the group or project.

Open violations

Total number of active violations for this group or project.

Members

Total number of members in this group or project, plus a table that shows the member names and project roles.

Automation

Total number of workflows in this group or project, plus a table that shows the workflows and how often they have run.

### Report [Copied!](#report "Copy link to this section")

Note

Available for both groups and projects.

The Report tab provides a deeper understanding of where, what kind, and how quickly problems are being addressed. The widgets, described below, show a high-level summary of the project’s security and compliance posture, providing immediate insight into the project’s current health.

The Report tab contains the following widgets.

Widget

Description

Group/Project risk score

(Available when dashboard is set to **Risk**) Donut chart that shows the overall risk score for the group or project.

Open violations

Total number of active violations for this group or project.

Violations by risk/severity

Bar chart that shows the number of violations according to risk/severity.

Violations by source

Bar chart that shows the number of violations according to where they were detected.

Violations by age

Bar chart that shows the number of violations that have been open for up to 30 days, 30-60 days, 60-90 days, and more than 90 days.

Open violations by category and risk/severity

Grid that displays open violations by risk level on the left vertical axis, and by category across the top horizontal axis.

Summary of open violations delta over time by risk/severity

Table that summarizes the changes in open violations by risk/severity level, indicating whether the delta is positive or negative.

Open violations delta over time

Line graph that shows the trend in open violations over time.

SLA status

(Available when dashboard is set to **Risk**) Shows how many violations are currently within the SLA, are close to missing the SLA, and have missed the SLA.

Detected vs. remediated

Line graph showing the trend of detected and remediated issues over time.

MTTR by risk/severity

Donut chart showing the Mean Time To Remediate for different risk/severity levels.

MTTR over time

Line graph showing the Mean Time To Remediate as a trend over time.

### Violations [Copied!](#violations "Copy link to this section")

Note

Available for both groups and projects.

The Violations tab provides the same functionality as the general Violations view, but displays only the violations that are relevant for the selected group or project. Click through to a specific violations category to manage violations directly.

The Violations tab contains the following widgets.

Widget

Description

Violations by category

Donut chart that shows the number of violations according to category. Click a category to drill through to the project violations page for that category.

Detected over time

Line graph showing the trend of violations on a per-month basis.

The tab also shows a list of the current violations by category. Click a row to drill through to the project violations list for that category.

### Compliance [Copied!](#compliance "Copy link to this section")

Note

Available for projects only.

The Compliance tab provides the same functionality as the general Compliance view, but displays only the frameworks that are relevant for the selected group or project. Click through to a specific framework to view details and manage evidence directly.

### Automation [Copied!](#automation "Copy link to this section")

Note

Available for both groups and projects.

The Automation tab provides the same general functionality as the general Automation view, but displays only the workflows that are relevant for the selected group or project. You can manage the existing workflows that are displayed in the tab.

Note

You can’t create new workflows from the Automation tab in the project page. To create a new workflow, go to the Automations view.

### Settings [Copied!](#settings "Copy link to this section")

Note

Available for projects only.

View the specific settings that were configured for this project in the following sub-tabs.

#### Scope [Copied!](#scope "Copy link to this section")

The Scope tab contains a table with the following information.

Note

Available for projects only.

Name

Description

Asset

Path to the asset in the source.

Type

Type of asset.

Collisions

List of projects that have shared assets with this project.

Note

Only admins can see project collision information.

#### Members [Copied!](#members "Copy link to this section")

Note

Available for both groups and projects.

For projects, the Members sub-tab displays all the members of the project. For groups, the Members tab displays only members who are directly associated with the group. It doesn’t show members of sub-groups and projects.

Name

Description

Cycode member

The full name and email address of the Cycode member.

Global role

The Global role assigned to this member in this group.

Project role

The Project role assigned to this member in this group (available only in Projects).

Job title

(Optional) The job title of a project member, which doesn’t affect the member’s access or permissions (available only in Projects).

Last activity

The date and time of the last action of the Cycode user in the platform.

If you’re a project manager, admin or owner, you can click a member to open the Cycode [Members](/cycode-settings/user-administration/manage-cycode-members/) settings for that member.

#### Issue tracking [Copied!](#issue-tracking "Copy link to this section")

Note

Available for projects only.

If you have an issue tracking tool integrated with Cycode, you can track and manage issues related to specific projects.

#### Audit logs [Copied!](#audit-logs "Copy link to this section")

Note

Available for both groups and projects.

The Audit logs sub-tab shows all the events associated with the group or project.

### Details [Copied!](#details "Copy link to this section")

Note

Available for both groups and projects.

The Details tab on the right side of the page shows the following information.

### Comments [Copied!](#comments "Copy link to this section")

Note

Available for projects only.

Members can use the Comments tab to add information about the project that may be relevant for other members.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
