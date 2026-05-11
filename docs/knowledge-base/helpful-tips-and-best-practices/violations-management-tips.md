# Violations management tips | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/helpful-tips-and-best-practices/violations-management-tips

---

# Violations management tips

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/helpful-tips-and-best-practices/violations-management-tips.md "Edit this page")

Updated on Aug 21, 2024 • Published on Jun 3, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

In this article we cover a different tips on how to manage violations in the Cycode platform using the tools available to you.

### Using workflows for violations [Copied!](#using-workflows-for-violations "Copy link to this section")

Cycode enables you to create and manage your automated workflows for alerting on new violations. The workflow allows you to choose a specific policy and create a workflow that defines what happens when a violation of this policy is created. You have the option to use any of the integrated Alerting or Issue Tracking integrations currently integrated with Cycode.  
See [Creating a workflow](/workflow-automation/create-a-workflow) for details.

### How do I open a Jira ticket for a violation? [Copied!](#how-do-i-open-a-jira-ticket-for-a-violation "Copy link to this section")

Cycode’s integration with issue tracking systems - such as Jira Cloud - enables you to create a ticket using the issue tracking system directly from the Cycode platform. You can use any of the integrated Alerting or Issue Tracking integrations currently integrated with Cycode to create alerts and to generate tickets as part of the workflow process.  
See [Drilling down into a violation](/view-and-manage-violations) for details.

#### Using Jira 2-way integration [Copied!](#using-jira-2-way-integration "Copy link to this section")

When Jira 2-Way integration is enabled, in the Violations page, you’ll be able to see not only the ticket ID, title, and status, but also the user to whom the Jira has been assigned (this is different from the Cycode assignee). See [Jira](/integrations/issue-tracking-ticketing-tools/jira) for details.

### Ignore or resolving violations [Copied!](#ignore-or-resolving-violations "Copy link to this section")

In the Violations page or violation card, when available, you can choose to ignore a detected violation or resolve it. You can also choose to ignore and resolve multiple values or violations by selecting multiple items in the list. Another way of ignoring/resolving a specific value is by going to the right of each detected violation, clicking the three-dot option menu and selecting ignore or resolve.  
See [Handling violations](/cycode-onboarding/getting-started-with-onboarding/step-7-handling-violations) for details.

### What are manual and automation resolutions? [Copied!](#what-are-manual-and-automation-resolutions "Copy link to this section")

The Automatic Resolution feature helps you to address vulnerabilities efficiently by configuring your product to automatically transition violations to a “resolved” status in the following cases:

*   When a previously detected secret is removed from your code
*   When a secret’s activity status changes from “active” to “inactive”
*   When a secret is determined to be “inactive”

Manual resolution is when you manually resolve a detected violation by selecting it in the Violations page and clicking Resolve (where possible). See [Managing violations](/scanners/pipeline-security/secrets/remediate-secret-violations#remediate-a-secret-violation) for details.

### Setting up classification rules for violations [Copied!](#setting-up-classification-rules-for-violations "Copy link to this section")

Cycode’s classification rules are designed to better prioritize data, reduce the level of noise for violations, and make it easy to customize data. classification rules help you to specify which policies should be prioritized for tracking, and which are less relevant and don’t need to be monitored.  
See Using classification rules for details.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
