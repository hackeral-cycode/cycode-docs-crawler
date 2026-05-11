# How does Cycode set severity rankings for violations | Cycode Docs

Source: https://docs.cycode.com/policies/cycode-policies-faqs/how-does-cycode-set-severity-rankings-for-violations

---

# How does Cycode set severity rankings for violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/policies/cycode-policies-faqs/how-does-cycode-set-severity-rankings-for-violations.md "Edit this page")

Updated on May 8, 2024 • Published on May 8, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Cycode sets severity rankings for each type of violation policy based on how much risk that violation poses to your organization, and where the violation occurs. Of course, the risk associated with the violation may differ depending on the application security module: the severity for hardcoded secrets policies differs from the severity classification for configurations in your Infrastructure as Code (IaC).

## Hardcoded secrets severities [Copied!](#hardcoded-secrets-severities "Copy link to this section")

Hardcoded secrets pose a greater threat the more they expose your organization. The threat severity is determined by the category in which the secrets are located (and sometimes by the specific violation instance). Policies are classified into categories, which are then assigned security levels. After reviewing each policy, we determine to which category it belongs, and, based on that category, which severity ranking should be applied.

The categories for secrets with the highest (Critical) severities are cloud providers and data storage platforms, since secrets in those systems expose the organization to significant threats. In addition, some monitoring systems are also classified as critical, since they govern actual access to your system, and exposed secrets in those systems are also a significant risk.

## Leaks severities [Copied!](#leaks-severities "Copy link to this section")

By definition, leaks occur in public resources (either public repositories or public member snippets), therefore, the policies for leak violations are set to Critical. There are additional policies for leaks that are not real “leak” policies, for example, leaks detected in forked repositories (since they’re not usually accessible publicly), and leaks detected in private repositories, which are then set to High.

## SCA severities [Copied!](#sca-severities "Copy link to this section")

The severity of each SCA vulnerability is taken from the Common Vulnerability Scoring System (CVSS). Cycode obtains this information from the [GitHub Advisory](https://github.com/advisories) (which is based on many other databases, including the [NVD database](https://nvd.nist.gov/) ), which details the severity for each vulnerability. Note that a link to this information is attached to every vulnerability (violation card) under the field “GitHub Vulnerability ID” in the SCA Violation Card.

## SAST severities [Copied!](#sast-severities "Copy link to this section")

Determining the severity levels for policies or violations identified through Static Application Security Testing (SAST) is initially predicated on predefined rules. These rules are meticulously crafted, taking into account various crucial parameters including the programming language in use, the type of vulnerability, and associated Common Weakness Enumeration (CWE) identifiers. This comprehensive approach ensures that the severity levels ascribed to identified issues are reflective of their potential impact and risk, providing a solid baseline for subsequent security analysis and remediation efforts.

Furthermore, our platform extends the capability to adjust these severity levels via a user-friendly user interface, offering a streamlined avenue for clients to tailor the severity settings to their specific organizational needs without requiring direct access to the underlying rules. This level of customization allows for a more nuanced and organization-specific approach to managing identified vulnerabilities, ensuring alignment with the organization’s risk management framework and compliance mandates.

## CI/CD severities [Copied!](#cicd-severities "Copy link to this section")

The highest severity for CI/CD violations (High) is assigned to violation policies that apply to branch protection rules, risky developer behavior in the pipeline, excessive permissions, and insecure configurations of your pipelines. This means you can focus your efforts only on these categories when addressing violations in your pipelines.

In some cases, the severity level is also affected by whether there’s a solution to the violation (i.e., whether the user can do something in order to solve the problem) or not.

## IaC/Cloud severities [Copied!](#iaccloud-severities "Copy link to this section")

When determining the severity of an Infrastructure as Code (IaC) security issue or cloud security posture issues, several key factors come to the forefront.

The level of exposure, denoted by whether the configuration is publicly accessible or limited to internal networks and its involvement with sensitive data, plays a pivotal role. Similarly, the potential impact, or “blast radius”, gives a scope of the potential damage.

Ease of exploitation, especially in the current threat landscape, underscores its immediacy. However, it’s crucial to understand that there’s no “one size fits all” measure for severity. Due to the myriad unknowns in each cloud environment and the unique setups individual users may have, what might be critical for one environment could be less severe in another. The feasibility of mitigation, historical context, and vulnerabilities from third-party integrations also play into this complex assessment. While there’s no universal severity metric, our goal is to ensure the chosen severities resonate accurately with the majority of users.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
