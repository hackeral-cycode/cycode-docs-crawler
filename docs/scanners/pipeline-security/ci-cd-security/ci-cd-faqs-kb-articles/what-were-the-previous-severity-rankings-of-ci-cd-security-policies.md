# What were the previous severity rankings of CI/CD Security policies? | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/ci-cd-security/ci-cd-faqs-kb-articles/what-were-the-previous-severity-rankings-of-ci-cd-security-policies

---

# What were the previous severity rankings of CI/CD Security policies?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/ci-cd-security/ci-cd-faqs-kb-articles/what-were-the-previous-severity-rankings-of-ci-cd-security-policies.md "Edit this page")

Updated on Oct 15, 2024 • Published on Oct 15, 2024

* * *

Note

👍 **New CI/CD Severity rankings** In August 2023, we released Cycode’s new severity rankings, which are designed to make it easier for you to understand and to apply the policy severity rankings in the Cycode system. With these rankings, you’ll be able to determine whether a severity’s priority matches your organization’s security approach, and to prioritize your work.

This documentation details the previous severity rankings of the CI/CD policies, which were updated in August 2023.

As part of our continuous monitoring and updates, we decided to update the default severities of the different Secrets and CI/CD Security policies to better reflect the impact of those policies. The new severity rank provides a more granular prioritization, and is based on different categories such as the SDLC stage, messaging system, monitoring, and more.

When the new severity is applied to the policy, this will automatically update any violations detected under that policy to the new severity level. Of course, if you’ve manually changed a policy’s severity, this change will **not** override your changes. Any future manual changes you make will also be maintained.

## How does it work? [Copied!](#how-does-it-work "Copy link to this section")

After reviewing each policy, we determined to which category it belonged, and, based on that category, which severity ranking should be applied. Therefore, if a policy was assigned to a category that has a higher ranking, for example, cloud providers, then the default severity rank would be critical. But a policy that was assigned to a category such as social network would receive a low severity rank. Note, however, that this assignment does not blanket all policies - each policy is carefully reviewed before receiving a new ranking (if at all).

## Audit [Copied!](#audit "Copy link to this section")

Policy Name

Description

Severity

Previous Severity

Source

Labels

Frequent cloning or downloading

Enabling this policy will notify you if a repository has been cloned or downloaded excessively

High

High

Bitbucket Server, GitHub, GitHub Enterprise, GitLab Enterprise

Anomaly Behavior, Public Exposure, SecOps

Suspicious repository clone

Enabling this policy will notify you whenever a suspicious repository clone was detected (Note: for Github/Gitlab/Bitbucket enterprise installations - syslog setup is required).

High

High

Bitbucket Server, GitHub, GitHub Enterprise, GitLab Enterprise

Anomaly Behavior, SecOps

Used admin permission to merge code

that failed status checks

Enable this policy to be notified if code with failed status checks was merged.

High

High

GitHub, GitHub Enterprise

Anomaly Behavior, Permissions, SecOps, Graph Query

.aliases file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

A developer pushed a commit to a

repository they have not used in 6 months

Enable this policy to be notified if a developer pushes code to a repository they have not pushed code to in the last 6 months.

Low

High

Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Anomaly Behavior, Stale Users Services, SecOps

Non-verified script usage in code

Enabling this policy will notify you on a potential risk for non-verified script that is downloaded and immediately executed

Low

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Certification, Vulnerabilities

Pull request merged without review

Low

Medium

Bitbucket Cloud, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Anomaly Behavior

Newly installed third-party apps

Enabling this policy reduces the risk of unauthorized access by notifying for any installed GitHub apps and their permissions.

Low

Low

GitHub

.bashenv file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.bashrc file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.cer file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.cert file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.crl file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.crt file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.csr file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.der file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.env file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.envrc file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.exe file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.key file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.keystore file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.npmrc file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Configuration File Changes

.p12 file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.p7b file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.pem file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.pfx file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.pkcs12 file extension changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.ssh file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

SSH

.yo-rc.json file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.zshenv file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.zshrc file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

application.properties file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

carrierwave.rb file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

id\_dsa file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

id\_rsa file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

jenkins.plugins.publish\_over\_ssh.BapSshPublisherPlugin.xml file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

LocalSettings.php file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Member first time repository clone

Enabling this policy will notify you whenever a member clones a repository for the first time (Note: for Github/Gitlab/Bitbucket enterprise installations - syslog setup is required).

Info

Medium

Bitbucket Server, GitHub, GitHub Enterprise, GitLab Enterprise

n.xml file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

npmrc file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Configuration File Changes

otr.private\_key file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

private.key file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

prod.secret.exs file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

rootkey.csv file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

schema.rb file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

secret\_token.rb file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

sshd\_config file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

variables\_tf file changes

Info

Medium

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Inactive repository

Enable this policy to be notified about inactive repositories that haven’t been modified within a certain amount of time to keep your SCM organized and free of clutter.

Info

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Anomaly Behavior, Stale Users Services, SecOps

Newly added organization member

Enable this policy to get notified when a new organization member is added.

Info

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Repository creation

Enabling this policy will notify you whenever a repository within your organization is created.

