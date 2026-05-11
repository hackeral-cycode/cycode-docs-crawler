# Jira Cloud | Cycode Docs

Source: https://docs.cycode.com/integrations/productivity-tools/jira-cloud

---

# Jira Cloud

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/productivity-tools/jira-cloud.md "Edit this page")

Updated on Dec 24, 2025 • Published on Dec 24, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can integrate Cycode with Jira Cloud to scan for secrets that may have been posted in your Jira projects. Cycode scans for new secrets in Jira issues and comments in real time.

## Permissions [Copied!](#permissions "Copy link to this section")

You’ll need to authorize Cycode to access Jira.

## Integrate Jira Cloud with Cycode [Copied!](#integrate-jira-cloud-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the Productivity Tools section, click **Jira Cloud Scanning**.
    
3.  Sign in to Jira. You are directed to the authorization page.
    
4.  From the list, select the Jira sites that Cycode should scan and click **Accept**.
    
    Note
    
    A Jira site can be integrated with only one Cycode tenant, as Jira webhooks can be configured for a single destination only.
    
5.  Click **Apply**.
    

## View Jira data in Cycode [Copied!](#view-jira-data-in-cycode "Copy link to this section")

When Cycode detects a secret, the secret key is determined using the following parameters:

*   Secret value
    
*   Issue key
    
*   Issue field
    

Note

During the initial scan, Cycode scans for secrets only in the latest version (not in the Issues history). Additionally, Cycode doesn’t scan attachments in the Jira tickets.

### Violation card [Copied!](#violation-card "Copy link to this section")

For violations found in Jira Cloud, the following fields are added to the violation card:

Item

Description

Domain URL

The URL of the Jira site.

Jira Project Name

The name of the Jira project where the violation was detected.

Jira Issue Name

The title of the Jira issue where the violation was detected.

Jira Issue URL

Link to the Jira issue where the violation was detected.

Jira Comment Url

URL to the comment in the Jira issue where the violation was detected.

### Out of scope [Copied!](#out-of-scope "Copy link to this section")

*   Auto-resolution is not supported for:
    *   Secrets removed from issues or comments, as they may still exist in the version history.
    *   Deleting a Jira issue or comment **does not automatically resolve** detected secrets within them. Manual review is still necessary.

## View Jira data in Cycode [Copied!](#view-jira-data-in-cycode-1 "Copy link to this section")

There are multiple ways to filter the Violations view and see the Jira data, so you can manage and resolve the violations that are detected.

**To test the integration and confirm that you can see the relevant data in Cycode**

1.  Type a secret or a password in a Jira ticket for a project that you have access to, and that is being scanned by Cycode.
    
2.  Go to the Violations page and filter the source for the Jira issue or **Found in Jira** label. You can also filter by **Source** = **Jira**.
    
3.  Find the secret or password that you added and choose an action: **Ignore** or **Resolve** (rotate/revoke the secret you entered).
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
