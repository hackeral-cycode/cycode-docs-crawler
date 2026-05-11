# Networking | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/networking

---

# Networking

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/networking.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

AWS ALB Configured to Listen on HTTP

This policy checks if all AWS Application Load Balancers (ALB) block connection requests over HTTP. To assure secure connections, all ALBs should block connection requests over HTTP and use secure protocol instead.

High

AWS

Data Reliability, Rego Query

AWS ALBs Allowing HTTP Connection Requests Found

This policy checks if all AWS Application Load Balancers (ALB) block connection requests over HTTP. To assure secure connections, all ALBs should block connection requests over HTTP and use secure protocol instead.

High

AWS

Data Reliability, Rego Query

AWS EKS Cluster Public Endpoint Has Extensive Access

This policy verifies that the public access to AWS EKS cluster is limited and not open to all IP addresses. It helps to maintain the security of the EKS cluster by reducing potentially malicious access.

High

AWS

Permissions, Rego Query

AWS Security Group Has Unidentified Port Exposed To Internet

This policy checks if any unidentified ports in the AWS Security Group are exposed to the entire Internet. Exposing unidentified port can possibly make the network vulnerable to unanticipated threats and attacks.

High

AWS

Ports, Public Exposure, Rego Query

CloudFormation Security Groups Allows All Traffic

This policy checks if all ports are exposed to the public in AWS CloudFormation security groups. Exposing all ports is a significant security risk as it broadly opens an attack vector.

High

AWS

Security Group, Rego Query

Default Security Group Allowing Traffic Detected

The policy verifies that the default security group restricts all inbound and outbound traffic, both for IPv4 and IPv6. Restricting traffic is a best practice as it reduces unauthorized access to your resources.

High

AWS

Security Group, Rego Query

Default Security Group Allows Unrestricted Inbound and Outbound Traffic

The policy verifies that the default security group restricts all inbound and outbound traffic, both for IPv4 and IPv6. Restricting traffic is a best practice as it reduces unauthorized access to your resources.

High

AWS

Security Group, Rego Query

Default Security Group with Unrestricted Traffic Detected

This policy checks if the default security groups in AWS CloudFormation allow any traffic. According to security best practices, the default security groups should deny all traffic to minimize the exposure of resources and services to potential attacks.

High

AWS

Security Group, Rego Query

HTTP Port Open in AWS Security Group

This policy checks if the HTTP port is open in a security group. Having the HTTP port open can potentially expose the resources to unwanted traffic, leading to data leakages or unauthorized accesses.

High

AWS

Ports, Rego Query

Open HTTP Port in Security Group Detected

This policy checks if the HTTP port is open in a security group. Having the HTTP port open can potentially expose the resources to unwanted traffic, leading to data leakages or unauthorized accesses.

High

AWS

Ports, Rego Query

Prohibited Ports Open in Security Groups Detected

This policy checks if any prohibited ports are open in the security group configurations. The policy restricts ports 20, 21, 22, 23, 115, 137, 138, 139, 2049, 3389, which might expose the system to potential security threats. It’s essential to monitor and manage open ports in any network environment for securing system data and information.

High

AWS

Security Group, Ports, Rego Query

Public Accessibility of SSH Detected in AWS Security Group

This policy checks if any security groups in your cloud infrastructure are allowing unrestricted access to SSH. In order to adhere to the principle of least privilege and reduce the attack surface, traffic to SSH should be limited to trusted IP addresses only.

High

AWS

Security Group, SSH, Ports, Rego Query

Public IP Address Scope Detected in AWS DB Security Group

This policy checks if the IP address in an AWS DB Security Group is set to ‘0.0.0.0/0’ (IPv4) or ‘::/0’ (IPv6). This setting, designating full exposure to the public, could lead to potential security breaches or data loss and should be avoided.

High

AWS

Security Group, Rego Query

RDP Unrestricted Access in Security Groups Detected

