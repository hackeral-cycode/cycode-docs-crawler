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

## Permissions [Copied!](#permissions "Copy link to this section")

All permissions required for integrating Bitbucket with Cycode are detailed [here](/integrations/scm-source-code-management-tools/bitbucket#permissions) .

These are the specific permissions required for integrating with Cycode:

Permissions

Why is Access Required?

Bitbucket Server administrator account

Cycode can only be integrated with a Bitbucket Server administrator account. Verify that you have the right permissions to approve these integrations before proceeding.

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
    

## Integrate with Bitbucket Server [Copied!](#integrate-with-bitbucket-server "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration** .
    
2.  In the Add Integration window, click **Bitbucket Server**.
    
3.  Enter your Bitbucket Server URL. Cycode validates the URL.
    
4.  Click **Create a new application link**. In the new window that opens, register a new OAuth application on your Bitbucket Server instance according to the steps shown in the platform.
    
5.  Click **Done**.
    
6.  Click **Authorize**. After you authorize the integration, the integrations area reloads and shows that Bitbucket Server is connected.
    

## Integrating Additional Instances of Bitbucket Server [Copied!](#integrating-additional-instances-of-bitbucket-server "Copy link to this section")

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
