# Integrations FAQ | Cycode Docs

Source: https://docs.cycode.com/integrations/integrations-faq

---

# Integrations FAQ

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/integrations-faq.md "Edit this page")

Updated on May 19, 2026 • Published on May 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

This page consolidates common questions from Cycode customers about integrations. For step-by-step configuration and feature documentation, see the parent integrations pages.

## GitHub [Copied!](#github "Copy link to this section")

### Does Cycode create a service account in GitHub during integration? [Copied!](#does-cycode-create-a-service-account-in-github-during-integration "Copy link to this section")

No. The user installing the GitHub App only needs sufficient privileges to grant the requested App permissions. No separate service account is provisioned.

### What is the difference between the “GitHub Enterprise” and “GitHub Cloud” integration options? [Copied!](#what-is-the-difference-between-the-github-enterprise-and-github-cloud-integration-options "Copy link to this section")

“GitHub Enterprise” is for GitHub Enterprise Server (self-hosted or `ghe.com`). For GitHub Enterprise Cloud, use the GitHub Cloud integration.

### Can one Cycode tenant connect to more than one GitHub Enterprise instance? [Copied!](#can-one-cycode-tenant-connect-to-more-than-one-github-enterprise-instance "Copy link to this section")

No. A tenant supports only one GitHub Enterprise instance. Customers with multiple GHE instances need separate tenants.

### Can I migrate between GitHub Cloud and GitHub Enterprise without losing data? [Copied!](#can-i-migrate-between-github-cloud-and-github-enterprise-without-losing-data "Copy link to this section")

Yes. Once the GitHub App is reconnected on the new side, scans resume automatically. For GHE, a dedicated GitHub App is created in the customer instance.

### How does Cycode populate user emails for GitHub members? [Copied!](#how-does-cycode-populate-user-emails-for-github-members "Copy link to this section")

In this order: the GitHub Members GraphQL API (when public), the SAML Identity Provider API (when SSO is configured), or derivation from username plus organization domain when a policy exists.

### How are GitHub Topic tags kept in sync? [Copied!](#how-are-github-topic-tags-kept-in-sync "Copy link to this section")

GitHub Topics surface as labels in Cycode. They sync via webhooks and a periodic metadata refresh, and an admin can also trigger a manual sync from the SCM Integrations UI.

## Azure DevOps [Copied!](#azure-devops "Copy link to this section")

### Can I configure more than one Azure DevOps integration in the same tenant? [Copied!](#can-i-configure-more-than-one-azure-devops-integration-in-the-same-tenant "Copy link to this section")

Yes. Multiple ADO integrations can coexist on the same tenant with no special setup.

### Are Azure DevOps repository tags synced into Cycode? [Copied!](#are-azure-devops-repository-tags-synced-into-cycode "Copy link to this section")

No. ADO repository tags are not currently synced.

### When a default branch changes in Azure DevOps, when does Cycode pick it up? [Copied!](#when-a-default-branch-changes-in-azure-devops-when-does-cycode-pick-it-up "Copy link to this section")

On the next scheduled SCM sync. ADO does not emit a webhook for default branch changes.

### What authentication does ADO Cloud vs. ADO Server use? [Copied!](#what-authentication-does-ado-cloud-vs-ado-server-use "Copy link to this section")

ADO Cloud uses OAuth and requires project-level admin (not organization admin). ADO Server uses PAT. PAT-based integration is not supported for ADO Cloud.

### Is Microsoft Visual Team Foundation Server (TFS) v16 supported? [Copied!](#is-microsoft-visual-team-foundation-server-tfs-v16-supported "Copy link to this section")

No.

### Does “Block Merge” apply to non-default branches in ADO? [Copied!](#does-block-merge-apply-to-non-default-branches-in-ado "Copy link to this section")

No. In ADO, Block Merge is enforced only on the repository’s default branch. PRs on non-default branches are scanned and commented on but not blocked.

### Are previous PR comments automatically resolved when a developer pushes a fix in ADO? [Copied!](#are-previous-pr-comments-automatically-resolved-when-a-developer-pushes-a-fix-in-ado "Copy link to this section")

