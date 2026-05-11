# Kubernetes (K3S) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/install-the-cycode-enterprise-server/kubernetes-k3s

---

# Kubernetes (K3S)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/install-the-cycode-enterprise-server/kubernetes-k3s.md "Edit this page")

Updated on Apr 14, 2024 • Published on Apr 14, 2024

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

This document details the information you’ll need to set up the YAML configuration file for installing on K3S. It will use the example YAML configuration file that was provided [here](/cycode-enterprise-server/configure-your-on-premise-installation)

## K3S Installation [Copied!](#k3s-installation "Copy link to this section")

The version of K3S being installed should match the requirements for the Cycode installation, as shown [here](/cycode-enterprise-server/requirements) .

When installing K3S (see [here](/cycode-enterprise-server/requirements) for documentation for installing K3S), make sure you add the following environment variable to the install command:

```
1
```

```hcl
INSTALL_K3S_EXEC="server --disable=traefik"
```

### Installing K3S [Copied!](#installing-k3s "Copy link to this section")

1.  Install the Master node with the following command:

```
1
```

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION="v1.24.9+k3s2" INSTALL_K3S_EXEC="server --cluster-init --disable traefik" K3S_KUBECONFIG_MODE="644" sh -s -
```

2.  Once the installation completes, use the following command to gather the Master token required for the Worker node installation:

```
1
```

```bash
sudo cat /var/lib/rancher/k3s/server/node-token
```

3.  Move to the next machine and use the following command to install the Worker node:

```
1
2
```

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION="v1.24.9+k3s2" INSTALL_K3S_EXEC="server --disable=traefik" K3S_URL="https://<master_ip>:6443" K3S_TOKEN="<master_token>" K3S_KUBECONFIG_MODE="644" sh -s -
systemctl enable --now k3s-agent
```

4.  Rerun the Step 3 command for each Worker node to be installed.

## YAML Configuration Updates [Copied!](#yaml-configuration-updates "Copy link to this section")

1.  The following are the updates to make based on the EKS configurations that may be used.
    *   `domain` - The sub-domain of the Cycode on-premise platform will use.  
        **Example**: If your domains are `app.external.my.domain` and `api.external.my.domain`, the `domain` variable should be equal to `my.domain`
    *   `environment` - The name of the environment.  
        **Example**: If your domains are `app.external.my.domain` and `api.external.my.domain`, the `environment` variable should be equal to `external`
    *   `tenant_company_name` - The company name, i.e., `cycode`
    *   `tenant_admin_full_name` - The admin user’s full name, i.e., `John Doe`
    *   `tenant_admin_email` - The admin user’s email, i.e., `jon.doe@domain.com`
2.  Depending on the certificate and load balancer type being used and if you’re using HTTPS internally, change one of the following values:
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
4.  Follow the installation steps detailed [here](/cycode-enterprise-server) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
