# SAST JSON | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/create-a-custom-connector/sast-json

---

# SAST JSON

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/create-a-custom-connector/sast-json.md "Edit this page")

Updated on Mar 9, 2026 • Published on May 4, 2025

* * *

If you are connecting Cycode to a SAST tool, the JSON file that you import should contain the following data.

## SAST properties [Copied!](#sast-properties "Copy link to this section")

Note

The file must contain either the **repository\_name** and **branch\_name** values, or the **file\_url** value.

Field

Description

Type

Required

`repository_name`

Name of the repository that Cycode will scan.

String

Yes

`file_path`

Path to the file that contains the violation.

String

Yes

`file_url`

URL address of the file in the SCM.

String

Yes

`start_line_number`

Line number where the vulnerability or violation begins (1-based).

Integer

Yes

`end_line_number`

Line number where the vulnerability or violation ends (1-based).

Integer

Yes

`start_column`

Column number where the vulnerability or violation begins.

Integer

No

`end_column`

Column number where the vulnerability or violation ends.

Integer

No

`language`

Programming language of the file, for example **Java**, **Python**, or **JavaScript**.

String

No

`cwe`

CWE identifier of the detected violation, for example **89** for **SQL injection**.

Integer

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

Enum

Yes

`branch_name`

Name of the code branch where the violation was detected.

String

Yes

`code_snippet`

The vulnerable code snippet.

String

No

`code_sha`

SHA hash of the code at detection time. Used to generate the correct code snippet if Cycode can’t retrieve it directly.

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
25
26
27
28
```

```json
[
  {
    "policy_unique_identifier": "234567",
    "policy_name": "SAST Custom Connector",
    "policy_description": "This is a test SAST policy for custom connector",
    "auto_resolve_if_absent": false,
    "detection_time": "2025-04-19T00:00:00Z",
    "severity": "Critical",
    "vulnerability_status": "Open",
    "remediation_guidelines": "These are the remediation guidelines for the SAST custom connector",
    "external_violation_link": "https://app-travis.octavius-industries.com/detection/92d71d3c-ba32-4b33-b08b-0d46c9021ac8",
    "violation_labels": [
      "travis_sast_custom_connect"
    ],
    "repository_name": "all-pr-scans-test",
    "file_path": "sast/ford_demo.java",
    "file_url": "https://github.com/hoarder-khaos/all-pr-scans-test/blob/main/sast%2Fford_demo.java#L74",
    "start_line_number": 74,
    "end_line_number": 74,
    "start_column": 5,
    "end_column": 5,
    "language": "Java",
    "cwe": 89,
    "scm_provider": "GitHub",
    "branch_name": "main",
    "code_snippet": "            java.util.Map<String, Object> results =\n                    org.owasp.benchmark.helpers.DatabaseHelper.JDBCtemplate.queryForMap(sql);\n            response.getWriter().println(\"Your results are: \");\n\n            java.util.Map<String, Object> results =\n                    org.owasp.benchmark.helpers.DatabaseHelper.JDBCtemplate.queryForMap(sql_two);\n            response.getWriter().println(\"Your results are: \");\n\n            //\t\tSystem.out.println(\"Your results are\");\n            response.getWriter()\n                    .println(org.owasp.esapi.ESAPI.encoder().encodeForHTML(results.toString()));"
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
