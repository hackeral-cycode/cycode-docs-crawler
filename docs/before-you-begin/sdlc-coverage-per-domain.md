# SDLC coverage per domain | Cycode Docs

Source: https://docs.cycode.com/before-you-begin/sdlc-coverage-per-domain

---

# SDLC coverage per domain

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/before-you-begin/sdlc-coverage-per-domain/_index.md "Edit this page")

Updated on Jan 25, 2026 • Published on Apr 23, 2025

* * *

The following table provides an overview of the domains that are scanned and managed in Cycode, and the coverage for specific stages of the Software Deployment Life Cycle (SDLC).

Domain

Code

Build

Artifacts

Cloud

Productivity

Hardcoded Secrets

*   Code scanning:
    *   All history
    *   Latest code
    *   Every commit Every branch
*   PR scanning
*   CLI
*   IDE

*   Build logs
*   CLI

Secrets in Container Images

Secrets in S3 Buckets

*   Communication tools:
    *   Channels
    *   Messages
    *   Files

*   Collaboration tools:
    *   Tickets
    *   Pages

Leaks

GitHub public repos

CI/CD Security

Yes PR Scan

Yes

Build runtime protection (CI/MON)

*   GitHub actions
*   GitHub actions self-hosted
*   Azure DevOps
*   Jenkins

SCA

*   Code scanning:
    *   Latest code
    *   Every commit
    *   Main branch + all configured branches
*   PR scanning

CLI

SAST

*   Code scanning:
    *   Latest code
    *   Every commit
    *   Main branch
*   PR scanning

CLI

IaC

*   Code scanning:
    *   Latest code
    *   Every commit
    *   Main branch
*   PR scanning

CLI

(Terraformer)

CSPM

Yes

Container Image Scanning (CNAPP)

Secrets and vulnerabilities in container images

Cycode Solution

Code

Build

Artifacts

Cloud

Productivity

SLSA V1.0

*   GitHub Actions
*   Azure DevOps
*   Pipeline

SBOM

Yes

CLI

Discovery

PR Scans

\* Yes \* Block - GitHub, GitLab Ultimate

IDE Plugin

VS Code

Threat Exposure Analysis

Yes

Yes

Yes

Yes

Yes

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
