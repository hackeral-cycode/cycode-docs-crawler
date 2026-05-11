# Google Artifact Registry (GAR) | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools/google-artifact-registry-gar

---

# Google Artifact Registry (GAR)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/google-artifact-registry-gar.md "Edit this page")

Updated on May 22, 2024 • Published on May 22, 2024

* * *

Google Artifact Registry (GAR) is an evolution of Google Container Registry (GCR) (which will be deprecated during 2024). GAR enables your organization to manage container images and language packages (such as Maven and npm). GAR is fully integrated with Google Cloud’s tooling and runtimes and comes with support for native artifact protocols. This makes it simple to integrate it with your CI/CD tooling to set up automated pipelines.

Cycode’s integration with GAR enables organizations to scan their Docker containers for vulnerabilities and secrets, ensuring that their containers are secure and compliant.

## Permissions [Copied!](#permissions "Copy link to this section")

GAR is part of the GCP integration and requires the same [permissions](/integrations/cloud-and-infrastructure-services/google-cloud/)

## Integrating with GAR [Copied!](#integrating-with-gar "Copy link to this section")

GCR is integrated with Cycode using the same procedure documented [here](/integrations/cloud-and-infrastructure-services/google-cloud/) (the integration is located under **Settings > Integrations > Artifacts**).

## Configuring Container Image Security Scanning [Copied!](#configuring-container-image-security-scanning "Copy link to this section")

Once you’ve completed integrating container image/artifact registries with Cycode, you’ll need to [configure the container image security scanning](/integrations/artifact-tools/google-artifact-registry-gar)

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
