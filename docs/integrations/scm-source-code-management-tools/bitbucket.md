# Bitbucket | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/bitbucket

---

# Bitbucket

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/bitbucket.md "Edit this page")

Updated on Feb 19, 2026 • Published on Feb 9, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Bitbucket enables Cycode to scan your code and do the following:

*   Review code access and permissions
*   Audit significant events
*   Identify insecure configurations
*   Identify code leaks
*   Monitor secrets

After successfully integrating, Cycode starts pulling the data from your environment and running its policies.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   Cycode only integrates with Bitbucket workspaces. Verify that your integration user has the necessary permissions (workspace owner or equivalent admin role) to approve these integrations and generate an API token with the required scopes.

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

Cycode supports the following authentication methods for Bitbucket.

Method

Description

OAuth identification

(Recommended) Authorize Cycode as an OAuth application in Bitbucket. Permissions are determined by the Cycode OAuth app you select during integration (see [OAuth application variants](#oauth-application-variants) below).

API token

Authenticate with a Bitbucket [API token](https://support.atlassian.com/bitbucket-cloud/docs/create-an-api-token/) generated for the integration user. Permissions are scoped via the token’s selected access scopes (see [Permissions for the API token method](#permissions-for-the-api-token-method) below). API tokens are the recommended replacement for the deprecated app password.

## Permissions [Copied!](#permissions "Copy link to this section")

### OAuth application variants [Copied!](#oauth-application-variants "Copy link to this section")

When you use OAuth identification, you select one of the following Cycode applications during integration. Your choice determines the access granted in Bitbucket.

Application

Description

Default

Gives Cycode read and write access in Bitbucket, and installs webhooks for event-based detection (required for features like PR scanning and other automated workflows).

Read-only

Gives Cycode read access in Bitbucket to support repository discovery and scanning for violations. Webhooks are not installed automatically. For setup steps, see [Add webhooks for OAuth read-only authentication](#add-webhooks-for-oauth-read-only-authentication) below.

Extended

Gives Cycode the same access as the default app, and also enables Cycode to read the branch protection configuration data.

### Permissions for the API token method [Copied!](#permissions-for-the-api-token-method "Copy link to this section")

If the integration uses an API token, it requires the following permissions to connect with your Bitbucket account.

Permissions

Cycode

Why is access required?

Account

Read

User details for connecting the account.

User

Read

User details for connecting the account.

Workspace

Read

List and select workspaces for monitoring.

Projects

Read

Access project-level settings and the repositories within them.

Repositories

Read

Fetch and scan repository content.

Pull requests

Read

Detect changes and enforce security policies in the PR flow.

Issues

Read

Fetch contextual data from tickets to link security findings.

Pipelines

Read

Fetch contextual data for analysis of the CI/CD environment.

Webhooks

Read and Write

Automatically set up real-time detection for new events such as repository changes.

## Integrate with Bitbucket [Copied!](#integrate-with-bitbucket "Copy link to this section")

Tip

When integrating with OAuth, comments in pull requests are posted under the identity of the user who authorized the integration. We recommend creating a dedicated “Cycode” service account to ensure correct attribution and to prevent the integration from breaking if that user leaves.

### Integrate using OAuth identification [Copied!](#integrate-using-oauth-identification "Copy link to this section")

1.  Go to **Settings** > **Integrations** and click **Add Integration**.
    
2.  In the Add Integration window, select **Bitbucket**.
    
3.  In page 1 of the connector wizard, do the following:
    
    1.  Select **OAuth identification**.
    2.  Select the Cycode application you want to use for the integration. For a description of each option, see [OAuth application variants](#oauth-application-variants) above.
4.  Click **Next**.
    
5.  If you are redirected to the Bitbucket sign-in page, authenticate to Bitbucket and then in the **Confirm access to your account** page, click **Grant access**.
    
6.  In page 4 of the connector wizard, select the workspaces that should be monitored and click **Next**.
    

#### Add webhooks for OAuth read-only authentication [Copied!](#add-webhooks-for-oauth-read-only-authentication "Copy link to this section")

Important

You must add webhooks manually for each repository when you integrate Cycode using the **Read-only** application. If you require automatic webhook installation, use the **Default** or **Extended** OAuth application.

To enable event-based detection such as PR activity and repository changes, you must manually create a webhook in each relevant repository.

1.  Go to the relevant repository in Bitbucket.
2.  Go to **Repository settings** > **Webhooks** and click **Add webhook**.
3.  Configure the webhook as follows:
    
    Parameter
    
    Description
    
    **Title**
    
    Provide a name for the webhook, for example **Cycode webhook**.
    
    **URL**
    
    Provide the URL for the webhook in the following format:**[https://api.cycode.xyz/bitbucket-dispatcher/api/v1/webhook/](https://api.cycode.xyz/bitbucket-dispatcher/api/v1/webhook/)** <_TenantId_\>/<_WorkspaceId_\> Where: _TenantId_ = your Cycode tenant ID _WorkspaceId_ = connected Bitbucket workspace ID
    
    **Secret**
    
    Not required. Leave this field empty.
    
    **Triggers**
    
    Select from the following triggers:  
      
    **Repository**:  
    • Push  
    • Fork  
    • Updated  
    • Commit comment created  
    • Build status created  
    • Build status updated  
      
    **Pull request**:  
    • Created  
    • Updated  
    • Approved  
    • Approval removed  
    • Changes request created  
    • Changes request removed  
    • Merged  
    • Declined  
    • Comment created  
    • Comment updated  
    • Comment deleted
    
4.  Click **Save**.

### Integrate using an API token [Copied!](#integrate-using-an-api-token "Copy link to this section")

Ensure the token is created with all the permissions listed in [Permissions for the API token method](#permissions-for-the-api-token-method) above.

Note

For more information about Bitbucket API tokens, go to the [Bitbucket docs](https://support.atlassian.com/bitbucket-cloud/docs/create-an-api-token/) .

1.  Go to **Settings** > **Integrations** and click **Add Integration**.
    
2.  In the Add Integration window, select **Bitbucket**.
    
3.  In page 1 of the connector wizard, select **API token** and click **Next**.
    
4.  In page 2 of the connector wizard, provide the following information and click **Integrate**:
    
    Field
    
    Description
    
    **User email**
    
    The email address of the Bitbucket user.
    
    **API token**
    
    API token that was generated for this user in Bitbucket.
    
5.  In page 4 of the connector wizard, select the workspaces that should be monitored and click **Next**.
    
    Note
    
    You will only see the workspaces that the token is authorized to access.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
