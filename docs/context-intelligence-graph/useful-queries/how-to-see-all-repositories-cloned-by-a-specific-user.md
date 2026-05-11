# How to see all repositories cloned by a specific user | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries/how-to-see-all-repositories-cloned-by-a-specific-user

---

# How to see all repositories cloned by a specific user

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/how-to-see-all-repositories-cloned-by-a-specific-user.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how to find the repositories that have been cloned by a specific user when you get a violation in the **Large percentage of repository downloaded or cloned** policy.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   User in Cycode has an Owner or Admin role
*   Access to the Graph view

## Instructions [Copied!](#instructions "Copy link to this section")

1.  In the Context Intelligence Graph, select click **Create Query**.
2.  Using the steps detailed in [this article](/context-intelligence-graph/build-queries-with-the-query-builder) , create the following query:  
    ![](https://files.readme.io/c17fb22-discovery_query_find_repo_clones_by_user.png)
3.  Under the **User** entity, add a filter for the username of the specific user you want to look at using the following steps:
    1.  Click the filter icon and select **Username**:  
        ![](https://files.readme.io/e457de6-add_username_filter.png)
    2.  Use the **Equals** option and enter the username of the specific user in the text field:  
        ![](https://files.readme.io/4e01aec-username_filter_info.png)

## Outcome [Copied!](#outcome "Copy link to this section")

This query generates a list of all the repositories cloned by the specified user. You can use [this article](/context-intelligence-graph/run-queries-from-the-query-library) to save this policy to your query library.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
