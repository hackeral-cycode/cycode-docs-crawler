# Slack | Cycode Docs

Source: https://docs.cycode.com/integrations/productivity-tools/slack

---

# Slack

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/productivity-tools/slack.md "Edit this page")

Updated on Sep 8, 2024 • Published on Sep 8, 2024

* * *

Integrating scanning in Slack enables Cycode to scan for secrets that may have been posted in your shared public Slack workspace channels, including shared external channels.

After successfully integrating, you can organize and track relevant information for your Slack integration.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating Slack Scanning with Cycode:

Permissions

Why is Access Required?

Workspace permissions

Cycode integrates with Slack **workspaces**. Therefore, you’ll need to verify that you have permission to approve this integration, and then allow Cycode to access your chosen Slack channels and the content posted on them.

## Integrating Slack scanning [Copied!](#integrating-slack-scanning "Copy link to this section")

🚧 Important

While you’ll find the app on Slack’s marketplace, you’ll need to install the app using the integration process described below (do not install the app from the Slack store).

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  This displays the Add Integration window. Under the Productivity Tools section, click **Slack Scanning**.
    

![](/assets/3a309c3-image.png)

3.  To complete the integration, you’ll need to allow the Cycode Security app to access your Slack workspace and provide it with certain view and action rights, by clicking the **Allow** button.

![](/assets/allow-permissions.png)

4.  Confirm the Slack channel you’re integrating once you’re redirected back to Cycode.

Once you confirm the integration, the integrations area reloads and shows that Slack is connected.

## Using the Slack integration [Copied!](#using-the-slack-integration "Copy link to this section")

Below is an example of how this integration works with scanning for secrets in public Slack channels:

1.  Enter a secret/password in your public channel in the workspace you connected for Cycode scanning.

![](/assets/f6064ee-slack-msg.png)

2.  Go to the Violations page and filter on “Secret Tag”: “Found in Slack”. You should see your Slack violations, including the one generated from step 1.

![](/assets/358baa7-secret-in-slack.png)

4.  Once the secret has been reviewed and handled, choose an action: Ignore or Resolve (rotate/revoke the secret you entered).

![](/assets/291bc65-violation-card.png)

## Slack integration FAQs [Copied!](#slack-integration-faqs "Copy link to this section")

When sharing a Google doc via a Slack channel, Slack adds an API key by default, as you can see in the snippet below:

As a result, Cycode detects the file as a “Google Cloud API Key” secret violation, even though there are no actual secrets in the file itself.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
