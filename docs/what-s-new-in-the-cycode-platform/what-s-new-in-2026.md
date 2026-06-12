# What's new in 2026 | Cycode Docs

Source: https://docs.cycode.com/what-s-new-in-the-cycode-platform/what-s-new-in-2026

---

# What's new in 2026

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/what-s-new-in-the-cycode-platform/what-s-new-in-2026.md "Edit this page")

Updated on May 28, 2026 • Published on Dec 22, 2025

* * *

## June 2026 [Copied!](#june-2026 "Copy link to this section")

### Analytics-powered widgets and filters in grouped Violations views [Copied!](#analytics-powered-widgets-and-filters-in-grouped-violations-views "Copy link to this section")

The grouped ‘Group By’ views in the Violations page (every option except ‘None’) are now fully powered by Cycode’s analytics engine. In addition to the violations table, the widgets above the table and the page filters now draw from the same analytics-oriented data layer.

Previously, only the table was analytics-powered while the widgets and filters reflected real-time data, which could cause minor mismatches between them. Now that the table, widgets, and filters all use the same source, the numbers stay consistent across the grouped view. Group By ‘None’ continues to show live, instant data whenever you need the most up-to-date, point-in-time view.

Because grouped views operate in near real time, they may differ slightly from Group By ‘None’ until the analytics engine finishes processing the latest changes. This capability is being rolled out gradually and may not yet be available in every environment.

For more information, go to [Understanding ‘Group By’ views](/view-and-manage-violations/understanding-group-by-views/) .

### AI Guardrails now support Codex [Copied!](#ai-guardrails-now-support-codex "Copy link to this section")

Cycode AI Guardrails now extend real-time interception and secret-leak prevention to **OpenAI Codex**, in addition to the existing support for Claude Code and Cursor. Prompts sent to the LLM and MCP tool invocations are scanned **for hardcoded secrets** before they leave the local environment, and any detected secret can be reported or blocked. This gives security teams the same visibility into Codex usage they already have for other AI coding agents.

File read scanning is not available for Codex, because Codex does not expose a file read hook. Secret scanning of prompts and MCP tool calls works the same as it does for Claude Code and Cursor.

Note

Codex support requires Cycode CLI version **3.16.0** or later. Upgrade the CLI before installing AI Guardrails for Codex.

For more information, go to [AI Guardrails](/scanners/adlc-security/ai-guardrails/) .

## May 2026 [Copied!](#may-2026 "Copy link to this section")

### SCM Logs for end-to-end SCM event visibility [Copied!](#scm-logs-for-end-to-end-scm-event-visibility "Copy link to this section")

Owners and Admins can now use **SCM Logs** to inspect and validate the raw SCM events Cycode receives from connected providers, including GitHub, GitLab, Bitbucket, and Azure DevOps. It provides centralized visibility into commits, pushes, pull request updates, repository changes, and other webhook activity across your connected SCM environments.

Key capabilities include:

*   Event volume visualization over time.
    
*   Advanced filtering by SCM provider, organization, repository, branch, actor, and event type.
    
*   Free-text search across the full content of every event, including the raw webhook payload.
    
*   Full raw webhook payload inspection.
    
*   CSV export for offline analysis and sharing.
    

The histogram and event table stay synchronized, making it easier to investigate integration issues, identify delivery gaps, and validate SCM connectivity.

To access SCM Logs, go to **Settings** > **Activity** > **SCM Logs**.

For more information, go to [SCM Logs](/cycode-settings/scm-logs) .

### Scope Cycode projects to Atlassian instances [Copied!](#scope-cycode-projects-to-atlassian-instances "Copy link to this section")

Cycode now lets you group Atlassian assets into Cycode projects to make ownership of secret-detection violations explicit. When you create a project, you can select Atlassian Cloud sites and Data Center instances as part of the project scope, so the violations detected in those assets are assigned to the project and its members are responsible for remediating them.

The following Atlassian asset sources are available in the project **Scope** step:

*   Jira Cloud
*   Jira Data Center
*   Confluence Cloud
*   Confluence Data Center

For more information, go to [Create and configure a project](/cycode-projects/create-and-configure-a-project/) .

