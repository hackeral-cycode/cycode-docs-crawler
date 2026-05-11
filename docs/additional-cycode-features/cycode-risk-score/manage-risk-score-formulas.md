# Manage risk score formulas | Cycode Docs

Source: https://docs.cycode.com/additional-cycode-features/cycode-risk-score/manage-risk-score-formulas

---

# Manage risk score formulas

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/additional-cycode-features/cycode-risk-score/manage-risk-score-formulas.md "Edit this page")

Updated on Apr 1, 2026 • Published on Jul 22, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The standard Cycode risk score uses a general formula to calculate the risk score for violations. You can modify this formula to reflect your own organization’s specific risk tolerance.

## Modify the risk score formula [Copied!](#modify-the-risk-score-formula "Copy link to this section")

You can change the maximum risk score for a risk category, adjust the weights of built-in risk factors, and enable or disable individual risk factors within a risk category.

1.  In the Settings view, go to **Security posture**\>**Risk score**.
    
2.  Click a risk category to open the settings page for that category.
    
3.  To change the maximum risk score settings, click **Edit formula**.
    
4.  In the **Maximum risk score** area, click the risk score and use the slider to adjust the value.
    
5.  In the **Risk factors**area, you can enable or disable factors and adjust the weight of built-in factors to control their impact on the risk score. Weights range from\*\*- 1\*\*(strongest negative impact) to**1**(strongest positive impact), while**0** makes the factor neutral.
    
6.  Click **Test and save**.
    
7.  In the **Test risk score changes**window, you can optionally adjust the list of violations if necessary, then click**Test**.
    
8.  After you review the test results, click **Save changes**, then click**Confirm**.
    

## Create a custom risk factor [Copied!](#create-a-custom-risk-factor "Copy link to this section")

You can create a custom risk factor within a risk category, based on labels.

1.  In the Settings view, go to **Security posture**\>**Risk score**.
    
2.  Click a risk category to open the settings page for that category.
    
3.  Click **Edit formula**, then click**Create risk factor** in the risk factors area.
    
4.  Configure the following:
    
    Parameter
    
    Description
    
    **Name**
    
    Give the risk factor a descriptive name.
    
    **Description**
    
    Provide a description, which will be displayed in the risk factor tooltip in the category’s list of risk factors.**Note**: If you don’t add a description, Cycode applies the following default text: “This risk factor is based on the presence or absence of the {selected label} label”
    
    **Configure the risk factor**
    
    Select a label from the list, and define the weight of the risk factor based on whether it is detected/not detected in the environment.
    
5.  Click **Create**. The new risk factor is added to the list of risk factors for that category.
    

## Update the risk score formula version [Copied!](#update-the-risk-score-formula-version "Copy link to this section")

Cycode periodically modifies the risk score formula to ensure that it reflects the most current risk factors and their effect on security posture. Advance notice is provided before updates are released.

You can configure the platform to apply these updates automatically, or you can opt to apply the updates manually as they become available.

Note

Updates aren’t applied automatically to risk categories with customized settings, but are only applied to risk categories with default settings. You can always restore a customized risk category to the default setting.

### Enable automatic updates [Copied!](#enable-automatic-updates "Copy link to this section")

1.  In the Settings view, go to **Security posture**\>**Risk score**.
    
2.  In the **Risk score formula version**area, enable the**Automatic updates** option.
    

### Apply updates manually [Copied!](#apply-updates-manually "Copy link to this section")

1.  In the Settings view, go to **Security posture**\>**Risk score**.
    
2.  In the **Risk score formula version**area, if a new version is available click**Review and update**.
    
3.  To review the changes in the new version, click **Show changes**.
    
4.  When you finish reviewing the changes, click **Update** to apply the new version.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
