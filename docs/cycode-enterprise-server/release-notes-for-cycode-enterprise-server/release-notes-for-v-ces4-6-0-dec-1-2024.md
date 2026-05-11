# Release notes for v CES4.6.0 (Dec. 1, 2024) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-6-0-dec-1-2024

---

# Release notes for v CES4.6.0 (Dec. 1, 2024)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/release-notes-for-cycode-enterprise-server/release-notes-for-v-ces4-6-0-dec-1-2024.md "Edit this page")

Updated on Dec 1, 2024 • Published on Dec 1, 2024

* * *

## Improvements and bug fixes [Copied!](#improvements-and-bug-fixes "Copy link to this section")

### Improvements [Copied!](#improvements "Copy link to this section")

*   Added a new automation workflow library.
    
*   Added support to share favorite views on the platform.
    
*   Added support for SOC 2 Type 2 Framework V2 to Cycode Compliance.
    
*   Added support to SCA to download SBOM files for multiple repositories in one zip file.
    
*   Added support to SCA to download SBOM reports for multiple repositories in a single file.
    
*   Added support for the new National Institute of Standards and Technology (NIST) Secure Software Development Framework (SSDF) to compliance.
    
*   Added the jenkinsci github organization to the list of trusted Jenkins plugin providers.
    
*   Added `--severity-threshold` support for all scan types in the CLI.
    
*   Added support for Eclipse Theia in the VS Code Extension.
    
*   Added violation category UI visibility for inaccessible violation categories.
    
*   Updated the SCA and secrets violation cards.
    
*   Added support to revert an ignored violation within a Pull Request (PR) by using a reply comment.
    
*   Added support for project hierarchies.
    
*   Updated the VS Code extension to include additional toolbar actions, loading screen, and a tree view.
    
*   Added support for secret validity to the JSON Web Token (JWT) policy.
    
*   Enhanced the column selection in the violations table.
    
*   Added exploitability information to the package vulnerability graph node/asset card and to the violations accordingly.
    
*   Added support for the Dart - Pub package manager to the SCA.
    
*   Added support for on-demand scans for multi branches in SCA.
    
*   Added support for interactive comments in PRs to Gerrit.
    
*   Added support for scanning secrets in Microsoft Teams.
    
*   Added support for the Swift package manager to the SCA.
    
*   Added support to allow users to generate a SCA scan report via the UI using the On-Demand Scans feature.
    
*   Added an option to the Container Image scanner to scan by date.
    
*   Added an option to the Container Image scanning to scan images based on the Kubernetes running state.
    
*   Added support to SCA for remediation on multiple branches.
    
*   Added support to allow SCA scans for multiple branches.
    
*   Cycode Visual Studio Extension updates:
    
    *   Added support for Infrastructure as Code (IaC) support
    *   Added tree view and violation cards for SCA and Secrets
    *   Added an “Open Violation Card” as a suggested action
    *   Added an “Ignore this violation” button to the secrets violation card
*   We’ve combined the “Organization Plan” and “Organization Settings” screens into a single “Plan Details” screen.
    
*   All ConnectorX integrations can now be selected as part of the project scope step when creating a new project. Note that you can select the ConnectorX and get the data you need at 2 levels:
    
    *   Security Tool Account - This will get you all the violations that came from the account.
    *   Security Tool Projects - Based on the projects selection on the security tools configuration, you can connect different parts of the security tools to the Cycode project.
*   Added a new Unassociated User column to the members screen.
    
*   Cycode Visual Studio Extension v1.4.0 release:
    
    *   Added violation cards
    *   Added new toolbar actions: Back to Home, Expand All, Collapse All

### Bug fixes [Copied!](#bug-fixes "Copy link to this section")

