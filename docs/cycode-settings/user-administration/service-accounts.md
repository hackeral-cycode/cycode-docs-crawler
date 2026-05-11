# Service accounts | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/service-accounts

---

# Service accounts

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/service-accounts.md "Edit this page")

Updated on Jan 29, 2026 • Published on Dec 8, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode supports using service (non-human) users to allow external applications to access data in the platform via API. You can view and manage Cycode’s service accounts in the the Service Accounts view.

### Supported authentication types [Copied!](#supported-authentication-types "Copy link to this section")

Cycode supports using either traditional (knowledge-based) authentication or keyless authentication.

*   **Traditional authentication**, which relies on something you know (passwords, PINs, security questions) for human users. For the service account, Cycode provides a client secret.
    
*   **Keyless (or passwordless) authentication** verifies the identity of a user via biometrics (face/fingerprint), hardware tokens, or magic links, relying on something you are (biometrics) or something you have (token or device) rather than something you know (password). In the case of the service account, Cycode validates a token from the external application.
    

Note

Currently, Cycode supports using OpenID Connect (OIDC) tokens as a secure alternative to the service account client secret.

### What are OIDC claims? [Copied!](#what-are-oidc-claims "Copy link to this section")

Claims are name/value pairs of information about an end-user or an authentication event, which are passed as statements made by an OpenID Provider (OP) to a client application within a security token.

Claims allow the client application to verify the service user’s identity and retrieve necessary information without having to handle the user credentials directly.

## View the service accounts [Copied!](#view-the-service-accounts "Copy link to this section")

You can see the following information in the Service accounts view.

Column

Description

**Description**

Name of the service account.

**Client ID**

Unique identifier of the service account.

**Created at**

Date and time that the service account was created.

**OIDC**

**Enabled**: The service account uses keyless (OIDC) authentication.  
**Disabled**: The service account uses traditional authentication.

## Create a new service account [Copied!](#create-a-new-service-account "Copy link to this section")

### Traditional authentication [Copied!](#traditional-authentication "Copy link to this section")

1.  In the Service accounts view, click **Service account**.
    
2.  Type the name of the new service account.
    
3.  Assign a role to the service account.
    
    Note
    
    For more information about roles, go to [Members](/cycode-settings/user-administration/manage-cycode-members/) .
    
4.  Click **Create**.
    
5.  From the **Client ID & Secret** window, copy the client ID and the client secret.
    
    Warning
    
    Save the client secret in a secure location. You won’t see it again or be able to restore it.
    
6.  Click **Done**.
    

### Keyless authentication [Copied!](#keyless-authentication "Copy link to this section")

1.  In the Service accounts view, click **Service account**.
    
2.  Type the name of the new service account.
    
3.  Assign a role to the service account.
    
    Note
    
    For more information about roles, go to [Members](/cycode-settings/user-administration/manage-cycode-members/) .
    
4.  Provide the values for the following parameters that are fetched from the API of your organization’s OIDC provider. Cycode uses these values to verify incoming OIDC tokens.
    
    Parameter
    
    Value
    
    `<iss>`
    
    (Issuer) The URL of the the IdP or authorization server that creates and signs the token.
    
    `<aud>`
    
    (Audience) The specific client application that the token is intended for, identified by its Client ID.
    
5.  To add additional claims for the verification process, click **Add claim** and provide the relevant key-value pair.
    
6.  Click **Create**.
    

## Disable a service account [Copied!](#disable-a-service-account "Copy link to this section")

To disable a Cycode service account, click **Revoke** in the relevant service account row. This revokes external access to Cycode from that account.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
