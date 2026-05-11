# What's the best way to break up a monorepo when creating projects? | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/frequently-asked-questions-faq/what-s-the-best-way-to-break-up-a-monorepo-when-creating-projects

---

# What's the best way to break up a monorepo when creating projects?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/frequently-asked-questions-faq/what-s-the-best-way-to-break-up-a-monorepo-when-creating-projects.md "Edit this page")

Updated on Jan 29, 2025 • Published on Jan 29, 2025

* * *

## Answer [Copied!](#answer "Copy link to this section")

When working with a monorepo, it is important to define clear project boundaries to ensure efficient security scanning and management. The recommended approach in Cycode is to use **Custom Project Labels** in the **Automation Screen** to categorize relevant file paths within the repository.

Follow these steps:

1.  **Create Custom Project Labels:**
    
    *   Navigate to the **Automation** screen in Cycode.
    *   Define a **Custom Project Label** that corresponds to a specific file path or directory within the monorepo.
    *   This label will help categorize and filter violations based on their location.
2.  **Use Labels When Creating a New Project:**
    
    *   In the **Projects** screen, initiate the creation of a new project.
    *   In Scope tab, select the **Custom Project Label** that matches the relevant file path.
    *   Cycode will use this label to associate the correct set of violations with the new project.

By using **Custom Project Labels**, you have the flexebility to segment a monorepo into multiple projects, and access control tailored to each section of your repository.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
