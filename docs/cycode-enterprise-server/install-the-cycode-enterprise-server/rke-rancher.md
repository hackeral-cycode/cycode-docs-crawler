# RKE (Rancher) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/install-the-cycode-enterprise-server/rke-rancher

---

# RKE (Rancher)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/install-the-cycode-enterprise-server/rke-rancher.md "Edit this page")

Updated on Apr 14, 2024 • Published on Apr 14, 2024

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

Cycode will provide the YAML configuration file, which will contain the configurations required for the on-premise installation. The following must be done in the configuration file before starting the installation:

1.  The following are the updates to make based on the EKS configurations that may be used.
    *   `domain` - The sub-domain of the Cycode on-premise platform will use.  
        **Example**: If your domains are `app.external.my.domain` and `api.external.my.domain`, the `domain` variable should be equal to `my.domain`
    *   `environment` - The name of the environment.  
        **Example**: If your domains are `app.external.my.domain` and `api.external.my.domain`, the `environment` variable should be equal to `external`
    *   `tenant_company_name` - The company name, i.e., `cycode`
    *   `tenant_admin_full_name` - The admin user’s full name, i.e., `John Doe`
    *   `tenant_admin_email` - The admin user’s email, i.e., `jon.doe@domain.com`
2.  Depending on the certificate and load balancer type being used, and if you’re using HTTPS internally, change one of the following values:
    *   [AWS with External Load Balancer](/cycode-enterprise-server/requirements/external-load-balancer-only)
        *   `external_lb_server_annotations`
            *   `{ "service.beta.kubernetes.io/aws-load-balancer-ssl-cert" : "arn:aws:acm:{{aws_location}}:{{aws_account_id}}:certificate/{{cert_uuid}}" }`
    *   [AWS with Internal Load Balancer](/cycode-enterprise-server/requirements/internal-load-balancer-only)
        *   `lb_server_annotations`
            *   `{ "service.beta.kubernetes.io/aws-load-balancer-ssl-cert" : "arn:aws:acm:{{aws_location}}:{{aws_account_id}}:certificate/{{cert_uuid}}" }`
    *   One Certificate with External Load Balancer
        *   Edit `domain_tls` variables
            *   `enabled` - Set this to `true`
            *   `wildcard_domain_tls_cert` - The base64-encoded certificate value for your DNS (`app.{{environment}}.{{domain}}` and `api.{{environment}}.{{domain}}`)
            *   `wildcard_domain_tls_key` - The base64-encoded key value for your DNS (`app.{{environment}}.{{domain}}` and `api.{{environment}}.{{domain}}`)
    *   One Certificate with Internal Load Balancer
        *   Edit domain\_tls variables
            *   `enabled` - Set this to `true`
            *   `wildcard_domain_tls_cert` - The base64-encoded certificate value for your DNS (`app.{{environment}}.{{domain}}` and `api.{{environment}}.{{domain}}`)
            *   `wildcard_domain_tls_key` - The base64-encoded key value for your DNS (`app.{{environment}}.{{domain}}` and `api.{{environment}}.{{domain}}`)
    *   Two Certificates with External Load Balancer
        *   Edit `domain_tls` variables
            *   `enabled` - Set this to `true`
            *   `frontend_domain_tls_cert` - The base64-encoded certificate value for your DNS (`app.{{environment}}.{{domain}}`)
            *   `frontend_domain_tls_key` - The base64-encoded key value for your DNS (`app.{{environment}}.{{domain}}`)
            *   `backend_domain_tls_cert` - The base64-encoded certificate value for your DNS (`api.{{environment}}.{{domain}}`)
            *   `backend_domain_tls_key` - The base64-encoded key value for your DNS (`api.{{environment}}.{{domain}}`)
    *   Two Certificates with Internal Load Balancer
        *   Edit `domain_tls` variables
            *   `enabled` - Set this to `true`
            *   `frontend_domain_tls_cert` - The base64-encoded certificate value for your `app` DNS (`app.{{environment}}.{{domain}}`)
            *   `frontend_domain_tls_key` - The base64-encoded key value for your `app` DNS (`app.{{environment}}.{{domain}}`)
            *   `backend_domain_tls_cert` - The base64-encoded certificate value for your `api` DNS (`api.{{environment}}.{{domain}}`)
            *   `backend_domain_tls_key` - The base64-encoded key value for your `api` DNS (`api.{{environment}}.{{domain}}`)
3.  Once all the variables and settings are set up, save the YAML configuration file.

## Installation to EKS [Copied!](#installation-to-eks "Copy link to this section")

Use the following steps to install Cycode on EKS through Rancher.

1.  Log in to Rancher.

![](/assets/faf16ec-login.png)

2.  If you haven’t imported your existing EKS cluster to Rancher, use the following steps to do so:
    
    1.  Click the 3 lines to open the main menu and select Cluster Management.

![](/assets/66cccd2-cluster_management.png)

2.  Click **Import Existing**.

![](/assets/8e45022-import_existing.png)

3.  Select **Amazon EKS**.

![](/assets/ab7d531-amazon_eks.png)

4.  Enter the Cluster Name and Account Access details (make sure the credentials you use have the IAM access required for Rancher).

![](/assets/92d75fb-cluster_details.png)

5.  Click **Register Cluster**.

![](/assets/bf51aa3-register_cluster.png)

6.  Wait a few minutes and confirm that the EKS cluster shows up in your Clusters list and that Rancher is able to communicate with it.
7.  Click the 3 lines to open the main menu and select the name of your cluster to enter the Cluster Details page.

![](/assets/2e7edf9-select_cluster.png)

4.  Click the **Workload → Deployments** section in the sidebar.

![](/assets/5424e01-deployments.png)

5.  In the top right-hand side of the screen, click **Import YAML**.

![](/assets/6ee719b-import_yaml_button.png)

6.  Copy and paste the YAML file provided by Cycode for the Cycode Operator and then click **Import**.

![](/assets/a3f209d-import.png)

After about a minute or two, you should see the cycode-operator deployment show as running and ready.

![](/assets/23049d8-cycode_op_deployed.png)

7.  From the sidebar, click **Workload → Pods** and locate the cycode-operator namespace and pod.

![](/assets/2359bf1-pods.png)

8.  Click the 3 dots next to the cycode-operator pod name and select **Execute Shell**.

![](/assets/51df5c8-execute_shell.png)

You should see the following if done correctly:

![](/assets/b26b731-terminal_window.png)

9.  In the terminal window, type the following command. Note that this command will take about 8 minutes but the time can vary depending on the network of the cluster.
    
    ```
    1
    ```
    
    ```bash
    cycode install
    ```
    
10.  In Rancher, the following namespaces should appear with a differing number of pods working within each once the install completes:
     
     *   `api`
     *   `app`
     *   `arangodb`
     *   `cycode-operator`
     *   `ingress-nginx`
     *   `kafka`
     *   `minio`
     *   `mongodb`
     *   `postgres`
     *   `redis`
     *   `unleash`  
         You should get an invitation email for Cycode, which will give your user access to the instance.
11.  Once all the pods are showing as running, open a new window in your browser and enter your internal domain into it:  
     Example: `https://app.cycode.internal.domain`  
     If the following page appears, then the installation was successful:
     

![](/assets/69dd6aa-success.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
