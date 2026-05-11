# Configure your on-premise installation | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/configure-your-on-premise-installation

---

# Configure your on-premise installation

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/configure-your-on-premise-installation.md "Edit this page")

Updated on Mar 27, 2025 • Published on Mar 27, 2025

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

Cycode Operator orchestrates the installation of your on-premise Cycode platform. Use the YAML file described here to define the required configuration values.

## Cycode Operator deployment file [Copied!](#cycode-operator-deployment-file "Copy link to this section")

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
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
```

```yaml
apiVersion: v1
kind: Namespace
metadata:
 name: cycode-operator
---
apiVersion: v1
data:
  .dockerconfigjson: >-
    {{registry_key}}
kind: Secret
metadata:
  name: cycode-registry-credentials
  namespace: cycode-operator
type: kubernetes.io/dockerconfigjson
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: cycode-operator
  namespace: cycode-operator
imagePullSecrets:
- name: cycode-registry-credentials
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: cycode
subjects:
  - kind: ServiceAccount
    name: cycode-operator
    namespace: cycode-operator
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cycode-operator
  namespace: cycode-operator
  labels:
    app: cycode-operator
spec:
  replicas: 1
  selector:
    matchLabels:
      app: cycode-operator
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: cycode-operator
    spec:
      containers:
        - name: cycode-operator
          image: >-
            us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/cycode-operator-octopus:{{tag}}
          env:
            - name: OPERATOR_NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
            - name: OPERATOR_CONFIGMAP_NAME
              value: overrides
            - name: TF_LOG
              value: ERROR
            - name: environment
              value: cycode
          resources: {}
      restartPolicy: Always
      terminationGracePeriodSeconds: 30
      dnsPolicy: ClusterFirst
      serviceAccountName: cycode-operator
      serviceAccount: cycode-operator
      securityContext: {}
      imagePullSecrets:
        - name: cycode-registry-credentials
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: config
  namespace: cycode-operator
