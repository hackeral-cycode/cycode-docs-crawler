# SAST PR scanner | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/pull-request-pr-scanning/sast-pr-scanner

---

# SAST PR scanner

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/pull-request-pr-scanning/sast-pr-scanner.md "Edit this page")

Updated on Sep 23, 2025 • Published on Sep 15, 2024

* * *

SAST scanning is a type of security testing that analyzes the source code or compiled version of an application to identify security vulnerabilities and weaknesses. SAST is performed without executing the code; instead, it examines the application’s source code, bytecode, or binary code to find potential security issues early in the development process.

Important

**Warning** Failed status checks fail the Pull Request/Merge Request (PR) by default.

Here’s an example of a SAST scan result:

![](/assets/image-43.png)

## Setting up SAST PR scanning [Copied!](#setting-up-sast-pr-scanning "Copy link to this section")

Administrator users (only) will need to set up PR scanning for SAST using the [PR Settings](/scanners/ast-application-security-testing/sast-static-application-security-testing/configure-the-sast-scanner/sast-pr-scanner-settings) under SAST. These settings are also used to set up how secret violations are dismissed.

## Dismissing SAST Violations [Copied!](#dismissing-sast-violations "Copy link to this section")

Read more about it [here](/scanners/ast-application-security-testing/sast-static-application-security-testing/configure-the-sast-scanner/sast-pr-scanner-settings) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
