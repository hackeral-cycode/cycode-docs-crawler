# Create and manage custom policies | Cycode Docs

Source: https://docs.cycode.com/policies/create-and-manage-custom-policies

---

# Create and manage custom policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/policies/create-and-manage-custom-policies/_index.md "Edit this page")

Updated on Mar 23, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

If the list of policies doesn’t contain the policy you need, Cycode provides a way to create a custom policy according to your specifications. To view custom policies, go to **Policies > Policy management > Custom policies**.

You can create, edit, or delete a custom policy. You can also create a workflow and filter the main violations view based on a custom policy.

## Create a custom policy [Copied!](#create-a-custom-policy "Copy link to this section")

1.  In the **Custom Policies** page, click **Custom Policy** to launch the Custom Policy wizard.
    
2.  In the **Policy Type** page, select the type of policy you want to create and click **Next**.
    
3.  In the **Content** page, follow the instructions to define the policy that you want to add to the relevant scanner.
    
4.  In the **Details** page, provide the following additional attributes of the policy (some attributes may not be displayed, depending on the policy type):
    
    Item
    
    Description
    
    **Policy name**
    
    Type a name for the policy.
    
    **Description**
    
    (Optional) Type a description of the policy.
    
    **Company remediation guidelines**
    
    (Optional) If relevant, enter remediation guidelines for this policy. You can add links to explain the remediation by either pasting a link directly or typing the link in the following format:**[link name](the-link.com)** .
    
    **Policy severity**
    
    Select the severity level of the policy (**Critical**, **High**, **Medium**, **Low**, or **Info**).
    
    **Policy category**
    
    Select a category for the policy from the list.
    
    **Policy subcategory**
    
    (Optional) Select a subcategory from the list.
    
    **SDLC stages**
    
    (Optional) Select one or more SDLC stages that are relevant for this policy (**Code**, **Build**, **Artifacts**, **Cloud**, **Dependencies**).
    
5.  If you want to apply this new policy going forward only, enable the **Apply this policy for future violations only** option. If this option is disabled, Cycode will apply the new policy retroactively on existing violations in the platform.
    
6.  Click **Save**.
    

### Exclude a custom policy from a PR scan [Copied!](#exclude-a-custom-policy-from-a-pr-scan "Copy link to this section")

When PR scanning is enabled for any type of violation, all custom policies are applied to the PR scans with the custom name and description provided by the user who created the custom policy.

To exclude a custom policy from the PR scan, create a workflow in the Automation view. For information on how to create a workflow, go to [Create a workflow](/workflow-automation/create-a-workflow) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
