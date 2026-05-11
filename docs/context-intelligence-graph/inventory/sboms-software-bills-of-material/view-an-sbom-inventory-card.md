# View an SBOM inventory card | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/inventory/sboms-software-bills-of-material/view-an-sbom-inventory-card

---

# View an SBOM inventory card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/inventory/sboms-software-bills-of-material/view-an-sbom-inventory-card.md "Edit this page")

Updated on Aug 13, 2025 • Published on Aug 5, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

When you click a row in the Imported SBOMs table, it opens the inventory card for that SBOM.

The SBOM inventory card contains the tabs described below.

## Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab provides at-a-glance metadata and a summary of the security posture of the imported SBOM. This is your starting point for understanding the asset’s context and overall risk.

Section

Metadata

Description

**Labels**

You can manually add one or more labels to the SBOM.

**Properties**

**Vendor name**

Creator or source of the SBOM.

**Serial number**

Unique identifier for the SBOM file.

**Version**

Version of the software package or component described by the SBOM.

**Business impact**

Potential effect of the software on the business.

**File format**

Format of the SBOM file itself.

**Authors**

entity or person responsible for creating the SBOM.

**Owner**

Person or team responsible for the software component.

**Last import**

Date and time when the SBOM file was last ingested or processed by the system.

**First discovered**

Date and time this specific SBOM or its associated component was first detected by the system.

**Last updated**

Date and time when information related to this SBOM was last modified or refreshed in the system.

## Inventory tab [Copied!](#inventory-tab "Copy link to this section")

The Inventory tab lists all related assets for the imported SBOM. It contains the following information in two tabs.

### Packages [Copied!](#packages "Copy link to this section")

The Packages tab shows a table that lists the complete inventory of every software component (package) in the original SBOM file.

The package list typically includes the following columns.

Column

Description

Package

Name of the library or component.

Version

Specific version used in the software.

Ecosystem

Software development platform or environment the package belongs to.

Licenses

Software licenses under which the package is distributed.

Publish date

Timestamp when the specific version of the package was officially released or made available in its repository.

Health score

Health score of the package as reported by OSSF.

You can search for specific packages or sort by any column to identify components of interest. You can also click a package to open the related package card.

### Package vulnerabilities [Copied!](#package-vulnerabilities "Copy link to this section")

The Package Vulnerabilities tab lists all the specific security vulnerabilities (CVEs) that Cycode has identified in the SBOM’s components. This is your primary view for triaging and investigating security risks.

The vulnerability list provides the following information.

Column

Description

Vulnerability ID

CVE or other unique identifier for the vulnerability.

Severity

Qualitative severity rating (Critical, High, Medium, Low).

Package name

Package and version where the vulnerability was found.

You can click a vulnerability in the table to open to the Package vulnerability card, which provides detailed descriptions and additional metrics.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
