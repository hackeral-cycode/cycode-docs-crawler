# User administration | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration

---

# User administration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/_index.md "Edit this page")

Updated on Jan 26, 2026 • Published on Dec 18, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

This section describes the methods you can use to integrate your organizational users into Cycode so you can manage user access to different areas of the platform.

## Onboard users to Cycode [Copied!](#onboard-users-to-cycode "Copy link to this section")

Human users can be added and managed using your IdP or manually. Cycode also supports adding non-human users as service accounts.

Important

If SCIM-only user provisioning is enabled, manual user provisioning is disabled. Users can only be provisioned from your IdP.

*   **IdP with Single Sign-On (SSO)** - This method enables bulk enrollment and role mapping so you can manage user access to Cycode functionality based on your IdP groups.
    
    For more information about using SSO and IdP mapping, go to [Map IdP groups to Cycode roles and projects](/cycode-settings/user-administration/single-sign-on-sso/map-idp-groups-to-cycode-roles-and-projects) .
    
*   **Manual invitation to Cycode** - You can invite users manually from the Members view, where you can also see a list of current members and manage member roles. Cycode supports individual and bulk invitation.
    
    For more information about manually inviting and managing users in Cycode, go to [Add members manually to Cycode](/cycode-settings/user-administration/manage-cycode-members/add-members-manually-to-cycode) .
    
*   **Service accounts** - Service accounts are created for non-human users so that Cycode can authenticate to third-party applications and access data via API. These accounts are managed from the Service accounts view.
    
    For more information about service accounts, go to [Service accounts](/cycode-settings/user-administration/service-accounts) .
    

## Manage user access [Copied!](#manage-user-access "Copy link to this section")

When users are added to Cycode they become members and are assigned roles that determine the level of access to areas and functions of the platform.

Cycode provides a number of default global roles that can be assigned, and you can also create custom global roles to meet the security needs of your organization.

In addition to global roles, you can assign project roles that control the level of access that members have to functionality based on the Cycode project.

For more information about member roles and permissions, go to [Roles and permissions](/cycode-settings/user-administration/global-roles-and-permissions) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
