# Azure DevOps with OAuth (legacy) | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/azure-devops-with-oauth-legacy

---

# Azure DevOps with OAuth (legacy)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/azure-devops-with-oauth-legacy.md "Edit this page")

Updated on Mar 30, 2026 • Published on Jan 7, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic describes how to integrate Azure DevOps with Cycode using OAuth authentication.

Important

[Azure DevOps OAuth is deprecated by Microsoft](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops) . New app registrations are no longer accepted as of April 2025, and the service is scheduled for full deprecation in 2026. This authentication method is only available for organizations that already have existing Azure DevOps OAuth integrations. For new integrations, use Microsoft Entra instead.

Integrating Azure DevOps enables Cycode to scan your code and do the following:

*   Review code access and permissions
    
*   Audit significant events
    
*   Identify insecure configurations
    
*   Identify code leaks
    
*   Monitor secrets
    

After successfully integrating with Azure DevOps, Cycode starts scanning the data from your environment and running its policies.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

Before integrating your organizations from Azure DevOps in Cycode, verify that the **Third-party application access via OAuth** policy is enabled for each organization. This is an organization-level application connection policy that controls whether Azure DevOps OAuth apps can access resources in your organization. To enable it, navigate to Organization Settings -> Policies and toggle the policy on. For more information, see [Restrict authentication methods](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops#restrict-authentication-methods) in the Azure DevOps docs.

Note

Cycode uses Azure DevOps OAuth to obtain the permissions needed to scan your repositories, monitor pull requests, and access organization data. When this policy is disabled, Azure DevOps blocks all third-party OAuth apps from accessing your organization’s resources. This may cause the OAuth authorization page to fail with an error, or result in the organization not appearing in Cycode after integration.

## Permissions [Copied!](#permissions "Copy link to this section")

### Azure DevOps access level [Copied!](#azure-devops-access-level "Copy link to this section")

The integration user must have either _Basic_ or a _Visual Studio Subscriber_ access level assigned.

### Azure DevOps user permissions [Copied!](#azure-devops-user-permissions "Copy link to this section")

The integration type Cycode has is determined by the integration user’s permissions at both the organization and project levels.

#### Organization-level access [Copied!](#organization-level-access "Copy link to this section")

Integration type

Required group membership

Behavior

Full access organization

Project Collection Administrators (or organization Owner)

Cycode has full access to all projects in the organization. New projects are automatically detected and integrated with full access (see full access project behavior below).

Limited access organization

Not a member of Project Collection Administrators

Cycode can only access specific projects where the user has been explicitly granted permissions (see project-level access below).

#### Project-level access [Copied!](#project-level-access "Copy link to this section")

Integration type

Required group membership

Behavior

Full access project

Project Administrators

Cycode registers webhooks and enables real-time scanning, PR status checks, PR comments, block merge, and auto-remediation for that project.

Limited access project

Readers (or any group with read access)

Initial baseline scan and on-demand scans only. No webhooks, no real-time event-driven scanning.

Not accessible project

No project membership

Cycode cannot access the project. It will not appear in the integration wizard.

For more information about these integration types, go to [Full access vs. limited access](/integrations/scm-source-code-management-tools/azure-devops#full-access-vs-limited-access) below.

### OAuth scopes vs. user permissions [Copied!](#oauth-scopes-vs-user-permissions "Copy link to this section")

OAuth scopes define the maximum operations an application can perform, but they don’t grant permissions on their own. The actual access is limited to the intersection of the OAuth scopes and the permissions of the user who authorized the integration. For example, even though **vso.code\_full** is requested, a user who only has read access to a project won’t be able to write code through the integration.

### Required OAuth scopes [Copied!](#required-oauth-scopes "Copy link to this section")

The Azure DevOps OAuth integration requests the following [scopes](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops#available-scopes) during authorization:

Scope

Name

Purpose

vso.code\_full

Code (full)

Read source code, create and manage pull requests, post PR comments, create commits for remediation, manage branch policies for block merge. Also includes service hooks access for webhook registration.

vso.code\_status

Code (status)

Read and write commit and pull request status checks (pass/fail indicators on PRs).

vso.build

Build (read)

Read build definitions, build results, timelines, and logs for Azure Pipelines scanning.

vso.project

Project and team (read)

List available organizations, projects, and teams during integration setup and ongoing sync.

vso.identity

Identity (read)

Resolve user identities and retrieve authenticated user information for access control checks.

vso.graph\_manage

Graph (manage)

Validate user group memberships (for example, Project Collection Administrators), list teams and team members, and read access control lists.

vso.memberentitlementmanagement

Member entitlement management (read)

Check user access levels (Basic/Visual Studio Subscriber) and count organization users.

vso.tokenadministration

Token administration

Manage (view and revoke) existing tokens for organization administrators.

### Azure DevOps OAuth full scope vs. read-only scope [Copied!](#azure-devops-oauth-full-scope-vs-read-only-scope "Copy link to this section")

When integrating Azure DevOps with Cycode, you have to consider two types of permissions.

#### Azure DevOps permissions [Copied!](#azure-devops-permissions "Copy link to this section")

All users that are added to Azure DevOps must be assigned an access level that grants or restricts access to select web portal features. To use Azure DevOps features, users must be added to a security group with the appropriate permissions and granted access to the web portal. Limitations to select features are based on the access level and security group to which a user is assigned. The Basic access level and higher supports full access to most Azure DevOps Services.

*   Most Azure DevOps users are added to the Contributors security group and granted Basic access level. The Contributors group provides read and write access to repositories, work tracking, pipelines, and more.
    
*   Any new user that’s added to the project collection inherits **all the permissions** granted to the collection users.
    

When integrating Azure DevOps with Cycode, the user must be [a member of the project collection being integrated and have the required (project admin) permissions](https://learn.microsoft.com/en-us/azure/devops/organizations/security/about-permissions?toc=%2Fazure%2Fdevops%2Fserver%2Ftoc.json&amp;bc=%2Fazure%2Fdevops%2Fserver%2Fbreadcrumb%2Ftoc.json&amp;view=azure-devops-2022&amp;tabs=preview-page) .

Integration type

Required group membership in Azure DevOps

What does it enable?

Full access

Project Collection Administrators (or organization Owner)

All Cycode capabilities, including real-time webhook scanning, PR status checks, PR comments, block merge, and auto-remediation.

Limited access

Readers (or any group with read access to repositories)

Initial baseline scan by Cycode then and on-demand scans only. No real-time, event-driven scanning.

Note

Registering webhooks requires Administrator permissions (either Project Collection Administrators group at the organization level or Project Administrators group at the project level), regardless of the OAuth scope configuration.

### Full access vs. limited access [Copied!](#full-access-vs-limited-access "Copy link to this section")

The following table describes the Cycode features that are enabled for each integration type.

Feature

Full access

Limited access

Initial code scan (baseline)

Yes

Yes

On-demand scans

Yes

Yes

Real-time push scanning (via webhooks)

Yes

X

Pull request scanning (event-triggered)

Yes

X

PR status check updates

Yes

X

PR comments with violation details

Yes

X

Block merge on PRs with violations

Yes

X

Auto-remediation (create PRs with fixes)

Yes

X

Azure Pipelines scanning

Yes

X

Limited-access integrations trigger an initial scan of the associated Azure DevOps projects but don’t register webhooks with Cycode for continuous updates, so there are no further scans initiated by Cycode . You can perform manual on-demand scans for these projects.

### Restrict the Azure DevOps project scope for integration [Copied!](#restrict-the-azure-devops-project-scope-for-integration "Copy link to this section")

Cycode can only integrate Azure DevOps projects that the integration user can access. To define the scope of the Azure DevOps projects that are integrated, you can manage the permissions of the integration user account. This restricts the integration scope to the Azure DevOps projects where the integration user has permissions, without having to configure exclusions on the Cycode side.

*   **To include a project**: The integration user should be a member of the Readers group (or have equivalent permissions) in the Azure DevOps project.
    
*   **To exclude a project**: Remove the integration user from the Readers group (and any other groups that grant repository access) in the Azure DevOps project. The project will no longer appear in the list of available projects in the connector wizard.
    

## Integrate Azure DevOps with Cycode [Copied!](#integrate-azure-devops-with-cycode "Copy link to this section")

Tip

When integrating with OAuth, comments in pull requests are posted under the identity of the user who authorized the integration. We recommend creating a dedicated “Cycode” service account to ensure correct attribution and to prevent the integration from breaking if that user leaves.

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the Add Integration window, click **Code** in the left menu or search for Azure DevOps and click the **Azure DevOps** tile.
    
3.  Click **Connect Azure DevOps**.
    
4.  Follow the instructions in the Microsoft dialogs to sign in to Azure DevOps. Cycode connects to your Azure DevOps account and retrieves the information about your available organizations and projects.
    
5.  In page 3 of the connector wizard, do the following:
    
    1.  Select the type of organizations that should be displayed, based on how you want to integrate Azure DevOps with Cycode.
        
        Option
        
        Description
        
        **Full access organizations only**
        
        (Default) Integrate Cycode with full read/write access.
        
        **All organizations (including limited access)**
        
        Integrate Cycode with Azure DevOps read-only permissions. This allows baseline and on-demand scans, but doesn’t include automatic scanning of code changes, pull requests, and event-triggered notifications.
        
    2.  Select the organization(s) you want Cycode to scan. The organizations and projects that are displayed depend on the level of permissions that you selected above.
        
        Note
        
        *   The Cycode integration will have the same access rights in the organization as your user.
        *   To see what permissions the integration has in a project, hover over the the icon in the **Accessible projects** column.
        

Cycode begins to scan your Azure DevOps organizations. You can view details about the integration in the final page of the connector wizard.

Note

*   Cycode automatically syncs Azure Pipelines after the Azure DevOps integration is completed successfully.
*   Existing Azure DevOps integrations have to use the **Reconnect** button to install the new OAuth app that includes pipeline permissions.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
