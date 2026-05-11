# View and analyze NHIs | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/inventory/application-insights/non-human-identities-nhis/view-and-analyze-nhis

---

# View and analyze NHIs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/inventory/application-insights/non-human-identities-nhis/view-and-analyze-nhis.md "Edit this page")

Updated on Jan 20, 2026 • Published on Feb 25, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The NHI page provides a centralized view of all the NHIs that were detected in your organization. Additionally, you can see the following information about NHIs in the **Inventory** > **NHIs** view.

## Widgets [Copied!](#widgets "Copy link to this section")

Widget

Description

**NHIs by category**

Total number of NHIs detected, broken out into categories.

**NHI states**

Total number of NHIs detected, filtered first by Active state and then by Exposed state.

**NHIs by source**

Total number of NHIs detected, according to the source (tool) where they were found.

## View NHI data [Copied!](#view-nhi-data "Copy link to this section")

The NHIs are shown in a table that provides the following information.

Column

Description

Name

The name of the NHI as it appears in the source system.

Type

The type of NHI, for example IAM role or AWS managed secret.

Risk summary

Indicates whether the NHI poses a security risk based on it’s state (active or exposed).

Source

Where the NHI was detected.

Creation date

Date and time stamp when the NHI was first discovered.

Last used

Date and time that the NHI was used most recently.

Resource access

Resources that the NHI can access.

Permission scope

Actions that the NHI can perform on the accessible resources, based on the scope of the assigned permissions.

### Filter the NHI table [Copied!](#filter-the-nhi-table "Copy link to this section")

You can add one or more filters from the **Add filter** dropdown list to refine your view. You can also use the widgets to quick filter on the data that is displayed. Use the **Clear filter** button to restore the full list in the table.

### NHI card [Copied!](#nhi-card "Copy link to this section")

The NHI card contains information specific to the type of NHI. For details, see the section that describes each NHI in the relevant topic:

*   [AWS Cloud Provider](/context-intelligence-graph/inventory/application-insights/non-human-identities-nhis/aws-cloud-provider)
    
*   [AWS Secrets Manager](/context-intelligence-graph/inventory/application-insights/non-human-identities-nhis/aws-secrets-manager)
    
*   [GitHub](/context-intelligence-graph/inventory/application-insights/non-human-identities-nhis/github)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
