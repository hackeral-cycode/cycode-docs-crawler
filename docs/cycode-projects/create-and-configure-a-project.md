# Create and configure a project | Cycode Docs

Source: https://docs.cycode.com/cycode-projects/create-and-configure-a-project

---

# Create and configure a project

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-projects/create-and-configure-a-project.md "Edit this page")

Updated on Jan 4, 2026 • Published on Dec 30, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode projects are created using the project wizard, where you can configure the following:

1.  Project details - define the project details and business impact.
    
2.  Violations and scope - select one or more violation categories and assign assets to the project.
    
3.  Insights (risk profile) - (application-type projects only) enable applicable security exposure parameters so Cycode can add tags that are visible in the Inventory view.
    
4.  Members - associate internal and external members with the project.
    
5.  Issue tracking - define whether users can open tickets in your issue tracking tool directly from Cycode.
    
6.  PR scan settings: Define the pull request scanner settings for each scanner type.
    

After you create a project, you can open it again in the wizard to add members, manage members, and update settings as needed.

## Create a project [Copied!](#create-a-project "Copy link to this section")

1.  In the Projects page, click **New Project**.
    
2.  In the **Details** page of the New Project wizard, define the following and click **Next**.
    

Item

Description

**Name**

Provide a meaningful name for the project.

Note

If you’re using the project APIs, Cycode recommends using your naming conventions.

**Description**

(Optional) Add a description for the project.

**Type**

(Optional) Select the type of project from the list.

Note

If you define the project as an application, the Insights tab becomes available so you can set applicable security exposure parameters.

**Business impact**

(Optional) Define the business impact of the project as high, medium, or low. The business impact affects the risk score assigned to any violations detected within that project.

**Select parent group**

(Optional) Select the group where the project will be assigned.

3.  In the **Scope** page, define the following and click **Next**.

Item

Description

**Violation category**

Select one or more categories to include in the project.

**Select scope**

Click an asset source and select from the available assets that are shown in the table. You can also select labels in addition to specific assets.

Note

If you have third-party security tools connected to Cycode, you can also select from the assets in that integration.

Note

When you select an asset, Cycode shows if it is dynamic. When an asset is dynamic, any change to the asset in the integration is reflected in the Cycode project. For example, if an organization updates an SCM with a new repository, it is included automatically in the Cycode project.

4.  (Application-type projects only) in the **Insights** page, enable as many key attack surfaces as you want to track. When an insight is enabled, Cycode will automatically apply a relevant label to violations that meet the criteria.
    
5.  In the Members page, invite users to the project.
    
    1.  To invite an internal user click in the **Total members** field, select one or more users from the list, and click **Invite**.
        
        Tip
        
        You can create a new project without adding members, and then edit the project and add members later.
        
    2.  From the member list, configure the following per member:
        
        Name
        
        Description
        
        **Member**
        
        The full name and email address of the Cycode project member.
        
        **Global role**
        
        The global role assigned to this member. This field is read only.
        
        **Project role**
        
        Assign a project role or leave the default **No project** role value.
        
        **Job title**
        
        (Optional) You can create a job title or assign one from the list. The job title doesn’t affect user access or permissions in the project.
        
    3.  To invite an external user click in the **Total members** field, type the email address of the user, select a global role, and click **Invite**.
        

Note

Each member in a project can change or set permissions for other members that have user roles that are parallel to them or lower. For example, the project manager can change the assigned user roles for other project managers, members, and viewers only.

5.  Click **Next**.
    
6.  In the **Issue tracking** page, you can opt to open tickets in an integrated ticketing tool. Use the global admin settings, or configure specific settings for this Cycode project. Turn on **Enable custom issue tracking settings** and configure the following:
    
    Option
    
    Description
    
    **Select issue tracking tool**
    
    If you have a ticketing tool integrated with Cycode, you can select it from the list.
    
    Note
    
    Currently supported for Jira Cloud and Jira Server.
    
    **Select an account**
    
    Select the account that should be associated with this Cycode project.
    
    **Select a project**
    
    Select one or more third-party projects that should be associated with this Cycode project.
    
7.  Click **Next**.
    
8.  In the **PR scanning** page, configure the pull request settings for any relevant scanner. You can leave the default global **Admin settings** or configure specific settings for this Cycode project. If you select **Project settings** for a scanner, configure the following:
    

Note

Only members with project manager, admin, or owner roles can configure these options.

Option

Description

**PR scanning**

Cycode scans all pull requests for all repositories mapped to the project scope, and fails the ones where violations are detected.

Note

The rest of the PR scanning options are only enabled when this option is enabled.

**Scanner settings - block merge**

If a pull request fails a scan because it contains a violation of the configured severity, the merge is blocked until the violation is resolved.

**Exceptions**

1.  (Optional) Click **Add** to build a list of repositories that should have different PR scan settings from those configured for the project.
2.  Configure the scanner behavior for these repositories.

**Scanner settings - status check threshold**

Any violation that meets or exceeds the severity level configured here will fail the status check (and the merge will be blocked if the option is enabled). The default severity level is **Medium**. You can change the threshold to suit your organizational needs.

**Comment threshold**

Cycode will add a comment to PRs that contain at least one violation that meets or exceeds the severity level configured here. The default severity level is **Medium**. You can change the threshold to suit your organizational needs.

Note

**Note**

The threshold for adding comments must be equal to or lower than the block merge threshold.

**Don’t scan PRs in draft status**

You can set the scanner to ignore pull requests that are in draft status, to reduce performance overhead and eliminate noise in your dashboards.

**Require reason when ignoring violations**

Enable this option to ensure that comments are always added when a violation is ignored, to provide context.

Important

Custom project settings override global admin settings. Some advanced PR settings are only configurable in the admin settings.

If a repository is associated with more than one project, the more restrictive settings will apply to that repository in all projects where it appears.

9.  Click **Create Project**.
    
10.  If you have asset collision notifications enabled, the confirmation dialog may contain information about specific assets that are assigned to more than one Cycode project. You can click **Create project** and then edit the affected projects as necessary.
     

Note

*   Only members with the admin role can see notifications about asset collisions.
*   After a Cycode project is created, notifications also appear in the project table and project cards so users can identify the affected projects and the assets that are causing the conflict.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
