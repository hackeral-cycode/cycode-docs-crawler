# Akamai WAF | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/akamai-waf

---

# Akamai WAF

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/akamai-waf.md "Edit this page")

* * *

## Overview [Copied!](#overview "Copy link to this section")

Akamai Web Application Firewall (WAF) is a cloud-based security solution that protects web applications and APIs from threats such as SQL injection, cross-site scripting (XSS), and other common web attacks.

Note

This is a one-way integration from the third-party API to Cycode.

### What Cycode ingests from Akamai WAF [Copied!](#what-cycode-ingests-from-akamai-waf "Copy link to this section")

The diagram below shows the full data model Cycode builds from Akamai: hostnames, security configurations, policies, WAF rules, discovered and managed API endpoints, and the security events (violations) that link them together — including runtime-to-code correlation for managed endpoints.

![Akamai WAF data model](/assets/akamai-waf-data-model.png)

## Connect Akamai WAF to Cycode [Copied!](#connect-akamai-waf-to-cycode "Copy link to this section")

In the connector wizard, apply the values from your `.edgerc` file to the following parameters:

Parameter

Value

**Integration name**

Type a name for the integration.

**Host**

The host for the Akamai instance. Provide the `https://akab-...akamaiapis.net` value from your `.edgerc` file.

**Client Token**

The client token for the Akamai instance. Identifies **which API client** is making the request. Begins with `akab-`.

**Client Secret**

The client secret for the Akamai instance. Used to sign each request with HMAC-SHA256. Treat as a secret credential — it is shown only once, at the moment the API client is created.

**Access Token**

The access token for the Akamai instance. Identifies **which account and permission set** the client is authorized to act on. Begins with `akab-`.

**Fetch security event history**

Define how far back Cycode should fetch the history of security events. Fetching occurs every 24 hours. Supported values: 24 hours, 7 days, 30 days.

**Severity of security events**

Configure the severity level of the violations that are created for the security events fetched from Akamai. Supported values: Critical, High, Medium, Low, Info.

Note

All four authentication values (**Host**, **Client Token**, **Client Secret**, **Access Token**) are issued together when you create an API client in Akamai Control Center. They appear as a single credentials block in the downloaded `.edgerc` file.

### Step 1: Create an API client in Akamai Control Center [Copied!](#step-1-create-an-api-client-in-akamai-control-center "Copy link to this section")

Akamai credentials are issued together as a set when you create an API client. A single client produces all four values the connector requires.

1.  Log in to [Akamai Control Center](https://control.akamai.com) .
2.  In the main navigation, go to **Identity and Access Management**.
3.  Click **Create API client**.
4.  Select **Advanced** as the client type — this lets you customize API permissions in the next step.

### Step 2: Configure required API grants [Copied!](#step-2-configure-required-api-grants "Copy link to this section")

With the **Advanced** client type, assign the following service grants before saving the client:

#### Application Security [Copied!](#application-security "Copy link to this section")

Grant access to the **Application Security** API.

This grant is required so Cycode can fetch:

*   Security configurations (`/appsec/v1/configs`)
*   Security policies per configuration/version
*   Managed WAF rules per policy
*   Custom WAF rules per policy
*   API Discovery data (discovered endpoints)

#### SIEM [Copied!](#siem "Copy link to this section")

Choose the API service named **SIEM** and set the access level to **READ-WRITE**.

Reference: [Akamai SIEM Integration - Get started](https://techdocs.akamai.com/siem-integration/reference/api-get-started)

This grant is required so Cycode can fetch:

*   WAF/SIEM security events stream (`/siem/v1/configs/{configId}`)

#### API Definitions [Copied!](#api-definitions "Copy link to this section")

Choose the API service named **API Definition** and set the access level to **READ-WRITE**.

Reference: [Akamai API Definitions - Get started](https://techdocs.akamai.com/api-definitions/reference/api-get-started)

This grant is required so Cycode can fetch:

*   Managed API endpoint inventory (`/api-definitions/v2/endpoints`)

### Step 3: Download the credentials [Copied!](#step-3-download-the-credentials "Copy link to this section")

After the client is created, the Credentials panel appears. This panel is shown **one time only**.

1.  Under **Credentials**, click **Download**. An `.edgerc` file is saved to your local machine.
2.  Alternatively, click **Copy** to copy the credential block to your clipboard and paste it into an existing `.edgerc` file.

Important

The `client_secret` value is displayed only at the moment of creation. You cannot retrieve it later from Control Center. If you lose it, you must create a new API client.

The downloaded `.edgerc` file contains four values in the following format:

```
1
2
3
4
5
```

```ini
[default]
client_secret = C11.......eRN=
host          = akab-.........-.....luna.akamaiapis.net
access_token  = akab-acc35t0.................
client_token  = akab-c113.....
```

## Access scope and roles [Copied!](#access-scope-and-roles "Copy link to this section")

In addition to API service grants:

*   Ensure the API client has access to the correct Akamai account/group that owns the WAF configuration.
*   Ensure appropriate user roles are assigned for relevant operations (commonly `WAF Config` or `WAF Admin`; SIEM docs also call out `Manage SIEM`).

If account/group scope is missing, Akamai may still return `403` even when service grants are enabled.

## Inside the Cycode and Akamai WAF integration: key capabilities [Copied!](#inside-the-cycode-and-akamai-waf-integration-key-capabilities "Copy link to this section")

**Intelligent event aggregation.** Akamai generates a lot of events. A single OS command injection rule hitting one login endpoint over the course of a day can trigger hundreds of individual violations. Cycode automatically aggregates these events by website, endpoint, and rule ID, rolling them up into a single, investigable violation. Security teams stop triaging duplicates and start triaging incidents.

**End-to-end API security investigation.** Aggregated Akamai WAF violations appear directly in Cycode’s API Security dashboard, where each policy maps cleanly to a WAF rule in Akamai. Analysts can open a specific violation — say, OS command injection against a login endpoint — and see the full correlation at a glance: the website, the endpoint, the CWE, and the code behind it. Full context, including WAF Rule ID, the action taken (alert or deny), and source IP, is available in the Security Tools tab with no context-switching to the Akamai console.

**Runtime-to-code correlation.** This is where the integration unlocks something new. Cycode’s query builder lets teams search across Akamai runtime data and match live-observed APIs back to their source code definitions inside Cycode. For every endpoint exposed to the internet and seen by Akamai, teams can immediately identify the service, repository, and owner responsible. The question, “Who owns this API and what code stands behind it?” goes from a multi-day investigation to a single query.

**Prioritized triage based on what’s actually sensitive.** Not every WAF violation deserves equal attention. With Akamai data enriched by Cycode’s context, teams can filter violations down to the ones that matter most — for example, scoping the view to WAF events that hit endpoints handling PII. Instead of grinding through a queue of thousands of alerts, analysts focus on incidents where sensitive data is genuinely in scope and exposure is real.

**Shadow coverage detection.** Cycode automatically identifies which of an organization’s domains are actually proxied through Akamai, producing a clear picture of what is protected and what is not. Assets sitting outside WAF coverage become immediately visible, closing one of the most common and dangerous gaps in API security programs.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
