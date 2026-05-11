# Encryption | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/encryption

---

# Encryption

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/encryption.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

AWS AMI Encryption Not Enabled

This policy checks whether AWS AMI block devices are encrypted. Encryption of block devices is crucial for data security and compliance. An unencrypted block device poses a significant risk as it may lead to unauthorized access to sensitive data.

High

AWS

Rego Query

AWS CloudFront Distribution Allows Unencrypted Connection

This policy verifies the configuration of the Viewer Protocol Policy for AWS CloudFront distributions. It ensures that the connection between the CloudFront and the origin server is encrypted. Unencrypted connections can expose sensitive information and increase the risk of data breaches.

High

AWS

Rego Query

AWS ECS Task Definition with Plaintext Password Found

This policy checks if sensitive information, including passwords, is stored in plaintext within AWS ECS Task definitions. Storing sensitive information in plaintext may lead to unauthorized access and breaches. To mitigate this risk, sensitive information should be encrypted and securely managed.

High

AWS

Credentials, Vulnerabilities, Rego Query

AWS ELB security policy with weak cipher detected.

This policy checks if weak ciphers being used in the configuration of the Elastic Load Balancer (ELB) in AWS. Usage of weak ciphers could potentially expose SSL communications between the client and load balancer to security risks.

High

AWS

Rego Query

Detected Plaintext Password in AWS ECS Task Definition

This policy checks if sensitive information, including passwords, is stored in plaintext within AWS ECS Task definitions. Storing sensitive information in plaintext may lead to unauthorized access and breaches. To mitigate this risk, sensitive information should be encrypted and securely managed.

High

AWS

Credentials, Vulnerabilities, Rego Query

Detected Storage Not Encrypted by KMS for Database Hosting Instances

This policy checks whether storage is encrypted by KMS on instances that might host a database. Encrypting storage ensures that the data is protected and secure.

High

AWS

Rego Query

DynamoDB Table Not Encrypted with AWS Managed CMK

This policy checks if the AWS DynamoDB tables are encrypted using AWS managed CMK. For secure storage and querying of your data at rest, AWS managed CMK must be used for encryption rather than the AWS-owned CMK. In addition, ‘SSEEnabled’ property of the ‘SSESpecification’ should be true.

High

AWS

Rego Query

EFS Without KMS Key ID Detected

This policy checks if the AWS Elastic File System (EFS) filesystem is encrypted using KMS Customer Managed Keys (CMK). For maintaining data security and secure access, encryption must be in place and it should be managed by KMS customer managed keys instead of AWS managed keys.

High

AWS

Rego Query

ElastiCache Redis Clusters Lack Transit Encryption

This policy checks if the AWS ElastiCache Replication Groups have encryption for data in transit enabled. This encryption is vital for ensuring data security during data transmission processes in a Redis cluster.

High

AWS

Rego Query

ELB Utilizing Weak Ciphers Detected in CloudFormation Configuration

This policy checks if weak ciphers being used in the configuration of the Elastic Load Balancer (ELB) in AWS. Usage of weak ciphers could potentially expose SSL communications between the client and load balancer to security risks.

High

AWS

Rego Query

Encoded RSA private key detected in AWS Launch Configuration user data

This policy checks if the user data in AWS Launch Configuration is embedding an encoded RSA private key. In the context of security best practices, private RSA keys should not be embedded in your deployment scripts or cloud configurations.

High

AWS

Rego Query

Encoded RSA Private Key Detected in User Data

This policy checks if the user data in AWS Launch Configuration is embedding an encoded RSA private key. In the context of security best practices, private RSA keys should not be embedded in your deployment scripts or cloud configurations.

High

AWS

Rego Query

Improper Server Side Encryption Configuration for AWS S3 Bucket

This policy checks whether server side encryption is configured properly for AWS S3 Bucket. The key management service (KMS) key, used to decrypt the S3 object encrypted by S3 using server side encryption, should not be null, empty or undefined if the server side encryption algorithm is not AES256, and it should be null, empty or undefined if the algorithm is AES256. Proper encryption management ensures the security of sensitive data and mitigates risk of unauthorized access.

High

AWS

Rego Query

Load Balancer Detected Without SSL Configuration

This policy checks if the AWS Elastic Load Balancer is set up with SSL for secure communication. SSL should be used for all communications to maintain security standards as it provides encryption and secure identification of servers.

