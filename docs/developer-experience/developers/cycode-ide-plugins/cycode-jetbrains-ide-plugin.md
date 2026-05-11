# Cycode JetBrains IDE Plugin | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin

---

# Cycode JetBrains IDE Plugin

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin/_index.md "Edit this page")

Updated on Dec 25, 2025 • Published on Jun 24, 2024

* * *

🚧 Important

This feature is currently NEW.

## Introduction [Copied!](#introduction "Copy link to this section")

The Cycode IntelliJ Platform Plugin is a plugin for JetBrains IDEs (e.g., IntelliJ IDEA, PyCharm, WebStorm) that helps users to adopt a shift-left strategy, by enabling code scanning early in the development lifecycle. This strategy could significantly help businesses avoid costly repairs and potential complications down the line.

The Cycode IntelliJ Platform plugin scans your code for exposed secrets, passwords, tokens, keys, and other credentials, as well as open-source packages’ vulnerabilities. The extension provides functionalities such as:

*   Running a new scan from your IDE even before committing the code
    
*   Running an SCA scan (Beta)
    
*   Running a SAST scan
    
*   A violation card that enables in-depth violation analysis with remediation recommendations
    

The violation card also includes:

*   An option to ignore the current violation for secrets:
    
*   The CWE and CVE in the card are clickable and open detailed information:
    

Note

Performance improvements on SCA scans are currently in progress and will be delivered in our upcoming releases.

*   Running an Infrastructure as Code (IaC) scan (Beta)
    
*   Triggering a scan automatically whenever a file is saved
    
*   Highlighting vulnerable code in the editor - syntax highlighting for Cycode-specific code and configuration files, making it easy for users to identify and work with these files in their projects.
    
*   Removing a detected secret or ignoring it by secret value, rule (type) or by path
    
*   A field for Company Guidelines that displays your company’s custom remediation guidelines
    

Note

If you’re accessing Cycode’s JetBrains IDE Plugin from an EU tenant, you’ll need to adjust the API and APP URLs to include the EU tag:

Note

For the latest information about the supported features, see [Cycode developer support matrix](/developer-experience/developers/cycode-cli/cycode-cli-support-matrix-for-ides) .

## JetBrains IDE Plugin installation [Copied!](#jetbrains-ide-plugin-installation "Copy link to this section")

To install the Cycode IntelliJ Platform Plugin, follow these steps:

1.  Open the editor.
    
2.  Navigate to the Plugins section.
    
3.  In the left-hand sidebar of the Settings/Preferences dialog, select **Plugins**.
    
4.  Search for “Cycode” in the search bar.
    
5.  In the Plugins section, you’ll see a **Marketplace** tab. Click this tab, and then use the search bar at the top to search for the plugin you wish to install.
    
6.  Click the **Install** button next to the Cycode plugin and wait for the installation to complete.
    
7.  Restart the JetBrains editor.
    

## Authenticating with Cycode [Copied!](#authenticating-with-cycode "Copy link to this section")

To authenticate the Cycode IntelliJ Platform plugin:

1.  Open the editor.
    
2.  Click the Cycode icon in the left-hand sidebar.
    
3.  Click **Authenticate**.
    

## Configuring the plugin [Copied!](#configuring-the-plugin "Copy link to this section")

1.  To configure the plugin go to the plugin settings to change the default settings. In order to enter the Plugin settings, click on the Cycode icon app inside the IntelliJ application on the left side bar
    
2.  In the Additional Parameters field, you can submit additional CLI parameters, such as `--verbose mode` for debugging purposes.
    
    1.  Use the API URL field to change the base URL (on-premise Cycode customers see [this](/developer-experience/developers/cycode-ide-plugins/cycode-vs-code-extension-and-compatibles-editors/configuring-the-plugin-for-on-prem-customers) explanation).
        
    2.  Use the APP URL if the web URL needs to be changed.
        
    3.  Use CLI PATH to set the path to the Cycode CLI executable. In cases where the CLI can’t be downloaded due to your network configuration (for example, due to firewall rules), use this option.
        
3.  Clear the **Scan on Save** option to prevent Cycode from scanning your code every time you save your work. Instead, use the **Scan on-Demand** option.
    

Note

If the **Scan on Save File** option is enabled in the extension settings, Cycode will scan the file in focus (including manifest files, such as `package.json` and `dockerfile`) for hardcoded secrets.

## Usage [Copied!](#usage "Copy link to this section")

To use the Cycode IntelliJ Platform Plugin:

1.  Open the editor.
    
2.  Open a project that uses the Cycode platform.
    
3.  Open a file to scan.
    
4.  Press `Ctrl+S` (Windows) or `Cmd+S` (Mac) to save a file - this will trigger a scan automatically.
    

If the **Scan on Save File** option is enabled in the plugin settings, Cycode will scan the file in focus (including manifest files, such as `package.json` and `dockerfile`) for hardcoded secrets. Using **auto save** will also trigger a scan.

Wait for the scan to complete and to display a success message.

See also [How to pull logs for the Cycode JetBrains plugin](/developer-experience/developers/cycode-ide-plugins/cycode-jetbrains-ide-plugin/how-to-turn-on-debugging-in-cycode-jetbrains-ide-plugin#how-to-pull-logs-for-the-cycode-jetbrains-plugin) .

## Handling detected secrets [Copied!](#handling-detected-secrets "Copy link to this section")

The scan displays a list of hardcoded secrets found in the application code. Once the scan completes (either on save or on-demand), you’ll then see the violation(s) highlighted in your main window.

1.  Hover over the violation to see the violation summary.
    
    1.  To view the details of the violation, select it in the list.
    2.  Use the **Quick Fix** button to open the violation card.
    3.  If the violation is a secret, you can choose to ignore it - either by secret value, secret rule (i.e., secret type) or the specific file. Note that the ignore occurs locally on the developer’s machine.
2.  Go back to viewing the problem in the main window by clicking **View problem**. You can also view a summary of all the problems by selecting the **Problems** tab.
    

## Company guideline/remediation guidelines [Copied!](#company-guidelineremediation-guidelines "Copy link to this section")

If your company has set [custom remediation guidelines](/policies/manage-policies#setting-remediation-guidelines-aka-company-guideline) in the relevant policy, you’ll also see a field for Company Guidelines that contains the remediation guidelines you added.

![](/assets/77c9721-image.png)

Note that if you haven’t added any company guideline, this field will not appear in the JetBrains IDE Plugin.

## Actions toolbar [Copied!](#actions-toolbar "Copy link to this section")

The actions toolbar, a part of the Cycode console, includes the following functionality (highlighted in a red rectangle below):

*   Run/Stop on-demand scans buttons
    
*   Clear results button
    
*   Collapse/Expand results option
    
*   Home button (clicking this button will bring you back to the “Ready to scan” on-demand options, instead of the violation card)
    
*   Filters (by severity)
    
*   Settings button
    
*   Go to docs
    

![](/assets/ae8bbb7-image.png)

## Support [Copied!](#support "Copy link to this section")

If you encounter any issues or have any questions about the Cycode IntelliJ Platform Plugin, reach out to the Cycode support team at [support@cycode.com.](mailto:support@cycode.com.) .

## License [Copied!](#license "Copy link to this section")

The Cycode IntelliJ Platform Plugin is released under the MIT license. See the LICENSE file for more details.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
