# Focus on… prioritization and classification | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/focus-on-articles/focus-on-prioritization-and-classification

---

# Focus on… prioritization and classification

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/focus-on-articles/focus-on-prioritization-and-classification.md "Edit this page")

Updated on Aug 21, 2024 • Published on Jun 19, 2024

* * *

When integrating Cycode with your system, the amount of violations detected can be quite overwhelming. To that end, here are some best practice ideas you can apply to help you prioritize and classify the results using different methods currently available in the platform.

## **Use the Cycode****risk score****to determine your posture** [Copied!](#use-the-cycode "Copy link to this section")

Cycode’s risk calculates risks for violations based on a predefined list of parameters and the logic between them. The risk score calculation definition consists of properties and their corresponding values based on the relationship between the asset and the parent asset, a relevant entity in whose context a given detection has occurred.

## Automations [Copied!](#automations "Copy link to this section")

Apply a **combination of automations** that can help you determine what’s a priority and what’s not:

*   For example, use workflows to ensure that the Jira ticket on the violation gets to the right person.
    
*   Create and apply classification rules, which are designed to better prioritize data, reduce the level of noise for violations, and make it easy to customize data. classification rules help you to specify which policies should be prioritized for tracking, and which are less relevant and don’t need to be monitored.
    

## Prioritize using the business impact factor [Copied!](#prioritize-using-the-business-impact-factor "Copy link to this section")

*   Set up [workflows that deploy Jira ticketing and alerting](/workflow-automation/create-a-workflow) based on the business impact you’re addressing.
    
*   Select the [policies that are most relevant to this use case and prioritize those policies by adding classification rules](/policies)
    

\- [Set up projects](/cycode-projects/create-and-configure-a-project) with the appropriate business impact to capture the violations that have the biggest business impact.

## SCA reachability [Copied!](#sca-reachability "Copy link to this section")

If you’re using SCA, another great tool for prioritization is [SCA reachability](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/using-sca-reachability) , which helps to reduce false positives and improve your focus on the violations that need to be prioritized.

So, now that you’ve got all these tools and capabilities in place, you can easily find the violations that we’ve intentionally made more critical - because of priority, classification, or higher business impact.

Applying the practices above, filter for the top 50 violations. Of those top violations, if say, 30, are the same violation (with 30 occurrences), by focusing on resolving that violation, you’ve reduced about two-thirds of those critical violations, which has a huge impact on your bottom line security-wise.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
