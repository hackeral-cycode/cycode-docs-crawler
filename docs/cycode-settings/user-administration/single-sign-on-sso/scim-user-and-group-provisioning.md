# SCIM user and group provisioning | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/single-sign-on-sso/scim-user-and-group-provisioning

---

# SCIM user and group provisioning

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/single-sign-on-sso/scim-user-and-group-provisioning.md "Edit this page")

Updated on Mar 29, 2026 • Published on Jan 22, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode supports provisioning users and groups via SCIM, allowing you to manage Cycode members directly from your identity provider (IdP).

When SCIM provisioning is enabled, Cycode members are added, updated, and removed via the IdP. Authentication and authorization are handled separately.

Note

By default, SCIM manages the user lifecycle only. When SCIM group provisioning is enabled, role and project access is also managed via your IdP using group-to-role mapping as explained below in [Group provisioning](/cycode-settings/user-administration/single-sign-on-sso/scim-user-and-group-provisioning#provision-groups-for-role-mapping-via-scim) .

Additionally, the platform has the following functionality for adding members:

*   Members can be added and removed only via SCIM.
*   Individual and bulk manual invitation via the Cycode interface is disabled.
*   Members must be provisioned in your IdP before they can access Cycode.

Note

*   Existing users aren’t affected.
*   If SCIM is misconfigured, new Cycode members can’t sign in to Cycode.
*   The **First Login** role mapping option isn’t relevant for members created via SCIM because they already exist and therefore there is no first-time signing in to Cycode. When using SCIM group provisioning, select the **Every Login** option.

## SCIM authentication [Copied!](#scim-authentication "Copy link to this section")

Cycode supports using OAuth 2.0 client credential authentication for SCIM.

To authenticate SCIM requests, your IdP must obtain an access token using a service account. For more information about service accounts in Cycode, go to [Service accounts](/cycode-settings/user-administration/service-accounts) .

Important

*   The service account used for SCIM authentication must be assigned the **SCIM** role, which provides the necessary permissions for managing users via SCIM.
*   Ensure that your SCIM authentication and user identifiers are configured correctly before enabling SCIM-only provisioning in the platform.

### OAuth 2.0 token endpoint [Copied!](#oauth-20-token-endpoint "Copy link to this section")

The access token for OAuth 2.0 is issued by Cycode using the following endpoint:

```
1
```

```text
https://api.cycode.com/api/oauth/token
```

The token request requires the following parameters:

Parameter

Description

Client ID

Generated when you create the Cycode service account.

Client secret

Generated when you create the Cycode service account.

Grant type

client\_credentials

You must include the access token in all SCIM requests, using the following authorization header:

```
1
```

```http
Authorization: Bearer <access_token>
```

### SCIM endpoint [Copied!](#scim-endpoint "Copy link to this section")

Cycode exposes the following SCIM 2.0 endpoint for user provisioning. This endpoint is used by your IdP to create, update, and deactivate users.

```
1
```

```text
https://api.cycode.com/api/scim/v2
```

### User identification in Cycode [Copied!](#user-identification-in-cycode "Copy link to this section")

Cycode uses the email address as the primary identifier for members. The email value is taken from the SCIM email attribute, and must meet the following requirements.

*   The email address must be unique within the organization.
*   The email provided via SCIM must match the email used for authentication.
*   If a Cycode member with the same email already exists, Cycode updates the existing member instead of creating a duplicate.

Important

This behavior is critical for initial provisioning and ongoing synchronization. Incorrect or inconsistent email values may result in failed provisioning or unexpected behavior.

## SCIM user provisioning flows [Copied!](#scim-user-provisioning-flows "Copy link to this section")

**Add a Cycode member**

A member is created in Cycode when they are provisioned in the IdP. The flow for adding a user via SCIM is as follows:

![](/assets/user-provisioning-with-scim-1.png)

The new member can sign in to Cycode only after the user provisioning is complete.

Note

When SCIM user provisioning is enabled, members aren’t created during sign-in.

**Update a Cycode member**

You can update the following user attributes via SCIM:

Attribute

Description

Email address

As described above in [User identification in Cycode](/cycode-settings/user-administration/single-sign-on-sso/scim-user-and-group-provisioning#user-identification-in-cycode) .

Display name

Name of the Cycode member in the platform.

Status

Active or inactive.

Cycode doesn’t support separate first name and last name fields.

When you make changes to your user in the IdP, Cycode is updated automatically.

**Remove a Cycode member**

When you disable or remove a user in the IdP, the following happens:

1.  The IdP sends an update to Cycode via SCIM.
2.  The Cycode member is deactivated in the platform.
3.  The Cycode member’s access to the platform is revoked and they can no longer sign in.

Note

User records are retained in the database, and aren’t permanently deleted.

### Provision users via SCIM [Copied!](#provision-users-via-scim "Copy link to this section")

1.  Go to **Settings** > **SSO** > **Configuration**.
2.  Enable the **Enable SCIM-only user provisioning** option.
3.  Go to **Settings** > **SSO** > **Role/Project Mapping**, and add and configure groups as described in [Map IdP groups to Cycode roles and projects](/cycode-settings/user-administration/single-sign-on-sso/map-idp-groups-to-cycode-roles-and-projects) . These settings are then applied using SSO groups when members sign in to Cycode .

### Provision groups for role mapping via SCIM [Copied!](#provision-groups-for-role-mapping-via-scim "Copy link to this section")

Cycode supports assigning roles using SCIM groups. When SCIM group provisioning is enabled, groups that you create in your IdP can be added to Cycode and mapped to global Cycode roles. This allows member access within your Cycode tenant to be managed centrally from your IdP.

Note

*   When SCIM group provisioning is enabled, SSO attribute-based role mapping is disabled. Roles and project access are assigned and maintained via SCIM groups instead of SSO groups.
*   If a member is removed from their last assigned group, or has no group membership, their existing role in Cycode is retained. Roles are not automatically downgraded or revoked.

1.  In your IdP, do the following:
    
    1.  If they don’t yet exist, create organizational groups that you can map to Cycode global roles.
    2.  Configure your IdP to push the group settings to a third-party application, for example **Group Push** in Okta or mapping in other IdP applications.
2.  In Cycode, do the following:
    
    1.  In **Settings** > **SSO** > **Configuration**, verify that the **Enable SCIM-only user provisioning** and **Enable SCIM groups provisioning** options are enabled.
    2.  In **Settings** > **SSO** > **Role/Project Mapping**, add and configure groups as described in [Map IdP groups to Cycode roles and projects](/cycode-settings/user-administration/single-sign-on-sso/map-idp-groups-to-cycode-roles-and-projects) . These settings are then applied to members using SCIM groups.

Important

If group provisioning is implemented after users have been added to Cycode, these users aren’t affected until their groups are pushed from your IdP because Cycode doesn’t have the new group membership data. After the groups are pushed, Cycode updates the role assignments accordingly.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
