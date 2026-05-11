# Release notes for CES version 5.4.0 | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-ces-version-5-4-0

---

# Release notes for CES version 5.4.0

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-ces-version-5-4-0.md "Edit this page")

Updated on Jul 14, 2025 • Published on Jul 14, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Version 5.4.0 was released on July 14, 2025.

## Enhancements [Copied!](#enhancements "Copy link to this section")

### SCM [Copied!](#scm "Copy link to this section")

*   Support for pre-defined GitHub apps has been added to GitHub Enterprise, allowing users to select from Default, Read-Only, or Pull Request Scanning Only options, enhancing customization and integration capabilities.
*   Enhanced branch management in Azure DevOps by implementing branch deletion detection, initial sync, and periodic alignment to ensure accurate branch state and auto-resolve violations.
*   Introduced SCM integration error notifications in the notification center, alerting users to token invalidity, insufficient permissions, instance unavailability, and broker disconnection to maintain system functionality.

### Compliance V2 (beta) [Copied!](#compliance-v2-beta "Copy link to this section")

*   Compliance V2 - ISO18 epic introduces enhancements to align with ISO standards, improving overall security posture management within the Cycode platform.
*   Compliance V2 - ISO17: This release introduces enhancements related to ISO17 compliance standards within the Cycode platform, improving security posture management.
*   Compliance V2 - NIST800 feature enhances compliance capabilities by aligning with NIST 800 standards, improving security and regulatory adherence for external stakeholders.
*   Compliance V2 introduces CMMC framework support, allowing users to assess and manage security posture against CMMC requirements. This enhancement streamlines compliance audits and strengthens overall security controls.

### SCA [Copied!](#sca "Copy link to this section")

*   Documentation for Software Composition Analysis (SCA) under Application Security Testing (AST) has been updated to enhance support ecosystems. This update improves user navigation and access to relevant information, facilitating better understanding and utilization of SCA capabilities.
*   The SCA detection mechanism has been enhanced for more efficient, real-time enrichment of detections.

### Connectors [Copied!](#connectors "Copy link to this section")

*   Added support for signed webhooks using HMAC sha256, enabling secure authentication of webhook events through a shared secret in request headers, mitigating potential abuse of API endpoints.
*   The GitLab Self Managed connector now allows mapping dismissed secret violations to either ignore a single violation or ignore in the repository. Additionally, the dismissal reason from GitLab is used for Cycode’s Status Reason when closing a violation.
*   ConnectorX: Implemented rate limit error handling to ensure reliable data ingestion and prevent service disruptions during periods of high API usage, improving connector stability. \*

### Developer experience [Copied!](#developer-experience "Copy link to this section")

*   Added an MCP scan hook for AI-generated tools in the CLI, enhancing security measures in alignment with industry practices.
*   Added functionality to group policy violations by line number in the IDE, enhancing the organization of violations per file for improved code review and compliance tracking.
*   New: Implemented a tenant-level setting to enforce mandatory comments when ignoring scan violations across all scan types (SAST, SCA, IaC, Secrets, Licenses), ensuring better auditability. The ‘reason’ variable must be set and longer than 3 characters for ignore actions to be valid.
*   The PR summary link now redirects to the Dev Activity Tab PR Object across all SCMs, including Bitbucket, enhancing user navigation. Custom links specified by users will override this redirection.
*   PR scan failures occurred during large data transfers due to size limitations in raw HTTP body handling. The issue was mitigated by implementing Zip file transfers to accommodate larger PRs and ensure accurate scanning and result processing.
*   Aligned CLI file collecting and filtering logic with the backend to prevent discrepancies in scan findings, specifically addressing inconsistencies in IaC and SCA file extension handling. Binary file detection and size limitations (5MB) are now consistently applied across all scan types.

### Groups, projects, and user management [Copied!](#groups-projects-and-user-management "Copy link to this section")

*   Added the ability to assign a new project to an existing group during creation, streamlining the onboarding process and maintaining organization by integrating a group selection step into the project wizard.
*   The navigation experience between projects and groups has been redesigned with a new dashboard and left-side project hierarchy navigation, improving usability and reducing navigation time. The update includes a “Compare with” button and options for toggling views, exporting PDFs, and accessing project details more intuitively.
*   New feature: A resolve option has been added to the classification rule, enhancing the system’s capability to manage classification tasks efficiently.

### Automation [Copied!](#automation "Copy link to this section")

*   Expanded the Workflow Library with additional ready-to-use templates, including default workflows for new tenants, to enhance automation adoption and improve onboarding efficiency.
*   Expanded workflow capabilities now support triggering alerts for graph events - such as new Repository created

### Secrets [Copied!](#secrets "Copy link to this section")

