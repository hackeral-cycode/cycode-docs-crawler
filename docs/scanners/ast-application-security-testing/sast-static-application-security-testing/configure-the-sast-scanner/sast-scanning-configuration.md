# SAST scanning configuration | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/configure-the-sast-scanner/sast-scanning-configuration

---

# SAST scanning configuration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/configure-the-sast-scanner/sast-scanning-configuration.md "Edit this page")

Updated on May 21, 2026 • Published on Mar 24, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic describes how to configure the SAST scanner, which includes policy support, enabling or disabling scanning for specific languages, auto-enabling newly supported languages, and the ability to add custom branches to the scanning scope.

## Scanner features [Copied!](#scanner-features "Copy link to this section")

### Policy support [Copied!](#policy-support "Copy link to this section")

Configure how new policies are enabled in the SAST scanner. Enable the **Automatically apply new policies in the SAST scanner** option to have new Cycode policies automatically applied to your SAST scanning configuration.

Leave this option disabled to control when new policies are enabled for SAST scanning, so you can prevent unexpected changes to your scan results.

### Language support [Copied!](#language-support "Copy link to this section")

Enable and disable SAST scanning for specific programming languages. For supported languages, you can also enable Bearer engine V2 for improved precision.

#### Auto-enable newly supported languages [Copied!](#auto-enable-newly-supported-languages "Copy link to this section")

Configure how new languages are enabled in the SAST scanner. Enable the **Auto-enable newly supported languages** option to automatically add new languages to your SAST scans as they become available.

Leave this option disabled if you want to add new languages manually, so you can prevent unexpected changes to your scan results.

#### Enable and disable languages [Copied!](#enable-and-disable-languages "Copy link to this section")

You can enable or disable each supported language individually.

For languages that support **Bearer engine V2** (see more below), you can enable the V2 engine directly from the language card for improved precision and cross-file analysis.

### Bearer engine V2 [Copied!](#bearer-engine-v2 "Copy link to this section")

Note

If Bearer engine v2 is enabled, scan results may show fewer violations due to the engine’s enhanced precision and more advanced analysis capabilities.

#### General functionality [Copied!](#general-functionality "Copy link to this section")

The new SAST engine introduces full interprocedural analysis, including cross-file scanning. This means vulnerabilities are evaluated in the full context of your application, resulting in much higher precision and fewer false positives.

In addition, the SAST violation card now includes a Data Flow tab, which visualizes the actual data flow behind each vulnerability as analyzed by the engine. This makes it easier to understand the violation and apply the correct fix.

#### Language options [Copied!](#language-options "Copy link to this section")

You can opt in to use Bearer engine v2 on a language-by-language basis. When you enable v2, Cycode behaves as follows:

*   All future scans, including CLI, IDE, on demand and pull requests will use the new engine.
    
*   Violations that were detected using the v1 engine stay in the Cycode platform until they are resolved.
    
    Tip
    
    After you opt in to Bearer engine v2, you may want to run an on-demand scan for all repositories that include the enabled languages. Violations that were detected when these repositories were scanned using v1 will be marked as resolved, which may affect your dashboard statistics.
    
*   Violations that were previously ignored may appear as new violations if they are detected again by the Bearer engine v2.
    

Note

Cycode support can facilitate a managed rollout if you have extensive violation classifications you want to retain, or if you don’t want to affect your dashboard statistics.

#### FAQs [Copied!](#faqs "Copy link to this section")

**For which type of scan is interprocedural analysis (including cross-file scanning) applied?**

Interprocedural and cross-file analysis is available today in **On-Demand Scans (ODS)**, which run across your full application and provide the most comprehensive results. Other scan types (CLI, IDE, Pull Request, and Push Event scans) are optimized for speed and developer workflows, so they focus on smaller code contexts.

**Why do I see differences between On-Demand Scans (ODS) and scans performed from the CLI/IDE?**

CLI and IDE scans are designed to be fast and lightweight, running in a more limited context to give developers quick feedback as they work. On-demand scans analyze the entire application, so they may detect violations that smaller-context scans don’t catch. Using both together provides a balance of speed during development and depth when validating across the full codebase.

**Do you have any data that shows the improved precision of this new engine?**

Yes. Using the OWASP Java benchmark, Bearer engine v2 improved overall precision from 40% to 79.67%, and reduced the false positive rate from 36% to 2.12%.

**Which languages are supported by this new engine?**

Bearer engine v2 currently supports Java (GA), Python (GA), and C# (GA). Additional languages, such as GoLang, are planned for upcoming quarters.

## Configure branch scanning for SAST [Copied!](#configure-branch-scanning-for-sast "Copy link to this section")

You can specify the branches that should be scanned. By default, the SAST scanner runs on the default branch and PRs. You can change the setting to scan for custom branches, which enables you to select more branches to scan, aside from the default branch and PRs.

1.  In the **Settings** > **SAST** page, click **Scanning configuration**.
    
2.  In the **Branch scanning** area, select one of the following options:
    
    Option
    
    Description
    
    **Default only**
    
    Scans only the default branch and its pull requests. This option is enabled by default.
    
    **Select custom branches**
    
    Specify additional branches that should be scanned by the SAST scanner.
    
3.  If you choose **Select custom branches**, configure the **Scan specific branches** area.
    
    Note
    
    The custom branch configuration isn’t case sensitive.
    
4.  Click **Save changes**.
    

Note

*   The SAST scanner doesn’t scan cloned branches. Only new commits are scanned.
*   Cycode shows all violations detected in new commits, namely violations that didn’t exist in the main/previous branch and violations in new code.

### FAQs [Copied!](#faqs-1 "Copy link to this section")

When configuring custom branch scanning, you should take the following into account.

**When does Cycode scan the configured branches?**

After you’ve configured a branch for scanning, only new push events/commits will be scanned.

**Does Cycode scan PRs to the configured branches (where the upstream is the configured branch)?**

Yes, Cycode scans all PRs, and the detected violations will appear in the Cycode platform as violations.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
