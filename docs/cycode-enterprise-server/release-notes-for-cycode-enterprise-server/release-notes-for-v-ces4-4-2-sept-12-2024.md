# Release notes for v CES4.4.2 (Sept. 12, 2024) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-4-2-sept-12-2024

---

# Release notes for v CES4.4.2 (Sept. 12, 2024)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-4-2-sept-12-2024.md "Edit this page")

Updated on Dec 1, 2024 • Published on Sep 8, 2024

* * *

Release Type

Description

Epic

Added support for SCA fields to workflows.

Epic

Added support for SCA fields to the Classification Rules.

Epic

Added support for the Swift - Carthage package manager.

Epic

Added support for integrating a GitLab Enterprise instance when admin mode is enabled.

Epic

When triggering a scan using the CLI, the report will be returned as a single URL for all secrets found in the same scan.

Epic

Updated the user count for Azure DevOps in the Organization Plan page.

Epic

Added support for detecting secrets in Jira Cloud.

Epic

Added an option to scan for secrets in compressed files (binaries).

Epic

Added support to allow users to resolve a secret value solely for the specific repository where the secret value was identified.

Epic

Updated the Secret Value Card by adding a secret value field to the top of the card including the secret value diffs - from the newest to the oldest. Also updated the secret value in the General info section to the Secret SHA.

Epic

Added the EPSS Score to the SCA violation card.

Epic

Implemented a new login screen.

Epic

Added a new SAST dashboard to the platform dashboards.

Epic

Added support to create reports that monitor assets by project.

Epic

Added an integration for for Jira Data Center.

Epic

Redesigned the violations table to include a new location component structured hierarchically with more enriched data. Updated the default violation table views to provide quicker access to the most relevant information for a more focused experience. Updated the favorite views to include the new location component, replacing the previously used location fields.

Epic

Implemented the integration of the Bearer SAST engine into Cycode, replacing Semgrep for the Java, JS/TS, PHP, Ruby and Go codebase.

Epic

Added new operators in date filters to the RIG: “In the last” and “Before the last”. These operators allow you to input the number of days, providing you with more query flexibility. Updated the “2FA” field for users to support Bitbucket Cloud in RIG.

Epic

Updated the Bitbucket integrations as follows: - Added support to Bitbucket cloud to fetch the SCM projects (already supported by Enterprise) - Added display for both Cloud and Enterprise in the Risk Intelligence Graph (RIG) - Added the ability to create Cycode projects based on the SCM project (Cloud and Enterprise)

Release Type

Description

Story

Added option to allow users to resolve a secret value solely for the specific repository where it was identified.

Story

Added support for the `Has Fix Version` filter to all tenants.

Story

Updated the base Docker Alpine image to version 3.19 to address critical vulnerabilities.

Story

Added the field “Updated at” in the SCA Package Health section of the violation card to specify when the data was generated/updated.

Story

Excluded and resolved detections by classification rules will now be preserved with status `Resolved/Ignored` Before this change those detections were not visible to the user.

Story

Added a UI indication for exists in latest migration

Story

Excluded and resolved detections by Classification Rules will now be preserved with the status `Resolved/Ignored`. Before this change those detections were not visible to the user.

Release Type

Description

Bug

Fixed an issue in the RIG whereby the field “Status updated at” was showing as a number field instead of a date.

Bug

Fixed an issue whereby an Azure DevOps repository deletion was not detected.

Bug

Fixed an issue whereby a workflow wasn’t running properly.

Bug

Fixed an issue whereby the GitLab token was revoked after 10 days.

Bug

Updated the layout of the violation card to clarify the data the detected secret.

Bug

Fixed an issue whereby the GitLab Enterprise integration with group IDs was getting updates for all repositories.

Bug

Fixed an issue whereby it wasn’t possible to export the data from a Discovery graph query when the Aggregated Query option was enabled.

Bug

Fixed an issue whereby an on-demand SAST scan was stuck in the “pending” state.

Bug

Fixed an issue whereby a Classification Rule was stuck in the “Apply Rule” status for over a couple of hours.

Bug

Fixed an issue whereby the CLI Log filter by source didn’t work

Bug

Fixed an issue whereby in the RIG, the repository URL column was blank.

Bug

Fixed an issue whereby changes to the secret validation settings were not saved.

Bug

Fixed an issue in the CLI Logs export process.

Bug

Fixed an issue in GitHub whereby pull request comments on very large diffs where not added.

Bug

Fixed an issue whereby some of the SAST policies were sometimes not getting risk scores assigned to them.

Bug

Fixed an issue whereby the file path was missing in a binary file secret violation.

Bug

Fixed an issue in the dashboard whereby violations were incorrectly displayed as not being associated with projects.

Bug

Fixed an issue whereby a violation wasn’t associated with a project.

Bug

Fixed an issue whereby a created project doesn’t display violations.

Bug

Fixed an issue whereby the code snippet failed to load when loading the violation card.

Bug

Fixed an issue whereby the PR Scan History Report and the Developer Audit Report were missing columns when exported.

Bug

Fixed an issue whereby the Project Manager role couldn’t ignore violations.

Bug

Fixed an issue whereby violations were not resolving automatically.

Bug

Fixed an issue whereby the violations page was taking too long to update.

Bug

Fixed an issue whereby a violation wasn’t associated with a project.

Bug

Fixed an issue where the PR scan didn’t detect some secrets.

Bug

Fixed an issue whereby the line number in the violations export didn’t match the UI.

Bug

Fixed an issue whereby a SAST violation was not being remediated after a fix was implemented.

Bug

Fixed an issue whereby it wasn’t possible to use the Broker for a Gerrit integration when switching to the Member role.

Bug

Fixed an issue whereby violations were displayed as “No associated project” when the project was configured with only a label.

Bug

Fixed a sync issue in the RIG.

Bug

Fixed an issue whereby a user wasn’t able to create a custom SCA policy with a saved query.

Bug

Fixed an issue whereby an error was displayed when enabling secrets PR scanning for over 100k repositories.

Bug

Fixed an issue whereby the Report Email notification to access completed generated reports wasn’t working properly.

Bug

Fixed an issue whereby email addresses with multiple periods were not supported in the email integration.

Bug

Fixed an issue whereby the compliance report was not showing data.

Bug

Fixed an issue in the project asset allocation.

Bug

Fixed an issue whereby the UI showed a different violation count for the same repository in different pages in the platform.

Bug

Fixed an issue whereby Slack secrets weren’t always being scanned

Bug

Fixed an issue whereby SAST violations weren’t detected for an OWASP-Benchmarx-Java repository.

Bug

Fixed a data discrepancy issue in the assets page

Bug

Fixed an issue whereby Gerrit clones in user mode were not working properly.

Bug

Fixed an issue whereby using the GitLab “integrate by group” with multiple groups sync worked incorrectly when connecting groups with their projects.

Bug

Fixed an issue whereby the Gerrit repositories were not syncing properly.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
