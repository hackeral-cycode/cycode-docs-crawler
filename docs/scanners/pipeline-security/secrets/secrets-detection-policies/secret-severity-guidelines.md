# Secret severity guidelines | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/secrets-detection-policies/secret-severity-guidelines

---

# Secret severity guidelines

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/secrets-detection-policies/secret-severity-guidelines.md "Edit this page")

Updated on Oct 15, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode classifies secrets into four severity categories to help you prioritize remediation efforts and focus on the secrets that pose the greatest risk.

This classification is based on several factors, including the potential leak impact, token lifetime, ease of revocation, and the sensitivity of the system the secret belongs to.

## Severity categories [Copied!](#severity-categories "Copy link to this section")

### Critical [Copied!](#critical "Copy link to this section")

Secrets that can directly compromise systems, data, or infrastructure.

Example

Leak impact

**Cloud provider access tokens** (AWS, Azure, Google Cloud)

Full infrastructure exposure, including databases and storage. Attackers can deploy, delete, or steal resources.

**Database credentials** (PostgreSQL, MongoDB)

Direct access to production data or user information; often irreplaceable without downtime.

**Source control API keys** (GitHub, GitLab, Bitbucket)

Access to repositories, exposing proprietary code and infrastructure secrets.

**Payment system secrets** (Stripe, PayPal)

Fraud, theft, or disruption of financial workflows.

**SSO tokens** (Okta, OAuth)

Compromise of identity/authentication systems with potential privilege escalation.

**Artifact registry tokens** (Artifactory, DockerHub private)

Unauthorized access to or tampering with container images and build artifacts.

**Package registry tokens** (PyPI, NPM private)

Ability to publish or modify packages, creating supply chain risks.

### High [Copied!](#high "Copy link to this section")

Secrets that enable indirect compromise of critical systems.

Example

Leak impact

**CI/CD pipeline tokens** (Jenkins, GitHub Actions, GitLab CI)

Tampering with build/deployment processes, injecting malicious code, accessing other secrets.

**Monitoring/logging tokens** (Datadog, New Relic, Splunk)

Exposure of logs containing vulnerabilities, secrets, or user data.

**Container registry credentials** (DockerHub, AWS ECR)

Upload of malicious containers, potentially compromising downstream deployments.

### Medium [Copied!](#medium "Copy link to this section")

Secrets that primarily affect non-critical systems or integrations.

Example

Leak impact

**Third-party integration tokens** (Slack, Trello, etc.)

Limited functionality (posting messages) with low direct harm potential.

### Low [Copied!](#low "Copy link to this section")

Secrets with minimal or no impact if leaked.

Example

Leak impact

**Public API keys** (weather/news APIs)

Negligible, as keys are intended for public use.

**Google Tag Manager tokens**

Limited to marketing/analytics configuration with no exposure of sensitive data.

**Google Maps tokens (read-only)**

Minimal impact because they can’t be used to modify data.

**Basic bot framework tokens**

Limited messaging functionality without user-specific data access.

## Factors for evaluating severity [Copied!](#factors-for-evaluating-severity "Copy link to this section")

Cycode uses the following factors to classify the severity of a violation.

Factor

Higher severity

Lower severity

**Impact of leak**

Direct access to sensitive systems/data

Access to metadata or low-sensitivity data

**Token lifetime**

Long-lived tokens

Short-lived tokens

**Rotation and revocation**

Difficult to rotate or revoke

Easily revocable

**System sensitivity**

Production databases, identity systems

Monitoring or low-sensitivity integrations

**System popularity**

Widely used platforms (AWS, Azure, Google Cloud)

Niche or low-attraction systems

**Token popularity**

Common tokens (GitHub, Slack, Trello) targeted by attackers

Rare or specialized tokens

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
