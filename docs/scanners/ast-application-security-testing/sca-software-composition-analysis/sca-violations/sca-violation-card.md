# SCA violation card | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card

---

# SCA violation card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/_index.md "Edit this page")

Updated on Feb 10, 2026 • Published on Nov 7, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The SCA violation card provides a concise snapshot of the violation data and streamlines management of the violation’s key aspects. The SCA violation card shares some of the same features and components as the rest of the violation cards, so this article focuses on the unique aspects of the SCA card.

The SCA violation card has a unique Overview tab (different from the other violation cards), and includes some additional features and options (detailed in the follow pages) not displayed in other violation cards. The SCA violation card differs between the two policies associated with SCA violations, so refer to the specific page of the policy to learn more:

*   [Vulnerability found in dependency](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/vulnerability-found-in-dependency/)
    
*   [Use of dependency with non-permissive license](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/use-of-dependency-with-non-permissive-license)
    

## SCA violation risk score factors [Copied!](#sca-violation-risk-score-factors "Copy link to this section")

In this section you’ll find a detailed explanation of the risk score factors used in determining the risk score assigned to the SCA violation (shown at the top of the violation card).

Risk Factor

Description

**Base Impact**

Severity

Severity is based on the potential for unauthorized access of sensitive information, and considers the default policy severity and whether the severity was updated by a Classification Rule. When the Common Vulnerability Scoring System (CVSS) exists for the vulnerability and the vulnerability was identified by Cycode, the severity is based on it.

CVSS

Analyzes the security score a vulnerability has received based on characteristics outlined in the CVSS. CVSS is a worldwide standard that captures the key characteristics of a vulnerability to produce a numerical score reflecting its severity. **Note**: CVSS doesn’t affect the risk score.

Business Impact

Project business impact is determined by the importance of the project to the business; the violation’s risk score will be the maximum business impact of all the projects to which it’s associated.

**Vulnerability Impact**

Exploitability

Analyzes the likelihood of a particular vulnerability being exploited in the wild, based on the Exploit Prediction Scoring System (EPSS).

Package Health

Analyzes the health of open-source packages through various software security-related heuristics to assess their trustworthiness. This score is driven by the OpenSSF scoreboard.

**Likelihood**

Reachable Dependency

Analyzes whether the vulnerable package is reachable and is actually being used by the application or database in which it was detected.

Dependency Relation

Analyzes whether the relation between the vulnerable package and the asset is transitive or direct (a transitive dependency is less likely to be exploitable within the program’s context). **Note:** When filtering in the Violations, the filter there will be called “Is Dev Dependency” rather than transitive.

Development Dependency

Analyzes whether the package is only used in the development stage. **Note**: When filtering in the Violations, the filter there will be called “Is Dev Dependency”.

Test File

Analyzes whether the violation is located in one of the following: Test Branch Name, Test Repository Name, Test Path.

Publicly Exposed

Analyzes whether a violation is located in a public-facing repository or other publicly-available asset

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
