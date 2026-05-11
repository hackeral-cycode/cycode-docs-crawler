# Verifying the installation | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/install-the-cycode-enterprise-server/verifying-the-installation

---

# Verifying the installation

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/install-the-cycode-enterprise-server/verifying-the-installation.md "Edit this page")

Updated on Dec 1, 2024 • Published on Dec 1, 2024

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

This page details the installation verification steps needed to check that the installation was successful.

1.  To test your instances connectivity for the backend, use the following curl command:
    
    ```
    1
    ```
    
    ```bash
    curl -kv https://api.${environment}.${domain}
    ```
    
    You should see a response like the following:
    
    ```
    *   Trying 97.80.233.71:443...
    * Connected to api.${environment}.${domain} (97.80.233.71) port 443 (#0)
    * ALPN, offering h2
    * ALPN, offering http/1.1
    * successfully set certificate verify locations:
    *  CAfile: /etc/ssl/cert.pem
    *  CApath: none
    * TLSv1.2 (OUT), TLS handshake, Client hello (1):
    * TLSv1.2 (IN), TLS handshake, Server hello (2):
    * TLSv1.2 (IN), TLS handshake, Certificate (11):
    * TLSv1.2 (IN), TLS handshake, Server key exchange (12):
    * TLSv1.2 (IN), TLS handshake, Server finished (14):
    * TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
    * TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):
    * TLSv1.2 (OUT), TLS handshake, Finished (20):
    * TLSv1.2 (IN), TLS change cipher, Change cipher spec (1):
    * TLSv1.2 (IN), TLS handshake, Finished (20):
    * SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256
    * ALPN, server accepted to use h2
    * Server certificate:
    *  subject: CN=api.${environment}.${domain}
    *  start date: Sep 29 14:04:39 2021 GMT
    *  expire date: Dec 28 14:04:38 2021 GMT
    *  issuer: C=US; O=Let's Encrypt; CN=R3
    *  SSL certificate verify result: certificate has expired (10), continuing anyway.
    * Using HTTP2, server supports multi-use
    * Connection state changed (HTTP/2 confirmed)
    * Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
    * Using Stream ID: 1 (easy handle 0x7fe354813200)
    > GET / HTTP/2
    > Host: api.${environment}.${domain}
    > user-agent: curl/7.77.0
    > accept: */*
    >
    * Connection state changed (MAX_CONCURRENT_STREAMS == 128)!
    < HTTP/2 200
    < date: Wed, 05 Jan 2022 15:58:46 GMT
    < content-type: text/html
    < vary: Accept-Encoding
    < strict-transport-security: max-age=31536000; includeSubDomains; preload
    < x-content-type-options: nosniff
    < x-frame-options: SAMEORIGIN
    < x-permitted-cross-domain-policies: master-only
    < request-id: 69ff3cc7749e6a8e4a09993956101677
    <
    JWT Token Needed
    
    * Connection #0 to host api.${environment}.${domain} left intact
    ```
    