*   Fixed an issue whereby the secret auto resolution failed when the fix occurs before the violation is detected.
*   Fixed an issue whereby the user is automatically logged out when choosing multiple tenants.
*   Fixed an issue whereby it wasn’t possible to create Cycode projects for Bitbucket.
*   Fixed an issue whereby the Azure DevOps Server organizations were not showing in Inventory or the RIG.
*   Fixed an issue whereby the violations related to the policy “Azure Storage Account Lacks Forced HTTPS” failed to resolve automatically.
*   Fixed an issue whereby the aggregated data in the RIG and the data that was exported didn’t match resulting from missing default filters for the export.
*   Fixed an issue whereby creating a new favorite view as a “Viewer” role generated an error message.
*   Fixed an issue whereby the link passed from the GitLab Vulnerability Report integration does not match the URL that is provided in the violation details card.
*   Fixed an issue whereby it wasn’t possible to delete custom queries.
*   Fixed an issue whereby Favorite Views were not being saved every time.
*   Fixed an issue whereby labels were not displayed when exporting the following search: Violations page > SCA > group by repository > aggregate by repository.
*   Fixed an issue whereby the status in the JIRA 2-way integration was not being updated.
*   Fixed an issue where Dockerfile was not triggering IaC automatic resolution.
*   Fixed an issue whereby an organization was appearing in the RIG.
*   Fixed an issue whereby the Bitbucket repository displayed with two Cycode projects in the Violations page.
*   Fixed an issue whereby connecting between the Cycode project entity and the label entity returned no results.
*   Added support for auto resolution for secrets of type “private key“ when removed from the code.
*   Fixed an issue whereby the SCA violation status didn’t auto-resolve after the package version was updated.
*   Fixed an issue whereby a violation did not auto-resolve after the dependency was updated.
*   Fixed an issue whereby the “Vulnerability found in dependency” policy violations page displayed an error.
*   Fixed a discrepancy issue in the violations page export.
*   Fixed an issue whereby non-admin level users were not able to load the secret value card or the violations tab of the secret value card.
*   Fixed an issue whereby container scanning violations were not created in the platform.
*   Fixed an issue whereby the link passed from the GitLab Vulnerability Report integration does not match the URL that is provided in the violation details card.
*   Fixed an issue whereby the status in the JIRA 2-way integration was not being updated.
*   Fixed an issue whereby when using the Group By Package feature on the Violations page, sometimes the user received different responses for the same request.
*   Fixed an issue whereby when grouping by package, the Fixed in Version showing is not the highest version.
*   Fixed an issue whereby some code dependency packages were missing license IDs.
*   Fixed an issue whereby when using an API to add an existing JIRA to a violation, the format of the link to the JIRA was not correct.
*   Fixed an issue whereby links to the file in GithHub were missing in some violations.
*   Fixed an issue whereby labels were not showing in the JIRA Ticket Description.
*   Fixed an issue whereby the GitLab token was revoked.
*   Fixed an issue whereby data was missing from the Performance Over Time chart.
*   Fixed an issue whereby the date was missing from the Performance Over Time chart in the Executive dashboard.
*   Fixed an issue whereby Kubernetes images were not being scanned.
*   Fixed an issue whereby the SCA scanner did not flag a package vulnerability when the next package used version 13.5.7.
*   Fixed an issue whereby the custom IaC Rego policy did not work with PR comments.
*   Fixed a race condition whereby violations were not updating after changing the project data.
*   Fixed an issue whereby the Performance Over Time widget in the Executive dashboard failed to load data with the Cycode project filters.
*   Fixed an issue whereby the JIRA workflow was failing even though the fields were completed.
*   Fixed an issue whereby Cycode was not displaying the project manager correctly in the Projects page.
*   Fixed an issue whereby newly added labels were not appearing in the labels filter list for classification rules.
*   Fixed an issue whereby secret violations were displayed in other secret SHA value findings.
*   Fixed a secret count discrepancy.
*   Fixed an issue whereby not all of the secret filters were being applied properly.
*   Fixed an issue whereby the wrong violations displayed when choosing a specific Secret SHA.
*   Fixed an issue whereby the PR Status check did not fail even when the threshold configurations for the “Comments” Severity were higher than the “Fail status-check / block-merge” threshold configurations.
*   Fixed an issue whereby the projects filter failed to load for the project manager in specific projects.
*   Fixed an issue whereby secret values of multiple violations were being grouped together.
*   Fixed an issue whereby exports via the Inventory page took a long time.
*   Fixed an issue whereby the workflow notification URL pointed to an old workflow URL.
*   Fixed an issue whereby an error was displayed when accessing IaC violations.
*   Fixed an issue related to a missing file name in the “Artifactory API Token” violation that came from Docker.
*   Fixed an issue whereby some JFrog container repositories were not being scanned.
*   Fixed an issue whereby the email workflow failed in the EU environment.
*   Fixed an issue whereby users weren’t able to create a project when there were no existing projects.
*   Fixed an issue whereby the violation count was not displaying when selecting Assets>Organizations.
*   Fixed an issue whereby a user with a “None” role was able to open a support ticket even though the ‘ContactUsOnlyForAdminsOwners’ flag was enabled.
*   Fixed an issue whereby a Semgrep violation was not displaying the link to the file.
*   Fixed an issue in which the Generic Container Registry integration failed.
*   Fixed an issue whereby the filter “Exists in latest code: Yes” detected a secret that was already removed.
*   Fixed an issue whereby the CLI scan was not synced with the UI scan results.
*   Fixed formatting of Executive dashboard PDF export.
*   Fixed an issue related to a violations policy discrepancy, whereby serialized violations were displayed under a deserialized policy.
*   Fixed an issue whereby applying the “Open a fix pull request (PR)” to a workflow wasn’t being saved after submission.
*   Fixed an issue whereby container scanning for Quay (on-prem) was not detecting violations with a generic container registry.
*   Fixed an issue whereby filtering the Violation page for “no associated project” displayed a repository tied to a project with a label (dynamic asset).
*   Fixed an issue whereby Cycode projects weren’t being created for the Synk Security Tool.
*   Fixed an issue whereby grouping by Container Repository in the Security Violations wasn’t working.
*   Fixed an issue whereby an error occurred while trying to access SCA violations in the Violations page.
*   Fixed an issue whereby it wasn’t possible to create a workflow with the remediation action “Open a fix pull request (PR)”.
*   Fixed an issue whereby an error occurred when extracting a violation report.
*   Fixed a UX issue to enable viewing the policy description while editing a policy.
*   Fixed an issue whereby the SBOM Report was showing in HTML format.
*   Fixed an issue whereby some SCA violations couldn’t be resolved.
*   Fixed an issue whereby when using the Group By Package feature on the Violations page, sometimes the user received different responses for the same request.
*   Fixed an issue whereby an asset that was removed and an unmapped repository were still displayed in the project card.
*   Fixed an issue whereby the SBOM Report didn’t include packages.
*   Fixed an issue whereby the JIRA Ticket Creation box didn’t appear when clicking Create Ticket inside a violation.
*   Fixed an issue whereby a project wasn’t showing any violations.
*   Fixed an issue whereby the admin was unable to add members in Cycode.
*   Fixed an issue whereby an old organization appeared in the Pull Request settings page and in the list of assets integrated with Cycode.
*   Fixed an issue whereby the radio button for switching tenants didn’t work for any role other than Admin to Admin.
*   Fixed an issue whereby labels were not showing in the JIRA Ticket Description.
*   Fixed an issue whereby it wasn’t possible to reinstall a Bitbucket integration.
*   Fixed an issue whereby non-leak related policies appeared in the Violations -> Leaks page.
*   Fixed an issue whereby initializing multiple broker instances with the same credentials created authentication errors.

