# CI/CD security policies | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/ci-cd-security/ci-cd-security-policies

---

# CI/CD security policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/ci-cd-security/ci-cd-security-policies.md "Edit this page")

Updated on Apr 15, 2025 • Published on Apr 15, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

CI/CD security policies follow the best practices for CI/CD pipelines, including least privilege, permissions, and vulnerabilities. This topic lists Cycode’s CI/CD security policies, and describes what’s monitored and the severity assigned to each policy.

Cycode’s **CI/CD security scanner** secures continuous integration and continuous deployment (CI/CD) pipelines, ensuring that the entire software delivery process is free from vulnerabilities and misconfigurations. This scanner examines every aspect of the CI/CD workflow, including build configurations, deployment scripts, and automation processes, to identify potential security risks that could be exploited by attackers. By integrating the CI/CD security scanner into the pipeline, organizations can achieve continuous security monitoring, ensuring that every code change, build, and deployment is scrutinized for compliance with security best practices. This proactive approach helps prevent the introduction of vulnerabilities, enhances the overall security posture, and ensures that only secure and compliant code is released to production.

## Policies [Copied!](#policies "Copy link to this section")

### Audit [Copied!](#audit "Copy link to this section")

Policy

Description

Severity

Source

Labels

A developer pushed a commit to a repository they have not used in 6 months

Get notified when a developer pushes code to a repository they have not pushed code to in the last 6 months.

Low

Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Anomaly Behavior, Stale Users & Services, SecOps

Frequent cloning or downloading

Get notified when a repository is cloned or downloaded excessively.

High

Bitbucket Server, GitHub, GitHub Enterprise, GitLab Enterprise

Anomaly Behavior, Public Exposure, SecOps

Non-verified script usage in code

Get notified about a potential risk if an unverified script is downloaded and executed.

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Certification, Vulnerabilities

Suspicious repository clone

Get notified when a suspicious repository clone is detected (Syslog setup is required for Github/Gitlab/Bitbucket enterprise installations).

High

Bitbucket Server, GitHub, GitHub Enterprise, GitLab Enterprise

Anomaly Behavior, SecOps

Used admin permission to merge code that failed status checks

Get notified if code with failed status checks is merged.

High

GitHub, GitHub Enterprise

Anomaly Behavior, Permissions, SecOps, Graph Query

.aliases file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.bashenv file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.bashrc file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.cer file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.cert file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.crl file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.crt file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.csr file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.der file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.env file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.envrc file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.exe file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.key file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.keystore file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.npmrc file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.p12 file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.p7b file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.pem file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.pfx file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.pkcs12 file extension changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.ssh file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.yo-rc.json file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.zshenv file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

.zshrc file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

application.properties file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

carrierwave.rb file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

id\_dsa file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

id\_rsa file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

jenkins.plugins.publish\_over\_ssh.BapSshPublisherPlugin.xml file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

LocalSettings.php file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Member first time repository clone

Get notified when a member clones a repository for the first time (Syslog setup is required for Github/Gitlab/Bitbucket enterprise installations).

Info

Bitbucket Server, GitHub, GitHub Enterprise, GitLab Enterprise

n.xml file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

npmrc file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

otr.private\_key file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

private.key file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

prod.secret.exs file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Pull request merged without review

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

rootkey.csv file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

schema.rb file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

secret\_token.rb file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

sshd\_config file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

variables\_tf file changes

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Newly installed third-party apps

Get notified about any installed GitHub apps and their permissions.

Low

GitHub

Inactive Repository

Get notified about inactive repositories that haven’t been modified within a certain amount of time to keep your SCM organized and free of clutter.

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Anomaly Behavior, Stale Users & Services, SecOps

Newly added organization member

Get notified when a new organization member is added.

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Repository creation

Get notified when a repository is created in your organization.

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Repository deletion

Get notified if a repository within your organization is deleted so you can act quickly to restore it.

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Repository renamed

Get notified when a repository within your organization is renamed.

Info

Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

### Identity and access management [Copied!](#identity-and-access-management "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Excess base permissions

Base permissions collectively apply to all of your organization’s repositories and control the default read/write access of all organization users. Get notified about excess base permissions within your organization’s repositories to ensure that user accounts aren’t over-privileged.

High

GitHub, GitHub Enterprise

Least Privilege, Permissions

Excess team project privileges

Get notified if a team within your organization isn’t fully utilizing their project privileges.

Medium

Bitbucket Server

Least Privilege, Permissions

Excess team repository privileges

