# How to track CI build stages for a specific repository | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries/how-to-track-ci-build-stages-for-a-specific-repository

---

# How to track CI build stages for a specific repository

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/how-to-track-ci-build-stages-for-a-specific-repository.md "Edit this page")

Updated on Jan 20, 2026 • Published on Aug 4, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how to track CI build workflow stages, for example `GitHub Actions` or `GitLab Stages`.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The Cycode member has an Owner or Admin role
*   Access to the Graph view

## Instructions [Copied!](#instructions "Copy link to this section")

1.  Use the Context Intelligence Graph query with the `Build Workflow Job` entity to see all the build processes.
2.  If you want to filter on a specific CI stage, you can filter the names of all the jobs that are under the entity at this stage.  
    For example, you can find all the jobs being run in a specific workflow run:  
    ![](/assets/image-348.png)

Let’s take this build workflow as an example:  
![](/assets/image-349.png)

You can see that under the stage `test`, there are two jobs in the graph. Let’s filter for those two jobs to get the stage.

Tip

You can create a saved query in the query library to use this query structure in the future.

**Query:**  
![](/assets/image-352.png)

**Query Results:**  
![](/assets/image-353.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
