# Release notes for CES version 5.0.0 | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-ces-version-5-0-0

---

# Release notes for CES version 5.0.0

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-ces-version-5-0-0.md "Edit this page")

Updated on Jul 14, 2025 • Published on Mar 27, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Version 5.0.0 was released on March 31, 2025.

## Enhancements [Copied!](#enhancements "Copy link to this section")

### Audit logs [Copied!](#audit-logs "Copy link to this section")

*   Improved the Audit log database query logic for better performance.

### Automation [Copied!](#automation "Copy link to this section")

*   Added the ability to filter out Enabled or Disabled workflows.
*   Merged Classification Rules and Workflows into a single table named Workflows.
*   Added a new and improved Workflow creation canvas.

### Developer experience [Copied!](#developer-experience "Copy link to this section")

*   Added support for filters in the IDE plugin tree view and improved handling of disabled Cycode modules.
*   Added a Repository filter to the Developer Audit, and removed the Resource filter.
*   Added support for AI Remediation directly in the Pull Request for developers.
*   Enhanced scan performance in IDE and CLI.

### Platform [Copied!](#platform "Copy link to this section")

*   Three new dashboards (Visibility, Prioritization, and Remediation) added.
*   In Discovery view, new Inventory vs. Query builder for RIG and improved column layout.
*   Added the ability to copy the comment field from GitLab Vulnerability Report.
*   Added the ability to create a GitLab Vulnerability Report ticket directly from the violation.
*   Various improvements to Executive dashboard widgets and filters to improve usability and provide better insights.
*   Added groups to RIG.
*   Added an Insights tab for projects that contain the type Application.
*   Added the Kubernetes entity to RIG connections.
*   Aligned the policy view with the system design.
*   Added classification rule custom labels to project creation flow.
*   Added a Technologies tab to the Inventory to provide comprehensive visibility into the customer’s organization, helping to identify which tools are in use.
*   Aligned the profile screen with system design.
*   Introduced the Notification Center — a centralized hub for system and user events.
*   Added tenant score to the Visibility dashboard.
*   Added a new Cycode role called Developer.
*   Repository owner identification was added to streamline the remediation process and improve ticket creation for AppSec teams.
*   Added a new custom compliance framework, which enables you to define your own specific frameworks and associate them with our detection policies to monitor your compliance posture. Speak with Cycode support in order to enable the next version of the compliance services.
*   Added support for labels to all graph resources.
*   Aligned all violation table data.

### SCA [Copied!](#sca "Copy link to this section")

*   Added support for Gradle subprojects in SCA CLI scanning.
*   Added an Exploit Maturity indicator to the Exploitability tab in the violation card.
*   Added the Exploit Maturity Type filter to the Violations view.
*   Added support for Golang private registry for SCA scanning.
*   Added support for SCA indirect remediation for Javascript - NPM.
*   Added support for SCA indirect remediation from the UI.

### Secrets [Copied!](#secrets "Copy link to this section")

*   New Secrets policies and validation are available.
*   Added the ability to decide whether or not Cycode should exclude secrets that appear to be fake, using the new configuration Enable Secret Exclusion for Non-Sensitive Patterns.

### SCM [Copied!](#scm "Copy link to this section")

*   Added block merge support for Azure DevOps.
*   Added ability to sync Github repository custom properties and add them as labels to their repository entities.
*   Added Delayed deletion functionality for GitHub Enterprise and GitLab Self-Managed.

## Infrastructure [Copied!](#infrastructure "Copy link to this section")

### New component [Copied!](#new-component "Copy link to this section")

*   Back-Office App

### Security improvements [Copied!](#security-improvements "Copy link to this section")

*   Operational scripts for Redis, Keycloak, and NGINX-controllers are now embedded directly into base images instead of being injected dynamically via ConfigMaps.
*   Root user is no longer required. All workloads now run with non-root users, enhancing overall security posture and compliance.
*   Redis:
    *   Updated to latest Helm chart version.
    *   Liveness and readiness probes moved from ConfigMap into the image.
    *   Updated to version 7.4.2 with revised securityContext configuration.
