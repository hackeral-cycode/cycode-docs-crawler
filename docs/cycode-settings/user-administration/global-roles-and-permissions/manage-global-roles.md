# Manage global roles | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/global-roles-and-permissions/manage-global-roles

---

# Manage global roles

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/global-roles-and-permissions/manage-global-roles.md "Edit this page")

Updated on Mar 19, 2026 • Published on Jan 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

From the **Roles and permissions** page, you can view and manage the roles that are available to assign to your Cycode members. You can view project role permissions, and you can view and manage global roles. To view the list of available Cycode roles, go to **Settings > Access > Member management > Roles and permissions**.

## Create a custom global role [Copied!](#create-a-custom-global-role "Copy link to this section")

If the default Cycode global roles don’t meet your organizational security requirements, you ca create custom global roles that allow you to define exactly what Cycode members can see and do in the platform. After they are created, custom global roles are available along with the default global roles when you configure the level of user access (when you invite a user to the platform, or from the Members page).

Cycode members with **Admin** or **Owner** global roles can create, edit, and delete custom global roles.

A Cycode member can only have one global role. If you assign a custom role, it replaces the previously assigned global role.

1.  Go to **Settings** > **Access** > **Member management** > **Roles and permissions**, and click **Add role**.
    
2.  Configure the following:
    
    Item
    
    Description
    
    Role name
    
    Provide a name for the custom global role.
    
    Description
    
    (Optional) Provide a description for the custom global role.
    
    Duplicate from role
    
    (Optional) Select a role from the list to provide a starting point for configuring the permissions.
    
    Note
    
    To prevent accidentally granting full access in a custom role, permissions that provide tenant-side visibility are not selected for the new role even if they were enabled in the original role.
    
    Select permissions by module
    
    Expand a group to view the available permissions. Select the group to apply all the permissions it contains, or select individual permissions in the group.
    
    Tip
    
    When a permission group is collapsed, the checkbox indicates whether some (dot), all (checked) or none (empty) of its permissions are selected.
    
3.  Click **Save**. The custom global role is now available in the list of global roles.
    

### Delete a custom global role [Copied!](#delete-a-custom-global-role "Copy link to this section")

*   In the **Roles and permissions** page, click the More options menu in the role you want to delete and select **Delete**.

Note

You can only delete a custom global role that isn’t assigned to any members.

* * *

#### Related topics [Copied!](#related-topics "Copy link to this section")

*   [Global roles and permissions](/cycode-settings/user-administration/global-roles-and-permissions/)
    
*   [List of permissions](/cycode-settings/user-administration/global-roles-and-permissions/list-of-permissions)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