No. In ADO, developers must resolve PR comments manually after pushing a fix. This differs from GitHub behavior.

## GitLab [Copied!](#gitlab "Copy link to this section")

### What is the minimum supported GitLab Self-Managed version? [Copied!](#what-is-the-minimum-supported-gitlab-self-managed-version "Copy link to this section")

GitLab 15.5. Earlier versions lack required API endpoints.

### Is GitLab Community Edition supported? [Copied!](#is-gitlab-community-edition-supported "Copy link to this section")

Yes. GitLab CE on-prem is supported through the broker using the same v4 API as Enterprise.

### What scope does a GitLab PAT integration need? [Copied!](#what-scope-does-a-gitlab-pat-integration-need "Copy link to this section")

The `api` scope. A single integration with `api` scope covers PR checks, comments, and fix PRs.

### What happens to a GitLab OAuth integration if the authorizing user is deactivated? [Copied!](#what-happens-to-a-gitlab-oauth-integration-if-the-authorizing-user-is-deactivated "Copy link to this section")

The integration breaks. Use a dedicated service-style user, not a personal account, for OAuth.

### Does GitLab merge blocking based on Cycode findings work without GitLab Ultimate? [Copied!](#does-gitlab-merge-blocking-based-on-cycode-findings-work-without-gitlab-ultimate "Copy link to this section")

No. Blocking merge based on Cycode findings is a GitLab Ultimate feature. As a workaround, fail a CI step with the Cycode CLI to enforce a gate.

### Are existing GitLab MR vulnerabilities shown in MRs? [Copied!](#are-existing-gitlab-mr-vulnerabilities-shown-in-mrs "Copy link to this section")

GitLab MRs surface only newly introduced vulnerabilities; existing ones are not shown in the MR.

### Does Cycode import GitLab Dependency Scanning (SCA) results? [Copied!](#does-cycode-import-gitlab-dependency-scanning-sca-results "Copy link to this section")

No. Only proprietary scanners and the Cycode SCA scanner produce SCA findings.

### Are GitLab MR false positives imported into Cycode as ignored? [Copied!](#are-gitlab-mr-false-positives-imported-into-cycode-as-ignored "Copy link to this section")

No. Mark a finding as Ignored (False Positive) in the Cycode UI.

### What happens to webhooks if the GitLab integration is deleted? [Copied!](#what-happens-to-webhooks-if-the-gitlab-integration-is-deleted "Copy link to this section")

All webhooks Cycode created are automatically removed.

## Bitbucket [Copied!](#bitbucket "Copy link to this section")

### Why do I see multi-hour delays between Bitbucket events and Cycode alerts? [Copied!](#why-do-i-see-multi-hour-delays-between-bitbucket-events-and-cycode-alerts "Copy link to this section")

Bitbucket Cloud does not emit real-time webhooks for all repository events. Repository metadata sync runs twice daily, so delays of several hours are normal.

### Can I integrate Bitbucket Cloud at the repository level? [Copied!](#can-i-integrate-bitbucket-cloud-at-the-repository-level "Copy link to this section")

No. Bitbucket Cloud integrates at the workspace level. As a workaround, create a separate workspace containing only the repos you want to integrate.

### Is selective repository scanning supported for Bitbucket Server? [Copied!](#is-selective-repository-scanning-supported-for-bitbucket-server "Copy link to this section")

Not yet.

### Are PR scans and Block Merge supported on Bitbucket Server v5.7? [Copied!](#are-pr-scans-and-block-merge-supported-on-bitbucket-server-v57 "Copy link to this section")

No. PR scans and Block Merge depend on the Insights API, which is not available in v5.7.

### Which user is shown as the “Author” on a Bitbucket Cloud violation? [Copied!](#which-user-is-shown-as-the-author-on-a-bitbucket-cloud-violation "Copy link to this section")

The last person who modified the specific line of code where the violation was detected, not the last person to push to the file.

### Can I rotate or edit the Bitbucket integration token in the UI? [Copied!](#can-i-rotate-or-edit-the-bitbucket-integration-token-in-the-ui "Copy link to this section")

Not today. Deleting the integration removes all associated data. To preserve data while rotating, contact support.