Info

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Repository deletion

Enabling this policy will notify you if a repository within your organization is deleted so you can act quickly to restore it.

Info

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Repository renamed

Enabling this policy will notify you whenever a repository within your organization is renamed.

Info

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

## Identity & Access Management [Copied!](#identity--access-management "Copy link to this section")

Policy Name

Description

Severity

Previous Severity

Source

Labels

Excess base permissions

Base permissions collectively apply to all of your organization’s repositories and control the default read/write access of all organization users. Enable this policy to be notified about excess base permissions within your organziation’s repositories to ensure that user accounts are not over-privileged.

High

Medium

GitHub, GitHub Enterprise

Least Privilege, Permissions

Two-factor authentication not enforced for organization

Enabling this policy reduces the risk of compromised accounts by notifying you if two-factor authentication is not required for all users of your organization.

High

Medium

GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Authentication, SecOps

Excess team project privileges

Enable this policy to be notified if a team within your organization isn’t fully utilizing their project privileges.

Medium

Medium

Bitbucket Server

Least Privilege, Permissions

Excess team repository privileges

Enable this policy to be notified if a team within your organization isn’t fully utilizing their repository privileges.

Medium

Medium

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise

Least Privilege, Permissions

Excess user project privileges

Enable this policy to get notified if an organization user isn’t making full use of their project privileges to reduce over-privileged accounts.

Medium

Medium

Bitbucket Server

Least Privilege, Permissions

Excess user repository privileges

Enable this policy to get notified if an organization user isn’t making full use of their repository privileges to reduce over-privileged accounts.

Medium

Medium

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise

Least Privilege, Permissions

Stale admin in organization

Enabling this policy reduces the risk of abuse if an admin-level account is compromised by notifying you if an administrator isn’t using their administrative permissions.

Medium

Medium

GitHub, GitHub Enterprise

Stale Users & Services, SecOps

Two-factor authentication is disabled for user

Enabling this policy reduces the risk of compromised accounts by notifying you if two-factor authentication is disabled by any user of your organization.

Medium

Medium

GitHub, GitHub Enterprise

Authentication, SecOps

Stale user in organization

Enabling this policy reduces the risk of abuse if an account is compromised by notifying you if organization members aren’t making use of their account permissions.

Low

Low

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Stale Users & Services, SecOps

Newly added outside collaborator

Enable this policy to get notified when a new outside collaborator is added to a repository.

Info

Info

GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Public organization association

Reduce the risk of social engineering attacks by receiving alerts if a private organization user becomes publicly associated with all organizations.

Info

Info

GitHub

SecOps, Public Exposure

Repository access permission changed

Enable this policy to get notified when a repository permission is changed.

Info

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Permissions, Least Privilege

Stale branch

Enable this policy to be notified about stale branches that haven’t been modified within a certain amount of time to keep your SCM organized and free of clutter.

Info

Info

Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Stale Users & Services

## Insecure Configurations [Copied!](#insecure-configurations "Copy link to this section")

Policy Name

Description

Severity

Previous Severity

Source

Labels

Build execution enabled on Jenkins controller node

Enable this policy to be notified if your Jenkins Instance allows running builds on the controller node

High

High

Jenkins

Jenkins

Forked pull requests are allowed to be built automatically

Enable this policy to be notified If your CI/CD tools allow building pull requests from forks, hence allowing these user-owned forks to use tokens with read permissions on the source repository.

High

Medium

CircleCI

Permissions, Graph Query

Excessive authorization permissions in Jenkins Instance

Enable this policy to be notified if your Jenkins Instance configuration contains excessive authorization.

Medium

Medium

Jenkins

Jenkins, Least Privilege, Permissions

Default branch is prone to deletion

Enable this policy to be notified if the branch protection rules of a repository do not sufficiently safeguard against default branch deletion.

Medium

Low

Bitbucket Server, GitHub, GitHub Enterprise

Branch Protection

Excessive repository permissions for using GitHub actions

Enable this policy to be notified if all repositories are permitted to run GitHub actions by default.

Low

Low

GitHub, GitHub Enterprise

Configuration File Changes, Permissions, Graph Query

Merging code without squashing commits history is permitted

Enabling this policy will notify you if users are able to merge pull requests without squashing the commits history.

Info

Info

GitHub, GitHub Enterprise

Permissions

Missing .gitignore file

.gitignore files defines which files or folders to ignore within a project, this file can help prevent committing sensitive files to a repository. Enable this policy to detect repositories that are missing these files.

Info

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Missing File

Missing CODEOWNERS file

A CODEOWNERS file is used to identify individuals or teams that are responsible for specific code in a repository. Enable this policy to be notified if a repository is missing a CODEOWNERS file.

Info

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Missing File

Missing LICENSE file

A LICENSE file is used to declare the authorized usage of source code within a repository. Enable this policy to be notified if a repository is missing a LICENSE file.

Info

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Missing File

Repository webhook URL is insecure

Enable this policy to ensure that repository webhooks use https protocol.

Info

Info

GitHub, GitHub Enterprise

## Pipeline Composition Analysis [Copied!](#pipeline-composition-analysis "Copy link to this section")

