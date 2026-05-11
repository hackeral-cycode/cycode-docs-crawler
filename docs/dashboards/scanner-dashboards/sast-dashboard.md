# SAST dashboard | Cycode Docs

Source: https://docs.cycode.com/dashboards/scanner-dashboards/sast-dashboard

---

# SAST dashboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/scanner-dashboards/sast-dashboard.md "Edit this page")

Updated on Dec 3, 2024 • Published on Jul 31, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The SAST dashboard provides an intuitive, visual summary of the risks regarding violations in your static application security testing (SAST) environment, making it easier to monitor these violations and risks, track progress, and prioritize from where to begin remediation.

![](/assets/image-1731236947683.png)

### When is data collected [Copied!](#when-is-data-collected "Copy link to this section")

The dashboard shows data in realtime, with the exception of the Risk Trends, which are based on statistics collected once a day at midnight UTC (occurs daily). This means that the Risk Trends data may have a slight offset from your timezone depending on your location.

Risk or severity

By default, the data in the SAST dashboard is displayed by risk; however, you can toggle the display back to the previous severity setting as highlighted above.

### Navigating to the SAST dashboard [Copied!](#navigating-to-the-sast-dashboard "Copy link to this section")

To navigate to the SAST dashboard, click Dashboards in the navigation bar, and then click the SAST link in the left-hand sidebar to load the dashboard.

### Global filter options [Copied!](#global-filter-options "Copy link to this section")

The dashboard provides filtering options to narrow the results that are displayed. The following table details the available filter options:

![](/assets/image-1731237558547.png)

Filter

Description

Project

Filters by the specific project(s)

CWE Top 25

Filters by top CWEs (Common Weakness Enumeration )

OWASP Top 10

Filters by the OWASP Top 10 security risks

Programming Language

Filters by programming language

Risk Score

Filter by the risk score of the violations:

Exporting the dashboard as a PDF

You can export the data from your dashboard as a PDF file.

1.  Click the **Export as PDF** button in the top right corner. This displays the Download SAST Report dialog: ![](/assets/image-1731235446741.png)
    
2.  Click **Download PDF** to complete the download to your computer.
    

## Deep dive into the dashboard widgets [Copied!](#deep-dive-into-the-dashboard-widgets "Copy link to this section")

Lets dive into the details provided in the SAST dashboard. Note that by clicking any result in the widgets you can also automatically filter the dashboard according to that widget.

### Violations status [Copied!](#violations-status "Copy link to this section")

This section displays the information on open violations, their risk score, and their age (i.e., how long they’ve been open), and SLA status. ![](/assets/image-1731235600375.png)

*   **Violations Status**: The current count of security violations, with ‘Open’ for unresolved and out of those ‘Assigned to me’.
    
*   **Violations By Risk**: A breakdown of open violations by risk score to understand the overall risk levels.
    
*   **Violations By Age**: Tracks how long violations have remained open, helping to identify and address delays in resolution.
    
*   **SLA Status**: Shows the status of how your team is meeting the [service level agreements (SLA)](/additional-cycode-features/service-level-agreement-sla/)  security remediation standards defined by the system administrator
    
*   **Open violations organized by programming language:** Provides a clear view of risks across your tech stack
    
*   **OWASP Top 10 security risks:** A heatmap showing the number of violations by crossing risk and OWASP top 10. The color displayed in the heatmap depends on the risk level and the number of violations (the more violations, the darker the color).
    

### Repositories at highest risk [Copied!](#repositories-at-highest-risk "Copy link to this section")

This section aggregates information on the security performance of your repositories, indicating overall health and areas that require further attention. Here you’ll find the top 5 repositories and their corresponding risks, organized from the greatest risk on the left to the least risk on the right. ![](/assets/image-1731235951163.png)

### Policy impact summary and CWE breakdown [Copied!](#policy-impact-summary-and-cwe-breakdown "Copy link to this section")

This section displays a summary of the SAST policies being applied to your environment, how many violations were detected, ignored, and remain open. It also includes a breakdown of the violations according to their CWEs (Common Weakness Enumeration). ![](/assets/image-1731236697882.png)

Clicking any policy in the Policy Impact Summary list will automatically bring connect you to that policy in the SAST violations page.

## Performance over time [Copied!](#performance-over-time "Copy link to this section")

This section provides a longitudinal analysis of your organization’s performance that gauges the effectiveness of your security measures. ![](/assets/image-1731236652828.png)

The trend shows the following information:

*   **Prevented**: The number of violations Cycode found and warned about in pull requests (PRs)

More aboutprevented

Prevented is the total number of violations that Cycode found and warned about in pull requests, which - if acted upon by the developer - would have been prevented from being added to your code. The decision on whether to act on the detected violations is always the developer’s.

*   **Detected**: The number of new violations detected by Cycode, broken down by risk score
    
*   **Remediated**: Violations that have been resolved or ignored, providing insight into your organization’s response and resolution effectiveness
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
