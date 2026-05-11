# Salt | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/salt

---

# Salt

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/salt.md "Edit this page")

Updated on May 13, 2025 • Published on Dec 31, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can connect the Cycode platform to your Salt account to enable Cycode to discover and manage API security vulnerabilities that it pulls from Salt.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

API Security

## Connect Salt to Cycode [Copied!](#connect-salt-to-cycode "Copy link to this section")

### Get a Salt API token [Copied!](#get-a-salt-api-token "Copy link to this section")

1.  Sign in to your Salt account and go to **Settings** > **Access** > **API Tokens**.  
    ![](/assets/image%28658%29.png)
    
2.  Click **Create Token** and configure the following:
    
    1.  A meaningful name, for example, **Cycode Connector**.
    2.  An expiration time and date.

Note

After the token expires, Cycode won’t be able to retrieve data from Salt. To enable access, create a new token in Salt and update the connector.

3.  Complete the Account Details form in Cycode.

## API calls [Copied!](#api-calls "Copy link to this section")

The connector uses the following Salt APIs.

API call

Description

`/v1/apigovern/posture/gaps`

Returns a list of security posture gaps according to company ID.

`/v1/inventory/endpoints`

Returns a list of the company endpoints.

`/v1/inventory/hosts`

Returns a list of the API hosts.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
