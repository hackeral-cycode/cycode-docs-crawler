# Prioritize secret violations | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/prioritize-secret-violations

---

# Prioritize secret violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/prioritize-secret-violations/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Secret violations pose varying levels of risk. Some are active and exploitable, while others may have already been revoked or removed from the latest code. To help teams focus on what matters most, Cycode provides prioritization capabilities that reduce noise and highlight high-risk exposures so they can be addressed first.

## Secret validity check [Copied!](#secret-validity-check "Copy link to this section")

Cycode can automatically check whether a detected secret is active, inactive, or unverifiable. This allows teams to:

*   Prioritize active secrets for immediate remediation.
    
*   Deprioritize secrets that are inactive or disabled.
    
*   Filter violations by validity status.
    

For more information, go to [Secret validity status](/scanners/pipeline-security/secrets/prioritize-secret-violations/secret-validity-status) .

## Secret tags [Copied!](#secret-tags "Copy link to this section")

Cycode automatically assigns tags to secret violations that are detected during scanning. These tags can be used to filter and identify critical issues, and to resolve false positives and violations that don’t pose a risk to your organization.

For more information, go to [Secret tags](/scanners/pipeline-security/secrets/prioritize-secret-violations/secret-tags) .

## Comprehensive filtering [Copied!](#comprehensive-filtering "Copy link to this section")

Cycode offers a rich set of filters to refine the list of detected violations and focus on high-priority issues. For example, you can filter by:

*   Prioritization (such as risk score, severity, SLA status, or priority).
    
*   Remediation (such as assignee or ticket ID).
    
*   Location (such as repository, branch, or source).
    
*   Time (such as created date or updated date).
    
*   Secrets (such as secret tag or secret type).
    

## Advanced queries using the Context Intelligence Graph [Copied!](#advanced-queries-using-the-context-intelligence-graph "Copy link to this section")

For advanced use cases, Cycode provides a query builder in the Graph view that allows you to define complex conditions across multiple fields.

This query builder, called the Context Intelligence Graph, supports the following:

*   Combining filters with AND/OR logic
    
*   Building queries across categories, providers, or metadata.
    
*   Saving and reusing queries for ongoing investigations.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
