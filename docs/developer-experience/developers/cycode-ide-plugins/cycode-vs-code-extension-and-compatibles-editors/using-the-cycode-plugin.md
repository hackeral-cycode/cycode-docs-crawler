# Using the Cycode plugin | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/using-the-cycode-plugin

---

# Using the Cycode plugin

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/using-the-cycode-plugin.md "Edit this page")

Updated on May 29, 2024 • Published on May 29, 2024

* * *

## Running a Scan on Save [Copied!](#running-a-scan-on-save "Copy link to this section")

If the **Scan on Save File** option is enabled in the extension settings, Cycode will scan the file in focus (including manifest files, such as `package.json` and `dockerfile`) for hardcoded secrets. Package vulnerabilities (SCA) will only be scanned by Cycode if the file in focus is a manifest file (then the different scan types will run simultaneously).

When the setting Scan On Save is selected, as soon as you save your work, the secrets scan begins running automatically.

1.  The Cycode VS Code Extension will begin scanning your code, and will display a notification in the bottom menu process bar. Note that this scan occurs in the backend.

![](/assets/53ed1f2-image.png)

2.  Wait for the scan to complete and to display a success message:

![](/assets/9dfc012-image.png)

3.  Review the results of the scan, which are displayed as a toast at the bottom of your screen, and then follow the steps for [addressing the vulnerabilities](/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/viewing-and-handling-scan-results) .

![](/assets/bc462f4-image.png)

## Running an On-demand Scan [Copied!](#running-an-on-demand-scan "Copy link to this section")

1.  The first time you run an on-demand scan for vulnerabilities, do the following: open a file for editing and select **Scan for hardcoded secrets** or **Scan for package vulnerabilities** (for SCA).

![](/assets/a3f8546-vscode.png)

2.  Verify that the file you’re scanning is in focus, otherwise you’ll see the following message:

![](/assets/0bb14b4-image.png)

3.  The next time you want to run an on-demand scan, in the tree view, locate the desired file and click the Play button to run the scan.

![](/assets/96a1af1-image.png)

![](/assets/0bb14b4-image.png)

4.  Once the scan completes, follow the steps for [addressing the vulnerabilities](/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/viewing-and-handling-scan-results) .

See also [How to turn on debugging in Cycode’s VS Code Plugin](/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin/how-to-turn-on-debugging-in-cycode-jetbrains-ide-plugin) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
