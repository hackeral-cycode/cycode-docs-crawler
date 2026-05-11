# How to count active committers | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries/how-to-count-active-committers

---

# How to count active committers

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/how-to-count-active-committers.md "Edit this page")

Updated on Jan 20, 2026 • Published on Aug 1, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how to use a Context Intelligence Graph query to get the number of SCM active committers.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The Cycode member has an Owner or Admin role
*   Access to the Graph view

## Instructions [Copied!](#instructions "Copy link to this section")

Open the Context Intelligence Graph, click the query section and create the query below:  
![](/assets/image-345.png)

**Optional filters applied in query:**

*   `Commit` filtered for specific timeframe, using `Created` , `Since` Date
*   `Organization` filtered for specific Organization name, using `Name`, `Equals`

## Outcome [Copied!](#outcome "Copy link to this section")

The query results provide you wtih a list of users who are active commiters within a specific timeframe for a specific organization. You can now export this list to a CSV file or create a scheduled report by selecting **Save As > New Report**.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
