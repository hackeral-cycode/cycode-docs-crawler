# Using SCA reachability | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/using-sca-reachability

---

# Using SCA reachability

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations/sca-violation-card/using-sca-reachability.md "Edit this page")

Updated on Mar 24, 2025 • Published on Mar 24, 2025

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Reachability analysis, a pivotal aspect of modern security practices, is undergoing a transformative evolution aimed at curbing noise and enhancing efficiency. In its latest iteration, this analysis streamlines operations by cutting through irrelevant data, honing in on vulnerabilities that genuinely pose a threat. By prioritizing these critical vulnerabilities, developers are empowered to efficiently manage the security and health of their direct and transitive open-source packages. This cuts the noise and enables you to prioritize the handful of vulnerabilities that actually matter, which helps developers manage the security and health of their direct and transitive open source packages.

Cycode supports SCA reachability analysis through the **Vulnerability found in dependency** policy, which enables you to see whether project code actually uses vulnerable functions from a referenced package with vulnerabilities. The reachability implementation for the SCA system is designed to check whether projects referencing vulnerable packages actually use vulnerable functions from these packages. At the first stage only directly referenced packages will be analyzed.

### How does it work? [Copied!](#how-does-it-work "Copy link to this section")

While a project may _reference_ a package with vulnerabilities, this doesn’t always mean the project actually uses functions from the package that contain vulnerabilities. The reachability feature uses a database that contains information on vulnerable functions for specific vulnerabilities. If it detects that a code project references this kind of package, the code project’s source code is scanned to check whether it calls vulnerable functions from this package.

In cases where it finds these types of calls, the detection will show the “Reachable“ + green mark field, as well as the source codes of files with these calls, where the calls are highlighted.

Note

In cases where reachability isn’t found, we don’t show the “Reachable“ field at all, as there may be cases when detections are reachable but we cannot determine them as such. This can occur, for example, if the reachability information is missing in our database, if a function is called dynamically so that we could not determine when analyzing the code, etc.

### Supported languages [Copied!](#supported-languages "Copy link to this section")

SCA reachability is currently supported for the following languages:

*   NPM:
    *   JavaScript
    *   TypeScript
    *   JSX
    *   TSX
*   GO:
    *   GO

## Viewing reachable violations [Copied!](#viewing-reachable-violations "Copy link to this section")

Reachable violations occur only in association with the **Vulnerability found in dependency** policy, which enables you to see whether project code actually uses vulnerable functions from a referenced package with vulnerabilities.

A violation can have one of two reachability statuses:

*   Reachable - A direct path was found from your application to the vulnerable code.
    
*   Unknown - In this case the violation card will not display any reachability analysis
    

To view violations that have been determined to be reachable:

1.  Navigate to **Violations > Violation Category > SCA**.
    
2.  Select the policy **Vulnerability found in dependency** and then in the filters, filter for **Reachability > Reachable**. This displays the repositories with violations that are confirmed to be reachable. Note that other violations might also be reachable, but can’t be confirmed as such.
    

![](/assets/c35ebd4-image.png)

3.  Drill-down into one of the repositories until the violation card is displayed, and then scroll to the Reachability field in the card to view the reachability analysis for the violation. In the example below, there are three reachable calls.

![](/assets/d424ac2-image.png)

4.  Click the **Reachability** field data; this will direct you to the Reachability tab, which shows the number of occurrences containing the reachable function.
    
    Additionally, you can jump between code snippets that display the exact location use of the function (together with file names and line numbers) by clicking the occurrence arrows that appear on the right hand side above the code snippet.
    

![](/assets/01caa69-image.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
