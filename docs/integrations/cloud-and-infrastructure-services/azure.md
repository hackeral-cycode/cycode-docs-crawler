# Azure | Cycode Docs

Source: https://docs.cycode.com/integrations/cloud-and-infrastructure-services/azure

---

# Azure

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/cloud-and-infrastructure-services/azure.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Azure enables Cycode to scan your platforms and identify configuration issues in the cloud and infrastructure as code. After successfully integrating, Cycode starts pulling the data from your environment and running its policies.

## Permissions [Copied!](#permissions "Copy link to this section")

Azure supports a set of built-in Azure roles that provide different levels of permissions. Use Azure role-based access control (Azure RBAC) to assign specific permissions to users, service principals, or other identities. These are the permissions and roles required for integrating with Cycode:

Role

Permissions

Contributor role

Grants full access to manage all resources, but does not allow you to share image galleries.

## Integrating with Azure [Copied!](#integrating-with-azure "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  This displays the Add Integration window. Under the Cloud section, click **Azure**.
    

![](/assets/a683443-image.png)

![](/assets/b61d845-azure-add-integration.png)

3.  Open your Azure account and follow the instructions there to add an integration.
    
4.  Enter the command provided by Cycode to the CloudShell terminal in Azure to receive a **Tenant ID**.
    
5.  Enter the **Tenant ID** in Cycode.
    
6.  Run the provided commands by Cycode in CloudShell.
    
    Note
    
    These commands add Cycode to Azure’s trusted applications and give Cycode permission to list resources.
    
7.  Click **Done**. The Azure integrations area loads and shows that your project is connected.
    
8.  To add new projects, click **Add Integration** from the Azure integrations area.
    

## De-Integrating from Azure [Copied!](#de-integrating-from-azure "Copy link to this section")

If you choose to delete (de-integrate) an Azure-Cycode integration, you can do so through the integration settings.

1.  Go to the list of integrations and from the three-dot option menu, select **Delete**.

![](/assets/4074d51-image.png)

2.  You’ll then be asked to confirm the deletion.

### What Does De-Integration Do? [Copied!](#what-does-de-integration-do "Copy link to this section")

When Cycode users integrate with a cloud account, this adds a large amount of information into the Context Intelligence Graph as well as to the Violations, workflows, and custom policy databases.

When deleting an existing integration with a cloud account, you have the following options:

*   Remove violations (using the parameter name `removeViolationsData`; if not provided, default is `true`).
*   Remove graph-related entities (using the parameter name `removeGraphData`; if not provided, default is `true`).

Note that by default, both the violations and graph entities will be removed.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
