# GitHub | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/inventory/application-insights/non-human-identities-nhis/github

---

# GitHub

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/inventory/application-insights/non-human-identities-nhis/github.md "Edit this page")

Updated on Jan 20, 2026 • Published on Mar 6, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

When Cycode is integrated with GitHub, it retrieves the following information and maps it to Cycode entities. You can also see the listed additional fields when you open the card for a specific NHI.

## NHI card [Copied!](#nhi-card "Copy link to this section")

Entity

Description

NHI category (Context Intelligence Graph)

Additional data in NHI card

Fine-grained tokens

Scoped tokens with highly specific permissions for GitHub APIs, allowing precise access control. They expire and can be restricted to specific repositories or organizations.

Access Token

Provider IDCreator

Personal Access Tokens (PATs) - classic

Tokens with broad read and write access to all repositories and organizations a user can access. They lack expiration and cannot be scoped narrowly.

Access Token

Provider IDCreator

GitHub Third-Party Apps

External apps integrated with GitHub to access repositories, workflows, or organizational data. They authenticate via OAuth or app-specific tokens.

Third-Party Application

Developed byURLInstalled on all repositories

Deploy keys

SSH keys tied to a specific repository, enabling automation or deployment. They grant read or write access depending on their setup.

Access Token

CreatorSHA

Build workflow secrets

Credentials or sensitive data are securely stored for use in GitHub Actions workflows. These secrets are scoped to individual repositories or the entire organization.

Build Workflow Secret

N/A

### NHI card [Copied!](#nhi-card "Copy link to this section")

You can click a row in the NHI table to view additional details. The NHI card has three tabs.

#### Overview [Copied!](#overview "Copy link to this section")

This tab shows various useful details. The tiles at the top of tab show the following information:

*   Date the NHI was last used
    
*   When the NHI was created
    
*   How many resources the NHI can access
    
*   (Fine-grained and personal access tokens only) Whether the secret is still valid
    

Below the tiles are three areas that contain additional information.

### Fine-grained token and Personal access tokens (classic) [Copied!](#fine-grained-token-and-personal-access-tokens-classic "Copy link to this section")

**General info** The data shown in the General info section is based on the entity you are viewing. This is the information shown for GitHub fine-grained tokens.

Item

Description

Source

Where the NHI was found.

Type

Type of NHI (as it’s called in the source).

Description

Description of the NHI type.

Resource access

List of repositories and organizations that the NHI can access.

Permission scope

Provides information about the types of permissions and what they give access to.

**More info**

Item

Description

Provider ID

ID of the entity in GitHub.

Creator

The author of the code where the NHI was found.

SHA

Unique hash of the deploy key.

### Third-party app [Copied!](#third-party-app "Copy link to this section")

**General info** The data shown in the General info section is based on the entity you are viewing. This is the information shown for GitHub third-party apps.

Item

Description

SDLC Stage

_**what are the options?**_

Source

Where the NHI was found.

Type

Type of NHI (as it’s called in the source).

Description

Description of the NHI type.

Resource access

Lists the repositories and organizations that the NHI can access.

Permission scope

Provides information about the types of permissions and what they give access to.

**Third-party app info**

Item

Description

Developed by

The author of the code where the NHI was found.

URL

Path to the source code where the NHI was found.

Installed on all repositories

**Yes** or **No**.

### Deploy key [Copied!](#deploy-key "Copy link to this section")

**General info** The data shown in the General info section is based on the entity you are viewing. This is the information shown for GitHub deploy keys.

Item

Description

Source

Where the NHI was found.

Type

Type of NHI (as it’s called in the source).

Description

Description of the NHI type.

**More info**

Item

Description

Creator

The author of the code where the NHI was found.

SHA

Unique hash of the deploy key.

### Build workflow secret [Copied!](#build-workflow-secret "Copy link to this section")

**General info** The data shown in the General info section is based on the entity you are viewing. This is the information shown for GitHub build workflow secrets.

Item

Description

SDLC Stage

Build

Source

Where the NHI was found.

Type

Type of NHI (as it’s called in the source).

Description

Description of the NHI type.

Resource access

Lists the repositories and organizations that the NHI can access.

**Exposure/Correlation path**

The exposure path provides the context of the NHI through its correlation path, such as such as usage, dependencies, ownership, and resource access. You can see how the NHI was introduced, and what is exposed as a result.

#### Comments [Copied!](#comments "Copy link to this section")

Use the Comments tab to share insights and other information about this NHI with others in your organization.

#### Graph [Copied!](#graph "Copy link to this section")

The Graph tab shows a relationship graph where you can see how the NHI is utilized, and the point of exposure that creates the risk.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
