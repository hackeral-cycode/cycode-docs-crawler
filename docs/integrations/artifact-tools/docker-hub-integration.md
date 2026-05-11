# Docker Hub integration | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools/docker-hub-integration

---

# Docker Hub integration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/docker-hub-integration.md "Edit this page")

Updated on Nov 26, 2024 • Published on Nov 26, 2024

* * *

Docker Hub is a container registry built for developers and open source contributors to find, use, and share their container images.

After successfully integrating, Cycode starts pulling the data from your environment and running its policies.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating with Cycode:

Permissions

Why is Access Required?

Admin username/password

Required for integrating the systems.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

You must have a Team level plan in Docker Hub to integrate Docker Hub with Cycode.

**Note-** Currently the Dockerhub integration with Cycode do not support 2FA.

## Integrating with Docker Hub [Copied!](#integrating-with-docker-hub "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  This displays the Add Integration window. Under the Artifacts section, click **Docker Hub**. This displays the integration form.
    
3.  Fill in the form and click **Done**. Once you confirm the integration, the integrations area reloads and shows that Docker Hub is connected.
    

## Configuring scanning [Copied!](#configuring-scanning "Copy link to this section")

Once you’ve completed integrating container image/artifact registries with Cycode, you’ll need to [configure the container image security scanning](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner#configure-container-scanning) .

## What’s next? [Copied!](#whats-next "Copy link to this section")

Now that you’ve set up this integration **and** configured Containe Image Security scanning, you’ll soon see violations detected in your container. You can now choose to take the following steps;

*   Handling violations
    
*   [Remediation](/policies/manage-policies)
    
*   [Defining workflows](/workflow-automation/create-a-workflow)
    
*   [Defining custom policies](/policies/create-and-manage-custom-policies/create-custom-secrets-policies)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
