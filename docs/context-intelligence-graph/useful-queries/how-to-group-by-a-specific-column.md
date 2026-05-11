# How to group by a specific column | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries/how-to-group-by-a-specific-column

---

# How to group by a specific column

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/how-to-group-by-a-specific-column.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Context Intelligence Graph allows you to group data by a specific column.

Note

when grouping by, for example, a secret value while using aggregated data, the aggregation occurs in the background so you have to to reverse the order of hardcoded secrets and violations.

This is because the page applies the Group By filter to the first entity in the query. You need at least two entities to use the Aggregated Data feature, because we’re aggregating data to the first entity used in the query.

## Example [Copied!](#example "Copy link to this section")

In the following example, we want to get the number of violations for each detected secret that Cycode has found. To do this, we first create the query to start with the Hardcode Secret entity, then we connect it to the Violation entity. When we add (toggle on) the Aggregated Query option, this groups the count of violations for each secret that was found.

![](/assets/9790783-image.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
