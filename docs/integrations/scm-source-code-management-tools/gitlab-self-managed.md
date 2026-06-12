# GitLab Self-Managed | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/gitlab-self-managed

---

# GitLab Self-Managed

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/gitlab-self-managed.md "Edit this page")

Updated on Mar 30, 2026 • Published on Mar 30, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating GitLab Enterprise enables Cycode to scan your code and to:

*   review code access and permissions
    
*   audit significant events
    
*   identify insecure configurations
    
*   identify code leaks
    
*   monitor secrets
    

Cycode can integrate with multiple GitLab Enterprise servers. After successfully integrating, Cycode starts pulling the data from your environment and running its policies.

🚧 Block merge caveat

When the Cycode **Block merge** feature is enabled on a GitLab Self-Managed repository, the merge of a Merge Request is blocked until **all** status checks configured on that repository pass - not only Cycode’s checks. Block merge relies on GitLab’s External Status Checks API, which is available only on **GitLab Ultimate** (Self-Managed version **15.5** or later); it is not available on GitLab Free or Premium. For details, see [Configure Pull Requests Scanners](/developer-experience/developers/pull-request-pr-scanning/pull-request-pr-scanners) .

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The integration user must be a GitLab administrator on the Self-Managed instance. Verify that you have the correct account level before proceeding.
    
*   The integration user must have group-level permissions (Owner or Maintainer) on every GitLab group you want Cycode to monitor. Cycode only integrates with GitLab **groups**, not personal namespaces.
    
*   Open inbound and outbound connectivity between Cycode and the on-premises GitLab instance on the following IPs: US SaaS:
    
    *   `34.230.110.76`
    *   `54.205.205.122`
    *   `18.209.26.95`
    *   `34.74.159.168`
    *   `3.226.104.48`
    
    EU SaaS:
    
    *   `52.58.81.134`
    *   `52.29.182.96`
    *   `3.69.177.124`
    *   `3.127.9.222`

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

Cycode supports the following authentication methods for GitLab Self-Managed.

Method

Description

OAuth application

(Recommended) Register an OAuth application on your GitLab Self-Managed instance and provide its Application ID and Client Secret to Cycode. For setup steps, see [Integrate with GitLab Enterprise Server](#integrate-with-gitlab-enterprise-server) below.

Personal access token (PAT)

Authenticate with a [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) generated on your GitLab Self-Managed instance for the integration user with read/write API scope.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating with Cycode:

Permissions

Cycode

Applies to

Why is access required?

API access scope

`api` (complete read/write)

All methods

Granted to the OAuth application (during authorization) or to the personal access token (at creation time). The `api` scope provides complete read/write access to the API, including all groups and projects, the container registry, and the package registry.

Admin mode

`admin_mode` scope + Trusted flag

OAuth only (optional)

Required only if you want Cycode to perform admin-level API actions on the instance without requiring manual admin-mode elevation. See [Admin mode](#admin-mode) below.

Syslog

Read

All methods

To integrate Syslog, you’ll need to configure log forwarding on the instance itself. To enable this, open ports for Syslog in addition to HTTPS (443). This will enable Cycode to see activities such as clones and zip downloads.

### Admin mode [Copied!](#admin-mode "Copy link to this section")

GitLab’s [admin\_mode](https://docs.gitlab.com/ee/administration/settings/sign_in_restrictions.html#admin-mode) feature requires administrators to explicitly elevate to admin mode before performing administrative API actions. To let Cycode perform admin-level API actions without manual elevation, grant the OAuth application the `admin_mode` scope and mark the application as Trusted.

Both the Cycode **Enable Admin feature?** toggle AND the GitLab OAuth application settings must be enabled for admin mode to take effect.

1.  In GitLab, on the Cycode OAuth application, select the **Trusted** checkbox.
    
2.  In the **Scopes** list, select **api**, scroll to the bottom of the list, and select **admin\_mode**.
    

![](/assets/gitlab-self-managed-2.png)

#### Access the GitLab admin area [Copied!](#access-the-gitlab-admin-area "Copy link to this section")

**Relevant for Free, Premium, and Ultimate self-managed accounts**

The GitLab admin area provides a UI for managing and configuring features of GitLab self-managed instances. If you’re an administrator, to access the Admin Area:

*   In GitLab 16.7 and later: on the left sidebar, at the bottom, select **Admin Area**.
    
*   In GitLab 16.1 and later: on the left sidebar, select **Search** or go to, then select **Admin Area**.
    
*   In GitLab 16.0 and earlier: on the top bar, select **Main menu > Admin**.
    

To learn more about GitLab Enterprise Admin mode, see the [GitLab documentation](https://docs.gitlab.com/ee/administration/settings/sign_in_restrictions.html#admin-mode) .

## Integrate with GitLab Enterprise Server [Copied!](#integrate-with-gitlab-enterprise-server "Copy link to this section")

Tip

When integrating with OAuth, comments in pull requests are posted under the identity of the user who authorized the integration. We recommend creating a dedicated “Cycode” service account to ensure correct attribution and to prevent the integration from breaking if that user leaves.

For each GitLab Enterprise server to be integrated, follow the instructions below:

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  This displays the Add Integration window. Click **GitLab Self-Managed**.
    

![](/assets/56e05e0-image.png)

The following page is displayed:

![](/assets/gitlab-self-managed-1.png)

![](/assets/image%2895%29.png)

3.  Click **Create a new OAuth application**.
    
4.  In the new window that loads, register a new OAuth application on your GitLab Server instance according to the steps shown in the platform.
    
5.  Copy your **Application ID** and **Client Secret** from the instance and enter them in Cycode.
    
6.  Click **Done**.
    
7.  Click **Authorize** in the window that pops-up.
    

Once you authorize the integration, the integrations area reloads and shows that GitLab Enterprise is connected.

## Known limitations [Copied!](#known-limitations "Copy link to this section")

To avoid duplicated IDs, we’ve disabled syncing groups or repositories that are shared from another source, so that only the original repositories / projects will be synced.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
