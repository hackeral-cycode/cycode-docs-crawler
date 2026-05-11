# Where does Cycode search for secrets during a scan? | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/secrets-faqs-kb-articles/where-does-cycode-search-for-secrets-during-a-scan

---

# Where does Cycode search for secrets during a scan?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/secrets-faqs-kb-articles/where-does-cycode-search-for-secrets-during-a-scan.md "Edit this page")

Updated on Nov 25, 2024 • Published on Aug 15, 2024

* * *

## Answer [Copied!](#answer "Copy link to this section")

During a scan, Cycode searches for secrets in the following locations:

**In personal repositories** Cycode scans for secrets in all SCMs, regardless of whether they’ve been integrated with your system or not (you can turn this off by contacting your CSM0, which includes in users’ personal repositories.

**In leaks** When a leak is identified in your system, Cycode also runs a secret scan on the leak, and if we find a secret in the leak snippet, the tag `personal developer repository` is applied to indicate that the secret was found in a leak.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
