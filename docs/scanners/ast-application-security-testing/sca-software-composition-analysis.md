# SCA (Software Composition Analysis) | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis

---

# SCA (Software Composition Analysis)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/_index.md "Edit this page")

Updated on Nov 9, 2025 • Published on Nov 24, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Software Composition Analysis (SCA) is an automated process that identifies and manages open-source and third-party components within your codebase. In modern development, where applications are assembled using numerous external libraries and dependencies, SCA is a fundamental practice for maintaining security and compliance.

Cycode’s SCA scanner provides security and development teams with a comprehensive inventory of all software components, identifies known vulnerabilities within those components, and helps manage their associated licenses. This allows you to proactively manage risk originating from your software supply chain.

## How does Cycode scan for vulnerabilities? [Copied!](#how-does-cycode-scan-for-vulnerabilities "Copy link to this section")

Cycode’s SCA scanning integrates directly into the development lifecycle, so it can be both comprehensive and efficient. The first step in the process is building an accurate inventory of your software composition by identifying all dependencies.

### Code and dependency analysis [Copied!](#code-and-dependency-analysis "Copy link to this section")

Cycode’s primary analysis targets an application’s dependency manifest files (for example, package.json or pom.xml) and lock files (for example, package-lock.json or yarn.lock). While manifest files declare the direct dependencies a project requires, lock files provide the complete dependency graph. These lock files are crucial for identifying the exact, pinned versions of all direct and indirect (transitive) dependencies that are used in your environment.

To ensure the highest level of accuracy in every scan, Cycode performs a lock file restoration process if it can’t find a lock file alongside the corresponding manifest file. This process discovers the complete list of dependencies, their exact versions, and any associated license information. This combined approach ensures that scans are always performed on the most accurate and complete representation of your application’s dependencies.

### Scan types and triggers [Copied!](#scan-types-and-triggers "Copy link to this section")

Cycode supports multiple scan scenarios to suit different operational needs:

*   Initial scan: This is the first, comprehensive scan performed on a repository’s default branch. This scan discovers all manifest files, builds a complete dependency inventory, and creates violations for vulnerable packages that are detected.
    
*   Incremental scan: This scan is automatically triggered by your SCM on new commits to any configured branch. For efficiency, this scan inspects only the changed files. If a commit modifies a manifest or lock file, Cycode updates the dependency inventory and flags any new vulnerabilities that are introduced.
    
*   Pull Request (PR) scan: Cycode integrates directly into your CI/CD workflow to scan PRs. This provides immediate feedback to developers within the PR, flagging new vulnerabilities before they are merged into the main codebase. This acts as a critical preventative control.
    
*   On-demand scan: A user can trigger a full, comprehensive scan of a branch at any time from the Cycode Settings view. This scan is equivalent in scope to an initial scan and is useful for ad-hoc security audits.
    

Important

If you change the default branch in your code repository, SCA automatically resolves all open violations from the old and new branches, and then initiates a full scan on both branches according to the multi-branch scanning rules.

### Private package registries [Copied!](#private-package-registries "Copy link to this section")

Cycode’s cloud scanner must be able to fetch package information in order to perform lock file restoration. In scenarios where projects depend on internal packages that aren’t available in public repositories (for example, npm or Maven Central) the scan may fail, or it may produce an incomplete dependency list.

To ensure comprehensive scanning of projects with private dependencies, Cycode provides the following solutions:

*   Direct package registry integration: You can configure Cycode to connect directly to your organization’s private package registries, such as JFrog Artifactory, Nexus, or GitHub Package Registry. This allows Cycode’s cloud scanner to securely access and resolve your internal packages, ensuring that they’re included in the analysis.
    
*   CLI-based scanning: You can use the Cycode CLI to run SCA scans within your local development or CI/CD for analysis without exposing your private packages or credentials.
    

## Detecting and resolving violations [Copied!](#detecting-and-resolving-violations "Copy link to this section")

When a scan identifies a vulnerable package, Cycode records this as a violation and provides rich context to help you prioritize and remediate it.

### When is a violation detected? [Copied!](#when-is-a-violation-detected "Copy link to this section")

A violation is detected when a dependency in your project is matched against a known vulnerability, such as a Common Vulnerabilities and Exposures (CVE) entry.

However, Cycode goes beyond simple detection by providing crucial enrichment data to assess the real-world risk of a vulnerability:

*   Reachability analysis: For some programming languages, Cycode performs an analysis to determine if the vulnerable code within a library is actually called by your application. A vulnerability that is “reachable” poses a more immediate risk than a vulnerability located in an unused code path.
    
*   Risk scoring and exploitability: Violations are enriched with critical risk metrics, including the Exploit Prediction Scoring System (EPSS), OSSF Scorecards data, and known exploit maturity. This context helps security teams prioritize vulnerabilities that are most likely to be exploited in the wild.
    

### How is a violation resolved? [Copied!](#how-is-a-violation-resolved "Copy link to this section")

Remediating a vulnerability typically involves upgrading a package to a non-vulnerable version.

When a pull request containing a fix (for example, a package upgrade) is merged into a scanned branch, Cycode detects the change and marks the corresponding violation as resolved.

For faster remediation, you can configure a workflow in Cycode to automatically create a pull request that upgrades a vulnerable package to the next available safe version, significantly reducing the manual effort required to fix common vulnerabilities.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
