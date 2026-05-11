# Jira Server/Data Center | Cycode Docs

Source: https://docs.cycode.com/integrations/issue-tracking-ticketing-tools/jira-server-data-center

---

# Jira Server/Data Center

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/issue-tracking-ticketing-tools/jira-server-data-center.md "Edit this page")

Updated on Dec 22, 2025 • Published on Dec 7, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Jira Server enables Cycode to send information about violations that are detected in your environments. After successfully integrating Jira Server with Cycode, you can organize and track relevant information in your integrated Jira Server instance.

## Before you begin [Copied!](#before-you-begin "Copy link to this section")

Cycode recommends that you create a dedicated service user for the integration instead of using a personal employee account.

### Create a service user in Jira [Copied!](#create-a-service-user-in-jira "Copy link to this section")

1.  Create a new user in your Jira Server instance.
    
2.  Sign in with this user once to ensure that the account is active.
    

### Configure permissions for the service user [Copied!](#configure-permissions-for-the-service-user "Copy link to this section")

Use your Jira admin account to configure permissions for the service user to enable the following for the integration with Cycode:

Cycode functionality

Permissions

Project access

The following permissions should be added to the required groups for all projects that are integrated with Cycode:

*   **Browse**
*   **Create**
*   **Edit**

User access

In the Atlassian user management page, select the following options:

*   **Application access**
*   **Jira Software**

Webhook management (optional)

If your integration includes the **Apply Jira ticket status to Cycode tickets** feature, Cycode needs to manage webhooks to sync the status of the tickets. Add the service user to the following group:

*   **jira-system-administrators**

## Integrate Jira Server with Cycode [Copied!](#integrate-jira-server-with-cycode "Copy link to this section")

### Basic authentication [Copied!](#basic-authentication "Copy link to this section")

If you use basic authentication for the integration, you will need the username and password of the service user.

Note

If the service user was created via SAML, an administrator must set the password that should then be used for the Cycode integration.

Before you start the integration, Cycode recommends that you test the basic authorization credentials using the following script:

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
```

```bash
# Set environment variables
JIRA_USER=""
JIRA_PASSWORD=""
JIRA_URL=""

# Perform authentication test
curl -u "${JIRA_USER}:${JIRA_PASSWORD}" \
  -X GET \
  -H "Accept: application/json" \
  "$JIRA_URL/rest/api/2/project"
```

**To integrate Jira Server**

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the **Issue Tracking** section, click **Jira Server/Data Center**.
    
3.  Provide the integration details as follows:
    
    1.  Select the **Credentials** authorization method.
    2.  If you’re using a Cycode Broker, select the Broker instance from the list.
    3.  Provide the following information:
        
        Item
        
        Description
        
        **Integration name**
        
        Type a meaningful name for the integration.
        
        **Instance URL**
        
        Provide the Jira server root URL.
        
        **Username**
        
        Name of the service user (not the email address).
        
        **Password**
        
        Password of the service user.
        
4.  (Optional) Enable the **Use enhanced description format** option.
    
5.  Click **Save**.
    
    ### Enable status mapping [Copied!](#enable-status-mapping "Copy link to this section")
    
    You can opt to show the status of Jira tickets in Cycode after you complete the initial integration.
    
    1.  In the Connected accounts page of the connection wizard, click the required integration.
        
    2.  In the Integration details page, toggle the new **Show the status of Jira tickets in Cycode** option on.
        
    3.  Click **Save changes**.
        
    

### Modern (OAuth) authentication [Copied!](#modern-oauth-authentication "Copy link to this section")

If you use the modern authentication method, you have to do the following before you perform the integration:

*   [Generate a private-public key pair](/integrations/issue-tracking-ticketing-tools/jira-server-data-center#generate-a-private-public-key-pair)
    
*   [Create an application link in Jira](/integrations/issue-tracking-ticketing-tools/jira-server-data-center#create-an-application-link-in-jira)
    

#### Generate a private-public key pair [Copied!](#generate-a-private-public-key-pair "Copy link to this section")

1.  Run the following commands in your terminal to generate the required keys.
    
    ```
    1
    2
    3
    4
    5
    ```
    
    ```bash
    # 1. Generate Private Key (Force PKCS#1 format)
    openssl genrsa -traditional -out private.pem 2048
    
    # 2. Extract Public Key
    openssl rsa -in private.pem -pubout -out public.pem
    ```
    
2.  Save the contents of `private.pem` and `public.pem`.
    

#### Create an application link in Jira [Copied!](#create-an-application-link-in-jira "Copy link to this section")

The Jira application link provides applications with user-level access to Jira, and also provides Jira with access to the application being integrated. Follow these instructions to create an application link for Cycode.

1.  Sign in to Jira server as an administrator.
    
2.  From the Jira administration menu, go to **Applications** and sign in as an administrator.
    
3.  From the Administration view, open the Application links page and click **Create link**.
    
4.  In the Create link window, select **Atlassian product via OAuth 1.0** and provide the Cycode application URL for your region:
    
    Region
    
    URL
    
    United States (US)
    
    `https://app.cycode.com/`
    
    Europe (EU)
    
    `https://app.eu.cycode.com/`
    
5.  Click **Continue**.
    
    Note
    
    If you get an error message that asks for a new URL, leave the existing value and click **Continue**.
    
6.  Apply the following values in the first page of the **Link applications** wizard:
    
    Parameter
    
    Value
    
    **Application Name**
    
    Cycode Integration
    
    **Application Type**
    
    Generic Application
    
    **Service Provider Name**
    
    Cycode
    
    **Consumer Key**
    
    OauthKey
    
    **Shared Secret**
    
    cycode
    
    **Request Token URL**
    
    **US**: `https://www.cycode.com`  
    **EU**: `https://app.eu.cycode.com/`
    
    **Access Token URL**
    
    **US**: `https://www.cycode.com`  
    **EU**: `https://app.eu.cycode.com/`
    
    **Authorize URL**
    
    **US**: `https://www.cycode.com`  
    **EU**: `https://app.eu.cycode.com/`
    
7.  Select the **Create incoming link** option.
    
8.  Click **Continue**.
    
9.  Apply the following values in the second page of the Link applications wizard to configure the incoming link:
    
    Parameter
    
    Value
    
    **Consumer Key**
    
    OauthKey
    
    **Consumer Name**
    
    Generic Application
    
    **Public Key**
    
    1.  Apply the following header in the text field:  
        `—–BEGIN PUBLIC KEY—–`
    2.  Copy the contents of your public.pem file and paste them under the header.
    3.  Apply the following footer after the public.pem file contents:  
        `—–END PUBLIC KEY—–`
    
10.  Click **Continue**.
     
     Note
     
     If you see this status, it can be ignored: **Application ‘Cycode Integration’ seems to be offline**.
     

#### Integrate Jira Server [Copied!](#integrate-jira-server "Copy link to this section")

To ensure that the integration implements the service user to perform any actions involving Cycode, you have to switch accounts before you perform the integration.

**In Jira**

1.  Sign out of your Jira administrator account.
2.  Sign in to Jira as the service user you created for the integration.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
