# GitLab Self-Managed | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/gitlab-self-managed

---

# GitLab Self-Managed

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/gitlab-self-managed.md "Edit this page")

Updated on Mar 30, 2026 • Published on Mar 30, 2026

* * *

Integrating GitLab Enterprise enables Cycode to scan your code and to:

*   review code access and permissions
    
*   audit significant events
    
*   identify insecure configurations
    
*   identify code leaks
    
*   monitor secrets
    

Cycode can integrate with multiple GitLab Enterprise servers. After successfully integrating, Cycode starts pulling the data from your environment and running its policies.

🚧 WARNING

When applying the **Block merge** feature to repositories in the Gitlab Self-Managed SCM tool, this will block the merge of Merge Requests for **ALL** status checks configured in that repository. Also, this feature is only supported in Gitlab Self-Managed version **15.5** and later. See the [Configure Pull Requests Scanners](/developer-experience/developers/pull-request-pr-scanning/pull-request-pr-scanners) page for more details on this feature.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating with Cycode:

Permissions

Cycode

Why is Write Access Required?

Admin-level permissions

Admin

Cycode requires a GitLab administrator account to perform the integration. Verify that you have the correct account level before proceeding

API

Complete Read/Write

Integration is done using an OAuth application; you’ll need to grant **complete read/write access** to the API, including all groups and projects, the container registry, and the package registry

Syslog

Read

Integration is done using an OAuth application; to integrate Syslog, you’ll need to configure log forwarding on the instance itself. To enable this, open ports for Syslog in addition to HTTPS (443). This will enable Cycode to see activities such as clones and zip downloads.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

This feature is only supported in Gitlab Self-Managed version **15.5** and later. See the [Configure Pull Requests Scanners](/developer-experience/developers/pull-request-pr-scanning/pull-request-pr-scanners) page for more details on this feature.

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

## Integrating with GitLab Enterprise Server [Copied!](#integrating-with-gitlab-enterprise-server "Copy link to this section")

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

## Enabling GitLab Admin mode [Copied!](#enabling-gitlab-admin-mode "Copy link to this section")

If you’ve enabled GitLab **admin\_mode** in the GitLab permissions, by toggling the **Enable Admin feature?** on, you’ll be able to grant users permission to perform API actions.

Note that both the Cycode feature AND the GitLab permissions will need to be enabled to allow Admin mode.

1.  To enable in GitLab, select the **Trusted** checkbox.
    
2.  Then in the **Scopes** list, select **api**, scroll down to the bottom of the list and select **admin\_mode**.
    

![](/assets/gitlab-self-managed-2.png)

### Accessing the GitLab admin area [Copied!](#accessing-the-gitlab-admin-area "Copy link to this section")

**Relevant for Free, Premium, and Ultimate self-managed accounts** The GitLab admin area provides a UI for managing and configuring features of GitLab self-managed instances. If you’re an administrator, to access the Admin Area:

*   In GitLab 16.7 and later: on the left sidebar, at the bottom, select **Admin Area**.
    
*   In GitLab 16.1 and later: on the left sidebar, select **Search** or go to, then select **Admin Area**.
    
*   In GitLab 16.0 and earlier: on the top bar, select **Main menu > Admin**.
    

To learn more about GitLab Enterprise Admin mode, see the [GitLab documentation](https://docs.gitlab.com/ee/administration/settings/sign_in_restrictions.html#admin-mode) .

### Known limitation [Copied!](#known-limitation "Copy link to this section")

To avoid duplicated IDs, we’ve disabled syncing groups or repositories that are shared from another source, so that only the original repositories / projects will be synced.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
