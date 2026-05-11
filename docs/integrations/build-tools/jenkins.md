# Jenkins | Cycode Docs

Source: https://docs.cycode.com/integrations/build-tools/jenkins

---

# Jenkins

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/build-tools/jenkins.md "Edit this page")

Updated on Sep 12, 2024 • Published on Sep 12, 2024

* * *

Integrating Jenkins enables Cycode to send information about detected violations in your pipeline. After successfully integrating, you can organize and track relevant information in your monitoring service.

## Permissions [Copied!](#permissions "Copy link to this section")

You’ll need the following permissions to integrate with Cycode.

Permissions

Why is Write Access Required?

Read/write permissions

Write access is required only to deploy the Jenkins plugin

## Integrating with Jenkins [Copied!](#integrating-with-jenkins "Copy link to this section")

Note

Create additional Jenkins integrations for each instance when using multiple Jenkins instances in order to differentiate and filter data for the different instances with Cycode.

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  Under the **Build** section, click **Jenkins**.
    

![](/assets/3be964a-image.png)

The following page is displayed:

![](/assets/330481e-image.png)

3.  Enter a name for your integration.
    
4.  Click **Save**. Once you click **Save**, you’ll receive additional information on the integration.
    

### Installing the Jenkins plug in enterprise server/on-premise deployments [Copied!](#installing-the-jenkins-plug-in-enterprise-serveron-premise-deployments "Copy link to this section")

The Jenkins plugin `.hpi` file is stored inside the `jenkins-connector` container image. Verify that the `jenkins-connector` container pod is running in the cluster.

## FAQs [Copied!](#faqs "Copy link to this section")

### What are the differences between using the Jenkins plugin and the Jenkins API? [Copied!](#what-are-the-differences-between-using-the-jenkins-plugin-and-the-jenkins-api "Copy link to this section")

The plugin and API offer similar features; however, the plugin also provides the following additional benefits:

*   You don’t need to manage sensitive Jenkins credentials, which is important if you want to onboard many Jenkins instances, and contact different administrators, since managing these credentials can be a burden.
    
*   You can use scripts, and configuration-as-code plugin to deliver the Cycode plugin to many Jenkins instances, making the onboarding process easier with many instances.
    
*   Via the plugin you can customize the upload rate.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
