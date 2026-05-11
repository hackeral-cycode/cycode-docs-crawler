# CNAPP JSON | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/create-a-custom-connector/cnapp-json

---

# CNAPP JSON

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/create-a-custom-connector/cnapp-json.md "Edit this page")

Updated on Sep 18, 2025 • Published on May 4, 2025

* * *

If you are connecting Cycode to a CNAPP tool, the JSON file that you import should contain the following data.

## Container image properties [Copied!](#container-image-properties "Copy link to this section")

Field

Description

Type

Required

`container_repository`

Container repository with the image that Cycode will scan.

String

Yes

`container_digest`

Unique ID of the container.

String

Yes

`container_image_tag`

Tag of the image that Cycode will scan.

String

No

`package_name`

Name of the code package where the violation was detected.

String

Yes

`package_version`

Version of the code package where the violation was detected.

String

Yes

`fixed_in`

Version of the code package where the violation needs to be fixed.

String

No

`cve`

CVE identifier of the detected violation.

String

Yes

`cvss_score`

Risk score of the CVE identifier.

String

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
21
22
23
24
```

```json
[
  {
    "policy_unique_identifier": "345678",
    "policy_name": "Container Security Custom Connector",
    "policy_description": "This is a test Container Security policy for custom connector",
    "auto_resolve_if_absent": false,
    "detection_time": "2025-04-19T00:00:00Z",
    "severity": "Critical",
    "vulnerability_status": "Open",
    "remediation_guidelines": "These are the remediation guidelines for the Container Security custom connector",
    "external_violation_link": "https://app-travis.octavius-industries.com/detection/70b323b7-daa1-450e-81d3-a8658a99275b",
    "violation_labels": [
      "travis_cs_custom_connect"
    ],
    "container_repository": "my-test-container-repo",
    "container_digest": "100bc168adc71bca3926e27a255b145e0cf003718a1fe7d8fe2f1287c9ee2c0b",
    "container_image_tag": "0.1.8",
    "package_name": "com.thoughtworks.xstream:xstream",
    "package_version": "1.4.5",
    "fixed_in": "1.4.11",
    "cve": "CVE-2019-10173",
    "cvss_score": "9.2"
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
