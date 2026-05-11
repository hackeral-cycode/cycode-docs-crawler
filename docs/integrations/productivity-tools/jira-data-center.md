# Jira Data Center | Cycode Docs

Source: https://docs.cycode.com/integrations/productivity-tools/jira-data-center

---

# Jira Data Center

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/productivity-tools/jira-data-center.md "Edit this page")

Updated on Nov 9, 2025 • Published on Apr 7, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can integrate Cycode with Jira Data Center to scan for secrets that may have been posted in your Jira projects. Cycode scans for new secrets in Jira issues and comments in real time.

## Permissions [Copied!](#permissions "Copy link to this section")

### User access [Copied!](#user-access "Copy link to this section")

Permissions

Why is Access Required?

Can Create Tokens

In order to create a Personal Access Token, you must have permissions to create tokens in Jira.

To use Cycode Jira secrets scanning, the user creating the PAT (Personal Access Token) needs the “_Personal Access Token Management_” permission to generate the token and “_Browse Projects_” permission for the API to function correctly.

### Cycode access [Copied!](#cycode-access "Copy link to this section")

Permissions

Why is Access Required?

View (for each integrated space)

Cycode scans only the issues the user is authorized to view, along with their attachments and comments.

Browse Projects

In order to create a Personal Access Token, you must have permissions to create tokens in Jira.

## Integrate Jira Data Center with Cycode [Copied!](#integrate-jira-data-center-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the Productivity Tools section, click **Jira Data Center**.
    
3.  Sign in to Jira.
    
4.  Configure the following in the Cycode connection wizard:
    
    Item
    
    Description
    
    Name
    
    Type a meaningful name for the integration.
    
    Personal Access Token
    
    In Jira, do the following:Click your user > **Profile** > **Personal Access Tokens**.Click **Create token**, and create the token.Copy the token and save it in a secure location.
    
    Jira Data Center URL
    
    Get this URL from your IT department.
    
5.  If you’re using a Broker, select it from the **Broker** list.
    

## Integration details [Copied!](#integration-details "Copy link to this section")

### Scanning Behavior [Copied!](#scanning-behavior "Copy link to this section")

#### Initial Scan [Copied!](#initial-scan "Copy link to this section")

Upon integration, Cycode performs an initial scan of all existing projects to identify secrets that were hardcoded before the integration.

#### Ongoing Scans [Copied!](#ongoing-scans "Copy link to this section")

Cycode runs a scheduled scan every 90 minutes. The scanner only processes the delta (new and updated entities).

#### Scope [Copied!](#scope "Copy link to this section")

Cycode monitors for secrets in the following areas:

*   Issue content (descriptions, summaries, fields)
    
*   Comments
    
*   Attachments (text files, images, binaries)
    

### Violation data [Copied!](#violation-data "Copy link to this section")

When Cycode detects a secret in Jira, it presents the details described in this section.

#### General information [Copied!](#general-information "Copy link to this section")

Item

Description

Secret snippet

A snippet of the secret that was detected.

Author

The user who created the violation.

Author email

The email address of the author.

Domain URL

The Jira Data Center site URL.

Project Name

Name of the Jira project.

Project URL

Direct link to the Jira project.

Jira Issue Name

Issue key or title.

Jira Issue URL

Direct link to the Jira issue.

Detected At

The timestamp of when the secret was detected.

Detected At

The timestamp of when the secret was detected.

#### Location-based information [Copied!](#location-based-information "Copy link to this section")

**Secrets in issues**

Item

Description

Location type

Supported values:**Issue**

Tag

Cycode adds a **Found in Jira issue** tag.

Location

Path to the page or blog in the format **Jira Data Center**→**Domain URL**→**Project**(link) →**Issue** (link).

**Secrets in comments**

Item

Description

Comment URL

A direct link to the comment where the violation was detected.

Location type

Supported values:**Comment**

Tag

Cycode adds a **Found in Jira comment** tag.

Location

Path to the comment in the format **Jira Data Center**→**Domain URL**→**Project**(link) →**Issue**(link) →**Comment** (link).

**Secrets in attachments**

Item

Description

File name

The name of the file.

File URL

A direct link to the affected file.

Location type

Supported values:**Attachment**

Tags

If found in an image: **Shared Image** tagIf found in a file:**Shared File** tagIf the file is binary:**Binary File** tag

Location (if part of a comment)

Path to the comment in the format **Jira Data Center**→**Domain URL**→**Project**(link) →**Issue**(link) →**File** (link).

### Limitations [Copied!](#limitations "Copy link to this section")

*   All projects are scanned; selecting specific projects is not supported.
    
*   Secret detection is limited to the locations specified in this topic.
    
*   The “Exists in latest” tag is not applied when a secret is removed from a ticket through an edit.
    
*   On-demand scanning is not supported.
    
*   Auto-resolution is not supported for:
    
    *   Secrets removed from issues or comments, as they may still exist in the version history.
    *   Files containing secrets that were deleted, as they may still be retrievable in the version history.
    *   Deleting a Jira issue, comment, or attachment **does not automatically resolve** detected secrets within them. Manual review is still necessary.

## View Jira data in Cycode [Copied!](#view-jira-data-in-cycode "Copy link to this section")

There are multiple ways to filter the Violations view and see the Jira data, so you can manage and resolve the violations that are detected. **To test the integration and confirm that you can see the relevant data in Cycode**

1.  Type a secret or a password in a Jira ticket for a project that you have access to, and that is being scanned by Cycode.
    
2.  Go to the Violations page and filter the source for the Jira issue or **Found in Jira** label. You can also filter by **Source** = **Jira**.
    
    Note
    
    Cycode scans the Jira project every 90 minutes, so it may take up to that long for your change to appear.
    
3.  Find the secret or password that you added and choose an action: **Ignore** or **Resolve** (rotate/revoke the secret you entered).
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
