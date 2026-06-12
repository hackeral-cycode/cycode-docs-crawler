# Perforce P4 (formerly Helix Core) | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/perforce-p4-formerly-helix-core

---

# Perforce P4 (formerly Helix Core)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/perforce-p4-formerly-helix-core.md "Edit this page")

Updated on Mar 25, 2026 • Published on Oct 29, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Perforce Helix Core is an enterprise-class version control software application that securely manages all digital content in a single repository. Helix Core tracks and manages changes to your source code, digital assets, and large binary files.

After successfully integrating, Cycode starts pulling the data from your environment and running its policies.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

You need to be a user with super access permissions in Helix Core to perform the configuration. For more information, go to the [Helix Core docs](https://www.perforce.com/manuals/p4admin/Content/P4Admin/admin.permissions.html) .

## Authentication methods [Copied!](#authentication-methods "Copy link to this section")

Cycode supports the following authentication method for Helix Core.

Method

Description

Username + password

Authenticate with a Helix Core user’s username and password. The credentials are exchanged for an ephemeral P4 login ticket and aren’t stored on disk. For SSL-enabled instances, an SSL fingerprint (`p4 trust -i`) is also required - see [Integrate with Helix Core](#integrate-with-helix-core) below.

## Permissions [Copied!](#permissions "Copy link to this section")

The integration with Cycode requires **read-only** permissions in Helix Core.

## Integrate with Helix Core [Copied!](#integrate-with-helix-core "Copy link to this section")

1.  In Cycode **Settings > Integrations**, click **Add Integration**.
    
2.  In the list of available SCMs, select **Helix Core**.
    
3.  In the integration wizard, configure the following:
    
    Item
    
    Description
    
    Integration name
    
    Type a name for this integration.
    
    Select Broker
    
    Optional. If your Helix Core instance is accessible only via an on-premise Cycode Broker, select the relevant Broker instance.
    
    User name
    
    Provide the username for the Perforce user performing the integration.
    
    Password
    
    Provide the password for the Perforce user performing the integration.
    
    Instance URL
    
    Provide the Helix Core URL instance. This URL must be accessible from outside your network, for example **ssl://perforce.example.com:1666**.
    
    SSL Fingerprint
    
    Run the following command and copy the resulting value into this field: `p4 trust -i`
    
4.  Click **Next**.
    

After Cycode connects to your Helix Core instance, the integration appears in the list of connected integrations.

## Configure the Cycode webhook trigger [Copied!](#configure-the-cycode-webhook-trigger "Copy link to this section")

To enable ongoing scanning of changes in Helix Core (pushes), you have to configure a Perforce trigger that notifies Cycode on each changelist submission.

You need super access permissions to configure triggers in Helix Core. For more information, go to the [Helix Core docs](https://www.perforce.com/manuals/p4admin/Content/P4Admin/admin.permissions.html) .

1.  To add the webhook script, copy the following script to the Perforce server.
    
    Note
    
    You can place this script in a depot.
    

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
```

```bash
#!/bin/bash
ENDPOINT_URL="$1"
INSTANCE_ID="$2"
TRIGGER_TYPE="$3"
CHANGE="$4"
CHANGEROOT="$5"
USER="$6"
SERVERPORT="$7"

curl -X POST "$ENDPOINT_URL/api/v1/webhook/$INSTANCE_ID" \
  -d type="$TRIGGER_TYPE" \
  -d change="$CHANGE" \
  -d changeroot="$CHANGEROOT" \
  -d user="$USER" \
  -d serverport="$SERVERPORT"
```

2.  Use the following command to make the script executable:

```
1
```

```bash
chmod +x /path/to/cycode-change-commit-webhook.sh
```

3.  To register the Perforce trigger, run `p4 triggers` and add the following entry to the triggers table, replacing `<INSTANCE_ID>` with the instance ID from the Connected integrations page of the Cycode connection wizard, and `/path/to/` with the actual path to the script:

```
1
2
```

```bash
Triggers:
    cycode-change-commit change-commit //... "/path/to/cycode-change-commit-webhook.sh https://api.cycode.com <INSTANCE_ID> %triggertype% %change% %changeroot% %user% %serverport%"
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
