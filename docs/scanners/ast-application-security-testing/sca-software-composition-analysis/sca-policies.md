# SCA policies | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-policies

---

# SCA policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-policies.md "Edit this page")

Updated on Jun 1, 2026 • Published on Apr 15, 2025

* * *

Software Composition Analysis (SCA) policies detect potential violations related to vulnerabilities and licenses in the open-source dependencies used across your organization, helping you identify and mitigate the risks introduced by third-party libraries.

## Out-of-the-box policies [Copied!](#out-of-the-box-policies "Copy link to this section")

The following SCA policies are available by default.

Policy name

Description

Severity

Labels

Use of dependency with non-permissive license

Get notified when a dependency in your code has a license that isn’t permissive.

Medium

Certification

Vulnerability found in dependency

Detects when new vulnerabilities affect your dependencies.

Multiple

Vulnerabilities

## Creating custom policies [Copied!](#creating-custom-policies "Copy link to this section")

You can create custom SCA policies built on the Context Intelligence Graph to tailor detection to your environment. Graph-based policies let you define relationships between your dependencies and the broader ecosystem, so you can detect risks that go beyond individual package attributes.

### Create a graph-based SCA policy [Copied!](#create-a-graph-based-sca-policy "Copy link to this section")

1.  Open the Context Intelligence Graph and build a query that starts from the **Code dependency** node.
    
2.  Select the nodes and relationships relevant to your detection goal.
    
3.  To enrich the resulting violations with additional context, add the relevant nodes to your query (such as **Repository** or **Code project**) and select the columns you want to surface (such as **Repository name** or **Manifest file path**).
    
4.  Select **Save as** > **New policy**, then set **Policy category** to **SCA** and **SDLC stage** to **Dependencies**.
    

### Example: detect EOL or unmaintained dependencies [Copied!](#example-detect-eol-or-unmaintained-dependencies "Copy link to this section")

This example builds a policy that surfaces packages flagged as end-of-life or unmaintained, using OSSF Scorecard data available on the **Code dependency** node.

1.  In the Context Intelligence Graph, start a new query from the **Code dependency** node.
    
2.  Filter the code dependency on its **OSSF Scorecard** attribute: set **Latest Info.checks** to contain an item where **Maintained** equals `project is archived`.
    
3.  Select **Save as** > **New policy**, then set **Policy category** to **SCA**, **SDLC stage** to **Dependencies**, and **Policy severity** to **Critical**.
    

### Known limitations [Copied!](#known-limitations "Copy link to this section")

*   Graph-based policies are not available for CLI or PR scans.

## What’s next? [Copied!](#whats-next "Copy link to this section")

*   [Create a custom policy from a query](/docs/create-a-custom-policy) : Full field reference and behavior details for custom policies built from Context Intelligence Graph queries.
    
*   [View SCA data in the Context Intelligence Graph](/docs/view-sca-data-in-the-risk-intelligence-graph) : The SCA nodes and attributes available in the Context Intelligence Graph, including the OSSF Scorecard.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