This policy checks if the CloudFormation’s security groups allow unrestricted access to RDP with port 3389. Restricting access to this port is essential for mitigating potential security risks associated with unauthorized access.

High

AWS

Security Group, Remote, Ports, Rego Query

Remote Desktop Port Open Detected in AWS Security Group

This policy checks if the Remote Desktop service port, 3389, is open in an AWS Security Group. Having this port open to the internet can lead to unauthorized remote access and breach of data security.

High

AWS

Remote, Ports, Rego Query

Remoted Desktop Port Open to Public Detected in EC2 Security Group

This policy checks if the Remote Desktop service port, 3389, is open in an AWS Security Group. Having this port open to the internet can lead to unauthorized remote access and breach of data security.

High

AWS

Remote, Ports, Rego Query

S3 Bucket Policy allows insecure HTTP requests

High

AWS

Security Groups allows all traffic for SSH (port:22)

This policy checks if any security groups in your cloud infrastructure are allowing unrestricted access to SSH. In order to adhere to the principle of least privilege and reduce the attack surface, traffic to SSH should be limited to trusted IP addresses only.

High

AWS

Security Group, SSH, Ports, Rego Query

Sensitive Port Exposed to Entire Network

This policy checks if sensitive network ports, such as port 23 or port 110, are open to the entire network in either TCP or UDP protocols. Exposing sensitive ports to the entire network is a security risk that could potentially lead to unauthorized system access and information leakage.

High

AWS

Ports, Rego Query

Traffic Allowed in Default Security Groups Detected

This policy checks if the default security groups in AWS CloudFormation allow any traffic. According to security best practices, the default security groups should deny all traffic to minimize the exposure of resources and services to potential attacks.

High

AWS

Security Group, Rego Query

Unrestricted AWS Security Group Ingress Detected

This policy checks if the ingress rule of AWS Security Groups is unrestricted, allowing all IP addresses (0.0.0.0/0) access. This could pose severe security risks as it exposes the infrastructure to potential malicious activity. It is crucial to restrict the security groups to only necessary IP addresses.

High

AWS

Security Group, Rego Query

Unrestricted Egress Access Detected in Security Group

This policy checks if any security group allows unrestricted egress access, which can lead to potential security risks. By examining the outbound traffic rules of EC2 security groups, the policy determines whether there is too wide a permission that could expose your cloud resources to unnecessary risk.

High

AWS

Security Group, Remote, Rego Query

Unrestricted Outbound Traffic Detected in EC2 Security Group

This policy checks if any security group in the AWS EC2 service allows unrestricted outbound traffic. Restricting outbound traffic is essential to prevent unintended data leakage and to maintain the security standards of the protected infrastructure.

High

AWS

Security Group, Data Reliability, Rego Query

All IP Addresses Allowed in Azure SQL Server Firewall

This policy checks the IP address range for Azure SQL Server Firewall. Ensuring that the IP range is not open to all (0.0.0.0 to 255.255.255.255) is crucial for restricting unauthorized access and maintaining the security of the SQL server.

High

Azure

Rego Query

Azure MySQL Database Server Without SSL Enforcement Detected

This policy validates whether SSL enforcement for MySQL Database server is enabled. To maintain secure database connection and prevent potential data breaches, SSL enforcement must be enabled.

High

Azure

Rego Query

Azure MySQL Server Lacks SSL Enforcement or has SSL Enforcement Disabled

This policy validates whether SSL enforcement for MySQL Database server is enabled. To maintain secure database connection and prevent potential data breaches, SSL enforcement must be enabled.

High

Azure

Rego Query

Azure Network Security Group has RDP Access Open to the Internet

This policy monitors whether port 3389, typically used for Remote Desktop Protocol (RDP), is exposed to the internet in Azure Network Security Group or Network Security Rule. Exposing RDP to the internet can lead to potential security breaches as it may allow unauthorized access to internal systems from any IP address. It is a best practice to restrict RDP access to specific IP addresses or ranges.

High

Azure

