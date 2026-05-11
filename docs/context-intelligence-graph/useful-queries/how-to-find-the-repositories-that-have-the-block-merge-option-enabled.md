# How to find the repositories that have the 'Block Merge' option enabled | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries/how-to-find-the-repositories-that-have-the-block-merge-option-enabled

---

# How to find the repositories that have the 'Block Merge' option enabled

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/how-to-find-the-repositories-that-have-the-block-merge-option-enabled.md "Edit this page")

Updated on Jan 20, 2026 • Published on Sep 11, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how to get a list of repositories integrated with Cycode that have the **Block merge** option enabled (and the **PR Scan status check** enabled).

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The Cycode member has an Owner or Admin role
*   Access to the Graph view
*   PR Settings enabled for the different Cycode scanners
*   **Block merge** option enabled in the SCM repository

Note

**Cycode** supports block merge scanning for the following SCMs:

*   GitHub
*   GitLab (requires the “Ultimate” package for block merge support)
*   Azure DevOps
*   Azure DevOps Server

## Instructions [Copied!](#instructions "Copy link to this section")

1.  Go to the Context Intelligence Graph and insert the query as described below (**note that the query is filtered for the default branch**):  
    ![](/assets/image-501.png)
2.  Export the query output to a CSV file to remove duplications.  
    You can add additional columns to the query for better visibility, i.e., **Repository > Source > GitHub**.

Here’s an example of the query output:  
![](/assets/image-502.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
