# Artifact tools | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools

---

# Artifact tools

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/_index.md "Edit this page")

Updated on Dec 1, 2025 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s container scanning solution identifies vulnerabilities and secrets in Docker images. It provides a detailed report on the severity and impact of the issues found, as well as recommended remediation steps.

### How do secrets get into artifacts such as container images? [Copied!](#how-do-secrets-get-into-artifacts-such-as-container-images "Copy link to this section")

There are two common ways in which secrets become embedded in container image and by unintentionally copying sensitive files, such as credentials, during the image build process. As an example, if in the Dockerfile we use the command `COPY . /app`, it will copy all the contents of the current working directory on the host machine to the /app directory in the Docker image.

The second way secrets end up in Docker images is through misuse of certain commands in the Dockerfile, such as ARG and ENV and could lead to the exposure of secrets in the manifest file.

When these secrets are then injected into container images during the build phase, they’re unencrypted and available to everyone –when they shouldn’t be there in the first place. Instead of populating the secret in the build state, developers should, instead, supply the secret in the run state, so the image itself doesn’t contain the secret.

### How does integrating Cycode with your artifacts increase security? [Copied!](#how-does-integrating-cycode-with-your-artifacts-increase-security "Copy link to this section")

Cycode’s scanning functionality scans each layer and manifest (for ARG and ENV variables) of an image to find secrets buried deep within the intermediate layers of an image where few (except for attackers) would bother to look. All users need to do is enable the feature and configure it based on their needs.

## Configuring artifact scanning [Copied!](#configuring-artifact-scanning "Copy link to this section")

After you’ve completed integrating container image/artifact registries with Cycode, you’ll need to [configure the container image security scanning](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner) to tell Cycode to scan the images stored in your registries.

Note

When integrating Cycode with your containers, the length of time it takes to complete the integration depends in part on the number of images you have in the container repositories.

For the initial integration synchronization, Cycode syncs all the images that have been modified in the last 6 months. If there are none, every 20 minutes, Cycode syncs the images that have been modified in the last 25 minutes.

## Supported artifact and container image tools [Copied!](#supported-artifact-and-container-image-tools "Copy link to this section")

Cycode integrates with the following artifact and container image/registry tools:

*   [Amazon ECR](/integrations/artifact-tools/amazon-elastic-container-registry-ecr-integration)
    
*   [Azure Container Registry (ACR)](/integrations/artifact-tools/azure-container-registry-acr-integration)
    
*   [Docker Hub](/integrations/artifact-tools/docker-hub-integration)
    
*   [GitHub Package Registry](/integrations/artifact-tools/github-package-registry)
    
*   [GitLab Container Registry](/integrations/artifact-tools/gitlab-container-registry)
    
*   [Google Container Registry (GCR)](/integrations/artifact-tools/google-container-registry-gcr)
    
*   [Google Artifact Registry (GAR)](/integrations/artifact-tools/google-artifact-registry-gar)
    
*   [JFrog Artifactory and Xray](/integrations/security-tools/jfrog-artifactory-and-xray)
    
*   [Nexus](/integrations/artifact-tools/nexus)
    
*   [Quay](/integrations/artifact-tools/quay)
    
*   [Generic container registries](/integrations/artifact-tools/generic-container-registry-integration)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
