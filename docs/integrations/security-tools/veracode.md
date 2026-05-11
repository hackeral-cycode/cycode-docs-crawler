# Veracode | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/veracode

---

# Veracode

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/veracode.md "Edit this page")

Updated on May 13, 2025 • Published on Apr 6, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Veracode connector allows users to fetch SAST and SCA security findings directly from the Veracode API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SASTSCA

## Permissions [Copied!](#permissions "Copy link to this section")

The account associated with your API ID and secret key must have one of the following roles assigned.

Account type

Required role

API service account

**Results** API role.

User account

**Results** API or **Reviewer** role.

## Connect Veracode to Cycode [Copied!](#connect-veracode-to-cycode "Copy link to this section")

Get the following parameters from Veracode and apply them in the Cycode connector wizard.

Parameter

Value

**API key ID**

API key ID for using the Veracode API, generated with the secret key as described below.

**API secret**

To generate API credentials:  
1\. Sign in to the Veracode platform.  
2\. From the user account dropdown list, select **API Credentials**.  
3\. Select **Generate API Credentials**.  
4\. Copy the ID and secret key to a secure location.  
  
For more information, see the [Veracode docs](https://docs.veracode.com/r/c_api_credentials3#generate-api-credentials) .

**Region**

Supported values:  
• **com**(default)  
• **us**  
• **eu**

**Violation types**

Supported values:  
• **SCA**  
• **SAST**

Important

Veracode APIs and integrations require access to specific region domains. For more information, see the [Veracode docs](https://docs.veracode.com/r/Veracode_APIs) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