### Cursor developer activity now includes Skills and MCP usage [Copied!](#cursor-developer-activity-now-includes-skills-and-mcp-usage "Copy link to this section")

Cycode extends the Cursor integration with deeper visibility into how each developer uses AI code agents. For tenants on the Cursor **Enterprise** plan, the developer card on the AI Developers Usage page now also shows the skills the developer invoked from Cursor and the MCP servers they called during the selected date range.

*   **Skills executed** — Each skill is listed with its execution count. Click a skill name to jump to the Skills inventory filtered by that skill across all repositories where it is defined.
    
*   **MCP servers** — Each server shows the total calls and the specific tools used with per-tool call counts. When Cycode can correlate the server with the MCP inventory by endpoint, the entry also shows the authorization status and a direct link to the MCP inventory card.
    

The developer card was also reorganized: the previous **Overview** tab is replaced with one tab per code agent, so you can switch directly between Cursor, Anthropic Console, and any other connected agent.

For more information, go to [AI Developers Usage](/developer-experience/security-administrators/monitor-developer-activity/ai-developers-usage) .

### New integration: GitGuardian [Copied!](#new-integration-gitguardian "Copy link to this section")

Cycode now integrates with GitGuardian to surface detected code secrets. Once enabled, this integration provides visibility into various secret types and their specific locations.

*   Detected secrets policies covering JSON Web Tokens, password secrets, private keys, and much more are included out of the box.
*   Drill into any detected instance to view the specific file path, repository, and exact line where a secret was found.

For more information, go to [GitGuardian](/integrations/security-tools/gitguardian) .

### SAST engine for C# is GA [Copied!](#sast-engine-for-c-is-ga "Copy link to this section")

We’re happy to announce the general availability release of our new SAST engine for C#, featuring source-to-sink data flow analysis that helps you remediate issues faster with greater accuracy, confidence, and context. Cycode’s updated engine provides a significant enhancement in accuracy, greatly minimizing false positives while preserving top-tier scanning speed.

To enable this new engine, go to **Settings** > **SAST** > **Scanning configuration** and enable the **C#** option.

For more information, go to [SAST scanning configuration](/scanners/ast-application-security-testing/sast-static-application-security-testing/configure-the-sast-scanner/sast-scanning-configuration) .

### Repository Composition Analysis [Copied!](#repository-composition-analysis "Copy link to this section")

The repository card’s **Overview tab** now includes a **Composition** section that gives you complete visibility into your codebase structure at a glance.

*   **Language chart** — a dynamic visual breakdown of every language in the repository for instant architectural context.
*   **Granular metrics** — exact file counts and lines of code per language across your entire codebase.

For more information, go to [Repositories](/inventory/code-entities/repositories) .

### Govern AI models and MCPs across your ADLC [Copied!](#govern-ai-models-and-mcps-across-your-adlc "Copy link to this section")

Shadow AI is everywhere — developers pull models from Hugging Face, wire up MCP servers in their IDE, and ship before security knows the tool exists. Cycode’s new Authorization status for models and MCPs gives you a single source of truth for which AI assets are sanctioned in your environment.

*   Authorization status on every discovered model and MCP — Not Reviewed, Authorized, or Unauthorized.
    
*   Automatic violations the moment an asset is marked Unauthorized — no toggle, no delay. Backfilled across all existing detections.
    
*   Auto-resolution when you reverse a decision: open violations close automatically with a clear status change message.
    
*   Full audit trail under **Settings** > **Audit Logs** for every authorization change and every resulting violation lifecycle event.
    
*   Bulk classification to onboard quickly — review a family of related assets in one action.
    

Available now under ADLC Security. For more information, go to [Policy control for MCP and model usage](/scanners/adlc-security/policy-control-for-mcp-and-model-usage/) .

### Deployed label runtime context now available for Tenable Cloud Security [Copied!](#deployed-label-runtime-context-now-available-for-tenable-cloud-security "Copy link to this section")

Cycode now supports deployed label runtime context for the Tenable Cloud Security integration. After connecting Tenable Cloud Security, you can filter container security violations and images by the **Deployed** label to focus on images actively running in your environment.

For more information, go to [Tenable Cloud Security](/integrations/security-tools/tenable-cloud-security) .

