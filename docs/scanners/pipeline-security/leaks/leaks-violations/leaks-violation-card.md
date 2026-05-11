# Leaks violation card | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/leaks/leaks-violations/leaks-violation-card

---

# Leaks violation card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/leaks/leaks-violations/leaks-violation-card.md "Edit this page")

Updated on May 5, 2025 • Published on May 5, 2025

* * *

The following tables describe the different details of the violation card overviews for leaks. The actual fields displayed may vary depending on the violation.

## Private repository leak [Copied!](#private-repository-leak "Copy link to this section")

![](/assets/image-1730302406066.png)

Field

Description

Description

Description of the violation and location where it was found, including the commit’s unique identifier; if a remediation (Cycode and/or Company Guidelines) is available, the description will also include a link to the Remedation tab.

Cycode Project

The project in which the leak occurred

Source

SCM source in which the leak was detected

Priority

The priority assigned to the leak by the user (if at any)

Issue Tracking

Status of the leak in the issue tracker (if one is assigned)

Assignee

The person to whom the leak violation is assigned and is responsible for fixing it

Organization

The organization that has a repository with a name similar to the public repository in which the leak was detected

Original Repository

The original private repository that has a name similar to the name of the public repository in which the leak was discovered

Public Repository

The name of the public repository in which the leak was detected and that has a similar name to an organization’s private repository

Affiliation When Detected

The affiliation of the user when the leak was detected:

*   Member - A member of the SCM organization
*   Outside Collaborator - Not a member of your organization, but has access to one or more of your organization’s repositories
*   Contributor - An SCM user, who contributed to the organization’s source code and no longer has repository access (a past organization member / outside collaborator / service account / bot)

Detected At

Date and time when the leak was first detected

Repository Created At

Date and time in which the public repository was created

classification rules

If you’ve defined classification rules and custom labels in your policies, the Violation card will also display this additional information.

Custom Labels

If you defined custom labels for the classification rules, these will be displayed with a hashtag to indicate that they are custom labels.

## Repository visibility changed to public [Copied!](#repository-visibility-changed-to-public "Copy link to this section")

![](/assets/image-1730302683269.png)

Field

Description

Description

Description of the violation and location where it was found, including the commit’s unique identifier

Issue Tracking

Status of the violation in the issue tracker (if one is assigned)

Source

SCM source in which the snippet was detected

Snippet Link

Contains a link to the snippet where the leak was found

SCM User

The SCM name of the user associated with the leak

Detected At

Date and time when the leak was first detected

Classification Rules

If you’ve defined classification rules and custom labels in your policies, the Violation card will also display this additional information.

Custom Labels

If you defined custom labels for the classification rules, these will be displayed with a hashtag to indicate that they are custom labels.

## Large percentage of repository downloaded or cloned leak [Copied!](#large-percentage-of-repository-downloaded-or-cloned-leak "Copy link to this section")

![](/assets/image-1730302562281.png)

Field

Description

Description

Description of the violation and location where it was found, including the commit’s unique identifier

Source

SCM source of the cloned repository

Cloned Repositories

Displays the repositories that were cloned (standing over the number of repositories displays their details)

SCM User

The SCM name of the user associated with the leak

Affiliation When Detected

The affiliation of the user when the leak was detected:

*   Member - A member of the SCM organization
*   Outside Collaborator - Not a member of your organization, but has access to one or more of your organization’s repositories
*   Contributor - An SCM user, who contributed to the organization’s source code and no longer has repository access (a past organization member/outside collaborator/service account/bot)

Detected At

Date and time when the leak was first detected

Priority

The priority assigned to the leak by the user (if at any)

Assignee

The person to whom the leak violation is assigned and is responsible for fixing it

Issue Tracking

Status of the leak in the issue tracker (if one is assigned)

Cycode Project

The project in which the violation occurred; note that this field can show multiple projects and then only the count is visible. Hovering on the count will show the projects’ names.

### Leaks violation risk score factors [Copied!](#leaks-violation-risk-score-factors "Copy link to this section")

Note

Some of the risk factor names may differ slightly from the names of the fields in violations. The names used in the risk factors are designed to reflect the relevant terminology. For example, “Affiliation When Detected” is now called “User Affilation at Detection”.

Risk Factor

Description

**Base Impact**

Severity

Severity is based on the potential for unauthorized access of sensitive information, and considers the default policy severity and whether the severity was updated by a Classification Rule.

Business Impact

Project business impact is determined by the importance of the project to the business; the violation’s risk score will be the maximum business impact of all the projects to which it’s associated.

**Leak Impact**

Matching Keywords Count

Analyzes the leak’s potential impact based on the number of keywords identified in the leaked data.

User Affiliation at Detection

Analyzes the user’s affiliation at the time the violation was detected to determine their level of access:

*   **Member** - A member of the SCM organization.
*   **Outside Collaborator** - Not a member of your organization but has access to one or more of your organization’s repositories.
*   **Contributor** - An SCM user who contributed to the organization’s source code and no longer has repository access (a past organization member / outside collaborator / service account / bot).

**Note**: If the user’s affiliation is Unknown user or Not relevant, then its weight in the risk score is 0.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
