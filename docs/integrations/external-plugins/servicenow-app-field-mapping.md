# ServiceNow app field mapping | Cycode Docs

Source: https://docs.cycode.com/integrations/external-plugins/servicenow-app-field-mapping

---

# ServiceNow app field mapping

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/external-plugins/servicenow-app-field-mapping.md "Edit this page")

* * *

Each Cycode violation produces up to four ServiceNow records:

ServiceNow record

Created

Application (Discovered Application)

Always

Application Vulnerability Entry

Always

Application Vulnerable Item (AVIT)

Always

Package

SCA only

## Common fields [Copied!](#common-fields "Copy link to this section")

The following fields apply to every violation category.

### Application Vulnerable Item (AVIT) [Copied!](#application-vulnerable-item-avit "Copy link to this section")

Cycode

ServiceNow

Source entity name

Application / Discovered Applications

Source entity ID

Source App ID

Scan ID

Source Scan ID

Violation ID

Source AVIT ID

Severity (raw text)

Source Severity

Status

Source Remediation Status

Risk score

Risk Score

SDLC stages

Source SDLC Status

Created date

First Found

Correlation message

Summary

Remediation guidelines

Recommendation

Cycode violation link

Source Link

_constant_ “Cycode”

Source

### Application Vulnerability Entry [Copied!](#application-vulnerability-entry "Copy link to this section")

Cycode

ServiceNow

Policy name

Summary

Severity (mapped, see below)

Modified Severity

Risk score

Source Risk Score

Category

Category Name

_constant_ “Cycode”

Source

### Severity mapping [Copied!](#severity-mapping "Copy link to this section")

Cycode

ServiceNow

Critical

1 — Critical

High

2 — High

Medium

3 — Medium

Low

4 — Low

Info

5 — None

Not Available

5 — None

## Per-category mappings [Copied!](#per-category-mappings "Copy link to this section")

Only fields that differ from the common fields are listed below.

### Secret [Copied!](#secret "Copy link to this section")

*   **Scan type:** `secret`
*   **Category Name:** Secret Detection
*   **Line number:** populated for file-based providers
*   **Location** (provider-specific):

Provider

Location

Slack

Workspace + Channel

Microsoft Teams

Tenant + Team + Channel

SharePoint

Site + Library + File

Confluence (Cloud / Data Center)

Domain URL + Space + Page + Blog + Comment URL

Jira (Cloud / Data Center)

Domain URL + Project + Issue + Comment URL + File

Jenkins

Jenkins Instance + Job URL

All others (GitHub / GitLab / Bitbucket / Azure DevOps / containers / etc.)

Organization + Repository + Project + Branch + File + Resource + Commit ID

### SCA [Copied!](#sca "Copy link to this section")

*   **Scan type:** `sca`
*   **Category Name:** SCA
*   **Location:** Package Name + Package Version
*   **Package record:**

Cycode

ServiceNow (Package)

Vulnerable component (or Package name)

Package Name

Vulnerable component version (or Package version)

Package Version

`<name>:<version>`

Package Unique ID

*   **Dependency Type:**

Cycode

ServiceNow

`is_direct_dependency = true`

Direct

`is_direct_dependency = false`

Indirect

`is_dev_dependency = true`

Dev

*   **Recommendation fallback:** if remediation guidelines are missing, `Fixed in Version: <first_patched_version>` is used instead.

### Static (SAST) [Copied!](#static-sast "Copy link to this section")

*   **Scan type:** `static`
*   **Category Name:** SAST
*   **Location:** Organization + Repository + Project + Branch + File
*   **Line number:** populated
*   **Application name:** falls back to Repository name if Source entity name is missing.

### Dynamic (DAST) [Copied!](#dynamic-dast "Copy link to this section")

*   **Scan type:** `dynamic`
*   **Category Name:** DAST
*   **Location:** full URL
*   **CWEs:** Cycode CWE list → Vulnerability Entry → Primary CWE / CWE list

### API Security [Copied!](#api-security "Copy link to this section")

*   **Scan type:** `api_security`
*   **Category Name:** API Security
*   **Location:** API base URL
*   **Summary override:** if Cycode provides a list of vulnerable URLs, Summary becomes `Vulnerable URLs: <list>` instead of the correlation message.
*   **Risk Score:** mapped (may be hidden on the UI).

### Manual (Bug Bounty) [Copied!](#manual-bug-bounty "Copy link to this section")

*   **Scan type:** `manual`
*   **Category Name:** Bug Bounty
*   Recommendation, Summary, and Source Link on the AVIT are **not** set for this category.
*   **Risk Score:** mapped (may be hidden on the UI).

### Static (IaC) [Copied!](#static-iac "Copy link to this section")

*   **Scan type:** `static`
*   **Category Name:** IaC
*   **Location:** Organization + Repository + Project + Branch + File
*   **Line number:** populated

Additional field mappings:

Cycode

ServiceNow

Policy name

Short Description

Asset Type + Security Asset + Cycode violation link

Technical Details

Correlation message

Impact

### Static (Leaks / Data Security) [Copied!](#static-leaks--data-security "Copy link to this section")

*   **Scan type:** `static`
*   **Category Name:** Leaks
*   **Location:** Organization + Repository + Project + Branch + File
*   **Line number:** populated

### Dynamic (Cloud Security) [Copied!](#dynamic-cloud-security "Copy link to this section")

*   **Scan type:** `dynamic`
*   **Category Name:** Cloud Security
*   **Location:** Organization + Repository + Project + Branch + File

### Static (CI/CD Security) [Copied!](#static-cicd-security "Copy link to this section")

*   **Scan type:** `static`
*   **Category Name:** CI/CD Security
*   **Location:** Organization + Repository + Project + Branch + File

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
