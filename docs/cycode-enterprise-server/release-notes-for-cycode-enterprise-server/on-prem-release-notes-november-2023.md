# On-prem Release Notes (November 2023) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/on-prem-release-notes-november-2023

---

# On-prem Release Notes (November 2023)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/on-prem-release-notes-november-2023.md "Edit this page")

Updated on Aug 21, 2024 • Published on May 8, 2024

* * *

Epic

Item

Description

Epic

Added a new GitLab Vulnerability Report integration, which creates records in GitLab for violations.

Epic

Added support for scanning Confluence spaces for secrets.

Epic

Added support for a scaled GitHub Enterprise integration.

Epic

Backlog tasks

Story

Added support for the token validity check to the Slack connector.

Story

Added an integration for GitLab Enterprise Access Token.

Story

Added a token validity UI for Slack scanning integrations. The integration contains the `is_token_valid` and `invalidation_reason` parameters.

Epic

Platform bugs backlog

Bug

Fixed a issue whereby the violation count in the Violations Tab and the Secrets Detections list didn’t match.

Bug

Fixed an issue whereby the classification rules were not being applied to pull request scans.

Bug

Fixed an issue when creating a Jira ticket whereby when hitting spacebar within the created ticket (in Jira) the structure of the content is disrupted.

Bug

Fixed an issue whereby an out-of-memory (OOM) message was displayed in the remediation service.

Bug

Fixed an issue whereby sometimes it was not possible to ignore a specific violation.

Bug

Fixed an issue related to column resizing in the Violations page (the resized fields in the Violations page would reset when clicking the Violation Details card).

Bug

Fixed an issue whereby workflows were not loading the Filter Details.

Bug

Updated the Admin Info page to be the Admin Settings page.

Bug

Fixed an issue whereby category filters were not being applied when using the Group By Repository filter.

Epic

SAST bugs backlog

Bug

Fixed a discrepancy issue in the numbers displayed in SAST violations.

Bug

Fixed an issue whereby violations were automatically resolved without changes to the source code.

Epic

Container image security improvements

Story

In the Container Image Scanning, added an option to exclude base images secrets from the scan.

Story

Added JFrog Artifactory as an asset option during project creation - support at the repository level selection.

Epic

Added the two policies related to excess privileges - Excess team repository privileges & Excess user repository privileges - to the workflow policy options.

Story

Added a ‘Current Permission" filter for policies under the category CI/CD in the workflows.

Story

Added a filter to violations for the status `'status reason:status comment'`.

Epic

GitHub Actions workflow permissions added to Discovery module.

Epic

Secrets bugs backlog

Bug

Added Confluence to the list of providers in the Policies page.

Bug

Addressed an issue with Secret Validation settings not displaying properly.

Epic

SCM bugs backlog

Bug

Fixed an issue whereby the GitHub Enterprise integrations page wasn’t listing integrations.

Bug

Fixed an issue whereby when creating a new integration with GitHub Cloud, users were not able to add any new organizations.

Epic

Added an option to invite users via email to the Cycode platform.

Epic

Added support to enforce branch protection on certain settings using new CI/CD policies and remediations: Branch protection rules are not enforced on administrators/custom roles: A new policy and built-in remediation allowing you to validate and enforce branch protection rules to apply to users with administrators or custom roles. Require reviewer(s) approval of pull request before merging: A new policy and built-in remediation allowing you to validate and enforce reviewers approval for pull requests before they’re merged. Merging code without review on default branch is permitted: Added a new built-in remediation for the existing policy allowing you to enforce the requirement that all code changes must be submitted via a pull request before they can be merged into a protected branch.

Epic

Secrets validation for enterprise server

Story

Allow on-premise customers to configure an internal proxy for secrets validation.

Epic

Improved the platform settings and configuration UX.

Story

Updated the Settings navigation bar.

Story

Improved the layout and design of the Personal Settings page for better clarity and ease of use.

Story

Added a dedicated section within the Personal Settings page exclusively for users with Admin or Owner roles.

Epic

Secret detection exclusions.

Story

Added an option to exclude secret detection according to regex.

Epic

Navigation updates

Story

Improve navigation visibility by removing the SDLC option from the Policies pane.

Epic

Audit Log redesign

Story

Implemented a ‘Reviewed’ column with a binary filter in the Audit log and Developer Audit.

Story

Added a flexible date filter to the Developer audit log to provide it with the same capabilities as the main Audit log.

Story

Renamed the ‘Resource’ column to the ‘Description’ column in the Audit log.

Story

Redesigned the Developer audit log to bring more information from the audit event to the audit table, reducing the number of clicks required to understand the event.

Story

Added additional filtering capabilities to the Developer Audit and the Audit Log.

Story

Updated the Audit Log page to include column selection and reset filters.

Epic

Updated the configuration in the Secrets Pull Request settings related to developers’ comments, enabling you to specify in which commit change the developer will need to add a comment on a detected secret: secret addition, secret removal, or both (this is the default).

Epic

classification rules updates.

Story

Added support for multiple policy selections for different policies and different policy categories.

Epic

Redesigned the Members window in the platform settings.

Epic

Added support to store violation data in the customer’s own S3-compatible account - Enterprise customers only.

Epic

Added a new entity “Build Report” to the Discovery feature.

Epic

Modules redesign

Story

Updated the navigation for violations.

Story

Updated the AppSec modules UX by moving the Group By to the filter from the left pane.

Story

Aligned the Group By feature with the table view, so that depending on the type of violation category, the Group By components will be updated.

Bug

Fixed an issue whereby initial IaC scans were stuck or failed to complete.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
