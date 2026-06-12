# Field descriptions table | Cycode Docs

Source: https://docs.cycode.com/dashboards/custom-dashboards/field-descriptions-table

---

# Field descriptions table

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/custom-dashboards/field-descriptions-table.md "Edit this page")

Updated on Jan 21, 2026 • Published on Jan 11, 2026

* * *

## Custom Dashboards Fields [Copied!](#custom-dashboards-fields "Copy link to this section")

**Use custom dashboards fields to build powerful, flexible questions across your engineering and security data.**

You can create dashboard questions using the following **data sources:**

_**Branches, Clones, Commits, Member Public Repositories, Members, Organizations, Pull Requests, Repositories, Secret Values, Teams, and Violations.**_

**For each data source, you can:**

*   Filter results to focus on specific conditions
    
*   Summarize data using aggregations and metrics
    
*   Group by fields to analyze trends and patterns
    

_Below is a detailed breakdown of the **available fields for each data source**._

Data Source

Field Name

Description

Branches

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

SCM provider or tool that reported the violation.

Name

Human-readable name of the entity.

Open Violation Count

Current number of open violations associated with the branch or repository. Use **Equal** **0** to identify branches or repositories with no open violations.

Clones

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

Tool or scanned entity that reported the violation.

IP

IP address associated with the activity.

Is Shallow

Boolean flag indicating whether the repository or branch was cloned with a shallow history (i.e., only a subset of its commit history was downloaded).

Is Partial

Boolean flag indicating whether the repository was cloned using partial clone (i.e., some objects—typically blobs and/or trees—were intentionally omitted during clone/fetch and can be fetched on-demand from the remote).

Type

Type or classification used to categorize this entity.

Country Code

Additional contextual attribute describing this entity.

Commits

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

Tool or scanned entity that reported the violation.

Message

Text provided by the user at commit time describing the changes included in the commit.

Changed Files

Number of files that were modified as part of this commit.

Member Public Repositories

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

SCM provider or tool that reported the violation.

Name

Human-readable name of the entity.

Repository Name

Human-readable name of the repository.

Repository URL

URL of the repository where the violation was detected.

Organization Name

Human-readable name of the organization.

Members

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

SCM provider or tool that reported the violation.

Name

Human-readable name of the entity.

Username

The unique username of the entity in the source system.

Role

Role or permission level assigned to the entity.

Email

The email address associated with the entity.

Is Admin

Boolean flag indicating whether the user has administrative privileges.

Organizations

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

SCM provider or tool that reported the violation.

Name

Human-readable name of the entity.

Tier

Tier or plan level associated with the organization.

Description

Description of the organization.

Location

Geographical location or region of the organization.

Domain

Domain name associated with the organization.

Login

The login handle or identifier for the entity.

URL

Direct URL linking to the relevant resource in the source system.

Members Count

Total number of members associated with the entity.

Pull Requests

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

SCM provider or tool that reported the violation.

Name

Human-readable name of the entity.

Repository Name

Human-readable name of the repository.

Number

Sequential number assigned to the entity in the source system.

Status

Current status of the entity (e.g., open, closed, merged, active).

URL

Direct URL linking to the relevant resource in the source system.

Repositories

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

SCM provider or tool that reported the violation.

Name

Human-readable name of the entity.

Full Name

The complete name of the entity, often including its owner or namespace.

Description

Description of the repository.

Language

Primary programming language used in the entity.

Visibility

Visibility level of the entity (e.g., public, private, internal).

Is Fork

Boolean flag indicating whether the repository is a fork of another repository.

Is Archived

Boolean flag indicating whether the repository is archived.

URL

Direct URL linking to the relevant resource in the source system.

Default Branch

The name of the primary branch for the repository.

Open Violation Count

Current number of open violations associated with the branch or repository. Use **Equal** **0** to identify branches or repositories with no open violations.

Secret Values

Secret SHA

Hash of the detected secret used for tracking.

Plain Secret

The actual secret value detected.

Source

Tool or scanned entity that reported the violation.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Name

Human-readable name of the entity.

Teams

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Created

Timestamp indicating when this record was initially created in the system.

Last Updated

