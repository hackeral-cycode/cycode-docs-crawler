# Using the Visual Studio Extension | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/using-the-visual-studio-extension

---

# Using the Visual Studio Extension

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/using-the-visual-studio-extension.md "Edit this page")

Updated on Jul 10, 2024 • Published on Jul 3, 2024

* * *

## Usage [Copied!](#usage "Copy link to this section")

To use the Cycode Visual Studio Extension, follow these steps:

1.  Open the editor.
2.  Open a project that uses the Cycode platform.
3.  Open a file to scan.
4.  Press Ctrl+S to save a file.
    1.  A scan will automatically be triggered.
    2.  If the “Scan on Save” option is enabled in the extension settings, Cycode will scan the file in focus (including manifest files, such as package.json and dockerfile) for hardcoded secrets.  
        This also applies to auto-save.
5.  Wait for the scan to complete and to display a success message.

### Handling detected secrets [Copied!](#handling-detected-secrets "Copy link to this section")

1.  The scan displays a list of hardcoded secrets found in the application code.
2.  Once the scan completes (either on-save or on-demand), you’ll then see the violation(s) displayed in the **Error List** window.
3.  To view the details of the violation, double click it in the list.
4.  Next, take an action on the detected violation(s).

## Support [Copied!](#support "Copy link to this section")

If you encounter any issues or have any questions about the Cycode Visual Studio Extension, contact the Cycode support team at [support@cycode.com](mailto:support@cycode.com) .

## License [Copied!](#license "Copy link to this section")

The Cycode Visual Studio Extension is released under the MIT license. See the [LICENSE](https://github.com/cycodehq/visual-studio-extension/blob/main/LICENSE) file for more details.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