*   Added support for detecting GCP policies, enhancing security for cloud environments.
*   A configuration for autoresolving secrets was implemented due to the removal of the source (repository or a branch), enhancing security management and control..
*   A process was created to validate the number of secret values according to violations against the number in the graph, ensuring accurate detection and reporting of secret exposures.
*   Secret value exclusions have been integrated into workflows, enhancing the security and efficiency of secret management processes.

### Violations and policies [Copied!](#violations-and-policies "Copy link to this section")

*   Added support for relative time filters on date fields in the Violations view, enhancing user experience by enabling dynamic filtering and simplifying saved views and repeated searches.
*   Added indication of active filters during export from the Violations view, ensuring exported data reflects the applied filters for accurate reporting.
*   We’ve made UX improvements to the Violations view.

## Bug Fixes [Copied!](#bug-fixes "Copy link to this section")

### SCM [Copied!](#scm-1 "Copy link to this section")

*   Changed buffer size from absolute to a relative (%) value, so it self-adjusts to suit organizational needs, significantly reducing rate limit errors for SAST and Secrets scans.
*   Improved token refresh logic and increased timeout for specific requests to prevent authentication errors with GitLab, which were caused by invalidated tokens.
*   Adjusted how PR comments are marked as resolved by ensuring SCA and IaC scanners correctly identify violations even when using line\_in\_file instead of line.
*   Updated encoding logic to use standard URL encoding (converting spaces to %20 and + to %2B), resolving scanner failures when directory names contained a + symbol.
*   Updated connector logic to use commit IDs instead of branch names when fetching pull request files, resolving PR scan errors from SCM providers like GitHub Enterprise.
*   Corrected ODS export logic to ensure proper column visibility for all users and accurate inclusion of the category column.

### Compliance [Copied!](#compliance "Copy link to this section")

*   Enabled full sorting functionality in the Compliance dashboard by addressing ignored sorting parameters on the backend. You can now sort by Impact and Risk columns, in addition to Project Name.

### SCA [Copied!](#sca-1 "Copy link to this section")

*   Improved commenting functionality for GitLab Self-Managed merge requests, enabling comments on manifest changes without requiring lock file modifications.
*   Refined SCA MR Scan logic to correctly handle diffs for existing pull requests in re-integrated projects, preventing incorrect violation citations for unchanged dependencies.
*   Streamlined detection handling for GHSA advisories with updated CVEs to ensure consistent status resolution for vulnerabilities, preventing duplicate or lingering open detections.
*   Clarified violation detection for existing branches by confirming that automatic detection of new vulnerabilities occurs on new branches, while existing branches require an on-demand scan.
*   Resolved an underlying code bug to ensure all fields load correctly in the SCA Package UI, fixing previous 400 errors.
*   Enhanced SCA violation auto-resolution during push events by fixing a bug in collecting gradle.lockfile after repository cloning, ensuring accurate closure of violations.

### Connectors [Copied!](#connectors-1 "Copy link to this section")

*   Resolved project creation failures with custom connectors by adjusting the provider format to meet backend requirements.
*   Ensured the Remediation tab is always visible for all violations, allowing users to unlink Jira tickets regardless of whether fix suggestions are available.

### Developer experience [Copied!](#developer-experience-1 "Copy link to this section")

*   Resolved Gradle restore process failures by ensuring robust handling of optional return types in shell command execution, preventing None values from being passed to regex functions.
*   Improved the independence of PR scan settings, ensuring that the “Never comment” option no longer overrides or bypasses status checks.

### Groups, projects, and user management [Copied!](#groups-projects-and-user-management-1 "Copy link to this section")

*   Corrected severity filters during redirection to ensure consistent violation counts between the Project and Violations views.
*   Restricted access to the users API for service account tokens with the “None” role, preventing unauthorized retrieval of member roles.
*   Resolved a race condition in the groups API to ensure proper user creation and re-invitation processes, particularly after member deletion.
*   Optimized request logic for the Projects view to prevent “URI Too Long” errors when tenants have many groups, by sending only group IDs instead of full project ID lists.
*   Updated UI logic to support member role updates during project editing, in addition to project creation.
*   Resolved a 401 error from the notification summaries API, allowing successful logins for all users, including those with non-admin roles.
*   Updated URL parameter logic to correctly display project details on the Projects view when redirected from the Members page.
*   Restored project\_mttr data availability from the Projects API endpoint, resolving automation failures caused by previous data collection changes.

### Automation [Copied!](#automation-1 "Copy link to this section")

*   Adjusted detection logic to ensure secret violations remain resolved when marked as false positives, preventing their reopening despite closed Jira tickets.
*   Resolved internal server errors in workflows when filtering by severity by converting enum types to their integer representation, enhancing filter stability.
*   Improved consistency in secret violation workflow results by addressing issues related to invalid secret SHA values and enhancing the workflow system.
*   Corrected a bug in the internal pagination system to prevent violations ignored by a workflow from being reopened by automation.
*   Improved SAST violation reporting by reverting previous exclusion configurations, ensuring a more comprehensive detection of violations.

