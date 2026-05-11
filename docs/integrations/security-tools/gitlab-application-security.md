# GitLab Application Security | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/gitlab-application-security

---

# GitLab Application Security

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/gitlab-application-security.md "Edit this page")

Updated on Jun 12, 2025 • Published on Jun 12, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The GitLab Application Security connector retrieves vulnerability data from GitLab’s Vulnerability Report, specifically targeting SAST (Static Application Security Testing) and Container Image Scanning results.

Note

*   In order to connect to GitLab for application security purposes, you need an existing integration with GitLab Self-Managed.
    
*   In order for Cycode to retrieve data from the GitLab vulnerability report, the user for the GitLab Self-Managed integration must have the **View vulnerability report** permission assigned, as described in the [GitLab docs](https://docs.gitlab.com/user/permissions/#project-members-permissions) .
    
*   For more information, go to [GitLab Self-Managed](/integrations/scm-source-code-management-tools/gitlab-self-managed) .
    

## Domain [Copied!](#domain "Copy link to this section")

SASTContainer security

## Configure data fetching options [Copied!](#configure-data-fetching-options "Copy link to this section")

If you have a GitLab Self-Managed integration, you can configure Cycode to retrieve security violations from organizations that are part of that integration.

1.  In the Cycode connector wizard, configure the following:
    
    1.  Select one or more organizations from the list.
    2.  Select the relevant violation categories. Available options: **SAST** and **Container security**.
2.  Click **Save Changes**.
    

After Cycode finishes retrieving the requested violations from the specified organizations, you can see them in the [Violations view](/view-and-manage-violations/) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
