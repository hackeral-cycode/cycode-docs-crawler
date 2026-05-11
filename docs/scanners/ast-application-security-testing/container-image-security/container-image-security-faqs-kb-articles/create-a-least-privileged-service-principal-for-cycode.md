# Create a least-privileged service principal for Cycode | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security/container-image-security-faqs-kb-articles/create-a-least-privileged-service-principal-for-cycode

---

# Create a least-privileged service principal for Cycode

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/container-image-security-faqs-kb-articles/create-a-least-privileged-service-principal-for-cycode.md "Edit this page")

Updated on Feb 11, 2026 • Published on Aug 13, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

To ensure that Cycode operates under the principle of least privilege, it should use a custom role that you create in Azure with the exact permissions required to scan your Azure Container Registry (ACR).

This topic explains how to configure these permissions using either the Azure portal or the Azure CLI. You have to perform the following steps:

1.  Create a custom role with specific, minimal permissions - to create an Azure Container Registry for Cycode with minimal privileges, you need a role that grants Cycode read-only access to the following:
    *   Registry metadata
    *   Ability to list credentials
    *   Fetch image content for scanning
2.  Create a service principal for Cycode - this step registers the Cycode application in your Azure AD tenant, allowing it to be assigned permissions.
3.  Assign the new custom role to the Cycode service principal at the subscription scope.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

Before you begin, ensure that you have the following:

*   Appropriate Azure permissions: Your Azure account needs permissions to create and assign custom roles at the subscription level, such as those included in the **Owner** or **User Access Administrator** roles.
*   Azure subscription ID: You need the ID of the Azure subscription that contains the container registries you want Cycode to scan.
*   Azure CLI (optional): If you choose the CLI method, you need the Azure CLI installed and authenticated.

## Configure a service principal for Cycode [Copied!](#configure-a-service-principal-for-cycode "Copy link to this section")

### Using the Azure portal [Copied!](#using-the-azure-portal "Copy link to this section")

#### Step 1: Create a custom role [Copied!](#step-1-create-a-custom-role "Copy link to this section")

1.  Sign in to the Azure portal.
2.  Go to **Subscriptions** and select the subscription where your container registries are located.
3.  In the subscription menu, click **Access control (IAM)**.
4.  Click **Add** and select **Add custom role**.
5.  In the Basics tab, fill in the following:
    
    Parameter
    
    Value
    
    Custom role name
    
    Enter a descriptive name, such as **Cycode ACR Read-Only Access**.
    
    Description
    
    Enter a description, such as **Grants Cycode minimal permissions to scan ACR for vulnerabilities**.
    
    Baseline permissions
    
    Select **Start from scratch**.
    
6.  In the Permissions tab, click **Add permissions**.
7.  Search for and select Microsoft Container Registry, and select the following permissions:
    
    Category
    
    Permission
    
    Management (Actions)
    
    `Microsoft.ContainerRegistry/registries/listCredentials/action`  
    `Microsoft.ContainerRegistry/registries/pull/read`  
    `Microsoft.ContainerRegistry/registries/tokens/read`  
    `Microsoft.ContainerRegistry/registries/read`  
    `Microsoft.ContainerRegistry/registries/connectedRegistries/read`  
    `Microsoft.Resources/subscriptions/resourceGroups/read`
    
    Data (DataActions)
    
    `Microsoft.ContainerRegistry/registries/catalog/read`  
    `Microsoft.ContainerRegistry/registries/repositories/content/read`  
    `Microsoft.ContainerRegistry/registries/repositories/metadata/read`
    
8.  Click **Add**.
9.  In the Assignable scopes tab, verify that your subscription is listed.
10.  Click **Review** > **Create**, then click **Create** to finalize the custom role.

#### Step 2: Create the Cycode service principal [Copied!](#step-2-create-the-cycode-service-principal "Copy link to this section")

Note

