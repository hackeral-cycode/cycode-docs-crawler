# SCA JSON | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/create-a-custom-connector/sca-json

---

# SCA JSON

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/create-a-custom-connector/sca-json.md "Edit this page")

Updated on Sep 18, 2025 • Published on May 4, 2025

* * *

If you are connecting Cycode to an SCA tool, the JSON file that you import should contain the following data.

## SCA properties [Copied!](#sca-properties "Copy link to this section")

Field

Description

Type

Required

`project_name`

Name of the project that Cycode will scan.

String

Yes

`repository_name`

Name of the repository that Cycode will scan.

String

Yes

`repository_path`

Path to the source code in the repository.

String in URI format

Yes

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

`vulnerability_identifier`

Any identifier that is used in the source system, such as CWE or CVE. There can be multiple values.

Array of strings

Yes

`score`

Risk score of the vulnerability identifier.

Number

Yes

`ecosystem`

The software ecosystem where the open-source code resides.\*

String

Yes

`file_path`

Path to the file.

String

Yes

`file_url`

URL address of the file.

String

No

`start_line_number`

Line number where the violation begins.

String

No

`end_line_number`

Line number where the violation ends.

String

No

`scm_provider`

The following values are supported:  
• GitHub  
• GitHub Enterprise  
• BitBucket  
• BitBucket Server  
• GitLab  
• GitLab Self-Managed  
• Azure DevOps  
• Azure DevOps Server

Enum values

Yes

`code_snippet`

Indicate both the start and end line of the code to pull the code itself (not just the line numbers).

String

No

`code_sha`

If a code snippet can’t be pulled, this is the property Cycode needs in order to generate the correct code snippet.

String

No

### Supported software ecosystems [Copied!](#supported-software-ecosystems "Copy link to this section")

For a complete list of software ecosystems that Cycode supports, go to [Supported ecosystems/package managers](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/) .

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
25
26
27
28
29
30
31
32
33
```

```json
[
  {
    "policy_unique_identifier": "123456",
    "policy_name": "SCA Custom Connector",
    "policy_description": "This is a test SCA policy for custom connector",
    "auto_resolve_if_absent": false,
    "detection_time": "2025-04-19T00:00:00Z",
    "severity": "Critical",
    "vulnerability_status": "Open",
    "remediation_guidelines": "These are the remediation guidelines for the SCA custom connector",
    "external_violation_link": "https://app-travis.octavius-industries.com/detection/0b031f3b-7c81-409d-ae16-99ff8a42e20b",
    "violation_labels": [
      "travis_custom_connector"
    ],
    "project_name": "sca",
    "repository_name": "all-pr-scans-test",
    "repository_path": "sca",
    "package_name": "com.thoughtworks.xstream:xstream",
    "package_version": "1.4.5",
    "fixed_in": "1.4.11",
    "vulnerability_identifier": [
      "CVE-2019-10173"
    ],
    "score": 9.4,
    "ecosystem": "Maven",
    "file_path": "sca/pom.xml",
    "file_url": "https://github.com/hoarder-khaos/all-pr-scans-test/blob/main/sca%2Fpom.xml#L184",
    "start_line_number": 184,
    "end_line_number": 184,
    "scm_provider": "GitHub",
    "code_snippet": "      \n        com.nulab-inc\n        zxcvbn\n        ${zxcvbn.version}\n      \n      \n        com.thoughtworks.xstream\n        xstream\n        ${xstream.version}\n      \n      "
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
