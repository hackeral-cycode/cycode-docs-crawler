# Fortify SAST | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/fortify-sast

---

# Fortify SAST

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/fortify-sast.md "Edit this page")

Updated on May 12, 2025 • Published on Oct 20, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector for Fortify enables pulling SAST vulnerabilities from Fortify so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SASTDAST

### Permissions [Copied!](#permissions "Copy link to this section")

Permission

Access type

View Third Party Apps

Read Only

View Applications

Read Only

View Issues

Read Only

View Reports

Read Only

Note

API keys provide access to all the applications in your Fortify tenant. You can assign API keys to applications to update application access.

## Connect Fortify to Cycode [Copied!](#connect-fortify-to-cycode "Copy link to this section")

### Get the API Token and Client Secret [Copied!](#get-the-api-token-and-client-secret "Copy link to this section")

1.  Sign in to the Fortify console as an administrator.
    
2.  Go to **Administration > Settings > API > Add Key**.  
    ![](/assets/image%28555%29.png)
    
3.  Configure the new API key as follows:
    
    Item
    
    Description
    
    Name
    
    Provide a meaningful name (for example, **Cycode Connector**).
    
    Role
    
    Select **Read Only**.
    
    Authorize app to use API
    
    **Yes**
    
    ![](/assets/image%28557%29.png)
    
4.  Get the API Token and Client Secret.\`\`\`
    

### Select a data center [Copied!](#select-a-data-center "Copy link to this section")

Each data center has its own API root URL. Select the data center you’re using from the following list:

*   AMS
*   EMEA
*   APAC
*   SGP
*   FedRAMP
*   Trial

### API calls [Copied!](#api-calls "Copy link to this section")

The following API calls are used in this integration:

API call

Description

Scopes

`/api/v3/applications`

Retrieve a collection of applications.

`api-tenant`  
`view-apps`

`/api/v3/releases/{releaseId}`

Returns the specific release.

`api-tenant`  
`view-apps`

`/api/v3/releases/{releaseId}/vulnerabilities/{vulnId}/traces/{traceIndex}/{traceEntryIndex}/code`

Returns the trace code for the specific index.

`api-tenant`  
`view-issues`

`/api/v3/releases/{releaseId}/vulnerabilities/{vulnId}/all-data`

Returns all of the data for the vulnerability.

`api-tenant`  
`view-issues`

`/api/v3/applications/{applicationId}/releases`

Returns a list of releases for the given application.

`api-tenant`  
`view-apps`

`/api/v3/releases/{releaseId}/vulnerabilities`

Returns a list of vulnerabilities.

`api-tenant`  
`view-issues`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