data:
  config.tfvars: |
    domain                                                                     = "{{domain}}"
    environment                                                                = "{{environment}}"
    auth_provider_configuration_client_id                                      = "{{auth_provider_client_id}}"
    auth_provider_configuration_api_key                                        = "{{auth_provider_secret}}"
    report_provider_configuration_report_template_id                           = "{{report_provider_template_id}}"
    report_provider_configuration_generic_email_template_id                    = "{{report_provider_email_template}}"
    tenant_company_name                                                        = "{{company_name}}"
    tenant_admin_full_name                                                     = "{{admin_name}}"
    tenant_admin_email                                                         = "{{admin_email}}"

    registry_credentials                                                       = "{{registry_key}}"

    monitoring_enabled                                                         = {{monitoring_enabled}}
    
    github_o_auth_app_configuration_client_id                                  = "{{github_o_auth_client_id}}"
    github_o_auth_app_configuration_client_secret                              = "{{github_o_auth_client_secret}}"
    github_o_auth_app_configuration_github_generic_token                       = "{{github_generic_token}}"
    
    github_app_configuration_enabled                                           = {{github_app_enabled}}
    github_global_setting = {
      github_app_name = "{{github_app_name}}"
      github_app_id = {{github_app_id}}
      github_app_private_key = "{{github_app_private_key}}"
    }

    self_signed_certificate_enable                                             = {{ssl_cert_enabled}}
    self_signed_certificate_key                                                = "{{base64_enc_ssl_cert}}"

    truested_ca_enable                                                         = {{trusted_cert_enabled}}
    truested_ca_secret_value                                                   = "{{base64_enc_trusted_ca_cert}}"

    frontend_bff_config = { 
      NODE_EXTRA_CA_CERTS = "{{ssl_ca_cert_var}}"
      CUSTOM_AUTHENTICATION_ENABLED = "{{custom_auth_enabled}}"
      CUSTOM_AUTHENTICATION_ROLE = "{{custom_auth_role}}"
      CUSTOM_AUTHENTICATION_TENANT_ID = "{{azure_ad_tenant_id}}"
      CUSTOM_AUTHENTICATION_SAML_LOGIN_URL = "{{azure_ad_login_url}}"
      CUSTOM_AUTHENTICATION_SAML_LOGOUT_URL = "{{azure_ad_login_url}}"
      CUSTOM_AUTHENTICATION_SAML_ENABLED = "{{custom_auth_saml_enabled}}"
      CUSTOM_AUTHENTICATION_SAML_CERTIFICATE = "{{base64_encoded_azure_ad_saml_certificate}}"
    }

    external_auth_provider                                                     = {{external_auth_provider}}

    gitlab_app_configuration_client_id                                         = "{{gitlab_app_client_id}}"
    gitlab_app_configuration_client_secret                                     = "{{gitlab_app_client_secret}}"
    gitlab_app_configuration_gitlab_generic_token                              = "{{gitlab_generic_token}}"

    integration_service_online_configuration_slack_configuration_client_id     = "{{slack_config_client_id}}"
    integration_service_online_configuration_slack_configuration_client_secret = "{{slack_config_client_secret}}"

    bitbucket_app_configuration_name                                           = "{{bitbucket_app_name}}"
    bitbucket_app_configuration_bitbucket_generic_refresh_token                = "{{bitbucket_generic_refresh_token}}"
    bitbucket_app_configuration_client_key                                     = "{{bitbucket_client_key}}"
    bitbucket_app_configuration_client_secret                                  = "{{bitbucket_client_secret}}"
    bitbucket_app_configuration_old_client_key                                 = "{{bitbucket_old_client_key}}"
    bitbucket_app_configuration_old_client_secret                              = "{{bitbucket_old_client_secret}}"
    bitbucket_app_configuration_webhook_secret                                 = "{{bitbucket_webhook_secret}}"

    azure_devops_app_configuration_client_id                                   = {{azure_devops_app_client_id}}
    azure_devops_app_configuration_client_secret                               = {{azure_devops_app_client_secret}}

    aws_authentication_configuration_access_key_id                             = {{aws_configuration_access_key_id}}
    aws_authentication_configuration_secret_access_key                         = {{aws_configuration_secret_access_key}}
    aws_cloud_formation_access_key_id                                          = {{aws_cloud_formation_access_key_id}}
    aws_cloud_formation_secret_access_key                                      = {{aws_cloud_formation_secret_access_key}}
    aws_cloud_formation_bucket_name                                            = {{aws_cloud_formation_bucket_name}}
    aws_cloud_formation_environment_name                                       = {{aws_cloud_formation_environment_name}}
    aws_cloud_formation_region                                                 = {{aws_cloud_formation_region}}

    azure_app_configuration_client_id                                          = {{azure_app_client_id}}
    azure_app_configuration_client_secret                                      = {{azure_app_client_secret}}

    domain_tls = {
      enabled                  = {{tls_cert_enabled}}
      wildcard_domain_tls_cert = "{{tls_cert_base64_encoded}}"
      wildcard_domain_tls_key  = "{{tls_key_base64_encoded}}"
      frontend_domain_tls_cert = "{{fe_tls_cert_base64_encoded}}"
      frontend_domain_tls_key  = "{{fe_tls_key_base64_encoded}}"
      backend_domain_tls_cert  = "{{be_tls_cert_base64_encoded}}"
      backend_domain_tls_key   = "{{be_tls_key_base64_encoded}}"
    }

    enabled_services = {
      aws_connector              = {{aws_enabled}}
      azure_connector            = {{azure_enabled}}
      azure_devops_connector     = {{azure_devops_enabled}}
      bitbucket_server_connector = {{bitbucket_server_enabled}}
      bitbucket_connector        = {{bitbucket_enabled}}
      gcp_connector              = {{gcp_enabled}}
      github_connector           = {{github_enabled}}
      gitlab_connector           = {{gitlab_enabled}}
      kubernetes_connector       = {{kubernetes_enabled}}
      jenkins_connector          = {{jenkins_enabled}}
      circleci_connector         = {{circleci_enabled}}
      dockerhub_connector        = {{dockerhub_enabled}}
      jfrog_connector            = {{jfrog_enabled}}
      terraform_cloud_connector  = {{terraform_cloud_enabled}}
      gerrit_connector           = {{gerrit_enabled}}
      external_scanner_connector = {{external_scanner_enabled}}
      workload_scanner_detector  = {{workload_scanner_enabled}}
    }

    replicas = {
      access-review-detector                   = "{{replicas}}"
      audit-log-service                        = "{{replicas}}"
      auth-service                             = "{{replicas}}"
      aws-connector                            = "{{replicas}}"
      azure-connector                          = "{{replicas}}"
      azure-devops-connector                   = "{{replicas}}"
      azure-devops-dispatcher-service          = "{{replicas}}"
      bitbucket-search-api-service             = "{{replicas}}"
      bitbucket-server-connector               = "{{replicas}}"
      bitbucket-server-dispatcher-service      = "{{replicas}}"
      bitbucketconnectordispatcher-service     = "{{replicas}}"
      bitbucket-connector                      = "{{replicas}}"
      comment-service                          = "{{replicas}}"
      custom-remediations                      = "{{replicas}}"
      detectionsoffline-service                = "{{replicas}}"
      detectionsonline-service                 = "{{replicas}}"
      file-service                             = "{{replicas}}"
      gcp-connector                            = "{{replicas}}"
      git-rip-search-api-service               = "{{replicas}}"
      github-search-api-service                = "{{replicas}}"
      delayed-commands-processor-offline       = "{{replicas}}"
      githubconnectordispatcher-service        = "{{replicas}}"
      github-connector                         = "{{replicas}}"
      gitlab-connector                         = "{{replicas}}"
      gitlab-dispatcher-service                = "{{replicas}}"
      gitlab-search-api-service                = "{{replicas}}"
      gerrit-connector                         = "{{replicas}}"
      gerrit-dispatcher-service                = "{{replicas}}"
      insecure-infra-configuration-detector    = "{{replicas}}"
      integration-service                      = "{{replicas}}"
      insecure-pipeline-configuration-detector = "{{replicas}}"
      workload-scanner-detector                = "{{replicas}}"
      kubernetes-connector                     = "{{replicas}}"
      leak-detector                            = "{{replicas}}"
      metadata-service-write                   = "{{replicas}}"
      metadataoffline-service                  = "{{replicas}}"
      metadataonline-service                   = "{{replicas}}"
      metadataoutboxprocessor-service          = "{{replicas}}"
      remediations-service                     = "{{replicas}}"
      report-service                           = "{{replicas}}"
      repository-files-detector                = "{{replicas}}"
      scan-service                             = "{{replicas}}"
      external-scanner-connector               = "{{replicas}}"
      external-scanner-dispatcher              = "{{replicas}}"
      drift-service                            = "{{replicas}}"
      workflow-service                         = "{{replicas}}"
      dependency-collector                     = "{{replicas}}"
      scheduler-service                        = "{{replicas}}"
      scm-config-detector                      = "{{replicas}}"
      scm-event-detector                       = "{{replicas}}"
      scm-remediator                           = "{{replicas}}"
      secret-detector                          = "{{replicas}}"
      secret-detector-docker-image             = "{{replicas}}"
      external-scanner-detector                = "{{replicas}}"
      jenkins-connector                        = "{{replicas}}"
      circleci-connector                       = "{{replicas}}"
      dockerhub-connector                      = "{{replicas}}"
      file-connector-service-offline           = "{{replicas}}"
      jfrog-connector                          = "{{replicas}}"
      terraform-cloud-connector                = "{{replicas}}"
      keyword-service                          = "{{replicas}}"
      graph-detector                           = "{{replicas}}"
      security-vulnerability-detector-service  = "{{replicas}}"
      rate-limiter                             = "{{replicas}}"
      anomaly-detector                         = "{{replicas}}"
      project-service                          = "{{replicas}}"
    }

    cycode_services_images = {
      cycode-js                                 = "{{registry_url}}/cycode-js:{{version}}"
      open-policy-agent                         = "{{registry_url}}/open-policy-agent:{{version}}"
      accessreviewdetector_service              = "{{registry_url}}/accessreviewdetector_service:{{version}}"
      anomaly_detector_service                  = "{{registry_url}}/anomaly_detector_service:{{version}}"
      audit_log_service                         = "{{registry_url}}/audit_log_service:{{version}}"
      auth_service                              = "{{registry_url}}/auth_service:{{version}}"
      aws_connector                             = "{{registry_url}}/aws_connector:{{version}}"
      azure_connector                           = "{{registry_url}}/azure_connector:{{version}}"
      azure_devops_connector                    = "{{registry_url}}/azure_devops_connector:{{version}}"
      azure_devops_dispatcher_service           = "{{registry_url}}/azure_devops_dispatcher_service:{{version}}"
      bitbucket_connector                       = "{{registry_url}}/bitbucket_connector:{{version}}"
      bitbucket_search_api_service              = "{{registry_url}}/bitbucket_search_api_service:{{version}}"
      bitbucket_server_connector                = "{{registry_url}}/bitbucket_server_connector:{{version}}"
      bitbucket_server_dispatcher_service       = "{{registry_url}}/bitbucket_server_dispatcher_service:{{version}}"
      bitbucketconnectordispatcher_service      = "{{registry_url}}/bitbucketconnectordispatcher_service:{{version}}"
      circleci_connector                        = "{{registry_url}}/circleci_connector:{{version}}"
      comment_service                           = "{{registry_url}}/comment_service:{{version}}"
      custom_remediations                       = "{{registry_url}}/custom_remediations:{{version}}"
      delayed_commands_processor_offline        = "{{registry_url}}/delayed_commands_processor_offline:{{version}}"
      dependency_collector                      = "{{registry_url}}/dependency_collector:{{version}}"
      detectionsoffline_service                 = "{{registry_url}}/detectionsoffline_service:{{version}}"
      detectionsonline_service                  = "{{registry_url}}/detectionsonline_service:{{version}}"
      dockerhub_connector                       = "{{registry_url}}/dockerhub_connector:{{version}}"
      drift_service                             = "{{registry_url}}/drift_service:{{version}}"
      external_scanner_connector                = "{{registry_url}}/external_scanner_connector:{{version}}"
      external_scanner_detector                 = "{{registry_url}}/external_scanner_detector:{{version}}"
      external_scanner_dispatcher               = "{{registry_url}}/external_scanner_dispatcher:{{version}}"
      file_connector_service_offline            = "{{registry_url}}/file_connector_service_offline:{{version}}"
      file_service                              = "{{registry_url}}/file_service:{{version}}"
      gcp_connector                             = "{{registry_url}}/gcp_connector:{{version}}"
      gerrit_connector                          = "{{registry_url}}/gerrit_connector:{{version}}"
      gerritdispatcher-service                  = "{{registry_url}}/gerritdispatcher-service:{{version}}"
      github_connector                          = "{{registry_url}}/github_connector:{{version}}"
      github_search_api_service                 = "{{registry_url}}/github_search_api_service:{{version}}"
      githubconnectordispatcher_service         = "{{registry_url}}/githubconnectordispatcher_service:{{version}}"
      gitlab_connector                          = "{{registry_url}}/gitlab_connector:{{version}}"
      gitlab_dispatcher_service                 = "{{registry_url}}/gitlab_dispatcher_service:{{version}}"
      gitlab_search_api_service                 = "{{registry_url}}/gitlab_search_api_service:{{version}}"
      graph_detector_offline                    = "{{registry_url}}/graph_detector_offline:{{version}}"
      graph_offline                             = "{{registry_url}}/graph_offline:{{version}}"
      graph_online                              = "{{registry_url}}/graph_online:{{version}}"
      insecure_infra_configuration_detector     = "{{registry_url}}/insecure_infra_configuration_detector:{{version}}"
      insecure_pipeline_config_detector_offline = "{{registry_url}}/insecure_pipeline_config_detector_offline:{{version}}"
      integration_service                       = "{{registry_url}}/integration_service:{{version}}"
      jenkins_connector                         = "{{registry_url}}/jenkins_connector:{{version}}"
      jfrog_connector                           = "{{registry_url}}/jfrog_connector:{{version}}"
      keyword_service                           = "{{registry_url}}/keyword_service:{{version}}"
      kubernetes_connector                      = "{{registry_url}}/kubernetes_connector:{{version}}"
      leak_detector                             = "{{registry_url}}/leak_detector:{{version}}"
      metadata_service_write                    = "{{registry_url}}/metadata_service_write:{{version}}"
      metadataoffline_service                   = "{{registry_url}}/metadataoffline_service:{{version}}"
      metadataonline_service                    = "{{registry_url}}/metadataonline_service:{{version}}"
      metadataoutboxprocessor_service           = "{{registry_url}}/metadataoutboxprocessor_service:{{version}}"
      project_service                           = "{{registry_url}}/project_service:{{version}}"
      rate_limiter                              = "{{registry_url}}/rate_limiter:{{version}}"
      remediations_service                      = "{{registry_url}}/remediations_service:{{version}}"
      report_service                            = "{{registry_url}}/report_service:{{version}}"
      repository_files_detector                 = "{{registry_url}}/repository_files_detector:{{version}}"
      scan_service                              = "{{registry_url}}/scan_service:{{version}}"
      scheduler_service                         = "{{registry_url}}/scheduler_service:{{version}}"
      scmconfigdetector_service                 = "{{registry_url}}/scmconfigdetector_service:{{version}}"
      scmeventdetector_service                  = "{{registry_url}}/scmeventdetector_service:{{version}}"
      scmremediatoroffline_service              = "{{registry_url}}/scmremediatoroffline_service:{{version}}"
      secret_detector                           = "{{registry_url}}/secret_detector:{{version}}"
      secret_detector_docker_image              = "{{registry_url}}/secret_detector_docker_image:{{version}}"
      security_vulnerability_detector_service   = "{{registry_url}}/security_vulnerability_detector_service:{{version}}"
      terraform_cloud_connector                 = "{{registry_url}}/terraform_cloud_connector:{{version}}"
      workflow_service                          = "{{registry_url}}/workflow_service:{{version}}"
      workload_scanner_detector                 = "{{registry_url}}/workload_scanner:{{version}}"
      hcl-parser                                = "{{registry_url}}/hcl-parser:{{version}}"
      mongo_index                               = "{{registry_url}}/terraform-kubernetes-mongodb/mongo:{{version}}"
    }

    managed_infrastructure  = {
      postgresql = {
        namespace = "{{namespace}}"
        name      = "{{name}}"
      }
      arango = {
        namespace = "{{namespace}}"
        name      = "{{name}}"
      }
      mongodb = {
        namespace = "{{namespace}}"
        name      = "{{name}}"
      }
      minio = {
        namespace = "{{namespace}}"
        name      = "{{name}}"
      }
      redis = {
        namespace = "{{namespace}}"
        name      = "{{name}}"
      }
      kafka = {
        namespace = "{{namespace}}"
        name      = "{{name}}"
      }
      unleash = {
        namespace = "{{namespace}}"
        name      = "{{name}}"
      }
    }
