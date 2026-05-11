# Custom dashboards | Cycode Docs

Source: https://docs.cycode.com/dashboards/custom-dashboards

---

# Custom dashboards

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/custom-dashboards/_index.md "Edit this page")

Updated on Jan 6, 2026 • Published on Nov 25, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Note

This feature is currently in early access phase.

A custom dashboard in Cycode is a configurable workspace that organizes your data into a collection of widgets (questions). You can create your own dashboards to monitor trends, track KPIs, visualize findings, and create consolidated views across Cycode entities like projects, repositories, and violations.

Custom dashboards can contain the following components:

*   Individual widgets
    
*   Filters that dynamically update all connected widgets
    
*   Text blocks for explanations and context
    

You can use the predefined dashboards and questions provided by Cycode, modify the dashboards and widgets, or create your own from scratch. This section explains how to create a new dashboard or modify an existing dashboard, add widgets, arrange them, and prepare the dashboard for use by your team.

![](/assets/image-716.png)

### Key capabilities [Copied!](#key-capabilities "Copy link to this section")

Custom dashboards allow you to visualize key metrics by aggregating and displaying data from Cycode entities. This makes it easy to create personal monitoring spaces or standardized reporting dashboards for leadership.

Custom dashboards can be configured with the following access:

*   Private - visible only to you
    
*   Public - available to your team or organization through a shared public collection
    

Custom dashboards are made up of reusable widgets, which are saved questions with visualizations. Widgets can be used across multiple dashboards to standardize reporting and eliminate duplication.

Custom dashboards also support powerful filter capabilities, so you can refine views by a wide range of options, for example:

*   Project
    
*   Repository
    
*   Date range
    
    *   **Detected At** - The date and time when the violation was first detected and created in Cycode.
    *   **Updated At** - The date and time when the violation was last updated in Cycode. Updates include any change to the violation, such as status, severity, comments, or other metadata.
    *   **Issue Creation Date** - The date when the issue was originally committed in the source repository (based on the pull request commit). This filter is **only applicable to code-related violations**.
*   Severity
    
*   Entity type
    

The filters in the custom dashboards dynamically update all connected widgets, providing an interactive exploration experience.

### Common use cases [Copied!](#common-use-cases "Copy link to this section")

You can use custom dashboards to support the following use cases:

*   **Engineering leadership reporting** - track code security hygiene, repository adoption, pipeline posture, and PR review health.
    
*   **Security operations monitoring** - visualize trends of violations, high-severity issues, risky behaviors, and policy coverage.
    
*   **Compliance and audit preparation** - provide auditable views of control implementation, scan coverage, and pipeline hardening.
    
*   **Project and team insights** - break data down by project or team to identify bottlenecks or hotspots.
    

Tip

You can create shared dashboards in the public collection for your team and name the dashboards by function, for example Security, DevOps, or AppSec. This makes it easier to find relevant dashboards and maintain consistent reporting standards across your organization.

## Dashboard workspace [Copied!](#dashboard-workspace "Copy link to this section")

You can view and manage the contents of your dashboard collection-custom-dashboards and create new dashboards from the dashboard workspace. Select a collection to view the questions and dashboards it contains.

### Sample dashboards and predefined questions [Copied!](#sample-dashboards-and-predefined-questions "Copy link to this section")

Cycode provides the following sample dashboards. You can copy the widgets from these dashboards and use them in your own custom dashboard.

*   Predefined overview dashboard
    
*   Predefined scanners dashboard
    
*   Predefined violations dashboard
    
*   Predefined starter dashboard
    

Note

The widgets in the sample dashboards are also available as questions in the **Cycode predefined collection**.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
