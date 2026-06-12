# Developer Experience FAQ | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developer-experience-faq

---

# Developer Experience FAQ

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developer-experience-faq.md "Edit this page")

Updated on May 19, 2026 • Published on May 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

This page consolidates common questions from Cycode customers about the Cycode CLI, IDE plugins, and developer activity monitoring. For step-by-step configuration and feature documentation, see the parent Developer Experience pages.

## Cycode CLI [Copied!](#cycode-cli "Copy link to this section")

### Where can I install the latest CLI? [Copied!](#where-can-i-install-the-latest-cli "Copy link to this section")

The CLI is available on Homebrew (`formulae.brew.sh/formula/cycode`). The IDE extension is also available on the Open VSX Registry.

### How do I configure the API and App URLs for the CLI? [Copied!](#how-do-i-configure-the-api-and-app-urls-for-the-cli "Copy link to this section")

Use the `CYCODE_API_URL` and `CYCODE_APP_URL` environment variables. They work alongside the client ID, secret, and token, and they support EU domains and CI/CD pipelines.

### What does `--monitor` do, and which scan types does it support? [Copied!](#what-does---monitor-do-and-which-scan-types-does-it-support "Copy link to this section")

It saves violations back to the Cycode platform rather than only displaying them in the CLI. It currently supports SCA scans; Secrets, SAST, and IaC violations are not yet published from the CLI to the platform.

The repository must be connected via an SCM integration for `--monitor` results to surface in the **Violations** tab. Scans against local-only repositories that aren’t onboarded won’t appear there.

### Do Cycode workflows apply to IDE and CLI scans? [Copied!](#do-cycode-workflows-apply-to-ide-and-cli-scans "Copy link to this section")

Yes. For example, a workflow that ignores a SAST finding for a given repository is respected by IDE and CLI scans.

### Do custom policies built from graph queries apply to CLI scans? [Copied!](#do-custom-policies-built-from-graph-queries-apply-to-cli-scans "Copy link to this section")

No. Graph-query-based custom policies surface only in the platform.

### Can I export the raw YAML rules used by the CLI? [Copied!](#can-i-export-the-raw-yaml-rules-used-by-the-cli "Copy link to this section")

No. SAST custom policies and other policies are pulled from the platform automatically; raw rule export via API is not supported.

### Does the CLI honor UI-set ignores for individual violations? [Copied!](#does-the-cli-honor-ui-set-ignores-for-individual-violations "Copy link to this section")

Not today. Only ignores applied directly through the pull request or merge request flow are respected by the CLI.

### Is there a formal CLI error-code reference? [Copied!](#is-there-a-formal-cli-error-code-reference "Copy link to this section")

Yes. See the [CLI Troubleshooting reference](/cli/reference/troubleshooting#common-errors) for common errors and exit codes.

## IDE plugins [Copied!](#ide-plugins "Copy link to this section")

### Which editors does the Cycode VS Code extension support? [Copied!](#which-editors-does-the-cycode-vs-code-extension-support "Copy link to this section")

VS Code, Cursor, Windsurf, and other VSCode-compatible editors that consume Open VSX Registry extensions.

### How are violations highlighted in the VS Code extension? [Copied!](#how-are-violations-highlighted-in-the-vs-code-extension "Copy link to this section")

The VS Code extension uses the standard error squiggle. No alternative indicator is currently configurable.

### Does SAST run on every save in the IDE? [Copied!](#does-sast-run-on-every-save-in-the-ide "Copy link to this section")

No. SAST does not trigger on save. Trigger a manual workspace scan to run SAST on new code.

### Does the JetBrains plugin work on the latest IntelliJ versions? [Copied!](#does-the-jetbrains-plugin-work-on-the-latest-intellij-versions "Copy link to this section")

The plugin is updated regularly to support recent JetBrains IDE versions. Major releases are generally supported, though a brand-new version may not be validated immediately.

## Developer activity and CLI logs [Copied!](#developer-activity-and-cli-logs "Copy link to this section")

### Does the “Plugin Users by Version” widget show specific user identities? [Copied!](#does-the-plugin-users-by-version-widget-show-specific-user-identities "Copy link to this section")

No. The widget shows counts of users on outdated plugin versions but does not expose specific identities.

### Is there a direct way to list which users have installed the plugin? [Copied!](#is-there-a-direct-way-to-list-which-users-have-installed-the-plugin "Copy link to this section")

No. Only usage (scans) is tracked. Cross-reference users with CLI or IDE activity exports to infer installs.

### Is IP address captured for developer CLI scans? [Copied!](#is-ip-address-captured-for-developer-cli-scans "Copy link to this section")

Not today.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
