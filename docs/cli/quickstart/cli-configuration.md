# Manage configuration | Cycode Docs

Source: https://docs.cycode.com/cli/quickstart/cli-configuration

---

# Manage configuration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/quickstart/cli-configuration.md "Edit this page")

* * *

The CLI stores configuration in two YAML files under your home directory.

## Configuration files [Copied!](#configuration-files "Copy link to this section")

File

Purpose

`~/.cycode/config.yaml`

API and app URLs

`~/.cycode/credentials.yaml`

Client ID, client secret, and ID token

## Configuration priority [Copied!](#configuration-priority "Copy link to this section")

The CLI resolves settings in the following order (highest to lowest):

1.  Environment variables
2.  Local config (`.cycode/` in the current directory)
3.  Global config (`~/.cycode/`)
4.  Built-in defaults

## Environment variables [Copied!](#environment-variables "Copy link to this section")

Set these variables to configure the CLI without interactive prompts — required for CI/CD pipelines and headless environments.

### Authentication [Copied!](#authentication "Copy link to this section")

Variable

Description

`CYCODE_CLIENT_ID`

Client ID from a service account or PAT

`CYCODE_CLIENT_SECRET`

Client secret

`CYCODE_ID_TOKEN`

OIDC ID token (alternative to client secret)

### Connection [Copied!](#connection "Copy link to this section")

Variable

Description

Default

`CYCODE_API_URL`

Cycode API base URL

`https://api.cycode.com`

`CYCODE_APP_URL`

Cycode app base URL

`https://app.cycode.com`

`CYCODE_CLI_REQUEST_TIMEOUT`

HTTP request timeout (seconds)

`60`

### Logging [Copied!](#logging "Copy link to this section")

Variable

Description

Default

`CYCODE_CLI_VERBOSE`

Enable verbose logging (`true`/`false`)

`false`

`CYCODE_CLI_DEBUG`

Enable debug logging (`true`/`false`)

`false`

### Scan timeouts [Copied!](#scan-timeouts "Copy link to this section")

Variable

Description

Default

`SCAN_POLLING_TIMEOUT_IN_SECONDS`

Timeout for async scan polling

`3600`

`SYNC_SCAN_TIMEOUT_IN_SECONDS`

Timeout for synchronous scans

`180`

`SCA_PRE_COMMIT_TIMEOUT_IN_SECONDS`

Timeout for SCA pre-commit scans

`600`

`REPORT_POLLING_TIMEOUT_IN_SECONDS`

Timeout for report generation polling

`600`

### Git hook limits [Copied!](#git-hook-limits "Copy link to this section")

Variable

Description

Default

`PRE_PUSH_COMMAND_TIMEOUT`

Timeout for pre-push scan (seconds)

`60`

`PRE_PUSH_MAX_COMMITS_TO_SCAN_COUNT`

Maximum commits to scan per push

`50`

`PRE_RECEIVE_COMMAND_TIMEOUT`

Timeout for pre-receive scan (seconds)

`60`

`PRE_RECEIVE_MAX_COMMITS_TO_SCAN_COUNT`

Maximum commits to scan per receive

`50`

## Interactive configuration [Copied!](#interactive-configuration "Copy link to this section")

Run `cycode configure` to set credentials through interactive prompts. The command accepts no flags.

```
1
```

```bash
cycode configure
```

The command walks through the following prompts:

1.  `Cycode API URL [https://api.cycode.com]:` — Leave blank to accept the default, or enter a custom URL. For the EU region, enter `https://api.eu.cycode.com`.
2.  `Cycode APP URL [https://app.cycode.com]:` — Leave blank to accept the default. For the EU region, enter `https://app.eu.cycode.com`.
3.  `Cycode Client ID []:` — Enter your client ID.
4.  `Cycode Client Secret []:` — Enter your client secret. Leave blank if authenticating with an OIDC ID token.
5.  `Cycode ID Token []:` — Enter your OIDC ID token. Leave blank if authenticating with a client secret.

On success, the CLI prints:

```
Successfully configured CLI credentials!
```

## Per-repository configuration [Copied!](#per-repository-configuration "Copy link to this section")

Exclusion rules — such as ignored paths, rules, and packages — are stored in a local `.cycode/config.yaml` file at the repository root. These settings override the global config and can be committed to the repository so the rules are shared across the team. See **Manage scans** for instructions on adding exclusions.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
