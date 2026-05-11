# Setting up CIMON | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/overview/setting-up-cimon

---

# Setting up CIMON

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/overview/setting-up-cimon.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Getting started with CIMON is as easy as copying and pasting a snip.

CIMON can be configured to run in two modes: Detect Mode and Prevent Mode. Choose the mode that aligns with your specific use case and security requirements.

Note

To get CIMON to learn your pipeline, we recommend starting it in Detect Mode before proceeding to Prevent Mode.

## Supported build platforms [Copied!](#supported-build-platforms "Copy link to this section")

CIMON supports the following build platforms:

*   GitHub Actions
*   Azure Pipelines
*   Jenkins
*   GitLab

For more detailed information, see Integrations.

## Detect Mode [Copied!](#detect-mode "Copy link to this section")

In Detect Mode, CIMON will analyze your build without taking preventative actions. This mode is well-suited for identifying the configurations that should be applied when transitioning to Prevent Mode.

Copy the snippet below and paste it into your build configuration file:

**GitHub Actions**

```
1
2
3
4
```

```yaml
- uses: cycodelabs/cimon-action@v0
  with:
    client-id: ${{ secrets.CIMON_CLIENT_ID }}
    secret: ${{ secrets.CIMON_SECRET }}
```

**Azure Pipelines**

```
1
2
3
4
```

```yaml
- uses: Cimon@0
  inputs:
    clientId: $(CIMON_CLIENT_ID)
    secret: $(CIMON_SECRET)
```

**Jenkins**

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
```

```groovy
stages {
    stage('Install Cimon') {
        steps {
            sh 'curl -sSfL https://cimon-releases.s3.amazonaws.com/install.sh | sudo sh -s -- -b /usr/local/bin'
        }
    }
    stage('Run Cimon') {
        environment {
            CIMON_CLIENT_ID = credentials("cimon-client-id")
            CIMON_SECRET = credentials("cimon-secret")
        }
        steps {
            sh 'sudo -E cimon agent start-background'
        }
    }
}
post {
    always {
        sh 'sudo -E cimon agent stop'
    }
}
```

**GitLab CI**

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
variables:
  CIMON_CLIENT_ID: $CIMON_CLIENT_ID
  CIMON_SECRET: $CIMON_SECRET

install_and_start_cimon:
  before_script: |
    apt update && apt install curl jq -y
    curl -sSfL https://cimon-releases.s3.amazonaws.com/install.sh | sh -s -- -b /usr/local/bin
    cimon agent start-background
  script: |
    curl -sm 1 https://cycode.com > /dev/null || true
    cimon agent stop
```

## Prevent Mode [Copied!](#prevent-mode "Copy link to this section")

In Prevent Mode, CIMON identifies and prevents potential attacks proactively, and will block any unauthorized network connection during the build process.

Copy the snippet below and paste it into your build configuration file:

**GitHub Actions**

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
```

```yaml
- uses: cycodelabs/cimon-action@v0
  with:
    client-id: ${{ secrets.CIMON_CLIENT_ID }}
    secret: ${{ secrets.CIMON_SECRET }}
    prevent: true
    allowed-hosts: >
      objects.githubusercontent.com
      proxy.golang.org
      storage.googleapis.com
    allowed-ips: >
      34.121.34.97
```

**Azure Pipelines**

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
```

```yaml
- uses: Cimon@0
  inputs:
    prevent: true
    allowedHosts: >
      objects.githubusercontent.com
      proxy.golang.org
      storage.googleapis.com
    allowedIps: >
      34.121.34.97
```

**Jenkins**

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
```

```groovy
environment {
    CIMON_PREVENT = "1"
    CIMON_ALLOWED_HOSTS = """
        github.com
        registry.npmjs.org
        cycode.com
    """
    CIMON_ALLOWED_IPS = """
        34.121.34.97
    """
}
stages {
    stage('Install Cimon') {
        steps {
            sh 'curl -sSfL https://cimon-releases.s3.amazonaws.com/install.sh | sudo sh -s -- -b /usr/local/bin'
        }
    }
    stage('Run Cimon') {
        environment {
            CIMON_CLIENT_ID = credentials("cimon-client-id")
            CIMON_SECRET = credentials("cimon-secret")
        }
        steps {
            sh 'sudo -E cimon agent start-background'
        }
    }
}
post {
    always {
        sh 'sudo -E cimon agent stop'
    }
}
```

**GitLab CI**

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

```yaml
variables:
  CIMON_CLIENT_ID: $CIMON_CLIENT_ID
  CIMON_SECRET: $CIMON_SECRET
  CIMON_PREVENT: 1
  CIMON_ALLOWED_HOSTS: |
    github.com
    registry.npmjs.org
    cycode.com
  CIMON_ALLOWED_IPS: |
    34.121.34.97

test:
  before_script: |
    curl -sSfL https://cimon-releases.s3.amazonaws.com/install.sh | sh
    ./bin/cimon agent start-background
  script: |
    curl -sm 1 https://34.121.34.97 || true
  after_script: |
    ./bin/cimon agent stop
```

## Save and run [Copied!](#save-and-run "Copy link to this section")

Save the changes to your configuration file, trigger the build, and watch CIMON work its magic!

## View results [Copied!](#view-results "Copy link to this section")

After the build is complete, navigate to the Cycode platform and the Graph view. You can filter for Build Report and investigate all CIMON reports, which include network connections, processes, and additional information about the workflow run.

![](/assets/3419b0f-cimon-build-report.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
