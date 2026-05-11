# CircleCI | Cycode Docs

Source: https://docs.cycode.com/integrations/build-tools/circleci

---

# CircleCI

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/build-tools/circleci.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating security into build tools typically involves adding security checks or safeguards to each key stage of the CI/CD pipeline. CircleCI is a a continuous integration and delivery platform that enables users to easily create CI/CD workflows, using a group of ready-to-use commands (orbs) that can be added to your configuration file.

CircleCI secrets are environment variables that are encrypted and stored securely in the CircleCI platform. They can be used to store sensitive data, such as API keys or passwords, that need to be accessed by a CircleCI workflow. Secrets are stored in the context of a project and can be accessed by any job within that project that has the appropriate permissions. Secrets are encrypted at rest and are not accessible to anyone without the necessary permissions.

Cycode is able to identify if you are using CircleCI by inspecting your repository webhooks. Once you’ve integrated CircleCI with our platform, you can view all CircleCI-related secrets in the Context Intelligence Graph. You can then assess the risk of each secret by understanding how it relates to your SCM repositories, container registries, and production workloads. Cycode also helps to harden the configuration of your CircleCI instance to better secure stored secrets, for example, identify secrets that are passed to forked pull requests. This enables developers with low privileges to create a fork of a repository and then steal the secrets through a PR in the forked repository. Using Cycode, you can detect this issue and disable this configuration if not necessary:

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating CircleCI with Cycode:

Permissions

Explanation

Personal Api Token

Integration only requires the use of a personal API token in CircleCI.

## Integrating with CircleCI [Copied!](#integrating-with-circleci "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  Under the **Build** section, click **CircleCI**.
    

![](/assets/3be964a-image.png)

The following page is displayed:

![](/assets/c403b96-image.png)

3.  Enter a name for the integration.
    
4.  In CircleCI, go to **User Settings > Personal API Tokens > Create New Token** and then enter the API Token in the window above.
    
5.  Click **Done** to save your changes and add the integration.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
