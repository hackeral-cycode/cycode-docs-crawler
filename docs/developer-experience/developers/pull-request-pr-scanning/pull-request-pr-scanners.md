# Pull Request (PR) scanners | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/pull-request-pr-scanning/pull-request-pr-scanners

---

# Pull Request (PR) scanners

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/pull-request-pr-scanning/pull-request-pr-scanners.md "Edit this page")

Updated on Dec 25, 2025 • Published on Mar 20, 2025

* * *

Once you’ve integrated Cycode with your source code, you can now control which repositories and organizations are monitored by Cycode as part of the PR/merge request status check scanners, and then determine which actions the developer can take in the PR comment per each type of violation.

Note that PR scanning will scan the difference of the code in the given pull request. Meaning, it will scan and look for everything that was changed between the two branches (the one that is being merged and the one that it’s being merged to).

Important

By default, any failed status check will fail the PR/merge request. If you disable this feature, Cycode continues to integrate and check your repositories for violations but does not run status checks per PR.

*   [Secrets](/scanners/pipeline-security/secrets/secrets-detection-policies) - Cycode scans the specific commit and if a secret is found, it alerts within the PR itself.
*   [SAST](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies) - Cycode scans the specific commit and if a SAST violation is found, it alerts within the PR itself.
*   [SCA](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-policies) - Cycode scans the specific commit and if a Dependency Vulnerability and/or License Compliance violation is found, it alerts within the PR itself.
*   [IaC](/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies) - Cycode scans the specific commit and if an IaC violation is found, it alerts within the PR itself. For PR status checks in Azure DevOps, if the PR issue was found to be resolved, Cycode can automatically change the status in the pull request to resolved.
*   [CI/CD](/scanners/pipeline-security/ci-cd-security/ci-cd-security-policies) - Cycode scans the specific commit and if a CI/CD Security violation is found, it alerts within the PR itself.

When a PR is checked for the enabled PR scanners, the Cycode PR status check will appear under the Status Checks section, as shown below:

![](/assets/image-39.png)

Important

If you’ve limited the identity of a user who can edit a PR status to an “Authorized Entity” only, you’ll need to ensure that the integration with Cycode is performed by an entity with that authorization.

If any issues are found in the PR, a comment will be added showing what the issue is. Refer to following pages for the different examples available to each scanner:

*   [Secrets PR Scanner](/developer-experience/developers/pull-request-pr-scanning/secrets-pr-scanner)
*   [SAST PR Scanner](/developer-experience/developers/pull-request-pr-scanning/sast-pr-scanner)
*   [SCA Scanners](/developer-experience/developers/pull-request-pr-scanning/sca-pr-scanners)
*   [IaC Scanner](/developer-experience/developers/pull-request-pr-scanning/iac-pr-scanner)
*   [CI/CD Security Scanner](/developer-experience/developers/pull-request-pr-scanning/ci-cd-security-pr-scanner)

Important

Users can interact with the scanner by replying to the scanner’s comment directly.

## PR feature support per SCM [Copied!](#pr-feature-support-per-scm "Copy link to this section")

[GitHub](/integrations/scm-source-code-management-tools/github)

[GitHub Enterprise Server](/integrations/scm-source-code-management-tools/github-enterprise-server)

[GitLab](/integrations/scm-source-code-management-tools/gitlab)

[GitLab Self-Managed](/integrations/scm-source-code-management-tools/gitlab-self-managed)

[Azure DevOps](/integrations/scm-source-code-management-tools/azure-devops)

[Azure DevOps Server](/integrations/scm-source-code-management-tools/azure-devops-server)

[Bitbucket](/integrations/scm-source-code-management-tools/bitbucket)

[Bitbucket Server](/integrations/scm-source-code-management-tools/bitbucket-server)

[Gerrit](/integrations/scm-source-code-management-tools/gerrit)

[Helix](/integrations/scm-source-code-management-tools/perforce-p4-formerly-helix-core)

**{{glossary.Scanner settings - PR scan}}**

Yes

Yes

Yes

Yes

Yes

Yes

Yes

Yes

Yes

Yes

**{{glossary.Scanner settings - block merge}}**

Yes

Yes

Ultimate only

Ultimate only

Yes

Yes

**X**

**X**

Yes

Yes

Enforce block merge

**X**

**X**

Ultimate only

Ultimate only

**X**

**X**

**X**

**X**

**X**

**X**

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
