# Kubernetes | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/kubernetes

---

# Kubernetes

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/kubernetes.md "Edit this page")

Updated on Apr 4, 2024 • Published on Apr 3, 2024

* * *

Policy Name

Description

Severity

Source

Labels

Azure Kubernetes Service Without Network Policy Defined Detected

This policy checks if the Azure Kubernetes Service has the proper network policy configuration to ensure a secure networking environment for the Kubernetes cluster.

High

Azure

Rego Query

Improper Azure Kubernetes Service Network Policy Configuration Detected

This policy checks if the Azure Kubernetes Service has the proper network policy configuration to ensure a secure networking environment for the Kubernetes cluster.

High

Azure

Rego Query

Enabled Legacy Authorization On GCP Kubernetes Engine Cluster Detected

This policy checks if the Legacy Authorization is disabled on GCP Kubernetes Engine Clusters. Disabling Legacy Authorization helps enforce Role-Based Access Control (RBAC) for secure access management, limiting potential security risks.

High

GCP

Rego Query

GCP GKE Basic Authentication Enabled Detected

This policy checks if the Basic Authentication is disabled for Google Kubernetes Engine (GKE). Basic Authentication uses a username and password, and these credentials must be left empty in the master\_auth block to ensure secure access management.

High

GCP

Authentication, Rego Query

GCP Kubernetes Clusters Without Private Clusters Enabled Detected

This policy checks if the ‘private\_cluster\_config’ is defined and both ’enable\_private\_nodes’ and ’enable\_private\_endpoint’ attributes are set to true, when creating Kubernetes Clusters in Google Container Engine(GKE). Having private clusters would secure internal communication between the nodes and enhance the cluster’s security.

High

GCP

Rego Query

Container Using NET\_RAW Capability Detected

This policy checks if Kubernetes Containers are configured to drop ‘NET\_RAW’ or ‘ALL’ capabilities. Dropping these capabilities is a critical security practice to limit the potential impact of a container compromise.

High

Least Privilege, Permissions

Containers Running as Root Detected

This policy validates whether Kubernetes Pods and other kinds of resources are running containers as root where it’s potentially unnecessary. Running containers as root could pose significant security risks and should be avoided wherever possible.

High

Least Privilege, Permissions, Root, Rego Query

Detected Use of “Cluster-Admin” Role in Kubernetes ClusterRoleBinding

This policy checks if the “cluster-admin” role is being used within a Kubernetes ClusterRoleBinding. The “cluster-admin” role offers extensive permissions and should only be used where absolutely necessary in order to maintain a principle of least privilege.

High

Least Privilege, Permissions, Rego Query

Excessive Capabilities Assigned to Kubernetes Containers

This policy checks if the number of capabilities assigned to containers in a Kubernetes environment is minimized. Limiting the capabilities assigned to containers helps to maintain a secure and compliant infrastructure.

High

Least Privilege, Permissions

Excessive Use of Kubernetes Cluster Admin Role Detected

This policy checks if the “cluster-admin” role is being used within a Kubernetes ClusterRoleBinding. The “cluster-admin” role offers extensive permissions and should only be used where absolutely necessary in order to maintain a principle of least privilege.

High

Least Privilege, Permissions, Rego Query

Host Network Namespace Sharing Detected in Kubernetes Containers

This policy checks if containers in a Kubernetes environment are configured to not share the host network namespace. To maintain network isolation and security, containers should not share the host network namespace.

High

Kubernetes Container Not Dropping ‘NET\_RAW’ or ‘ALL’ Capabilities

This policy checks if Kubernetes Containers are configured to drop ‘NET\_RAW’ or ‘ALL’ capabilities. Dropping these capabilities is a critical security practice to limit the potential impact of a container compromise.

High

Least Privilege, Permissions, Rego Query

Kubernetes Pod Security Policy Allowing Root Privileges Detected

This policy validates whether Kubernetes Pods and other kinds of resources are running containers as root where it’s potentially unnecessary. Running containers as root could pose significant security risks and should be avoided wherever possible.

High

Least Privilege, Permissions, Root, Rego Query

Kubernetes Role or Cluster Role Bound to Default Service Account

This policy checks clusterRoles and clusterRoleBindings in Kubernetes, making sure they do not bind to a default service account. Issue arises as the default service account has broad cluster-level permissions that may escalate privileges if a pod is compromised

High

Least Privilege, Rego Query

Memory Limits Not Defined for Kubernetes Containers

