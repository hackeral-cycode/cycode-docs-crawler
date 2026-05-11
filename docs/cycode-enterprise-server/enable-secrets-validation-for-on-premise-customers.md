# Enable secrets validation for on-premise customers | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/enable-secrets-validation-for-on-premise-customers

---

# Enable secrets validation for on-premise customers

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/enable-secrets-validation-for-on-premise-customers.md "Edit this page")

Updated on Nov 25, 2024 • Published on Nov 25, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

When secret validation is enabled, validation requests are seamlessly executed through Cycode’s dedicated environment. These requests are channeled through a specific IP address, thoughtfully designated to minimize the likelihood of false identification as non legitimate activity. This strategic approach effectively safeguards against any potential disruption in connectivity between Cycode’s service and the services it aims to validate with.

Cycode Enterprise Server customers that want to use secret validation will need to set up a solution based on a proxy, to direct the validation requests to a specific IP address that is different from the main Cycode’s service. In this article you’ll find the steps required for setting up the proxy on your end, as well as information about how to monitor the proxy.

## Configuring an internal proxy for secrets validation [Copied!](#configuring-an-internal-proxy-for-secrets-validation "Copy link to this section")

To create a proxy and configure Cycode to use that proxy for Secret Validation requests requires these steps:

Step 1: Configure a proxy on the customer side setting it to Cycode.

Step 2: The Cycode backend will then be configured for a proxy address for validation in your Cycode Enterprise Server deployment.

Step 3: Cycode will perform a sanity check to verify that the proxy can be used. Note that the sanity check will need to be performed during the configuration phase but also on a regular basis, log and alert for any problem that prevents the validation service.

To configure the proxy:

1.  Run a VM instance with ubuntu 22.04 (2 CPU, 8Gb memory) with an external IP address.
    
2.  Install the squid proxy:
    
    ```
    1
    2
    ```
    
    ```bash
    sudo apt update
    sudo apt install squid
    ```
    
3.  Configure the squid proxy by running the following in the command line:
    
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
    ```
    
    ```bash
    sudo tee -a /etc/squid/squid.conf <<EOM
    acl SSL_ports port 3133
    acl CONNECT method CONNECT
    http_access allow all
    include /etc/squid/conf.d/*
    http_access allow localhost
    http_access deny all
    http_port 3128
    https_port 3133
    coredump_dir /var/spool/squid
    refresh_pattern ^ftp:           1440    20%     10080
    refresh_pattern ^gopher:        1440    0%      1440
    refresh_pattern -i (/cgi-bin/|\?) 0     0%      0
    refresh_pattern \/(Packages|Sources)(|\.bz2|\.gz|\.xz)$ 0 0% 0 refresh-ims
    refresh_pattern \/Release(|\.gpg)$ 0 0% 0 refresh-ims
    refresh_pattern \/InRelease$ 0 0% 0 refresh-ims
    refresh_pattern \/(Translation-.*)(|\.bz2|\.gz|\.xz)$ 0 0% 0 refresh-ims
    refresh_pattern .               0       20%     4320
    request_header_add X-Forwarded-By "cycode" all
    forwarded_for delete
    via off
    cache deny all
    cache_dir null /tmp
    request_header_access X-Forwarded-For deny all
    request_header_access X-Forwarded-Proto deny all
    reply_header_access X-Forwarded-For deny all
    reply_header_access X-Forwarded-Proto deny all
    EOM
    ```
    
4.  Restart the squid proxy by executing the following command:
    
    ```
    1
    ```
    
    ```bash
    sudo systemctl restart squid.service
    ```
    

Note

If the proxy VM has its own external IP address, it can be in the same VPC. If it’s inside a VPC, you’ll need to keep it updated and it will also need to be guarded correctly, as it now may have access to internal resources such as dbs.

## Monitoring the proxy [Copied!](#monitoring-the-proxy "Copy link to this section")

To monitor the proxy during configuration and ongoing, run the following command:

```
1
2
```

```bash
curl --location --request GET 'http://localhost:5025/api/v1/SanityCheck/proxy_sanity' \
--header 'X-Tenant-Id: 52d94268-8810-4a7e-ba87-ffd657a6752f'
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
