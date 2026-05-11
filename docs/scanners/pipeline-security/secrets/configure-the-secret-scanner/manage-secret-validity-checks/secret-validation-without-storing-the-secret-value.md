# Secret validation without storing the secret value | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/secret-validation-without-storing-the-secret-value

---

# Secret validation without storing the secret value

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/secret-validation-without-storing-the-secret-value.md "Edit this page")

Updated on Oct 15, 2025 • Published on Aug 28, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Important

Secrets storage is managed internally by Cycode. If you want to disable secrets storage, contact your Cycode representative.

When secrets storage is disabled, Cycode supports secret verification whether a secret is active or inactive by retrieving its value at runtime directly from your SCM. The value is used only during validation and is never saved by Cycode.

Note

Secret validation enablement is controlled by the configuration set in the Secret Validation Settings page.

## How It Works [Copied!](#how-it-works "Copy link to this section")

1.  **Runtime retrieval** - when the status of a secret has to be validated, Cycode fetches its value from the SCM based on the location of the secret in the code.
    
2.  **Validation without storage** - the secret value is used to validate the status but isn’t stored anywhere in Cycode.
    
3.  **Scheduled validation** - Cycode validates the secret status according to a regular validation schedule (similar to the existing approach as described in [Secrets validation](/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/) ). Each time, Cycode fetches the secret value directly from the SCM.
    

## Scope and Applicability [Copied!](#scope-and-applicability "Copy link to this section")

Cycode can validate the status only for secrets that have at least one occurrence (violation) detected in an SCM, so that a SHA can be generated and used for the validation process.

Disabling secret storage applies only to future detections. Any secrets already stored in Cycode remain securely encrypted.

**Additional Notes:**

*   If a secret value is detected only in a non-SCM provider, its validity status will be: **“In progress”**.
    
*   In the code snippet, Cycode will display \*\*\* instead of the actual secret value.
    
*   The secret value cannot be retrieved (since it is not stored) when hovering over the key icon.
    

## Notes [Copied!](#notes "Copy link to this section")

*   When secret storage in Cycode is disabled, only secret status verification is supported. Other features that require storing the secret value aren’t available.
    
*   Frequent API calls may results in higher load on your SCM system, which can affect validation performance. Cycode manages this using rate limits.
    
*   Validating secret status is only available for secrets that are detected in the SCM (not other sources). However, if the same secret value is detected in both an SCM and a non-SCM tool, the results of the status validation process apply for both instances of the violation.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
