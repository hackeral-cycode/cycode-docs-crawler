# Configuring the plugin for on-prem customers | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/configuring-the-plugin-for-on-prem-customers

---

# Configuring the plugin for on-prem customers

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/configuring-the-plugin-for-on-prem-customers.md "Edit this page")

* * *

To configure the plugin for on-prem customers:

1.  Go to the extension settings to change the default settings:

![](/assets/4a603e5-image.png)

2.  In the **API URL** field, to change the base URL,**your admin** will need provide the base URL.
3.  Complete the rest of the fields as follows:
    1.  In the **Additional Parameters** field, you can submit additional CLI parameters, such as `--verbose mode` for debugging purposes.
    2.  Use the **APP URL** if the web URL needs to be changed.
    3.  Use **CLI PATH** to set the path to the Cycode CLI executable. In cases where the CLI can’t be downloaded due to your network configuration (for example, due to firewall rules), use this option.
    4.  Clear the **Scan on Save** option to prevent Cycode from scanning your code every time you save your work. Instead, use the **Scan on-Demand** option.

Note

If the “Scan on Save File” option is enabled in the extension settings, Cycode will scan the file in focus (including manifest files, such as package.json and dockerfile) for hardcoded secrets. Package vulnerabilities (SCA) will only be scanned by Cycode if the file in focus is a manifest file (then the different scan types will run simultaneously).

5.  In the **SCA Scan On Open** field, specify whether to perform a scan when a project opened.
6.  The extension can also be installed directly from a packaged file, using **Install from VSIX** (in the Extensions view command dropdown), bypassing the VS Code Marketplace.

![](/assets/bbddb25-image.png)

Contact [support@cycode.com](mailto:support@cycode.com) for the extension file.

Note

This is especially helpful in cases where a company uses a private network that proxies requests to Microsoft from one node, resulting in request overload which Microsoft prevents by rate limiters.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
