# DAST JSON | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/create-a-custom-connector/dast-json

---

# DAST JSON

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/create-a-custom-connector/dast-json.md "Edit this page")

Updated on Sep 18, 2025 • Published on May 4, 2025

* * *

If you are connecting Cycode to a DAST tool, the JSON file that you import should contain the following data.

## DAST properties [Copied!](#dast-properties "Copy link to this section")

Field

Description

Type

Required

`website`

Website that Cycode will scan.

String

Yes

`path`

Full path to the location of the violation.

String

Yes

`cwe`

CWE identifier of the detected violation.

Integer

No

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
```

```json
[
  {
    "policy_unique_identifier": "345678",
    "policy_name": "DAST Custom Connector",
    "policy_description": "This is a test DAST policy for custom connector",
    "auto_resolve_if_absent": false,
    "detection_time": "2025-04-19T00:00:00Z",
    "severity": "Critical",
    "vulnerability_status": "Open",
    "remediation_guidelines": "These are the remediation guidelines for the DAST custom connector",
    "external_violation_link": "https://app-travis.octavius-industries.com/detection/6849fc0e-6e16-4769-b7b4-0cc620a9b41c",
    "violation_labels": [
      "travis_dast_custom_connect"
    ],
    "website": "https://app-travis.octavius-industries.com",
    "path": "/detection/6849fc0e-6e16-4769-b7b4-0cc620a9b41c",
    "cwe": 89
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
