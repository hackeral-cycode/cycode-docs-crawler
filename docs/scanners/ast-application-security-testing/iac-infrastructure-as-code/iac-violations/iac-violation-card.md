# IaC violation card | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/iac-violation-card

---

# IaC violation card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/iac-violation-card.md "Edit this page")

Updated on Feb 10, 2026 • Published on Feb 3, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The IaC violation card drills through to provide additional details about the security risk of a specific misconfiguration. At the top of the card, the path to the location where the issue was detected is shown in the following format: **Source** > **Organization** > **Repository** > **File**.

## Violation card tabs [Copied!](#violation-card-tabs "Copy link to this section")

The SAST Overview tab is described below. For information about the other tabs in the card, go to the [Violation card](/view-and-manage-violations/violation-card/) section.

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab displays the summary tiles described below along with a code snippet, which is a trimmed version of the file that pinpoints the exact line where the violation is located.

#### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Risk score

The Cycode risk score assigned to the violation.

IaC provider

IaC resource that contains the violation.

AI exploitability analysis

Click this tile to start analyzing the exploitability of this vulnerability. After the analysis runs, the tile shows the result.

Note

Available if AI features are enabled in your tenant.

#### General info [Copied!](#general-info "Copy link to this section")

The area below the code snippet provides a description of the violation. If remediation information is available either from Cycode or from your company guidelines, the description also includes a link to the Remediation tab.

The General info parameters show the following information. The actual fields displayed may vary depending on the violation.

Field

Description

Violation ID

Internal Cycode ID assigned to the violation.

First detected

Date and time when the violation was initially detected.

Last detected

Date and time of the last scan where the violation was detected.

Author

User that introduced the violation.

Author email

Email of the user that introduced the violation.

Committer

User that performed the commit containing the violation.

Cycode project

The Cycode project associated with the code that contains the violation.

Failure property path

#### Additional information [Copied!](#additional-information "Copy link to this section")

In addition to the general information parameters, the Overview tab shows the exposure path of the violation and any associated labels or tags. You can hover over a tag to see the source, and you can add additional tags manually.

The following additional information is shown.

Field

Description

Assignee

Name of the Cycode member assigned to the violation.

The following table describe the different details of the violation card overviews for IaC. The actual fields displayed may vary depending on the violation.

Field

Description

Code Snippet

Displays a trimmed version of the file that contains the violation

Description

Description of the violation; if a remediation (Cycode and/or Company Guidelines) is available, the description will also include a link to the Remedation tab.

Cycode Project

The project that contains the violation

Source

SCM source in which the violation was detected

IaC Provider

The IaC provider in which the violation was detected

Detected At

Date and time when the violation was detected

classification rules

If you’ve defined [classification rules and custom labels](/workflow-automation/) in your policies, the Violation card will also display this additional information.

### Snippet [Copied!](#snippet "Copy link to this section")

A snippet that shows where you can find the IaC violation (misconfiguration) in a shortened version of the file.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
