# External Load Balancer Only | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/requirements/external-load-balancer-only

---

# External Load Balancer Only

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/requirements/external-load-balancer-only.md "Edit this page")

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

This page covers how the Cycode on-premise installation works when using only external load balancers. The details for setting up this load balancer in the various support infrastructures can be found below.

## EKS [Copied!](#eks "Copy link to this section")

This section covers how to use an external load balancer in EKS (Amazon).

### EKS External Load Balancer Diagram [Copied!](#eks-external-load-balancer-diagram "Copy link to this section")

![](/assets/faa35a7-aws_external_lb_only.drawio.png)

### Using DNS Certificates [Copied!](#using-dns-certificates "Copy link to this section")

Use external DNS records (should include `app.{{your_domain}}` and `api.{{your_domain}}`) using 1 of the 3 choices listed below:

*   [AWS](#aws-certificate-and-key-file)
*   [One Certificate](#one-certificate-and-key-file)
*   [Two Certificates](#two-certificate-and-key-files)

Example internal DNS:

*   `app.cycode.external.domain`
*   `api.cycode.external.domain`

#### AWS Certificate and Key File [Copied!](#aws-certificate-and-key-file "Copy link to this section")

*   Create a certificate and key for the external DNS (`app.{{your_domain}}` and `api.{{your_domain}}`) signed by a known Certificate Authority
*   The ARN value for your certificate in AWS (includes the AWS location ID, AWS account ID, and UUID)
    *   Example:
        *   `{{aws_location}} = eu-west-1`
        *   `{{account_id}} = 281498522159`
        *   `{{cert_uuid}} = 35788ff9-7b3a-4abb-b834-c5a407c8a7ce`

#### One Certificate and Key File [Copied!](#one-certificate-and-key-file "Copy link to this section")

*   Create a certificate and key for the external DNS (`app.{{your_domain}}` and `api.{{your_domain}}`) signed by a known Certificate Authority

#### Two Certificate and Key Files [Copied!](#two-certificate-and-key-files "Copy link to this section")

*   Create a certificate and key for the external DNS (`app.{{your_domain}}`) signed by a known Certificate Authority
*   Create a certificate and key for the external DNS (`api.{{your_domain}}`) signed by a known Certificate Authority

## GKE [Copied!](#gke "Copy link to this section")

This section covers how to use an external load balancer in GKE (Google Cloud).

### GKE External Load Balancer Diagram [Copied!](#gke-external-load-balancer-diagram "Copy link to this section")

![](/assets/c70d9ea-gke_external_lb_only.drawio.png)

### Using DNS Certificates [Copied!](#using-dns-certificates-1 "Copy link to this section")

Use external DNS records (should include `app.{{your_domain}}` and api.`{{your_domain}}`) using 1 of the 2 choices listed below:

*   [One Certificate](#one-certificate-and-key-file-1)
*   [Two Certificates](#two-certificate-and-key-files-1)

Example internal DNS:

*   `app.cycode.external.domain`
*   `api.cycode.external.domain`

#### One Certificate and Key File [Copied!](#one-certificate-and-key-file-1 "Copy link to this section")

*   Create a certificate and key for the external DNS (`app.{{your_domain}}` and `api.{{your_domain}}`) signed by a known Certificate Authority

#### Two Certificate and Key Files [Copied!](#two-certificate-and-key-files-1 "Copy link to this section")

*   Create a certificate and key for the external DNS (`app.{{your_domain}}`) signed by a known Certificate Authority
*   Create a certificate and key for the external DNS (`api.{{your_domain}}`) signed by a known Certificate Authority

## K3S [Copied!](#k3s "Copy link to this section")

This section covers how to use an external load balancer in K3S (Kubernetes).

### K3S External Load Balancer Diagram [Copied!](#k3s-external-load-balancer-diagram "Copy link to this section")

![](/assets/62550a7-k3s_external_lb_only.drawio.png)

### Using DNS Certificates [Copied!](#using-dns-certificates-2 "Copy link to this section")

Use external DNS records (should include `app.{{your_domain}}` and api.`{{your_domain}}`) using 1 of the 2 choices listed below:

*   [One Certificate](#one-certificate-and-key-file-2)
*   [Two Certificates](#two-certificate-and-key-files-2)

Example internal DNS:

*   `app.cycode.external.domain`
*   `api.cycode.external.domain`

#### One Certificate and Key File [Copied!](#one-certificate-and-key-file-2 "Copy link to this section")

*   Create a certificate and key for the external DNS (`app.{{your_domain}}` and `api.{{your_domain}}`) signed by a known Certificate Authority

#### Two Certificate and Key Files [Copied!](#two-certificate-and-key-files-2 "Copy link to this section")

*   Create a certificate and key for the external DNS (`app.{{your_domain}}`) signed by a known Certificate Authority
*   Create a certificate and key for the external DNS (`api.{{your_domain}}`) signed by a known Certificate Authority

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