This policy checks if memory limits are defined for all containers in Kubernetes. Defining memory limits is important to prevent a single container from consuming an excessive amount of memory which can cause problems on the server.

High

Data Reliability, Rego Query

Minimize the admission of containers with capabilities assigned

Do not generally permit containers with capabilities

High

Least Privilege, Permissions

No Memory Limits Specified for Kubernetes Container

This policy checks if memory limits are defined for all containers in Kubernetes. Defining memory limits is important to prevent a single container from consuming an excessive amount of memory which can cause problems on the server.

High

Data Reliability, Rego Query

Privilege Escalation Enabled on Kubernetes Container

This policy checks the privilege escalation settings of a Kubernetes container. It is crucial to disable privilege escalation to prevent unauthorized access to the host system.

High

Least Privilege, Permissions

Privileged Container Detected

This policy checks if any privileged containers are admitted. To maintain a secure and compliant infrastructure, privileged containers should not be admitted due to potential security risks.

High

Least Privilege, Permissions

Role Binding to Default Service Account Detected in Kubernetes

This policy checks clusterRoles and clusterRoleBindings in Kubernetes, making sure they do not bind to a default service account. Issue arises as the default service account has broad cluster-level permissions that may escalate privileges if a pod is compromised.

High

Least Privilege, Rego Query

Secrets Detected as Environment Variables in Kubernetes Containers

This policy checks if secrets are being used as environment variables in Kubernetes containers. To ensure secure management of sensitive data, secrets should not be used as environment variables.

High

Credentials, Rego Query

Client Certificate Disabled on GCP Kubernetes Cluster

This policy verifies if the GCP Kubernetes clusters are created with the Client Certificate enabled. The ‘master\_auth’ must include ‘client\_certificate\_config’ with the attribute ‘issue\_client\_certificate’ set to true, to ensure secure client access to the clusters.

Medium

GCP

Certification, Rego Query

GCP Kubernetes Cluster created without Alias IP Ranges or with invalid networking mode

This policy ensures that Kubernetes Clusters on Google Cloud Platform (GCP) are created with Alias IP ranges enabled. This implies that the attribute ‘ip\_allocation\_policy’ must be defined and, if it’s defined, the attribute ’networking\_mode’ must be set as VPC\_NATIVE. This is essential to maintain secure network traffic routing and avoid potential security risks.

Medium

GCP

Rego Query

GCP Kubernetes Cluster Detected Without Labels

This policy validates that Kubernetes Clusters within GCP have been configured with labels. Labels enable operational efficiencies and better management of resources, thus they should be added to the clusters.

Medium

GCP

Rego Query

GCP Kubernetes Engine Cluster Master Authentication Misconfiguration Detected

This policy checks if master authentication is set to enabled in GCP Kubernetes Engine Clusters. For secure management of clusters, ‘master\_auth’ should have the subattributes ‘username’ and ‘password’ defined and not empty.

Medium

GCP

Authentication, Rego Query

Incorrect Network Policy Configuration for Google Kubernetes Engine Cluster

This policy checks if the Network Policy is correctly configured in the GKE Cluster. For secure network traffic management, Network Policy must be enabled, meaning that the attribute ’network\_policy.enabled’ must be true and the attribute ‘addons\_config.network\_policy\_config.disabled’ must be false.

Medium

GCP

Rego Query

Undetected or Disabled Node ‘auto\_upgrade’ Setting for GCP Kubernetes Clusters

This policy checks if the ‘auto\_upgrade’ setting is enabled for nodes in Google Container Engine (GKE) clusters. Enabling ‘auto\_upgrade’ ensures that the node software is always up-to-date with the latest security patches and bug fixes.

Medium

GCP

Rego Query

Active Use of Default Service Account Detected

This policy verifies that default service accounts are not actively used. Usage of default service accounts can pose security risks as they are often overprivileged. Restricting their usage promotes minimum privilege principle.

Medium

Rego Query

AppArmor Configuration Missing in Kubernetes Pod Annotation

This policy checks whether Kubernetes Pod metadata contains the annotation key ‘container.apparmor.security.beta.kubernetes.io’ for configuring the AppArmor. This is crucial to limit the security context of the container and secure the Pod’s applications from potential vulnerabilities.

Medium

Rego Query

Automount of Service Account Tokens Enabled in Kubernetes Resources

This policy checks whether the auto mounting of service account tokens is disabled for Kubernetes objects. Disabling this may improve the security posture by reducing the attack surface. Unnecessary mounting of these tokens can lead to potential security risks.

