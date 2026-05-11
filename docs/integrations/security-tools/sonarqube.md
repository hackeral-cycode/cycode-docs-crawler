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

The connector was tested on version 10.4. Any versions prior to this version should be verified first.

## Domain [Copied!](#domain "Copy link to this section")

SAST

## Permissions [Copied!](#permissions "Copy link to this section")

Permissions

Description

Browse

Access a project, browse its measures and issues, confirm issues, change the assignee, comment on issues and change tags.

See Source Code

View the project’s source code (for private projects, users also need the “Browse” permission)

## Setup [Copied!](#setup "Copy link to this section")

1.  Log in to your SonarQube instance with the designated user account.
2.  Go to **My Account > Security** and click **Generate API token**.  
    Make sure you select a token of type **User Token**.  
    ![](/assets/image%28144%29.png)
3.  Copy the new API token and store it somewhere safe.

## FAQs [Copied!](#faqs "Copy link to this section")

### Which types of violations are pulled from SonarQube? [Copied!](#which-types-of-violations-are-pulled-from-sonarqube "Copy link to this section")

When configuring SonarQube you can select which types of violation you want to pull:

*   Security
*   Reliability
*   Maintainability

![](/assets/image%28474%29.png)

![](/assets/image%28471%29.png)

You can always add more violation types after the connector is configured. You can do that by navigating to the Overview page of the connector and selecting other types of violations in the Violation Types selector.  
![](/assets/image%28472%29.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
