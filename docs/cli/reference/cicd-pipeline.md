# CI/CD integration | Cycode Docs

Source: https://docs.cycode.com/cli/reference/cicd-pipeline

---

# CI/CD integration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/reference/cicd-pipeline.md "Edit this page")

* * *

Add Cycode security gates to your CI/CD pipeline to catch vulnerabilities before they merge.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   A Cycode service account with **Client ID** and **Client Secret**. See [Manage authentication](/cli/quickstart/cli-authentication/) .
*   Python 3.9+ available in the pipeline environment.

## GitHub Actions [Copied!](#github-actions "Copy link to this section")

Add a workflow file that scans every pull request.

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
```

```yaml
name: Cycode Security Scan

on:
  pull_request:
    branches: [main]

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Install Cycode CLI
        run: pip install cycode

      - name: Scan PR
        env:
          CYCODE_CLIENT_ID: ${{ secrets.CYCODE_CLIENT_ID }}
          CYCODE_CLIENT_SECRET: ${{ secrets.CYCODE_CLIENT_SECRET }}
        run: cycode scan path . --severity-threshold high
```

Store `CYCODE_CLIENT_ID` and `CYCODE_CLIENT_SECRET` as [encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) in your repository settings.

## GitLab CI [Copied!](#gitlab-ci "Copy link to this section")

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
```

```yaml
cycode-scan:
  stage: test
  image: python:3.11-slim
  variables:
    CYCODE_CLIENT_ID: $CYCODE_CLIENT_ID
    CYCODE_CLIENT_SECRET: $CYCODE_CLIENT_SECRET
  before_script:
    - pip install cycode
  script:
    - cycode scan path . --severity-threshold high
  rules:
    - if: $CI_MERGE_REQUEST_IID
```

Set `CYCODE_CLIENT_ID` and `CYCODE_CLIENT_SECRET` under **Settings > CI/CD > Variables** with the **Masked** flag enabled.

## Jenkins [Copied!](#jenkins "Copy link to this section")

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
```

```groovy
pipeline {
  agent any
  environment {
    CYCODE_CLIENT_ID     = credentials('cycode-client-id')
    CYCODE_CLIENT_SECRET = credentials('cycode-client-secret')
  }
  stages {
    stage('Cycode Scan') {
      steps {
        sh 'pip install cycode'
        sh 'cycode scan path . --severity-threshold high'
      }
    }
  }
}
```

Store credentials using the **Secret text** type in the Jenkins Credentials Manager and reference them by their ID.

## Scan options [Copied!](#scan-options "Copy link to this section")

**Fail only on High severity:**

```
1
```

```bash
cycode scan path . --severity-threshold high
```

**Never fail the pipeline (advisory mode):**

```
1
```

```bash
cycode scan path . --soft-fail
```

**Export results for GitHub Advanced Security or GitLab Security Dashboard:**

```
1
```

```bash
cycode scan path . --export-type json --export-file cycode-results.json
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
