# Release notes for CES version 5.6.0 | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-ces-version-5-6-0

---

# Release notes for CES version 5.6.0

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-ces-version-5-6-0.md "Edit this page")

Updated on Nov 17, 2025 • Published on Nov 4, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Version 5.6.0 was released on November 4, 2025.

## Enhancements [Copied!](#enhancements "Copy link to this section")

### Automation [Copied!](#automation "Copy link to this section")

*   The page for the workflow execution log now features an integrated card-based design, providing a unified and consistent experience when reviewing workflow executions.

### Broker [Copied!](#broker "Copy link to this section")

*   Added visibility for disk usage metrics in the Cycode Broker dashboard to help monitor storage consumption.
*   The time range selection was extended from 1 hour to 48 hours to support long-term analysis.

### Compliance [Copied!](#compliance "Copy link to this section")

*   Evidence visibility was added for automated controls, and is now available for both passing and failing results. Users can view the associated queries or policies that determine control status for better audit transparency.
*   Added an onboarding flow for compliance frameworks, allowing new tenants to enable only the frameworks relevant to their organization.
*   Introduced a centralized compliance overview dashboard that consolidates posture metrics and insights across projects and groups.
*   Added reusable evidence configuration in the Compliance V2 framework so users can automatically attach matching evidence across multiple projects.
*   Introduced custom compliance frameworks, enabling users to define and manage their own compliance standards directly within the platform.

### Connectors and integrations [Copied!](#connectors-and-integrations "Copy link to this section")