High

AWS

Data Reliability, Rego Query

Non-encrypted Amazon EFS Filesystem or not using KMS CMK Detected

This policy checks if the AWS Elastic File System (EFS) filesystem is encrypted using KMS Customer Managed Keys (CMK). For maintaining data security and secure access, encryption must be in place and it should be managed by KMS customer managed keys instead of AWS managed keys.

High

AWS

Rego Query

Unencrypted Amazon Elastic Filesystem Detected

This policy verifies if the Elastic File System (EFS) is encrypted, as it is necessary to enforce data protection and prevent potential security risks.

High

AWS

Rego Query

Unencrypted AWS EFS Detected

This policy verifies if the Elastic File System (EFS) is encrypted, as it is necessary to enforce data protection and prevent potential security risks.

High

AWS

Rego Query

Azure Storage Account Not Forcing HTTPS Traffic Detected

This policy checks if Azure Storage Accounts are configured to force the use of HTTPS for secure data access. Failing to enforce HTTPS protocols can expose your data to interception or alteration. Therefore, this setting is critical for data protection.

High

Azure

Rego Query

Publicly Accessible GCP KMS Crypto Key Detected

This policy verifies if a Google Cloud Platform (GCP) Key Management Service (KMS) crypto key policy is set to not allow public accessibility. Public accessibility includes ‘allUsers’ and ‘allAuthenticatedUsers’. For robust data encryption and to reduce potential security hazards, these settings must be avoided.

High

GCP

Rego Query

Amazon MQ Broker Encryption Options Not Defined

This policy checks whether the Amazon MQ Broker has encryption options defined. Enabling encryption options is crucial for safeguarding the data in transit, enhancing the overall security of your infrastructure.

Medium

AWS

Rego Query

Amazon MQ Broker Lacks Encryption Options

This policy checks whether the Amazon MQ Broker has encryption options defined. Enabling encryption options is crucial for safeguarding the data in transit, enhancing the overall security of your infrastructure.

Medium

AWS

Rego Query

AWS Access Key Rotation Not Found Or Not Enforced Within 90 Days

This policy checks if there is a rule that enforces AWS access keys to be rotated within 90 days. Regular key rotation prevents unauthorized system access by ensuring old keys, potentially exposed or compromised, are invalid.

Medium

AWS

Credentials, Rego Query

AWS API Gateway Content Encoding Misconfiguration Detected

This policy validates the proper configuration of content encoding in AWS API Gateway. Specifically, the policy checks for the attribute ‘minimum\_compression\_size’ in API Gateway REST APIs. Correct configuration of this attribute is important for enabling content encoding of API responses for improved API performance and reduced payload sizes.

Medium

AWS

Rego Query

AWS CloudTrail Logs Not Encrypted Using KMS Detected

This policy evaluates the configuration of AWS CloudTrail logs. All logs delivered by CloudTrail should be encrypted using AWS Key Management Service (KMS) to ensure log integrity and safeguard sensitive data.

Medium

AWS

Rego Query

AWS Config Rule for Encrypted Volumes is Missing

This policy checks if there is a ConfigRule for encrypted volumes in the AWS Config. Having this rule ensures that all data on your AWS resources is encrypted, which is a crucial component in secure data storage on AWS.

Medium

AWS

Rego Query

AWS Config Rule for Encrypted Volumes is not properly configured

This policy checks if there is a ConfigRule for encrypted volumes in the AWS Config. Having this rule ensures that all data on your AWS resources is encrypted, which is a crucial component in secure data storage on AWS.

Medium

AWS

Rego Query

AWS DynamoDB Table without Server-Side Encryption Detected

This policy checks if server-side encryption is enabled for AWS DynamoDB tables. This is important for protecting sensitive information stored in the DynamoDB tables and for combating threats that might try to compromise the tables.

Medium

AWS

Rego Query

AWS EBS Volume Encryption Not Enabled

This policy verifies if encryption is enabled on AWS Elastic Block Store (EBS) volumes, which is crucial for data protection and compliance. EBS volumes must be encrypted to prevent unauthorized data access and meet regulatory requirements.

Medium

AWS

Rego Query

AWS EBS Volume Listed without Encryption

