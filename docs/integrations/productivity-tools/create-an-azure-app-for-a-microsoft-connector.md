# Create an Azure app for a Microsoft connector | Cycode Docs

Source: https://docs.cycode.com/integrations/productivity-tools/create-an-azure-app-for-a-microsoft-connector

---

# Create an Azure app for a Microsoft connector

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/productivity-tools/create-an-azure-app-for-a-microsoft-connector.md "Edit this page")

Updated on Jul 24, 2025 • Published on Apr 29, 2025

* * *

Note

This topic is only relevant for on-premise installations.

If you’re integrating Microsoft SharePoint or Microsoft Teams in an on-premise environment, you have to create an Azure app to support the connector. After you create the Azure app, apply the client ID and client secret from the Azure app in the Kubernetes cluster and restart the pods.

## Create an Azure app [Copied!](#create-an-azure-app "Copy link to this section")

In this step, you create the Azure app for your integration and generate the client ID and client secret.

1.  In the Azure portal, go to the [App registrations page](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade) .
    
2.  Click **New registration** and create an Azure app with a meaningful name (for example,**On-Prem SharePoint Connector** or **On-Prem Teams Connector**).  
    ![](/assets/image%28696%29.png)
    
3.  After the Azure app is created, go to its **Overview** page and copy the **Application (client) ID** to a secure location for later use.  
    ![](/assets/image%28697%29.png)
    
4.  To configure the redirect URL, go to the **Authentication** page of the Azure app and click **Add a platform**, then select **Single-page application**.  
    ![](/assets/image%28699%29.png)
    
5.  Set the **Redirect URI** as follows, replacing **<your\_application\_base\_url>** with the base URL of your on-premise application.
    
    *   Microsoft SharePoint: `https://<your_application_base_url>/connect/share-point/callback`
    *   Microsoft Teams: `https://<your_application_base_url>/connect/microsoft-teams-scanning/callback`
6.  Set the Azure app permissions as follows:
    
    *   Microsoft SharePoint:
        
        Permission
        
        Description
        
        Organization.Read.All
        
        Read organization information
        
        Sites.Read.All
        
        Read items in all site collections
        
        User.ReadBasic.All
        
        Read all users’ basic profiles
        
    *   Microsoft Teams:
        
        Permission
        
        Description
        
        Channel.ReadBasic.All
        
        Read the names and descriptions of all channels
        
        ChannelMessage.Read.All
        
        Read all channel messages
        
        Files.Read.All
        
        Read files in all site collections
        
        Organization.Read.All
        
        Read organization information
        
        Team.ReadBasic.All
        
        Get a list of all teams
        
7.  To generate a secret, click **New client secret**.
    

Important

Copy the value of the secret immediately because this is the only time you’ll be able to see it. This secret will be used later as the client secret.

## Update the Kubernetes cluster [Copied!](#update-the-kubernetes-cluster "Copy link to this section")

In this step, you connect to the Kubernetes cluster, apply the client ID and secret, and update the global configuration.

Note

The instructions in this section are for working in an IDE. You can also do the entire update process in kubectl.

### Apply the client ID and secret [Copied!](#apply-the-client-id-and-secret "Copy link to this section")

1.  Open the Kubernetes configuration file.
    
2.  In the `configmap` section, select `namespace - api`.
    
