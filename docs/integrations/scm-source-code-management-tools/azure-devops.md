# Azure DevOps | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/azure-devops

---

# Azure DevOps

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/azure-devops.md "Edit this page")

Updated on Mar 29, 2026 • Published on Mar 29, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic describes how to integrate Azure DevOps Cloud with Cycode.

Integrating Azure DevOps enables Cycode to scan your code and do the following:

*   Review code access and permissions
    
*   Audit significant events
    
*   Identify insecure configurations
    
*   Identify code leaks
    
*   Monitor secrets
    

After successfully integrating with Azure, Cycode starts scanning the data from your environment and running its policies.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   If this is your first integration with Azure DevOps, your Microsoft Entra tenant admin must install the Cycode Azure DevOps app and grant admin consent for the organization. For more information, go to the [Microsoft docs](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/connect-organization-to-azure-ad?view=azure-devops) .
    
*   Verify that the integration user has the required permissions, as described in [Permissions](/integrations/scm-source-code-management-tools/azure-devops#permissions) below.
    

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

### Supported [Copied!](#supported "Copy link to this section")

Cycode supports the following OAuth 2.0 authentication methods for Azure DevOps Cloud.

Method

Description

Comments

Microsoft Entra

Modern, enterprise-grade authentication using the [Microsoft identity platform](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/entra-oauth?view=azure-devops) . A tenant administrator installs the Cycode Azure DevOps app, then a dedicated integration user signs in to complete the setup.

This is the recommended method

Azure DevOps

Azure DevOps’ own OAuth implementation. [Deprecated by Microsoft as of April 2025](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops) , with full deprecation scheduled for 2026. Only available for organizations that already have existing integrations with this method.

Deprecated

### Not supported [Copied!](#not-supported "Copy link to this section")

#### Personal Access Tokens (PATs) [Copied!](#personal-access-tokens-pats "Copy link to this section")

PATs are static, long-lived credentials that can’t be scoped to specific API surfaces in the same way that OAuth can. PATs also bypass multi-factor authentication controls.

Cycode doesn’t support personal access token (PAT) authentication for Azure DevOps Cloud integrations. This is a deliberate decision aligned with [Microsoft’s own security guidance](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&amp;tabs=Windows) , which states “Avoid using PATs when a more secure authentication method is available. PATs carry inherent security risks because they’re long-lived credentials that can be leaked, stolen, or misused. Use Microsoft Entra tokens, managed identities, or service principals instead whenever possible.”

Instead, Cycode uses Microsoft Entra (or Azure DevOps for existing integrations) with OAuth 2.0 to ensure a secure, enterprise-grade integration that follows the principle of least privilege and leverages your organization’s existing identity and access management policies.

#### Service principals [Copied!](#service-principals "Copy link to this section")

Azure DevOps service principals don’t support interactive login and therefore can’t be used with the current integration flow, which requires a user to sign in and grant authorization. The recommended approach is to create a dedicated bot/service user account (for example, [cycode-bot@company.com](mailto:cycode-bot@company.com) ), add it to your Azure DevOps organization with the appropriate permissions, and use that account to complete the integration. This ensures the integration isn’t tied to any individual employee’s account and remains stable over time.

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

### Microsoft Entra permissions [Copied!](#microsoft-entra-permissions "Copy link to this section")

When using Microsoft Entra, the Cycode Azure DevOps app is registered with the Azure DevOps resource (`499b84ac-1321-427f-aa17-267ca6975798`) using the `.default` scope. This means the effective permissions are determined by the following:

*   The [delegated permissions](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc) configured during the Cycode Azure DevOps app registration process (with consent from the tenant administrator).
    
*   The permissions of the integration user who signs in to complete the integration.
    

The effective access is the intersection of the app’s configured API permissions and the integration user’s Azure DevOps permissions.

Note

Microsoft Entra and Azure DevOps OAuth use the same [scope definitions](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops#available-scopes) .

#### OAuth scopes vs. user permissions [Copied!](#oauth-scopes-vs-user-permissions "Copy link to this section")

OAuth scopes define the maximum operations an application can perform, but they don’t grant permissions on their own. The actual access is limited to the intersection of the OAuth scopes and the permissions of the user who authorized the integration. For example, even though **vso.code\_full** is requested, a user who only has read access to a project won’t be able to write code through the integration.

#### Required OAuth scopes [Copied!](#required-oauth-scopes "Copy link to this section")

Cycode requires the following OAuth scopes for all integrations.

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

vso.graph

Graph (read)

Validate user group memberships (e.g., Project Collection Administrators), list teams and team members, and read access control lists.

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

### Updates via webhook events [Copied!](#updates-via-webhook-events "Copy link to this section")

Full-access integrations register webhooks with Cycode for the following Azure DevOps events.

Event

Purpose

git.push

Trigger scans on new code pushes to repositories

git.pullrequest.created

Trigger PR scans when a new pull request is opened

git.pullrequest.merged

Trigger PR scans when a pull request is merged and track merged PRs for inventory, discovery, and auto-resolving violations

ms.vss-code.git-pullrequest-comment-event

Track PR comment activity for scanning and developer interaction

build.complete

Trigger pipeline scans when builds complete

Note

Registering webhooks requires Administrator permissions (either Project Collection Administrators group at the organization level or Project Administrators group at the project level), regardless of the OAuth scope configuration.

### Restrict the Azure DevOps project scope for integration [Copied!](#restrict-the-azure-devops-project-scope-for-integration "Copy link to this section")

Cycode can only integrate Azure DevOps projects that the integration user can access. To define the scope of the Azure DevOps projects that are integrated, you can manage the permissions of the integration user account. This restricts the integration scope to the Azure DevOps projects where the integration user has permissions, without having to configure exclusions on the Cycode side.

*   **To include a project**: The integration user should be a member of the Readers group (or have equivalent permissions) in the Azure DevOps project.
    
*   **To exclude a project**: Remove the integration user from the Readers group (and any other groups that grant repository access) in the Azure DevOps project. The project will no longer appear in the list of available projects in the connector wizard.
    

**How does it work?**

During the integration process, the connector wizard displays the Azure organizations and projects that are available based on the integration user’s permissions:

*   **Full-access organizations**: The integration user is a Project Collection Administrator. All projects in the organization are available with full functionality.
    
*   **Limited-access organizations**: The integration user has access to some projects but isn’t a Project Collection Administrator. Only the Azure DevOps projects where the user has permissions are displayed, and they are integrated with limited functionality (baseline and on-demand scans only).
    

Note

To see the access level for a project, hover over the icon in the Accessible Projects column in the connector wizard.

## Integrate Azure DevOps with Cycode [Copied!](#integrate-azure-devops-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the Add Integration window, click **Code** in the left menu or search for Azure DevOps and click the **Azure DevOps** tile.
    
3.  In the connector wizard, click **Connect Azure DevOps**.
    
4.  If this is the first time you’re integrating with Azure DevOps using Microsoft Entra and the Cycode Azure DevOps app hasn’t been installed, follow the instructions in [Install the Azure DevOps app for Microsoft Entra](/integrations/scm-source-code-management-tools/azure-devops#install-the-cycode-azure-devops-app-for-microsoft-entra) below.
    
5.  Cycode connects to your Azure DevOps account and retrieves the information about the available organizations and projects.
    
6.  In page 3 of the connector wizard, do the following:
    
    1.  Select the type of organizations that you want to display:
        
        Option
        
        Description
        
        **Full-access organizations only**
        
        (Default) Display only organizations where the integration user has Project Collection Administrator permissions. Provides full Cycode functionality.
        
        **All organizations (including limited access)**
        
        Display all organizations the user has access to, including those with limited permissions. Limited-access organizations support baseline and on-demand scans only.
        
    2.  In the resulting list of available organizations, select the ones you want Cycode to scan.
7.  Click **Connect**.
    

Cycode begins to scan your Azure DevOps organizations. You can view details about the integration in the final page of the connector wizard.

Note

The Cycode integration has the same access rights in the Azure organization as your integration user.

### Install the Cycode Azure DevOps app for Microsoft Entra [Copied!](#install-the-cycode-azure-devops-app-for-microsoft-entra "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the Add Integration window, click **Code** in the left menu or search for Azure DevOps and click the **Azure DevOps** tile.
    
3.  Click the link in the prerequisites (“To install the app, **click here**.”).
    
4.  In the **Generate** dialog, provide your Azure tenant ID and click **Generate link**.
    
5.  If you’re a tenant administrator, click the link and follow the instructions in the Microsoft dialogs.
    
6.  If you’re not a tenant administrator, copy the link and send it to your tenant administrator so they can install the Cycode Azure DevOps app on your behalf.
    
7.  After the app is installed, run the connector wizard again.
    

### Recommended integration approach for production environments [Copied!](#recommended-integration-approach-for-production-environments "Copy link to this section")

When you integrate Cycode in a production environment, we recommend using the following approach:

1.  A tenant admin should install and approve the Cycode Azure DevOps app (one-time setup).
    
2.  Create a dedicated bot or service user (for example, [cycode-bot@company.com](mailto:cycode-bot@company.com) ) with the appropriate Azure DevOps permissions.
    
3.  The dedicated integration user you created in step 2 should sign in to Cycode and complete the Azure DevOps integration.
    

This approach provides the following benefits:

*   Separates the admin consent (step 1) from the integration setup (steps 2-3).
    
*   Ensures the integration isn’t tied to any individual employee’s account.
    
*   Allows managing the Azure DevOps projects that are integrated by managing the integration user’s project memberships.
    
*   Follows the principle of least privilege, because the integration user only has access to the specific Azure DevOps projects that should be integrated.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
