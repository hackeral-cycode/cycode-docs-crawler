# Cycode instance updates | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/cycode-instance-updates

---

# Cycode instance updates

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/cycode-instance-updates.md "Edit this page")

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

In many cases, the Cycode instance will require an update to do any of the following:

1.  Make changes to the Cycode install configuration, such as:
    *   Add an IP to the load balancer allow list
    *   Add new configuration(s) to the Cycode installation, both infrastructure and Cycode services
2.  Update Cycode services images, through the `config` ConfigMap
3.  Update infrastructure images, through the `overrides` ConfigMap

## Upgrade Steps [Copied!](#upgrade-steps "Copy link to this section")

1.  Back up the Cycode YAML configuration file by copying the file and adding the current date.
    
2.  Update the Cycode YAML configuration file with the expected changes. These can include the following:
    
    *   New `cycode-operator` image
    *   Adding a new configuration, i.e.. a new integration
    *   New infrastructure image
3.  Push the changes to the Cycode install Kubernetes cluster, using one or both of the following commands based on which configuration was changed:
    
    ```
    1
    2
    ```
    
    ```bash
    kubectl apply -f ${deployment_yaml_file}
    kubectl apply -f ${overrides_yaml_file}
    ```
    
4.  If updating the `cycode-operator` image, use the following command:
    
    ```
    1
    ```
    
    ```bash
    kubectl -n cycode-operator get po -w
    ```
    
5.  When the `cycode-operator` pod status is showing as `Running` and ready as `1/1`, enter the `cycode-operator` pod:
    
    ```
    1
    ```
    
    ```bash
    kubectl -n cycode-operator exec -it deploy/cycode-operator -- bash
    ```
    
    **OR**
    
    ```
    1
    ```
    
    ```bash
    kubectl -n cycode-operator exec -it ${cycode_operator_pod_name} -- bash
    ```
    
6.  If the `overrides` ConfigMap was updated, use the following command to push the update:
    
    ```
    1
    ```
    
    ```bash
    cycode-beta install-infra
    ```
    
