# Bring Your Own Storage (BYOS) | Cycode Docs

Source: https://docs.cycode.com/integrations/scm-source-code-management-tools/bring-your-own-storage-byos

---

# Bring Your Own Storage (BYOS)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/scm-source-code-management-tools/bring-your-own-storage-byos.md "Edit this page")

Updated on Nov 18, 2024 • Published on Oct 27, 2024

* * *

Cycode’s Bring Your Own Storage (BYOS) feature enables you to store code snippets or temp clones in your own storage instead of Cycode’s S3 buckets. This is particularly useful in cases in which large enterprises prefer not to have their data stored in the cloud.

## Which storage options are supported? [Copied!](#which-storage-options-are-supported "Copy link to this section")

This feature is not a generic BYOS; Cycode currently supports only AWS (and not Google, Azure, Ceph, etc).

## Permissions [Copied!](#permissions "Copy link to this section")

To create the storage account, you’ll need to create a create a storage configuration. Note that this requires an admin or higher role.

## Setting up your storage [Copied!](#setting-up-your-storage "Copy link to this section")

1.  Go to **Settings > Integrations > Storage Settings**.

![](/assets/bring-your-own-storage-byos.png)

2.  Create an IAM role & policy using the AWS CloudFormation template provided in the UI.
    
3.  Select the option “I acknowledge that AWS CloudFormation might create IAM resources” and click **Create Stack**.
    
4.  Connect your account to Cycode by going to the Outputs in the stack page, looking for the Role’s Amazon Resource Number (ARN) and the External ID and copy them.
    
5.  Paste the ARN (Amazon Resource Number).
    
6.  Enter the following details:
    
    1.  External ID number.
    2.  Service URL.
    3.  Region.
    4.  Bucket name.
7.  Click **Save**, and then click **Test connection** to verify that the connection works properly.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
