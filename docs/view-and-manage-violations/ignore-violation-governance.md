# Ignore Violation Governance | Cycode Docs

Source: https://docs.cycode.com/view-and-manage-violations/ignore-violation-governance

---

# Ignore Violation Governance

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/view-and-manage-violations/ignore-violation-governance.md "Edit this page")

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode supports configurable controls for ignoring violations. These controls help organizations enforce justification and approval requirements before violations are ignored.

When enabled, users may need to provide a comment, obtain approval from an authorized approver, or both, depending on the tenant configuration and user permissions.

## Ignore Violation Settings [Copied!](#ignore-violation-settings "Copy link to this section")

Admins can configure the following settings to control the ignore violation workflow:

Setting

Description

**Require comment to ignore a violation**

Requires users to provide a comment when ignoring a violation or submitting an ignore request.

**Require admin approval to ignore a violation**

Requires users without approval permissions to submit an ignore request instead of ignoring the violation directly.

These settings can be enabled separately or together.

Note

When both settings are enabled, users without approval permissions must submit an ignore request with a mandatory comment. The violation is ignored only after the request is approved by a user with the required approval permission.

## Ignore Violation Permissions [Copied!](#ignore-violation-permissions "Copy link to this section")

Cycode includes the following permission tiers for ignoring violations:

Permission

Access

**None**

The user cannot ignore violations or submit ignore requests.

**Request Ignore Violation**

Depending on the configured settings, the user can ignore violations, submit ignore requests, and provide a mandatory comment when required.

**Ignore Approver**

The user can ignore violations directly and approve ignore requests submitted by other users.

When either of the settings listed above is enabled, users without the **Ignore Approver** permission follow the configured request or comment flow.

The permission hierarchy is:

**Ignore Approver** > **Request Ignore Violation** > **None**

Note

The **Ignore Approver** permission is included in the Admin role by default and can be added to custom roles as needed.

Note

For tenants where both toggles are disabled, all users can ignore violations directly. No request is required, and comments are not mandatory.

## User Behavior [Copied!](#user-behavior "Copy link to this section")

The available actions depend on the user’s permissions and the configured settings.

Scenario

UI behavior

User cannot ignore violations

No **Ignore** button is displayed.

Approval is required

**Request Ignore** is displayed. Workflows that include ignore actions are not allowed.

Ignore is allowed

**Ignore** is displayed. If mandatory comments are enabled, the user must add a comment. Workflows with ignore actions can be created.

User has approval permission

The user can ignore violations and approve ignore requests. Workflows with ignore actions can be created.

## Ignore Request Flow [Copied!](#ignore-request-flow "Copy link to this section")

When the **Require admin approval to ignore a violation** setting is enabled, follow this workflow:

1.  Click **Request Ignore** from the violation.
    
2.  Enter a comment if comments are required.
    
3.  Submit the ignore request for approval.
    
4.  A user with the **Ignore Approver** permission reviews the request.
    
5.  After the request is approved, the violation is marked as ignored.
    

![Ignore Request Flow](/assets/ignore-request-flow.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