This policy ensures that AWS EBS volumes are encrypted. Encryption is paramount to safeguard sensitive data and uphold compliance standards.

Medium

AWS

Rego Query

AWS ElastiCache Redis Cluster Without AtRestEncryption Detected

This policy validates that all AWS ElastiCache Redis Clusters have AtRestEncryption enabled. Encrypting data at rest helps protect against unauthorized access to sensitive data.

Medium

AWS

Rego Query

AWS Elasticsearch Domain Not Encrypted with KMS Detected

This policy checks if the Elasticsearch domain is encrypted with the Key Management Service (KMS) in an AWS CloudFormation template. Encrypting Elasticsearch domains with KMS provides additional security by requiring any users that sign in to Elasticsearch to have permissions to use the encryption key.

Medium

AWS

Rego Query

AWS Kinesis Stream Lacks Adequate Encryption

This policy checks if AWS Kinesis Streams and their metadata are protected with KMS encryption. AWS Kinesis Streams are capable of handling thousands of data streams and securely storing the data. Enabling KMS encryption adds an additional layer of security to prevent unauthorized access to the data streams.

Medium

AWS

Rego Query

AWS Kinesis Stream Without Server Side Encryption Detected

This policy checks if AWS Kinesis Streams have Server Side Encryption (SSE) defined. For data protection and compliance, SSE must be configured for every Kinesis Stream.

Medium

AWS

Rego Query

AWS MSK Cluster without Encryption in Rest and Transit Detected

This policy verifies that encryption at rest and in transit is enabled for MSK clusters, providing secure communication and data storage. It confirms that TLS (Transport Layer Security) is adopted for communication within the cluster and for client-broker communication.

Medium

AWS

Rego Query

AWS RDS Instance Storage Not Encrypted

This policy ensures that AWS RDS database instances are encrypted. Encryption at rest enhances the security by encrypting the underlying storage for database instances, automated backups, and snapshots.

Medium

AWS

Rego Query

AWS Redshift Cluster Encryption Not Enabled

This policy verifies that encryption is enabled for AWS Redshift clusters to safeguard against unauthorized data access.

Medium

AWS

Rego Query

AWS Redshift Cluster Without KMS CMK Detected

This policy validates if the AWS Redshift Cluster has a Key Management Service Customer Master Key (KMS CMK) specified. For secure data encryption, a KMS CMK should be defined.

Medium

AWS

Rego Query

CloudTrail Logs Encryption Not Detected

This policy determines if CloudTrail logs are encrypted using KMS. Encryption of logs ensures that unauthorized users do not gain access to sensitive data.

Medium

AWS

Rego Query

Data Encryption Disabled or Not Specified for AWS SageMaker Notebook Detected

This policy checks if data encryption is enabled for AWS SageMaker Notebook Instances by inspecting the ‘KmsKeyId’ attribute. Enabling data encryption helps protect confidential data by encrypting it with a Key Management Service (KMS) key. This setting must be defined and not be empty or null to ensure secure data management and to avoid potential security risks.

Medium

AWS

Rego Query

Data-at-Rest Encryption Not Enabled for AWS Elastic Search Domain

This policy verifies if the data-at-rest encryption is enabled for the AWS Elastic Search domains. This setting must be enabled to ensure data security and compliance.

Medium

AWS

Rego Query

Detected IAM Groups Using Inline Policies Instead of Managed Policies

This policy checks if AWS IAM groups are using inline policies. Inline policies are not recommended as they are embedded in the group and will be deleted if the group is deleted. To prevent accidental loss, managed policies should be used instead.

Medium

AWS

IAM, Rego Query

Detected Non-Encoded Shell Script in AWS Launch Configuration User Data

This policy validates that AWS Launch Configuration user data shell scripts are properly encoded in Base64 format. This ensures the integrity of the scripts across the software deployment lifecycle, mitigating the risk of unexpected failures or data corruption due to improperly formatted or encoded scripts.

Medium

AWS

SSH, Rego Query

Disabled or Undefined AWS KMS Key Rotation Detected

This policy ensures that AWS Key Management Service (KMS) keys have key rotation enabled. Enabling KMS key rotation improves security by regularly changing the cryptographic material, thus reducing the potential impact of key disclosure.

Medium

AWS

Rego Query

DocDB Cluster Encrypted with AWS managed keys

