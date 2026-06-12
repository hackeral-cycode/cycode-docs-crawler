# ADLC security | Cycode Docs

Source: https://docs.cycode.com/inventory/application-insights/adlc-security

---

# ADLC security

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/application-insights/adlc-security.md "Edit this page")

Updated on Mar 9, 2026 • Published on Feb 10, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The ADLC security view provides comprehensive visibility into all AI technologies detected across your organization’s codebase and infrastructure. This unified view helps security teams identify, monitor, and govern AI tool usage to ensure compliance and reduce risk.

The AI technologies are listed according to the categories described below, in cards that show the most frequently detected technologies at the top.

Note

You can create custom queries in the Context Intelligence Graph to identify the use of AI technologies in your source code. For more information, go to [Detect AI use in source code](/context-intelligence-graph/useful-queries/detect-ai-use-in-source-code) .

## Categories [Copied!](#categories "Copy link to this section")

The inventory organizes detected AI technologies into the following categories:

Category

Description

AI infrastructures

Platforms for building and managing AI workloads, including LLM gateways and orchestration frameworks.

AI models

ML models detected in your repositories, whether self-hosted or referenced from model hubs.

AI coding assistants

Tools that provide AI-powered code generation and completion within development workflows.

MCPs

Model Context Protocol integrations that allow AI models to interact with external tools and services.

AI secrets

API keys, tokens, and credentials used to authenticate with AI services.

AI packages

Software dependencies and libraries used to integrate AI capabilities into applications.

### Inventory card [Copied!](#inventory-card "Copy link to this section")

Click a technology in a category to open the inventory card.

#### AI infrastructures [Copied!](#ai-infrastructures "Copy link to this section")

The Overview tab of the inventory card has the following details for the technology.

**Open violations**

Number of violations detected regarding this technology.

**Labels**

Any custom tags or labels that were applied.

**Properties**

Column

Description

Name

Name of the AI infrastructure technology that was detected.

Category

Classification of the technology, for example **Machine learning and AI**.

Description

Short description of the technology and its purpose.

URL

Link to the official website of the technology.

**Locations**

Number of repositories where the technology was detected. Click to show to the Locations tab.

**Evidence path**

Visualization of evidence for technology usage by Graph entities across SDLC stages.

**JSON**

A list of all the subcategories of the tool in JSON format.

For information about the other tabs in the inventory card, go to [Technologies](/inventory/application-insights/technologies) .

#### AI models [Copied!](#ai-models "Copy link to this section")

The Overview tab of the inventory card has the following details for the AI models.

**General info**

Column

Description

SDLC stage

Stage in the software development lifecycle (e.g., Code)

Model name

Name of the AI model that was detected.

Created at

Date and time the AI model was first detected.

Infrastructure

Environment where the AI model is hosted, for example **Huggingface**.

Model designation

Type of AI model or purpose, for example **text-generation**.

Model library

Framework that the AI model uses, for example **transformers**.

Namespace

Provider or owner of the AI model, for example **google**.

**Locations**

Repository path where the AI model is referenced.

**Labels**

Any custom tags or labels that were applied.

**Evidence path**

Visualization of evidence for technology usage by Graph entities across SDLC stages.

For information about the other tabs in the inventory card, go to [Technologies](/inventory/application-insights/technologies) .

#### AI coding assistants [Copied!](#ai-coding-assistants "Copy link to this section")

The Overview tab of the inventory card has the following details for the AI coding assistants.

**Open violations**

Number of violations detected regarding this technology.

**Labels**

Any custom tags or labels that were applied.

**Properties**

Column

Description

Name

Name of the AI code assistant that was detected.

Category

Classification of the technology, for example **Machine learning and AI**.

Description

Short description of the technology and its purpose.

URL

Link to the official website of the code assistant.

**Locations**

Number of repositories where the technology was detected. Click to show to the Locations tab.

**Evidence path**

Visualization of evidence for technology usage by Graph entities across SDLC stages.

**JSON**

A list of all the subcategories of the tool in JSON format.

For information about the other tabs in the inventory card, go to [Technologies](/inventory/application-insights/technologies) .

#### MCPs [Copied!](#mcps "Copy link to this section")

The Overview tab of the inventory card has the following details for the MCPs.

**General info**

Column

Description

SDLC stage

Stage in the software development lifecycle, generally **Code**.

Name

Name of the MCP server.

Server type

Connection type, either remote or local.

URL (only for remote MCP)

Link to the endpoint of the MCP server.

**Locations**

Number of repositories where the technology was detected. Click to show to the Locations tab.

**Labels**

Any custom tags or labels that were applied.

**Evidence path**

Visualization of evidence for technology usage by Graph entities across SDLC stages.

For information about the other tabs in the inventory card, go to [Technologies](/inventory/application-insights/technologies) .

#### AI secrets [Copied!](#ai-secrets "Copy link to this section")

The Overview tab of the inventory card has the following details for the secrets.

