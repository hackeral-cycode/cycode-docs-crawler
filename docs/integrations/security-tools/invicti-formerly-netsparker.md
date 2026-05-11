# Invicti (formerly Netsparker) | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/invicti-formerly-netsparker

---

# Invicti (formerly Netsparker)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/invicti-formerly-netsparker.md "Edit this page")

Updated on Dec 3, 2025 • Published on Jul 7, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Invicti enables you to pull DAST vulnerabilities from Invicti and to correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

DAST

### Permissions [Copied!](#permissions "Copy link to this section")

The following roles are required to perform API calls (as listed in [API calls](#api-calls) ):

Role

Description

View Issue List And Detail

The user can view an issue list and detail.

View Scan List

The user can view a scan list.

View Website Group List

The user can view a website group list.

View Website List

The user can view a website list.

## Connect Invicti to Cycode [Copied!](#connect-invicti-to-cycode "Copy link to this section")

### Get the Invicti credentials for the connector [Copied!](#get-the-invicti-credentials-for-the-connector "Copy link to this section")

1.  Log in to Invicti as a user with permission to the API settings.
2.  In the upper-right corner of the Invicti platform, click your profile and select **API** **Settings**.  
    ![](/assets/image%28273%29.png)
3.  Enter your password to the Invicti platform to access the required values and click **Submit**.  
    ![](/assets/image%28274%29.png)
4.  Copy the **User ID** and **Token** and store them somewhere safe.  
    ![](/assets/image%28275%29.png)

### Configure the Cycode connector [Copied!](#configure-the-cycode-connector "Copy link to this section")

Take the parameters from Invicti and apply them in the Cycode connector wizard.

Parameter

Description

Required

Default value

Name

A meaningful name for the connector as it will appear in Cycode.

Yes

–

URL

Base URL for Invicti.

Yes

`https://www.netsparkercloud.com`

User ID

User ID that you copied from Invicti.

Yes

–

Token

Authentication token for the user that you copied from Invicti.

Yes

–

## Where can I view the DAST results? [Copied!](#where-can-i-view-the-dast-results "Copy link to this section")

After you connect to Invicti, a new violation category called **DAST** will appear in the violation categories pane.

Select **DAST** to filter for the violations for this category.  
![](/assets/image%28276%29.png)

## How to leverage the Context Intelligence Graph with Invicti [Copied!](#how-to-leverage-the-context-intelligence-graph-with-invicti "Copy link to this section")

Invicti populates the following entities in the the Context Intelligence Graph:

*   Website
*   Endpoint
*   Violation

### Query example [Copied!](#query-example "Copy link to this section")

Here’s an example what you can query using Invicti and Cycode:

*   This connection facilitates tracing DAST violations back to a specific cloud resource, to the corresponding Docker image, and ultimately to the source code repository. This integration significantly enhances the ability to identify and remediate security issues effectively.

![](/assets/image%28278%29.png)

## API calls [Copied!](#api-calls "Copy link to this section")

API call

Description

`GET /1.0/websitegroups/list`

Retrieves a list of website groups.

`GET /1.0/issues/allissues?webSiteName={websiteName}`

Retrieves all issues for a specified website.

`GET /1.0/websites/getwebsitesbygroup`

Retrieves all websites within a specified website group.

`GET /1.0/scans/detail/{scanId}`

Retrieves details of a specific scan.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
