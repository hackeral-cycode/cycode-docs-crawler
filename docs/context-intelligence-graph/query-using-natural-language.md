# Query using natural language | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/query-using-natural-language

---

# Query using natural language

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/query-using-natural-language.md "Edit this page")

Updated on Feb 23, 2026 • Published on Feb 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Context Intelligence Graph includes an AI-powered natural language interface that lets you explore your SDLC data by asking questions in plain English without needing to know entity names, relationships, or query syntax.

Instead of building a query manually, you can describe what you want to find in conversational English, and the Context Intelligence Graph translates your question into a structured query.

Note

This feature is continuously improving. If a query doesn’t return exactly what you expected, refine your question or adjust the generated query manually in the query editor. Use the thumbs up/down feedback to help improve accuracy.

### Privacy and data security [Copied!](#privacy-and-data-security "Copy link to this section")

Cycode guarantees

This means

Data isolation

Queries are processed on your own AWS-managed servers.

No sharing

Query data is never shared with third parties.

No training

Your data isn’t used to train or improve AI models.

Customer isolation

Cycode customers are fully isolated from each other.

### How it works [Copied!](#how-it-works "Copy link to this section")

The AI engine has the full context of the Context Intelligence Graph schema, namely all the entity types, their attributes, and how they connect. When you ask a question, the Graph generates the equivalent structured query and runs it against your data. Your data stays private, as queries are processed on your AWS servers and are never shared or used to train external AI models.

## Create a natural language query [Copied!](#create-a-natural-language-query "Copy link to this section")

1.  Go to the **Graph** view.
    
2.  In the **Ask Me Anything** field, type your question in natural language.
    
3.  Click the arrow or press **Enter** to run the query.
    
4.  After the results load, click the query to view its details.
    

You can switch between the **Table** and **Graph** views to explore the results.

### Example queries [Copied!](#example-queries "Copy link to this section")

You can use the following statements to generate initial results in the Context Intelligence Graph:

*   All public repositories
    
*   Signed attestations connected to a pod
    
*   Project assets with critical violations
    
*   High Business Impact (HBI) projects with critical violations
    

### Tips for better queries [Copied!](#tips-for-better-queries "Copy link to this section")

Natural language queries work best when they are specific. Include entity names and their connections in your question to help the Context Intelligence Graph generate more accurate results.

Instead of this

Try this

Show me risky stuff

Show all repositories with critical violations

Find old packages

Find code dependencies with no updates in the last 365 days

Who cloned things?

Show all repositories cloned by a specific user in the last 30 days

## Limitations [Copied!](#limitations "Copy link to this section")

The natural language functionality has the following limitations:

*   The AI may not always answer your request directly. When this happens, adjust the generated query in the query editor.
    
*   You can’t currently rename column headers in the Context Intelligence Graph or in exported files.
    
*   For complex multi-entity queries, the [query builder](/context-intelligence-graph/build-queries-with-the-query-builder) may give more precise control.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
