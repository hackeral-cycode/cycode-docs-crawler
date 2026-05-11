# Ignore a violation | Cycode Docs

Source: https://docs.cycode.com/view-and-manage-violations/ignore-a-violation

---

# Ignore a violation

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/view-and-manage-violations/ignore-a-violation.md "Edit this page")

Updated on Jan 22, 2026 • Published on Jan 22, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can choose to ignore a detected violation. The use case for ignoring a violation is somewhat different for secrets versus other violations.

### Ignoring secret violations [Copied!](#ignoring-secret-violations "Copy link to this section")

1.  In the **Take action** menu, click **Ignore**.
    
2.  Select the ignore reason and then click **Ignore**.
    
    Reason
    
    Description
    
    False positive
    
    If the violation was mistakenly diagnosed as a violation.
    
    Ignore completely
    
    To ignore this secret value for all repositories in which it was detected.
    
    Ignore in this location
    
    To ignore the violation only in this instance.
    

Note

If you select the Ignore option in the main table, the option “Ignore Here” will not be displayed because it only applies to the single instance.

### Ignoring other violations [Copied!](#ignoring-other-violations "Copy link to this section")

To ignore other violations:

1.  In the **Take action** menu, click **Ignore**.
    
2.  Select the reason to ignore the violation (refer to the table below for an explanation of the reasons).
    
3.  Click **Ignore**.
    

Reason

Description

False Positive

If the violation was mistakenly diagnosed as a violation.

Other

To dismiss the violation for another reason. You can optionally specify the reason.

### Excluding violations [Copied!](#excluding-violations "Copy link to this section")

From here, you can exclude assets from being monitored using a selected violation policy, its category, or all policies involving the asset.

1.  Select the **Exclude** radio button.
    
2.  Select the asset that should not be monitored.
    
3.  Specify the scope of the exclusion of the selected asset: **From this policy**, **From this category**, or **From all policies**.
    
4.  Click **Ignore**. A new exclusion rule will be added to the list in the **Policies**\->**Exclusion** tab. There you can edit or delete it. For more information, go to [Policies](/policies/) .
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
