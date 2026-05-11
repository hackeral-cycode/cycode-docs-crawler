# SCM (Source Code Management) tools | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools

---

# SCM (Source Code Management) tools

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/_index.md "Edit this page")

Updated on Apr 9, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode integrates with the SCMs listed below. The table also describes the environment and supported authentication method for each SCM.

In addition to the authentication methods listed in the table, All SCMs can also connect through the Cycode Broker for on-premises connectivity. For more information, go to [Cycode Broker](/cycode-settings/cycode-broker/) .

SCM

Environment

Supported authentication methods

[Azure DevOps](/integrations/scm-source-code-management-tools/azure-devops)

Cloud

OAuth 2.0

[Azure DevOps Server](/integrations/scm-source-code-management-tools/azure-devops-server)

Self-hosted

Access token

[Bitbucket](/integrations/scm-source-code-management-tools/bitbucket)

Cloud

OAuth 2.0 Access token

[Bitbucket Server](/integrations/scm-source-code-management-tools/bitbucket-server)

Self-hosted

OAuth 2.0 Access token

[Gerrit](/integrations/scm-source-code-management-tools/gerrit)

Self-hosted

Basic authentication

[GitHub](/integrations/scm-source-code-management-tools/github)

Cloud

GitHub App

[GitHub Enterprise Server](/integrations/scm-source-code-management-tools/github-enterprise-server)

Self-hosted

GitHub App

[GitLab](/integrations/scm-source-code-management-tools/gitlab)

Cloud

OAuth 2.0 Access token

[GitLab Self-Managed](/integrations/scm-source-code-management-tools/gitlab-self-managed)

Self-hosted

OAuth 2.0 Access token

[Perforce P4 (formerly Helix Core)](/integrations/scm-source-code-management-tools/perforce-p4-formerly-helix-core)

Self-hosted

Basic authentication

[Unity Version Control (formerly Plastic SCM)](/integrations/scm-source-code-management-tools/unity-version-control-formerly-plastic-scm)

Cloud

Access token

## Supported features [Copied!](#supported-features "Copy link to this section")

### Read-only integration [Copied!](#read-only-integration "Copy link to this section")

Some SCMs support a read-only integration mode, which requires fewer permissions but limits certain Cycode functionality such as PR scanning and block merge.

For SCMs without a read-only option, limited access can sometimes be achieved by restricting the permissions of the user or token used for the integration. This approach provides a subset of functionality depending on the permissions granted.

SCM

Read-only support

[Azure DevOps](/integrations/scm-source-code-management-tools/azure-devops)

