# CLI MCP | Cycode Docs

Source: https://docs.cycode.com/cli/reference/cli-mcp

---

# CLI MCP

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/reference/cli-mcp.md "Edit this page")

* * *

The Cycode CLI implements a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server. Once configured, your AI coding assistant can call Cycode scan tools directly from its chat interface — without switching to a terminal.

## How it works [Copied!](#how-it-works "Copy link to this section")

MCP is an open protocol that lets AI assistants discover and invoke external tools. When you run `cycode mcp`, the CLI starts a server and exposes the following tools to the connected assistant:

Tool

What it scans

`cycode_secret_scan`

Hardcoded secrets, API keys, tokens, and passwords

`cycode_sca_scan`

Dependency vulnerabilities and license compliance

`cycode_iac_scan`

Terraform, CloudFormation, Kubernetes, and Docker misconfigurations

`cycode_sast_scan`

Source code security flaws and insecure coding patterns

`cycode_status`

CLI version, authentication status, and configuration

Each scan tool accepts either `paths` (file or directory paths on disk — preferred for large codebases) or `files` (a map of file paths to their content, for files not yet saved to disk). For SCA scans, pass the directory containing both the manifest file and the lock file so transitive dependencies resolve correctly.

## Transport protocols [Copied!](#transport-protocols "Copy link to this section")

Choose the transport based on where your assistant runs:

Protocol

Best for

Notes

`stdio` (default)

Local desktop tools — Claude Desktop, Cursor, VS Code

The host spawns `cycode mcp` as a subprocess; communication is over stdin/stdout. No open port, no network exposure.

`sse`

Remote or web-based clients

The server binds to `--host`:`--port` and clients connect via HTTP. Uses Server-Sent Events for streaming.

`streamable-http`

Clients supporting the newer MCP HTTP streaming spec

More robust than SSE; same host/port setup.

For local assistants, `stdio` is almost always the right choice. Use `sse` or `streamable-http` only when the assistant runs in a separate process or on a remote machine.

For command flags and examples, see the [`mcp` command reference](/cli/reference/cli-commands/#mcp) .

* * *

## Configure MCP [Copied!](#configure-mcp "Copy link to this section")

All three assistants below use the same `stdio` transport: their config tells them to run `cycode mcp` as a subprocess. Credentials are passed via the `env` field so you never hard-code secrets in the config file.

Tip

Make sure the CLI is authenticated before starting the assistant. Run `cycode auth` once, or set `CYCODE_CLIENT_ID` and `CYCODE_CLIENT_SECRET` in the `env` block below.

### Claude Desktop [Copied!](#claude-desktop "Copy link to this section")

Edit `claude_desktop_config.json`:

*   **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
*   **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

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
```

```json
{
  "mcpServers": {
    "cycode": {
      "command": "cycode",
      "args": ["mcp"],
      "env": {
        "CYCODE_CLIENT_ID": "your-client-id",
        "CYCODE_CLIENT_SECRET": "your-client-secret"
      }
    }
  }
}
```

Restart Claude Desktop after saving. The Cycode tools appear in the tool picker once the server connects.

### Cursor [Copied!](#cursor "Copy link to this section")

Create or edit `.cursor/mcp.json` in your project root (or `~/.cursor/mcp.json` for global config):

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
```

```json
{
  "mcpServers": {
    "cycode": {
      "command": "cycode",
      "args": ["mcp"],
      "env": {
        "CYCODE_CLIENT_ID": "your-client-id",
        "CYCODE_CLIENT_SECRET": "your-client-secret"
      }
    }
  }
}
```

Cursor picks up the config automatically when you open a project. Enable the server under **Settings → MCP** if it does not connect immediately.

### GitHub Copilot (VS Code) [Copied!](#github-copilot-vs-code "Copy link to this section")

Create or edit `.vscode/mcp.json` in your workspace root:

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
```

```json
{
  "servers": {
    "cycode": {
      "type": "stdio",
      "command": "cycode",
      "args": ["mcp"],
      "env": {
        "CYCODE_CLIENT_ID": "your-client-id",
        "CYCODE_CLIENT_SECRET": "your-client-secret"
      }
    }
  }
}
```

VS Code activates MCP servers automatically when Copilot Chat is open and a matching config file is found.

* * *

## Troubleshooting [Copied!](#troubleshooting "Copy link to this section")

Pass the global `-v` flag before `mcp` to enable verbose output. The CLI logs each tool call, the underlying `cycode scan` command it runs, and any errors to stderr — which most assistants surface in their own log panel:

```
1
```

```bash
cycode -v mcp
```

Common things to check if tools are not appearing:

*   Python version is 3.10 or above (`python --version`)
*   CLI is authenticated (`cycode status`)
*   `CYCODE_CLIENT_ID` and `CYCODE_CLIENT_SECRET` are set correctly in the `env` block
*   The `cycode` binary is on the `PATH` visible to the assistant process (it may use a different PATH than your shell)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
