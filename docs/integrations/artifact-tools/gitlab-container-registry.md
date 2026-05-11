# GitLab Container Registry | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools/gitlab-container-registry

---

# GitLab Container Registry

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/gitlab-container-registry.md "Edit this page")

Updated on May 22, 2024 • Published on May 22, 2024

* * *

GitLab Container Registry is a feature within GitLab, a web-based DevOps lifecycle tool, that allows users to build, test, and deploy Docker container images. It is integrated directly into the GitLab platform, making it convenient for users to manage both their code repositories and container images in a single place.

Cycode’s integration with GitLab Container Registry enables organizations to scan their Docker images for vulnerabilities, ensuring that their containers are secure and compliant.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for the personal access token, which is set using the following scope:

Scope

Why is Access Required?

read\_registry

Grants read-only access to container registry images on private projects.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

The integration utilizes your integration with GitLab. To allow you to choose organization for scan, you’ll need to integrate GitLab first.

## Integrating with GitLab Container Registry [Copied!](#integrating-with-gitlab-container-registry "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**. This displays the Add Integration window. Under the Artifacts section, click **GitLab Container Registry**.

Since you’ve already integrated GitLab, you’ll see the following dialog, indicating that the connection was successful, and that Cycode is collecting and analyzing data.

2.  To proceed with the integration and enable container scanning, you’ll need to provide a **Personal Access Token**, valid for the organizations you’d like to scan.

::: (Info) (Generating a Personal Access Token) Click here see [how to generate a Personal Access Token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token) . :::

3.  For every organization, insert the Personal Access Token in the dedicated field, which will run a validation process. Once validated, you will be able to sync the organizations for the scan.
    
    ![](/assets/d17a900-image.png)
    

*   Click the **Edit** button.
*   Insert your token.
*   Make sure to click on **V** button to validate the token.
*   Make sure to select the desired organization for syncing and scanning.

4.  Next, click **Sync Organizations** to run the sync.

![](/assets/8733b69-image.png)

4.  Once the sync is in-progress, you should see the following screen: ![](/assets/d6304fd-image.png)

Note that the sync time may varies, depending on the number of organizations that are selected to be synced and scanned. Once finished you’ll see an overview of all the data and can edit the token if needed:

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
