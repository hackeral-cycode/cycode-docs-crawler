# What's new in 2024 | Cycode Docs

Source: https://docs.cycode.com/what-s-new-in-the-cycode-platform/what-s-new-in-2024

---

# What's new in 2024

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/what-s-new-in-the-cycode-platform/what-s-new-in-2024.md "Edit this page")

Updated on Mar 23, 2025 • Published on Nov 17, 2024

* * *

## January 2024 [Copied!](#january-2024 "Copy link to this section")

### Secret detection in images using OCR [Copied!](#secret-detection-in-images-using-ocr "Copy link to this section")

We’re excited to introduce a powerful new feature to Cycode’s secrets scanner: [secret detection in images using OCR](/scanners/pipeline-security/secrets/how-does-cycode-detect-secrets/secrets-in-images-ocr) !

As users often share screenshots or other types of image files in communication tools such as Slack and Teams, these images can sometimes unknowingly expose secrets. With this update, Cycode ensures security is maintained across all file types by detecting secrets even in embedded images.

**OCR Confidence Score**: For each detected secret in an image, Cycode now displays the OCR Confidence Score, which indicates the likelihood that the OCR has accurately read and interpreted the text in the image.

**Supported image types:**

*   PNG
    
*   JPG/JPEG
    
*   SVG
    

**Supported integrations:**

*   Slack
    
*   Microsoft Teams
    

![](/assets/screenshot-2025-01-09-at-11-26-51-1.png)

### Secrets Remediation Guidelines [Copied!](#secrets-remediation-guidelines "Copy link to this section")

We’re excited to announce that **secrets remediation guidelines** are now available!

For each secret violation, Cycode now provides step-by-step instructions on how to revoke the secret. The guidelines are tailored based on the secret type (policy), offering more precise guidance for remediation.

### Where to Find the Guidelines: [Copied!](#where-to-find-the-guidelines "Copy link to this section")

*   **Violation Card**: Under the **Remediation** tab.
    
*   **PR Comments**: To provide developers with immediate help when a secret is introduced.
    

![](/assets/screenshot-2024-12-22-at-14-58-43.png)

## December 2024 [Copied!](#december-2024 "Copy link to this section")

### AI remediation directly in the IDE [Copied!](#ai-remediation-directly-in-the-ide "Copy link to this section")

**Here’s how it works**:

1.  As part of Cycode IDE violation card, a new “Generate AI Remediation” button is available.
    
2.  Developers can then trigger the AI Assistant by using a new “Generate AI Remediation”.
    
3.  The AI responds with a tailored vulnerability explanation, remediation instructions, and sometimes, a suggested fix.
    

It’s that simple!

_Note: This feature is available across all our IDE plugins, including VS Code, Visual Studio, and JetBrains._

![](/assets/image-26.png)

### Dynamic range filter for violations’ risk score [Copied!](#dynamic-range-filter-for-violations-risk-score "Copy link to this section")

We’ve replaced the risk score filter on violation page with a newer and dynamic range filter.

![](/assets/image-652.png)

### Introducing Cycode’s Technologies: Unparalleled visibility across your SDLC [Copied!](#introducing-cycodes-technologies-unparalleled-visibility-across-your-sdlc "Copy link to this section")

We’re excited to announce the release of [Cycode’s Technologies in our Inventory function](/context-intelligence-graph/inventory/application-insights/) , providing comprehensive visibility into the tools and technologies driving your Software Development Lifecycle (SDLC). This feature identifies tools in use, maps their roles within the SDLC, and ensures that only approved repositories and teams utilize them, while uncovering unauthorized “shadow tools” that may compromise security and compliance.

By mapping technology usage from development through deployment, Cycode’s Technologies highlight the unique security and compliance needs of tools, such as distinguishing between services used in the build phase versus production. As part of Cycode’s Complete ASPM solution, Technologies enhance control and oversight by offering end-to-end visibility into every tool, framework, and service, along with clear ownership assignments. This empowers organizations to make data-driven decisions, close security gaps, and maintain compliance across their entire ecosystem.

![](/assets/image-649.png)

### New Developer Role in Cycode [Copied!](#new-developer-role-in-cycode "Copy link to this section")

**What Is the Goal of This Role?**

The Developer role is created for customers who aim to bring developers into the Cycode platform while maintaining control over their actions. This control is managed by AppSec members or Project Managers (Security Champions) who oversee security decisions.

**How Is the Developer Role Different from Other Roles?**

Here’s a quick overview of Cycode’s current roles and permissions:

**1\. Viewer**

*   **Permissions:** Read-only access + ability to write comments

**2\. Developer (New!)**

*   **Permissions:** Assign tasks, write comments, open tickets, and change the priority to the violation.
    
*   **Restrictions:** Cannot resolve or ignore violations
    

**3\. Member**

*   **Permissions:** Can have full access, except for project creation, settings management, and inviting new users

**4\. Project Manager**

*   **Permissions:** Same as Member, plus project creation and inviting new users

**5\. Admin**

*   **Permissions:** Full permissions, including all settings except tenant configuration

**6\. Owner**

*   **Permissions:** Full permissions, including tenant configuration

### Secret Violation Resolve Option - “Resolve Here” [Copied!](#secret-violation-resolve-option---resolve-here "Copy link to this section")

We’ve made it easier to manage and remediate secret violations with a new option: **Resolve Here**. Now, when resolving a secret violation, Cycode allows you to resolve the specific violation itself rather than addressing the entire secret value. This improves the efficiency of your violation management and remediation process.

**Important Note:** This option applies **only** to the violation itself, not to the secret value as a whole.

![](/assets/image-647.png)

### New secret configuration: Secret exclusion for non-sensitive patterns [Copied!](#new-secret-configuration-secret-exclusion-for-non-sensitive-patterns "Copy link to this section")

We’re pleased to announced that we’ve added a new configuration to give you more control over how secrets are detected in your environment. The new secret exclusion for non-sensitive patterns configuration enables you to decide whether or not Cycode should exclude secrets that appear to be fake.

**Here’s how it works:**

*   **When the configuration is disabled**: Secrets will not be excluded. We’ll still persist the detections, but tag them with relevant indicators such as:
    
    *   fake-indicator-surrounding
        
    *   fake-indicator-value
        
    *   equal-to-context
        
    *   multiple-occurrences
        
    *   low-entropy
        
        You can use these tags to create custom classification rules that change the severity of these detections (e.g., set to info or ignore violations).
        
*   **When the configuration is enabled**: Secrets will be excluded based on the same logic as the tags mentioned above (no violations will be created in the platform).
    

Note that this feature isn’t available for on-prem deployments.

![](/assets/heuristics1.png)

![](/assets/heuristics2.png)

### Cycode’s risk score takes the lead! [Copied!](#cycodes-risk-score-takes-the-lead "Copy link to this section")

Cycode’s **risk score** has already transformed the way you view your violations in the Cycode platform, but now it’s taking the lead in helping to set priorities.

**What does this mean for you?**

*   Cycode’s dasboards are now feature the risk score widget as the default prioritization tool (although if you prefer to keep severities, simply toggle to them instead).
    
*   The updated violations table also feature the risk score as their default prioritization tool, with severities moving behind the scenes (but still available in the column selector). You’ll also see that the risk score also headlines the violation cards, making it easier to find.
    

![dashboard.png](/assets/dashboard.png)

### Prioritization funnel in the Executive dashboard is live! [Copied!](#prioritization-funnel-in-the-executive-dashboard-is-live "Copy link to this section")

We promised it was coming soon, and here it is: the prioritization funnel, which enables you to identify and prioritize critical security violations in key projects.

Just another great widget that’s been added to our ever developing Executive dashboard! ![image.png](/assets/image-28640-29.png)

### Easily revert ignored violations in PRs! [Copied!](#easily-revert-ignored-violations-in-prs "Copy link to this section")

We’re excited to introduce a new capability that allows developers to [revert ignored violations](/scanners/manage-the-scanners/revert-an-ignored-violation-within-a-pull-request-pr) (in the same ignore thread) directly within a Pull Request (PR).

Developers can now easily “unignore” violations by replying to the original ignore comment thread using `#cycode_unignore`.

With this feature we provide developers with more flexibility — build more trust and autonomy.

This functionality is enable for all and works across all violation categories (e.g., SAST, SCA) and any SCM system that supports “ignore” comments.

## November 2024 [Copied!](#november-2024 "Copy link to this section")

### New Container Image Scanning connector Sysdig Secure now available! [Copied!](#new-container-image-scanning-connector-sysdig-secure-now-available "Copy link to this section")

We’re pleased to announce the release of our latest Container Image Scanning connector, [Sysdig Secure](/integrations/security-tools/sysdig-secure) .

As part of this connector, we’ll be able to pull Container Image vulnerabilities from Sysdig Secure and to correlate them into our platform.

![sysdig.png](/assets/sysdig.png)

### Container Image Security scanner detects if vulnerability found in OS or not [Copied!](#container-image-security-scanner-detects-if-vulnerability-found-in-os-or-not "Copy link to this section")

We recently added the option to detect whether a container vulnerability was found in the operating system (OS) or not to determine whether the vulnerability originates from a base image.

You can now filter in the Container Image Security violations for “Is OS Vulnerable Component” and specify Yes to look for these types of vulnerabilities.

