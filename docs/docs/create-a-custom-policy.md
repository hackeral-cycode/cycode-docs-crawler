# Create a custom policy from a query | Cycode Docs

Source: https://docs.cycode.com/docs/create-a-custom-policy

---

# Create a custom policy from a query

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/context-intelligence-graph/create-a-custom-policy-from-a-query.md "Edit this page")

Updated on Feb 23, 2026 • Published on Feb 19, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Tenant owners and administrators can create a custom policy from any query that is built or saved in the Context Intelligence Graph.

Custom policies run continuously against your environment and generate violations whenever query results match the defined conditions, so you don’t have to manually check the Context Intelligence Graph for recurring security concerns.

Additionally, custom policies can be used to trigger Cycode workflows. This allows you to automate actions, such as sending Slack notifications or creating Jira tickets, whenever the policy detects a new violation.

Note

For more information about creating automated workflows, go to [Create a workflow](/workflow-automation/create-a-workflow) .

Examples of common custom policies:

*   Alert when a pull request with a failed Cycode status check is merged
    
*   Alert when a repository has no PR scanner configured
    
*   Alert when a user with critical violations is no longer in the IdP
    

## Create a policy [Copied!](#create-a-policy "Copy link to this section")

1.  Build or load the query you want to use as a policy in the Context Intelligence Graph.
    
2.  Refine the query until its results represent exactly the condition you want to detect as a violation.
    
3.  In the menu bar, click **Save as** > **New policy**.
    
4.  In the Custom policy window, configure the following:
    
    Field
    
    Description
    
    **Policy name**
    
    Type a meaningful name for the policy.
    
    **Description**
    
    (Optional) Provide a summary of what this policy detects.
    
    Company remediation guidelines
    
    (Optional) Provide the company guidelines for remediating this type of violation.
    
    **Policy severity**
    
    Select the severity of this type of violation:  
    • **Critical**  
    • **High**  
    • **Medium**  
    • **Low**  
    • **Info**
    
    **Policy category**
    
    Select the category for this policy.
    
    **Policy subcategory**
    
    Not relevant.
    
    **SDLC stage**
    
    (Optional) Select the SDLC stage that should be assigned to this violation:  
    • **Code**  
    • **Build**  
    • **Artifacts**  
    • **Cloud**  
    • **Dependencies**
    
    **Apply this policy for future violations only**
    
    If you want Cycode to scan for this violation only going forward, enable this option.
    
5.  Click **Save**. The policy is now active and will generate violations whenever the query conditions are met.
    

## Manage custom policies [Copied!](#manage-custom-policies "Copy link to this section")

You can view and manage custom policies in the **Policies > Custom policies** view.

Note

For more information about managing custom policies, go to [Custom policies](/policies/create-and-manage-custom-policies/) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
