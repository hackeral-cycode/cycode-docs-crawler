# Virtual repositories | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/admin-settings/virtual-repositories

---

# Virtual repositories

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/admin-settings/virtual-repositories.md "Edit this page")

* * *

## Overview [Copied!](#overview "Copy link to this section")

Virtual repositories let you break a single repository into logical sub-units that behave like standalone assets across Cycode. This is useful for monorepos where multiple applications or services need to be secured and reported on independently.

Once defined, a virtual repository behaves like any other asset — you can filter on it, scope projects to it, and query it in the Context Intelligence Graph.

## When to use virtual repositories [Copied!](#when-to-use-virtual-repositories "Copy link to this section")

Use virtual repositories when a single repository contains code that you want to treat as separate assets. Common cases include:

*   Monorepos with multiple applications or services in distinct top-level folders.
    
*   Repositories owned by more than one team, where each team should only see its own violations and projects.
    

## Creating and managing virtual repositories [Copied!](#creating-and-managing-virtual-repositories "Copy link to this section")

Virtual repositories are managed from **Settings** > **Admin Settings** > **Virtual Repositories**. The page lists every repository that has been split into virtual repositories, the number of virtual repositories defined on each, and the total counts at the top.

From this page you can:

*   Search and filter the repository list.
    
*   Open any repository to view its virtual repositories, rename them, or delete them.
    
*   Create new virtual repositories on any repository.
    

Note

The path of an existing virtual repository can’t be edited. To change the path, delete the virtual repository and recreate it.

Changes are reflected immediately across Violations, Projects, the Context Intelligence Graph, and Reports.

### Creating a virtual repository [Copied!](#creating-a-virtual-repository "Copy link to this section")

Click **Create virtual repository**, select the source repository, and choose one of two creation methods:

#### Direct path definition [Copied!](#direct-path-definition "Copy link to this section")

*   Manually map a name and a folder path to define a single virtual repository.
    
*   Everything under that path becomes a standalone asset.
    
*   Use when you want fine-grained control over which folders become virtual repositories and how they are named.
    

#### Bulk directory detection [Copied!](#bulk-directory-detection "Copy link to this section")

*   Select a parent directory. Cycode automatically identifies each subfolder as a separate virtual repository, scoped to its respective subfolder.
    
*   Use for large monorepos where defining each module by hand would be tedious.
    
*   Review and adjust the detected results before saving.
    

## Filtering violations by virtual repository [Copied!](#filtering-violations-by-virtual-repository "Copy link to this section")

Filtering by virtual repository lets a team that owns a single module in a shared monorepo drill straight into its own violations without seeing the rest of the repository.

*   A **Virtual Repository** filter is available on the Violations page.
    
*   Open the filter to browse repositories, then expand any repository to see its virtual repositories with the violation count next to each one.
    
*   Select one or more virtual repositories to narrow the violations list to only those that belong to the chosen modules.
    

For more information about working with violations, go to [View and manage violations](/view-and-manage-violations) .

## Scoping projects to virtual repositories [Copied!](#scoping-projects-to-virtual-repositories "Copy link to this section")

Scoping a project to specific virtual repositories — instead of the whole parent repository — keeps each project focused on the code its owners actually care about. Violations, policies, and reports apply only to the selected modules, so different teams sharing a monorepo can run independent projects without seeing each other’s findings.

*   When creating or editing a Cycode project, virtual repositories appear alongside regular repositories in the asset picker.
    
*   Expand any repository in the **Select assets** list to see its virtual repositories, and select exactly the ones the project should cover.
    

For more information about projects, go to [Create and configure a project](/cycode-projects/create-and-configure-a-project) .

## Violations show their virtual repository [Copied!](#violations-show-their-virtual-repository "Copy link to this section")

Seeing the virtual repository on each violation gives you immediate context — you can tell which module a finding came from at a glance.

The **Found in** column on the violations table reflects the virtual repository a violation belongs to, when applicable.

## Querying virtual repositories in the Context Intelligence Graph [Copied!](#querying-virtual-repositories-in-the-context-intelligence-graph "Copy link to this section")

Virtual repositories are available as entities in the Context Intelligence Graph. You can:

*   Query them directly and traverse their relationships to parent repositories using the **Is Part Of** relationship.
    
*   Sort, limit, and export the results like any other Context Intelligence Graph query.
    

For more information, go to [Context Intelligence Graph](/context-intelligence-graph) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
