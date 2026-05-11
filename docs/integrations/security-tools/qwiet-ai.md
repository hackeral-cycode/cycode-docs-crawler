# Qwiet AI | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/qwiet-ai

---

# Qwiet AI

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/qwiet-ai.md "Edit this page")

Updated on Mar 2, 2026 • Published on Feb 10, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Cycode connector for Qwiet AI enables pulling SAST and SCA vulnerabilities from Qwiet so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SASTSCA

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

You need a bearer API token to enable Cycode to connect to your Qwiet AI instance.

**To generate the token**

1.  In Qwiet AI, go to **Settings** > **API Tokens** and click **Create new token**.
    
2.  Select the **API Integration** role.
    
3.  Copy the value of the token you generated.
    

## Connect Qwiet AI to Cycode [Copied!](#connect-qwiet-ai-to-cycode "Copy link to this section")

1.  Provide a name for the integration.
    
2.  Get the following parameters from Qwiet AI and apply them in the Cycode connector wizard.
    
    Parameter
    
    Value
    
    **API token**
    
    The bearer API token you generated above.
    
    **Organization ID**
    
    Your Qwiet AI organization ID.
    
    **Violation types**
    
    Select the type(s) of violations you want Cycode to retrieve.
    
3.  Click **Connect**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