Public Exposure, Remote, Rego Query

Azure PostgreSQL Server Configuration with Disabled SSL Enforcement Detected

This policy checks that the ‘Enforce SSL connection’ settings is enabled for Azure PostgreSQL Server instances. Ensuring that SSL connection enforcement is enabled is crucial to secure database connections and avoid potentially exposing sensitive information.

High

Azure

Rego Query

Azure Redis Firewall Rule Allowing Unrestricted Access Detected

This policy ensures that Firewall rules for Azure Redis are configured to restrict access only from private IP addresses. Allowing unrestricted access from other Azure sources or the internet can expose the Redis instance to potential security threats.

High

Azure

Rego Query

Azure Storage Blob Service Container Publicly Accessible

Public access to Storage Blob Service Containers should be restricted to prevent unauthorized data access. This policy checks if any Storage Blob Service Containers or blob services with containers under them are publicly accessible, which could lead to a potential security risk.

High

Azure

Public Exposure, Rego Query

Azure Web App Service Accepting Non-HTTPS Traffic

This policy ensures that Azure Web Application Service is accepting traffic only via HTTPS for secure, encrypted communication.

High

Azure

Rego Query

Microsoft Web Site Not Forcing HTTPS Detected

This policy ensures that Azure Web Application Service is accepting traffic only via HTTPS for secure, encrypted communication.

High

Azure

Rego Query

RDP Port Exposed to the Internet in Azure Network Security Configuration

This policy monitors whether port 3389, typically used for Remote Desktop Protocol (RDP), is exposed to the internet in Azure Network Security Group or Network Security Rule. Exposing RDP to the internet can lead to potential security breaches as it may allow unauthorized access to internal systems from any IP address. It is a best practice to restrict RDP access to specific IP addresses or ranges.

High

Azure

Public Exposure, Remote, Rego Query

Redis Firewall Rule Allowing Unrestricted Access Detected

This policy checks if Azure Redis Cache is configured to allow unrestricted access from the Internet. Allowing unrestricted access can lead to potential security vulnerabilities. Redis cache should be configured to only allow necessary IP ranges.

High

Azure

Rego Query

SQL Database Server Firewall allows all IP addresses

This policy checks the IP address range for Azure SQL Server Firewall. Ensuring that the IP range is not open to all (0.0.0.0 to 255.255.255.255) is crucial for restricting unauthorized access and maintaining the security of the SQL server.

High

Azure

Rego Query

SSH Port Exposed to Internet in Azure Network Security Group or Rule

This policy checks if SSH (port 22) is exposed to the Internet in the Azure network security group or rule settings. In order to maintain secure network configurations and data communications, exposing SSH to the entire internet poses a significant security risk and should be avoided.

High

Azure

Rego Query

SSL Enforcement for PostgreSQL Server is Disabled or Not Set

This policy validates the SSL configuration of a PostgreSQL server in an Azure Resource Manager setup. It checks if the ‘sslEnforcement’ is enabled for PostgreSQL servers, which ensures security by encrypting data communication. A vital step in maintaining security standards and protecting sensitive data.

High

Azure

Rego Query

Unrestricted SSH Access Detected in Azure Network Security Group

This policy checks if SSH (port 22) is exposed to the Internet in the Azure network security group or rule settings. In order to maintain secure network configurations and data communications, exposing SSH to the entire internet poses a significant security risk and should be avoided.

High

Azure

Rego Query

Deprecated RSA/SHA-1 algorithm detected in DNSSEC configuration

This policy checks if the RSA/SHA-1 algorithm is used in the GCP DNSSEC configuration. The RSA/SHA-1 algorithm is a weaker cryptographic standard and its use could potentially increase security risks.

High

GCP

Rego Query

GCP Firewall allows unrestricted SSH access

This policy examines the configuration of SSH access in GCP Firewalls. It is crucial for the network’s security that SSH access is appropriately restricted, avoiding unsolicited access.

High

GCP

Public Exposure, SSH, Rego Query