### Secrets [Copied!](#secrets-1 "Copy link to this section")

*   Corrected event handling logic for branch deletions to prevent violations from being incorrectly auto-resolved when a branch is deleted.
*   Updated the secrets scanner configuration to prevent Firebase API keys from being incorrectly flagged as Google Cloud API key violations due to pattern similarities.
*   Improved secret detection for Alibaba Cloud Secret Access Keys by creating a new, more accurate policy and deprecating the previous one that generated inconsistent SHA values.
*   Resolved issues with empty CSV exports when aggregating by secret value by adjusting the handling logic and visibility of the relevant option.
*   Updated secrets scanner rules to correctly distinguish between public Google reCAPTCHA site keys and sensitive secret keys, preventing false positive detections.
*   Updated the UI to ensure all relevant code snippets are visible for secret violations tagged with “Docker Image.”
*   Expanded the generic secret policy to accurately detect private keys without standard delimiters, addressing a false negative where such secrets were not being flagged.
*   Corrected filtering logic in the Violations view to use ‘AND’ instead of ‘OR’ when navigating from the “Publicly Exposed” funnel widget, ensuring consistent secret counts and proper prioritization.
*   Resolved a UI mapping issue to correctly display code snippets for GitLab secret violations, including those from GitLab Enterprise build logs.

### Violations and policies [Copied!](#violations-and-policies-1 "Copy link to this section")

*   Ensured complete removal of all remaining violations for mistakenly integrated and deleted GitHub organizations, resolving an issue where violations persisted in tenants.
*   Resolved issues with ignoring violations using “Other” or “False Positive” reasons, by updating the ignore violations modal to correctly support all violation types, not just secrets.

### Knowledge graph (RIG), inventory, and discovery [Copied!](#knowledge-graph-rig-inventory-and-discovery "Copy link to this section")

*   Updated logic to prevent label duplication in Cycode caused by GitHub custom properties with default values, ensuring only the current value is retained.
*   Improved the repository filtering experience in Inventory by delaying the rendering of heavier components during virtual scrolling, eliminating blank areas and smoothing performance.
*   Resolved an issue with missing GitHub properties that had unidentified default values and were not displayed as labels in Cycode.
*   Resolved data integrity issues in the repository by implementing branch deletion tracking and syncing branch states with the source control management system, ensuring deleted branches no longer show residual data.

### Integrations [Copied!](#integrations "Copy link to this section")

*   Ensured custom array type fields are displayed in the Jira ticket form by adding them to the supported fields list and implementing specific handling.
*   Enabled visibility for the mandatory “Key Stakeholders” field in the Jira workflow form, resolving errors during ticket creation for specific projects. A search function is also in development for improved usability.
*   Resolved Jira workflow errors caused by invalid priority selections by updating the system to retrieve only relevant priority options based on the selected project and issue type.
*   Prevented auto-resolved secrets from being reopened by ensuring the remediation service no longer reopens detections with a “Source Removed” status reason, regardless of Jira status.
*   Addressed 500 errors during Jira ticket creation for Celonis users by updating frontend logic to correctly escape special characters in the Title field.
*   Resolved Jira integration 500 errors during ticket creation caused by unsupported RSA key formats. As a workaround, please generate RSA keys in the older, supported format.
*   Ensured the Jira custom field “Security Source” is available in the Cycode ticket form by adding support for server-side search for multi-user picker custom Jira fields and Labels fields.
*   Restored Clickup integration functionality by updating API requests to use the new, non-deprecated domain.

### laC [Copied!](#lac "Copy link to this section")

*   Updated the IaC policy “Update and install should be executed in the same RUN instruction” to recognize “upgrade” as an install command, resolving previous detection gaps.
*   Resolved internal errors during on-demand IaC scans, which were caused by temporary file-service connector issues. Subsequent scan failures for specific repositories now correctly indicate access or availability problems.
*   Improved error handling for Azure DevOps IaC on-demand scans, ensuring that invalid token errors, such as those caused by archived repositories, are now clearly displayed to the client, and monitoring has been implemented to prevent recurrence.

### Dashboards and metrics [Copied!](#dashboards-and-metrics "Copy link to this section")

*   Removed access to the Inventory view from Visibility dashboard tiles for users without sufficient permissions, preventing errors for developer roles.
*   Resolved database timeouts affecting the Remediation dashboard’s Performance over Time chart, ensuring accurate violation counts for the last 30 days.
*   Corrected month display in Performance over Time chart tooltips by adjusting data handling logic to account for time zone differences.
*   Fixed the Cycode Scanner Health Score to accurately reflect activation status for SCA and secret scanners by updating logic to properly count enabled policies

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
