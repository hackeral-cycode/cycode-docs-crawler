# Supported features | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/overview/supported-features

---

# Supported features

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/overview/supported-features.md "Edit this page")

Updated on Mar 25, 2025 • Published on Mar 25, 2025

* * *

The following features are supported by Cimon.

## CI systems [Copied!](#ci-systems "Copy link to this section")

System

Runner

Status

GitHub Cloud - GitHub Actions

Ubuntu 22.04

✅

GitHub Cloud - GitHub Actions

Ubuntu 20.04

✅

GitHub Cloud - GitHub Actions

Self-hosted

✅

GitHub Enterprise Server - GitHub Actions

Self-hosted

✅

Azure Pipelines

Ubuntu 22.04

✅

Azure Pipelines

Ubuntu 20.04

✅

Azure Pipelines

Self-hosted

❌

Jenkins

Self-hosted - Agent

✅ (Beta)

Jenkins

Self-hosted - Container

✅ (Beta)

Jenkins

Self-hosted - K8s

❌

GitLab

GitLab Hosted

✅

GitLab

Self-hosted

✅ (Beta)

## Cimon Agent [Copied!](#cimon-agent "Copy link to this section")

Feature

Mode

Status

Network Connections

Detect

✅

Network Connections

Prevent

✅

Process Execution

Detect

✅ (Beta)

Process Execution

Prevent

❌

File System Events

Detect

✅ (Beta)

File System Events

Prevent

❌

Note

Using the process execution and file system events features is supported for enterprise server deployments; however, you’ll need to request them explicitly, since they require a dedicated S3 bucket for reports.

## Cimon in Cycode [Copied!](#cimon-in-cycode "Copy link to this section")

Feature

Status

Monitor installations

✅

Investigate build workflows reports

✅

Configure tenant level policy

✅ (Beta)

Configure workflow level policy

✅ (Beta)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
