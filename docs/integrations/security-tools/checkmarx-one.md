# Checkmarx One | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/checkmarx-one

---

# Checkmarx One

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/checkmarx-one.md "Edit this page")

Updated on Jul 28, 2025 • Published on Jun 17, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Checkmarx One enables pulling vulnerabilities so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SASTSCA

## Permissions [Copied!](#permissions "Copy link to this section")

Permission

Access type

view-applications

Read

view-project-params

Read

view-project-params-if-in-group

Read

view-projects

Read

view-projects-if-in-group

Read

view-queries

Read

view-results

Read

view-results-if-in-group

Read

view-scans

Read

view-scans-if-in-group

Read

## Connect Checkmarx to Cycode [Copied!](#connect-checkmarx-to-cycode "Copy link to this section")

### Create a dedicated API user [Copied!](#create-a-dedicated-api-user "Copy link to this section")

1.  Sign in to Checkmarx as an administrator.
2.  Go to **Identity and Access Management** > **Users** and click **Add User**.
3.  Edit the newly created user; go to **Role Mappings** and in the **CxONE roles** area, assign all the roles listed in [Permissions](#permissions) above. ![](/assets/image%28242%29.png)

### Generate an API key [Copied!](#generate-an-api-key "Copy link to this section")

1.  Sign in to Checkmarx as the newly created user.
2.  Go to **Identity and Access Management** > **API Keys** and click **Create Key**.
3.  Store the API key somewhere safe and paste it in the Cycode connector wizard.

### Select the scanner type [Copied!](#select-the-scanner-type "Copy link to this section")

In the connector wizard, in the Violation types area select which vulnerabilities you want Cycode to monitor. Available options are:

*   **SAST**
*   **SCA**

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
