# Create a dashboard | Cycode Docs

Source: https://docs.cycode.com/dashboards/custom-dashboards/create-a-dashboard

---

# Create a dashboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/custom-dashboards/create-a-dashboard.md "Edit this page")

Updated on Dec 23, 2025 • Published on Nov 25, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Note

This feature is currently in early access phase.

A dashboard is a customizable view that organizes your data into a group of widgets (questions). Dashboards can contain the following elements:

Dashboard component

How do I use it?

Individual widgets

Use questions from the predefined collection-custom-dashboard provided by Cycode, or create your own questions.

Filters

Enable users to dynamically update all connected widgets based on specified parameters.

Text blocks

Provide headers, definitions, notes, and other content that provide explanations and context.

This topic explains how to create an empty dashboard, arrange the dashboard layout and add widgets, and publish the dashboard.

## Create a new dashboard [Copied!](#create-a-new-dashboard "Copy link to this section")

1.  Go to **Dashboards** > **My dashboards** > **Dashboard workspace**.
    
2.  In the dashboard workspace, click **Create new** > **Create dashboard**.
    
3.  Provide the following information:
    
    Field
    
    Description
    
    **Name**
    
    Provide a descriptive name for the dashboard, for example **Project security overview**.
    
    **Description**
    
    This field is optional, but strongly recommended for team dashboards.
    
    **Which collection should this go in?**
    
    You can save this dashboard in the collection-custom-dashboard already provided in the field, or click the **More options** icon and select a different collection.
    

The dashboard opens in edit mode.

Tip

Collections control the visibility of their contents. A personal collection is private and only you can see it. Shared collections are global and visible to all other tenant members.

If this dashboard is meant for your team, or for leadership reporting or compliance monitoring, best practice is to store it in a shared collection.

## Populate the dashboard [Copied!](#populate-the-dashboard "Copy link to this section")

Dashboards are composed of widgets (questions), filters, and descriptive text for context. You can do the following when populating your dashboard:

*   Add an existing question as a widget, or create a new question
    
*   Arrange the contents of the dashboard manually, or use the available templates to automate and standardize the dashboard layout
    
*   Add headings, notes, and other text to the dashboard for clarity
    

### Define the dashboard layout [Copied!](#define-the-dashboard-layout "Copy link to this section")

You can position and resize your widgets manually, or you can apply a predefined layout to your dashboard to create logical groupings and align sizing and spacing.

Common layout patterns include:

*   KPIs at the top
    
*   Trend charts in the middle
    
*   Detailed tables at the bottom
    
*   Project- or team-specific widgets grouped together
    

**To use a predefined layout**

1.  Click **Add section** in the menu bar.
    
2.  Select one of the layout options.
    
3.  Select your questions from the blank widgets in the layout.
    
4.  Apply text in the text blocks as needed.
    

You can use as many sections as you need in a dashboard.

Tip

If you opt to lay out your dashboard content manually, maintain consistent sizing for widgets that are located next to each other. This improves readability and helps viewers interpret the dashboard at a glance.

### Add an existing widget [Copied!](#add-an-existing-widget "Copy link to this section")

1.  Click **Add a chart** or click the **+** (Add questions) in the menu bar to open the sidebar where you can browse the available collections.
    
2.  Select a collection to view the available widgets.
    
3.  Click a widget to add it to the dashboard.
    

### Create a new widget inside the dashboard [Copied!](#create-a-new-widget-inside-the-dashboard "Copy link to this section")

1.  Click **Add a chart** or click the **+** (Add questions) in the menu bar to open the sidebar where you can browse the available collections.
    
2.  Select **Create new question**.
    
3.  Build the widget using the visual query builder.
    
4.  Save the widget in the dashboard.
    

Note

When you create a widget inside a dashboard, the widget is private and only available for that dashboard unless you explicitly save it to a shared collection after you save the dashboard.

### Add text blocks [Copied!](#add-text-blocks "Copy link to this section")

You can use text blocks to add information such as:

*   Dashboard and section headers
    
*   Definitions
    
*   Notes
    

**To add a text block**

1.  In edit mode, click **Add a heading or text** in the menu bar and select one of the following:
    
    Option
    
    Description
    
    Heading
    
    Preformatted heading text card that spans the width of the dashboard. You can include variables from the widgets.
    
    Text
    
    Customizable text card that supports formatting the content in Markdown. You can include linked images and GIFs, as well as variables from the widgets.
    
2.  Add the information that you want to show in the dashboard. To see a preview, click out of the text card.
    
3.  Click **Save**.
    

Tip

Save frequently while you build a dashboard. Many design issues (layout overcrowding, unclear labels) are easier to spot in view mode.

### Add dashboard filters for users [Copied!](#add-dashboard-filters-for-users "Copy link to this section")

Dashboard filters are optional, but strongly recommended because they allow users to dynamically adjust the data in all the connected widgets at the same time. Some common filters that can be applied are:

*   Project
    
*   Repository
    
*   Date Range
    
*   Severity
    
*   Team
    

**To add a filter**

1.  In edit mode, click **Add a filter or parameter**.
    
2.  Select a filter type from the list (for example, date picker or location).
    
3.  Configure the filter parameters.
    
4.  Connect the filter to the widgets as follows:
    
    1.  If the filter is only relevant for one of the widgets, move it inside the widget and connect the data for that widget only.
        
    2.  If the filter isn’t specific to a particular widget, connect the data for at least one of the widgets in the dashboard.
        
        Notes:
        
        *   You can add a filter to the dashboard, widget, or text block.
        *   If you add a filter but don’t connect any data, the filter won’t appear in the dashboard.
        
5.  Click **Done**.
    

Tip

If you add the same high-level filter across all dashboards, for example a text or category filter that’s set to filter by project, the dashboards will provide a consistent experience and be easier to navigate.

### Publish the dashboard [Copied!](#publish-the-dashboard "Copy link to this section")

After you finish configuring the dashboard and have saved all your changes, verify that it is stored in the correct collection. If your dashboard is public, you can share the link with anyone in the organization.

Note

The visibility of the dashboard is based on the settings of the collection where it is stored.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
