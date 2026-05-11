# How are GitHub users counted? | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/admin-settings/plan-details/how-are-github-users-counted

---

# How are GitHub users counted?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/admin-settings/plan-details/how-are-github-users-counted.md "Edit this page")

Updated on Jan 20, 2026 • Published on Sep 8, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

To ensure that the number of users in your organization is counted correctly for billing purposes, Cycode deploys the following logic, detailed below.

Note

Cycode considers all users that have access/permissions to add code in GitHub. This does not include bot accounts.

## GitHub Cloud accounts [Copied!](#github-cloud-accounts "Copy link to this section")

### Organization members [Copied!](#organization-members "Copy link to this section")

For each organization, Cycode gets all of the organization’s members.

### Outside collaborators [Copied!](#outside-collaborators "Copy link to this section")

These are users who are not members of an organization but have access to one or more repositories.

## GitHub Enterprise accounts [Copied!](#github-enterprise-accounts "Copy link to this section")

### Organization members [Copied!](#organization-members-1 "Copy link to this section")

For each organization, Cycode gets all of the organization’s members.

### Suspended users [Copied!](#suspended-users "Copy link to this section")

Cycode will not count suspended users because they cannot sign into your instance, nor can they push or pull code. Suspended users will be determined as “contributors” in the affiliation field.

## Viewing users in the Context Intelligence Graph [Copied!](#viewing-users-in-the-context-intelligence-graph "Copy link to this section")

### Outside collaborators [Copied!](#outside-collaborators-1 "Copy link to this section")

These are users who are not members of an organization but have access to one or more repositories.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
