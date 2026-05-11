# Build queries with the query builder | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/build-queries-with-the-query-builder

---

# Build queries with the query builder

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/build-queries-with-the-query-builder.md "Edit this page")

Updated on Feb 23, 2026 • Published on Feb 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The query builder lets you build custom queries to answer specific security questions across your SDLC, when the information you need isn’t available in a dashboard, widget, or predefined entity view.

We recommend starting by querying on a single entity, and progressively connecting entities to explore relationships, filter results, and focus on exactly the data you need. This makes it easier to see how each addition changes the result set. Use the **Library** as inspiration — select a predefined query close to what you need, then modify it rather than starting from scratch.

## Build a query [Copied!](#build-a-query "Copy link to this section")

1.  In the Context Intelligence Graph, click in the **Create Query** field. A list of all available entities appears, organized by category.
    
2.  Browse the categories or start typing an entity name to filter the list.
    
3.  Select an entity. Context Intelligence Graph immediately shows all matching data in a table.
    
4.  To extend the query, connect additional entities:
    
    *   Click **+** next to the current entity to add a related entity.
    *   The connection between entities represents a relationship in your SDLC (for example, a repository connected to a commit, connected to a pull request).
5.  Refine the results using filters:
    
    *   Hover over an entity to show the filter icon.
    *   Click the filter icon to add attribute-level filters (for example, `Name = my-repo`, `Risk Score > 95`).

You can toggle between **Table**and**Graph** view to inspect rows of data or visualize how entities connect.

Note

Switching from an advanced (custom) query back to a standard query clears the query and restores the default standard view. This is a one-way action.

### Refine your query [Copied!](#refine-your-query "Copy link to this section")

After you create an initial query, you can adjust and refine it as necessary to achieve the desired results.

To…

Do this

View entity details

Click a row to open the asset card.

Include or exclude a value

Hover over a cell and select **Filter for value**or**Filter out value**.

Add or remove columns

Use the column picker in the table header.

Apply labels

Select one or more rows and apply labels.

Share query data

Export the query results to a CSV or JSON file.

### Save or copy your query [Copied!](#save-or-copy-your-query "Copy link to this section")

1.  To save your query, in the menu bar click the **Save as** icon and select one of the following options:
    
    Option
    
    Description
    
    **New query**
    
    Saves your query to the query library where it can be shared with other members in your tenant. For more information, go to [Create and manage custom queries](/context-intelligence-graph/run-queries-from-the-query-library) .
    
    **New report**
    
    Saves your query as a report so you can schedule it to share results on a regular basis. For more information, go to [Generate a report](/additional-cycode-features/generate-a-report) .
    
    **New policy**
    
    Save your query as a custom policy to refine the results that Cycode displays. For more information, go to [Create a custom policy](/context-intelligence-graph/create-a-custom-policy-from-a-query) .
    
2.  To copy your query, in the menu bar click the **Copy query** icon and select one of the following options:
    
    Option
    
    Description
    
    **Clipboard**
    
    Copies your query in full to your local so you can paste in the tool of your choice.
    
    **CURL**
    
    Copies your query as a CURL so you can share or run the query programmatically.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