This policy verifies that AWS DocumentDB clusters are encrypted with customer managed keys. This is important for robust data protection and compliance with security regulations as customer managed keys offer more control.

Medium

AWS

Rego Query

EBS Default Encryption Not Enabled

This policy checks if the default encryption is enabled for AWS EBS volumes. Turning on default EBS encryption ensures data safety and integrity and fully adheres to security and compliance best practices.

Medium

AWS

Rego Query

EBS Volume Without KmsKeyId Value Detected

This policy ensures that AWS EBS volumes are encrypted. Encryption is paramount to safeguard sensitive data and uphold compliance standards.

Medium

AWS

Rego Query

ElasticSearch Encryption at Rest Disabled

This policy verifies if the data-at-rest encryption is enabled for the AWS Elastic Search domains. This setting must be enabled to ensure data security and compliance.

Medium

AWS

Rego Query

EMR SecurityConfiguration Encryption Not Properly Configured

This policy checks the EMR SecurityConfiguration for encryption being enabled and properly configured both at rest and in transit. Encryption is crucial to protect sensitive data both while it is stored and when it is moved.

Medium

AWS

Rego Query

IAM Database Auth Not Enabled For AWS RDS Instance

This policy verifies the enablement of IAM database authentication for AWS RDS instances. This is crucial for secure database management and usage that complies with best practices for AWS RDS instances.

Medium

AWS

IAM, Rego Query

IAM Database Authentication Not Enabled

This policy checks if IAM Authentication is enabled for AWS RDS database instances. Enabling IAM authentication provides additional level of security as it allows you to manage user access to all AWS resources from a single, centrally located place.

Medium

AWS

Rego Query

Improper Content Encoding Configuration Detected for AWS API Gateway

This policy validates the proper configuration of content encoding in AWS API Gateway. Specifically, the policy checks for the attribute ‘minimum\_compression\_size’ in API Gateway REST APIs. Correct configuration of this attribute is important for enabling content encoding of API responses for improved API performance and reduced payload sizes.

Medium

AWS

Rego Query

Improper Engine Type on ElastiCache Detected

This policy verifies if the Memcached is disabled on the ElastiCache engine. Disabling Memcached ensures adherence to best practices and secure configurations for ElastiCache.

Medium

AWS

Rego Query

Insecure Ciphers Detected in CloudFront Distribution

This policy checks whether secure ciphers are being used in CloudFront Distributions. It validates minimum protocol version and restricts usage of weak or outdated ciphers, enhancing security against data breach or unauthorized access.

Medium

AWS

Rego Query

Insecure Minimum Protocol Version for CloudFront Viewer Certificate

This policy checks whether secure ciphers are being used in CloudFront Distributions. It validates minimum protocol version and restricts usage of weak or outdated ciphers, enhancing security against data breach or unauthorized access.

Medium

AWS

Rego Query

Insecure RDS DBCluster Storage Encryption Configuration Detected

This policy checks if the storage encryption is enabled for the AWS RDS DBCluster. Enabling storage encryption is crucial for protecting data at rest and preventing unauthorized access.

Medium

AWS

Rego Query

Insufficient AWS Kinesis Stream Server Side Encryption Configuration Detected

This policy checks if AWS Kinesis Streams have Server Side Encryption (SSE) defined. For data protection and compliance, SSE must be configured for every Kinesis Stream.

Medium

AWS

Rego Query

Memcached Enabled on AWS ElastiCache Cluster

This policy verifies if the Memcached is disabled on the ElastiCache engine. Disabling Memcached ensures adherence to best practices and secure configurations for ElastiCache.

Medium

AWS

Rego Query

Missing EncryptionKey Definition in AWS CodeBuild Project Settings

This policy checks if an EncryptionKey is defined in the AWS CodeBuild Project settings. This is essential to ensure data security by encrypting build artifacts.

Medium

AWS

Rego Query

Missing KmsKeyId Attribute in AWS SageMaker Endpoint Configuration

This policy verifies if the KmsKeyId attribute is defined for the AWS::SageMaker::EndpointConfig resource. It is crucial for data protection and compliance reasons, as it specifies the AWS KMS key to use to encrypt the data at rest.

Medium

AWS

Rego Query

MSK Cluster Encryption not Configured Correctly

