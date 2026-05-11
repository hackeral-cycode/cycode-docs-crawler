# Step 2: Integrate Cycode with your technologies | Cycode Docs

Source: https://docs.cycode.com/cycode-onboarding/getting-started-with-onboarding/step-2-integrate-cycode-with-your-technologies

---

# Step 2: Integrate Cycode with your technologies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-onboarding/getting-started-with-onboarding/step-2-integrate-cycode-with-your-technologies.md "Edit this page")

Updated on Nov 11, 2025 • Published on May 22, 2024

* * *

1.  Go to **Settings > Integrations** and select **Add Integration**.
    
2.  Choose an SCM tool to integrate with. Cycode supports multiple SCM tools including GitHub and GitHub Enterprise Server, GitLab and GitLab Self Managed, Bitbucket and Bitbucket Server, Azure DevOps and Azure DevOps Server, and Gerrit.
    
    *   **Reminder**: Cycode security scanners will initiate the security scanning process immediately after you integrate your SCM.
    *   Connecting your SCM allows Cycode to identify security vulnerabilities in your code using Cycode’s Secrets, Leaks, CI/CD, SCA, SAST and IaC security scanners.
    *   Connecting your SCM to Cycode maps your SCM data to the Cycode Risk Intelligence Graph (RIG), providing you with insights about your users, repositories, teams, and much more.
3.  Click **Add Integration** again, and this time choose a build system to integrate with. Cycode supports multiple build systems including Jenkins, CircleCI, GitHub Actions, GitLab Runner, Azure Pipelines, and JFrog Pipelines.
    
4.  After integrating Cycode with your build system, Cycode will scan for secrets in the build logs and will identify CI/CD security violations.
    
5.  Connecting your build system enables Cycode to correlate your SCM and build assets and processes, providing you with comprehensive insights into your pipeline operations and workflows.
    
6.  Click **Add Integration** again, and now choose an artifact system to integrate with. Cycode supports multiple artifact tools, including Docker Hub, JFrog Artifactory, Nexus Repository, Amazon ECR, Google Container Registry, and Azure Container Registry.
    
    *   Connecting your artifact system to Cycode correlates your SCM, build and artifacts assets and processes, providing insights about your pipeline processes.
    *   To enable Cycode’s container scanning and Cycode’s secrets scanning in container images, go to **Settings** > **Scanners** > **Container Security** > **[Container Scanning](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner)** to select the container repositories to scan from and configure the scans.
7.  Click **Add Integration** again, and choose a Cloud service to integrate with. Cycode supports multiple Cloud services, including AWS, GCP, Azure, Terraform Cloud and Kubernetes.
    
    *   Once you integrate your Cloud service, Cycode will scan for Cloud Security and CI/CD Security violations.
    *   For IaC vulnerabilities, integrating your Cloud service helps to detect configuration drift (where the actual configuration of deployed resources deviates from the intended state described in code).
    *   You can detect secrets in cloud storage by enabling Cycode File Storage Scanning and selecting the buckets to scan. See [File storage scanning](/scanners/pipeline-security/secrets/configure-the-secret-scanner/scanning-options/file-storage-scanning) .
    *   By connecting your Cloud service Cycode correlates your SCM, Build, Artifacts and Cloud assets and processes, providing insights about your pipeline processes, from code to cloud and from cloud to code.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