Medium

Least Privilege, Rego Query

Container Detected Sharing the Host IPC Namespace

This policy checks if any containers are sharing the host IPC namespace. To maintain a secure and compliant infrastructure, containers should not share the host IPC namespace as it can lead to potential security risks.

Medium

Rego Query

Container Detected Sharing the Host Network Namespace

This policy checks if any containers are equipped with the NET\_RAW capability. To maintain a secure and compliant infrastructure, no containers should have this capability as it can lead to potential security risks.

Medium

Container Detected with NET\_RAW Capability

This policy checks if any containers are equipped with the NET\_RAW capability. To maintain a secure and compliant infrastructure, no containers should have this capability as it can lead to potential security risks.

Medium

Container with Sensitive Host Directory Write Permission Found

This policy checks if any containers in a Kubernetes pod are configured to mount sensitive host OS directories with write permissions. Write access to critical host OS folders can potentially allow attackers to modify crucial configurations and system binaries, leading to a significant security risk.

Medium

Permissions, Rego Query

Default Service Account Used in Kubernetes Configuration

This policy verifies that default service accounts are not actively used. Usage of default service accounts can pose security risks as they are often overprivileged. Restricting their usage promotes minimum privilege principle.

Medium

Rego Query

Deprecated API Version Detected in Kubernetes Object

This policy checks if any Kubernetes objects are using a deprecated version of the API. Using deprecated API versions can pose potential security risks and lead to future compatibility issues. It is recommended to use the recent stable API versions.

Medium

Rego Query

Detected Kubernetes Container with Unwanted Privileged Status

This policy verifies that no Kubernetes container is running in privileged mode. Running containers in privileged mode is not recommended as it can escalate privileges to the host node. A compromised container running in privileged mode can lead to a full compromise of the host system.

Medium

Least Privilege, Permissions, Rego Query

Detected Kubernetes Containers with CAP\_SYS\_ADMIN Linux capability

This policy checks for the presence of SYS\_ADMIN Linux capabilities on Kubernetes containers which poses a security risk as it potentially offers root access at the host level.

Medium

Rego Query

Detected Kubernetes Resource with Allow Privilege Escalation

This policy validates that Kubernetes resources are not configured with allowPrivilegeEscalation enabled. Enabling this option can increase the potential security risks and exploits, as escalated privileges can provide complete control over the computing environment.

Medium

Least Privilege, Permissions, Rego Query

Detected Kubernetes Workload Mounted with hostPath

This policy verifies that non-kube-system workloads in Kubernetes do not have hostPath mounted. This restriction is important for maintaining security and compliance standards to ensure workloads only have required and authorized access to host filesystems.

Medium

Rego Query

Detected PodSecurityPolicy That Allows Privilege Escalation

This policy checks PodSecurityPolicy configurations for privilege escalation allowances in a Kubernetes environment. Allowing privilege escalation can pose serious security risks and compromise the integrity of the cluster. Thus, it’s critical to ensure that the ‘allowPrivilegeEscalation’ field is either undefined or set to ‘false’ in PodSecurityPolicy configurations.

Medium

Least Privilege, Rego Query

Detected Tiller Service In Kubernetes Configuration

This policy checks for the presence of any Tiller Service in the Kubernetes configuration. Tiller is part of Helm v2 and has been identified as a potential security risk, as it allows full control of the Kubernetes environment. It is recommended to migrate to Helm v3 as it eliminates Tiller and reduces attack surface.

Medium

Rego Query

Excessive Permissions to Read Secrets in Kubernetes RBAC Roles Detected

This policy checks whether Kubernetes Role and ClusterRole resources are configured to permit the reading of secret resources. To ensure secure data exposure management and prevent unauthorized data access, permission to read secrets must be minimized.

Medium

Permissions, Rego Query

Extra Capabilities Detected in Pod Security Policy

This policy verifies that the Kubernetes Pod Security Policy does not grant additional capabilities beyond the default set. This is crucial in order to enforce the principle of least privilege and minimize potential attack surface on containers.

Medium

Rego Query

Host Process ID Namespace Sharing Detected in Kubernetes Containers

This policy checks if containers in a Kubernetes environment are configured to not share the host process ID namespace. To maintain process isolation and security, containers should not share the host process ID namespace.

Medium

Rego Query

Host Process ID Sharing Enabled for Kubernetes Pod

This policy checks if containers in a Kubernetes environment are configured to not share the host process ID namespace. To maintain process isolation and security, containers should not share the host process ID namespace.

