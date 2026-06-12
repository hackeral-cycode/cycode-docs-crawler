# View SCA data in the Context Intelligence Graph | Cycode Docs

Source: https://docs.cycode.com/docs/view-sca-data-in-the-risk-intelligence-graph

---

# View SCA data in the Context Intelligence Graph

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/view-sca-data-in-the-context-intelligence-graph.md "Edit this page")

Updated on Jan 20, 2026 • Published on Sep 1, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how to understand the SCA entities and relationships in the Context Intelligence Graph. By exploring how the Context Intelligence Graph models your software supply chain, you can start using it for deep contextual analysis and precise risk prioritization.

For information on how to use the Context Intelligence Graph, got to [Context Intelligence Graph](/context-intelligence-graph/) .

## SCA entities (nodes) [Copied!](#sca-entities-nodes "Copy link to this section")

### Code projects [Copied!](#code-projects "Copy link to this section")

A **code project** entity represents a single manifest file (for example, package.json, pom.xml, or requirements.txt) discovered in one of your repositories. This entity is the root of a specific dependency tree.

The key Cycode attributes of a code project are:

*   Ecosystem: The package manager ecosystem (for example, Maven, npm or PyPI).
    
*   Manifest file path: The full path to the manifest file within the repository.
    
*   Lock file path:The full path to the lock file within the repository.
    
*   Branch name: The specific branch where the manifest file is located.
    
*   Is default branch: A boolean indicator of whether the scan was done on the repository’s default branch.
    
*   File snippets: Code snippets from the manifest and lock files for quick reference.
    

### Code dependencies [Copied!](#code-dependencies "Copy link to this section")

A **code dependency** entity represents a single package, at a specific version, which is used by a code project.

The key Cycode attributes of a code dependency are:

*   Name and version: The name and exact version of the package (for example, log4j:2.14.0). When a lock file isn’t committed to the repository, a SemVer may be shown instead of the exact version.
    
*   Licenses: A list of software licenses associated with this package version.
    
*   Publish date: The date this version of the package was published.
    
*   Latest versions: Information on the latest available versions for the package.
    
*   OSSF Scorecard: Package health and security posture information from the Open Source Security Foundation.
    

### Package vulnerability [Copied!](#package-vulnerability "Copy link to this section")

A **package vulnerability** entity is representation in the Context Intelligence Graph of a known security vulnerability (for example, a CVE) that affects a code dependency.

The key Cycode attributes of a package vulnerability are:

*   Vulnerability ID: The unique Common Vulnerabilities and Exposures identifier.
    
*   Advisory: The advisory information as made available by the Advisory (for example, a GitHub Security Advisory).
    
*   Package name: The package to which the vulnerability applies.
    
*   Ecosystem: The ecosystem to which the vulnerability applies.
    
*   Vulnerable version ranges: The specific version ranges of the package affected by the vulnerability.
    
*   Enrichment data: Critical risk context, including EPSS scores and exploit maturity.
    

## Edges (relationships) between nodes [Copied!](#edges-relationships-between-nodes "Copy link to this section")

Cycode provides additional contextual information in the edges that connect different nodes.

### Code project and code dependency [Copied!](#code-project-and-code-dependency "Copy link to this section")

An important relationship is the one that associates a manifest file (code project) with a package (code dependency) it uses. This edge contains the following key data:

*   Dependency paths: The full chain of dependencies that leads to the code dependency. For direct dependencies, this is one edge between two nodes. For an indirect (transitive) dependency, this is a complete path (for example, your-app -> package-A -> package-B).
    
*   Is direct dependency: A boolean value that indicates whether the dependency is explicitly listed in the manifest file.
    
*   Is dev dependency: A yes/no/unset value indicating whether the dependency is only used for development (for example, listed in `devDependencies` in a package.json file). This field applies to manifest files that include the concept of development dependencies.
    

### Code dependency and package vulnerability [Copied!](#code-dependency-and-package-vulnerability "Copy link to this section")

Another important relationship is the one that connects a specific package version to a vulnerability that affects it. This edge contains the following vital remediation information:

*   Fixed in version: The recommended package version that resolves the vulnerability. This provides an immediate, actionable remediation step.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
