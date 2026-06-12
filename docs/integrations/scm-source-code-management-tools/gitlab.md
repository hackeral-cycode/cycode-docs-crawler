# GitLab | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/gitlab

---

# GitLab

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/gitlab.md "Edit this page")

Updated on Dec 1, 2024 • Published on Nov 25, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating GitLab Cloud enables Cycode to scan your code and to:

*   Review code access and permissions
*   Audit significant events
*   Identify insecure configurations
*   Identify code leaks
*   Monitor secrets

After successfully integrating, Cycode starts pulling the data from your environment and running its policies.

🚧 Block merge requires GitLab Ultimate

Cycode’s **Block merge** feature for GitLab relies on GitLab’s External Status Checks API, which is available only on **GitLab Ultimate**; it is not available on GitLab Free or Premium. For details, see [Configure Pull Requests Scanners](/developer-experience/developers/pull-request-pr-scanning/pull-request-pr-scanners) .

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The integration user must have group-level permissions (Owner or Maintainer) on every GitLab group you want Cycode to monitor. Cycode only integrates with GitLab **groups**, not personal namespaces.

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

Cycode supports the following authentication methods for GitLab.

Method

Description

OAuth Identification

(Recommended) Authorize Cycode as an OAuth application in GitLab. Best practice is to create a dedicated `Cycode` GitLab user for the integration so PR comments aren’t attributed to an individual employee.

Personal access token (PAT)

Authenticate with a [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) generated for the integration user with read/write API scope.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating with Cycode:

Permissions

Cycode

Applies to

Why is access required?

API access scope

`api` (complete read/write)

All methods

Granted to the Cycode OAuth application (during authorization) or to the personal access token (at creation time). The `api` scope provides complete read/write access to the API, including all groups and projects, the container registry, and the package registry.

## Integrate with GitLab [Copied!](#integrate-with-gitlab "Copy link to this section")

### Integrate using OAuth [Copied!](#integrate-using-oauth "Copy link to this section")

Tip

When integrating with OAuth, comments in pull requests are posted under the identity of the user who authorized the integration. We recommend creating a dedicated “Cycode” service account to ensure correct attribution and to prevent the integration from breaking if that user leaves.

1.  Go to **Settings > Integrations**.

![](/assets/integration1.png)

2.  Click **Add Integration**.
    
3.  In the list of available SCMs, select **GitLab**.
    
4.  In step 1 (of 4) of the integration setup, select the **OAuth Identification** method and click **Next**.
    

!\[\](/assets/image(381%2529.png)

5.  In step 2, click **Connect GitLab**.

![](/assets/integration2.png)

6.  You’ll be transferred to GitLab. Click **Authorize** in the window that’s displayed.

![](/assets/gitlab-authorize.png)

You’ll now be transferred back to Cycode as the account connection is being established.

![](/assets/integration3.png)

Tip

Minimizing the integration wizard won’t halt data collection and you can return to this process at any time through the Integrations page.

7.  When the connection is completed, step 4 will be displayed. Select the organizations you’d like Cycode to monitor (the list of organizations displayed is the current list you have access to. If any are missing, reach out to your GitLab administrator). When done click **Next**.

![](/assets/integration4.png)

### Integrate using a personal access token [Copied!](#integrate-using-a-personal-access-token "Copy link to this section")

1.  Create a personal access token in GitLab with Read/Write access.
    
2.  Go to **Settings > Integrations**.
    

![](/assets/integration1.png)

3.  Click **Add Integration**.
    
4.  In the list of available SCMs, select **GitLab**.
    
5.  In step 1 (of 4) of the integration setup, select the **Access Identification** method and click **Next**.
    

![](/assets/integration1a.png)

6.  In step 2, enter your personal access token (which you created in step 1 above) and click **Connect GitLab**.

![](/assets/integration2a.png)

7.  You’ll be transferred to GitLab. Click **Authorize** in the window that’s displayed.

![](/assets/gitlab-authorize.png)

You’ll now be transferred back to Cycode as the account connection is being established.

![](/assets/integration3.png)

Tip

Minimizing the integration wizard won’t halt data collection and you can return to this process at any time through the Integrations page.

8.  When the connection is completed, step 4 will be displayed. Select the organizations you’d like Cycode to monitor (the list of organizations displayed is the current list you have access to. If any are missing, reach out to your GitLab administrator). When done click **Next**.

![](/assets/integration4.png)

## View the status of your monitored organizations and their scans [Copied!](#view-the-status-of-your-monitored-organizations-and-their-scans "Copy link to this section")

After you’ve connected your organizations (using either authentication method), you’ll see the list of connected organizations and their current status.

![](/assets/integration5.png)

1.  Clicking any organization displays information on the scan in two tabs:

![](/assets/integration6.png)

Here you’ll be able to see the details of the organization, including connection status, as well as information on the data being synced, and the initial scan.

2.  Click the **Repositories** tab to view detailed information on the synced repositories in the organization including the name, scanner type, scan duration, status of the initial scan, and the date.

![](/assets/integration7.png)

## GitLab integration FAQs [Copied!](#gitlab-integration-faqs "Copy link to this section")

### How often does Cycode update the GitLab integration data once a repository is added? [Copied!](#how-often-does-cycode-update-the-gitlab-integration-data-once-a-repository-is-added "Copy link to this section")

Cycode scans for new repositories every 3 hours.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
