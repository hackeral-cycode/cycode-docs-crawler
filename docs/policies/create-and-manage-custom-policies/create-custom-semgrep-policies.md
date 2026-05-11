# Create custom Semgrep policies | Cycode Docs

Source: https://docs.cycode.com/policies/create-and-manage-custom-policies/create-custom-semgrep-policies

---

# Create custom Semgrep policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/policies/create-and-manage-custom-policies/create-custom-semgrep-policies.md "Edit this page")

Updated on Aug 14, 2024 • Published on Jul 30, 2024

* * *

🚧 Important

This is a new version of the custom Semgrep policy.

Cycode supports the addition of custom Semgrep policies, which will be added to the [SAST policies](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/) list provided out-of-the-box.

Note

When creating custom Semgrep rules, follow the [Semgrep guidelines](https://semgrep.dev/docs/writing-rules/overview/) .

## Creating a custom Semgrep policy [Copied!](#creating-a-custom-semgrep-policy "Copy link to this section")

1.  Go to the **Policies** tab and click the **\+ Custom Policy** button in the top right-hand corner.
    
2.  In the Create New Policy window, click the **Policy Type** dropdown menu and select the **Custom Semgrep** option:
    

![](/assets/custom-semgrep-policy.png)

4.  The following form will appear:

![](/assets/custom-semgrep-policy-form.png)

5\. Enter the following information in the pop-up window:

1\. Policy Name

2\. Description

3\. Severity

1\. Critical

2\. High

3\. Medium

4\. Low

5\. Info

4\. Remediation guidelines (optional)

5\. Public link to Semgrep rules YAML file.

![](/assets/custom-semgrep-policy-filled-form.png)

5\. Click the **Done** button.

\## Custom Semgrep policies FAQs  
Q. What will be scanned by the newly created custom policy?\*\*

A. The newly created custom policy will ONLY apply to new commits that occur after the policy was created.

**Q. Do the newly created custom policies support the auto-resolving of violations?**

A. Yes, there is support for the auto-resolving of violations.

**Q. What details are supported with the newly created custom policy?**

A. All the same data that is available in all SAST violations will be available for the custom Semgrep policy violations.

**Q. Do we allow updates/edits to Custom Semgrep rules?**

A. Currently, No, since this can cause a violation inconsistency.

Creating a new custom rule will be the right approach.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
