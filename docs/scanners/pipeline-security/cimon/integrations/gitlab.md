# GitLab | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/integrations/gitlab

---

# GitLab

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/integrations/gitlab.md "Edit this page")

Updated on Mar 25, 2025 • Published on Mar 25, 2025

* * *

## GitLab CI [Copied!](#gitlab-ci "Copy link to this section")

Cimon integrates seamlessly with GitLab CI/CD, providing robust support for automating your pipeline workflows.

## GitLab CI/CD Runners Support [Copied!](#gitlab-cicd-runners-support "Copy link to this section")

GitLab CI/CD offers flexible runner options, and Cimon is designed to adapt to various environments. Here’s how Cimon supports GitLab CI/CD runners:

*   **Runner Compatibility**: Cimon works with GitLab CI/CD runners running on Ubuntu or any other supported Linux distribution.
*   **Host Whitelisting**: GitLab-related hosts are automatically whitelisted, ensuring smooth and secure communication.
*   **Ignored IPs**: Internal IP addresses are automatically ignored to streamline network communication.
*   **Custom Reporting**: Detailed reports are generated and tailored to fit GitLab CI/CD job artifacts.  
    Cimon supports both GitLab hosted runners and self-hosted runners. The following section explains how to install Cimon within a pipeline that requires privileged access. For installation outside the pipeline, with non-privileged runners, please refer to the Kubernetes deployment guide.

## Cimon Installation [Copied!](#cimon-installation "Copy link to this section")

Cimon can be easily installed within GitLab CI/CD pipelines using a predefined setup script. This script facilitates the download and installation of Cimon within seconds.

### Usage [Copied!](#usage "Copy link to this section")

Cimon can be easily installed within GitLab CI/CD pipelines using a predefined setup script, based on Cimon CLI installation. This script facilitates the download and installation of Cimon within seconds.

Below is a script that is adapted for Docker executors that do not require sudo. If you are running shell executor, you must add sudo -E to the Cimon running command.

#### Detect Mode [Copied!](#detect-mode "Copy link to this section")

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

```text
variables:
  CIMON_CLIENT_ID: $CIMON_CLIENT_ID
  CIMON_SECRET: $CIMON_SECRET

install_and_start_cimon:
  before_script: |
    # 'curl' and 'jq' are prerequisite for the installation script.
    # change the following line according to the package manager.
    apt update && apt install curl jq -y
    # Download Cimon
    curl -sSfL https://cimon-releases.s3.amazonaws.com/install.sh | sh -s -- -b /usr/local/bin
    # Start Cimon
    cimon agent start-background

  script: |
    # Run commands
    curl -sm 1 https://cycode.com > /dev/null || true
    ...
    # Stop Cimon
    cimon agent stop
```

#### Prevent Mode [Copied!](#prevent-mode "Copy link to this section")

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
```

```text
variables:
  CIMON_CLIENT_ID: $CIMON_CLIENT_ID
  CIMON_SECRET: $CIMON_SECRET
  CIMON_PREVENT: true
  CIMON_ALLOWED_HOSTS: |
    registry.npmjs.org
    cycode.com
  CIMON_ALLOWED_IPS: |
    34.121.34.97

install_and_start_cimon:
  before_script: |
    # 'curl' and 'jq' are prerequisite for the installation script.
    # change the following line according to the package manager.
    apt update && apt install curl jq -y
    # Download Cimon
    curl -sSfL https://cimon-releases.s3.amazonaws.com/install.sh | sh -s -- -b /usr/local/bin
    # Start Cimon
    cimon agent start-background

  script: |
    # Run commands
    curl -sm 1 https://cycode.com > /dev/null || true
    ...
    # Stop Cimon
    cimon agent stop
```

Refer to CLI for additional information regarding the supported environment variables.

## GitLab Hosted Support [Copied!](#gitlab-hosted-support "Copy link to this section")

Cimon also supports GitLab’s hosted environments, as detailed in the [GitLab documentation](https://docs.gitlab.com/ci/runners/hosted_runners/) . In summary, the GitLab hosted environment provisions a new VM for each job and uses a privileged Docker executor to run the steps. This privileged mode is crucial for Cimon, as it allows the necessary loading of eBPF modules.

Key points to note when using GitLab hosted environments:

Isolated Jobs: Each job runs on a separate VM. This means Cimon is installed for each job and can enforce different policies per job if required. The `variables` that define Cimon configuration can be defined globally to apply for all jobs, or seperately in each job.  
Stopping Cimon: It is necessary to stop Cimon within the `script` tag, and not in the `after_script` tag. Cimon must be stopped when pipeline ends in order to send its report locally (to artifact and job logs), and remotely (to backend). As soon as the `script` tag ends, the Docker executor stops all processes, and shuts down the container, terminating Cimon without allowing it to send its report.  
Flexible Start Options: Depending on your workflow requirements, Cimon can be started either in the `before_script` or directly within the `script` section.

## Job Summary Report [Copied!](#job-summary-report "Copy link to this section")

Cimon can upload the final report as a job artifact. Simply specify the `CIMON_REPORT_ARTIFACT` environment variable, and Cimon will utilize the `CI_JOB_TOKEN` to upload the report as a job artifact.

```
variables: |
  CIMON_REPORT_ARTIFACT: 1
```

## Printing the Report to Job Logs [Copied!](#printing-the-report-to-job-logs "Copy link to this section")

In addition to uploading the report as an artifact, Cimon also prints the report directly to the job logs. This allows you to quickly review the results and gain insights into what occurred during the job execution.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
