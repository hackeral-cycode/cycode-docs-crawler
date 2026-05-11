# API security JSON | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/create-a-custom-connector/api-security-json

---

# API security JSON

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/create-a-custom-connector/api-security-json.md "Edit this page")

Updated on Sep 18, 2025 • Published on May 4, 2025

* * *

If you are connecting Cycode to an API security tool, the JSON file that you import should contain the following data.

## API security properties [Copied!](#api-security-properties "Copy link to this section")

Field

Description

Type

Required

`website`

Website that Cycode will scan.

String

Yes

`path`

Path of the API that Cycode will scan.

String

Yes

`method`

Call method of the API, for example GET or POST.

String

Yes

`api_type`

The type of API. The following values are supported:  
• Rest  
• GraphQL  
• Grpc

Enum values

Yes

`cwe`

CWE identifier(s) of the detected violation.

Array of strings

No

`impact`

Potential effect that the violation may have.

String

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
20
21
22
23
24
```

```json
[
  {
    "policy_unique_identifier": "345678",
    "policy_name": "API Security Custom Connector",
    "policy_description": "This is a test API Security policy for custom connector",
    "auto_resolve_if_absent": false,
    "detection_time": "2025-04-19T00:00:00Z",
    "severity": "Critical",
    "vulnerability_status": "Open",
    "remediation_guidelines": "These are the remediation guidelines for the API Security custom connector",
    "external_violation_link": "https://app-travis.octavius-industries.com/detection/6849fc0e-6e16-4769-b7b4-0cc620a9b41c",
    "violation_labels": [
      "travis_api_custom_connect"
    ],
    "website": "https://app-travis.octavius-industries.com",
    "path": "/detection/6849fc0e-6e16-4769-b7b4-0cc620a9b41c",
    "method": "GET",
    "api_type": "Rest",
    "cwe": [
      "CWE-89"
    ],
    "impact": "high"
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
