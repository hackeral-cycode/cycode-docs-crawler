# AI interactions | Cycode Docs

Source: https://docs.cycode.com/developer-experience/security-administrators/monitor-developer-activity/ai-interactions

---

# AI interactions

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/security-administrators/monitor-developer-activity/ai-interactions.md "Edit this page")

Updated on Mar 9, 2026 • Published on Feb 17, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The AI interactions page shows information about the use of AI tools by developers in your organization.

## High-level summary [Copied!](#high-level-summary "Copy link to this section")

The AI interactions are summarized in the following widgets.

Widget

Description

Actions taken on AI interactions

Shows the distribution of the actions Cycode took when AI interactions were discovered during scanning.

AI interaction scan results

Shows the distribution of the scan results that were found to be problematic.

Top 4 users with flagged results

Shows the distribution of AI interactions according to the developers that used the AI tools the most (and therefore the interactions were flagged).

## View AI interaction details [Copied!](#view-ai-interaction-details "Copy link to this section")

The table provides the following information about each AI interaction. You can drill through to see more details about a specific event by clicking to open the card.

Column

Description

Date

Date and time that the AI interaction occurred.

User

The username of the developer who initiated the AI interaction.

Provider

The AI tool that was used: - Claude Code - Cursor

Event type

Type of hook that was triggered: - Prompt - File read - MCP execution

Results

The action that was attempted, and the result of the Cycode scan: - **Secret in prompt**: Hardcoded secrets were detected in the chat interface. -**Read file with secret**: The AI tool attempted to access a file containing a secret. -**Sensitive path**: The AI tool tried to access restricted directories. -**Sensitive MCP arguments**: Hardcoded secrets were detected in the AI tool invocation payloads. -**Passed**: No secrets or restricted paths were detected.

Action

The action that was taken in response: - **Blocked**(default): The operation was immediately terminated. Notification was sent to the user and the data wasn’t accessed. -**Reported**: The interaction was allowed to proceed and the event was logged for auditing. -**Allowed**: The interaction was allowed to proceed.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
