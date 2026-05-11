# Traceable | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/traceable

---

# Traceable

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/traceable.md "Edit this page")

Updated on Sep 25, 2025 • Published on Oct 9, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Traceable actively tests APIs throughout the software development lifecycle to help you find design flaws, misconfigurations, and vulnerabilities before they are exploited.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

API Security

## Permissions [Copied!](#permissions "Copy link to this section")

Role

Description

Global Reader

[Traceable’s roles and permissions](https://docs.traceable.ai/docs/rbac#roles-and-privileges)

## Connect Traceable to Cycode [Copied!](#connect-traceable-to-cycode "Copy link to this section")

1.  Provide a name for the integration.
2.  Get the following parameters from Traceable and apply them in the Cycode connector wizard.
    
    Parameter
    
    Value
    
    **Base URL**
    
    The URL for your Traceable application. The default URL is `https://api.traceable.ai/`.  
      
    **Note**: This value can be edited.
    
    **API key**
    
    To get the API key:  
    1\. In the Traceable console, click your profile icon and go to **My preferences**.  
    2\. Go to **API token** > **Generate API token**.  
    3\. Provide a name for the token, then click **Generate**.
    
3.  In the Cycode connector wizard, click **Connect**.

## FAQs [Copied!](#faqs "Copy link to this section")

### On which property is project selection based? [Copied!](#on-which-property-is-project-selection-based "Copy link to this section")

When configuring the connector, you can choose for which **services** you want to pull vulnerabilities.  
For example: Here is the list of services in Traceable, lets assume we picked only ’nginx-gateway’:  
![](/assets/image%28642%29.png)

After using the credentials to authenticate your Traceable account, you can select the service for which you want to pull endpoints and violations into Cycode:  
![](/assets/image%28643%29.png)

After you select the service, in the connector Overview tab you can see the number of vulnerabilities and projects Cycode retrieved from this service.  
![](/assets/image%28644%29.png)

### How can I validate that the data is synced correctly from Traceable to Cycode? [Copied!](#how-can-i-validate-that-the-data-is-synced-correctly-from-traceable-to-cycode "Copy link to this section")

In Traceable, you can filter based on a service and on issue name, and look for the same one in Cycode. For example:  
Here we have in Traceable the issue **Basic Authentication Used** filtered by the service **nginx-gateway**:  
![](/assets/image%28645%29.png)

In Cycode, filter by the **Policy** name that represents the Issue name in Traceable, and by the **Security Tool Project** that represents the service you selected:  
![](/assets/image%28646%29.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
