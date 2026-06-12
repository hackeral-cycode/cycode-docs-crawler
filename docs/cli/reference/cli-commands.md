# CLI commands reference | Cycode Docs

Source: https://docs.cycode.com/cli/reference/cli-commands

---

# CLI commands reference

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/reference/cli-commands.md "Edit this page")

* * *

The CLI commands reference documents every command, subcommand, and flag available in the Cycode CLI. Use it to look up exact syntax, flag defaults, and examples.

* * *

## scan [Copied!](#scan "Copy link to this section")

Run security scans across your code. Use subcommands to target specific scope: a local path, a full repository, a commit range, or a pull request diff.

### scan path [Copied!](#scan-path "Copy link to this section")

### cycode scan path

Scan files in a local directory for secrets, SAST, SCA, and IaC issues.

`--scan-type`

choice

Scan type: secret, sca, iac, sast. Can be specified multiple times. Default: `secret`

`--severity-threshold`

choice

Minimum severity to report: info, low, medium, high, critical. Default: `info`

`--soft-fail`

bool

Always exit 0, even when violations are found. Default: `false`

`--cycode-report`

bool

Display a link to the scan report in the Cycode platform. Default: `false`

`--show-secret`

bool

Show secret values in plain text instead of masking them. Default: `false`

`--sca-scan`

choice

SCA scan types to run: package-vulnerabilities, license-compliance. Default: `package-vulnerabilities,license-compliance`

`--monitor`

bool

Record scan results in the Discovery module (SCA only). Default: `false`

`--no-restore`

bool

Skip package restore; scan direct dependencies only. Default: `false`

`--stop-on-error`

bool

Abort if any file collection or restore step fails. Default: `false`

`--export-type`

choice

Export format: json, html, svg.

`--export-file`

path

Path to write the export file.

**Examples:**

```
1
2
3
4
```

```bash
cycode scan path .
cycode scan path . --scan-type secret
cycode scan path . --scan-type sca --severity-threshold high
cycode scan path . --export-type json --export-file results.json
```

### scan repository [Copied!](#scan-repository "Copy link to this section")

### cycode scan repository

Scan all Git-tracked files in a local repository.

`--branch`

string

Branch to scan. Defaults to the repository's default branch.

`--scan-type`

choice

Scan type: secret, sca, iac, sast. Default: `secret`

`--severity-threshold`

choice

Minimum severity to report: info, low, medium, high, critical. Default: `info`

`--soft-fail`

bool

Always exit 0, even when violations are found. Default: `false`

`--cycode-report`

bool

Display a link to the scan report in the Cycode platform. Default: `false`

`--export-type`

choice

Export format: json, html, svg.

`--export-file`

path

Path to write the export file.

**Examples:**

```
1
2
3
```

```bash
cycode scan repository .
cycode scan repository . --branch develop
cycode scan repository . --scan-type secret --export-type json --export-file results.json
```

### scan commit-history [Copied!](#scan-commit-history "Copy link to this section")

### cycode scan commit-history

Scan the commit history of a local repository for secrets.

`--commit-range`

string

Git range to scan, e.g. HEAD~5..HEAD. Defaults to full history (--all).

`--soft-fail`

bool

Always exit 0, even when violations are found. Default: `false`

`--cycode-report`

bool

Display a link to the scan report in the Cycode platform. Default: `false`

`--show-secret`

bool

Show secret values in plain text. Default: `false`

**Examples:**

```
1
2
3
```

```bash
cycode scan commit-history . --commit-range HEAD~5..HEAD
cycode scan commit-history . --commit-range origin/main..HEAD
cycode scan commit-history .
```

### scan pre-commit [Copied!](#scan-pre-commit "Copy link to this section")

### cycode scan pre-commit

Scan staged content before each commit. Intended for use via the pre-commit framework.

**Examples:**

```
1
```

```bash
cycode scan pre-commit
```

### scan pre-push [Copied!](#scan-pre-push "Copy link to this section")

### cycode scan pre-push

Scan commits being pushed before they reach the remote. Intended for use via the pre-commit framework.

See [Manage git hooks](/cli/quickstart/cli-hooks/) for hook setup instructions.

**Examples:**

```
1
```

```bash
cycode scan pre-push
```

* * *

## auth [Copied!](#auth "Copy link to this section")

Authenticate the CLI with your Cycode account interactively.

### cycode auth

Authenticate the CLI with your Cycode account.

`--client-id`

string

Service account client ID (for CI/CD non-interactive auth).

`--client-secret`

string

Service account client secret (for CI/CD non-interactive auth).

**Examples:**

```
1
2
3
4
5
```

```bash
# Interactive (Local development). Performs browser-based OAuth login.
cycode auth

# Non-interactive (CICD) 
cycode auth --client-id "$CYCODE_CLIENT_ID" --client-secret "$CYCODE_CLIENT_SECRET"
```

Warning

Never hard-code client credentials in scripts or config files. Use your platform’s secrets manager (GitHub Secrets, GitLab CI Variables, Vault, etc.).

* * *

## configure [Copied!](#configure "Copy link to this section")

Set persistent CLI configuration values interactively.

### cycode configure

Configure CLI settings interactively (API URL, credentials).

`configure` has no CLI flags. It runs a series of interactive prompts:

Prompt

Default

Description