Ingress for RDP Access Allowed in Google Cloud Firewall

This policy checks if Google Cloud Firewall ingress allows RDP access (port 3389). This check is crucial to ensure that the infrastructure is secured against any potential threats that can exploit the RDP access.

High

GCP

Public Exposure, Remote, Rego Query

Weak Algorithm Detected in GCP DNSSEC Configuration

This policy checks if the algorithm in the ‘dnssec\_config’ block of the ‘google\_dns\_managed\_zone’ resource is set to ‘rsasha1’. This algorithm is considered weak and can lead to potential security risks.

High

GCP

Rego Query

Absence of Record Attribute in AWS Route 53 Record Resource

This policy confirms that the Record attribute is set in the AWS Route 53 Record resource. The Record attribute is essential for ensuring that the Route 53 service properly routes traffic to your resource.

Medium

AWS

Rego Query

API Gateway Endpoint Exposed to Public Internet

This policy checks if the AWS API Gateway endpoint is properly configured as private. It verifies that the endpoint is not exposed to the public internet as this can leads to potential security risks.

Medium

AWS

Public Exposure, Rego Query

AWS Application Load Balancer Not Protected with WAF

This policy verifies that all Application Load Balancers (ALB) are protected with the Web Application Firewall (WAF) service. This ensures that the ALBs are secured from common web-based threats.

Medium

AWS

Data Reliability, Rego Query

AWS EC2 Security Group Egress with Multiple Port Range Detected

This policy verifies that the AWS EC2 Security Group Egress configuration uses a single port only. It’s imperative for security protocol that every Egress rule should be associated with a single port. This can avoid unauthorized access and potential vulnerabilities.

Medium

AWS

Security Group, Ports, Rego Query

AWS Security Group Egress Specifying All Protocols Detected

This policy ensures that the egress protocol in AWS EC2 security group is not set to allow traffic on all ports, therefore helping in controlling the outbound traffic from the EC2 instances and providing a secure and manageable environment.

Medium

AWS

Rego Query

AWS Security Group Ingress with Port Range Detected

This policy checks if the AWS EC2 Security Group Ingress is correctly configured with a single port instead of a port range. Using a single specific port instead of a port range enhances network security by reducing the potential attack surface.

Medium

AWS

Security Group, Ports, Rego Query

Detected AWS Security Group Ingress CIDR Open to the World

This policy assesses whether the CIDR of the AWS Security Group Ingress is not exposed to the entire internet. An unrestricted CIDR can lead to potential untrusted connections, posing an array of security risks. Therefore, it is critical to impose correct security configuration to ensure only trusted and necessary connections are allowed access.

Medium

AWS

Rego Query

EC2 Network ACL Ineffective Deny Rule Detected

This policy checks if the deny rules in AWS EC2 Network Access Control List (ACL) are effectively configured. For efficient network traffic control and to ensure security, the deny rule should be applied to all IP addresses.

Medium

AWS

Rego Query

Inappropriate Protocol Setting for Security Group Ingress Rule Detected

The policy focuses on verifying that AWS Security Groups’ ingress rules do not allow traffic through all protocols. The protocol setting in the Ingress rule must not be set to ‘-1’, which permits all protocols, as it could expose the resource to unnecessary risks.

Medium

AWS

Security Group, Rego Query

Invalid EC2 NetworkACL Entry Protocol Detected

This policy validates the protocol value in EC2 NetworkACL Entry. Permissive protocols can expose the network to potential security risks. Therefore, the protocol value should be either 6 (for TCP), 17 (for UDP), 1 (for ICMP), or 58 (for ICMPv6).

Medium

AWS

Ports, Rego Query

IP Address in AWS RDS Security Group Exceeds Host Limit

The policy checks for AWS RDS instances opening to a large scope. The IP Address in its Security Group should not have more than 256 hosts. This is crucial for keeping the RDS instances secure from unauthorized access and potential security threats.

Medium

AWS

