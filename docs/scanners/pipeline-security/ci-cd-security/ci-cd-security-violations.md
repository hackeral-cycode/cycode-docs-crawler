# CI/CD Security violations | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations

---

# CI/CD Security violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations/_index.md "Edit this page")

Updated on Nov 10, 2024 • Published on Mar 28, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

CI/CD (Continuous Integration and Continuous Delivery) security violations refer to the various security issues and vulnerabilities that can occur within the CI/CD pipeline, which is responsible for automating the building, testing, and deployment of software. Ensuring the security of this pipeline is crucial to prevent the introduction of security risks into the software being developed and delivered. The **CI/CD Security** violations that are displayed in the Violations page are based on the [CI/CD Security Policies](/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations/) .

To navigate to the **CI/CD Security** violations, go to **Violations > Violation Category > CI/CD Security**.

The **CI/CD Security** violations appear, grouped by default by policy:

![](/assets/image-1731244505274.png)

This page lists all the **CI/CD Security** policies that have violations.

**So what will can you do in the CI/CD violations page?**

*   Search for a policy in the Search policy name field
    
*   Add more filters to narrow down the results further
    
*   Export the current policies with violations
    
*   Sort the listed policies by policy name, severity, total violations, and last violation
    
*   Click on a policy to view the associated violations in the right pane
    

### Grouping violations using the Group By filter [Copied!](#grouping-violations-using-the-group-by-filter "Copy link to this section")

When you first open the list of violations, you’ll be able to choose to group the violations according to the filters provided in the Group By filter. You can choose any of the filters or none (none simply means the violations aren’t aggregated in any way).

![](/assets/f84db2e-image.png)

### Breadcrumb navigation [Copied!](#breadcrumb-navigation "Copy link to this section")

When you select a violation in the Violations tab, the **intuitive breadcrumb navigation** enables you to maintain context while navigating, by displaying the value you selected at the top of your screen as a breadcrumb. This ensures you always know where you are and can easily backtrack if needed.

### How does the selection affect the total? [Copied!](#how-does-the-selection-affect-the-total "Copy link to this section")

In the Violations page, the Total pane changes according to the selection you make in the violations list. The initial total refers to the number of policies with violations. Once you select a policy, the total will reflect the number of vulnerabilities found for a specific policy.

![](/assets/f52c892-image.png)

Once you select a policy, the total will reflect the number of vulnerabilities found for a specific policy.

## Viewing violations [Copied!](#viewing-violations "Copy link to this section")

Violations - for any type of category - are always the bottom line in the Violations page. In other words, if you go to **Violations > Violation Category > CI/CD**, and then select **None** - you’ll see a clear list of ALL the violations in your system by repository.

![](/assets/image-1731244565596.png)

The list of violations is displayed according to the policy name associated with the violation, and includes the following additional information:

Part

Description

Policy Name

The name of the policy associated with the violation

Security Tool

The name of the security tool that detected the violation

Location

The location where the violation was detected (path)

Detected At

Date and time the violation was detected

SLA

Displays the SLA assigned to the violation

Status

Current status of the violation. The following options are Open, Resolved, or Ignored

## Managing violations [Copied!](#managing-violations "Copy link to this section")

*   To the left of each detected violation, you’ll see a checkbox ![checkbox](/assets/108424246-369ea100-7239-11eb-98d8-e380d63b58cd.png) . Check the box to take an action on the violation, open a ticket, assign the violation, or change its priority.
    
*   To the right of each violation, you’ll find a three-dot action menu with the same functions. ![](/assets/image-1731244656169.png)
    

## Violation card [Copied!](#violation-card "Copy link to this section")

When you click anywhere in the row of a detected vulnerability or click the arrow to the right of the row, this loads the relevant [violation card](/scanners/pipeline-security/ci-cd-security/ci-cd-security-violations/ci-cd-security-violation-card) for this violation.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