Medium

Host’s IPC Namespace Sharing Enabled in Kubernetes Environment

This policy checks if any containers are sharing the host IPC namespace. To maintain a secure and compliant infrastructure, containers should not share the host IPC namespace as it can lead to potential security risks.

Medium

Improperly Configured Seccomp Profile Detected in Kubernetes Resources

This policy verifies that Seccomp profile is correctly configured for Kubernetes workloads such as Pods, CronJobs or other resources using a Pod template. This is crucial to limit the Kernel system calls an application can make and therefore improve its security.

Medium

Rego Query

Improperly Targeted Pod Detected in Network Policy

This policy verifies that Kubernetes Network Policies are targeting specific pods correctly, based on the podSelector.matchLabels configuration. Correctly defining target pods is essential for proper network isolation and traffic control in Kubernetes environments.

Medium

Rego Query

Inadequate Seccomp Profile Configuration Detected

This policy verifies that Seccomp profile is correctly configured for Kubernetes workloads such as Pods, CronJobs or other resources using a Pod template. This is crucial to limit the Kernel system calls an application can make and therefore improve its security.

Medium

Rego Query

Inappropriate Seccomp Profile for Kubernetes PodSecurityPolicy Detected

This policy checks the seccomp profile configuration of a Kubernetes PodSecurityPolicy. It is crucial to set the seccomp profile to ‘runtime/default’ or ‘docker/default’ to enhance the security of the container runtime environment.

Medium

Incorrect Volume Claim Access Mode in Kubernetes StatefulSet Detected

This policy checks whether Kubernetes Stateful Sets have one Volume Claim template with the access mode ‘ReadWriteOnce’. This access mode is essential to ensure that a StatefulSet’s data can be available to a pod regardless of its running node, enhancing data integrity and application reliability.

Medium

Rego Query

Insufficient Limitations on Kubernetes Container Capabilities Detected

This policy checks if the capabilities for a container in Kubernetes are limited. This is important to prevent privilege escalation and maintain the least privilege principle for containerized applications.

Medium

Data Reliability, Rego Query

Kubernetes Container Missing ‘Drop’ Capabilities in Security Context

This policy checks if the ‘drop’ capabilities exist in the Kubernetes container security context. This is crucial for ensuring the security of the container by minimizing its attack surface.

Medium

Rego Query

Kubernetes Container Running in Privileged Mode Detected

This policy verifies that no Kubernetes container is running in privileged mode. Running containers in privileged mode is not recommended as it can escalate privileges to the host node. A compromised container running in privileged mode can lead to a full compromise of the host system.

Medium

Least Privilege, Permissions, Rego Query

Kubernetes Container with Added Capabilities Detected

This policy checks if there are any added capabilities in the security context of Kubernetes containers or initContainers. Containers with added capabilities increase the attack surface and the damage potential in case of a security breach.

Medium

Least Privilege, Permissions, Rego Query

Kubernetes Container With Sensitive OS Directory Write Permissions Detected

This policy checks if any containers in a Kubernetes pod are configured to mount sensitive host OS directories with write permissions. Write access to critical host OS folders can potentially allow attackers to modify crucial configurations and system binaries, leading to a significant security risk.

Medium

Permissions, Rego Query

Kubernetes Dashboard Is Enabled In Specification

This policy checks if the Kubernetes dashboard is enabled in the Kubernetes specification. The Kubernetes dashboard should be disabled whenever it is not needed to reduce attack vectors.

Medium

Rego Query

Kubernetes Image Host Port Not Specified

This policy checks if a Host Port is specified for Kubernetes images. Proper assignment of host ports is crucial for network traffic routing and limiting exposure of the application cluster to the public internet.

Medium

Ports, Rego Query

Kubernetes Network Policy Not Targeting Any Pod Found

This policy verifies that Kubernetes Network Policies are targeting specific pods correctly, based on the podSelector.matchLabels configuration. Correctly defining target pods is essential for proper network isolation and traffic control in Kubernetes environments.

Medium

Rego Query

Kubernetes Pod Sharing Host IPC Namespace Detected

This policy verifies that Kubernetes pods do not share the host Inter-Process Communication (IPC) namespace. Isolating the IPC namespace is important for maintaining the security boundaries between pods and the host.

Medium

Kubernetes Pod with Extra Capabilities Detected

This policy checks if there are any added capabilities in the security context of Kubernetes containers or initContainers. Containers with added capabilities increase the attack surface and the damage potential in case of a security breach.

