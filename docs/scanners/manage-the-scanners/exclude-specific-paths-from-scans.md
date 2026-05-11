# Exclude specific paths from scans | Cycode Docs

Source: https://docs.cycode.com/scanners/manage-the-scanners/exclude-specific-paths-from-scans

---

# Exclude specific paths from scans

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/manage-the-scanners/exclude-specific-paths-from-scans.md "Edit this page")

Updated on Feb 5, 2026 • Published on Oct 29, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

To exclude specific paths from being scanned, developers can create and maintain a **.cycodeignore** file that specifies files and directories in your repository that Cycode should exclude from security scans.

The .cycodeignore file works just like a .gitignore file, and reduces noise by preventing certain paths from triggering violations so the scans target only your relevant code.

Early Access

This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.

## Allow the .cycodeignore file [Copied!](#allow-the-cycodeignore-file "Copy link to this section")

Before developers can use this feature, admins must enable it for the organization.

1.  Go to **Settings** > **Scanners** > **General Settings** > **Exclude paths**.
    
2.  Enable the **Allow .cycodeignore file** option.
    
3.  In the **Select scanners** area, select the scanners that can use the .cycodeignore file.
    
4.  In the **Select assets** area, select the organizations and repositories where developers are allowed to exclude paths from scanning.
    

## .cycodeignore file details [Copied!](#cycodeignore-file-details "Copy link to this section")

### Standard Cycode scanners [Copied!](#standard-cycode-scanners "Copy link to this section")

For repository, push event, and pull request scans that are configured and applied using the Cycode interface, the .cycodeignore file must meet the following criteria:

*   The .cycodeignore file must reside in the root directory.
    
*   If the .cycodeignore file has a syntax error, scanners will ignore the entire file and the paths won’t be excluded from scanning.
    

### CLI scans [Copied!](#cli-scans "Copy link to this section")

For scans that are configured and applied via the CLI, Cycode treats the .cycodeignore file as follows:

*   Cycode uses the .cycodeignore file located in the current working directory where you initiate the scan. This means you can use different .cycodeignore files in subfolders.
    
*   If the .cycodeignore file has a syntax error, CLI scans fail and return an error.
    

Note

This file is used to exclude paths from scanning, and doesn’t instruct the scanner to ignore specific violations. For information on how to configure the CLI to ignore specific violations, go to [Ignoring scan results](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#ignoring-scan-results) in the Cycode CLI docs.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
