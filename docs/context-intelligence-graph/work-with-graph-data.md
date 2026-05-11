# Work with Graph data | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/work-with-graph-data

---

# Work with Graph data

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/work-with-graph-data.md "Edit this page")

Updated on Feb 23, 2026 • Published on Feb 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Context Intelligence Graph models your SDLC as a graph of **entities**(nodes) connected by **relationships** (edges). Understanding how entities relate to each other is key to building meaningful queries and getting value from the Context Intelligence Graph.

This topic explains the main entity categories, how they connect, and how to navigate and manage your data after you have query results.

## Entity categories [Copied!](#entity-categories "Copy link to this section")

Entities are the building blocks of every Graph query, and represent real objects in your SDLC. Entities are represented as nodes in the Context Intelligence Graph.

Category

Example entities

**Code**

Repository, commit, pull request, branch, tag

**Builds**

Build workflow, build workflow job, build workflow run

**Artifacts**

Container image, container repository, container registry

**Cloud**

Kubernetes pod, cloud resource

**Dependencies**

Code project, code dependency, package vulnerability

**People**

User, organization, team

**Risk**

Violation, hardcoded secret, status check

## Graph edges between entities [Copied!](#graph-edges-between-entities "Copy link to this section")

Graph edges, or relationships, between entities reflect real dependencies in your environment. For example:

*   A **Repository** contains **Commits**, which are part of **Pull Requests**
    
*   A **Build Workflow Run** produces a **Container Image**, which is deployed as a **Kubernetes Pod**
    
*   A **Code Dependency** may be associated with a **Package Vulnerability**
    

When you build a query in the Context Intelligence Graph, each connection you add between entities follows these real-world relationships. You can visualize nodes and edges at any time in Graph view.

## View and manage query results [Copied!](#view-and-manage-query-results "Copy link to this section")

### Table view (default) [Copied!](#table-view-default "Copy link to this section")

Query results are displayed in a table with default columns, based on the entities that were selected. You can do the following to explore and analyze the results:

*   Add or remove columns using the column picker
    
*   Click any row to open the entity’s asset card
    
*   Filter inline by hovering over a cell value and selecting either **Filter for value**(include) or **Filter out value** (exclude)
    
*   Select rows and apply labels for grouping and reporting
    
*   Export results to CSV, JSON, or PDF
    

### Graph view [Copied!](#graph-view "Copy link to this section")

Use Graph view to visualize the edges between entities, which show how they are connected. You can do the following in graph view:

*   Click any node to open the entity’s asset card
    
*   Toggle between linear and radial layout
    
*   Toggle entity types or connection types on or off to reduce visual noise
    

### Asset card [Copied!](#asset-card "Copy link to this section")

The asset card shows details for a specific entity. For information about the details available in an asset card, go to the topic that describes the card for that entity.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
