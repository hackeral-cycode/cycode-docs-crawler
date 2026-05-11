# Secrets in binaries and archived files | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/how-does-cycode-detect-secrets/secrets-in-binaries-and-archived-files

---

# Secrets in binaries and archived files

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/how-does-cycode-detect-secrets/secrets-in-binaries-and-archived-files.md "Edit this page")

Updated on Nov 12, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Secrets are sometimes embedded in binary and compressed files, which are harder to detect than secrets in plain-text code. Attackers can extract these secrets through reverse engineering or when archives are shared internally or externally.

Cycode helps reduce hidden exposures by scanning binaries, archives, and other non-text assets to identify secrets that would otherwise be hidden in packaged code or shared files.

Cycode also provides clear tagging and filtering so you can manage binary file detections efficiently.

Cycode scans the following:

*   Docker images - may contain application code, dependencies, and configurations. Hardcoded secrets within images can also be exploited if deployed without proper security measures.
    
*   File storage - binary files stored in file storage systems may inadvertently include sensitive documents, configuration files, or backups that contain secrets.
    
*   Shared files in productivity tools - files shared in collaboration platforms like Slack may include secrets (for example, credentials or API keys), risking disclosure if not properly scanned.
    

## View secrets detected in binary/archived files [Copied!](#view-secrets-detected-in-binaryarchived-files "Copy link to this section")

### Binary file tag [Copied!](#binary-file-tag "Copy link to this section")

Cycode automatically labels validated findings with a **binary file** tag. The tag is visible in the following places:

*   Violations page - when grouped by **Secret value**, show the **Secret tags** column
    
*   Secret violation card - in the **Overview** tab >**General info** section
    
*   Secret value card - in the **Overview** tab >**Where** section >**Location** tags
    

You can also filter the table in the Violations view by the **binary file** tag.

Note

For binary files, Cycode doesn’t display a full code snippet in the violation card because the file is non-textual.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
