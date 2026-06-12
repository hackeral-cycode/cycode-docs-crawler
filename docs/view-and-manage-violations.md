# View and manage violations | Cycode Docs

Source: https://docs.cycode.com/view-and-manage-violations

---

# View and manage violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/view-and-manage-violations/_index.md "Edit this page")

Updated on Jun 8, 2026 • Published on Mar 26, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Violations view is a centralized control panel for investigating, remediating, and resolving violations, including violations in policies, in entities, and violations throughout the software development lifecycle (SDLC). This helps your organization understand where to start and how to resolve violations in the most effective and efficient manner.

Note

Cycode automatically resolves violations when a scan determines that the underlying issue has been fixed. For example, if you push a commit that deletes a file containing a violation, Cycode processes this change and automatically resolves the associated violation.

## View violations [Copied!](#view-violations "Copy link to this section")

To open the Violations view, click the **Violations** tab in the Cycode navigation bar. When you open the view, all violations are automatically loaded. You can apply filters as needed to explore specific categories or types of violations.

By default, the Violations view is sorted by risk, and grouped by **None**.

### Violation categories [Copied!](#violation-categories "Copy link to this section")

You can view all violations in the table, or you can opt to refine your view to one of the following categories:

*   Hardcoded secrets
    
*   [Leaks](/scanners/pipeline-security/leaks/leaks-violations/)
    
*   [SAST](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/)
    
*   [SCA](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/)
    
*   [IaC](/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/)
    
*   [CI/CD Security](/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations/)
    
*   [Container Image Security](/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/)
    
*   [Cloud Security](/scanners/cloud-security/cloud-security-violations/)
    

Note

For detailed information about violations in general, go to [Violation card](/view-and-manage-violations/violation-card/) .

### Filters [Copied!](#filters "Copy link to this section")

By default the Violations page opens with these filters selected:

*   Group By: None
    
*   Violation Status: Open
    
*   Violation risk score levels: Critical, High, Medium, Low, Info, N/A (indicates that the risk score is still being calculated - this may take up to 24 hours depending on the complexity of the risk factors)
    

These filters are “sticky” so that your selections are always accessible and you’ll always know what your default filter selections are.

Tip

We recommend customizing the filters according to your organization’s goal and needs. For example, if public repositories or latest commits are more important for you to monitor, select them first to gain an overall understanding of how much work is needed.

As you refine your list of violations, you’ll find yourself with a clean and well-organized collection of detected violations. This allows you to easily perform bulk actions, such as resolving, ignoring, opening a ticket, assigning, or adjusting priority, making your experience smoother and more efficient.

Note

When you select a specific project (if you’re associated with multiple projects), your filter settings stay the same when you switch between the different views of the platform.

#### Group By [Copied!](#group-by "Copy link to this section")

The **Group by** filter aggregates violations based on policies, entities, packages, and more. When you select a specific violation category, the **Group by** filter includes only the violations relevant to that category.

Note

All violation categories include the **Group by policy** option. Select **None** if you don’t want to aggregate the violations.

Option

Groups by

Policy

The policy name for the violation category you selected.

Secret value

The secrets that triggered the violation.

Repository

The repository that contains the violation.

Package

The package version that triggered the violation.

Cloud account

The cloud account that contains the violation.

File

The file that contains the violation. (file = path + name +extension)

Vulnerability

The software vulnerability that triggered the violation.

Container repository

The container repository where the image with the violation resides. This helps application teams understand security status (vulnerabilities, secrets) for their app, as in many cases a container repository includes a single service/application.

Container image tag

The tags applied to the container images. This helps security teams understand the security status (vulnerabilities, secrets) across an entire segment of their environment, for example the security issues in images tagged with **Latest**.

Container registry

The container registry where the image with the violation resides. This helps security teams understand which registries contain the highest concentration of vulnerable images.

Website

The website that is the source of the violation.

None (default)

Shows all violations that occurred (essentially a zero filter).

Note

The view displays the same 5 columns in the right hand side of the violations list: Source, Detected At, Severity, Ticket, Status, and for some violation categories, additional columns.

### Summary info [Copied!](#summary-info "Copy link to this section")

The Violations view provides summary data in several widgets. These widgets display data according to the selections and filters you apply.

Widget

Description

Risk Score

Shows the trend of violations according to risk score. You can move the slider to filter the Violations view according to a specific range of risk scores.

Detection time

Shows the trend of violations according to when they were detected. You can move the slider to filter the Violations view according to a specific date range.

Prioritization funnel

Applies the following ranked filters on violations so you can focus on the most critical:

*   High risk
*   High severity
*   Critical Severity
*   Recently detected

## Manage violations [Copied!](#manage-violations "Copy link to this section")

In the Violations table, you can take the following actions for a violation.

Item

Description

Ignore

Select this option to ignore the violation. For more information, go to [Ignoring a violation](/view-and-manage-violations/ignore-a-violation) .

Open ticket

If you have an issue tracking tool integrated, you can create a ticket directly from the Violations view. You can open a single ticket for all the selected violations, or create separate tickets in your ticketing app, directly from the Violations view

Assign

Select a member from the dropdown list to assign this violation for handling.

Priority

Assign a priority to this violation.

### Apply bulk actions to violations [Copied!](#apply-bulk-actions-to-violations "Copy link to this section")

The Violations view allows you to perform bulk actions on violations. After you’ve filtered and selected violations so that the resulting list of violations is similar, you can apply the same actions just once, instead of handling each violation separately.

## Export to CSV [Copied!](#export-to-csv "Copy link to this section")

You can export the Violations view as a CSV file.

1.  Click the **Export** icon in the upper right corner of the view.
    
2.  Type a name for the report.
    
3.  If you want to include the filters that were applied to the view, toggle on the **Do you want to include filters** option.
    
    Note
    
    This setting doesn’t change the data in the report. It only appends the information about the applied filters for context.
    
4.  Click **Export**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
