# Why are Cycode project configuration modifications not being reflected in the Violations page? | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/frequently-asked-questions-faq/why-are-cycode-project-configuration-modifications-not-being-reflected-in-the-violations-page

---

# Why are Cycode project configuration modifications not being reflected in the Violations page?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/frequently-asked-questions-faq/why-are-cycode-project-configuration-modifications-not-being-reflected-in-the-violations-page.md "Edit this page")

Updated on Nov 25, 2024 • Published on Jun 23, 2024

* * *

## Answer [Copied!](#answer "Copy link to this section")

If you’ve made changes to the [Project settings](/cycode-projects) - by removing any assets from the project such as teams or repositories or any other assets - Cycode will retain the existing violations for the removed assets in the Violations page as part of our visibility agenda. In addition, we won’t apply any automated actions, such as automatically ignoring or resolving the violations for assets in question.

If you wish to `Ignore` or `Resolve` the violations in question for the asssets that have been removed (i.e., removed repositories), you can either:

*   Manually handle the violations in the [Violations page](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations)  
    or
*   Take a proactive (recommended) approach by creating a Classification Rule and applying the rule to include existing violations and not only new ones.

Important

Before applying the Classification Rule, make sure to use the `Test Rule` button to validate the number of violations that will be affected once the new rule is submitted, since there is not way to go back once the rule is submitted.

![](/assets/image-255.png)

For more information, please reach out to your CSM or to the Support team.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