`Cycode API URL`

`https://api.cycode.com`

API base URL. Change for EU region (`https://api.eu.cycode.com`) or on-premise.

`Cycode APP URL`

`https://app.cycode.com`

App base URL. Change for EU region (`https://app.eu.cycode.com`) or on-premise.

`Cycode Client ID`

—

Your service account or PAT client ID.

`Cycode Client Secret`

—

Your client secret. Leave blank if using an OIDC ID token.

`Cycode ID Token`

—

Your OIDC ID token. Leave blank if using a client secret.

Credentials are saved to `~/.cycode/credentials.yaml`. URLs are saved to `~/.cycode/config.yaml`.

Tip

For CI/CD environments, use environment variables instead. See [Manage configuration](/cli/quickstart/cli-configuration/#environment-variables) .

* * *

## report [Copied!](#report "Copy link to this section")

Generate SBOM (Software Bill of Materials) reports for your projects.

### report sbom path [Copied!](#report-sbom-path "Copy link to this section")

### cycode report sbom path

Generate an SBOM report for a local directory.

`--format`

choice

SBOM format (required): spdx-2.2, spdx-2.3, cyclonedx-1.4, cyclonedx-1.6.

`--output-format`

choice

Output file format. Default: `json`

`--output-file`

path

Path to write the SBOM file. Auto-generated name if omitted.

`--include-vulnerabilities`

bool

Embed vulnerability data in the SBOM. Default: `false`

`--include-dev-dependencies`

bool

Include dev/test dependencies in the SBOM. Default: `false`

`--no-restore`

bool

Skip package restore; scan direct dependencies only. Default: `false`

`--gradle-all-sub-projects`

bool

Run Gradle restore for all sub-projects. Default: `false`

`--maven-settings-file`

path

Path to a custom Maven settings.xml file.

`--stop-on-error`

bool

Abort if any file collection or restore step fails. Default: `false`

**Examples:**

```
1
2
3
```

```bash
cycode report sbom path . --format cyclonedx-1.6 --output-file sbom.json
cycode report sbom path . --format spdx-2.3 --include-vulnerabilities --output-file sbom.spdx.json
cycode report sbom path . --format cyclonedx-1.4 --no-restore
```

### report sbom repository-url [Copied!](#report-sbom-repository-url "Copy link to this section")

### cycode report sbom repository-url

Generate an SBOM report for a remote Git repository.

`--format`

choice

SBOM format (required): spdx-2.2, spdx-2.3, cyclonedx-1.4, cyclonedx-1.6.

`--output-format`

choice

Output file format. Default: `json`

`--output-file`

path

Path to write the SBOM file.

`--include-vulnerabilities`

bool

Embed vulnerability data in the SBOM. Default: `false`

`--include-dev-dependencies`

bool

Include dev/test dependencies. Default: `false`

**Examples:**

```
1
```

```bash
cycode report sbom repository-url https://github.com/org/repo --format spdx-2.3 --output-file sbom.json
```

* * *

## import [Copied!](#import "Copy link to this section")

Import an existing SBOM file into the Cycode platform.

### cycode import sbom path

Import an SBOM file into the Cycode platform.

`--name`

string

Display name for this SBOM (required).

`--vendor`

string

Vendor or owner name (required).

`--label`

string

Label to attach. Can be specified multiple times.

`--owner`

string

Owner email address. Can be specified multiple times.

`--business-impact`

choice

Business impact level: High, Medium, Low. Default: `Medium`

**Examples:**

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
```

```bash
cycode import sbom path ./sbom.json --name "My App" --vendor "Acme Corp"

cycode import sbom path ./sbom.cyclonedx.json \
  --name "Backend API" \
  --vendor "Internal" \
  --owner dev@company.com \
  --owner sre@company.com \
  --label production \
  --business-impact High
```

* * *

## mcp [Copied!](#mcp "Copy link to this section")

Start a Model Context Protocol (MCP) server so AI coding assistants can invoke Cycode scan tools directly. Requires Python 3.10 or above.

### cycode mcp

Start the Cycode MCP server for AI assistant integration.

`--transport`

choice

Transport protocol: stdio, sse, streamable-http. Default: `stdio`

`--host`

string

Host address to bind. Used only for sse and streamable-http transports. Default: `127.0.0.1`

`--port`

int

Port to bind. Used only for sse and streamable-http transports. Default: `8000`

### Transport protocols [Copied!](#transport-protocols "Copy link to this section")

Protocol

When to use

`stdio` (default)

Local desktop tools (Claude Desktop, Cursor, VS Code). The host spawns `cycode mcp` as a subprocess and communicates over stdin/stdout. No network exposure.

`sse`

Remote or web-based clients that connect over HTTP using Server-Sent Events. The server listens on `--host`:`--port`.

`streamable-http`

Clients supporting the newer HTTP streaming MCP transport. More robust than SSE for high-throughput use.

**Examples:**

```
1
2
3
4
5
6
7
8
```

```bash
# stdio — for Claude Desktop, Cursor, VS Code Copilot
cycode mcp

# SSE on a custom port
cycode mcp --transport sse --port 8080

# Streamable HTTP
cycode mcp --transport streamable-http --port 8080
```

For setup instructions and per-agent configuration, see [CLI MCP](/cli/reference/cli-mcp/) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
