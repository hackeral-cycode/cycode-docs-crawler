# SonarQube | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/sonarqube

---

# SonarQube

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/sonarqube.md "Edit this page")

Updated on May 13, 2025 • Published on May 8, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with SonarQube enables you to pull any findings type and correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The connector supports version 10.4+.

## Domain [Copied!](#domain "Copy link to this section")

SAST

## Setup [Copied!](#setup "Copy link to this section")

1.  Log in to your SonarQube instance with the designated user account.
2.  For each **private** project being synced, grant the designated user account the **Browse** and **See Source Code** permissions at the project level. Refer to [Setting Project Permissions](https://docs.sonarsource.com/sonarqube-server/project-administration/setting-project-permissions) in the SonarQube documentation for instructions.
3.  Go to **My Account > Security** and click **Generate API token**.  
    Make sure you select a token of type **User Token**.  
    ![](/assets/image%28144%29.png)
4.  Copy the new API token and store it somewhere safe.

## Permissions [Copied!](#permissions "Copy link to this section")

Permissions

Description

Browse

Access a project, browse its measures and issues, confirm issues, change the assignee, comment on issues and change tags.

See Source Code

View the project’s source code (for private projects, users also need the “Browse” permission)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
