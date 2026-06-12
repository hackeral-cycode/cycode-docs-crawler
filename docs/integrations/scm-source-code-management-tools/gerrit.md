# Gerrit | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/gerrit

---

# Gerrit

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/gerrit.md "Edit this page")

Updated on Mar 30, 2026 • Published on Mar 30, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating enables Cycode to scan your code and:

*   Review code access and permissions
    
*   Audit significant events
    
*   Identify insecure configurations
    
*   Identify code leaks
    
*   Monitor secrets
    

After successfully integrating, Cycode starts scanning the data from your environment and applying its policies.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   Before integrating Gerrit with Cycode, users will need to install the [Webhooks plugin](https://gerrit.googlesource.com/plugins/webhooks/) on their Gerrit instance. The plugin will require the following configuration:
    *   Configure global webhooks plugin in `{{your_gerrit_domain}}/etc/gerrit.config` by adding the following:

```
1
2
3
4
5
```

```ini
[plugin "webhooks"]
  connectionTimeout = 3000
  socketTimeout = 2500
  retryInterval = 2000
  threadPoolSize = 20
```

*   Open inbound and outbound connectivity between Cycode and the on-premises Gerrit instance on the following IPs:
    *   US SaaS:
        *   `34.230.110.76`
        *   `54.205.205.122`
        *   `18.209.26.95`
        *   `34.74.159.168`
        *   `3.226.104.48`
    *   EU SaaS:
        *   `52.58.81.134`
        *   `52.29.182.96`
        *   `3.69.177.124`
        *   `3.127.9.222`

Note

For the latest list of Cycode IP addresses, go to this FAQ page in the knowledge base.

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

Cycode supports the following authentication method for Gerrit.

Method

Description

HTTP Basic (username + password)

Authenticate with a Gerrit user account’s username and HTTP password. The user account you provide determines the integration’s effective scope (admin-level or member-level); see [Permissions](#permissions) below for the difference between the two access levels.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating with Cycode. The type of permissions required depend on whether the user is an **admin level user** or a **member level user**.

User type

Comments

Permissions

**Admin Minimum Permissions**

The following permissions must be provided to the admin user that will be used to integrate Cycode.

Registering webhook configurations (for `All-Projects`)Syncing all teams (including the Administrators team)Identifying Gerrit admin users (related to the bullet above)Access to all repositories

**Member Minimum Permissions**

To integrate with Gerrit without an admin account, the user will need to have the following permissions.

`READ` permission for `refs/*` reference in the relevant repos This gives the user permission to get repository data (commits, pull requests, etc.)In addition, this grants the user permission to write comments in pull requests **Note**: it is recommended to configure the permission in the `All-Projects`repository, as this will ensure all repositories inherit these permissions.Having member permissions causes a limitation regarding teams - the non-admin user will be able to get data for teams of which they are a member. This means that team data in Cycode will be limited as well.

## Integrate with Gerrit [Copied!](#integrate-with-gerrit "Copy link to this section")

Tip

When integrating with a user account, comments in pull requests are posted under the identity of that user. We recommend creating a dedicated “Cycode” service account to ensure correct attribution and to prevent the integration from breaking if that user leaves.

### Use an admin-level user [Copied!](#use-an-admin-level-user "Copy link to this section")

Important

The following permissions must be provided to the admin user that will be used to integrate Cycode (use the Member integration if going with minimum permissions):

*   Registering webhook configurations (for `All-Projects`)
    
*   Syncing all teams (including the Administrators team)
    
*   Identifying Gerrit admin users (related to the bullet above)
    
*   Access to all repositories
    

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the Add Integration window, click **Gerrit**.
    
    ![](/assets/56e05e0-image.png)
    
3.  The new Gerrit integration will load. It should default to the Admin **Integration type**, but if not, select Admin from the **Integration type** dropdown list.
    

![](/assets/gerrit-integration.png)

4.  Enter a name for the Gerrit integration.
    
5.  In the **Select Broker** dropdown, select a Cycode Broker (if you’re not using a broker, leave the default **None** selection).
    
6.  Enter a Gerrit Server username (the username of the admin user).
    
7.  Enter the Gerrit Server password (the password of the admin user).
    
8.  Enter a Gerrit Server URL (the URL for the gerrit server that’s being integrated).
    
9.  When completed, click **Done**. You should now see the integration appear in the list of integrations.
    

### Use a member-level user [Copied!](#use-a-member-level-user "Copy link to this section")

Important

In order to make the Gerrit integration work without an admin account, the user needs to have the following permissions:

*   `READ` permission for `refs/*` reference in the relevant repos
    *   This gives the user permission to get repository data (commits, pull requests,  
        etc.)
    *   In addition, this grants the user permission to write comments in pull requests
    *   **Note**: it is recommended to configure the permission in the `All-Projects`  
        repository, as this will ensure all repositories inherit these permissions

Having member permissions causes a limitation regarding teams - the non-admin user will be able to get teams data for teams they are a member of. This means that teams data in Cycode will be limited as well.

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the Add Integration window, click **Gerrit**.
    
    ![](/assets/56e05e0-image.png)
    
3.  The new Gerrit integration will load. Under the **Integration type** section, click the dropdown menu and select **Member**.
    
    ![](/assets/gerrit-member.png)
    
4.  Enter the following information for the Gerrit integration:
    
    *   Integration Name - Name to give the integration
    *   gerrit Username - The username of the admin user
    *   gerrit Password - The password of the admin user
    *   gerrit Server URL - The URL for the gerrit server to be integrated
5.  Once all the information is input, a PUT request will need to be sent to the Gerrit instance to set up the webhook for this integration. It will look similar to the following (with the ID values replaced with your relevant ID values):
    

```curl
curl -x PUT '{{gerrit_instance_url}}/a/config/server/webhooks~projects/All-Projects/remotes/cycode-{{integration_id}}' \
  --data '{"url": "https://api.cycode.com/gerrit-dispatcher/api/v1/webhook/{{tenant_id}}/{{integration_id}}", "connection_timeout": 10000, "socket_timeout": 10000, "max_tries": 3, "retry_interval": 2000, "ssl_verify": true}'
```

6.  Click **Done**. You should now see the integration appear on the list of integrations.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
