# Connect Cycode to your IdP | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/single-sign-on-sso/connect-cycode-to-your-idp

---

# Connect Cycode to your IdP

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/single-sign-on-sso/connect-cycode-to-your-idp.md "Edit this page")

Updated on Jan 26, 2026 • Published on May 5, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topics explains how to connect Cycode to your IdP so your organizational users can be imported automatically to the platform.

### User authentication [Copied!](#user-authentication "Copy link to this section")

Cycode supports SAML authentication for organizational users.

Note

OIDC authentication is available only for service users. For more information, go to [Service accounts](/cycode-settings/user-administration/service-accounts) .

### User provisioning [Copied!](#user-provisioning "Copy link to this section")

Cycode supports the following user provisioning methods:

*   Manually via the Cycode interface. For more information, go to [Add members manually to Cycode](/cycode-settings/user-administration/manage-cycode-members/add-members-manually-to-cycode) .
    
*   Using SCIM, so you can manage users directly from your identity provider (IdP).
    

When SCIM-only user provisioning is enabled:

*   Cycode members can only be created and removed via your IdP.
    
*   The ability to add users manually (individually and in bulk via CSV) is disabled.
    
*   Users must be provisioned in your IdP before they can sign in to Cycode.
    

Existing Cycode members aren’t affected if an organization moves from manual to SCIM user provisioning.

Important

If your SCIM is not configured correctly, new users won’t be able to sign in to Cycode.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

Cycode looks for IdP group information within an attribute named **groups** (one word, lowercase) in the SAML payload during the SSO sign-in flow. If you want to implement role mapping, your SSO admin must configure the SSO application specifically to send this attribute with appropriate group values.

If Microsoft is your IdP, when you add the groups attribute to the SAML claims of your Cycode SSO app configuration, you may have to edit the _name_ of the attribute to ensure that it is simply **groups** with no URL or path components.

The Cycode admin can then map those IdP groups to Cycode roles as needed.

## Integrate Cycode with your IdP [Copied!](#integrate-cycode-with-your-idp "Copy link to this section")

1.  In Cycode, go to **Settings > SSO > Configuration**.
    
2.  If you want to do your user provisioning via SCIM, turn on the **Enable SCIM-only user provisioning** option.
    
3.  Copy the **ACS URL** and **Entity ID** values from the Configuration page.
    
4.  If your IdP initiates SAML authentication, use the value in the **ACS URL for IdP-Initiated Authentication** field.
    
    Important
    
    *   Azure requires both the ACS URL and the second ACS URL for IdP-initiated authentication. The IdP-initiated ACS URL needs to be the default option.
    *   Okta only uses the ACS URL for IdP-initiated authentication.
    
    1.  In your SAML application, paste the required ACS URL and Entity ID values in the relevant fields. Replace the `<tenant-id>` section of the URL with the tenant ID from the GUID in the original ACS URL.
        
        *   **US Region:** `https://app.cycode.com/auth/realms/cycode/broker/<tenant-id>/endpoint`
        *   **EU Region:** `https://app.eu.cycode.com/realms/cycode/broker/<tenant-id>/endpoint`
    2.  (Optional) If you want to enable IdP SSO login, copy the ACS URL (IDP Initiator) with the below format. Replace the `<tenant-id>` section of the URL with the tenant ID from the GUID in the original ACS URL.
        
        *   **US Region:** `https://app.cycode.com/realms/cycode/broker/<tenant-id>/endpoint/clients/idpinit`
        *   **EU Region:** `https://app.eu.cycode.com/realms/cycode/broker/<tenant-id>/endpoint/clients/idpinit`
5.  Set this new ACS URL as the default.
    
6.  Download the SAML application metadata file from your IdP to your computer.
    
7.  In the **Select a configuration method** area of the Cycode configuration page, click **Automatic**.
    
8.  Upload the SAML metadata file you downloaded in Step 5.
    
9.  Click **Connect**.
    
10.  Sign in to Cycode using your credentials, then sign out of the portal.
     
11.  Sign in again to verify the SSO configuration.
     

If the setup is successful, when you sign in to the Cycode platform you’ll see the following page. ![Screenshot 2025-01-19 at 14.58.01.png](/assets/screenshot-202025-01-19-20at-2014-58-01.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
