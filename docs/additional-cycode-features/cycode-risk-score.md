# Cycode risk score | Cycode Docs

Source: https://docs.cycode.com/additional-cycode-features/cycode-risk-score

---

# Cycode risk score

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/additional-cycode-features/cycode-risk-score/_index.md "Edit this page")

Updated on Jan 25, 2026 • Published on Jan 25, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode sets a violation’s severity according to the category in which the violation is located (and sometimes by the specific violation instance). Violation policies are classified into categories, which are then assigned security levels. After reviewing each policy, we determine to which category it belongs, and, based on that category, [which severity ranking should be applied](/policies/cycode-policies-faqs/how-does-cycode-set-severity-rankings-for-violations) .

But a violation’s threat severity doesn’t tell the entire story; even if a violation falls within the parameters of a severity deemed critical, if the violation appears in a user’s personal repository, or even in a repository that’s already been deleted, that violation poses a fairly minimal threat, and shouldn’t raise alarm bells.

That’s where the risk score comes into play: Cycode’s risk score calculates the risks for violations based on a predefined list of parameters and the logic between them. The risk score calculation definition consists of properties and their corresponding values based on the relationship between the asset and the parent asset, a relevant entity in whose context a given detection has occurred. For example:

*   SCM repository
    
*   Storage bucket
    
*   Docker image
    
*   Slack channel
    
*   Confluence page
    

The risk score then shows, for every violation in the system, a risk from 0-100.

*   Critical: 91-100
    
*   High: 71-90
    
*   Medium: 31-70
    
*   Low: 11-30
    
*   Info: 0-10
    

Hovering over the risk score displays the risk factors associated with the violation that were used for determining the score itself, while hovering over the factors displays how and to what extent they affect the score.

The available violation risk score levels are Critical, High, Medium, Low, Info, and N/A (N/A refers to a risk score that’s still being calculated, based on a number of factors such complex Context Intelligence Graph connections; the calculation can take up to 24 hours).

![](/assets/image-1731240674132.png)

The risk score also appears in the violation card with its own dedicated section, displaying the overall risk score as well as the number and type of risk factors taken into consideration in the score.

In addition, when hovering over the risk score, you can see the last update time, which specifies the last time the risk calculation was run.

![image.png](/assets/image-28433-29.png)

To learn more about the process of setting the risk score, see our blog on [Enhancing security prioritization with Cycode’s advanced risk scoring](https://cycode.com/blog/enhancing-security-prioritization-with-cycodes-advanced-risk-scoring/) .

![](/assets/25f8c02-risk-score.png)

## Which factors affect the risk score? [Copied!](#which-factors-affect-the-risk-score "Copy link to this section")

Cycode’s risk score assesses violation risk using multiple factors. To view detailed insights, hover over each factor. A higher score indicates greater urgency for action. The relevant risk factors are listed at the bottom in each category’s violation card.

*   [Secret risk factors](/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-value-card)
    
*   [Leaks risk factors](/scanners/pipeline-security/leaks/leaks-violations/leaks-violation-card#leaks-violation-risk-score-factors)
    
*   [SAST risk factors](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/sast-violation-card)
    
*   [SCA risk factors](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/)
    
*   [IaC risk factors](/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/iac-violation-card)
    
*   [CI/CD security risk factors](/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations/ci-cd-security-violation-card)
    
*   [Container Image Security risk factors](/scanners/ast-application-security-testing/container-image-security/view-and-manage-container-security-violations/container-security-violation-card)
    
*   [Cloud Security risk factors](/scanners/cloud-security/cloud-security-violations/cloud-security-violation-card)
    

Note

Calculating the risk score for a large number of violations concurrently can take some time.

## Why scoring from 0-100 is better than 5 severities [Copied!](#why-scoring-from-0-100-is-better-than-5-severities "Copy link to this section")

**Granularity** A 0-100 scoring system provides greater granularity, helping organizations to allocate resources more effectively.

**Flexibility** A numerical scoring system is inherently more flexible than a fixed set of severity levels. Organizations can adapt the scale to their specific needs.

**Precision in measurement** Numeric scores allow for a more precise measurement of the impact, likelihood, or other relevant factors associated with each business goal.

**Communication and reporting** Numeric scores simplify communication and reporting that stakeholders can quickly understand.

**Integration with other systems** Numeric scores are often more compatible with other systems and tools, facilitating integrations.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
