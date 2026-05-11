# Release notes for v CES4.3.0 (May 9, 2024) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-3-0-may-9-2024

---

# Release notes for v CES4.3.0 (May 9, 2024)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-3-0-may-9-2024.md "Edit this page")

Updated on May 23, 2024 • Published on May 9, 2024

* * *

Release Type

Description

Improvement

Added company remediation guidelines and policy descriptions directly to pull requests (PRs) for GitLab, GitHub, and Azure DevOps.

Improvement

Added support for Custom / Company remediation and description directly in pull requests (PRs) for Azure DevOps.

Improvement

Added support for block merge requests to GitLab Ultimate cloud accounts.

Improvement

Adjusted the way in which we count GitHub Enterprise (self-hosted) SCM users, which now filters out the suspended users from the active SCM users. Note that this means you’ll see a drop in the trend for users in the Organization Plan.

Improvement

Added a new dedicated CLI Logs section to the settings.

Improvement

Added IaC support to Cycode’s VS Code extension.

Improvement

Added IaC support to Cycode’s JetBrain IDE plugin.

Improvement

Added a profile image / avatar to the user management feature.

Improvement

Added a new Favorites Filter views option to the Violations pages, which lets you save your filters, column selections, group by, and module selections as a favorites view.

Improvement

Added improvements to the GitLab Vulnerability Report feature.

Improvement

Added a new global filter called “Integration Status".

Improvement

Updated the Violations table to offer a more intuitive and efficient experience using summary data panels.

Improvement

Added a new organization search option to the PR scan settings.

Improvement

Updated the base Docker Alpine image to version 3.19 to address critical vulnerabilities.

Improvement

Added a new build entity called “Jenkinsfile”, which helps users to identify repositories that contain Jenkins workflow files, and correlates the Jenkinsfile entity to the Jenkins integration.

Improvement

Added the ability to allow the user to view the policy logic that was implemented using Rego that Cycode runs for IaC resources.

Improvement

Added an IaC Violation Card to the Cycode VSCode Extension and IDE JetBrains Plugin.

Improvement

Added the failed status check URL to the “Used admin permission to merge code that failed status checks” policy violation page.

Improvement

Updated some of the policies that were related to container image were classified as Container Security instead of IaC or Cloud Security.

Improvement

Added an option to monitor the status reason deviation from the baseline.

Improvement

Added support to validate the reopen violation delete status reason and status change message.

Improvement

Mapped the ‘status reason’ in the database according to the status.

Improvement

Secrets auto resolution is no longer in Beta.

Improvement

Updated the base Docker Alpine image to version 3.19 to address critical vulnerabilities.

Improvement

Added support for Vulnerabilities and Secrets scans to the GitLab Container Registry integration.

Improvement

Added support for integrating a GitLab Enterprise instance when admin mode is enabled.

Release Type

Description

Bug

Fixed an issue whereby an IaC violation was not automatically resolved.

Bug

Fixed an issue in the PR Scans History page whereby if the user ran a scan on a PR (or observed one in progress) the page would always show a green check mark, even if the pull request found a violation.

Bug

Fixed an issue whereby a violation from custom policy displayed the violation name as an ID.

Bug

Fixed an issue whereby the PR scans page sometimes returned a 504 result.

Bug

Fixed an issue related to a discrepancy between the Threat Intelligence dashboard and the Violations page.

Bug

Fixed an issue in the free text search in Audit Logs.

Bug

Fixed an issue whereby the user was unable to perform any action on an open violation (i.e., couldn’t Resolve/Ignore the violation).

Bug

Fixed an issue whereby secret exclusion rules were not being saved as configured.

Bug

Fixed an issue whereby when trying to assign a user that doesn’t appear on the first page of the Assign User button list, the search doesn’t paginate, so it was not possible to search for and assign that user.

Bug

Fixed an issue whereby users couldn’t activate PR scans in the settings.

Bug

Fixed an issue whereby report URLs from CLI `--report` scans do not use the new CLI Logs link.

Bug

Fixed an issue whereby the PR scans “All Actions” checkbox didn’t work when first configuring PR scans.

Bug

Fixed an issue whereby the download SBOM button didn’t work with a specific project selection.

Bug

Fixed an issue whereby the ‘Meaningful tag should be used’ policy was being triggered incorrectly.

Bug

Updated the IaC policy “Pip install should be executed with pinned version” to alert when scanning Dockerfiles for RUN commands “pip install -r requirements.txt”.

Bug

Fixed an issue in the loading time of the Projects page.

Bug

Fixed an issue whereby data in the Discovery page/RIG wasn’t displayed consistently.

Bug

Fixed an issue whereby container repositories weren’t appearing in the container scanning screen.

Bug

Fixed an issue whereby the SBOM report creation failed.

Bug

Fixed an issue whereby a valid secret of a machine key wasn’t being detected.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
