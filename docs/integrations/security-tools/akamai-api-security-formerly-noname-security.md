# Akamai API Security (formerly Noname Security) | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/akamai-api-security-formerly-noname-security

---

# Akamai API Security (formerly Noname Security)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/akamai-api-security-formerly-noname-security.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jul 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Akamai API Security actively tests APIs throughout the software development lifecycle to help you find design flaws, misconfigurations, and vulnerabilities before they are exploited.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

API Security

## Connect Akamai API Security to Cycode [Copied!](#connect-akamai-api-security-to-cycode "Copy link to this section")

1.  Provide a name for the integration.
2.  Get the following parameters from Akamai API Security and apply them in the Cycode connector wizard.
    
    Parameter
    
    Value
    
    **URL**
    
    Provide the URL of the Akamai instance.
    
    **Client ID**
    
    Provide the client ID of the service account created for Cycode.  
      
    **To create a team:**  
    1\. In Akamai, go to **Settings** > **User management** > **Create team**.  
    2\. Select all the groups where the connector should pull findings, and enabled the **Include unassociated incidents/findings** option.  
    3\. Click **Save**.  
      
    **To create a service account:**  
    1\. In Akamai, go to **Service accounts** > **Create service account**.  
    2\. Configure the parameters and set the role to **Viewer**.  
    3\. Click **Save**.
    
    **Client secret**
    
    Provide the client secret of the service account.
    
3.  Click **Connect**.

Note

*   Cycode can only display data for groups that are selected.
*   You must enable the **Include unassociated incidents/findings** option to display this data in Cycode.

## Use cases [Copied!](#use-cases "Copy link to this section")

### Code to runtime - accelerate fixes with ownership and source mapping [Copied!](#code-to-runtime---accelerate-fixes-with-ownership-and-source-mapping "Copy link to this section")

When Akamai flags an issue, Cycode can automatically trace it to the correct repository, team, and commit so the remediation task can get to the right people, right away. This data is easily consumable from the violation card.

With CMDB and code context (owner, service, repository, and commit), Cycode adds business impact to every finding by helping teams focus on what matters most.

![](/assets/image%28712%29.png)

### Detect websites that aren’t protected by Akamai [Copied!](#detect-websites-that-arent-protected-by-akamai "Copy link to this section")

With Cycode’s comprehensive code-to-cloud visibility, customers can easily identify websites that aren’t protected by Akamai API Security.

Use the Context Intelligence Graph in the Graph view to ensure that all web assets are properly secured and monitored across their environment.

![](/assets/image%28713%29.png)

### SAST-to-runtime protection for end-to-end API security [Copied!](#sast-to-runtime-protection-for-end-to-end-api-security "Copy link to this section")

Cycode’s proprietary SAST engine secures API development by identifying and preventing vulnerabilities such as broken authentication and authorization flaws throughout coding, pull request reviews, and repository scans.

At runtime, Akamai continuously identifies real-time exploitation attempts, including BOLA/IDOR and object-level authorization abuse, providing active defense against attacks in production.

Together, Cycode and Akamai deliver complete API protection across the entire software lifecycle, from development to runtime.

### Complete API visibility from code to runtime [Copied!](#complete-api-visibility-from-code-to-runtime "Copy link to this section")

Cycode detects and classifies APIs as they’re defined in source code. Akamai continuously observes APIs in runtime to detect active, unmanaged, and shadow endpoints in live traffic.

Together this provides a single, unified inventory that connects what’s built to what’s running.

Use Cycode’s Inventory view to see a comprehensive list of APIs.

![](/assets/image%28714%29.png)

**Continually Shrink the Attack Surface**

Security teams can immediately reveal gaps between declared and active APIs, detecting shadow or zombie endpoints that may expose sensitive data. With complete visibility across the API landscape, teams can remediate issues faster, strengthen compliance, and maintain continuous governance throughout the API lifecycle.

The Cycode integration with Akamai enables organizations to identify and retire unused, overexposed, or non-compliant APIs, keeping only the ones that are truly needed, fully protected and monitored.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