Medium

Least Privilege, Permissions, Rego Query

Kubernetes Pod without Defined Host Aliases Detected

This policy checks whether Kubernetes Pods have defined ‘hostAliases’. They should be defined to prevent containers from modifying the file after a pod’s containers have already started. This is crucial for maintaining the correct operation and security of the pod.

Medium

Rego Query

Kubernetes Readiness Probe Not Configured

This policy verifies if a readiness probe is configured for containers in Kubernetes. The readiness probe is crucial to determine if a container is ready to handle service requests, thus ensuring reliable operation and traffic routing.

Medium

Rego Query

Kubernetes Resource Deployed in Default Namespace Detected

This policy checks if Kubernetes resources are being deployed in the default namespace. Using the default namespace for deployments can lead to potential security risks and misconfigurations.

Medium

Kubernetes Role or ClusterRole with Wildcard Detected in Rules

This policy checks if Kubernetes Role and ClusterRole objects are incorrectly using wildcard (\*) in rules. Using a wildcard in Kubernetes rules expands the scope of permissions, potentially granting elevated privileges and exposing the system to security risks.

Medium

Rego Query

Kubernetes Service Exposed as an External Load Balancer Detected

This policy validates if a Kubernetes service is exposed as an external load balancer. An exposed load balancer can be accessed from other networks or the internet, potentially posing security risks.

Medium

Data Reliability, Rego Query

Kubernetes Service with Improper Load Balancer Configuration Detected

This policy validates if a Kubernetes service is exposed as an external load balancer. An exposed load balancer can be accessed from other networks or the internet, potentially posing security risks.

Medium

Data Reliability, Rego Query

Kubernetes StatefulSet Missing or Incorrect Pod Anti-Affinity Configuration Detected

This policy checks if Kubernetes StatefulSet resources have the recommended podAntiAffinity policy configured. This policy ensures that multiple StatefulSet pods are not scheduled to run on the same node, improving application reliability and fault tolerance.

Medium

Rego Query

Kubernetes Workload Found with Sensitive OS Directory Mounting

This policy checks if a Kubernetes workload is mounting volumes from sensitive OS directories such as /bin, /sbin, /boot, /cdrom, /dev, etc. Mounting sensitive directories may expose critical system files and potential security vulnerabilities.

Medium

Rego Query

Kubernetes Workload Mounting Sensitive OS Directory Detected

This policy checks if a Kubernetes workload is mounting volumes from sensitive OS directories such as /bin, /sbin, /boot, /cdrom, /dev, etc. Mounting sensitive directories may expose critical system files and potential security vulnerabilities.

Medium

Rego Query

Memory Requests Not Defined for Kubernetes Containers

This policy checks if the memory requests are defined for both containers and initContainers in a Kubernetes Pod configuration. This is required to provide the scheduler with the information it needs to determine on which nodes the Pods should be placed.

Medium

Rego Query

Memory Requests Not Defined for Kubernetes Pod Configuration

This policy checks if the memory requests are defined for both containers and initContainers in a Kubernetes Pod configuration. This is required to provide the scheduler with the information it needs to determine on which nodes the Pods should be placed.

Medium

Rego Query

Missing CPU Limits Configuration for Kubernetes Containers Detected

This policy checks if CPU limits have been set for all Kubernetes containers. Setting CPU limits ensures that a container is guaranteed the amount of CPU it requests when the system has CPU time available.

Medium

Data Reliability, Rego Query

Missing CPU Limits in Kubernetes Container Configuration Detected

This policy checks if CPU limits have been set for all Kubernetes containers. Setting CPU limits ensures that a container is guaranteed the amount of CPU it requests when the system has CPU time available.

Medium

Data Reliability, Rego Query

Missing CPU Request in Kubernetes Container Specification

This policy verifies that CPU request is set for Kubernetes containers. CPU request configuration ensures that the sum of the resource requests of the scheduled containers is less than the capacity of the node, thereby ensuring smooth performance of the cluster.

Medium

Rego Query

Missing Liveness Probe Definition in Kubernetes Deployment

This policy checks if Kubernetes Jobs and CronJobs have a defined liveness probe. A liveness probe checks if containers in a pod are still running - if they’re not, Kubernetes restarts the pod. This setting is crucial to ensure the health of the kubernetes pods, and to minimize the risk of running failed pods.

Medium

Rego Query

NET\_RAW or ALL drop capabilities not set in Kubernetes Pod Security Policy

