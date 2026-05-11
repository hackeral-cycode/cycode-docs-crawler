# AWS secrets | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/aws-secrets

---

# AWS secrets

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/aws-secrets.md "Edit this page")

Updated on Sep 14, 2025 • Published on Jul 7, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains the validation logic that Cycode uses for AWS secrets.

## AWS validation logic [Copied!](#aws-validation-logic "Copy link to this section")

The process for validating the status secrets in AWS is slightly different from the process used in other integrations. AWS credentials are made up of two parts:

*   Access key ID
    
*   Secret access key
    

Cycode has to match a detected AWS secret access key with its corresponding AWS access key IDto determine if an AWS secret is valid. Instead of validating each value in isolation, Cycode checks the combinations of these secrets within the same repository, according to the following process:

1.  Cycode searches for violations that contain an access key ID as well as those that contain a secret access key.
    
2.  Cycode pairs them together and runs a validation API call against AWS:
    
    1.  If a valid pair is found, both secrets are marked as **Active**.
    2.  If a previously active pair becomes invalid, their statuses change to **Inactive**.
    3.  The status of the secret validity is set to **Unknown** if no matching pair can be confirmed.

### How validation is performed [Copied!](#how-validation-is-performed "Copy link to this section")

Cycode applies the validation logic in real time as follows:

1.  Cycode evaluates all possible pairs of access key IDs and secret access keys in the repository.
    
2.  If a valid pair is confirmed, the secrets are associated and flagged as **Active**.
    

To reflect the status, when you hover over an active AWS secret in the violations table, a tooltip indicates that the secret has a match, along with the last time the secret was validated.

Note

*   If you open the secret card from the violations table, the tooltip also provides a link to the associated secret.
*   The pair is only marked **Active** if the status of both secret values is valid.

### Where to find the validity status [Copied!](#where-to-find-the-validity-status "Copy link to this section")

*   **Secret value card** – AWS secrets have a secret validity tile with the current status in both the access key ID and secret access key cards.
    
*   **Secret violation card** – The violation card for an AWS secret contains a secret validity parameter with a tooltip that details the other secret used in the validation. The tooltip also links to the corresponding secret value card for full traceability.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