## Infrastructure services updates [Copied!](#infrastructure-services-updates "Copy link to this section")

### Version Updates [Copied!](#version-updates "Copy link to this section")

*   MongoDB: Updated to version 7.0.12.
*   Redis: Updated to version 7.4.1.
*   PostgreSQL: Updated to version 14.13.
*   ArangoDB: Updated to version 3.11.
*   Kafka: Updated to version 3.6.0.
*   Minio: Updated to version RELEASE.2022-10-24.

### Security policies updates [Copied!](#security-policies-updates "Copy link to this section")

#### General security enhancements [Copied!](#general-security-enhancements "Copy link to this section")

*   `runAsNonRoot`: Ensures containers do not run as root, reducing the risk of unauthorized privileged actions.
*   `readOnlyRootFilesystem: true`: Prevents write operations to the root filesystem, ensuring it remains immutable.
*   `capabilities: drop ALL`: Removes all unnecessary Linux capabilities from containers, minimizing potential exploits.
*   `allowPrivilegeEscalation: false`: Prevents processes inside the container from gaining elevated privileges.

#### Service-specific security updates (stricter and improved) [Copied!](#service-specific-security-updates-stricter-and-improved "Copy link to this section")

Note

These updates enforce stricter security configurations for individual services, ensuring they run with minimal privileges, restricted filesystem access, and enhanced isolation. Importantly, these configurations align with the recommendations of the projects’ maintainers. For example, MongoDB maintainers specifically suggest these settings, rather than being decisions made solely by Cycode. This ensures each service adheres to industry best practices and improved security standards.

