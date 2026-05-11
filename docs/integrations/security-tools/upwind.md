# Upwind | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/upwind

---

# Upwind

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/upwind.md "Edit this page")

Updated on Sep 11, 2025 • Published on Apr 6, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

This connector syncs container image vulnerabilities from Upwind to Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

## Permissions [Copied!](#permissions "Copy link to this section")

Requirement

Description

API client credentials

The client credentials must be of type **API**, as described in the connection steps below.

## Connect Upwind to Cycode [Copied!](#connect-upwind-to-cycode "Copy link to this section")

1.  Provide a name for the integration.
    
2.  Get the following parameters from Upwind and apply them in the Cycode connector wizard.
    
    Parameter
    
    Value
    
    **Client ID**
    
    Generated when creating Upwind client credentials as described below.
    
    **Client secret**
    
    To get the client secret:  
    1\. Go to the [Upwind main page](https://console.upwind.io/settings?mainPageTab=Credentials) .  
    2\. Click **Generate Credentials**.  
    3\. Select **API**, type the name and click **Generate**.  
    4\. Copy the client ID and client secret and click **Save**.
    
    **Organization ID**
    
    To get the organization ID:  
    1\. Go to the [Upwind main page](https://console.upwind.io/settings?mainPageTab=Credentials) .  
    2\. In the top left area of the page, click **Organization ID**.
    
3.  Configure the Upwind region:
    
    *   Default: `api.upwind.io`
    *   EU: `api.eu.upwind.io`
4.  Click **Next**.
    

## API versions (third party) [Copied!](#api-versions-third-party "Copy link to this section")

API

Version

Upwind API

v1

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
