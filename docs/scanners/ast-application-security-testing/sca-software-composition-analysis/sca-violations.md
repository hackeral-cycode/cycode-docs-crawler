# SCA violations | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations

---

# SCA violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/_index.md "Edit this page")

Updated on Jan 13, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

SCA (Software Composition Analysis) violations refer to issues and vulnerabilities in software applications that arise from the use of third-party or open-source software components with known security flaws or licensing issues. SCA is a critical aspect of software development, as it helps identify and address potential risks associated with the software supply chain.

When you select SCA in the Violations Categories, Cycode displays the results for packages related to the two [default SCA policies](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-policies) that are built-into Cycode (**Vulnerability found in dependency** and **Use of dependency with non-permissive license**)as well as all the custom policies set up by your company. The resulting list of violations will only appear if violations related to the SCA violation policies were detected in any of your packages.

To navigate to the **SCA** violations, go to **Violations > Violation Category > SCA**. By default, Cycode displays the detected violations according to the [vulnerable packages](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-package-card) in which the violations were detected.

![](/assets/image-1731242973467.png)

From this page, you can do the following:

*   Search for a policy or vulnerability in the Search policy name field
    
*   Add more filters to narrow down the results further
    
*   Export the current policies with violations
    
*   Sort the listed policies by policy name, risk score, total violations, and last violation
    
*   Click a policy to view the associated violations in the right pane
    

The list of violations is displayed according to the policy name associated with the vulnerability, and includes the following additional information:

Part

Description

Vulnerable Package

Displays the name and version of the vulnerable package

Repositories

Displays the number of repositories in which the package is found

Vulnerabilities By Risk

Displays the number of vulnerabilities detected according to their risk scores

Detected At

The date and time and vulnerability was detected

### Why do only some code projects contain the full name? [Copied!](#why-do-only-some-code-projects-contain-the-full-name "Copy link to this section")

In the context of Code Projects only, sometimes you’ll see only the manifest file name (such as `package.json`, `pom.xml`) in the field (in Discovery and in the Violations page), and sometimes the whole path (including the folder). This is because some code projects are in the root, while others aren’t.

Therefore, if you see the code project as `package.json` then the manifest file is in the root of the repo, while `app/package.json` means the manifest file is in a directory called “app”.

## Viewing all SCA violations [Copied!](#viewing-all-sca-violations "Copy link to this section")

Violations - for any type of category - are always the bottom line in Violations page. In other words, if you go to **Violations > Violation Category > SCA**, and then select **None** - you’ll see a clear list of ALL the SCA vulnerabilities in your system.

![](/assets/image-1731243942473.png)

The list of violations is displayed according to the policy associated with the vulnerability, and includes the following information:

Column Name

Description

Policy Name

The SCA policy associated with the vulnerability

Security Tool

The security tool used to identify the vulnerability

Location

The source and repositories where the package with the vulnerability is found

Detected At

Date and time in which the vulnerability was detected

Status

The status of each detected vulnerability; can be **Open**, **Resolved**, or **Ignored**

Status Change Message

If the vulnerability’s status changed, the message associated with the change

Status Changed By

If the vulnerability’s status changed, the name of the user who changed it

### Managing SCA violations [Copied!](#managing-sca-violations "Copy link to this section")

To the left of each violation, you’ll see a checkbox ![checkbox](/assets/108424246-369ea100-7239-11eb-98d8-e380d63b58cd.png) . Selecting the checkbox opens an additional function above the list that lets you resolve, ignore, open a ticket, assign the violation, and change the priority of the detected vulnerabilities.

![](/assets/image-1731244077372.png)

You can also apply bulk actions - including [bulk remediation](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/sca-bulk-remediation) .

## What’s next? [Copied!](#whats-next "Copy link to this section")

*   Package card: When you select any package in the list of vulnerabilities, this opens the dedicated [package card](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-package-card) .
    
*   SCA violation card: When you click anywhere in the row of a detected vulnerability or click the arrow to the right of the row, this loads the relevant [violation card](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/) for this violation.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
