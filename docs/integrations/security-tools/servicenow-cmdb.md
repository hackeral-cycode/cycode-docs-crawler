# ServiceNow CMDB | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/servicenow-cmdb

---

# ServiceNow CMDB

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/servicenow-cmdb.md "Edit this page")

Updated on May 13, 2025 • Published on Nov 20, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can integrate ServiceNow CMDB with Cycode to provide automated asset syncing, daily asynchronous updates (so Cycode remains aligned with the latest CMDB changes), and customizable field mapping so you can easily map CMDB fields to Cycode project data during setup. Ultimately, this integration provides improved data consistency across both Cycode and your CMDB, providing a unified view of your code assets and enhancing your security posture.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

Asset inventory

### Permissions [Copied!](#permissions "Copy link to this section")

Requirement

Description

Read-only access

Read-only permissions are required for the integration.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   Records in CMDB must have a fully qualified URL to the corresponding repository synced by Cycode

## Integrate with ServiceNow CMDB [Copied!](#integrate-with-servicenow-cmdb "Copy link to this section")

1.  Go to **Settings > Integrations**. ![](/assets/cmdb-connector-image-bf3eybbq.png)
    
2.  Click **Add Integration**.
    
3.  In the list of available security tools, select **ServiceNow CMDB**. ![](/assets/cmdb-connector-image-nyqu9g1c.png)
    
4.  In step 1 of the integration setup of the new account, where each account reflects one table from CMDB, enter the following information:
    
    1.  Name (an internal name for easy identification).
    2.  Host URL.
    3.  Username.
    4.  Password.
    5.  In the **Add CMDB table** field, enter the table values you want to see in Cycode.
    
    ![](/assets/cmdb-connector-image-h9dzvf8b.png)
    
    Important
    
    *   Each account created in Cycode will connect to one CMDB table (you can create multiple accounts if needed).
    *   The table name that you provide in the integration screen must start with `cmdb_ci_`.
    *   You’ll find all of the table names in SNOW [here](https://www.servicenow.com/docs/bundle/vancouver-servicenow-platform/page/product/configuration-management/reference/cmdb-tables-details.html) .
    *   The table must have repository URL attributes; this is the key for correlation with Cycode data. After you validate you have or added the repository URL attributes, all the data in the tables can be mapped as values and synced as repository labels into Cycode.
    
5.  Click **Connect** to begin loading the API connection.
    
    After the connection is complete, step 3 of the wizard is displayed.
    
    ![](/assets/cmdb-connector-image-w0atysve.png)
    
6.  Select the CMDB table you want to sync and to link that data to Cycode.
    
    1.  Select a CMDB custom repository URL attribute from the dropdown list.
        
        What is the CMDB custom repository URL attribute?
        
        ```
          The attribute value is used to correlate with repositories synced by Cycode. For example, if the value of this attribute for a given CMDB entry is `https://github.com/my-org/my-repo`, Cycode will look for a repository that has a similar URL.
        ```
        
        ![](/assets/cmdb-connector-image-ukyvdzou.png)
        
    2.  In the **CMDB to Cycode Label Mapping** field, map the CMDB column names to user-friendly names in Cycode.
        
        ![](/assets/cmdb-connector-image-izx2lcdu.png)
        
7.  When done, click **Sync Data** to begin the sync.
    

### View the sync results [Copied!](#view-the-sync-results "Copy link to this section")

The process of syncing data can take some time; after the sync is complete, the integration displays a Connected status.

*   If the sync was successful, the sync status will display a completed message:
    
    ![](/assets/cmdb-connector-image-dybzctqb.png)
    
*   If the sync was not successful, the sync status will display a failed message:
    
    ![](/assets/cmdb-connector-image-miz6kei5.png)
    

### View ServiceNow CMDB labels in Cycode [Copied!](#view-servicenow-cmdb-labels-in-cycode "Copy link to this section")

Once the integration is complete and the sync is successful (see above), you’ll be able to view CMDB labels you mapped in two places:

*   In the **Projects wizard**, when creating a new project and specifying scope:
    
    ![](/assets/cmdb-connector-image-zvxem9x1.png)
    
*   In the **Inventory** page for Repositories:
    
    ![](/assets/cmdb-connector-image-hu6670eh.png)
    

## FAQs [Copied!](#faqs "Copy link to this section")

### What attribute types are supported? [Copied!](#what-attribute-types-are-supported "Copy link to this section")

Cycode’s integration with CMDB supports the following attribute types:

*   string
    
*   URL
    
*   reference
    
*   choice
    
*   GUID
    

### How often does Cycode sync with ServiceNow CMDB? [Copied!](#how-often-does-cycode-sync-with-servicenow-cmdb "Copy link to this section")

Sync is performed once a day.

### How do I delete an integration? [Copied!](#how-do-i-delete-an-integration "Copy link to this section")

Admins can manually delete labels for assets directly from the Cycode assets cards. If an integration with CMDB exists, CMDB serves as the source of truth. In this case, the label will reappear during the next sync if it still exists in the CMDB.

If you decide to remove the label and the integration is deleted or the label no longer exists in the CMDB, the label will be permanently removed from the asset.

### Can I connect multiple accounts? [Copied!](#can-i-connect-multiple-accounts "Copy link to this section")

Each CMDB account created in Cycode reflects one CMDB table in ServiceNow. You can create multiple accounts if needed.

### How does Cycode correlate the ServiceNow CMDB data? [Copied!](#how-does-cycode-correlate-the-servicenow-cmdb-data "Copy link to this section")

The correlation of the data is based on a key-value structure, where the key is always a repository URL, and the value can be any attribute from the chosen CMDB table.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