2.  To test your instance’s connectivity for the frontend, use the following curl command:
    
    ```
    1
    ```
    
    ```bash
    curl -kv https://app.${environment}.${domain}
    ```
    
    You should see a response like the following:
    
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
    ```
    
    ```hcl
    *   Trying 97.80.233.71:443...
    * Connected to api.${environment}.${domain} (97.80.233.71) port 443 (#0)
    * ALPN, offering h2
    * ALPN, offering http/1.1
    * successfully set certificate verify locations:
    *  CAfile: /etc/ssl/cert.pem
    *  CApath: none
    * TLSv1.2 (OUT), TLS handshake, Client hello (1):
    * TLSv1.2 (IN), TLS handshake, Server hello (2):
    * TLSv1.2 (IN), TLS handshake, Certificate (11):
    * TLSv1.2 (IN), TLS handshake, Server key exchange (12):
    * TLSv1.2 (IN), TLS handshake, Server finished (14):
    * TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
    * TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):
    * TLSv1.2 (OUT), TLS handshake, Finished (20):
    * TLSv1.2 (IN), TLS change cipher, Change cipher spec (1):
    * TLSv1.2 (IN), TLS handshake, Finished (20):
    * SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256
    * ALPN, server accepted to use h2
    * Server certificate:
    *  subject: CN=api.${environment}.${domain}
    *  start date: Sep 29 14:04:39 2021 GMT
    *  expire date: Dec 28 14:04:38 2021 GMT
    *  issuer: C=US; O=Let's Encrypt; CN=R3
    *  SSL certificate verify result: certificate has expired (10), continuing anyway.
    * Using HTTP2, server supports multi-use
    * Connection state changed (HTTP/2 confirmed)
    * Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
    * Using Stream ID: 1 (easy handle 0x7fe354813200)
    > GET / HTTP/2
    > Host: app.${environment}.${domain}
    > user-agent: curl/7.77.0
    > accept: */*
    >
    * Connection state changed (MAX_CONCURRENT_STREAMS == 128)!
    < HTTP/2 200
    < date: Wed, 05 Jan 2022 15:58:46 GMT
    < content-type: text/html; charset=utf-8
    < content-length: 1569
    < vary: Accept-Encoding
    < x-dns-prefetch-control: off
    < expect-ct: max-age=0
    < x-frame-options: SAMEORIGIN
    < strict-transport-security: max-age=31536000; includeSubDomains; preload
    < x-download-options: noopen
    < x-content-type-options: nosniff
    < x-permitted-cross-domain-policies: master-only
    < referrer-policy: no-referrer
    < x-xss-protection: 0
    < etag: W/"621-iaJvRruxAUkcpZglRUmeILbYKPU"
    <
    <!DOCTYPE html>
    <html lang="en">	
      <head>		
        <meta charset="UTF-8" />		
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />		
        <meta name="description" content="Source code governance and protection" />		
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />		
    
        <!-- NREUM: (1) →
        <title>Cycode Platform</title>
    
        <link rel="modulepreload" href="/assets/vendor.132f39e6.js">
        <link rel="stylesheet" href="/assets/index.7c431463.css">
      </head>
      <body data-recording-sensitive>
        <div id="root"></div>
        <noscript>
                  <iframe
                    src="https://www.googletagmanager.com/ns.html?id="
                    height="0"
                    width="0"
                    style="display:none;visibility:hidden"
                  ></iframe>
                </noscript>
    
      </body>
    </html>
    * Connection #0 to host app.${environment}.${domain} left intact
    ```
    
3.  Run the following command to create a new tenant for the Cycode instance:
    
    ```
    1
    ```
    
    ```bash
    cycode-admin create-tenant
    ```
    
    You will be prompted to enter your company name and tenant name (do not enter spaces). Once you have provided the requested information, the following should show up in the Terminal:
    
    ```
    1
    ```
    
    ```text
    OK --> {"company_name":"wonka-industries.com","tenant_name":"my-tenant","id":"aa3c6c05-a507-40f4-8b4e-768daa6fe1d4"}
    ```
    
4.  Create a user in your new tenant using the following command:
    
    ```
    1
    ```
    
    ```bash
    cycode-admin create-user
    ```
    
    You will be prompted to enter your admin email and full name (do not enter spaces). Once you have provided the requested information, you should get an email from Cycode to the provided email (as seen below):
    

![](/assets/5593753-invite_email.png)

5.  **BEFORE** clicking the link to accept the invitation, verify that the link listed in the email matches your instance’s domain. If it doesn’t, edit the link to go to your domain, as seen below:
    
    ```
    1
    ```
    
    ```text
    https://app.${environment}.${domain}/...
    ```
    
    Where the `environment` and `domain` values are the values you used in the YAML configuration file. For example, if your domain is `app.external.my.domain`, your `environment` value is `external` and your `domain` value is `my.domain`.
    
6.  Once you have verified the link for the invitation, accept the invitation. You should see a “Invitation Accepted” message appear. Fill out the password fields with your password and continue. You should see the login screen now:
    

![](/assets/87127eb-set_password_2.png)

7.  Log into Cycode using the email and password and verify that you see the following screen:

![](/assets/47a5e87-login_portal_2.png)

![](/assets/1a756ac-set_password.png)

You’ve successfully installed the Cycode platform.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
