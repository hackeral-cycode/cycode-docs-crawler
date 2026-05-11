# CI CD Security PR scanner | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/pull-request-pr-scanning/ci-cd-security-pr-scanner

---

# CI CD Security PR scanner

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/pull-request-pr-scanning/ci-cd-security-pr-scanner.md "Edit this page")

Updated on Apr 12, 2024 • Published on Apr 12, 2024

* * *

By integrating security scanning into the CI/CD pipeline, organizations can achieve a balance between speed and security. This approach promotes a DevSecOps culture, where security is an integral part of the development and deployment process, fostering collaboration between development, operations, and security teams.

Important

**Warning** Failed status checks fail the Pull Request/Merge Request (PR) by default.

Here’s an example of a CI/CD Security scan:

![](/assets/image-45.png)

## Setting up CI/CD PR Scanning [Copied!](#setting-up-cicd-pr-scanning "Copy link to this section")

Administrator users (only) will need to set up PR scanning for CI/CD security using the PR Settings under CI/CD Security. These settings are also used to set up how violations are dismissed.

## Dismissing Secret Violations [Copied!](#dismissing-secret-violations "Copy link to this section")

*   **#cycode\_ignore\_insecure\_pipeline\_violation\_everywhere** - Applies to this resource for this violation for all requests in your repository
*   **#cycode\_ignore\_insecure\_pipeline\_violation\_here** - Applies this resource for this violation in this request only

![](/assets/image-44.png)

### Which CI/CD Security Policies Are Checked During the PR Scan? [Copied!](#which-cicd-security-policies-are-checked-during-the-pr-scan "Copy link to this section")

The following policies are checked for the CI/CD Security pull request scans:

*   GitHub workflows use uncertified CI/CD modules
*   CircleCI workflows use uncertified CI/CD modules
*   CI/CD workflow is maintained by 3rd party
*   Build step exposed to code injection

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
