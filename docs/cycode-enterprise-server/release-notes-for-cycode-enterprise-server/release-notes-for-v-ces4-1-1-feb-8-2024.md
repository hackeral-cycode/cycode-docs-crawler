# Release notes for v. CES4.1.1 (Feb 8, 2024) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-1-1-feb-8-2024

---

# Release notes for v. CES4.1.1 (Feb 8, 2024)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-1-1-feb-8-2024.md "Edit this page")

Updated on Aug 21, 2024 • Published on Aug 21, 2024

* * *

## Improvements [Copied!](#improvements "Copy link to this section")

Release Type

Description

Improvement

Added a global filter for “current permission” to CI/CD violations.

Improvement

Added the list of security tools that detected the current violations, including a hover state on the “Security Tools” tag which displays the last time each security tool was updated as a list.

Improvement

Added a new, two-way GitLab Vulnerability Report integration, which creates records in GitLab for violations: -Status updates from GitLab affects Cycode status as well (to see status mapping visit here). -Activity log in Cycode violations now shows a record for the user in GitLab that changed status. -Added new log within GitLab that indicated changes made in Cycode.

Improvement

Added free text search for query name in the Report content tab.

Improvement

In the Secret Value card UI, changed the location of the Ignore and Resolve buttons to improve usage.

Improvement

Updated the UI of the secrets violations table.

Improvement

Updated the design and functionality of the Secrets Value table.

Improvement

Added an option to support report URLs for secret scans via the CLI to see the violations in the Cycode platform.

Improvement

Added a CLI scan report link option for secrets.

Improvement

Updated the filters within each global filter category to appear in alphabetical order.

Improvement

Updated the flow for duplicating/cloning a project to use the create/edit project wizard.

Improvement

Added an option to allow customers to ignore a secret value in the context of a specific repository (Ignore in this this location).

Improvement

Added a new custom compliance framework, which enables you to define your own specific frameworks and associate them with our detection policies to monitor your compliance posture.

## Bug fixes [Copied!](#bug-fixes "Copy link to this section")

Release Type

Description

Bug fix

Fixed an issue whereby ignoring violation using the “Exclude by Container Image” was using the old exclusion rules instead of the classification rules.

Bug fix

Fixed an issue whereby customers were unable to create an export from the Discovery page.

Bug fix

Fixed an issue whereby selecting the Jira ticket violation filter loaded the ticket column on an unsupported page.

Bug fix

Fixed a misspelling in the login page.

Bug fix

Added a separate violation type for Google Maps API Key to separate these violations from the Google Cloud API Keys ones.

Bug fix

Fixed an issue whereby results for Google OAuth Key were not marked as false positive.

Bug fix

Fixed an issue in the CLI whereby, when scanning only for Package Vulnerabilities in some situations, both the Package Vulnerabilities and the License Compliance violations are displayed.

Bug fix

Fixed an issue whereby initial IaC scans were stuck in a running state.

Bug fix

Fixed an issue whereby the user was logged out when committing any actions with multiple tenants selected.

Bug fix

Fixed an issue whereby the broker regnerate command failed to display.

Bug fix

Fixed an issue whereby when attempting to load the violations for a specific repository using the Group by Repository feature displayed an error.

Bug fix

Fixed an issue whereby when attempting to load the violations for a specific repository using the Group by Repository feature displayed an error.

Bug fix

Fixed an issue whereby an error was displayed during an AWS integration.

Bug fix

Fixed an issue whereby the Report page returned an error.

Bug fix

Fixed an issue whereby an asset not assigned to a project appears in the Violations page.

Bug fix

Fixed an issue whereby the broker could not be changed during integration.

Bug fix

Fixed an issue whereby the auto-resolve feature was not generating a PR when the process was initiated for SCA violations.

Bug fix

Fixed an issue where a disconnected broker client wasn’t able to update itself to “connected” state even though it was working properly.

Bug fix

Fixed an issue in the broker-client in which clones were failing on specific OS/CPU types.

Bug fix

Fixed an issue related to the cycode-security\[bot\] behavior.

Bug fix

Fixed an issue related to the cycode-security\[bot\] response to an incorrect command.

Bug fix

Fixed an issue whereby creating a new policy failed because no data available was available for the dry-run.

Bug fix

Fixed an issue whereby the broker stops working if it’s unable to clone the repository to due to a lack of disk space.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
