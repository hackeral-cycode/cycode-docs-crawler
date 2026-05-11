# View and manage container security violations | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations

---

# View and manage container security violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/_index.md "Edit this page")

Updated on Jan 25, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how container security violations that Cycode detects in your container environment are displayed, and what information is available for analysis and handling.

Container security violations refer to security issues and vulnerabilities found within container images. Containerization technologies like Docker have become popular for packaging and deploying applications, but they can introduce unique security challenges.

## View the container security violations [Copied!](#view-the-container-security-violations "Copy link to this section")

To view to the container security violations, go to **Violations > Modules > Container security**. Cycode displays the following information about your container security.

### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Risk score

Visualizes the spread of vulnerabilities according to the calculated Cycode risk score, with an adjustable slider so you can customize the risk score range of the violations that are shown in the table. Also shows the total number of open container security violations.

Detection time

A timeline showing when vulnerabilities were first discovered, with an adjustable slider so you can customize the date range of violations that are shown in the table. A significant spike in activity suggests an increase in scans or a new influx of vulnerabilities.

Prioritization funnel

Funnel that filters down the total violations by risk score > high + critical severity > critical severity > created date to highlight the violations that should be remediated first.

### Container security violation table [Copied!](#container-security-violation-table "Copy link to this section")

The Container security page shows the following details about each violation. To drill through and view the violation card, click the row in the table.

For more information about the violation card, go to [Container security violation card](/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/container-security-violation-card) .

Column

Description

Vulnerability ID

ID of the CVE vulnerability on which the violation is based.

Security tool

The name of the security tool that detected the violation.

Found in

The source where the violation was detected and path to the location.

Package type

Indicates whether the package is located in a software application or the operating system.

Vulnerable package

Software package that contains the vulnerability.

CVSS score

Severity of the software vulnerability according to the CVSS.

Note

The CVSS score doesn’t affect the Cycode risk score.

Vulnerability fix version

(If available) Version of the software package that contains the vulnerability fix.

Container image digest

SHA of the container image.

First detected

The date and time stamp when the violation was first detected in the container image.

Risk status

Cycode risk score and current status of the violation.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
