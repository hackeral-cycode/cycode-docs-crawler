# Slack | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/integrations/slack

---

# Slack

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/integrations/slack.md "Edit this page")

* * *

## Slack [Copied!](#slack "Copy link to this section")

Cimon is able to send a Slack webhook to a desired endpoint whenever a security violation is found in the pipeline. To configure the Slack webhook, you’ll need to provide a Slack webhook endpoint as a parameter to the Cimon agent. This can be done through our custom Github Action by specifying the parameter name `slack-webhook-endpoint`.

## Creating a Slack webhook [Copied!](#creating-a-slack-webhook "Copy link to this section")

Before configuring Cimon to send a Slack webhook, you must create one in Slack. Here are the steps to create a webhook:

1.  Open the Slack workspace where you want to create the webhook.
2.  Click the workspace name in the top left corner and select **Settings & administration**.
3.  Click **Manage apps**.
4.  Click **Custom Integrations** in the sidebar.
5.  Click **Incoming Webhooks**.
6.  Click **Add to Slack**.
7.  Select the channel where you want the webhook to post messages.
8.  Click **Add Incoming Webhooks integration**.
9.  Copy the webhook URL.

## Configuring Cimon to send a Slack webhook [Copied!](#configuring-cimon-to-send-a-slack-webhook "Copy link to this section")

Once you’ve created a webhook in Slack, you can configure Cimon to send a webhook to that endpoint whenever a security violation is found in the pipeline. The workflow for the Cimon installation looks like this:

1.  Open the Github repository where you want to configure Cimon.
2.  Modify the workflow in which you add or modify the current Cimon installation.
3.  Set up Cimon as follows:

```
- uses: cycodelabs/cimon-action@v0
  with:
    client-id: ${{ secrets.CIMON_CLIENT_ID }}
    secret: ${{ secrets.CIMON_SECRET }}
    ...
    slack-webhook-endpoint: ${{ secrets.SLACK_WEBHOOK_ENDPOINT }}
```

```
- uses: Cimon@0
  inputs:
    client-id: $(CIMON_CLIENT_ID)
    secret: $(CIMON_SECRET)
    ...
    slackWebhookEndpoint: $(SLACK_WEBHOOK_ENDPOINT)
```

```
1
2
3
4
5
```

```groovy
environment {
    CIMON_CLIENT_ID = credentials("cimon-client-id")
    CIMON_SECRET = credentials("cimon-secret")
    CIMON_SLACK_WEBHOOK_ENDPOINT = credentials("slack-webhook-endpoint")
}
```

4.  Set the slack endpoint variable to the secret name containing your Slack webhook endpoint.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
