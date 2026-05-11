# Storage | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/storage

---

# Storage

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/storage.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

Ensure all data stored in the S3 bucket have versioning enabled

With versioning disabled, changes or deletions will not be reversible.

High

AWS

Rego Query

Ensure S3 bucket has MFA delete enabled

Enable MFA delete for either Change the versioning state of your bucket or Permanently delete an object version. Default is false. This cannot be used to toggle this setting but is available to allow managed buckets to reflect the state in AWS

High

AWS

Authentication, Rego Query

Public Write Access Enabled on S3 Bucket ACL

This policy checks the ACL settings of an S3 bucket. It is crucial to restrict public write access to S3 buckets to prevent unauthorized data modifications.

High

AWS

Public Exposure

S3 Bucket Detected with Public Read Access

This policy checks if any S3 buckets are configured with ACLs that allow public read access. To maintain a secure and compliant infrastructure, public read access should not be granted to S3 buckets.

High

AWS

Public Exposure

Publicly Accessible GCP Cloud Storage Bucket Detected

This policy checks if Google Cloud Storage buckets are anonymously or publicly accessible by verifying the ‘members’ attribute. For robust data security and privacy control, ‘allUsers’ and ‘allAuthenticatedUsers’ should not be included in the ‘members’ attribute of the storage bucket IAM binding.

High

GCP

Public Exposure, Rego Query

Google Storage Bucket Level Access Not Configured or Disabled

This policy ensures that the Uniform Bucket Level Access is correctly configured for Google Storage buckets. This is crucial for management of access control at bucket level and can help avoid potential security vulnerabilities.

Medium

GCP

Permissions, Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
