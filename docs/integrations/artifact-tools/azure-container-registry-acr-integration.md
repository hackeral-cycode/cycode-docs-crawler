# Azure Container Registry (ACR) integration | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools/azure-container-registry-acr-integration

---

# Azure Container Registry (ACR) integration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/azure-container-registry-acr-integration.md "Edit this page")

Updated on Feb 11, 2026 • Published on Feb 11, 2026

* * *

Cycode’s integration with Azure Container Registry (ACR) enables organizations to scan their Docker images for vulnerabilities and secrets in ACR, ensuring that their containers are secure and compliant. The integration provides a detailed report on the severity and impact of the issues found, as well as recommended remediation steps.

## Permissions [Copied!](#permissions "Copy link to this section")

The Azure Container Registry service supports a set of built-in Azure roles that provide different levels of permissions to an Azure container registry. Use Azure role-based access control (Azure RBAC) to assign specific permissions to users, service principals, or other identities that need to interact with a registry, for example to pull or push container images. You can also define custom roles with fine-grained permissions to a registry for different operations.

Role/Permissions

Access Resource Manager

Create/delete registry

Push image

Pull image

Delete image data

Change policies

Sign images

Contributor Role

✓

✓

✓

✓

✓

✓

✓

Tip

To integrate with Azure Container Registry service with least-privilege permissions, refer to [Create a least-privileged service principal for Cycode](/scanners/ast-application-security-testing/container-image-security/container-image-security-faqs-kb-articles/create-a-least-privileged-service-principal-for-cycode) .

## Integrating with ACR [Copied!](#integrating-with-acr "Copy link to this section")

ACR is integrated with Cycode using the same procedure documented [here](/integrations/cloud-and-infrastructure-services/azure) (the integration is located under **Settings > Integrations > Artifacts**).

## Configuring Container Image Security Scanning [Copied!](#configuring-container-image-security-scanning "Copy link to this section")

Once you’ve completed integrating container image/artifact registries with Cycode, you’ll need to [configure the container image security scanning.](/integrations/artifact-tools/azure-container-registry-acr-integration)

## What’s Next? [Copied!](#whats-next "Copy link to this section")

Now that you’ve set up this integration **and** configured Container Image Security scanning, you’ll soon see violations detected in your container. You can now choose to take the following steps;

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
