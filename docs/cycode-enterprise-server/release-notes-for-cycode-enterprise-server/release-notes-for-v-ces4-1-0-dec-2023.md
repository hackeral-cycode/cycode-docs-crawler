# Release notes for v. CES4.1.0 (Dec 2023) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-1-0-dec-2023

---

# Release notes for v. CES4.1.0 (Dec 2023)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-1-0-dec-2023.md "Edit this page")

Updated on May 23, 2024 • Published on May 23, 2024

* * *

## Improvements [Copied!](#improvements "Copy link to this section")

Release Type

Description

Improvement

Implemented updates to the IaC policies with new, clear explanations, remediation texts, severity assignment, and more.

Improvement

Added an option to exclude secret violations by secret type.

Improvement

Added an option to automatically block merges for newly added/created repositories in the organization (GitHub only)

Improvement

Configure secret obfuscation by user role

Improvement

Added a bulk remediation option to the SCA Violations table.

Improvement

Improved the GitLab integration to allow admins to choose the projects to integrate and not to rely on the user’s personal permissions.

Improvement

In the Slack integration, added an optional Title field to the Slack alert.

Improvement

Improved the platform settings and configuration UX.

Improvement

Implemented Custom Policies UX enhancements.

Improvement

Re-ordered the violations results in the CLI output for SCA scans.

Improvement

Added an option to exclude secret violations according to Regex.

Improvement

Redesigned the Members window in the platform settings.

Improvement

Added the field Company Guidelines to the “Secrets” violation summary in IDE plugins.

Improvement

Implemented role-based limitations to control the scope of secret remediation actions in a large organization, ensuring users act only within their team’s domain.

Improvement

Redesigned the flow of push events to support IaC custom policies.

Improvement

Updated the look-and-feel of the violations table design.

Improvement

Added a column for the repository name to the Developer Audit and Audit Log (column is not displayed by default).

Improvement

Added an option to the Discovery page to export all columns options to CSV using the export report function.

Improvement

Added an option to copy the full, long SHA in the following UI locations: - secret policy > secret value column - secret value group by - secret card

Improvement

Added support for the GitHub merge queue functionality in pull request scans (require Github App permissions update)

## Bug fixes [Copied!](#bug-fixes "Copy link to this section")

Release Type

Description

Bug fix

Fixed an issue whereby a violation was falsely triggered on the `encrypt_at_rest` part of the ‘Enable ElastiSearch domain encryption with KMS’ policy.

Bug fix

Fixed an issue whereby the Company Guidelines were not being saved when creating custom SemGrep policies.

Bug fix

Fixed an issue whereby it was it wasn’t possible to bulk enable block merge for multiple repositories.

Bug fix

Fixed an issue whereby the PR status check settings were not applied.

Bug fix

Fixed an issue whereby the workflow trigger configuration information was not loading.

Bug fix

Fixed an issue whereby Zoom links with passwords were categorized as generic secrets/passwords.

Bug fix

Fixed an issue whereby an IaC policy was missing from the policies list.

Bug fix

Fixed an issue whereby, in some cases, Violations were not appearing in some container repositories.

Bug fix

Fixed an issue whereby a secret value was being flagged as a secret, when it was not.

Bug fix

Fixed an issue whereby alerting on Public GCP buckets and `storage.objects.list` was allowed for anonymous access.

Bug fix

Fixed an issue whereby certain secret scans were not completing.

Bug fix

Fixed an issue whereby when testing a Classification Rule using the Test Rule feature, an error occurred.

Bug fix

Fixed an issue whereby in the violations page, the trend lines didn’t seem to match the actual violations data (from a time perspective).

Bug fix

Fixed an issue whereby the breadcrumb page scoping did not apply to CSV exports in the Violations page.

Bug fix

Fixed a issue in the “Developer pull request management” alerts in which the link to the pull request pointed to the “api” route (`api.github.com`) instead of the GitHub UI (`github.com`).

Bug fix

Fixed an issue whereby the user received an error message whenever they tried to go to a specific page in the Violations tab using an API call.

Bug fix

Fixed an issue whereby the user was unable to open a Jira ticket due to a missing field.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
