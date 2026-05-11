# Cycode projects | Cycode Docs

Source: https://docs.cycode.com/cycode-projects

---

# Cycode projects

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-projects/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

In Cycode, a projects is a group of assets from the pipeline or connectors that are continuously monitored for security violations. Cycode projects are used to group assets and violations into smaller groups, so your organization can assign members to manage sets of assets and their violations.

All members and viewers that are assigned to a Cycode project can interact with and view any assets and violations that are part of the project. Admins and owners can view all assets that are available in the Cycode platform.

This topic provides a high-level explanation of how projects work in Cycode, and how projects help to manage violations and reports, and automate tasks to streamline the identification and resolution of violations.

## Project scope [Copied!](#project-scope "Copy link to this section")

You can use projects to define specific scopes that align with the business needs of your organization. You can monitor your projects for asset collision, which may cause data duplication or conflicts regarding your project settings.

Note

Members that are assigned the Admin role can control these notifications from the Projects page in the Settings view. If notifications are enabled, all members with the Admin role will see the notifications in the Project view and project cards.

## Project hierarchy [Copied!](#project-hierarchy "Copy link to this section")

You can create groups that enable you to organize and manage projects according to a project hierarchy, displaying them in a file directory format within a code-to-cloud security system. You can associate projects with groups and nest groups within other groups without having to associate specific assets with groups. ![image.png](/assets/image-28694-29.png) For more information, go to [Create a group](/cycode-projects/create-and-manage-groups) .

## Role-based access control [Copied!](#role-based-access-control "Copy link to this section")

Members are assigned the following roles that determine how much access they have to project data:

*   **Project managers** can view, take action on violations, and manage and edit their projects
    
*   **Members** can view and take action on violations in their projects
    
*   **Viewers** can view violations in their projects
    

## Risk profile [Copied!](#risk-profile "Copy link to this section")

### Business impact [Copied!](#business-impact "Copy link to this section")

The business impact of a project is one of the risk factors that Cycode includes when it calculates the risk score for violations, so violations that are detected in a High Business Impact (HBI) project get a higher risk score.

Note

*   Changes to severity that are part of the workflow automation also affect the risk score.
    
*   The Visibility dashboard displays the risk profile of projects, highlighting the projects with the highest risk, highest MTTR, and lowest MTTR.
    

### Insights [Copied!](#insights "Copy link to this section")

Cycode can be configured to assign labels to various kinds of entities, such as repositories, container images, and projects. Project labels like **Internet exposed** and **Active deployment** affect the risk score of detected violations.

Note

All Cycode-assigned labels are visible in the relevant page of the Inventory view.

## Static and dynamic projects [Copied!](#static-and-dynamic-projects "Copy link to this section")

Projects can be created by selecting static assets such as a repository, build tools, etc. You can also create a dynamic project by selecting an SCM organization, team, or label. Dynamic selection means changes to the dynamic assets in the source integration are automatically reflected in Cycode projects.

For example, if a new repository is attached to an organization in the SCM, any Cycode project that is defined by this organization will include the new repository. Similarly, if a repository is removed from a team, the Cycode projects defined by this team will no longer include this repository.

## Workflows and violations [Copied!](#workflows-and-violations "Copy link to this section")

You can define workflows for a specific project by selecting the project when you define the workflow in the Automation view. This will automate operational tasks such as opening tickets, sending notifications, and SCM-related remediation tasks. It will also update workflows that exclude violation or change their severity for the project.

## Project-based reporting [Copied!](#project-based-reporting "Copy link to this section")

You can build violation reports by project by defining reports based on a Context Intelligence Graph query that utilizes the correlation between projects and violations in the Context Intelligence Graph.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