3.  Apply the credentials:
    
    *   Microsoft SharePoint: Go to `sharepoint-connector-environment-variables` and update the values for the `ClientId` and `ClientSecret` parameters:
    
    ```
    1
    2
    3
    4
    5
    6
    ```
    
    ```json
    {
        "SharepointAppConfiguration": {
          "ClientId": "Azure app client Id",
          "ClientSecret": "Azure app secret"
        }
    }
    ```
    
    *   Microsoft Teams: Go to teams-connector-environment-variables and do the following:
        
        1.  Update the values for the `ClientId` and `ClientSecret` parameters.
        2.  Run the following script to generate and apply a webhook secret.
        
        ```
        1
        ```
        
        ```bash
        LC_CTYPE=C tr -dc 'a-zA-Z0-9@#$%^&*()' < /dev/urandom | head -c 12; echo
        ```
        
        3.  Update the `<api_url>` parameter.
            
            ```
            1
            2
            3
            4
            5
            6
            7
            8
            ```
            
            ```json
            {
                "TeamsAppConfiguration": {
               "ClientId": "Azure app client Id",
                "ClientSecret": "Azure app secret",
                 "WebhookSecret": "Use the script to generate the secret",
                  "WebhooksUrl": "https://<api_url>/api/v1/teams/webhook"
                }
            }
            ```
            

### Update the global configuration [Copied!](#update-the-global-configuration "Copy link to this section")

1.  Go to `namespace cycode-operator` and select `config`.
    
2.  Update the config with the following configuration:
    
    ```
    1
    2
    3
    4
    5
    ```
    
    ```hcl
    sharepoint_app_configuration_client_id = "SharePoint Azure app client Id"
    sharepoint_app_configuration_client_secret = "SharePoint Azure app client Secret"
    teams_app_configuration_client_id = "Teams Azure app client Id"
    teams_app_configuration_client_secret = "Teams Azure app client Secret"
    teams_app_configuration_webhook_secret = "Use the script to generate the secret"
    ```
    

### Reset the pod [Copied!](#reset-the-pod "Copy link to this section")

Note

Perform the following steps using kubctl.

1.  Set the values for the relevant connector, [Microsoft SharePoint](#microsoft-sharepoint) or [Microsoft Teams](#microsoft-teams) .
2.  Update the [general configuration](#general-configuration) .
3.  Restart the [pod](#restart-the-pod) .

#### Microsoft SharePoint [Copied!](#microsoft-sharepoint "Copy link to this section")

1.  Run the following command:
    
    ```
    1
    ```
    
    ```bash
    kubectl edit cm sharepoint-connector-environment-variables -n api
    ```
    
2.  Set the following values:
    
    ```
    1
    2
    3
    4
    5
    6
    ```
    
    ```json
    {
       "SharepointAppConfiguration": {
          "ClientId": "Azure app client Id",
          "ClientSecret": "Azure app secret"
        }
    }
    ```
    

#### Microsoft Teams [Copied!](#microsoft-teams "Copy link to this section")

1.  Run the following command:
    
    ```
    1
    ```
    
    ```bash
    kubectl edit cm teams-connector-environment-variables -n api
    ```
    
2.  Set the following values:
    
    ```
    1
    2
    3
    4
    5
    6
    7
    ```
    
    ```json
    {
       "TeamsAppConfiguration": {
         "ClientId": "Azure app client Id",
         "ClientSecret": "Azure app secret",
        "WebhookSecret": "Use the script to generate the secret",
        "WebhooksUrl": "https://<api_url>/api/v1/teams/webhook"
        }
    ```
    

#### General configuration [Copied!](#general-configuration "Copy link to this section")

1.  Run the following command:
    
    ```
    1
    ```
    
    ```bash
    kubectl edit cm config -n cycode-operator
    ```
    
2.  Set the following values:
    
    ```
    1
    2
    3
    4
    5
    ```
    
    ```hcl
    sharepoint_app_configuration_client_id = "SharePoint Azure app client Id"
    sharepoint_app_configuration_client_secret = "SharePoint Azure app client Secret"
    teams_app_configuration_client_id = "Teams Azure app client Id"
    teams_app_configuration_client_secret = "Teams Azure app client Secret"
    teams_app_configuration_webhook_secret = "Use the script to generate the secret"
    ```
    

#### Restart the pod [Copied!](#restart-the-pod "Copy link to this section")

For Microsoft SharePoint:

```
1
```

```bash
kubectl rollout restart deployment sharepoint-connector -n api
```

For Microsoft Teams:

```
1
```

```bash
kubectl rollout restart deployment teams-connector -n api
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
