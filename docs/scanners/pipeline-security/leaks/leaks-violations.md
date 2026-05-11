# Leaks violations | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/leaks/leaks-violations

---

# Leaks violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/leaks/leaks-violations/_index.md "Edit this page")

Updated on Nov 10, 2024 • Published on Mar 28, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Leaks violations typically refer to instances where sensitive or confidential data is accidentally exposed or leaked outside a secure environment. Data leaks can occur in various contexts, such as within software applications, cloud services, databases, and more. These leaks can lead to privacy breaches, data exposure, and security incidents. The **Leaks** violations that are displayed in the Violations page are based on the [Code leak policies](/scanners/pipeline-security/leaks/leaks-policies) .

Cycode’s leak detection identifies code leaks by detecting customer-specific information and identifiers in public code repositories that are not part of the customer’s managed code. The leakage scan leverages publicly available APIs, which are subject to inherent delays and limitations. Consequently, while Cycode’s scanning for customer-managed code operates in real-time, the leak detection process may experience delays ranging from a few hours to up to three days.

To navigate to the **Leaks** violations, go to **Violations > Violation Category > Leaks**.

![](/assets/image-1731242464637.png)

This page lists all the Leaks policies that have violations. From this page, you can do the following:

*   Search for a policy in the Search policy name field.
    
*   Add more filters to narrow down the results further
    
*   Export the current policies with violations
    
*   Sort the listed policies by policy name, risk score, total violations, and last violation
    
*   Click a policy to view the associated violations in the right pane
    

### Grouping violations using the Group By filter [Copied!](#grouping-violations-using-the-group-by-filter "Copy link to this section")

When you first open the list of violations, you’ll be able to choose to group the violations according to the filters provided in the Group By filter - either Policy or None (none simply means the violations aren’t aggregated in any way).

![](/assets/ca1cfd1-image.png)

### Breadcrumb navigation [Copied!](#breadcrumb-navigation "Copy link to this section")

When you select a violation in the Violations tab, the **intuitive breadcrumb navigation** enables you to maintain context while navigating, by displaying the value you selected at the top of your screen as a breadcrumb. This ensures you always know where you are and can easily backtrack if needed.

### How does the selection affect the total? [Copied!](#how-does-the-selection-affect-the-total "Copy link to this section")

In the Violations page, the Total pane changes according to the selection you make in the violations list. The initial total refers to the number of policies with violations.

![](/assets/8bff660-image.png)

Once you select a policy, the total will reflect the number of vulnerabilities found for a specific policy.

## Viewing violations [Copied!](#viewing-violations "Copy link to this section")

Violations - for any type of category - are always the bottom line in the Violations page. In other words, if you go to **Violations > Violation Category > Leaks**, and then select **None** - you’ll see a clear list of ALL the violations in your system.

![](/assets/image-1731242514989.png)

The list of violations is displayed according to the policy name associated with the violation, and includes the following additional information:

Part

Description

Policy Name

The name of the policy associated with the violation

Entity Name

The name of the entity in which the violation took place (repository, etc.)

Source

Lists in which SCM the violation appears (GitHub, GitLab, etc.)

Detected At

The date and time in which the violation was detected

Severity

Lists the severity of the violation when it was detected.

Risk Score

Displayed only at the violation level, Cycode’s Risk Score assesses violation risk through multiple characteristics, with detailed impact insights on hover, where higher scores signal greater urgency for action. To learn more, see [Understanding the risk score](/additional-cycode-features/cycode-risk-score) .

Ticket

If there’s a ticketing system integrated with your organization, displays the ticket number associated with the violation.

Status

Current status of the violation Open, Resolved, or Ignored.

## Managing leaks [Copied!](#managing-leaks "Copy link to this section")

To the left of each detected violation, there is a checkbox ![checkbox](/assets/108424246-369ea100-7239-11eb-98d8-e380d63b58cd.png) . Check the box to **Ignore** the violation. If you have integrated with an issue tracking integration, you can create a ticket on that platform.

![](/assets/0891e6a-image.png)

## Violation instance [Copied!](#violation-instance "Copy link to this section")

When you select a specific policy that has relevant violations, the list changes to display the repository where that particular leak was detected. This also updates the columns displayed as follows:

Column Name

Description

Repository

The repository or other source where the leak was detected

Organization

The organization whose repository contains the leak

Assignee

The person assigned to each detected leak

Source

The source code hosting site that contains the leak

Detected At

Date and time when the leak was detected

Severity

The severity of the leak

Risk Score

The risk score assigned to the leak

Ticket

If a ticket related to the leak was opened

Status

The status of each detected leak. Can be Open, Resolved, or Ignored.

## Managing leaks [Copied!](#managing-leaks-1 "Copy link to this section")

To the left of each detected violation, you’ll see is a checkbox ![checkbox](/assets/108424246-369ea100-7239-11eb-98d8-e380d63b58cd.png) . Check the box to take an action on the violation, open a ticket, assign the violation, or change its priorty.

![](/assets/f8440a9-image.png)

## Violation card [Copied!](#violation-card "Copy link to this section")

When you click anywhere in the row of a detected vulnerability or click the arrow to the right of the row, this loads the relevant [violation card](/scanners/pipeline-security/leaks/leaks-violations/leaks-violation-card) for this violation.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
