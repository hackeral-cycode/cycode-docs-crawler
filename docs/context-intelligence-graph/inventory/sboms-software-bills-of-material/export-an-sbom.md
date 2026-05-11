# Export an SBOM | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/inventory/sboms-software-bills-of-material/export-an-sbom

---

# Export an SBOM

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/inventory/sboms-software-bills-of-material/export-an-sbom.md "Edit this page")

Updated on Aug 13, 2025 • Published on Aug 5, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can export SBOMs for your Cycode projects in standard industry formats from the Reports view.

## Supported SBOM Formats [Copied!](#supported-sbom-formats "Copy link to this section")

Cycode supports the two leading industry standards for SBOMs, allowing for maximum compatibility with other tools and systems.

Format

Description

Primary use case

CycloneDX

An OWASP SBOM standard designed for security contexts and the identification of known and unknown risks.

Best for application security, vulnerability management, and integration with modern security tools.

SPDX

Robust, open standard (ISO/IEC 5962:2021) that focuses on comprehensively capturing software component and license information.

Best for detailed license compliance, legal reviews, and situations requiring a high degree of formal specification.

## Generate an SBOM report [Copied!](#generate-an-sbom-report "Copy link to this section")

1.  In the Imported SBOMs view, click **Export SBOM**(or in the Reports view click **Create Report**) to launch the report wizard.
    
2.  In the **Details** page, type a name and optional description for the report.
    
3.  (Reports view only) In the **Report type** page, select **SBOM**.
    
4.  In the **SBOM report content** page, configure the scope of the SBOM report:
    
    Use
    
    To…
    
    **Repository**
    
    Export dependencies that are found in SCM repositories.
    
    **Imported SBOM**
    
    Export a report about an imported SBOM.
    
5.  Select whether to include vulnerabilities associated with the exported code dependencies.
    
6.  Select whether to include dev dependencies.
    
7.  Click **Next**.
    
8.  In the Settings page, select the SBOM format, either **SPDX-2.2** or **CycloneDX-1.6**.
    
9.  Select the output file format, either **JSON** or **XML**.
    
    Note
    
    You can configure additional options as described in [Generate a report](/additional-cycode-features/generate-a-report) .
    
10.  Click **Create report**.
     

After the report is generated, it is available in the report list.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
