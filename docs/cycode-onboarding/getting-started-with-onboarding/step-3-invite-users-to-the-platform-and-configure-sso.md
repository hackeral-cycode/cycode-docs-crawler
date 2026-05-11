# Step 3: Invite users to the platform and configure SSO | Cycode Docs

Source: https://docs.cycode.com/cycode-onboarding/getting-started-with-onboarding/step-3-invite-users-to-the-platform-and-configure-sso

---

# Step 3: Invite users to the platform and configure SSO

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-onboarding/getting-started-with-onboarding/step-3-invite-users-to-the-platform-and-configure-sso.md "Edit this page")

Updated on Nov 6, 2025 • Published on May 23, 2024

* * *

1.  Using [Single Sign On (SSO)](/cycode-settings/user-administration/single-sign-on-sso) , you can enable all of your organization’s users to log into all relevant platforms using one ID and password. Go to Settings > Access > SSO, and then copy the data in the domain (or sub-domain), ACS URL, and Entity ID fields from Cycode into your SSO application.

Note that the default role for users logging in with SSO is **None**, which does not provide users with this role access to any data.  
2\. Next, [invite users](/cycode-settings/user-administration/manage-cycode-members/add-members-manually-to-cycode) and assign them their [roles](/cycode-settings/user-administration/global-roles-and-permissions) .

Note

If SSO is enabled, the users you invite can log in using the SSO method. Users who log in using SSO who were **not** added via invitation will receive the **None** role by default, which you can change by updating the Members table.

*   Admin users: Users with full access to all data and all configuration options.
*   Project Managers: Users with management permissions for specific projects.
*   Members: Users with action permissions but no administrative permissions to specific projects, which means they can only perform specific tasks for the projects they are assigned to. Note that if a member isn’t assigned to a specific project(s), they will have access to all projects and to violations not associated with projects.
*   Viewers: Users with read only permissions to specific projects, which means they can only view violations but can not take actions. Note that if a viewer isn’t assigned to a specific project, they will have access to all projects and to violations not associated with projects.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
