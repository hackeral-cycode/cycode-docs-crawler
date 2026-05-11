# Remediate SAST violations | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/remediate-sast-violations

---

# Remediate SAST violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/remediate-sast-violations.md "Edit this page")

Updated on Jun 30, 2025 • Published on Jul 17, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

To help you manage SAST violations in your organization, Cycode provides automatic fixes for some violations based on AI-generated remediations.

The automatic fix is provided as code, which enables you to generate an AI-based remediation, including:

*   An explanation of the violation
    
*   How to remediate it
    
*   An option to generate a code fix remediation
    

Note

AI remediation is available for all coding languages supported by Cycode. However, not all violations currently have code fixes.

Important

The generated code fix is AI-generated and should be reviewed before you apply it.

## View AI remediations in the SAST violation card [Copied!](#view-ai-remediations-in-the-sast-violation-card "Copy link to this section")

The Remediation tab for SAST violations includes an indicator that shows whether there’s an AI-generated remediation available for this violation.

Click the tab to show the Remediation tab with both the Cycode and the AI remediation options.

There are several ways to generate AI remediation in the violation card.

### AI remediation from the Overview tab [Copied!](#ai-remediation-from-the-overview-tab "Copy link to this section")

The code snippet displayed in the Overview tab includes an **AI Assistant** that you can click to display a code fix, or an explanation of what needs to be fixed if an automatic fix isn’t available for this type of violation.

Click **AI Assistant** to open the Remediation tab and trigger the call for generating the AI remediation.

### AI remediation from the Remediation tab [Copied!](#ai-remediation-from-the-remediation-tab "Copy link to this section")

Open the Remediation tab and click **Generate** in the AI Assistant area to create an AI remediation.

## Resolve a violation [Copied!](#resolve-a-violation "Copy link to this section")

If AI remediation has been triggered and a code fix is available for the violation, you can click **Resolve** in the violation card to apply the remediation or to view the AI explanation and remediation steps, depending on the status of the fix:

**To resolve a violation**

1.  If an AI code fix is available, click **Resolve** at the bottom of the violation card to open the remediation dialog.
    
2.  Click **Open Pull Request**.
    

Note

To help us make the remediation more accurate and qualitative, we encourage you to provide your feedback.

1.  Click the **thumbs up** or **thumbs down** button.
2.  Record your response to the suggested remediation.

### Manage violations that have an open PR [Copied!](#manage-violations-that-have-an-open-pr "Copy link to this section")

If a violation (SAST, SCA or IaC) already has an open PR, the status icon in the **Risk status details** column and will have a tooltip stating that a PR is open for this violation, with a link to the PR.

The violation card contains the same tooltip on the status indicator.

## Audit log for open PRs [Copied!](#audit-log-for-open-prs "Copy link to this section")

When you open a PR for a SAST, SCA or IaC violation using the one of the above methods, this action is captured in the audit log with the name of the user that opened the PR and the link to the PR. In addition, the audit log tab in the violation card shows this information along with an indicator about whether a PR was opened or failed to open.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
