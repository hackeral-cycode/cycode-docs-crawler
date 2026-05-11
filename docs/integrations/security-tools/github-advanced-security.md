# GitHub Advanced Security | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/github-advanced-security

---

# GitHub Advanced Security

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/github-advanced-security.md "Edit this page")

Updated on Jan 29, 2026 • Published on Feb 11, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector for GitHub Advanced Security enables pulling SAST vulnerabilities from GitHub CodeQL and secret violations from Secret Protection so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SAST

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

### General [Copied!](#general "Copy link to this section")

You must have an active GitHub SCM integration.

### Secret scanning [Copied!](#secret-scanning "Copy link to this section")

Supported for the following repository types:

*   Public repositories hosted on GitHub.com
*   Repositories owned by organizations that use GitHub Team and have Secret Protection turned on

For more information about GitHub Secret protection, go to the [GitHub docs](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-your-repository) .

### Code scanning [Copied!](#code-scanning "Copy link to this section")

Supported for the following repository types:

*   Public repositories hosted on GitHub.com
*   Repositories owned by organizations that use GitHub Team, GitHub Enterprise Cloud, or GitHub Enterprise server and have Code Security enabled.

For more information about GitHub CodeQL, go to the [GitHub docs](https://docs.github.com/en/code-security/concepts/code-scanning/codeql/about-code-scanning-with-codeql) .

## Connect GitHub CodeQL to Cycode [Copied!](#connect-github-codeql-to-cycode "Copy link to this section")

Note

If one or more of the organizations you select doesn’t have the permissions required to fetch the indicated data, an error message is displayed with a link so you can update the permissions.

1.  In **Settings** > **Integrations** > **Security**, click the **GitHub Advanced Security** card.
2.  In the **Select organizations** page, do the following:
    1.  Select one or more organizations to connect.
    2.  Select one or more vulnerability types.
3.  Click **Save changes**.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
