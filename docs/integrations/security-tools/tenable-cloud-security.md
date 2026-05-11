# Tenable Cloud Security | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/tenable-cloud-security

---

# Tenable Cloud Security

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/tenable-cloud-security.md "Edit this page")

Updated on May 13, 2025 • Published on Sep 30, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Tenable Cloud Security enables you to pull container image vulnerabilities and correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The connector currently pulls container image vulnerabilities and deployed image context.

In addition to container image vulnerabilities, you can view deployed image context information. After you connect Tenable Cloud Security, you can filter for container security violations or images related to **Deployed** instances, as well as associated software violations such as SAST, SCA, and more.

For example: Go to **Violations** > **Container Security** and then click **Add Filter** > **Labels** > **Deployed**.

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The policy “Vulnerability Found in Container Image” must be enabled in Cycode.  
    ![](/assets/image%28536%29.png)
*   A valid API token with “Viewer” permissions.

## Setup [Copied!](#setup "Copy link to this section")

### Get an API token [Copied!](#get-an-api-token "Copy link to this section")

1.  Sign in to your Tenable Cloud Security console.
2.  In the left menu, go to **Settings > API > Add Token**.  
    ![](/assets/image%28535%29.png)
3.  Add an meaningful name for the new token. For example: “Cycode token”.
4.  Set a “Viewer” role for the token and click **Add Token**.
5.  Copy the newly-created token and store it somewhere safe.

### Get your region [Copied!](#get-your-region "Copy link to this section")

The easiest way to determine which API endpoint your tenant belongs to is by viewing the URL in your browser while you’re signed in to the Tenable Cloud Security console.

You can see the list of regions in the [Tenable docs](https://docs.ermetic.com/docs/api-get-started#list-of-endpoints) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
