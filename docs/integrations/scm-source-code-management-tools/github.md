# GitHub | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/github

---

# GitHub

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/github.md "Edit this page")

Updated on Jan 29, 2026 • Published on Jan 21, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating GitHub Cloud enables Cycode to scan your code and:

*   Detect hardcoded secrets in code
    
*   Detect vulnerabilities in code and 3rd party packages
    
*   Review code access and permissions
    
*   Audit significant events
    
*   Identify insecure configurations
    

After the integration is complete, Cycode starts scanning your environment and applying its policies.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

Cycode only integrates with GitHub **organizations**. Verify that you have the right permissions to approve these integrations before proceeding.

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

Cycode supports the following authentication method for GitHub.

Method

Description

GitHub App

Install the Cycode GitHub App in your GitHub organization. The app is available in a Default variant and a Read-only variant. For the comparison, see [GitHub App variants](#github-app-variants) below.

## Permissions [Copied!](#permissions "Copy link to this section")

### GitHub App variants [Copied!](#github-app-variants "Copy link to this section")

The Cycode GitHub App is available in two variants. Choose the variant that matches the access you can grant Cycode; the Read-only variant requires fewer permissions but supports a reduced set of capabilities.

Variant

Description

Default

Full-permission app. Enables PR scanning, status checks, block-merge, and remediation flows. Recommended for most integrations.

Read-only

Read-only app. Supports repository discovery, baseline and on-demand scans, and access review. PR-flow features (status checks, comments, block-merge, remediation) are not supported.

The following table lists the Cycode features that require the Default app, and the features that are supported with the Read-only variant.

Feature

Default

Read-only

Detect violations and vulnerabilities in code

Yes

Yes

Review code access and permissions

Yes

Yes

Audit significant events

Yes

Yes

Identify insecure configurations

Yes

Yes

Scan pull requests for status check update

Yes

**X**

Scan pull requests and add comments with violation details

Yes

**X**

Scan pull requests with remediation (open pull request with IaC/SCA fix)

Yes

**X**

Scan pull requests and **block merge**

Yes

**X**

Support repository vulnerability alerts disabled policy

Yes

**X**

General remediation support

Yes

**X**

**Advanced Capabilities**

Access review policies

**X**

**X**

`Public organization association` policy remediation

**X**

**X**

`2FA is disabled for user` policy

**X**

**X**

### Required permissions [Copied!](#required-permissions "Copy link to this section")

The following permissions are required for integrating with Cycode. The **Default** column shows the access required by the Default app; the **Read-only** column shows the reduced access requested by the Read-only variant.

Permissions

Default

Read-only

Why is this access required?

**Repository**

Actions

Read

Read

Sync organization pipeline settings and workflows

Administration

Read/Write

Read

Read - Fetch branch protections Write - Add branch protection and block merging of PRs

Checks

Read/Write

Read

Read - Fetch commit status checks Write - Required for the status “In-progress” in the GitHub pipeline

Commit statuses

Read/Write

Read

Read - Sync status checks and the PR status in Cycode Write - Add fail/success status checks to PRs

Contents

Read/Write

Read

Read - Fetch repository content, commits, branches, etc. Write - Remediate code-related issues

Dependabot Alerts

Read

Read

Register for Dependabot alerts

Issues

Read

Read

Fetch contributing members’ issues to assess necessary permissions

Merge Queue

Read

Read

Register for merge queue events

Metadata

Read

Read

Mandatory

Secrets

Read

Read

Sync repository action secrets

Pull requests

Read/Write

Read

Read - Read comments and PRs Write - Add PR comments and create PRs for remediation

Webhooks

Read

Read

Sync repository webhooks

Code scanning alerts

Read

Read

Fetch CodeQL scanning alerts

Custom properties

Read

Read

Fetch repository custom properties

**Organization**

Administration

Read

Read

Fetch workflow permissions and third-party apps

Members

Read/Write

Read

Read - Fetch members, outside collaborators, and teams Write - Member remediations

Plan

Read

Read

View an organization’s plan

Webhooks

Read

Read

Sync organization webhooks

Custom properties

Read

Read

Access organization custom properties

Personal Access Tokens

Read

Read

Access fine-grained tokens

Secrets

Read

Read

Access organization build workflow secrets

Note

Enabling read-write permission for checks enables Cycode to implement the status “In progress” on PR scans when the scan reaches GitHub.

To enable this status, you’ll need to approve our GitHub app permission update. This will move the “checks” permission from **read** access to **read and write** access.

![](/assets/eaea01e-image.png)

### Webhook events [Copied!](#webhook-events "Copy link to this section")

Cycode monitors the following webhook events.

Event

Why is this event required?

Meta

Events for when the app is removed, triggering token invalidation with the appropriate reason

Branch Protection Rule

CI/CD security violations and block merge logic

Code scanning alert

CodeQL integration

Check Runs

Pull request commit statuses for inventory and discovery

Check Suite

Workflow jobs and runs for inventory and discovery

Create & Delete

Branch and tag events for inventory, discovery, and auto-resolving

Custom property

Repository custom property events for labels

Custom property values

Repository custom property events for labels

Dependabot Alert

Dependabot integration

Fork

Detects private repository forks for inventory and discovery

Issue Comment

Determine whether a user was active in a repository (access review detector, inventory, and discovery)

Issues

Determine whether a user was active in a repository (access review detector, inventory, and discovery)

Member

Track repository collaborators for access review, inventory, and discovery

Membership

Track team members for access review, inventory, and discovery

Merge Group

Manages merge queues, block merges, and PR scans for inventory and discovery

Organization

Tracks member additions/deletions and organization renames (inventory, discovery, and access review)

Pull Request

Track PR events for scanning, blocking merges, inventory, and discovery

Pull Request Review

Track user activity on repositories for access review, inventory, and discovery

Pull Request Review Comment

Track Cycode’s PR comments and developer comments for scanning and blocking merges

Push

For scanning code

Repository

Track repository events such as additions, deletions, renames, and transfers for scanning, inventory, and discovery

Status

Track pull request commit statuses for inventory and discovery

Team

Track team events for access review, inventory, and discovery

Team Add

Currently not used, keeping in case will be needed in the future

## Integrate with GitHub [Copied!](#integrate-with-github "Copy link to this section")

1.  Go to **Settings > Integrations**.
    
2.  Click **Add Integration**.
    
3.  In the list of available SCMs, select **GitHub**.
    
4.  In step 1 of the integration setup, click **Connect GitHub**. You are redirected to GitHub to initiate the authorization process with Cycode.
    
5.  In the Install Cycode Security dialog, select in which organization you want to configure:
    

![](/assets/integration3b.png)

6.  In the GitHub app, select the repositories you want to include (you can select all of them or only specific ones).

![](/assets/image-28385-29.png)

7.  When done, click **Save**. You are returned to the Cycode installer, which shows you that an account connection is being established.

Note

Minimizing the integration wizard won’t halt data collection and you can return to this process at any time through the Integrations page.

### Integrate additional organizations [Copied!](#integrate-additional-organizations "Copy link to this section")

You can integrate additional organizations. In the Connected Organizations page of the wizard, click **Add organization** and follow the connection procedure described above.

### View the status of your monitored organizations and their scans [Copied!](#view-the-status-of-your-monitored-organizations-and-their-scans "Copy link to this section")

After you’ve connected your organizations (using either authentication method), you’ll see the list of connected organizations and their current status.

1.  Click any organization to display information on the scan in two tabs.
2.  Click the Repositories tab to view detailed information about the synced repositories in the organization including the name, scanner type, scan duration, status of the initial scan, and the date.

### Elevate permissions for a connected organization [Copied!](#elevate-permissions-for-a-connected-organization "Copy link to this section")

If you previously connected an organization as a read-only GitHub application, you can elevate the application permissions so the integration type is default application (full permissions).

Elevating permissions enables the integration with Cycode to go beyond monitoring, so the platform can perform actions such as opening pull requests to remediate violations.

1.  In the Connected organizations page, find the application whose permissions you want to elevate, and from the **More actions** menu select **Elevate permissions**.
    
2.  In the Elevate GitHub permissions page, click **Elevate**.
    
3.  In the GitHub Apps install page, click **Install**.
    

The GitHub app is re-installed as a default application with the required read and write permissions.

## View results in the GitHub page [Copied!](#view-results-in-the-github-page "Copy link to this section")

In the GitHub page, after completing a pull request (PR), if there are violations found, you can view more details using the “View More Details on Cycode Security” link provided. When you click this link the Cycode homepage opens, where you can then navigate to the relevant violations.

## Support for GitHub issue tracking [Copied!](#support-for-github-issue-tracking "Copy link to this section")

By default, new GitHub integrations provide support for GitHub issue tracking. For more information, go to [GitHub issue tracking](/integrations/issue-tracking-ticketing-tools/github-issue-tracking) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
