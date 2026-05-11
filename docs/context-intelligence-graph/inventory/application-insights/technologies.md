# Technologies | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/inventory/application-insights/technologies

---

# Technologies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/inventory/application-insights/technologies.md "Edit this page")

Updated on Feb 26, 2026 • Published on Dec 4, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Technologies view shows which tools are in use, their roles in the Software Development Lifecycle (SDLC), and help identify unauthorized “shadow tools” that may undermine security and compliance.

By mapping technology usage from development to deployment, Cycode highlights varying security and compliance needs, such as differences between an AI service used in the build phase and one in production. This enables your team to assess and address vulnerabilities or gaps across the entire SDLC.

### View the technologies [Copied!](#view-the-technologies "Copy link to this section")

The technologies table contains the following information about the tools that were detected in your organization.

Item

Description

Tool name

Name of the specific technology.

Locations

Identifies all the repositories and organizations where the technology is being used. The count is based on the number of **unique repositories**.

Evidence

Each icon in the column represents an instance of a Context Intelligence Graph entity that uses the technology Cycode discovered in your organization. Each SDLC stage is represented by a single entity. Hover over an icon to show the associated entity. To investigate all the related entities, explore the technology in the Context Intelligence Graph or the asset card.

You can filter the list by repository, organization, or other parameters as well as search by technology name.

To see details about a specific tool, click the row in the table to open the technologies card.

### View the tool details [Copied!](#view-the-tool-details "Copy link to this section")

#### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab includes the following information:

Item

Details

**Open violations**

\>Total number of violations detected in the tool repository.

**Labels**

Labels associated with this tool.

**Properties**

The name, category, description, and URL of the tool.

**Locations**

Shows all the repositories and organizations where the tool is being used. The count is based on the number of unique repositories.

**Evidence Path**

Shows the paths to the root locations using pre-built graph queries. Repositories, if they exist, are presented first. To see all the evidence paths, click **See All in graph**.

**JSON**

A list of all the subcategories of the tool in JSON format.

#### Locations tab [Copied!](#locations-tab "Copy link to this section")

The Locations tab is displayed only when Cycode has enough data to trace back to the root repositories that use the tool. When available, the Locations tab provides the following information:

Item

Description

Locations

Shows the path (location) where the tool is being used, in the following format: **Source** > **Organization** > **Repository**.

Evidence

Shows the evidence that indicates use of the tool. Click the evidence icon to view the Context Intelligence Graph entity. Only one item of evidence is shown for each repository.

Graph icon

To view all routes from the tool to the repository, click the **Graph** icon. The Graph view opens with the query to view all evidence for this entity type in the Context Intelligence Graph.

### Query about technologies in the Context Intelligence Graph [Copied!](#query-about-technologies-in-the-context-intelligence-graph "Copy link to this section")

You can query on the following information for technologies in the Context Intelligence Graph.

Item

Description

Category

The category of the tool. For example, **Security Tool**.

Subcategory

A list of subcategories. A tool can have more than one subcategory. For example, a Security Tool contains several subcategories, such as SAST/SCAs.

Locations

Identifies all the repositories and organizations where the tool is being used. The count is based on the number of unique repositories.The location is structured as **SCM** > **Organization** > **Repository**.

Evidence path

Displays the path to the root location of the evidence using pre-built graph queries. Repositories, if they exist, are shown at the top of the list.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