Get notified if a team within your organization isn’t fully utilizing their repository privileges.

Medium

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise

Least Privilege, Permissions

Excess user project privileges

Get notified if an organization user isn’t making full use of their project privileges to reduce permissions for over-privileged accounts.

Medium

Bitbucket Server

Least Privilege, Permissions

Excess user repository privileges

Get notified if an organization user isn’t making full use of their repository privileges to reduce permissions for over-privileged accounts.

Medium

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise

Least Privilege, Permissions

Stale admin in organization

Get notified if an administrator isn’t using their administrative permissions to reduces the risk of abuse if an admin-level account is compromised.

Medium

GitHub, GitHub Enterprise

Stale Users & Services, SecOps

Two-factor authentication is disabled for user

Get notified when two-factor authentication is disabled by any user of your organization.

Medium

GitHub, GitHub Enterprise

Authentication, SecOps

Two-factor authentication not enforced for organization

Get notified if two-factor authentication is not required for all users of your organization.

High

GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Authentication, SecOps

Stale user in organization

Get notified if organization members aren’t making use of their account permissions.

Low

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Stale Users & Services, SecOps

Newly added outside collaborator

Get notified when a new external user is added to a repository.

Info

GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Public organization association

Get notified when a private organization user becomes publicly associated with all organizations.

Info

GitHub

SecOps, Public Exposure

Repository access permission changed

Get notified when a repository permission is changed.

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Permissions, Least Privilege

Stale branch

Get notified about stale branches that haven’t been modified within a certain amount of time to keep your SCM organized and free of clutter.

Info

Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Stale Users & Services

### Insecure Configurations [Copied!](#insecure-configurations "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Build execution enabled on Jenkins controller node

Get notified if your Jenkins Instance allows running builds on the controller node.

High

Jenkins

Jenkins

Excessive authorization permissions in Jenkins Instance

Get notified if your Jenkins Instance configuration contains excessive authorization.

Medium

Jenkins

Jenkins, Least Privilege, Permissions

Forked pull requests are allowed to be built automatically

Get notified if your CI/CD tools allow building pull requests from forks, which allows these user-owned forks to use tokens with read permissions on the source repository.

High

CircleCI

Permissions, Graph Query

Default branch is prone to deletion

Get notified if the branch protection rules of a repository don’t sufficiently safeguard against default branch deletion.

Medium

Bitbucket Server, GitHub, GitHub Enterprise

Branch Protection

Excessive repository permissions for using GitHub actions

Get notified if all repositories are permitted to run GitHub actions by default.

Low

GitHub, GitHub Enterprise

Configuration File Changes, Permissions, Graph Query

Merging code without squashing commits history is permitted

Get notified if users are able to merge pull requests without squashing the commits history.

Info

GitHub, GitHub Enterprise

Permissions

Missing .gitignore file

A .gitignore file defines project files or folders that don’t get committed. Get notified about repositories that don’t have a .gitignore file.

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Missing File

Missing CODEOWNERS file

A CODEOWNERS file identifies individual users or teams that are responsible for specific code in a repository. Get notified if a repository doesn’t have a CODEOWNERS file.

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Missing File

Missing LICENSE file

A LICENSE file is used to declare the authorized usage of source code within a repository. Get notified if a repository doesn’t have a LICENSE file.

Info

Bitbucket, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Missing File

Repository webhook URL is insecure

Get notified about repository webhooks that use HTTPS protocol.

Info

GitHub, GitHub Enterprise

Alerts of new vulnerabilities are disabled

Get notified if alerts of new vulnerabilities that affect your dependencies are disabled.

Low

GitHub, GitHub Enterprise

Vulnerabilities

Repository vulnerability alerts disabled

Get notified if a repository doesn’t have vulnerability alerts.

Info

GitHub

Vulnerabilities

### Pipeline Composition Analysis [Copied!](#pipeline-composition-analysis "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Build step exposed to code and command injection

Get notified If your GitHub Action workflows contain a step that is exposed to code and command injection scenarios.

High

GitHub, GitHub Enterprise

Malicious Injection, Vulnerabilities, Graph Query

CI/CD workflow is maintained by 3rd party

Get notified if your CI/CD workflow has reusable public workflows that are maintained by a third party.

Medium

GitHub, GitHub Enterprise

Graph Query

Jenkins Instance uses 3rd party vulnerable plugin

Get notified when your Jenkins Instance uses vulnerable third-party plugins.

Multiple Severities

Jenkins

Jenkins, Vulnerabilities, Graph Query