7.  Once this installation completes, use the following command to verify that all pods are in a `Running` or `Completed` state:
    
    ```
    1
    ```
    
    ```bash
    kubectl get po -A
    ```
    
    It should look something like the following:
    
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
    ```
    
    ```text
    NAMESPACE         NAME                                                        READY   STATUS      RESTARTS   AGE
    api               access-review-detector-59495ffdff-mgl9t                     1/1     Running     0          22h
    api               anomaly-detector-84b5579-tr6kx                              1/1     Running     0          22h
    api               audit-log-service-6c75dd96f9-w6gfl                          1/1     Running     0          22h
    api               auth-service-778c45ffd9-jmxg4                               1/1     Running     0          80m
    api               auth-service-no-auth-589c9d9d6c-grfjg                       1/1     Running     0          80m
    api               bitbucket-search-api-service-68686cd76f-4s2fl               1/1     Running     0          22h
    api               comment-service-9b4957c87-6cmzk                             1/1     Running     0          22h
    api               custom-remediations-55fbfb856f-8rjk9                        1/1     Running     0          22h
    api               delayed-commands-processor-offline-589c7d9f6c-b8k4l         1/1     Running     0          22h
    api               dependency-collector-7d744ddd95-v4zg4                       1/1     Running     0          22h
    api               detectionsoffline-service-789dcb6d7b-q2j2b                  1/1     Running     0          22h
    api               detectionsonline-service-845c75d6cd-qqq6p                   1/1     Running     0          22h
    api               drift-service-657dc845c9-cn4bx                              1/1     Running     0          22h
    api               external-scanner-detector-7b999d5894-8kqqs                  1/1     Running     0          22h
    api               file-connector-service-offline-78cc5d5cf7-4sbn5             1/1     Running     0          22h
    api               file-connector-service-offline-78cc5d5cf7-kd99r             1/1     Running     0          22h
    api               file-connector-service-offline-78cc5d5cf7-vwt8q             1/1     Running     0          22h
    api               file-service-c7b4d99d7-hkwpr                                1/1     Running     0          22h
    api               github-connector-7cd9986ff4-hsmzq                           1/1     Running     0          22h
    api               github-search-api-service-777b5d6755-fpzn4                  1/1     Running     0          22h
    api               githubconnectordispatcher-service-57b48845cd-swvwt          1/1     Running     0          22h
    api               gitlab-search-api-service-7b57f44857-hnp89                  1/1     Running     0          22h
    api               graph-detector-69fc6cd95d-q9q75                             1/1     Running     0          22h
    api               graph-offline-6954b68c4b-sxrrk                              1/1     Running     0          22h
    api               graph-online-564c798fb8-ldpmh                               1/1     Running     0          22h
    api               hcl-parser-7b849cb4-9k75w                                   1/1     Running     0          22h
    api               insecure-infra-configuration-detector-5fc8c5ccd6-wmghx      1/1     Running     0          22h
    api               insecure-pipeline-configuration-detector-799bb65889-4c2vm   1/1     Running     0          22h
    api               integration-service-75454cf9c7-652gt                        1/1     Running     0          22h
    api               keyword-service-6684bfbc97-6pm28                            1/1     Running     0          22h
    api               leak-detector-6f77f67bc8-5zxvq                              1/1     Running     0          22h
    api               metadata-service-write-59c59cdf78-zkkdk                     1/1     Running     0          22h
    api               metadataoffline-service-5c45d99ff7-pm4kl                    1/1     Running     0          22h
    api               metadataonline-service-84f7b7464f-c9gjl                     1/1     Running     0          22h
    api               metadataoutboxprocessor-service-7cf94bf468-z48dp            1/1     Running     0          22h
    api               mongo-index-job-brcxs                                       0/1     Completed   0          22h
    api               open-policy-agent-f5877d88f-2q8nm                           1/1     Running     0          22h
    api               project-service-97c568f78-xq86c                             1/1     Running     0          22h
    api               rate-limiter-7b79674cf4-67dkm                               1/1     Running     0          22h
    api               remediations-service-766f558bd7-77xpw                       1/1     Running     0          22h
    api               report-service-84596f5c67-wnpzt                             1/1     Running     0          22h
    api               repository-files-detector-67f65d5895-vvftm                  1/1     Running     0          22h
    api               scan-service-8bf47f66d-vrksr                                1/1     Running     0          22h
    api               scheduler-service-76c95cb596-bl65j                          1/1     Running     0          22h
    api               scm-config-detector-648b6f4c75-j5wlg                        1/1     Running     0          22h
    api               scm-event-detector-6c466cdb59-w5r9c                         1/1     Running     0          22h
    api               scm-remediator-5944f68b9d-dnfrn                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-52w85                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-9b6j6                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-dpvcz                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-dv6ls                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-p7wks                             1/1     Running     0          22h
    api               security-vulnerability-detector-service-69d7cbc8f9-9npjt    1/1     Running     0          22h
    api               workflow-service-5f44856db7-j4ds2                           1/1     Running     0          22h
    app               web-5c67f89694-76rjk                                        1/1     Running     0          75m
    arangodb          arango-deployment-operator-7fb9db44f8-j6pbb                 1/1     Running     0          23h
    arangodb          arangodb-cluster-sngl-hxftfy1w-6e1f96                       2/2     Running     0          23h
    cycode-operator   cycode-operator-977cf79fb-vs9l2                             1/1     Running     0          84m
    ingress-nginx     ingress-nginx-controller-d6bcb547d-9n5sk                    1/1     Running     0          3h27m
    ingress-nginx     ingress-nginx-controller-d6bcb547d-vfgrp                    1/1     Running     0          3h27m
    kafka             kafka-cluster-entity-operator-6c4df7bcff-wg9hn              3/3     Running     0          23h
    kafka             kafka-cluster-kafka-0                                       1/1     Running     0          23h
    kafka             kafka-cluster-kafka-1                                       1/1     Running     0          23h
    kafka             kafka-cluster-kafka-2                                       1/1     Running     0          23h
    kafka             kafka-cluster-kafka-3                                       1/1     Running     0          23h
    kafka             kafka-cluster-kafka-exporter-7df4fc4486-gd6jg               1/1     Running     0          23h
    kafka             kafka-cluster-zookeeper-0                                   1/1     Running     0          23h
    kafka             kafka-cluster-zookeeper-1                                   1/1     Running     0          23h
    kafka             kafka-cluster-zookeeper-2                                   1/1     Running     0          23h
    kafka             strimzi-cluster-operator-f4dc54cf8-w8rj5                    1/1     Running     0          23h
    kube-system       event-exporter-gke-857959888b-2sx7v                         2/2     Running     0          23h
    kube-system       fluentbit-gke-6hj25                                         2/2     Running     0          23h
    kube-system       fluentbit-gke-ct9r6                                         2/2     Running     0          23h
    kube-system       fluentbit-gke-wvm4d                                         2/2     Running     0          23h
    kube-system       gke-metrics-agent-fdx7m                                     1/1     Running     0          23h
    kube-system       gke-metrics-agent-h7nd7                                     1/1     Running     0          23h
    kube-system       gke-metrics-agent-kfcht                                     1/1     Running     0          23h
    kube-system       konnectivity-agent-7f5d7f688f-gxkrs                         1/1     Running     0          23h
    kube-system       konnectivity-agent-7f5d7f688f-hhwhh                         1/1     Running     0          23h
    kube-system       konnectivity-agent-7f5d7f688f-pxfhv                         1/1     Running     0          23h
    kube-system       konnectivity-agent-autoscaler-566966775b-w2phv              1/1     Running     0          23h
    kube-system       kube-dns-55d79c844b-8b2ft                                   4/4     Running     0          23h
    kube-system       kube-dns-55d79c844b-mzgz9                                   4/4     Running     0          23h
    kube-system       kube-dns-autoscaler-9f89698b6-4v45s                         1/1     Running     0          23h
    kube-system       kube-proxy-gke-travis-1-24-default-pool-a8472d91-8t29       1/1     Running     0          23h
    kube-system       kube-proxy-gke-travis-1-24-default-pool-a8472d91-d7h0       1/1     Running     0          23h
    kube-system       kube-proxy-gke-travis-1-24-default-pool-a8472d91-dmhj       1/1     Running     0          23h
    kube-system       l7-default-backend-6dc845c45d-m6wt7                         1/1     Running     0          23h
    kube-system       metrics-server-v0.5.2-6bf845b67f-qg64n                      2/2     Running     0          23h
    kube-system       pdcsi-node-9nnsf                                            2/2     Running     0          23h
    kube-system       pdcsi-node-qc9qc                                            2/2     Running     0          23h
    kube-system       pdcsi-node-ww9ll                                            2/2     Running     0          23h
    minio             minio-5dd94d56dc-5v6t5                                      1/1     Running     0          23h
    mongodb           mongo-cluster-0                                             2/2     Running     0          23h
    mongodb           mongo-cluster-1                                             2/2     Running     0          23h
    mongodb           mongodb-kubernetes-operator-7fcd959b-tk76l                  1/1     Running     0          23h
    postgres          postgres-5c5664c55-95mcv                                    1/1     Running     0          23h
    redis             redis-redis-cluster-0                                       1/1     Running     0          23h
    redis             redis-redis-cluster-1                                       1/1     Running     0          23h
    redis             redis-redis-cluster-2                                       1/1     Running     0          23h
    redis             redis-redis-cluster-3                                       1/1     Running     0          23h
    redis             redis-redis-cluster-4                                       1/1     Running     0          23h
    redis             redis-redis-cluster-5                                       1/1     Running     0          23h
    unleash           psql-0                                                      1/1     Running     0          23h
    unleash           unleash-5dbcbf6d9c-8j7d2                                    1/1     Running     0          23h
    ```
    
8.  If the `config` ConfigMap was updated, use the following command to push the update:
    
    ```
    1
    ```
    
    ```bash
    cycode-beta install-services
    ```
    
9.  Once all the pods and the installation script has completed successfully, use the following command:
    
    ```
    1
    ```
    
    ```bash
    kubectl get po -A
    ```
    
    You should see something like the following in response:
    
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
    ```
    
    ```text
    NAMESPACE         NAME                                                        READY   STATUS      RESTARTS   AGE
    api               access-review-detector-59495ffdff-mgl9t                     1/1     Running     0          22h
    api               anomaly-detector-84b5579-tr6kx                              1/1     Running     0          22h
    api               audit-log-service-6c75dd96f9-w6gfl                          1/1     Running     0          22h
    api               auth-service-778c45ffd9-jmxg4                               1/1     Running     0          80m
    api               auth-service-no-auth-589c9d9d6c-grfjg                       1/1     Running     0          80m
    api               bitbucket-search-api-service-68686cd76f-4s2fl               1/1     Running     0          22h
    api               comment-service-9b4957c87-6cmzk                             1/1     Running     0          22h
    api               custom-remediations-55fbfb856f-8rjk9                        1/1     Running     0          22h
    api               delayed-commands-processor-offline-589c7d9f6c-b8k4l         1/1     Running     0          22h
    api               dependency-collector-7d744ddd95-v4zg4                       1/1     Running     0          22h
    api               detectionsoffline-service-789dcb6d7b-q2j2b                  1/1     Running     0          22h
    api               detectionsonline-service-845c75d6cd-qqq6p                   1/1     Running     0          22h
    api               drift-service-657dc845c9-cn4bx                              1/1     Running     0          22h
    api               external-scanner-detector-7b999d5894-8kqqs                  1/1     Running     0          22h
    api               file-connector-service-offline-78cc5d5cf7-4sbn5             1/1     Running     0          22h
    api               file-connector-service-offline-78cc5d5cf7-kd99r             1/1     Running     0          22h
    api               file-connector-service-offline-78cc5d5cf7-vwt8q             1/1     Running     0          22h
    api               file-service-c7b4d99d7-hkwpr                                1/1     Running     0          22h
    api               github-connector-7cd9986ff4-hsmzq                           1/1     Running     0          22h
    api               github-search-api-service-777b5d6755-fpzn4                  1/1     Running     0          22h
    api               githubconnectordispatcher-service-57b48845cd-swvwt          1/1     Running     0          22h
    api               gitlab-search-api-service-7b57f44857-hnp89                  1/1     Running     0          22h
    api               graph-detector-69fc6cd95d-q9q75                             1/1     Running     0          22h
    api               graph-offline-6954b68c4b-sxrrk                              1/1     Running     0          22h
    api               graph-online-564c798fb8-ldpmh                               1/1     Running     0          22h
    api               hcl-parser-7b849cb4-9k75w                                   1/1     Running     0          22h
    api               insecure-infra-configuration-detector-5fc8c5ccd6-wmghx      1/1     Running     0          22h
    api               insecure-pipeline-configuration-detector-799bb65889-4c2vm   1/1     Running     0          22h
    api               integration-service-75454cf9c7-652gt                        1/1     Running     0          22h
    api               keyword-service-6684bfbc97-6pm28                            1/1     Running     0          22h
    api               leak-detector-6f77f67bc8-5zxvq                              1/1     Running     0          22h
    api               metadata-service-write-59c59cdf78-zkkdk                     1/1     Running     0          22h
    api               metadataoffline-service-5c45d99ff7-pm4kl                    1/1     Running     0          22h
    api               metadataonline-service-84f7b7464f-c9gjl                     1/1     Running     0          22h
    api               metadataoutboxprocessor-service-7cf94bf468-z48dp            1/1     Running     0          22h
    api               mongo-index-job-brcxs                                       0/1     Completed   0          22h
    api               open-policy-agent-f5877d88f-2q8nm                           1/1     Running     0          22h
    api               project-service-97c568f78-xq86c                             1/1     Running     0          22h
    api               rate-limiter-7b79674cf4-67dkm                               1/1     Running     0          22h
    api               remediations-service-766f558bd7-77xpw                       1/1     Running     0          22h
    api               report-service-84596f5c67-wnpzt                             1/1     Running     0          22h
    api               repository-files-detector-67f65d5895-vvftm                  1/1     Running     0          22h
    api               scan-service-8bf47f66d-vrksr                                1/1     Running     0          22h
    api               scheduler-service-76c95cb596-bl65j                          1/1     Running     0          22h
    api               scm-config-detector-648b6f4c75-j5wlg                        1/1     Running     0          22h
    api               scm-event-detector-6c466cdb59-w5r9c                         1/1     Running     0          22h
    api               scm-remediator-5944f68b9d-dnfrn                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-52w85                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-9b6j6                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-dpvcz                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-dv6ls                             1/1     Running     0          22h
    api               secret-detector-fff84bdcc-p7wks                             1/1     Running     0          22h
    api               security-vulnerability-detector-service-69d7cbc8f9-9npjt    1/1     Running     0          22h
    api               workflow-service-5f44856db7-j4ds2                           1/1     Running     0          22h
    app               web-5c67f89694-76rjk                                        1/1     Running     0          75m
    arangodb          arango-deployment-operator-7fb9db44f8-j6pbb                 1/1     Running     0          23h
    arangodb          arangodb-cluster-sngl-hxftfy1w-6e1f96                       2/2     Running     0          23h
    cycode-operator   cycode-operator-977cf79fb-vs9l2                             1/1     Running     0          84m
    ingress-nginx     ingress-nginx-admission-create-27l2w                        0/1     Completed   0          23h
    ingress-nginx     ingress-nginx-admission-patch-8h7px                         0/1     Completed   0          99m
    ingress-nginx     ingress-nginx-controller-d6bcb547d-9n5sk                    1/1     Running     0          3h27m
    ingress-nginx     ingress-nginx-controller-d6bcb547d-vfgrp                    1/1     Running     0          3h27m
    kafka             kafka-cluster-entity-operator-6c4df7bcff-wg9hn              3/3     Running     0          23h
    kafka             kafka-cluster-kafka-0                                       1/1     Running     0          23h
    kafka             kafka-cluster-kafka-1                                       1/1     Running     0          23h
    kafka             kafka-cluster-kafka-2                                       1/1     Running     0          23h
    kafka             kafka-cluster-kafka-3                                       1/1     Running     0          23h
    kafka             kafka-cluster-kafka-exporter-7df4fc4486-gd6jg               1/1     Running     0          23h
    kafka             kafka-cluster-zookeeper-0                                   1/1     Running     0          23h
    kafka             kafka-cluster-zookeeper-1                                   1/1     Running     0          23h
    kafka             kafka-cluster-zookeeper-2                                   1/1     Running     0          23h
    kafka             strimzi-cluster-operator-f4dc54cf8-w8rj5                    1/1     Running     0          23h
    kube-system       event-exporter-gke-857959888b-2sx7v                         2/2     Running     0          23h
    kube-system       fluentbit-gke-6hj25                                         2/2     Running     0          23h
    kube-system       fluentbit-gke-ct9r6                                         2/2     Running     0          23h
    kube-system       fluentbit-gke-wvm4d                                         2/2     Running     0          23h
    kube-system       gke-metrics-agent-fdx7m                                     1/1     Running     0          23h
    kube-system       gke-metrics-agent-h7nd7                                     1/1     Running     0          23h
    kube-system       gke-metrics-agent-kfcht                                     1/1     Running     0          23h
    kube-system       konnectivity-agent-7f5d7f688f-gxkrs                         1/1     Running     0          23h
    kube-system       konnectivity-agent-7f5d7f688f-hhwhh                         1/1     Running     0          23h
    kube-system       konnectivity-agent-7f5d7f688f-pxfhv                         1/1     Running     0          23h
    kube-system       konnectivity-agent-autoscaler-566966775b-w2phv              1/1     Running     0          23h
    kube-system       kube-dns-55d79c844b-8b2ft                                   4/4     Running     0          23h
    kube-system       kube-dns-55d79c844b-mzgz9                                   4/4     Running     0          23h
    kube-system       kube-dns-autoscaler-9f89698b6-4v45s                         1/1     Running     0          23h
    kube-system       kube-proxy-gke-travis-1-24-default-pool-a8472d91-8t29       1/1     Running     0          23h
    kube-system       kube-proxy-gke-travis-1-24-default-pool-a8472d91-d7h0       1/1     Running     0          23h
    kube-system       kube-proxy-gke-travis-1-24-default-pool-a8472d91-dmhj       1/1     Running     0          23h
    kube-system       l7-default-backend-6dc845c45d-m6wt7                         1/1     Running     0          23h
    kube-system       metrics-server-v0.5.2-6bf845b67f-qg64n                      2/2     Running     0          23h
    kube-system       pdcsi-node-9nnsf                                            2/2     Running     0          23h
    kube-system       pdcsi-node-qc9qc                                            2/2     Running     0          23h
    kube-system       pdcsi-node-ww9ll                                            2/2     Running     0          23h
    minio             minio-5dd94d56dc-5v6t5                                      1/1     Running     0          23h
    mongodb           mongo-cluster-0                                             2/2     Running     0          23h
    mongodb           mongo-cluster-1                                             2/2     Running     0          23h
    mongodb           mongodb-kubernetes-operator-7fcd959b-tk76l                  1/1     Running     0          23h
    postgres          postgres-5c5664c55-95mcv                                    1/1     Running     0          23h
    redis             redis-redis-cluster-0                                       1/1     Running     0          23h
    redis             redis-redis-cluster-1                                       1/1     Running     0          23h
    redis             redis-redis-cluster-2                                       1/1     Running     0          23h
    redis             redis-redis-cluster-3                                       1/1     Running     0          23h
    redis             redis-redis-cluster-4                                       1/1     Running     0          23h
    redis             redis-redis-cluster-5                                       1/1     Running     0          23h
    unleash           psql-0                                                      1/1     Running     0          23h
    unleash           unleash-5dbcbf6d9c-8j7d2                                    1/1     Running     0          23h
    ```
    
10.  To verify the instance is up and running, visit Cycode through the browser and verify that the login page loads:
     

![](/assets/ebf1d24-login_page.png)

11.  Log in and verify the various pages in Cycode load as expected.

Once all pages are verified as loading without issue, you’ve completed the update to your Cycode instance.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