This policy verifies if containers in a Kubernetes Pod Security Policy have ‘NET\_RAW’ or ‘ALL’ set as drop capabilities. This configuration enhances the security of the container by dropping unnecessary or potentially harmful capabilities.

Medium

Rego Query

Non-Always Image Pull Policy Detected in Kubernetes Configuration

This policy checks if the image pull policy for containers in a Kubernetes pod is set to ‘Always’. This is important to ensure that containers always pull the most recent image version and thus, maintain application security and consistency.

Medium

Rego Query

Non-Compliant Kubernetes Container Image Pull Policy Detected

This policy checks if the image pull policy for containers in a Kubernetes pod is set to ‘Always’. This is important to ensure that containers always pull the most recent image version and thus, maintain application security and consistency.

Medium

Rego Query

Non-Kube-system Workload with HostPath Mount Detected

This policy verifies that non-kube-system workloads in Kubernetes do not have hostPath mounted. This restriction is important for maintaining security and compliance standards to ensure workloads only have required and authorized access to host filesystems.

Medium

Rego Query

Pod Security Policy Allows Sharing Host IPC Namespace

This policy checks if the Kubernetes Pod Security Policy allows containers to share the host Inter-Process Communication (IPC) namespace. Allowing this setting can lead to potential security risks as it implies a container can access and use resources in other separate containers.

Medium

Rego Query

Pod Security Policy Allows Sharing of the Host Process ID Namespace

This policy checks if the Pod Security Policy in Kubernetes allows containers to share the host process ID namespace. Enabling this can lead to potential security risks such as privilege escalation and should therefore be disabled.

Medium

Rego Query

RBAC Roles with Excessive Permissions to Secrets Detected

This policy checks whether Kubernetes Role and ClusterRole resources are configured to permit the reading of secret resources. To ensure secure data exposure management and prevent unauthorized data access, permission to read secrets must be minimized.

Medium

Permissions, Rego Query

Service Account Tokens Auto Mounting Enabled Detected

This policy checks whether the auto mounting of service account tokens is disabled for Kubernetes objects. Disabling this may improve the security posture by reducing the attack surface. Unnecessary mounting of these tokens can lead to potential security risks.

Medium

Least Privilege, Rego Query

Stateful Set Volume Claim Access Mode Misconfigured

This policy checks whether Kubernetes Stateful Sets have one Volume Claim template with the access mode ‘ReadWriteOnce’. This access mode is essential to ensure that a StatefulSet’s data can be available to a pod regardless of its running node, enhancing data integrity and application reliability.

Medium

Rego Query

StatefulSet Missing Volume Storage Request Detected

This policy checks for volume storage requests in Kubernetes StatefulSets. It is essential for efficient and effective resource allocation to ensure that each StatefulSet has a volume storage request. This allows for optimal storage utilization and prevents potential resource contention issues.

Medium

Rego Query

StatefulSet without Volume Storage Requests Detected

This policy checks for volume storage requests in Kubernetes StatefulSets. It is essential for efficient and effective resource allocation to ensure that each StatefulSet has a volume storage request. This allows for optimal storage utilization and prevents potential resource contention issues.

Medium

Rego Query

SYS\_ADMIN Capability Detected on Container

This policy checks for the presence of SYS\_ADMIN Linux capabilities on Kubernetes containers which poses a security risk as it potentially offers root access at the host level.

Medium

Rego Query

Unavailable Kubernetes CPU Request Configuration Detected

This policy verifies that CPU request is set for Kubernetes containers. CPU request configuration ensures that the sum of the resource requests of the scheduled containers is less than the capacity of the node, thereby ensuring smooth performance of the cluster.

Medium

Rego Query

Undefined Liveness Probe Detected for Kubernetes Job or CronJob

This policy checks if Kubernetes Jobs and CronJobs have a defined liveness probe. A liveness probe checks if containers in a pod are still running - if they’re not, Kubernetes restarts the pod. This setting is crucial to ensure the health of the kubernetes pods, and to minimize the risk of running failed pods.

Medium

Rego Query

Undefined or Empty Host Aliases in Kubernetes Pod Detected

This policy checks whether Kubernetes Pods have defined ‘hostAliases’. They should be defined to prevent containers from modifying the file after a pod’s containers have already started. This is crucial for maintaining the correct operation and security of the pod.

Medium

Rego Query

Undefined or Empty Kubernetes Pod Service Account Detected

