# Configure the IaC scanner | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/configure-the-iac-scanner

---

# Configure the IaC scanner

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/configure-the-iac-scanner.md "Edit this page")

Updated on Dec 16, 2025 • Published on Nov 2, 2025

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

**Mark vulnerability as false positive**

Developers can remark that the detected vulnerability is a false positive using a PR comment. This vulnerability is then ignored as a false positive in all repositories.

**Ignore resource in all repositories**

Developers can ignore the resource in all repositories where it is detected, using a PR comment.

**Ignore this vulnerability for this resource in this pull request only**

Developers can ignore the vulnerability for this resource in the specific pull request only, using a PR comment.

**Ignore this vulnerability for this resource in all repositories**

Developers can ignore the vulnerability for this resource in all repositories where it is detected, using a PR comment.

**Require reason when ignoring violations**

Developers must provide a justification when ignoring a violation in a pull request.

Note

This option is configurable if at least one of the ignore options is enabled.

**Get remediation guidance from Cycode AI**

Show the Maestro so users can get AI-based remediation fixes from Cycode to apply in PRs.

Note

You must enable the Cycode [LLM settings](/cycode-settings/admin-settings/ai-features#enable-the-cycode-llm).

Note

*   When the **Require reason when ignoring violations** option is enabled, developers must provide a reason in the comment, for example `#cycode_ignore_here` . This also helps the AppSec team that reviews developer activity in the Developer audit view.
*   For a list of standardized hashtags, see [Manage a vulnerability in a PR](/scanners/ast-application-security-testing/iac-infrastructure-as-code/configure-the-iac-scanner#manage-a-vulnerability-in-a-pr) below.

### Configure notifications [Copied!](#configure-notifications "Copy link to this section")

You can have Cycode send notifications when a developer comments on a violation. When this option is enabled, you can configure the alerting system (based on what your organization has connected to Cycode) and the member who should receive the notification.

## Manage a vulnerability in a PR [Copied!](#manage-a-vulnerability-in-a-pr "Copy link to this section")

Developers can reply to Cycode’s PR comments using the following hashtags to manage vulnerabilities.

Hashtag

Description

`#cycode_iac_fix_this_violation`

Fixes this IaC violation within the same commit.

Note

Available only for IaC policies/violations that we know how to fix.

`#cycode_ignore_violation_for_resource_everywhere`

Ignores this vulnerability for this resource for all repositories in your organization.

`#cycode_ignore_violation_for_resource_here`

Ignores this vulnerability for this resource in this pull request only.

`#cycode_ignore_resource_everywhere`

Ignores this vulnerability for this resource for all repositories in your organization.

`cycode_iac_false_positive`

Marks this vulnerability as a false positive. Cycode applies it to all repositories.

**Hashtag**

**Action**

`#cycode_sast_false_positive`

Marks the vulnerability as a false positive (applies to this violation only).

`#cycode_sast_ignore_here`

Ignores this violation (applies to this violation only).

`#cycode_ai_remediation`

dDisplay the content of the AI remediation generated by the Maestro.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
