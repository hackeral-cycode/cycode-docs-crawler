# Cloud storage configuration | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/cloud-storage-configuration

---

# Cloud storage configuration

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/cloud-storage-configuration.md "Edit this page")

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

The details for the various supported S3 storage methods can be found below.

## Minio [Copied!](#minio "Copy link to this section")

This is the default method used for S3 storage. This is installed as part of the [Infrastructure install command](/cycode-enterprise-server/install-the-cycode-enterprise-server#installation-steps) . If used, there is no need to do anything further to ensure this S3 storage method works with the Cycode install.

## AWS S3 Bucket [Copied!](#aws-s3-bucket "Copy link to this section")

Using AWS S3 buckets will require a few items and changes to the installation to ensure everything works as expected.

### S3 Bucket Settings [Copied!](#s3-bucket-settings "Copy link to this section")

1.  The following permissions should be assigned to the S3 Bucket you create for the Cycode installation (see the [variables breakdown](#aws-s3-variables-breakdown) section for details on the expected values):
    
    ```
     1
     2
     3
     4
     5
     6
     7
     8
     9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    21
    22
    23
    24
    ```
    
    ```json
    {
      "Sid": "DownloadandUploadTenants",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetObjectVersionAcl",
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:PutObjectVersionAcl",
        "s3:DeleteObject", 
        "s3:DeleteObjectVersion"
      ],
      "Effect": "Allow",
      "Resource": "{{aws_s3_bucket.tenants-aws-bucket.arn}}/*"
    },
    {
      "Sid": "ListTenantsBucket",
      "Action": [
        "s3:ListBucket",
        "s3:PutLifecycleConfiguration"
      ],
      "Effect": "Allow",
      "Resource": "{{aws_s3_bucket.tenants-aws-bucket.arn}}"
    }
    ```
    
    If using KMS for encryption in your S3 Bucket, add the following to the permissions:
    
    ```
    1
    2
    3
    4
    5
    6
    7
    8
    9
    ```
    
    ```json
    {
      "Sid": "S3KeyKMSAccess",
      "Action": [
        "kms:Decrypt",
        "kms:GenerateDataKey"
      ],
      "Effect": "Allow",
      "Resource": "{{aws_kms_key.s3_key.arn}}"
    }
    ```
    
2.  After creating the S3 Bucket with the correct permissions, the following settings need to be updated in the `overrides` YAML configuration file (see this reference for more details):
    
    *   Set the `enabled_services.minio` setting to `false`
3.  Create the following secret to point the Cycode installation to your S3 bucket (see the [variables breakdown](#aws-s3-variables-breakdown) section for details on the expected values):
    
    ```
     1
     2
     3
     4
     5
     6
     7
     8
     9
    10
    11
    12
    13
    14
    ```
    
    ```yaml
    apiVersion: v1
    data:
      MINIO_ACCESS_KEY: {{s3-access-key-base64-encoded}}
      MINIO_SECRET_KEY: {{s3-secret-key-base64-encoded}}
      MINIO_URL: {{s3-bucket-url-base64-encoded}}
      MINIO_DEFAULT_BUCKET: {{s3-bucket-name-base64-encoded}}
      MINIO_REGION: {{s3-region-base64-encoded}}
    kind: Secret
    metadata:
      labels:
        app: minio
      name: s3-credential
      namespace: cycode-operator
    type: Opaque
    ```
    
4.  Verify that the following configuration is added to the `deployment` YAML configuration file under the `config` ConfigMap `data.config.tfvars` section (see this reference for more details):
    
    ```
    1
    2
    3
    4
    5
    6
    ```
    
    ```hcl
    managed_infrastructure  = {
      minio = {
        namespace = "cycode-operator"
        name      = "s3-credential"
      }
    }
    ```
    

### AWS S3 Variables Breakdown [Copied!](#aws-s3-variables-breakdown "Copy link to this section")

#### S3 Permissions [Copied!](#s3-permissions "Copy link to this section")

Value

Description

`aws_s3_bucket.tenants-aws-bucket.arn`

This is the arn value tied to your bucket, which looks something like this: `arn:aws:s3:::{{bucket-name}}`

`aws_kms_key.s3_key.arn`

This is the arn value tied to the KMS access key, which will carry a similar format to this: `arn:aws:kms:{{region}}:{{account}}:key/{{key_id}}`

`bucket-name`

The bucket name of the create S3 bucket, i.e. `my-bucket`

`region`

The region code where the bucket is located, i.e. `us-east-1`

`account`

The account ID where the S3 bucket resides in, i.e. `537731540185`

`key_id`

The key ID of the encryption key to be used

#### Secret Variables [Copied!](#secret-variables "Copy link to this section")

Note

You must convert all values here with the following command:  
`echo -n '{{secret_value}}' | base64`

Value

Description

`s3-access-key-base64-encoded`

The base64-encoded S3 access key for the S3 bucket

`s3-secret-key-base64-encoded`

The base64-encoded S3 secret key for the S3 bucket

`s3-bucket-url-base64-encoded`

The base64-encoded S3 bucket URL for the S3 bucket, i.e., `https://{{bucket-name}}.s3.{{region}}.amazonaws.com`

`s3-bucket-name-base64-encoded`

The base64-encoded S3 bucket name for the S3 bucket, i.e., `my-bucket`

`s3-region-base64-encoded`

The base64-encoded S3 region for the S3 bucket, i.e., `us-east-1`

## Google Cloud Storage Buckets [Copied!](#google-cloud-storage-buckets "Copy link to this section")

Using Google Cloud Storage (GCS) Buckets will require a few items and changes to the installation to ensure everything works as expected.

### GCS Bucket Settings [Copied!](#gcs-bucket-settings "Copy link to this section")

1.  Create the following secret to point the Cycode installation to your S3 bucket (see the [variables breakdown](#gcs-variables-breakdown) section for details on the expected values):
    
    ```
     1
     2
     3
     4
     5
     6
     7
     8
     9
    10
    11
    12
    13
    14
    ```
    
    ```yaml
    apiVersion: v1
    data:
      MINIO_ACCESS_KEY: {{s3-access-key-base64-encoded}}
      MINIO_SECRET_KEY: {{s3-secret-key-base64-encoded}}
      MINIO_URL: {{s3-bucket-url-base64-encoded}}
      MINIO_DEFAULT_BUCKET: {{s3-bucket-name-base64-encoded}}
      MINIO_REGION: {{s3-region-base64-encoded}}
    kind: Secret
    metadata:
      labels:
        app: minio
      name: s3-credential
      namespace: cycode-operator
    type: Opaque
    ```
    
2.  Verify that the following configuration is added to the `deployment` YAML configuration file under the `config` ConfigMap `data.config.tfvars` section (see [this reference](on-prem/reference/yaml#cycode-operator-overrides-file) for more details):
    
    ```
    1
    2
    3
    4
    5
    6
    ```
    
    ```hcl
    managed_infrastructure  = {
      minio = {
        namespace = "cycode-operator"
        name      = "s3-credential"
      }
    }
    ```
    
3.  After the installation, the following setting needs to be added to the `file-service-environment-variables` ConfigMap in the `api` namespace, under the `data.config.S3Configuration` section (see [this reference](on-prem/reference/yaml#cycode-operator-deployment-file) for more details):
    
    ```
    1
    ```
    
    ```json
    "UseChunkEncoding": false
    ```
    
4.  Once done, restart the `file-service` pod(s) with the following command:
    
    ````
    ```bash
    kubectl -n api rollout restart deployment/file-service
    ````
    

### GCS Variables Breakdown [Copied!](#gcs-variables-breakdown "Copy link to this section")

Note

You must convert all values here with the following command:  
`echo -n '{{secret_value}}' | base64`

Value

Description

`s3-access-key-base64-encoded`

The base64-encoded GCS access key for the GCS bucket

`s3-secret-key-base64-encoded`

The base64-encoded GCS secret key for the GCS bucket

`s3-bucket-url-base64-encoded`

The base64-encoded GCS bucket URL for the GCS bucket. This will always be `https://storage.googleapis.com`

`s3-bucket-name-base64-encoded`

The base64-encoded GCS bucket name for the GCS bucket, i.e., `my-bucket`

`s3-region-base64-encoded`

The base64-encoded GCS region for the GCS bucket, i.e., `us`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
