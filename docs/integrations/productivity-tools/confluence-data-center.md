# Confluence Data Center | Cycode Docs

Source: https://docs.cycode.com/integrations/productivity-tools/confluence-data-center

---

# Confluence Data Center

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/productivity-tools/confluence-data-center.md "Edit this page")

Updated on Feb 1, 2026 • Published on Apr 7, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can integrate Confluence Data Center with Cycode to scan for secrets that may have been posted in your Confluence spaces and pages.

Note

Cycode supports Confluence Data Center from v5.6.

## Permissions [Copied!](#permissions "Copy link to this section")

Permission

Why is access required?

View (for each integrated space)

Cycode scans only the spaces the user is authorized to view, along with their pages and search functionality on that space.

To use Cycode’s Confluence secrets scanning, the PAT (Personal Access Token) created by the user must have **View Space** permissions. This permission is required for the scanning process.

## Integrate Confluence Data Center with Cycode [Copied!](#integrate-confluence-data-center-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the **Productivity Tools** section, click **Confluence**.
    
3.  Sign in to the Confluence workspace you’re integrating with Cycode.
    
4.  Configure the following in the Cycode connection wizard:
    
    Item
    
    Description
    
    **Name**
    
    Type a meaningful name for the integration.
    
    **Personal Access Token**
    
    In Confluence, do the following:Click your user >**Settings** > **Personal Access Tokens**.Click **Create token**, and create the token.Copy the token and save it in a secure location.
    
    **Confluence Data Center URL**
    
    Get this URL from your IT department.
    
5.  If you’re using a Cycode Broker, select it from the **Broker** list.
    

## Integration details [Copied!](#integration-details "Copy link to this section")

### Scanning behavior [Copied!](#scanning-behavior "Copy link to this section")

#### Initial scan [Copied!](#initial-scan "Copy link to this section")

Upon integration, Cycode performs an initial scan of all existing spaces to identify secrets that were hardcoded before the integration.

#### Ongoing scans [Copied!](#ongoing-scans "Copy link to this section")

Cycode runs a scheduled scan every 90 minutes. The scanner only processes the delta (new and updated entities).

#### Scope [Copied!](#scope "Copy link to this section")

Cycode monitors for secrets in the following areas:

*   Pages and blogs, including:
    *   Content and titles
    *   Attachments (including text files, images, and binaries)
    *   Comments

### Violation data [Copied!](#violation-data "Copy link to this section")

When Cycode detects a secret in Confluence, it presents the details described in this section.

#### General information [Copied!](#general-information "Copy link to this section")

Item

Description

Author

The username of the person who introduced the secret.

Domain URL

The Confluence Data Center URL.

Space name

The name of the Confluence space.

Space URL

A direct link to the space where the secret was detected.

Detected at

The timestamp of when the secret was detected.

Introduced at

The timestamp of when the secret was introduced.

Secret tag

Cycode adds a **Found in Confluence** tag.

Page creator

The username of the person who created the page.

Blog creator

The username of the person who created the blog.

### Location-based information [Copied!](#location-based-information "Copy link to this section")

**Page or blog content or title**

Item

Description

Page or blog title

The title of the page or blog where the violation was detected.

Page or blog URL

A direct link to the page or blog.

Location type

Supported values:  
• **Page**  
• **Blog**

Location

Path to the page or blog in the format **Confluence** > **Domain URL** > **Space** > **Page/blog title** (with links).

**Secrets in comments**

Item

Description

Comment URL

A direct link to the comment where the violation was detected.

Location type

Supported values: **Comment**

Location

Path to the comment in the format **Confluence** > **Domain URL** > **Space** > **Page/blog title** > **Comment URL** (with links).

**Secrets in attachments**

Item

Description

File name

The name of the file.

File URL

A direct link to the affected file.

Location type

Supported values: **Attachment**

Tags

If found in an image: **Shared Image** tag.  
If found in a file: **Shared File** tag.  
If the file is binary: **Binary File** tag.

Location (if part of a comment)

Path to the comment in the format **Confluence** > **Domain URL** > **Space** > **Page/blog title** > **Comment URL** > **File name**.

Location (otherwise)

Path to the file in the format **Confluence** > **Domain URL** > **Space** > **Page/blog title** > **File name**.

### Limitations [Copied!](#limitations "Copy link to this section")

*   All spaces are scanned; selecting specific spaces is not supported.
    
*   Secret detection is limited to the locations specified in this topic.
    
*   Old versions scanning is not supported.
    
*   The **Exists in latest** tag isn’t applied when a secret is removed from page or blog content.
    
*   On-demand scanning is not supported.
    
*   Auto-resolution is not supported for:
    
    *   Secrets removed from pages, blogs, or comments, as they may still exist in the version history.
    *   Attachments containing secrets that were removed, as they may still be accessible in the version history.
    *   Deleting a Confluence entity (page, blog, comment, attachment) does not automatically resolve detected secrets within it. Manual review is still necessary.

## Scope a Cycode project to Confluence Data Center instances [Copied!](#scope-a-cycode-project-to-confluence-data-center-instances "Copy link to this section")

After Confluence Data Center is integrated, the connected instances are available as assets that you can include in the scope of a Cycode project. Adding instances to a project assigns the violations detected in them to that project, so the project members are responsible for remediating them.

To include Confluence Data Center instances in a project, follow the steps in [Create and configure a project](/cycode-projects/create-and-configure-a-project/) and select **Confluence Data Center** as the asset source in the **Scope** step.

## View Confluence data in Cycode [Copied!](#view-confluence-data-in-cycode "Copy link to this section")

There are multiple ways to filter the Violations view and see the Confluence data, so you can manage and resolve the violations that are detected. This section describes one way to access the data.

**To see Confluence data in Cycode**

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
