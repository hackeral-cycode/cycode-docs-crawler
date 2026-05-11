# Developers | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers

---

# Developers

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/_index.md "Edit this page")

Updated on Jan 25, 2026 • Published on Jan 25, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Cycode developer experience is designed to let developers work as usual without getting in the way, while still ensuring that the code commits are secure and safe.

## Getting Started [Copied!](#getting-started "Copy link to this section")

The following sections describe the Cycode tools that are available for you to use as part of your development process. Your security admin has already set up all the tools and processes you need to use Cycode.

## Cycode VSCode Extension [Copied!](#cycode-vscode-extension "Copy link to this section")

The Cycode VSCode Extension is a plugin for Microsoft’s Visual Studio Code (VSCode) editor, and is designed to look specifically for exposed secrets, passwords, tokens, keys and other credentials in your code.

![](/assets/48d7751-image.png)

The VSCode Extension includes the following features:

*   **Cycode CLI**: The extension includes a built-in Cycode command-line interface (CLI) that allows you to interact with the Cycode platform directly from the VS Code editor. For more information, go to [Cycode CLI](/developer-experience/developers/cycode-cli/) .
    
*   **Error Highlighting**: The extension provides syntax highlighting for Cycode-specific code and configuration files, making it easy for you to identify and work with these files in their projects.
    

### What do you need to do? [Copied!](#what-do-you-need-to-do "Copy link to this section")

Get a token from your security admin, and then follow the instructions in [Cycode VS Code Extension/Eclipse Theia](/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/) to install the plugin on your machine, authenticate with Cycode, run scans on your code, and resolve any issues you find.

![](/assets/a217e29-image.png)

The plugin currently supports secrets and SCA (beta); in the future we’ll be adding IaC and SAST.

## Cycode Jetbrains IDE Plugin [Copied!](#cycode-jetbrains-ide-plugin "Copy link to this section")

The [Cycode JetBrains IDE Plugin](/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin/) helps users to adopt a shift-left strategy, by enabling code scanning early in the development lifecycle.

The Cycode IntelliJ Platform plugin scans your code for exposed secrets, passwords, tokens, keys, and other credentials, as well as open-source packages’ vulnerabilities. The extension provides functionalities such as:

*   Running a new scan from your IDE even before committing the code
    
*   Triggering a scan automatically whenever a file is saved
    
*   Highlighting vulnerable code in the editor - syntax highlighting for Cycode-specific code and configuration files, making it easy for users to identify and work with these files in their projects
    
*   Removing a detected secret or ignoring it by secret value, rule (type) or by path
    

## Pull Request (PR) Scanning [Copied!](#pull-request-pr-scanning "Copy link to this section")

[Pull Request (PR) scanning](/developer-experience/developers/pull-request-pr-scanning/) is one of the most popular tools available to developers. Once your organization integrates Cycode with your source code, you can control which repositories and organizations are monitored by Cycode as part of the pull request/merge request (PR) status check scanners.

### What do you need to do? [Copied!](#what-do-you-need-to-do-1 "Copy link to this section")

If Cycode detects findings in PR scans, you’ll need to decide how to address the findings based on the options that were set up for the scan as described in Enabling and configuring scanners.

Depending on the setting selected by your security admin - and the scan category - you can now take one or more of the following actions in the PR comment. In the example below, the actions displayed are the ones that your security admin can select when scanning for secrets:

*   Mark secret as false positive - Allows you to mark the found secret as a false positive in a comment of the PR\\
    
*   Mark secret as revoked - Allows you to mark the found secret as revoked in a comment of the PR (i.e., the secret value was revoked/regenerated)
    
*   Ignore secret in this pull request only - Allows you to ignore the secret for this PR in a comment
    
*   Ignore secrets in all repositories - Allows you to ignore this secret value in all repositories in a comment of this PR
    

Here’s an example of what this might look like:

![](/assets/55fc1e4-image.png)

To learn more about the types of actions available for other scans, see the **Advanced options** for each scanner category:

*   [SAST Scanner](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-scan-faqs)
    
*   [SCA Scanner](/developer-experience/developers/pull-request-pr-scanning/sca-pr-scanners)
    
    *   [Dependency Vulnerability](/developer-experience/developers/pull-request-pr-scanning/sca-pr-scanners)
    *   [License Compliance](/developer-experience/developers/pull-request-pr-scanning/sca-pr-scanners)
*   [IaC Scanner](/developer-experience/developers/pull-request-pr-scanning/iac-pr-scanner)
    
*   [CI/CD Scanner](/developer-experience/developers/pull-request-pr-scanning/ci-cd-security-pr-scanner)
    

## Command Line Interface (CLI) [Copied!](#command-line-interface-cli "Copy link to this section")

The [Cycode CLI](/developer-experience/developers/cycode-cli/) scans your locally stored repositories for any secrets, SCA, or infrastructure-as-code (IaC) misconfigurations. The CLI tool integrates with CI tools, and runs prior to the pre-commit, enabling you to block commits to the code if needed.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