#### **MongoDB** [Copied!](#mongodb "Copy link to this section")

*   `runAsUser: 2000`
*   `fsGroup: 2000`
*   `readOnlyRootFilesystem: true`
*   `allowPrivilegeEscalation: false`

#### **Redis** [Copied!](#redis "Copy link to this section")

*   `runAsUser: 1001`
*   `fsGroup: 1001`
*   `readOnlyRootFilesystem: true`
*   `allowPrivilegeEscalation: false`

#### **PostgreSQL** [Copied!](#postgresql "Copy link to this section")

*   `runAsUser: 70`
*   `fsGroup: 70`
*   `readOnlyRootFilesystem: true`
*   `allowPrivilegeEscalation: false`

#### **ArangoDB** [Copied!](#arangodb "Copy link to this section")

*   `runAsUser: 1000`
*   `fsGroup: 1000`
*   `readOnlyRootFilesystem: true`
*   `allowPrivilegeEscalation: false`

#### **Kafka** [Copied!](#kafka "Copy link to this section")

*   `runAsUser: 1000`
*   `fsGroup: 1000`
*   `readOnlyRootFilesystem: true`
*   `allowPrivilegeEscalation: false`

#### **Minio** [Copied!](#minio "Copy link to this section")

*   `runAsUser: 1000`
*   `fsGroup: 1000`
*   `readOnlyRootFilesystem: true`
*   `allowPrivilegeEscalation: false`

#### **Nginx** [Copied!](#nginx "Copy link to this section")

*   Admission jobs:
    
    *   `runAsUser: 2000`
    *   `fsGroup: 2000`
*   Controller:
    
    *   `runAsUser: 101`
    *   `fsGroup: 101`
    *   `NET_BIND_SERVICE` capability enabled

#### **Unleash** [Copied!](#unleash "Copy link to this section")

*   PSQL backend:
    
    *   `runAsUser: 70`
    *   `fsGroup: 70`
*   Unleash:
    
    *   `runAsUser: 1000`
    *   `fsGroup: 1000`

#### **OpenShift Compatibility** [Copied!](#openshift-compatibility "Copy link to this section")

Added lifecycle policies for OpenShift namespaces to ignore dynamic annotation changes:

*   `openshift.io/sa.scc.mcs`
*   `openshift.io/sa.scc.supplemental-groups`
*   `openshift.io/sa.scc.uid-range`

**cycode-restricted-v1**

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
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
```

```yaml
kind: SecurityContextConstraints
apiVersion: security.openshift.io/v1
metadata:
  name: cycode-restricted-v1
  annotations:
    kubernetes.io/description: Custom Restricted Cycode SecurityContextConstraints policy