Rego Query

Missing VPC Association in AWS Security Group Detected

This policy verifies if each AWS Security Group is associated with a VPC. A VPC isolates your AWS resources from the rest of the cloud, providing better security and control over your AWS environment.

Medium

AWS

Security Group, Rego Query

Multiple Ports Detected for GameLift Fleet EC2InboundPermissions

This policy verifies that a single port is set for AWS GameLift Fleet’s EC2InboundPermissions. Precise port designation helps avoid unauthorized access and potential exploitation.

Medium

AWS

Ports, Rego Query

Network ACL Entry Allows All TCP/UDP Ports

This policy checks that TCP/UDP protocol in AWS Network ACL entries does not allow all ports (range from 0 to 65535). Restricting the number of open ports is an essential measure in safeguarding your cloud environment from potential security vulnerabilities.

Medium

AWS

Ports, Rego Query

Open AWS RDS Scope Detected in CloudFormation Configuration

The policy checks for AWS RDS instances opening to a large scope. The IP Address in its Security Group should not have more than 256 hosts. This is crucial for keeping the RDS instances secure from unauthorized access and potential security threats.

Medium

AWS

Rego Query

Public AWS API Gateway Endpoint Configuration Detected

This policy checks if the AWS API Gateway endpoint is properly configured as private. It verifies that the endpoint is not exposed to the public internet as this can leads to potential security risks.

Medium

AWS

Public Exposure, Rego Query

Public IP Address Assigned to EC2 Instance

This policy checks if an EC2 Instance has a public IP address assigned. Assigning a public IP address to an EC2 instance may expose the instance to the internet, which could lead to potential security risks. Therefore, it is recommended to not assign public IP addresses to EC2 instances unless necessary.

Medium

AWS

Public Exposure, Rego Query

Publicly Accessible SQL Analysis Service Port Detected

This policy checks if port 2383, typically utilized by SQL Analysis Services, is publicly accessible. An open port can lead to unauthorized access and must be restricted to specific CIDR blocks.

Medium

AWS

Ports, Rego Query

SageMaker Notebook Instance Not Placed in A VPC

This policy verifies that SageMaker Notebook instances are placed within a VPC for secure networking and resource management. Without VPC placement, these instances are at risk of exposure to uncontrolled network environments.

Medium

AWS

Rego Query

Sensitive Port Exposed to Small Public Network Detected

The policy checks if any sensitive ports such as port 23 or port 110 are open for small public networks in either TCP or UDP protocol. Revealing a sensitive port to a small public network can pose significant security risks due to potential unauthorized access.

Medium

AWS

Public Exposure, Ports, Rego Query

Sensitive Port Exposed to Wide Private Network

This policy checks if sensitive ports are exposed to a wide private network in either TCP or UDP protocol. Exposing sensitive ports to a wide network can increase the risk of unauthorized access or malicious activities. The ports and protocols should be limited to those that are necessary for the legitimate purposes of the infrastructure.

Medium

AWS

Ports, Rego Query

Unrestricted AWS Security Group CIDR Block Detected

This policy ensures that the Egress rules for AWS Security Groups do not allow unrestricted access, which can expose the resources to potential security risks. It allows to restrict certain IP ranges for both IPv4 and IPv6 addresses.

Medium

AWS

Security Group, Rego Query

Azure Application Gateway WAF Not Configured or Disabled

This policy checks whether the Web Application Firewall (WAF) is disabled or not configured for Azure’s Application Gateway. WAF provides centralized protection for your web applications from common exploits and vulnerabilities, thus it is crucial for maintaining secure applications.

Medium

Azure

Rego Query

Azure Kubernetes Service without authorized IP range for API Services

This policy checks if Azure Kubernetes Service (AKS) has an authorized IP range for API services enabled. Authorized IP ranges safeguard the API server communication to help protect AKS clusters from unauthorized access.

Medium

Azure

Rego Query

Azure PostgreSQL Server Without Connection Throttling Detected

