# Integrating the Cycode Broker with the Cycode SaaS platform | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/cycode-broker/integrating-the-cycode-broker-with-the-cycode-saas-platform

---

# Integrating the Cycode Broker with the Cycode SaaS platform

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/cycode-broker/integrating-the-cycode-broker-with-the-cycode-saas-platform.md "Edit this page")

Updated on Jul 2, 2025 • Published on Aug 6, 2024

* * *

## Integrating the Cycode Broker with the Cycode SaaS platform [Copied!](#integrating-the-cycode-broker-with-the-cycode-saas-platform "Copy link to this section")

In this section, we’ll show you how to integrate with the Cycode Broker using GitHub Enterprise Server.

1.  Go to **Settings > Integrations > Brokers**.

![](/assets/3ad81e1-image.png)

2.  To add a new broker, click **Add Broker**. This displays the Create New Broker dialog.
    
3.  Specify the broker client configuration:
    
    1.  **Skip SSL verification** - Whether or not the brokerclient should ignore SSL errors during its communication with the internal asset.
    2.  **Broker Storage Expiry** - Specify whether the broker storage should have an expiry, and if so, set the broker-client response storage expiry (in hours).
    3.  **Auto update** - Whether or not the broker-client should update itself automatically whenever a new version is available.
    4.  **Upload broker logs** - Whether or not the broker-client will upload broker logs to the broker-server for better debug capabilities.
    5.  **Log Level Threshold** - Set the minimal severity of the logs to send.
4.  Give the broker a friendly name and click **Create**. This generates a Docker run command that registers the broker with the Cycode Platform.
    

![](/assets/460be2a-image.png)

5.  Click **Copy command**.
    
6.  Go to an instance that’s capable of running Docker that can also talk directly to an on-prem version of the GitHub Enterprise server and run the Docker command.
    
7.  Go back to the Broker UI; you’ll see that the new broker is still being initialized (this can take a few seconds).
    

![](/assets/8c394ed-image.png)

Once the connection is completed, the state will change to Connected.

8.  You can now go and integrate a broker supported integration (e.g., [GitHub Enterprise Server App integration](/integrations/scm-source-code-management-tools/github-enterprise-server) ) using the new broker functionality.

## High Availability (HA) [Copied!](#high-availability-ha "Copy link to this section")

The broker client support HA, meaning that you can spin-up multiple broker-client instances on your internal network and everything will work properly.

### Broker client scaling [Copied!](#broker-client-scaling "Copy link to this section")

The decision of when and how to scale the broker client images is in your hands:

*   If you deploy the client as a “standard docker image” on a VM, you can just `docker run` another image with similar parameters.
    
*   If you deploy the client in a Kubernetes cluster, you can modify the deployment to scale-up the number of pods.
    

**How will you know when you need to scale-up the number of pods the client is using?**

Each broker saves analytics for its pending tasks and throughput, which can be found in the [Cycode Broker Analytics section](/cycode-settings/cycode-broker/cycode-broker-analytics) .

Note

**Please note:** If for some reason you would like to run all broker-client replicas on the host machine’s network (Meaning, you are using the `--network host` parameter), you will need to provide dedicate ports for each broker client replica.

To do so, use the `BROKER_CLIENT_PORT` env variable to specify a custom port.

The default broker-client port is `9494`, so for any additional replicas you can proceed sequentially with the following numbers (e.g., `--env BROKER_CLIENT_PORT=9495`, `--env BROKER_CLIENT_PORT=9496`, and so on).

## Broker setup considerations [Copied!](#broker-setup-considerations "Copy link to this section")

As explained above, the broker-client acts as an intermediate between the providers in your internal network and Cycode’s cloud environment.

This means that a single broker can serve multiple integrations, as long as the broker client has connectivity to all of them. While this can be convenient deployment-wise, **we recommend creating a dedicated broker per integration** and not re-using the same broker for multiple integrations.

This will ensure that a high load of requests coming from a specific integration (e.g., during entity sync) will not interfere with other integrations or systems that need to react in real-time (e.g., opening JIRA tickets).

Moreover, for “heavy” integrations, such as a SCM with a lot of traffic or a provider with a lot of resources, it is recommended to have multiple instances for the same broker (see [broker client scaling](/cycode-settings/cycode-broker/integrating-the-cycode-broker-with-the-cycode-saas-platform#broker-client-scaling) for details).

## S3 Broker files retention policy [Copied!](#s3-broker-files-retention-policy "Copy link to this section")

Broker assets have a 24 hour retention.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
