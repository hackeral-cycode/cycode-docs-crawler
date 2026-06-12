# GitHub Enterprise Server | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/github-enterprise-server

---

# GitHub Enterprise Server

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/github-enterprise-server.md "Edit this page")

Updated on Mar 30, 2026 • Published on Mar 30, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can integrate GitHub Enterprise with Cycode to enable scanning your code and:

*   Review code access and permissions
    
*   Audit significant events
    
*   Identify insecure configurations
    
*   Identify code leaks
    
*   Monitor secrets
    

After the integration is complete, Cycode starts scanning your environment and applying its policies.

Note

This integration also supports **GitHub Enterprise Cloud** ([ghe.com](http://ghe.com) ).

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   Cycode only integrates with a GitHub Server administrator account. Verify that you have an admin account set up.
    
*   Verify that the following ports are open: `443` (or the current default port you’ve configured in your organization), `9000`, and `9443`.
    
*   Open inbound and outbound connectivity between Cycode IPs and the on-premises GitHub Enterprise instance on the following IPs:
    
    *   *   US SaaS:
            
            *   `34.230.110.76`
            *   `54.205.205.122`
            *   `18.209.26.95`
            *   `3.226.104.48`
            *   `34.74.159.168`
        *   EU SaaS:
            
            *   `52.58.81.134`
            *   `52.29.182.96`
            *   `3.69.177.124`
            *   `3.127.9.222`

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

Cycode supports the following authentication method for GitHub Enterprise Server.

Method

Description

GitHub App

Install a custom Cycode GitHub App on your GitHub Enterprise Server instance through a [Cycode Broker](/cycode-settings/cycode-broker/) . The app is generated from a manifest that Cycode provides, then installed on your GHES instance. Unlike GitHub Cloud, GHES customers don’t choose between Default and Read-only variants; the integration uses a single custom app with the full-permission set listed in [Permissions](#permissions) below.

## Permissions [Copied!](#permissions "Copy link to this section")

The following table lists the permissions required to integrate with Cycode.

Permissions

Access

Why is this Access Required?

**Repository**

Actions

Read

Sync organization pipelines settings and workflows

Administration

Read/Write

Read - Fetch branch protections Write - Add branch protection and block the merging of PRs

Checks

Read/Write

Read - Fetch commit status checks Write - Required for the status “In-progress” in the GitHub pipeline

Commit statuses

Read/Write

Read - Sync status checks and Cycode’s PR statuses Write - Add fail/success status checks to PRs

Contents

Read/Write

Read - Fetch repository content, commits, branches, etc. Write - Remediate code-related issues

Dependabot Alerts

Read

Register for Dependabot alerts

Metadata

Read

Mandatory

Pull requests

Read/Write

Read - Read comments and PRs Write - Add PR comments and create PRs for remediation

Webhooks

Read

Sync repository webhooks

Code scanning alerts

Read

Access CodeQL alerts

Custom properties

Read

Access repository custom properties

**Organization**

Administration

Read

Workflow permissions and third-party apps

Members

Read/Write

Read - Fetch members, outside collaborators, and teams Write - Members’ remediations

Plan

Read

View an organization’s plan

Webhooks

Read

Sync organization webhooks

Custom properties

Read

Access organization custom properties

Personal Access Tokens

Read

Access fine-grained tokens

Secrets

Read

Access organization build workflow secrets

### Webhook events [Copied!](#webhook-events "Copy link to this section")

Cycode is monitors the following webhook events:

Event

Why is this Event Required?

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

Fork

Detect private repository forks for inventory and discovery

Issue Comment

Determine whether a user was active in a repository (access review detector, inventory, and discovery)

Issues

Determine whether a user was active in a repository (access review detector, inventory, and discovery)

Member

Track repository collaborators for access review, inventory, and discovery

Membership

Track team members for access review, inventory, and discovery

Organization

Track member additions/deletions and organization renames (inventory, discovery, and access review)

Pull Request

Track PR events for scanning, blocking merges, inventory, and discovery

Pull Request Review

Track user activity on repositories for access review, inventory, and discovery

Pull Request Review Comment

Tracks Cycode’s PR comments and developer comments for scanning and blocking merges

Push

Scan code

Repository

Track repository events such as additions, deletions, renames, and transfers for scanning, inventory, and discovery

Status

Track pull request commit statuses for inventory and discovery

Team

Track team events for access review, inventory, and discovery

## Integrate with GitHub Enterprise Server [Copied!](#integrate-with-github-enterprise-server "Copy link to this section")

1.  Verify that all the prerequisites above are in place.
    
2.  Go to **Settings > Integrations**. ![integration1.png](/assets/integration1.png)
    
3.  Click **Add Integration**.
    
4.  In the list of available SCMs, select **GitHub Enterprise App**.
    
5.  In step 1 (of 3) of the integration setup:
    
    1.  Enter a name for the integration.
    2.  In the Select Broker dropdown, select a [Cycode Broker](/cycode-settings/cycode-broker/) (if you’re not using a broker, leave the default None selection).
    3.  In the Instance URL field, enter the URL of the instance; note that the instance must be accessible from outside the network.
6.  Click **Connect GitHub App**. ![image.png](/assets/image-28389-29.png)
    
7.  You’ll now be redirected to GitHub to initiate the authorization process with Cycode. Click **Create GitHub App for**. ![image.png](/assets/image-28390-29.png)
    
8.  In step 2 of the setup, verify the instance URL and the app name, and click **Install**. ![image.png](/assets/image-28391-29.png)
    
9.  In the integration dialog, select in which organizations you wish to configure:
    

![](/assets/image-28392-29.png)

You’ll be returned to the Cycode installer, which shows you that an account connection is being established.

![](/assets/image-28393-29.png)

Tip

Minimizing the integration wizard won’t halt data collection and you can return to this process at any time through the Integrations page.

### Integrate additional organizations [Copied!](#integrate-additional-organizations "Copy link to this section")

You can integrate additional organizations. To add an organizations, click **Add Organization**, and then follow the instructions above.

![](/assets/image-28394-29.png)

### View the status of your monitored organizations and their scans [Copied!](#view-the-status-of-your-monitored-organizations-and-their-scans "Copy link to this section")

After you’ve connected your organizations (using either authentication method), you’ll see the list of connected organizations and their current status. ![image.png](/assets/image-28395-29.png)

Click any organization to display information on the scan in two tabs:

*   The Overview tab shows the details of the organization including the connection status, information about the data being synced, and the initial scan.

![integration6b.png](/assets/integration6b.png)

*   The Repositories tab shows detailed information on the synced repositories in the organization including the name, scanner type, scan duration, status of the initial scan, and the date.  ![image.png](/assets/image-28396-29.png)

### Enable Syslog forwarding [Copied!](#enable-syslog-forwarding "Copy link to this section")

1.  In the **GitHub Enterprise Management Console** settings page, in the left sidebar, click **Monitoring**.
    
2.  Select **Enable log forwarding.**
    
3.  In the **Server Address** field, enter `syslog.:9443`. You can specify multiple addresses by using a comma-separated list.
    
4.  In the **Protocol** dropdown menu, select **TCP**.
    
5.  Select **Enable TLS**.
    
6.  Click **Choose File** and upload the PEM file provided by Cycode.
    
7.  Click **Save** settings.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
