# Cycode Broker security architecture | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/cycode-broker/cycode-broker-security-architecture

---

# Cycode Broker security architecture

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/cycode-broker/cycode-broker-security-architecture.md "Edit this page")

Updated on Mar 4, 2026 • Published on Feb 26, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Cycode Broker is designed with a defense-in-depth security model that ensures customer source code and credentials are protected at every stage of the scan lifecycle:

*   All connections are outbound-only from the customer environment.
    
*   Data is encrypted both in transit (TLS 1.2+ with optional mTLS) and at rest (hybrid RSA-2048/AES-256, SSE-KMS).
    
*   Cloned repositories are ephemeral with automatic deletion.
    
*   Temporary credentials are scoped to the minimum required permissions with short-lived TTLs.
    

For enterprises with strict data-residency or key-ownership requirements, Cycode offers Bring Your Own Storage (BYOS) and Customer Managed Keys (CMK) to ensure that you maintain full control.

## Data in transit [Copied!](#data-in-transit "Copy link to this section")

All communication between the Cycode Broker client and the Cycode cloud environment is encrypted in transit.

Layer

Detail

TLS

All HTTPS connections use TLS 1.2 or higher. The Cycode Broker client initiates every connection and there is no inbound listener.

mTLS (Mutual TLS)

Optional mutual TLS using X.509 certificates in PEM format. Both the Cycode Broker client and Cycode Broker server present certificates, which provides bidirectional authentication. Configured via `MutualTlsEndpoint`.

SSL fingerprint pinning

The Cycode Broker client can pin the server’s SSL certificate fingerprint to prevent man-in-the-middle attacks, even if a Certificate Authority is compromised.

Git tunnel encryption

Git clone operations over the Cycode Broker tunnel inherit the same TLS/mTLS protection as the REST traffic.

## Data at rest [Copied!](#data-at-rest "Copy link to this section")

All data stored by the Cycode Broker, whether temporarily staged in S3 or persisted in MongoDB, is encrypted at rest.

### S3 storage [Copied!](#s3-storage "Copy link to this section")

