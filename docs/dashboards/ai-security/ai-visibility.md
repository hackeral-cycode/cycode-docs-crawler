# AI visibility | Cycode Docs

Source: https://docs.cycode.com/dashboards/ai-security/ai-visibility

---

# AI visibility

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/ai-security/ai-visibility.md "Edit this page")

Updated on Mar 22, 2026 • Published on Mar 17, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The AI visibility dashboard provides a comprehensive view of AI adoption and usage across your organization’s development environment. Use the dashboard to discover AI assets, monitor repository-level AI integration, and gain full visibility over AI tools, models, and risks.

## AI visibility widgets [Copied!](#ai-visibility-widgets "Copy link to this section")

The widgets in the AI visibility dashboard visualize data on AI adoption across your environment. Some widgets are always available, while other widgets are displayed only if specific features are enabled in your Cycode tenant.

Note

For widgets with aggregated data, you can click on the data to drill through and view more details.

### Default [Copied!](#default "Copy link to this section")

These widgets are always visible in the dashboard.

Note

In widgets that contain donut charts and distribution by percentage, hover over a segment of the chart to see the actual number.

Widget

Description

**Total AI tools**

Total number of AI tools detected across your environment.

**Repositories using AI**

Total number of repositories where AI configuration was identified.

**AI violations**

Total number of AI-related violations that are currently open.

**AI inventory overview**

Inventory of all AI-related assets, organized into the following categories:**AI infrastructures**\- platforms used to run or serve AI models **AI models**\- specific models detected in your codebase **AI coding assistants**\- code generation tools being used by developers **MCPs** - Model Context Protocol servers connected to your environment

**Repositories with AI tools**

Total number and percentage of repositories that contain AI tools, with a Top 5 list ranked by tool count.

**Repositories with code assistants**

Total number and percentage of repositories where AI code assistants are being used, with a Top 5 list ranked by code assistant count.

**Repositories with MCP usage**

Total number and percentage of repositories with MCP integrations, with a Top 5 list ranked by MCP tool count.

**Remote vs. local MCPs**

Total number of MCPs distributed by deployment type.

**AI models by name**

Total number of AI models detected, distributed by namespace.

**Repositories with AI rule files**

Total number of repositories that have an AI rule file configured, distributed by with vs. without.

**AI rule files by coding assistants**

Total number of AI rule files detected, distributed by the related coding assistant.

### Scanner-based [Copied!](#scanner-based "Copy link to this section")

These widgets, which are part of the AI inventory overview, are visible when the specified Cycode scanner is enabled in the tenant.

Widget

Description

Required scanner

**AI secrets**

List of AI-related secrets detected in your environment, such as API keys and access tokens for AI services.

Secrets

**AI packages**

List of AI-related packages and libraries detected across your repositories.

SCA

### Cycode AI Guardrails-based [Copied!](#cycode-ai-guardrails-based "Copy link to this section")

These widgets are visible when Cycode AI Guardrails have been installed and deployed.

Widget

Description

**Actions taken on AI interactions**

Distribution of detected AI interactions according to the action taken by Cycode (**Blocked**, **Reported**, **Allowed**).

**AI interaction scan results**

Distribution of detected AI interactions according to type (Read File With Secret, Scan Failure, Secret In Prompt, Sensitive Path).

**Top 4 users with flagged results**

The 4 developers with the most flagged AI interaction results, ranked by count.

**Developer MCP usage**

Total count of detected MCP, distributed by individual MCP actions according to MCP server.

**Model usage in conversations**

Number of AI conversations that took place per AI model used.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
