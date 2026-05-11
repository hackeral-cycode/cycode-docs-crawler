# Global roles and permissions | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/global-roles-and-permissions

---

# Global roles and permissions

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/global-roles-and-permissions/_index.md "Edit this page")

Updated on Mar 29, 2026 • Published on Jan 28, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Member roles and permissions define and control access levels within Cycode. A Cycode member role represents a specific set of tasks or responsibilities assigned to a group of members, so you can manage the actions each user is allowed to perform in the system.

There are two parameters that determine the access a user will have in Cycode:

*   **Role**: Cycode default global roles are **Owner**, **Admin**, **Member**, **Developer**, **Viewer**, and **None** (inactive user)
    
*   **Permissions (access)** : Either full or partial access to all Cycode data, defined by the role and depending on the association with a specific list of projects
    

Note

The **Owner** and **Admin** roles have nearly identical permissions, with the exception of tenant management (limited to **Owners**).

Roles can also be assigned at the project level. Project-level roles provide project members with permissions that are limited to the project, and are assigned via the project creation wizard. You can edit project role assignments from the **Settings** > **Members** view.

For more information about project roles, go to [Project roles and permissions](/cycode-projects/project-roles-and-permissions) .

## Data access permissions [Copied!](#data-access-permissions "Copy link to this section")

This section explains which pages and views of the Cycode platform the user can see, depending on the combination of the assigned role and the access scope:

*   Full access - owners and admins always have full access. Project managers and members that aren’t assigned to a project also have full access.
    
*   Partial access - when a project manager or member is assigned to at least one project, the access scope changes to partial access for these roles.
    

Note

All roles can use the CLI, including **None**.

### Full access permissions [Copied!](#full-access-permissions "Copy link to this section")

Permissions that grant full access enable Cycode members to see and access data across all projects in the tenant, regardless of project assignment. Full access has the following characteristics:

*   Roles with full access can view data for all projects
    
*   Access to data isn’t restricted by project-level scoping
    
*   Full access isn’t directly configurable but is an outcome of granting specific permissions
    
*   Some permissions require full access to function correctly. Adding these permissions to a role automatically confer full access to the role.
    

Note

*   Permissions that have full access are marked in the interface so you don’t accidentally create a highly-privileged role.
*   The default global **Owner** and **Admin** roles always grant the Cycode member with full access, regardless of any additional project roles that are assigned.

If you assign any of the permissions listed below, the role will automatically have full access.

*   **View project groups**
    
*   **Manage reports**
    
*   **View inventory**
    
*   **View query builder**
    
*   **Manage query builder**
    
*   **View project risk insights**
    

### Permission dependencies [Copied!](#permission-dependencies "Copy link to this section")

Some permissions automatically enable additional permissions. Therefore, selecting an **Edit** or **Create** permission may select its corresponding **View** permission by default.

### Roles and Permissions page [Copied!](#roles-and-permissions-page "Copy link to this section")

The Roles and Permissions page, located under **Settings → Member Management**, provides a centralized view for managing all global roles in Cycode. This includes default and custom global roles.

### View roles [Copied!](#view-roles "Copy link to this section")

The roles table shows the following information.

**Column**

**Description**

Role

The name of the default or custom global role.

Description

A short summary of the role’s purpose.

Created by

(Custom roles only) The name of the Cycode member that created the role. For default roles, displays the value **Cycode**.

Created at

(Custom roles only) Date and time when the custom global role was created.

Last edited

(Custom roles only) Date and time when the custom global role was last updated.

Role scope

Indicates whether the role is global or project level.

Permissions

Lists the permission groups included in the role, along with the number of permissions from each group and the total permissions.

Members

Number of Cycode members currently assigned to the global role.

You can perform the following actions from the More actions menu:

Action

Description

Applies to

View

Opens the role wizard in read-only mode so admins can review the role permissions.

Default global roles

Edit

Opens the role wizard in edit mode so admins can update the name, description and permissions of the role.

Custom global roles

Duplicate

Opens the role wizard in create mode so admins can add a new role using the current role as a starting point.

All global roles

Delete

Available only if the role isn’t currently assigned to any Cycode members or access tokens.

Custom global roles

Reassign members

Allows bulk reassignment of all members from one global role to another.

All global roles

Note

*   Default global roles are view-only and cannot be modified.
*   If a custom global role is in use (assigned to Cycode members or access tokens), it can’t be renamed or deleted **.**

#### Permission handling [Copied!](#permission-handling "Copy link to this section")

If you view or duplicate a global role other than Owner and Admin, permissions that implicitly grant full access aren’t selected in the wizard even if they are part of the original role. When you create a new role based on a role that has full access, these permissions have to be selected manually.

* * *

#### Related topics [Copied!](#related-topics "Copy link to this section")

*   [Manage global roles](/cycode-settings/user-administration/global-roles-and-permissions/manage-global-roles)
    
*   [List of permissions](/cycode-settings/user-administration/global-roles-and-permissions/list-of-permissions)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
