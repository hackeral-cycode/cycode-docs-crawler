# SAST (Static Application Security Testing) | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing

---

# SAST (Static Application Security Testing)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/_index.md "Edit this page")

Updated on Aug 28, 2025 • Published on Nov 24, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Static Application Security Testing (SAST) is a proactive approach to securing your software applications. It scans your codebase early in the development process to detect vulnerabilities before they become a threat.

Cycode’s SAST tool analyzes your code and provides an additional layer of protection against security issues.

## How integrating SAST improves security [Copied!](#how-integrating-sast-improves-security "Copy link to this section")

SAST identifies vulnerabilities in your source code before it reaches production. This early detection lets you fix issues faster, reduce the risk of security breaches, and keep your applications safer.

SAST supports multiple programming languages and frameworks, associates vulnerabilities with Common Weakness Enumeration (CWE) identifiers, and provides a comprehensive security assessment.

## Benefits of using Cycode’s SAST [Copied!](#benefits-of-using-cycodes-sast "Copy link to this section")

*   **Compliance and regulation**: Helps you meet industry security and regulatory requirements, keeping sensitive data secure.
    
*   **Improved developer productivity**: Provides real-time feedback so developers can address vulnerabilities as they code, reducing rework later.
    
*   **Lower business risk**: Prevents security incidents that could damage your reputation, reduce customer trust, and cause financial losses.
    
*   **Continuous improvement**: Adapts to changes in your applications and continually scans for new vulnerabilities.
    
*   **Customization**: Lets you configure severity levels to match your organization’s security strategy and compliance requirements.
    

## Setting severities for SAST violations [Copied!](#setting-severities-for-sast-violations "Copy link to this section")

SAST assigns severity levels to issues based on predefined rules in the engine. These rules consider factors such as the programming language, the type of vulnerability, and related CWE identifiers. This ensures the assigned severity reflects the potential impact and risk.

You can also customize severity levels through the platform’s interface without modifying the engine rules. This allows you to align severity settings with your organization’s security policies and compliance framework.

## Automatic Resolution in SAST [Copied!](#automatic-resolution-in-sast "Copy link to this section")

SAST goes beyond detection by helping manage and resolve vulnerabilities efficiently:

*   **Issue detection and flagging**:Scans the default branch and flags vulnerabilities in the platform or pull requests.
    
*   **Automatic marking as resolved**:When vulnerabilities are fixed, SAST marks them as resolved automatically.
    
*   **Continuous re-scan**:New commits trigger fresh scans to analyze any code changes.
    
*   **Auto-resolution logic**:If a vulnerability has been modified in the new code, SAST assumes it is resolved, reducing manual work.
    
*   **New alerts for fresh vulnerabilities**:Generates alerts for vulnerabilities introduced by recent changes.
    

This continuous cycle of scanning, flagging, and resolving ensures a secure development process while reducing manual overhead.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
