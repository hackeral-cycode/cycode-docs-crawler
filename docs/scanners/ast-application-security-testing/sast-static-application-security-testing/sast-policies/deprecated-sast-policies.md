# Deprecated SAST policies | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/deprecated-sast-policies

---

# Deprecated SAST policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/deprecated-sast-policies.md "Edit this page")

Updated on May 21, 2026 • Published on Jun 28, 2024

* * *

These policies have been deprecated on the Cycode platform. No new instances will be created but we provide this list as a reference for any legacy violations.

## Java [Copied!](#java "Copy link to this section")

Policy Name

Description

Usage of vulnerable Apache Commons Collections InvokeTransformer class

The InvokeTransformer class in versions of Apache Commons Collections older than 3.2.2 is susceptible to remote code execution vulnerabilities. This issue arises during the deserialization of data, where malicious actors can execute arbitrary code on the server.

## JavaScript [Copied!](#javascript "Copy link to this section")

Policy Name

Description

Usage of vulnerable DOMPurify package

For DOMPurify versions less than 2.0.17, there are XSS vulnerabilities when using the sanitize function without proper configuration.

Usage of vulnerable marked package

For versions of marked less than 2.0.0, there is a Regular expression Denial of Service (ReDoS) vulnerability.

## Python [Copied!](#python "Copy link to this section")

Policy Name

Description

Usage of weak secret key

Weak secret keys can compromise data security. To ensure effective encryption, secret keys should be 12 bytes or greater.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
