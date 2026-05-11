# Change impact analysis | Cycode Docs

Source: https://docs.cycode.com/cycode-ai/change-impact-analysis

---

# Change impact analysis

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-ai/change-impact-analysis.md "Edit this page")

* * *

Early Access

This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.

## Overview [Copied!](#overview "Copy link to this section")

Change impact analysis is a standalone Cycode AI feature that reviews a series of code changes and determines whether they affect your application’s security posture. Changes that impact security are flagged as **material code changes**, so you can focus security review on the diffs that actually matter rather than every commit.

## How it works [Copied!](#how-it-works "Copy link to this section")

For a given set of changes, change impact analysis evaluates the code in context — including authentication, authorization, data flow, input handling, and dependency changes — and produces a verdict on whether the changes are material from a security perspective. The result includes a justification that explains which parts of the change drove the conclusion.

## Custom policies [Copied!](#custom-policies "Copy link to this section")

Change impact analysis is driven by policies that the LLM evaluates against each scanned code change. In addition to the built-in policies, you can define **custom policies** to encode checks that static analysis cannot easily express — for example, rules that require reasoning about intent, business logic, or domain-specific conventions that an AST-based scanner can’t capture.

Configure custom policies under **Settings > Scanners > Change Impact Analysis > Configuration**. Each policy is described in plain language and includes:

Field

Description

**Type of change**

A short name for the pattern you want to detect.

**Definition**

A plain-language description of what the policy looks for.

**Examples**

Illustrative examples that anchor the LLM’s interpretation.

**Risk definitions**

Per-severity criteria (critical, high, medium, low, info) expressed in plain language, telling the LLM how to assign a severity when a match is found.

**Details schema** _(optional)_

A JSON schema for structured fields the LLM should extract from each match — useful when you want consistent, machine-readable output alongside the natural-language verdict.

When a scan runs, the LLM evaluates every active policy against the code changes and produces a verdict, severity, and (if a schema is provided) structured details for each match.

### Structured output and Context Intelligence Graph integration [Copied!](#structured-output-and-context-intelligence-graph-integration "Copy link to this section")

Custom policies produce **structured output** — the fields you define in the **Details schema** are populated by the LLM for every match, alongside the verdict and severity. This makes policy results consistent and machine-readable, instead of free-form prose.

Policy matches are written to the [Context Intelligence Graph](/context-intelligence-graph/) , where you can query them alongside your other assets, violations, and risks. Use Context Intelligence Graph queries to correlate custom policy findings with repository ownership, exposure, dependencies, or any other graph data — for example, to surface high-severity matches that affect internet-exposed services owned by a specific team.

## Trigger an on-demand scan [Copied!](#trigger-an-on-demand-scan "Copy link to this section")

You can trigger a change impact analysis as an on-demand scan from the Cycode platform. Once your policies are configured under **Settings > Scanners > Change Impact Analysis > Configuration**, start the scan from the on-demand scans page.

## Token usage [Copied!](#token-usage "Copy link to this section")

Each analysis consumes tokens against your organization’s monthly AI budget. Track consumption on the [AI usage dashboard](/cycode-ai/usage-dashboard/) .

## Related [Copied!](#related "Copy link to this section")

*   [AI usage dashboard](/cycode-ai/usage-dashboard/)
*   [Token budget and plans](/cycode-ai/token-budget-and-plans/)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
