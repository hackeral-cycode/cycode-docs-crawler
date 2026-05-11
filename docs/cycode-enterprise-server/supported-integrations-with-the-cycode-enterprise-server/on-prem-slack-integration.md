# On-prem: Slack integration | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-slack-integration

---

# On-prem: Slack integration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-slack-integration.md "Edit this page")

Updated on Apr 14, 2024 • Published on Apr 14, 2024

* * *

## Requirements [Copied!](#requirements "Copy link to this section")

*   Admin access to the Slack instance
*   Admin access to Kubernetes cluster

## Create the Slack App [Copied!](#create-the-slack-app "Copy link to this section")

1.  Log in to your Slack instance in your browser.
2.  Go to [this link](https://api.slack.com/apps?new_app=1) to create a new Slack app.
3.  Click the **Build from Scratch** option.
4.  On the **Basic Information** page, copy the Client ID (`{{client_id}}`) and Client Secret (`{{client_secret}}`) values to be used later.
5.  Go to the **OAuth & Permission** page for your Slack app.
6.  Make the following changes to this page:
    1.  Create a **Redirect URL** pointed to `https://app.{{environment}}.{{domain}}/integrations/slack` under **Redirect URLs** section.
    2.  Add the `chat:write` scope to your app in the **Scopes** section:

![](/assets/2b96e02-slack_scopes.png)

7.  Go to the **Incoming Webhooks** page for your Slack app.
8.  Make sure to turn on Incoming Webhooks, if not done already.

## Configuring Cycode to Integrate with Slack [Copied!](#configuring-cycode-to-integrate-with-slack "Copy link to this section")

Note

You’ll need to create an integration for each channel you plan to use with the Cycode workflows.

1.  Open your YAML deployment file for the Cycode installation
    
2.  Add the following block to the `config` ConfigMap section of the YAML file (refer to this [reference](/cycode-enterprise-server/configure-your-on-premise-installation) for the location):
    
    ```
    1
    2
    ```
    
    ```hcl
    integration_service_online_configuration_slack_configuration_client_id = {{client_id}}
    integration_service_online_configuration_slack_configuration_client_secret = {{client_secret}}
    ```
    
3.  Follow the steps in the Update Cycode Install process to push the changes to your Cycode installation.
    
4.  Once the update is completed, log in to Cycode.
    
5.  Follow the steps for integrating Slack as detailed [here](/cycode-enterprise-server/supported-integrations-with-the-cycode-enterprise-server/on-prem-slack-integration) .
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
