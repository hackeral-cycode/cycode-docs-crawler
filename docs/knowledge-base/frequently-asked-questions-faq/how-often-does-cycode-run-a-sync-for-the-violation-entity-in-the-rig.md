# How often does Cycode run a sync for the Violation entity in the RIG? | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/frequently-asked-questions-faq/how-often-does-cycode-run-a-sync-for-the-violation-entity-in-the-rig

---

# How often does Cycode run a sync for the Violation entity in the RIG?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/frequently-asked-questions-faq/how-often-does-cycode-run-a-sync-for-the-violation-entity-in-the-rig.md "Edit this page")

Updated on Nov 26, 2024 • Published on Nov 26, 2024

* * *

## Answer [Copied!](#answer "Copy link to this section")

The sync is event-based according to when a violation was updated/created. When the event is published to the queue the graph updates the data.

Most of the time this occurs immediately, but in some cases, it may take up to 24 hours.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