**Summary tiles**

Tile

Description

Max risk score

The highest risk score calculated for an open violation that is based on this secret.

Secret validity

Current status of this secret.

Exists in latest code

Number of violations where this secret appears in the latest code version.

Publicly exposed

Number of violations where the secret is can be accessed from outside the organization.

Filtered violations

Number of violations based on the filter applied in the Violations view.

Sources

Number of sources where this secret was detected.

**Properties**

You can view the following metadata about the secret value.

Section

Description

Secret value

The value of the secret.

Discovery

(ADLC security only) **Sources** - tools that detected the secret.

Where

**Source** - where the secret was detected. **Locations** - where the violations are located.

Who

**Authors** - user(s) that introduced the secret.

When

**Introduced at** - date and time the violation was first introduced. **First detection** - date and time the violation was first detected. **Last detection** - date and time the secret was last detected.

**Exposure path**

(For secrets detected in code, build, and artifact integrations) Where the violation is located, where it may be exposed, and the relationships between these points.

For information about the other tabs in the card, go to [Secret values](/inventory/application-insights/secret-values) .

#### AI packages [Copied!](#ai-packages "Copy link to this section")

The Overview tab of the inventory card has the following details for the packages.

**Summary tiles**

Tile

Description

Ecosystem

Ecosystem the package belongs to.

Package version

Version of the package currently being used.

Release date

Release date of the package version currently being used.

Open violations

Number of open violations associated with the package.

**Properties**

You can view the following metadata about the package attributes.

Field

Description

Description

Description of the package as shown in the package registry.

Package licenses

List of licenses associated with the package.

Source code repository

URL of the source code repository for the package.

First release date

The initial release date of the package.

**Exposure path**

Visualization of where the package is deployed.

**Labels**

Any custom tags or labels that were applied.

For information about the other tabs in the card, go to [Packages](/inventory/code-entities/packages) .

## Tabs [Copied!](#tabs "Copy link to this section")

Below the summary cards, each category has its own tab with an inventory list.

### AI infrastructures [Copied!](#ai-infrastructures-1 "Copy link to this section")

Column

Description

Tool name

Name of the AI infrastructure that was detected.

Locations

Repositories where the infrastructures were detected. Hover over the number in the table to show a list of the individual locations and their paths.

Evidence

Evidence of technology usage by Graph entities across SDLC stages. One entity is presented per stage.

### AI models [Copied!](#ai-models-1 "Copy link to this section")

Column

Description

Model name

Name of the AI model that was detected.

Locations

Repositories where the models were detected.

### AI coding assistants [Copied!](#ai-coding-assistants-1 "Copy link to this section")

Column

Description

Tool name

Name of the AI tool that was detected.

Locations

Repositories where the tools were detected. Hover over the number in the table to show a list of the individual locations and their paths.

Evidence

Visualization of evidence for technology usage by Graph entities across SDLC stages.

### MCPs [Copied!](#mcps-1 "Copy link to this section")

Column

Description

Tool name

Name of the AI tool that was detected.

Locations

Repositories where the tools were detected. Hover over the number in the table to show a list of the individual locations and their paths.

### AI secrets [Copied!](#ai-secrets-1 "Copy link to this section")

Column

Description

Visible by default

ID

Full SHA of the secret

No

Secret SHA

Unique identifier of the secret value.

Yes

Source

Locations where the secret value was detected.

Yes

Secret tags

All tags that are associated with the secret’s violations.

Yes

First detection

Date and time the first violation with this secret value was detected.

No

Last detection

Date and time a new violation with this secret value was most recently detected.

Yes

Max risk score

Risk score that was calculated by Cycode.

Yes

Violations by risk

Number of detected violations that contain the secret value, grouped by severity of the risk score.

Yes

Status

Current status of the violation:

*   **Open** - at least one violation is still open
*   **Ignored** - All violations were marked as ignored
*   **Resolved** - All violations were closed and at least one was resolved

Yes

Authors

User(s) that introduced the violation.

No

Expiration date

(JSON web tokens only) Expiration date for this secret (after which the secret is inactive and no longer valid).

No

Discovery sources

(ADLC security only) Tool that detected the violation.

Yes

### AI packages [Copied!](#ai-packages-1 "Copy link to this section")

Column

Description

Shown by default

Package

Name and origin of the software package.

Yes

Version

Version of the package currently being used.

Yes

Locations

All the locations where the package is located.

Yes

Ecosystem

Ecosystem the package belongs to.

Yes

Licenses

Open-source licenses associated with the package.

Yes

Release date

Release date of the package version currently being used.

No

Labels

Tags or metadata applied to the package.

No

Package health

Overall health score as calculated by OSSF.

Yes

Dependency type

Indicates if the dependency is direct or indirect.

Yes

Vulnerabilities

Known vulnerabilities associated with the package version.

Yes

Violations

Open violations that are associated with the package.

Yes

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
