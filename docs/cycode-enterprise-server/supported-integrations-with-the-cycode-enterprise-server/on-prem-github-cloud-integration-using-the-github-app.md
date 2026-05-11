# On-prem: GitHub Cloud integration using the GitHub App | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-github-cloud-integration-using-the-github-app

---

# On-prem: GitHub Cloud integration using the GitHub App

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-github-cloud-integration-using-the-github-app.md "Edit this page")

Updated on Apr 14, 2024 • Published on Apr 14, 2024

* * *

This document covers how to integrate GitHub using the GitHub App option.

## Requirements [Copied!](#requirements "Copy link to this section")

*   Admin access to the GitHub organizations to be integrated

## Setting up the GitHub App [Copied!](#setting-up-the-github-app "Copy link to this section")

The first step is to create the GitHub App that will be used for the integration.

### Create a New GitHub App [Copied!](#create-a-new-github-app "Copy link to this section")

Below are the steps for creating a GitHub App for the Cycode integration:

1.  Navigate to the following URL:  
    `https://github.com/organizations/{{organization_name}}/settings/apps/new`  
    You should see the following page come up:

![](/assets/a424d03-github_app_new.png)

2.  Give the app a name in the **GitHub App name** field:

![](/assets/5b4d927-github_app_name.png)

3.  Add your app URL to the **Homepage URL** (e.g., `https://app.{{environment}}.{{domain}}`:
4.  In the **Post Installation** section, fill out the **Setup URL (optional)** field with the following URL:  
    `https://app.{{environment}}.{{domain}}/connect/github-app/callback`

![](/assets/0db32f9-github_app_setup_url.png)

5.  Select the **Redirect on update** checkbox:

![](/assets/2d8a1f6-github_app_redirect.png)

6.  Under the **Webhook** section, fill out the following fields:
7.  Select the **Active** checkbox:

![](/assets/8481179-github_app_active.png)

8.  Use the following URL in the **Webhook URL** field:  
    `https://api.{{environment}}.{{domain}}/github-dispatcher/api/v1/webhook`

![](/assets/65f5806-github_app_webhook_url.png)

9.  The following **Repositories Permissions** need to be set (if going with `Read-Only` permissions, switch any `Read & write` to `Read-Only`):
    
    *   Actions - `Read-Only`
    *   Administration - `Read & write`
    *   Checks - `Read & write`
    *   Commit statuses - `Read & write`
    *   Contents - `Read & write`
    *   Deployments - `Read-Only`
    *   Issues - `Read & write`
    *   Metadata - `Read-Only`
    *   Packages - `Read-Only`
    *   Pages - `Read-Only`
    *   Projects - `Read-Only`
    *   Pull Requests - `Read & write`
    *   Webhooks - `Read-Only`
10.  The following **Organization Permissions** need to be set (if going with `Read-Only` permissions, switch any `Read & write` to `Read-Only`):
     
     *   Administration - `Read & write`
     *   Blocking users - `Read & write`
     *   Members - `Read & write`
     *   Plan - `Read-Only`
     *   Projects - `Read-Only`
     *   Team Discussions - `Read & write`
     *   Webhooks - `Read-Only`
11.  The following **User Permissions** need to be set (if going with `Read-Only` permissions, switch any `Read & write` to `Read-Only`):
     
     *   Block another user - `Read & write`
     *   Email addresses - `Read-Only`
     *   Plan - `Read-Only`
     *   Followers - `Read-Only`
     *   Starring - `Read-Only`
     *   Watching - `Read-Only`
12.  Once all the permissions are set, under the **Subscribe to events** section, select the following checkboxes:
     
     *   Meta
     *   Branch protection rule (Only available in latest Github enterprise versions)
     *   Check suite
     *   Create
     *   Delete
     *   Fork
     *   Issues
     *   Member
     *   Membership
     *   Organization
     *   Pull Request
     *   Pull Request review
     *   Pull request review comment
     *   Push
     *   Repository
     *   Status
     *   Team
     *   Team add
13.  In the **Where can this GitHub App be installed?** section, choose the **Only on this account** option.
     

![](/assets/88bb55f-github_app_only_this_account.png)

14.  Click **Create GitHub App** to create the app.

### Create Private Key for GitHub App [Copied!](#create-private-key-for-github-app "Copy link to this section")

1.  Once the application is created, a warning will popup:

![](/assets/d7a6eb3-github_app_private_key_popup.png)

2.  Click the **generate a private key** link.
3.  Then, click **Generate a private key** to generate a new private key:

![](/assets/998712b-github_app_private_key_button.png)

The new key will be generated and downloaded to your local device:

![](/assets/203df49-github_app_save_private_key.png)

## Configuring Cycode to Integrate with GitHub App [Copied!](#configuring-cycode-to-integrate-with-github-app "Copy link to this section")

### Setup for Configuration [Copied!](#setup-for-configuration "Copy link to this section")

First, you will need the following three items:

1.  The application name from the URL:  
    For example: `https://github.com/organizations/myorganization/settings/apps/testing-stuff`  
    The application name is `testing-stuff` and will be referred to as `app_name` in the rest of this document.
    
2.  The `App ID` as appears in the **About** section of the GitHub App detail page (it will be a number, e.g., 6).
    
    This will be referred to as `app_id` in the rest of this document.
    
3.  The private key downloaded from the previous section. It will need to be transformed into a one line string. For example, if the key is as follows:
    
    ```
    1
    2
    3
    4
    5
    ```
    
    ```text
    -----BEGIN RSA PRIVATE KEY-----
    line1
    line2
    line3
    -----END RSA PRIVATE KEY-----
    ```
    
    You will want to save this value as `line1line2line3`. This value will be referred to as `one_line_key` for the rest of this document.
    

### Integrating with GitHub App [Copied!](#integrating-with-github-app "Copy link to this section")

1.  Open you deployment YAML file for the Cycode installation.
    
2.  Add the following block to the `config` ConfigMap section of the YAML file (refer to this reference for the location):
    
    ```
    1
    2
    3
    4
    5
    ```
    
    ```hcl
    github_global_setting = {
      github_app_name = "{{app_name}}"
      github_app_id = {{app_id}}
      github_app_private_key = "{{one_line_key}}"
    }
    ```
    
3.  Replace the `{{app_name}}`, `{{app_id}}`, and `{{one_line_key}}` in Step 2 with the matching values for `app_name`, `app_id`, and `one_line_key` gathered in the previous section. Make sure to not add any `"` around the `app_id`.
    
4.  Save the YAML file with these changes.
    
5.  Follow the steps in the [Update Cycode Instance](/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-gitlab-integration) process to push the changes to your Cycode installation.
    
6.  Once the update is completed, log in to Cycode.
    
7.  Follow the steps for integrating GitHub as detailed [here](/integrations/scm-source-code-management-tools/github-enterprise-server) .
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
