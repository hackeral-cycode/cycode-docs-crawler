# Use of dependency with non-permissive license | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/use-of-dependency-with-non-permissive-license

---

# Use of dependency with non-permissive license

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/use-of-dependency-with-non-permissive-license.md "Edit this page")

Updated on Nov 7, 2024 • Published on Nov 7, 2024

* * *

## Use of dependency with non-permissive license violation card [Copied!](#use-of-dependency-with-non-permissive-license-violation-card "Copy link to this section")

This policy detects when a dependency in your code has a license that isn’t permissive, and displays the following Overview tab:

![](/assets/image-1730906164673.png)

Field

Description

Risk Score

The overall risk score assigned to the violation

Status

The status of the violation

Path

The path where the vulnerability was detected: SCM > Repository > Branch > File

Risk Score Factors

The factors that make up the risk score (see below for details)

Code Snippet

Displays a trimmed version of the file that contains the violation

Description

Description of the violation; if a remediation (Cycode and/or Company Guidelines) is available, the description will also include a link to the Remedation tab.

Cycode Project

The project that contains the package with the violation

Source

SCM source in which the violation was detected

Organization

The organization associated with the repository in which the violation was detected

Repository

The repository in which the violation was detected

Manifest File

The path to the manifest file, defining the code project

Direct Dependency

Indicates whether the package with the violation is in a direct dependency

Development Dependency

Indicates whether the package with the violation is in a development dependency

Dependency Path

Shows the paths of the dependencies

Detected At

Date and time when the violation was detected

Classification rules

If you’ve defined [classification rules and custom labels](/workflow-automation/) in your policies, the Violation card will also display this additional information.

Custom Labels

If you’ve defined custom labels for the classification rules, these will be displayed with a hashtag to indicate that they are custom labels.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