### GitHub issue tracking now supports GitHub Enterprise [Copied!](#github-issue-tracking-now-supports-github-enterprise "Copy link to this section")

Cycode’s GitHub issue tracking integration now supports GitHub Enterprise. You can create GitHub issues from Cycode violations and use GitHub issue tracking in automated workflows, whether your organization uses GitHub Cloud or GitHub Enterprise.

For more information, go to [GitHub issue tracking](/integrations/issue-tracking-ticketing-tools/github-issue-tracking) .

## April 2026 [Copied!](#april-2026 "Copy link to this section")

### Introducing Maestro: the AI agent orchestrator [Copied!](#introducing-maestro-the-ai-agent-orchestrator "Copy link to this section")

Cycode is excited to introduce Maestro, an AI-powered orchestrator that coordinates specialized security agents to deliver faster, deeper, and more actionable results across your security posture. Instead of navigating between separate tools, you get a unified chat experience powered by purpose-built agents working together.

With Maestro, you can:

*   Query the [Context Intelligence Graph](/context-intelligence-graph/) in plain language to surface asset relationships, risk posture, and aggregate insights (admin only).
    
*   Investigate vulnerabilities, secrets, IaC violations, and SAST/DAST findings within a specific repository.
    
*   Get a structured profile of any repository’s purpose, technology stack, dependencies, and deployed applications.
    
*   Run [CVE analysis](/cycode-ai/cve-analysis/) for any CVE — severity, exploit details, and mitigation strategies aggregated from multiple sources.
    
*   Run [exploitability analysis](/cycode-ai/exploitability-analysis/) to determine whether SAST, SCA, and IaC vulnerabilities are actually reachable in your codebase.
    
*   Generate AI-powered remediations for SAST, IaC, and container security violations.
    
*   Search and filter detections across all scanner categories.
    

A new [AI usage dashboard](/cycode-ai/usage-dashboard/) gives you full visibility into your organization’s AI consumption — token usage, agent activity, and spending across your team.

Every organization receives a complimentary AI package — starting at **50 million tokens per month**, with complete ASPM tenants on the pro tier at **100 million tokens per month** at no additional cost. If you need more capacity, contact your Cycode account team to upgrade to a higher AI tier.

Maestro is being rolled out gradually. Once enabled for your organization, all AI agents and capabilities become available immediately.

For more information, go to [Maestro](/cycode-ai/maestro/) .

### Beta release of our new SAST engine for C# [Copied!](#beta-release-of-our-new-sast-engine-for-c "Copy link to this section")

We’re happy to announce the beta release of our new SAST engine for C#, featuring source-to-sink data flow analysis that helps you remediate issues faster, with greater accuracy, confidence, and context.

This new engine delivers a major improvement in precision, significantly reducing false positives while maintaining best-in-class scanning speed.

To enable public preview, go to **Settings** > **SAST** > **Scanning configuration** and enable the **C#** option.

### Project leaderboard [Copied!](#project-leaderboard "Copy link to this section")

The Projects view now contains a leaderboard where you can compare security performance across projects with summary widgets, quick sort presets, and a sortable project table. See top performers, highest risk projects, SLA breaches, and trending improvements at a glance.

### Adjust weights for built-in risk factors in risk score formulas [Copied!](#adjust-weights-for-built-in-risk-factors-in-risk-score-formulas "Copy link to this section")

You can now customize the weights of built-in risk factors when configuring a risk score formula. Previously, built-in factors had fixed weights. With this update, you can adjust the weight of any existing risk factor to better reflect your organization’s security priorities and scoring logic. Weight values can be set within a range of **\- 1** to **1**.

