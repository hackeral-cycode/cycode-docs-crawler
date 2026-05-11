# Configure PR scans | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/configure-pr-scans

---

# Configure PR scans

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/configure-pr-scans.md "Edit this page")

Updated on Feb 1, 2026 • Published on Sep 1, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

When the **PR scanning** option is enabled in the PR settings page, Cycode scans the commits in pull requests (PRs) for newly introduced violations. If the PR contains at least one violation that matches or exceeds the configured threshold as described below, the following behavior occurs:

*   Cycode assigns the PR a fail status.
    
*   Cycode adds a comment to the commit in the line where the violation was detected, including details such as type and severity, .
    

Developers can then interact with the comment to resolve or ignore the violation.

Note

Cycode adds a comment only when it detects that a violation was introduced, not when a violation is removed. This reduces noise during code reviews.

## Configure the scanner options [Copied!](#configure-the-scanner-options "Copy link to this section")

### Set the scanner options for repositories [Copied!](#set-the-scanner-options-for-repositories "Copy link to this section")

You can specify the repositories that should be scanned (you must select at least one if PR scanning is enabled). The total number of repositories enabled for scanning per organization is displayed in the **Enabled repositories** column.

When you select a repository for scanning, this enables the **Pull request status check** option automatically. You can configure the following additional scanner behavior per repository:

Option

Description

**Block merge**

Prevent merging a PR that contains one or more violations with a severity that meets or exceeds the configured threshold.

**Enforce block merge**

Ensure that GitLab’s **Status checks must pass** setting is always enabled, to maintain merge blocking for projects. (Enabled when the **Block merge** option is selected.)

Note

This options is only available for organizations that use GitLab Ultimate.

To enable this feature, contact your Cycode support representative.

**Auto enable new repositories**

Automatically enable PR scanning on any new repository added to the selected organization.

**Auto block merge new repositories**

Automatically apply the **Block merge** option to any new repository added to the selected organization. (Enabled when the **Block merge** and **Auto enable new repositories** options are selected.)

**Auto enforce block merge new repositories**

Automatically apply the **Enforce block merge** option to any new repository added to the selected organization. (Enabled when the **Auto enable new repositories** and **Enforce block merge** options are selected.)

Note

If there are project-level PR scan settings configured for a repository (which override admin-level settings), click the information icon next to the repository name to view the projects that have these settings. Click a project to open the project card, and show the **PR scanning** tab to see the specific settings that are configured for this project.

### Configure severity thresholds [Copied!](#configure-severity-thresholds "Copy link to this section")

You can configure the thresholds that determine when a PR passes or fails the status check and when Cycode adds a comment to a PR. This enables blocking merges for critical or high-risk violations and notifying developers of lower-risk issues without blocking the workflow.

Option

Description

**Fail status check**

Configure the severity level for detected violations that trigger Cycode to assign a fail status to a PR status check.

Note

A failed status check results in blocking the PR merge if the option is configured for this repository.

**Commenting**

Configure the severity level for detected violations that trigger Cycode to add a PR comment when at least one violation is detected.

### Configure additional scanning behavior [Copied!](#configure-additional-scanning-behavior "Copy link to this section")

You can set the scanner to skip draft PRs, and to only scan PRs that are marked as ready for review.

### Configure PR settings for developers [Copied!](#configure-pr-settings-for-developers "Copy link to this section")

When the PR scanning is enabled for a repository, you can configure the following PR settings for developers:

Option

Description

**Mark secret as false positive**

Developers can remark that the detected secret is a false positive using a PR comment. This secret value is then ignored as a false positive wherever it is detected.

**Mark secret as revoked**

Developers can remark that the secret has been revoked/resolved using a PR comment. When a secret is marked as revoked, the status is applied to this secret value in all repositories and sources where it is detected.

**Ignore secret in this pull request only**

Developers can ignore the secret violation for the specific pull request only.

**Ignore secret in all repositories**

Developers can ignore the secret value in all repositories where it is detected.

**Require reason when ignoring violations**

Developers must provide a justification when ignoring a violation in a pull request.

Note

This option is configurable if at least one of the ignore options is enabled.

Note

When the **Require reason when ignoring violations** option is enabled, developers must provide a reason in the comment, for example `#cycode_secret_ignore_here test key in demo file`. This also helps the AppSec team that reviews developer activity in the Developer audit view.

For a list of standardized hashtags, see [Ignore or resolve a violation in a PR](/scanners/pipeline-security/secrets/configure-the-secret-scanner/configure-pr-scans#ignore-or-resolve-a-violation-in-a-pr) below.

### Configure notifications [Copied!](#configure-notifications "Copy link to this section")

You can have Cycode send notifications when a developer comments on a violation. When this option is enabled, you can configure the alerting system (based on what your organization has connected to Cycode) and the member who should receive the notification.

## Ignore or resolve a violation in a PR [Copied!](#ignore-or-resolve-a-violation-in-a-pr "Copy link to this section")

Developers can reply to Cycode’s PR comments using the following hashtags to manage secret violations:

Hashtag

Description

`#cycode_secret_false_positive`

Mark the secret value as ignored due to being a false positive. Cycode applies it to all findings of the secret value.

`#cycode_secret_ignore_here`

Ignore this violation only in the specific PR.

`#cycode_secret_revoked`

Mark the secret value as revoked/resolved.

`#cycode_secret_ignore_everywhere`

Ignore this secret value wherever it appears.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
