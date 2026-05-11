# Red Hat OpenShift | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/install-the-cycode-enterprise-server/red-hat-openshift

---

# Red Hat OpenShift

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/install-the-cycode-enterprise-server/red-hat-openshift.md "Edit this page")

Updated on Dec 2, 2024 • Published on Dec 2, 2024

* * *

Red Hat OpenShift is a platform for developing and deploying applications at scale, including today’s AI-enabled apps.

1.  To install Cycode on Red Hat OpenShift, follow the installation steps detailed in the [Cycode Enterprise Server installation](/cycode-enterprise-server/install-the-cycode-enterprise-server) .
2.  Then, run the Cycode install command for OpenShift as follows:  
    `cycode install-openshift-deps`

This command creates custom Cycode Security Context Constraints in the OpenShift cluster. Here are examples of policies that will be created after running the command:

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
