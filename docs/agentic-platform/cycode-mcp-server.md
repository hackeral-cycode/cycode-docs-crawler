# Cycode MCP Server | Cycode Docs

Source: https://docs.cycode.com/agentic-platform/cycode-mcp-server

---

# Cycode MCP Server

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/agentic-platform/cycode-mcp-server.md "Edit this page")

* * *

Early access

The Cycode MCP Server is in early access. It is open for any Cycode customer to connect, but the feature is not yet generally available — endpoints, tool names, and response shapes may change before GA.

## Overview [Copied!](#overview "Copy link to this section")

The Cycode MCP Server brings Cycode security context directly into your AI assistant. Connect any [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) compatible client — such as Claude, Cursor, VS Code Copilot, Windsurf, or Cline — to Cycode, and your AI can answer the _why_ behind the code your developers and AI agents are working on: which findings exist on a repository, what risk they carry, who owns the asset, what compliance controls apply, and more.

The MCP Server is fully managed by Cycode — there is no software to install or infrastructure to operate.

## At a glance [Copied!](#at-a-glance "Copy link to this section")

**Hosting**

Fully managed by Cycode

**Protocol**

[Model Context Protocol](https://modelcontextprotocol.io/) over HTTP

**Authentication**

OAuth 2.1, or bearer token (Personal Access Token or Service Account)

## Endpoints [Copied!](#endpoints "Copy link to this section")

Use the endpoint that matches your Cycode tenant region:

Region

MCP endpoint

United States

`https://mcp.cycode.com`

European Union

`https://mcp.eu.cycode.com`

Note

For non-standard deployments, contact your Cycode account team for the correct endpoint.

## Authentication [Copied!](#authentication "Copy link to this section")

The MCP Server supports two authentication modes. Choose the one that matches your use case.

### OAuth 2.1 [Copied!](#oauth-21 "Copy link to this section")

Best for individual developers connecting their own IDE or AI assistant. The first time your client connects, it opens a browser window and prompts you to sign in to Cycode with your usual credentials — including your organization’s SSO, if configured — and to approve the connection. After you approve, the client stores short-lived tokens and refreshes them automatically; there are no secrets to manage in configuration files.

*   **Use it for:** humans connecting interactive tools (Claude Desktop, Cursor, VS Code Copilot, etc.).
*   **Configure:** the MCP server URL only — the client handles the OAuth flow.

Note

If your Cycode session expires, your AI client will prompt you to sign in again on the next request.

### Bearer token [Copied!](#bearer-token "Copy link to this section")

Best when your client does not yet support OAuth, or when you need a stable token for scripts, headless environments, or organization-wide integrations. You provide a pre-issued access token in the `Authorization: Bearer <token>` header.

There are two ways to issue the token, depending on who it represents:

*   **Personal Access Token (PAT)** — issued by an individual user; the token inherits that user’s permissions. Use it for personal scripts, CI/CD, automation, and ephemeral sandboxes. See [API guide: Authentication and retrieving violations](/view-and-manage-violations/api-authentication-and-retrieving-violations/) for setup.
*   **Service Account** — issued by a tenant admin for non-human or shared use; the token inherits the service account’s permissions. Use it for enterprise AI gateways, shared org-level integrations, and multi-user proxies. See [Service accounts](/cycode-settings/user-administration/service-accounts/) for setup.

Tip

Treat bearer tokens as secrets. Store them in your client’s secret manager, not in source control, and rotate them according to your organization’s secret policy.

## Connecting your client [Copied!](#connecting-your-client "Copy link to this section")

Replace the EU endpoint shown below with the US endpoint (`https://mcp.cycode.com`) if your tenant is in the United States.

### OAuth 2.1 [Copied!](#oauth-21-1 "Copy link to this section")

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

```json
{
  "mcpServers": {
    "cycode": {
      "type": "http",
      "url": "https://mcp.eu.cycode.com"
    }
  }
}
```

On first connect, your client opens a browser asking you to sign in to Cycode and approve the connection. After that, tokens are refreshed transparently.

### Bearer token [Copied!](#bearer-token-1 "Copy link to this section")

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
```

```json
{
  "mcpServers": {
    "cycode": {
      "type": "http",
      "url": "https://mcp.eu.cycode.com",
      "headers": {
        "Authorization": "Bearer <access_token>"
      }
    }
  }
}
```

Replace `<access_token>` with a Personal Access Token or a Service Account access token, depending on whether the connection represents a single user or an organization-wide integration.

### Where to put the configuration [Copied!](#where-to-put-the-configuration "Copy link to this section")

Client

Configuration file

**Claude Desktop**

`~/Library/Application Support/Claude/claude_desktop_config.json` (macOS); `%APPDATA%\Claude\claude_desktop_config.json` (Windows)

**Claude Code**

Run `claude mcp add` — see the [Claude Code MCP documentation](https://docs.claude.com/en/docs/claude-code/mcp)

**Cursor**

`~/.cursor/mcp.json` (macOS/Linux) or `%USERPROFILE%\.cursor\mcp.json` (Windows) for global config; `.cursor/mcp.json` per project

**VS Code (Copilot)**

`.vscode/mcp.json` (per project, same path on macOS/Linux/Windows) — see the [VS Code MCP documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

**Windsurf**

`~/.codeium/windsurf/mcp_config.json` (macOS/Linux); `%USERPROFILE%\.codeium\windsurf\mcp_config.json` (Windows)

**Cline**

Cline Settings → MCP Servers (UI; no file path)

After saving the configuration, restart the client (or reload its MCP integration). Cycode tools will appear in the client’s tool picker.

## Available tools [Copied!](#available-tools "Copy link to this section")

The MCP Server exposes Cycode’s public API as MCP tools. Capabilities include:

*   **Findings and risk** — query violations across SAST, SCA, Secret Detection, IaC, Container Security, CI/CD Security, DAST, and Cloud Security; filter by severity, repository, project, status, risk score, and more.
*   **Inventory** — projects, repositories, group hierarchy, members, roles, ownership, and labels.
*   **Scans and activity** — scan history, group-level aggregations, PR scan statistics, and audit logs.
*   **Compliance** — frameworks, controls, evidence, posture, and project coverage.
*   **AI security** — AI repository insights and AI interaction events (prompt, file-read, and MCP execution events).
*   **Reports** — report suites, executions, and on-demand report generation.
*   **Integrations** — Jira, GitHub vulnerability alerts, GitLab vulnerability reports, Kubernetes, brokers, and more.

Tip

The full list of tools is discoverable at runtime. Once connected, ask your AI assistant _“What Cycode tools are available?”_

Permissions are enforced by Cycode based on the authenticated principal. The MCP Server cannot grant access beyond what the underlying user or service account already has.

## Related [Copied!](#related "Copy link to this section")

*   [Service accounts](/cycode-settings/user-administration/service-accounts/)
*   [API guide: Authentication and retrieving violations](/view-and-manage-violations/api-authentication-and-retrieving-violations/)
*   [Model Context Protocol specification](https://modelcontextprotocol.io/)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
