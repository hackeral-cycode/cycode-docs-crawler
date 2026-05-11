# Generic container registry integration | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools/generic-container-registry-integration

---

# Generic container registry integration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/generic-container-registry-integration.md "Edit this page")

Updated on Sep 4, 2024 • Published on Sep 4, 2024

* * *

Cycode has developed an integration that enables you to integrate any container registry implemented using [Docker API V2](https://docker-docs.uclv.cu/registry/spec/api/#catalog) , using a simple, straightfoward integration processs.

Once you’ve completed the integration, Cycode starts pulling the data from your environment and running its policies.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating with Cycode:

Permissions

Why is Access Required?

Read-only

Required for integrating the systems.

## Integrating with a generic container registry [Copied!](#integrating-with-a-generic-container-registry "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  This displays the Add Integration window. Under the Artifacts section, click **Generic Container Registryiner**. This displays the following integration form.
    
3.  Fill in the form and click **Done**.
    

Once you confirm the integration, the integrations area reloads and shows that the container registry is connected.

## Configuring scanning [Copied!](#configuring-scanning "Copy link to this section")

Once you’ve completed integrating container image/artifact registries with Cycode, you’ll need to [configure the container image security scanning](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner#configure-container-scanning) .

## What’s next? [Copied!](#whats-next "Copy link to this section")

Now that you’ve set up this integration **and** configured scanning, you’ll soon see violations detected in your container. You can now choose to take the following steps:

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
