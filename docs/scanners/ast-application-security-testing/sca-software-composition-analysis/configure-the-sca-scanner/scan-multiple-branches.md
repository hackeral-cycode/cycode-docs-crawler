# Scan multiple branches | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/configure-the-sca-scanner/scan-multiple-branches

---

# Scan multiple branches

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/configure-the-sca-scanner/scan-multiple-branches.md "Edit this page")

Updated on Nov 3, 2024 • Published on Aug 29, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

To provide a more robust software composition analysis (SCA) scan, Cycode enables you to scan not only your main branch, but also multiple branches. This is made possible by setting a multiple-branch scan configuration, which will then be applied to the results in the violations table, violation card, workflows, classification rules, dashboards, and more.

## Configuring multiple branch scanning [Copied!](#configuring-multiple-branch-scanning "Copy link to this section")

1.  Go to **Settings > Modules > SCA > Scanning Configuration**.
    
2.  Enable multi-branch scanning: ![image.png](/assets/image-28450-29.png)
    
3.  Select whether to scan **all** or **any** of the branchs.
    
4.  Next, specify the branch by selecting Equal or Contains, and then adding name of the branch.
    
5.  To add more branches, click **+** and add more branch names. ![image.png](/assets/image-28451-29.png)
    

What's the difference between Equals and Contains?

When you specify that a branch equals a specific branch value, only the branches of that value will be scanned.  
If you specify that a branch contains a value, then any branch that has that value will be scanned (i.e., contains is more inclusive than equals).

6.  When done, save your changes.

Note

Configuring multiple branches in this setting won’t trigger an initial scan.

## Applying multiple branch scanning to additional actions [Copied!](#applying-multiple-branch-scanning-to-additional-actions "Copy link to this section")

By setting up this configuration, you can also create workflows for specific branch violations, filter classification rules by branch, and create branch-based policies (for example, filter support). In addition, the SCA dashboard also displays the statistics per branch, and when generating an SBOM report, you’ll be able to select the report according to the branch names that are applicable.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
