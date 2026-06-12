# Cycode VS Code Extension and Compatibles Editors | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors

---

# Cycode VS Code Extension and Compatibles Editors

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/_index.md "Edit this page")

Updated on Oct 6, 2025 • Published on Mar 28, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

The Cycode VS Code Extension is a plugin for Microsoft’s Visual Studio Code (VS Code) editor that helps users to adopt a shift-left strategy, by enabling code scanning early in the development lifecycle, which could significantly help businesses avoid costly repairs and potential complications down the line.

Note

Cycode supports multiple editors built on the VS Code ecosystem. These include **Eclipse Theia**, **Cursor**, **Windsurf**, and other editors compatible with the VS Code extension API. The Cycode VS Code Extension is also published to the [Open VSX Registry](https://open-vsx.org/) and can be installed in any editor that consumes Open VSX.

The Cycode Extension provides full coverage across all supported IDEs and editors, offering features for Secrets Detection, SCA, IaC, and SAST. The tree view and violation cards are already available and work consistently across compatible environments.

### Scan behavior [Copied!](#scan-behavior "Copy link to this section")

The Cycode VS Code Extension runs Secrets, SCA, and IaC scans automatically when a file is saved. SAST scans are not triggered on save; to run SAST against new or modified code, start a manual workspace scan from the actions toolbar.

### Violation highlighting [Copied!](#violation-highlighting "Copy link to this section")

Violations are highlighted in the editor using the standard VS Code error squiggle. Line-level highlighting is constrained by the VS Code extension API, so an alternative visual indicator for violations is not currently configurable.

### Local network permission prompts [Copied!](#local-network-permission-prompts "Copy link to this section")

Some browsers display a prompt that the application “wants to look for and connect to any device on your local network” when authenticating the extension. This is a standard browser permission. Cycode does not scan local devices without explicit user authorization, and all communication is encrypted.

### JetBrains plugin and IntelliJ versions [Copied!](#jetbrains-plugin-and-intellij-versions "Copy link to this section")

The JetBrains plugin has not been officially tested against IntelliJ 2026.1. Unless JetBrains breaks plugin compatibility (which is rare across point releases), the plugin is expected to work on that version.

### Key Features [Copied!](#key-features "Copy link to this section")

The Cycode VS Code Extension scans your code for exposed secrets, passwords, tokens, keys, and other credentials, as well as open-source packages’ vulnerabilities. The extension provides functionalities such as:

*   A tree view, broken down by:
    
    *   Scanning categories:
        *   Hardcoded secrets
        *   Open-source threats (SCA)
        *   Infrastructure as Code (IaC)
        *   Code security (SAST)
    *   Files
*   The option to run a new scan from your IDE even before committing the code
    
*   Triggering a scan automatically whenever a file is saved
    
*   Highlighting vulnerable code in the editor - syntax highlighting for Cycode-specific code and configuration files, making it easy for users to identify and work with these files in their projects
    
*   An actions toolbar (detailed below)
    
*   A loading screen
    
*   A violation card (detailed below)
    

### VS Code violation card [Copied!](#vs-code-violation-card "Copy link to this section")

The VS Code violation card enables in-depth violation analysis with remediation recommendations:

The violation card also includes:

*   An option to ignore the current violation for secrets:
    
*   The CWE and CVE in the card are clickable and open detailed information:
    
*   Removing a detected secret or ignoring it by secret value or secret rule (type) or by path
    
*   Upgrading and fixing vulnerable packages following Cycode’s remediation guidelines
    
*   A field for Company Guidelines that displays your company’s custom remediation guidelines
    
*   **Cycode CLI**: The extension includes a built-in Cycode command-line interface (CLI) that allows users to interact with the Cycode platform directly from the VS Code editor ([learn more about Cycode CLI](/developer-experience/developers/cycode-cli/) )
    

### Actions toolbar [Copied!](#actions-toolbar "Copy link to this section")

The actions toolbar, a part of the Cycode console, includes the following functionality:

*   Run All
    
*   Expand All
    
*   Collapse All
    
*   Clear Results
    

### Supported SCA lock files support [Copied!](#supported-sca-lock-files-support "Copy link to this section")

Cycode’s CLI plugin for SCA supports all of the following lock files:

*   Maven
    
*   Gradle
    
*   Golang
    
*   npm
    
*   NuGe
    
*   sbt
    

## Latest supported features [Copied!](#latest-supported-features "Copy link to this section")

For the latest information about the supported features, see [Cycode developer support matrix](/developer-experience/developers/cycode-cli/cycode-cli-support-matrix-for-ides) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
