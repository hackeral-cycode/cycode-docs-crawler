# Create and manage groups | Cycode Docs

Source: https://docs.cycode.com/cycode-projects/create-and-manage-groups

---

# Create and manage groups

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-projects/create-and-manage-groups.md "Edit this page")

Updated on Apr 21, 2025 • Published on Oct 14, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can create groups in the Project view. Each group represents a level of hierarchy for Cycode projects. To create a top-level group, don’t assign a parent. To nest a group under another group, assign a parent group. When you create a group (or afterwards), associate projects with that group to set up the project hierarchy.

Note

*   Each child entity (groups and projects) can have one direct parent at a time. You can edit and move children between groups.
    
*   A group can have multiple child entities. Nested groups and projects are at the same level in the hierarchy.
    
*   Members can be associated with multiple projects and groups.
    

## Create a group [Copied!](#create-a-group "Copy link to this section")

1.  In the Projects view, click **New group**.
    
2.  In the Details tab of the New Project Group wizard, define the following and click **Next**.
    
    Parameter
    
    Description
    
    **Name**
    
    Give a meaningful name to the group.
    
    **Description**
    
    (Optional) Add a description of the group. It is recommended to describe the level of hierarchy that this group represents.
    
    **Type**
    
    (Optional) Select a type for this group from the list.
    
    **Select parent group**
    
    (Optional) If this group isn’t a top-level group, select a parent group from the list.
    
    **Add projects to this group**
    
    (Optional) Select projects that should nest under this group. If a group is already associated with a project, the relationship appears next to the group in the list.
    
    Note
    
    You can create a project, and add a parent and projects later by editing the group.
    
3.  In the Members tab, select and invite Cycode members from the list. You can also type an external email address to invite a user who isn’t a Cycode member.
    
    Note
    
    A group member has permissions to all of a group’s projects. If a group is a parent group, the member also has access to the projects associated with the sub-groups.
    
4.  Click **Create Group**, and in the confirmation dialog click **Create Group**.
    

## View and manage groups [Copied!](#view-and-manage--groups "Copy link to this section")

After you create a group, The Projects table shows the group in the relevant level of the project hierarchy, and the associated projects appear below.

### View groups [Copied!](#view-groups "Copy link to this section")

#### Hierarchy view [Copied!](#hierarchy-view "Copy link to this section")

After groups are created, the project table contains a tree-view structure to show the hierarchy of the groups and projects. Groups can be expanded and collapsed, enabling you to navigate through sub-groups and projects.

#### Which roles can see groups and subgroups? [Copied!](#which-roles-can-see-groups-and-subgroups "Copy link to this section")

Admins, owners, and full access users view projects within their groups and subgroups. All other users see only the projects to which they are assigned.

### Manage groups [Copied!](#manage-groups "Copy link to this section")

You can edit and delete groups. When you remove a group, this removes the hierarchy level from the table, and all sub-groups with their associated projects move under the parent group in the table.

Note

When you delete a group, any members associated directly with that group lose access to the projects that were associated with the group.

When you duplicate a project, it takes the hierarchy level of the original project. You can then move the new project to a different level in the hierarchy by assigning it to a different parent group.

## View a group card [Copied!](#view-a-group-card "Copy link to this section")

The group card provides detailed information about the group and associated project, including any violations (by category) associated with the project, the assets associated with the project, and the project members. To view a group card, click the relevant group in the list.

The group card has the following tabs:

*   Overview
    
*   Members
    

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab shows general project details and the violations that were detected in this project.

Section

Field

Description

Description

Description of the group.

Open Violations

The total number of open violations by severity.

Details

MTTR

Mean time to respond to violations in this project.

Scope

Projects

The total number of projects included in this group; hover over the results to see the project details.

Members

Total members

Total number of Cycode members in this group.

Additional Info

Created by

The name of the member who created the project.

Created at

The date and time the group was created.

Last modified

The date and time the group was last changed.

### Members tab [Copied!](#members-tab "Copy link to this section")

The Members tab displays all the members of the project.

Name

Description

Cycode member

The full name and email address of the Cycode member.

Role

The role assigned to this member in this project.

Last activity

The date and time of the last action of the Cycode user in the platform.

If you’re a project manager, admin or owner, you can click the member in the Members tab to open the Cycode [Members](/cycode-settings/user-administration/manage-cycode-members/) settings for that member.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