```

## Deployment file variables [Copied!](#deployment-file-variables "Copy link to this section")

### General variables [Copied!](#general-variables "Copy link to this section")

Value

Description

Data Type

Default

`registry_key`

The base64-encoded Docker JSON configuration key for Cycode Google Artifact Registry, as provided by Cycode, or your equivalent for a private registry. This value will be `eyJjb25maWciOiAibm8tY29uZmlnIn0=` if no key is required for the private registry.

String

N/A

`tag`

The `cycode-operator-octopus` image tag. This value is provided by Cycode.

String

N/A

`domain`

The domain that will be used for the installation. It makes up the `{{domain}}` part of the full domain used for Cycode, as seen below: `app.{{environment}}.{{domain}}`

String

N/A

`environment`

The subdomain value that will be appended to the front of the domain variable. This will typically be set to cycode for customers, but can be configured to whatever the customer would like. It makes up the `{{environment}}` part of the full domain used for Cycode, as seen below: `app.{{environment}}.{{domain}}`

String

N/A

`auth_provider_client_id`

The auth provider client ID. This value is provided by Cycode

String

N/A

`auth_provider_client_secret`

The auth provider client secret. This value is provided by Cycode

String

N/A

`report_provider_client_id`

The report provider client ID, which will be provided by Cycode

String

N/A

`report_provider_client_secret`

The report provider client secret, which will be provided by Cycode

String

N/A

`company_name`

The name of the company for the customer

String

N/A

`admin_name`

The name of the admin user for the customer

String

N/A

`admin_email`

The email of the admin user for the customer

String

N/A

### Certificate variables [Copied!](#certificate-variables "Copy link to this section")

Value

Description

Data Type

Default

`tls_cert_enabled`

The boolean value that determines if HTTPS will be enabled or not.

Boolean

`false`

`tls_cert_base64_encoded`

The fully-chained CA certificate for the `*.{{environment}}.{{domain}}` being used for the Cycode install.

String

N/A

`tls_key_base64_encoded`

The private key of the `tls_cert` certificate being used for the Cycode install.

String

N/A

`fe_tls_cert_base64_encoded`

The fully-chained CA certificate for the `app.{{environment}}.{{domain}}` being used for the Cycode install.

String

N/A

`fe_tls_key_base64_encoded`

The private key of the `fe_tls_cert_base64_encoded` certificate being used for the Cycode install.

String

N/A

`be_tls_cert_base64_encoded`

The fully-chained CA certificate for the `api.{{environment}}.{{domain}}` being used for the Cycode install.

String

N/A

`be_tls_key_base64_encoded`

The private key of the `be_tls_cert_base64_encoded` certificate being used for the Cycode install.

String

N/A

`ssl_cert_enabled`

Enables/Disables the use of a self-signed CA certificate. This should be used if there is no available signed CA certificate.

Boolean

`false`

`base64_enc_ssl_cert`

The base64-encoded self-signed certificate. Use if `ssl_cert_enabled` is set to `true`

String

N/A

`ssl_ca_cert_var`

This will always be set to `/app/config/ca-cert.key` if the `ssl_cert_enabled` is set to `true`

String

N/A

`trusted_cert_enabled`

Enables/Disables the use of a trusted CA certificate. This is used to add trusted certificates for integration environments, i.e. Self-Managed Gitlab

Boolean

`false`

`trusted_ca_cert_base64_encoded`

The base64-encoded trusted CA certificate. Use if `trusted_cert_enabled` is set to `true`

String

N/A

### Custom authentication variables [Copied!](#custom-authentication-variables "Copy link to this section")

Value

Description

Data Type

Default

`external_auth_provider`

This setting determines if this installation will use the custom authentication method or not.

Boolean

`true`

`custom_auth_enabled`

This setting determines if this installation will use the custom authentication method or not.

String

`0`

`custom_auth_role`

The role the custom authentication method will use

String

`admin`

`azure_ad_tenant_id`

The Azure AD tenant ID, i.e. `2e2df7ec-b62a-4a1d-973e-72876d74261e`.

String

N/A

`azure_ad_login_url`

The Azure AD Login URL, i.e. `https://login.microsoftonline.com/2e2df7ec-b62a-4a1d-973e-72876d74261e/saml2`.

