# Secret violation card | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-violation-card

---

# Secret violation card

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-violation-card.md "Edit this page")

Updated on Nov 17, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The secret violation card provides detailed information about the selected violation. It contains the following tabs:

*   Overview
    
*   Risk analysis
    
*   Related violations
    
*   Remediation
    
*   Audit
    
*   Comments
    
*   Graph
    

### Location information [Copied!](#location-information "Copy link to this section")

The breadcrumbs above the tabs point to the precise location of the secret violation.

### Secret overview tab [Copied!](#secret-overview-tab "Copy link to this section")

Note

For information about other tabs in the violation cards, go to [Violation cards](/view-and-manage-violations/violation-card/) .

The tables below describes the information in the Overview tab of the secret card.

### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

The tiles that are displayed depend on the secret type and active filters.

Item

Description

Risk score

The risk score calculated by Cycode and assigned to the violation.

Source

SCM and other sources where the secret was detected.

Location

Version of the code where the secret was detected.

Exists in latest code

If a secret is detected in the latest code, this tile is visible.

Publicly exposed

If a secret is detected in one or more public repositories, this tile is visible.

AI confidence score

Measures the likelihood that a detected generic secret is valid.

Note

Cycode’s models run in our VPC and are trained without using any customer data.

### Secret information [Copied!](#secret-information "Copy link to this section")

Item

Description

Code snippets

Link to the code that contains the secret, the line in the code, and the secret as it appears in the code snippet.

Secret validity

Indicates whether the secret is active or not. You can manually trigger a validity check.

### General info [Copied!](#general-info "Copy link to this section")

You may see one or more of these fields, depending on the type of secret and its location.

Item

Description

**Secret tags**

Shows any tag associated with this violation.

Note

For a comprehensive list of Cycode secret tags, go to [Secret tags](/scanners/pipeline-security/secrets/prioritize-secret-violations/secret-tags).

**Public repository owner**

The name of the repository owner, if the secret violation was detected in a public repository.

**Location type**

Type of asset where the secret violation was discovered, such as a Confluence page or Slack message.

**Detected at**

Date and time when the secret was first detected.

**Last modified**

Date and time the file (for example, a page) with the secret violation was last updated.

**Last modified by**

Username of the user that made the last change to the file with the secret violation.

**Library type**

Type of Sharepoint library where the file with the secret violation resides.

**File type**

Type of file that contains the secret violation, for example a document or image.

**Introduced at**

Date and time when the secret was first inserted.

**Sent time**

If the secret violation was in a communication, date and time that it was sent.

**JWT expiration date**

Expiration date of the JSON web token, if the secret type is JWT.

**Author**

User that introduced the secret.

**Committer**

User that performed the commit containing the secret.

**User email (SCM)**

User email from the SCM credentials.

**Affiliation when detected**

The affiliation of the user (for example, Cycode member) when the secret was detected.

**Sender**

If the secret violation was in a communication, the user that sent it.

**Cycode project**

The project where the violation occurred.

Note

If there are multiple Cycode projects with this secret, the number of projects is displayed. Hover over the number to view the project names.

**Domain URL**

URL of domain where the secret violation was detected.

**Image URL**

URL of the container image.

**File path**

File path inside the source.

**Priority**

The priority assigned to the secret (if one was added by a member)

### Exposure path [Copied!](#exposure-path "Copy link to this section")

The exposure path (available for secrets detected in code, build, and artifact integrations) shows where the violation is located, where it is potentially exposed, and the relationship between the points.

For more information, go to [Exposure paths](/view-and-manage-violations/exposure-paths) .

### Labels [Copied!](#labels "Copy link to this section")

This areas shows all of the labels associated with the violation. You can also add custom labels as needed.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
