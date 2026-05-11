# Best Practices | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/best-practices

---

# Best Practices

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/best-practices.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

AWS EC2 Instance CloudFormation Clear Text Authentication Detected

This policy assesses the safety of including clear text credentials directly within the AWS CloudFormation Authentication. Directly specifying the ‘accessKeyId’, ‘secretKey’ or ‘password’ in the clear within the CloudFormation template may expose your AWS system to unauthorized access, hence they should be omitted for better security compliance.

High

AWS

Credentials, Rego Query

Elastic Load Balancing Using Insecure Protocols Detected

This policy checks for the use of insecure protocols in AWS ELB Security Policies. In order to maintain a strong security posture and mitigate risks of SSL connection exploitation, predefined or custom security policies must not use insecure protocols.

High

AWS

Data Reliability, Rego Query

Insecure Protocol Detected in AWS ELB Security Policy

This policy checks for the use of insecure protocols in AWS ELB Security Policies. In order to maintain a strong security posture and mitigate risks of SSL connection exploitation, predefined or custom security policies must not use insecure protocols.

High

AWS

Data Reliability, Rego Query

Sensitive Azure Network Security Rule Detected

This policy checks if a sensitive port, such as port 23 or port 110, is open to the entire network in either TCP or UDP protocol. Exposing sensitive ports to the entire network can lead to potential security risks such as unauthorized access or data breaches.

High

Azure

Ports, Rego Query

Sensitive Port Open for Wide Private Network Detected

This policy checks if potentially sensitive ports are open to a wide range of private network. Full access to sensitive ports across the private network can increase the risk of unauthorized data access or misuse, and should be avoided to ensure secure network practices.

High

Azure

Ports, Rego Query

GCP KMS Crypto Key with Extended Rotation Period Detected

This policy checks the rotation period for GCP KMS Crypto Keys. To ensure key rotation adheres to best security practices, the rotation period should not exceed 365 days.

High

GCP

Rego Query

Publicly Accessible GCP BigQuery Dataset Detected

This policy verifies whether a BigQuery dataset in Google Cloud Platform (GCP) is publicly or anonymously accessible. Public-facing datasets can expose sensitive information, and should be avoided to ensure data privacy and integrity.

High

GCP

Rego Query

AWS Auto Scaling Group detected without associated Elastic Load Balancer

This policy validates that AWS Auto Scaling Groups have associated Elastic Load Balancers (ELBs). Associating ELBs with Auto Scaling Groups ensures high availability and improves application performance. The absence of an ELB could lead to service disruptions.

Medium

AWS

Data Reliability, Rego Query

AWS Auto Scaling Group Without Associated ELB Detected

This policy validates that AWS Auto Scaling Groups have associated Elastic Load Balancers (ELBs). Associating ELBs with Auto Scaling Groups ensures high availability and improves application performance. The absence of an ELB could lead to service disruptions.

Medium

AWS

Data Reliability, Rego Query

ElastiCache Nodes Not Created Across Multi-AZ

This policy verifies the configuration of AWS ElastiCache clusters to ensure that nodes are created across multiple Availability Zones (AZ). The use of multi-AZ distribution for nodes allows for improved fault tolerance and minimizes the risk of single point failures within the infrastructure.

Medium

AWS

Data Reliability, Rego Query

Enable S3 bucket versioning

S3 Bucket versioning is not currently enabled. Please enable it.

Medium

AWS

Rego Query

IAM Account Password Policy Lacks Proper Reuse Prevention

This policy validates if the IAM account password policy has reuse prevention set to 24. This is crucial for preventing password reuse, thus enforcing better security practices.

Medium

AWS

Credentials, Rego Query

Misconfigured AWS IAM Account Password Expiration Policy Detected

This policy checks the setting of the password expiration in the AWS IAM Account policy. To maintain secure user account management and safeguard from potential security risks, a password expiration policy should be set and not exceed 90 days.

Medium

AWS

