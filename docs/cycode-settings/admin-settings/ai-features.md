# AI features | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/admin-settings/ai-features

---

# AI features

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/admin-settings/ai-features.md "Edit this page")

Updated on Apr 29, 2026 • Published on Jul 23, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s AI is designed to enhance detections, prioritizations, and remediations. The model operates exclusively on Cycode servers and is never trained on users’ data. To learn more about our AI policy, see [Cycode AI](/cycode-ai/) .

To help you determine when and where you’d like to implement our AI features, Cycode provides admins a dedicated AI opt-in/out page in the Admin settings, where you can customize the AI configuration.

Important

The AI configuration is set at the tenant level - not per user.

Note

The admin settings, which host the AI feature settings, have moved from the Profile dropdown to the main platform Settings function

## About the AI settings [Copied!](#about-the-ai-settings "Copy link to this section")

### Enable ML-based Features [Copied!](#enable-ml-based-features "Copy link to this section")

This configuration enables machine learning-based features that are used for detecting, prioritizing and remediating issues using non-generative models. This configuration applies to features such as the [AI-powered remediation for SAST](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/remediate-sast-violations) capability.

### Enable the Cycode LLM [Copied!](#enable-the-cycode-llm "Copy link to this section")

Cycode’s large language model (LLM) is an advanced version of Cycode AI, which leverages a sophisticated language model that’s used to provide automated responses, code suggestions, and analysis.

This configuration gates Maestro (the AI orchestrator) and all of the agents it coordinates, including:

*   [Context Intelligence Graph natural-language queries](/context-intelligence-graph/query-using-natural-language)
*   [Exploitability analysis](/cycode-ai/exploitability-analysis/)
*   [CVE analysis](/cycode-ai/cve-analysis/)
*   [Change impact analysis](/cycode-ai/change-impact-analysis/)
*   [AI-powered remediation](/cycode-ai/) (SAST, IaC, container security)
*   Risk summary, repository analysis, and detections query through the Maestro chat panel

When the LLM toggle is disabled, the [AI usage dashboard](/cycode-ai/usage-dashboard/) stops recording new token consumption and the Maestro chat panel is unavailable.

## Enabling and disabling configurations [Copied!](#enabling-and-disabling-configurations "Copy link to this section")

1.  Go to **Settings > Admin Settings > AI Features**.
    
2.  By default both configurations are enabled:
    
    *   **Enable ML-based Features** for non-generative models
    *   **Enable Cycode LLM** Note that the LLM toggle can only be enabled when the Cycode ML-based feature is enabled.
3.  Change the settings according to your tenant preferences, and click **Save Changes**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
