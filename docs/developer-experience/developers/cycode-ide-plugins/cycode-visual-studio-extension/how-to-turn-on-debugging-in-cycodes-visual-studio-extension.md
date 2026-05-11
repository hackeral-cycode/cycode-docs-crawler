# How to turn on debugging in Cycode’s Visual Studio Extension | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/how-to-turn-on-debugging-in-cycodes-visual-studio-extension

---

# How to turn on debugging in Cycode’s Visual Studio Extension

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-ide-plugins/cycode-visual-studio-extension/how-to-turn-on-debugging-in-cycodes-visual-studio-extension.md "Edit this page")

Updated on Jul 10, 2024 • Published on Jul 3, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

This article covers how to turn debug logging on in the Cycode Visual Studio Extension.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   You will need to have the Cycode Visual Studio Extension installed on your Visual Studio instance

## Instructions [Copied!](#instructions "Copy link to this section")

1.  In the Visual Studio IDE, click the Cycode symbol that was added with the Cycode extension.
2.  Click the **Settings** icon button in the top right-hand corner of the sidebar:

![](/assets/image-259.png)

3.  Under the Additional Parameters settings, add the following: `--verbose`:  
    ![](/assets/image-261.png)
4.  Apply your settings.
5.  In the Dropdown bar, make sure you select Cycode.
6.  Reproduce the issue (for example run the scan again).
7.  Collect the logs and send them to Cycode.

## How to pull logs for the Cycode JetBrains Plugin [Copied!](#how-to-pull-logs-for-the-cycode-jetbrains-plugin "Copy link to this section")

1.  In the Menu, select **View > Output** and then select the Cycode pane.  
    ![](/assets/image-260.png)

This displays the output with the Cycode pane:  
![](/assets/image-262.png)

2.  Send this log with any ticket that is opened to Support to speed up the debugging process.

## Outcome [Copied!](#outcome "Copy link to this section")

After following these steps you will be able to gather the logs for the Cycode plugin from the Visual Studio Extension. This is useful when reporting issues with the plugin as you will be able to share detailed logs that will help Support investigate any issues.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