![container-scan-filter-for-os.png](/assets/container-scan-filter-for-os.png)

### Tenant-wide favorite view sharing now available! [Copied!](#tenant-wide-favorite-view-sharing-now-available "Copy link to this section")

We’re excited to introduce a new capability for tenant-wide favorite view sharing! Admins can now create and share saved views with all tenant members directly from the violation screen.

*   Shared views will automatically appear in all members’ view lists under Tenant View
    
*   Members can use, customize, or delete the shared views for personal use
    
*   Views are permission-aware: if a view includes projects outside a member’s access, it will be disabled for that user
    

This new feature simplifies collaboration, enabling security experts to efficiently share insights and align team workflows. Start sharing views today to maximize efficiency across your organization! ![share-views.png](/assets/share-views.png)

### New CMDB integration in Cycode [Copied!](#new-cmdb-integration-in-cycode "Copy link to this section")

Our latest update now supports seamless integration with [ServiceNow CMDB](/integrations/security-tools/servicenow-cmdb) , automatically syncing repository data, owners, application data, and more into Cycode Inventory and projects.

*   Automated sync: Keeps your assets data consistently aligned with CMDB changes
    
*   Custom mapping: Easily map CMDB attributes to Cycode during setup
    
*   Reduced manual work: Streamlined Cycode project setup with minimal input
    
*   Enhanced consistency: Unified asset view across Cycode and your CMDB
    
*   Project creation: Simplify the creation of Cycode projects directly from CMDB data
    
*   Reports and monitoring: Generate reports to track changes to monitor CMDB updates
    

Start configuring today to leverage your existing CMDB data effortlessly! ![image.png](/assets/image-28624-29.png)

### Navigation just got a nice new refresh! [Copied!](#navigation-just-got-a-nice-new-refresh "Copy link to this section")

We haven’t changed the functionality, but you’re sure to like the clean, easy-to-use look and feel.

These are the main enhancements you’ll find in the platform:

*   The navigation pane has moved to the left, creating a better connection between the main pane and the secondary one
    
*   We’ve added intuitive visualization of each main section using dedicated icons
    
*   When you land in a section, you’ll now be able to easily understand the context using the subtitles we’ve added to each subsection in the secondary navigation bar
    
*   Once you’ve landed on the section you need, you can now easily control whether to show the secondary pane, thereby maximizing the screen for the content you wish to view
    

![navigation-giffy.gif](/assets/navigation-giffy.gif)

### Support for SBOM files download for multiple repositories in a single zip file [Copied!](#support-for-sbom-files-download-for-multiple-repositories-in-a-single-zip-file "Copy link to this section")

When generating an SBOM report, often the reports includes multiple files, and downloading each file can be truly annoying! So we’ve updated our [SBOM report configuration](/additional-cycode-features/generate-a-report) to allow you to decide whether to receive a single consolidated file or separate files for each repository within a ZIP archive.

![image.png](/assets/image-28623-29.png)

### Compare risk and violation statuses across business units [Copied!](#compare-risk-and-violation-statuses-across-business-units "Copy link to this section")

We’ve made it even easier to track and compare risks and violations across your business units in the project table:

*   Risk column: Now shows the highest risk score across all sub-projects within a group, helping you spot critical areas faster.
    
*   Violation count: View the total number of open violations, including a summary of all violations from sub-projects for better clarity.
    
*   Coming soon: We’re adding an MTTR (Mean Time to Remediate) column for groups so you can easily track how quickly issues are being resolved.
    

These updates simplify finding risks and managing violations across your Cycode groups!

![image.png](/assets/image-28622-29.png)

### SCA flow in the CLI just leveled up with more lock files support! [Copied!](#sca-flow-in-the-cli-just-leveled-up-with-more-lock-files-support "Copy link to this section")

We’re excited to announce that support for Golang, npm, NuGet, and sbt in the CLI is now here!

### SCA package vulnerabilities now support single comment aggregation [Copied!](#sca-package-vulnerabilities-now-support-single-comment-aggregation "Copy link to this section")

We’ve just added a [setting to the SCA](/scanners/ast-application-security-testing/sca-software-composition-analysis/configure-the-sca-scanner/scan-prs-for-dependency-vulnerabilities) that lets you aggregate all package vulnerabilities into a single comment, which will generate a single comment for all detected package vulnerabilities. ![pr-scanning-sca.png](/assets/pr-scanning-sca.png)

### Cycode’s IDE plugins now support Eclipse Theia! [Copied!](#cycodes-ide-plugins-now-support-eclipse-theia "Copy link to this section")

Eclipse Theia is an open-source project from the Eclipse Foundation that leverages components of VS Code and reimplements proprietary modules from Microsoft, making it fully open-source. Theia also supports an Open VSX extensions marketplace, which is used in popular VS Code forks such as VSCodium.

Cycode’s Theia Extension offers complete coverage across all our integrated IDEs, including functionalities for secrets, SCA, IaC, and SAST (the tree view and violation cards are already available as well).

