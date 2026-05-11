# Cycode Visual Studio Extension | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension

---

# Cycode Visual Studio Extension

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/_index.md "Edit this page")

Updated on Sep 19, 2024 • Published on Jul 3, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Cycode’s Visual Studio Extension is an extension for versions 2015, 2017, 2019, and 2022 that helps users to adopt a shift-left strategy, by enabling code scanning early in the development lifecycle, which could significantly help businesses avoid costly repairs and potential complications down the line.

The Visual Studio Extension scans your code for exposed secrets, passwords, tokens, keys, and other credentials, as well as open-source packages’ vulnerabilities.

### Functionalities [Copied!](#functionalities "Copy link to this section")

The extension provides functionalities including:

*   A tree view, broken down by:
    
    *   Scanning categories:
        *   Hardcoded secrets
        *   Open-source threats (SCA)
        *   Infrastructure as Code (IaC)
        *   SAST
    *   Files
*   The option to run a new scan from your IDE even before committing the code
    
*   Triggering a scan automatically whenever a file is saved
    
*   Adding detections to the **Error List** tool window
    
*   An option to “Ignore this violation” for secrets
    
*   A “Open Violation Card” as a suggested action
    
*   A violation card for that enables in-depth violation analysis with remediation recommendations. - Violation card toolbar actions include: Back to Home/Main Menu (closes the violation card and opens a menu with buttons to start scans), Expand All nodes, Collapse All nodes.
    

Note

For the latest information about the supported features, see the [Cycode developer support matrix](/developer-experience/developers/cycode-cli/cycode-cli-support-matrix-for-ides) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
