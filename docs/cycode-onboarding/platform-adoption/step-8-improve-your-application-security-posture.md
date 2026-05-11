# Step 8: Improve your Application Security posture | Cycode Docs

Source: https://docs.cycode.com/cycode-onboarding/platform-adoption/step-8-improve-your-application-security-posture

---

# Step 8: Improve your Application Security posture

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-onboarding/platform-adoption/step-8-improve-your-application-security-posture.md "Edit this page")

Updated on Oct 15, 2024 • Published on May 23, 2024

* * *

Now that you’re up and running, you have full visibility to the security risk in your applications and pipelines. This is the time to start reducing the risk by addressing the violations Cycode detected.

## Step 8a: Prioritization [Copied!](#step-8a-prioritization "Copy link to this section")

Cycode provides a number of tools to help you prioritize violations, including the risk score, classification rules, table filtering, and severities.

### Risk score [Copied!](#risk-score "Copy link to this section")

Cycode’s risk score calculates risks for violations based on a predefined list of parameters and the logic between them. The risk score calculation definition consists of properties defined as risk factors that influence the likelihood of the risk and the impact it imposes.

### classification rules [Copied!](#classification-rules "Copy link to this section")

Cycode’s classification rules are designed to better prioritize data, classify violations based on their context, and reduce the level of noise for violations. classification rules enable you to customize which violations should be prioritized for tracking, and which are less relevant and don’t need to be monitored.

### Table filtering [Copied!](#table-filtering "Copy link to this section")

Cycode’s platform ability to filter tables enables you to filter the violations and to focus only on what is important to you. For example, focus on open violations with a risk score of 70 or higher created in the last 3 months that have an available remediation. To learn more about filtering, see [Filtering violations](/scanners/pipeline-security/leaks/leaks-violations) .  
![](/assets/image-171.png)

### Severities [Copied!](#severities "Copy link to this section")

Cycode sets a violation’s severity according to the policy in which the violation was detected by (and sometimes by the specific violation details). Violation policies are classified into classes, which are then assigned security levels. After reviewing each policy, we determine to which class it belongs, and, based on that class, which [severity ranking should be applied](/policies/cycode-policies-faqs/how-does-cycode-set-severity-rankings-for-violations) .

## Step 8b: Remediations [Copied!](#step-8b-remediations "Copy link to this section")

You can also filter the violations by many criterias. One interesting criteria is the “Remediable” option. Violations that have the “Remediable” flag enabled can be remediated through the platform, for example by opening a pull request for a code that fixes the violations. When a vulnerability detected by an SCA tool has an available version of the vulnerable package that fixed the vulnerability, Cycode can update the version of the vulnerable package. To remediate the violation, click the Resolve button in the violation card or select multiple violations and click the Resolve button.

The process of remediating violations is the core of your posture management program - reducing the security risk for your organization. It will involve multiple people in your application security team and in your R&D and DevOps teams. Cycode allows you to assign owners to violations, open tickets through your ticketing system and when available open a pull request with the code fix. The next steps will help you improve these processes and make you and your team efficient and effective.

## Step 8c: Customizing detection according to your company’s needs [Copied!](#step-8c-customizing-detection-according-to-your-companys-needs "Copy link to this section")

Now let’s customize violation detection according to your company’s unique needs, using custom policies, exclusions, and Classification Rule for ignore.

### Custom policies [Copied!](#custom-policies "Copy link to this section")

Custom policies offer a way to tailor violation detection to specific needs within a system or organization. First, identify the custom policy requirements, by understanding the specific requirements and constraints of your system or organization. This includes understanding what constitutes a violation and the conditions under which it occurs. Then, define the policy rules based on these requirements. Cycode offers multiple ways to define detection logic, such as regular expressions to identify sensitive content, detection rules written in Rego, and the results of a Discovery query.

### Applying classification rules to exclude violations [Copied!](#applying-classification-rules-to-exclude-violations "Copy link to this section")

Use the Cycode classification rules to define which violations to ignore according to your unique needs. classification rules with the “ignore” action define the exclusion logic you define.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
