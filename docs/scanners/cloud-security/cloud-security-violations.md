# Cloud Security violations | Cycode Docs

Source: https://docs.cycode.com/scanners/cloud-security/cloud-security-violations

---

# Cloud Security violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/cloud-security/cloud-security-violations/_index.md "Edit this page")

Updated on Nov 10, 2024 • Published on Mar 28, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Cloud security posture management (CSPM) is a category of security products that help to automate security and to provide compliance assurance in the cloud. CSPM helps to continuously monitor cloud infrastructure for gaps in security policy enforcement. As such, CSPM tools play an important role in securing your cloud environment by reducing the possibility of cloud misconfigurations, which can lead to data breaches.

When you select Cloud Security in the Violations Categories, Cycode displays the results for the Cloud Security policies that are built-into Cycode. The resulting violations that are displayed in the Violations page are then based on the [Cloud Security policies](/scanners/cloud-security/cloud-security-policies) .

To navigate to the **Cloud Security** violations, go to **Violations > Violation Category > Cloud Security**.

![image.png](/assets/image-28614-29.png)

**So what will you see in the Cloud Security violations page?** The page lists all the Cloud Security policies that have violations. From this page, you can do the following:

*   Search for a policy in the Search policy name field
    
*   Add more filters to narrow down the results further
    
*   Export the current policies with violations
    
*   Sort the listed policies by policy name, risk
    
*   , total violations, and last violation
    
*   Click on a policy to view the associated violations in the right pane
    

### Grouping violations using the Group By option [Copied!](#grouping-violations-using-the-group-by-option "Copy link to this section")

When you first open the list of violations, you’ll be able to choose to group the violations according to the filters provided in the Group By filter. You can choose any of the filters or none (none simply means the violations aren’t aggregated in any way).

![](/assets/98af20d-image.png)

### Breadcrumb navigation [Copied!](#breadcrumb-navigation "Copy link to this section")

When you select a violation in the Violations tab, the **intuitive breadcrumb navigation** enables you to maintain context while navigating, by displaying the value you selected at the top of your screen as a breadcrumb. This ensures you always know where you are and can easily backtrack if needed. ![](/assets/image-1731245340155.png)

### How does the selection affect the total? [Copied!](#how-does-the-selection-affect-the-total "Copy link to this section")

In the Violations page, the Total pane changes according to the selection you make in the violations list. The initial total refers to the number of policies with violations.

![](/assets/14a0749-image.png)

Once you select a policy, the total will reflect the number of vulnerabilities found for a specific policy.

## Viewing violations [Copied!](#viewing-violations "Copy link to this section")

Violations - for any type of category - are always the bottom line in the Violations page. In other words, if you go to **Violations > Violation Category > Cloud Security**, and then select **None** - you’ll see a clear list of ALL the violations in your system by repository.

![](/assets/image-1731245439758.png)

The following table describes the columns from the **Detected Violations** pane:

Field

Description

Policy Name

The name of the policy associated with the violation

Security Tool

The name of the security tool that detected the violation

Location

The location where the violation was detected (path)

Detected At

The date and time in which the violation was detected

SLA

Displays the SLA assigned to the violation

Status

Current status of the violation. The following options are Open, Resolved, or Ignored.

## Managing violations [Copied!](#managing-violations "Copy link to this section")

*   To the left of each detected violation, you’ll see a checkbox ![checkbox](/assets/108424246-369ea100-7239-11eb-98d8-e380d63b58cd.png) . Check the box to take an action on the violation, open a ticket, assign the violation, or change its priority.
    
*   To the right of each violation, you’ll find a three-dot action menu with the same functions.
    

![](/assets/image-1731245608769.png)

Violation card

When you click anywhere in the row of a detected vulnerability or click the arrow to the right of the row, this loads the relevant [violation card](/scanners/cloud-security/cloud-security-violations/cloud-security-violation-card) for this violation.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
