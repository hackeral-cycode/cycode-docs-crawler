# AWS Cloud Provider | Cycode Docs

Source: https://docs.cycode.com/inventory/application-insights/non-human-identities-nhis/aws-cloud-provider

---

# AWS Cloud Provider

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/application-insights/non-human-identities-nhis/aws-cloud-provider.md "Edit this page")

Updated on Jan 20, 2026 • Published on Mar 6, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

When Cycode is integrated with AWS, it retrieves the following information and maps it to Cycode entities. You can also see the listed additional fields when you open the card for a specific NHI.

## NHI data [Copied!](#nhi-data "Copy link to this section")

Entity

Description

NHI category (Context Intelligence Graph)

Additional data in NHI card

IAM Roles

Temporary AWS identities with specific permissions are assigned through policies designed for least privileged access. They are commonly used for secure, short-term access to AWS resources.

IAM Role

DescriptionARNRole IDPathMaximum session durationTrusted entities

IAM Users

Persistent AWS identities tied to users or systems with long-term credentials. Each can have up to two active access keys for programmatic use.

IAM User

ARNUser IDPath

AWS Secret Access Key

Long-term AWS credentials paired with an access key for CLI or API interactions. They are tied to IAM users and enable direct AWS resource access.

Access Token

AWS access key IDLast used region

### NHI card [Copied!](#nhi-card "Copy link to this section")

You can click a row in the NHI table to view additional details. The NHI card has three tabs.

#### Overview [Copied!](#overview "Copy link to this section")

This tab shows various useful details. The tiles at the top of tab show the following information:

*   Date the NHI was last used
    
*   When the NHI was created
    
*   (AWS access key only) Whether the secret is still valid
    

Below the tiles are three areas that contain additional information.

### IAM user [Copied!](#iam-user "Copy link to this section")

**General info** The data shown in the General info section is based on the entity you are viewing. This is the data available for AWS access tokens assigned to IAM users.

Item

Description

SDLC stage

Cloud

Source

Where the NHI was found.

Type

Type of NHI (as it’s called in the source).

Description

Description of the NHI type.

Resource access

List of cloud services that the NHI can access.

Permission scope

List of AWS managed policies.

**IAM User info**

Item

Description

ARN

ARN of the AWS resource where the NHI was found.

User ID

Unique ID of the user that was assigned the access token.

Path

Path to the file that contains the access token.

Tags

If there are tags associated with the access token, they are listed here.

### IAM role [Copied!](#iam-role "Copy link to this section")

**General info** The data shown in the General info section is based on the entity you are viewing. This is the data available for AWS access tokens assigned to IAM roles.

Item

Description

SDLC stage

Cloud

Source

Where the NHI was found.

Type

Type of NHI (as it’s called in the source).

Description

Description of the NHI type.

Resource access

List of cloud services that the NHI can access.

Permission scope

List of AWS managed policies.

**IAM Role info**

Item

Description

ARN

ARN of the AWS resource where the NHI was found.

Role ID

Unique ID of the role associated with the access token.

Path

Path to the file that contains the access token.

Maximum session duration

Maximum length of the session allowed for trusted entities with this role.

Trusted entities

How many AWS services can assume the role.

### AWS access key [Copied!](#aws-access-key "Copy link to this section")

**General info** The data shown in the General info section is based on the entity you are viewing. This is the data available for AWS access keys.

Item

Description

Source

Where the NHI was found.

Type

Type of NHI (as it’s called in the source).

Description

Description of the NHI type.

**More info**

Item

Description

AWS access key ID

Unique ID of the access key.

Last used region

AWS cloud region where the access key was last used.

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
