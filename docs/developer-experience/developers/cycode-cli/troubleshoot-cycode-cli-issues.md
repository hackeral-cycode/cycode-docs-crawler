# Troubleshoot Cycode CLI issues | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-cli/troubleshoot-cycode-cli-issues

---

# Troubleshoot Cycode CLI issues

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-cli/troubleshoot-cycode-cli-issues.md "Edit this page")

Updated on May 15, 2025 • Published on Aug 11, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic describes how to troubleshoot general Cycode CLI issues, along with authentication and configuration.

## Before you begin [Copied!](#before-you-begin "Copy link to this section")

### Set the -v (–verbose) option [Copied!](#set-the--v-verbose-option "Copy link to this section")

If you want to debug a Cycode CLI issue, you have to set the log to verbose in order to see more granular information. For details, go to the [Cycode CLI docs](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#cycode-cli-commands) in Github.

### Examples [Copied!](#examples "Copy link to this section")

Authentication sample command:  
`cycode -v auth`

Scan sample ommand:  
`cycode -v scan -t secret path ./`

Note

Copy the log output to a .txt file to share with the support team if you submit a support ticket.

## Verify the Cycode CLI version [Copied!](#verify-the-cycode-cli-version "Copy link to this section")

The first step in troubleshooting a Cycode CLI issue is to check your CLI version. If you don’t have the latest version, update it. If the issue persists, continue to the next section in this topic.

For more information about the Cycode CLI installation, see the [Cyocode CLI docs](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#install-cycode-cli) for the latest version.

### Breaking changes in latest version [Copied!](#breaking-changes-in-latest-version "Copy link to this section")

See the following breaking changes for v3.0.0:

*   Support for Python 3.8 has been discontinued due to end-of-life.
*   Options:
    *   `--report` of `cycode scan` was renamed to `--cycode-report`.
    *   `--commit_range` of `cycode scan commit-history` was renamed to `--commit-range`.
    *   `--secret` was renamed to `--client-secret`.
    *   `--client-id` and `--client-secrets` moved from `cycode scan` to `cycode`.
*   Output:
    *   Deprecated `scan_id` field was deleted from JSON output. Use `scan_ids` instead.
    *   The pre-commit hook now uses text output for SCA.
    *   Default output type changed from text to rich. To restore the old behavior, use the `cycode -o text` option.
*   Commands:
    *   `cycode auth check` and `cycode version` were removed. Use `cycode status` instead.
    *   Commands with `_` (underscore) now use `-` (hyphen). Affected commands: `commit-history`, `pre-commit`, `pre-receive`.

Note

Backward compatibility is provided temporarily, and will be deleted in the coming releases.

## Verify your configuration details [Copied!](#verify-your-configuration-details "Copy link to this section")

1.  Run `cycode -v auth`.
2.  If you reach the **Cycode Authorization request** page, select your tenant and click **Allow**.  
    ![](/assets/image-400.png)
3.  If you don’t reach the **Cycode Authorization request** page, perform the procedure in the [Using the Configure Command](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#using-the-configure-command) instructions to make sure your credentials and URLs have been configured correctly.

Note

If you’re using an EU domain, make sure the API URL is set to `https://api.eu.cycode.com` and the APP URL is set to `https://app.eu.cycode.com`.

4.  Review the **credentials.yaml** file located in `/Users/<User_name>/.cycode/credentials.yaml`.
5.  Review the **config.yaml** file located in `/Users/<User_name>/.cycode/config.yaml`.

When authentication is successful, the verbose logs should look like the example below.

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
```

```text
2024-08-11 15:55:30 [cycode cli] DEBUG: Starting authentication process
2024-08-11 15:55:30 [cycode cli] DEBUG: Generating PKCE code pair
2024-08-11 15:55:30 [cycode cli] DEBUG: Starting authentication session
2024-08-11 15:55:30 [cycode cli] DEBUG: Executing request, {'method': 'POST', 'url': 'https://api.cycode.com/api/v1/device-auth/start'}
2024-08-11 15:55:30 [cycode cli] DEBUG: Receiving response, {'status_code': 200, 'url': 'https://api.cycode.com/api/v1/device-auth/start', 'content': '{"session_id":"f75f4381-4776-494c-bb19-1ee1ca9ca54c"}'}
2024-08-11 15:55:30 [cycode cli] DEBUG: Authentication session created, {'session_id': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'}
2024-08-11 15:55:30 [cycode cli] DEBUG: Opening browser and redirecting to Cycode login page
2024-08-11 15:55:31 [cycode cli] DEBUG: Getting API token
2024-08-11 15:55:31 [cycode cli] DEBUG: Trying to get API token...
2024-08-11 15:55:31 [cycode cli] DEBUG: Executing request, {'method': 'POST', 'url': 'https://api.cycode.com/api/v1/device-auth/token'}
2024-08-11 15:55:31 [cycode cli] DEBUG: Receiving response, {'status_code': 200, 'url': 'https://api.cycode.com/api/v1/device-auth/token', 'content': 'HIDDEN'}
	2024-08-11 15:55:34 [cycode cli] DEBUG: Trying to get API token...
2024-08-11 15:55:34 [cycode cli] DEBUG: Executing request, {'method': 'POST', 'url': 'https://api.cycode.com/api/v1/device-auth/token'}
2024-08-11 15:55:35 [cycode cli] DEBUG: Receiving response, {'status_code': 200, 'url': 'https://api.cycode.com/api/v1/device-auth/token', 'content': 'HIDDEN'}
2024-08-11 15:55:38 [cycode cli] DEBUG: Trying to get API token...
2024-08-11 15:55:38 [cycode cli] DEBUG: Executing request, {'method': 'POST', 'url': 'https://api.cycode.com/api/v1/device-auth/token'}
2024-08-11 15:55:39 [cycode cli] DEBUG: Receiving response, {'status_code': 200, 'url': 'https://api.cycode.com/api/v1/device-auth/token', 'content': 'HIDDEN'}
2024-08-11 15:55:42 [cycode cli] DEBUG: Trying to get API token...
2024-08-11 15:55:42 [cycode cli] DEBUG: Executing request, {'method': 'POST', 'url': 'https://api.cycode.com/api/v1/device-auth/token'}
2024-08-11 15:55:43 [cycode cli] DEBUG: Receiving response, {'status_code': 200, 'url': 'https://api.cycode.com/api/v1/device-auth/token', 'content': 'HIDDEN'}
2024-08-11 15:55:43 [cycode cli] DEBUG: Got API token process completion response
2024-08-11 15:55:43 [cycode cli] DEBUG: Saving API token
Successfully logged into cycode
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