For more information, go to [Manage risk score formulas](/additional-cycode-features/cycode-risk-score/manage-risk-score-formulas#modify-the-risk-score-formula) .

### New integration: Akamai WAF [Copied!](#new-integration-akamai-waf "Copy link to this section")

Cycode now integrates with Akamai WAF, enhancing your API Security capabilities by bringing Akamai WAF event data directly into the platform.

*   Transform raw Akamai WAF events into actionable signals through intelligent aggregation, grouping violations to eliminate noise.
    
*   Investigate Akamai WAF violations end-to-end within the API Security dashboard, with policies mapping directly to WAF rules.
    
*   Gain comprehensive context, including WAF Rule ID, action taken, and source IP. Leverage advanced querying for powerful runtime-to-code correlation.
    
*   Prioritize triage by filtering violations based on Akamai data, focusing on critical incidents like those on PII-handling endpoints.
    
*   Automatically detect which domains are proxied through Akamai, providing a clear overview of protected and unprotected assets.
    

For more information, go to [Akamai WAF](/integrations/security-tools/akamai-waf) .

### Enhanced Wiz integration: external exposure and internet exposure signal [Copied!](#enhanced-wiz-integration-external-exposure-and-internet-exposure-signal "Copy link to this section")

The Wiz integration now provides more critical context for container security findings. Cycode automatically enriches findings with Wiz internet-exposed labels and security graph exposure data, enabling you to:

*   Triage by exposure risk directly from Wiz.
    
*   Understand why container image violations are internet-exposed, with Wiz’s exposure path.
    
*   Utilize essential runtime context to influence risk scores and streamline prioritization of code violations.
    

For more information, go to [Wiz](/integrations/security-tools/wiz) .

### Manual webhook alert creation with custom assignee field [Copied!](#manual-webhook-alert-creation-with-custom-assignee-field "Copy link to this section")

You can now manually create webhook alerts, including an option to define a custom assignee field with a list of assignee emails. This provides a more direct way to integrate Cycode alerts with external systems that track violations via webhooks.

### New integration: StackHawk connector [Copied!](#new-integration-stackhawk-connector "Copy link to this section")

Cycode now supports integrating with StackHawk, a developer-focused DAST platform. With this connector you can:

*   Pull StackHawk DAST vulnerabilities directly into Cycode to leverage full ASPM capabilities.
    
*   Identify and resolve vulnerabilities in web applications, APIs, and microservices more efficiently with code context.
    

For more information, go to [StackHawk](/integrations/security-tools/stackhawk) .

### Reports page redesign [Copied!](#reports-page-redesign "Copy link to this section")

The **Reports** page has a fresh look and new capabilities to help you get more out of your reports.

What’s changed:

*   See the big picture - new summary metrics at the top of the page show how many reports you have, what types they are, and how they’re scheduled.
    
*   Click any report for full details - a new details view opens with settings, recipients, scheduling status, edit actions, and an audit log of key changes.
    
*   Generation history - every report now keeps a history of its generation runs, showing who triggered each run and when, with the option to download previous versions.
    
*   Refreshed table, report types, and Create Report wizard - updated design system, clearer icons, names, and descriptions, and a more intuitive report type selection step.
    

For more information, go to [Generate a report](/additional-cycode-features/generate-a-report) .

## March 2026 [Copied!](#march-2026 "Copy link to this section")

### New SAST scanner capabilities [Copied!](#new-sast-scanner-capabilities "Copy link to this section")

**Languages**

*   Rust is now available for SAST scanning in Cycode. Enable the language in the SAST scanning configuration settings to start detecting vulnerabilities in your Rust codebases.
    
*   You can control which languages are active in your SAST scans, including whether newly released languages are applied by default, so your scan results never change unexpectedly.
    

**Policies**

*   Cycode’s SAST policies are now classified against the OWASP Top 10 2025. New filters are available in the SAST dashboard and violation views, along with a set of new policies aligned to the updated standard.
    
*   You can control whether newly released SAST policies are applied by default, so your scan results never change unexpectedly.
    

For more information about all new features, go to [SAST scanning configuration](/scanners/ast-application-security-testing/sast-static-application-security-testing/configure-the-sast-scanner/sast-scanning-configuration) .

### New ADLC Security module [Copied!](#new-adlc-security-module "Copy link to this section")

The new ADLC Security module brings all AI-related violations into a single, focused view so you can find and fix them faster.

*   The ADLC Security view automatically aggregates violations detected by your existing SAST and Secrets scanners that involve AI tools.
    
*   A new ADLC Security Risk filter is available in the All Violations view, making it easy to identify AI-related risks across all your violations.
    
*   Create tailored detection rules by adding a custom policy under the ADLC Security policy type in the Policies view.
    
*   A new ADLC Security policy type is now available in the Policies view so you can craft tailored policies using query rules via Cycode’s Context Intelligence Graph.
    

For more information, go to [ADLC security](/scanners/adlc-security/) .

### Always-synced role management with SCIM-based group provisioning [Copied!](#always-synced-role-management-with-scim-based-group-provisioning "Copy link to this section")

Cycode now supports role assignment using your IdP groups that are synced via SCIM. This extends our existing SSO role mapping capability with continuous synchronization.

With SSO role mapping, roles are assigned when members sign in to Cycode. With SCIM group provisioning, role changes take effect as soon as group membership changes in your IdP without requiring a new sign-in action. Organizations can map IdP groups to Cycode roles once, and these assignments stay current automatically.

For more information, go to [SCIM user and group provisioning](/cycode-settings/user-administration/single-sign-on-sso/scim-user-and-group-provisioning) .

### New ADLC security dashboards [Copied!](#new-adlc-security-dashboards "Copy link to this section")

Cycode is happy to announce the release of our ADLC security dashboards. Use these dashboards to gain full visibility and control over AI assets, repositories, and risks, all in one place.

**AI visibility dashboard**

Get a comprehensive view of AI adoption across your development environment:

*   AI inventory - all AI infrastructures, models, coding assistants, and MCPs in one categorized view.
    
*   Repository-level insights - repositories that use AI tools, code assistants, and MCPs, with top 5 rankings.
    
*   AI secrets and packages - track AI-related secrets and packages across your codebase.
    
*   Insights from Cycode AI Guardrails - actions taken on AI interactions, scan results, flagged users, MCP usage, and model usage.
    

**AI risk dashboard**

Monitor and prioritize the following AI-related security risks:

*   Violations - open AI violations by risk level and age.
    
*   Policy and CWE analysis - AI policies that were applied, associated CWEs, severity, and remediation progress.
    
*   Package and secret risks - Highest-risk AI packages with CVEs, and top AI secrets ranked by risk.
    
*   Risk rankings - Cycode projects and customer repositories ranked by AI-related risk.
    

For more information, go to [ADLC security](/dashboards/adlc-security/) dashboards.

### Reassign global roles for members in bulk [Copied!](#reassign-global-roles-for-members-in-bulk "Copy link to this section")

Organizations can now reassign all members from one global role to a different global role in bulk, directly from the Roles and Permissions view. Custom roles are fully supported as both source and destination, making it easy to transition users as your permission structure evolves. The operation is available from the role’s More actions menu.

### Discover all AI technologies in your codebase [Copied!](#discover-all-ai-technologies-in-your-codebase "Copy link to this section")

AI adoption is accelerating across engineering teams, but do you know which AI tools, models, packages, and secrets are actually in use across your repositories?

Cycode’s AI visibility enables security teams to discover and monitor all AI technologies across their codebase with the following capabilities:

*   ADLC security inventory - a dedicated view (**Inventory** > **ADLC security**) that surfaces everything, namely AI infrastructures, AI models, AI coding assistants, MCPs, AI secrets, and AI packages.
    
*   AI rule file detection - Cycode discovers AI rule files (both rule files and skills) via the Context Intelligence Graph, so you can query, track, and monitor them alongside other code entities.
    
*   AI usage per repository - drill through to any repository to see its AI footprint via the new **AI usage** tab.
    
*   Repository-level filtering - A new **AI tools** filter in the **Inventory** > **Repositories** view lets you instantly identify those repositories that contain AI technologies, making it easy to scope your AI governance efforts.
    

For more information, go to [ADLC security](/context-intelligence-graph/inventory/application-insights/adlc-security) .

### Real-time secret protection for AI coding assistants with Cycode AI Guardrails [Copied!](#real-time-secret-protection-for-ai-coding-assistants-with-cycode-ai-guardrails "Copy link to this section")

AI coding assistants have introduced new security blind spots, because secrets can leak through prompts, file contexts, and tool calls without ever touching your repository or triggering CI scanners.

Cycode AI Guardrails enables enforcing real-time security controls directly in the IDE, intercepting secrets before they leave the developer’s machine.

#### What’s protected? [Copied!](#whats-protected "Copy link to this section")

*   Prompting - catches credentials pasted into AI prompts before they’re sent to the model.
    
*   MCP tool calls - detects and blocks secrets embedded in payloads sent to external services like Jira, GitHub, and Slack before execution.
    
*   File reads - blocks AI agents from silently reading sensitive files (like .env) or files that contain secrets.
    

#### Enterprise-ready deployment [Copied!](#enterprise-ready-deployment "Copy link to this section")

*   Enable per repo or machine with a single CLI command
    
*   Roll out across your organization via MDM, such as Jamf or Intune
    

You can leave the default **Block** mode, or use **Report** mode for gradual adoption.

The following AI code assistants are supported:

*   Claude Code
    
*   Cursor
    

For more information, read the [blog post](https://cycode.com/blog/ai-guardrails-real-time-ide-security/) or go to [AI Guardrails](/scanners/adlc-security/ai-guardrails/) in the product docs.

### Enhanced content for single Slack alerts [Copied!](#enhanced-content-for-single-slack-alerts "Copy link to this section")

Cycode has improved Slack alert descriptions so they provide a clearer, more comprehensive view of security findings. This enhancement supports all violation types, including the following:

*   SAST
    
*   Secrets
    
*   CI/CD
    
*   SCA
    
*   IaC
    
*   Container security
    
*   API security
    
*   Cloud security
    
*   DAST
    
*   Bug bounty
    
*   Leaks
    

**Key improvements**:

*   Richer data and context - alert descriptions now include additional details that make findings more actionable.
    
*   Improved readability - content is easier to read, with cleaner formatting and structured sections.
    
*   Clear separation of information - critical details are highlighted and organized for quick reference.
    

### Graph facelift: A cleaner experience with thinking mode [Copied!](#graph-facelift-a-cleaner-experience-with-thinking-mode "Copy link to this section")

The Context Intelligence Graph user experience has been revamped with a modernized interface and improved AI query workflow.

This update introduces the following:

*   Cleaner layout
    
*   Improved navigation between AI queries and results
    
*   New thinking mode that displays the AI’s reasoning steps during query generation
    

These improvements make it easier to explore code-to-cloud relationships and understand how insights are generated.

### New integration: GitHub issue tracking [Copied!](#new-integration-github-issue-tracking "Copy link to this section")

This integration provides a seamless way to manage your security posture directly within your GitHub development environment. Key capabilities include:

*   Ability to create GitHub issues directly from Cycode violations, either manually or using automated Cycode workflows.
    
*   Rich context in your GitHub issues, offering complete visibility into all violation types.
    
*   Bi-directional status synchronization between Cycode and GitHub for streamlined remediation activities.
    

Important notes:

*   This integration requires an existing GitHub Cloud integration that is connected with the default Cycode app, either **Cycode Securit** y or **Cycode Security - EU**.
    
*   Issues can be created only for private repositories.
    
*   Only organizations that integrate using the specified Cycode apps will see the GitHub option in the Cycode interface when opening an issue from a violation.
    

For more information, go to [GitHub issue tracking](/integrations/issue-tracking-ticketing-tools/github-issue-tracking) .

### New integration: Qwiet AI for SAST and SCA [Copied!](#new-integration-qwiet-ai-for-sast-and-sca "Copy link to this section")

Cycode now supports integrating with Qwiet AI. This allows you to pull SAST and SCA vulnerabilities directly from Qwiet AI into the Cycode platform, so you can fully leverage Cycode’s ASPM capabilities.

For more information, go to [Qwiet AI](/integrations/security-tools/qwiet-ai) .

### Support for Python UV package manager (early access) [Copied!](#support-for-python-uv-package-manager-early-access "Copy link to this section")

We are pleased to introduce support for the UV package manager in our SCA engine, currently available as an early access feature. UV is rapidly becoming a standard for modern Python development due to its performance and reliability.

With this update, users can now automatically monitor UV-managed projects for vulnerabilities and license compliance issues.

Python UV support provides deep visibility by scanning both uv.lock and pyproject.toml files.

Note

The initial release focuses on standard dependency resolution, and doesn’t include support for custom sources and workspaces.

## February 2026 [Copied!](#february-2026 "Copy link to this section")

### ServiceNow Vulnerability Response app version 2 [Copied!](#servicenow-vulnerability-response-app-version-2 "Copy link to this section")

Cycode’s ServiceNow Vulnerability Response (VR) app version 2 is now live, bringing a major upgrade to the integration. This ServiceNow Marketplace app pulls data from Cycode to ServiceNow Vulnerability Response.

Version 2 provides the following enhancements:

*   Full violation coverage - expanded from secrets to support all relevant Cycode violation types:
    
    *   Secrets
    *   SCA
    *   SAST
    *   DAST
    *   API Security
    *   IaC
    *   Leaks
    *   Bug Bounty
    *   Cloud Security
    *   CI/CD Security
*   Centralized visibility - get full visibility into your Cycode findings directly within ServiceNow.
    
*   Dedicated vulnerability CMDB - leverage ServiceNow VR with structured fields, clear ownership assignment, and built-in ticket relationships.
    

The ServiceNow Vulnerability Response (VR) app is available in the [ServiceNow Marketplace](https://apprepo.service-now.com/store/app/af97a0cd1be2a210a78ca8ea234bcb55#linksAndDocuments) .

### Bitbucket read-only integration option [Copied!](#bitbucket-read-only-integration-option "Copy link to this section")

Cycode now provides a read-only option for Bitbucket integrations. This enables repository discovery, scanning, and visibility across all your workspaces without requiring write permissions.

The read-only integration option lowers onboarding friction while still providing the insights needed for security visibility and prioritization, making it easier to connect Bitbucket to Cycode in permission-sensitive environments.

For more information, go to [Bitbucket](/integrations/scm-source-code-management-tools/bitbucket) .

### Enhanced commit attribution [Copied!](#enhanced-commit-attribution "Copy link to this section")

Cycode has improved the accuracy of security violations by enhancing the attribution of affected commits. Security results are now directly linked to specific commits and authors to provide clearer visibility into when a violation was introduced, and by whom.

This additional data can be viewed in the violation cards for SAST and IaC violations.

### Bearer SAST engine improvements [Copied!](#bearer-sast-engine-improvements "Copy link to this section")

Cycode has made some technical improvements and optimizations to the original Bearer SAST engine to improve performance and increase the accuracy of the SAST scanner in detecting violations and vulnerabilities.

Note

Most users won’t notice any change. There may be small shifts in scan results, such as a small number of new violations or existing violations that no longer appear due to improved accuracy.

### SAST engine for Python is GA with new OWASP Top 10 for LLM policies [Copied!](#sast-engine-for-python-is-ga-with-new-owasp-top-10-for-llm-policies "Copy link to this section")

We’re happy to announce the general availability release of our new SAST engine for Python, featuring source-to-sink data flow analysis that helps you remediate issues faster with greater accuracy, confidence, and context. Cycode’s updated engine provides a significant enhancement in accuracy, greatly minimizing false positives while preserving top-tier scanning speed.

Additionally, we’re launching a collection of new policies focused on the OWASP Top 10 for LLMs.

To enable this new engine, go to **Settings** > **SAST** > **Scanning configuration** and enable the **Python** option.

### New integration: GitHub Advanced Security with support for secrets [Copied!](#new-integration-github-advanced-security-with-support-for-secrets "Copy link to this section")

We are pleased to announce that the GitHub CodeQL integration has been expanded to include secrets, and is now called GitHub Advanced Security.

With this update, you can now ingest secret violations from GitHub Secret Protection, so you can view and analyze them in Cycode.

For more information, go to [GitHub Advanced Security](/integrations/security-tools/github-advanced-security)

## January 2026 [Copied!](#january-2026 "Copy link to this section")

### Enhanced violation data for Confluence Cloud and Data Center integrations [Copied!](#enhanced-violation-data-for-confluence-cloud-and-data-center-integrations "Copy link to this section")

Cycode now supports two additional violation data fields for Confluence integrations, page creator and blog creator. This helps to streamline secret remediation because remediation tasks can be sent directly to the owner of the violation source.

For more information, go to [Confluence Cloud](/integrations/productivity-tools/confluence-cloud) or [Confluence Data Center](/integrations/productivity-tools/confluence-data-center) .

### Custom global roles with custom permissions [Copied!](#custom-global-roles-with-custom-permissions "Copy link to this section")

You can now define and assign custom global roles in Cycode to better align access control with your organizational requirements. Custom global roles enable more precise, least-privilege access across the platform.

Administrators can do the following:

*   Create global roles with custom names and descriptions
    
*   Select from over 50 permissions, organized by group
    
*   Use search and filters to configure custom global roles efficiently
    
*   Duplicate existing global roles as a starting point
    
*   Assign global roles during user invitation or from the Members view
    

This update introduces a new Roles and Permissions page under **Settings → Member Management**, where both default and custom global roles can be managed.

For more information, go to [Global roles and permissions](/cycode-settings/user-administration/global-roles-and-permissions/) .

### Enhanced Inventory usability [Copied!](#enhanced-inventory-usability "Copy link to this section")

We’re happy to announce a significant update to the package inventory, providing a more powerful and intuitive way to manage your software supply chain. This facelift introduces a centralized dashboard to track packages by ecosystem, license, and health score across your entire organization.

Additionally, an updated package card now serves as a comprehensive command center for package investigation. Users can access detailed risk analysis powered by AI summaries, CVSS, and EPSS scores, alongside a clear view of every package location and its dependency type. Additionally, the new **Remediation** tab simplifies the patching process by automatically identifying the most efficient upgrade paths to resolve multiple vulnerabilities at once.

These enhancements ensure that security teams can move from discovery to remediation faster than ever before.

For more information, go to [Packages](/context-intelligence-graph/inventory/code-entities/packages) .

### SCIM-only user provisioning [Copied!](#scim-only-user-provisioning "Copy link to this section")

Cycode now supports SCIM-only user provisioning, enabling organizations to fully control the user life cycle via their identity provider (IdP).

When SCIM-only provisioning is enabled, Cycode members can be created and removed only via SCIM. Manual provisioning and bulk provisioning via CSV are disabled to ensure consistent and centralized identity management.

This update provides improved compliance and streamlined onboarding by enforcing IdP-only provisioning.

### Scoped view for projects and groups [Copied!](#scoped-view-for-projects-and-groups "Copy link to this section")

Cycode members can now view tenant data according to a single project or group.

A new project and group selector enables narrowing the scope of the platform view, which adjusts the displayed data and available actions across supported tabs. This gives users a clearer, more focused view that’s tailored to the content they need and reduces visual noise.

For more information, go to [Cycode main view](/get-started/cycode-main-view) .

### Azure DevOps: Support for Microsoft Entra ID authentication [Copied!](#azure-devops-support-for-microsoft-entra-id-authentication "Copy link to this section")

Cycode’s Azure DevOps integration now supports authentication via Microsoft Entra ID, aligning with Microsoft’s transition away from Azure DevOps OAuth apps. Tenant admins can grant consent to the Cycode Azure DevOps application, after which teams can connect and monitor selected Azure DevOps organizations as usual.

### Risk score now supports custom factors based on labels [Copied!](#risk-score-now-supports-custom-factors-based-on-labels "Copy link to this section")

You can now enhance risk score calculations by adding custom factors based on violation labels. This update allows labels to directly influence risk scoring through configurable weighting, with automatic recalculation of historical scores to keep data consistent.

This improvement provides greater flexibility and accuracy when prioritizing violations.

### EPSS filter added to SCA violations [Copied!](#epss-filter-added-to-sca-violations "Copy link to this section")

We’ve introduced a new EPSS (Exploit Prediction Scoring System) filter to the SCA violation view. This range-based filter allows users to refine vulnerability lists by specifying a percentage range (1%-100%) for EPSS scores. This enhancement enables teams to better prioritize remediation efforts by focusing on vulnerabilities with a higher probability of exploitation.

### Enhanced vulnerability prioritization with support for CVSS 4.0 [Copied!](#enhanced-vulnerability-prioritization-with-support-for-cvss-40 "Copy link to this section")

Cycode has updated its vulnerability management capabilities to include support for CVSS 4.0, the latest industry standard for assessing the severity of security vulnerabilities. This update ensures that you’re working with the most modern and precise risk scores available. By incorporating CVSS 4.0, Cycode provides a more accurate risk prioritization, allowing your teams to focus on fixing the most critical issues first.

No action is required to enable this feature, as CVSS 4.0 scores will automatically be displayed where available.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
