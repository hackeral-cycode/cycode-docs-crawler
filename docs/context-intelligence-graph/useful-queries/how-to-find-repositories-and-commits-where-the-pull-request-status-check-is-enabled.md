# How to find repositories and commits where the pull request status check is enabled | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries/how-to-find-repositories-and-commits-where-the-pull-request-status-check-is-enabled

---

# How to find repositories and commits where the pull request status check is enabled

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/how-to-find-repositories-and-commits-where-the-pull-request-status-check-is-enabled.md "Edit this page")

Updated on Jan 20, 2026 • Published on Sep 11, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how to get a list of organizations, repositories and commits integrated with ’s pull request (PR) status check, which will then help you to determine for which organizations and repositories Cycode’s PR scan is enabled.

In addition, the output of this query provides you with the list of the entities below:

*   Pull requests (PRs)
*   Users
*   Organizations (in addition, you can filter for a specific SCM provider such as GitHub)
*   Repositories
*   Commit ID and name

You can export the query output to a CSV file and remove duplicates to get a dedicated list of organizations and repositories that are integrated with ’s PR status check option enabled.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The member has an Owner or Admin role
*   Access to the Graph view
*   PR Settings enabled for the different scanners

## Instructions [Copied!](#instructions "Copy link to this section")

1.  Apply the query in the , as described below:  
    ![](/assets/image-498.png)
2.  Export the query output to a CSV file to remove duplications.  
    You can add additional columns to the query for better visibility.  
    ![](/assets/image-499.png)

Here’s an example of the data the query output provides:  
![](/assets/image-1731588894042.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
