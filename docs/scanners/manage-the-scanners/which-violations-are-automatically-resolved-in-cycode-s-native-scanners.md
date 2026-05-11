# Which violations are automatically resolved in Cycode's native scanners? | Cycode Docs

Source: https://docs.cycode.com/scanners/manage-the-scanners/which-violations-are-automatically-resolved-in-cycode-s-native-scanners

---

# Which violations are automatically resolved in Cycode's native scanners?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/manage-the-scanners/which-violations-are-automatically-resolved-in-cycode-s-native-scanners.md "Edit this page")

Updated on Nov 18, 2024 • Published on Nov 17, 2024

* * *

## Secret violations [Copied!](#secret-violations "Copy link to this section")

Every secret violation should be auto-resolved by a code change that fixes it.

Known cases where the violation is not resolved:

*   If the file is renamed between the time that Cycode detected the secret to the time that it was deleted
    
*   If the secret value is not in the same line as the password
    

## IaC violations [Copied!](#iac-violations "Copy link to this section")

Every IaC violation should be auto-resolved by a code change that fixes it

Known cases where the violation is not resolved :

*   K8S ymls

## Kubernetes violations [Copied!](#kubernetes-violations "Copy link to this section")

Kubernetes integration (not IaC) scans only for secrets.

## SCA violations [Copied!](#sca-violations "Copy link to this section")

Every SCA violation should be auto-resolved by a code change that fixes it. However, the code change **must be** in the relevant branch.

## SAST violations [Copied!](#sast-violations "Copy link to this section")

Every SAST violation should be auto resolved by a code change that fixes it:

*   The code change **must be** in the relevant branch
    
*   AI code fix sometimes comes through as not autofixing but the violation is still being found.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
