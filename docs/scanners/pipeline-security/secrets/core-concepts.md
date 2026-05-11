# Core concepts | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/core-concepts

---

# Core concepts

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/core-concepts/_index.md "Edit this page")

Updated on Nov 4, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The following concepts define how Cycode’s secret scanner detects, groups, and manages secrets across your environment, and how you interact with findings in the platform.

*   [Secret value](/scanners/pipeline-security/secrets/core-concepts/#secret-value)
    
*   [Secret policy](/scanners/pipeline-security/secrets/core-concepts/#secret-policy)
    
*   [Secret violation](/scanners/pipeline-security/secrets/core-concepts/#secret-violation)
    

## Secret value [Copied!](#secret-value "Copy link to this section")

A secret value in Cycode refers to the unique sensitive string itself (such as an API key, password, token, or certificate) regardless of where it appears across your environment.

Cycode generates a SHA identifier (hash of the value) to normalize a secret value. All occurrences of the same string can then be grouped together based on the SHA, even if they appear in different repositories, commits, or sources.

Secret values are managed collectively in the secret value card, which displays the risk score, sources, detected violations, and remediation options.

### Characteristics of the secret value [Copied!](#characteristics-of-the-secret-value "Copy link to this section")

The Cycode secret value has the following characteristics:

*   Uniqueness - a secret value is identified by its SHA (hash of the string).
    
*   Aggregation - all violations linked to the same value are grouped under one secret value entity in the platform.
    
*   Scope - secret values span all sources where they are detected, including code repositories, CI/CD pipelines, build logs, containers, cloud assets, and collaboration tools (for example, Slack, Jira, or Confluence).
    
*   Risk calculation - a secret value is assigned a maximum risk score, which is derived from the highest-risk violation among its detected occurrences.
    

### Benefits of using the secret value [Copied!](#benefits-of-using-the-secret-value "Copy link to this section")

*   Centralized handling - remediate a secret value once to fix the violation across all assets, regardless of how many places it is located.
    
*   Clear prioritization - focus on the most critical secrets using the risk score.
    
*   Reduced noise - avoid duplicated efforts by grouping multiple violations of the same string.
    
*   Holistic visibility - view all the sources where a secret value is exposed, in one place.
    

### Example [Copied!](#example "Copy link to this section")

The AWS key `AKIA123...XYZ` is detected in two different locations:

*   GitHub repo `backend-api` > branch `main` > commit `abcd123` > file `config.js`.
    
*   Bitbucket repo `internal-scripts`, branch `develop`, commit `efgh456`, file `env.yaml`.
    

Both detected violations are linked to the same secret value based on the SHA. Instead of treating them as separate violations, Cycode consolidates them under the single secret value so you can view and manage them in one place.

## Secret policy [Copied!](#secret-policy "Copy link to this section")

A policy defines rules for detecting a specific type of secret. A secret policy is equivalent to a secret type, usually to a provider, platform, or technology (for example, AWS, GitHub, Slack, or databases).

By managing policies, you can determine which types of secrets Cycode scans for, how they are handled, and whether validation checks are performed. This allows you to align detecting secret violations with the security priorities of your organization.

Violations are always linked to the secret policy that identified the secret.

### Characteristics of the secret policy [Copied!](#characteristics-of-the-secret-policy "Copy link to this section")

*   Every secret policy is mapped to a specific secret type, such as AWS access key, GitHub token, or Slack tokens.
    
*   Secret policies use detection logic tailored to the provider’s credential formats, improving accuracy.
    
*   You can enable, disable, or filter on secret policies depending on which secret types are relevant to your environment.
    
*   Some secret policies also include secret validation to detect if a secret value is active or inactive.
    
*   When a secret violation is detected, it is linked to the secret policy that identified it.
    

### Benefits of using the secret policy [Copied!](#benefits-of-using-the-secret-policy "Copy link to this section")

*   Granularity - fine-tuned control to enable or disable specific secret policies.
    
*   Accuracy - provider-specific rules help reduce false positives.
    
*   Prioritization - Secret policies can be configured with varying severity to suit the impact of that secret type.
    
*   Compliance - ensure that the secret scanner looks for the secrets that are the most critical for your organization.
    

### Example [Copied!](#example-1 "Copy link to this section")

Provider

Secret type (policy)

Description

**AWS**

AWS access key

Detects AWS access key IDs and secret access keys. Supports validity status check to determine if the secret value is active or inactive.

**GitHub**

GitHub token

Detects GitHub personal access tokens.

**Slack**

Slack token

Detects Slackbot tokens and user tokens.

**Google Cloud**

GCP service account key

Detects Google Cloud JSON key files.

**Databases**

Database credentials

Detects common database connection strings (for example, PostgreSQL, MongoDB, and MySQL).

## Secret violation [Copied!](#secret-violation "Copy link to this section")

A secret violation is one occurrence of a secret in a specific context (repository, commit, file, build log, or collaboration tool).

The secret violation is unique based on its exact location, and includes detailed metadata such as repository, branch, commit, and file.

Cycode users manage secret violations individually using the secret violation card, which is opened by clicking a violation in the **Violations** > **Secrets** page.

### Characteristics of the secret violation [Copied!](#characteristics-of-the-secret-violation "Copy link to this section")

A secret violation has the following characteristics:

*   One-to-one mapping: Each violation is one instance of a secret value.
    
*   Location-specific: A violation is associated directly with the location of the secret value, so the exact metadata depends on the source where the violation was detected.
    
*   Tracking: Every violation can be viewed in a Secret Violation Card, which provides the contextual details and actions.
    
*   Resolution: Violations can be managed individually (Resolve Here / Ignore Here) without impacting the same value elsewhere.
    

### Example [Copied!](#example-2 "Copy link to this section")

*   The API key `AKIA123...XYZ` is found in GitHub repo A:
    *   Branch: `main`
    *   Commit: `abcd123`
    *   File: `config.js`

This is a single secret violation.

If the same key appears in another commit or even another source (like Slack), each occurrence is a separate violation, but all are linked to the same secret value.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
