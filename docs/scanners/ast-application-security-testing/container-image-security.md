# Container Image Security | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security

---

# Container Image Security

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/_index.md "Edit this page")

Updated on Oct 28, 2025 • Published on Nov 24, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s container scanning solution identifies vulnerabilities and secrets in Docker images. It provides a detailed report on the severity and impact of the issues found, as well as recommended remediation steps.

Cycode’s scan searches for vulnerabilities as misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more.

## How do secrets get into container images? [Copied!](#how-do-secrets-get-into-container-images "Copy link to this section")

There are two common ways that secrets become embedded in container image layers. One is when secrets are hard coded, which can end up showing in one of the image layers during the build process. This can occur when sensitive files, such as credentials, are copied unintentionally during the image build process. For example, if the command `COPY . /app` is used in the Dockerfile, it copies all the contents of the current working directory on the host machine to the **/app** directory in the Docker image.

The second way secrets end up in Docker images is through misuse of certain commands in the Dockerfile, such as `ARG` and `ENV`,which can lead to the exposure of secrets in the manifest file.

When secrets are injected into container images during the build phase, they’re unencrypted and available to everyone. Instead of populating the secret in the build state, developers should supply the secret in the run state, so the image itself doesn’t contain the secret.

## Secure your container images with Cycode [Copied!](#secure-your-container-images-with-cycode "Copy link to this section")

Cycode scans each layer and manifest (for ARG and ENV variables) of an image to find secrets buried deep within the intermediate layers of an image where most don’t bother to look. Users can enable the feature and configure it based on their needs.

In addition, Cycode’s container image security offering has the following functionality for violations, so you can group and align filters and terminology across different registries:

*   Violations are related to image tags rather than to specific images. This eliminates duplications and reduces alert noise.
    
*   Violations have a set of fields that contain all the relevant information, for both secrets and vulnerabilities.
    

#### Scanning Container Images [Copied!](#scanning-container-images "Copy link to this section")

When you integrate your SCM with Cycode, you can select the repositories and organizations that you want monitored as part of the pull request/merge request (PR) status check scanners. Depending on the settings set by the security admin, developers can then manage pull requests by selecting the [relevant action(s)](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner) .

After the container image registry is integrated with Cycode, you have to [configure the container image security scanning](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner)  so Cycode can scan the container images stored in your registries.

## Use cases [Copied!](#use-cases "Copy link to this section")

### Use Case 1: Proactive secret management in Docker images [Copied!](#use-case-1-proactive-secret-management-in-docker-images "Copy link to this section")

Organizations that have containerized environments face the challenge of securing Docker images against vulnerabilities and the inadvertent inclusion of secrets during the build process.

**Cycode’s solution**:

*   Cycode offers comprehensive container scanning, which proactively identifies vulnerabilities and secrets embedded within Docker images. Cycode performs in-depth scans, providing detailed reports on issue severity and impact, along with actionable remediation steps.
    
*   Cycode reinforces best practices for secret management by discouraging the injection of unencrypted secrets during the build phase. Developers are guided to supply secrets in the run state, mitigating the risk of exposing sensitive information in the image layers.
    
*   Cycode adds significant value by ensuring early detection of vulnerabilities and secrets in Docker images. This proactive approach enables organizations to remediate issues before they propagate through the deployment pipeline, enhancing overall container security.
    
*   Cycode’s advocacy for best practices in secret management guides developers toward more secure coding practices, fostering a culture of security awareness within the development lifecycle.
    

### Use Case 2: Streamlined container image security workflow [Copied!](#use-case-2-streamlined-container-image-security-workflow "Copy link to this section")

Organizations seek a streamlined workflow for container image security, with a focus on reducing alert noise, grouping violations effectively, and enabling developers to manage pull requests seamlessly.

**Cycode’s solution**:

*   Advanced container scanning functionality: Cycode’s container scanning functionality scans each layer and manifest of Docker images, including ARG and ENV variables. This thorough scanning process uncovers secrets deep within intermediate layers, offering a comprehensive understanding of potential vulnerabilities.
    
*   Optimized violation handling: Cycode’s features include grouping violations by image tags rather than specific images, eliminating duplications and reducing alert noise. The solution provides relevant information for both secrets and vulnerabilities, allowing security teams to focus on addressing actual issues.
    
*   Reduced alert noise: Cycode’s optimized violation handling contributes to a reduction in alert noise, enabling security teams to concentrate on critical issues rather than dealing with duplications.
    
*   Efficient pull request management: By integrating with source code repositories, Cycode enables organizations to control which repositories and organizations are monitored. This empowers developers to manage pull requests efficiently based on the results of container image security scans, promoting an agile and secure development workflow.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
