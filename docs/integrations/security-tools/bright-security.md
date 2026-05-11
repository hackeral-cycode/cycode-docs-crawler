# Bright Security | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/bright-security

---

# Bright Security

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/bright-security.md "Edit this page")

Updated on Apr 12, 2026 • Published on Sep 25, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

This connector syncs DAST vulnerabilities from Bright Security to Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

DAST

## Connect Bright Security to Cycode [Copied!](#connect-bright-security-to-cycode "Copy link to this section")

1.  Provide a name for the integration.
    
2.  Get the following parameters from Bright Security and apply them in the Cycode connector wizard.
    
    Parameter
    
    Value
    
    **Server URL**
    
    The server URL for your Bright Security application.The default URL is **[https://app.brightsec.com](https://app.brightsec.com)**
    
    **API key**
    
    To get the API key:  
    1\. In the Bright interface, go to **Settings** > **API keys**.  
    2\. Click **Create API key**.  
    3\. In the **Scopes** area, select **issues:read** and **projects:read**, then click **Create**.
    
3.  In the Cycode connector wizard, click **Connect**.
    

## Permissions [Copied!](#permissions "Copy link to this section")

The API key must be created with the following scopes.

Scope

Description

`issues:read`

Read access to security issues.

`projects:read`

Read access to projects.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
