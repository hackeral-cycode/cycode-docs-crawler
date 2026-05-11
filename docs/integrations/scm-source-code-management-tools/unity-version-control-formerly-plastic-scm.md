# Unity Version Control (formerly Plastic SCM) | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/unity-version-control-formerly-plastic-scm

---

# Unity Version Control (formerly Plastic SCM)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/unity-version-control-formerly-plastic-scm.md "Edit this page")

Updated on Apr 15, 2025 • Published on Apr 15, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Unity Version Control (formerly Plastic SCM) connector offers a unique method for integrating repository security with the Cycode platform, differing from integrations with other SCM systems where Cycode might directly access and scan repositories. This connector focuses on enabling users to locally scan their Unity Version Control repositories using the Cycode CLI and associate those scan results with a specific Cycode project.

After Unity Version Control is integrated, the repositories are synced in Cycode. Afterwards, members can create a project in Cycode, associate the repository with it, and run the Cycode CLI locally. The results of this local scan can then be associated with the specific project in Cycode.

### Connect Unity Version Control with Cycode [Copied!](#connect-unity-version-control-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  From the list of available SCMs, select **Unity Version Control**.
    
3.  To connect your Unity Version Control account, provide the following information:
    
    Parameter
    
    Description
    
    Integration Name
    
    Provide a meaningful name for this integration
    
    Endpoint URL
    
    Enter the URL for the Cycode API to connect to your Unity Version Control instance
    
    Organization
    
    Type the name of your Unity Version Control organization
    
    Access Token
    
    Copy the access token from your Unity Version Control account
    

After successfully connecting your Unity Version Control account, you will see the integration listed on the Integrations page with its status. This confirms that the connection has been established and Cycode can now recognize your Unity Version Control repositories for CLI project association. The details of the associated repositories are available on the Inventory page.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