Credentials, Rego Query

Missing or Incorrect IAM User Login Profile Password Reset Requirement

This policy checks if the LoginProfile for the IAM User has a requirement set for password reset. It ensures that the ‘PasswordResetRequired’ property is set to ’true’. The property is significant as it mandates the user to reset their password, thus enhancing the security of the user accounts.

Medium

AWS

Credentials, Authentication, Rego Query

Azure Active Directory Administrator Not Configured for SQL Server

This policy verifies if an Azure Active Directory Administrator is configured for a SQL server. Configuring an AD administrator improves the security of the SQL server by granting the necessary permissions to manage the server to only specific users or groups.

Medium

Azure

Permissions, Rego Query

Azure Container Registry without Associated Lock Detected

This policy checks if Azure Container Registries contain associated locks. Locks prevent accidental deletion or modification of resources, ensuring the reliability and security.

Medium

Azure

Rego Query

Azure Key Vault Secret Without Expiration Date Detected

This policy checks that all secrets in Azure’s Key Vault have an expiration date set. Setting expiration dates for secrets ensures that even if unauthorized access is gained, the potential for misuse is reduced.

Medium

Azure

Credentials, Rego Query

Azure Redis Cache Allowing Non-SSL Connections Detected

This policy checks if Azure Redis Cache resources allow non-SSL connections. Disabling non-SSL connections is essential as it ensures secure transmission of data.

Medium

Azure

Rego Query

Azure Redis Cache Lacks Regular Update Configuration

This policy checks if Azure Redis Cache has been configured to regularly update with respect to security and operational patches. Regular updates are significant as they contribute to maintaining the security and reliability of the service.

Medium

Azure

Rego Query

Inactive Email Alerts for Azure Security Center Contact Detected

This policy verifies if email alert notifications are enabled for an Azure Security Center contact. Enabling email alerts would ensure immediate awareness of security center alerts, which is critical to avert or address potential security risks promptly.

Medium

Azure

Rego Query

Insufficient Auditing Retention Period in Azure MSSQL Server/Database

This policy verifies that for Azure MSSQL Server and Database, the Auditing Retention settings are properly made and the retention period is greater than 90 days. Retaining auditing records for a longer period helps in problem determination and maintaining compliance status.

Medium

Azure

Rego Query

Microsoft Security Contact Setting for Alert Notifications or Role-Based Notifications are Disabled

This policy verifies if email alert notifications are enabled for an Azure Security Center contact. Enabling email alerts would ensure immediate awareness of security center alerts, which is critical to avert or address potential security risks promptly.

Medium

Azure

Rego Query

Non-Standard Pricing Tier Detected for Azure Security Center

This policy checks the subscription pricing tier in the Azure Security Center. The tier must be set to ‘Standard’ for more comprehensive security features and to maintain the necessary level of security benchmark.

Medium

Azure

Rego Query

Non-standard Pricing Tier Detected in Azure Security Center Subscription

This policy checks the subscription pricing tier in the Azure Security Center. The tier must be set to ‘Standard’ for more comprehensive security features and to maintain the necessary level of security benchmark.

Medium

Azure

Rego Query

Predictable Azure SQL Server Active Directory Administrator Account Name Detected

This policy checks if the name of the Azure SQL Server’s Active Directory Administrator Account is set to a non-predictable name. Using predictable account names such as ‘Admin’ makes those accounts an easy target for malicious attacks.

Medium

Azure

Rego Query

Predictable Azure SQL Server Administrator Account Name Detected

This policy checks the predictability of administrator account names for Azure SQL servers. It verifies that the ‘administrator\_login’ attribute is set to a non-predictable value for enhanced security.

Medium

Azure

Rego Query

Redis Cache Firewall Rule Allows Too Many Hosts

This policy checks for the limit of hosts allowed to access Azure Redis Cache through a firewall rule. The rule should not allow more than 255 hosts to access the Redis Cache to maintain secure access control and minimize potential security risks.

