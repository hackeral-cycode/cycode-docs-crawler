# Import an SBOM | Cycode Docs

Source: https://docs.cycode.com/context-intelligence-graph/inventory/sboms-software-bills-of-material/import-an-sbom

---

# Import an SBOM

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/inventory/sboms-software-bills-of-material/import-an-sbom.md "Edit this page")

Updated on Aug 31, 2025 • Published on Aug 5, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can import an existing Software Bill of Materials (SBOM) into Cycode. This enables you to gain immediate security visibility into third-party applications, commercial off-the-shelf (COTS) software, or any project where you have an SBOM but not direct access to the source code.

After you import the SBOM, Cycode analyzes its component list for known vulnerabilities, license risks, and other security issues, integrating the asset into your overall application security posture.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

The SBOM import file must meet the following requirements.

*   Cycode supports the following SBOM industry standards:
    
    *   CycloneDX 1.6 and earlier
    *   SPDX
*   The SBOM file must be in one of the following formats:
    
    *   JSON
    *   XML
*   The components listed in the SBOM must belong to package ecosystems that Cycode supports for SCA scanning.
    
    Note
    
    The maximum file size for SBOM imports is 10MB.
    

## Import an SBOM to Cycode [Copied!](#import-an-sbom-to-cycode "Copy link to this section")

1.  In Cycode, go to **Inventory** > **Bill of Materials** > **Software**.
    
2.  Click **Add SBOM** in the top-right corner of the page to launch the import wizard.
    
3.  In the **SBOM Details** page, provide the following information, then click **Next**.
    
    Field
    
    Description
    
    **SBOM name**
    
    (Required) A descriptive name for the application or component.
    
    **Vendor name**
    
    (Required) The name of the third-party vendor or organization that supplied the software or SBOM file.
    
    **Business impact**
    
    (Required) The criticality of this application to your business (e.g., High, Medium, Low).
    
    **Owner**
    
    (Optional) The primary contact person or team responsible for this application within your organization.
    
    **Labels**
    
    (Optional) Add tags for easier filtering and organization (e.g., production, pci-scope, cots).
    
4.  In the **Choose a file** page, drag and drop your SBOM file into the **SBOM upload** area, or click **Select a file** to open a local browsing window.
    
5.  After the file has been successfully uploaded, click **Import**. This also closes the wizard.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
