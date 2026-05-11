# SAST scan FAQs | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-scan-faqs

---

# SAST scan FAQs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-scan-faqs.md "Edit this page")

Updated on Aug 28, 2025 • Published on Aug 28, 2025

* * *

## How is the SAST scan triggered? Is it triggered for any PR? [Copied!](#how-is-the-sast-scan-triggered-is-it-triggered-for-any-pr "Copy link to this section")

When you integrate with Cycode, we run an initial On-Demand Scan of your entire repository. After that, scans are automatically triggered on every push to the default branch or any additional branches you’ve configured. Cycode also scans pull requests, but only for repositories where this option has been enabled in the PR scan settings.

## Can I manually trigger a re-scan of a repository? [Copied!](#can-i-manually-trigger-a-re-scan-of-a-repository "Copy link to this section")

Yes. You can manually start a new On-Demand Scan, which will trigger a full scan of the repository. However, this is typically unnecessary, Cycode automatically scans for changes on each push event.

## Can I configure additional branches to be scanned for SAST? [Copied!](#can-i-configure-additional-branches-to-be-scanned-for-sast "Copy link to this section")

Yes. In addition to your default branch, you can configure additional branches to be scanned by Cycode. However, keep in mind that violations are tracked per branch. This means enabling scans on multiple branches may result in duplicate violations across branches. You can easily filter violations by branch on the Violations page to manage this.

## Are SAST violations only ignored in the selected branch? [Copied!](#are-sast-violations-only-ignored-in-the-selected-branch "Copy link to this section")

Yes. When a SAST violation is ignored, the action applies only to that specific branch. Violations are branch-specific, so ignoring it in one branch does not affect its status in others.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
