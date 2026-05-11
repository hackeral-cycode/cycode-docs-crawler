# Internal Load Balancer Only | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/requirements/internal-load-balancer-only

---

# Internal Load Balancer Only

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/requirements/internal-load-balancer-only.md "Edit this page")

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

This page covers how the Cycode on-premise installation works when using only internal load balancers. The details for setting up this load balancer in the various support infrastructures can be found below.

## EKS [Copied!](#eks "Copy link to this section")

This section covers how to use an internal load balancer in EKS (Amazon).

### EKS Internal Load Balancer Diagram [Copied!](#eks-internal-load-balancer-diagram "Copy link to this section")

![](/assets/2b2bc9f-aws_internal_lb_only.drawio.png)

### Using DNS Certificates [Copied!](#using-dns-certificates "Copy link to this section")

Use internal DNS records (should include `app.{{your_domain}}` and `api.{{your_domain}}`) using 1 of the 3 choices listed below:

*   [AWS](#aws-certificate-and-key-file)
*   [One Certificate](#one-certificate-and-key-file)
*   [Two Certificates](#two-certificate-and-key-files)

Example internal DNS:

*   `app.cycode.internal.domain`
*   `api.cycode.internal.domain`

#### AWS Certificate and Key File [Copied!](#aws-certificate-and-key-file "Copy link to this section")

*   Create a certificate and key for the internal DNS (`app.{{your_domain}}` and `api.{{your_domain}}`) signed by a known Certificate Authority
*   The ARN value for your certificate in AWS (includes the AWS location ID, AWS account ID, and UUID)
    *   Example:
        *   `{{aws_location}} = eu-west-1`
        *   `{{account_id}} = 281498522159`
        *   `{{cert_uuid}} = 35788ff9-7b3a-4abb-b834-c5a407c8a7ce`

#### One Certificate and Key File [Copied!](#one-certificate-and-key-file "Copy link to this section")

*   Create a certificate and key for the internal DNS (`app.{{your_domain}}` and `api.{{your_domain}}`) signed by a known Certificate Authority

#### Two Certificate and Key Files [Copied!](#two-certificate-and-key-files "Copy link to this section")

*   Create a certificate and key for the internal DNS (`app.{{your_domain}}`) signed by a known Certificate Authority
*   Create a certificate and key for the internal DNS (`api.{{your_domain}}`) signed by a known Certificate Authority

## GKE [Copied!](#gke "Copy link to this section")

This section covers how to use an internal load balancer in GKE (Google Cloud).

### GKE Internal Load Balancer Diagram [Copied!](#gke-internal-load-balancer-diagram "Copy link to this section")

![](/assets/a9e028e-gke_internal_lb_only.drawio.png)

### Using DNS Certificates [Copied!](#using-dns-certificates-1 "Copy link to this section")

Use internal DNS records (should include app.{{your\_domain}} and api.{{your\_domain}}) using 1 of the 2 choices listed below:

*   [One Certificate](#one-certificate-and-key-file-1)
*   [Two Certificates](#two-certificate-and-key-files-1)

Example internal DNS:

*   `app.cycode.internal.domain`
*   `api.cycode.internal.domain`

#### One Certificate and Key File [Copied!](#one-certificate-and-key-file-1 "Copy link to this section")

*   Create a certificate and key for the internal DNS (`app.{{your_domain}}` and `api.{{your_domain}}`) signed by a known Certificate Authority

#### Two Certificate and Key Files [Copied!](#two-certificate-and-key-files-1 "Copy link to this section")

*   Create a certificate and key for the internal DNS (`app.{{your_domain}}`) signed by a known Certificate Authority
*   Create a certificate and key for the internal DNS (`api.{{your_domain}}`) signed by a known Certificate Authority

## K3S [Copied!](#k3s "Copy link to this section")

This section covers how to use an internal load balancer in K3S (Kubernetes).

### K3S Internal Load Balancer Diagram [Copied!](#k3s-internal-load-balancer-diagram "Copy link to this section")

![](/assets/157797d-k3s_internal_lb_only.drawio.png)

### Using DNS Certificates [Copied!](#using-dns-certificates-2 "Copy link to this section")

Use internal DNS records (should include app.{{your\_domain}} and api.{{your\_domain}}) using 1 of the 2 choices listed below:

*   [One Certificate](#one-certificate-and-key-file-2)
*   [Two Certificates](#two-certificate-and-key-files-2)

Example internal DNS:

*   `app.cycode.internal.domain`
*   `api.cycode.internal.domain`

#### One Certificate and Key File [Copied!](#one-certificate-and-key-file-2 "Copy link to this section")

*   Create a certificate and key for the internal DNS (`app.{{your_domain}}` and `api.{{your_domain}}`) signed by a known Certificate Authority

#### Two Certificate and Key Files [Copied!](#two-certificate-and-key-files-2 "Copy link to this section")

*   Create a certificate and key for the internal DNS (`app.{{your_domain}}`) signed by a known Certificate Authority
*   Create a certificate and key for the internal DNS (`api.{{your_domain}}`) signed by a known Certificate Authority

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
