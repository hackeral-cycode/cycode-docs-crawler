# Container Security violation card | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/container-security-violation-card

---

# Container Security violation card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/container-security-violation-card.md "Edit this page")

Updated on Jan 25, 2026 • Published on Jan 22, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The container security card, opened from the Violations view, provides information about a specific vulnerability found in a container image. The following sections describe the information that is specific to this card type.

For information about other tabs in the violation card, go to the [Violation card](/view-and-manage-violations/violation-card/) section and see the relevant topic.

## Tabs [Copied!](#tabs "Copy link to this section")

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab for the violation card includes general information about the vulnerability itself, and shows the following.

#### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Risk score

The risk score that is calculated by Cycode.

CVSS

Severity of the software vulnerability according to the CVSS.

Package type

Indicates whether the package is located in a software application or the operating system.

Fixed version

Version of the software package where the vulnerability is fixed.

#### Detailed information [Copied!](#detailed-information "Copy link to this section")

Item

Description

Location

Path to the location of the vulnerability

**General info**

Package

Name and version of the software package with the vulnerability.

Vulnerability ID

The vulnerability ID associated with the violation

Cycode project

Cycode project(s) that the violation is associated with.

Package

Name and version of the software package with the vulnerability.

Container repository

Full name or address of the container registry.

Container image tag

The version tag associated with the image.

Container image (digest)

SHA256 hash that uniquely identifies the image content.

Layer (digest)

The digest of the container image layer where the vulnerability was found.

Note

Available only for the native Cycode scanner.

First detected

The date and time stamp when the violation was first detected in the container image.

Last detected

The date and time stamp when the violation was last detected in the container image.

**Exposure path**

Shows where the vulnerability is located, where it is potentially exposed, and the relationship between the points.

**Labels**

All of the labels associated with this vulnerability are shown. You can also add a custom label.

**Additional info**

Assignee

The Cycode member this violation was assigned to.

### Risk analysis tab [Copied!](#risk-analysis-tab "Copy link to this section")

#### Summary tiles [Copied!](#summary-tiles-1 "Copy link to this section")

The following summary tiles provide a high-level summary of the level of risk.

Tile

Description

Max risk score

The highest risk score assigned to the violation associated with this package.

CVSS

CVSS score, indicating the severity of the vulnerability. The higher the score, the greater the severity.

EPSS

EPSS score, indicating the likelihood that the vulnerability will be exploited within the next 30 days. The higher the score, the greater the likelihood.

Exploit maturity

Level of development or availability of an exploit for the given vulnerability. Possible values:

*   **Mature**: A fully developed and weaponized exploit exists, ready for widespread use.
*   **Unknown**: No exploit is publicly known or its existence isn’t verified.

#### Risk details [Copied!](#risk-details "Copy link to this section")

The following information is displayed.

Item

Description

Exposure path

Tracks the potential for exposure back to the root cause of the violation.

Note

For more information, go to [Exposure paths](/view-and-manage-violations/violation-card/risk-analysis-tab).

Risk summary

Ask Maestro for a clear risk summary that explains all the factors.

Risk score history

View the changes in the risk score over time as either a graph or a table.

Risk factors

Variables that were used to calculate the current risk score (shown at the top of the tab), in order of importance. Hover over the tooltip of each factor to learn more about how it contributes to the risk score. The risk factors are shown in the following order:

*   **In effect** - these factors were identified and contributed to the risk score
*   **No effect** - these factors were identified in the violation but didn’t affect the risk score
*   **Not detected** - these factors weren’t detected when the violation was analyzed

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
