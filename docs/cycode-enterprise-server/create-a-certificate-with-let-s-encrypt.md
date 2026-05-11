# Create a certificate with Let's Encrypt | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/create-a-certificate-with-let-s-encrypt

---

# Create a certificate with Let's Encrypt

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/create-a-certificate-with-let-s-encrypt.md "Edit this page")

Updated on Apr 14, 2024 • Published on Apr 14, 2024

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

A quick and easy resource for getting certificates from a known authority is by using [Let’s Encrypt](https://letsencrypt.org/) . This page explains how to create a certificate through Let’s Encrypt for the Cycode on-premise installation.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   Have a DNS record prepared (i.e. `app.external.my.domain` and `api.external.my.domain`)
*   Have the `<a href="https://certbot.eff.org/" target="_blank"><code>certbot</code></a>\` command installed

## Creating a Certificate [Copied!](#creating-a-certificate "Copy link to this section")

1.  Enter the following command to start the process of creating a new certificate:
    
    ```
    1
    2
    3
    4
    5
    6
    7
    ```
    
    ```bash
    certbot certonly \
    --config-dir=${local_path}/certbot \
    --work-dir=${local_path}/certbot \
    --logs-dir=${local_path}/certbot \
    --preferred-challenges dns \
    --manual \
    -d "api.external.my.domain" -d "app.external.my.domain"
    ```
    
2.  You’ll be prompted to enter an email address (as seen below). Enter your email address or press `c` to cancel the creation process:
    
    ```
    1
    2
    3
    ```
    
    ```text
    Saving debug log to ${local_path}/certbot/letsencrypt.log
    Enter email address (used for urgent renewal and security notices)
     (Enter 'c' to cancel):
    ```
    
    If you want to create a certificate without providing an email, add the following option to the `certbot` command:
    
    ```
    1
    ```
    
    ```text
    --register-unsafely-without-email
    ```
    
3.  You’ll be asked to agree to the terms and services. Type `Y` to continue or `N` to stop:
    
    ```
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Please read the Terms of Service at
    https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
    agree in order to register with the ACME server. Do you agree?
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    (Y)es/(N)o:
    ```
    
4.  Next, you’ll be prompted to add your email to a mailing list. Enter `Y` if you consent, or `N` if you don’t:
    
    ```
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Would you be willing, once your first certificate is successfully issued, to
    share your email address with the Electronic Frontier Foundation, a founding
    partner of the Let's Encrypt project and the non-profit organization that
    develops Certbot? We'd like to send you email about our work encrypting the web,
    EFF news, campaigns, and ways to support digital freedom.
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    (Y)es/(N)o:
    ```
    
5.  Once you have answered the questions, you’ll see a response similar to the following:
    

Important

**BEFORE** pressing `Enter`/`Return`, add a new DNS TXT record using both the name and the value given. Once the DNS TXT record is added, hit `Enter`/`Return`.

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
```

```text
Account registered.
Requesting a certificate for app.external.my.domain and api.external.my.domain

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name:

_acme-challenge.api.external.my.domain.

with the following value:

fQrXbYz0Zu8Nr2Vszy7mc9YRu5B1-QgomKcG7sneER0

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
```

6.  Add the DNS TXT record name and value for the next domain.

Important

**DO NOT** press `Enter`/`Return` before you’ve verified that both DNS TXT records are present and accurate.

```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name:

_acme-challenge.app.external.my.domain.

with the following value:

weCgbxkKVCsTNf7WCUigFqAKgto6HQfC_iXbBgys4Ls

(This must be set up in addition to the previous challenges; do not remove,
replace, or undo the previous challenge tasks yet. Note that you might be
asked to create multiple distinct TXT records with the same name. This is
permitted by DNS standards.)

Before continuing, verify the TXT record has been deployed. Depending on the DNS
provider, this may take some time, from a few seconds to multiple minutes. You can
check if it has finished deploying with aid of online tools, such as the Google
Admin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.app.external.my.domain.
Look for one or more bolded line(s) below the line ';ANSWER'. It should show the
value(s) you've just added.
```

7.  Press Enter and wait for the certificate to be built. Once successful, you should see the following message:
    
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
    ```
    
    ```text
    Successfully received certificate.
    Certificate is saved at: ${local_path}/certbot/live/app.external.my.domain./fullchain.pem
    Key is saved at:         ${local_path}/certbot/live/app.external.my.domain./privkey.pem
    This certificate expires on 2022-05-11.
    These files will be updated when the certificate renews.
    
    NEXT STEPS:
    - This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate's expiry date.
    
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    If you like Certbot, please consider supporting our work by:
    * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
    * Donating to EFF:                    https://eff.org/donate-le
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    ```
    
    The paths provided in the final text are where your full chain certificate and private keys are located, which you will need for the YAML configuration file.
    
8.  With the certificate and key in hand, it’s time to start the [installation process!](/cycode-enterprise-server)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