*   **Server-Side Encryption (SSE-KMS)** - all objects written to S3 are encrypted using AWS KMS-managed keys (`SSE-KMS`).
    
    Note
    
    With [CMK](#cmk-customer-managed-keys) , customers supply their own KMS key ARN.
    
*   **Hybrid RSA-2048 / AES-256 encryption** - before upload, the Cycode Broker server encrypts data using a hybrid scheme. A random AES-256 symmetric key encrypts the payload, and the AES key itself is encrypted with an RSA-2048 public key. This ensures data is protected both at the application layer and the storage layer.
    

### MongoDB [Copied!](#mongodb "Copy link to this section")

**Client-Side Field-Level Encryption (CSFLE)** - sensitive fields are encrypted before they leave the application using the `AEAD_AES_256_CBC_HMAC_SHA_512_Random` algorithm. This means data is encrypted in the application memory before it reaches the database, so even database administrators can’t read the plaintext.

## Ephemeral data lifecycle [Copied!](#ephemeral-data-lifecycle "Copy link to this section")

Cloned repository data follows a strict ephemeral lifecycle with no long-term persistence:

1.  **Clone:** The Cycode Broker client clones the repository from the customer’s internal SCM to the local disk.
    
2.  **Zip and encrypt:** The clone is compressed and encrypted using hybrid RSA/AES encryption.
    
3.  **Upload:** The encrypted archive is uploaded to S3 using temporary, scoped credentials.
    
4.  **Delete local copy:** The cloned repository and zip file are immediately deleted from the Cycode Broker client’s local disk.
    
5.  **Scan:** The Cycode Scan Engine retrieves and processes the encrypted archive.
    
6.  **Delete from S3:** S3 objects are tagged with a configurable TTL (the default is 24 hours) and automatically deleted via S3 lifecycle rules.
    

Note

The TTL is configurable per tenant. All objects are tagged with a `TtlTag` at upload time, and S3 lifecycle policies enforce automatic expiration.

## Credential scopes and rotation [Copied!](#credential-scopes-and-rotation "Copy link to this section")

All the credentials used in the Cycode Broker flow are temporary, scoped, and automatically rotated.

Credential

Scope

Lifetime

Mechanism

S3 temporary credentials

Scoped to tenant-specific S3 prefix (`tenant-id/path`)

6 hours

Generated per clone request via AWS STS.

IAM policy

Restricted to `PutObject`/`GetObject` for the tenant’s S3 path

Matches S3 credential lifetime

Inline IAM policy is attached to the STS session.

STS AssumeRole (BYOS)

Cross-account access to customer’s S3 bucket

Per request

AssumeRole with external ID. Your organization controls the trust policy.

## BYOS (Bring Your Own Storage) [Copied!](#byos-bring-your-own-storage "Copy link to this section")

With BYOS, you provide your own AWS S3 bucket for storing clone artifacts. Cycode’s infrastructure never holds the data.

### How it works [Copied!](#how-it-works "Copy link to this section")

1.  Create an S3 bucket and an IAM role with a trust policy that allows Cycode’s AWS account to assume the role.
    
2.  Cycode uses **STS AssumeRole** with the role ARN and external ID you provide to obtain temporary credentials.
    
3.  Clone artifacts are uploaded directly to your S3 bucket using the temporary credentials.
    
4.  You retain full control over bucket policies, encryption keys, lifecycle rules, access logging, and data retention.
    

### Security properties [Copied!](#security-properties "Copy link to this section")

*   **Data residency** - data stays in your AWS account and region.
    
*   **Access control** - You can revoke Cycode’s access at any time by modifying the IAM trust policy.
    
*   **Auditability** - all S3 access is logged in the your AWS CloudTrail.
    
*   **Encryption** - Enforce your own SSE-KMS or SSE-S3 encryption policy on the bucket.
    

Note

For more information, go to [Bring Your Own Storage (BYOS)](/integrations/scm-source-code-management-tools/bring-your-own-storage-byos) .

## CMK (Customer-Managed Keys) [Copied!](#cmk-customer-managed-keys "Copy link to this section")

CMK allow you to use your own AWS KMS keys to encrypt data managed by Cycode.

### Coverage [Copied!](#coverage "Copy link to this section")

Data Store

Encryption method

CMK integration

S3 (clone artifacts)

SSE-KMS

Your KMS key ARN is used for server-side encryption of all uploaded objects.

MongoDB (sensitive fields)

CSFLE (`AEAD_AES_256_CBC_HMAC_SHA_512_Random`)

Your KMS key is used to wrap the data encryption keys.

### Security properties [Copied!](#security-properties-1 "Copy link to this section")

*   **Key ownership** - You own and control the KMS key, including rotation schedules and access policies.
    
*   **Revocation** - disabling or deleting the KMS key renders all encrypted data unreadable (a hard kill switch).
    
*   **Audit trail** - all key usage is logged in your AWS CloudTrail.
    

## Network security [Copied!](#network-security "Copy link to this section")

The Cycode Broker network model is designed to minimize the attack surface.

Control

Detail

Outbound-only connections

The Cycode Broker client initiates all connections to the Cycode cloud environment, so you don’t have to open any inbound ports in your firewall.

No inbound listeners

The Cycode Broker client doesn’t expose any HTTP/HTTPS endpoints. There is no server socket listening for connections.

SSRF (Server-Side Request Forgery) protection

The Cycode Broker server validates and sanitizes all URLs before making outbound requests via `ProtectedRestServiceAgent`, preventing SSRF attacks.

Proxy support

The Cycode Broker client supports HTTP/HTTPS proxies for environments where direct internet access is restricted.

Long polling (not WebSocket)

The client-server communication uses HTTPS long polling, which is compatible with corporate proxies and firewalls that may block WebSocket upgrades.

## Quick reference table [Copied!](#quick-reference-table "Copy link to this section")

Security feature

Default (Cycode managed)

With BYOS + CMK

Data in transit

TLS 1.2+ (mTLS optional)

TLS 1.2+ (mTLS optional)

S3 encryption at rest

SSE-KMS (Cycode-managed key)

SSE-KMS (customer-owned KMS key)

MongoDB encryption

CSFLE (Cycode-managed key)

CSFLE (customer-owned KMS key)

Clone storage location

Cycode’s AWS S3

Customer’s AWS S3

Clone retention

24h TTL (configurable)

Customer-controlled lifecycle rules

S3 credentials

Temporary (6h), scoped to tenant path

**STS AssumeRole** to customer account

JWT rotation

Auto-refreshed before expiration

Auto-refreshed before expiration

Key revocation

Cycode managed

Customer disables/deletes KMS key

Access audit

Cycode’s CloudTrail

Customer’s CloudTrail

Network model

Outbound-only, no inbound ports

Outbound only, no inbound ports

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
