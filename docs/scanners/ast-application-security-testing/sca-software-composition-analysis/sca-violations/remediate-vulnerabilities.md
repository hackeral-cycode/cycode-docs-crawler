# Remediate vulnerabilities | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/remediate-vulnerabilities

---

# Remediate vulnerabilities

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/remediate-vulnerabilities.md "Edit this page")

Updated on Mar 23, 2026 • Published on Mar 15, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

In order to effectively remediate an SCA vulnerability, you have to understand how package managers resolve dependencies and how security fixes affect the stability of your software project.

## Manual remediation [Copied!](#manual-remediation "Copy link to this section")

In modern software development, most code comes from open-source libraries. When a vulnerability (CVE) is discovered in one of these libraries, remediation typically involves moving to a patched version. This process varies depending on where the vulnerability sits in your dependency graph and how your versions are defined.

### Direct dependencies [Copied!](#direct-dependencies "Copy link to this section")

Direct dependencies are the libraries you explicitly declare in your manifest files, such as package.json, pom.xml, or requirements.txt.

#### Process [Copied!](#process "Copy link to this section")

Update the version number in your manifest. If you use semantic versioning (SemVer) with ranges, for example ^1.2.3, a simple update command can pull the patch without requiring a manual change to the manifest file itself.

#### Result [Copied!](#result "Copy link to this section")

These remediation activities are the easiest to control. You chose the dependency, therefore you can usually decide when to upgrade although major version jumps may require code changes to accommodate API updates.

### Indirect (transitive) dependencies [Copied!](#indirect-transitive-dependencies "Copy link to this section")

Indirect dependencies are the “dependencies of your dependencies.” You didn’t pull them in directly, but your project requires them to function.

#### Process [Copied!](#process-1 "Copy link to this section")

Remediating indirect dependencies is more complex than remediating direct dependences, because you don’t typically control their versions in your manifest file. You can remediate indirect dependencies in one of the following ways:

*   **Parent upgrade** - upgrade the direct dependency to a version that calls a patched version of the indirect dependency.
    
*   **Lock file regeneration** - regenerate your lock file, for example `package-lock.json` or `poetry.lock`. This forces the package manager to re-resolve the dependency tree and pull the latest patched versions allowed by your manifest file’s version ranges.
    
*   **Overrides and resolutions** - add a special instruction to your manifest files, such as resolutions in yarn or constraints in Python, to force a specific version of a sub-dependency regardless of what the parent package asks for.
    

#### Result [Copied!](#result-1 "Copy link to this section")

Transitive fixes are more likely to cause version conflicts. Security engineers should prioritize fixes that have a clear path through a parent package upgrade to maintain project integrity.

## Cycode automated remediation [Copied!](#cycode-automated-remediation "Copy link to this section")

Cycode can automatically fix vulnerable dependencies by updating your manifest files via pull request. Automated remediation is available if the following conditions are met across all ecosystems:

*   **Upstream fix availability** - a patched version of the vulnerable package must be published.
    
*   **Manifest visibility** - your repository must contain the manifest file that declares the dependency.
    
*   **Resolvable dependency chains** - for indirect dependencies, all packages in the chain must have compatible fix recommendations that don’t break the requirements of other packages.
    

Some package manager may have additional requirements. For more information, go to [Supported ecosystems and package managers](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