This policy verifies that encryption at rest and in transit is enabled for MSK clusters, providing secure communication and data storage. It confirms that TLS (Transport Layer Security) is adopted for communication within the cluster and for client-broker communication.

Medium

AWS

Rego Query

Neptune Cluster Storage Encryption Not Enabled

Ensuring that Neptune Database Clusters are securely encrypted is critical for managing sensitive data. If your Amazon Neptune data is subjected to a breach, the raw data is not viewable without access to encryption keys. Hence, this policy ensures that Neptune Cluster Storage is securely encrypted.

Medium

AWS

Rego Query

Neptune Database Cluster Storage Encryption Not Enabled

Ensuring that Neptune Database Clusters are securely encrypted is critical for managing sensitive data. If your Amazon Neptune data is subjected to a breach, the raw data is not viewable without access to encryption keys. Hence, this policy ensures that Neptune Cluster Storage is securely encrypted.

Medium

AWS

Rego Query

Node to Node Encryption is not Enabled in AWS Elasticsearch Domain

This policy checks if encryption is enabled in the configuration of AWS Elasticsearch Domains for secure node to node communication. This setting must always be turned on to guarantee data protection while in transit between nodes.

Medium

AWS

Rego Query

Non-Encrypted Elasticsearch Domain Detected in AWS CloudFormation

This policy checks if the Elasticsearch domain is encrypted with the Key Management Service (KMS) in an AWS CloudFormation template. Encrypting Elasticsearch domains with KMS provides additional security by requiring any users that sign in to Elasticsearch to have permissions to use the encryption key.

Medium

AWS

Rego Query

Outdated AWS RDS DB Instance CA Certificate Identifier Detected

This policy verifies if the CA certificate Identifier of an AWS RDS DB instance is set to ‘rds-ca-2019’. To avoid potential security risks and maintain database integrity and security, the CA certificate Identifier should use recent certificates.

Medium

AWS

Certification, Rego Query

Redis Version in AWS ElastiCache Cluster Not Compliant with PCI DSS Requirements

This policy checks if the version of Redis used in AWS ElastiCache Cluster meets the necessary AWS PCI DSS requirements. Using a compliant version ensures that the infrastructure is adhering to the data security standards prescribed by the Payment Card Industry.

Medium

AWS

Rego Query

Transit Encryption Not Enabled for ElastiCache Replication Group

This policy checks if transit encryption is enabled for AWS ElastiCache Replication Groups. Enabling transit encryption ensures secure data transition between client and primary cache node, thus protecting sensitive data from unauthorized access.

Medium

AWS

Rego Query

Unencrypted AWS EBS Volume Snapshot Detected

This policy checks the encryption configuration for AWS EBS volume snapshots. An EBS volume snapshot must be encrypted to ensure secure data retention and meet regulatory compliance requirements.

Medium

AWS

Rego Query

Unencrypted AWS ElastiCache Replication Group Detected

This policy verifies if the at-rest encryption is enabled for AWS ElastiCache Replication Group to maintain data security and compliance. Enabling at-rest encryption ensures that stored data is automatically ciphered safeguarding from potential risks.

Medium

AWS

Rego Query

Unencrypted AWS Launch Configuration EBS Detected

This policy assesses whether data stored in the AWS Launch Configuration EBS is encrypted. Encrypting EBS volumes secures data at rest and protects it from unauthorized access, enhancing data privacy and meeting compliance requirements.

Medium

AWS

Rego Query

Unencrypted AWS RDS Cluster Storage Detected

This policy examines whether AWS RDS cluster storage is encrypted. Encryption of data at rest provides a vital layer of security by making sure that data is unreadable without the correct encryption keys.

Medium

AWS

Rego Query

Unencrypted AWS RDS Database Instance Found

This policy ensures that AWS RDS database instances are encrypted. Encryption at rest enhances the security by encrypting the underlying storage for database instances, automated backups, and snapshots.

Medium

AWS

Rego Query

Unencrypted CloudTrail Log Files Detected

This policy determines if CloudTrail logs are encrypted using KMS. Encryption of logs ensures that unauthorized users do not gain access to sensitive data.

Medium

AWS

Rego Query

Unencrypted Connection between CloudFront and Origin Server Detected

This policy verifies if the connection between CloudFront and the origin server is encrypted. Unencrypted connections can expose data to potential interception and manipulation. To ensure data integrity and security, connections must be encrypted.

