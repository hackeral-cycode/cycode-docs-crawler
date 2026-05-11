# Manage repository scanning | Cycode Docs

Source: https://docs.cycode.com/scanners/manage-the-scanners/manage-repository-scanning

---

# Manage repository scanning

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/manage-the-scanners/manage-repository-scanning.md "Edit this page")

Updated on Apr 23, 2026 • Published on Apr 20, 2026

* * *

This article explains how to define the primary scan source for repositories and organizations to prevent conflicting scan results.

## Overview [Copied!](#overview "Copy link to this section")

Cycode provides the ability to define the primary scan source for repositories and organizations. This configuration ensures that scan results from different sources do not conflict and allows administrators to control which methods are permitted to persist violations within the platform.

Early Access

This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.

## Scan modes [Copied!](#scan-modes "Copy link to this section")

Cycode supports three scan source modes:

**SCM (Default):** The platform utilizes SCM-based integrations to perform scans via push events and repository cloning. In this mode, CLI-based scans may be overridden by SCM-based scans when using the `--monitor` flag.

**CLI:** SCM-based scanning is disabled for the specified repository or organization. Violations can only be persisted in the Cycode platform through the Cycode CLI using the `--monitor` flag.

**Disabled:** All persistent scanning is disabled. SCM integrations will not trigger scans, and CLI scans attempting to use the `--monitor` flag will be rejected.

## How-to configure scan source settings [Copied!](#how-to-configure-scan-source-settings "Copy link to this section")

1.  Navigate to **Settings** > **Scanners** > **SCA** > **Scan configuration**.
    
2.  Under **Repository Scope**, select the source mode per organization or repository.
    

Note

Settings can be configured at both the organization and repository levels.

## API [Copied!](#api "Copy link to this section")

You can also adjust scan source settings using the V4 API endpoint: `/v4/scans/source-configurations`.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
