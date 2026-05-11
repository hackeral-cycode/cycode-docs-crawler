# Generate a report | Cycode Docs

Source: https://docs.cycode.com/additional-cycode-features/generate-a-report

---

# Generate a report

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/additional-cycode-features/generate-a-report.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jul 31, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

In the Reports view, you can create reports for custom Context Intelligence Graph queries, violations, and other Cycode data. You can also create dashboard reports in PDF format.

Note

Dashboard reports are only available with User Management v2.

As part of creating reports you can schedule how often the report should be generated, and you can also configure notifications about report availability for relevant stakeholders.

For some reports, you can also open the report wizard directly from the relevant view in the platform.

## View a list of reports [Copied!](#view-a-list-of-reports "Copy link to this section")

To see the list of reports that were created, go to **Reports**. The following information is displayed.

Item

Description

**Report**

Name of the report.

**Scheduling**

Indicates whether the report is scheduled or manual, and if relevant how often the report is run.

**Created at**

Date and time stamp when the report was created.

**Last run**

Date and time stamp of the last time the report ran.

**Created by**

Member that created the report.

**Status**

Current status of the report:

*   **Available**
*   **In progress**
*   **Expired**
*   **Failed**

You can edit or delete a report, download the last report, and run the report again to refresh the data.

## Create a report [Copied!](#create-a-report "Copy link to this section")

1.  To create a new report, click **Create Report**. The report wizard opens.
    
2.  In the **Details**tab, type a name and description for the report and click**Next**.
    
    Important
    
    You must enter a unique name. If you type the name of an existing report you’ll get an error message and you won’t be able to continue.
    
3.  In the **Report type**tab, specify the type of report you want to create and click**Next**.
    
    Report
    
    Description
    
    **Custom (query based)**
    
    Based on the queries library in the [Context Intelligence Graph](/context-intelligence-graph/) .
    
    **Violations**
    
    Lists the violations in a specific category.
    
    **SBOM**
    
    Lists a comprehensive inventory of the software components used in your organization’s applicat
    
    **API BOM**
    
    Exports API endpoints along with the following metadata:
    
    *   **Name** (Path): API endpoint path (for example, /api/v1/users)
    *   **Method**: HTTP method (for example, GET, POST)
    *   **Location**: Location in code (for example, repo/backend)
    *   **Labels**: Custom user-defined tags
    *   **SDLC stage**: Currently defaults to Code
    
    **SaaSBOM**
    
    Lists a comprehensive inventory of the dynamic dependencies, APIs, and third-party services used in your organization’s cloud-based applications.
    
    **Change Impact Analysis**
    
    In-depth analysis of risk within code changes during the defined time frame.
    
    Early Access
    
    This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.
    
    **Dashboard report**
    
    Graph report in PDF format of the widgets in the dashboard.
    
4.  In the Report content tab, select the data that should appear in the report.
    
    Report content
    
    Description
    
    Custom
    
    Select a query from the list.
    
    Violation
    
    Select a category from the list.
    
    SBOM
    
    Define a report scope, and enable/disable whether to include package vulnerabilities and development dependencies in the report.
    
    API BOM
    
    Define a report scope.
    
    SaaSBOM
    
    Define a report scope. You can select up to 10 repositories in total.
    
    Change Impact Analysis
    
    Define a report scope.
    
    Dashboard
    
    Select a dashboard type:
    
    *   **Main dashboard** - after you select this option, select a dashboard from the list and configure the dashboard filters.
    *   **Specific group or project** - after you select this option, select a group or project from the list and configure the dashboard filters.
    *   **Comparator** - after you select this option, do the following:
    
    *   To create an ad-hoc comparison of up to 5 groups or projects, click **Create comparison** and select the relevant entities from the list.
    *   To generate a report of a saved comparator view, click **Favorite view** and select a saved view from the list.
    
5.  In the Settings tab, configure the following report settings.
    
    Setting
    
    Description
    
    **Format**
    
    Options:
    
    *   **CSV** (default)
    *   **JSON**
    *   **PDF** (dashboard reports only)
    
    Note
    
    If you’re creating an SBOM report, the available report formats in this area are **SPDX-2.2** or **CycloneDX 1.4**.
    
    **Output format**
    
    **This setting is only available for SBOM reports.** Options:
    
    *   **JSON**  (default)
    *   **XML** 
    
    **File options**
    
    **This setting is only available for SBOM reports.**Configure whether to get the report as a single file, or as separate ZIP files (one per repository). The default setting is**Single File**.
    
    **Schedule**
    
    If you want the report to run on a regular schedule, enable this option and select the report frequency:
    
    *   **Day**
    *   **Week**
    *   **Month**
    
    You can configure whether to run a full report each time, or whether to generate a report that only contains changes from the last-run report (new data). The default setting is**Full report**.
    
    Note
    
    The data model isn’t available for Dashboard reports.
    
    **Notify**
    
    To send notifications when a report has been generated, enable this option. Select as many options as required.
    
    Note
    
    If you want to configure a notification, you must first integrate the relevant notification options (for example, if you don’t have a Slack integration, the **Slack** option won’t appear here). If you have an email integration and want to add another group, first add that group in the integrations page in order to see it in the **Email** dropdown.
    
6.  Click **Create Report** to save and generate the new report.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
