# Storage Settings | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/storage-settings

---

# Storage Settings

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/storage-settings.md "Edit this page")

* * *

Important

This feature is currently in BETA and is **only** available to Enterprise customers.

Cycode enables its customers the option of storing Cycode’s violation data in your own S3 compatible account (limited to one storage configuration per tenant).

## Setting up Storage Configuration [Copied!](#setting-up-storage-configuration "Copy link to this section")

To create the storage account, you’ll need to create a create a storage configuration. Note that this requires an admin or higher role.

1.  Go to **Integrations > Storage Settings**:

![](/assets/258ad79-image.png)

2.  Enter the following details:
    
    1.  Access Key ID
    2.  Secret Access Key
    3.  Service URL
    4.  Region
    5.  Bucket Name
3.  Specify whether you wish to use Cycode’s storage as a fallback (see explanation below).
    
4.  Click **Save**, and then click **Test connection** to verify that the connection works properly.
    
5.  You can also select **Reset to default** and start over.
    

## Using Cycode’s Storage as a Fallback [Copied!](#using-cycodes-storage-as-a-fallback "Copy link to this section")

If for any reason the external storage credentials become invalid, Cycode enables you the option of using our S3 credentials as a fallback mechanism. This option is enabled by default during setup; however, you can choose to opt-out if you prefer.

Warning

If you choose to opt-out of this option, if your storage credentials become invalid, all detection data will be lost.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
