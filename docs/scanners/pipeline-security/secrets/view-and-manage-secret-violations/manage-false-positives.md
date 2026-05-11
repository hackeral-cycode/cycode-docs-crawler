# Manage false positives | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/view-and-manage-secret-violations/manage-false-positives

---

# Manage false positives

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/view-and-manage-secret-violations/manage-false-positives.md "Edit this page")

Updated on Jan 19, 2026 • Published on Dec 24, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The secrets scanner identifies secrets based on patterns. Sometimes these patterns are test values, placeholders, or dummy credentials which Cycode determines to be potential false positives based on the accompanying heuristics.

To enable you to effectively manage these types of violations, Cycode applies tags to secrets that are likely to be false positives based on their context.

Cycode’s default behavior is to include potential false positives in the Violations view along with the tag that it assigns. You can filter the view by tags in order to quickly identify the potential false positives.

## Automate Cycode handling of false positives [Copied!](#automate-cycode-handling-of-false-positives "Copy link to this section")

You can use the **Automatically ignore secrets for non-sensitive patterns** workflow in the **Automation** > **Workflow library** to automate the handling of false positives that are detected when Cycode scans for secrets.

### Ignore false positives [Copied!](#ignore-false-positives "Copy link to this section")

You can ignore all violations that match specific default patterns. To do this, create a workflow based on the default settings of the template in the workflow library.

### Reduce the impact of false positives [Copied!](#reduce-the-impact-of-false-positives "Copy link to this section")

If you prefer not to ignore all false positives, you can use the available workflow as a template and create customized workflows to handle them and reduce their impact. For example, you can create workflows that do the following:

*   Downgrade the severity of a violation – Change the severity of a violation to **Info** if it has a **Low entropy** or **Short secret** tag.
    
*   Ignore violations with specific tags – Ignore violations that have tags like **Fake indicator value** or **Multiple occurrences**.
    

### Example [Copied!](#example "Copy link to this section")

A secret is detected with the value `dummy_api_key_123`. Cycode recognizes this pattern and applies the tag **Fake indicator value**. You can manage this violation in the following ways:

*   Have Cycode automatically ignore the violation using a workflow.
    
*   KHve Cycode automatically downgrade the severity to **Info** using a customized workflow.
    

## Secret tags [Copied!](#secret-tags "Copy link to this section")

Cycode uses the following tags to identify potential false positives.

Tag

Description

**Fake indicator surrounding**

The secret is surrounded by words or phrases like `dummy_password` or `test_api_key` that indicate the secret is fake.

**Fake indicator value**

The secret value contains keywords such as `example_token` or `debug_mode`, which suggest that it isn’t a true secret.

**Equal to context**

The secret value matches the surrounding text (for example, `username` next to `"user_name"`), making it derivable and non-secret.

**Multiple occurrences**

The same value appears repeatedly in the file, reducing the likelihood that the finding is a real secret.

**Low entropy**

The secret lacks randomness or complexity, indicating that it likely isn’t a secure value.

**Short secret**

The secret value is too short to be a valid credential.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
