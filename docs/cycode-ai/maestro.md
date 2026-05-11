# Maestro | Cycode Docs

Source: https://docs.cycode.com/cycode-ai/maestro

---

# Maestro

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-ai/maestro.md "Edit this page")

* * *

## Overview [Copied!](#overview "Copy link to this section")

Maestro is the AI orchestrator built into the Cycode platform. It interprets your questions in plain language and coordinates a set of specialized AI agents to return a single, focused answer — instead of asking you to navigate between separate tools and views.

A typical interaction starts as a chat. Maestro decides which underlying agents are needed (for example, exploitability analysis, CVE lookup, or a Context Intelligence Graph query), runs them in the right order, and returns the combined result in the conversation.

Note

Maestro is available only when the **Enable Cycode LLM** toggle is on under **Settings > Admin Settings > AI Features**. For more information, see [AI features](/cycode-settings/admin-settings/ai-features/) .

## Start a conversation [Copied!](#start-a-conversation "Copy link to this section")

Maestro is available as a floating button in the Cycode platform. Click the **Maestro** icon to open the chat panel from any page.

When you open a new conversation, Maestro shows a set of suggested prompts you can use as starting points. You can also type a question directly into the chat box.

## What you can ask [Copied!](#what-you-can-ask "Copy link to this section")

Maestro brings together the AI capabilities that used to be scattered across the platform. You can ask it to:

Capability

Example questions

**Context Intelligence Graph queries** (admin only)

“Which repositories have critical SCA violations and are exposed to the internet?” “Show me all assets owned by the payments team.”

**Code repository analysis**

“What SAST violations exist in the `checkout-service` repository?” “Are there secrets in this repo?”

**Repository asset profiling**

“What does the `auth-platform` repository do?” “Which dependencies and deployed applications are in this repo?”

**CVE analysis**

“Tell me about CVE-2024-1234.” “What’s the exploit status and recommended mitigation?”

**Exploitability analysis**

“Is this SAST violation actually reachable in my code?”

**AI-powered remediation**

“Suggest a fix for this IaC violation.”

For more on each capability, see [Exploitability analysis](/cycode-ai/exploitability-analysis/) , [CVE analysis](/cycode-ai/cve-analysis/) , and [Context Intelligence Graph natural-language queries](/context-intelligence-graph/query-using-natural-language) .

## Conversation history [Copied!](#conversation-history "Copy link to this section")

Every conversation is saved automatically so you can return to earlier discussions. Use the chat history panel to:

*   Reopen a previous conversation and continue the discussion with full context.
*   Rename a conversation to make it easier to find later.
*   Delete conversations you no longer need.

## Token usage [Copied!](#token-usage "Copy link to this section")

Each request Maestro processes consumes tokens against your organization’s monthly AI budget. Track consumption on the [AI usage dashboard](/cycode-ai/usage-dashboard/) — see [Token budget and plans](/cycode-ai/token-budget-and-plans/) for details on tiers and quotas.

## Related [Copied!](#related "Copy link to this section")

*   [AI usage dashboard](/cycode-ai/usage-dashboard/)
*   [Exploitability analysis](/cycode-ai/exploitability-analysis/)
*   [CVE analysis](/cycode-ai/cve-analysis/)
*   [Change impact analysis](/cycode-ai/change-impact-analysis/)
*   [AI features](/cycode-settings/admin-settings/ai-features/)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
