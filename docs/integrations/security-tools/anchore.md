# Anchore | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/anchore

---

# Anchore

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/anchore.md "Edit this page")

Updated on May 12, 2025 • Published on May 12, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Cycode connector for Anchore enables pulling container image vulnerabilities from Anchore so you can view and manage them in the Cycode platform.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The connector currently pulls only container image vulnerabilities.

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

Enable the **Vulnerability Found in Container Image** Cycode policy.

![](/assets/624452c-image.png)

## Connect Anchore to Cycode [Copied!](#connect-anchore-to-cycode "Copy link to this section")

### Obtain the API Endpoint URL [Copied!](#obtain-the-api-endpoint-url "Copy link to this section")

1.  Copy the URL from your Anchore platform.
    
2.  Verify that the Cycode connector is using API port 8228. For example, **http://{hostname}:8228**.
    

### Get an API token from Anchore [Copied!](#get-an-api-token-from-anchore "Copy link to this section")

1.  Sign in to the Anchore platform as an Admin user.
    
2.  Go to **System > Accounts > Create New Account**.
    

![](/assets/f81f13e-image.png)

3.  Provide a meaningful name for the account (for example, **cycode-conector**).
    
4.  Click **Edit** for the newly created account.
    

![](/assets/935d9fa-image.png)

5.  Click **Add New User**.

![](/assets/16d7c3c-image.png)

6.  Provide a meaningful username for the user, and assign the **image-analyzer** role.

![](/assets/55a8128-image.png)

7.  In the newly-created user, select **Tools > API Keys**:

![](/assets/5ff009e-image.png)

8.  Click **Create New API Key**, and provide a meaningful name for the key (for example,**Cycode Token**).

![](/assets/f3b6762-image.png)

9.  Click **Save**.
    
10.  Copy the newly created API Key and store it somewhere safe.
     

### API calls [Copied!](#api-calls "Copy link to this section")

*   `/user`
*   `/images`
*   `images/{imageDigest}/vuln/all`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
