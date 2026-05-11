# Black Duck | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/black-duck

---

# Black Duck

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/black-duck.md "Edit this page")

Updated on May 12, 2025 • Published on May 12, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Black Duck enables pulling vulnerabilities so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SCA

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   A valid API token with Read-Access permissions
    
*   A Black Duck user associated with the relevant Black Duck projects
    

### Correlating data between Black Duck and Cycode [Copied!](#correlating-data-between-black-duck-and-cycode "Copy link to this section")

When you integrate Black Duck with Cycode you can correlate data between both, for example, providing code snippets based on data pulled from Cycode’s SCM integration.

![](/assets/3f8e3b2-image.png)

In order to get this information, Cycode has to retrieve a mutual property from both Black Duck and the SCM. The environment should meet the following prerequisites:

*   The SCM integration must be connected to Cycode.
    
*   The SCM provider must be configured in your Black Duck account.
    
    Note
    
    *   To verify that this feature is enabled, go to your user profile and see if the **SCM Providers** option is visible.
        
        ![](/assets/8360594-image.png)
        
    *   For more information about this setting, see the [Black Duck documentation](https://sig-product-docs.synopsys.com/bundle/bd-hub/page/Administration/setting_up_scm_providers.html) or reach out to your Black Duck administrator.
        
    

## Permissions [Copied!](#permissions "Copy link to this section")

Permission

Access type

Global Code Scanner

Read

Project Viewer

Read

## Connect Black Duck to Cycode [Copied!](#connect-black-duck-to-cycode "Copy link to this section")

1.  Sign in to the Black Duck platform as an admin user.
    
2.  In **Admin** > **Users**, create a new user or edit an existing user, adding the permission **Global Code Scanner**. ![](/assets/8828b90-image.png)
    
3.  Verify that the user has the **Project Viewer** role for the relevant project group. ![](/assets/755c2f1-image.png)
    
    Note
    
    Cycode only retrieves data for projects that this user has permission to access.
    
4.  Sign out from the Admin user and sign in as the user you created or modified in step 2 above.
    
5.  Under the user, click **Access Tokens**. ![](/assets/02b719d-image.png)
    
6.  Click **Create Token**.
    
7.  Give the token a descriptive name to make it easier to manage tokens (for example: **Cycode-token**).
    
8.  Set the scope to **Read Access Only**. ![](/assets/dd360d6-image.png)
    
9.  Click **Create**.
    
10.  For security reasons, save the tokens you generate in a secure location.
     

## FAQs [Copied!](#faqs "Copy link to this section")

#### How does Cycode correlate data from Black Duck? [Copied!](#how-does-cycode-correlate-data-from-black-duck "Copy link to this section")

There are two types of vulnerabilities that are ingested by the Cycode platform:

*   A vulnerability that exists both in Cycode and Black Duck - for this type, Cycode uses the following properties to correlate vulnerabilities:
    
    *   CVE
    *   Package name and version
    *   Repository
*   A vulnerability that exists only in Black Duck - for this type of vulnerability, Cycode creates a new violation on the platform that includes all relevant data from Black Duck.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
