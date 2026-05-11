# CrowdStrike | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/crowdstrike

---

# CrowdStrike

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/crowdstrike.md "Edit this page")

Updated on Sep 25, 2025 • Published on Mar 13, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector for CrowdStrike enables pulling container image vulnerabilities from CrowdStrike so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

You need a CrowdStrike account that Cycode can connect to.

## Permissions [Copied!](#permissions "Copy link to this section")

Permission

Access type

App

Read

Falcon Container Image

Read

## Parameters [Copied!](#parameters "Copy link to this section")

The Crowdstrike connector requires the following parameters.

Item

Description

Name

Connector name as it will appear in Cycode

API username

Crowdstrike API Client ID

Base URL

Base URL of the CrowdStrike API, for example `https://api.us-2.crowdstrike.com`

API Token

The Crowdstrike API client secret

## Connect CrowdStrike to Cycode [Copied!](#connect-crowdstrike-to-cycode "Copy link to this section")

1.  Go to your CrowdStrike account.
    
2.  In **Support and resources** > **API clients and keys**, click **Create API client** above the list of existing API clients.
    
3.  Give a meaningful name to the client you are creating for the Cycode connector (for example, **Cycode-client**).
    
4.  Assign the permissions listed above in [Permissions](/integrations/security-tools/crowdstrike#permissions) , with the specified access type.
    
5.  Click **Create**.
    
6.  Copy the Client ID, Secret, and the Base URL, and store them somewhere safe. You will need these values to complete the Cycode connector wizard.
    

## API calls [Copied!](#api-calls "Copy link to this section")

API call

Description

Scope

`/container-security/combined/images/detail/v1`

Get container images

App, Falcon Container Image

`/container-security/combined/vulnerabilities/details/v1`

Get container image vulnerabilities

App, Falcon Container Image

`/container-security/combined/vulnerabilities/info/v1`

Get vulnerability information

App, Falcon Container Image

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
