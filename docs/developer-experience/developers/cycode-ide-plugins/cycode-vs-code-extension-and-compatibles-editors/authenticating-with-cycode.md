# Authenticating with Cycode | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/authenticating-with-cycode

---

# Authenticating with Cycode

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/authenticating-with-cycode.md "Edit this page")

* * *

To scan your projects you must authenticate with Cycode. There are three methods to set the Cycode client ID and client secret:

*   [Using the Auth command (recommended)](#using-the-auth-command)
*   [Using the Configure command](#using-the-configure-command)
*   [Adding the client ID and client secret to the environment variables](#adding-the-client-id-and-client-secret-to-the-environment-variables)

## Using the Auth Command [Copied!](#using-the-auth-command "Copy link to this section")

The Auth Command is the recommended method for setting up your local machine to authenticate with Cycode CLI.

Note

Note: This is the default method for authenticating with the Cycode CLI.

1.  Go to the Cycode icon in the IDE menu bar, and click **Authenticate**:  
    ![](/assets/b6ebf7f-cli-authenticate.png)

Or type the following command into your terminal/command line window: `cycode auth`

A browser window will appear, asking you to log into Cycode (as seen below):

![](/assets/2875396-image.png)

2.  Enter your login credentials on this page and log in.
3.  You will eventually be taken to the page below, where you’ll be asked to choose the business group you want to authorize Cycode with (if applicable):

![](/assets/eb96352-image.png)

4.  Click **Allow** to authorize the Cycode CLI on the selected business group.  
    Once authentication is completed successfully, you’ll see the following screen:

![](/assets/2ab31ed-image.png)

5.  In addition, when you exit the browser screen, in the terminal/command line screen, you will see the following:  
    `Successfully logged into cycode`

## Using the Configure Command [Copied!](#using-the-configure-command "Copy link to this section")

Note

If you’ve already set up your Cycode client ID and client secret through the Linux or Windows environment variables, those credentials will take precedence over this method.

1.  Type the following command into your terminal/command line window:  
    `cycode configure`  
    You’ll see the following response:  
    `Update credentials in file (/Users/travislloyd/.cycode/credentials.yaml)`  
    `cycode client id []:`
    
2.  Enter your Cycode client ID value.  
    `cycode client id []: 7fe5346b-xxxx-xxxx-xxxx-55157625c72d`
    
3.  Enter your Cycode client secret value.  
    `cycode client secret []: c1e24929-xxxx-xxxx-xxxx-8b08c1839a2e`
    
    If the values were entered successfully, you’ll see the following message:  
    `Successfully configured CLI credentials!`
    
    If you go into the`.cycode` folder under your user folder, you’ll find these credentials were created and placed in the `credentials.yaml` file in that folder.
    

## Adding the Client ID and Client Secret to the Environment Variables [Copied!](#adding-the-client-id-and-client-secret-to-the-environment-variables "Copy link to this section")

### On Unix/Linux [Copied!](#on-unixlinux "Copy link to this section")

Run:

```
1
2
```

```bash
export CYCODE_CLIENT_ID={your Cycode ID}  
export CYCODE_CLIENT_SECRET={your Cycode Secret Key}
```

### On Windows [Copied!](#on-windows "Copy link to this section")

1.  Go to **Control Panel > System > Advanced System Settings**.
2.  In the System Properties window that opens, click **Environment Variables**.

![](/assets/a28ff23-image.png)

3.  In the Environment Variables tab, create `CYCODE_CLIENT_ID` and`CYCODE_CLIENT_SECRET` variables with values matching your ID and Secret Key, respectively:

![](/assets/7ffb231-image.png)

4.  Insert the `cycode.exe` into the path to complete the installation.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
