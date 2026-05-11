# Add members manually to Cycode | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/manage-cycode-members/add-members-manually-to-cycode

---

# Add members manually to Cycode

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/manage-cycode-members/add-members-manually-to-cycode.md "Edit this page")

Updated on Jan 26, 2026 • Published on Jan 21, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can add users manually to Cycode individually and in bulk. You can also manage global and project roles.

Important

If SCIM-only user provisioning is enabled, manual user provisioning is disabled. Users can only be provisioned from your IdP.

## Enroll members manually [Copied!](#enroll-members-manually "Copy link to this section")

1.  Go to **Settings > Access > Members** and click **Invite members**.
    
2.  In the **New members** window, configure the following:
    
    Option
    
    Description
    
    Enter email
    
    Provide the email address of the new member.
    
    Enter full name
    
    Provide the full name of the new member.
    
    Select platform role
    
    Select the relevant role you want to assign to this member.
    
    Associate projects
    
    (Optional)
    
    1.  Click **Associate projects**.
    2.  In the dialog, click **Assign project**.
    3.  Select a group or project from the list. If you select a group, the user will be a member of all the projects in the group.
    4.  Select a project role for each project.
    5.  Click **Save**.
    
3.  To add another member, click **Add member**.
    
4.  To add the member without sending an invitation email, toggle on the **Invite members without requiring email confirmation** option.
    
5.  Click **Invite**.
    

## Import users via CSV file [Copied!](#import-users-via-csv-file "Copy link to this section")

You can do a bulk import of users by importing a CSV file. The file should have the following data:

Column

Description

Required

Email address

Valid email address of the user, for example **[anna@email.com](mailto:anna@email.com)** .

**Yes**

Name

User name, for example **Anna Owen**.

No

Global role

Valid name of a Cycode global role, for example **Viewer**.

**Yes**

Cycode project

Name of a Cycode project.

No

Project role

Valid name of a Cycode project role, for example **Project member**.

No

1.  Go to **Settings > Access > Members** and click **Import CSV**.
    
2.  In the import window, attach the files that you want upload and click **Invite**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
