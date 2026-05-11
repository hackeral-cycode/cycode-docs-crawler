# Prisma Cloud | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/prisma-cloud

---

# Prisma Cloud

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/prisma-cloud.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Palo Alto Networks (PAN) Prisma Cloud enables you to pull Container Image vulnerabilities from Prisma Cloud and to correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The connector currently pulls only container image vulnerabilities.

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

## Setup [Copied!](#setup "Copy link to this section")

### Generate an Access Key ID and Secret Access Key [Copied!](#generate-an-access-key-id-and-secret-access-key "Copy link to this section")

1.  Sign in to Prisma Cloud as a System Administrator.
    
2.  Go to **Settings** > **Access Control** and add a new role.
    
    ![](/assets/4dfec4b-image.png)
    
3.  Provide a descriptive name and description for the role you created:
    
    1.  Permissions Group: Account Group Read Only.
    2.  Account Group (optional): Choose which account group this role will have access to.
    3.  Resource List (optional): Filter for specific assets based on an existing configuration within your Prisma Cloud account.
    
    ![](/assets/2897882-image.png)
    
4.  Create a new user and assign the newly created role from step 3.
    
5.  Verify that the option **Allow user to create API Access Keys** is selected.
    
    ![](/assets/72a91e9-image.png)
    
6.  Click **Save and close** to add the new user.
    
7.  Sign in to Prisma Cloud with the newly created user.
    
8.  Go to **Settings** > **Access Control** and select **Add Access Key**.
    
9.  Verify that the **Enable Expiration** option is disabled (toggled off). If not disabled, when the token expires, the connector will stop collecting and won’t update Cycode.
    
    ![](/assets/e32f914-image.png)
    
10.  Copy the Access Key ID and Secret Access Key and store them somewhere safe.
     
     ![](/assets/f5534fd-image.png)
     
11.  Click **Done** to create the key.
     

## FAQs [Copied!](#faqs "Copy link to this section")

#### Where can I see PAN Prisma Cloud vulnerabilities? [Copied!](#where-can-i-see-pan-prisma-cloud-vulnerabilities "Copy link to this section")

Currently, because Prisma Cloud connector supports only container image vulnerabilities, you can see the data under **Violations > Container Security > Vulnerability Found in Container Image policy**.

For a quick view, you can filter by Security Tool and select **PAN Prisma Cloud**.

![](/assets/64e1755-image.png)

#### Will the connector support more asset types? [Copied!](#will-the-connector-support-more-asset-types "Copy link to this section")

Yes. Container image vulnerabilities are just the beginning. For specific requests, reach out to your Customer Success Manager.

#### How can I get the root cause in code that causes the vulnerability in Prisma Cloud? [Copied!](#how-can-i-get-the-root-cause-in-code-that-causes-the-vulnerability-in-prisma-cloud "Copy link to this section")

To get the root cause, you’ll need to connect the relevant Artifact integration.

![](/assets/2b28e19-image.png)

Afterwards, in the Cycode Graph view, you can create a query in the Context Intelligence Graph to correlate the container image vulnerability and the relevant code entity (repository, commit, etc.) using the Dockerfile.

![](/assets/45ae9f6-image.png)

![](/assets/6f7aef2-image.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