String

N/A

`custom_auth_saml_enabled`

Enables the custom authentication SAML method required for the Azure AD login method. Set to `"1"` to turn this on.

String

`"0"`

`base64_encoded_azure_ad_saml_certificate`

The Azure AD SAML certificate. Use only if using the Azure AD login method

String

N/A

### AWS variables [Copied!](#aws-variables "Copy link to this section")

Value

Description

Data Type

Default

`aws_configuration_access_key_id`

The AWS configuration Access Key ID. This value is provided by Cycode.

String

N/A

`aws_configuration_secret_access_key`

The AWS configuration Secret Access Key. This value is provided by Cycode.

String

N/A

`aws_cloud_formation_access_key_id`

The AWS cloud formation Access Key ID. This value is provided by Cycode.

String

N/A

`aws_cloud_formation_secret_access_key`

The AWS cloud formation Secret Access Key. This value is provided by Cycode.

String

N/A

`aws_cloud_formation_bucket_name`

The AWS cloud formation bucket name. This value is provided by Cycode.

String

N/A

`aws_cloud_formation_environment_name`

The AWS cloud formation environment name. This value is provided by Cycode.

String

N/A

`aws_cloud_formation_region`

The AWS cloud formation region. This value is provided by Cycode.

String

N/A

### Azure App variables [Copied!](#azure-app-variables "Copy link to this section")

Value

Description

Data Type

Default

`azure_app_client_id`

The Azure App client ID.

String

N/A

`azure_app_client_secret`

The Azure App client secret.

String

N/A

### Azure DevOps variables [Copied!](#azure-devops-variables "Copy link to this section")

Value

Description

Data Type

Default

`azure_devops_app_client_id`

The Azure DevOps App app ID of the created Azure DevOps OAuth app.

String

N/A

`azure_devops_app_client_secret`

The Azure DevOps App client secret of the created Azure DevOps OAuth app.

String

N/A

### Bitbucket variables [Copied!](#bitbucket-variables "Copy link to this section")

Value

Description

Data Type

Default

`bitbucket_app_name`

String

N/A

`bitbucket_generic_refresh_token`

String

N/A

`bitbucket_client_key`

String

N/A

`bitbucket_client_secret`

String

N/A

`bitbucket_old_client_key`

String

N/A

`bitbucket_old_client_secret`

String

N/A

`bitbucket_webhook_secret`

String

N/A

### GitHub variables [Copied!](#github-variables "Copy link to this section")

Value

Description

Data Type

Default

`github_pat`

The GitHub personal access token generated by the customer

String

N/A

`github_o_auth_client_id`

The GitHub OAuth app client ID generated by the customer

String

N/A

`github_o_auth_client_secret`

The GitHub OAuth app client secret generated by the customer

String

N/A

`github_app_name`

The GitHub App app name from the browser of the created GitHub App.

String

N/A

`github_app_id`

The GitHub App app ID from the the created GitHub App.

Integer

N/A

`github_app_private_key_one_line`

The GitHub App private key value as one line. For example, if the key is as follows: `-----BEGIN RSA PRIVATE KEY----- line1 line2 line3 -----END RSA PRIVATE KEY-----` You will want to save this value as `line1line2line3`.

String

N/A

### Gitlab Variables [Copied!](#gitlab-variables "Copy link to this section")

Value

Description

Data Type

Default

`gitlab_app_client_id`

The GitLab App client ID of the created Gitlab OAuth app.

String

N/A

`gitlab_app_client_secret`

The GitLab App client secret of the created Gitlab OAuth app.

String

N/A

`gitlab_generic_token`

A generic access token for Gitlab.

String

N/A

### Slack variables [Copied!](#slack-variables "Copy link to this section")

Value

Description

Data Type

Default

`slack_app_client_id`

The Slack App client ID of the created Slack app

String

N/A

`slack_app_client_secret`

The Slack App client secret of the created Slack app.

String

N/A

### Integration variables [Copied!](#integration-variables "Copy link to this section")

Value

Description

Data Type

Default

`aws_enabled`

Enables/Disables the AWS integration.

Boolean

`false`

`azure_enabled`

Enables/Disables the Azure Enterprise integration.

Boolean

`false`

`azure_devops_enabled`

Enables/Disables the Azure DevOps and Azure DevOps Server integrations.

Boolean

`false`

`bitbucket_server_enabled`

Enables/Disables the Bitbucket Server integration.

Boolean

`false`

`bitbucket_enabled`

Enables/Disables the Bitbucket integration.

Boolean

`false`

`circleci_enabled`

Enables/Disables the CircleCI integration.

Boolean

