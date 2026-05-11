# Repository code ownership | Cycode Docs

Source: https://docs.cycode.com/additional-cycode-features/repository-code-ownership

---

# Repository code ownership

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/additional-cycode-features/repository-code-ownership/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Oct 30, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Cycode developed the repository owner feature, which is designed to help identify and display the owners of each repository. This feature is designed to address situations where there is no mapping in the company that helps the AppSec to know who is responsible for a repository. This information is required for both the remediation process and ticket creation.

## Identifying and displaying repository owners [Copied!](#identifying-and-displaying-repository-owners "Copy link to this section")

The feature is designed to return a list of up to top **5** repository owners, i.e., the top “candidates” for repository owners based on the criteria detailed below.

Before we jump into explaining how to use this feature, it’s important to understand how repository ownership works.

### Who can be identified as a repository owner? [Copied!](#who-can-be-identified-as-a-repository-owner "Copy link to this section")

A repository owner can be simply an SCM user.

### What is the repository owner identification logic? [Copied!](#what-is-the-repository-owner-identification-logic "Copy link to this section")

To return the top 5 repository owners, Cycode determines the “owners’ decision part”, i.e., takes the top 5 matching users according to the following priority:

*   Admins who are the top 5 frequent committers who performed a commit between the last commit date in the repository and the year before (sorted by commit count)
    
*   Admins who performed a commit between the last commit date in the repository and the year before (sorted by commit count)
    
*   The most frequent committers who performed a commit between the last commit date in the repository and the year before (sorted by commit count)
    
*   Admins without commits
    

If Cycode doesn’t detect any user that matches the conditions above, the repository will be marked as “No owners identified.”

### What determines admin permissions? [Copied!](#what-determines-admin-permissions "Copy link to this section")

A user can have admin permissions through multiple ways.

#### Which way does Cycode consider the user an admin? [Copied!](#which-way-does-cycode-consider-the-user-an-admin "Copy link to this section")

*   As part of a team with admin permissions to a repository
    
*   By being assigned permissions to a repository
    

#### Which way does Cycode not consider the user an admin? [Copied!](#which-way-does-cycode-not-consider-the-user-an-admin "Copy link to this section")

In some cases, the user may be a member of a higher hierarchy with admin permissions. For example, if a user is assigned admin permission to an organization, they will get admin permission to **all the repositories** under this organization. In this case, however, Cycode doesn’t consider the user as a potential admin owner, and will ignore this type of permissions assignment.

### When does Cycode identify the repository owner? [Copied!](#when-does-cycode-identify-the-repository-owner "Copy link to this section")

As soon as you’ve integrated a new SCM, the initial scan begins, which means Cycode gathers the SCM data. Therefore, Cycode begins the repository owner identification 24 hours after integration is implemented.

### How does Cycode ensure that the owner’s identification is up-to-date? [Copied!](#how-does-cycode-ensure-that-the-owners-identification-is-up-to-date "Copy link to this section")

Cycode automatically re-identifies owners according to the following conditions:

*   **Events**:
    
    *   When user permissions are changed (Admin -> maintainer / Maintainer -> Admin / Maintainer -> Viewer, etc.)
    *   When a new repository is synced
*   **For new commits**: Scheduled identification once a day, just for repositories that were committed to in the last 24 hours
    
*   For each repository (or using multi-select), you can refresh the identification using a manual button. ![](/assets/repository-code-owners-image-msata3ze.png)
    
*   For each list, Cycode provides an indication of the “last identified as an owner at”.
    

### Which empty states are supported? [Copied!](#which-empty-states-are-supported "Copy link to this section")

Cycode supports three different empty states in the you can either refresh the owner list or add an owner manually using the edit button.

*   Cycode is still determining which of the users own the repository and will then display the results.
    
*   Cycode has identified any owner for the repository; you can add an owner manually using the edit button.
    

### Known limitations [Copied!](#known-limitations "Copy link to this section")

The following known limitations apply:

*   Cycode doesn’t sync repository permissions in Gerrit

**Next**:

*   [View the repository owners in the platform](/additional-cycode-features/repository-code-ownership/view-the-repository-owners-in-the-platform)
    
*   [Manually assign and remove a repository owner](/additional-cycode-features/repository-code-ownership/manually-assign-and-remove-a-repository-owner)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
