# Secret value card | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-value-card

---

# Secret value card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-value-card.md "Edit this page")

Updated on Nov 17, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Secret Value Card consolidates all open violations with the same Secret SHA into one view. Instead of analyzing individual violations separately, the card aggregates them into one place so you can:

*   Understand the overall risk of a secret.
    
*   View all violations of the secret across sources.
    
*   See relevant context and metadata
    
*   Take remediation actions such as ignoring or resolving the secret.
    

Note

The Secret Value Card always shows all open violations with the same Secret SHA It is not limited by filters applied on the main Violations page to ensure you always see the full scope of exposure for that secret.

To open the secret value card, click the button in the top right corner of the secret violation card.

## Tabs [Copied!](#tabs "Copy link to this section")

### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab shows the information about the violation itself.

#### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

The following summary tiles provide at-a-glance details.

Field

Description

**Max risk score**

The highest risk score assigned to this secret value’s violations.

**Secret validity**

Whether the secret is active or inactive.

**Exists in latest code**

How many instances of this secret value were detected in the current codebase.

**Publicly exposed**

How many instances of this secret value were found in public repos or tagged **Publicly exposed**.

**Filtered violations**

Number of detected violations containing this secret value across your organization.

**Sources**

How many SCMs contain this secret value.

#### Secret value details [Copied!](#secret-value-details "Copy link to this section")

The following additional information is displayed:

Field

Description

Code snippet

Code snippets of the violations where the secret was detected. Includes diffs of all occurrences, with the newest diff displayed by default.

**Secret Value**

The full secret SHA.

**Where**

Shows the following information about where the secret value was detected:**Cycode project**: Lists the projects and associated repositories where the secret value was detected.**Source**: Shows where the code with the secret value is, for example in a Docker image or Github repository.**Location**: Shows all the location-related tags that were applied to the secret value.

**Who**

Authors: Users associated with the initial commit containing the secret value.

**When**

Shows the following information about when the secret value was detected:**First detection**: Time and date when the secret value was initially detected.**Last detection**: Time and date when the secret value was last detected.

**Exposure Path**

(For secrets detected in code, build, and artifact integrations) Where the violation is located, where it may be exposed, and the relationships between these points.

### Risk analysis tab [Copied!](#risk-analysis-tab "Copy link to this section")

This tab highlights the risk factors and how risk was calculated for this secret value.

#### Summary tiles [Copied!](#summary-tiles-1 "Copy link to this section")

Field

Description

**Max risk score**

The highest risk score assigned to this secret value’s violations.

**Secret validity**

Whether the secret is active or inactive.

**Filtered violations**

Number of detected violations containing this secret value across your organization.

#### Risk factors [Copied!](#risk-factors "Copy link to this section")

Field

Description

**Risk summary**

Request a simplified explanation from Cycode AI, with all factors explained.

**Max risk factors**

Shows all the attributes and how impactful they were in determining the maximum risk score.

### Violations tab [Copied!](#violations-tab "Copy link to this section")

The Violations tab lists all the violations that contain this secret value. You can manage the violations directly from the tab, without having to go to the main Violations view.

The total number of associated violations is shown on the right and isn’t affected by filtering.

### Remediation tab [Copied!](#remediation-tab "Copy link to this section")

If there are company guidelines for remediation, they are shown in the Remediation tab.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
