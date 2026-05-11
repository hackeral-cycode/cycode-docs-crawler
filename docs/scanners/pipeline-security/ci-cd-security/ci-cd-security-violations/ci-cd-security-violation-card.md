# CI/CD Security violation card | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations/ci-cd-security-violation-card

---

# CI/CD Security violation card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations/ci-cd-security-violation-card.md "Edit this page")

Updated on Oct 30, 2024 • Published on Oct 30, 2024

* * *

The following table describe the different details of the violation card overviews for CI/CD. The actual fields displayed may vary depending on the violation.

Field

Description

Description

Description of the violation; if a remediation (Cycode and/or Company Guidelines) is available, the description will also include a link to the Remedation tab.

Cycode Project

The project that contains the violation

Source

SCM source in which the violation was detected

Organization

The organization associated with the repository in which the violation was detected

Repository

The repository in which the violation was detected

Branch Name

The branch in which the violation was detected

Detected At

Date and time when the violation was detected

classification rules

If you’ve defined [classification rules and custom labels](/workflow-automation/) in your policies, the Violation card will also display this additional information.

Custom Labels

If you’ve defined custom labels for the classification rules, these will be displayed with a hashtag to indicate that they are custom labels.

## CI/CD Security violation risk score factors [Copied!](#cicd-security-violation-risk-score-factors "Copy link to this section")

Note

Some of the risk factor names may differ slightly from the names of the fields in violations. The names used in the risk factors are designed to reflect the relevant terminology.

Risk Factor

Description

**Base Impact**

Severity

Severity is based on the potential for unauthorized access of sensitive information, and considers the default policy severity and whether the severity was updated by a Classification Rule.

Business Impact

Project business impact is determined by the importance of the project to the business; the violation’s risk score will be the maximum business impact of all the projects to which it’s associated.

**Vulnerability Impact**

Violation Subcategory

Refers to the different types of violation subcategories that can occur in the CI/CD violation category; every violation type will get a different value

**Likelihood**

\*\* Note\*\*: For all of these fields, if the violation is not related to the listed entity, the value of this field will be 0.

User Missing 2FA

Analyzes whether a violation was originated by a user that doesn’t have two-factor authentication enabled.

Bot User

Analyzes whether a violation was originated by a bot account.

Publicly Exposed

Analyzes whether a violation is located in a public-facing repository or other publicly-available asset.

Default User Access

Analyzes whether a violation occurs in an organization that defaults to granting Admin/Write permissions to new members.

Organization Enforces 2FA

Analyzes whether a violation is located in an organization that enforces two-factor authentication.

Organization Enforces SSO

Analyzes whether a violation is located in an organization that uses single sign-on.

Public Repositories Permitted

Analyzes whether a violation is located in an organization that allows creating public repositories.

Archived Repository

Analyzes whether a violation is located in a repository that has been archived, which means it will have a lower impact on the risk score.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
