# Bug bounty JSON | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/create-a-custom-connector/bug-bounty-json

---

# Bug bounty JSON

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/create-a-custom-connector/bug-bounty-json.md "Edit this page")

Updated on Sep 18, 2025 • Published on May 4, 2025

* * *

If you are connecting Cycode to a bug bounty tool, the JSON file that you import should contain the following data.

## Bug bounty properties [Copied!](#bug-bounty-properties "Copy link to this section")

Field

Description

Type

Required

`asset_identifier`

Unique ID of the asset.

String

Yes

`program_name`

Name of the bug bounty application.

String

Yes

`cveIds`

CVE identifier(s) of the detected violation.

Array of strings

No

`asset_type`

The following values are supported:  
• Unknown  
• SourceCode  
• Website  
• Endpoint

Enum values

Yes

## Sample JSON file [Copied!](#sample-json-file "Copy link to this section")

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
```

```json
[
  {
    "policy_unique_identifier": "345678",
    "policy_name": "Bug Bounty Custom Connector",
    "policy_description": "This is a test Bug Bounty policy for custom connector",
    "auto_resolve_if_absent": false,
    "detection_time": "2025-04-19T00:00:00Z",
    "severity": "Critical",
    "vulnerability_status": "Open",
    "remediation_guidelines": "These are the remediation guidelines for the Bug Bounty custom connector",
    "external_violation_link": "https://app-travis.octavius-industries.com/detection/253e9968-be12-4b59-a36f-aebb0f4399a0",
    "violation_labels": [
      "travis_bug_custom_connect"
    ],
    "asset_identifier": "31d43879-fead-4abb-9867-c93bb0e52be4",
    "program_name": "Octavius Bug Bounty industries",
    "cveIds": ["CVE-2019-10173"],
    "asset_type": "Website"
  }
]
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