Medium

Azure

Rego Query

Sensitive Port Found to be Open to Small Public Network

This policy checks if a sensitive port, such as port 23 or port 110, is open for small public network in TCP or UDP protocol in Azure infrastructure. The policy identifies network security rules which have allowed access to such sensitive ports, exposing potential security vulnerabilities.

Medium

Azure

Ports, Rego Query

SQL Database Server SecurityAlerts Policy with Disabled Alerts Detected

This policy checks if all alerts are enabled in the SQL Database Server SecurityAlerts Policy Properties. For maintaining a secure database environment and to prevent potential security risks, all alerts should be active.

Medium

Azure

Rego Query

Admin Role Detected on Service Account in Google Project IAM Member

This policy verifies if Google Project IAM Member Service Account has not been assigned ‘Admin’ role. Granting ‘Admin’ role is a security risk and should be avoided.

Medium

GCP

IAM, Rego Query

GCP Compute Instance Using Default Service Account Detected

This policy ensures Google Compute Instances do not use the default service account. Instances should be configured with a specified service account email that doesn’t have full access to all Cloud APIs. This configuration reduces unnecessary access and potential security risks.

Medium

GCP

Rego Query

GCP Project Auto-Create Network Enabled Detected

This policy checks that the Auto-Create Network setting is disabled in Google Cloud Platform projects. By disabling this setting, the automatic creation of networks is prevented, which contributes to network hygiene and reduces potential attack vectors.

Medium

GCP

Rego Query

Google Container Node Pool Auto Repair Disabled

This policy verifies if the auto repair feature is enabled on the Google Container Node Pool. With auto repair enabled, if a node fails health checks consecutively, Google Kubernetes Engine initiates an automatic repair action to restore the node.

Medium

GCP

Data Reliability, Rego Query

Google Project IAM Binding Service Account has an Account User or Token Creator Role

This policy verifies if a Google Project IAM Binding Service Account has an associated Account User or Token Creator Role. Assigning inappropriate roles may lead to unauthorized access and potential security risks.

Medium

GCP

IAM, Rego Query

Non-Corporate Email Account Found in GCP IAM Binding

This policy checks if corporate accounts are used in GCP Project IAM Binding instead of personal email accounts such as Gmail. For maintaining corporate security, IAM roles must be bound to corporate accounts and personal accounts like Gmail must not be used.

Medium

GCP

Credentials, Rego Query

Pod Security Policy Controller Disabled for GCP Kubernetes Cluster

This policy checks if the Pod Security Policy controller is enabled in the GCP Kubernetes clusters. Enabling this setting ensures that the Kubernetes clusters adhere to pod security best practices, mitigating potential risks.

Medium

GCP

Rego Query

AWS CloudFormation Stack Detected Without Defined Template

This policy checks if AWS CloudFormation Stacks have a defined template. Defining a template through the attribute `template\_url` or `template\_body` is mandatory for correct and secure configuration.

Low

AWS

Rego Query

AWS ECR Repository Lacks Policies

This policy checks if policies are attached to the AWS ECR repositories. By attaching policies to ECR repositories, specific actions can be allowed or denied, enhancing security and making the infrastructure compliant with best practices.

Low

AWS

Rego Query

AWS Security Group or Rule Without Description Detected

This policy checks if AWS Security Group and its rules have descriptions defined. Having meaningful descriptions for security groups and rules aids in understanding the purpose and the context of the security controls in place.

Low

AWS

Security Group, Rego Query

DynamoDB Table Billing Mode Not Set Correctly

This policy checks if the DynamoDB Table Billing Mode is set to either PAY\_PER\_REQUEST or PROVISIONED. This configuration is critical to ensure optimal cost management and efficient usage.

Low

AWS

Data Reliability, Rego Query

IAM Access Analyzer Not Enabled

IAM Access Analyzer should be enabled and configured to continuously monitor resource permissions

Low

AWS

