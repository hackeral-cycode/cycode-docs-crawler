# Networking and Firewall | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/networking-and-firewall

---

# Networking and Firewall

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/networking-and-firewall.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

Dynamodb VPC Endpoint with Missing Route Table Association

The policy verifies whether an AWS DynamoDB VPC endpoint is associated with a route table. It is crucial to ensure this relationship as it provides secure and private connectivity to DynamoDB from within your virtual private cloud (VPC), and helps maintain robust data routing within the infrastructure.

Medium

AWS

Rego Query

Firewall Rule Allowing All Ports Detected In Google Compute Network

This policy checks if a firewall rule that allows all ports is applied to a Google Compute Network. Allowing all ports can increase the potential security risks, hence specific ports should be assigned based on the communication requirements.

Medium

GCP

Rego Query

IP Forwarding Enabled for GCP Compute Instance

This policy checks if IP forwarding is enabled in GCP Compute Instances. The ‘can\_ip\_forward’ attribute should not be ’true’ as it may potentially expose the instance to certain security risks.

Medium

GCP

Rego Query

Usage of Default Firewall Rule Detected in Google Compute Network

This policy checks whether the Google Compute Network is using the default firewall rule. While default firewall rules may provide convenience, they do not always enforce the principle of least privilege or align with custom security postures. Hence, it is best practice to review and align firewall rules as per the specific security requirements.

Medium

GCP

Rego Query

EC2 Instance Configured in Default VPC Detected

This policy checks if AWS EC2 instances are configured under a default VPC network. Using the default VPC for EC2 instances expose them to potential security risks. Using custom VPCs provides better control over the network configuration, improving isolation and security.

Low

AWS

Rego Query

ElastiCache Cluster Not Configured for VPC Deployment

This policy checks for the provision of a subnet group name, which implies deployment of the AWS ElastiCache Cluster within a Virtual Private Cloud (VPC). Deploying ElastiCache within a VPC provides enhanced security and network features.

Low

AWS

Rego Query

ElastiCache Operating on Default Port

This policy validates that AWS ElastiCache instances are not using their default ports. Predictable port settings make services more susceptible to unsophisticated attacks. Both Redis and Memcached services should be configured to use non-standard ports to improve security posture.

Low

AWS

Rego Query

EMR Cluster detected with no VPC configuration

This policy checks if AWS Elastic MapReduce (EMR) Clusters are launched within a Virtual Private Cloud (VPC). This is needed to ensure the security of data processes by providing a logically isolated section of AWS, where you can launch AWS resources within a virtual network that you control.

Low

AWS

Rego Query

Google Compute Network Firewall Using Port Range Detected

This policy checks if the firewall rules in the Google Compute Network allow port range. Allowing port ranges can expose the network to numerous potential attack vectors, therefore this setting is not recommended for securing your cloud resources.

Low

GCP

Rego Query

Google Compute Subnetwork with Private Google Access Disabled

This policy checks if the ‘private\_ip\_google\_access’ field is set to true for Google Compute Subnetworks. Enabling Private Google Access allows instances in the subnetwork to access Google Cloud APIs and services without a public IP address.

Low

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
