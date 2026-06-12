# Understanding 'Group By' views | Cycode Docs

Source: https://docs.cycode.com/view-and-manage-violations/understanding-group-by-views

---

# Understanding 'Group By' views

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/view-and-manage-violations/understanding-group-by-views.md "Edit this page")

Updated on Jun 3, 2026 • Published on Mar 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s ‘Group By’ views (excluding Group By ‘None’) are now powered by an analytical engine to provide a more scalable and powerful way to explore violation data.

In these grouped views, the entire page is served from the same analytics engine: the violations table, the widgets above it, and the filters all draw from one analytics-oriented data layer. This keeps the numbers consistent across the table, widgets, and filters, and gives you a more scalable way to explore large volumes of findings.

Group By ‘None’ is the exception. It continues to show live, instant data in real time, so you can always switch to it when you need the most up-to-date, point-in-time view.

This approach is designed to improve how customers analyze large volumes of findings and use grouping and filtering. It is part of our broader investment in giving security teams better visibility and more flexible investigation.

## What to expect [Copied!](#what-to-expect "Copy link to this section")

In analytics-powered grouped views, data is processed through an analytics engine and typically refreshes within a few minutes (near real time) rather than instantly.

Because grouped views are near real time while Group By ‘None’ is instant, you may occasionally notice minor differences between a grouped view and Group By ‘None’ until the analytics engine finishes processing the latest changes.

These timing differences are expected in systems that are optimized for analytics and large-scale data exploration, and they usually resolve automatically as data refreshes.

![Before and after: routing grouped Violations views through the analytics layer](/assets/image%28726%29.png)

## Why this approach is valuable [Copied!](#why-this-approach-is-valuable "Copy link to this section")

We chose this architecture because it enables a better experience for customers who need to work with violation data in more advanced ways.

Benefits include:

*   Better performance for large datasets
*   More future flexibility and scalability for grouping and filtering
*   A stronger foundation for future analytics capabilities

While analytics-powered views operate in near real time rather than instant real time, they provide important product value by making investigation and reporting workflows more powerful and scalable.

## If data appears delayed [Copied!](#if-data-appears-delayed "Copy link to this section")

In some situations, updates may take a few minutes to appear in analytics-powered views.

When that happens, the data is usually still being processed and will appear automatically after the next refresh. Short delays can occur because analytics systems process and organize data differently than views designed for immediate point-in-time updates.

Note

This capability is currently being released gradually and may not yet be available in every environment.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
