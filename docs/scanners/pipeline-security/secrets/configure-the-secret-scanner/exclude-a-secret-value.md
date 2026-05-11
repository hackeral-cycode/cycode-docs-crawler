# Exclude a secret value | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/exclude-a-secret-value

---

# Exclude a secret value

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/exclude-a-secret-value.md "Edit this page")

Updated on Jan 19, 2026 • Published on Jan 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can configure the secret scanner to exclude secrets whose values match predefined patterns, for example test keys or dummy values that are used during development. This helps to reduce the number of false positives that may occur.

When an exclusion rule is applied, any detected secret that matches the rule is discarded from the findings and doesn’t appear in the list of violations, even as an ignored violation.

Note

In addition to value-based exclusion, Cycode can auto-ignore secrets based on tags (for example, **Fake indicator** or **Low entropy**). For more information, go to [Secret with non-sensitive patterns](/scanners/pipeline-security/secrets/view-and-manage-secret-violations/manage-false-positives) .

## View the list of excluded secrets [Copied!](#view-the-list-of-excluded-secrets "Copy link to this section")

In the Settings view, go to **Secrets** > **Secret value exclusions**. The **Secrets Exclusions** list displays all the exclusion rules that have been configured for the secret scanner, including the operator and matching string.

## Create an exclusion rule for a secret [Copied!](#create-an-exclusion-rule-for-a-secret "Copy link to this section")

You can create an exclusion rule that prevents certain secret values from being reported as violations.

Important

*   Exclusion rules are matched to the value of the detected secret, not the parameter name.
*   When the value of a detected secret matches an exclusion rule, the violation is discarded and isn’t saved anywhere in Cycode.

1.  In the **Secrets** > **Secret value exclusion** page, click **Create exclusion**.
    
2.  Select an operator from the list. The available options are:
    
    *   **Contains**
    *   **Does not contain**
    *   **Starts with**
    *   **Doesn’t start with**
    *   **Ends with**
    *   **Doesn’t end with**
    *   **Match Regex**
3.  Enter the string that should be used as the predefined pattern to be matched against detected secrets.
    
4.  If you selected **Match regex** in the **Operator** field, do the following:
    
    Parameter
    
    Description
    
    **Secret regex**
    
    Provide the predefined pattern formatted as a regex.
    
    **Generate with the help of AI**
    
    Click this option to use the Cycode AI Teammate to generate your regex:
    
    1.  In the dialog that opens, use natural language to describe the pattern.
    2.  If you want the pattern to be case-sensitive, select **Use case sensitive**.
    3.  Click **Generate Regex**, then click **Apply**.
    
    **Test string**
    
    Provide one sample pattern that matches the secret values to be excluded, and provide sone sample pattern that doesn’t match the secret values to be excluded.
    
    **Validate**
    
    Click to verify that the regex works correctly.
    
5.  Click **Create exclusion**.
    

## Example [Copied!](#example "Copy link to this section")

See the following example of how a predefined pattern is identified in a detected secret, and how Cycode treats the violation as a result:

1.  A rule is created that contains the pattern “**test**”.
    
2.  The secrets scanner detects the following secret value: `my_test_key_123`
    
3.  According to the rule, Cycode identifies that `my_test_key_123` contains the pattern “**test**”.
    
4.  The violation is discarded, and there is no record of it in Cycode
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
