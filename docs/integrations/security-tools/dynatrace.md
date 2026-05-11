# Dynatrace | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/dynatrace

---

# Dynatrace

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/dynatrace.md "Edit this page")

Updated on Nov 12, 2025 • Published on Oct 23, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

This connector syncs container image vulnerabilities from Dynatrace to Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

### Permissions [Copied!](#permissions "Copy link to this section")

Permission

Description

`securityproblems.read`

Read security problems and vulnerabilities from Dynatrace.

## Connect Dynatrace to Cycode [Copied!](#connect-dynatrace-to-cycode "Copy link to this section")

1.  Provide a name for the integration.
    
2.  Get the following parameters from Dynatrace and apply them in the Cycode connector wizard.
    
    Parameter
    
    Value
    
    **API token**
    
    Provide the API token for the Dynatrace instance. To get an API token:  
    1\. Sign in to Dynatrace.  
    2\. Go to **Settings** > **Integration** > **Dynatrace API**.  
    3\. Select **Generate token**.  
    4\. Provide a name for the token and configure the required permissions.  
    5\. Click **Generate**.
    
    **Server URL**
    
    Provide the URL of the Dynatrace server, for example `https://prod123.live.dynatrace.com`.
    
3.  Click **Connect**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
