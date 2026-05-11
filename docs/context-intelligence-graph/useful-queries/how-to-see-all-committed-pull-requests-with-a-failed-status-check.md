# How to see all committed pull requests with a 'Failed' status check | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries/how-to-see-all-committed-pull-requests-with-a-failed-status-check

---

# How to see all committed pull requests with a 'Failed' status check

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/how-to-see-all-committed-pull-requests-with-a-failed-status-check.md "Edit this page")

Updated on Jan 20, 2026 • Published on May 5, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how to find the the list of the Committed Pull Requests with ‘Failed’ Cycode Status (scan) check.

The results of this query share the insights of which code owner merged failed status check Pull Request with potential sensitive data.

You can choose the type of the scanner you want to query. This example is for Secrets.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   User in Cycode has an Owner or Admin role
*   Access to the Graph view

## Instructions [Copied!](#instructions "Copy link to this section")

1.  Click the Graph tab to open the Context Intelligence Graph.
2.  In the Context Intelligence Graph, click **Library**.
3.  Click **Risk Best Practices**.
4.  Click the query **List of committed Pull Requests with status check ‘failed’ and code owner**.
5.  You can choose the type of the Scans filter from the following list by inserting the following in the query, under the **Status Check** entity >**Context** Equals **Cycode**

```
1
2
3
4
5
6
7
8
```

```text
Cycode: CI/CD
Cycode: IaC
Cycode: Licenses
Cycode: Licenses Compliance
Cycode: SAST
Cycode: SCA
Cycode: Secrets
Cycode: Vulnerable Dependencies
```

![](/assets/image-94.png)

## Outcome [Copied!](#outcome "Copy link to this section")

This query generates a list of all the Pull Requests and Commits tied to specified user (code owner) per type of scanner.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
