# Scanning options | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/scanning-options

---

# Scanning options

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/scanning-options/_index.md "Edit this page")

Updated on Sep 8, 2025 • Published on Sep 8, 2025

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Cycode allows administrators to control **where secret scanning is performed** across different environments. Scanning options provide flexibility to align detection with your organization’s security posture while ensuring coverage across diverse sources of risk.

You can configure scanning for:

1.  **File storage systems**
    
2.  **Personal developer repositories**
    
3.  **Potentially leaked repositories**
    

## File Storage Scanning [Copied!](#file-storage-scanning "Copy link to this section")

Cycode’s secret detection engine can scan **cloud file storage environments** for exposed secrets.

👉 For more details, see the dedicated File Storage Scanning documentation.

## Personal Developer Repositories [Copied!](#personal-developer-repositories "Copy link to this section")

Personal developers repositories are often outside the direct control of the organization but may still contain sensitive information. Cycode gives you the flexibility to **enable or disable secret scanning in personal developer repositories**.

*   **Configuration**: Available under **Settings → Secrets → Scanning Options**.
    
*   **Tenant defaults**: Scanning is **disabled by default** and can be opted into as needed.
    
*   **Violation visibility**:
    
    *   When enabled, Cycode scans developers personal repositories and tags violations with “**Personal developer repo**.”
    *   Violations in the **table** display a badge of “Personal developer repo” in the **Found in/Location** column. Hovering over the badge shows the full path.
    *   **Violation cards** display a badge highlighting that the repository is non-organizational and flagged as personal repo.
    *   The **exposure path** displays the **owner of the repository** for remediation context.

This ensures you have full visibility while maintaining control over how personal repositories are handled in your environment.

## Potentially Leaked Repositories [Copied!](#potentially-leaked-repositories "Copy link to this section")

Cycode can identify repositories that appear to be **potentially leaked** and scan them for secrets.

*   **Configuration**: Available under **Settings → Secrets → Scanning Options**.
    
*   **Tenant defaults**: Scanning is **disabled by default** and can be opted into as needed.
    
*   **Violation visibility**:
    
    *   When enabled, Cycode scans newly detected leaked repositories and tags violations with **“Potentially leaked repository.”**
    *   Violations in the **table** display a badge of “Potentially leaked repository” in the **Found in/Location** column. Hovering over the badge shows the full path.
    *   **Violation cards** display a badge highlighting that the repository is non-organizational and flagged as potentially leaked.

Note

Scanning applies only to future leaked repo detections; it is not retroactive.

This provides visibility into secrets exposed in repositories outside your organization’s official control.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
