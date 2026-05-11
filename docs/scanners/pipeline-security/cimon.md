# CIMON | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon

---

# CIMON

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

CIMON (pronounced “Simon”), is your CI/CD pipeline superhero, a runtime security solution that detects and stops software supply-chain attacks on your pipeline, including those targeting SolarWinds and CodeCov, through easy onboarding and a developer-friendly experience.

By utilizing revolutionary eBPF technology, CIMON monitors and mitigates attacks within the kernel, denying access to users’ assets as soon as they arise.

## Why CIMON [Copied!](#why-cimon "Copy link to this section")

Our investigation of all supply-chain incidents in recent years led us to conclude that while organizations and project maintainers strive to prevent attacks as soon as possible, there are no controls to prevent attackers from engaging in malicious behavior. In fact, the number of supply chain attacks on build servers is rising: whether it’s _TypoSquatting_, _Dependency Confusion_, _RepoJacking_, or _Dependency Poisoning_, they’re all essentially trying to execute the same thing:

*   Exfiltrate sensitive data from the build server
    
*   Tamper with sensitive data on the server
    

Rather than trying to prevent all entry points for attackers into the build environment, CIMON is here to prevent them from performing these actions. As a result, attackers cannot exfiltrate your sensitive data regardless of how the build was compromised.

## What CIMON does [Copied!](#what-cimon-does "Copy link to this section")

CIMON has two main tasks:

*   **Learning** (detect mode) the CI pipeline behavior.
    
*   **Applying** the learned data (prevent mode) and creating a preventive security policy.
    

CIMON monitors and protects the golden pillars of CI/CD pipeline security: **process** execution,**network** access, and **file** access. It enables us to detect a breach, identify the compromised pipeline runner, and take remedial measures.

## Why do I need CIMON [Copied!](#why-do-i-need-cimon "Copy link to this section")

Our philosophy is to provide maximum protection with minimal friction for developers. This is how we implemented CIMON.

For those seeking an install-and-forget security solution, CIMON can ensure maximum security in five minutes without any further maintenance. If you seek a deeper understanding of your pipelines, CIMON provides deep inspection capabilities for security engineers to investigate possible attacks on their pipelines.

To learn more about CIMON, including information on self-hosted runners, supported features, integrations, and more, you can start by navigating to [Overview](/scanners/pipeline-security/cimon/overview/) .

## More From CIMON [Copied!](#more-from-cimon "Copy link to this section")

Explore CIMON build Integrity and Attestations at [Attestations](/context-intelligence-graph/inventory/build-entities/attestations) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
