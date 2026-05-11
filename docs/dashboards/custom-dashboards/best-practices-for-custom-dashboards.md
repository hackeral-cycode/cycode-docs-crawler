# Best practices for custom dashboards | Cycode Docs

Source: https://docs.cycode.com/dashboards/custom-dashboards/best-practices-for-custom-dashboards

---

# Best practices for custom dashboards

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/custom-dashboards/best-practices-for-custom-dashboards.md "Edit this page")

Updated on Dec 23, 2025 • Published on Dec 11, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Note

This feature is currently in early access phase.

This topic provides guidance and best practices for creating effective questions in your collection, and for building useful dashboards. There are also some sample workflows that provide step-by-step instructions on how to create widgets that visualize commonly-needed security insights.

## Widget best practices [Copied!](#widget-best-practices "Copy link to this section")

Cycode provides a comprehensive set of questions out of the box, but you may opt to create your own questions based on your organizational needs. Use the following tips to guide you in creating questions that expose the data you need.

### Get the right data [Copied!](#get-the-right-data "Copy link to this section")

**Have a goal in mind** Before you build a question, make sure that you’ve defined the insight or decision the widget should support.

**Keep queries focused** Apply filters early in the creation process to limit the dataset. Smaller, targeted queries load faster and are easier to understand.

**Group data with intent** Group only by fields that clarify the insight, for example severity, repository, or branch. Don’t over-apply grouping.

**Validate as you build** Preview your results after each change. This will help ensure that the data is accurate and relevant.

**Learn from existing widgets** Review Cycode’s predefined questions to see how filters, groupings, and metrics are structured. Apply these conventions when you create your own questions.

**Design for reuse** Avoid hard-coded values and create common widgets in shared collections so others can use them. This will make building additional custom dashboards faster and easier, and enforce consistency across them.

### Apply effective design [Copied!](#apply-effective-design "Copy link to this section")

In addition to making sure you’re fetching the right data, it’s important to expose it in a way that makes sense and can be immediately understood. Follow these guidelines when designing how the widget will show the information collected by the question.

**Choose the right visualization**

Use

To visualize

Tables

Raw data

Numbers

Single values

Line/area charts

Trends

Bar/column charts

Comparisons

Pie/donut charts

Distributions

**Use clear naming** Apply descriptive titles and optional descriptions to make sure that your users understand what the widget shows.

**Prioritize simplicity and clarity**

*   Apply intuitive labels to the data
    
*   Keep charts simple and uncluttered
    
*   Make sure that the widget works well with dashboard-level filters
    

## Guidance for grouping data [Copied!](#guidance-for-grouping-data "Copy link to this section")

Grouping let you turn rows of raw data into meaningful summaries. When you group by a property, Cycode calculates your selected metrics (such as counts or averages) per value of that property.

This table explains some common applications of grouping.

To

Group by

Identify hotspots

Repository, project, or team

Track severity distribution

Severity

Analyze trends over time

Created or merged date (bucketed by day/week/month)

Monitor workflow patterns

Properties such as status, PR author, or scanner

Tip

If grouping results in too many categories or unreadable charts, simplify the filters or group by a broader field.

## Sample Workflows [Copied!](#sample-workflows "Copy link to this section")

The following examples provide step-by-step methodologies for building widgets that provide commonly-requested security insights.

### All open critical/high violations [Copied!](#all-open-criticalhigh-violations "Copy link to this section")

#### Goal [Copied!](#goal "Copy link to this section")

Create a widget that shows the total number of open Critical and High-severity violations, which can be filtered by time stamp and project.

#### Build the question [Copied!](#build-the-question "Copy link to this section")

1.  Click **Create question**, and from the list of data sources select **Violations**.
    
2.  Configure the following filters:
    
    *   **Status**→**Is**→**Open**
    *   **Severity**→**Is**→**Critical**, **High**
    *   (Optional) **Issue creation date** → select a time frame
    
    3.  In the **Summarize** area, do the following:
    4.  Click **Pick a function or metric** and select **Count of rows** (this gives the total number of violations).
    5.  (Optional) Click **Pick a column to group by** and select one of the following:
        
        Option
        
        Purpose
        
        **Repository name**
        
        See where most critical and high violations were detected
        
        **Severity**
        
        Visualize the critical vs. high violations
        
3.  Click **Visualize** and select **Chart type** > **Bar**.
    
4.  Save with a descriptive name, for example **Open critical/high violations**.
    

### All open critical/high violations from merged PRs [Copied!](#all-open-criticalhigh-violations-from-merged-prs "Copy link to this section")

#### Goal [Copied!](#goal-1 "Copy link to this section")

Create a widget that lists the high-severity issues introduced through merged pull requests, which can be filtered by time stamp.

#### Build the question [Copied!](#build-the-question-1 "Copy link to this section")

1.  Click **Create question**, and from the list of data sources select **Pull requests**.
    
2.  Configure the following filters:
    
    *   **Merged**→**Is**→**True**
    *   **Created**→**Previous 3 months**
3.  In the **Summarize** area, click **Pick a function or metric** and select **Count of rows** (this gives the total number of violations).
    
4.  Click **Visualize** and select **Chart type** > **Bar**.
    
5.  Save with a descriptive name, for example **Open critical/high violations from merged PRs**.
    

### Trend of violations over time by severity [Copied!](#trend-of-violations-over-time-by-severity "Copy link to this section")

#### Goal [Copied!](#goal-2 "Copy link to this section")

Create a widget that tracks the trend of your risk posture, so you can see if there are improvements.

#### Build the question [Copied!](#build-the-question-2 "Copy link to this section")

1.  Click **Create question**, and from the list of data sources select **Violations**.
    
2.  Configure the following filter:
    
    *   **Status**→**Is**→**Open**
3.  In the **Summarize** area, click **Pick a function or metric** and select **Count of rows** .
    
4.  Click **Pick a column to group by** and select the following:
    
    Option
    
    Purpose
    
    **Issue creation date**
    
    Data is presented according to month
    
    **Severity**
    
    Visualize the critical vs. high violations
    
5.  Click **Visualize** and select **Chart type** > **Line** to show a clear trend of severity over time.
    
6.  Save with a descriptive name, for example **Violations over time**.
    

### Violations per repository [Copied!](#violations-per-repository "Copy link to this section")

#### Goal [Copied!](#goal-3 "Copy link to this section")

Create a widget that can identify hotspots across your engineering group, to see which teams introduce the most or the least number of violations.

#### Build the question [Copied!](#build-the-question-3 "Copy link to this section")

1.  Click **Create question**, and from the list of data sources select **Violations**.
    
2.  Configure the following filter:
    
    *   **Status**→**Is**→**Open**
3.  In the **Summarize** area, click **Pick a function or metric** and select **Count of rows** (this gives the total number of violations).
    
4.  Click **Pick a column to group by** and select **Repository name**.
    
5.  Click **Visualize** and select **Chart type** > **Bar**.
    
6.  Save with a descriptive name, for example **Violations per repo**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
