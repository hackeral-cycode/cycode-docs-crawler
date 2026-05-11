# How does Cycode detect secrets? | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/how-does-cycode-detect-secrets

---

# How does Cycode detect secrets?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/how-does-cycode-detect-secrets/_index.md "Edit this page")

Updated on Nov 12, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Secrets such as API keys, tokens, and database credentials can appear anywhere across the Software Development Life Cycle (SDLC). If exposed, these secrets provide attackers with direct access to sensitive systems and data.

Cycode scans across broad scopes, including source code, build pipelines, artifacts, cloud configurations, and productivity tools, to identify secrets wherever they might be introduced. The secret detection algorithm combines regex rules, entropy analysis, and AI validation to capture both structured secrets (with known formats) and generic secrets (custom or random values), reducing false positives while ensuring wide coverage.

## Structured vs. generic secrets [Copied!](#structured-vs-generic-secrets "Copy link to this section")

Secrets fall into two main categories, structured and generic. Understanding the difference helps you see why some secrets are easy to detect, while others require more advanced techniques like AI-based validation.

Without advanced detection (entropy, context, and AI), organizations risk missing the majority of real-world secrets. Cycode combines regex detection with ML-powered validation to accurately capture both categories.

Structured and generic secrets have the following key differences:

Factor

Structured secrets

Generic secrets

Format

Known, well-defined

Random, variable, organization-specific

Examples

AWS Access Keys, GitHub Personal Access Tokens, Google Cloud API Keys

Custom API keys, internal tokens, encryption keys

Detection reliability

High with regex

Low with regex; requires AI/context analysis

### Structured secrets [Copied!](#structured-secrets "Copy link to this section")

Structured secrets have a known, predictable format. Their structure is often defined by the service provider. for example:

*   AWS access keys (`AKIA...`)
    
*   GitHub personal access tokens (PATs)
    
*   Google Cloud API keys
    
*   Database connection strings
    

The accuracy of detection for structured secrets is high, and regex detection is very effective with minimal false positives. Structured secrets are easier to detect for the following reasons:

*   They follow documented formats (length, prefix, character rules).
    
*   Regex or rule-based scanners can match them consistently.
    
*   Few false positives occur when the scanner is configured properly.
    

### Generic secrets [Copied!](#generic-secrets "Copy link to this section")

Generic secrets are those that don’t follow a fixed format. These secrets often look like random strings and can vary greatly between organizations. Types of generic secrets include:

*   Custom API keys
    
*   Internal authentication tokens
    
*   Randomized database passwords
    
*   Encryption keys
    

More than 50% of real-world secrets fall into this category, making them a critical risk area. Without employing more advanced methods, the accuracy of detecting generic secrets are medium to low, and are harder to detect for the following reasons:

*   There is no standard format to match.
    
*   Secrets can look like any random string in the code.
    
*   Regex-only tools often miss them (false negatives) or over-detect them (false positives).
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
