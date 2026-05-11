# SAST violation card | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/sast-violation-card

---

# SAST violation card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/sast-violation-card.md "Edit this page")

Updated on Feb 10, 2026 • Published on Feb 3, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The SAST violation card drills through to provide additional details about the security risk of a specific violation. At the top of the card, the path to the location where the vulnerability was detected is shown in the following format: **Source** > **Organization** > **Repository** > **Branch** > **File**.

## Violation card tabs [Copied!](#violation-card-tabs "Copy link to this section")

The SAST Overview tab is described below. For information about the other tabs in the card, go to the [Violation card](/view-and-manage-violations/violation-card/) section.

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab displays the summary tiles described below along with a code snippet, which is a trimmed version of the file that pinpoints the exact line where the vulnerability is located.

#### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Risk score

The Cycode risk score assigned to the violation.

Sensitive data

Indicates if the SAST violation contains sensitive data.

Language

Language of code where the violation was found.

CWE

The CWE ID associated with this violation.

OWASP top 10

If relevant, shows the OWAST top 10 ID assigned to this violation.

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

Subcategory

The subcategory associated with the violation.

CWE

The CWE ID and description associated with this violation.

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

#### Additional information [Copied!](#additional-information "Copy link to this section")

In addition to the general information parameters, the Overview tab shows the exposure path of the violation and any associated labels or tags. You can hover over a tag to see the source, and you can add additional tags manually.

The following additional information is shown.

Field

Description

Assignee

Name of the Cycode member assigned to the violation.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
