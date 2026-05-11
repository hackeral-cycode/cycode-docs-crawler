# What's new in 2025 | Cycode Docs

Source: https://docs.cycode.com/what-s-new-in-the-cycode-platform/what-s-new-in-2025

---

# What's new in 2025

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/what-s-new-in-the-cycode-platform/what-s-new-in-2025.md "Edit this page")

Updated on Jan 1, 2026 • Published on Dec 4, 2024

* * *

## December 2025 [Copied!](#december-2025 "Copy link to this section")

### Configure automatic or manual updates of the risk score formula version [Copied!](#configure-automatic-or-manual-updates-of-the-risk-score-formula-version "Copy link to this section")

You can now manage how your environment adopts new versions of the Cycode risk score formula:

*   Automatic updates are enabled by default to keep your risk score aligned with the latest model.
    
*   Disable automatic updates to review and update manually when a new formula version is available.
    

After the updates are applied, existing violation scores are recalculated to align with the updated formulas.

Note

Cycode provides advance notice before automatic updates are applied.

For more information, go to [Manage risk score formulas](/additional-cycode-features/cycode-risk-score/manage-risk-score-formulas) .

### Add job titles to Cycode project members [Copied!](#add-job-titles-to-cycode-project-members "Copy link to this section")

You can now assign job titles to members of a Cycode project to provide better clarity about team roles. This optional field is purely informational and has no effect on permissions or access.

Assign an existing title or create a new one in the **Edit Project** > **Members** tab. All job titles become available across your organization for consistency and reuse.

### Auto-resolve secret violations and exclude false positives now managed in workflows [Copied!](#auto-resolve-secret-violations-and-exclude-false-positives-now-managed-in-workflows "Copy link to this section")

The functionality for automatically resolving secret violations and excluding false positives has been moved into the Workflows engine. This enhancement provides the following benefits:

*   All automation for secret violations can now be managed in a centralized location
    
*   Organizations gain clear visibility and an audit history for automated actions
    
*   The new location provides the flexibility to adapt automated behavior as needs evolve
    

**What has changed?**

*   The existing **Auto resolution** and **Secret value exclusions** pages (under **Settings** > **Secrets**) are deprecated.
    
*   All automation for secret violations are now managed as workflows in **Automation** > **Workflow library**(can be filtered by **Label** > **Secret**).
    

Available templates include:

*   Automatically resolve deactivated, inactive, or removed secrets
    
*   Automatically ignore secrets with non-sensitive patterns (false positives)
    

**What does this mean for you?**

*   If you have existing auto-resolve settings or exclusion rules enabled, they’ve been converted into workflows and moved to the Automation view.
    
*   Existing platform behavior hasn’t changed, and no customer action is required.
    
*   You can now create and customize this automated behavior from the workflow Library.
    

Note

The auto resolution options for deleted branches and repositories are still located under **Settings** > **Secrets**, and will be migrated to the workflow library in the near future.

### Project roles: More control with per-project permissions [Copied!](#project-roles-more-control-with-per-project-permissions "Copy link to this section")

You can now assign **roles at the project level**, allowing the same user to have different access in different projects. This change offers **more granular control** without modifying global roles.

**Highlights:**

*   Define project-specific roles for members
    
*   Effective permissions are the highest of global and project roles
    

Easily manage roles from the **Project Members** tab or the main **Members** screen.

### Support for Bitbucket API tokens [Copied!](#support-for-bitbucket-api-tokens "Copy link to this section")

Cycode now supports using a Bitbucket API token to authenticate when connecting a Bitbucket Cloud integration. This enhancement aligns with Bitbucket’s latest authentication model and provides a more secure way to connect Cycode to Bitbucket workspaces.

In addition to connecting new Bitbucket integrations using API tokens, you can update the authentication method for existing integrations without having to onboard workspaces again.

If your current integration uses app password authentication, we recommend migrating your Bitbucket integration to API token authentication ahead of Bitbucket’s app password deprecation timelines using the **Reconnect** option in the **Connected workspaces** page of the Bitbucket integration.

For more information, go to [Bitbucket](/integrations/scm-source-code-management-tools/bitbucket) .

### Improved user experience for Cycode groups and projects [Copied!](#improved-user-experience-for-cycode-groups-and-projects "Copy link to this section")

A new Overview tab has been added for individual groups and projects that provides a visual, high-level summary of risk, compliance, automations, and project metadata. The tab that was originally called Overview has been renamed to Report and continues to provide a visualization of specific data about your group or project health and metrics.

This enhancement enables users to see a quick snapshot of the project health before moving on to review the current status of more detailed metrics about violation handling and overall security posture.

Additionally, the Scope and Members tabs have been moved under Settings to streamline navigation and improve page organization.

For more information, go to [View and manage projects](/cycode-projects/view-and-manage-projects) .

### Exclude paths from scanning [Copied!](#exclude-paths-from-scanning "Copy link to this section")

The new ability to configure excluded paths provides development teams with greater control over scan scope by allowing the exclusion of specific files and directories from Cycode security scans.

By adding a .cycodeignore file (which utilizes standard .gitignore syntax patterns) to a repository, developers can prevent specific paths from triggering violations. This can significantly reduce noise in scan results and focus remediation efforts on relevant code.

Administrators can enable this capability, currently available for SAST, in the Settings view.

For more information, go to [Exclude specific paths from scans](/scanners/manage-the-scanners/exclude-specific-paths-from-scans) .

### Service accounts support keyless authentication [Copied!](#service-accounts-support-keyless-authentication "Copy link to this section")

Cycode now supports OIDC authentication to its service accounts using tokens issued by your identity provider. When you create a Cycode service account, simply enable the OIDC toggle, provide the required Issuer and Audience parameter values, and add any additional token claims that Cycode should validate. After saving, the new OIDC-enabled service account appears in the Service account view and is ready for secure token-based access.

For more information, go to [Service accounts](/cycode-settings/user-administration/service-accounts) .

### Elevate permissions for GitHub integrations [Copied!](#elevate-permissions-for-github-integrations "Copy link to this section")

You can now elevate the permissions of a GitHub Apps integration from read-only to default (full permissions) without removing and re-integrating the GitHub connection. An updated connector wizard and new API support this transition safely while preserving your data.

Elevating permissions enables the integration with Cycode to go beyond monitoring, so the platform can perform actions such as opening pull requests to remediate violations.

## November 2025 [Copied!](#november-2025 "Copy link to this section")

### Enhanced violation data for Confluence Cloud and Data Center integrations [Copied!](#enhanced-violation-data-for-confluence-cloud-and-data-center-integrations "Copy link to this section")

Cycode now supports two additional violation data fields for Confluence integrations, page creator and blog creator. This helps to streamline secret remediation because remediation tasks can be sent directly to the owner of the violation source.

For more information, go to [Confluence Data Center](/integrations/productivity-tools/confluence-data-center) .

### Enhanced granularity for container violations [Copied!](#enhanced-granularity-for-container-violations "Copy link to this section")

We’re happy to announce a significant enhancement to our container scanning mechanism to provide more precise and actionable vulnerability data.

Container scans will now generate violations for individual vulnerable packages, rather than grouping them under a single CVE. This provides a clearer, more detailed view of your security posture, helping your teams pinpoint the root cause of vulnerabilities faster.

This change also aligns the container scanning experience with SCA scanning, paving the way for powerful future capabilities like automated remediation.

Note

While you may notice an increase in the number of detected violations, this reflects a more accurate representation of your container image risks.

### Customize your risk scoring [Copied!](#customize-your-risk-scoring "Copy link to this section")

We’ve updated our risk scoring engine to give you more control over how risk is calculated. This new capability provides a clear and direct way to align the platform with your organization’s security policy. You can customize the following settings:

*   Maximum risk score: You can adjust the maximum risk score for each available risk category. This allows you to control the weight of each category in your total security score.
    
*   Enable/Disable risk factors: You can enable or disable individual risk factors that contribute to a category’s score. This ensures that the risk calculation reflects only the factors relevant to your team.
    

You can also test your changes to see how they affect the final risk score before you apply them.

For more information, go to [Customize the risk score](/additional-cycode-features/cycode-risk-score/manage-risk-score-formulas) .

### New Bugcrowd connector [Copied!](#new-bugcrowd-connector "Copy link to this section")

Organizations can now integrate Bugcrowd with Cycode to manage Bugcrowd-reported issues directly within Cycode. This capability enhances your security posture and improves your code-to-cloud and runtime visibility.

**Benefits**:

*   Use Cycode’s graph visibility to correlate endpoints that are affected by Bugcrowd violations with code APIs and repositories.
    
*   Gain full visibility into all bug bounty violations reported by Bugcrowd.
    

For more information, go to [Bugcrowd](/integrations/security-tools/bugcrowd) .

### Enforce “Status checks must pass” setting for GitLab Ultimate [Copied!](#enforce-status-checks-must-pass-setting-for-gitlab-ultimate "Copy link to this section")

Administrators can now configure Cycode to enforce the GitLab Ultimate **Status checks must pass** setting when the Cycode **Block merge** option is enabled. If the GitLab setting is disabled manually, Cycode will automatically re-enable it as long as the relevant feature flag is active.

This update strengthens merge protection for GitLab Ultimate-tier projects by enforcing CI validation.

### Improved Azure DevOps integration experience [Copied!](#improved-azure-devops-integration-experience "Copy link to this section")

We’ve streamlined the Azure DevOps integration flow to make connecting to Cycode faster and clearer:

*   Simplified the selection of organizations
    
*   Added the ability to connect only full-access organizations or to include limited-access organizations in the integration
    
*   Removed unnecessary tabs in the wizard
    
*   Moved permission-based selection to a later step in the integration process, so there’s no need to connect a second time
    