For this step, we recommend using the Azure CLI. The only required action is a single command that reliably creates the service principal instance from Cycode’s multi-tenant application. See Step 2 in [Using the Azure CLI](/scanners/ast-application-security-testing/container-image-security/container-image-security-faqs-kb-articles/create-a-least-privileged-service-principal-for-cycode#using-the-azure-cli) below.

1.  In the Azure portal, go to **Tenant properties** and copy your tenant’s ID.
    
2.  Construct the admin consent workflow URL for your environment, replacing `{your-tenant-id}` with your tenant’s ID:
    
    ```
    ps://login.microsoftonline.com/{your-tenant-id}/adminconsent?client_id=2f5dfdfc-e281-4894-9b34-c7c990b1131b
    ```
    
3.  Open the admin consent workflow URL you constructed.
    
4.  Authenticate with a user that has administrative privileges, such as **Application Administrator** or **Global Administrator**.
    
5.  Review the requested permissions for the Cycode application.
    

#### Step 3: Assign the custom role [Copied!](#step-3-assign-the-custom-role "Copy link to this section")

1.  In the Azure portal, go to your subscription’s Access control (IAM) page.
2.  Click **Add** and select **Add role assignment**.
3.  In the Role tab, search for and select the **Cycode ACR Read-Only Access** role you created.
4.  In the Members tab:
    1.  In **Assign access to**, select **Service principal**.
    2.  Click **Select members**.
    3.  In the search box, type **Cycode** or paste the application ID **2f5dfdfc-e281-4894-9b34-c7c990b1131b**.
    4.  Select the Cycode service principal from the list and click **Select**.
    5.  Click **Review** > **Assign**, then click **Assign** again to confirm the assignment.

### Using the Azure CLI [Copied!](#using-the-azure-cli "Copy link to this section")

#### Step 1: Create a custom role [Copied!](#step-1-create-a-custom-role-1 "Copy link to this section")

1.  Create a JSON file (for example, **cycode-acr-role.json**) with the content below. Replace `{your-subscription-id}` with your actual subscription ID.
    
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
    16
    17
    18
    19
    20
    21
    22
    23
    ```
    
    ```json
        {
      "Name": "Cycode ACR Read-Only Access",
      "IsCustom": true,
      "Description": "Grants Cycode read-only access to ACR metadata, pull permissions, and the ability to list credentials for scanning purposes.",
      "Actions": [
    "Microsoft.ContainerRegistry/registries/pull/read",
    "Microsoft.ContainerRegistry/registries/listCredentials/action",
    "Microsoft.ContainerRegistry/registries/tokens/read",
    "Microsoft.ContainerRegistry/registries/read",
    "Microsoft.ContainerRegistry/registries/connectedRegistries/read",
    "Microsoft.Resources/subscriptions/resourceGroups/read"
      ],
      "NotActions": [],
      "DataActions": [
    "Microsoft.ContainerRegistry/registries/catalog/read",
    "Microsoft.ContainerRegistry/registries/repositories/metadata/read",
    "Microsoft.ContainerRegistry/registries/repositories/content/read"
      ],
      "NotDataActions": [],
      "AssignableScopes": [
        "/subscriptions/<your-subscription-id>"
      ]
    }
    ```
    
2.  Run the following command to create the role:
    
    ```
    1
    ```
    
    ```bash
    az role definition create --role-definition cycode-acr-role.json
    ```
    

#### Step 2: Create the Cycode service principal [Copied!](#step-2-create-the-cycode-service-principal-1 "Copy link to this section")

1.  Run the following command. ID `2f5dfdfc-e281-4894-9b34-c7c990b1131b` is the unique, static identifier for the Cycode application.
    
    ```
    1
    ```
    
    ```bash
     az ad sp create --id 2f5dfdfc-e281-4894-9b34-c7c990b1131b
    ```
    
    This command ensures that the Cycode service principal exists in your tenant and is ready for role assignment.
    
2.  Copy the object ID from the output.
    

#### Step 3: Assign the custom role [Copied!](#step-3-assign-the-custom-role-1 "Copy link to this section")

1.  Run the following command to assign the role.
    
    *   Replace `{service-principal-object-id}` with the object ID from the output of the `az ad sp create` command.
    *   Replace `{your-subscription-id}` with your Azure subscription ID.
    
    ```
    1
    ```
    
    ```bash
    az role assignment create --role "Cycode ACR Read-Only Access" --assignee <service-principal-object-id> --scope "/subscriptions/<your-subscription-id>" --description "Assigns minimal ACR permissions to the Cycode platform."
    ```
    

## Next Steps [Copied!](#next-steps "Copy link to this section")

You can now proceed with the standard Azure Container Registry integration instructions for Cycode. Skip the steps for creating a service principal and assigning roles because you’ve already completed this process with a more secure, least-privileged role.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
