# Useful queries | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/useful-queries

---

# Useful queries

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/useful-queries/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This section contains articles covering useful Context Intelligence Graph queries.

### Sample Context Intelligence Graph queries [Copied!](#sample-context-intelligence-graph-queries "Copy link to this section")

**Q:** How can I map packages with a low package health score? **A:** You can use the Context Intelligence Graph to assist you get the list of considered low health packages (using our SCA scanner) with two options:

1.  **Score based query:** Using the Out-Of-The-Box Discovery query **Provide a list of the low health packages used by each repository**, This query is based on **low health score**. The calculation involves low maintenance score and additional factors as well.

This query can be found in **Graph** > **Library** > **SCA**

2.  **Package update date based query:** Using a custom Context Intelligence Graph query as displayed in the screenshot below, this query based on **Available Versions Latest Stable Version Date**, in the example below, you can see the query configured to display all repositories containing packages that didn’t received update in the last 1 Year (366 days)

**Q:** How do I get a list of repository labels associated with a Context Intelligence Graph project? **A:** Context Intelligence Graph labels the integrated assets, for example repositories. A Cycode project, for example, can’t be labeled because it’s not an asset. Use the query below to get a list of repositories that have labels and are associated with a Cycode project. In the example query below, the result is filtered on a specific project name:

**Q:** How can I find the leak violations that Cycode detected for users who aren’t part of your integrated IdP? **A:** Use the connection between **Potential Leak** and **Violation** that is not **Associated with** the **Users**.

**Q:** How can find I the leak violations that Cycode detected for users who were part of my integrated organization (IdP) and is no longer in my organization (IdP)? **A:** Use the connection between **Potential Leak** and **Violation** to **User**(where **Affiliation** is **Contributor**) that is part of the **Organization**.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
