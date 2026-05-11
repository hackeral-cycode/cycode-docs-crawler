# Webhooks | Cycode Docs

Source: https://docs.cycode.com/integrations/alerting-tools/webhooks

---

# Webhooks

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/alerting-tools/webhooks.md "Edit this page")

Updated on Mar 19, 2026 • Published on Mar 16, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Webhooks allow external services to be notified when violations are detected by Cycode. You can integrate webhooks to enable Cycode to send information about detected violations in your environments. After integration, you can organize and track relevant information in your monitoring service.

## Permissions [Copied!](#permissions "Copy link to this section")

The following permissions are needed to integrate a webhook with Cycode:

Permissions

Why is Access Required?

Write

Webhooks create a ticket or alert, so they require write access

## Integrate a webhook [Copied!](#integrate-a-webhook "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
2.  In the Alerting area, click **Webhook**.
3.  In the connection wizard, provide the following information:
    
    Item
    
    Description
    
    Integration name
    
    Type a meaningful name for the integration.
    
    Select Broker
    
    (Optional) If you’re using a Cycode Broker, select it here.
    
    Webhook URL
    
    Type the webhook URL.
    
    HTTP headers
    
    (Optional) Type your HTTP header key and value.
    
    HMAC secret key
    
    (Optional) Type the secret used to sign the webhook content
    
    HMAC header key
    
    Type the HTTP header used to transmit the HMAC hash.
    
    Signature prefix
    
    (Optional) Provide a custom prefix to prepend to the signature.
    
    Hash algorithm
    
    Provide the relevant hash algorithm. Supported options: - SHA256 - SHA1
    
4.  Click **Save**.

The **Webhooks** integrations area loads and shows that your integration is connected.

## Manually create a webhook alert [Copied!](#manually-create-a-webhook-alert "Copy link to this section")

### Create the alert [Copied!](#create-the-alert "Copy link to this section")

1.  Select a violation.
2.  Click **Open Ticket**.
3.  Click **Webhook alert**.
4.  Select your configured webhook integration.
5.  (Optional) Define a **Custom assignee field** — a list of assignee emails to include in the alert payload. This maps to the `custom_assignee_field` key in the outgoing JSON.
6.  Click **Send**.

The alert is sent immediately as an HTTP POST to your webhook URL, using the same payload structure as automation-triggered alerts, with the addition of the `custom_assignee_field` when provided:

```
1
2
3
4
5
6
```

```json
{
  "data": {
    ...
    "custom_assignee_field": ["alice@example.com", "bob@example.com"]
  }
}
```

## Webhook Event Payload [Copied!](#webhook-event-payload "Copy link to this section")

When a detection event is triggered, Cycode sends an HTTP POST request to your configured webhook URL. The payload wraps the detection object inside a `data` field.

```
1
2
3
```

```json
{
  "data": { /* detection object */ }
}
```

