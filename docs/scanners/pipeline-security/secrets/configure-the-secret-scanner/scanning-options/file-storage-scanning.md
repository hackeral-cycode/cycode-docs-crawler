# File storage scanning | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/scanning-options/file-storage-scanning

---

# File storage scanning

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/scanning-options/file-storage-scanning.md "Edit this page")

Updated on Nov 17, 2024 • Published on Nov 17, 2024

* * *

**THIS FEATURE IS CURRENTLY NEW.**

Cycode’s secret detection engine has the ability to scan cloud file storage for exposed secrets. As file storage is a dynamic environment with lots of changes, it is crucial that a continuous scan of the storage will run and notify for sensitive data being exposed. This will lower the chances of attacks based on exposed sensitive data and overall increase the organizational security posture.

Note

Cycode currently supports AWS S3 file storage. Similar support for GCP storage and Azure Blob is planned for future releases.

## How it works [Copied!](#how-it-works "Copy link to this section")

After completing the [setup](#setting-up-file-storage-scanning) process, Cycode will continuously scan the contents of the selected S3 buckets for the existence of exposed secrets. On an hourly basis, all files that change will be scanned and matching violations will be added.

Additionally,

*   The initial scan (when adding a new bucket into the scan scope) will cover one month back of file changes.
    
*   An on-demand scan can be triggered via the [Cycode REST API](https://docs.cycode.com/reference/scansapiv1scanfilestorage_post) at any time, and it allows a scan beyond 1 month back.
    
*   Currently, only files up to 100MB are scanned.
    

Each secret found generates a violation that can be viewed in the [violations page](/scanners/pipeline-security/secrets/view-and-manage-secret-violations/secret-violation-card) .

Note

AWS S3 file storage scans may incur additional cloud costs on the customer’s end for each scanned file, depending on:

*   The number of files in your storage
*   The total size of the files
*   The frequency of changes in the files

Refer to **[AWS S3 cost calculator](https://calculator.aws/#/addService/S3)** for a more accurate analysis.  
To help you better control such costs, Cycode allows you to determine the scanning scope. Additional details below.

Note that the current limitation of 1MB is designed to protect you against additional charges from AWS. If you’d like to increase this limit, contact your Cycode CSM.

## Setting up file storage scanning [Copied!](#setting-up-file-storage-scanning "Copy link to this section")

### Cloud integration [Copied!](#cloud-integration "Copy link to this section")

To scan files for secrets, you’ll need to grant S3 permissions at both the bucket (`s3:ListBucket`) and the file (`s3:GetObject`) level.

During an initial AWS integration, the bucket textbox will help set permissions for specific buckets and implement the “least privilege” concept. Using a wildcard value (`*`) is possible as well.

1.  Go to **Settings** in the upper right corner, and then in the left-pane, go to **Modules Settings > Secrets > File Storage Scanning**. ![](/assets/image-1731833908384.png)

Note

If there’s no AWS account integrated with Cycode, you’ll need to [integrate an AWS account](/integrations/cloud-and-infrastructure-services/aws/) . Click the link **Integrate your cloud accounts** to switch to the AWS integration setup.

Once you’ve created an integration with AWS, go back to **Scanners > Secrets Scanners > File Storage Scanning** to continue with the file storage setup as described below.

2.  To adjust permissions for an existing AWS integration, turn the **Enable file storage scanning** toggle on to enable the Scan Scope function.
    
3.  You can now specify the AWS account(s) and the S3 bucket(s) you wish to scan. You can also narrow your scan scope to a specific S3 bucket, which helps if your organization uses a large bucket and implements the separation using “paths”,`/”folders”/”prefixes” - same same`. For example: `bucketname/production/files-to-scan` versus `bucketname/dev/files-not-to-scan`.
    
4.  Click the AWS instance to display the different buckets:
    

![](/assets/f8b4386-image.png)

5.  Select the S3 bucket(s) you wish to scan, and then click **Save changes**. The exposed secrets residing in the selected buckets will now turn into violations. You can also use the API to scan specific buckets, as shown [here](https://docs.cycode.com/reference/scansapiv1scanfilestorage_post) .

#### Bucket Permissions [Copied!](#bucket-permissions "Copy link to this section")

1.  In some cases, you might not have the required permissions to scan the S3 bucket. In this case, you’ll see an orange indicator.

![](/assets/ce5cdfc-image.png)

2.  Hover over the indicator to display the following message:

![](/assets/dff00c7-image.png)

3.  To obtain the required permissions, click the **Update integration** link in the message. This displays the AWS integration update window, which provides the details on how to update the permissions for AWS.

![](/assets/825a35c-image.png)

4.  Once completed, click **Close & Refresh**. This brings you back to the Scan Scope window where the AWS instance is now enabled.

### Viewing violations [Copied!](#viewing-violations "Copy link to this section")

Under the violations page, filter the new violations using the filter component: filter by “secret tag” and the value of “File Storage”.

![](/assets/screenshot-2023-03-05-at-18-02-32.png)

Alternatively, use the Cycode knowledge graph to slice and dice relevant violations. For example, list all buckets with exposed secrets using the following query:

![](/assets/screenshot-2023-03-05-at-18-22-40.png)

The Violation contains the bucket as well as the exact file and content snippet that contain the secret for effective resolving.

![](/assets/screenshot-2023-03-05-at-18-48-06.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
