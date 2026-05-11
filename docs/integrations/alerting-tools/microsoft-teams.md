# Microsoft Teams | Cycode Docs

Source: https://docs.cycode.com/integrations/alerting-tools/microsoft-teams

---

# Microsoft Teams

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/alerting-tools/microsoft-teams.md "Edit this page")

Updated on Dec 8, 2024 • Published on Dec 8, 2024

* * *

Integrating Microsoft Teams enables Cycode to send information about detected violations in your environments. After successfully integrating, you can organize and track relevant information in your monitoring service.

## Permissions [Copied!](#permissions "Copy link to this section")

You’ll need the following permissions to integrate Microsoft Teams with Cycode.

Permissions

Why is Write Access Required?

Read/write permissions

Creates a ticket or alert, so requires Read/Write access

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

To integrate Cycode with Microsoft Teams, the admin user will need to create an incoming webhook in Microsoft Teams. The steps for doing this can be found in [Microsoft’s documentation](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet) .

## Integrating with Microsoft Teams [Copied!](#integrating-with-microsoft-teams "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  Under the **Alerting** section, click **Microsoft Teams**.
    

![](/assets/39c79d8-image.png)

3.  In the page that’s displayed, fill out the following fields:
    
    1.  Integration Name - the name of the integration in Cycode
        
    2.  Incoming Webhook URL - the Webhook URL created in Microsoft Teams
        

![](/assets/microsoft-teams-details.png)

4.  Once you’ve filled in all the relevant information, click the **Done** button to activate the integration. A validation check will be run to check that the credentials and information provided are working before completing the setup.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
