# Coverity Static Analysis (formerly Coverity) | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/coverity-static-analysis-formerly-coverity

---

# Coverity Static Analysis (formerly Coverity)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/coverity-static-analysis-formerly-coverity.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector for Coverity Static Analysis enables pulling vulnerabilities from Coverity so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

This connector is specific to the Coverity on-premise product. If you’re using Coverity on Polaris, go to [Coverity on Polaris](/integrations/security-tools/coverity-on-polaris) .

## Domain [Copied!](#domain "Copy link to this section")

SAST

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The Cycode connector supports version 2023.3.4 and higher of Coverity Static Analysis.
*   Cycode needs a valid username and password with the permissions listed in [Permissions](/integrations/security-tools/coverity-static-analysis-formerly-coverity#permissions) below.

### Permissions [Copied!](#permissions "Copy link to this section")

Permission

Access rights

View issues

Read

View source

Read

Access web services

Read

Log in to Coverity Connect

Read

## Connect Coverity Static Analysis to Cycode [Copied!](#connect-coverity-static-analysis-to-cycode "Copy link to this section")

1.  Sign in to the Coverity platform as an administrator.
    
2.  Go to **Configuration**–>**Roles**.  
    ![](/assets/d1864b4-image.png)
    
3.  To add a role for Cycode, click **Add** and provide a meaningful name and description for the new role.
    
4.  Enable the permissions listed in [Permissions](/integrations/security-tools/coverity-static-analysis-formerly-coverity#permissions) and click **Create**.  
    ![](/assets/image%28299%29.png)
    
5.  Go to **Configuration** > **Users & Groups** and assign the new role to a new user that you create for Cycode (or you can dedicate an existing user).
    
    Note
    
    If the user you create or select is disabled or deleted, or the password is changed, the connector won’t work.
    
6.  Apply the username and password of the Cycode user when you configure the Coverity connector as a Cycode integration.
    

## FAQs [Copied!](#faqs "Copy link to this section")

#### Which Cycode policies show the Coverity vulnerabilities? [Copied!](#which-cycode-policies-show-the-coverity-vulnerabilities "Copy link to this section")

Cycode creates custom policies based on the ’type’ property in Coverity. For example, a vulnerability in Coverity that holds the type ‘OS Command Injection’ will generate a new custom policy in Cycode with that name.

![](/assets/5cfc58c-image.png)

![](/assets/00a201f-image.png)

You can view these policies in Cycode as follows: **Polices > Filter by > Policy Label = Coverity**

#### Are the Coverity vulnerabilities correlated with Cycode’s SAST? [Copied!](#are-the-coverity-vulnerabilities-correlated-with-cycodes-sast "Copy link to this section")

No. SAST doesn’t contain an indicator for the exact vulnerability (for example, CVE), therefore Cycode can’t correlate between two different sources.

#### Does Cycode enrich the vulnerabilities with data from other connectors? [Copied!](#does-cycode-enrich-the-vulnerabilities-with-data-from-other-connectors "Copy link to this section")

Yes. If your **Project** represents the repository name, and **Stream** represents the branch name, Cycode can provide more information about the repository itself. For example, if your repository is publicly exposed, Cycode will indicate this vulnerability and add it to the violation risk score.

#### Can I see the Coverity vulnerabilities in theContext Intelligence Graph? [Copied!](#can-i-see-the-coverity-vulnerabilities-in-thecontext-intelligence-graph "Copy link to this section")

Yes. You can search for all Coverity data in the graph using the following query:

![](/assets/8517cdb-image.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
