# Project roles and permissions | Cycode Docs

Source: https://docs.cycode.com/cycode-projects/project-roles-and-permissions

---

# Project roles and permissions

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-projects/project-roles-and-permissions.md "Edit this page")

Updated on Dec 22, 2025 • Published on Dec 15, 2025

* * *

## **Overview** [Copied!](#overview "Copy link to this section")

Project roles define the access a member has within Cycode projects. When you invite a member to a project, you can assign a project role for that project. A member that joins more than one project can have a different project role assigned for each project.

Every user assigned to a project role also has a global role. Project roles define permissions only within a specific project. A user’s effective permissions are determined by whichever role, global or project, grants higher access in a specific project. The only exception is the Owner and Admin roles, which are always global and are not affected by project roles.

For more information about global roles and permissions, go to Global roles and permissions.

## **List of project roles and permissions** [Copied!](#list-of-project-roles-and-permissions "Copy link to this section")

This section describes the actions that a user can perform in a project, depending on the project role they are are assigned.

Note

When the global role and project role permissions conflict, the user is granted the higher-level access for that permission.

Global

Project

**Owner**

**Admin**

**Project manager**

**Member**

**Developer**

**Viewer**

**Project manager**

**Member**

**Viewer**

**No project role**

View project

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

**X**

Create project

**Yes**

**Yes**

**X**

**X**

**X**

**X**

**X**

**X**

**X**

**X**

Delete project

**Yes**

**Yes**

**X**

**X**

**X**

**X**

**X**

**X**

**X**

**X**

Update project description

**Yes**

**Yes**

**Yes** \*

**X**

**X**

**X**

**Yes**

**X**

**X**

**X**

Update project details

**Yes**

**Yes**

**Yes** \*

**X**

**X**

**X**

**Yes**

**X**

**X**

**X**

Update project assets

**Yes**

**Yes**

**Yes** \*

**X**

**X**

**X**

**Yes**

**X**

**X**

**X**

Update project members

**Yes**

**Yes**

**Yes** \*

**X**

**X**

**X**

**Yes**

**X**

**X**

**X**

Update project issue tracking

**Yes**

**Yes**

**Yes** \*

**X**

**X**

**X**

**Yes**

**X**

**X**

**X**

Update project insights

**Yes**

**Yes**

**Yes** \*

**X**

**X**

**X**

**Yes**

**X**

**X**

**X**

Update project PR scanning

**Yes**

**Yes**

**Yes** \*

**X**

**X**

**X**

**Yes**

**X**

**X**

**X**

Update violation status

**Yes**

**Yes**

**Yes**

**Yes**

**X**

**X**

**Yes**

**Yes**

**X**

**X**

Update violation assignee

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

**X**

**Yes**

**Yes**

**X**

**X**

Update violation priority

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

**X**

**Yes**

**Yes**

**X**

**X**

View automated workflows

**Yes**

**Yes**

**Yes**

**Yes**

**X**

**X**

**Yes**

**Yes**

**X**

**X**

Update automated workflows

**Yes** \*\*

**Yes** \*\*

**X**

**X**

**X**

**X**

**X**

**X**

**X**

**X**

Delete automated workflows

**Yes** \*\*

**Yes** \*\*

**X**

**X**

**X**

**X**

**X**

**X**

**X**

**X**

Create automated workflow

**Yes**

**Yes**

**Yes**

**Yes**

**X**

**X**

**Yes**

**Yes**

**X**

**X**

Invite external user to project

**Yes**

**Yes**

**Yes** \*

**X**

**X**

**X**

**Yes**

**X**

**X**

**X**

\*Before the user is assigned a project role

\*\*The user who created the workflow also has permissions

### Project manager role [Copied!](#project-manager-role "Copy link to this section")

Project managers act as project admins, and can view assets and act on members that are part of the project(s) they manage. Personas such as a Dev Team Lead or a Security Champion are usually assigned this role.

Note

*   You can manually change the role mapping of a project manager after bulk enrollment.
*   For more information about bulk enrollment, go to [Enroll members to Cycode](/cycode-settings/user-administration/manage-cycode-members/add-members-manually-to-cycode) .

A project manager must be associated with at least one project. When a tenant administrator manually invites a member as a project manager, the invitation can only be sent after selecting a project.

#### User management permissions for project managers [Copied!](#user-management-permissions-for-project-managers "Copy link to this section")

Note

Project managers can only view data for their assigned projects, and can’t view the Policies data.

Project manager permissions in the Cycode Settings view are limited to the [Members](/cycode-settings/user-administration/manage-cycode-members/) page and the [Project Creation wizard](https://portal.document360.io/v1/docs/creating-a-project-1) . Project managers can perform the following actions for members of their project:

*   Invite new users to any project managed by the project manager, including external users.
    
*   Change the roles of members within the project. A project manager can move members between the **None**, **Member**, **Viewer** and **Project Manager** roles (not **Admin** or **Owner**).
    
*   View members of their project(s) in the **Settings** > **Members** page. Cycode users that aren’t members of their projects aren’t shown.
    
*   View **Admin** and **Owner** users that are associated directly with their project(s).
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
