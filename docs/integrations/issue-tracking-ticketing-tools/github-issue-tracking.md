# GitHub issue tracking | Cycode Docs

Source: https://docs.cycode.com/integrations/issue-tracking-ticketing-tools/github-issue-tracking

---

# GitHub issue tracking

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/issue-tracking-ticketing-tools/github-issue-tracking.md "Edit this page")

Updated on Jan 29, 2026 • Published on Jan 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can integrate GitHub issue tracking to support the following functionality:

*   Open a GitHub ticket from the Violations view
    
*   Use GitHub issue tracking in workflows you create in the Automation view
    

This integration supports both **GitHub Cloud** and **GitHub Enterprise**.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

The GitHub issue tracking functionality is part of your existing GitHub integration. To support the issue tracking functionality, the GitHub integration type must be **Default application**(which uses either the **Cycode Security** or **Cycode Security - EU** GitHub app).

If you already have a GitHub integration with the **Default application** integration type, verify that the **Issues:Write** permission is allowed. If this permission is missing, ask your GitHub administrator to allow it.

If your existing GitHub integration type is **Read-only application**, you have to elevate the application type as described below.

#### Elevate permissions for a connected organization [Copied!](#elevate-permissions-for-a-connected-organization "Copy link to this section")

If you previously connected an organization as a read-only GitHub application, you can elevate the application permissions so the integration type is default application (full permissions).

Elevating permissions enables the integration with Cycode to go beyond monitoring, so the platform can perform actions such as opening pull requests to remediate violations.

1.  In the Connected organizations page, find the application whose permissions you want to elevate, and from the **More actions** menu select **Elevate permissions**.
    
2.  In the Elevate GitHub permissions page, click **Elevate**.
    
3.  In the GitHub Apps install page, click **Install**.
    

The GitHub app is re-installed as a default application with the required read and write permissions.

### Status sync between GitHub and Cycode [Copied!](#status-sync-between-github-and-cycode "Copy link to this section")

When GitHub issue tracking is used, the statuses are synced as follows.

Original status

Synced status

GitHub Closed

Cycode Resolved

GitHub Deleted

Cycode Unlink

Cycode Resolved

GitHub Closed

Cycode Ignored

GitHub Closed

### Workflow targeting [Copied!](#workflow-targeting "Copy link to this section")

Workflows that open GitHub issues currently target a pre-selected repository. Dynamic per-repository assignment of the destination repository (for example, opening the issue in the same repo as the violation) is not currently supported. The Cycode GitHub app must already have the correct permissions on the destination repository, and the destination repository must be private.

## Integrate with GitHub issue tracking [Copied!](#integrate-with-github-issue-tracking "Copy link to this section")

1.  Go to **Settings > Integrations**.
    
2.  Click **Add Integration**.
    
3.  In the list of available issue tracking tools, click **GitHub Issue Tracking**. You are redirected to the GitHub connection wizard in the SCM tools.
    
4.  If you don’t have a GitHub integration yet, follow the instructions in [GitHub](/integrations/scm-source-code-management-tools/github) to integrate at least one GitHub organization. If your GitHub integration meets all of the prerequisites listed above, no further action is required. Otherwise, follow the instructions in [Elevate permissions for a connected organization](/integrations/issue-tracking-ticketing-tools/github-issue-tracking#elevate-permissions-for-a-connected-organization) above.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
