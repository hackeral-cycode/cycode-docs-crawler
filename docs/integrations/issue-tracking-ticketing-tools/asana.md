# Asana | Cycode Docs

Source: https://docs.cycode.com/integrations/issue-tracking-ticketing-tools/asana

---

# Asana

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/issue-tracking-ticketing-tools/asana.md "Edit this page")

Updated on Nov 12, 2025 • Published on Nov 10, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating with Asana enables Cycode to send information about detected violations in your environments. After successfully integrating, you can organize and track relevant information in your monitoring service.

Note

This is a one-way integration from the third-party API to Cycode.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

The Asana integration requires a Personal Access Token (PAT) for Cycode. For more details about this PAT, go to the [Asana documentation](https://developers.asana.com/docs/personal-access-token) .

### Permissions [Copied!](#permissions "Copy link to this section")

Your integration user needs the following permissions to connect to Cycode.

Permissions

Why is write access required?

Read/write permissions

Creates a ticket, so requires Read/Write access

## Integrate Asana with Cycode [Copied!](#integrate-asana-with-cycode "Copy link to this section")

1.  In the **Settings** > **Integrations** page, launch the connector wizard for Asana.
    
2.  Provide a name for the integration.
    
3.  Get the following parameters from Asana and apply them in the Cycode connector wizard:
    
    Parameter
    
    Value
    
    Workspace ID
    
    To find the workspace ID:
    
    1.  Navigate to the [Asana Workspace API](https://app.asana.com/api/1.0/workspaces) with an Asana authenticated user.
    2.  Copy the value from the `gid` field in the JSON response. This is your workspace ID.
    
    Personal Access Token (PAT)
    
    To create a PAT for the integration, follow the instructions in the [Asana docs](https://developers.asana.com/docs/personal-access-token) .
    
4.  Click **Connect**.
    

Important

In order to maintain connectivity for the integration, you must refresh the Cycode PAT token on the same schedule that the token expires/refreshes in Asana.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
