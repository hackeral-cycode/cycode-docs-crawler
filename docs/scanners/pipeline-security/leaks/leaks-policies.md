# Leaks policies | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/leaks/leaks-policies

---

# Leaks policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/leaks/leaks-policies.md "Edit this page")

Updated on Jul 18, 2024 • Published on Jul 18, 2024

* * *

Leaks policies detect potential code leaks from your organization. Cycode monitors public repositories, searching for any code that appears similar to yours.

The **leak scanner** detects potential data breaches by scanning repositories for exposed credentials and other sensitive data. This scanner is crucial in identifying inadvertent leaks, such as exposed tokens or private keys, which could lead to significant security vulnerabilities if accessed by malicious actors.

## Leaks [Copied!](#leaks "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Code snippet leak

Enabling this policy will notify you if proprietary customer information is found in a member public snippets.

Critical

Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Public Exposure

Potential data leaks in public repositories

This policy detects potential code leaks by monitoring public user repositories and notifying you if similar organization content is found.

Critical

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Public Exposure

Private repository leak

This policy detects possible leaks by continuously monitoring publicly available code repositories and notifying you if a public repository resembles the attributes of a private repository within your organization.

High

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Public Exposure

Large percentage of repository downloaded or cloned

Enabling this policy will notify you if an organization’s private repository has been cloned or downloaded excessively.

Medium

Bitbucket Server, GitHub, GitHub Enterprise, GitLab Enterprise

Anomaly Behavior, Public Exposure, SecOps

Private repository fork

Forking a private repository copies the repository to the account that performed the action and may result in compromised data. Enable this policy to be notified if a private repository is forked.

Medium

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise

Repository visibility changed to public

Enable this policy to be notified when a repository in the organization changes its visibility to help reduce the risk of exposing private information.

Medium

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Public Exposure, SecOps

Public repository in organization

Enable this policy to be notified when the visibility of existing and new organization repositories are set to public.

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
