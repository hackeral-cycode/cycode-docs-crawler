# Configuring the plugin | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/configuring-the-plugin

---

# Configuring the plugin

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/configuring-the-plugin.md "Edit this page")

Updated on Nov 17, 2024 • Published on Nov 17, 2024

* * *

To configure the plugin:

1.  Go to the extension settings to change the default settings:

![](/assets/9a4e30c-image.png)

2.  In the **Additional Parameters** field, you can submit additional CLI parameters, such as `--verbose mode` for debugging purposes.
3.  Use the **API URL** field to change the base URL (on-premises Cycode customers see [this](/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/configuring-the-plugin-for-on-prem-customers) explanation).
4.  Use the **APP URL** if the web URL needs to be changed.
5.  Use **CLI PATH** to set the path to the Cycode CLI executable. In cases where the CLI can’t be downloaded due to your network configuration (for example, due to firewall rules), use this option.
6.  Clear the **Scan on Save** option to prevent Cycode from scanning your code every time you save your work. Instead, use the **Scan on-Demand** option.
7.  In the **SCA Scan On Open** field, specify whether to perform a scan when a project opened.

Note

If the “Scan on Save File” option is enabled in the extension settings, Cycode will scan the file in focus (including manifest files, such as package.json and dockerfile) for hardcoded secrets. Package vulnerabilities (SCA) will only be scanned by Cycode if the file in focus is a manifest file (then the different scan types will run simultaneously).

📘 Using the VS Code Extension from EU tenants

If you’re accessing Cycode’s VS Code from an EU tenant, you’ll need to adjust the API and APP URLs to include the EU tag:

*   [https://api.eu.cycode.com/](https://api.eu.cycode.com/)
*   [https://app.eu.cycode.com/](https://app.eu.cycode.com/)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
