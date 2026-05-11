# View PR scan summary in GitHub | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/pull-request-pr-scanning/view-pr-scan-summary-in-github

---

# View PR scan summary in GitHub

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/pull-request-pr-scanning/view-pr-scan-summary-in-github.md "Edit this page")

Updated on Oct 21, 2025 • Published on Oct 16, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

When Cycode scans a GitHub repository, the results are displayed as a summary directly in the Checks tab of the pull request. This provides a consolidated view of the violations detected by any Cycode scanner that has PR scanning enabled on that repository.

### How does it work? [Copied!](#how-does-it-work "Copy link to this section")

When a PR is opened or updated, Cycode scans the diff between the source and target branches. After the scan completes, a summary appears under Cycode Security in the Checks tab.

Notes

This feature is supported for GitHub repositories using check runs.

Only the code changes included in the PR are scanned. Each PR update triggers a new scan, and the scan summary updates automatically after the scan completes.

The summary is visible to all users that have access to the repository.

## View the Cycode summary [Copied!](#view-the-cycode-summary "Copy link to this section")

The summary lists all the violations that were detected across the enabled scanners, grouped by policy and severity.

1.  In GitHub, click the **Pull requests** tab to open the Pull request dashboard.
    
2.  Click the **Checks** tab, then open **cycode-security** in the navigation pane. Scan results are grouped by policy and severity and indicate if the scan passed or failed.
    
    Note
    
    Cycode marks the scan as failed if violations are detected. This may block the PR merge depending on the SCM’s branch protection settings.
    
3.  Click a scan result to show the summary of the specific scan. Each detected violation has an annotation that includes a link to the file and line where the the violation was found.
    

## Example [Copied!](#example "Copy link to this section")

The following example shows how the Cycode summary appears in GitHub:

![](/assets/screenshot-2025-10-16-at-15.17.05.png)

Each violation is annotated with a link to the affected file and line:

![](/assets/screenshot-2025-10-16-at-15.20.41.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
