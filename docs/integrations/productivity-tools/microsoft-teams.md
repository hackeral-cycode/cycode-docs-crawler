# Microsoft Teams | Cycode Docs

Source: https://docs.cycode.com/integrations/productivity-tools/microsoft-teams

---

# Microsoft Teams

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/productivity-tools/microsoft-teams.md "Edit this page")

Updated on May 21, 2025 • Published on Sep 18, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Microsoft Teams with Cycode enables scanning for secrets that may have been posted in your shared public Teams workspace channels, including shared external channels. After successfully integrating, you can organize and track relevant information for your Microsoft Teams integration.

Each new integration is done per Microsoft 365 tenant. After the integration is complete, all the public Teams instances in the tenant are synced. For each Teams instance, all standard and shared channels are synced.

Note

Cycode Microsoft Teams alerting and secret scanning use Microsoft Entra ID (Azure AD) app registrations and Microsoft Graph API webhooks — not Office 365 Connectors. The retirement of Office 365 Connectors does not affect this integration. For Teams alerting destinations that previously relied on Office 365 incoming webhooks, use the Microsoft Workflows-based webhook flow.

The Microsoft Teams integration operates at the tenant scope and requires access to all site collections; per-team or per-site scoping is not currently available. This applies to Teams alerting, Teams secret scanning, and the related SharePoint integration.

The content of Microsoft Teams alerts sent by Cycode is not currently customizable per customer; fields cannot be added or removed from the alert message.

## Permissions [Copied!](#permissions "Copy link to this section")

### User [Copied!](#user "Copy link to this section")

The entity that creates the Microsoft Teams integration must be able to provision and approve the registration of the Cycode application and activate its permissions, as part of deploying Cycode within your Entra ID tenant.

Ensure that the user or service account or service has an administrator role assigned for the Entra ID tenant.

### Cycode [Copied!](#cycode "Copy link to this section")

Cycode requires the access described below.

Required permission

Why is access required?

Read only

*   Teams
*   Channel names and descriptions
*   Channel messages
*   Files
*   Basic organizational profiles

## Integrate Microsoft Teams with Cycode [Copied!](#integrate-microsoft-teams-with-cycode "Copy link to this section")

1.  Go to **Settings** > **Integrations** and click **Add Integration**.
    
2.  In the Productivity Tools section, click **Microsoft Teams Scanning**.
    
3.  Enter the Microsoft Teams tenant ID (for more information, see the [Microsoft Teams docs](https://learn.microsoft.com/en-us/sharepoint/find-your-office-365-tenant-id) ).
    
4.  Click **Accept** to allow the Cycode Security app to access your Teams workspace and provide it with certain view and action rights. ![](/assets/microsoft-teams-scanning-image-zb61ouak.png)
    

After you confirm the integration, the integrations area reloads and shows that Microsoft Teams is connected.

## What does Cycode scan? [Copied!](#what-does-cycode-scan "Copy link to this section")

Cycode scans the following:

*   Public content, which includes shared and standard Teams channels. Violations that are detected contain the tag **Public channel**.
    
*   Channel messages and files (text and binaries).
    

### Test the integration [Copied!](#test-the-integration "Copy link to this section")

Below is an example of how Cycode scans for secrets in public Teams channels:

1.  Enter a secret/password in your public channel in the workspace you connected.
    
2.  Go to the Violations page and filter on **Secret Tag** > **Found in Teams**. You should see your Teams violations, including the one generated from step 1. After the secret has been reviewed and handled, choose an action: **Ignore** or **Resolve** (rotate/revoke the secret you entered).
    

Here’s an example of a secret violation card with a detected secret: ![](/assets/microsoft-teams-scanning-image-8dcxeinp.png)

### Automatic resolution [Copied!](#automatic-resolution "Copy link to this section")

In any message or reply that contains a secret, if Cycode detects that the secret was removed, the associated violation is automatically resolved.

## FAQs [Copied!](#faqs "Copy link to this section")

#### What Teams content gets scanned in Cycode? [Copied!](#what-teams-content-gets-scanned-in-cycode "Copy link to this section")

The initial scan following integration scans the entire message history. After that, Cycode uses events to detect new/removed secrets in real time.

#### What Teams content doesn’t get scanned? [Copied!](#what-teams-content-doesnt-get-scanned "Copy link to this section")

Cycode doesn’t scan for secrets in the following private areas:

*   Chats - including one-on-one chats, group chats, meeting chats
    
*   Private teams
    
*   Private channels
    

Cycode also doesn’t scan for secrets in images.

#### How does Cycode handle tags? [Copied!](#how-does-cycode-handle-tags "Copy link to this section")

Tags are handled as follows:

*   **Exists in latest** tag - currently refers to code assets and doesn’t apply here.
    
*   **Publicly exposed** tag - this tag is not relevant because in Microsoft Teams, channels themselves can’t be set to “public” in the traditional sense where anyone on the internet can access them.
    

#### What happens when I click on the file URL for the detected secret? [Copied!](#what-happens-when-i-click-on-the-file-url-for-the-detected-secret "Copy link to this section")

When a secret is a detected in a file, clicking the File URL field will take you to the file (not to the message itself).

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