Policy Name

Description

Severity

Previous Severity

Source

Labels

Build step exposed to code and command injection

Enable this policy to be notified If your GitHub Action workflows contain a step that is exposed to code and command injection scenarios.

High

High

GitHub, GitHub Enterprise

Malicious Injection, Vulnerabilities, Graph Query

Uncertified plugins in your Jenkins Instance

Enable this policy to be notified when your Jenkins Instance uses plugins that aren’t certified by the build system’s provider.

High

High

Jenkins

Jenkins, Certification, Vulnerabilities, Graph Query

Vulnerable Jenkins Version

Enable this policy to be notified when a vulnerable Jenkins version is detected in your workflow

High

High

Jenkins

Jenkins, Vulnerabilities, Graph Query

CI/CD workflow is maintained by 3rd party

Enable this policy to be notified if your CI/CD workflow uses reusable public workflows that are maintained by a 3rd party.

Medium

High

GitHub, GitHub Enterprise

Graph Query

CircleCI workflows use uncertified CI/CD modules

Enable this policy to be notified if your CI/CD workflows use reusable modules that are not certified by the service provider or created by a verified partner.

Medium

Medium

CircleCI

CircleCI, Certification, Vulnerabilities, Graph Query

GitHub workflows use uncertified CI/CD modules

Enable this policy to be notified if your CI/CD workflows use reusable modules that are not certified by the service provider or created by a verified partner.

Medium

Medium

GitHub, GitHub Enterprise

Certification, Vulnerabilities, Graph Query

Uncertified CI/CD modules are allowed to run

Enable this policy to be notified if developers are allowed to run any reusable CI/CD modules regardless of who owns them or if they are certified.

Medium

Medium

CircleCI, GitHub, GitHub Enterprise

Certification, Vulnerabilities, Graph Query

Pipelines are allowed to create and approve pull requests

Organization has the “Can Approve Pull Request Reviews” toggle set for the GitHub Actions pipelines, potentially allowing pipelines to create and approve pull requests without appropriate oversight and control.

Medium

Medium

GitHub, GitHub Enterprise Server

Authentication, SecOps Graph Query

Pipelines have high default permissions

Organization has the “Default Workflow Permissions” toggle set to write, which grants pipelines higher default permissions than necessary.

Medium

Medium

GitHub, GitHub Enterprise Server

Authentication, SecOps Graph Query

Pipeline is running with high privileges

Workflow hasn’t incorporated limited privileges in the defined pipeline, potentially running with higher privileges than necessary for security.

Medium

Medium

GitHub, GitHub Enterprise Server

Authentication, SecOps Graph Query

Jenkins Instance uses 3rd party vulnerable plugin

Enable this policy to be notified when your Jenkins Instance uses vulnerable 3rd party plugins

Multiple Severities

Multiple Severities

Jenkins

Jenkins, Vulnerabilities, Graph Query

CI/CD workflow uses module with vulnerable dependencies

Enable this policy to be notified when your CI/CD workflow (e.g. GitHub Actions Workflow) references an external module that contains vulnerable dependencies.

Low

Multiple Severities

GitHub, GitHub Enterprise

Vulnerabilities, Graph Query

## Tampering, Detection, & Prevention [Copied!](#tampering-detection--prevention "Copy link to this section")

Policy Name

Description

Severity

Previous Severity

Source

Labels

A developer bypassed branch protection rules

Enable this policy to be notified if a developer deleted/modified branch protection, committed/merged code after this change, and restored the branch protection after the code change.

High

High

GitHub, GitHub Enterprise

Anomaly Behavior, Branch Protection

Branch protection was deleted

Enable this policy to be notified when configured branch rules are deleted.

High

Medium

Bitbucket Cloud, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Anomaly Behavior, Branch Protection

Branch protection rules are disabled for repository

Branch protection rules protect repositories against malicious injection and tampering. Enable this policy to be notified if branch protection rules are disabled.

Medium

Medium

Bitbucket Cloud, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Branch Protection, Malicious Injection

Commit to protected branch without pull request

Enabling this policy will notify you whenever content was committed directly to a protected branch without a pull request.

Medium

Medium

Bitbucket Cloud, GitHub, GitHub Enterprise

Anomaly Behavior, Branch Protection

Force-push on default branch is permitted

Enable this policy to ensure that branch protection rules prevent users from force-pushing code to the default branch of all repositories.

Medium

Medium

Bitbucket Cloud, Bitbucket Server, GitHub, GitHub Enterprise

Branch Protection

Merging code without review on default branch is permitted

Enable this policy to ensure that branch protection rules prevent users from merging code without review to the default branch of all repositories.

Medium

Medium

Bitbucket Cloud, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Branch Protection

Pipeline triggered by commit without pull request

Enabling this policy will notify you whenever a build pipeline was triggered by a commit that was not part of a pull request.

Low

High

GitHub, GitHub Enterprise

Committing unsigned code on default branch is permitted

Enable this policy to ensure that branch protection rules prevent users from committing unsigned code to the default branch of all repositories.

Low

Medium

Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Branch Protection

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