### How do I change a Bitbucket Cloud workspace connection from OAuth to API token? [Copied!](#how-do-i-change-a-bitbucket-cloud-workspace-connection-from-oauth-to-api-token "Copy link to this section")

Use the Reconnect option in the integration settings.

## Perforce [Copied!](#perforce "Copy link to this section")

### Which scanners are supported for Perforce? [Copied!](#which-scanners-are-supported-for-perforce "Copy link to this section")

Secrets detection is officially supported. SAST and SCA on Perforce are early-adopter only and not GA. Support is for Helix Core; no explicit version list is published.

## Jira [Copied!](#jira "Copy link to this section")

### Is an admin user required to set up the Jira integration? [Copied!](#is-an-admin-user-required-to-set-up-the-jira-integration "Copy link to this section")

Yes, for the initial webhook creation. After setup, admin can be removed if no further changes are needed.

### What happens to the Cycode violation when its linked Jira ticket is permanently deleted? [Copied!](#what-happens-to-the-cycode-violation-when-its-linked-jira-ticket-is-permanently-deleted "Copy link to this section")

Nothing automatic. The reference must be unlinked manually.

### How often does Jira Data Center secret scanning run? [Copied!](#how-often-does-jira-data-center-secret-scanning-run "Copy link to this section")

Every 90 minutes. A “last scan” timestamp is not currently surfaced in the UI for Jira Data Center.

### Can I re-authorize the Jira integration without removing it? [Copied!](#can-i-re-authorize-the-jira-integration-without-removing-it "Copy link to this section")

Yes. Update the token from the Integrations UI without removing the integration.

## ServiceNow [Copied!](#servicenow "Copy link to this section")

### Does the integration support ServiceNow GRC? [Copied!](#does-the-integration-support-servicenow-grc "Copy link to this section")

No. The ServiceNow integration is specifically for Incident Response (records starting with `INC`).

### Can I filter ServiceNow ingestion by repository? [Copied!](#can-i-filter-servicenow-ingestion-by-repository "Copy link to this section")

No. Filtering is only by security violation type (SCA, SAST, etc.).

### How long does the Cycode AVR App in ServiceNow ingestion take for large environments? [Copied!](#how-long-does-the-cycode-avr-app-in-servicenow-ingestion-take-for-large-environments "Copy link to this section")

It can take several hours. Subsequent syncs fetch only changed or new violations.

## GitHub Issues [Copied!](#github-issues "Copy link to this section")

### Can workflows dynamically pick a GitHub repository for issue creation? [Copied!](#can-workflows-dynamically-pick-a-github-repository-for-issue-creation "Copy link to this section")

No. Each workflow targets a pre-selected repository. The repo must be private and the Cycode App must have the correct permissions in advance.

## Slack and Microsoft Teams [Copied!](#slack-and-microsoft-teams "Copy link to this section")

### Does the Microsoft Teams integration use Office 365 Connectors? [Copied!](#does-the-microsoft-teams-integration-use-office-365-connectors "Copy link to this section")

No. The Microsoft Teams integration uses Azure App Registrations and Microsoft Graph API webhooks. The retirement of Office 365 Connectors does not affect this integration.

### Can I customize the content of Microsoft Teams alerts? [Copied!](#can-i-customize-the-content-of-microsoft-teams-alerts "Copy link to this section")

No. Teams alert content is not customizable per customer.

### Can I limit Slack secret scanning to specific channels? [Copied!](#can-i-limit-slack-secret-scanning-to-specific-channels "Copy link to this section")

No. Slack secret scanning auto-scans all public channels in the connected workspace.

### Are Slack DMs and private channels scanned natively? [Copied!](#are-slack-dms-and-private-channels-scanned-natively "Copy link to this section")

No. Export the data and run the CLI scan against the exported files.

### Is the Slack or Jira workflow message format customizable? [Copied!](#is-the-slack-or-jira-workflow-message-format-customizable "Copy link to this section")

No.

## Wiz [Copied!](#wiz "Copy link to this section")

### Why do violation counts show 0 immediately after enabling the Wiz integration? [Copied!](#why-do-violation-counts-show-0-immediately-after-enabling-the-wiz-integration "Copy link to this section")

