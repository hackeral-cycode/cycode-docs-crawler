# Handling missing dependency paths | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/handling-missing-dependency-paths

---

# Handling missing dependency paths

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/handling-missing-dependency-paths.md "Edit this page")

Updated on May 23, 2024 • Published on May 5, 2024

* * *

For code projects without lock files, either due to missing support or absence, Cycode retrieves transitive dependencies and calculate dependency paths using the build tool/package manager’s `dependencies` commands.

The command output may vary because of environment-specific inputs and internal package registries inaccessible to Cycode, which could lead to partial results or missing dependency paths. These results show a dependency’s use in the project but not its parent dependencies. In such cases, for complete dependency paths, you’ll need to run `dependencies` commands in an environment with access to all build parameters and internal package registries.

Package Manager/Build Tool

Command

Go

`go mod graph`

Gradle

`gradle dependencies -q`

Maven

`mvn dependency:tree`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
