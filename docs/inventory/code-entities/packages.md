# Packages | Cycode Docs

Source: https://docs.cycode.com/inventory/code-entities/packages

---

# Packages

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/code-entities/packages.md "Edit this page")

Updated on Feb 23, 2026 • Published on Oct 21, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Packages page of the Inventory view displays all of the third-party software packages in your environment, along with high-level summary tiles and relevant details as described below.

Note

You can generate and download an SBOM of your third-party software packages from this page.

## Summary tiles [Copied!](#summary-tiles "Copy link to this section")

The following high-level information is shown above the package table.

Tile

Description

Ecosystem

Donut chart that shows the breakdown of software packages by their respective programming language registries or package managers.

Licenses

Donut charge that shows the breakdown of the legal terms under which your open-source and proprietary components are distributed

OSSF package health

Line chart that shows the breakdown of software package according to their OpenSSF (Open Source Security Foundation) Scorecard metrics, which evaluate factors like code quality, active maintenance, dependency update frequency, and CI/CD best practices.

## Package details [Copied!](#package-details "Copy link to this section")

The following information is available in the package table.

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

## Package card [Copied!](#package-card "Copy link to this section")

The package card gives you a detailed view of a specific package found across your organization. The card is designed for investigation workflows so you can quickly understand what the package is, where it’s used, what risk it introduces, and what remediation options you have.

To view the package card, click a package in the table.

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab provides the following high-level information about the package attributes.

#### Summary tiles [Copied!](#summary-tiles-1 "Copy link to this section")

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

#### Package metadata [Copied!](#package-metadata "Copy link to this section")

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

#### Additional information [Copied!](#additional-information "Copy link to this section")

You can view and interact with the exposure path, which visualizes where the package is deployed.

You can also view the labels assigned to the package, and add labels manually.

### Locations tab [Copied!](#locations-tab "Copy link to this section")

This tab displays a table that lists all the locations where the package is used, along with the following information.

Column

Description

Source

The SCM where the source code is stored.

Organization

Name of the SCM organization where the package was detected.

Repository

Name of the repository where the package was detected.

Manifest file path

Path to the manifest file where the package was detected.

Dependency type

Indicates if the package is a direct or indirect dependency in the manifest file.

Development dependency

Indicates whether the package is defined as a development dependency.

Resolution method

Method that Cycode used to collect this dependency. Cycode determines the resolution method as follows:

1.  **CommittedLockfile -** If a lockfile is found, checks whether - the dependency appears in it.
2.  **RestoredLockFile** - If there is no committed lockfile, Cycode attempts to generate a lockfile during the scan. If generation succeeds, this value is used.
3.  **DefinedInManifest** - If the lockfile can’t be restored, Cycode falls back to the manifest definition.

Expand a row in the table to view the snippet that Cycode used to identify the package.

### Vulnerabilities tab [Copied!](#vulnerabilities-tab "Copy link to this section")

This tab displays a table that lists all the vulnerabilities associated with the package, along with the following information.

Column

Description

Vulnerability

Name of the vulnerability associated with the package.

Severity

Severity of the vulnerability, as defined by the vulnerability advisory.

### Risk analysis tab [Copied!](#risk-analysis-tab "Copy link to this section")

This tab provides the following information about the package risk.

#### Summary tiles [Copied!](#summary-tiles-2 "Copy link to this section")

Tile

Description

Max risk score

The highest risk score assigned to the violation associated with this package.

Package health

OpenSSF Scorecard health score

Max CVSS

CVSS score, indicating the severity of the vulnerability. The higher the score, the greater the severity.

Max EPSS

EPSS score, indicating the likelihood that the vulnerability will be exploited within the next 30 days. The higher the score, the greater the likelihood.

#### Additional information [Copied!](#additional-information-1 "Copy link to this section")

You can view the following additional information about the package risk.

Item

Description

Risk summary

An Maestro-generated summary of the risk score that highlights the key contributing factors. Generate an easy-to-understand risk summary, with all factors explained.

Exposure path

Exposure path of the violation, namely the vulnerability and where it’s contained.

Max risk factors

Shows all of the risk score factors and their values for this package, in weight order.

Package health

When available, the Risk Analysis tab also includes a summary of the package health information. You can click **Full report** to open the **OpenSSF Scorecard Report**.

### Violations tab [Copied!](#violations-tab "Copy link to this section")

The Violations tab, which is only visible if violations were detected for the package, contains a table that lists all of the violations along with the following information.

Column

Description

Status

Current status of the violation.

Risk score

Custom score that Cycode calculates and assigns to the vulnerability.

Policy

Name of the policy that triggered the violation.

Fixed in version

The earliest package version that has a fix for this vulnerability.

CVSS

The CVSS score of the vulnerability, if applicable.

Tip

Click a row to open the violation card.

### Remediation tab [Copied!](#remediation-tab "Copy link to this section")

This tab shows a table summarizing the available fix versions and the vulnerabilities they resolve. The table compares potential upgrade paths, with each row representing a different version you can upgrade to and the impact of the upgrade.

#### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Filtered violations

Total number of violations based on the filters that were applied before the card was opened.

CVEs

Total number of CVEs found in the package.

Highest version upgrade

Latest package version with fixes.

Lowest version upgrade

Earliest package version with fixes.

#### Details [Copied!](#details "Copy link to this section")

The **Fixes by version** area contains a table with the following information.

Tile

Description

Version upgrade

The suggested package version for upgrade. This is a specific version that resolves one or more vulnerabilities in your environment.

Fix violations

A breakdown of the number of violations this version fixes, categorized by severity. A single CVE can have multiple violations if the vulnerable package exists in multiple repositories.

Fixed CVEs

The total number of unique CVEs that are resolved by this upgrade. Hover over this number to see the full list of CVEs.

When you identify a likely upgrade path in the table, you can drill down to see the specific violations it affects. Click any row in the table to open the **Violations** tab, which is pre-filtered to show only the individual violations that are resolved by upgrading to the version you selected. These are the specific instances of the package in each affected repository.

From this filtered view, you can:

*   View the exact location of the vulnerable package in each repository.
    
*   Open the violation card of the vulnerable package within a specific repository.
    
*   Perform bulk actions on selected violations, such as changing their status or performing automatic remediation.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