This policy checks if the connection throttling is enabled for the Azure PostgreSQL server. Enabling this setting ensures optimized usage of resources and prevents potential bottleneck scenarios.

Medium

Azure

Rego Query

Azure Storage Account Network Rules Open to Public Detected

This policy verifies if the network\_rules block is configured in Azure Storage Account to restrict the network access. It also checks if any IP Range is open to public. The policy is crucial in maintaining a secure and compliant standard.

Medium

Azure

Public Exposure, Rego Query

Azure Virtual Network Subnet Lacking Network Security Group Configuration

This policy verifies if the Azure Virtual Network subnet is configured with a Network Security Group. This configuration is critical to assure that the network’s traffic is controlled and potential threats can be mitigated.

Medium

Azure

Security Group, Rego Query

Azure Website Without Client Certificate Authentication

This policy checks if client certificate authentication is enabled for Azure websites. An enabled client certificate authentication helps secure communication with the websites and ensures the authenticity of a requested client.

Medium

Azure

Rego Query

Disabled Connection Throttling on Azure Postgres SQL Server

This policy checks if the connection throttling is enabled for the Azure PostgreSQL server. Enabling this setting ensures optimized usage of resources and prevents potential bottleneck scenarios.

Medium

Azure

Rego Query

Disabled Network Watcher Flow Log in Azure Detected

This policy verifies the status of the Azure Network Watcher flow logging. It is essential that it is enabled to obtain visibility into inbound/outbound flow logs for Network Security Group events, ensuring detection of unusual activities and potential security threats.

Medium

Azure

Rego Query

GCP Cloud DNS managed zone without DNSSEC detected

This policy checks the DNSSEC configuration of the GCP Cloud DNS managed zones. DNSSEC should always be enabled to ensure secure DNS communication and protect against DNS spoofing attacks.

Medium

GCP

Rego Query

Weak Cipher Suite in Use in Google Compute SSL Policy Detected

This policy checks if the Google Compute SSL policy is using a strong cipher suite to secure network communications. The policy must ensure that the minimum TLS version is set to TLS\_1\_2 to prevent usage of weak cipher suites and secure the data in transit.

Medium

GCP

Data Reliability, Rego Query

AWS CloudFront Distribution Not Integrated with AWS WAF

This policy verifies if all AWS CloudFront distributions are integrated with the Web Application Firewall (AWS WAF) service. The integration of AWS WAF with CloudFront distributions is crucial to protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources.

Low

AWS

Rego Query

AWS CloudFront distribution without WAF integration detected

This policy verifies if all AWS CloudFront distributions are integrated with the Web Application Firewall (AWS WAF) service. The integration of AWS WAF with CloudFront distributions is crucial to protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources.

Low

AWS

Rego Query

Geo Restriction Feature Disabled in CloudFormation Configuration

This policy checks whether the Geo Restriction feature is enabled in CloudFormation configurations. The Geo Restriction feature should be enabled to control access to web content from specific geographical locations. This is crucial for managing data sovereignty, adhering to regulations, and avoiding potential cybersecurity threats.

Low

AWS

Rego Query

Inadequate AWS CloudFront CDN Configuration Detected

This policy checks if the AWS CloudFront Distribution resource is properly configured, including enabling the service and specifying the origin. A CDN provides security and performance advantages for website delivery, hence, it is important to ensure it is correctly set up.

Low

AWS

Rego Query

Incomplete AWS CloudFront Distribution Configuration Detected

This policy checks if the AWS CloudFront Distribution resource is properly configured, including enabling the service and specifying the origin. A CDN provides security and performance advantages for website delivery, hence, it is important to ensure it is correctly set up.

Low

AWS

Rego Query

Http/2 Protocol Not Enabled for Azure Web Service

The policy validates if the Http/2 protocol is enabled in the configuration for ‘Microsoft.Web/sites’. This protocol is essential for enhanced security and performance of web applications.

Low

Azure

Rego Query

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
