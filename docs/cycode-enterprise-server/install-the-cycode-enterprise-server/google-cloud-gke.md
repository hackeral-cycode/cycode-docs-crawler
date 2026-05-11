# Google Cloud (GKE) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/install-the-cycode-enterprise-server/google-cloud-gke

---

# Google Cloud (GKE)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/install-the-cycode-enterprise-server/google-cloud-gke.md "Edit this page")

Updated on Apr 14, 2024 • Published on Apr 14, 2024

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

This document details the information you’ll need to set up the YAML configuration file for installing on Google Cloud (GKE). It will use the example YAML configuration file that was provided [here](/cycode-enterprise-server/configure-your-on-premise-installation) .

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
4.  Follow the installation steps detailed [here](/cycode-enterprise-server/install-the-cycode-enterprise-server) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
