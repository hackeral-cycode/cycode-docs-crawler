# Secret Management | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/secret-management

---

# Secret Management

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/secret-management.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

Alexa ASK Skill Authentication Configuration RefreshToken Incorrectly Configured

This policy verifies that the ‘RefreshToken’ of the ‘AuthenticationConfiguration’ of an ‘Alexa::ASK::Skill’ resource is neither a plaintext string nor does it start with ‘{{resolve:secretsmanager:’ or ‘{{resolve:ssm-secure:’. The RefreshToken should be secure and not easily accessible or visible, hence it is crucial that it is not a plaintext string or does not start with the aforementioned strings.

Medium

AWS

Public Exposure, Rego Query

AWS Secrets Manager Secret Missing KmsKeyId Definition

This policy checks if the AWS Secrets Manager secret explicitly specifies the KmsKeyId. Specifying the KmsKeyId allows the secret to be shared across accounts, which is crucial for maintaining access management.

Medium

AWS

Rego Query

AWS SQS Queue Server-Side Encryption Not Configured

This policy checks if the AWS SQS Queue has a KMS Master Key defined. This key is vital for data encryption and ensuring secure transmission of messages. Lack of it could expose sensitive information to potential security threats.

Medium

AWS

Rego Query

EBS Volume Lacks KmsKeyId Specification

This policy verifies that an Amazon Elastic Block Store (EBS) volume has specified a KMS Key Id. Encrypting EBS volumes with a KMS Key Id enhances data protection.

Medium

AWS

Rego Query

Hard-Coded AWS Access Key Detected in EC2 User Data

This policy checks for the existence of hard-coded AWS Access Keys in EC2 user data fields. Sensitive credentials such as AWS Access Keys should never be hard-coded directly into the infrastructure configurations as it can lead to potential security breaches.

Medium

AWS

Credentials, Rego Query

Hardcoded AWS Access Key Detected in Lambda Function

This policy checks for hardcoded AWS access keys included in AWS Lambda function environments variables. It is a bad practice to include sensitive credentials like access keys in the code. It increases the risk of the credentials getting leaked. The keys should be securely managed and access to them should be limited and controlled.

Medium

AWS

Rego Query

Misconfigured or Missing S3 Bucket Encryption

This policy checks whether AWS S3 Bucket encryption is properly configured with a master key. A master key is required when using encryption algorithms other than AES256. Ensuring proper bucket encryption is critical for protecting sensitive data and maintaining compliance.

Medium

AWS

Rego Query

Missing KMS Key ID in AWS SNS Topic Configuration

This policy checks if AWS SNS topics are encrypted using a KMS key. Encrypting SNS topics with a KMS key enhances data security by adding an extra layer of access control and protection.

Medium

AWS

Rego Query

Missing KMS Master Key in AWS SQS Queue Configuration

This policy checks if the AWS SQS Queue has a KMS Master Key defined. This key is vital for data encryption and ensuring secure transmission of messages. Lack of it could expose sensitive information to potential security threats.

Medium

AWS

Rego Query

Hardcoded Default Value Detected in Secure Parameters

This policy checks that secure parameters do not contain hardcoded default values in ARM templates. It is crucial to maintain security as hardcoded values can lead to potential security risks.

Medium

Azure

Credentials, Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