`false`

`dockerhub_enabled`

Enables/Disables the DockerHub integration.

Boolean

`false`

`external_scanner_enabled`

Enables/Disables the integrations.

Boolean

`false`

`gcp_enabled`

Enables/Disables the Google Cloud integration.

Boolean

`false`

`gerrit_enabled`

Enables/Disables the Gerrit integrations.

Boolean

`false`

`github_enabled`

Enables/Disables the GitHub and GitHub Enterprise integrations.

Boolean

`false`

`gitlab_enabled`

Enables/Disables the Gitlab and Gitlab Self-Managed integrations.

Boolean

`false`

`jenkins_enabled`

Enables/Disables the Jenkins integration.

Boolean

`false`

`jfrog_enabled`

Enables/Disables the Jfrog integrations.

Boolean

`false`

`kubernetes_enabled`

Enables/Disables the Kubernetes integration.

Boolean

`false`

`terraform_cloud_enabled`

Enables/Disables the Terraform Cloud integrations.

Boolean

`false`

`workload_scanner_enabled`

Enables/Disables the integrations.

Boolean

`false`

### Private registry settings [Copied!](#private-registry-settings "Copy link to this section")

When configuring the Cycode install to use a private registry, the following block should be added to the `config` ConfigMap in the `data.config.tfvars` section:

```
1
2
3
```

```hcl
cycode_services_images = {
  {{service_image}} = {{registry_url}}/{{service_image}}:{{version}}
}
```

Value

Description

Default

`service_image`

