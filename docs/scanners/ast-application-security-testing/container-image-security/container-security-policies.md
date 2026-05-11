# Container Security policies | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/container-image-security/container-security-policies

---

# Container Security policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/container-image-security/container-security-policies.md "Edit this page")

Updated on May 5, 2025 • Published on May 5, 2025

* * *

Container Security policies follow the best practices for container security. The **Container Image Security scanner** scrutinizes container images for vulnerabilities and misconfigurations. As containerized applications become more prevalent, this scanner helps maintain the security and integrity of containers by identifying potential security risks within the images, ensuring that they are secure before deployment.

## Container Scanning [Copied!](#container-scanning "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Vulnerability Found In Container Image

Enable this policy to be notified when a container image contains a dependency that has a known security vulnerability

High

AWS, GCP

Vulnerabilities, Graph Query

Ensure ECR image is scanned

ECR Image needs to be been scanned before pushed (see the [Terraform docs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecr_repository#scan_on_push) .

Medium

AWS

Vulnerabilities

Ensure Google Artifact/Container registry images are scanned for vulnerabilities

Medium

GCP

Vulnerabilities

## General [Copied!](#general "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

npm install should specify a package version

Versions should be pinned when executing npm install, unpinning a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

## Insecure Configurations [Copied!](#insecure-configurations "Copy link to this section")

Policy Name

Description

Severity

Source

Labels

Ensure containers don’t run with root privileges

Containers must not be allowed to run with root privileges, which means the attributes ‘privileged’, ‘allowPrivilegeEscalation’, and ‘readOnlyRootFilesystem’ must be set to ‘false’, ‘runAsUser.rule’ must be set to ‘MustRunAsNonRoot’, and adding the root group must be forbidden (Configured in Kubernetes files) (v2)

Medium

Least Privilege, Permissions, Root

An identical alias cannot be used in different FROMs

An identical alias cannot be used in different FROMs

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

COPY –from refers to the current FROM alias

COPY –from cannot mention existing FROM alias as it cannot copy from itself

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

COPY with 2 or more arguments should end with slash

If more than two arguments are used in COPY instruction, the last argument should end with a slash (/)

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Ensure that the ECS Service role does not have administrator permissions

The ECS service role has administrator permissions. This role should be granted the minimal permissions required to perform the task.

High

AWS

Permissions

Multiple ENTRYPOINT instructions

Only one ENTRYPOINT should be defined in a Dockerfile

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Port out of range

Unix ports that are out of range from 0 to 65535 are exposed

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Ports

RUN should not include sudo commands

Using sudo in RUN is not a recommended approach security-wise

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Specific user should be defined

The image will run as root unless a lesser privileged user is defined

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

WORKDIR path is not an absolute path

Absolute paths should be used for your WORKDIR

High

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

apk add should be executed with pinned version

Executing apk add without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

apt-get should declare a pinned version

When executing apt-get, package versions should be pinned

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

apt-get should include -y flag

Executing apt-get without -y may require manual input

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Configure the Amazon Elastic Container Service (Amazon ECS) with at least one LoadBalancer

The Amazon Elastic Container Service (Amazon ECS) does not have load balancing configured. To distribute traffic evenly across the tasks, make sure at least one LoadBalancer has been configured for ECS.

Medium

AWS

Data Reliability

COPY –from without existing FROM alias

When using COPY –from command, it is expected to use the FROM alias that was defined before

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

dnf clean all should be used after dnf install

In order to clean package cached data, dnf clean all should be executed after dnf install

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

dnf install should include a specific version

Executing dnf install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Ensure that the ECS Service has at least one task running

The ECS service is running without any tasks. It should only be run with at least one task.

Medium

AWS

Stale Users & Services

Ensure that the ECS Task Definition network mode is ‘awsvpc

The ECS Task Definition is using a network mode that is not recommended. In order to facilitate a formal approval and testing process for all network connections, including changes to the firewall and router configurations, set the ‘Network\_Mode’ to ‘awsvpc’ in the ecs\_task\_definition’.

Medium

AWS

FROM instruction used with –platform flag

It is not recommended to use the –platform flag with FROM instruction

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

gem install executed without specifying a version

Executing gem install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

JSON format should be used in CMD and ENTRYPOINT instructions

Users should use JSON format when declaring CMD and ENTRYPOINT instructions

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Meaningful tag should be used

Using latest as a tag does not provide sufficient information regarding the image, consider using a more informative tag

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Multiple CMD instructions

Only one CMD can be defined in a Dockerfile

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

pip install should be executed with pinned version

Executing pip install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

pip install should be executed without cache

pip install should be used with –no-cache-dir flag to reduce the image size

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

RUN should not include cd command

Use WORKDIR instead of navigating to a specific path using cd command

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

SHELL instruction should not be used

RUN instruction should be used instead of SHELL

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

SSH

Update and install should be executed in the same RUN instruction

Update and install commands should not be executed in separate RUN instructions, but should be combined using &&

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Use apt-get or apt-cache instead of apt

Usage of apt is generally discouraged and is considered unstable

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

User should not be left ‘root’

If you had to use ‘root’ user in your Dockerfile, make sure to change it at the end to a less privileged user to avoid abuse

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Permissions, Root

User should use either wget or curl

Use either wget or curl, there is no need to include both commands that act in the same manner

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

yum clean all should be used after yum install

In order to clean package cached data, yum clean all should be executed after yum install

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

yum install executed without specifying a version

Executing yum install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

yum should include -y flag

Executing yum without -y may require manual input

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

zypper install should include a specific version

Executing zypper install without a specific version could cause unanticipated changes in your environment

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

zypper should be used with non-interactive switch

Executing zypper should be used with non-interactive switch to remove manual input

Medium

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Avoid exposing port 22

Exposing port 22 should only be done when absolutely necessary

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

SSH, Ports

Avoid using Add to fetch packages

Use either curl or wget to fetch packages instead of Add

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

chown should not be used

Only execution permission should be set rather than changing ownership

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Permissions

Ensure that the HealthCheck property is defined for Amazon ECS tasks

The HealthCheck property is missing for Amazon ECS tasks. For more control over monitoring the health of tasks, it should be defined.

Low

AWS

Data Reliability

HEALTHCHECK instruction should be used

It is recommended to use the HEALTHCHECK instruction to allow Docker to test the container well being

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Use COPY instruction instead of ADD instruction

COPY instruction should be used instead of ADD (except for tar files)

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Use LABEL instruction instead of MAINTAINER

LABEL instruction is considered more recommended than MAINTAINER instruction

Low

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Prevent apt-get from installing additional packages

apt-get should be used with –no-install-recommends flag

Info

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Running specific POSIX commands or run utilities should be avoided

It is not recommended to execute some POSIX commands/interactive utilities from within a Docker container

Info

Azure DevOps, Azure DevOps Server, Bitbucket, Bitbucket Server, Gerrit, GitHub, GitHub Enterprise, GitLab, GitLab Enterprise

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
