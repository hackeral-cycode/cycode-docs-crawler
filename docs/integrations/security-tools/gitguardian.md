# GitGuardian | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/gitguardian

---

# GitGuardian

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/gitguardian.md "Edit this page")

Updated on May 6, 2026 • Published on May 6, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with GitGuardian is a **secrets connector** focused specifically on **code secrets** — hardcoded credentials, API keys, tokens, and other sensitive values detected in source code repositories. This connector pulls secret incidents from GitGuardian so you can view and manage them alongside all other security findings in Cycode.

Cycode retrieves only incidents with a `source_type` of `bitbucket`, `bitbucket_cloud`, `github`, or `gitlab`, scoping the import to code repository secrets and excluding other GitGuardian source types (such as CI systems or Docker images).

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

Secrets

## Configuration [Copied!](#configuration "Copy link to this section")

### Parameters [Copied!](#parameters "Copy link to this section")

Parameter

Description

API Key

GitGuardian Personal Access Token (PAT)

Region

EU or US

### Base URLs [Copied!](#base-urls "Copy link to this section")

Region

Base URL

US

`https://api.gitguardian.com/`

EU

`https://api.eu1.gitguardian.com/`

### Required API key scopes [Copied!](#required-api-key-scopes "Copy link to this section")

Scope

Purpose

`incidents:read`

List and retrieve secret incidents

`secrets:read`

Retrieve raw secret values (for encryption)

### Query parameters [Copied!](#query-parameters "Copy link to this section")

Cycode filters GitGuardian incidents using the following query parameter:

Parameter

Values

`source_type`

`bitbucket`, `bitbucket_cloud`, `github`, `gitlab`

Only incidents originating from these SCM source types are imported. Incidents from other source types (such as CI pipelines or container registries) are excluded.

## Connect GitGuardian to Cycode [Copied!](#connect-gitguardian-to-cycode "Copy link to this section")

1.  In GitGuardian, go to **Settings** > **Security** and enable **Enable API endpoint to retrieve detected secrets in clear text for each incident**.
2.  In GitGuardian, go to **API** > **Personal Access Tokens** and create a new token.
3.  Grant the token the `incidents:read` and `secrets:read` scopes.
4.  Copy the token value.
5.  In Cycode, go to **Integrations** > **Security Tools** and select **GitGuardian**.
6.  Enter a name for the connector, paste your API key, and select the appropriate region (**US** or **EU**).
7.  Click **Connect**.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
