# Create an ignore file | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/pull-request-pr-scanning/create-an-ignore-file

---

# Create an ignore file

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/pull-request-pr-scanning/create-an-ignore-file.md "Edit this page")

Updated on Nov 24, 2025 • Published on Nov 23, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Developers can use a **.cycodeignore** file to exclude specific file paths from being scanned.  
The .cycodeignore file works just like a .gitignore file, and should be used to prevent certain paths from triggering violations and to target only relevant code in scans.

Early Access

This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.

## Create a .cycodeignore file [Copied!](#create-a-cycodeignore-file "Copy link to this section")

If the **Exclude paths** feature is enabled in your environment, you can add a **.cycodeignore** file to your repository. All scanners that have been configured to allow the .cycodeignore file will exclude the specified file paths.

1.  Create a file named **.cycodeignore** in the root directory of your repository.
    
2.  Specify the files and directories you want to exclude, using the same patterns that are defined for .gitignore files.
    
    Note
    
    For information about supported patterns in the .gitignore file, go to the [Git docs](https://git-scm.com/docs/gitignore) .
    
3.  Commit and push the .cycodeignore file to your repository.
    
4.  For all subsequent scans, Cycode reads the .cycodeignore file and excludes the specified file paths.
    

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