[Learn more about Theia IDE](https://theia-ide.org/)

[Explore the Open VSX Registry](https://open-vsx.org/extension/cycode/cycode)

### Eddy AI is now part of the documentation widget! [Copied!](#eddy-ai-is-now-part-of-the-documentation-widget "Copy link to this section")

We’ve just enabled the Eddy AI component for the documentation widget in the platform! This will make it easier for you to query and find the information you need directly from the widget!

Here’s how it works! ![eddy-ai-in-widget.gif](/assets/eddy-ai-in-widget.gif)

### New package card, updated secret value card + violation cards are getting a redesign! [Copied!](#new-package-card-updated-secret-value-card--violation-cards-are-getting-a-redesign "Copy link to this section")

We’re excited to announce the release of our (/v1/docs/violation-cards), which include:

*   A new highlight section gathering the most important data concerning the violation.
    
*   A new Risk Analysis Tab, with AI risk summary, exposure path and risk factors
    
*   A new remediation tab, displaying tickets and open PRs related to the violation.
    
*   A new navigation with the side arrows, that allow to navigate between violations without closing the card (it works also with your keyboard)
    

In addition, we’ve made the [secret value card](/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-value-card) (for secrets) and the [new package card](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-package-card) (for SCA) the main focus:

*   **Main object display**: Opens the secret value card or package card when clicking a row in the violation table
    
*   **Violations tab**: Added a tab showing related violations with a counter
    
*   **Stacking cards**: Violation cards will now open on top of the package or secret value card, sliding in from the right
    

There’s more, of course, so you may want to check out the documentation for all of these updates through the links above! ![package-card-for-beamer.png](/assets/package-card-for-beamer.png)

### New Service Level Agreement (SLA) configuration and monitoring! [Copied!](#new-service-level-agreement-sla-configuration-and-monitoring "Copy link to this section")

We’re excited to announce a new feature that enhances security and remediation goals with Cycode’s solution by introducing [SLA (Service Level Agreement) configuration, monitoring, and reports](/additional-cycode-features/service-level-agreement-sla) . This feature enable you to stay informed when specific SLAs are met or breached, leveraging our existing integrations for alerting and issue tracking.

With this update, admin users can easily configure one or more SLA timeframes by risk level across all violations within their tenant. This makes it simple to create and modify SLA rules, giving visibility into your SLA statuses across violation tables, violation cards, the RIG, and the dashboard.

This SLA configuration update is a major step in providing a more proactive approach to managing and mitigating risks. Note that you’ll need to have the admin in your system set up SLA configuration to implement SLA statuses.

Stay tuned for future enhancements, including alerting, notifications, and detailed reporting. ![violations-page-with-riskscore-and-sla-and-sla-indicator2](/assets/violations-page-with-riskscore-and-sla-and-sla-indicator-282-29.png)

## New automation workflow layout released! [Copied!](#new-automation-workflow-layout-released "Copy link to this section")

We’re please to announced that our [new automation workflow layout](/workflow-automation/) has been released and is available to all customers! This new layout not only updates the workflow to match the design standards currently in place throughout the platform, it also provides you with different capabilities that were not available in the previous layout, such as support for more types of actions and steps: Using the new canvas, it’s now easier to navigate within the workflow and to add more steps easily while looking at the automation you created.

**What does this mean for you?** The update won’t have any impact on existing workflow - they’ll simply transition to the new layout without any migration required. ![automation-workflow-layout.png](/assets/automation-workflow-layout.png)

#### Classification rules have a new home (tab) [Copied!](#classification-rules-have-a-new-home-tab "Copy link to this section")

Just a quick heads up to let you know that we’ve moved the classification rules from the Policies tab to the Automation tab, since they’re also a feature that used to create automations.

None of the functionality has changed - only the location! ![classification-rules-move.png](/assets/classification-rules-move.png)

### Identify repository owners using the new repository owner identification feature [Copied!](#identify-repository-owners-using-the-new-repository-owner-identification-feature "Copy link to this section")

We’re excited to introduce the new repository owner identification feature, designed to streamline the remediation process and improve ticket creation for AppSec teams. By identifying and displaying the owners of each repository, we’re bridging the gap in cases where no mapping exists to clarify who is responsible for a repository.

The repository owner identification feature empowers the AppSec team to create tickets and notify the right individuals when violations occur in specific repositories.

**What’s included?**

*   Repository owners list: The list includes up to 5 owners, each represented by their Source Control Management (SCM) user details, providing clear visibility of repository stakeholders
    
*   Dynamic and ongoing identification: Leveraging user repository permissions and commit activity, Cycode calculates and updates ownership continuously to reflect any changes in repository activity
    
*   Comprehensive this feature is just the beginning of enhanced organizational control and security monitoring! ![project-hierarchy.png](/assets/project-hierarchy-281-29.png)
    

### Cycode just added Service Level Agreement (SLA) configuration and monitoring to its platform! [Copied!](#cycode-just-added-service-level-agreement-sla-configuration-and-monitoring-to-its-platform "Copy link to this section")

We’re excited to announce a new feature that enhances Cycode’s workflows by introducing SLA (Service Level Agreement) configuration, monitoring, and notifications. This feature enable you to stay informed when specific SLAs are met or breached, leveraging our existing integrations for alerting and issue tracking.

With this update, admin users can easily configure one or more SLA timeframes by risk level across all violations within their tenant. This makes it simple to create and modify SLA rules, giving visibility into your SLA statuses across violation tables, violation cards, the RIG, and the dashboard.

This SLA configuration update is a major step in providing a more proactive approach to managing and mitigating risks. Stay tuned for future enhancements, including alerting, notifications, and detailed reporting, which will be rolled out in subsequent phases.

### Assets are moving to the new Inventory page! [Copied!](#assets-are-moving-to-the-new-inventory-page "Copy link to this section")

Just to let you know that the data from the Assets page, where you can view and manage the assets in your environment, is moving to its new home in the Inventory page.

The Inventory page is designed to enhance visibility within the platform by adding more tools, supporting a wider range of detection categories, and delivering clear insights derived from SDLC tools, such as which repositories use them and how they are being utilized, which provides you with a holistic view of your organization - without requiring you to read the code itself.

Stay tuned for more updates on this!

## September 2024 [Copied!](#september-2024 "Copy link to this section")

### Export dashboards as PDF! [Copied!](#export-dashboards-as-pdf "Copy link to this section")

You asked, and we listened! You can now export both the Executive Dashboard and SAST Dashboard as PDF files, making it easier to share key insights with your team.

We’re not stopping here! We’ll also be rolling out improvements based on your feedback and adding this feature to more areas across the platform.

Stay tuned for more updates, and as always, we appreciate your input to help us refine and enhance our product.

### SAST dashboard is getting new updates! [Copied!](#sast-dashboard-is-getting-new-updates "Copy link to this section")

Our [SAST dashboard](/dashboards/scanner-dashboards/sast-dashboard) just keeps getting better, with new and improved widgets to help you better monitor your organization security posture. Here’s what we’ve added this time:

*   An “OWASP ton 10 violations summary” widget, which is heatmap that shows the number of violations by crossing the risk and OWASP top 10
    
*   An “open violations by language” widget, which is a breakdown of the violations by programing language
    
*   A widget that shows the breakdown of the violations according to their CWEs (Common Weakness Enumeration)
    

Of course, we’re not done, so stay tuned for more updates!

![image.png](/assets/image-28545-29.png)

### Cycode’s SAST Bearer engine captures sensitive data in SAST violations [Copied!](#cycodes-sast-bearer-engine-captures-sensitive-data-in-sast-violations "Copy link to this section")

Cycode’s [SAST Bearer engine](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/sensitive-data-in-sast-violations) has the ability to detect the presence of sensitive data inside SAST violations. This data can be grouped into four categories: Personal Data, Personal Data (Sensitive), PII and, PHI, and the categories can also overlap, and there’s also a wide range of subcategories. When the Bearer engine detects this type of data, you’ll be able to see its association with the violation where it was detected. As such, Cycode’s SAST solution provides a unique capablity not available with other SAST engines in the market.

So where can you see this data? You’ll find it in the Violations page as well as in SAST violation cards. In a SAST violation where sensitive data has been detected, opening the violation card displays a specific line with the sensitive data available. ![image.png](/assets/image-28528-29.png)

### Introducing the enhanced Cycode Visual Studio Extension! [Copied!](#introducing-the-enhanced-cycode-visual-studio-extension "Copy link to this section")

We’re thrilled to unveil the latest upgrades to Cycode’s [Visual Studio Extension](/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/) , designed to elevate your developer experience to new heights. Here’s what’s new:

*   Advanced Code Security (SAST) Support: Safeguard your code with enhanced security measures.
    
*   Infrastructure as Code (IaC) Support: Seamlessly manage and optimize your infrastructure projects.
    
*   Intuitive Violation Management: Introducing new violation cards and an “Open Violation Card” action for enhanced clarity and control.
    
*   Enhanced Toolbar Actions: Navigate effortlessly with new toolbar actions like “Back to Home,” “Expand All,” and “Collapse All.”
    
*   Streamlined Workflow: Easily manage violations with the new “Ignore this violation” button on the secrets violation card.
    

Upgrade your development toolkit with Cycode’s latest innovations today! ![image.png](/assets/image-28547-29.png)

### Cycode SAST adds Kotlin to its supported languages [Copied!](#cycode-sast-adds-kotlin-to-its-supported-languages "Copy link to this section")

Cycode’s SAST Bearer engine continues to expand its [language support](/before-you-begin/supported-code-languages) , this time focusing on Kotlin, which enables us to add over 50 policies to the supported SAST policies.

### Added support for SCA multi-branch scans and multi-branch bulk remediations [Copied!](#added-support-for-sca-multi-branch-scans-and-multi-branch-bulk-remediations "Copy link to this section")

To provide a more robust software composition analysis (SCA) scan, Cycode enables you to scan not only your main branch, but also [multiple branches](/scanners/ast-application-security-testing/sca-software-composition-analysis/configure-the-sca-scanner/scan-multiple-branches) .

This is made possible by setting a multiple-branch scan configuration, which will then be applied to the results in the violations table, violation card, workflows, classification rules, dashboards, and more. ![image.png](/assets/image-28522-29.png)

We’ve also added the option to select multiple branches for bulk remediation using the [Remediation Wizard](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/sca-bulk-remediation) .

![image.png](/assets/image-28523-29.png)

### Updates to our Container Image scanning feature! [Copied!](#updates-to-our-container-image-scanning-feature "Copy link to this section")

Until now, our [Container Image scanning](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner) enabled you to set tags to determine the scope of the scan. Now you can also choose the following additional scope settings:

*   Limit the scope to scan for Kubernetes clusters - without having to know or set a tag.
    
*   Limit the scope to execute the scan on the last image that has been pushed to the repository.
    

We think these updates will make it even easier for you to scan your Container Images according to your organization’s needs. ![image.png](/assets/image-28520-29.png)

### Cycode is expanding its support for container registries [Copied!](#cycode-is-expanding-its-support-for-container-registries "Copy link to this section")

We’re pleased to announce that we’ve expanded our container registry support to include integrations with [Red Hat® Quay](/integrations/artifact-tools/quay) , a security-focused and scalable private registry platform for managing content across globally distributed datacenter and cloud environments.

In addition, we’ve implemented a [generic container registry integration](/integrations/artifact-tools/generic-container-registry-integration) that enables you to integrate any container registry implemented using Docker API V2.

These additions not only expand our integration offering, but also make it possible to quickly and easily integrate generic container registries. ![image.png](/assets/image-28482-29.png)

### Cycode’s Executive dashboard is getting a facelift! [Copied!](#cycodes-executive-dashboard-is-getting-a-facelift "Copy link to this section")

Cycode’s Executive dashboard is getting a facelift! Now that our Executive dashboard is the first thing you see when you open the Cycode platform, we’ve given this great tool a facelift, adding more information and details, including some that used to appear in the Overview dashboard. So what’s changed? We listened to you and made the following additions and changes:

*   Improved pipeline coverage (for the complete SDLC) widget
    
*   Violations broken down by category widget
    
*   Date filter for the violations status widget
    

And more! ![image.png](/assets/image-28465-29.png)

## August 29, 2024 [Copied!](#august-29-2024 "Copy link to this section")

### Added support to detect recently released critical vulnerability in GitHub Enterprise Server [Copied!](#added-support-to-detect-recently-released-critical-vulnerability-in-github-enterprise-server "Copy link to this section")

To help address the recently released critical vulnerability in GitHub Enterprise Server, we’ve added a new entity to the RIG and [Threat Intelligence dashboard](/dashboards/threat-intelligence) , called SCM Instance, which is used for for on-prem instances of SCM systems. Note that currently this instance is only supported in GitHub Enterprise Server, however we’ll expand support in the future. ![image.png](/assets/image-28447-29.png)

![image.png](/assets/image-28448-29.png)

### SCA on-demand scans now available! [Copied!](#sca-on-demand-scans-now-available "Copy link to this section")

Cycode’s [on-demand scans](/scanners/manage-the-scanners/create-an-on-demand-scan) now support SCA scans (in addition to the existing scans), allowing you to run SCA scans as need.

We’ve also added support for the “Initial Scan” flag to SCA scans, and when you perform a new integration, you’ll get an indication of the repository scan progress for SCA. ![image.png](/assets/image-28449-29.png)

## August 25, 2024 [Copied!](#august-25-2024 "Copy link to this section")

### New connector with security tool Mend [Copied!](#new-connector-with-security-tool-mend "Copy link to this section")

Cycode is pleased to announced that our [Mend](/integrations/security-tools/mend-io-formerly-whitesource) (formerly Whitesource) connector is now available as part of our ASPM platform. This new connector with Mend allows users to pull vulnerabilities and correlate them into Cycode SCA results if any exist, or to pull them and enrich them with our SCM integration in case there isn’t correlation.

The new connector is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it! ![mend1.png](/assets/mend1.png)

## August 22, 2024 [Copied!](#august-22-2024 "Copy link to this section")

### CLI Logs updates [Copied!](#cli-logs-updates "Copy link to this section")

We’ve added an option to the [CLI Logs](/developer-experience/security-administrators/monitor-developer-activity/cli-logs) to filter them by their time range and to sort them by their scan date.

## August 13, 2024 [Copied!](#august-13-2024 "Copy link to this section")

### We’re improving the way you interact with documentation! [Copied!](#were-improving-the-way-you-interact-with-documentation "Copy link to this section")

You may have already noticed that our documentation portal now features the Ask Eddy AI, an AI assistant that provides more contextual answers to queries and prompts and makes finding information in our docs even easier.

We’ve also changed the way you access our documentation widget; while you can still click Learn More to open a dedicated page, clicking the question mark (?) in the top right corner will now open the widget automatically, where you can then search for any information you need.

The widget also includes links to the documentation portal, our blogs, and our resources. To contact Support, use the new Support icon.

Note that the Ask Eddy AI is currently available only in the documentation portal and not in the widget.

### SCM integrations are getting a new wizard! [Copied!](#scm-integrations-are-getting-a-new-wizard "Copy link to this section")

We know that getting your integrations in place from the get-go and ensuring that they’re working properly makes for a seamless onboarding process.

That’s why we’ve redesigned the flow of our SCM integrations - starting with GitHub Cloud and GitLab Cloud - to help you start using Cycode quickly and easily through our new integration wizard!

**What’s changed?**

*   Step-by-step information on what you’ll need to do next for each type of integration
    
*   Detailed information on which permissions you’ll need
    
*   Useful tips to help ensure that the integrations are successful
    
*   A display of the initial scan progress (with a list of all the repositories being scan) and a clear indicator of the integration’s status to help monitor its progression.
    

![image.png](/assets/image-28407-29.png)

## August 12, 2024 [Copied!](#august-12-2024 "Copy link to this section")

### Refreshed project card design and look [Copied!](#refreshed-project-card-design-and-look "Copy link to this section")

We know how crucial project card interactions are, and this updated card is designed to make your experience smoother and more insightful.

**Key features**:

*   **Summary view**: Easily access the project name and description at a glance. The new status Indicator lets you keep tabs on open violations, MTTR, and navigate directly to the violation table.
    
*   **Scope**: Offers real-time visibility into dynamic assets, showing all assets associated with the project and mapping code assets to repositories. We’re also introducing new security tools and assets, such as Black Duck.
    
*   **Members**: View all direct members associated with the project. Admins can now click on users to delve into their visibility and permissions, making project management more efficient.
    
*   **Actions**: We’ve added a new edit button that gives you more control and flexibility.
    

![image.png](/assets/image-28405-29.png)

## August 8, 2024 [Copied!](#august-8-2024 "Copy link to this section")

### New Cycode Broker analytics feature [Copied!](#new-cycode-broker-analytics-feature "Copy link to this section")

We’re excited to announce the release of our new [Broker Analytics](/cycode-settings/cycode-broker/cycode-broker-analytics) feature, a powerful tool that provides comprehensive data to help you assess the need to scale brokers effectively.

The new feature provides:

*   **New analytics field**: Available in api/v1/broker calls, this field includes crucial data points such as pending tasks and growth rates.
    
*   **Detailed analytics**: The response provides insights into pending clones, task completion rates, and warning messages for detected issues.
    
*   **Visualization recommendations**: We suggest color-coding task completion rates and growth rates for enhanced visualization.
    
*   **Handling warnings**: Clear guidelines on how to manage and display warnings.
    
*   **User-friendly data display**: Analytics can be accessed through tooltips, buttons, and color-coded indicators on the Brokers screen.
    

This feature aims to make data interpretation easier and more intuitive, ensuring you have the information you need at your fingertips. ![image.png](/assets/image-28406-29.png)

## August 7, 2024 [Copied!](#august-7-2024 "Copy link to this section")

### Risk score and open violations added to Cycode projects [Copied!](#risk-score-and-open-violations-added-to-cycode-projects "Copy link to this section")

Cycode’s [projects](/cycode-projects/) now feature the max risk score and open violation indicators, which help you determine which projects are at the highest risk and require immediate action.

The risk score is calculated by aggregating all the violations related to the project and calculating the following:

*   The number of critical violations (risk score 90-100) out of all violations
    
*   Max score - Highest risk score among all violations for the project.
    
*   MTTR - Average resolution time for all resolved violations associated with the project
    

Both the risk score and the open violation features have been added to both the Projects table as well as in the project card. ![image.png](/assets/image-28379-29.png)

### Cycode Visual Studio Extension now available for SCA scanning [Copied!](#cycode-visual-studio-extension-now-available-for-sca-scanning "Copy link to this section")

Cycode’s [Visual Studio Extension](/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/) is an extension for versions 2015, 2017, 2019, and 2022, which helps users to adopt a shift-left strategy, by enabling code scanning early in the development lifecycle. This capability significantly helps businesses to avoid costly repairs and potential complications down the line.

The Visual Studio Extension now also scans your open source software and runs a new scan from your IDE even before committing the code. ![SCA-in-VSCode.png](/assets/sca-in-vscode.png)

## August 5, 2024 [Copied!](#august-5-2024 "Copy link to this section")

### Improved navigation and project selection [Copied!](#improved-navigation-and-project-selection "Copy link to this section")

We’ve just released improvements to our navigation and project selectors that will make it easier for you to navigate in the Cycode platform:

*   Project selectors visibility: [Project selectors](/scanners/pipeline-security/leaks/leaks-violations) will now always be visible to you in the relevant screens (dashboard, violation page)
    
*   Terminology change: We’ve renamed the “Business Group” screen “[Plan details (previously Organization Settings)](/cycode-settings/admin-settings/plan-details/) ” to reflect the screen’s purpose ![image.png](/assets/image-28360-29.png)
    

## July 31, 2024 [Copied!](#july-31-2024 "Copy link to this section")

### New AI remediation for SAST violations [Copied!](#new-ai-remediation-for-sast-violations "Copy link to this section")

We’re excited to introduce a new enhancement to Cycode’s SAST policies, which is designed to revolutionize how you manage SAST violations within your organization, by enabling you to generate AI-based remediations and automatic fixe for detected violations. This capability significantly streamlines your security processes and ensures that your code remains secure and compliant.

With this new feature, Cycode offers an [AI-based remediation](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/remediate-sast-violations) that provides comprehensive support for each detected violation. When a violation is identified, you will receive an explanation detailing the nature of the issue, guidance on how to remediate it, and the option to generate a code fix remediation. This holistic approach not only helps you understand the problem but also provides a clear path to resolution, empowering your development teams to address security concerns swiftly and effectively. ![SAST-AI-GIF.gif](/assets/sast-ai-gif.gif)

### All your setting are now under one roof! [Copied!](#all-your-setting-are-now-under-one-roof "Copy link to this section")

We’ve moved the Admin settings, which host the Organization Plan, Business Group and AI Enablement features, from the Profile dropdown to the main platform Settings function to ensure that you can find all the settings you need in one place. ![image.png](/assets/image-28341-29.png)

## July 30, 2024 [Copied!](#july-30-2024 "Copy link to this section")

### New rate limiting service ensures seamless integration with your SCM provider [Copied!](#new-rate-limiting-service-ensures-seamless-integration-with-your-scm-provider "Copy link to this section")

Cycode’s SaaS platform integrates with different internal providers on your end, such as GitHub and GitLab Enterprise; however, these integrations don’t provide clear visibility into how these provider instances are provisioned or whether they have adequate rate limiting configurations in place.

In response, Cycode has developed an [internal rate limiting service](/integrations/rate-limits) that prevents these services from being overwhelmed by a large volume of HTTP requests originating from our platform. The rate limit settings are internal configurations set by Cycode, which help us to monitor usage and to ensure that we don’t overload your vendor’s systems or cause disruptions (note that the feature appears in as a new tab in the Integration settings). ![image.png](/assets/image-28340-29.png)

## July 28, 2024 [Copied!](#july-28-2024 "Copy link to this section")

### Cycode releases AI-driven generic secret detection [Copied!](#cycode-releases-ai-driven-generic-secret-detection "Copy link to this section")

We’re excited to announce that the first phase of our AI-driven secrets detection is now live and enabled by default to all customers.

**What does this mean for you?**

*   **An 80% reduction in the number of existing false positives in the generic secrets policy**: Our new AI model significantly reduces the number of false positive generic secrets
    
*   **Confidence score**: Each detected generic secret now comes with a confidence score, reflecting the model’s certainty based on various factors
    
*   **Secret tag “Verified by AI”**: Easily identify which generic secrets have been verified by AI with this new tag. A dedicated filter is available on the violations page ![image.png](/assets/image-28326-29.png)
    

Additionally, we’ve launched a new [AI Features Settings](/cycode-settings/admin-settings/ai-features) page, allowing customers to opt in or out of AI features:

*   **ML-based features**: Utilize machine learning-based features using non-generative models
    
*   **Cycode LLM**: Access our advanced Cycode AI, which leverages a sophisticated language model for automated responses (available just in US)
    

![image.png](/assets/image-28327-29.png)

### New Cycode integration with build tool Harness [Copied!](#new-cycode-integration-with-build-tool-harness "Copy link to this section")

Integration with [Harness](/integrations/build-tools/harness) enables Cycode to send information about detected violations in your pipeline. After successfully integrating, Cycode will run on your “pipelines” and scan your build workflows inventory and execution logs for any secrets. ![harness.png](/assets/harness.png)

## July 23, 2024 [Copied!](#july-23-2024 "Copy link to this section")

### Secret validity now available in our Classfication Rules [Copied!](#secret-validity-now-available-in-our-classfication-rules "Copy link to this section")

As part of our ongoing improvements, we’ve just added support for secret validity as a condition in our [classification rules](/workflow-automation/) . This means you can now benefit from:

*   Secret Severity Adjustment: The severity of a secret can now be dynamically adjusted based on its validation status. Active secrets will have an increased severity.
    
*   Priority Handling: Active secrets are prioritized, ensuring they receive immediate attention.
    

![image.png](/assets/image-28321-29.png)

## July 21, 2024 [Copied!](#july-21-2024 "Copy link to this section")

### Newly-improved project wizard makes team collaboration even better [Copied!](#newly-improved-project-wizard-makes-team-collaboration-even-better "Copy link to this section")

We’ve updated and improved our [project wizard](/cycode-projects/create-and-configure-a-project) to help you manage your Cycode projects even better. Our newly-improved project wizard empowers the Project Manager role, enabling:

*   Easier assets selection flow
    
*   Ability to tag projects with the ‘project type’ to emphasize what the project represents
    
*   Better static and dynamic assets visualization
    
*   Selected assets view to better understand which assets are included in the project
    
*   Ability to invite Cycode members (external and internal) from the project card ![projects-wizard.gif](/assets/projects-wizard.gif)
    

Security Tools

Security tools are not yet supported in Cycode projects, but will be soon. Stay tuned!

### Risk score and open violations added to Cycode projects [Copied!](#risk-score-and-open-violations-added-to-cycode-projects-1 "Copy link to this section")

Cycode’s [projects](/cycode-projects/) now feature the max risk score and open violation indicators, which help you determine which projects are at the highest risk and require immediate action.

The risk score is calculated by aggregating all the violations related to the project and calculating the following:

*   The number of critical violations (risk score 90-100) out of all violations
    
*   Max score - Highest risk score among all violations for the project.
    
*   MTTR - Average resolution time for all resolved violations associated with the project
    

Both the risk score and the open violation features have been added to both the Projects table as well as in the project card. ![image.png](/assets/image-28307-29.png)

### New status reason filter for violations [Copied!](#new-status-reason-filter-for-violations "Copy link to this section")

The Status Reason filter lets you filter and manage violations by specific reasons, providing you with a clearer understanding of status changes and actions taken. Whether a violation is dismissed or resolved, the filter categorizes these actions into detailed reasons, making it easier to track and analyze each case’s outcome.

With the Status Reason filter, you can view various dismissal reasons such as Exclude Specific Violation, Exclusion Logic, and False Positive, each providing insight into why a violation was not acted upon. For resolved violations, reasons include Fixed, No Reason Specified, Revoked, and Source Removed, each explaining how and why the issue was addressed or deemed irrelevant. This comprehensive approach ensures you have the clarity and control needed to manage compliance effectively. ![image.png](/assets/image-28306-29.png)

## July 15, 20204 [Copied!](#july-15-20204 "Copy link to this section")

### New Cycode Visual Studio Extension now available for secrets scanning [Copied!](#new-cycode-visual-studio-extension-now-available-for-secrets-scanning "Copy link to this section")

Cycode’s Visual Studio Extension is an extension for versions 2015, 2017, 2019, and 2022, which helps users to adopt a shift-left strategy, by enabling code scanning early in the development lifecycle. This capability significantly helps businesses to avoid costly repairs and potential complications down the line.

The [Visual Studio Extension](/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/) scans your code for the following: Exposed secrets, passwords, tokens, keys, and other credentials (with more Cycode platform features coming soon), and runs a new scan from your IDE even before committing the code.

![Visual Studio.png](/assets/visual-20studio.png)

## July 14, 2024 [Copied!](#july-14-2024 "Copy link to this section")

### New integration with SonarCloud (SAST) [Copied!](#new-integration-with-sonarcloud-sast "Copy link to this section")

Cycode is pleased to announced a new integration with [SonarCloud (SAST)](/integrations/security-tools/sonarcloud) , the SaaS version of SonarQube (which was released in May), which enables you to pull SAST vulnerabilities from SonarQube and to correlate them into Cycode’s platform.

The new integration is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it! ![image.png](/assets/image-28286-29.png)

## July 10, 2024 [Copied!](#july-10-2024 "Copy link to this section")

### Cycode releases first DAST Connector X - Invicti [Copied!](#cycode-releases-first-dast-connector-x---invicti "Copy link to this section")

We’re pleased to announce the release of our first DAST connector, [Invicti](/integrations/security-tools/invicti-formerly-netsparker) .

Integration with the new connector is easily and straightforward; upon being added, you’ll see a new violation category in the Violations page called DAST, where you can filter for DAST violations.

The connector is fully integrated with our Risk Intelligence Graph (RIG), so that you can also create graph queries from the scanned website in Invicti and trace these violations back to a specific cloud resource, to the corresponding Docker image, and ultimately to the source code repository. ![image.png](/assets/image-28279-29.png)

### Cycode now supports AWS secret validation [Copied!](#cycode-now-supports-aws-secret-validation "Copy link to this section")

We’re excited to announce that Cycode now supports [validation for AWS](/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/aws-secrets) secret access keys and AWS access key IDs.

**Here’s how it works**:

*   To determine if these secrets are active, we search for pairs of violations: one with an AWS Secret Access Key and the other with an AWS Access Key ID, linked together.
    
*   We classify two secrets as linked by verifying the validation of all pair combinations in the repository using an API call.
    
*   If we find an active pair, we link them and mark the status as **Active**.
    
*   During revalidation, if a linked pair is found to be inactive, the status will be updated to **Inactive**.
    
*   If no linked pair can be found, the status will be set to **Unknown**.
    

Note that you’ll need to enable the validity checks in the [secrets settings](/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/) to use this feature. ![aws.png](/assets/aws.png)

## July 9, 2024 [Copied!](#july-9-2024 "Copy link to this section")

### Cycode now supports AI discovery [Copied!](#cycode-now-supports-ai-discovery "Copy link to this section")

One of the primary challenges in securing AI systems is identifying where the AI code exists within an organization’s infrastructure. The issue spans the entire SDLC, and Cycode is now able to detect used tools based on a number of factors:

*   Dependencies within code repositories
    
*   CLI scripts that leverage cloud AI resources
    
*   IaC resources dedicated to creating AI infrastructure
    
*   Build credentials used in CI systems
    
*   And more.
    

On the basis of our AI discovery, it’s now possible to set up labeling, classification, and reporting to check that compliance is maintained (note that currently, Cycode detects Hugging Face, OpenAI, AWS AI services, Azure AI services, and GCP AI services in your organization).

## July 07, 2024 [Copied!](#july-07-2024 "Copy link to this section")

### Updated our SCA Swift support to include the Carthage package manager [Copied!](#updated-our-sca-swift-support-to-include-the-carthage-package-manager "Copy link to this section")

We’ve updated our SCA Swift support to include the Carthage package manager.

Typically, each ecosystem has several package managers, such as npm and Yarn for Node.js, or Maven or Gradle for Java. Since you work with different languages, ecosystems, and package managers, this granularity level is meant for you.

## June 20, 2024 [Copied!](#june-20-2024 "Copy link to this section")

### New integration with Checkmarx One [Copied!](#new-integration-with-checkmarx-one "Copy link to this section")

Cycode is pleased to announced a new integration with [Checkmarx One](/integrations/security-tools/checkmarx-one) , which enables you to pull SAST vulnerabilities from Checkmarx and to correlate them into Cycode’s platform.

The new integration is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it! ![image.png](/assets/image-28248-29.png)

## June 5, 2024 [Copied!](#june-5-2024 "Copy link to this section")

### Introducing Cycode’s all-new SAST dashboard [Copied!](#introducing-cycodes-all-new-sast-dashboard "Copy link to this section")

We’re pleased to announced the latest addition to our platform dashboards, [the new SAST dashboard](/dashboards/scanner-dashboards/sast-dashboard) ! Featuring an intuitive, visual summary of the risks regarding violations in your static application security testing (SAST) environment, the SAST dashboard makes it easier to monitor these violations and risks, track progress, and prioritize from where to begin remediation.

Use the dashboard to get at an at-a-glance overview of your current risk, according to the status of the violations detected, their severity, and age; see which of your repositories are at highest risk; see how many of the Cycode SAST policies are being applied to your environment; get a breakdown of the violations according to their CWEs; and view your organization’s performance over time in terms of the violations prevented, detected, and remediated. ![image.png](/assets/image-28192-29.png)

### Redesigned violation tables with enhanced features now available [Copied!](#redesigned-violation-tables-with-enhanced-features-now-available "Copy link to this section")

We’re thrilled to introduce a revamped version of our violation tables, aimed at providing you with a smoother and more efficient experience in managing violations.

Here’s what’s new:

*   We redesigned the violations table to include a new location component structured hierarchically with more enriched data. This allows for a deeper dive into violation locations, offering a clearer understanding of where issues occur.
    
*   With the new location component, we updated the default violation table views to better align with your primary use cases and scanner needs. This enhancement provides quicker access to the most relevant information for a more focused experience.
    
*   The favorite views have been updated to include the new location component, replacing the previously used location fields.
    

**Important Note**: If you encounter any issues with your favorite views as a result of these changes, don’t worry! Simply reach out to our support team, and we’ll gladly assist you in recreating the view to suit your needs.

We’re committed to continuously enhancing your experience, and we believe these updates will streamline your violation management process. Explore the redesigned tables today and let us know what you think! Your feedback is invaluable as we strive to deliver the best possible solution for you.

![image.png](/assets/image-28233-29.png)

## June 4, 2024 [Copied!](#june-4-2024 "Copy link to this section")

### Alpha release announcement: Cycode’s Risk Intelligence Graph with AI engine [Copied!](#alpha-release-announcement-cycodes-risk-intelligence-graph-with-ai-engine "Copy link to this section")

Cycode is pleased to announce that we’ve integrated our powerful Risk Intelligence Graph (RIG) with AI capabilities, which means that the RIG can also utilize AI-driven risk analysis, enabling you to gain insights into high-risk vulnerabilities and to take proactive risk reduction strategies across the enterprise.

Integrating RIG with our AI engine offers a groundbreaking approach to Application Security Posture Management (ASPM) by seamlessly connecting various elements of software development and security through natural language interaction.

And the best thing about it? Anyone can use it! Simply type in your query as a prompt and wait for the RIG to output a result.

The new AI engine will be made available to customers on a request basis, so if you want to join the Alpha, reach out to your Cycode CSM.

## May 23, 2024 [Copied!](#may-23-2024 "Copy link to this section")

### Secrets scanning in Jira Cloud is now available [Copied!](#secrets-scanning-in-jira-cloud-is-now-available "Copy link to this section")

[Jira Cloud](/integrations/productivity-tools/jira-cloud) is one of the leading productivity tools today that’s used by developers for task management. Because of its wide use throughout the organization, Jira tickets and comments often contain embedded secrets, a practice that leaves potential vulnerabilities unaddressed in your system, potentially compromising security.

**Consider the following scenario**: A developer is working on a new feature and encounters an issue accessing a third-party API. Seeking assistance from their team, they create a Jira ticket. In the ticket description, the developer includes code snippets to demonstrate the problem. However, one of the code snippets accidentally includes the API key directly within the code.

Now, using Cycode’s integration with Jira Cloud scanning, you can scan for secrets in both Jira issues and comments, providing you with enhanced protection for your productivity tools. ![jira-cloud.png](/assets/jira-cloud.png)

## May 22, 2024 [Copied!](#may-22-2024 "Copy link to this section")

### New integration with GitLab Container Registry [Copied!](#new-integration-with-gitlab-container-registry "Copy link to this section")

Cycode is pleased to announced a new integration with [GitLab Container Registry](/integrations/artifact-tools/gitlab-container-registry) , a secure and private registry for container images. This integration expands our integration coverage of container image tools.

The new integration is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it! ![image.png](/assets/image-28169-29.png)

## May 20, 2024 [Copied!](#may-20-2024 "Copy link to this section")

### Introducing the new side-by-side platform & documentation - no need to open new tabs or get out of context [Copied!](#introducing-the-new-side-by-side-platform--documentation---no-need-to-open-new-tabs-or-get-out-of-context "Copy link to this section")

We’re pleased to announced that we’ve migrated our documentation to a new doc solution, which comes with a host of improvements and features:

*   An **embedded widget**, easily opened by clicking a Learn More button, so that you can remain in the platform while and get access to the documentation you need right there and then
    
*   Access to our new and improved documentation portal - including all API documentation- by clicking the same question mark icon in the top right corner.
    
*   And, of course, a new solution wouldn’t be complete with an improved way to give us feedback! From now on, simply use the feedback buttons at the bottom of any page to add your suggestions and comments. It’s that simple!
    

But don’t take our word for it - here’s a sneak peek of what you’ll be able to do from now on. ![documentation-experience-giffy.gif](/assets/documentation-experience-giffy.gif)

## May 19, 2024 [Copied!](#may-19-2024 "Copy link to this section")

### New integration with SonarQube [Copied!](#new-integration-with-sonarqube "Copy link to this section")

Cycode is pleased to announced a new integration with [SonarQube](/integrations/security-tools/sonarqube) , which enables you to pull SAST vulnerabilities from SonarQube and to correlate them into Cycode’s platform.

The new integration is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it! ![image.png](/assets/image-28285-29.png)

## May 8, 2024 [Copied!](#may-8-2024 "Copy link to this section")

### Improved Projects table with all the information you need [Copied!](#improved-projects-table-with-all-the-information-you-need "Copy link to this section")

We’ve upgraded the Projects table to include additional columns and information so that you can now see all the information on projects in one screen:

*   **Assets**: The number of assets assigned to the project
    
*   **Violation category**: The violation category (or categories) selected for the project; violations associated with the project will only be from the selected category
    
*   **Project managers**: Displays the list of project managers associated with the project
    
*   **MTTR**: Shows the MTTR for each project (the time it’s taken to remedy all the closed violations related to the project in the previous 90 days; if no violation was closed, will show as N/A)
    

![projects-screen-redesign.gif](/assets/projects-screen-redesign.gif)

## May 7, 2024 [Copied!](#may-7-2024 "Copy link to this section")

### Cycode’s RIG now supports project assets [Copied!](#cycodes-rig-now-supports-project-assets "Copy link to this section")

We’ve just added an integration for project assets to the Discovery page/RIG (Resource Integration Graph). This provides connections between Cycode projects to various assets in the RIG in the Cycode platform, which enhances visibility and monitoring capabilities.

**How does this help you?**

You can can now create flexible queries across the connected assets to retrieve comprehensive information about your Cycode projects. This capability allows for detailed analysis and understanding of the relationships and dependencies among different components of a project. Additionally, with the enhanced connectivity in the RIG, you can now generate detailed reports to monitor the progress of Cycode projects. These reports can include metrics on like Cycode project per repositories or violations to assess compliance and security posture. ![RIG - project to assets.gif](/assets/rig-20-20project-20to-20assets.gif)

## May 1, 2024 [Copied!](#may-1-2024 "Copy link to this section")

### New connector with security tool Orca Security [Copied!](#new-connector-with-security-tool-orca-security "Copy link to this section")

Cycode is pleased to announced that [Orca Security](/integrations/security-tools/orca) is now available as part of our ASPM platform. This new connector with Orca Security allows users to pull Container Image vulnerabilities (Orca Security alerts) into the platform.

The new connector is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it! ![image.png](/assets/image-2887-29.png)

## April 16, 2024 [Copied!](#april-16-2024 "Copy link to this section")

### New summary panels and quick filters in the Violations table [Copied!](#new-summary-panels-and-quick-filters-in-the-violations-table "Copy link to this section")

As part of our committment to improving your user experience in our platform, we’ve updated the [Violations table](/view-and-manage-violations/) to offer a more intuitive and efficient experience using summary data panels.

The summary data displayed for the Violations appears as panels at the top of each Violations page, reflecting your selection in the Violation Category pane, as well as your selection in the Group By filter and the additional filters you apply. The panels summarize the data shown in your current violations view as well as enhanced data insights.

![](/assets/07cadc0-image.png)

Moreover, the panels act as quick filters: by clicking a value in one of the panes, the quick filter is immediately applied to your current selections.

![New summary panels-giffy.gif](/assets/new-20summary-20panels-giffy.gif)

### VS Code Extension and JetBrains IDE Plugin updated to support IaC and updated violation cards [Copied!](#vs-code-extension-and-jetbrains-ide-plugin-updated-to-support-iac-and-updated-violation-cards "Copy link to this section")

We’ve now added Infrastructure as Code (IaC) support to our [VS Code Extension](/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/#key-features) and [JetBrains IDE Plugin](/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin/) , which joins our secrets and SCA scanning capabilities.

We’ve also added new violation cards to both the [VS Code Extension](/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/viewing-and-handling-scan-results#viewing-scan-results) and [JetBrains IDE Plugin](/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin/) for both secrets and IaC, which include both Cycode and custom company guidelines.

## April 9, 2024 [Copied!](#april-9-2024 "Copy link to this section")

### New company remediation guidelines and policy descriptions now in your PRs [Copied!](#new-company-remediation-guidelines-and-policy-descriptions-now-in-your-prs "Copy link to this section")

We’re pleased to announce that you can now find [company remediation guidelines and policy descriptions](/developer-experience/developers/pull-request-pr-scanning/add-company-custom-guidelines-to-pr-scans) directly within your pull requests (PRs) . This feature is designed to enhance collaboration between Appsec and Dev teams, providing smoother workflows for all. This enhancement is particularly important for ensuring alignment with internal knowledge and specific organizational requirements, ultimately streamlining processes.

To begin using this feature, simply add your company’s custom guidelines to a Cycode policy or create a custom one. You’ll then see these guidelines reflected in your PRs, offering clear instructions on addressing violations. Of course, if you haven’t added custom guidelines, Cycode’s default remediation guidance is readily available to assist you.

![image.png](/assets/image-2889-29.png)

### Block merge requests now supported for GitLab Ultimate cloud accounts [Copied!](#block-merge-requests-now-supported-for-gitlab-ultimate-cloud-accounts "Copy link to this section")

We’re excited to announce that we’ve expanded our support for [block merge requests](/developer-experience/developers/pull-request-pr-scanning/pull-request-pr-scanners) to include GitLab Ultimate cloud accounts, not just GitLab Enterprise. This enhancement is part of Cycode’s shift-left approach, and means that the block merge capability is fully supported for both GitHub and GitLab Ultimate SCMs, both enterprise and cloud versions.

Note that you’ll need to have a GitLab Ultimate account for this feature and to have it enabled for you by Cycode.

![image.png](/assets/image-2890-29.png)

## April 4, 2024 [Copied!](#april-4-2024 "Copy link to this section")

### Discovery page now includes the primary repository language [Copied!](#discovery-page-now-includes-the-primary-repository-language "Copy link to this section")

When using Repository entities, you can also see the primary language of the repository (supported only for GitLab and GitHub).

![](/assets/8728e11-image.png)

## April 3, 2024 [Copied!](#april-3-2024 "Copy link to this section")

### Beta launch: Cycode Risk Score [Copied!](#beta-launch-cycode-risk-score "Copy link to this section")

We’re excited to release Cycode Risk Score, which aims to refine your security prioritization process.

**What to expect**:

*   Enhanced prioritization: With risk scoring, gain deeper insights into each violation, enhancing your decision-making process.
    
*   Seamless integration: The feature complements existing severity and classification rules settings, ensuring there are no disruptions to your workflow.
    
*   Score visibility: Easily locate the new violation score on violation cards and within violation tables when violations are not grouped (“Group by None”) as well as in the violation information in RIG (Discovery page).
    
*   Informed decision-making: To comprehensively understand the scoring mechanics, we invite you to review our detailed [documentation](/additional-cycode-features/cycode-risk-score) and to read our new [blog](https://www.linkedin.com/posts/cycode_enhancing-security-prioritization-with-cycodes-activity-7180958560502079489-QOsR?utm_source=share&amp;utm_medium=member_desktop) .
    

Cycode Risk Score is currently in beta and we value your feedback: Your insights during this phase are crucial for refining this feature, and we look forward to engaging with you as part of this feedback process.

![image.png](/assets/image-2891-29.png)

## April 1, 2024 [Copied!](#april-1-2024 "Copy link to this section")

### Threat Intelligence update [Copied!](#threat-intelligence-update "Copy link to this section")

We’ve just updated our Threat Intelligence dashboard to detect activity for the latest XZ malicious package and other threats in the previous weeks. The XZ package detection query applies to customers who are utilizing our container scanning ability.

To view the query, click the threat intelligence entry in the [dashboard](/dashboards/threat-intelligence) or go directly to the [query library](/context-intelligence-graph/run-queries-from-the-query-library) .

![image.png](/assets/image-2892-29.png)

## March 27, 2024 [Copied!](#march-27-2024 "Copy link to this section")

### CI/MON gets supercharged: Enhanced visibility, streamlined hardening, and more [Copied!](#cimon-gets-supercharged-enhanced-visibility-streamlined-hardening-and-more "Copy link to this section")

We’re thrilled to announce a powerful refresh of [CI/MON, our build-hardening agent!](/scanners/pipeline-security/cimon/) This update delivers a suite of features designed to **supercharge your CI/CD security**.

#### Enhanced visibility and detection: [Copied!](#enhanced-visibility-and-detection "Copy link to this section")

*   **Deeper build insights**: Dive deeper into build reports with advanced inspection capabilities within the RIG (Risk Intelligence Graph). Gain a comprehensive understanding of process and network execution, allowing for granular filtering and a clear picture of your build posture.
    
*   **Seamless policy management**: Manage CI/MON allow lists directly from your Cycode platform. Configure at the tenant or workflow level, ensuring alignment and flagging suspicious reports in detect mode or stopping attacks entirely in prevent mode.
    
*   **Effortless policy creation**: Streamline your security setup with the ability to automatically generate CI/MON policies based on observed data within the build report. This simplifies policy creation and accelerates your journey towards a robustly hardened build environment.
    

#### Simplified integration and deployment: [Copied!](#simplified-integration-and-deployment "Copy link to this section")

*   **Streamlined CI/MON setup**: Our improved wizard guides you through a frictionless integration process. It automatically generates the necessary service account and provides tailored code snippets for your specific CI system.
    
*   **Beta support for self-hosted Kubernetes-based runners**: CI/MON now expands its reach to include self-hosted Kubernetes-based environments (on supported operating systems). This feature lets you leverage CI/MON’s detection capabilities within your K8s runners.
    

![](/assets/1f51004-image.png)

## March 26, 2024 [Copied!](#march-26-2024 "Copy link to this section")

### New Favorites Filter feature now available [Copied!](#new-favorites-filter-feature-now-available "Copy link to this section")

The [Favorites Filters](/view-and-manage-violations/create-a-favorite-view) feature in the violations page enables you to create personalized views tailored to your exact needs. You can save your unique combinations of filters, column selections, breadcrumb levels, and group-by aggregations, making it easier to access the information you need without excessive clicking and navigating.

With the ability to save, rename, delete, and share these views, collaboration becomes effortless. Shared views respect permissions, so you can trust that sensitive data stays secure. Plus, with a limit of 30 favorite views per user, you’re encouraged to keep things organized and focused.

![](/assets/5b89353-image.png)

## March 25, 2024 [Copied!](#march-25-2024 "Copy link to this section")

### New connector with security tool Palo Alto Networks (PAN) Prisma Cloud [Copied!](#new-connector-with-security-tool-palo-alto-networks-pan-prisma-cloud "Copy link to this section")

Cycode is pleased to announced that [Palo Alto Networks (PAN) Prisma Cloud](/integrations/security-tools/prisma-cloud) is now available as part of our ASPM platform. This new connector with PAN Prisma Cloud allows users to pull Container Image vulnerabilities into the platform.

The new connector is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it!

![](/assets/88df914-image.png)

### Cycode Reports now support violations reports [Copied!](#cycode-reports-now-support-violations-reports "Copy link to this section")

Our powerful [Reporting](/additional-cycode-features/service-level-agreement-sla/sla-reports) system now includes the option to easily generate reports on violations - without having to create a query in advance - in addition to the existing custom reports and SBOM reports.

The Reports wizard is fully self-service, and lets you define the data you want to export, schedule report executions, and choose how you’d like to be notified when they’re ready.

![](/assets/0f02476-image.png)

## March 14, 2024 [Copied!](#march-14-2024 "Copy link to this section")

### Cycode’s new SCA reachability analysis [Copied!](#cycodes-new-sca-reachability-analysis "Copy link to this section")

Cycode is pleased to announce the addition of [SCA reachability analysis](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/using-sca-reachability) , which is designed to check whether code projects referencing vulnerable packages actually use vulnerable functions from these packages.

Reachability analysis, a pivotal aspect of modern security practices, is undergoing a transformative evolution aimed at curbing noise and enhancing efficiency. In its latest iteration, this analysis streamlines operations by cutting through irrelevant data, honing in on vulnerabilities that genuinely pose a threat. By prioritizing these critical vulnerabilities, developers are empowered to efficiently manage the security and health of their direct and transitive open-source packages.

**How does it work?**

While a code project may reference a package with vulnerabilities, this doesn’t always mean the code project actually uses functions from the package that contain vulnerabilities. The reachability feature uses a database that contains information on vulnerable functions for specific vulnerabilities. If it detects that a code project references this kind of package, the code project’s source code is scanned to check whether it calls vulnerable functions from this package.

![](/assets/6a802b7-image.png)

## March 13, 2024 [Copied!](#march-13-2024 "Copy link to this section")

### New support for displaying misconfigurations on GitHub Secrets [Copied!](#new-support-for-displaying-misconfigurations-on-github-secrets "Copy link to this section")

We’re continuously improving Cycode’s ability to safeguard your development process. To provide you with even better visibility into potential secret misconfigurations within your CI/CD pipelines and repositories, we’re requesting a minor permission update.

**What this means for you**:

*   **Enhanced security monitoring**: Cycode will be able to proactively identify and alert you to potential risks associated with your build secrets
    
*   **Simplified workflow**: Misconfigurations will be surfaced directly within the Cycode interface for easy remediation
    

**Required action**:

*   You’ll receive an email from GitHub requesting the additional read-only “repository secrets” permission for Cycode. Please approve this request.
    
*   Alternatively, you can update the permissions manually within the “GitHub Apps” section of your GitHub UI.
    

## March 11, 2024 [Copied!](#march-11-2024 "Copy link to this section")

### Introducing Cycode’s all-new Executive dashboard [Copied!](#introducing-cycodes-all-new-executive-dashboard "Copy link to this section")

Cycode’s new [Executive dashboard](/dashboards/scanner-dashboards/secrets-dashboard) offers a panoramic view of your organization’s security posture in real-time, detailing all your critical and high vulnerabilities, similar to spotting red flags on your credit report. This enables proactive management of any security risks similar to how you’d address negative items on your credit report so you can make sure to get your financial standing back on track.

All violations from Cycode’s native scanners or any third party security tools via ConnectorX appear in a single prioritized view, so you’ll always know where to start. As such, the new dashboard is designed to help you meet your security goals with real-time visibility into your organization’s operational pulse, showcasing achievements and spotlighting areas for improvement.

![](https://cdn.document360.io/0d49d78b-64a0-4bd1-bd6d-ac2e524bf2ae/Images/Documentation/9202b0d-image.png)

### New connector with security tool Coverity [Copied!](#new-connector-with-security-tool-coverity "Copy link to this section")

Cycode is pleased to announced that our [connector with Coverity on Polaris](/integrations/security-tools/coverity-on-polaris) is now available as part of our ASPM platform. This new connector with Coverity on Polaris allows users to pull SAST vulnerabilities and to enrich them with our SCM integration.

The new connector is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it!

![](/assets/37ff5ad-image.png)

## February 28, 2024 [Copied!](#february-28-2024 "Copy link to this section")

### New violation cards for all violations [Copied!](#new-violation-cards-for-all-violations "Copy link to this section")

We’re excited to announce a significant update to our Cycode platform » [new violation cards](/view-and-manage-violations/violation-card/) for all violation categories.

The new cards are designed to enhance the platform’s usability without altering the platform’s core functionalities. Here’s what’s you’ll find in the new cards:

*   Enhanced design: Enjoy cleaner information layouts for more intuitive understanding
    
*   Improved UX: Experience smoother navigation and actions for quicker issue resolution
    
*   Streamlined UI: Access all the essential information easily for more efficient decision-making Image #1
    

![](/assets/7fdc833-image.png)

## February 19, 2024 [Copied!](#february-19-2024 "Copy link to this section")

### Enhancing infrastructure security using Rego-based custom policies [Copied!](#enhancing-infrastructure-security-using-rego-based-custom-policies "Copy link to this section")

In our ever-evolving cloud-centric landscape, infrastructure as code (IaC) serves as the primary gateway to application deployment. As technologies like Kubernetes and Terraform gain widespread adoption, it’s nearly inevitable that most developers will find themselves modifying a Kubernetes or Terraform resource at some stage in their career journey.

Navigating infrastructure updates, from simple configuration file tweaks to orchestrating intricate architectures across multiple cloud-native stacks, underscores the paramount importance of infrastructure security in safeguarding applications. While many cloud providers and IaC scanning tools offer preconfigured security rulesets, the diverse and intricate nature of modern infrastructure demands a tailored approach.

Recognizing this need, Cycode introduces [Rego-based custom policies](/policies/create-and-manage-custom-policies/create-custom-rego-based-policies-for-iac) . Rego is the language used by the Open Policy Agent to write declarative, easily extensible policies, since Rego is all about rules, and the evaluation of a single rule follows a simple pattern. Using Rego-based custom policies helps you to enhance your infrastructure security in alignment with your unique requirements.

![](/assets/4ab1a15-image.png)

### New recurring scans for Container Image Security [Copied!](#new-recurring-scans-for-container-image-security "Copy link to this section")

Upgrade your security posture around container image security by adding [recurring scans](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner) , which are designed to capture newly-released vulnerabilities in existing container images. Implementing recurring scans tailored to identify recently surfaced vulnerabilities provides a proactive measure and ensures timely detection and remediation of potential security risks, bolstering your overall container image security strategy.

![](/assets/0c27059-image.png)

## February 6, 2024 [Copied!](#february-6-2024 "Copy link to this section")

### New Connector with Security Tool GitHub Dependabot [Copied!](#new-connector-with-security-tool-github-dependabot "Copy link to this section")

Cycode is pleased to announced that our [GitHub Dependabot connector](/integrations/security-tools/github-dependabot) is now available as part of our ASPM platform. This new connector with Dependabot allows users to pull vulnerabilities and correlate them into Cycode SCA results if any exist, or to pull them and enrich them with our SCM integration in case there isn’t correlation.

The new connector is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it!

![](/assets/ff177c7-dependabot1.png)

![](/assets/10134f4-dependabot.png)

## February 1, 2024 [Copied!](#february-1-2024 "Copy link to this section")

### New Connector with Security Tool Wiz [Copied!](#new-connector-with-security-tool-wiz "Copy link to this section")

Cycode is pleased to announced that our Wiz connector is now available as part of our ASPM platform. This new connector with Wiz allows users to pull Container Image vulnerabilities into the platform.

The new connector is available to all customers, and, as usual, we’d love to get your feedback on our latest connector once you’ve had a chance to use it!

![](/assets/697f284-wiz.png)

### Cycode’s IntelliJ Platform Plugin supports SCA scanning (Beta) [Copied!](#cycodes-intellij-platform-plugin-supports-sca-scanning-beta "Copy link to this section")

Cycode’s IntelliJ Platform Plugin now supports SCA scanning in addition to scanning for hardcoded secrets. To learn more, see [Cycode’s IntelliJ Platform Plugin](/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin/) . Note that this support is currently in Beta.

### Cycode’s Threat Intelligence dashboard updated for recently exposed queries [Copied!](#cycodes-threat-intelligence-dashboard-updated-for-recently-exposed-queries "Copy link to this section")

As part of our committment to ensuring our security data is updated and relevant, we’ve just updated our [Threat Intelligence](/dashboards/threat-intelligence) dashboard to include many of the recent issues that have emerged in the market, such as the Jenkins critical vulnerability, and the self-hosted GitHub actions issue that were published recently.

To ensure you’re always on top of the latest threats, be sure to check out Threat Intelligence dashboard for the latest information.

![](/assets/01c8fb0-image.png)

## January 30, 2024 [Copied!](#january-30-2024 "Copy link to this section")

### New Secret Value card simplifies how you deal with secrets violations [Copied!](#new-secret-value-card-simplifies-how-you-deal-with-secrets-violations "Copy link to this section")

The Secret Value card introduces a streamlined approach to managing secret violations by grouping all incidents involving the same sensitive information into a single view. This unified card displays the activity status and risk factors of the exposed secret, and emphasizes the need for appropriate remediation at the secret value level.

![](/assets/04dfc64-secret-value.png)

## January 29, 2024 [Copied!](#january-29-2024 "Copy link to this section")

### Cycode CLI now supports report URLs for secret scans [Copied!](#cycode-cli-now-supports-report-urls-for-secret-scans "Copy link to this section")

We’ve added an option to support report URLs for secret scans via the [CLI](/developer-experience/developers/cycode-cli/) to see the violations in the Cycode platform.

By utilizing the `--report option`, you can now push your local scan results directly to the Cycode platform, which provides you with the flexibility to handle and analyze the results directly on the platform.

![](/assets/ac04bd1-image.png)

## January 21, 2024 [Copied!](#january-21-2024 "Copy link to this section")

### New Organization Plan page provides insights into your engagement with Cycode’s solution [Copied!](#new-organization-plan-page-provides-insights-into-your-engagement-with-cycodes-solution "Copy link to this section")

Enhancing administrators’ visibility within the Cycode platform, the Organization Plan page introduces a valuable feature tailored to offer comprehensive insights into the organization’s engagement with Cycode’s solution. This functionality empowers administrators to effortlessly navigate through purchased modules and licenses, facilitating a seamless comparison between the acquired plan and actual usage within the platform—all conveniently accessible within the same page.

Cycode offers customers three distinct organization plan modules, each designed to address specific security needs.

*   The **Pipeline Security** module for Hardcoded Secrets Detection, CI/CD Security, Source Code Leakage Detection, and the innovative CI/MON build hardening and artifact integration solution.
    
*   The **Application Security Testing (AST)** module for Software Composition Analysis (SCA), Static Application Security Testing (SAST), Infrastructure as Code (IaC), and Container Image Security.
    
*   The **Posture Management** module streamlines visualization, prioritization, and remediation through the unified ConnectorX.
    

If you’re an admin or owner (only), you can view the details of your organization plan, which is located in the Admin Settings. Here, you can gain insights into your current plan, usage statistics, and user activity. The Plan Details section offers a detailed breakdown, including the number of purchased licenses and the capabilities associated with each module, while, the Plan Usage section provides a comprehensive analysis of Source Code Management usage by users.

![](/assets/4a3ebd9-image.png)

For further information or module customization, reach out to your customer support manager or utilize the ‘+ Contact Us’ feature to initiate a Zendesk call.

## January 11, 2024 [Copied!](#january-11-2024 "Copy link to this section")

### New secret detection policies [Copied!](#new-secret-detection-policies "Copy link to this section")

We’re pleased to announce new additions to our secret detection suite following our latest research:

*   **FTP Credentials detection** (Critical Severity): Identifying credentials for FTP servers
    
*   **Discord Bot Token detection** (Low Severity): Pinpointing tokens used in Discord Bots
    
*   **Google Maps API Key detection** (Low Severity): Detecting Google Maps API keys
    

Additionally, we’ve refined our “Google OAuth Key” policy. It’s been clarified that this policy detects client-IDs, not keys. Consequently, we’re renaming it to “**Google OAuth Client Id**” and adjusting its default severity from Critical to Low.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
