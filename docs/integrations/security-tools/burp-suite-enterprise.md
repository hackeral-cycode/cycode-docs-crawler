# Burp Suite Enterprise | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/burp-suite-enterprise

---

# Burp Suite Enterprise

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/burp-suite-enterprise.md "Edit this page")

Updated on Jan 20, 2026 • Published on Oct 27, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Burp Suite Enterprise enables pulling DAST vulnerabilities from Burp so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

DAST

## Permissions [Copied!](#permissions "Copy link to this section")

Permission

Access type

Scan viewer (built-in role)

Read

## Connect Burp Suite Enterprise to Cycode [Copied!](#connect-burp-suite-enterprise-to-cycode "Copy link to this section")

### Get an API key [Copied!](#get-an-api-key "Copy link to this section")

1.  Sign in to the Burp Suite Enterprise console.
    
2.  Go to **Team**–>**Add a new user**.
    
3.  Configure the new user as follows:
    
    Item
    
    Description
    
    First name
    
    First name of the user
    
    Last name
    
    Last name of the user
    
    Username
    
    Meaningful name for the user in the system
    
    Email
    
    Valid email address
    
    Login type
    
    Select **API Key**
    
    Enabled
    
    Yes
    
    Groups
    
    Select **Scan viewers**
    
    ![](/assets/image%28564%29.png)
    
4.  Copy the API key and store it somewhere safe.
    

### View Burp Suite Enterprise data in the Context Intelligence Graph [Copied!](#view-burp-suite-enterprise-data-in-the-context-intelligence-graph "Copy link to this section")

The following entities are populated in the the RIG:

*   Website
*   Endpoint
*   Violation

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
