# SCA bulk remediation | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/sca-bulk-remediation

---

# SCA bulk remediation

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/sca-bulk-remediation.md "Edit this page")

Updated on Apr 6, 2025 • Published on Apr 6, 2025

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

The process of remediating vulnerabilities in packages means opening a pull request (PR) that upgrades the package version to one that doesn’t have a vulnerability. To remediate usage of vulnerable packages, Cycode creates a PR that upgrades the package version to a version that already has a fix in it.

## How does bulk remediation work? [Copied!](#how-does-bulk-remediation-work "Copy link to this section")

When Cycode detects an SCA violation in your system, very often that same vulnerability can be the root cause for multiple violations in different repositories and code projects. While it’s possible to remediate each instance, Cycode knows that it makes a lot more sense for you to resolve all the instances in one go, thereby reducing the time (MTTR - Mean Time To Resolve) it takes to address numerous related  
vulnerabilities throughout the system. That’s the idea behind the SCA bulk remediation feature.

Note

Cycode doesn’t remediate package vulnerabilities in the following cases:

*   Ecosystems that don’t support remediation of transitive (indirect) dependencies
*   When no fix is available

To apply the bulk remediation to your SCA violations through the SCA Violations list:

1.  Go to **Violations** > **SCA** and select the policy **Vulnerability found in dependency** (bulk remediation is only supported for this policy).
2.  In the list of results, select the checkboxes next to all violations you would like to resolve, or select the checkbox at the top of the list.  
    The action toolbar becomes active, with options to **Resolve**, **Ignore**, **Open Ticket**, **Assign**, and **Priority** (note that if the toolbar is not active this means that none of the results in the list are remediable).  
    ![](/assets/bulk-remediation1.png)
3.  Click **Resolve**.  
    This displays the Remediation Wizard.

![](/assets/remediation-wizard.png)

4.  In the **Branch** section, choose whether to apply the bulk remediation to the **default branch** or to **multiple branches**.
5.  In the Vulnerabilities tab, you can now filter for remediable instances and those that are non-remediable (the second tab will be empty if you filtered in advance only for remediable violations).  
    The Remediable tab shows the vulnerable package, its location, the fix version, and the number of vulnerabilities and their severities.

Note

If a package has multiple vulnerabilities, Cycode upgrades it to the minimum patched version required to fix all the vulnerabilities.

5.  To view the specific vulnerabilities in the vulnerable package, click the arrow next to the package.  
    You’ll also be able to see per each vulnerability which version needs to be fixed as well as its severity.

![](/assets/fef8ac6-image.png)

6.  Click **Next** to continue to the Pull Requests tab.

![](/assets/pull-request-tab-bulk-remediation.png)

7.  In the **Pull Requests Settings**, specify the method to use for the bulk remediation. Based on your selection in the settings, you’ll be able to see an indication of the number of pull requests that will be created:
    
    1.  Open a pull request for each repository found.
    2.  Open a pull request for each code project found in every repository.
    3.  Open a pull request for each vulnerability.
8.  Click **Generate Pull Requests** to begin the bulk remediation.  
    Note that each violation will retain an “OPEN” status in Cycode until the PR is merged, but will have an info indicator and tooltip displayed next to the status with a link to the PR.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