Uncertified plugins in your Jenkins Instance

Get notified when your Jenkins instance uses plugins that aren’t certified by the build system’s provider.

High

Jenkins

Jenkins, Certification, Vulnerabilities, Graph Query

Vulnerable Jenkins Version

Get notified when a vulnerable Jenkins version is detected in your workflow.

High

Jenkins

Jenkins, Vulnerabilities, Graph Query

CI/CD workflow uses module with vulnerable dependencies

Get notified when your CI/CD workflow (GitHub Actions Workflow) references an external module that contains vulnerable dependencies.

Low

GitHub, GitHub Enterprise

Vulnerabilities, Graph Query

CircleCI workflows use uncertified CI/CD modules

Get notified if your CI/CD workflows use reusable modules that aren’t certified by the service provider or created by a verified partner.

Medium

CircleCI

CircleCI, Certification, Vulnerabilities, Graph Query

GitHub workflows use uncertified CI/CD modules

Get notified if your CI/CD workflows use reusable modules that aren’t certified by the service provider or created by a verified partner.

Medium

GitHub, GitHub Enterprise

Certification, Vulnerabilities, Graph Query

Uncertified CI/CD modules are allowed to run

Get notified if developers are allowed to run any reusable CI/CD modules regardless of who owns them or if they are certified.

Medium

CircleCI, GitHub, GitHub Enterprise

Certification, Vulnerabilities, Graph Query

Pipelines are allowed to create and approve pull requests

Get notified if your organization has the **Can Approve Pull Request Reviews** toggle set for the **GitHub Actions** pipelines, potentially allowing pipelines to create and approve pull requests without appropriate oversight and control.

Medium

GitHub, GitHub Enterprise Server

Authentication, SecOps Graph Query

Pipelines have high default permissions

Get notified if your organization has the **Default Workflow Permissions** toggle set to **write**, which grants pipelines higher default permissions than necessary.

Medium

GitHub, GitHub Enterprise Server

Authentication, SecOps Graph Query

Pipeline is running with high privileges

Get notified when a workflow hasn’t incorporated limited privileges in the defined pipeline, potentially running with higher privileges than necessary for security.

Medium

GitHub, GitHub Enterprise Server

Authentication, SecOps Graph Query

### Tampering, detection, and prevention [Copied!](#tampering-detection-and-prevention "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

A developer bypassed branch protection rules

Get notified when a developer deletes/modifies branch protection, commits/merges code after this change, and restores the branch protection after the code change.

High

GitHub, GitHub Enterprise

Anomaly Behavior, Branch Protection

Pipeline triggered by commit without pull request

Get notified when a build pipeline is triggered by a commit that isn’t part of a pull request.

Low

GitHub, GitHub Enterprise

Branch protection rules are disabled for repository

Get notified if branch protection rules are disabled.

Medium

Bitbucket Cloud, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Branch Protection, Malicious Injection

Branch protection was deleted

Get notified when configured branch rules are deleted.

High

Bitbucket Cloud, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Anomaly Behavior, Branch Protection

Commit to protected branch without pull request

Get notified when content is committed directly to a protected branch without a pull request.

Medium

Bitbucket Cloud, GitHub, GitHub Enterprise

Anomaly Behavior, Branch Protection

Committing unsigned code on default branch is permitted

Ensure that branch protection rules prevent users from committing unsigned code to the default branch of all repositories.

Low

Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Branch Protection

Force-push on default branch is permitted

Ensure that branch protection rules prevent users from force-pushing code to the default branch of all repositories.

Medium

Bitbucket Cloud, Bitbucket Server, GitHub, GitHub Enterprise

Branch Protection

Merging code without review on default branch is permitted

Ensure that branch protection rules prevent users from merging code without review to the default branch of all repositories.

Medium

Bitbucket Cloud, Bitbucket Server, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Branch Protection

Branch protection rules are not enforced on administrators/custom roles.

Get notified if the branch protection rule Do not allow bypassing the above settings is disabled.

This rule enforces branch protection settings applied to administrators and custom roles with the bypass branch protections permission.

Medium

GitHub, GitHub Enterprise Server

Branch Protection

Require reviewer(s) approval of pull request before merging.

Get notified if the branch protection rule Require reviewer(s) approval of pull request before merging is disabled.

When this rule is enabled, all commits must be made to a non-protected branch and submitted via a pull request before the commit can be merged into a branch that matches this rule.

High

GitHub, GitHub Enterprise Server

Branch Protection

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
