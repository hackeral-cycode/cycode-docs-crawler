# Workflow library | Cycode Docs

Source: https://docs.cycode.com/workflow-automation/workflow-library

---

# Workflow library

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/workflow-automation/workflow-library.md "Edit this page")

Updated on Apr 12, 2026 • Published on May 25, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode provides two types of predefined workflows:

*   [Default workflows](/workflow-automation/workflow-library#default-workflows) : Out-of-the-box workflows that are designed to reduce noise by removing low-priority violations detected in the initial scan.
    
*   [Workflow library](/workflow-automation/workflow-library#workflow-library) : Comprehensive set of templates that you can use as is by adding the required details, or that can be used as a starting point to create more complex custom workflows.
    

## Default workflows [Copied!](#default-workflows "Copy link to this section")

The following workflows are general and can be enabled immediately to reduce the amount of low-priority violations that you may see when you first integrate your SCM with Cycode.

Note

If you want to go back and view just the default workflows after creating additional automation in the platform, filter the view by **Created by** = **Cycode**.

Default workflow

Reason

**Ignore vulnerabilities in dev dependencies**

Development dependencies aren’t included in production environments, so vulnerabilities in these packages don’t impact the runtime attack surface and are deprioritized.

**Ignore violations in test files**

Test files aren’t part of the published code base and therefore don’t pose the same risk as production code. Vulnerabilities in these files are ignored to prioritize actionable issues.

**Ignore invalid secrets**

Findings marked as invalid secrets are either false positives or non-sensitive tokens, and therefore don’t represent a real security risk.

**Ignore violations in archived repositories**

Archived repositories are no longer maintained or part of the active development, and are therefore ignored to focus on active risks.

## Workflow library [Copied!](#workflow-library "Copy link to this section")

Cycode provides various collections of out-of-the-box workflows in the workflow library. These workflows, which cover many of the common use cases, fall into the following categories:

*   [Alert and notification](/workflow-automation/workflow-library#alert-and-notification-workflows) : Proactively inform relevant stakeholders about violations and events.
    
*   [Remediation and auto-fix](/workflow-automation/workflow-library#remediation-and-auto-fix-workflows) : Automatically resolve common security and hygiene issues with minimal intervention.
    
*   [Secret resolution](/workflow-automation/workflow-library#secret-resolution-workflows) : Automatically resolve secret violations when the secrets are removed or no longer relevant.
    

A workflow from the library can be deployed as is, or you can customize it to suit the needs of your organization. You can:

*   Add and remove steps in the workflow or change applicable policies or triggers
    
*   Aggregate alerts
    
*   Apply a workflow retroactively
    

### Alert and notification workflows [Copied!](#alert-and-notification-workflows "Copy link to this section")

Workflow

Description

**Send alert about leaked code snippet**

Send an alert that a leaked code snippet was detected.

**Create ticket for secret detected in latest code**

Open an ITSM incident for a detected secret that has an Exists in latest tag.

**Slack notification about new repo**

Notify your Slack channel that a new repository was created in your organization.

**Create ticket for critical violation**

Create a Jira ticket and auto-assign it to the code owner of a critical violation.

**Send email about critical or high severity violation**

Send an email alert when a critical or high-severity violation is detected in the specified Cycode project.

**Send notification about leak**

Send a notification for a violation that was detected under Cycode’s leak detection policies.

**Send alert about reachable SCA violation**

Send an alert when an SCA violation is determined to be reachable.

**Send notification about SAST violation from CWE top 25**

Send a Microsoft Teams notification when a SAST violation from the CWE Top 25 list is detected.

**Create ticket for code owner**

Create a Jira ticket assigned to the code owner when a violation is detected in their code.

### Remediation and auto-fix workflows [Copied!](#remediation-and-auto-fix-workflows "Copy link to this section")

Workflow

Description

**Enable branch protection rules**

Enable branch protection rules on a repository to enforce safe merges.

**Delete stale branch**

Remove a branch that has been inactive for more than 90 days.

**Archive inactive repository**

Archive repository that had no activity for the last 6 months.

**Change repository from public to private**

Change the status of a repository from public to private because it violates visibility policies.

**Open pull request with fix for vulnerable dependency**

Create a pull request with a fix that replaces a vulnerable dependency with a secure alternative.

**Open pull request with fix for cloud or Kubernetes risks**

Create a pull request with a fix for excessive permissions in your cloud/Kubernetes environment or container.

### Secret resolution workflows [Copied!](#secret-resolution-workflows "Copy link to this section")

Workflow

Description

**Resolve violations of removed secrets**

Resolve violations based on detected secrets that were removed from the latest code version in the branch.**Note:** Cycode resolves the violation when the secret is removed from the latest code, but the secret may still be present in the code history.

**Resolve violations of deactivated secrets**

Resolve violations based on detected secrets that were previously active, and whose status has changed to inactive.

**Resolve violations of inactive secrets**

Resolve violations based on detected secrets that were validated as being inactive.**Note:** In scenarios where services have multiple versions (for example, cloud-based and on-premise), Cycode validates against the cloud version. If you are using an on-premise version or a different service location than the one defined in the platform, the validation may not be accurate.

**Resolve violations when a branch is removed**

Resolve violations based on secrets where the source branch was deleted from the code.

**Resolve violations when a repository is removed**

Resolve violations based on secrets where the source repository was deleted from the project or organization.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