allowHostDirVolumePlugin: false
allowHostIPC: false
allowHostNetwork: false
allowHostPID: false
allowHostPorts: false
allowPrivilegeEscalation: false
allowPrivilegedContainer: false
allowedCapabilities: null
defaultAddCapabilities: null
groups: []
priority: 5
readOnlyRootFilesystem: true
requiredDropCapabilities:
- ALL
runAsUser:
  type: MustRunAsNonRoot
fsGroup:
  type: RunAsAny  
seLinuxContext:
  type: MustRunAs
supplementalGroups:
  type: RunAsAny
users:
- system:serviceaccount:arangodb:arango-deployment-operator
- system:serviceaccount:minio:default
- system:serviceaccount:redis:default
- system:serviceaccount:unleash:default
- system:serviceaccount:postgres:default
- system:serviceaccount:mongodb:mongodb-kubernetes-operator
- system:serviceaccount:mongodb:mongodb-database
- system:serviceaccount:kafka:kafka-cluster-zookeeper
- system:serviceaccount:kafka:strimzi-cluster-operator
- system:serviceaccount:kafka:kafka-cluster-entity-operator
- system:serviceaccount:kafka:kafka-cluster-kafka-exporter
- system:serviceaccount:kafka:default
- system:serviceaccount:app:app-sa
- system:serviceaccount:api:api-sa
- system:serviceaccount:api:cycode-job-sa-clean-metadata-pr
volumes:
- configMap
- csi
- downwardAPI
- emptyDir
- ephemeral
- persistentVolumeClaim
- projected
- secret
```

**cycode-nginx-v1**

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
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
```

```yaml
kind: SecurityContextConstraints
apiVersion: security.openshift.io/v1
metadata:
  name: cycode-nginx-v1
  annotations:
    kubernetes.io/description: Custom Cycode SecurityContextConstraints policy for Nginx ingress
allowHostDirVolumePlugin: false
allowHostIPC: false
allowHostNetwork: false
allowHostPID: false
allowHostPorts: false
allowPrivilegeEscalation: false
allowPrivilegedContainer: false
allowedCapabilities:
- NET_BIND_SERVICE
defaultAddCapabilities: null
groups: []
priority: 5
readOnlyRootFilesystem: false
requiredDropCapabilities:
- ALL
runAsUser:
  type: MustRunAsNonRoot
fsGroup:
  type: RunAsAny  
seLinuxContext:
  type: MustRunAs
supplementalGroups:
  type: RunAsAny
users:
- system:serviceaccount:ingress-nginx:ingress-nginx
- system:serviceaccount:ingress-nginx:ingress-nginx-admission
volumes:
- configMap
- csi
- downwardAPI
- emptyDir
- ephemeral
- persistentVolumeClaim
- projected
- secret
```

**cycode-keycloak-v1**

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
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
```

```yaml
kind: SecurityContextConstraints
apiVersion: security.openshift.io/v1
metadata:
  name: cycode-keycloak-v1
  annotations:
    kubernetes.io/description: Custom Cycode SecurityContextConstraints policy for Keycloak namespace
allowHostDirVolumePlugin: false
allowHostIPC: false
allowHostNetwork: false
allowHostPID: false
allowHostPorts: false
allowPrivilegeEscalation: false
allowPrivilegedContainer: false
allowedCapabilities: null
defaultAddCapabilities: null
groups: []
priority: 5
readOnlyRootFilesystem: false
requiredDropCapabilities:
- MKNOD
runAsUser:
  type: RunAsAny
fsGroup:
  type: RunAsAny  
seLinuxContext:
  type: MustRunAs
supplementalGroups:
  type: RunAsAny
users:
- system:serviceaccount:keycloak:default
- system:serviceaccount:keycloak:keycloak
- system:serviceaccount:keycloak:cycode-job-sa-keycloak-config-cli
- system:serviceaccount:keycloak:cycode-job-sa-keycloak-update-nginx-public-key
- system:serviceaccount:keycloak:cycode-job-sa-keycloak-alter-table
volumes:
- configMap
- csi
- downwardAPI
- emptyDir
- ephemeral
- persistentVolumeClaim
- projected
- secret
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
