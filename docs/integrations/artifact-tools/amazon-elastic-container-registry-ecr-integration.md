# Amazon Elastic Container Registry (ECR) integration | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools/amazon-elastic-container-registry-ecr-integration

---

# Amazon Elastic Container Registry (ECR) integration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/amazon-elastic-container-registry-ecr-integration.md "Edit this page")

Updated on May 30, 2024 • Published on May 30, 2024

* * *

Amazon’s Elastic Container Registry (ECR) is a fully managed Docker container registry that makes it easy to store, share, and deploy container images.

## Permissions [Copied!](#permissions "Copy link to this section")

To integrate AWS with Cycode, you’ll need these specific permissions on the AWS side for ECR. See [Permissions](/integrations/cloud-and-infrastructure-services/aws/) for the full list of permissions.

```
Area
Permissions


Metrics: 
```

*   ```
        `cloudwatch:GetMetricData`
    ```
    
*   ```
        `ecr:Describe_`
    ```
    
*   ```
        `ecr:GetLifecyclePolicy`
    ```
    
*   ```
        `ecr:GetRepositoryPolicy`
    ```
    
*   ```
        `ecr:List_`
    ```
    
*   ```
        `ecr-public:DescribeImages`
    ```
    
    Public
    
    *   `ecr-public:DescribeRegistries`
    *   `ecr-public:DescribeRepositories`
    *   `ecr-public:GetRegistryCatalogData`
    *   `ecr-public:GetRepositoryCatalogData`
    *   `ecr-public:GetRepositoryPolicy`
    *   `ecr-public:GetAuthorizationToken`
    
    Other
    
    *   `ecr:BatchGetImage`
    *   `ecr:GetDownloadUrlForLayer`
    *   `ecr:GetAuthorizationToken`

## Integrating with ECR [Copied!](#integrating-with-ecr "Copy link to this section")

Amazon ECR is integrated with Cycode using the same procedure documented [here](/integrations/cloud-and-infrastructure-services/aws/) (the integration is located under **Settings > Integrations > Artifacts**).

## Configuring Container Image Security Scanning [Copied!](#configuring-container-image-security-scanning "Copy link to this section")

Next, you’ll need to [configure Container Image Security scanning](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner) .

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
