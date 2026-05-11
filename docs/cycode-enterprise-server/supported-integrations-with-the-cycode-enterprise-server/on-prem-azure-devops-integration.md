# On-prem: Azure DevOps integration | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-azure-devops-integration

---

# On-prem: Azure DevOps integration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-azure-devops-integration.md "Edit this page")

Updated on Apr 14, 2024 • Published on Apr 14, 2024

* * *

This document covers how to integrate with Azure DevOps with Cycode.

## Requirements [Copied!](#requirements "Copy link to this section")

*   Admin access to the Azure DevOps organizations to be integrated
*   Admin access to the Kubernetes cluster

## Setting up the Azure DevOps OAuth App [Copied!](#setting-up-the-azure-devops-oauth-app "Copy link to this section")

The first step is to create the Azure DevOps OAuth app to be used for the integration.

### Create a New Azure DevOps OAuth App [Copied!](#create-a-new-azure-devops-oauth-app "Copy link to this section")

1.  Log in to your admin user that will be used to integrate with Azure DevOps.
2.  Go to the following URL:  
    `https://aex.dev.azure.com/app/register`

![](/assets/d12e03d-azure_devops_new_oauth_app.png)

3.  Under the **Company information** section, enter the following data:
    
    1.  Enter the company name you want to use in the **Company name** box.
    2.  Enter the Cycode on-premise domain in the **Company website** box (i.e., `https://app.{{environment}}.{{domain}}`)
4.  Under the **Application information** section, enter the following data:
    
    1.  Enter an application name for this app in the **Application name** box.
    2.  Enter an description describing what this app will be used for in the **Description** box.
    3.  Enter the Cycode on-premise domain in the **Application website** box (i.e., `https://app.{{environment}}.{{domain}}`)
    4.  Enter the following URL for the callback URL in the **Application callback URL**:  
        `https://app.{{environment}}.{{domain}}/connect/azure-devops/callback`
    5.  Under the **Authorized scopes** section, check the following boxes:
        1.  Identity (Read)
        2.  Code (Full)
        3.  Code (Status)
        4.  Project and team (Read)
        5.  Graph (Read)
        6.  MemberEntitlement Management (read)
        7.  Delegated Authorization Tokens

![](/assets/03a0454-azure_devops_permissions.png)

5.  Click **Create Application**.

![](/assets/df9d078-azure_devops_create_button.png)

### Gather Required Values [Copied!](#gather-required-values "Copy link to this section")

Once the OAuth app is created, gather the following values:

*   App ID - The unique ID for this OAuth App. This is the `{{azure_devops_client_id}}`

![](/assets/0fb1057-azure_devops_oauth_app_id.png)

*   Client Secret - Click the **show** button to see the full key. This is the `{{azure_devops_client_secret}}`

![](/assets/3d3f4ef-azure_devops_oauth_client_secret.png)

## Integrating with Azure DevOps [Copied!](#integrating-with-azure-devops "Copy link to this section")

Note

Before integrating your organizations from Azure DevOps into Cycode, verify that each organization allows third-party apps to access via OAuth.

For more details, the setting in question can be found in the **Organization Settings -> Policies** page.  
Visit the Microsoft official documentation for more details on this setting.

The following are the installation steps for installing Cycode to your Kubernetes cluster.

1.  Open your deployment YAML file for the Cycode installation.
    
2.  Add the following block to the `config` ConfigMap section of the YAML file:
    
    ```
    1
    2
    ```
    
    ```hcl
    azure_devops_app_configuration_client_id                  = "{{azure_devops_client_id}}"
    azure_devops_app_configuration_client_secret              = "{{azure_devops_client_secret}}"
    ```
    
3.  Save the YAML file with these changes.
    
4.  Follow the steps in the [Update Cycode Instance](/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-azure-devops-integration) process to push the changes to your Cycode installation.
    
5.  Once the update completes, log in to Cycode through a fresh browser.
    
6.  Follow the steps for integrating Slack as detailed [here](/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-azure-devops-integration) .
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
