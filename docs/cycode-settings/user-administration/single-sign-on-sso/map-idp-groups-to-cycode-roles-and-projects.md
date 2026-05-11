# Map IdP groups to Cycode roles and projects | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/single-sign-on-sso/map-idp-groups-to-cycode-roles-and-projects

---

# Map IdP groups to Cycode roles and projects

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/single-sign-on-sso/map-idp-groups-to-cycode-roles-and-projects.md "Edit this page")

Updated on Jan 26, 2026 • Published on May 5, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Note

Role mapping is only available with user management v2.

You can map user roles and project access based on the IdP groups that are defined in your SSO system. This allows you to automatically assign Cycode roles using the settings already configured in your identity provider, ensuring consistent access control across Cycode.

Note

If you don’t assign projects when you map an IdP group, the group members will stay assigned to any Cycode projects that were previously configured.

## Map your IdP groups to Cycode roles [Copied!](#map-your-idp-groups-to-cycode-roles "Copy link to this section")

1.  In **Settings** > **Access** > **SSO** > **Role/project mapping**, in the **Define the default Cycode role** list select a role to define the Cycode global role assigned to new members who sign in with SSO.
    
    Members who aren’t assigned to any project can view all Cycode data for all projects. Best practice is to set the default Cycode role to **None** so that only members associated with a project can see the project data. When a member is assigned to a project, their role can then be updated as necessary.
    
    Note
    
    If group mapping is enabled, it overrides the default role configured here.
    
2.  To use SSO groups to define roles, enable the **Map SSO groups to roles and projects** option.
    
3.  Configure the **Role and project mapping behavior** as follows:
    
    Option
    
    Description
    
    **First login**
    
    (Default setting) Upon first sign-in, the member is assigned a Cycode role according to the group mapping set in **Map SSO groups to roles and projects** (see below). Subsequent changes to the group mapping won’t apply to this member’s role and permissions in Cycode.
    
    **Every login**
    
    Upon each sign-in, the member is assigned a role according to the group mapping. Any changes made to the group mapping since the previous sign-in are applied to the member. Group mapping overrides any manual updates that are made to the Cycode user role for future sign-ins.
    
4.  To add a new SSO group, in the **Group mapping** area click **Add group**.
    
5.  In the **Group ID** field, type the ID of the group.
    
6.  In the **Assigned global role** field, select the required role from the list.
    
7.  In the **Assigned projects** field, select the relevant groups and projects from the list.
    
    Note
    
    The SSO group is mapped to the projects in the group, not to the group itself.
    
8.  Click **Save Changes**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
