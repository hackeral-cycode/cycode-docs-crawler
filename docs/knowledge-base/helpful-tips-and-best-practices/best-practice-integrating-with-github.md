# Best practice: Integrating with GitHub | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/helpful-tips-and-best-practices/best-practice-integrating-with-github

---

# Best practice: Integrating with GitHub

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/helpful-tips-and-best-practices/best-practice-integrating-with-github.md "Edit this page")

Updated on May 23, 2024 • Published on May 23, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

One of the more common integrations you’ll probably implement when integrating Cycode with your system is the integration between Cycode and your GitHub. When integrating Cycode with your GitHub, there are a number of settings you’ll want to configure for the best possible outcome, as part of a best practice.

In this article you’ll find the optimal settings in GitHub recommended by the research team, and how to use Cycode to maximize the ability to do compliance and governance.

These are the settings you’ll need to focus on:

*   GitHub organization settings
*   GitHub repository settings
*   GitHub Action settings

## GitHub recommended organization settings [Copied!](#github-recommended-organization-settings "Copy link to this section")

Set the following recommended organization settings.

### Base permissions [Copied!](#base-permissions "Copy link to this section")

1.  Go to **Access -> Member privileges**.
2.  Set the member base privileges to no higher than “Read” permissions:

![](/assets/image-13.png)

3.  Use the Cycode policy Excess base permissions to monitor members’ excess permissions.

### Repository creation permissions [Copied!](#repository-creation-permissions "Copy link to this section")

1.  Go to **Access -> Member privileges**.
2.  Recommended: Disable the option to allow members to create public repositories; note that certain organizations may enable this option depending on the use case.

![](/assets/image-14.png)

3.  Monitor using the following Discovery page query:

![](/assets/image-15.png)

### Repository forking [Copied!](#repository-forking "Copy link to this section")

1.  Go to **Access -> Member privileges**.
2.  Disable the forking of private repositories due to the risk of leakages; note that certain organizations may enable this option depending on the use case.

![](/assets/image-16.png)

3.  Monitor using the following Discovery page query:

![](/assets/image-17.png)

### Outside collaboration settings [Copied!](#outside-collaboration-settings "Copy link to this section")

1.  Go to **Access -> Member privileges**.
2.  Enabling or disabling outside collaborators in the organization should depend on the organization’s policy. Inviting outside collaborators can increase the risk of code tampering or the leakage of proprietary code.

![](/assets/image-18.png)

**Note:**  
This Setting cannot be monitored in Cycode currently.

### Enforce MFA settings [Copied!](#enforce-mfa-settings "Copy link to this section")

1.  Go to **Security -> Authentication Security**.
2.  Require two-factor authentication (2FA) for each member and outside collaborator.

![](/assets/image-19.png)

3.  Use the Cycode policy [Two-factor authentication not enforced for organization](/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations) .

## Repository settings and branch protections [Copied!](#repository-settings-and-branch-protections "Copy link to this section")

### Branch protection recommendations [Copied!](#branch-protection-recommendations "Copy link to this section")

For each repository, we recommend protecting the main branch. The least configuration we recommend are the following:

*   Require a pull request before merging
*   Require status checks to pass before merging
*   Do not allow bypassing the above settings

For important projects, we also recommend:

*   Require approvals - with 2 approvals
*   Require signed commits

### Branch protection enforcement [Copied!](#branch-protection-enforcement "Copy link to this section")

These protections can be governed through Cycode in two ways:

*   Using the policy for missing branch protections \[[Branch protection rules are disabled for repository](/scanners/pipeline-security/ci-cd-security/ci-cd-security-policies) \]
*   By creating custom policies based on graph queries with the desired configuration:

![](/assets/image-20.png)

## GitHub Action settings [Copied!](#github-action-settings "Copy link to this section")

Set the following recommended GitHub Action settings.

### Allow Github Actions [Copied!](#allow-github-actions "Copy link to this section")

1.  Go to **Actions -> General**.
2.  The repositories with active Github Actions should be selected, so newly created repositories won’t risk the stored secrets.

![](/assets/image-21.png)

3.  Monitor using the following Discovery page query:

![](/assets/image-22.png)

### Allow modules [Copied!](#allow-modules "Copy link to this section")

1.  Go to **Actions -> General**.
2.  The general recommendation is to limit the module names using a specified list.

![](/assets/image-23.png)

3.  Monitor using the following Discovery page query:

![](/assets/image-24.png)

### Runners [Copied!](#runners "Copy link to this section")

1.  Go to **Actions -> General**.
2.  If only self-hosted runners are used, make sure to enforce this policy:

![](/assets/image-25.png)

**Note:**  
This setting cannot be monitored in the Discovery page currently.

### Workflow permissions [Copied!](#workflow-permissions "Copy link to this section")

1.  Go to **Actions -> General**.
2.  Reduce the default permission for Github Actions workflows to “read only”. Note that a workflow syntax could request higher permissions if needed.

![](/assets/image-26.png)

3.  Monitor using the following Discovery page query:

![](/assets/image-27.png)

### Allow creating PRs [Copied!](#allow-creating-prs "Copy link to this section")

1.  Go to **Actions -> General**.
2.  Remove the checkbox that allows Github Actions to create and approve PRs.

![](/assets/image-28.png)

3.  Monitor using the following Discovery page query:

![](/assets/image-29.png)

## Using a GitHub Actions secret manager [Copied!](#using-a-github-actions-secret-manager "Copy link to this section")

When using Github Actions, it’s highly recommended to store secrets and tokens either in the built-in Github Actions secret manager, or in an external KMS systems (such as Hashicorp Vault).

Secrets stored in the organization **(Organization Settings -> Secrets and variables -> Actions**), should **never** be exposed to all repositories. This may lead into a secret leakage by creating new repositories. The recommended configuration is for each secret to select the specific repositories it is exposed to.

![](/assets/image-30.png)

## Github Actions workflow best practices [Copied!](#github-actions-workflow-best-practices "Copy link to this section")

The following resources can help you understand some of the pitfalls in writing secure Github Actions workflow:

*   [GitHub Actions Vulnerabilities](https://cycode.com/blog/github-actions-vulnerabilities)
*   [How We Found Critical Vulnerabilities in Storybook Project](https://cycode.com/blog/ci-story-how-we-found-critical-vulnerabilities-in-storybook-project)
*   [All Roads Lead to Build Secrets](https://cycode.com/blog/all-roads-lead-to-build-secrets)
*   [Analyzing the Vulnerability that Could Have Compromised Microsoft 365 Users](https://cycode.com/blog/analyzing-the-vulnerability-that-could-have-compromised-microsoft-365-users)
*   [GitHub Actions Preventing PWN Requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)
*   [GitHub Actions Untrusted Input](https://securitylab.github.com/research/github-actions-untrusted-input)
*   [GitHub Actions Building Blocks](https://securitylab.github.com/research/github-actions-building-blocks)

**👍 Tip**  
We also recommend using Cycode’s [Raven](https://github.com/cycodelabs/raven) , our advanced CLI tool that scans workflows for CI/CD vulnerabilities.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