Timestamp indicating the most recent update to this record.

Source

SCM provider or tool that reported the violation.

Name

Human-readable name of the entity.

Violations

ID

Unique identifier of the entity within Cycode, used for correlation and internal references.

Detected At

The date and time when the violation was first detected and created in Cycode.

Updated At

The date and time when the violation was last updated in Cycode. Updates include any change to the violation, such as status, severity, comments, or other metadata.

Detection Rule ID

Unique identifier of the related detection rule entity.

Assignee ID

Unique identifier of the Cycode user assigned to this violation.

Category

Category classification of the violation.

Correlation Message

Short, human-readable summary describing the violation.

Labels

Tags applied to the violation for categorization or additional context.

Policy Labels

Labels associated with the policy that triggered this violation.

Project name

Additional contextual attribute describing this entity.

Provider

Technology or service provider associated with this entity.

Risk Score

Risk level calculated by Cycode based on multiple risk factors.

Risk Score Severity

Severity level indicating the potential impact or urgency.

SDLC Stages

Tag or label used for categorization and filtering.

Severity

Severity level indicating the potential impact of the violation.

Source Entity ID

Unique identifier of the related source entity entity.

Source Entity Name

Human-readable name of the source entity.

Source Entity Type

Type or classification used to categorize this entity.

Policy ID

Unique identifier of the related source policy entity.

Policy Name

Human-readable name of the source policy.

Status

Current lifecycle status of the violation in Cycode.

Status Change Message

Message recorded when the violation status last changed.

Status Reason

Current lifecycle or remediation status of the entity.

Status Updated At

The date and time when the violation status was last updated in Cycode. This value doesn’t reflect any other changes to the violation besides status.

Status Updated By ID

Unique identifier of the Cycode user who last updated the violation status.

Sub Category

Sub-category classification of the violation.

Tags

Tag or label used for categorization and filtering.

Type

Secret type associated with this violation (relevant for secrets violations only).

SLA Status

SLA status for this violation (e.g., OnTrack, NearToMiss, Missed).

First Closed At

Timestamp of the first time the violation status changed to Ignored or Resolved.

Priority

Optional user-defined priority for this violation (1 is highest). If not set, the value is null.

Author Email

Email address of the commit author associated with the code location where the violation was detected.

Author

Name of the commit author associated with the code location where the violation was detected.

Branch ID

Unique identifier of the related branch entity.

Branch Name

Human-readable name of the branch.

Branch URL

Direct URL linking to the relevant resource in the source system.

Build Tool

Build tool or package manager used for the project.

Channel Name

Human-readable name of the Slack channel.

Channel Type

Type of Slack channel (e.g., public, private, direct) categorizes this entity.

Commit ID

Identifier of the commit that introduced the violation.

Committer Name

Human-readable name of the committer.

Concrete Provider

Technology or service provider associated with this entity.

Container Image Digest

Container image or registry metadata associated with the detection.

Container Image Name

Human-readable name of the container image.

Container Image Version Name

Human-readable name of the container image version.

Container Image Version Tag

Container image or registry metadata associated with the detection.

Container Image Vulnerability CVSS Score

Security vulnerability identified in the scanned asset.

Container Image Vulnerability Description

Security vulnerability identified in the scanned asset.

Container Image Vulnerability ID

Unique identifier of the related container image vulnerability entity.

Container Image Vulnerability Severity

Severity level indicating the potential impact or urgency.

Container Registry ID

Unique identifier of the related container registry entity.

Container Registry Name

Human-readable name of the container registry.

Container Repository Name

Human-readable name of the container repository.

CVSS Score

CVSS score representing vulnerability severity.

CWE

Common Weakness Enumeration identifier.

Dependency Paths

Dependency chain leading to the vulnerable package.

Detection Source

Additional contextual attribute describing this entity.

Ecosystem

Runtime ecosystem associated with the package.

Enterprise Name

Human-readable name of the enterprise.

EPSS Info

Additional contextual attribute describing this entity.

Exploitability

Additional contextual attribute describing this entity.

Exploitability Maturity

Additional contextual attribute describing this entity.

External Scanner ID

Unique identifier of the related external scanner entity.