*   Added support for custom Snyk tenant URLs for flexible integrations with external scanning environments.
*   Redesigned the Kubernetes integration to streamline deployment workflows and improve compatibility.
*   Enhanced the Jira integration to allow mapping multiple Jira statuses to Cycode states (**Ignored**/**Resolved**).
*   Redesigned the Jira Server and Data Center connectors for a more intuitive configuration experience.
*   Enhanced ticket creation from Cycode to Jira with detailed violation tables and contextual information for improved traceability.

### Container Scanning [Copied!](#container-scanning "Copy link to this section")

*   Added automated naming correlation for container repositories and images to improve visibility and management accuracy.
*   Added prioritization by image to the container inventory interface so users can better manage vulnerabilities.
*   Added the ability to ignore specific container CVEs, reducing noise from known or low-priority vulnerabilities.
*   Added manual correlation controls between container and code repositories for greater transparency.
*   Added integration recommendations for improved remediation and visibility.

### Dashboards and metrics [Copied!](#dashboards-and-metrics "Copy link to this section")

*   Enhanced the **Performance over time** widget to generate monthly data dynamically and align with other reporting metrics.
*   Redesigned the action panel and violations table for better usability, sorting, and customization.
*   Improved dashboard readability with standardized formatting and accurate PDF exports.
*   Introduced a Developer Engagement dashboard that visualizes developer activity, adoption, and productivity metrics.

### Developer Experience [Copied!](#developer-experience "Copy link to this section")

*   Added pre-push hook support to the CLI, allowing pre-push checks for improved workflow control.
*   Enhanced CLI compatibility and error handling for renamed or read-only files.
*   Improved Visual Studio integration reliability and scan feedback.

### Groups, projects and user management [Copied!](#groups-projects-and-user-management "Copy link to this section")

*   Introduced scheduled report delivery for project dashboards and comparison boards.
*   Added support for saved views to the **Project comparison** board.
*   Enhanced the **Risk score** widget with configurable calculation modes (average, median, 90th percentile and 95th percentile).
*   Added Jira Server project-level ticketing support for on-premise ticket handling.
*   Redesigned the **Project overview** page with a modern layout.
*   Added free-text search for projects and groups that supports nested structures.

### Knowledge Graph, inventory and discovery [Copied!](#knowledge-graph-inventory-and-discovery "Copy link to this section")

*   Added GitHub role-based filtering for **Maintainer** and **Triage** roles, allowing better access control and reporting.

### Leaks [Copied!](#leaks "Copy link to this section")

*   Added configuration options for secret scanning in leaked repositories, enabling tailored scanning parameters for better detection and response.

### Risk Score [Copied!](#risk-score "Copy link to this section")

*   Added visibility for undetected risk factors within the **Risk analysis** card and tabs.
*   Introduced a **Risk score history** tab in the violation card to display previous score values and visualize the changes over time.

### SCA [Copied!](#sca "Copy link to this section")

*   Added support for CycloneDX 1.6 SBOM for industry-standard compliance.
*   Improved default branch handling to prevent stale data.
*   Added branch name visibility in the SCA violation cards.
*   Added support for the Maven **settings.xml** file in CLI scans.
*   Added compatibility for Deno (v2+) and pnpm package managers.
*   Enhanced the SCA dashboard with branch, dependency type, and dev dependency filters.
*   Introduced SBOM import functionality for uploading, updating, and viewing vulnerability data.
*   Added **CVSS** and **Exploit maturity** filters to workflow automation.
*   Added **Group by fix version** to the **Remediation** tab of the package violation card.
*   Added support for CocoaPods package manager for Swift.

### Secrets [Copied!](#secrets "Copy link to this section")

*   Enhanced the accuracy of secret detection and validation.
*   Added validation options that allow checking secret validity without storing sensitive values.
*   Added support for on-demand scans of specific scopes and policies.
*   Improved AWS secret detection logic to reduce false positives.
*   Enhanced the ability to manage repositories with identical names across multiple SCMs.

### SCM [Copied!](#scm "Copy link to this section")

*   Disabled the **Resolve** button for SAST and IaC violations when linked GitHub integrations are read only, to preventing unauthorized actions.

### UI/UX [Copied!](#uiux "Copy link to this section")

*   Enhanced dashboard filters to display all available options, including repository-level filters.
*   Enhanced the SCM hierarchy display for Bitbucket and Azure DevOps.
*   Improved the selection components throughout the platform for better usability.

## Bug Fixes [Copied!](#bug-fixes "Copy link to this section")

### Automation [Copied!](#automation-1 "Copy link to this section")

*   Fixed an issue where secret violations repeatedly toggled between **Resolved** and **Open**.
*   Clarified tooltip text to explain that workflows containing third-party actions can’t be applied retroactively.
*   Fixed an issue that caused incorrect workflow filters due to inconsistent field mappings.
*   Fixed stuck workflows caused by scaling issues to ensure stable completion.
*   Fixed missing parameter errors in Slack notifications for new repository workflows.
*   Enforced a 250-character limit in secret resolution descriptions to prevent API errors.
*   Fixed a front-end issue that selected all custom leak policies when only one was chosen.
*   Improved pagination, sorting, and validation logic in various workflow filters to enhance reliability.

### CI/CD security [Copied!](#cicd-security "Copy link to this section")

*   Fixed missing data for Jenkins and other CI/CD integrations when duplicate configurations were present.
*   Improved the consistency of auto-resolution after permission updates.
*   Reduced the latency for detecting repository privacy changes.
*   Fixed duplicate line issues in CSV exports.

### Compliance [Copied!](#compliance-1 "Copy link to this section")

*   Fixed a persistent loading issue for newly onboarded tenants lacking initial data.

### Connectors and integrations [Copied!](#connectors-and-integrations-1 "Copy link to this section")

*   Fixed multiple Jira integration issues, including missing required fields, pagination errors, and invalid value mappings.
*   Improved handling of webhook configurations and API limits.
*   Fixed pagination for large Jira project lists.
*   Enhanced stability across Azure DevOps and Snyk integrations.

### Dashboards and metrics [Copied!](#dashboards-and-metrics-1 "Copy link to this section")

*   Improved dashboard performance for large tenants.
*   Fixed date filter presets and ensured consistent data return.
*   Fixed Remediation Dashboard filters and improved accuracy in secret metrics.
*   Fixed severity filter behavior and MTTR widget calculations.

### Developer experience [Copied!](#developer-experience-1 "Copy link to this section")

*   Fixed CLI exceptions that occurred when processing renamed files.
*   Improved support for GitLab pre-receive hooks and read-only environments.
*   Fixed Gradle sub-project dependency resolution with `--gradle-all-sub-projects`.
*   Fixed null reference errors in the Visual Studio extension.
*   Fixed issues with blocked PR detection and visibility in Developer Audit.

### Groups, projects and user management [Copied!](#groups-projects-and-user-management-1 "Copy link to this section")

*   Fixed inconsistent external ID mapping across API endpoints.
*   Fixed Jira project dropdown visibility issues when invalid integrations are assigned.
*   Improved dashboard stability when filtering by multiple projects.
*   Fixed project creation, caching, and synchronization issues.
*   Fixed group expansion logic and ensure accurate project hierarchy.
*   Fixed missing creator information in newly created projects.

### Inventory, policies and platform [Copied!](#inventory-policies-and-platform "Copy link to this section")

*   Fixed Jira workflow validation and the formatting of exported dashboards.
*   Ensure consistent repository counts across views.
*   Fixed label search and filter inconsistencies in project creation.
*   Fixed violation count mismatches and export reliability.
*   Fixed broken integration links and repository filter errors.

### SCA [Copied!](#sca-1 "Copy link to this section")

*   Fixed incorrect marking of transitive dependencies.
*   Restored the visibility of multi-branch configuration.
*   Fixed the display of the remediation tab when no fix is available.
*   Improved accuracy and stability for GitLab scans and auto-resolution.

### Secrets [Copied!](#secrets-1 "Copy link to this section")

*   Fixed bulk ignore failures for large batches of secrets.
*   Improved loading performance for detected secrets.
*   Reduced false positives and improved **Ignore** handling feedback.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
