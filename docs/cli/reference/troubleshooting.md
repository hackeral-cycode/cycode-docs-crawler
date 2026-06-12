# Troubleshooting | Cycode Docs

Source: https://docs.cycode.com/cli/reference/troubleshooting

---

# Troubleshooting

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/reference/troubleshooting.md "Edit this page")

* * *

Use this reference to diagnose and resolve common Cycode CLI errors. It covers how to collect logs, interpret error messages, and understand exit codes.

* * *

## Collect logs [Copied!](#collect-logs "Copy link to this section")

The CLI writes output to stdout and errors and debug messages to stderr.

### Verbose output [Copied!](#verbose-output "Copy link to this section")

Use the global `-v` flag to enable verbose logging for any command. Pass it before the subcommand:

```
1
2
```

```bash
cycode -v scan path .
cycode -v auth
```

To persist verbose logging across commands, set the environment variable instead:

```
1
2
```

```bash
export CYCODE_CLI_VERBOSE=true
cycode scan path .
```

### Debug output [Copied!](#debug-output "Copy link to this section")

For deeper diagnostics, enable debug-level logging with `CYCODE_CLI_DEBUG`:

```
1
```

```bash
CYCODE_CLI_DEBUG=true cycode scan path .
```

Debug mode logs internal HTTP requests, response codes, file collection details, and scan batch operations.

### Collecting logs for a support ticket [Copied!](#collecting-logs-for-a-support-ticket "Copy link to this section")

To capture verbose output to a file for sharing with support:

```
1
```

```bash
cycode -v scan path . 2> cycode-debug.log
```

The `2>` operator redirects stderr — where verbose and debug output is written — to `cycode-debug.log`. Attach this file when opening a support ticket.

* * *

## Common errors [Copied!](#common-errors "Copy link to this section")

### Authentication errors [Copied!](#authentication-errors "Copy link to this section")

Error

Cause

Remediation

`Authentication failed` / `Invalid credentials`

Client ID or secret is incorrect or expired.

Re-run `cycode auth` to refresh credentials, or update the `CYCODE_CLIENT_ID` and `CYCODE_CLIENT_SECRET` environment variables.

`No credentials found`

The CLI has not been authenticated on this machine.

Run `cycode auth` for interactive authentication, or set the `CYCODE_CLIENT_ID` and `CYCODE_CLIENT_SECRET` environment variables.

`Token expired`

The cached OAuth token has expired.

Run `cycode auth` again to re-authenticate.

### Network errors [Copied!](#network-errors "Copy link to this section")

Error

Cause

Remediation

`Unable to reach API` / connection refused

The API URL is unreachable due to an incorrect URL, firewall rule, or VPN configuration.

Verify that `CYCODE_API_URL` is correct. For the EU region, use `https://api.eu.cycode.com`. Check network and firewall rules.

Request timeout

The scan request timed out waiting for a server response.

Increase the timeout with `CYCODE_CLI_REQUEST_TIMEOUT=120`. For large repositories, also consider increasing `SCAN_POLLING_TIMEOUT_IN_SECONDS`.

SSL certificate error

A corporate proxy is intercepting TLS and presenting an untrusted certificate.

Configure your system trust store, or contact your security team for the proxy CA certificate.

### Scan errors [Copied!](#scan-errors "Copy link to this section")

Error

Cause

Remediation

`Restore failed`

The package manager restore command failed (for example, `npm install` exited with a non-zero code).

Run the restore manually to identify the underlying error. Use `--no-restore` to skip restore and scan direct dependencies only.

`No files found to scan`

The target path contains no files matching the scan type.

Check the path argument and ensure files are committed (for repository scans).

`Unsupported ecosystem`

The dependency file format is not recognised by the SCA scanner.

Check the [supported ecosystems](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/) page.

### Exit codes [Copied!](#exit-codes "Copy link to this section")

Code

Meaning

`0`

Scan completed successfully; no violations found, or `--soft-fail` was set.

`1`

Scan completed; one or more violations were found at or above the severity threshold, or an error occurred during the scan process

`2`

Scan aborted due to an execution error (only when `--stop-on-error` is set).

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
