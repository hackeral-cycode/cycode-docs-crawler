# Compliance | Cycode Docs

Source: https://docs.cycode.com/compliance

---

# Compliance

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/compliance/_index.md "Edit this page")

Updated on Sep 21, 2025 • Published on Mar 26, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Compliance view shows your current compliance posture for some of the top compliance frameworks. Cycode compiles the data from the violations of the out-of-the-box policies we provide to help users better understand their current standing with a given compliance framework.

## Supported compliance frameworks [Copied!](#supported-compliance-frameworks "Copy link to this section")

Cycode currently supports the compliance frameworks listed in the table below.

Framework

For more information…

CIS AWS

[CIS Amazon Web Services Foundations Benchmark](https://www.cisecurity.org/benchmark/amazon_web_services)

CIS Azure

[CIS Microsoft Azure Foundations Benchmark](https://www.cisecurity.org/benchmark/azure)

CIS Google Cloud

[CIS Google Cloud Platform Foundations Benchmark](https://www.cisecurity.org/benchmark/google_cloud_computing_platform)

CIS GitHub

[CIS GitHub Benchmark](https://www.cisecurity.org/benchmark/github)

CIS Gitlab

[CIS GitLab Benchmark](https://www.cisecurity.org/benchmark/gitlab)

CIS Kubernetes

[CIS Kubernetes Benchmark](https://www.cisecurity.org/benchmark/kubernetes)

ISO 27001 Compliance

[ISO/IEC 27001: Information security management](https://www.iso.org/isoiec-27001-information-security.html)

NIST SSDF v1.1 Compliance

[NIST Secure Software Development Framework (SSDF) v1.1](https://csrc.nist.gov/publications/detail/white-paper/2022/02/04/ssdf/release)

SOC 2 Type II Compliance

[AICPA SOC 2 Overview](https://www.aicpa.org/soc4so)

## View and manage compliance frameworks [Copied!](#view-and-manage-compliance-frameworks "Copy link to this section")

When you open the Compliance overview, the available standard and custom frameworks are displayed in the secondary navigation pane. Click one to open and manage the framework.

you can create a custom framework, add a framework from the library, and export the view as a PDF report.

For more information about creating a custom framework,

### Compliance posture overview [Copied!](#compliance-posture-overview "Copy link to this section")

This area of the view provides you with a quick and clear view of their compliance health across multiple cloud and code platforms, so you can monitor trends and identify areas that need improvement.

Each widget in this area shows you the compliance percentage, compliance delta from the last month, and the trend of the compliance percentage for the last six months of a specific compliance framework. You can also see the total number of projects that are associated with the framework and drill through to examine projects individually.

You can view up to four frameworks in the overview area. To display available frameworks that aren’t currently visible, click **Edit selected frameworks** and update the selection as necessary.

### Project coverage [Copied!](#project-coverage "Copy link to this section")

The project coverage table lists your Cycode projects and the compliance posture for each framework, so security teams or managers can:

*   Quickly assess project risk and prioritize which projects require immediate attention.
    
*   Track the number and severity of open security violations.
    
*   Monitor compliance against industry benchmarks like CIS.
    
*   Manage project ownership by seeing who is responsible for each project.
    

The table has the following columns available.

Column

Description

Default

Optional

Project

Name of the Cycode project.

Yes

Description

Description of the project that was provided by the member that created it.

Yes

Impact

Business impact of the project.

*   **HBI** \- High business impact
*   **MBI** \- Medium business impact
*   **LBI** \- Low business impact

Yes

Members

All members associated with the project.

Yes

Assets

How many assets you have of each type you have associated with the project.

Yes

Violation category

The violation categories that are defined for the project.

Yes

Project manager

Cycode member that was assigned as the project manager.

Yes

Risk

Risk score that Cycode calculated for the project.

Yes

Open violations by risk

Number of critical or high violations out of the total number of violations, along with the breakdown of the total violations visualized as a bar chart.

Yes

Created at

Date and time stamp when the project was created.

Yes

Modified at

Date and time stamp when the project was last updated.

Yes

Frameworks

All the relevant frameworks are shown in the table with the compliance score.

Yes

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
