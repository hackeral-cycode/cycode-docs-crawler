# Best practice: Secrets detection leveraging "Exists In Latest Code" | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/secrets-faqs-kb-articles/best-practice-secrets-detection-leveraging-exists-in-latest-code

---

# Best practice: Secrets detection leveraging "Exists In Latest Code"

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/secrets-faqs-kb-articles/best-practice-secrets-detection-leveraging-exists-in-latest-code.md "Edit this page")

* * *

Cycode’s Secret Location features two Secret tag filters called “Exists in Latest Code” and “Not in Latest Code”, which are designed to help you identify whether the detected secret is in the latest commit or not.

## Why is this important? [Copied!](#why-is-this-important "Copy link to this section")

One key advantage of utilizing “Exists in Latest Code” is the ability to swiftly identify secrets present in the most recent commit of any branch. This approach ensures that the latest changes to the codebase are thoroughly scrutinized for unintentional inclusion of sensitive information.

Conversely, if the detected secret is tagged “Not in Latest Code”, then the secret was clearly not found in the latest commit of any branch, which reduces the risk factors, since there are no violations in the current code, and, by tagging a violation as “Not in Latest Code” you can reduce the number of alerts on the violation.

## Early remediation [Copied!](#early-remediation "Copy link to this section")

Detecting secrets in the latest commit allows development teams to address security issues promptly. By catching potential vulnerabilities early in the development lifecycle, teams can implement remediation measures before code is deployed, reducing the likelihood of security breaches.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
