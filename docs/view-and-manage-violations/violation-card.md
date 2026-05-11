# Violation card | Cycode Docs

Source: https://docs.cycode.com/view-and-manage-violations/violation-card

---

# Violation card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/view-and-manage-violations/violation-card/_index.md "Edit this page")

Updated on Oct 28, 2025 • Published on Jul 23, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can view all the relevant information about a violation, regardless of its type (secrets, leaks, SCA, etc.) in the violation card, which has the following tabs:

*   [Overview](/view-and-manage-violations/violation-card/overview-tab)
    
*   [Risk analysis](/view-and-manage-violations/violation-card/risk-analysis-tab)
    
*   [Related violations](/view-and-manage-violations/violation-card/related-violations-tab)
    
*   [Remediation](/view-and-manage-violations/violation-card/remediation-tab)
    
*   [Audit](/view-and-manage-violations/violation-card/audit-tab)
    
*   [Comments](/view-and-manage-violations/violation-card/comments-tab)
    
*   [Graph](/view-and-manage-violations/violation-card/graph-tab)
    

An additional [Security Tools tab](/view-and-manage-violations/violation-card/security-tools-tab) is also available when there are violations from an integrated security tool.

## Available actions [Copied!](#available-actions "Copy link to this section")

You can perform the following actions from the bottom of the card.

Note

Some actions might be available or not available depending on the context, such as **Resolve** in SCA, which will only appear if a fix version is available.

Action

Description

Resolve

Visible depending on the context, and its affect depends on the use case. For example, for secrets, this changes the status to Resolved, while for SCA, this button opens a fix pull request (PR), and doesn’t change the status of the violation.

Ignore

Changes the status to ignored. The logic for ignored violations varies depending on the use case. For example, SAST doesn’t have the option to exclude.

Reopen

Available for violations that are ignored or resolved.

Create Ticket

Create a ticket using your integrated ticketing system.

Note

When you create a ticket for a violation in an asset that belongs to more than one Cycode project, you have to select the project whose settings should apply. The list of available projects is limited to those that are defined in the project settings.

Assign

Assign the violation to a specific Cycode user in the Cycode platform.

Priority

Set the priority for this violation. The priority is a **manual flag** for self-reminder and prioritization.

Note

Allowed user roles for acting on violations: Admin, Owner, Member.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
