# Visibility dashboard | Cycode Docs

Source: https://docs.cycode.com/dashboards/cycode-360/visibility-dashboard

---

# Visibility dashboard

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/cycode-360/visibility-dashboard.md "Edit this page")

Updated on Sep 11, 2025 • Published on Jan 9, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Visibility dashboard contains an assortment of widgets that provide a comprehensive overview of the general security landscape in your organization.

## Widgets [Copied!](#widgets "Copy link to this section")

Widget

Description

Global risk score

Provides an overview of your global risk level based on current vulnerabilities and security practices.

Inventory assets

Collection of widgets that provide an overview of all the inventory assets in your system. You can click any widget to drill through to see details about the specific group of assets.

AppSec data flow

Provides a comprehensive, top-down view of your organization’s application security posture. The widget maps the SDLC to show where security checks are integrated into the development pipeline, visualizes the data flow from different parts of the pipeline to various security scanners, and summarizes risk with an overview of the security findings across different risk categories. You can click into the widget to drill through and investigate any part of the data flow, directly from the dashboard.

Risk by category

Shows where risks are concentrated within your organization, helping to identify scanner-specific trends and prioritize remediation efforts. The widget visualizes the distribution of open violations across different scanners using a radar chart. Each violation is categorized by risk level: info, low, medium, high, and critical.

Cycode scanners health

Provides a comprehensive overview of the operational status of your scanners, so you can monitor to ensure that all necessary modules are active and functioning as expected to maintain robust security coverage. The widget features a global health score (in percentage) that reflects the overall status of your scanning environment. Additionally, the widget displays a list of Cycode-native scanners, detailing: - Activated modules (those purchased by your organization) - Whether each scanner is operational - Whether PR scanning is enabled

Scan monitoring

Track the number of scans being performed on commits, pull requests, and builds.

Plugin installation count

Provides an overview of the adoption of Cycode plugins in your organization, so you can track plugin adoption and assess how effectively Cycode’s tools are integrated into your organization’s workflows. This widget displays the total number of installed plugins, including the Cycode IDE plugin and the CLI tool. Additionally, the plugin widget shows a detailed breakdown by IDE tools, so you can see which development environments are most commonly used with Cycode plugins.

Open violations in SDLC pipeline

Collection of widgets that displays open violations by risk based on each SDLC build stage, providing you with real-time data about the open violations in your organization.

Risk backlog

Provides a detailed view of your organization’s unresolved security risks over the past year. It displays all open violations, categorized by time and risk level (medium to critical). This information can provide valuable insights into your risk trends and uncover patterns in violations. Regardless of the mode selected in the dashboard, the Risk backlog widget always operates in risk mode, ensuring consistent prioritization and analysis of threats. Use this widget to identify areas requiring immediate attention and drive effective risk management strategies.

Technologies overview

Displays the technologies detected within your organization, including SCM tools, security tools, AI platforms, and databases.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
