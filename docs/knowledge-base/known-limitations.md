# Known limitations | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/known-limitations

---

# Known limitations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/known-limitations.md "Edit this page")

Updated on Feb 12, 2026 • Published on Jul 17, 2024

* * *

Here you’ll find the known limitations in the Cycode system.

## Secrets known limitations [Copied!](#secrets-known-limitations "Copy link to this section")

### Secrets detection engine [Copied!](#secrets-detection-engine "Copy link to this section")

**Issue**

**Additional Details**

Secret under an entropy threshold is not detected.

We calculate entropy for each secret, which means that we measure its randomness or unpredictability. Secrets under a certain value won’t be detected as secrets.

#### Generic secrets detection [Copied!](#generic-secrets-detection "Copy link to this section")

Issue

Additional Details

A secret was not detected because the parameter did not specify a precise password.

Those secrets will lead to a lot of false positives. For example - - creds = mySecretPassword’ - Username: admin

A password won’t be detected if its length is shorter than 5 characters.

A detected secret must have a minimum entropy of 4.

Entropy measures the randomness or unpredictability of a secret, such as an API key, password, or cryptographic key. High entropy indicates that the secret is more complex and harder to guess, making it more secure against brute-force attacks. Low-entropy secrets, like predictable patterns or simple words, are easier for attackers to guess. For instance, a random string like a7$F!kL9%q has high entropy, while something like aaaaa123 has low entropy. Ensuring secrets have high entropy is critical for maintaining secure systems.

A secret will not be detected because the code contains braces ‘{}.’

If the secret contains curly brackets {} it won’t be detected due to a high result of FP (Can be considered as a regular parameter)

The secrets scanner does not catch a generic secret when its value is not in the same line as the password.

First Example- - Line 1: password\_variable - Line 2: password\_value\_here Second Example- - Line 1: “key”: “secret” - Line 2: “value”: “somestring”

Cycode uses heuristics to identify placement variables in code or functions; this may lead to false negatives that match this pattern.

Example - - password=(RAND\_STRING)

### Secret auto-resolution [Copied!](#secret-auto-resolution "Copy link to this section")

Issue

Additional Details

Secret policy violations related to custom secret policies created by the customer still exist despite the custom policy being removed.

After deleting a branch that contained a detected secret, the secret continues to display in the Cycode platform despite the auto-resolution of the violation.

This is an edge case: A repository that had a detected secret violation was deleted, which marked the violation as resolved (first resolution). Then, a push event with the same commit as before (which could be the result of a restored the repository) reopened the detection; however, the repository was created with a different ID. Therefore, the detection wasn’t updated with the new sourceEntityId (repositoryId).

## PR scanning known limitations [Copied!](#pr-scanning-known-limitations "Copy link to this section")

Issue

Additional Details

Pull request comments cannot be added to large files (CM-32574)

Relevant for the following SCMs: GitHub, GitLab. Note that the size limitation depends on the provider and version.

PR commenting (e.g., PR remediation) is not supported when branch naming convention is enabled. For example - if a customer allow branch names to be “X-Y-X”, we cannot open a PR fix under the branch name “ABC”.

Large files in GitHub are not scanned in pull requests (CM-36070)

Repositories with violations that have corresponding assets but do not appear in the assets data in the RIG (CM-36302)

When a fix is not applied via a pull request it will not resolve automatically (CM-40068)

## Audit log known limitations [Copied!](#audit-log-known-limitations "Copy link to this section")

Issue

Additional Details

An unknown user in the Audit Logs can be a deleted member or a service account audit event

Resolved violations related to classification rules aren’t currently available in the Audit logs (CM-28082)

The Audit Log doesn’t display any activity for some resolved violations (CM-38082)

Currently, when violations get resolved by classification rules (or through the option “Resolve in this location”), Cycode does not add the “violation status change message” to the Audit Log or the status reason. This means you might see a resolved violation in the log but won’t be able to see the reason it was resolved. (CM-38082)

## IaC and Cloud Security known limitations [Copied!](#iac-and-cloud-security-known-limitations "Copy link to this section")

Issue

Additional Details

Currently, Kubernetes violations are not supported by the auto-resolve feature (CM-35394)

## SAST known limitations [Copied!](#sast-known-limitations "Copy link to this section")

Issue

Additional Details

SAST violations aren’t detected in a custom branch (CM-38223)

When scanning for SAST, currently there is no way to scan a full repository with custom branch settings (the scan only works on “push event”, meaning on new code updates, not on a full code rescan (On-demand Scan)

## General known limitations [Copied!](#general-known-limitations "Copy link to this section")

Issue

Additional Details

The names of the IaC policies in the Violations and Policies page differ from those in the Discovery/RIG (CM-38870)

When exporting the filtered Violation page (Group by Policy, filtered by a specific SCM), the unfiltered Policy Names occasionally display as - in the Policy column. (CM-38880)

In Classification rules, Using “Contains” operator in “File Path” is not recommended

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
