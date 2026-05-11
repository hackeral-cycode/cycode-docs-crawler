# Create a widget (question) | Cycode Docs

Source: https://docs.cycode.com/dashboards/custom-dashboards/create-a-widget-question

---

# Create a widget (question)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/custom-dashboards/create-a-widget-question.md "Edit this page")

Updated on Jan 11, 2026 • Published on Nov 30, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Note

This feature is currently in early access phase.

A widget (called a question in the dashboard workspace) is a saved query plus its visualization. Widgets are the building blocks of custom dashboards, where each widget pulls data from Cycode’s data sources (such as projects, repositories, and violations) and presents it as a table or chart.

This topic explains how to create a new widget, apply filters, and test and save the widget.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

Verify the following before you create a widget:

*   You have access to the **Dashboards** > **My Dashboards** area in Cycode.
    
*   You have permission to view the relevant data (for example, relevant projects, repositories, and violations).
    

It’s also recommended that you know which entity/model you want to query, for example pull requests, violations, or a predefined model/view.

### How to use date fields [Copied!](#how-to-use-date-fields "Copy link to this section")

You can apply the following date fields when you create a question.

Field

Description

Value

Detected at

The date and time when the violation was first detected and created in Cycode.

Fixed

Updated at

The date and time when the violation was last updated in Cycode. Updates include any change to the violation, such as status, severity, comments, or other metadata.

Dynamic

Status updated at

The date and time when the violation status was last updated in Cycode. This value doesn’t reflect any other changes to the violation besides status.

Dynamic

Issue creation date

The date when the issue was originally committed in the source repository (based on the pull request commit). This filter is only applicable to code-related violations.

Fixed

Widgets grouped by date are not always “over time”, as they may not always represent historical changes.

Backlog-style widgets show the current state of violations, grouped by a selected date field, for example **Detected at**. As a result, the widget doesn’t reflect what violations looked like historically, but rather shows today’s violations distributed across past dates.

If you want to display an accurate trend over time, you must use a fixed date field.

## Create a widget [Copied!](#create-a-widget "Copy link to this section")

1.  Go to **Dashboards** > **My dashboards** > **Dashboard workspace**.
    
2.  In the dashboard workspace, click **Create new** > **Create question**.
    
3.  Choose the data source (table or model) that you want to query, for example **Pull requests** or **Repositories**.
    
4.  Click **Filter** to begin selecting the rows you want to include in the widget. For each row, choose an operator and define the value, then click **Add filter**.
    
    **For a list of fields available for creating custom dashboard questions, see the**[_**Custom Dashboard Fields**_](/dashboards/custom-dashboards/field-descriptions-table) **reference table.**
    
    Tip
    
    You can preview each part of the question as you add it so you can validate the data. Iterate on filters and groupings until the result is small, relevant, and fast to run. For example, if the resulting data set is empty or too large, try the following:
    
    *   Double-check filter conditions and operators.
    *   Confirm that the chosen date range aligns with when data actually exists.
    *   Consider adding an additional filter or limit if the data volume is too large.
    
5.  To calculate the metrics (such as counts, sums, or averages) in the **Summarize** click **Pick a function or metric** and select the required aggregation from the list. Add as many functions as needed.
    
6.  (Optional) To group results by a specific property, click **Pick a column to group by** and select a column from the list.
    
    Tip
    
    Grouping results provides higher-level metrics instead of raw rows, such as number of violations per pull request.
    
7.  To define how the data will be visualized in the widget, click **Visualize**. You can modify any of the items you configured up to now, and you can select and configure the chart type. Use the following recommendations to decide how to visualize the data:
    
    Visualization type
    
    Best for
    
    Table
    
    Raw or summarized tabular data
    
    Number/KPI
    
    Single numeric value, for example Total violations with severity = High
    
    Line/Area chart
    
    Trends over time
    
    Bar/Column chart
    
    Comparing between repositories or teams
    
    Pie/Donut chart
    
    Distribution of data across categories
    
8.  Configure the following additional visualization properties as necessary:
    
    *   X axis and Y axis
    *   Legend
    *   Sorting
    *   Value display (labels, units, formatting)
9.  To save the new question, click **Save** and provide the following information:
    
    Item
    
    Description
    
    **Name**
    
    Provide a useful name, such as **Violation status per repository**.
    
    **Description**
    
    Optional, can be very helpful in the future to describe what the widget shows and how the filters are applied.
    
10.  Click **Save**. The question is saved to the collection-custom-dashboard and you can create widgets with it in any dashboard in the collection.
     

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
