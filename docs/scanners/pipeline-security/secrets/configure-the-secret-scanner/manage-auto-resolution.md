# Manage auto-resolution | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-auto-resolution

---

# Manage auto-resolution

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-auto-resolution.md "Edit this page")

Updated on Apr 12, 2026 • Published on Apr 5, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Auto-resolution feature helps you to address vulnerabilities efficiently by configuring Cycode to automatically transition violations to **Resolved** status in the supported scenarios.

To access the automatic resolution settings, click **Settings** in the navigation pane. In the secondary navigation pane, under Modules select **Secrets** > **Auto Resolution**.

## Violations managed outside Cycode [Copied!](#violations-managed-outside-cycode "Copy link to this section")

### Map GitLab action to Cycode status [Copied!](#map-gitlab-action-to-cycode-status "Copy link to this section")

If you have a GitLab Self-Managed integration, you can configure how Cycode resolves violations that you dismiss in GitLab. The following options are available:

Option

Description

**Ignore single secret violation**

(Default) Cycode resolves the violation only for this instance of the secret.

**Ignore secret in the repository**

Cycode ignores violations associated with this secret wherever they are detected in the repository.

Cycode checks validation once a week, and you can also trigger the check manually.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
