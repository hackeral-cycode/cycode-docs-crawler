# Manual container correlation | Cycode Docs

Source: https://docs.cycode.com/scanners/code-to-cloud/manual-container-correlation

---

# Manual container correlation

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/code-to-cloud/manual-container-correlation.md "Edit this page")

Updated on Sep 3, 2025 • Published on Jul 10, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can manually correlate a container repository with its originating code repository. This improves the accuracy of your security posture by linking vulnerabilities and issues found in your container images directly back to the source code, enabling comprehensive code-to-cloud visibility.

### Available methods [Copied!](#available-methods "Copy link to this section")

Cycode provides two methods for manual correlation:

*   Inventory card: You can create a correlation from the detailed view of a specific container repository.
    
*   Violation card: You can create a link from the exposure path of a container security violation.
    

### Key considerations [Copied!](#key-considerations "Copy link to this section")

Each container repository can be linked to only one code repository at a time. This ensures a clear and unambiguous correlation for accurate risk assessment.

You can unlink an existing correlation or replace the currently linked code repository to maintain up-to-date and accurate correlation.

## Correlate a container repository [Copied!](#correlate-a-container-repository "Copy link to this section")

### Create a correlation [Copied!](#create-a-correlation "Copy link to this section")

**To correlate a container repository via the inventory card**

You can create a correlation directly from the container’s detailed information page.

1.  Open the inventory card for the specific container repository.
    
2.  In the Overview tab, go to the **Related components** > **Code repository** parameter. If the container repository isn’t linked to a code repository, the value is **Unknown**.
    
3.  Click **Correlate repository** to show a list of all the available code repositories available in your tenant.
    
4.  Click a row to select a repository, and then click **Correlate repository**. The name of the linked code repository appears in the **Code Repository** parameter.
    

**To correlate a container repository from the violation card**

For container security violations, you can establish a correlation directly from the exposure path if a link does not already exist.

1.  Open the violation card of a Container Security violation, and locate the Exposure Path.
    
2.  In the Exposure Path section, identify the code repository placeholder. This placeholder is enabled if the container repository involved in the violation isn’t currently linked to a code repository.
    
3.  Click **Correlate repository** to show a list of all the available code repositories available in your tenant.
    
4.  Click a row to select a repository, and then click **Correlate repository**. The code repository placeholder is replaced with the correlated code repository.
    

### Remove an existing correlation [Copied!](#remove-an-existing-correlation "Copy link to this section")

You can remove an existing correlation between a container repository and its linked code repository.

1.  Open the inventory card for the specific container repository.
    
2.  In the Overview tab, go to the **Related components** > **Code repository** parameter.
    
3.  Click the **Remove correlation** icon. The name of the linked code repository is replaced by **Unknown** in the **Code Repository** parameter.
    

### Change an existing correlation [Copied!](#change-an-existing-correlation "Copy link to this section")

You can change the correlation for a container repository.

1.  Open the inventory card for the specific container repository.
    
2.  In the Overview tab, go to the **Related components** > **Code repository** parameter.
    
3.  Click the **Edit correlation** icon to show a list of all the available code repositories available in your tenant.
    
4.  Click a row to select a repository, and then click **Correlate repository**. The new linked code repository appears in the **Code Repository** parameter.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
