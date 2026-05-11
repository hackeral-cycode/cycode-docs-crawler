# Microsoft SharePoint Online | Cycode Docs

Source: https://docs.cycode.com/integrations/productivity-tools/microsoft-sharepoint-online

---

# Microsoft SharePoint Online

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/productivity-tools/microsoft-sharepoint-online.md "Edit this page")

Updated on Nov 9, 2025 • Published on Apr 8, 2025

* * *

You can integrate Microsoft SharePoint Online with Cycode to scan for secrets in files stored across SharePoint document libraries, so that your organization can remediate risks before they are exploited.

## Permissions [Copied!](#permissions "Copy link to this section")

### User [Copied!](#user "Copy link to this section")

The entity that creates the Microsoft SharePoint Online integration must be able to provision and approve the registration of the Cycode application and activate its permissions, as part of deploying Cycode within your Entra ID tenant.

Ensure that the user or service account or service has one of the following roles assigned for the Entra ID tenant:

*   Application administrator
    
*   Global administrator
    

### Cycode [Copied!](#cycode "Copy link to this section")

Cycode uses only the read-only permissions listed below.

Permissions

Why is Access Required?

Read organization information

Cycode scans only the sites and libraries that the user is authorized to view.

Read items in all site collections

Cycode scans only the sites and libraries that the user is authorized to view.

Sign in and read user profile

Cycode scans only the sites and libraries that the user is authorized to view.

## Integrate Microsoft SharePoint Online with Cycode [Copied!](#integrate-microsoft-sharepoint-online-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the Productivity Tools section, click **Microsoft SharePoint**.
    
3.  Sign in to Microsoft SharePoint.
    
4.  Configure the following in the Cycode connection wizard:
    
    Item
    
    Description
    
    Tenant ID
    
    Follow the instructions in the [Microsoft SharePoint docs](https://learn.microsoft.com/en-us/sharepoint/find-your-office-365-tenant-id) to find and copy your tenant ID.
    
5.  Click **Accept** in the dialog that’s displayed.
    

After you confirm the integration, the integrations area reloads and shows that Microsoft SharePoint is connected.

## Integration details [Copied!](#integration-details "Copy link to this section")

### Scanning Behavior [Copied!](#scanning-behavior "Copy link to this section")

#### Initial Scan [Copied!](#initial-scan "Copy link to this section")

Upon integration, Cycode performs an initial scan of all existing sites and document libraries to identify secrets that were hardcoded before the integration.

**Historical scanning**: The initial scan covers data from up to **three months prior to the integration.**

#### Ongoing Scans [Copied!](#ongoing-scans "Copy link to this section")

Cycode runs a scheduled scan every 90 minutes. The scanner only processes the delta (new and updated entities).

#### Scope [Copied!](#scope "Copy link to this section")

Cycode monitors for secrets as follows.

**General**

*   Document libraries across all sites within the connected SharePoint tenant
    
*   Each file’s content is scanned (metadata is excluded)
    

**Detailed**

*   Site collections: All are scanned
    
*   Sites: All site types (Teams, Communication, Hub, etc.)
    
*   Libraries: Only document libraries
    
*   Files: Content only (no metadata columns)
    

**Supported file types**

*   Word - for example, .docx
    
*   Excel - for example, .xlsx
    
*   PowerPoint - for example, .pptx
    
*   Images - .png, .jpg, .jpeg
    

**General file types**

*   Text files
    
*   Binary files (including zipped files)
    

### Violation data [Copied!](#violation-data "Copy link to this section")

When Cycode detects a secret in Microsoft SharePoint Online, it presents the details described in this section.

#### General information [Copied!](#general-information "Copy link to this section")

Item

Description

Collection

The name of the site collection.

Root Collection URL

The site collection URL.

Collection

The name of the site.

Collection URL

A direct link to the site where the secret was detected.

Library Name

Name of the document library where the secret was detected.

Library Type

Type of library, for example document or picture.

Library Link

Link to the library where the secret was detected.

File Name

Name of the file where the secret was detected.

File Path

Folder path to the file where the secret was detected.

File URL

A direct link to the file where the secret was detected.

File Type

File extension.

Last Modified By

User that last modified the file where the secret was detected.

Last Modified

Time and date that the file was last modified.

### Limitations [Copied!](#limitations "Copy link to this section")

*   All spaces are scanned; selecting specific spaces is not supported.
    
*   Secret detection is limited to the locations specified in this topic.
    
*   The **Exists in latest** tag is not supported for non-SCM providers, including Confluence.
    
*   On-demand scanning is not supported.
    
*   Auto-resolution is not supported for:
    
    *   Secrets removed from pages, blogs, or comments, as they may still exist in the version history.
    *   Attachments containing secrets that were removed, as they may still be accessible in the version history.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
