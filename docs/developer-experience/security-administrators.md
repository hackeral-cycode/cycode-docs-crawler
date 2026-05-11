# Security administrators | Cycode Docs

Source: https://docs.cycode.com/developer-experience/security-administrators

---

# Security administrators

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/security-administrators/_index.md "Edit this page")

Updated on Jan 25, 2026 • Published on Jan 25, 2026

* * *

As the security administrator in your organization, one of your responsibilities is to integrate Cycode with your R&D processes. As such, you have to:

1.  Set up tools: Ensure that IDE plugins, PR scanning, and the Cycode CLI are available and ready for your developers to apply.
    
2.  Set up project managers and team leads. After these steps are in place, you can also choose to onboard your engineers to the platform, which you can do easily using the bulk enrollment option.
    
3.  Use the Cycode audit to review the actions of your organization’s members.
    

## Tool setup [Copied!](#tool-setup "Copy link to this section")

Here you’ll find links to the information you need to integrate Cycode with R&D tools and processes.

## Set up IDE plugins [Copied!](#set-up-ide-plugins "Copy link to this section")

IDE plugins are set at the machine-level, so your engineers need a link to the Cycode plugin installer, and to install and configure the plugin on their machines.

Currently, the IDE plugin available to your developers is [Cycode Visual Studio Extension](/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/) , which provides a set of tools and features to enhance the development experience for users working with Cycode, and the [Cycode JetBrains IDE Plugin](/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin/) , which helps users to adopt a shift-left strategy by enabling code scanning early in the development lifecycle.

### Add company remediation guidelines [Copied!](#add-company-remediation-guidelines "Copy link to this section")

If your company has [set custom remediation guidelines](/policies/manage-policies) in the relevant policy, you’ll also see a field for Company Guidelines that contains the remediation guidelines you added.

## Configure pull request (PR) scanning [Copied!](#configure-pull-request-pr-scanning "Copy link to this section")

After Cycode is [integrated](/integrations/scm-source-code-management-tools/) with your source code, you can control which repositories and organizations are monitored by Cycode by configuring pull request (PR) scanning.

To learn more, go to [configuring PR scanning](/developer-experience/developers/pull-request-pr-scanning/pull-request-pr-scanners) .

## CLI and its use cases [Copied!](#cli-and-its-use-cases "Copy link to this section")

The [Cycode Command Line Interface (CLI)](/developer-experience/developers/cycode-cli/) is installed on a local machine to scan locally stored repositories for any secrets or infrastructure as code (IaC) misconfigurations. The CLI can be run on files, commits, and repositories while they are under active development, providing security and productivity benefits to developers.

Cycode’s CLI supports the following use cases.

### Pre-receive hook [Copied!](#pre-receive-hook "Copy link to this section")

[Pre-receive hook scripts](/developer-experience/developers/cycode-cli/cli-pre-receive-hook) are used to create requirements for accepting or rejecting a push based on the contents.

### Pre-commit hook [Copied!](#pre-commit-hook "Copy link to this section")

Cycode’s [pre-commit hook](/developer-experience/developers/cycode-cli/) can be set up within your local repository so that the Cycode CLI application will automatically identify any issues with the code before developers commit it to the codebase.

## Incorporate the CLI in your CI pipeline [Copied!](#incorporate-the-cli-in-your-ci-pipeline "Copy link to this section")

Cycode integrates with the GitLab Runner CI pipeline tool, with more to come.

#### SCA scan integration with GitLab Runner [Copied!](#sca-scan-integration-with-gitlab-runner "Copy link to this section")

GitLab Runner is an application that works with GitLab CI/CD to run jobs in a pipeline. You can now [integrate the Cycode CLI](/developer-experience/developers/cycode-cli/integrate-the-cycode-cli-with-gitlab-runner) into your organization’s GitLab CI/CD pipeline.

#### Coming soon [Copied!](#coming-soon "Copy link to this section")

*   GitHub Actions
    
*   Jenkins
    

## User management [Copied!](#user-management "Copy link to this section")

### Set the project manager role [Copied!](#set-the-project-manager-role "Copy link to this section")

The Cycode project manager role handles all matters related to the members of a specific project. The project manager is the highest provisioned role when inviting users automatically via Cycode projects. A project manager role is automatically assigned to SCM Admins and Maintainers. However, the automatic mapping can be changed manually afterward.

To learn more, go to member roles.

### Bulk developer enrollment via Cycode projects [Copied!](#bulk-developer-enrollment-via-cycode-projects "Copy link to this section")

The recommended way to onboard and enroll developers in Cycode is using the bulk enrollment option via Cycode projects. This method lets you restrict access by inviting users directly to Cycode projects, so that their access and visibility are limited to the specific project’s scope. It also lets you set a predefined SCM team based on your selection of repositories, and invites users directly via an email sent from Cycode to the team members.

To learn more, go to [Enroll members to Cycode](/cycode-settings/user-administration/manage-cycode-members/add-members-manually-to-cycode) .

## Audits [Copied!](#audits "Copy link to this section")

As part of your role as admin, you have to review the actions of your organization’s members (including developers), to help to secure your Cycode account. This is done using the [Cycode Audit Logs](/cycode-settings/audit-logs) module.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
