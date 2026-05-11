# Azure Boards | Cycode Docs

Source: https://docs.cycode.com/integrations/issue-tracking-ticketing-tools/azure-boards

---

# Azure Boards

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/issue-tracking-ticketing-tools/azure-boards.md "Edit this page")

Updated on Nov 12, 2025 • Published on Nov 2, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Azure Boards enables Cycode to send information about detected violations in your environments. After successfully integrating, you can organize and track relevant information in your monitoring service.

Note

This is a one-way integration from the third-party API to Cycode.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

You need a PAT for Cycode to integrate with Azure Boards. For more information about the PAT, go to the [Azure DevOps documentation](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&amp;tabs=Windows) .

### Permissions [Copied!](#permissions "Copy link to this section")

The following roles and permissions are needed.

Roles and Permissions

Why is Write Access Required?

Read/write permissions

Creates a ticket, so requires Read/Write access.

Contributor role

Grants full access to manage all resources, but does not allow you to share image galleries.

Personal Access Token (PAT)

The following roles and permissions should be applied:  
• Projects and Team - Read  
• Team Dashboard - Read  
• Work Items - Read/Write

## Integrate Azure Boards with Cycode [Copied!](#integrate-azure-boards-with-cycode "Copy link to this section")

1.  In the **Settings** > **Integrations** page, launch the connector wizard for Azure Boards.
    
2.  Provide a name for the integration.
    
3.  Get the following parameters from Azure Boards and apply them in the Cycode connector wizard.
    
    Parameter
    
    Value
    
    **Organization URL**
    
    The URL of your Azure DevOps organization, for example `https://dev.azure.com/your-org`.
    
    **Personal Access Token**
    
    Generate a dedicated API token for the Cycode integration by following the instructions in [Using PATs](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows) (in the Azure docs).
    
4.  Click **Connect**.
    

Important

In order to maintain connectivity for the integration, you must refresh the Cycode PAT token on the same schedule that the token expires/refreshes in Azure DevOps.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
