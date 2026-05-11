# Violation enrichment data | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/violation-enrichment-data

---

# Violation enrichment data

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/violation-enrichment-data.md "Edit this page")

Updated on Sep 2, 2025 • Published on Aug 31, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

In SCA, identifying vulnerabilities is only the first step. To effectively manage risk, you need context. Cycode enriches every vulnerability with a set of risk and exploitability metrics designed to help you quickly assess real-world impact and prioritize what matters most.

This topic explains the key enrichment data points that Cycode provides for SCA violations. Understanding this data is fundamental to an efficient and effective remediation strategy.

## CVSS (Common Vulnerability Scoring System) [Copied!](#cvss-common-vulnerability-scoring-system "Copy link to this section")

CVSS is the industry standard for rating the severity of a software vulnerability. This standard provides a numerical score from 0.0 to 10.0, which maps to the qualitative severity ratings **low**, **medium**, **high**, and **critical**.

CVSS provides a static score that’s calculated based on the intrinsic characteristics of a vulnerability, such as the attack vector, attack complexity, and the potential impact on confidentiality, integrity, and availability.

However, while CVSS is an essential baseline, it doesn’t account for real-world threat intelligence. A vulnerability with a CVSS score of **critical** may never be exploited in the wild, while a vulnerability that scores as **medium** may be actively used by attackers.

## EPSS (Exploit Prediction Scoring System) [Copied!](#epss-exploit-prediction-scoring-system "Copy link to this section")

EPSS provides a crucial layer of real-world context on top of CVSS. EPSS estimates the probability that a given vulnerability will be exploited in the wild within the next 30 days.

EPSS is a data-driven probability score that ranges from 0% to 100%. A higher percentage indicates a greater likelihood of exploitation.

EPSS is important because it helps you move beyond the potential severity of a vulnerability and prioritize based on current threat activity. EPSS answers the question: “Of all the vulnerabilities I have, which ones are attackers most likely to target right now?”

### Example [Copied!](#example "Copy link to this section")

A dependency has a vulnerability with a CVSS score of 9.8 (critical) and an EPSS score of 1%. Another dependency has a vulnerability with a CVSS score of 7.5 (high) and an EPSS score of 90%.

Using EPSS, you can quickly determine that the second vulnerability poses a more immediate and realistic threat to your organization, despite its lower CVSS score.

## Exploit Maturity [Copied!](#exploit-maturity "Copy link to this section")

Exploit maturity provides clear, qualitative information about the availability of exploit code for a vulnerability. This context helps you understand how easy it may be for an attacker to operationalize an exploit.

Cycode categorizes exploit maturity using several indicators, with the most critical being its inclusion in the CISA KEV catalog.

Maturity Level

Description

Mature

The vulnerability appears in the CISA Known Exploited Vulnerabilities (KEV) catalog. This is definitive proof that the vulnerability has been actively exploited in real-world attacks. Vulnerabilities with this flag should be your highest priority.

Unknown

Cycode hasn’t found evidence of public exploit code for this vulnerability. The risk is lower but not zero, as an exploit could be developed in the future or kept private.

### OSSF Scorecard and package health [Copied!](#ossf-scorecard-and-package-health "Copy link to this section")

While the metrics described above focus on a specific vulnerability, the Open Source Security Foundation (OSSF) Scorecard assesses the overall security health and posture of the open-source package itself.

The OSSF Scorecard is an automated scoring system that runs a series of checks against the package’s source code repository.

A low OSSF score can be a leading indicator of risk. A poorly maintained package is more likely to have unfixed bugs, introduce new vulnerabilities, or be slow to respond to security incidents. This score helps you answer the question: “Is this dependency a responsible and secure project to rely on in the long term?”

Key checks performed by the OSSF Scorecard include:

*   Code review - does the project require code reviews before merging?
    
*   Static analysis - does the project use SAST tools to find bugs before they are introduced?
    
*   Dependency management - does the project use tools like Dependabot to keep its own dependencies up to date?
    
*   Security policy - does the project have a published security policy (SECURITY.md)?
    
*   Active maintenance - is the project still being actively developed and maintained?
    

Cycode provides this information to give you a complete picture of the risk associated not just with the vulnerability, but with the entire dependency.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
