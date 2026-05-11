# SSO in v1 | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/single-sign-on-sso/sso-in-v1

---

# SSO in v1

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/single-sign-on-sso/sso-in-v1.md "Edit this page")

Updated on Jan 19, 2025 • Published on May 5, 2024

* * *

Using the **Single Sign-On** function, you can enable your organization’s users to log into all relevant platforms using one ID and password. Security Assertion Markup Language (SAML) enables the exchange of authentication and authorization data between Cycode and third-party SSO applications.

Note

Cycode requires the email address to be placed in the `name-id` of the SAML Response in order for the SSO integration to work properly.

## Enabling SSO [Copied!](#enabling-sso "Copy link to this section")

1.  Go to **Settings > Access > SSO**.
    
2.  Copy the data in the domain (or sub-domain), ACS URL, and Entity ID fields from Cycode into your SSO application.
    
3.  Enter the necessary information provided by your application into Cycode.
    
    *   **Automatic** - the SSO application generates metadata. Drag and drop this data in an XML file
        
    *   **Manual** - enter the SSO endpoint and public certificate parameters
        
4.  Click **Connect**.
    
    Once completed, the **Single Sign-On** module reloads, and appears similar to the following image:
    

![](/assets/41ee4b7-image.png)

The **SSO Endpoint** is where the user is forwarded to when signing into your organization. The **Public Certificate** is the key used to verify the SAML response.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
