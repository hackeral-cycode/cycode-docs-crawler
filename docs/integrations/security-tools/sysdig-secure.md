# Sysdig Secure | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/sysdig-secure

---

# Sysdig Secure

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/sysdig-secure.md "Edit this page")

Updated on May 13, 2025 • Published on Oct 8, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Sysdig Secure enables you to pull container image vulnerabilities from Sysdig Secure and correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The connector currently pulls only container image vulnerabilities.

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

The policy “Vulnerability Found in Container Image” should be enabled.

![](/assets/image%28625%29.png)

## Permissions [Copied!](#permissions "Copy link to this section")

Permissions

Access

Vulnerability Management

Read Only

## Setup [Copied!](#setup "Copy link to this section")

### Get an API access token [Copied!](#get-an-api-access-token "Copy link to this section")

1.  Sign in to the Sysdig Secure console.
2.  In the bottom-left corner, **click your profile** and then go to **Sysdig API Token**.  
    ![](/assets/image%28541%29.png)
3.  Under **Sysdig Secure API**, copy the token and store it somewhere safe.  
    ![](/assets/image%28542%29.png)

Note

When resetting a token, it becomes invalid immediately, so you’ll to need to use the newly-issued token to access the Sysdig Secure API.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