These improvements ensure a smoother, more intuitive integration setup for all users.

### Configure PR scanning behavior per repository in Cycode projects [Copied!](#configure-pr-scanning-behavior-per-repository-in-cycode-projects "Copy link to this section")

You can now apply project-level PR scanning behavior per repository in a Cycode project. This enhancement gives project managers more flexibility to roll out PR scanning incrementally across their repositories.

The following settings can be configured at the project level:

*   Add specific repositories to an exceptions list.
    
*   Customize PR settings for repositories in the exceptions list:
    
    *   Enable/disable PR scanning
    *   Enable/disable block merge
*   Repositories that aren’t in the exceptions list automatically inherit the project’s default PR settings.
    

### New IaC dashboard for comprehensive visibility [Copied!](#new-iac-dashboard-for-comprehensive-visibility "Copy link to this section")

Cycode is pleased to introduce the new IaC dashboard, a dedicated module designed to provide comprehensive visibility and actionable insights into your Infrastructure as Code (IaC) security posture.

Previously, organizations had to manually correlate data to understand their IaC risk. This new dashboard centralizes all critical IaC security metrics, eliminating guesswork and providing an at-a-glance view of your compliance and risk status.

### Automated user mapping to projects via IdP groups [Copied!](#automated-user-mapping-to-projects-via-idp-groups "Copy link to this section")

New users can now be automatically assigned to the correct Cycode projects when they sign in to Cycode, based on their SSO (SAML) group data. This feature simplifies user management and enables scalable onboarding for large organizations by eliminating the need for manual user creation and project assignments.

You can map your Identity Provider (IDP) groups (such as Okta or Azure AD) directly to Cycode projects within the admin settings. When you map an IDP group to a Cycode group, the IDP group is assigned to all projects within that Cycode group, but not to the group itself.

For more information, go to [Role mapping](/cycode-settings/user-administration/single-sign-on-sso/map-idp-groups-to-cycode-roles-and-projects) .

### Beta release of our new SAST engine for Python [Copied!](#beta-release-of-our-new-sast-engine-for-python "Copy link to this section")

We’re happy to announce the beta release of our new SAST engine for Python, featuring source-to-sink data flow analysis that helps you remediate issues faster, with greater accuracy, confidence, and context.

This new engine delivers a major improvement in precision, significantly reducing false positives while maintaining best-in-class scanning speed.

To enable public preview, go to **Settings** > **SAST** > **Scanning configuration** and enable the **Python** option.

## October 2025 [Copied!](#october-2025 "Copy link to this section")

### Prioritize vulnerability remediation with new EPSS filter [Copied!](#prioritize-vulnerability-remediation-with-new-epss-filter "Copy link to this section")

A new EPSS (Exploit Prediction Scoring System) filter is available for SCA vulnerabilities.

In a landscape filled with alerts, the ability to prioritize which vulnerabilities to fix first is critical. The new EPSS filter for SCA empowers your security and development teams to focus on what matters most by filtering vulnerabilities based on the real-world probability of exploitation.

Use the EPSS score to refine the Automation view and to create powerful, proactive automated workflows. Start leveraging EPSS today to enhance your security posture and streamline your remediation efforts.

### New connector for Dynatrace [Copied!](#new-connector-for-dynatrace "Copy link to this section")

We’re pleased to announce the release of our Dynatrace connector. This integration enables Cycode to pull container image vulnerability data directly from Dynatrace, providing:

*   Mapping of vulnerability impact to quickly identify risk origins within code repositories.
    
*   Accelerated remediation processes for container security threats.
    

For more information, go to [Dynatrace](/integrations/security-tools/dynatrace) .

### Enhanced usability in project pages [Copied!](#enhanced-usability-in-project-pages "Copy link to this section")

The view for individual projects and views now includes an Automation tab so you can manage workflows in context.

*   View only the workflows related to your selected project or group.
    
*   Edit workflows directly from the tab for faster navigation and control.
    

Additionally, the Settings tab now contains an Audit log page with a timeline view of the project or group audit logs, to improve visibility into activity history.

### New container image inventory view [Copied!](#new-container-image-inventory-view "Copy link to this section")

We are pleased to announce an enhancement to the container image inventory view in Cycode. This update introduces a redesigned, comprehensive view that consolidates all relevant security information for a specific container image into a single, easy-to-navigate interface.

Previously, it was challenging to prioritize vulnerabilities for a single container image, especially when it was deployed across multiple Kubernetes clusters, which could lead to duplicate violations. The new container image inventory card solves this by providing a unified view of an image’s security posture, including its violations, package vulnerabilities, and deployment locations.

For more information, go to [Container images](/context-intelligence-graph/inventory/artifacts/container-images) .

### Improved visibility for multiple violations in Jira tickets [Copied!](#improved-visibility-for-multiple-violations-in-jira-tickets "Copy link to this section")

We’ve redesigned the way that Cycode presents multiple violations in a single Jira ticket. Your Jira tickets will now feature a clear table with relevant fields per violation domain, replacing the previous list of links.

This enhancement significantly improves usability by providing a more organized and comprehensive view of detected violations.

![](/assets/image%28711%29.png)

### Violation summary in GitHub pull requests [Copied!](#violation-summary-in-github-pull-requests "Copy link to this section")

Cycode now provides a violation summary directly in the GitHub pull request in GitHub when PR scanning is enabled. The summary provides a clear, consolidated view of all the violations detected by the Cycode scanners.

Each violation includes its severity, policy name, and file-level annotation, helping developers review and address issues directly from the PR.

Note

This enhancement is available for GitHub repositories using check runs.

For more information, go to [View PR scan summary in GitHub](/developer-experience/developers/pull-request-pr-scanning/view-pr-scan-summary-in-github) .

### Connector for Elasticsearch [Copied!](#connector-for-elasticsearch "Copy link to this section")

You can now automatically send detected violations from Cycode directly to your Elasticsearch database.

This integration enables you to:

*   Easily organize, track, and monitor all relevant violations within Elasticsearch.
    
*   Get continuous status updates from Cycode to Elasticsearch about violations.
    
*   Gain deeper insights and streamline your violation management.
    

### Enhanced on-demand and retroactive scans [Copied!](#enhanced-on-demand-and-retroactive-scans "Copy link to this section")

Cycode is happy to announce important new functionality that gives users more flexibility and control when running on-demand scans and retroactive scans.

#### Secrets scanner [Copied!](#secrets-scanner "Copy link to this section")

**On-demand scans by policy**

Users can now run on-demand scans for specific secret policies within a configured scope (organization or repository). Users can select one or more policies, including both out-of-the-box and custom policies, and define the scan scope across multiple SCMs.

**Retroactive scanning by policy**

Users can now run retroactive scans against one or more specific secret policies. This functionality is available from the Policies view.

#### All scanners [Copied!](#all-scanners "Copy link to this section")

**Retroactive scanning by repository**

Users can select one or more repositories from the **Inventory** > **Repositories** page and run a retroactive scan directly, regardless of the violations category.

Note

The **Run retroactively** option is disabled if policies from multiple domains are selected, or of any of the selected policies are inactive.

### Validate secrets without saving the value [Copied!](#validate-secrets-without-saving-the-value "Copy link to this section")

Cycode now supports secret validation even when secret storage is disabled, by retrieving the secret value directly from your SCM at runtime. This allows Cycode to verify whether a secret is active or inactive without ever saving the secret value.

Note

*   Cycode can validate the status only for secrets that have at least one violation detected in an SCM, where a SHA can be generated and used for validation.
*   This feature is available only for code stored in an SCM. The validity status of secrets can’t be detected in code stored in a non-SCM provider.
*   This feature can’t be applied retroactively. Previously validated secrets are stored in the Cycode database and securely encrypted.

Important

To enable this feature, open a support ticket and request the following:

1.  Disable storing the secret value.
2.  (If needed) Delete secret values that are currently stored in the Cycode database.

Enabling and disabling secret validation is configured in the **Settings** > **Secrets** > **Validity checks** page with no changes.

For more information, go to [Manage secret validity checks](/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/) .

### Location breadcrumbs now include the SCM project path [Copied!](#location-breadcrumbs-now-include-the-scm-project-path "Copy link to this section")

The location breadcrumbs component has been enhanced to display full SCM project paths, which improves visibility and context across the platform. Users can now differentiate between repositories that have the same or similar names by viewing their complete SCM project hierarchy.

This update is reflected across key areas, including the project creation wizard, scope listings, and the Inventory and Violations views.

Note

This enhancement currently supports BitBucket and Azure DevOps.

### New branch filter in the SAST dashboard [Copied!](#new-branch-filter-in-the-sast-dashboard "Copy link to this section")

A branch filter has been added to the SAST dashboard. This filter enables users to refine the SAST metrics view by branch, providing more granular visibility and control.

### Enhanced Broker metrics [Copied!](#enhanced-broker-metrics "Copy link to this section")

Broker analytics now provide deeper visibility with two major enhancements:

*   Disk usage tab: Track and analyze Broker storage consumption over time.
    
*   Extended time range selection: View metrics for up to 7 days, giving you more context for performance and scaling decisions.
    

For more information, go to [Cycode Broker analytics](/cycode-settings/cycode-broker/cycode-broker-analytics) .

### Better visibility into risk score factors [Copied!](#better-visibility-into-risk-score-factors "Copy link to this section")

The Risk Analysis tab of the violation card has an improved Risk Factors section. We’ve added visibility about the risk factors and their effect on the overall risk score, which enables the following:

*   Provides a complete picture of the score calculation.
    
*   Helps users distinguish between factors that affected and didn’t affect the risk score.
    
*   Enhances clarity for investigations and reporting.
    