Medium

AWS

Rego Query

Unencrypted or Undefined Encryption Field in AWS Redshift Cluster Detected

This policy verifies that encryption is enabled for AWS Redshift clusters to safeguard against unauthorized data access.

Medium

AWS

Rego Query

App Service Not Using Latest TLS Encryption Version Detected

This policy checks if the Azure App Service is using the latest version of the TLS encryption (1.2). Using the most up-to-date encryption version decreases vulnerability to security threats.

Medium

Azure

Rego Query

Azure Disk Encryption Not Enabled

This policy verifies if encryption is enabled on managed disk in Azure. Encryption of managed disks ensures that your data is secure and meets compliance requirements for data at rest within an Azure account.

Medium

Azure

Rego Query

Azure Key Vault Key Without Expiration Date Detected

This policy verifies the expiration date setting of all keys in an Azure Key Vault. It is crucial to set an expiration date to secure the lifespan of the keys and prevent indefinite usage which can lead to potential security threats.

Medium

Azure

Rego Query

Azure Managed Disk Encryption Not Active

This policy verifies if encryption is enabled on managed disk in Azure. Encryption of managed disks ensures that your data is secure and meets compliance requirements for data at rest within an Azure account.

Medium

Azure

Rego Query

Azure Web App Not Configured to Use Latest TLS Version

This policy checks if an Azure web app is using the latest version of TLS. Using an outdated version of TLS can expose your web app to security vulnerabilities and breaches. It’s crucial to ensure that your web app is configured to use TLS version 1.2 or higher.

Medium

Azure

Rego Query

Missing Disk Encryption Set ID in Azure Container Service

This policy checks if Azure Container Service (AKS) is configured to use Disk Encryption Set ID in supported types of disks. Utilizing encryption sets for disk data improves the security posture by ensuring that data at rest is encrypted, thereby mitigating the risk of data exposure.

Medium

Azure

Rego Query

Outdated or Missing TLS Encryption Version Detected in Azure Storage Account

This policy checks if the Azure Storage Account uses the latest version of TLS encryption. It is crucial to use the latest version of TLS encryption to ensure the secure transmission of data between user devices and the storage account in order to maintain data integrity and prevent unauthorized access.

Medium

Azure

Rego Query

GCP Compute Disk Encryption Key Missing

This policy ensures VM disks on Google Cloud Platform (GCP) are encrypted with either Customer Supplied Encryption Keys (CSEK) or Customer-managed encryption keys (CMEK). This encryption is crucial for safeguarding data at rest and avoiding unauthorized access or data breaches.

Medium

GCP

Rego Query

GCP VM Disk Lacks Required Encryption with Customer Supplied Encryption Keys (CSEK)

This policy checks if VM disks are encrypted with Customer Supplied Encryption Keys (CSEK). For increased data protection and to comply with industry-standard security practices, CSEK must be actively used to encrypt VM disks. The ‘disk\_encryption\_key’ and its sub-attribute ‘sha256’ must be defined and non-empty.

Medium

GCP

Rego Query

Google KMS Crypto Key Rotation Period Exceeds 90 days or Missing

This policy checks the rotation period setting of a Google KMS Crypto Key. The rotation period should be set to less than or equal to 90 days for adequate security practices and ensuring timely key updates.

Medium

GCP

Rego Query

AWS ECR Repository Not Encrypted With Customer-Managed Keys Detected

This policy verifies that AWS Elastic Container Registry (ECR) repositories are encrypted with customer-managed keys. Enabling this increases security and compliance by improving access control, monitoring, and key rotation within the repository.

Low

AWS

Rego Query

Exposed Alexa Skill Client Secret Detected In CloudFormation

This policy validates the storage configuration of the client secret of an Alexa ASK skill. For security best practices, the client secret should be stored in AWS Secrets Manager or AWS Systems Manager Parameter Store and not as plaintext.

Low

AWS

Rego Query

AWS S3 Bucket Without Server-Side Encryption Detected

This policy checks the server side encryption configuration of AWS S3 Buckets. It ensures that encryption is enabled and is either set to AES256 or a KMS Key is provided. This configuration is essential in protecting data at rest and in preventing unauthorized access to S3 objects.

Info

AWS

Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
