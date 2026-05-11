# PR scan history | Cycode Docs

Source: https://docs.cycode.com/developer-experience/security-administrators/monitor-developer-activity/pr-scan-history

---

# PR scan history

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/security-administrators/monitor-developer-activity/pr-scan-history.md "Edit this page")

Updated on Jul 7, 2025 • Published on Jun 10, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Pull Request Scan History page provides a detailed log history of security scans that Cycode has run on your pull requests. You can view a summary of the pull request statistics and see details of each pull request. You can also filter the view to show only specific pull requests, such as by repository or organization.

## View aggregated PR data [Copied!](#view-aggregated-pr-data "Copy link to this section")

The scan history is summarized in the following widgets, which provide a high-level overview of the pull request statistics.

Widget

Description

PRs status

Funnel that summarizes the status of all scanned pull requests from total pull requests to pull requests with violations, and then blocked pull requests.

Violations by category

Horizontal bar chart that shows detected violations according to security category.

Top 4 sources

Shows the distribution of scanned pull requests according to SCM.

Note

The data in the widgets reflect scans that were completed successfully. Scans that are running, pending, or completed with an error aren’t included.

## View PR details [Copied!](#view-pr-details "Copy link to this section")

A list of all scanned pull requests is shown in the table, which provides the following information about each pull request. You can drill through to see more details about a specific pull request by clicking to open the card.

Column

Description

Pull request

PR number and link to it.

Last scan date

Date and time of the last scan that Cycode did.

Commit SHA

The commit SHA of the pull request. You can copy the full SHA.

Location

Repository associated with the pull request.

Violations

All the violations that were detected in this pull request according to severity.

Status

Final status of the scan.

Category

Type of scan that Cycode ran on this pull request.

Duration

Amount of time the scan took.

Note

You can rescan any PR for repositorty that are still available. However, violations detected during a PR scan aren’t actionable directly from this page, only as part of the PR itself. To act on the violation from Cycode Platform, go to the [Violations](/view-and-manage-violations) page once the PR has been merged.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