Cycode fetches all in-scope findings from Wiz first and then processes them into violations. Counts populate after processing completes.

### Which Wiz license is needed for SAST findings? [Copied!](#which-wiz-license-is-needed-for-sast-findings "Copy link to this section")

Wiz Code (not Wiz Cloud). SAST findings are exposed through the Wiz Code module.

## JFrog Artifactory and Xray [Copied!](#jfrog-artifactory-and-xray "Copy link to this section")

### What JFrog permission level does container ingestion require? [Copied!](#what-jfrog-permission-level-does-container-ingestion-require "Copy link to this section")

Read permission only.

### Does Cycode pull SCA or SAST results from JFrog Xray? [Copied!](#does-cycode-pull-sca-or-sast-results-from-jfrog-xray "Copy link to this section")

No. The integration syncs container image assets and pipelines for scanning by Cycode’s own scanners.

## BlackDuck [Copied!](#blackduck "Copy link to this section")

### How often does Cycode sync data from BlackDuck? [Copied!](#how-often-does-cycode-sync-data-from-blackduck "Copy link to this section")

Once per day via scheduled outbound API requests. Resolutions in BlackDuck appear in Cycode within about a day.

### What happens to imported violations when a BlackDuck project is deleted? [Copied!](#what-happens-to-imported-violations-when-a-blackduck-project-is-deleted "Copy link to this section")

Nothing automatic. The corresponding violations in Cycode remain and must be closed manually.

## Snyk [Copied!](#snyk "Copy link to this section")

### What happens to imported Snyk vulnerabilities when the Snyk license expires? [Copied!](#what-happens-to-imported-snyk-vulnerabilities-when-the-snyk-license-expires "Copy link to this section")

Existing imported vulnerabilities remain in Cycode. Re-sync stops working until the license is restored.

## CrowdStrike [Copied!](#crowdstrike "Copy link to this section")

## HackerOne and Bugcrowd [Copied!](#hackerone-and-bugcrowd "Copy link to this section")

### Do HackerOne and Bugcrowd integrations map vulnerabilities to specific repositories? [Copied!](#do-hackerone-and-bugcrowd-integrations-map-vulnerabilities-to-specific-repositories "Copy link to this section")

Repository information is displayed when available, but full vulnerability ownership mapping is a known gap.

## Akamai WAF [Copied!](#akamai-waf "Copy link to this section")

### What Akamai WAF events appear as violations in Cycode? [Copied!](#what-akamai-waf-events-appear-as-violations-in-cycode "Copy link to this section")

Relevant SIEM security events. “Deny” alerts are filtered out.

## Google Container Registry (GCR) [Copied!](#google-container-registry-gcr "Copy link to this section")

### Does scanning images in GCR incur cost? [Copied!](#does-scanning-images-in-gcr-incur-cost "Copy link to this section")

Yes. Google charges for data egress and API usage per scanned container. These are Google charges, not Cycode charges.

## Nexus [Copied!](#nexus "Copy link to this section")

### Is Nexus OSS supported? [Copied!](#is-nexus-oss-supported "Copy link to this section")

No. Only Nexus Repository (commercial) is supported. The integration is used for Maven and NPM dependency restore during SCA scans, and Nexus is supported for container image scanning through the container generic connector.

### Where do violations from Nexus integrations come from? [Copied!](#where-do-violations-from-nexus-integrations-come-from "Copy link to this section")

From Cycode’s own scanners during build. Not from Nexus itself.

## Rate limits [Copied!](#rate-limits "Copy link to this section")

### What rate limit applies to the Reports API? [Copied!](#what-rate-limit-applies-to-the-reports-api "Copy link to this section")

1 request per 5 seconds, with a maximum of 5 requests per minute per tenant. 429 is returned on exceedance.

### What rate limit applies to the file service and Violations API? [Copied!](#what-rate-limit-applies-to-the-file-service-and-violations-api "Copy link to this section")

About 600 requests per minute per token.

### How are rate-limit counters reset? [Copied!](#how-are-rate-limit-counters-reset "Copy link to this section")

Per-minute. Both “Hits” and “Peak” counters reset every minute.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
