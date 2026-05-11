# Manage secret obfuscation | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-obfuscation

---

# Manage secret obfuscation

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-obfuscation.md "Edit this page")

Updated on Sep 14, 2025 • Published on Aug 31, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic describes how to implement secrets obfuscation in Cycode.

Without secrets obfuscation, when Cycode detects a secret, the secret value is shown for all users in the following places:

*   In the secret card:
    
    *   Code snippet of the violation, with the relevant row highlighted in red.
    *   Below the code snippet in the **Secret value** parameter.
*   If you have the **Secret value** column visible in the Violations table, in a tooltip upon hover over the key icon.
    

To reduce the risk of secret exposure, Cycode allows administrators to hide the secret values based on roles that users are assigned in Cycode. When secrets obfuscation is enabled, restricted roles will see a series of asterisks (`***`) instead of the value wherever it is displayed.

## Configure secret obfuscation [Copied!](#configure-secret-obfuscation "Copy link to this section")

1.  In the Settings view, go to **Modules** > **Secrets** > **Secrets obfuscation**.
    
2.  Turn on the **Enable secrets obfuscation** option. The list of user roles is displayed.
    
3.  Select the user roles for which the secret values should be hidden.
    
4.  Click **Save Changes**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
