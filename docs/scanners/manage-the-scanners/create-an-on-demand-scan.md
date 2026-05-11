# Create an on-demand scan | Cycode Docs

Source: https://docs.cycode.com/scanners/manage-the-scanners/create-an-on-demand-scan

---

# Create an on-demand scan

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/manage-the-scanners/create-an-on-demand-scan.md "Edit this page")

Updated on Oct 22, 2025 • Published on Aug 19, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

In addition to creating scheduled and automated scans, Cycode enables you to create on-demand scans for any of your integrated repositories for different violations. An on-demand scan runs on the selected repository’s entire history with real-time monitoring. When the scan is complete, you can see the data in the Violations view.

If you’ve added additional custom policies and want to re-scan the history of specific repositories and to display any violations in the Violations view, you can use the ‘Release’ button, which removes the scan and moves every new violation to the Violations view.

## Manage on-demand scans [Copied!](#manage-on-demand-scans "Copy link to this section")

To view and manage your on-demand scans, go to **Settings > Backoffice > On-Demand Scans**. The data for each scan includes:

Item

Description

Default

**Last scan date**

Date and time that this scan was last run.

Yes

**Repository**

Repository that is scanned.

Yes

**Branch**

Indicates if this is the main branch of the repository.

Yes

**Location**

Name of the organization where the repository is located.

Yes

**Source**

Source code management (SCM) tool used to manage the repository.

Yes

**Duration**

Amount of time it took for the scan to run.

Yes

**Is initial scan**

Indicates whether this is a first scan or a repeat scan.

Yes

**Status**

Status of the scan.

*   Pending
*   Running
*   Error
*   Completed
*   Completed with errors

Yes

**Scan type**

The type of scan:

*   Secrets
*   (Docker images only) Vulnerabilities
*   SAST
*   IaC misconfiguration
*   SCA
*   Change Impact Analysis
    
    Early Access
    
    This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.
    
*   Code context analysis

Yes

**Commits**

(Secrets only) The number of commits that were scanned.

Yes

**Scanned policies**

Yes

**Hidden**

**Triggered by**

After an on-demand scan is created, you can run it from the list at any time.

### Multi-branch selection [Copied!](#multi-branch-selection "Copy link to this section")

When creating an on-demand scan for repositories, you can specify whether to run the the scan on the default branch or on a different branch for the following violation categories:

*   SCA
    
*   SAST
    

Note

You have to enable the configuration for these categories to use multi-branch selection. For details, go to [SCA](/scanners/ast-application-security-testing/sca-software-composition-analysis/configure-the-sca-scanner/scan-multiple-branches) and [SAST](/scanners/ast-application-security-testing/sast-static-application-security-testing/configure-the-sast-scanner/sast-scanning-configuration) .

### Create an on-demand scan for repositories [Copied!](#create-an-on-demand-scan-for-repositories "Copy link to this section")

1.  Click **New Scan**.
    
2.  Select **Code repository** and from the **Violation category** list, select the type of scan you want to run.
    
    Scan type
    
    **Secrets**
    
    1.  From the **Policies** list, select the policies against which you want to scan the code.
    2.  From the **Select scope** options, select the SCM and then the repositories or repositories or organizations you want to scan.
    
    **SAST**
    
    From the **Select scope** options, select the SCM and then the repositories you want to scan.
    
    Note
    
    Select either the default branch or another branch.
    
    **IaC misconfiguration**
    
    From the **Select scope** options, select the SCM and then the repositories you want to scan.
    
    **SCA**
    
    From the **Select scope** options, select the SCM and then the repositories you want to scan.
    
    Note
    
    Select either the default branch or another branch.
    
    **Change Impact Analysis**
    
    From the **Select scope** options, select the SCM and then the repositories you want to scan.
    
    Early Access
    
    This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.
    
    **Code context analysis**
    
    From the **Select scope** options, select the SCM and then the repositories you want to scan.
    
3.  Click **Scan** to save the new scan and run it.
    

### Create an on-demand scan for Docker images [Copied!](#create-an-on-demand-scan-for-docker-images "Copy link to this section")

1.  Click **New Scan**.
    
2.  Select **Container Repository**.
    
3.  From the **Scan type** list, select the type of scan you want to run.
    
    *   **Secrets**
    *   **Vulnerabilities**
4.  In the **Enter tag to scan** field, type the image tag.
    
5.  Select one or more repositories from the list.
    
6.  If a repository has more than one container image, you can select the images that you want to scan. Otherwise Cycode scans all the images in the repository.
    
7.  Click **Scan** to save the new scan and run it.
    

## Scan results [Copied!](#scan-results "Copy link to this section")

Scans can result in one of the following:

*   Success
    
*   Failed
    
*   Entire scan failed to run
    
*   Errors
    
*   Failed to scan certain repositories/code projects: In this case clicking the scan displays a log that displays the errors encountered and how to fix the issues.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
