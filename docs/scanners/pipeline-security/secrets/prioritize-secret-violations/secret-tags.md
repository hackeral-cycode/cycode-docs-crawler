# Secret tags | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/prioritize-secret-violations/secret-tags

---

# Secret tags

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/prioritize-secret-violations/secret-tags.md "Edit this page")

Updated on Nov 17, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Secret tags provide metadata about where a secret was detected and how it is classified. They are automatically assigned to violations, helping you quickly understand the context of exposure or identify potential false positives.

### Filter the violations view by tags [Copied!](#filter-the-violations-view-by-tags "Copy link to this section")

You can filter detected secrets by tags to refine results and prioritize remediation. For example, use the specified tags to investigate the following use cases:

*   To focus on AI-validated findings, select **Verified by AI**.
    
*   To investigate exposure in collaboration platforms, select **Found in Slack** or **Found in Jira Issue**.
    
*   To reduce noise, filter select secret tags like **Low entropy** or **Fake indicator value**.
    

**To filter by tags**

1.  In the **Violations > Secrets** view, start to add a filter and click **Secrets**.
    
2.  In the list of Secrets filter options, click **Secret tag**.
    
3.  Select one or more secret tags and verify that the required operator (**OR** or **AND**) is enabled.
    

## Cycode secret tags [Copied!](#cycode-secret-tags "Copy link to this section")

### Exposure risk [Copied!](#exposure-risk "Copy link to this section")

Tag

Description

**Publicly exposed**

Found in a repository that is publicly accessible.

**Private organization asset**

Found in a private repository within an integrated organization.

**Deactivated**

The secret validity status changed from Active to Inactive.

### Secret locations (infrastructure and code) [Copied!](#secret-locations-infrastructure-and-code "Copy link to this section")

Tag

Description

**Verified by AI**

Indicates the secret has been validated by Cycode AI.

**Organization Repository**

Found in one of the organization’s repositories that Cycode monitors.

**Personal developer repository**

Found in a user’s personal repository.

**Kubernetes resource**

Found in a Kubernetes cluster.

**CI/CD Logs**

Found in a build or pipeline log.

**Code snippet**

Found in a public snippet repository, namely GitHub gist, GitLab snippet, or Bitbucket snippet.

**Test file**

Found in a file whose path or name contains `test`. Examples:`test/a.txt``a/test.txt``a/txt.test`

**Exists in latest code**

Found in the latest commit of any branch.

**Not in latest code**

Not found in the latest commit of any branch.

**Potentially leaked repository**

Found in a public repository that was potentially leaked from an internal repository.

**Docker Image**

Found in a Docker image.

**Binary file**

Found in a non-code file.

**Shared file**

Found in file that was shared in a productivity or other type of tool, such as a document in Slack.

**Shared image**

Found in an image file that was shared in a productivity or other type of tool, such as a screen capture in Microsoft Teams.

### Secret locations (collaboration tools) [Copied!](#secret-locations-collaboration-tools "Copy link to this section")

Tag

Description

**Found in Slack**

Found in a public Slack channel.

**Found in Microsoft Teams**

Found in a public Microsoft Teams channel.

**Found in Jira Issue**

Found in a Jira issue.

**Found in Jira Comment**

Found in a Jira comment.

**Found in Jira Data Center Issue**

Found in a Jira Data Center issue.

**Found in Jira Data Center Comment**

Found in a Jira Data Center comment.

**Found in Confluence**

Found in a Confluence page.

**Found in Confluence Data Center**

Found in a Confluence Data Center page.

### Likely false positives [Copied!](#likely-false-positives "Copy link to this section")

These tags help identify potential false positives by analyzing the context and quality of the detected secret.

Tag

Description

**Fake indicator surrounding**

Secret is surrounded by words/phrases such as `dummy_password` or `test_api_key` that indicate the secret is fake.

**Fake indicator value**

The secret itself contains keywords like `example_token` or `debug_mode`, suggesting it isn’t a true secret.

**Equal to context**

Secret matches surrounding text (for example, value `username` next to variable `user_name`), making it derivable and non-secret.

**Multiple occurrences**

The same value appears repeatedly in the file, reducing the likelihood it is a real secret.

**Low entropy**

Secret lacks randomness/complexity, indicating it is weak or not a real credential.

**Short secret**

Secret is too short to be considered a valid credential.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