Permission-based - integrate with a member of a read-only group. [Learn more](/integrations/scm-source-code-management-tools/azure-devops#prerequisites)

[Azure DevOps Server](/integrations/scm-source-code-management-tools/azure-devops-server)

Permission-based - integrate with a member of a read-only group. [Learn more](/integrations/scm-source-code-management-tools/azure-devops-with-oauth-legacy#prerequisites)

[Bitbucket](/integrations/scm-source-code-management-tools/bitbucket)

Native read-only option.

[Bitbucket Server](/integrations/scm-source-code-management-tools/bitbucket-server)

None

[Gerrit](/integrations/scm-source-code-management-tools/gerrit)

Permission-based - integrate with a member of a read-only group. [Learn more](/integrations/scm-source-code-management-tools/gerrit#permissions)

[GitHub](/integrations/scm-source-code-management-tools/github)

Native read-only option.

[GitHub Enterprise Server](/integrations/scm-source-code-management-tools/github-enterprise-server)

Native read-only option

[GitLab](/integrations/scm-source-code-management-tools/gitlab)

None

[GitLab Self-Managed](/integrations/scm-source-code-management-tools/gitlab-self-managed)

None

[Perforce P4 (formerly Helix Core)](/integrations/scm-source-code-management-tools/perforce-p4-formerly-helix-core)

Read-only by default

[Unity Version Control (formerly Plastic SCM)](/integrations/scm-source-code-management-tools/unity-version-control-formerly-plastic-scm)

None

### PR scanning [Copied!](#pr-scanning "Copy link to this section")

This section describes which Cycode PR scanning features are supported per SCM.

SCM

PR scanning

Status checks

PR comments

Dev interactive comments

Block merge

[Azure DevOps](/integrations/scm-source-code-management-tools/azure-devops)

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

[Azure DevOps Server](/integrations/scm-source-code-management-tools/azure-devops-server)

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

[Bitbucket](/integrations/scm-source-code-management-tools/bitbucket)

**Yes**

**Yes**

**Yes**

**Yes**

**Partial**\*

[Bitbucket Server](/integrations/scm-source-code-management-tools/bitbucket-server)

**Yes**

**Yes**

**Yes**

**Yes**

**No**

[Gerrit](/integrations/scm-source-code-management-tools/gerrit)

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

[GitHub](/integrations/scm-source-code-management-tools/github)

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

[GitHub Enterprise Server](/integrations/scm-source-code-management-tools/github-enterprise-server)

**Yes**

**Yes**

**Yes**

**Yes**

**Yes**

[GitLab](/integrations/scm-source-code-management-tools/gitlab)

**Yes**

**Yes**

**Yes**

**Yes**

**Yes** (Ultimate only)

[GitLab Self-Managed](/integrations/scm-source-code-management-tools/gitlab-self-managed)

**Yes**

**Yes**

**Yes**

**Yes**

**Yes** (Ultimate only)

[Perforce P4 (formerly Helix Core)](/integrations/scm-source-code-management-tools/perforce-p4-formerly-helix-core)

**No**

**No**

**No**

**No**

**No**

[Unity Version Control (formerly Plastic SCM)](/integrations/scm-source-code-management-tools/unity-version-control-formerly-plastic-scm)

**No**

**No**

**No**

**No**

**No**

\*In organizations with a Bitbucket Premium license, the Bitbucket administrator can manually configure the **Prevent merge** option via branch restrictions.

**The** ShouldEnableGerritStatusChecks \*\* feature flag must be enabled in Cycode

### Entity syncing [Copied!](#entity-syncing "Copy link to this section")

This section describes which SCM entities are synced by Cycode and the supported methods available.

SCM

Repositories

Branches

Branch protection

Labels

Users

Webhooks

SCM projects/groups

[Azure DevOps](/integrations/scm-source-code-management-tools/azure-devops)

**Scheduled**

**Event based**

**Scheduled**

**N/A**

**Scheduled**

**Scheduled**

**Scheduled**

[Azure DevOps Server](/integrations/scm-source-code-management-tools/azure-devops-server)

**Scheduled**

**Event based**

**Scheduled**

**N/A**

**Scheduled**

**Scheduled**

**Scheduled**

[Bitbucket](/integrations/scm-source-code-management-tools/bitbucket)

**Event based**

**Event based**

**Scheduled**

**N/A**

**Scheduled**

**Scheduled**

**Scheduled**

[Bitbucket Server](/integrations/scm-source-code-management-tools/bitbucket-server)

**Event based**\*

**Event based**

**Scheduled**

**N/A**

**Scheduled**

**Scheduled**

**Scheduled**

[Gerrit](/integrations/scm-source-code-management-tools/gerrit)

**Event based**\*

**Event based**

**N/A**

**N/A**

**Scheduled**

**Event based**

**Scheduled**

[GitHub](/integrations/scm-source-code-management-tools/github)

**Event based**\*

**Event based**\*

**Event based**\*

**Event based**\*

**Event based**\*

**Scheduled**

**Event based**\*

[GitHub Enterprise Server](/integrations/scm-source-code-management-tools/github-enterprise-server)

**Event based**\*

**Event based**\*

**Event based**\*

**Event based**\*

**Event based**\*

**Scheduled**

**Event based**\*

[GitLab](/integrations/scm-source-code-management-tools/gitlab)

**Event based**\*

**Event based**

**Scheduled**

**N/A**

**Event based**\*

**Scheduled**

**Event based**\*

[GitLab Self-Managed](/integrations/scm-source-code-management-tools/gitlab-self-managed)

**Event based**\*

**Event based**

**Scheduled**

**N/A**

**Event based**\*

**Scheduled**

**Event based**\*

[Perforce P4 (formerly Helix Core)](/integrations/scm-source-code-management-tools/perforce-p4-formerly-helix-core)

**Scheduled**

**Event based**

**N/A**

**N/A**

**N/A**

**N/A**

**N/A**

[Unity Version Control (formerly Plastic SCM)](/integrations/scm-source-code-management-tools/unity-version-control-formerly-plastic-scm)

**Scheduled**

**N/A**

**N/A**

**N/A**

**N/A**

**N/A**

**N/A**

**Event-based**\* syncing is supplemented by scheduled syncs to verify changes and catch missed events.

#### Scheduled syncing [Copied!](#scheduled-syncing "Copy link to this section")

This section describes how frequently SCMs are synced with Cycode when scheduled syncing is used.

SCM

Sync frequency

[Azure DevOps](/integrations/scm-source-code-management-tools/azure-devops)

Once per day

[Azure DevOps Server](/integrations/scm-source-code-management-tools/azure-devops-server)

Once per day

[Bitbucket](/integrations/scm-source-code-management-tools/bitbucket)

Every 2 hours

[Bitbucket Server](/integrations/scm-source-code-management-tools/bitbucket-server)

Once per day

[Gerrit](/integrations/scm-source-code-management-tools/gerrit)

Every 2 hours

[GitHub](/integrations/scm-source-code-management-tools/github)

Once per day

[GitHub Enterprise Server](/integrations/scm-source-code-management-tools/github-enterprise-server)

Once per day

[GitLab](/integrations/scm-source-code-management-tools/gitlab)

Every 12 hours

[GitLab Self-Managed](/integrations/scm-source-code-management-tools/gitlab-self-managed)

Every 12 hours

[Perforce P4 (formerly Helix Core)](/integrations/scm-source-code-management-tools/perforce-p4-formerly-helix-core)

Once per day

[Unity Version Control (formerly Plastic SCM)](/integrations/scm-source-code-management-tools/unity-version-control-formerly-plastic-scm)

Every 4 hours

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
