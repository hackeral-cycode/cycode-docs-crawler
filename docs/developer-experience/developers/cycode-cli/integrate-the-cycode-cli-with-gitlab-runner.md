# Integrate the Cycode CLI with GitLab Runner | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-cli/integrate-the-cycode-cli-with-gitlab-runner

---

# Integrate the Cycode CLI with GitLab Runner

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-cli/integrate-the-cycode-cli-with-gitlab-runner.md "Edit this page")

Updated on May 15, 2025 • Published on May 15, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Follow the instructions in this topic to integrate the Cycode CLI into your GitLab CI/CD pipeline and enable secure code analysis.

For more information about the Cycode CLI, go to the [Cycode CLI](https://github.com/cycodehq/cycode-cli) GitHub repo.

## Integrate with GitLab Runner [Copied!](#integrate-with-gitlab-runner "Copy link to this section")

### Create an access token in Cycode [Copied!](#create-an-access-token-in-cycode "Copy link to this section")

1.  In Cycode, hover over your user in the upper right corner and click **Personal access tokens**.
2.  **Click Access token**.
3.  In the Personal access token dialog, type a name for the token and click **Create**.
4.  In the Client ID and Secret dialog, copy the client ID and client secret and save them to a secure location before you click **Close**.

### Configure the GitLab Runner variables [Copied!](#configure-the-gitlab-runner-variables "Copy link to this section")

1.  Go to **Gitlab Settings > CI/CD > Variables**.
2.  Click \*\* Add variable\* and configure the following:
    1.  In the key field `CYCODE_CLIENT_ID`, paste the Cycode client ID.
    2.  In the key field `CYCODE_CLIENT_SECRET` paste the Cycode client secret.
    3.  Mask the variables for security.
    4.  If you want the scan to run for all branches, clear the **Protect variable** option.

### Configure the .gitlab-ci.yml file [Copied!](#configure-the-gitlab-ciyml-file "Copy link to this section")

1.  In the root of your GitLab repository, create a `.gitlab-ci.yml` file.
    
2.  To run a SCA scan on every merge request, add the following content to your `.gitlab-ci.yml` file:
    
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
    ```
    
    ```yaml
    image: python:latest
    
    
    stages:
     - cycode
    
    
    cycode:
     stage: cycode
     script:
      - pip3 install cycode
        - echo "Deploying..."
      - export CYCODE_CLI_VERBOSE=true
     - cycode scan --scan-type sca path .
    ```
    

Note

Cycode CLI requires Python 3.9 or higher, so `image: python:latest` specifies the Docker image that should be used for the pipeline. This use case contains the python:latest image, but you can change it to suit your organizational requirements.

## Display violations [Copied!](#display-violations "Copy link to this section")

### Cycode Soft Fail [Copied!](#cycode-soft-fail "Copy link to this section")

If a violation is detected during a Cycode scan, the soft fail feature automatically executes with success `(0)` to prevent interference and avoid failing the CI/CD step within the pipeline.

Scans results are generally assigned a result code value of `1` when issues are detected; this results in failure within the CI/CD tool. You can add the `--soft-fail` argument to any type of scan to force the results with the error code `0` instead (so the scan will pass).

```
   - cycode scan --soft-fail --scan-type sca path .
```

### GitLab CI [Copied!](#gitlab-ci "Copy link to this section")

Another option to detect and display violations without failing the pipeline is with the gitlab-ci itself.  
The gitlab-ci uses the the flag `allow_failure: true` as follows:

```
1
2
3
4
5
6
```

```text
cycode:
  stage: cycode
  script:
    - pip3 install cycode
    - cycode scan --scan-type sca path .
  allow_failure: true
```

In the image below, you can see how each solution (allowed to fail, soft fail, and failed) affects the pipeline.

![](/assets/2bca154-image.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