Rego Query

Improper CIDR Range Detected in AWS EC2 Security Group Ingress Configuration

This policy checks the configuration of AWS EC2 Security Group Ingress CIDRs. To maintain secure network access, the CIDR should not be /32 in case of IPV4 or /128 in case of IPV6.

Low

AWS

Security Group, Rego Query

Misconfigured AWS Lambda Permission Detected

This policy checks if the AWS Lambda permissions are correctly set with the action field as ’lambda:InvokeFunction’. This appropriate setting is imperative for proper execution of Lambda functions and to avoid misconfiguration that might lead to improper functioning or potential security risks.

Low

AWS

Permissions, Rego Query

Missing Tags in AWS EFS Filesystem Configuration

This policy checks if the AWS EFS filesystems defined in the code have associated tags. Tags for EFS filesystems are essential for operational tasks such as managing resources, security permissions, cost tracking and automation.

Low

AWS

Tags, Rego Query

Azure Policices Add-On Not Detected or Disabled in AKS

This policy checks if Azure Policies Add-On is being utilized in the Azure Container Service (AKS). The usage of the Azure Policies Add-On is recommended for a higher security standard, as it can enforce various organizational policies.

Low

Azure

Rego Query

Azure PostgreSQL Server without Geo-Redundant Backup

This policy checks that geo-redundant backup is enabled for Azure PostgreSQL servers. Geo-redundant backup provides enhanced data protection by additionally storing backups in a paired region, which allows for data recovery even in the event of a regional outage.

Low

Azure

Rego Query

Missing Phone Number in Security Contacts

This policy checks that the ‘phone’ field is set for ‘Microsoft.Security/securityContacts’ in Azure settings. This is important for ensuring contactability in case of security concerns or incidents.

Low

Azure

Rego Query

Non-Latest PHP Version Detected in Azure App Services

This policy checks the configured PHP version for Azure App Services. The latest version of PHP is recommended to leverage new functionalities and security fixes.

Low

Azure

Rego Query

Outdated Python Version Detected in Azure App Service Configuration

This policy checks for the Python version in Azure App Service configuration. To maintain security and take full advantage of the latest features, the version configured in the infrastructure should be the latest stable release, currently Python 3.10.

Low

Azure

Rego Query

Individual GCP IAM User Role Assignment Detected

The policy asserts that IAM roles should be assigned to groups, not users, for better access control and management. Assigning roles to individual users can lead to increased security risk and management overhead.

Low

GCP

Rego Query

AWS DynamoDB Table Point-In-Time Recovery is Disabled or Not Configured

This policy checks if the point-in-time recovery feature is enabled for AWS DynamoDB tables. It is vital for data recovery and protection against accidental write or delete operations, thereby maintaining data integrity.

Info

AWS

Rego Query

AWS EC2 Instance Not EBS Optimized Detected

This policy checks if EBS optimization is enabled for AWS EC2 Instances. Enabling EBS optimization improves performance by minimizing latency and increasing throughput between an instance and an attached EBS volume.

Info

AWS

Rego Query

Account Admins Not Notified By Email For Security Alerts On Azure SQL Server

This policy checks if the emailAccountAdmins in Azure SQL Server security alerts is enabled. Account administrators should be notified by email in the event of security alerts for rapid threat detection and response.

Info

Azure

Rego Query

Missing or Invalid Notification Email in Azure SQL Server Security Alert Policy

This policy validates the presence and content of email addresses for notifications in the event of a Security Alert in an Azure SQL database server. Notification emails are crucial for immediate information on potential security breaches.

Info

Azure

Rego Query

Object Versioning Not Enabled on GCP Cloud Storage Bucket

This policy checks if object versioning is enabled on a Google Cloud Storage bucket. Having object versioning enabled ensures that a managed, versioned history of all the changes to object data gets maintained, thus providing an extra layer of data protection and enabling easy recovery from both unintended user actions and application failures.

Info

GCP

Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