For more information, go to [Risk Analysis tab](/view-and-manage-violations/violation-card/risk-analysis-tab) .

## September 2025 [Copied!](#september-2025 "Copy link to this section")

### Enhanced Jira ticket description [Copied!](#enhanced-jira-ticket-description "Copy link to this section")

Cycode has made the following improvements to the description provided in Jira tickets opened from the platform. This upgrade provides a clearer, more comprehensive view of your security findings.

*   Additional details and context are provided, making findings more actionable.
    
*   Content is easier to read with cleaner formatting and structured sections.
    
*   Critical details are highlighted and organized for quick reference.
    

This enhancement helps users quickly understand the scope and severity of each finding, prioritize them effectively, and streamline the remediation workflow.

To use the new format, enable the **Use enhanced description format** option in the connection wizard when configuring a Jira integration.

### Connector for Bright Security [Copied!](#connector-for-bright-security "Copy link to this section")

Cycode can now integrate with Bright Security, a powerful, developer-focused DAST platform designed to uncover vulnerabilities in web applications and APIs. The Bright Dev-Centric DAST platform simulates real-world hacker attacks, automating scans and delivering precise reports with clear remediation steps for rapid fixes.

This integration enhances your DAST capabilities, enabling you to identify and resolve vulnerabilities more efficiently within Cycode.

For more information, go to [Bright Security](/integrations/security-tools/bright-security) .

### CLI pre-push hook support [Copied!](#cli-pre-push-hook-support "Copy link to this section")

We’ve updated our CLI to v3.5.0, introducing pre-push hook support for SCA, Secrets, and SAST scans. This gives developers an additional layer of protection by ensuring issues are detected before code reaches the remote repository. This enhancement complements our existing pre-commit hook support.