### Payload structure [Copied!](#payload-structure "Copy link to this section")

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
```

```json
{
  "data": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "source_policy_name": "SQL Injection Detection",
    "source_policy_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "source_policy_type": "SAST",
    "category": "SAST",
    "source_entity_name": "acme-backend",
    "source_entity_id": "org/acme-backend",
    "detection_unique_id": "det-abc123",
    "detection_type_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "status": "Open",
    "status_change_message": null,
    "source_entity_type": "Repository",
    "severity": "High",
    "remediable": false,
    "correlation_message": "SQL Injection vulnerability found in UserService.java",
    "is_hidden": false,
    "provider": "GitHub",
    "type": "SAST",
    "detection_rule_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "assignee_id": null,
    "scan_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "link": "https://app.cycode.com/detections/3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "remediation_guideline": "Use parameterized queries instead of string concatenation.",
    "status_reason": null,
    "risk_score": 8.5,
    "risk_score_severity": "High",
    "project_ids_str": ["project-123"],
    "detection_timestamp": "2026-02-25T12:00:00Z",
    "text": "SQL Injection vulnerability found in UserService.java. Link: https://app.cycode.com/detections/3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "detection_details": {
      "repository_name": "acme-backend",
      "branch_name": "main",
      "file_name": "UserService.java",
      "file_url": "https://github.com/acme/acme-backend/blob/main/src/UserService.java",
      "cwe": ["CWE-89: SQL Injection"],
      "owasp": ["A03:2021 - Injection"],
      "languages": ["java"]
    }
  }
}
```

### Detection fields [Copied!](#detection-fields "Copy link to this section")

Field

Description

Type

id

Unique identifier for the detection.

UUID

source\_policy\_name

Name of the policy that triggered the detection.

String

source\_policy\_id

Unique identifier of the policy.

UUID

source\_policy\_type

Type of the policy.

String

category

Detection category (SAST, SCA, SecretDetection, IaC, Container Security, CI/CD Security, API Security, DAST, BugBounty, Cloud Security, DataSecurity).

String

source\_entity\_name

Name of the source entity (for example, repository name).

String

source\_entity\_id

Identifier of the source entity.

String

detection\_unique\_id

Unique detection identifier.

String

detection\_type\_id

Detection type identifier.

UUID

status

Detection status (Open, Resolved, Dismissed).

Enum

status\_change\_message

Message explaining the status change.

String

source\_entity\_type

Type of the source entity.

String

severity

Severity level of the detection.

String

remediable

Whether the detection can be auto-remediated.

Boolean

correlation\_message

Summary of the detection.

String

is\_hidden

Whether the detection is hidden from default views.

Boolean

provider

SCM or integration provider.

String

type

Detection type.

String

detection\_rule\_id

Detection rule identifier.

UUID

assignee\_id

Identifier of the assigned user.

String

scan\_id

Identifier of the scan that produced the detection.

UUID

link

Direct URL to the detection in Cycode.

String

remediation\_guideline

Guidance for remediating the detection.

String

status\_reason

Reason for the current status.

String

risk\_score

Numeric risk score.

Double

risk\_score\_severity

Risk score severity level.

String

project\_ids\_str

List of associated project identifiers.

List

detection\_timestamp

Timestamp of when the detection occurred (ISO 8601).

DateTime

text

Brief summary in the format “{correlation\_message}. Link: {link}”.

String

detection\_details

Category-specific detection details. See below.

### Detection details by category [Copied!](#detection-details-by-category "Copy link to this section")

The `detection_details` object contains fields that vary, depending on the detection category.

Note

All fields in the detection details are optional, and are included only when relevant to the specific detection category. Fields that aren’t applicable to a given category are omitted from the payload.

#### SAST [Copied!](#sast "Copy link to this section")

Field

Description

Type

repository\_id

Repository identifier.

String

repository\_name

Repository name.

String

branch\_name

Branch name.

String

branch\_ref

Branch reference.

String

file\_name

Name of the file containing the detection.

String

file\_url

URL to the file in the SCM.

String

cwe

CWE identifiers (for example, \[“CWE-89: SQL Injection”\]).

List

owasp

OWASP categories (for example, \[“A03:2021 - Injection”\]).

List

languages

Programming languages.

List

#### SCA [Copied!](#sca "Copy link to this section")

Field

Description

Type

repository\_name

Repository name.

String

repository\_url

URL to the repository.

String

file\_path

Path to the manifest/lock file.

String

file\_url

URL to the file in the SCM.

String

package\_name

Name of the vulnerable package (for example, com.h2database:h2).

String

package\_version

Version of the vulnerable package (for example, 2.1.214).

String

is\_direct\_dependency\_str

Whether this is a direct dependency (Yes/No).

String

is\_dev\_dependency

Whether this is a development dependency.

Boolean

is\_dev\_dependency\_str

String representation of is\_dev\_dependency.

String

dependency\_paths

Dependency chain showing how the package is included.

String

unique\_resource\_id

Unique resource identifier.

String

build\_tool

Build tool used (for example, Maven).

String

project\_path

Project path.

String

line

Line number in the manifest file.

Integer

line\_in\_file

Line number within the file.

Integer

vulnerable\_component

Name of the vulnerable component.

String

vulnerable\_component\_version

Version of the vulnerable component.

String

cwe

CWE identifiers.

List

owasp

OWASP categories.

List

epss\_info

EPSS information (e.g., {“epss”: 0.50002}).

Object

ossf

OpenSSF scorecard information.

Object

#### Secret detection [Copied!](#secret-detection "Copy link to this section")

Field

Description

Type

repository\_name

Repository name.

String

branch\_name

Branch name.

String

branch\_ref

Branch reference.

String

file\_name

File name.

String

file\_path

Full file path.

String

url

Repository URL.

String

line

Line number.

Integer

line\_in\_file

Line number within the file.

Integer

provider

Source control provider (for example, BitbucketCloud).

String

commit\_id

Commit SHA where the secret was detected.

String

member\_name

Team member name.

String

member\_email

Team member email.

String

author\_name

Commit author name.

String

author\_email

Commit author email.

String

committer\_name

Committer name.

String

committed\_at

Commit timestamp.

DateTime

completed\_at

Detection completion timestamp.

DateTime

job\_url

CI/CD job URL.

String

member\_affiliation\_at\_violation\_time

Member affiliation status at time of violation.

String

validation\_status

Secret validation status (for example, NotSupported).

String

#### IaC [Copied!](#iac "Copy link to this section")

Field

Description

Type

repository\_name

Repository name.

String

branch\_name

Branch name.

String

file\_name

File name.

String

failure\_property\_path

Property path where the failure was detected (for example, resource.aws\_s3\_bucket.versioning.mfa\_delete).

String

infra\_provider

Infrastructure provider (for example, Terraform).

String

current\_property\_value

Current value of the failing property.

Any

#### Container security [Copied!](#container-security "Copy link to this section")

Field

Description

Type

vulnerability\_description

Description of the vulnerability.

String

container\_image\_version\_vulnerability\_severity

Severity of the image vulnerability.

String

container\_image\_version\_vulnerability\_cvss\_score

CVSS score.

String

vulnerable\_component

Name of the vulnerable component.

String

vulnerable\_component\_version

Version of the vulnerable component.

String

vulnerability\_fixed\_in\_version

Version that fixes the vulnerability.

String

container\_image\_digest

Image digest hash.

String

vulnerability\_id

CVE identifier (for example, CVE-2023-26965).

String

container\_repository\_name

Container repository name.

String

docker\_repository

Docker repository name.

String

container\_image\_version\_tag

Image version tag.

String

first\_patched\_version

First patched version.

String

#### CI/CD security [Copied!](#cicd-security "Copy link to this section")

Field

Description

Type

build\_module

Build module name (for example, actions/setup-java).

String

build\_module\_version

Build module version.

String

build\_workflow

Workflow name (for example, SonarQube).

String

build\_workflow\_path

Path to the workflow file (for example, .github/workflows/build.yml).

String

#### API security [Copied!](#api-security "Copy link to this section")

Field

Description

Type

base\_url

Base URL of the API.

String

api\_method

HTTP method (for example, POST).

String

service\_name

Service name.

String

cvss\_score

CVSS score.

Double

is\_endpoint\_encrypted

Whether the endpoint uses encryption.

Boolean

endpoint\_names

List of endpoint names.

List

#### DAST [Copied!](#dast "Copy link to this section")

Field

Description

Type

base\_url

Base URL of the application.

String

endpoint\_name

Endpoint name.

String

cwe

CWE identifiers.

List

owasp

OWASP categories.

List

#### Bug bounty [Copied!](#bug-bounty "Copy link to this section")

Field

Description

Type

asset\_identifier

Asset identifier (for example, URL of the vulnerable endpoint).

String

asset\_type

Asset type (for example, Endpoint).

String

#### Cloud security [Copied!](#cloud-security "Copy link to this section")

Field

Description

Type

resource\_node\_type

Resource type in cloud configuration (for example, google\_compute\_firewall).

String

#### Data security (leaks) [Copied!](#data-security-leaks "Copy link to this section")

Field

Description

Type

member\_name

Team member name.

String

member\_nickname

Team member nickname.

String

clone\_percentage\_threshold

Clone percentage threshold.

Double

time\_frame\_in\_minutes

Time frame for the detection analysis.

Integer

cloned\_repositories

List of cloned repository names.

List

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
