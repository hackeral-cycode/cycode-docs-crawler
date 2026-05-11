# Context Intelligence Graph | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph

---

# Context Intelligence Graph

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/_index.md "Edit this page")

Updated on Feb 23, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Graph view enables you to correlate data across your entire software development lifecycle (SDLC) using the Context Intelligence Graph, extending the scope of Cycode’s protection. You can use pre-defined queries to view related data across your integrations and to create custom policies. You can also query entities such as repositories and container images, or build a custom query using the query builder (for more advanced users).

### Context Intelligence Graph [Copied!](#context-intelligence-graph "Copy link to this section")

The Context Intelligence Graph helps you connect and correlate alerts across your entire SDLC. It allows you to filter the noise so that you can focus on the vulnerabilities that matter the most.

With the Context Intelligence Graph, you can automatically generate comprehensive context for each identified vulnerability, eliminating false positives and prioritizing alerts. Because the Context Intelligence Graph allows you to see the broader organizational impact of recently discovered vulnerabilities, you can quickly understand their complete exposure path and react to emerging threats. Furthermore, taking action on alerts is easy because the Context Intelligence Graph allows you to tie vulnerabilities back to their owners so they have the context they need to remediate it.

## Context Intelligence Graph users [Copied!](#context-intelligence-graph-users "Copy link to this section")

The Context Intelligence Graph is designed to address two main types of users.

### Standard users [Copied!](#standard-users "Copy link to this section")

Standard users are members who want to review the list of assets in a table. For this use case, you can select from a list of existing entities and obtain the information you need. You can also access saved queries from the query library.

Predefined entities include components related to code, builds, artifacts, cloud, dependencies, and risk, which address the main use cases for most users. You can also use the predefined queries in the library.

### Advanced users [Copied!](#advanced-users "Copy link to this section")

Advanced users are members who want to create customized queries that contain not only entities but their associations and connections. To create these queries, use the query builder or select an existing query from the library and modify it.

The advanced options are designed for users who aren’t able to find the information they want through the platform, or who are looking for specific data. The Context Intelligence Graph’s advanced options enable you to segment data in a way that’s completely customizable to your needs and requirements. Therefore, if you know which data you are looking for, you can create a table or graph that provides the information you need or discover information that you’re not sure exists or that may not be externalized.

Advanced users can do the following:

*   Apply filters: Available for advanced queries only, and are used to support query building.
    
*   Add cross-query tables.
    
*   Switch from standard queries to advanced queries: This is a one-way process. If you switch to a standard query from an advanced query, the Context Intelligence Graph clears the data and shows the default standard query.
    

## Query your data in the Context Intelligence Graph [Copied!](#query-your-data-in-the-context-intelligence-graph "Copy link to this section")

You can use the following options to analyze the data in your environment:

*   [Library](/context-intelligence-graph/run-queries-from-the-query-library/) : Select a pre-defined query from Cycode’s query library.
    
*   Query Builder: Tailor your search to your specific needs by creating a custom query.
    

## Common tasks [Copied!](#common-tasks "Copy link to this section")

The following table lists some common tasks that you may want to perform on your data to find specific information, or to refine the policies that the Cycode scanners use to detect violations.

Task

Description

[Use the query builder](/context-intelligence-graph/build-queries-with-the-query-builder)

Build queries to answer specific security questions across your SDLC.

[Query with natural language](/context-intelligence-graph/query-using-natural-language)

Explore the Context Intelligence Graph using plain-language questions powered by AI.

[Create a custom policy](/context-intelligence-graph/create-a-custom-policy-from-a-query)

Turn a Context Intelligence Graph query into a policy to detect violations more effectively in your environment.

[Manage Graph data](/context-intelligence-graph/work-with-graph-data)

Understand how entities relate to each other and how to navigate the results

Note

Currently, you can’t change the Context Intelligence Graph column names or the column names for the exported file.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
