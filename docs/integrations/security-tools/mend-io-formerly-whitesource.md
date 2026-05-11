# Mend.io (formerly Whitesource) | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/mend-io-formerly-whitesource

---

# Mend.io (formerly Whitesource)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/mend-io-formerly-whitesource.md "Edit this page")

Updated on May 13, 2025 • Published on Aug 11, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Mend.io enables you to pull SCA vulnerabilities from Mend.io and to correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The current version of the connector pulls only SCA vulnerabilities from Mend.io. For any other use case, reach out to your CSM or contact Support at [support@cycode.com](mailto:support@cycode.com) .

## Domain [Copied!](#domain "Copy link to this section")

SCA

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

We recommend integrating your SCM with Cycode prior to integrating Cycode with Mend.io. Connecting the SCM will help to correlate between the data pulled for that integration to your vulnerabilities pulled from Mend.io.

### Permissions [Copied!](#permissions "Copy link to this section")

Role

Description

Read-only

API token with read-only access

## Setup [Copied!](#setup "Copy link to this section")

1.  Get your API Base URL by going to your **Profile** page, and selecting **Server URL**, and then copy the API Base URL.
2.  Get your email address associated with your Mend account by going to **Mend SCA App > Profile > Identity**.
3.  Get your organization token by going to **Mend SCA App > Integration > Organization > API Key**.
4.  Get your Mend user key by going to **Mend SCA App > Profile > User Keys**.

## Select your Mend.io products [Copied!](#select-your-mendio-products "Copy link to this section")

After you’ve connected to your Mend.io account successfully, you can choose which products within Mend.io you’d like to pull vulnerabilities from.

You can select only some of your Mend.io products or pull all of them:  
![](/assets/image%28387%29.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