*   Keycloak:
    *   Upgraded from version 24 to version 25, including removal of deprecated configurations during deployment.
    *   Security context hardened: non-root execution, no privilege escalation, and read-only filesystem.
*   NGINX:
    *   Lua scripts are now loaded directly from the image instead of using ConfigMaps.
    *   Upgraded to version 1.12.1.
    *   Updated security context with dropped capabilities, non-root enforcement, and restricted privileges.
    *   Mitigates critical vulnerabilities:
        *   CVE-2023-5043 – Request smuggling via annotation misconfiguration.
        *   CVE-2023-5044 – Access control bypass via unsafe configuration injection.
*   MongoDB:
    *   Updated module and Docker images, including operator version 0.12.0 and MongoDB version 7.0.16.
    *   Hardened job configurations and readiness probe images.
*   PostgreSQL:
    *   Updated to latest version 14.15.
*   Job Images:
    *   Rebased on the latest hardened base image with enhanced security context: non-root user, no privilege escalation, read-only root filesystem.
*   Cycode Operator:
    *   Now deployed fully rootless with strict security context: no privileges, read-only filesystem, and capability drop.
*   OpenShift Security Context Constraints:
    *   Introduced cycode-restricted-v1 and cycode-nginx-v1 SCCs to enforce:
        *   Non-root execution
        *   Capability drops (ALL)
        *   No host access or privilege escalation
        *   Explicit volume and service account control
        *   Applied to all core services: MongoDB, Redis, NGINX, Keycloak, Kafka, etc.

### General improvements [Copied!](#general-improvements "Copy link to this section")

*   Unified auth-service deployment:
    *   Previously managed as three separate deployments due to ingress annotation limitations.
    *   Now consolidated into a single deployment supporting multiple ingresses.
*   Automatic cleanup of nginx-controller admission webhook jobs using TTL.
*   Manual approval support added to Terraform apply:
    *   New –approve-manual flag available in install commands.
    *   Allows users to preview planned changes before applying.

## Bug fixes [Copied!](#bug-fixes "Copy link to this section")

### Audit logs [Copied!](#audit-logs-1 "Copy link to this section")

*   Fixed a bug in the Audit Log table that loaded the same page multiple times.
*   Improved the Audit log DB query logic for better performance.

### Automation [Copied!](#automation-1 "Copy link to this section")

*   Workflow failed when a label with more than 30 characters was created.
*   On the Policies page, in certain situations filters were not available.
*   Workflow rule application got stuck in certain situations.
*   Workflow list would fail with a 500 error.
*   Fixed the Projects filter display for workflows.
*   Fixed the workflow Organization filter when policy scope is set to Leaks.

### CI/CD security [Copied!](#cicd-security "Copy link to this section")

*   Fixed an issue with CI/CD Security violations missing violation details in some cases.
*   Some CI/CD Security violations would not auto-resolve when the related repository was deleted.
*   Fixed an issue causing the Jenkins integration to take too long.

### Compliance [Copied!](#compliance "Copy link to this section")

*   Fixed a broken link in the NIST SSDF (1.1) Compliance Page in Control PO.3.2.
*   NIST SSDF (1.1) PO.3.1 results for Failed compliance control would lead to the wrong number of violations.
*   NIST SSDF (1.1) PW 4.1 results didn’t take into account Cycode projects when displaying the counts.

### Cycode Enterprise Server [Copied!](#cycode-enterprise-server "Copy link to this section")

*   Trying to generate a report from the discovery graph (RIG) using the standalone-report API failed.

### Developer experience [Copied!](#developer-experience-1 "Copy link to this section")

*   When running a Cycode CLI scan using the **commit\_history** option, the CLI Audit logs were not displayed.
*   False positive results do not affect CLI scans for IaC, SAST, and SCA violations.

### IaC [Copied!](#iac "Copy link to this section")

