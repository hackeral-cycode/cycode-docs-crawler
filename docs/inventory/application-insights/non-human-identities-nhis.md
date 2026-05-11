# Non-Human Identities (NHIs) | Cycode Docs

Source: https://docs.cycode.com/inventory/application-insights/non-human-identities-nhis

---

# Non-Human Identities (NHIs)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/application-insights/non-human-identities-nhis/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Dec 4, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Non-Human Identities (NHIs) are digital identities that are assigned to entities such as applications, services, scripts, and automated processes instead of human users. These identities include API keys, service accounts, machine credentials, tokens, and certificates so that systems can interact with each other in cloud and on-prem environments.

NHIs are used for automation, integration, and authentication across platforms, and are essential for modern IT infrastructures. However, they can also pose serious security and management challenges.

### NHIs and your security posture [Copied!](#nhis-and-your-security-posture "Copy link to this section")

A common real-world scenario is when a developer integrates a third-party SaaS tool with the source code residing in the organization’s GitHub repository. This requires creating an NHI, such as an access token. If the third-party provider is breached, attackers can compromise the token and gain unauthorized access to the organization’s systems and potentially leak code or sensitive documents.

## Cycode solution [Copied!](#cycode-solution "Copy link to this section")

Cycode retrieves data about NHIs from integrated tools and displays it in the NHIs view. You can use this view to investigate NHIs that may pose a security risk to your organization.

### Available integrations [Copied!](#available-integrations "Copy link to this section")

You can integrate Cycode with the following tools:

*   [AWS Cloud Provider](/inventory/application-insights/non-human-identities-nhis/aws-cloud-provider)
    
*   [AWS Secrets Manager](/inventory/application-insights/non-human-identities-nhis/aws-secrets-manager)
    
*   [GitHub](/inventory/application-insights/non-human-identities-nhis/github)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