This policy verifies if the attribute ‘serviceAccountName’ is defined and not empty in a Kubernetes Pod. Defining a Service Account for a Pod is essential to restrict Kubernetes API access and ensure secure and controlled interactions between the Pod and the Kubernetes cluster.

Medium

Rego Query

Undefined or Empty Service Account Name for a Kubernetes Pod Detected

This policy verifies if the attribute ‘serviceAccountName’ is defined and not empty in a Kubernetes Pod. Defining a Service Account for a Pod is essential to restrict Kubernetes API access and ensure secure and controlled interactions between the Pod and the Kubernetes cluster.

Medium

Rego Query

Unmasked Kubernetes Pod Security Policy Proc Mount Type detected

This policy checks if Pod Security Policy in Kubernetes containers allows ‘Unmasked’ as an allowedProcMountTypes setting. For secure container runtime and to protect the sensitive information, this setting should not be allowed.

Medium

Rego Query

Unmasked Proc Mount Types Allowed in Pod Security Policy

This policy checks if Pod Security Policy in Kubernetes containers allows ‘Unmasked’ as an allowedProcMountTypes setting. For secure container runtime and to protect the sensitive information, this setting should not be allowed.

Medium

Rego Query

Unsafe Sysctls Configuration Detected in Kubernetes Cluster

This policy checks if a Kubernetes Cluster Allows Unsafe Sysctls. Disallowing unsafe sysctls is crucial for preventing a pod from influencing any other pod on the node, harming the node’s health or consuming CPU or memory resources beyond the resource limits of a pod.

Medium

Rego Query

Writable Filesystem Enabled on Kubernetes Container

This policy checks the filesystem settings of a Kubernetes container. It is crucial to set the filesystem to read-only where possible to prevent unauthorized data modifications.

Medium

AKS Kubernetes Dashboard Enabled

This policy checks if Azure Kubernetes Dashboard is enabled. For secure cluster management, the dashboard should not be enabled as it can result in potential security risks.

Low

Azure

Rego Query

Azure Kubernetes Dashboard Is Enabled

This policy checks if Azure Kubernetes Dashboard is enabled. For secure cluster management, the dashboard should not be enabled as it can result in potential security risks.

Low

Azure

Rego Query

Non-Container-Optimized OS (COS) Detected in Kubernetes Engine Clusters Node Image

This policy verifies that the Container-Optimized OS (COS) is used as the node image for Google Kubernetes Engine Clusters. This is important because COS is a secure, lightweight, and highly reliable OS from Google, designed to run containers. Using other OS types may not provide the same level of security and reliability.

Low

GCP

Data Reliability, Rego Query

Docker Daemon Socket Exposed to Containers Detected

This policy verifies whether Docker daemon socket is exposed to Kubernetes containers. Exposing Docker daemon socket might lead to potential security risks as it gives containerized applications access to Docker Engine, which should be avoided for security best practices.

Low

Rego Query

Improper Kubernetes Pod Image Configuration Detected

This policy checks if the image fields for Kubernetes pods are unambiguously defined and do not reference the ’latest’ tag. Having a clear image specification is crucial to ensure immutability and reproducibility of deployments, while the ’latest’ tag can lead to unpredictability, as it does not reference a fixed image version.

Low

Rego Query

Invalid HPA Object Metrics Targeting Detected in Terraform Configuration

This policy verifies that the Horizontal Pod Autoscaler (HPA) in Kubernetes is targeting a valid object. This ensures the effective and efficient use of resources and assists in maintaining a stable environment.

Low

Rego Query

Invalid HPA Target Object Detected

This policy verifies that the Horizontal Pod Autoscaler (HPA) in Kubernetes is targeting a valid object. This ensures the effective and efficient use of resources and assists in maintaining a stable environment.

Low

Rego Query

Invalid Kubernetes Metadata Label Detected

This policy ensures that all labels in the metadata of Kubernetes resources comply with the standard label format. Properly formatted labels contribute to efficient resource management and prevent unexpected behaviors.

Low

Rego Query

Kubernetes Component Exposing Docker Daemon Socket Detected

This policy verifies whether Docker daemon socket is exposed to Kubernetes containers. Exposing Docker daemon socket might lead to potential security risks as it gives containerized applications access to Docker Engine, which should be avoided for security best practices.

Low

Rego Query

Kubernetes Container with Writable Root Filesystem Detected

This policy verifies if the root filesystem of a container in a Kubernetes cluster is mounted as read-only. To prevent unauthorized tampering and enhance overall system security, the root filesystem of containers should ideally be mounted as read-only.

Low

Root, Rego Query

