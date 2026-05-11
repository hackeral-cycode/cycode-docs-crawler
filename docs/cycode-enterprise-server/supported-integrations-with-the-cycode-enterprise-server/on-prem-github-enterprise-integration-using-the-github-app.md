# On-prem: GitHub Enterprise integration using the GitHub App | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-github-enterprise-integration-using-the-github-app

---

# On-prem: GitHub Enterprise integration using the GitHub App

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-github-enterprise-integration-using-the-github-app.md "Edit this page")

Updated on Aug 14, 2024 • Published on Jul 29, 2024

* * *

This document covers how to integrate GitHub Enterprise using the GitHub App option.

## Requirements [Copied!](#requirements "Copy link to this section")

*   Admin access to the GitHub Enterprise environment

## Setting up the GitHub App [Copied!](#setting-up-the-github-app "Copy link to this section")

The first step is to create the GitHub App that will be used for the integration.

Note

If you have existing integration with Cycode `GitHub Enterprise App` and you wish to add an additional organization to the same instance URL, you’ll need to use the `Reconnect` button within the Cycode `GitHub Enterprise App` settings page.

### Create a New GitHub App [Copied!](#create-a-new-github-app "Copy link to this section")

These are the steps for creating a GitHub App for the Cycode integration:

1.  Navigate to the following URL:  
    `https://{{github_instance_domain}}/organizations/{{organization_name}}/settings/apps/new`  
    You should see the following page displayed:

![](/assets/fca5909-github_app_new.png)

2.  Give the app a name in the **GitHub App name** field:

![](/assets/bddd00e-github_app_name.png)

3.  Add your app URL to the **Homepage URL** (e.g., `https://app.{{environment}}.{{domain}}`):

![](/assets/09c05d8-github_app_homepage_url.png)

4.  In the **Post Installation** section, fill out the **Setup URL (optional)** field with the following URL: `https://app.{{environment}}.{{domain}}/connect/github-enterprise-app/callback`:

![](/assets/87e0483-github_app_setup_url.png)

5.  Select the **Redirect on update** checkbox:

![](/assets/7671792-github_app_redirect.png)

6.  Under the **Webhook** section, fill out the following fields:
    1.  Select the **Active** checkbox:

![](/assets/099136b-github_app_active.png)

2.  Use the following URL in the **Webhook URL** field:  
    `https://api.{{environment}}.{{domain}}/github-dispatcher/api/v1/webhook`

![](/assets/89523f5-github_app_webhook_url.png)

7.  Set the following **Repositories Permissions** (if you’re using `Read-Only` permissions, switch any `Read & write` to `Read-Only`):
    
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
8.  Set the following **Organization Permissions** (if going with `Read-Only` permissions, switch any `Read & write` to `Read-Only`):
    
    *   Administration - `Read & write`
    *   Blocking users - `Read & write`
    *   Members - `Read & write`
    *   Plan - `Read-Only`
    *   Projects - `Read-Only`
    *   Team Discussions - `Read & write`
    *   Webhooks - `Read-Only`
9.  Set the following **User Permissions** (if going with `Read-Only` permissions, switch any `Read & write` to `Read-Only`):
    
    *   Block another user - `Read & write`
    *   Email addresses - `Read-Only`
    *   Plan - `Read-Only`
    *   Followers - `Read-Only`
    *   Starring - `Read-Only`
    *   Watching - `Read-Only`
10.  Once all the permissions are set, under the **Subscribe to events** section, select the following checkboxes:
     
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
11.  In the **Where can this GitHub App be installed?** section, choose the **Any account** option.
     

![](/assets/d46d8bb-github_app_any_account.png)

12.  Click **Create GitHub App** to create the app.

### Create a private key for GitHub App [Copied!](#create-a-private-key-for-github-app "Copy link to this section")

1.  Once the application is created, a notification will pop up. Click the **generate a private key** link.

![](/assets/5f80574-github_app_private_key_popup.png)

2.  Next, click the **Generate a private key** button to generate a new private key:

![](/assets/3ca7c36-github_app_private_key_button.png)

The new key will be generated and downloaded to your local device:

## Configuring Cycode to integrate with the GitHub App [Copied!](#configuring-cycode-to-integrate-with-the-github-app "Copy link to this section")

### Configuration setup [Copied!](#configuration-setup "Copy link to this section")

First, you’ll need the following three items:

1.  The application name from the URL:  
    For example: `https://github.com/organizations/myorganization/settings/apps/testing-stuff`, where the application name is `testing-stuff` and will be referred to as `app_name` in this document.
2.  The `App ID`, which appears in the **About** section of the GitHub App detail page (this will be a number, e.g., 6) and will be referred to as `app_id` in this document.

![](/assets/b8e350c-github_app_app_id.png)

3.  The private key downloaded from the previous section. The key will need to be transformed into a one line string. For example, if the key is as follows:
    
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
    
    You’ll want to save this value as `line1line2line3`. This value will be referred to as `one_line_key` for the rest of this document.
    

### Integrating with the GitHub App [Copied!](#integrating-with-the-github-app "Copy link to this section")

1.  Open your deployment YAML file for the Cycode installation.
    
2.  Add the following block to the `config` ConfigMap section of the YAML file (see this reference for the location):
    
    ```
    github_app_configuration_enabled                        = true
    ```
    
3.  Save the YAML file with these changes.
    
4.  Follow the steps in the [Update Cycode Instance](/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-azure-devops-integration) process to push the changes to your Cycode installation.
    
5.  Once the update completes, log in to Cycode through a fresh browser.
    
6.  Follow the steps for integrating GitHub as detailed [here](/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-github-enterprise-integration-using-the-github-app) .
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
