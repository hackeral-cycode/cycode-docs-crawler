# Remediate IaC violations | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/remediate-iac-violations

---

# Remediate IaC violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-violations/remediate-iac-violations.md "Edit this page")

Updated on May 5, 2025 • Published on Aug 5, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

To help you manage IaC violations in your organization, Cycode provides automatic fixes for some violations based on AI-generated remediations. The list of violations for which Cycode provides these automatic fixes evolves as we fine-tune our model.

The automatic fix is provided as a code, which enables you to generate an AI-based remediation, including:

*   An explanation of the violation
    
*   How to remediate it
    
*   An option to generate a code fix remediation
    

Note

Not all the violations have an available code fix; Cycode is developing code fixes as quickly as possible to ensure that they provide the best resolution possible.

Important

The generated code fix is AI-generated and may, therefore, contain errors. We recommend you check it first before using it.

## Viewing AI remediations in the IaC violation card [Copied!](#viewing-ai-remediations-in-the-iac-violation-card "Copy link to this section")

The violation card Remediation tab displayed in IaC violations includes an indicator that shows whether there’s an AI-generated remediation available for this violation.

Clicking the tab will automatically display the Remediation tab with both the Cycode Remediation Guidelines option and the AI Remediation option.

![](/assets/image-1722930518545.png)

## Generating AI remediations [Copied!](#generating-ai-remediations "Copy link to this section")

There are several ways to generate AI remediation in the violation card:

### Generating an AI remediation from the code snippet in the violation card Overview tab [Copied!](#generating-an-ai-remediation-from-the-code-snippet-in-the-violation-card-overview-tab "Copy link to this section")

The code snippet displayed in the Overview tab includes an “**AI Assistant**” button that, when clicked, will display a code fix (or an explanation of what needs to be fixed) depending on the availability of the automatic fix for such a violation.

![](/assets/image-1722930606399.png)

Clicking the **AI Assistant** button opens the remediation tab, and triggers the call for generating the AI remediation.

### Accessing an AI remediation from the Remediation tab [Copied!](#accessing-an-ai-remediation-from-the-remediation-tab "Copy link to this section")

Clicking the Remediation tab lets you access the AI remediation by simply selecting the AI Assistant tab.

![](/assets/image-1722935829416.png)

![](/assets/sast-20ai-20-204.png)

### Resolving violations using the Resolve button [Copied!](#resolving-violations-using-the-resolve-button "Copy link to this section")

If AI remediation has been generated and a code fix is available for the violation, you can also use the Resolve button in the violation card to apply the remediation or to view the AI explanation and remediation steps, depending on the status of the fix:

*   If an AI code fix is available, when you click the Resolve button at the bottom of the violation card will appear as active (purple).
    
*   If no code fix is available after the AI generation, the button will remain disabled, but you’ll see be able to see the AI explanation and the remediation steps.
    

1.  If an AI code fix is available, click the active **Resolve** button at the bottom of the violation card to open the remediation dialog. Note that the action button will be disabled until the AI generation finishes loading. ![](/assets/sast-20ai-20-206.png)
    
2.  Once you click the **Open Pull Request** button, the dialog will close and a confirmation message will appear. ![](/assets/sast-20ai-20-207.png)
    

### Collecting AI remediations feedback [Copied!](#collecting-ai-remediations-feedback "Copy link to this section")

To help us make the remediation more accurate and qualitative, we encourage you to use the feedback thumbs up or down buttons.

1.  Select either the **thumbs up** or **thumbs down** button.
    
2.  Once clicked, the button is in an active state.
    
3.  Record your response to the suggested remediation. ![](/assets/image-1722947656847.png)
    

### Managing violations when there’s an open PR [Copied!](#managing-violations-when-theres-an-open-pr "Copy link to this section")

If a violation (SAST, SCA or IaC) already has an open PR, the open status component will instead show an info icon next to the Open status, and will display a tooltip stating that a PR is open for this violation, with a link to the PR.

![](/assets/image-1722948097148.png)

Opening the violation’s card will display the same tooltip when standing on the status indicator with the same PR link.

![](/assets/image-1722948323408.png)

## Audit Log for open PRs [Copied!](#audit-log-for-open-prs "Copy link to this section")

A new row will be added to the Audit log, with the name of the user that opened the PR and the link to the PR. In addition, the Audit Log tab in the violation card will also capture this information as well as an indicator whether the PR has been opened or failed to open.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