The name of the service variable. Can be any of the list in the [private registry variables](#private-registry-settings) section.

N/A

`registry_url`

The registry URL where the Cycode images are to be pulled from.

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq`

`version`

The image tag of the service image.

N/A

#### Private registry example [Copied!](#private-registry-example "Copy link to this section")

Any number of the listed services in the [Cycode services images](#cycode-service-images) can be added to the `cycode_services_images` configuration block.

```
1
2
3
4
```

```hcl
cycode_services_images = {
  cycode-js                                 = "us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/cycode-js:main-efdbc0cf"
  open-policy-agent                         = "us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/open-policy-agent:master-d36bc6f9"
}
```

### Cycode service images [Copied!](#cycode-service-images "Copy link to this section")

Below is a list of all the Cycode services images that can be added in the `cycode_services_images`:

*   `cycode-js`
*   `open-policy-agent`
*   `accessreviewdetector_service`
*   `anomaly_detector_service`
*   `audit_log_service`
*   `auth_service`
*   `aws_connector`
*   `azure_connector`
*   `azure_devops_connector`
*   `azure_devops_dispatcher_service`
*   `bitbucket_connector`
*   `bitbucket_search_api_service`
*   `bitbucket_server_connector`
*   `bitbucket_server_dispatcher_service`
*   `bitbucketconnectordispatcher_service`
*   `circleci_connector`
*   `comment_service`
*   `custom_remediations`
*   `delayed_commands_processor_offline`
*   `dependency_collector`
*   `detectionsoffline_service`
*   `detectionsonline_service`
*   `dockerhub_connector`
*   `drift_service`
*   `external_scanner_connector`
*   `external_scanner_detector`
*   `external_scanner_dispatcher`
*   `file_connector_service_offline`
*   `file_service`
*   `gcp_connector`
*   `gerrit_connector`
*   `gerritdispatcher-service`
*   `github_connector`
*   `github_search_api_service`
*   `githubconnectordispatcher_service`
*   `gitlab_connector`
*   `gitlab_dispatcher_service`
*   `gitlab_search_api_service`
*   `graph_detector_offline`
*   `graph_offline`
*   `graph_online`
*   `insecure_infra_configuration_detector`
*   `insecure_pipeline_config_detector_offline`
*   `integration_service`
*   `jenkins_connector`
*   `jfrog_connector`
*   `keyword_service`
*   `kubernetes_connector`
*   `leak_detector`
*   `metadata_service_write`
*   `metadataoffline_service`
*   `metadataonline_service`
*   `metadataoutboxprocessor_service`
*   `project_service`
*   `rate_limiter`
*   `remediations_service`
*   `report_service`
*   `repository_files_detector`
*   `scan_service`
*   `scheduler_service`
*   `scmconfigdetector_service`
*   `scmeventdetector_service`
*   `scmremediatoroffline_service`
*   `secret_detector`
*   `secret_detector_docker_image`
*   `security_vulnerability_detector_service`
*   `terraform_cloud_connector`
*   `workflow_service`
*   `workload_scanner_detector`
*   `hcl-parser`
*   `mongo_index`

### Replica settings [Copied!](#replica-settings "Copy link to this section")

All services in Cycode can have their replica settings adjusted to the desired numbers. The following block should be added to the `config` ConfigMap in the `data.config.tfvars` section:

```
1
2
3
```

```hcl
replicas = {
  "{{service_name}}" = "{{num_of_replicas}}"
}
```

Within this block, the following services can be added and their default number of replicas provided:

Service Name

Default Value

`access-review-detector`

`"1"`

`audit-log-service`

`"1"`

`auth-service`

`"1"`

`aws-connector`

`"1"`

`azure-connector`

`"1"`

`azure-devops-connector`

`"1"`

`azure-devops-dispatcher-service`

`"1"`

`bitbucket-search-api-service`

`"1"`

`bitbucket-server-connector`

`"1"`

`bitbucket-server-dispatcher-service`

`"1"`

`bitbucketconnectordispatcher-service`

`"1"`

`bitbucket-connector`

`"1"`

`comment-service`

`"1"`

`custom-remediations`

`"1"`

`detectionsoffline-service`

`"1"`

`detectionsonline-service`

`"1"`

`file-service`

`"1"`

`gcp-connector`

`"1"`

`git-rip-search-api-service`

`"1"`

`github-search-api-service`

`"1"`

`delayed-commands-processor-offline`

`"1"`

`githubconnectordispatcher-service`

`"1"`

`github-connector`

`"1"`

`gitlab-connector`

`"1"`

`gitlab-dispatcher-service`

`"1"`

`gitlab-search-api-service`

`"1"`

`gerrit-connector`

`"1"`

`gerrit-dispatcher-service`

`"1"`

`insecure-infra-configuration-detector`

`"1"`

`integration-service`

`"1"`

`insecure-pipeline-configuration-detector`

`"1"`

`workload-scanner-detector`

`"1"`

`kubernetes-connector`

`"1"`

`leak-detector`

`"1"`

`metadata-service-write`

`"1"`

`metadataoffline-service`

`"1"`

`metadataonline-service`

`"1"`

`metadataoutboxprocessor-service`

`"1"`

`remediations-service`

`"1"`

`report-service`

`"1"`

`repository-files-detector`

`"1"`

`scan-service`

`"1"`

`external-scanner-connector`

`"1"`

`external-scanner-dispatcher`

`"1"`

`drift-service`

`"1"`

`workflow-service`

`"1"`

`dependency-collector`

`"1"`

`scheduler-service`

`"1"`

`scm-config-detector`

`"1"`

`scm-event-detector`

`"1"`

`scm-remediator`

`"1"`

`secret-detector`

`"5"`

`secret-detector-docker-image`

`"1"`

`external-scanner-detector`

`"1"`

`jenkins-connector`

`"1"`

`circleci-connector`

`"1"`

`dockerhub-connector`

`"1"`

`file-connector-service-offline`

`"3"`

`jfrog-connector`

`"1"`

`terraform-cloud-connector`

`"1"`

`keyword-service`

`"1"`

`graph-detector`

`"1"`

`security-vulnerability-detector-service`

`"1"`

`rate-limiter`

`"1"`

`anomaly-detector`

`"1"`

`project-service`

`"1"`

#### Replicas settings example [Copied!](#replicas-settings-example "Copy link to this section")

Any number of the listed services in the [replica settings](#replica-settings) can be added to the `replicas` configuration block.

```
1
2
3
4
5
6
```

```hcl
replicas = {
  access-review-detector                   = "1"
  github-connector                         = "1"
  secret-detector                          = "5"
  rate-limiter                             = "1"
}
```

### Infrastructure settings [Copied!](#infrastructure-settings "Copy link to this section")

To change the settings for the infrastructure installation by adding the following block to the `config` ConfigMap in the `data.config.tfvars` section:

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
  {{infra_var}} = {
    namespace = "{{namespace}}"
    name      = "{{name}}"
  }
}
```

### Infrastructure setting variables [Copied!](#infrastructure-setting-variables "Copy link to this section")

The following infrastructure pieces can be edited in the managed\_infrastructure block by their `infra_var` :

*   `postgresql`
*   `arango`
*   `mongodb`
*   `minio`
*   `redis`
*   `kafka`
*   `unleash`

The following variables can be edited:

Value

Description

`namespace`

The namespace of the infrastructure configuration

`name`

The name of the infrastructure secret name for access credentials

The following table contains the default values for the various variables available in the infrastructure settings:

Variable Name

Default Value

`postgresql.namespace`

`postgres`

`postgresql.name`

`postgres-credential`

`arango.namespace`

`arangodb`

`arango.name`

`arango-credential`

`mongodb.namespace`

`mongodb`

`mongodb.name`

`mongo-credential`

`minio.namespace`

`minio`

`minio.name`

`minio-credential`

`redis.namespace`

`redis`

`redis.name`

`redis-redis-cluster`

`kafka.namespace`

`kafka`

`kafka.name`

`kafka-credential`

`unleash.namespace`

`unleash`

`unleash.name`

`unleash-secret`

#### Infrastructure settings example [Copied!](#infrastructure-settings-example "Copy link to this section")

Any number of the listed services in the [infrastructure settings variables](#replica-settings) can be added to the `managed_infrastructure` configuration block.

```
1
2
3
4
5
```

```hcl
managed_infrastructure  = {
  minio = {
    namespace = "cycode-operator"
    name = "s3-credential"
  }
```

## Cycode Operator override file [Copied!](#cycode-operator-override-file "Copy link to this section")

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
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
```

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: overrides
  namespace: cycode-operator
data:
  global: |
    {
      "registry_credentials": "{{registry_key}}"
    }
  enabled_services: |
    {
      "frontegg_data": {{auth_data}},
      "nginx": {{nginx}},
      "unleash": {{unleash}},
      "minio": {{minio}},
      "postgres": {{postgres}},
      "redis": {{redis}},
      "kafka": {{kafka}},
      "mongodb": {{mongodb}},
      "arangodb": {{arangodb}},
      "monitoring": {{monitoring}}
    }
  auth_provider: |
    {
      "external_auth_provider": {{external_auth_provider}}
      "client_id": "{{auth_provider_client_id}}",
      "client_secret": "{{auth_provider_secret}}"
    }
  nginx: |
    {
      "domain_tls": {{tls_cert_enabled}},
      "images": {
        "controller": "{{controller_image}}",
        "webhook": "{{webhook_image}}"
      }
    }
  postgres: |
    {
      "storage_size": "{{storage_size}}",
      "cpu": "{{cpu}}",
      "memory": "{{memory}}",
      "image": "{{postgres_image}}"
    }
  arangodb: |
    {
      "agent": {
        "replicas": {{replicas}},
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "storage_class_name": "{{storage_class_name}}",
        "storage_size": "{{storage_size}}",
        "image": "{{arango_alpine_image}}",
        "node_selector": {
          "key": "kubernetes.io/os",
          "value": "linux"
        }
      },
      "operator": {
        "replicas": "{{replicas}}",
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "image": "{{arango_operator_image}}"
      },
      "exporter": {
        "image": "{{arango_exporter_image}}"
      },
      "cluster": {
        "name": "arangodb-cluster",
        "mode": "{{arango_cluster_mode}}",
        "environment": "Production",
        "log_level": "debug",
        "storage_class_name": "{{storage_class_name}}",
        "storage_size": "{{storage_size}}",
        "replicas": {{replicas}},
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "image": "{{arango_cluster_image}}",
        "node_selector": {
          "key": "kubernetes.io/os",
          "value": "linux"
        }
      }
    }
  kafka: |
    {
      "operator": {
        "image": "{{kafka_operator_image}}"
      },
      "kafka": {
        "replicas": "{{replicas}}",
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "storage_size": "{{storage_size}}",
        "image": "{{kafka_image}}"
      },
      "zookeeper": {
        "replicas": "{{replicas}}",
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "storage_size": "{{storage_size}}",
        "image": "{{kafka_zookeeper_image}}"
      }
    }
  mongo: |
    {
      "operator": {
        "replicas": "{{replicas}}",
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "image": "{{mongo_operator_image}}"
      },
      "agent": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "image": "{{mongo_agent_image}}"
      },
      "webhook": {
        "image": "{{mongo_webhook_image}}"
      },
      "readiness_probe": {
        "image": "{{mongo_readiness_probe_image}}"
      },
      "cluster": {
        "name": "mongo-cluster",
        "replicas": {{replicas}},
        "storage_size": "{{storage_size}}",
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "image": "{{mongo_cluster_image}}"
      }
    }
  minio: |
    {
      "storage_size": "{{storage_size}}",
      "cpu": "{{cpu}}",
      "memory": "{{memory}}",
      "image": "{{minio_image}}"
    }
  redis: |
    {
      "storage_size": "{{storage_size}}",
      "cpu": "{{cpu}}",
      "memory": "{{memory}}",
      "image": "{{redis_image}}"
    }
  unleash: |
    {
      "unleash_image": "{{unleash_iamge}}",
      "psql_image": "{{psql_image}}"
    }
  grafana: |
    {
      "disable_initial_admin": "{{initial_admin}}",
      "hostname": "monitor.{{environment}}.{{domain}}"
    }
  loki: |
    {
      "consul": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
      },
      "distributor": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
      },
      "gateway": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
      },
      "ingester": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
        "data_storage": "{{data_storage_size}}",
        "wal_storage": "{{wal_storage_size}}"
      },
      "querier": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
        "storage": "{{storage_size}}"
      },
      "query_frontend": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
      },
      "memcached": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
      },
      "memcached_frontend": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
      },
      "memcached_index_queries": {
        "cpu": "{{cpu}}",
        "memory": "{{memory}}",
        "replicas": {{replicas}}
      }
    }
```

## Override file variables [Copied!](#override-file-variables "Copy link to this section")

### General variables [Copied!](#general-variables-1 "Copy link to this section")

Value

Description

Data Type

Default

`registry_key`

The base64-encoded Docker JSON configuration key for Cycode Google Artifact Registry (or your equivalent for a private registry). This value will be `eyJjb25maWciOiAibm8tY29uZmlnIn0=` if no key is required for the private registry)

String

N/A

`external_auth_provider`

This setting determines if this installation will use the custom authentication method or not.

Boolean

`true`

`auth_provider_client_id`

The auth provider client ID. This value is provided by Cycode

String

N/A

`auth_provider_client_secret`

The auth provider client secret. This value is provided by Cycode

String

N/A

`domain`

The domain that will be used for the installation. It makes up the `{{domain}}` part of the full domain used for Cycode, as seen below: `app.{{environment}}.{{domain}}`

String

N/A

`environment`

The subdomain value that will be appended to the front of the domain variable. This will typically be set to cycode for customers, but can be configured to whatever the customer would like. It makes up the `{{environment}}` part of the full domain used for Cycode, as seen below: `app.{{environment}}.{{domain}}`

String

N/A

### Infrastructure variables [Copied!](#infrastructure-variables "Copy link to this section")

Value

Description

Data Type

Default

`frontegg_data`

Determines if the Cycode instance uses custom authentication or not. This value should match the `external_auth_provider` variable in the `deployment` YAML [basic variables](#general-variables) .

`true`

`nginx`

Determines if the Cycode instance will install the `nginx` infrastructure component.

`true`

`unleash`

Determines if the Cycode instance will install the `unleash` infrastructure component.

`true`

`minio`

Determines if the Cycode instance will install the `minio` infrastructure component.

`true`

`postgres`

Determines if the Cycode instance will install the `postgres` infrastructure component.

`true`

`redis`

Determines if the Cycode instance will install the `redis` infrastructure component.

`true`

`kafka`

Determines if the Cycode instance will install the `kafka` infrastructure component.

`true`

`mongodb`

Determines if the Cycode instance will install the `mongo` infrastructure component.

`true`

`arangodb`

Determines if the Cycode instance will install the `arangodb` infrastructure component.

`true`

`monitoring`

Determines if the Cycode instance will install the `loki` and `grafana` infrastructure components.

`true`

### Arango variables [Copied!](#arango-variables "Copy link to this section")

All configurations listed under the `arangodb` configuration block should be formatted as JSON.

The list of Arango variables are spread out through the following JSON configuration blocks:

Configuration

Description

`agent`

This configures the Arango agents that are created when using the `ActiveFailover` mode

`operator`

This configures the Arango operator that helps install the Arango components

`exporter`

This configures the Arango exporter which handles the Export feature in Cycode

`cluster`

This configures teh Arango clusters used for the Arango database

#### Agent configuration [Copied!](#agent-configuration "Copy link to this section")

These are the available configurations for the Arango `agent` configuration block:

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`1Gi`

`storage_class_name`

The type of storage class name to be used for the storage for the Arango `agent`. The types available will be determined by the Kubernetes cluster being used. Can gather this list with the following command: `kubectl get storageclasses`

N/A

`storage_size`

The size of the storage to be used for the Arango `agent`. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`60Gi`

`image`

The image the Arango `agent` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-arangodb/alpine:3.11`

#### Operator configuration [Copied!](#operator-configuration "Copy link to this section")

These are the available configurations for the Arango `operator` configuration block:

Configuration

Description

Default

`replicas`

The number of desired replices

`1`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`1Gi`

`image`

The image the Arango `operator` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-arangodb/kube-arangodb:1.2.19`

#### Exporter configuration [Copied!](#exporter-configuration "Copy link to this section")

These are the available configurations for the Arango `exporter` configuration block:

Configuration

Description

Default

`image`

The image the Arango `exporter` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-arangodb/arangodb-exporter:0.1.7`

#### Cluster configuration [Copied!](#cluster-configuration "Copy link to this section")

These are the available configurations for the Arango `cluster` configuration block:

Configuration

Description

Default

`mode`

The mode the Arango cluster will use. The available modes are `ActiveFailover`, which creates multiple instances of the Arango `cluster`, and `Single`, which creates a single instance of the Arango `cluster`

`ActiveFailover`

`replicas`

The number of desired replicas

`2`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`3`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`6Gi`

`storage_class_name`

The type of storage class name to be used for the storage for the Arango `agent`. The types available will be determined by the Kubernetes cluster being used. Can gather this list with the following command: `kubectl get storageclasses`

N/A

`storage_size`

The size of the storage to be used for the Arango `agent`. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`60Gi`

`image`

The image the Arango `cluster` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-arangodb/arangodb:3.10`

### Kafka variables [Copied!](#kafka-variables "Copy link to this section")

All configurations listed under the `kafka` configuration block should be formatted as JSON.

The list of Kafka variables are spread out through the following JSON configuration blocks:

Configuration

Description

`operator`

This configures the Kafka operator that helps install the Kakfa components

`kafka`

This configures the Kafka cluster

`zookeeper`

This configures the Kafka zookeeper cluster

#### Operator configuration [Copied!](#operator-configuration-1 "Copy link to this section")

These are the available configurations for the Kafka `operator` configuration block:

Configuration

Description

Default

`image`

The image the Kafka `operator` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-kafka/operator:0.31.1`

#### Kafka configuration [Copied!](#kafka-configuration "Copy link to this section")

These are the available configurations for the Kafka `kafka` configuration block:

Configuration

Description

Default

`replicas`

The number of desired replicas

`4`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1.5`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`2Gi`

`storage_size`

The size of the storage to be used for the Kafka cluster. Use the storage units as describe [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`50Gi`

`image`

The image the Kafka cluster pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-kafka/kafka:0.31.1-kafka-3.2.3`

#### Zookeeper configuration [Copied!](#zookeeper-configuration "Copy link to this section")

These are the available configurations for the Kafka `zookeeper` configuration block:

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`0.5`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`0.5Gi`

`storage_size`

The size of the storage to be used for the Kafka `zookeeper` cluster. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`10Gi`

`image`

The image the Kafka `zookeeper` cluster pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-kafka/kafka:0.31.1-kafka-3.2.3`

### Mongo variables [Copied!](#mongo-variables "Copy link to this section")

All configurations listed under the `mongo` configuration block should be formatted as JSON.

The list of Mongo variables are spread out through the following JSON configuration blocks:

Configuration

Description

`operator`

This configures the Mongo operator that helps install the Mongo components

`agent`

This configures the Mongo agent

`webhook`

This configures the Mongo webhook mechanism

`readiness_probe`

This configures the Mongo readiness probe

`cluster`

This configures the Mongo cluster

#### Operator Configurations [Copied!](#operator-configurations "Copy link to this section")

These are the available configurations for the Mongo `operator` configuration block:

Configuration

Description

Default

`replicas`

The number of desired replicas

`1`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`1Gi`

`image`

The image the Mongo `operator` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-mongodb/mongodb-kubernetes-operator:0.7.6`

#### Agent configuration [Copied!](#agent-configuration-1 "Copy link to this section")

These are the available configurations for the Mongo `agent` configuration block:

Configuration

Description

Default

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`0.2`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`250M`

`image`

The image the Mongo `agent` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-mongodb/mongodb-agent:12.0.4.7554-1`

#### Webhook configuration [Copied!](#webhook-configuration "Copy link to this section")

These are the available configurations for the Mongo `webhook` configuration block:

Configuration

Description

Default

`image`

The image the Mongo `webhook` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-mongodb/mongodb-kubernetes-operator-version-upgrade-post-start-hook:1.0.5`

#### Readiness probe configuration [Copied!](#readiness-probe-configuration "Copy link to this section")

These are the available configurations for the Mongo `readiness_probe` configuration block:

Configuration

Description

Default

`image`

The image the Mongo `readiness_probe` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-mongodb/mongodb-kubernetes-readinessprobe:1.0.11`

#### Cluster configuration [Copied!](#cluster-configuration-1 "Copy link to this section")

These are the available configurations for the Mongo `cluster` configuration block:

Configuration

Description

Default

`replicas`

The number of desired replicas

`4`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`3`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`6Gi`

`storage_size`

The size of the storage to be used for the Mongo cluster. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`60Gi`

`image`

The image the Mongo `cluster` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-mongodb/mongo:6.0.3`

### Minio variables [Copied!](#minio-variables "Copy link to this section")

All configurations listed under the `minio` configuration block should be formatted as JSON.

The list of Minio variables are spread out through the `minio` JSON configuration block:

Configuration

Description

Default

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`2`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`2Gi`

`storage_size`

The size of the storage to be used for the Minio instance. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`100Gi`

`image`

The image the Minio `minio` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-minio/minio:RELEASE.2021-02-14T04-01-33Z`

### Redis variables [Copied!](#redis-variables "Copy link to this section")

All configurations listed under the `redis` configuration block should be formatted as JSON.

The list of Redis variables are spread out through the `redis` JSON configuration block:

Configuration

Description

Default

`replicas`

The number of desired replicas

`6`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`1Gi`

`storage_size`

The size of the storage to be used for the Minio instance. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`1Gi`

`image`

The image the Minio `minio` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-redis/redis-cluster:7.0.5`

### Nginx variables [Copied!](#nginx-variables "Copy link to this section")

All configurations listed under the `nginx` configuration block should be formatted as JSON.

The list of Nginx variables are spread out through the `nginx` JSON configuration block:

Configuration

Description

Default

`domain_tls`

The number of desired replicas

`false`

`image`

The images the Nginx pods will use

N/A

`lb_service_annotations`

A list of annotations to add to the Nginx service configuration

N/A

`lb_source_ranges`

A list of IPs to whitelist in the Nginx service configuration

`[0.0.0.0/0]`

#### Image configuration [Copied!](#image-configuration "Copy link to this section")

These are the avaiable configurations for the Nginx `images` configuration block:

Configuration

Description

Default

`controller`

The image for the Nginx controller

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-nginx/controller:v1.4.0`

`webhook`

The image for the Nginx webhook server

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/terraform-kubernetes-nginx/kube-webhook-certgen:v20220916-gd32f8c343`

### Postgres variables [Copied!](#postgres-variables "Copy link to this section")

All configurations listed under the `postgres` configuration block should be formatted as JSON.

The list of Postgres variables are spread out through the `postgres` JSON configuration block:

Configuration

Description

Default

`replicas`

The number of desired replicas

`1`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`1Gi`

`storage_size`

The size of the storage to be used for the Minio instance. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`1Gi`

`image`

The image the Postgres `postgres` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/postgres:14.5-alpine3.16`

### Unleash variables [Copied!](#unleash-variables "Copy link to this section")

All configurations listed under the `unleash` configuration block should be formatted as JSON.

The list of Unleash variables are spread out through the `unleash` JSON configuration block:

Configuration

Description

Default

`unleash_image`

The image the Unleash `unleash` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/kubernetes-unleash:main-d252dfb6`

`psql_image`

The image the Unleash `psql` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/postgres:14.5-alpine3.16`

### Monitoring variables [Copied!](#monitoring-variables "Copy link to this section")

All configurations listed under the `grafana` and `loki` configuration blocks should be formatted as JSON.

The list of Monitoring variables are spread out through the `grafana` and `loki` JSON configuration blocks.

### Grafana configuration [Copied!](#grafana-configuration "Copy link to this section")

These are the available configurations for the Monitoring `grafana` configuration block:

Configuration

Description

Default

`disable_initial_admin`

Determines if an intial admin user is created or not in Grafana.

`false`

`hostname`

The hostname of the Grafana monitoring tool.

N/A

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`4Gi`

`storage`

The size of the storage to be used for the Minio instance. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`10Gi`

`whitelist`

The list of IPs that are allowed to access the monitoring tool

N/A

### Loki configuration [Copied!](#loki-configuration "Copy link to this section")

These are the available configurations for the Monitoring `loki` configuration block:

Configuration

Description

`consul`

The number of desired replicas

`1`

`distributor`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1`

`gateway`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`1Gi`

`ingestor`

The size of the storage to be used for the Minio instance. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`1Gi`

`querier`

The image the Postgres `postgres` pod will use

`us-east1-docker.pkg.dev/cycode-artifacts/cycodehq/postgres:14.5-alpine3.16`

`query_frontend`

`memcached`

`memcached_frontend`

`memchaced_index_queries`

**Consul configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`1`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`100m`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`150Mi`

**Distributor configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`500m`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`500Mi`

**Gateway configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`150m`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`100Mi`

**Ingester configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`1`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`4Gi`

`data_storage`

The size of the storage to be used for the data storage for the Loki instance. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`10Gi`

`wal_storage`

The size of the storage to be used for the write ahead log storage for the Loki instance. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`10Gi`

**Memcached configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`500m`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`1600M`

**Memcached frontend configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`50m`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`200M`

**Memcached index query configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`100m`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`300M`

**Querier configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`3`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`500m`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`1Gi`

`storage`

The size of the storage to be used for the Minio instance. Use the storage units as described [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity)

`50Gi`

**Query frontend configuration**

Configuration

Description

Default

`replicas`

The number of desired replicas

`2`

`cpu`

The amount of CPUs to configure each replica with. This configuration uses the CPU units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/#cpu-units) .

`150m`

`memory`

The amount of memory to configure each replica with. This configuration uses the memory units as described [here](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/#memory-units) .

`200Mi`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
