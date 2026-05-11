# Release notes for v. CES4.2.0 (March 27, 2024) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-2-0-march-27-2024

---

# Release notes for v. CES4.2.0 (March 27, 2024)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-2-0-march-27-2024.md "Edit this page")

Updated on May 23, 2024 • Published on May 23, 2024

* * *

## Improvements [Copied!](#improvements "Copy link to this section")

Release Type

Description

Improvement

Added remediation guidelines to the secret value card to enhance the remediation process performed by the user.

Improvement

Improved the performance of the violations table.

Improvement

Added a tree view and violation card details to the JetBrains IDE plugin.

Improvement

Refactored and redesigned the SCA violation card.

Improvement

Added a new filter for “current permission” for CI/CD violations.

Improvement

Released the SCA reachability analysis, which is designed to check whether code projects referencing vulnerable packages actually use vulnerable functions from these packages.

Improvement

Updated the design and flow of the secrets violation card.

Improvement

Updated the design of the violation card.

Improvement

Implemented UI updates to the violation cards so that when there’s only one project, will show the project icon name and business impact, and when there’s more than one project, show the project icon and a count of the number of projects.

Improvement

Added a “Clone method” section that provides an option to clone the Broker via SSH.

Improvement

An advanced actions bar was added to the Cycode console in the JetBrains Plugin.

Improvement

Added a new detection rule policy for the HuggingFace token to secrets detection.

Improvement

For reports, added an edit mode to the tabs that display scheduling tasks and the reports description, as well as an indicator to the report title and report content title that in edit mode, the type and content are read-only.

Improvement

Added a new detection rule policy for Hashicorp Vault token to secrets detection.

Improvement

Added global filters to the Integrations page for the integration status.

Improvement

Updated the base Docker Alpine image to version 3.19 to address critical vulnerabilities.

Improvement

Implemented Docker image updates to SCA by updating the Snyk Connector, NexusIQ Connector, and SCA Manager to Alpine 3.19 to address critical vulnerabilities.

Improvement

Updated the base Docker Alpine image to version 3.19 to address critical vulnerabilities.

Improvement

Fixed an issue where a violation was flagged as critical but was actually a false positive.

Improvement

Added an advanced actions bar to the Cycode console in the JetBrains Plugin.

Improvement

Updated the violation cards UI to show the business impact when there’s only one project.

Improvement

Container image security improvements.

## Bug fixes [Copied!](#bug-fixes "Copy link to this section")

Release Type

Description

Bug

Fixed an issue whereby when a developer commented to ‘Ignore secret in this pull request only’ in the PR, the PR status kept failing.

Bug

Fixed an issue whereby when creating a new repository in GitLab, when PR scans were enabled, the status check wasn’t created.

Bug

Fixed an issue whereby the GitLab Self-Managed merge request comment wasn’t created.

Bug

Fixed an issue that triggered a false positive secret result for the Shippo Api Token policy.

Bug

Fixed an issue whereby Discovery page exports don’t account for empty fields.

Bug

Fixed an issue of missing user information on the changed status in the vulnerability details of the Gitlab Vulnerability Report integration.

Bug

Fixed an issue whereby the pull request comment was assigned to the pull request in GitHub.

Bug

Fixed an issue whereby the Discovery page violation data was not synced with the Violations page data.

Bug

Fixed an issue of false positive secret violations.

Bug

Fixed an issue whereby the Discovery page was unable to filter by Cycode Project ID.

Bug

Fixed an issue whereby PR scans failing due to a rate limiter error.

Bug

Fixed an issue in the broker-client image that caused clones to fail due to ‘LibGit2Sharp.Core.NativeMethods’ exceptions

Bug

Fixed an issue whereby a RIG query wasn’t displaying results.

Bug

Fixed an issue in the free text search in Audit Logs.

Bug

Fixed an issue whereby some violations were missing the organization name from the detection details data.

Bug

Fixed an issue whereby the reports API did not return the same data as the RIG/Discovery page.

Bug

Fixed an issue whereby an SCA violation failed to resolve automatically.

Bug

Fixed an issue whereby it wasn’t possible to export the Cycode members list.

Bug

Fixed an issue where a violation was flagged as critical but was actually a false positive.

Bug

Fixed an issue whereby an InvalidOperationException is thrown and causes the service to crash.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
