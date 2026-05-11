# Cycode AI | Cycode Docs

Source: https://docs.cycode.com/cycode-ai

---

# Cycode AI

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-ai/_index.md "Edit this page")

Updated on Apr 29, 2026 • Published on Jul 14, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains how Cycode leverages AI within the Cycode platform, including governance of customer data and the AI features and functionality within the various modules.

## AI systems and governance [Copied!](#ai-systems-and-governance "Copy link to this section")

At Cycode, we recognize both the power and responsibility that come with developing and integrating AI and machine learning technologies. These are the highlights you should know:

*   Opt out anytime: Customers decide whether to use AI features, and can disable them at any time.
    
*   Your data is yours: Customer data is never used to train or improve AI models.
    
*   Security: Data never leaves Cycode’s secure VPC or goes to external providers.
    
*   Full isolation: There is no connection between companies — each customer’s data remains fully isolated.
    

For information about how Cycode defines AI, applies it within the platform, and protects customer data, read the Cycode AI Systems and Governance Policy available in the right-hand navigation pane.

## AI features in the platform [Copied!](#ai-features-in-the-platform "Copy link to this section")

The following AI features are available for customer use in the Cycode platform. Most generative AI capabilities are accessed through Maestro, the AI orchestrator built into the platform — see [Maestro](/cycode-ai/maestro/) for an overview.

Feature

Description

For more information, go to…

Maestro

AI orchestrator that interprets your questions in plain language and coordinates specialized agents to return a single, focused answer.

[Maestro](/cycode-ai/maestro/)

Context Intelligence Graph queries

Translate plain-language questions into Context Intelligence Graph queries to surface asset relationships, risk posture, and aggregate insights. **(admin only)**

[Context Intelligence Graph AI](/context-intelligence-graph/)

Code repository analysis

Investigate vulnerabilities, misconfigurations, secrets, IaC violations, and SAST/DAST findings within a specific repository.

[Maestro](/cycode-ai/maestro/)

Repository asset profiling

Get a structured overview of any repository’s purpose, technology stack, dependencies, and deployed applications.

[Maestro](/cycode-ai/maestro/)

CVE analysis

Comprehensive analysis of any CVE — severity, description, exploit details, and mitigation strategies — aggregated from multiple sources.

[CVE analysis](/cycode-ai/cve-analysis/)

Exploitability analysis

Assesses whether SAST, SCA, and IaC vulnerabilities are actually reachable and exploitable in your specific codebase. **Note: This feature is currently in early access.**

[Exploitability analysis](/cycode-ai/exploitability-analysis/)

Change impact analysis

Reviews code changes against built-in and custom LLM-driven policies to determine whether they affect application security posture. Triggered as an on-demand scan from the platform. **Note: This feature is currently in early access.**

[Change impact analysis](/cycode-ai/change-impact-analysis/)

AI-powered remediation for SAST

Generates automatic fixes for some SAST violations based on AI-generated remediations.

[Remediate SAST violations](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/remediate-sast-violations)

AI-powered remediation for IaC

Generates automatic fixes for some IaC violations based on AI-generated remediations.

[Remediate IaC violations](/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/remediate-iac-violations)

AI-powered remediation for container security

Generates automatic fixes for some container security violations based on AI-generated remediations.

[Remediate container security](/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/remediate-container-security)

Risk summary

Ask Maestro for a plain-language explanation of the risk factors behind a violation.

[Risk Analysis tab](/view-and-manage-violations/violation-card/risk-analysis-tab)

Generic secret validation

Accurately scores the likelihood that a detected secret is a real secret.

[AI detection for secrets](/scanners/pipeline-security/secrets/how-does-cycode-detect-secrets/cycode-ai-for-detecting-generic-secrets)

## Token usage and budget [Copied!](#token-usage-and-budget "Copy link to this section")

Every Cycode organization receives a complimentary AI package starting at **50 million tokens per month**. Complete ASPM tenants are upgraded to the **pro tier** at no additional cost, which includes **100 million tokens per month**. Tokens are shared across all AI features.

To monitor consumption and review individual requests, see the [AI usage dashboard](/cycode-ai/usage-dashboard/) . For details about the budget model and what to do when you approach your limit, see [Token budget and plans](/cycode-ai/token-budget-and-plans/) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