*   IaC Policy **CloudFront Distribution Without Minimum Protocol TLS 1.2 Detected** was missing TLSv1.2\_2021 as part of the policy.
*   IaC Policy **Public Accessibility Enabled on AWS RDS Database Instance** was incorrectly generating violations in certain situations.
*   IaC Policy **AWS RDS DB Instance CA Certificate Identifier Detected** was incorrectly configured.
*   IaC **Policy Missing or Invalid Backup Settings for RDS Instance** was incorrectly triggered in certain situations.
*   Refined detection logic to report wildcard **Principal**: “\*” only when paired with **Effect**: **Allow**.
*   Enhanced SSE configuration validation to require either a valid KmsMasterKeyId or SqsManagedSseEnabled = true.
*   Updated IP range validation to align with official VPC CIDR blocks from Amazon Virtual Private Cloud.

### Integrations [Copied!](#integrations "Copy link to this section")

*   In Jira configuration through Cycode, optional fields would not be set to empty in certain situations.

### Platform [Copied!](#platform-1 "Copy link to this section")

*   Fixed an issue whereby the JIRA workflow was failing even though the fields were completed.
*   Executive dashboard PDF export was incorrectly formatted.
*   Improved filter display for Dashboard PDF export.
*   There were different repository counts between the data displayed in the Cycode project, and the Discovery (RIG) and Inventory pages.
*   When creating a project the search for labels wasn’t working.
*   Mapping an SCM project to a Cycode project would sometimes result in some repositories not appearing in the Cycode project.
*   On the Projects page, export would sometimes fail.
*   When creating a Cycode project, repository labels didn’t appear as an option.
*   In the Violations view, the number of total violations didn’t match when filtering on repos individually, and together as part of a project.
*   On the Policies page, the **Enabled** filter did not function as expected.
*   In Inventory view, Cycode didn’t detect all of the repos in the on-prem SCM instance.
*   In the Inventory view, the primary language filter returned the wrong results for Java.
*   in the Inventory view, the CSV export had some columns and headers missing.
*   In the Violations view, attempting to apply the **Group By** > **File** filter resulted in a 500 error.
*   Repository filter provided incorrect results in certain situations.
*   CSV export failed from the Violations view in certain situations.
*   Fixed issue with repository filter in the Violations view.
*   When readers clicked the links in the Integrations view, some were broken.

### SCA [Copied!](#sca-1 "Copy link to this section")

*   Transitive dependencies of development dependencies were incorrectly not marked as development dependencies.
*   Multi-branch configurations sometimes didn’t appear in on-demand scans page.
*   The Visibility dashboard showed double the number of packages as the Inventory view.
*   Remediation tab in Violation details card showed “null” when no recommended fix was available.
*   Custom policies didn’t show data in columns in the Violations view.
*   SCA scans failed in GitLab in specific situations.
*   SAST and SCA multi-branch configuration scan violations had discrepancies with the identified violations.
*   SCA violations sometimes didn’t auto-resolve.
*   Enhanced SCA detection and auto-resolution mechanism.

### Secrets [Copied!](#secrets-1 "Copy link to this section")

*   Bulk ignore of 100+ secrets sometimes failed.
*   Failed to load secrets identified by Cycode in certain situations.
*   Added the values causing FP to a blacklist, so they won’t be detected again.
*   Improved handling of secret ignore requests: Removed optimistic UI when ignoring secrets to prevent confusion caused by status reverting to ‘open’. Users now receive a confirmation message indicating the action may take a few minutes to take effect."

### SCM [Copied!](#scm-1 "Copy link to this section")

*   In the Inventory view, GitLab repositories were being classified as Base when they were actually Forked.
*   Pull Request scan fails in GitHub Cloud due to rate limit.
*   GitHub Integration summary page exhibited inconsistent behavior in certain cases.
*   Fixed an issue whereby a deleted repository had active scans under the integration.
*   Initial integration page displayed INCOMPLETE SCAN but didn’t show why.
*   On-demand scans that affected violations would pass the User data of the person who ran the scan into the audit logs.
*   Member permission API update.
*   Team repository permissions weren’t triggered in the scheduler sync and were saved in the wrong instance ID.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
