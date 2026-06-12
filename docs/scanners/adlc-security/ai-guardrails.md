# AI Guardrails | Cycode Docs

Source: https://docs.cycode.com/scanners/adlc-security/ai-guardrails

---

# AI Guardrails

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/adlc-security/ai-guardrails.md "Edit this page")

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s AI Guardrails provide real-time interception and security enforcement for AI-assisted development. By using native hooks within the AI coding agent, AI Guardrails scan outbound data such as prompts, file context, and tool arguments to prevent secrets from leaking before data leaves the local environment.

### Supported AI coding agents [Copied!](#supported-ai-coding-agents "Copy link to this section")

AI Guardrails are available for the following AI coding agents. Each agent is scanned across three categories — prompts sent to the LLM, files the agent reads, and MCP tool calls.

Agent

Prompt scanning

File read scanning

MCP execution scanning

Claude Code

✅

✅

✅

Cursor

✅

✅

✅

Codex

✅

❌

✅

Note

Codex does not expose a file read hook, so the **Read file with secret** and **Sensitive path** scan results are not produced for Codex interactions.

## How AI Guardrails work [Copied!](#how-ai-guardrails-work "Copy link to this section")

Each scanning category in the table above is powered by a native hook inside the AI coding agent. AI Guardrails use the following injection points to monitor and control data flow between the agent and AI models.

Hook point

Implementation

Available for

`beforeSubmitPrompt`

Intercepts the message stream before transmission to the LLM.

Claude Code, Cursor, Codex

`beforeReadFile`

Intercepts file system access requests initiated by the AI agent.

Claude Code, Cursor

`beforeMCPExecution` or `preTool`

Intercepts Model Context Protocol (MCP) payloads before external tool calls.

Claude Code, Cursor, Codex

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

Before installing AI Guardrails, developers must be provisioned and authenticated to the Cycode platform.

*   **CLI version** — the Cycode CLI must be installed. Codex support requires CLI version **3.16.0** or later.
    
*   **User provisioning** — developers must be added as a member to the Cycode tenant and assigned the global role **None**.
    
*   **CLI authentication** — developers must authenticate their local environment via the CLI using the following command: `cycode auth`
    
*   **Mandatory logging** — after the hooks are installed, a valid authentication session is required. If a developer isn’t authenticated, all AI interactions are blocked until the session is established. This ensures that 100% of the AI interactions are attributed and logged.
    

## Install AI Guardrails [Copied!](#install-ai-guardrails "Copy link to this section")

AI Guardrails can be installed per developer through the CLI, or rolled out across an organization through an MDM solution. In both flows, the `--mode` flag controls the default action — **Report** (the default) or **Block**.

### Single deployment (CLI) [Copied!](#single-deployment-cli "Copy link to this section")

Individual Cycode members can install AI Guardrails manually using the Cycode CLI.

#### Install per repository [Copied!](#install-per-repository "Copy link to this section")

To deploy AI Guardrails for a specific project, navigate to the repository directory and run the following command:

`cycode ai-guardrails install --ide [claude-code/cursor/codex/all] --mode [report/block] --scope repo`

#### Install globally (machine-wide) [Copied!](#install-globally-machine-wide "Copy link to this section")

To deploy AI Guardrails globally across all projects on your machine, run the following command:

`cycode ai-guardrails install --ide [claude-code/cursor/codex/all] --mode [report/block] --scope user`

### Mobile Device Management (MDM) deployment [Copied!](#mobile-device-management-mdm-deployment "Copy link to this section")

For organization-wide enforcement, AI Guardrails can be deployed using an MDM solution such as Jamf, Kandji, or Intune. This provides the following benefits:

*   **Centralized rollout** — distribute the Cycode CLI and execute the AI Guardrails installation script across all managed developer workstations.
*   **Policy enforcement** — AI Guardrails are active from day one so you don’t have to rely on manual developer setup. This ensures a consistent security posture across your organization.

To deploy AI Guardrails using an MDM on Mac machines, [download the MDM installation script](/assets/cycode-ai-guardrails-mdm-install.sh) and run it as root on each managed Mac.

Note

If you’re using a different operating system or have issues applying the installation script, contact Cycode technical support for assistance.

## Monitor AI interactions [Copied!](#monitor-ai-interactions "Copy link to this section")

After AI Guardrails are installed, you can review every intercepted interaction from the Cycode platform. In the navigation bar, go to **Dev Activity → AI interactions** to see information about the use of AI tools by developers in your organization.

### Summary widgets [Copied!](#summary-widgets "Copy link to this section")

The AI interactions are summarized in the following widgets:

Widget

Description

Actions taken on AI interactions

Shows the distribution of the actions Cycode took when AI interactions were discovered during scanning.

AI interaction scan results

Shows the distribution of the scan results that were found to be problematic.

Top 4 users with flagged results

Shows the distribution of AI interactions according to the developers that used the AI tools the most (and therefore the interactions were flagged).

### Interaction details [Copied!](#interaction-details "Copy link to this section")

The table provides the following information about each AI interaction. You can drill through to see more details about a specific event by clicking to open the card.

Column

Description

Date

Date and time that the AI interaction occurred.

User

The username of the developer who initiated the AI interaction.

Provider

The AI tool that was used: Claude Code, Cursor, or Codex.

Event type

Type of hook that was triggered: Prompt, File read, or MCP execution.

Results

The action that was attempted, and the result of the Cycode scan:  
\- **Secret in prompt**: Hardcoded secrets were detected in the chat interface.  
\- **Read file with secret**: The AI tool attempted to access a file containing a secret.  
\- **Sensitive path**: The AI tool tried to access restricted directories.  
\- **Sensitive MCP arguments**: Hardcoded secrets were detected in the AI tool invocation payloads.  
\- **Passed**: No secrets or restricted paths were detected.

Action

The action that was taken in response:  
\- **Reported** (default): The interaction was allowed to proceed and the event was logged for auditing.  
\- **Blocked**: The operation was immediately terminated. Notification was sent to the user and the data wasn’t accessed.  
\- **Allowed**: The interaction was allowed to proceed.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
