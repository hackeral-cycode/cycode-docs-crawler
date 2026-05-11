# Container security package card | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/container-security-package-card

---

# Container security package card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/container-security-package-card.md "Edit this page")

Updated on Feb 2, 2026 • Published on Jan 13, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The package card provides an easy way of navigating through the container violations, providing you with a clear vision and automatic aggregation of violations per package, and allowing you to immediately spot problematic packages (those that have the most associated violations).

The package card also helps promote bulk remediations, because by showing all violations per package, you can view all the violations that can be remediated with the same action.

## Package card tabs [Copied!](#package-card-tabs "Copy link to this section")

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab for the package card includes all the information on the vulnerability itself, and contains the following information.

#### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Max risk score

The highest risk score assigned to this package’s violation.

Fixed in version

The earliest package version that has a fix for this vulnerability.

Filtered violations

Total number of violations based on the filters that were applied before the card was opened.

Package type

Indicates whether this package is part of an application, or part of the container’s operating system.

#### Details [Copied!](#details "Copy link to this section")

Field

Description

CVEs

CVEs associated with this vulnerability.

Location

Displays the following package information:

*   Cycode project
*   Container

Exposure path

Exposure path of the violation, namely the vulnerability and where it’s contained.

Note

To open the full query in the Discovery view, click **see all in RIG**.

When

Displays the date and time the violation was first and last detected.

### Risk analysis tab [Copied!](#risk-analysis-tab "Copy link to this section")

This tab shows how Cycode prioritizes violations and manages risks. The following information is displayed.

#### Summary tiles [Copied!](#summary-tiles-1 "Copy link to this section")

Tile

Description

Max risk score

The highest risk score assigned to this package’s violation.

Max CVSS

CVSS score, indicating the severity of the vulnerability. The higher the score, the greater the severity.

Max EPSS

EPSS score, indicating the likelihood that the vulnerability will be exploited within the next 30 days. The higher the score, the greater the likelihood.

Internet exposed

Indicates whether the package is located in a container that’s exposed to the internet.

Deployed

Indicates whether the package is located in a container that’s deployed to a runtime environment.

Known exploitable vulnerabilities

Indicates whether the package has a known exploitable vulnerability according to CISA’s Known Exploited Vulnerabilities (KEV) database.

#### Details [Copied!](#details-1 "Copy link to this section")

Field

Description

Risk summary

An Maestro-generated summary of the risk score, highlighting the key contributing factors. Generate an easy-to-understand risk summary, with all factors explained.

Exposure path

Exposure path of the violation, namely the vulnerability and where it’s contained.

Note

To open the full query in the Discovery view, click **see all in RIG**.

Max risk factors

Shows all of the risk score factors and their values for this package, in weight order.

Note

See the [Container security violation card](/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/container-security-violation-card) risk factors for more information about these characteristics.

### Violations tab [Copied!](#violations-tab "Copy link to this section")

The Violations tab shows the full list of violations associated with this package in table format. You can show and hide table columns as necessary.

The table has the following information.

Field

Description

**Default**

Policy name

Name of the policy that triggered the violation.

Fixed in version

The earliest package version that has a fix for this vulnerability.

Type

Type of dependency, either application or operating system.

Location

Source where the vulnerability exists.

Detected at

Last time the vulnerability was detected.

Risk status details

Max risk score and current status of the violation (**Open**, **Resolve**, **Ignore**).

**Additional**

Labels

All labels associated with the repository that contains the vulnerability.

Tip

Click a row to open the container security violation card for that violation.

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