For more information, go to [Pre-push Scan](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#pre-push-scan) .

### New secret detection policies [Copied!](#new-secret-detection-policies "Copy link to this section")

We’ve expanded our AI-related policies to improve Cycode’s coverage of API keys from popular providers.

The following API keys are now part of the secret detection policies:

*   OpenAI Project API Key V2
    
*   xAI API Key
    
*   Anthropic API Key
    
*   Anthropic Admin Key
    
*   OpenAI Admin Key
    

This enhancement improves our ability to detect leaked or misused API keys from leading AI platforms, giving you broader protection across your environments.

### Connector for Cloudflare API Security [Copied!](#connector-for-cloudflare-api-security "Copy link to this section")

Cycode can now integrate with Cloudflare API Security, bringing enhanced security and visibility for your Cloudflare environment to the Cycode platform. This new capability provides critical insights to help you protect your assets.

Connecting Cycode to Cloudflare enables the following:

*   Detection of API endpoints that aren’t managed by Cloudflare.
    
*   Identifying Cloudflare domains that aren’t proxied by Cloudflare.
    
*   Comprehensive visibility into Cloudflare’s assets, including zones, WAF rulesets, website endpoints, and security events.
    
*   Viewing Cloudflare firewall events within Cycode, complete with code-to-cloud correlation.
    

Connect your Cloudflare instance to Cycode and strengthen your security posture with these deeper insights today.

### Support for same commit ID across different repositories [Copied!](#support-for-same-commit-id-across-different-repositories "Copy link to this section")

The secrets scanner now supports commit IDs that are the same in multiple repositories (such as mirrored repositories). Scanning and detection can now correctly recognize and separate findings, even when commit IDs overlap across different repositories.

This prevents duplication and confusion, and ensures that violations are always associated with the correct repository.

Supported scenarios include:

*   Mirrored repositories – for example, when the same repository is synced between GitHub and GitLab.
    
*   Forks or backups – when a repository is cloned or forked, and the commit history is preserved.
    
*   Multi-SCM setups – when the same codebase is managed in more than one SCM for redundancy or migration purposes.
    

### AppSec data flow widget for administrators [Copied!](#appsec-data-flow-widget-for-administrators "Copy link to this section")

Cycode has released the AppSec data flow widget in the Visibility dashboard, which provides full visibility of your coverage in the platform.

This interactive widget offers a comprehensive visual overview across developers, PR security, technologies, inventory, scanners, and violations. Use the widget to gain a complete understanding of your application security posture at a glance.

Note

This feature is visible to members with admin and owner roles.

### Bulk secret validation [Copied!](#bulk-secret-validation "Copy link to this section")

You can now validate the secret status of multiple secrets at the same time. This makes secret validation faster and easier when dealing with large sets of violations.

In the Violations view > Secrets module, select one or more secrets directly from the table.

Note

Group the view by either **None** or **Secret Value**.

### Redesigned notification center [Copied!](#redesigned-notification-center "Copy link to this section")

The Cycode notification center has been redesigned for improved clarity and hierarchy. To help you focus on what matters most, notifications are now organized into three distinct categories:

*   **Important**
    
*   **Mentions**
    
*   **Info**
    

This structure helps you quickly distinguish between alerts that affect your security posture, individual updates that require your attention, and general product updates.

Additionally, critical issues that can impact core functionality, such as a disconnected integration or broker problem, now trigger a prominent alert banner upon sign-in. This ensures the most urgent information is seen and addressed immediately.

You can find and review your new notifications by clicking the bell icon in the top navigation bar.

### Configure secret scanning for potentially leaked repositories [Copied!](#configure-secret-scanning-for-potentially-leaked-repositories "Copy link to this section")

Cycode has introduced new controls and interface updates to facilitate managing and understanding secrets in potentially leaked repositories.

*   Custom configuration – You can turn secret scanning on or off (default setting) for potentially leaked repositories.  When enabled, Cycode scans each identified leaked repository and tags detected secrets with the label “Potentially leaked repository.”

Note

This feature can’t be applied retroactively. It can only scan potentially leaked repositories that are detected after the feature is enabled.

*   Clearer indication in the violations table – Violations from these repositories now display a badge in the **Found in** column. Hover over the badge to view the full location path.
    
*   Updated violation card – Cards now clearly show when a repo is non-organizational and flagged as potentially leaked with a badge for quick identification.
    

These improvements give you more control and visibility over external risks, making it easier to spot and manage secrets outside of your organization’s repositories.

### Scheduled PDF reports for dashboards and Comparator views [Copied!](#scheduled-pdf-reports-for-dashboards-and-comparator-views "Copy link to this section")

You can now configure automated, recurring delivery of your project dashboards and Comparator views as PDFs. This enhancement extends the scheduled reports framework to support:

*   Automated, recurring delivery of project or group dashboard views.
    
*   Automated delivery of multi-project comparison snapshots.
    

This capability improves visibility and reporting hygiene, reducing manual sharing and ensuring that stakeholders receive consistent updates without having to sign in to the Cycode platform.

### Manual container-to-code correlation [Copied!](#manual-container-to-code-correlation "Copy link to this section")

Cycode now allows you to manually correlate container repositories with their originating code repositories. This provides the following benefits:

*   Enhanced traceability - manually link container images to their exact source code, even when automatic correlation isn’t possible or needs refinement.
    
*   Faster remediation - pinpoint the source code location of container vulnerabilities quickly, so you can fix issues earlier and more efficiently.
    
*   Improved accuracy - ensure precise lineage tracking for better risk assessment and compliance.
    

You can perform manual correlation in two ways:

*   From the container repository inventory card - navigate to a container repository’s overview and use the new **Correlate** option in the **Correlated entities** section.
    
*   From a container security violation: In the exposure path, click the code repository placeholder to open the correlation dialog.
    

![](/assets/image-710.png)

## August 2025 [Copied!](#august-2025 "Copy link to this section")

### Create favorite views in the Project Comparator [Copied!](#create-favorite-views-in-the-project-comparator "Copy link to this section")

You can now save and manage personalized views in the Project Comparator. This enhancement enables one-click access to your frequently-used comparison configurations, which streamlines your workflow and improves efficiency by eliminating the need to rebuild the same Comparator views for regular project and metric tracking.

For more information, go to [Compare Cycode projects in the Comparator](/cycode-projects/compare-cycode-projects-in-the-comparator) .

### New CVSS Score and Exploit Maturity filters for workflows [Copied!](#new-cvss-score-and-exploit-maturity-filters-for-workflows "Copy link to this section")

The Cycode automation engine has been enhanced with two new filters for the **Vulnerability found in dependency** violation policy. Users can now create more granular and targeted workflows to expose vulnerability severity and exploitability. Set the value of the filter and add the condition to your automated workflow.

*   **CVSS Score**: You can set a specific minimum numerical CVSS score (for example, 7.0). The workflow will now run only for vulnerabilities that exceed the severity threshold you defined.
    
*   **Exploit Maturity**: You can set the value of the filter to **POC**(Proof-of-Concept) and **Mature**. This helps focus on threats that have a known or well-developed exploit.
    

These filters enable security and development teams to build precise automation rules, prioritize the most critical risks, and reduce noise from less severe vulnerabilities.

![](/assets/image-708.png)

For more information, go to [Create a workflow](/workflow-automation/create-a-workflow) .

### DAST support added to Fortify SSC connector [Copied!](#dast-support-added-to-fortify-ssc-connector "Copy link to this section")

Cycode’s Fortify SSC connector now supports DAST (Dynamic Application Security Testing) data, in addition to SAST.

This new functionality enable analysis of running applications to uncover real-world vulnerabilities, so you can gain deeper insights into security risks and help your teams better identify and mitigate vulnerabilities.

For more information, go to [Fortify Software Security Center (SSC)](/integrations/security-tools/fortify-software-security-center-ssc) .

### Configure pull request settings at the project level [Copied!](#configure-pull-request-settings-at-the-project-level "Copy link to this section")

Project managers can now configure a wide variety of PR scanning options directly from the PR Settings tab in a project. Turn PR scanning on or off, configure severity thresholds and merge blocking, and override tenant-wide defaults without waiting for an admin update.

For more information, go to [Create and configure a project](/cycode-projects/create-and-configure-a-project) .

### SCA support for Deno [Copied!](#sca-support-for-deno "Copy link to this section")

We are pleased to announce SCA support for Deno.

Deno is a modern and secure runtime for JavaScript and TypeScript. Unlike other runtimes, Deno manages dependencies via direct URL imports. To ensure comprehensive and accurate scanning, Cycode now identifies and analyzes the deno.json and deno.lock files generated by Deno projects. By parsing these files, Cycode can map your project’s entire dependency graph and scan it for vulnerabilities.

This support is fully integrated for SCM-based integrations.

For more information, go to [Supported SCA ecosystems/package managers](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/) .

### SCA support for Swift CocoaPods package manager [Copied!](#sca-support-for-swift-cocoapods-package-manager "Copy link to this section")

Cycode’s SCA scanner now supports CocoaPods, a key dependency manager for Swift and Objective-C projects.

With this feature, you can now secure your entire mobile application development lifecycle. Cycode automatically scans your repositories, detects the presence of a Podfile and its corresponding Podfile.lock file, and provides comprehensive vulnerability analysis for all your CocoaPods dependencies. This integration works seamlessly for scans initiated through both the web interface and the CLI, ensuring your iOS, macOS, and other Apple platform projects are secure.

For more information, go to [Supported SCA ecosystems/package managers](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/) .

### Set project scope by bug bounty asset [Copied!](#set-project-scope-by-bug-bounty-asset "Copy link to this section")

Cycode now supports setting the scope of a Cycode project according to bug bounty assets.

When you create a Cycode project, you can select a specific HackerOne asset when you define the scope, giving you more granular control when you configure your Cycode project. Previously, you could only select a scope at the HackerOne project level.

For more information, go to [Create and configure a project](/cycode-projects/create-and-configure-a-project) .

### Nested search for groups and projects [Copied!](#nested-search-for-groups-and-projects "Copy link to this section")

Users can now perform free-text searches across both groups and projects, with results displayed in their full hierarchy.

The enhanced search functionality makes it easier to locate the right entity, especially in large organizations with complex structures. Search is supported in three locations:

*   Main Projects view
    
*   Projects/Groups hierarchy view
    
*   Projects filter dropdown
    

This improvement streamlines navigation and enhances scalability across complex organizational models.

### Import and export SBOMs for improved asset management [Copied!](#import-and-export-sboms-for-improved-asset-management "Copy link to this section")

You can now import Software Bill of Materials (SBOM) files for your commercial and third-party applications directly into the Cycode platform. You can also export SBOMs to support information sharing and compliance.

For more information, go to [SBOMs (Software Bills of Material)](/context-intelligence-graph/inventory/sboms-software-bills-of-material/) .

Note

SBOM import is currently in public preview. SBOM export is in general availability.

### Project-level ticketing support for Jira Server [Copied!](#project-level-ticketing-support-for-jira-server "Copy link to this section")

You can now configure ticketing at the project level for Jira Server, just like you can for Jira Cloud. This update helps on-premises users better align Cycode projects with specific Jira projects for streamlined issue tracking and workflows.

## July 2025 [Copied!](#july-2025 "Copy link to this section")

### Smarter filtering with runtime context for Wiz and Upwind [Copied!](#smarter-filtering-with-runtime-context-for-wiz-and-upwind "Copy link to this section")

Cycode has expanded runtime context coverage to help you better prioritize security violations.

In addition to data from our Kubernetes agent, we now support context from Wiz and Upwind, so you can filter images and container security violations by **Deployed** and **Internet Exposed** labels. Simply connect your Wiz or Upwind integrations and use the filters in the Violations view.

Note

The Wiz integration currently supports Deployed context only due to API limitations.

### New Fortify Software Security Center (SSC) SAST connector [Copied!](#new-fortify-software-security-center-ssc-sast-connector "Copy link to this section")

We’re pleased to announce the release of our latest Static Application Security Testing (SAST) connector, Fortify Software Security Center (SSC).

The integration with Fortify SSC enables you to fetch application security findings so you can view and manage them in Cycode. This provides centralized visibility and control over code vulnerabilities across your software projects.

Security teams can trace issues from Fortify scans back to their source repositories, prioritize remediation efforts, and ensure compliance, all within the Cycode platform.

For more information, go to [Fortify Software Security Center (SSC)](/integrations/security-tools/fortify-software-security-center-ssc) .

### Checkmarx One integration supports SCA [Copied!](#checkmarx-one-integration-supports-sca "Copy link to this section")

We’re pleased to announce that Checkmarx One SCA support is now available for the Cycode platform in our existing Checkmarx One connector.

This enhancement brings SCA-related findings directly into Cycode alongside existing SAST results, offering a unified, in-platform view of all code-level security insights from Checkmarx One.

For more information, go to [Checkmarx One](/integrations/security-tools/checkmarx-one) .

### Group SCA violations by fix version for smarter prioritization [Copied!](#group-sca-violations-by-fix-version-for-smarter-prioritization "Copy link to this section")

When Cycode detects a vulnerable package in multiple sources, you can now see the most effective upgrade paths in the violation card. This enables better prioritization and management of SCA vulnerabilities.

The package violation card provides a clear, aggregated view of potential upgrade versions. Each option details how many high, medium, and low severity vulnerabilities it will fix, so you can quickly identify the upgrade that resolves the most critical issues with the least amount of work. Click a suggested version to see all related violations and take immediate action.

### Introducing AI-powered remediation for container vulnerabilities [Copied!](#introducing-ai-powered-remediation-for-container-vulnerabilities "Copy link to this section")

Cycode is excited to introduce the AI Assistant, which generates remediation suggestions for container vulnerabilities. Go beyond detection and get actionable instructions to resolve security issues quickly.

The AI Assistant traces the vulnerability back to its source, whether in your Dockerfile or a source code dependency, and provides a clear, step-by-step plan to fix it. To get a remediation suggestion from the AI Assistant, open the **Remediation** tab in any eligible container violation and click **Generate** in the AI **Assistant** area.

For more information, go to

### New Connector for Black Duck Continuous Dynamic [Copied!](#new-connector-for-black-duck-continuous-dynamic "Copy link to this section")

We’re happy to announce the release of our newest DAST integration, Black Duck Continuous Dynamic.

With this connector, Cycode can now ingest and correlate runtime application vulnerabilities detected by Black Duck’s DAST engine. This integration provides visibility into security risks that surface during real-world application execution, helping teams identify exploitable weaknesses.

For more information, go to [Black Duck Continuous Dynamic (formerly WhiteHat Dynamic)](/integrations/security-tools/black-duck-continuous-dynamic-formerly-whitehat-dynamic) .

### Support for PNPM Package Manager for NodeJS [Copied!](#support-for-pnpm-package-manager-for-nodejs "Copy link to this section")

We are pleased to announce support for PNPM (Performant NPM) for NodeJS projects. This enhancement allows teams using PNPM to take full advantage of Cycode’s security and visibility capabilities without making any changes to their existing workflows.

You can seamlessly scan projects that use PNPM for dependencies and view violations via either the user interface or the CLI. Cycode automatically detects your PNPM projects by identifying the `package.json` manifest file and the `pnpm-lock.yaml` lock file, to ensure comprehensive and accurate vulnerability scanning for your NodeJS applications.

For more information, go to the [Javascript](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/javascript) topic in the Supported SCA Ecosystems section.

### Improved Project view with tabs and smarter navigation [Copied!](#improved-project-view-with-tabs-and-smarter-navigation "Copy link to this section")

The Project view has been redesigned to make managing your Cycode projects easier and more intuitive. The updated design provides:

*   Clean card layout
    
*   Access to Scope, Members, Settings, and Details info without opening a card
    
*   Improved tooltips to provide better context
    

For more information, go to [View and manage projects](/cycode-projects/view-and-manage-projects) .

### Onboard limited-access accounts to Azure DevOps and Azure DevOps Server [Copied!](#onboard-limited-access-accounts-to-azure-devops-and-azure-devops-server "Copy link to this section")

Cycode can now integrate with Azure DevOps (cloud) and Azure DevOps Server when the connecting account has only project-scoped or read-only permissions. This means that full organization or collection admin rights are no longer required.

This enhancement provides the following benefits:

*   Accelerated rollout: Remove security-review delays tied to elevated access
    
*   Consistent coverage: Automatically detects and protects every project and repository the account can reach
    

Integrate your Azure DevOps environments from the Settings view, under **Integrations** > **Azure DevOps**(or **Azure DevOps Server**) >**Cloud**(or **Server**).

For more information, go to [Azure DevOps](/integrations/scm-source-code-management-tools/azure-devops) or [Azure DevOps Server](/integrations/scm-source-code-management-tools/azure-devops-server) .

### Automatically ignore container vulnerability violations [Copied!](#automatically-ignore-container-vulnerability-violations "Copy link to this section")

You can now create workflows to automatically ignore specific container image CVEs. This enhancement helps to streamline your triaging workflows and reduce alert fatigue, so you can focus on the vulnerabilities that matter by silencing noise from known or accepted risks.

To get started, in the Automation view create a new workflow, and select the **Vulnerability found in container** policy. Then filter by **Vulnerability ID** to define your ignore rule.

![](/assets/image-706.png)

### View the Risk Score history in violation cards [Copied!](#view-the-risk-score-history-in-violation-cards "Copy link to this section")

You can now see the risk score history for each violation, which shows whether it has changed over time.

The new **Risk Score history** tab in the violation card displays a detailed log of past score changes, including timestamps, previous and updated scores, and the reasons behind each change.

This update improves transparency and builds trust in the platform’s risk evaluation process.

### Cycode app for ServiceNow Application Vulnerability [Copied!](#cycode-app-for-servicenow-application-vulnerability "Copy link to this section")

With this new app, Cycode customers can seamlessly sync secret violations from Cycode to the ServiceNow Vulnerability Response (VR) module, providing centralized visibility and streamlined remediation for application security risks.

The integration automatically fetches secret violations from Cycode and maps them to the corresponding ServiceNow AVR tables. The integration also supports both on-demand execution and scheduled synchronization, leveraging ServiceNow’s Vulnerability Response Integration Framework to ensure efficient and consistent data flow.

Security teams can now centralize vulnerability management within ServiceNow and enhance their remediation workflows with greater ease and efficiency.

For more information, go to [ServiceNow Vulnerability Response](/integrations/issue-tracking-ticketing-tools/servicenow) .

### New Dev Activity view for administrators [Copied!](#new-dev-activity-view-for-administrators "Copy link to this section")

The Dev Activity tab is now live and visible to all admins. This new top-level navigation view improves visibility into how Cycode developer tools are being used in your organization by centralizing access to the following:

*   Developer audit
    
*   PR scan history
    
*   CLI logs
    
*   IDE logs
    

These pages were previously located inside the Settings view. Now, not only are they easier to find, they’ve also been significantly enhanced with new metric widgets, additional information, and expanded filtering options.

Use the Dev Activity tab to gain better insights into developer activity with a smoother, more intuitive experience.

For more information, go to [Monitoring Developer Activity](/developer-experience/security-administrators/monitor-developer-activity/) .

### Enhanced visibility for secret remediation actions [Copied!](#enhanced-visibility-for-secret-remediation-actions "Copy link to this section")

We’re happy to announce a significant improvement to your secret remediation process. All remediation actions that you perform in Cycode, including by developers using pull request comments, will be visible as workflows in the Automations view. This update gives you a centralized view and greater control over managing secrets.

Cycode shows the following actions as workflows:

*   Platform remediation: Actions like **Mark as resolved** or **Mark as false positive** that users perform directly from the violations table or secret cards will become workflows that are visible in the Automations view, with the origin **Violations page**.
    
*   Pull requests: When a violation is handled by adding a PR comment this action will become a workflow in the Automations view, with the origin **Pull requests**.
    

This enhancement brings several key benefits:

*   Centralized management and transparency: Easily track and understand all actions taken on secrets. You can now see why a violation was ignored or resolved, giving you a comprehensive audit trail.
    
*   Greater control: Regardless of the user that initiated these actions, you can now manage, disable, or update any of these automated workflows directly in the Automations view. This provides more control and flexibility in your secret remediation processes.
    

### Project view: Dashboards and smarter navigation [Copied!](#project-view-dashboards-and-smarter-navigation "Copy link to this section")

We’re happy to announce an enhanced experience for navigating groups and projects:

*   A new navigation pane with the complete group and project hierarchy enables you to move quickly between items.
    
*   Dedicated dashboards show structured group and project data at a glance.
    
*   A new Comparator shortcut in group dashboards makes comparing projects seamless.
    
*   Dashboards can now be exported to PDF (manual export only).
    

The existing table view remains unchanged. This release improves usability without disrupting current workflows.

For more information, go to [View and manage projects](/cycode-projects/view-and-manage-projects) .

### Monitor Cycode Broker memory and CPU usage [Copied!](#monitor-cycode-broker-memory-and-cpu-usage "Copy link to this section")

You can now view real-time memory and CPU metrics for each Broker instance in the **Settings** > **Brokers** page. These metrics help on-premise customers monitor infrastructure performance and optimize Broker deployments. The metrics are presented in easy-to-understand graphs and updated live.

For more information, go to [Cycode Broker analytics](/cycode-settings/cycode-broker/cycode-broker-analytics) .

## June 2025 [Copied!](#june-2025 "Copy link to this section")

### Enhanced search in Violations view [Copied!](#enhanced-search-in-violations-view "Copy link to this section")

The search functionality in the Violations view has been improved for **Group By** = **None**, enabling users to find results across multiple key fields such as repository, author, CVE, and email. Additionally, when you start typing a search term, a new **Suggestions** area helps guide your input.

This enhancement helps locate specific violations faster and with more precision.

### Enhanced Secret Auto-Resolution Control [Copied!](#enhanced-secret-auto-resolution-control "Copy link to this section")

Cycode has released a significant update that gives you more control over secret auto-resolution when SCM assets (repositories or branches) are removed.

You can now decide if Cycode automatically resolves secret violations when their associated code asset (repository or branch) is deleted, to ensure secrets are truly handled even if the source is gone. This enhancement allows you to align secret resolution with your organization’s security policies.

For more information, go to [Auto resolution](/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-auto-resolution) .

### Webhook HMAC signature support [Copied!](#webhook-hmac-signature-support "Copy link to this section")

We’re happy to announce the addition of HMAC-based signature verification to our existing webhook integration. This enhancement introduces an important layer of security, allowing users to verify the authenticity of incoming webhook messages in the Cycode platform.

With this update, teams can confidently validate that webhook payloads originate from trusted sources, helping to prevent spoofed or malicious requests.

For more information, go to [Webhooks](/integrations/alerting-tools/webhooks) .

### Introducing automatic repository and container image insights [Copied!](#introducing-automatic-repository-and-container-image-insights "Copy link to this section")

Cycode now automatically enriches your repositories and container images with contextual insights by applying labels such as **Internet Exposed**, **Active Development**, and **Has CI/CD**. These labels provide an at-a-glance understanding of a repository’s function and potential risk.

This enhancement provides a clearer view of your application landscape, enabling security teams to prioritize issues more effectively. The new contextual labels are available in the repository and container image pages of the Inventory view.

### New context enrichment for projects [Copied!](#new-context-enrichment-for-projects "Copy link to this section")

You can now add granular context to your projects during the creation phase, allowing you to define a project’s risk profile by selecting from a list of preset attributes such as **Active Deployment**, **User Facing**, and **Internet Exposed**.

This added context helps you to better triage alerts and focus on your most critical projects by providing clear, at-a-glance context for anyone viewing the project. These new settings are available in the project creation wizard.

### New Project Comparator [Copied!](#new-project-comparator "Copy link to this section")

The new Comparator dashboard is a powerful addition to the Cycode platform that allows users to compare up to five projects or groups side by side across a wide set of matrices:

*   Total and open violations
    
*   Risk distribution
    
*   Category breakdowns
    
*   Violation trends over time
    
*   SLA status and MTTR
    
*   Max risk score per scope
    

Using the Comparator, security teams can benchmark performance, identify lagging projects, and track improvement over time in a single view. This dashboard can be especially useful for AppSec leads and executives needing big-picture insight.

You can export results from the Comparator as a PDF so teams can easily share results in meetings or audits.

For more information, go to [Compare Cycode projects in the Comparator](/cycode-projects/compare-cycode-projects-in-the-comparator) .

### New GitLab Application Security Connector for container security and SAST [Copied!](#new-gitlab-application-security-connector-for-container-security-and-sast "Copy link to this section")

We’re pleased to announce the release of our GitLab Application Security connector.

With this new capability, Cycode can now sync SAST violations and container image vulnerabilities from GitLab, providing deeper visibility into security risks across the SDLC. The connector enables Cycode to pull application-layer and container-level issues and map their exposure paths, allowing security teams to trace vulnerabilities back to their source repositories for faster remediation.

For more information, go to [GitLab Application Security](/integrations/security-tools/gitlab-application-security)

### Cycode CLI now supports diff scans for SAST [Copied!](#cycode-cli-now-supports-diff-scans-for-sast "Copy link to this section")

Cycode is pleased to announce diff scan support for SAST in the CLI. This feature enables targeted scans on modified files only, making security scanning faster and more CI/CD-friendly. This capability is ideal for users integrating SAST into CI/CD pipelines while trying to minimize scanning overhead.

Diff scans for SAST is available starting from CLI version 3.2.0.

### MCP Scan Hook in Cycode CLI for AI-Generated Tools [Copied!](#mcp-scan-hook-in-cycode-cli-for-ai-generated-tools "Copy link to this section")

We’ve added a new MCP scan hook to the Cycode CLI that automatically inspects AI-generated scripts and tooling. This helps teams ensure that code generated through AI assistants is analyzed and validated for security risks before it enters production workflows. This feature is part of our commitment to delivering developer-first security tooling, especially in the era of AI-assisted development.

The MCP scan hook is available starting from CLI version 3.2.0.

### Assign project to a group from the new project wizard [Copied!](#assign-project-to-a-group-from-the-new-project-wizard "Copy link to this section")

You can can now select a parent group when you create a project in the project wizard. This update eliminates the need to assign a project to a group manually after it is created, simplifying the onboarding process and ensuring better project organization from day one.

For details, go to [Create a project](/cycode-projects/create-and-configure-a-project) .

### Require comments when ignoring violations in PRs [Copied!](#require-comments-when-ignoring-violations-in-prs "Copy link to this section")

You can now enforce the addition of comments when developers ignore a violation in a pull request. This new setting applies across all supported scan types, and ensures better accountability and traceability.

When this option is enabled, all ignore commands (e.g., #cycode\_sast\_ignore\_here) must include a comment. If omitted, the user is prompted to provide one directly in the PR thread.

The option can be set at the tenant level under **Settings**\> \[Cycode scanner\] >**PR Settings**.

### New connector for JFrog Xray [Copied!](#new-connector-for-jfrog-xray "Copy link to this section")

We’re pleased to announce the release of our JFrog Xray connector.

With this new integration, you can now sync container image vulnerabilities from JFrog Xray within Cycode to provide greater visibility about security risks. Cycode can pull all vulnerabilities related to container images and map their exposure paths, enabling security teams to trace vulnerabilities back to their source repositories for faster remediation.

For more information, go to [JFrog Artifactory and Xray](/integrations/security-tools/jfrog-artifactory-and-xray)

### Create API BOM report from Inventory and Report views [Copied!](#create-api-bom-report-from-inventory-and-report-views "Copy link to this section")

You can export an API BOM as a Cycode report, enabling teams to generate detailed inventories of API endpoints used in their codebases. This feature provides visibility into API usage for compliance, security assessments, and incident response.

You can export the API BOM in CSV or JSON format directly from the **Inventory** > **APIs** page, or from the Reports view.

For more information, go to [Generate a report](/additional-cycode-features/generate-a-report) .

## May 2025 [Copied!](#may-2025 "Copy link to this section")

### Exposure path in Secrets Value and Secret cards [Copied!](#exposure-path-in-secrets-value-and-secret-cards "Copy link to this section")

For secrets that are detected in code, build, and artifact integrations, the violation card now includes the exposure path. You can see where a hardcoded secret is exposed, and the root cause for its presence. This new insight can significantly streamline your remediation efforts by providing a clear pathway to address the violation.

The exposure path provides the following benefits:

*   Faster remediation: Quickly pinpoint the source of the exposure.
    
*   Clearer understanding: Understand the context and impact of each violation.
    
*   Improved security posture: Address root causes more effectively to prevent future occurrences.
    

For more information, go to [Secret value card - Overview tab](/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-value-card) and [Secret card](/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-violation-card) .

### Ticketing configuration with project-level settings [Copied!](#ticketing-configuration-with-project-level-settings "Copy link to this section")

Cycode now supports ticketing configuration at the project level, to give you full control over issue tracking using Jira accounts and projects within each Cycode project.

**Key capabilities:**

*   Users can select a specific Jira account and one or more Jira projects in the project settings
    
*   Users see and use only the Jira projects defined for the specific Cycode project in the project settings
    
*   If no Jira projects are configured for a Cycode project, ticket creation is disabled
    

This feature helps reduce ticket misrouting, supports enterprise governance, and improves clarity in the ticket creation workflow.

### Major enhancements to the Cycode CLI [Copied!](#major-enhancements-to-the-cycode-cli "Copy link to this section")

We’re pleased to announce the release of Cycode CLI version 3, a significant upgrade packed with powerful new capabilities and a brand-new user experience.

Updates and improvements include:

*   **Improved usability**: A completely redesigned and intuitive interface, now with enhanced support for code snippets.
    
*   **Comprehensive scan summary**: Quickly understand your scan results with a high-level summary.
    
*   **Flexible export options**: Export your results in JSON, SVG, or HTML format.
    
*   **Multi-output support**: Output to text and JSON formats simultaneously, optimized for performance.
    
*   **Auto-complete for commands**: Speed up your workflow and reduce mistakes with smart auto-complete.
    
*   **Enhanced resilience**: automatic HTTP retries.
    
*   **Automatic update checks**: Stay up to date with built-in version notifications.
    

![](/assets/image-704.png)

Upgrade your Cycode CLI today: [https://github.com/cycodehq/cycode-cli](https://github.com/cycodehq/cycode-cli)

For more information, go to [Cycode CLI](/developer-experience/developers/cycode-cli/) .

### Secret value as an entity [Copied!](#secret-value-as-an-entity "Copy link to this section")

Secret value as an entity is now available in the Discovery and Inventory views, designed to give you a clearer picture of your exposed secrets. Instead of focusing on individual violations, you can get a summary for each unique secret value detailing its status, validity, and important context.

Think of a secret violation as a single occurrence where a secret value was detected. Here’s what you can do:

*   **Discovery and reporting**: In the Discovery view (RIG), you can now focus your searches on specific secret values, build detailed queries around these values, and access all associated violations (occurrences) to generate comprehensive reports.
    
*   **Inventory**: We’ve introduced a dedicated page where you can see all your secret values, along with their key details and associated violations (occurrences). Helpful summary widgets provide an at-a-glance understanding of your entire secret value inventory.
    

These updates make it easier for you to understand and manage your secret exposure effectively by focusing on the secret values themselves.

For more information, go to [Secret values](/context-intelligence-graph/inventory/application-insights/secret-values) .

### Websites as DAST and API assets now available in Cycode projects [Copied!](#websites-as-dast-and-api-assets-now-available-in-cycode-projects "Copy link to this section")

When you create a project in Cycode, you can now select websites from the list of asset types in the Scope tab. This enables better integration of DAST and API security assets into project configurations, and broader visibility and management of web-facing assets.

### Add custom labels to violations [Copied!](#add-custom-labels-to-violations "Copy link to this section")

You can now create custom labels for violations. This provides the following benefits:

*   Enhanced violation management: Add custom labels from both the main Violations view (when grouped by **None**) and the individual Violation card. This offers maximum flexibility for categorizing and managing your security findings.
    
*   New “Labels” column: Add this column to your view to see all the custom labels at a glance.
    
*   Enhanced filtering: You can now filter the Violations page by these custom labels. Create and save your favorite views to quickly access the information that’s most important to you.
    
*   Improved reporting and metrics: You can now filter the ASPM Prioritization and Remediation dashboards using the custom labels you create. This provides more granular control over your reporting and helps you visualize the metrics that truly matter.
    

We’re confident that these updates will significantly improve your ability to organize, prioritize, and report on violations.

## April 2025 [Copied!](#april-2025 "Copy link to this section")

### New SaaSBOM report [Copied!](#new-saasbom-report "Copy link to this section")

The new SaaSBOM report option enables users to export a detailed inventory (name, category, description, vendor URL, sub-category) of SaaS tools from the **Inventory** > **Technologies** page, and from the **Reports** view.

Organizations can use the SaaSBOM report to:

*   Mitigate supply chain risks
    
*   Support compliance with future SaaSBOM standards
    
*   Improve their incident response
    

### Cycode can detect asset collisions in projects [Copied!](#cycode-can-detect-asset-collisions-in-projects "Copy link to this section")

Cycode can now detect asset collisions across projects, so you can manage them. This feature helps you ensure that each asset is associated with only one project, to prevent data duplication and rule collisions.

The asset collision feature can be leveraged as follows:

*   Filter your project list by the new **Contains asset collisions** option.
    
*   View collision warnings in the project table and scope.
    
*   The workflows for creating and editing projects show potential collisions so you can check in real time.
    

For more information, go to [Projects](/cycode-settings/admin-settings/projects) and [Create a project](/cycode-projects/create-and-configure-a-project) .

### Link existing Jira tickets to violations [Copied!](#link-existing-jira-tickets-to-violations "Copy link to this section")

You can now link existing Jira tickets to violations directly within the Cycode interface. Previously, you had to create new Jira tickets for violations.

This addition is part of our ongoing initiative to make our Jira integration even more mature and seamlessly integrate into your users’ workflows.

### Facelift for the query builder [Copied!](#facelift-for-the-query-builder "Copy link to this section")

Cycode’s query builder just got a fresh new look and feel, making it even more intuitive to use. We’ve polished the visuals, clarified actions, and added helpful visual cues so you can build your queries with ease.

### AWS managed secrets correlation for enhanced risk assessment [Copied!](#aws-managed-secrets-correlation-for-enhanced-risk-assessment "Copy link to this section")

We are happy to announce AWS managed secrets correlation, a significant enhancement that boosts both our Secrets Detection and NHI domains.

With this new feature, Cycode users can optionally integrate with AWS Secrets Manager and correlate the values of their managed secrets with violations across our Secrets Detection engine.

When you enable AWS managed secrets correlation, Cycode securely connects (without storing secret values on our platform) to the AWS Secrets Manager to validate if those specific secret values are exposed within the Software Development Lifecycle (SDLC) pipeline.

This unified integration provides critical context for:

*   Holistic risk visibility: Gain a comprehensive understanding of potential exposure for your centrally managed AWS secrets, whether they manifest as traditional secrets or other forms of sensitive NHI within your development workflows.
    
*   Streamlined investigation and remediation: Precisely identify the location of exposed managed secrets across both security domains, facilitating faster and more efficient investigation and remediation efforts.
    

To leverage this powerful new capability for both secrets and NHI insights, go to your AWS Integration page and enable the **AWS Managed Secrets Correlation** option.

### Secrets detection for SharePoint Online [Copied!](#secrets-detection-for-sharepoint-online "Copy link to this section")

We’re excited to announce secrets detection capabilities for SharePoint Online document libraries. Now you can extend Cycode’s powerful secrets scanner to your SharePoint environment, proactively identifying and mitigating the risk of exposed secrets within your files.

Key features include:

*   **Tenant-wide document library scanning**: You can now scan document libraries across all sites within your integrated SharePoint Online tenant.
    
*   **Content scanning**: Cycode scans the content of each file (excluding metadata) to identify potential secrets.
    
*   **Broad support for file types**: Cycode supports a wide array of common file formats, including Word (.docx), Excel (.xlsx), PowerPoint (.pptx), image files (.png, .jpg, .jpeg), text files, and binary files (including zipped archives).
    
*   **Comprehensive initial scan**: Upon integration, Cycode performs a thorough initial scan of all existing sites and document libraries, providing immediate visibility into any pre-existing secrets.
    

This new integration significantly enhances your security posture by bringing our advanced secrets detection directly to your SharePoint Online environment.

For more information, go to [Microsoft SharePoint Online](/integrations/productivity-tools/microsoft-sharepoint-online) .

### Secrets detection for Jira and Confluence Data Centers [Copied!](#secrets-detection-for-jira-and-confluence-data-centers "Copy link to this section")

The new integrations for on-premise Jira and Confluence Data Center instances can significantly boost your security coverage by doing the following:

*   **Jira Data Center**: Cycode automatically scans all aspects of Jira issues, including all fields, attachments (using OCR to detect secrets within image files), and comments. A comprehensive initial scan analyzes all existing Jira content, and any detected secrets are presented with detailed context to help you understand and fix the issue quickly.
    
*   **Confluence Data Center**: Cycode automatically scans all key content areas in Confluence, including pages, blog posts, attachments (with OCR support), and comments. A thorough initial scan detects existing secrets, and Cycode provides detailed context for every violation found.
    

This enhancement helps you proactively identify and prevent the accidental exposure of sensitive information within your Jira and Confluence environments, strengthening your overall security posture.

For more information, go to [Jira Data Center](/integrations/productivity-tools/jira-data-center) and [Confluence Data Center](/integrations/productivity-tools/confluence-data-center) .

### New Unity Version Control (formerly Plastic SCM) integration [Copied!](#new-unity-version-control-formerly-plastic-scm-integration "Copy link to this section")

We’re happy to announce the launch of our new Unity Version Control integration. This addition is designed to streamline and enhance the efficiency of local security scanning for your repositories.

Now, you can easily connect your Unity Version Control repositories to Cycode. This allows you to organize the results from your local Cycode CLI scans and directly link them to specific projects within Cycode. This integration provides you with the flexibility to scan your repositories locally while maintaining centralized visibility of your security status in Cycode.

**Key benefits**:

*   **Better organization for repositories**: Easily associate your local scan results with the relevant Cycode projects for each of your Unity Version Control repositories, keeping your security findings well-structured.
    
*   **Maximum flexibility**: Scan your repositories locally using the CLI, and enjoy centralized management in Cycode.
    

![](/assets/image-692.png)

For more information, go to [Unity Version Control](/integrations/scm-source-code-management-tools/unity-version-control-formerly-plastic-scm) .

### On-demand scan for Docker images [Copied!](#on-demand-scan-for-docker-images "Copy link to this section")

You can now perform on-demand scans in Cycode on specific container images. This new capability in the on-demand scan page enables performing targeted scans as needed on individual container images, for the purpose of immediately identifying potential security issues.

![](/assets/image-693.png)

For more information, go to [Create an on-demand scan](/scanners/manage-the-scanners/create-an-on-demand-scan) .

### New Secrets dashboard [Copied!](#new-secrets-dashboard "Copy link to this section")

We’re happy to announce the Secrets dashboard, designed to provide a comprehensive and actionable overview of secrets detected across your environment.

With the Secrets dashboard, you can:

*   **Gain full visibility** – View all detected secrets and their distribution across your software delivery pipeline.
    
*   **Assess risk and exposure** – Identify top at-risk, active, publicly exposed, and propagated secrets across multiple SDLC stages.
    
*   **Measure and improve response time** – Track and optimize Mean Time to Resolve (MTTR) for secret violations.
    
*   **Enhance your security posture** – Monitor secret scanning coverage and enforce security policies by blocking pull requests.
    

By default, data is displayed by risk. For deeper insights, toggle the dashboard view to display by severity.

For more information, go to [Secrets dashboard](/dashboards/scanner-dashboards/secrets-dashboard) .

### New Veracode connector [Copied!](#new-veracode-connector "Copy link to this section")

Cycode is pleased to announced that our Veracode connector is now available.

This latest integration allows Cycode to seamlessly pull Software Composition Analysis (SCA) and Static Application Security Testing (SAST) data directly from Veracode, to provide you with a more comprehensive understanding of security weaknesses within your application code. The Veracode connector not only imports vulnerabilities but also maps their potential impact, so security teams can quickly identify the origin of risks within your code repositories and accelerate the remediation process.

This integration with Veracode’s robust SCA and SAST findings further strengthens Cycode’s capabilities to identify, analyze, and address application security threats in a streamlined manner.

For more information, go to [Veracode](/integrations/security-tools/veracode) .

### New Upwind Security connector [Copied!](#new-upwind-security-connector "Copy link to this section")

We’re pleased to announce the release of our latest container image scanning connector, Upwind.

With this new integration, you can now sync container image vulnerabilities from Upwind to Cycode, providing greater visibility into security risks. The connector allows Cycode to pull all vulnerabilities related to container images and map their exposure paths, enabling security teams to trace vulnerabilities back to their source repositories for faster remediation.

For more information, go to [Upwind](/integrations/security-tools/upwind) .

### New Projects and Groups filter [Copied!](#new-projects-and-groups-filter "Copy link to this section")

We’ve improved the project and group filtering experience with a cleaner, hierarchy-based view.

You can now explore projects and groups in a way that reflects your organization’s structure, making it easy to understand where your projects live and focus on the areas most relevant to you.

This update helps streamline navigation and simplifies filtering, especially in large or complex environments.

![](/assets/image-685.png)

### Discover APIs and sensitive data with Code Context Analysis [Copied!](#discover-apis-and-sensitive-data-with-code-context-analysis "Copy link to this section")

We’re happy to announce a new scanner, Code Context Analysis, to provide deeper insights into your applications.

*   **Discover Exposed APIs**: You can now automatically identify all APIs exposed by your application code. Review this API inventory directly under “Inventory > Application Insights > APIs”.
    
*   **Identify Sensitive Data**: This scanner also helps surface potential PII, PHI, and Personal Data processed within your applications. To review this, go to the Inventory, open a specific Repository card, and look under the “Inventory > Sensitive Data” tab.
    

The Code Context Analysis scanner automatically evaluates every new code commit made to your main branch. You can also perform a full retroactive scan on your application using the “On Demand Scan” functionality and selecting “Code Context Analysis”.

For more information, go to [Inventory > APIs.](/context-intelligence-graph/inventory/application-insights/apis)

### Scheduled PDF reports for dashboards [Copied!](#scheduled-pdf-reports-for-dashboards "Copy link to this section")

You can now schedule PDF reports of dashboards and send them via email or other supported tools. This feature includes options for filters, delivery method (link or attachment via email), and supports the standard scheduling mechanism.

## March 2025 [Copied!](#march-2025 "Copy link to this section")

### New trigger for workflow automation [Copied!](#new-trigger-for-workflow-automation "Copy link to this section")

We’ve introduced a new trigger in Workflows called **New Repository Created**. Use this trigger when you want users to automatically receive alerts via Slack, email, or other supported channels when a new repository is created.

This is the first Context Intelligence Graph event trigger that isn’t related to a violation, and more are planned in the future to expand the Cycode workflow automation capabilities.

For details about configuring workflows, go to [Workflow Automation](/workflow-automation/) .

### Workflows and Classification Rules merged into unified Workflows view [Copied!](#workflows-and-classification-rules-merged-into-unified-workflows-view "Copy link to this section")

Users can now handle all automation tasks from a single view in Cycode. Classification Rules as a term has been retired, and all automation activities are handled as workflows. We also updated the Workflows view with additional data and new filter options so you can further customize the information you see in the Workflows table.

![](/assets/image-680.png)

For details, go to [Workflow automation](/workflow-automation/) .

### New custom connector for in-house security tools [Copied!](#new-custom-connector-for-in-house-security-tools "Copy link to this section")

We’re excited to introduce the Cycode custom connector that allows seamless integration of your in-house security tools, including SCA, SAST, and DAST security features.

With this new connector, you can efficiently sync security violations from your custom tools while ensuring accurate tracking of status changes. The delta sync mechanism ensures that violations are updated only when their status changes in the source system, so if a violation is marked as Resolved in your tool, it will be resolved in Cycode automatically.

This new capability enhances visibility and control over security risks, allowing for smarter, streamlined vulnerability management within your organization.

![](/assets/image-679.png)

For details, go to [Custom connector](/integrations/security-tools/create-a-custom-connector/) .

### Expanded functionality for Snyk connector [Copied!](#expanded-functionality-for-snyk-connector "Copy link to this section")

We’re pleased to announce that Cycode’s Snyk connector can now pull SAST vulnerabilities, in addition to the existing SCA functionality.

With this enhancement, Cycode can now fetch SAST-related findings alongside SCA data, providing a more comprehensive security overview. This update allows teams to use Cycode to gain deeper insights into security risks, so they can identify and mitigate vulnerabilities within their codebase.

![](/assets/image-678.png)

For details, go to [Snyk](/integrations/security-tools/snyk) .

### New CrowdStrike connector [Copied!](#new-crowdstrike-connector "Copy link to this section")

We’re pleased to announce the release of our latest container image scanning connector, CrowdStrike.

With this new integration, you can now sync container image vulnerabilities from CrowdStrike to Cycode, providing greater visibility into security risks. The connector allows Cycode to pull all vulnerabilities related to container images and map their exposure paths, enabling security teams to trace vulnerabilities back to their source repositories for faster remediation.

![](/assets/image-676.png)

### New Secure Code Warrior connector [Copied!](#new-secure-code-warrior-connector "Copy link to this section")

We’re excited to announce that you can now integrate Secure Code Warrior into your security and development workflow. With this new integration, you can seamlessly apply Secure Code Warrior’s educational video content directly in your SAST remediation guidelines, providing relevant, actionable insights to enhance secure coding practices.

![](/assets/asset-161.png)

Note

You don’t need a Secure Code Warrior license to access their video content. A license is only needed to get full access to their interactive exercise platform.

For more information, go to [Secure Code Warrior](/integrations/security-tools/secure-code-warrior) .

### Beta release of our new SAST engine for Java [Copied!](#beta-release-of-our-new-sast-engine-for-java "Copy link to this section")

Cycode is happy to announce the beta release of our new SAST engine for Java, which brings source-to-sink data flow analysis to help you remediate SAST violations faster with greater confidence and context. This new engine marks a significant leap in precision, dramatically reducing false positives while maintaining best-in-class speed.

**Key Improvements**:

*   Only 2.1% false positives in the OWASP industry benchmark
    
*   Very high recall rate (75%) for true positives, ensuring accurate detection
    
*   Same fast scanner you already know
    

To get early access, contact your CSM or our Support team and we’ll enable it for your tenant.

## February 2025 [Copied!](#february-2025 "Copy link to this section")

### New connector with Salt [Copied!](#new-connector-with-salt "Copy link to this section")

Cycode is pleased to announced that our Salt connector is now available as part of our ASPM platform. This new connector with Salt allows users to retrieve API security vulnerabilities and correlate them with Cycode results.

The new connector is available to all customers. We always welcome feedback about our connectors when you start using it.

![](/assets/image-675.png)

For details, go to the [Salt](/integrations/security-tools/salt) connector topic.

### Inventory > Repository page enhancements [Copied!](#inventory--repository-page-enhancements "Copy link to this section")

The **Inventory** > **Repository** page was updated with the following enhancements:

*   **New widgets**: Labels, Primary Language, and Visibility – all clickable and usable as quick filters.

![](/assets/image-665.png)

*   **Better table handling**: Tables now have horizontal scrolling, so you can add more columns without squeezing the view.
    
*   **New filters**: You can filter the view by **Last Commit** and **Security Tool** for better drill-down.
    

*   **Security Coverage column**: See coverage status at a glance.

![](/assets/image-670.png)

*   **Labels column enhancement**: Hover over the label to see the source (**SCM**, **Cycode**, or **Custom**).

### Enhanced Violations page with smarter, interactive widgets [Copied!](#enhanced-violations-page-with-smarter-interactive-widgets "Copy link to this section")

*   **Total** widget removed – We’ve improved the interface by removing the **Total** widget, making room for more dynamic and useful tools.
    
*   New **Detection Time** widget with interactive slider – Easily adjust the detection timeframe to analyze trends over different periods.
    
*   Refactored **Violations by Risk** widget – Now called **Risk Score** and featuring an interactive slider, allowing for seamless filtering.
    

#### Why this matters [Copied!](#why-this-matters "Copy link to this section")

These enhancements aren’t just about a fresh look—they help you understand your security posture faster and more efficiently:

*   Quickly track trends with more interactive filtering options.
    
*   Filter by risk level and detection date in just one click.
    
*   Get a clearer view of violation counts and streamline triage with enhanced insights.
    

![](/assets/dynamic-widgets.png)

### Improved Custom Policies user experience [Copied!](#improved-custom-policies-user-experience "Copy link to this section")

We’ve updated the **Custom Policies** experience in Cycode with a new, improved user interface and enhanced user flow. Additionally, the Secret Detection team has released AI-powered regex generation to simplify the creation of highly accurate, secret detection patterns.

**What’s Improved?**

*   **Updated UI** – A clearer, more structured layout for better navigation.
    
*   **Simplified policy creation** – Fewer steps and a more guided setup process.
    

![Image #1](/assets/asset-154.png)

![Image #2](/assets/asset-154.png)

*   **AI-powered secret regex detection** – Automatically generate optimized regex patterns for detecting secrets, reducing false positives, and improving accuracy.

![Image #3](/assets/asset-154.png)

*   **Smoother editing and updates** – Quickly modify and refine policies as needed.

These changes enhance usability and ensure a more seamless experience when working with custom policies.

### New GitHub CodeQL connector [Copied!](#new-github-codeql-connector "Copy link to this section")

A GitHub CodeQL connector is now available on the Cycode platform. Using this connector, you can view SAST vulnerabilities in GitHub Advanced Security (GHAS) with minimal configuration.

1.  Find the connector in the Integrations page.![](/assets/gh-codehq-connector1.png)
    
2.  Select the organization and sync your data with the Cycode platform.![](/assets/gh-codehq-connector2.png)
    
3.  View violations in the dashboard.![](/assets/gh-codehq-connector3.png)
    

Read more about the GitHub CodeQL connector: [GitHub CodeQL](/integrations/security-tools/github-advanced-security)

### Introducing the new ASPM dashboards [Copied!](#introducing-the-new-aspm-dashboards "Copy link to this section")

Cycode’s ASPM dashboards are here to transform how you manage your security posture. Designed to provide clear, actionable insights, they help you understand your security landscape, focus on what matters most, and track your progress.

Discover three dashboards, each with a distinct purpose:

*   **Visibility** dashboard provides a comprehensive view of your security environment, offering clarity on integrations, scanner health, risk exposure, and technologies to keep you informed at a glance.
    
*   **Prioritization** dashboard helps cut through the noise, highlighting the most critical risks based on severity, categories, and trends, so you can take decisive action where it counts.
    
*   **Remediation** dashboard tracks your progress in addressing security issues, with insights into remediation performance, MTTR, and compliance status to help measure effectiveness over time.
    

Explore now to gain full visibility, smarter prioritization, and effective remediation—all in one place.

![](/assets/beamer-dash.png)

## January 2025 [Copied!](#january-2025 "Copy link to this section")

### Enhanced AWS Managed Policy Asset Card [Copied!](#enhanced-aws-managed-policy-asset-card "Copy link to this section")

We’ve expanded our AWS Managed Policies syncing to **include full policy content**, not just metadata.

**Why does this matter?** With this update, you now get:

*   **Deeper Visibility** – See exactly what permissions and resource access are granted, not just high-level metadata.
    
*   **Better Policy Control** – Use this data to create custom policies that align with your security and compliance needs.
    

This is a key step toward strengthening our NHI capabilities and improving Discovery, Visibility, and Policy Management to help you secure your AWS environment more effectively.

![](/assets/screenshot-2025-02-03-at-17-02-12.png)

### GitHub Custom Properties as Cycode Labels is now available! [Copied!](#github-custom-properties-as-cycode-labels-is-now-available "Copy link to this section")

You can now leverage **GitHub repository data to enrich Cycode repository labels**, allowing for even better automation rules.

How It Works:

*   Similar to GitHub Topics, **Custom Properties** are stored as **key:value pairs**.
    
*   These properties will be displayed under the **repository as labels in Cycode**.
    
*   Custom Properties will **propagate to violations**, enabling better filtering and automation.
    

This enhancement makes it easier to categorize, manage, and enforce security policies based on your repository metadata.

### Project Creation with Labels [Copied!](#project-creation-with-labels "Copy link to this section")

### We’re introducing enhanced options for project creation in Cycode! Now, there are two options for Cycode project creation: [Copied!](#were-introducing-enhanced-options-for-project-creation-in-cycode-now-there-are-two-options-for-cycode-project-creation "Copy link to this section")

1.  **Follow Best Practices** – Create projects by selecting assets Cycode identifies (repos, orgs, cloud accounts, etc.).
    
2.  **\[New\] Use Labels** – Build projects based on real-time synced labels from SCM/CMDB, manually labeled assets, or Cycode automation (e.g., classification rules).
    

This update supports use cases like Monorepos, branch-based projects, production-labeled assets, and more.

**Note:** All labels are displayed, even if unassociated with assets or violations, ensuring full coverage transparency.

![](/assets/feature-request-picture-1.png)

### New Permissions for Cycode GitHub App [Copied!](#new-permissions-for-cycode-github-app "Copy link to this section")

In the coming weeks, you’ll receive a GitHub notification requesting approval for additional permissions for the Cycode App:

*   **Organization Permissions**: _**Secrets (Read)**_ – Access to organization build workflow secrets.
    
*   **Organization Permissions**: _**Personal Access Tokens (Read)**_ – Access to fine-grained tokens.
    
*   **Organization Permissions**: _**Custom properties (Read)**_ — Access organization custom properties.
    
*   **Repository Permissions**: _**Code scanning alerts (Read)**_ — Access CodeQL scanning alerts.
    
*   **Repository Permissions**: _**Custom properties (Read)**_ — Access repository custom properties.
    

### Why Approve These Permissions? [Copied!](#why-approve-these-permissions "Copy link to this section")

By granting these permissions, you will enable our **new Nonhuman Identity (NHI) capabilities**, supporting interaction with our **new CodeQL connector**, and enrich repository labels with **GitHub custom properties**, providing the necessary data to enhance discovery and visibility across your GitHub environment:

*   **Comprehensive Discovery**: A complete inventory of nonhuman identities, including secrets and fine-grained tokens, across your GitHub environment.
    
*   **Enhanced Visibility**: Detailed insights into where and how secrets and tokens are used.
    
*   **CodeQL Security Connector**: Integrate GitHub code scanning alerts as part of Cycode SAST violations.
    
*   **Repository Custom Properties:** Leverage GitHub data to enrich Cycode repository labels, enabling more precise automation rules.
    

![](/assets/screenshot-2025-01-27-at-14-59-24.png)

### Enhanced Classification Rules on the Automation Canvas [Copied!](#enhanced-classification-rules-on-the-automation-canvas "Copy link to this section")

We’ve integrated classification rules into the **Automation Canvas** to provide a more intuitive and streamlined experience!

You can now seamlessly edit all your existing classification rules or create new ones directly on the enhanced canvas.

As a reminder, classification rules are Cycode’s powerful rule engine that empowers you to customize and optimize prioritization. These rules can influence risk scores, update violation statuses, or assign custom labels aligning with your specific requirements.

The rule creation process follows a straightforward flow: For every _**violation**_, if _**conditions**_are met, execute the defined _**actions**_.

This enhancement gives you complete control over your data, tailored to your unique needs.

![](/assets/feature-request-picture.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
