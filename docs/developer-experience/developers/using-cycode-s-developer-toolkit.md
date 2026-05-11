# Using Cycode's Developer Toolkit | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/using-cycode-s-developer-toolkit

---

# Using Cycode's Developer Toolkit

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/using-cycode-s-developer-toolkit.md "Edit this page")

Updated on Jul 14, 2024 • Published on Jul 14, 2024

* * *

Cycode supports a number of capabilities to block new violations, whether through PR scanning, pre-commits, inline VSCode scanning and more. Cycode’s Developer Toolkit aims to streamline security practices for both developers and security administrators, offering a comprehensive suite of features tailored to enhance efficiency and security in the development process.

As demonstrated in the image below, each capability provides addresses a specific phase in the SDLC, providing you with complete coverage.

![](/assets/image-32.png)

Let’s dive into the different capabilities, their pros and cons.

## VS Code and JetBrains IDEs [Copied!](#vs-code-and-jetbrains-ides "Copy link to this section")

As part of the ‘shift-left’ approach to security, Cycode released it VS Code and JetBrains IDEs plugins, which tackle security issues in the pre-staging phase, thereby saving time and reducing risks and costs associated with later fixes. These plugins facilitate code scanning for exposed credentials, vulnerabilities, and misconfigurations.

The plugins require you to have VS Code or JetBrains IDEs installed and a Cycode account, and their outputs are integrated security features within IDEs.

Pros:

*   Early detection of security issues
*   Seamless integration into the developer’s workflow
*   Customizable guidelines for company-specific protocols

Cons:

*   Dependency on specific IDEs may limit accessibility for some developers

### Controlled shift-left using Cycode’s dev tools [Copied!](#controlled-shift-left-using-cycodes-dev-tools "Copy link to this section")

Let’s do a deep dive into the dev tools available to you:

*   IDE ([VS Code Extension](/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors) and [JetBrains IDE Plugin](/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin) )
    
*   Cycode [CLI](/developer-experience/developers/cycode-cli) tool as part of the controlled shift left
    
    *   On-demand scans with Cycode CLI
    *   [CLI with pre-commit](/developer-experience/developers/cycode-cli) hook
        *   [Pre receive hook](/developer-experience/developers/cycode-cli/cli-pre-receive-hook)
    *   Integration to CI processes (for example [GitLab Runner](/integrations/build-tools/gitlab-runner) )
*   PR scan (see [Focus on… controlled shift-left](/knowledge-base/focus-on-articles/focus-on-controlled-shift-left) )
    

## Cycode Command Line Interface (CLI) [Copied!](#cycode-command-line-interface-cli "Copy link to this section")

The Cycode CLI remains an essential part of our toolkit, facilitating security scans for hardcoded secrets, misconfigurations, and vulnerabilities. It seamlessly integrates into developers’ CI/CD pipelines such as Jenkins, GitHub Actions, and GitLab Runner. Through the Report option, users can easily push their local scan results to the Cycode platform for further analysis. Additionally, features like pre-commit and pre-receive hooks prevent hardcoded secrets from entering collaborative remote repositories, enhancing security throughout the development process.

To use the CLI you’ll need Cycode’s CLI and access to your CI/CD pipeline configuration. The outputs for this feature are streamlined security scans and integration with CI/CD pipelines.

Pros:

*   Seamlessly integrates into existing workflows
*   Provides flexibility for handling and analyzing scan results
*   Prevents hardcoded secrets from entering repositories

Cons:

*   Requires familiarity with CLI usage

## Pull Request (PR) scans [Copied!](#pull-request-pr-scans "Copy link to this section")

Cycode’s PR scanners enable early detection of security issues within the pull requests as well as the option to integrate with your company’s custom security guidelines. This allows you to control and monitor repositories for potential violations during the code review process.

PR scanning requires you to have a Cycode account and access to repositories. The output is the early detection of security issues in PRs.

Pros:

*   Enables early detection of security issues
*   Customizable security guidelines
*   Enhances code review process

Cons:

*   May increase the time required for code review

## AI SAST remediation [Copied!](#ai-sast-remediation "Copy link to this section")

Cycode’s PR scanners and IDE plugins now offer AI-powered SAST remediation fixes. These tools suggest intelligent solutions for security issues, leveraging AI contextual remediation and improved precision. This enriches the developer’s workflow and bolsters the security of your applications.

This capability requires a Cycode account and access to PR scanners or IDE plugins. The output is AI-based suggestions for security issue fixes.

Pros:

*   Enhances precision in identifying and remedying security issues
*   Improves the developer experience

Cons:

*   Dependency on AI accuracy and contextual understanding

Want to learn more? Check out our detailed blog on [Cycode’s new security tools for developers and AppSec teams](https://cycode.com/blog/cycodes-new-security-tools-for-developers-and-appsec-teams/) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
