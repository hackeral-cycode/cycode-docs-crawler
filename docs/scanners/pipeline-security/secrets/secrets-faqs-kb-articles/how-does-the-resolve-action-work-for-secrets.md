# How does the resolve action work for secrets? | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/secrets-faqs-kb-articles/how-does-the-resolve-action-work-for-secrets

---

# How does the resolve action work for secrets?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/secrets-faqs-kb-articles/how-does-the-resolve-action-work-for-secrets.md "Edit this page")

Updated on Nov 25, 2024 • Published on Nov 25, 2024

* * *

## Answer [Copied!](#answer "Copy link to this section")

The action to resolve a secret resolves that secret for all violations tied to that secret, regardless of the number of assets the secret was found in. It is meant to be done once the secret is dealt with everywhere it has been found, including removing and revoking that secret, before this action is performed. Let’s take the following example of what happens with this action to help understand how it works:

Say a secret was found in 3 different repositories, in 5 different files. The requisite changes are made to remove the secret from 2 of the files in 1 repository, but the other files and repositories have not been fixed. If a Cycode user goes back to Cycode and goes through the process to resolve the secret violation, the resolve action will resolve all violations that fit that specific secret value, including the violations for the other files and repositories you have not addressed yet. The message the user will see when resolving a Secret (whether at the Violation Details level or higher up) is the following, for reference:

![](/assets/resolve-action-secrets.png)

From the messaging, the Resolve action is going to resolve the secret completely, as the expectation is the secret was removed from the code and the secret value was rotated so it is no longer exploitable. Once a secret has been resolved, Cycode will not trigger new alerts on this secret value, as the Resolved action tells Cycode that this value is no longer an issue and should not be reported on anymore.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