Kubernetes Deployment Without podAntiAffinity Policy Detected

This policy verifies that Deployments in Kubernetes that have more than two replicas are configured with a podAntiAffinity policy to avoid scheduling multiple pods on the same node. This is important to ensure high-availability and to prevent potential disruptions of service.

Low

Data Reliability, Rego Query

Kubernetes Image Deployed Without a Digest

This policy verifies if images deployed in Kubernetes workloads have a digest specified. Using an image digest ensures that the same image is always pulled, increasing workload security and integrity.

Low

Rego Query

Kubernetes Image Without Digest Detected

This policy verifies if images deployed in Kubernetes workloads have a digest specified. Using an image digest ensures that the same image is always pulled, increasing workload security and integrity.

Low

Rego Query

Kubernetes Pod Missing AppArmor Annotation Configuration

This policy checks whether Kubernetes Pod metadata contains the annotation key ‘container.apparmor.security.beta.kubernetes.io’ for configuring the AppArmor. This is crucial to limit the security context of the container and secure the Pod’s applications from potential vulnerabilities.

Low

Rego Query

Kubernetes Service Type Set As NodePort Detected

This policy ensures that a Kubernetes Service is not set with the type ‘NodePort’. The use of NodePort allows for services to be exposed on a static port on each Node, this can lead to security vulnerabilities if not properly managed.

Low

Ports, Rego Query

Kubernetes Service with NodePort Service Type Detected

This policy ensures that a Kubernetes Service is not set with the type ‘NodePort’. The use of NodePort allows for services to be exposed on a static port on each Node, this can lead to security vulnerabilities if not properly managed.

Low

Ports, Rego Query

Missing Deadline Configuration for Kubernetes Cronjob

This policy checks if the ‘startingDeadlineSeconds’ attribute is defined in a CronJob spec. It’s necessary to configure a deadline for CronJobs to ensure they are correctly managed and do not run indefinitely, causing unnecessary resource consumption and potential disruption.

Low

Rego Query

Missing Kubernetes Pod or Container Security Context

This policy checks if a security context is applied to Kubernetes pods and containers. Applying a security context is essential for defining privilege and access control settings.

Low

Rego Query

Missing or Incorrect Pod Anti-Affinity Configuration in Kubernetes Deployment Resource

This policy verifies that Deployments in Kubernetes that have more than two replicas are configured with a podAntiAffinity policy to avoid scheduling multiple pods on the same node. This is important to ensure high-availability and to prevent potential disruptions of service.

Low

Data Reliability, Rego Query

Missing PodDisruptionBudget in Kubernetes Deployment

This policy checks if Kubernetes deployments have a PodDisruptionBudget assigned to ensure high availability. Assigning a PodDisruptionBudget to deployments with multiple replicas is crucial to prevent disruptions caused by voluntary interruptions.

Low

Rego Query

Missing Security Context in Kubernetes Pods or Containers

This policy checks if a security context is applied to Kubernetes pods and containers. Applying a security context is essential for defining privilege and access control settings.

Low

Non-conforming Kubernetes Metadata Label Detected

This policy ensures that all labels in the metadata of Kubernetes resources comply with the standard label format. Properly formatted labels contribute to efficient resource management and prevent unexpected behaviors.

Low

Rego Query

Permissive Access to Create Pods Detected in Kubernetes Configurations

This policy scrutinizes permissions related to pod creation in Kubernetes. Privilege escalation is a potential security hazard that can be mitigated by limiting these permissions.

Low

Permissions, Rego Query

Permissive Access to Create Pods in Cluster Detected

This policy scrutinizes permissions related to pod creation in Kubernetes. Privilege escalation is a potential security hazard that can be mitigated by limiting these permissions.

Low

Permissions, Rego Query

Undefined or Invalid Kubernetes Container Image Detected

This policy checks if the image fields for Kubernetes pods are unambiguously defined and do not reference the ’latest’ tag. Having a clear image specification is crucial to ensure immutability and reproducibility of deployments, while the ’latest’ tag can lead to unpredictability, as it does not reference a fixed image version.

Low

Rego Query

Missing or Invalid Stackdriver Monitoring Configuration in GCP Kubernetes Engine Cluster

This policy checks if the Stackdriver Monitoring is enabled for GCP Kubernetes Engine Clusters. Monitoring services provide essential insights into your application’s performance and potential issues. Hence, it is crucial to have such monitoring services like Stackdriver enabled for maintaining a stable and secure infrastructure.

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
