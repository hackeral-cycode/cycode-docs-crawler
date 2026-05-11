# Revert an ignored violation within a Pull Request (PR) | Cycode Docs

Source: https://docs.cycode.com/scanners/manage-the-scanners/revert-an-ignored-violation-within-a-pull-request-pr

---

# Revert an ignored violation within a Pull Request (PR)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/manage-the-scanners/revert-an-ignored-violation-within-a-pull-request-pr.md "Edit this page")

Updated on Nov 13, 2024 • Published on Nov 3, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

If your developers are allowed to ignore violations in a PR, they also have the ability to easily revert that action by sending a specific reply comment in the same thread. This functionality work across all violation categories and SCM systems that support “ignore” comments.

This capability provides your developers with the flexibility to manage violations more effectively during the code review process, allowing them to both ignore and unignore violations as necessary.

### How does it work? [Copied!](#how-does-it-work "Copy link to this section")

To revert ignored violations via a comment, reply to the same comment thread where the violation was originally ignored using the following format: `#cycode_unignore`.

Developers should then receive feedback or confirmation that the violation has been successfully reverted.

Note

This option is relevant for all violation categories (SAST, SCA, etc.) and SCM systems that Cycode supports allowing “ignore” comments.

### Re-ignoring after reverting [Copied!](#re-ignoring-after-reverting "Copy link to this section")

After a violation has been reverted (unignored), the developer can ignore it again using the existing ignore functionality.

Note

The unignore action must appear in the same thread that you applied the ignore action.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
