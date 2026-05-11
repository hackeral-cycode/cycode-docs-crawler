# Plan details | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/admin-settings/plan-details

---

# Plan details

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/admin-settings/plan-details/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Sep 8, 2024

* * *

Note

The admin settings, which host the Organization Plan, have moved from the Profile dropdown to the main Settings view.

Cycode’s platform simplifies the categorization of members, permissions, and project access within the organization by enabling you to manage your organization’s tenant(s).

*   If you’re an owner, you can modify the organization’s settings to optimize collaboration and ensure appropriate access among members
    
*   If you’re an admin, you’ll be able to see the details of the settings but not make changes or add new tenants
    

To view and edit these settings, go to **Settings > Admin Settings > Plan details**.

## Tenant details [Copied!](#tenant-details "Copy link to this section")

1.  If you’re an owner, you can now edit your tenant settings, or click **\+ Add Tenant** and add a new tenant.
    
2.  Click **Save Changes** to apply your changes.
    

## Organization details [Copied!](#organization-details "Copy link to this section")

One aspect that administrators on the Cycode platform can enhance is the visibility within the product concerning purchased packages and licenses. The Organization Plan is crafted to offer comprehensive insights into your organization’s plan with Cycode’s solution. This feature empowers you to effortlessly view the module(s) and licenses you’ve acquired as part of your Cycode plan. Additionally, you can utilize this function to conveniently compare your plan with your actual usage in the platform, all within the same function page.

Cycode offers its customers three organization plan modules to meet their security needs:

*   **Pipeline Security module**: Protects against vulnerabilities, exposure, and unauthorized access across the software supply chain, and includes **Hardcoded Secrets Detection**, **CI/CD Security**, **Source Code Leakage Detection**, and Cycode’s build hardening and artifact integration solution,**CI/MON**.
    
*   **Application Security Testing (AST) module**: Provides vulnerability scanning, detection, and coverage across open source, static code, and cloud, and includes **SCA**, **SAST**, **IaC**, and **Container Image Security**.
    
*   **Posture Management module**: Connects all your security tools for visualization, prioritization, and remediation through a single pane of glass using Cycode’s third-party security connectors.
    

Note that you can choose to have one or more of the plan modules enabled for your organization. For more information, contact your customer support manager, or click **\+ Contact Us** to open a Zendesk call.

### Available information [Copied!](#available-information "Copy link to this section")

In this section, you’ll find the following information available to you as admin/owner:

*   The number of licenses (developers) you purchased
    
    Note
    
    If you’re a Cycode Enterprise Server customers, the license details will not be displayed in the Organization Plan page.
    
*   The active Cycode module(s) you purchased and related capabilities:
    
    *   Pipeline Security module, which includes:
        *   Hardcoded Secrets Detection
        *   CI/CD Security
        *   Source Code Leaks Detection
        *   CI/MON - Build Hardening And Artifact Integrity
    *   Application Security Testing module, which includes
        *   Software Composition Analysis (SCA)
        *   Static Application Security Testing (SAST)
        *   Infrastructure as Code (IaC)
        *   Container Image Security
    *   Posture Management
        *   Security tool integration - connecting any security tools to Cycode

## Plan Usage [Copied!](#plan-usage "Copy link to this section")

In the Plan Usage section, you’ll find a breakdown of the Source Code Management analysis of your users.

Note

If your account has multiple tenants, the data provided in the page will only include the current tenant you’ve selected, and you’ll receive an indication in the usage section.

![](/assets/ae50e80-image.png)

Here you’ll be able to see the total number of sources, the total number active users, and the total number of outside collaborators. For each integrated SCM, the dashboard displays the following:

*   The number of Member users per SCM - users that are defined in the SCM that are part of an organization.
    
*   The number of Outside Collaborators per SCM - users that are defined in the SCM but are not part of an organization.
    

Note

Usage is calculated by the total number of unique members and outside collaborators in each SCM. This approach is designed to align with the usage calculation of your SCMs.

The calculation of the number of users takes place daily from all SCM sources; therefore, if a user is disactivated from an SCM, you’ll only be able to see the updated numbers the following day.

Note

Due to a limitation with the **Github Enterprise Server** integration in our organization plan, we are currently unable to accurately identify suspended users. This may result in discrepancies in the user count data.

### Investigate detailed Plan Usage through the Graph view [Copied!](#investigate-detailed-plan-usage-through-the-graph-view "Copy link to this section")

When you hover over the numbers in the Members and Outside Collaborators columns, the numbers become clickable.

![](/assets/3a25cd5-image.png)

Clicking the number will transfer you to the relevant query in the Context Intelligence Graph library, where you can view complete information on the users.

![](/assets/54b1b1f-image.png)

Note that if you have several tenants connected to your account, the numbers will not be clickable.

### User activity [Copied!](#user-activity "Copy link to this section")

The user activity graph is designed to provide you a graph view of user activity, displaying the number of users over time, which you can then filter by SCM and by time range.

![](/assets/932d006-image.png)

You can choose to view per SCM (select from the dropdown list) and per your selected time range:

![](/assets/c8461d2-image.png)

Note

The Organization Plan reflects the actual number of users - members and outside collaborators - in an organization.

Users who are defined as [dormant or deprecated users in GitHub Enterprise](https://docs.github.com/en/enterprise-server@3.9/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users) might be included in the members count, since a user who is deprecated / dormant at the enterprise level is not reflected at the organization **level**.

An “outside collaborator” refers to a person who’s not a member of the organization or team that owns the repository, but has been given access to that repository within the organization. This person is not an internal member of your organization but is granted specific rights to contribute to one or more of your organization’s repositories.

*   An SCM user will be counted once
    
*   If the same user appears in several different SCM, they will be counted as a user for each SCM
    
*   If the same user appears in a single SCM but in multiple Cycode tenants, they’ll be counted for each tenant
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
