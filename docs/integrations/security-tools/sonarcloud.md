# SonarCloud | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/sonarcloud

---

# SonarCloud

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/sonarcloud.md "Edit this page")

Updated on May 13, 2025 • Published on Jul 8, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with SonarCloud enables you to pull SAST vulnerabilities and correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The connector currently retrieves only security issues.

## Domain [Copied!](#domain "Copy link to this section")

SAST

## Permissions [Copied!](#permissions "Copy link to this section")

Project Role

Description

Browse Project

Can view the project.

See Source Code

Can view the source code (via API and web view) provided the Browse project permission is also granted.

Organization Role

Description

Execute analysis

Can start an analysis on every project in the organization. This includes the ability to get all settings required to perform an analysis (including secured settings like passwords) and to push analysis results to the SonarCloud server.

## Setup [Copied!](#setup "Copy link to this section")

1.  Log in to your SonarCloud account and select **Account > My Account**.
    
2.  Go to **Security > Generate a token**.
    
3.  Copy the generated token and store it somewhere safe.
    

## API calls [Copied!](#api-calls "Copy link to this section")

API call

Description

`/authentication/validate`

Validate the API token.

`/components/search`

Search for projects and components.

`/issues/search`

Retrieve issues for a project.

`/sources/show`

Retrieve source code for a file.

`/rules/show`

Retrieve details about a specific rule.

`/components/show`

Retrieve details about a project component.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
