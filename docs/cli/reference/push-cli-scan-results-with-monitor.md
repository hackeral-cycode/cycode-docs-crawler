# Push CLI scan results to the platform with --monitor | Cycode Docs

Source: https://docs.cycode.com/cli/reference/push-cli-scan-results-with-monitor

---

# Push CLI scan results to the platform with --monitor

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/reference/push-cli-scan-results-with-monitor.md "Edit this page")

* * *

## Overview [Copied!](#overview "Copy link to this section")

By default, Cycode CLI scan results stay local and surface in **Dev Activity > CLI Logs** but not in the **Violations** tab. The `--monitor` flag changes that behavior for supported scan types: it pushes the scan output back to the Cycode platform so the results appear alongside server-side findings in **Violations**.

This page consolidates how `--monitor` works, which scan types it supports, and the conditions that must be met for results to appear in the platform.

## Supported scan types [Copied!](#supported-scan-types "Copy link to this section")

`--monitor` currently supports Software Composition Analysis (SCA) only.

## Where results appear [Copied!](#where-results-appear "Copy link to this section")

For CLI scan results to appear in the **Violations** tab, the target repository must be onboarded through an SCM integration. CLI scans against local-only repositories that are not connected to Cycode do not surface in **Violations**, even when `--monitor` is used.

When the repository is onboarded, `--monitor` correlates the CLI scan to the repository and project automatically.

### Perforce and Plastic SCM [Copied!](#perforce-and-plastic-scm "Copy link to this section")

For Perforce and Plastic SCM, `--monitor` lets the CLI scan results correlate to the corresponding Cycode project once the SCM integration has been configured. You do not need to associate the CLI scan with a project manually.

## Related topics [Copied!](#related-topics "Copy link to this section")

*   [Cycode CLI](/cli/)
*   [CLI commands reference](/cli/reference/cli-commands/)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
