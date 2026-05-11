# Manage policies | Cycode Docs

Source: https://docs.cycode.com/policies/manage-policies

---

# Manage policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/policies/manage-policies.md "Edit this page")

Updated on Nov 11, 2025 • Published on Nov 24, 2024

* * *

## Viewing policies [Copied!](#viewing-policies "Copy link to this section")

To view policies, click the **Policies** tab. This displays the Policies window.

![](/assets/f8a6003-image.png)

## Viewing policy details [Copied!](#viewing-policy-details "Copy link to this section")

Each policy includes the following information:

*   **Severity** - either Info, Low, Medium, High, or Critical
    
*   **Policy** - the policy name
    
*   **Sub Category** - the sub-category the policy applies to
    
*   **Source** - the policy monitors code from the listed sources, including those listed in the following table:
    

Policy category

Scans one or more of these sources

Custom

Source control integrations:

*   GitHub
*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Bitbucket Cloud
*   Bitbucket Server

Cloud & Infrastructure:

*   Azure Devops Cloud
*   Kubernetes

Microsoft Azure Resource Manager (ARM):

*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Azure Devops Cloud

Secrets Detection

Source control integrations:

*   GitHub
*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Bitbucket Cloud
*   Bitbucket Server
*   Azure DevOps
*   Azure DevOps Server
*   Gerrit

Leaks

Source control integrations:

*   GitHub
*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Bitbucket Cloud
*   Bitbucket Server
*   Gerrit

SAST

Source control integrations:

*   GitHub
*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Bitbucket Cloud
*   Bitbucket Server
*   Azure DevOps
*   Azure DevOps Server
*   Gerrit

SCA

Source control integrations:

*   GitHub
*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Bitbucket Cloud
*   Bitbucket Server
*   Azure DevOps
*   Azure DevOps Server
*   Gerrit

Leaks

Source control integrations:

*   GitHub
*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Bitbucket Cloud
*   Bitbucket Server
*   Gerrit

IaC

Cloud & IaC sources:

*   AWS
*   GCP
*   Azure
*   Kubernetes

Cloud & IaC providers:

*   Cloud Formation
*   Arm
*   Terraform
*   Kubernetes

CI/CD Security

Source control integrations:

*   GitHub
*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Bitbucket Cloud
*   Bitbucket Server
*   Azure DevOps
*   Azure DevOps Server
*   Gerrit

CI/CD integrations:

*   Jenkins
*   CircleCI

Container Security

Source control integrations:

*   GitHub
*   GitHub Enterprise
*   GitLab Cloud
*   GitLab Enterprise
*   Bitbucket Cloud
*   Bitbucket Server
*   Azure DevOps
*   Azure DevOps Server
*   Gerrit

Cloud & IaC sources:

*   AWS
*   GCP
*   Kubernetes

Cloud Security

Cloud & IaC sources:

*   AWS
*   GCP
*   Azure

*   **Policy Label** - the policy labels for grouping related policies
    
*   **SDLC Stage** - the SDLC stage this policy applies to
    
*   **Enabled** - indicates whether or not the policy is enabled
    

You can find policies for each of the different categories provided by Cycode, as described [Policies](/policies/) .

From here, you can

*   Enable or disable each policy
    
*   Filter the list by **Severity**, **Source**, or **Enabled** status
    
*   Sort the list by **Severity**
    
*   Change the **Severity** of a policy
    

## Enabling/disabling a policy [Copied!](#enablingdisabling-a-policy "Copy link to this section")

To enable or disable a policy, toggle the button at the right end of each row.

![](/assets/3849203-image.png)

## Filtering the list of policies [Copied!](#filtering-the-list-of-policies "Copy link to this section")

To filter the list of policies by the different options in that category, click the filter button from the right of the search bar and select the options you want to display.

![](/assets/policies-filters.png)

## Sorting policies [Copied!](#sorting-policies "Copy link to this section")

To sort the policies in increasing or decreasing order of severity, click the sort icon beside the **Default Severity** label.

![](/assets/2f48691-image.png)

## Changing a policy’s severity [Copied!](#changing-a-policys-severity "Copy link to this section")

To change the severity of a specific policy, click the drop-down arrow beside its current severity and select the desired severity level.

![](/assets/19f0478-policies-severity.png)

## Setting remediation guidelines (aka company guideline) [Copied!](#setting-remediation-guidelines-aka-company-guideline "Copy link to this section")

Policy remediation (added using the Company Guideline field) is an optional feature that you can add to both custom and existing Cycode policies. To learn more, see [Setting company custom remediation guidelines](/policies/company-custom-remediation-guidelines) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
