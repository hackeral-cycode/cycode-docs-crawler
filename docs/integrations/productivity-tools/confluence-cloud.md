# Confluence Cloud | Cycode Docs

Source: https://docs.cycode.com/integrations/productivity-tools/confluence-cloud

---

# Confluence Cloud

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/productivity-tools/confluence-cloud.md "Edit this page")

Updated on Feb 1, 2026 • Published on Feb 1, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can integrate Confluence Cloud with Cycode to scan for secrets that may have been posted in your Confluence spaces and pages.

## Permissions [Copied!](#permissions "Copy link to this section")

Permissions

Why is Access Required?

Read-only

Cycode scans only the spaces the user is authorized to view, along with their pages and Search functionality on that space.

## Integrate Confluence Cloud with Cycode [Copied!](#integrate-confluence-cloud-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the **Productivity Tools** section, click **Confluence**.
    
3.  Sign in to the Confluence workspace you’re integrating with Cycode.
    
4.  In the Confluence **Authorize for site** field, if there are multiple sites, select the site you’re authorizing and click **Accept**.
    
5.  In the Cycode > **Manage Organizations** dialog, select the organizations that Cycode should monitor for secrets and click **Apply**.
    
    Note
    
    if you’ve already integrated all the available organizations, there are no organizations to select.
    
    After you confirm the integration, the integrations area reloads and shows that Confluence is connected.
    

## View Confluence data in Cycode [Copied!](#view-confluence-data-in-cycode "Copy link to this section")

There are multiple ways to filter the Violations view and see the Confluence data, so you can manage and resolve the violations that are detected.

**To test the integration and confirm that you can see the relevant data in Cycode**

1.  Type a secret or a password in a Confluence space that is being scanned by Cycode.
    
2.  Go to the Violations page and filter the source for Confluence.
    
    Note
    
    Cycode scans the Confluence spaces and pages every 90 minutes, so it may take up to that long for your change to appear.
    
3.  Find the secret or password that you added and choose an action: **Ignore** or **Resolve** (rotate/revoke the secret you entered).
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
