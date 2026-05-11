# Viewing and handling scan results | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/viewing-and-handling-scan-results

---

# Viewing and handling scan results

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/viewing-and-handling-scan-results.md "Edit this page")

Updated on Nov 17, 2024 • Published on Nov 17, 2024

* * *

## Viewing scan results [Copied!](#viewing-scan-results "Copy link to this section")

The scan displays a list of security vulnerabilities and code issues found in the application code. The results are displayed in a tree view that’s broken down according to the type scan: **Hardcoded Secrets**, **Open-source Threats**(SCA),**Code Security**(SAST), and **Infrastructure as Code**.

![](/assets/8654104-image.png)

*   Under each category you’ll see vulnerabilities grouped by file (per category).
*   You can also see the summary of the total number of vulnerabilities found in each file as well as a break down by severity.
*   Expanding the file displays the vulnerabilities sorted by vulnerability severity (with critical at the top).
*   Selecting a line in the results displays the line in the code file (see middle pane).

## Handling SCA vulnerabilities [Copied!](#handling-sca-vulnerabilities "Copy link to this section")

**For SCA only**, selecting a line also opens a Cycode console in the right pane that details the SCA vulnerability in depth.

The console includes details such as the package name, version, and a remediation recommendation, such as the first patched version with the vulnerability fixed.

![](/assets/1760ecc-image.png)

## Handling detected secrets [Copied!](#handling-detected-secrets "Copy link to this section")

1.  Once the scan completes (either on **save** or **on-demand**), you’ll then see the violation(s) highlighted in your main window.

![](/assets/bbcd9e8-image.png)

2.  Hover over the violation to see the violation summary.

![](/assets/06dd15d-image.png)

3.  To view the details of the violation, select it in the list.

![](/assets/a2ad9ad-image.png)

4.  Use the **Quick Fix** button to open the violation card.
    
5.  If the violation is a secret, you can choose to ignore it - either by secret value, secret rule (i.e. secret type) or the specific file. Note that **Ignore** occurs **locally on the developer’s machine**.  
    ![](/assets/image-621.png)
    
6.  Go back to viewing the problem in the main window by clicking **View problem**.
    

![](/assets/4c0aaa5-image.png)

7.  You can also view a summary of all the problems by selecting the **Problems** tab.

![](/assets/ad74065-image.png)

### Company guideline/remediation guidelines [Copied!](#company-guidelineremediation-guidelines "Copy link to this section")

If your company has set [custom remediation guidelines](/policies) in the relevant policy, you’ll also see a field for Company Guidelines that contains the remediation guidelines you added.

![](/assets/028e212-image.png)

Note that if you haven’t added any company guideline, this field will not appear in the VS Code Extension.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
