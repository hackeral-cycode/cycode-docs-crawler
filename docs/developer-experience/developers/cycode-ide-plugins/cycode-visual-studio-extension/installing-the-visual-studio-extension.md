# Installing the Visual Studio Extension | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/installing-the-visual-studio-extension

---

# Installing the Visual Studio Extension

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/installing-the-visual-studio-extension.md "Edit this page")

Updated on Jul 10, 2024 • Published on Jul 3, 2024

* * *

You can install the extension directly from the IDE.

1.  Go to **Extensions > Manage Extensions**.  
    ![](/assets/cycode-visual-studioide-plugin-image-1htqqpyy.png)
2.  In the search enter “Cycode” and click **Install**.  
    Alternatively, you can install the extension from the extension page: [Visual Studio 2015-2019](https://marketplace.visualstudio.com/items?itemName=cycode.cycode-14-16) , [Visual Studio 2022](https://marketplace.visualstudio.com/items?itemName=cycode.cycode-17) .
3.  After the installation completes, go to **Extensions > Cycode > Open Tool Window** or **View > Other Windows > Cycode**.

Note

On older versions this might appear in the top menu bar.

![](/assets/cycode-visual-studioide-plugin-image-77fiaq7x.png)

The extension will then download the latest version of the Cycode CLI and installation will be complete.

![](/assets/cycode-visual-studioide-plugin-image-klefy3j6.png)

## Authentication [Copied!](#authentication "Copy link to this section")

To authenticate the Cycode Visual Studio Extension, follow these steps:

1.  Open the editor.
2.  Open the extension window **Extensions > Cycode > Open Tool Window**.
3.  Click the **Authenticate** button.

## Configuring the extension [Copied!](#configuring-the-extension "Copy link to this section")

To configure the extension, go to the extension settings to change the default settings:

1.  In the Additional Parameters field, you can submit additional CLI parameters, such as –verbose mode for debugging purposes.
2.  Use the API URL and APP URL fields to change the base URLs:
    1.  On-premises Cycode customers should ask their admin for the relevant base URLs.
    2.  For EU tenants, you’ll need to adjust the API and APP URLs to include the EU tag:
        1.  API URL: [https://api.eu.cycode.com](https://api.eu.cycode.com)
        2.  APP URL: [https://app.eu.cycode.com](https://app.eu.cycode.com)
3.  Use CLI PATH to set the path to the Cycode CLI executable. In cases where the CLI can’t be downloaded due to your network configuration (for example, due to firewall rules), use this option.
4.  Uncheck the Scan-on-Save option to prevent Cycode from scanning your code every time you save your work. Instead, use the Scan-on-Demand option.

Note

If the “Scan on Save” option is enabled in the extension settings, Cycode will scan the file in focus (including manifest files, such as package.json and dockerfile) for hardcoded secrets.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