File Extension

File-level metadata indicating the location or context of the detection.

File Name

Name of the file where the violation was detected.

File Path

Path to the file containing the violation.

File Type

File format containing the violation.

File URL

Direct URL linking to the relevant resource in the source system.

First Time Checked As Revoked

Date and time associated with this event.

Has Fix In Version

Version identifier of the related component.

Is Dev Dependency

Boolean flag indicating whether the condition applies.

Is Direct Dependency

Boolean flag indicating whether the condition applies.

Is Remediable

Boolean flag indicating whether the condition applies.

Languages

Programming language associated with the asset.

Last Time Checked As Active

Date and time associated with this event.

Last Time Validity Checked

Date and time associated with this event.

Length

Additional contextual attribute describing this entity.

Line Number

Line number in the file where the violation was detected.

Line In File

File-level metadata indicating the location or context of the detection.

Line Type

Type or classification used to categorize this entity.

Manifest File Path

File-level metadata indicating the location or context of the detection.

Member Affiliation At Violation Time

User or organization member associated with this record.

Member Email

User or organization member associated with this record.

Member ID

Unique identifier of the related member entity.

Member Name

Human-readable name of the member.

Member Organizations

User or organization member associated with this record.

Organization ID

Unique identifier of the related organization entity.

Organization Name

Human-readable name of the organization.

OWASP

Additional contextual attribute describing this entity.

Package Ecosystem

Software package related to the vulnerability or detection.

Package Name

Human-readable name of the package.

Package Version

Version of the package containing the vulnerability.

Package Version ID

Unique identifier of the related package version entity.

Detection Policy ID

Unique identifier of the related detection policy entity.

Position In Line

Additional contextual attribute describing this entity.

Project Path

Filesystem or project path related to the entity.

Detection Provider

Technology or service provider associated with this entity.

Repository ID

Unique identifier of the related repository entity.

Repository Name

Human-readable name of the repository.

Repository Project ID

Unique identifier of the related repository project entity.

Secret SHA

Hash of the detected secret used for tracking.

Start Position

Additional contextual attribute describing this entity.

Timestamp

Date and time associated with this event.

URL

Direct URL linking to the relevant resource in the source system.

User Full Name

Human-readable name of the user full.

User Name

Human-readable name of the user.

Validation Status

Current lifecycle or remediation status of the entity.

Validity Failure Reason

Additional contextual attribute describing this entity.

Vulnerability Description

Detailed explanation of the vulnerability.

Vulnerability Fixed In Version

Security vulnerability identified in the scanned asset.

Vulnerability ID

Identifier of the detected vulnerability (for example, CVE).

Vulnerability Introduced Through

Security vulnerability identified in the scanned asset.

Vulnerable Component

Additional contextual attribute describing this entity.

Vulnerable Component Version

Version identifier of the related component.

Vulnerable Resource

Additional contextual attribute describing this entity.

Workspace Name

Human-readable name of the workspace.

Location Type

Type of source containing the violation.

Build Module Name

Human-readable name of the build module.

Comment URL

URL of the comment where the violation was detected.

Issue Creation Date

The date when the issue was originally committed in the source repository (based on the pull request commit). This filter is only applicable to code-related violations.

Repository URL

URL of the repository where the violation was detected.

Is Reachable

Boolean flag indicating whether the condition applies.

Infra Provider

Technology or service provider associated with this entity.

Page URL

URL of the page where the violation was detected.

Blog URL

URL of the blog post where the violation was detected.

Blog Title

Additional contextual attribute describing this entity.

Workflow Display Name

Human-readable name of the workflow display.

Cloud URL

URL of the cloud resource involved.

Cloud Provider

Technology or service provider associated with this entity.

Space URL

Direct URL linking to the relevant resource in the source system.

Page Title

Additional contextual attribute describing this entity.

Comment Title

Additional contextual attribute describing this entity.

Build Module Version

Version identifier of the related component.

Domain URL

URL of the tool or system where the violation was detected.

Space Name

Human-readable name of the space.

Pull Request URL

URL of the pull request created to resolve the violation.

Has Project

Boolean flag indicating whether a violation is associated with a Cycode project.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
