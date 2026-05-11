# On-prem: GitLab integration | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-gitlab-integration

---

# On-prem: GitLab integration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-gitlab-integration.md "Edit this page")

Updated on Apr 14, 2024 • Published on Apr 14, 2024

* * *

## Requirements [Copied!](#requirements "Copy link to this section")

*   Admin access to the Gitlab projects
*   Admin access to Kubernetes cluster

## Create the GitLab OAuth app [Copied!](#create-the-gitlab-oauth-app "Copy link to this section")

1.  Log in to your Gitlab account.
2.  In the top right-hand, click your user and click **Preferences**:

![](/assets/5389a4a-user_preferences.png)

3.  Click \*\*Applications \*\*in the left sidebar:

![](/assets/c193a3e-applications.png)

You’ll see the following page load:

![](/assets/e891c11-gitlab_application_form.png)  
4\. Enter a name for the application (i.e. Cycode App) in the **Name** field:

![](/assets/9e32154-gitlab_application_name.png)

5.  Enter the following URL in the Redirect URL field: `https://app.{{environment}}.{{domain}}/connect/gitlab/callback`:

![](/assets/bb33f44-gitlab_application_redirect_uri.png)

6.  Under the Scopes section, select the api scope:

![](/assets/d6ed674-gitlab_application_scopes.png)

7.  Click **Save application**.
8.  Copy the Application ID and save for later:

![](/assets/e820b85-gitlab_application_id.png)

9.  Copy the Application Secret and save for later:

![](/assets/8247de9-gitlab_application_secret.png)

## Integrating with Gitlab [Copied!](#integrating-with-gitlab "Copy link to this section")

1.  Open your YAML deployment file for the Cycode installation
    
2.  Add the following block to the `config` ConfigMap section of the YAML file (refer to this reference for the location):
    
    ```
    1
    2
    ```
    
    ```hcl
    gitlab_app_configuration_client_id            = "{{gitlab_app_client_id}}"
    gitlab_app_configuration_client_secret        = "{{gitlab_app_client_secret}}"
    ```
    
3.  Follow the steps in the Update [Cycode Instance](/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-github-cloud-integration-using-the-github-app) process to push the changes to your Cycode installation.
    
4.  Once the update is completed, log in to Cycode.
    
5.  Follow the steps for integrating GitLab as detailed [here](/integrations/scm-source-code-management-tools/gitlab-self-managed) .
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
