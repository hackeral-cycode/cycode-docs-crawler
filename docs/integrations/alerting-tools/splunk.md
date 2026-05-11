# Splunk | Cycode Docs

Source: https://docs.cycode.com/integrations/alerting-tools/splunk

---

# Splunk

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/alerting-tools/splunk.md "Edit this page")

* * *

Integrating Splunk enables Cycode to send information about detected violations in your environments.

After successfully integrating, you can organize and track relevant information in your monitoring service.

## Permissions [Copied!](#permissions "Copy link to this section")

You’ll need the following permissions to integrate Splunk with Cycode.

Permissions

Why is Write Access Required?

Read/write permissions

Creates a ticket or alert, so requires Read/Write access

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

If you use self-signed certificates in your Splunk instance and you want to integrate with Cycode, reach out to Cycode support for assistance to ensure your integration works as expected.

## Integrating with Splunk [Copied!](#integrating-with-splunk "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  Under the **Alerting** section, click **Splunk**.
    

![](/assets/39c79d8-image.png)

![](/assets/splunk-new.png)

3.  Enter a name for your integration.
    
4.  Enter your instance URL.
    

Note

When entering the URL for the Splunk integration, do not include the `/services/collection/raw` path, as we add that on our end.

5.  Configure a token. See [Splunk](https://docs.splunk.com/Documentation/Splunk/8.1.1/Viz/TokenReference) for additional details.
    
6.  Enter your token in Cycode.
    
7.  Select the Cycode policies you want to receive alerts about in Splunk.
    
8.  Click **Done**.
    

Once you click Done, the Splunk integrations area loads and shows that your integration is connected.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
