# Enforce AI Guardrails | Cycode Docs

Source: https://docs.cycode.com/developer-experience/security-administrators/enforce-ai-guardrails

---

# Enforce AI Guardrails

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/security-administrators/enforce-ai-guardrails.md "Edit this page")

Updated on Mar 18, 2026 • Published on Feb 17, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s AI Guardrails provide real-time interception and security enforcement for AI-assisted development. By utilizing native hooks within the IDE, AI Guardrails can scan outbound data such as prompts, file context, and tool arguments to prevent secret from leaking before data leaves the local environment.

Note

Available for Claude Code and Cursor.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

Before installing AI Guardrails, developers must be provisioned and authenticated to the Cycode platform.

*   User provisioning - developers must be added as a member to the Cycode tenant and assigned the global role **None**.
    
*   CLI authentication - developers must authenticate their local environment via the CLI using the following command: `cycode auth`
    
*   Mandatory logging - after the hooks are installed, a valid authentication session is required. If a developer isn’t authenticated, all AI interactions are blocked until the session is established. This ensures that 100% of the AI interactions are attributed and logged.
    

### Interception logic using hooks [Copied!](#interception-logic-using-hooks "Copy link to this section")

AI Guardrails uses three primary injection points to monitor and control data flow between the IDE and AI models.

Hook point

Implementation

`beforeSubmitPrompt`

Intercepts the message stream before transmission to the LLM.

`beforeReadFile`

Intercepts file system access requests initiated by the AI agent.

`beforeMCPExecution` or `preTool`

Intercepts Model Context Protocol (MCP) payloads before external tool calls.

## Install AI Guardrails [Copied!](#install-ai-guardrails "Copy link to this section")

### Single deployment [Copied!](#single-deployment "Copy link to this section")

Individual Cycode members can install AI Guardrails manually using the Cycode CLI.

#### Install AI Guardrails per repository [Copied!](#install-ai-guardrails-per-repository "Copy link to this section")

To deploy AI Guardrails for a specific project, navigate to the repository directory and run the following command:

`cycode ai-guardrails install --ide [Cursor/Claude/all] --mode [report/block] --scope repo`

#### Install AI Guardrails globally (machine-wide) [Copied!](#install-ai-guardrails-globally-machine-wide "Copy link to this section")

To deploy AI Guardrails globally across all projects on your machine, type the following command in the CLI:

`cycode ai-guardrails install --ide [Cursor/Claude/all] --mode [report/block] --scope user`

## Mobile Device Management (MDM) deployment [Copied!](#mobile-device-management-mdm-deployment "Copy link to this section")

For organization-wide enforcement, AI Guardrails can be deployed using an MDM solution such as Jamf, Kandji, or Intune. This provides the following benefits:

*   Centralized rollout - distribute the Cycode CLI and execute the AI Guardrails installation script across all managed developer workstations.
*   Policy enforcement - AI Guardrails are active from day one so you don’t have to rely on manual developer setup. This ensures a consistent security posture across your organization.

To deploy AI Guardrails using an MDM on Mac machines, [download the MDM installation script](/assets/cycode-ai-guardrails-mdm-install.sh) and run it as root on each managed Mac.

Note

If you’re using a different operating system or have issues applying the installation script, contact Cycode technical support for assistance.

## Configure AI Guardrail [Copied!](#configure-ai-guardrail "Copy link to this section")

By default, the Action is set to “Report” (and not “Block”) upon installation.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
