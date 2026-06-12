# Secret values | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/inventory/application-insights/secret-values

---

# Secret values

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/inventory/application-insights/secret-values.md "Edit this page")

Updated on Feb 23, 2026 • Published on Apr 22, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode scans for secrets across all the integrated technologies. You can then query on these secrets in the Context Intelligence Graph as needed.

## Secret value widgets [Copied!](#secret-value-widgets "Copy link to this section")

The following widgets are shown at the top of the Secret values view. You can click in the widget and drill through to filter on the data you clicked.

Widget

Description

Secret values by risk

Shows the total numbers of secrets according to risk score range.

Secret values by validity

Shows the total numbers of secrets according to whether they are active or inactive.

Secrets prioritization funnel

Funnel that shows the state of the open violations, filtered by latest code, publicly exposed, and whether the secret is valid (active).

## View general information [Copied!](#view-general-information "Copy link to this section")

The Secret values table contains the following information.

Column

Description

Visible by default

ID

Full SHA of the secret

No

Secret SHA

Unique identifier of the secret value.

Yes

Source

Locations where the secret value was detected.

Yes

Secret tags

All tags that are associated with the secret’s violations.

Yes

First detection

Date and time the first violation with this secret value was detected.

No

Last detection

Date and time a new violation with this secret value was most recently detected.

Yes

Max risk score

Risk score that was calculated by Cycode.

Yes

Violations by risk

Number of detected violations that contain the secret value, grouped by severity of the risk score.

Yes

Status

Current status of the violation:

*   **Open** - at least one violation is still open
*   **Ignored** - All violations were marked as ignored
*   **Resolved** - All violations were closed and at least one was resolved

Yes

Authors

User(s) that introduced the violation.

No

Expiration date

(JSON web tokens only) Expiration date for this secret (after which the secret is inactive and no longer valid).

No

Discovery sources

(ADLC security only) Tool that detected the violation.

Yes

Note

When you filter the view by status, this only affects the number of results that are shown in the Violations table. The aggregated data includes violations with all statuses.

To see aggregated data that reflects the selected status, open a violation card.

## Secret value card [Copied!](#secret-value-card "Copy link to this section")

You can click a row in the Secret value table to view additional details. The card has three tabs.

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The tiles at the top of tab show the following aggregated information for all open violations related to this secret value.

Tile

Description

Max risk score

The highest risk score calculated for an open violation that is based on this secret.

Secret validity

Current status of this secret.

Exists in latest code

Number of violations where this secret appears in the latest code version.

Publicly exposed

Number of violations where the secret is can be accessed from outside the organization.

Filtered violations

Number of violations based on the filter applied in the Violations view.

Sources

Number of sources where this secret was detected.

Below the tiles are snippets of the last five violations that were detected with links to the sources that contain the secret.

The following information is also displayed.

Section

Description

Secret value

The value of the secret.

Discovery

(ADLC security only) **Sources** - tools that detected the secret.

Where

**Source** - where the secret was detected. **Locations** - where the violations are located.

Who

**Authors** - user(s) that introduced the secret.

When

**Introduced at** - date and time the violation was first introduced. **First detection** - date and time the violation was first detected. **Last detection** - date and time the secret was last detected.

### Risk analysis tab [Copied!](#risk-analysis-tab "Copy link to this section")

The tiles at the top of tab show the following aggregated information for all open violations related to this secret value:

Tile

Description

Max risk score

The highest risk score calculated for violation that is based on this secret.

Secret validity

Current status of this secret.

Filtered violations

Number of violations based on the filter applied in the Violations view.

The following information about the risk factors that affect the risk score is also displayed.

Item

Description

Severity

The severity of the violation, based on the default severity of the policy and any changes to the severity based on custom workflows.

Exists in latest code

True or False.

Organization repository

True or False.

Business impact

High, medium, or low. This is an aggregated score based on the business impact of all the projects associated with the violation.

Test file

True or False.

Archived repository

Archived or not archived.

Detected recently

True or False. True if the secret was detected in the last 30 days.

File type

Whether or not the file is sensitive. Namely, if the violation is located in a core functionality file.

Publicly exposed

User that introduced the secret.

Secret validity

Status of the secret: Valid, invalid, or unknown.

### Violations tab [Copied!](#violations-tab "Copy link to this section")

The Violations tab lists all the violations related to this secret along with the following information:

Column

Description

Location

Path to the file that contains the violation.

Detected at

Date and time the violation was detected.

Risk status details

Risk score and status of the violation.

You can add additional columns to the tab to see more granular details. Some columns are only relevant for specific violation types and locations.

You can also export the information in the Violations tab to a CSV file.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
