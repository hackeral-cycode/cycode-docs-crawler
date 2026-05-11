# SCA package health enrichment | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/sca-package-health-enrichment

---

# SCA package health enrichment

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/sca-package-health-enrichment.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

With more organizations relying on open source resources as part of their development cycle, they also need to improve their ability to assess packages and determine their risk. This is the idea behind Cycode’s package health enrichment feature, a tool that provides a comprehensive evaluation of package risk based on security and operational factors, such as maturity, outdatedness, maintenance level, activity, popularity, etc.

### Take the guesswork out of package dependency management [Copied!](#take-the-guesswork-out-of-package-dependency-management "Copy link to this section")

The package health enrichment features helps you to assess your packages’ risk and to initiate immediate mitigation responses, including exploring alternatives, enabling you to get insights about an open source dependency’s health.

## How does package health enrichment work? [Copied!](#how-does-package-health-enrichment-work "Copy link to this section")

The package health enrichment feature utilizes the powerful capabilities of the Context Intelligence Graph, a feature-rich graph that enables you to correlate data across your entire software development lifecycle (SDLC).

In the Context Intelligence Graph, we’ll use the query for Code Dependency to check package health:

1.  In the Context Intelligence Graph, click in the query bar and select **Dependencies** > **Code Dependency**.
    
2.  Click the add column button and then scroll down to the **Available Versions** and **OSSF Scorecard Latest Info** selections.
    

### About available versions [Copied!](#about-available-versions "Copy link to this section")

Which package to choose instead of the current one depends on which type of version you want to select. In the Available Versions, specify which version to display. For example, choose to display the newest stable in major (and its date) as well as the latest stable version (and its date).

![](/assets/8eec7de-image.png)

Let’s dive into the different options in the available versions to help you better understand:

*   **Newest Stable in Major** (a.k.a in the current major, i.e., 1.3.4)
    
*   **Newest Stable in Major Date** (a.k.a publication date)
    
*   **Newest Pre-Release in Major**
    
*   **Newest Pre-Release in Major Date**
    
*   **Latest Stable Version** (i.e. 2.0.0) : This version addresses the question “How outdated is my version? Are we using the latest/newest package upgrade?”
    
*   **Latest Stable Version Date** (i.e. 20/12/2022): This version addresses the question “Hasn’t the package been maintained for quite some time?”
    
*   **Latest Pre-Release Version**
    
*   **Latest Pre-Release Version Date**
    

The resulting list of packages displayed lets you select which package it makes the most sense to upgrade to from your current one.

![](/assets/ccd8af8-replace.png)

### About the OSSF latest information [Copied!](#about-the-ossf-latest-information "Copy link to this section")

OpenSSF is a foundation under the umbrella of Linux Foundation that aims to improve open source security, leading open source projects such as the [OpenSSF Scorecard project](https://github.com/ossf/scorecard) , which ranks projects based on several parameters.

The OSSF Scorecard is an automated tool that assesses a number of important heuristics (“checks”) associated with software security and assigns each check a score of 0-10. You can use these scores to understand specific areas to improve in order to strengthen the security posture of your project. You can also assess the risks that dependencies introduce, and make informed decisions about accepting these risks, evaluating alternative solutions, or working with the maintainers to make improvements.

In the Context Intelligence Graph filter OSSF Scorecard Latest Info options, you can now choose which OSSF scorecard package information to show to enable you to select the right package:

![](/assets/1fd45e2-image.png)

*   **Score**: The score assigned to the package
    
*   **Commit**: The OpenSSF scorecard commit date
    
*   **Scorecard Report URL**: Adds a link to the table that when clicked, which opens the [OpenSSF scorecard report](https://securityscorecards.dev/viewer/?uri=github.com/rails/rails) .
    

The Open Source Security Foundation (OpenSSF) is a repository of reports of malicious packages that have been identified in Open Source package repositories, consumable via the Open Source Vulnerability (OSV) format.

*   **Score**: The score assigned to the package
    
*   **Commit**: The OpenSSF scorecard commit date
    
*   **Scorecard Report URL**: Adds a link to the table that when clicked, which opens the [OpenSSF scorecard report](https://securityscorecards.dev/viewer/?uri=github.com/rails/rails) .
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
