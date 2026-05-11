# Harness | Cycode Docs

Source: https://docs.cycode.com/integrations/build-tools/harness

---

# Harness

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/build-tools/harness.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jul 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Harness empowers software engineering teams with AI-infused technology for seamless software delivery. Integrating Harness enables Cycode to send information about detected violations in your pipeline. After successfully integrating, you can organize and track relevant information in your monitoring service.

## Permissions [Copied!](#permissions "Copy link to this section")

You’ll need the following permissions to integrate with Cycode.

**Permissions**

Create an API token by a user that has permissions to access pipeline-related entities.

## Integrating with Cycode [Copied!](#integrating-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  Under the **Build** section, click **Harness**. ![](/assets/harness-image-wt1n4al8.png) This displays the Connected Accounts. ![](/assets/harness-image-00v40lj5.png)
    
3.  To add a new account click **Add Account**.
    
4.  This displays the Account Details screen. ![](/assets/harness-image-614338ou.png)
    
5.  Enter a name for the account, verify that the account ID is correct and that there’s an API token, then click **Connect**.
    

The new account is added and the integration is completed.

## Why integrate Harness? [Copied!](#why-integrate-harness "Copy link to this section")

Integrating Harness with Cycode will run on the “pipelines” in the integration, and will then sync the build workflows to theContext Intelligence Graph, creating graph entities. Then, it scans the build workflows inventory and execution logs for secrets.

![](/assets/harness-image-1ool9mg7.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
