# AWS Secrets Manager | Cycode Docs

Source: https://docs.cycode.com/inventory/application-insights/non-human-identities-nhis/aws-secrets-manager

---

# AWS Secrets Manager

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/application-insights/non-human-identities-nhis/aws-secrets-manager.md "Edit this page")

Updated on Jan 20, 2026 • Published on Mar 6, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

When Cycode is integrated with AWS Secrets Manager, it retrieves the following information and maps it to a Cycode entity. You can also see the listed additional fields when you open the card for a specific NHI.

Entity

Description

NHI category (Context Intelligence Graph)

Additional data in NHI card

AWS managed secret

A securely stored secret in AWS Secrets Manager, offering automated rotation and controlled access through AWS APIs.

Managed Secret

Rotation enabledARNLast change dateRegion

### NHI card [Copied!](#nhi-card "Copy link to this section")

You can click a row in the NHI table to view additional details. The NHI card has three tabs.

#### Overview [Copied!](#overview "Copy link to this section")

This tab shows various useful details. The tiles at the top of tab show the following information:

*   Date the NHI was last used
    
*   When the NHI was created
    
*   Last time the key was rotated
    

Below the tiles are three areas that contain additional information.

### General info [Copied!](#general-info "Copy link to this section")

The data shown in the General info section is based on the entity you are viewing. This is the information shown for managed secrets.

Item

Description

Source

AWS resource where the NHI was found.

Type

Type of NHI (as it’s called in the source).

Description

Description of the NHI type.

### Managed secret info [Copied!](#managed-secret-info "Copy link to this section")

Item

Description

Rotation enabled

**Yes** or **No**.

ARN

ARN of the AWS resource where the NHI was found.

Last change date

Path to the source code where the NHI was found.

Region

AWS cloud region where the source code resides.

**Exposure/Correlation path**

The exposure path provides the context of the NHI through its correlation path, such as such as usage, dependencies, ownership, and resource access. You can see how the NHI was introduced, and what is exposed as a result.

#### Comments [Copied!](#comments "Copy link to this section")

Use the Comments tab to share insights and other information about this NHI with others in your organization.

#### Graph [Copied!](#graph "Copy link to this section")

The Graph tab shows a relationship graph where you can see how the NHI is utilized, and the point of exposure that creates the risk.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
