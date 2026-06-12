# Bitbucket Server | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/bitbucket-server

---

# Bitbucket Server

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/bitbucket-server.md "Edit this page")

Updated on Mar 30, 2026 • Published on Mar 30, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Bitbucket Server enables Cycode to scan your code and to:

*   Review code access and permissions
    
*   Audit significant events
    
*   Identify insecure configurations
    
*   Identify code leaks
    
*   Monitor secrets
    

Cycode can integrate with multiple Bitbucket servers. After successfully integrating, Cycode starts scanning your environment and running its policies.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   You have to specify the Cycode URL and to paste the token generated in the Cycode web application.
    
*   Open inbound and outbound connectivity between Cycode and the on-premises Bitbucket instance on the following IPs:
    
    *   US SaaS:
        *   `34.230.110.76`
        *   `54.205.205.122`
        *   `18.209.26.95`
        *   `34.74.159.168`
        *   `3.226.104.48`
    *   EU SaaS:
        *   `52.58.81.134`
        *   `52.29.182.96`
        *   `3.69.177.124`
        *   `3.127.9.222`
*   Syslog can also be integrated by configuring log forwarding on the instance itself. To enable this, open ports for Syslog in addition to HTTPS (443). This enables Cycode to see activities such as clones and zip downloads
    

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

Cycode supports the following authentication methods for Bitbucket Server.

Method

Description

OAuth identification

(Recommended) Register an application link on your Bitbucket Server instance to create a Consumer Key and Consumer Secret, and authorize Cycode via the OAuth flow. For setup steps, see [Integrate with Bitbucket Server](#integrate-with-bitbucket-server) below.

Personal access token (PAT)

Authenticate with a Bitbucket Server [personal access token](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html) generated for the integration user. The token is sent as a bearer token; no application link is required.

## Permissions [Copied!](#permissions "Copy link to this section")

All permissions required for integrating Bitbucket with Cycode are detailed [here](/integrations/scm-source-code-management-tools/bitbucket#permissions) .

These are the specific permissions required for integrating with Bitbucket Server:

Permissions

Applies to

Why is access required?

Bitbucket Server administrator account

All methods

Cycode can only be integrated with a Bitbucket Server administrator account. Verify that you have the right permissions to approve these integrations before proceeding.

## Integrate with Bitbucket Server [Copied!](#integrate-with-bitbucket-server "Copy link to this section")

Tip

When integrating with OAuth, comments in pull requests are posted under the identity of the user who authorized the integration. We recommend creating a dedicated “Cycode” service account to ensure correct attribution and to prevent the integration from breaking if that user leaves.

1.  Go to **Settings > Integrations** and click **Add Integration** .
    
2.  In the Add Integration window, click **Bitbucket Server**.
    
3.  Enter your Bitbucket Server URL. Cycode validates the URL.
    
4.  Click **Create a new application link**. In the new window that opens, register a new OAuth application on your Bitbucket Server instance according to the steps shown in the platform.
    
5.  Click **Done**.
    
6.  Click **Authorize**. After you authorize the integration, the integrations area reloads and shows that Bitbucket Server is connected.
    

## Integrate Additional Instances of Bitbucket Server [Copied!](#integrate-additional-instances-of-bitbucket-server "Copy link to this section")

1.  Navigate to **Settings** and click **Add Integrations**.
    
2.  Click **Bitbucket Server**.
    
3.  In the Bitbucket Server integrations display, click **Add Integration** in the top right.
    
4.  Enter the relevant details for the Bitbucket Server account.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
