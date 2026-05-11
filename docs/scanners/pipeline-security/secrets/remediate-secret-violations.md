# Remediate secret violations | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/remediate-secret-violations

---

# Remediate secret violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/remediate-secret-violations/_index.md "Edit this page")

Updated on Nov 17, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

In order to decide which violations are active and exploitable and therefore must be remediated, and which ones to ignore because they may already be revoked or removed from the latest code, Cycode provides a set of validation and prioritization capabilities that reduce noise and ensure high-risk exposures are addressed first.

### Optimize the Violations view [Copied!](#optimize-the-violations-view "Copy link to this section")

Cycode offers a rich set of filters to narrow down results and focus on high-priority issues.

To reduce noise in the Violations view, do the following:

What you want to view

Filter by

Prioritization

Risk score, severity, SLA status, or priority

Validity

Active or inactive

Location

Repository, branch or source

Secret tags

Exists in latest code

### Use discovery queries in the Context Intelligence Graph [Copied!](#use-discovery-queries-in-the-context-intelligence-graph "Copy link to this section")

For advanced use cases, Cycode provides a query builder that allows you to define complex conditions across multiple fields. You can:

*   Combine filters with AND/OR logic
    
*   Build queries across categories, providers, or metadata
    
*   Save and reuse queries for ongoing investigations
    

The query builder is especially useful for large organizations.

## Remediate a secret violation [Copied!](#remediate-a-secret-violation "Copy link to this section")

Cycode provides a number of options to review and remediate secret violations. You can resolve violations (mark them as remediated) in a single location or across a repository or organization. you can also ignore violations to remove them from the findings that are displayed and analyzed by Cycode.

### Resolve a secret [Copied!](#resolve-a-secret "Copy link to this section")

You can take the following actions to resolve a secret.

Action

Description

Violation card

Secret value card

Violations view (grouped by **None**)

Violations view (grouped by **Secret value**)

**Resolve** (button)

Resolve the selected violation.

Yes

Yes

**Resolve all** (button)

Resolve the selected violations (bulk option).

Yes

Yes

**Resolve here** (button/option)

Resolve only the specific violation.

Yes

Yes

**Mark the secret value as resolved** (option)

Resolve all violations that contain the secret value across all sources.

Yes

Yes

Yes

**Resolve in this location** (option)

Resolve violations that contain the secret value in the detected repositories only.

Yes

Yes

Yes

### Ignore a violation [Copied!](#ignore-a-violation "Copy link to this section")

You can take the following actions to ignore a secret violation.

Option

Description

Violation card

Secret value card

Violations view (grouped by **None**)

Violations view (grouped by **Secret value**)

**Ignore**

Ignore the selected violation.

Yes

Yes

**Ignore all**

Ignore the selected violations (bulk option).

Yes

Yes

**False positive**

Mark the secret value as a false positive across all sources Future findings of the same value will be ignored.

Yes

Yes

Yes

Yes

**Ignore here**

Ignore only the specific violation.

Yes

Yes

**Ignore completely**

Ignore the secret value across all sources without marking it as a false positive.

Yes

Yes

Yes

Yes

**Ignore in this location**

Ignore violations that contain the secret value in the detected repositories only.

Yes

Yes

Yes

Yes

### Best Practice [Copied!](#best-practice "Copy link to this section")

Cycode recommends using the following resolve and ignore actions for the specified use cases.

Action

Use case

False positive

You are certain the secret value can’t be exploited.

Resolve

The secret value has been decisively handled, for example key rotation, revocation, or removal.

Ignore hereResolve here

To handle a single secret violation without affecting other instances of the secret value.

Ignore completely

Only if the secret value is safe across all sources.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
