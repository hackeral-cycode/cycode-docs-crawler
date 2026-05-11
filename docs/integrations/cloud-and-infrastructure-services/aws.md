# AWS | Cycode Docs

Source: https://docs.cycode.com/integrations/cloud-and-infrastructure-services/aws

---

# AWS

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/cloud-and-infrastructure-services/aws/_index.md "Edit this page")

Updated on Apr 23, 2025 • Published on Mar 28, 2024

* * *

You can integrate AWS with Cycode to scan your cloud environment and detect security configuration issues in the cloud and infrastructure as code.

After integration is complete, Cycode starts retrieving the data from your cloud environment and applying its policies.

## Permissions [Copied!](#permissions "Copy link to this section")

The following permissions are needed for integrating with Cycode:

Area

Permissions

General

`access-analyzer:List*`  
`batch:Describe*`  
`batch:List*`

Cloudhsm

`cloudhsm:DescribeBackups`  
`cloudhsm:DescribeClusters`  
`cloudhsm:ListTags`

Metrics

`cloudwatch:GetMetricData`  
`cloudwatch:List*`  
`dynamodb:Describe*`  
`dynamodb:List*`  
`elasticache:List*`  
`elasticfilesystem:Describe*`  
`elasticmapreduce:List*`  
`es:List*`  
`kinesis:Describe*`  
`kinesis:List*`  
`macie2:Get*`  
`macie2:List*`  
`s3:GetObjectRetention`  
`s3:GetObjectLegalHold`  
`s3:Get*Configuration`  
`s3:ListBucket`  
`sns:GetTopicAttributes`  
`sns:GetSubscriptionAttributes`  
`sns:ListTopics`  
`sns:ListSubscriptions`  
`sns:ListTagsForResource`  
`waf:List*`  
`waf:Get*`  
`waf-regional:List*`  
`waf-regional:Get*`  
`workspaces:List*`  
`kafka:Describe*`  
`kafka:Get*`  
`kafka:List*`  
`cloudtrail:List*`  
`cloudtrail:GetTrail`  
`cloudtrail:GetTrailStatus`  
`config:DescribeDeliveryChannels`  
`config:DescribeDeliveryChannelStatus`  
`config:DescribeConfigurationRecorders`  
`kms:GetKeyPolicy`  
`lambda:ListFunctions`  
`lambda:GetFunction`  
`lambda:GetFunctionCodeSigningConfig`  
`apigateway:GET`  
`iam:ListAccountAliases`

S3

`s3:GetObject`

KMS

`kms:Create*`  
`kms:Describe*`  
`kms:Enable*`  
`kms:List*`  
`kms:Put*`  
`kms:Update*`  
`kms:Revoke*`  
`kms:Disable*`  
`kms:Get*`  
`kms:Delete*`  
`kms:TagResource`  
`kms:UntagResource`  
`kms:ScheduleKeyDeletion`  
`kms:CancelKeyDeletion`  
`kms:ReplicateKey`  
`kms:UpdatePrimaryRegion`  
`kms:Encrypt`  
`kms:Decrypt`  
`kms:ReEncrypt*`  
`kms:GenerateDataKey*`  
`kms:DescribeKey`

ECR and STS

`ecr-public:DescribeImages`  
`ecr-public:DescribeRegistries`  
`ecr-public:DescribeRepositories`  
`ecr-public:GetRegistryCatalogData`  
`ecr-public:GetRepositoryCatalogData`  
`ecr-public:GetRepositoryPolicy`  
`ecr-public:GetAuthorizationToken`  
`sts:GetServiceBearerToken`  
`ecr:BatchGetImage`  
`ecr:GetDownloadUrlForLayer`  
`ecr:GetAuthorizationToken`

EC2 and KMS

`ec2:CopySnapshot`  
`ec2:CreateSnapshot`  
`ec2:CreateSnapshots`  
`ec2:CreateTags`  
`ec2:DescribeSnapshotAttribute`  
`ec2:DescribeSnapshots`  
`ec2:DeleteSnapshot`  
`ec2:ModifySnapshotAttribute`  
`kms:ListKeys`  
`kms:CreateGrant`  
`kms:Decrypt`  
`kms:CreateKey`  
`kms:TagResource`  
`kms:Encrypt`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
