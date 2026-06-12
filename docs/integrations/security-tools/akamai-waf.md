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

Cycode ingests Akamai WAF SIEM security events and converts them into Cycode violations. Events with a `deny` action are filtered out at ingestion time — only the security events that represent actionable threats are surfaced as violations in Cycode.

The diagram below shows the full data model Cycode builds from Akamai: hostnames, security configurations, policies, WAF rules, discovered and managed API endpoints, and the security events (violations) that link them together — including runtime-to-code correlation for managed endpoints.

![Akamai WAF data model](/assets/akamai-waf-data-model.png)

## Inside the Cycode and Akamai WAF integration: key capabilities [Copied!](#inside-the-cycode-and-akamai-waf-integration-key-capabilities "Copy link to this section")

**Intelligent event aggregation.** Akamai generates a lot of events. A single OS command injection rule hitting one login endpoint over the course of a day can trigger hundreds of individual violations. Cycode automatically aggregates these events by website, endpoint, and rule ID, rolling them up into a single, investigable violation. Security teams stop triaging duplicates and start triaging incidents.

**End-to-end API security investigation.** Aggregated Akamai WAF violations appear directly in Cycode’s API Security dashboard, where each policy maps cleanly to a WAF rule in Akamai. Analysts can open a specific violation — say, OS command injection against a login endpoint — and see the full correlation at a glance: the website, the endpoint, the CWE, and the code behind it. Full context, including WAF Rule ID, the action taken (alert or deny), and source IP, is available in the Security Tools tab with no context-switching to the Akamai console.

**Runtime-to-code correlation.** This is where the integration unlocks something new. Cycode’s query builder lets teams search across Akamai runtime data and match live-observed APIs back to their source code definitions inside Cycode. For every endpoint exposed to the internet and seen by Akamai, teams can immediately identify the service, repository, and owner responsible. The question, “Who owns this API and what code stands behind it?” goes from a multi-day investigation to a single query.

**Prioritized triage based on what’s actually sensitive.** Not every WAF violation deserves equal attention. With Akamai data enriched by Cycode’s context, teams can filter violations down to the ones that matter most — for example, scoping the view to WAF events that hit endpoints handling PII. Instead of grinding through a queue of thousands of alerts, analysts focus on incidents where sensitive data is genuinely in scope and exposure is real.

**Shadow coverage detection.** Cycode automatically identifies which of an organization’s domains are actually proxied through Akamai, producing a clear picture of what is protected and what is not. Assets sitting outside WAF coverage become immediately visible, closing one of the most common and dangerous gaps in API security programs.

## Required Akamai product licenses [Copied!](#required-akamai-product-licenses "Copy link to this section")

Cycode reads four data families from Akamai. The integration is designed to be flexible: only SIEM access is strictly required to ingest security events. Access to Application Security and API Definitions data is recommended for full context — including WAF rule details and managed endpoint inventory — but the integration will proceed without it.

Each data family requires both an API service grant on the API client (see Step 2) and an underlying Akamai product on the contract that exposes that data.

Cycode data

Akamai API

Required Akamai product / feature

WAF security configurations, policies, managed and custom rules, hostnames

Application Security API (`/appsec/v1/configs`, `/security-policies`, `/rules`, `/custom-rules`)

One of: App & API Protector, App & API Protector Hybrid, Web Application Protector, Kona Site Defender. Multiple security configurations require **App & API Protector with Advanced Security Management (ASM)**.

Discovered API endpoints

Application Security API (`/appsec/v1/api-discovery`)

**App & API Protector with the ASM module**, or **API Gateway**.

WAF security events (violations)

SIEM Integration API (`/siem/v1/configs/{configId}`)

An eligible product on the security configuration (App & API Protector, App & API Protector Hybrid, Kona Site Defender, Web Application Protector, Bot Manager, Account Protector, Client Reputation), **plus SIEM Integration toggled on** for that configuration in Control Center → Security Configuration → Advanced Settings → Data collection for SIEM.

Managed API endpoints

API Endpoint Definition API (`/api-definitions/v2/endpoints`)

App & API Protector and/or API Gateway, **plus** at least one API registered in Control Center → CDN → API definitions.

## Connect Akamai WAF to Cycode [Copied!](#connect-akamai-waf-to-cycode "Copy link to this section")

In the connector wizard, apply the values from your `.edgerc` file to the following parameters:

Parameter

Value

**Integration name**

Type a name for the integration.

**Host**

The host for the Akamai instance. Copy the `host` value from your `.edgerc` file and prepend `https://` — the `.edgerc` file stores only the hostname, without the scheme.

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

All four authentication values (**Host**, **Client Token**, **Client Secret**, **Access Token**) are issued together when you create an API client in Akamai Control Center. They appear as a single credentials block in the downloaded `.edgerc` file. If you only have three of the four values, the `.edgerc` file is incomplete — return to Control Center and re-download. The `client_secret` cannot be retrieved after the credentials panel is closed; you will need to create a new API client.

### Understand Akamai’s two permission layers [Copied!](#understand-akamais-two-permission-layers "Copy link to this section")

Akamai enforces permissions at two independent layers, and both must align for Cycode to fetch data. Granting one without the other is the most common cause of `403 Forbidden` errors during setup.

Layer

Configured on

Controls

**API service grants**

The API client (credential)

Which API services the credential may call, and whether it can read or write (e.g. SIEM = READ-WRITE)

**Group roles**

The user identity that owns the API client

Which Akamai objects — security configs, policies, endpoints — the credential may act on inside a given group

Think of it as a key and a room: the API grant is the key that opens the door to an API; the group role determines which rooms inside the building you’re allowed to enter. Cycode needs both for every API service it consumes.

### Step 1: Create an API client in Akamai Control Center [Copied!](#step-1-create-an-api-client-in-akamai-control-center "Copy link to this section")

Akamai credentials are issued together as a set when you create an API client. A single client produces all four values the connector requires.

1.  Log in to [Akamai Control Center](https://control.akamai.com) .
2.  In the main navigation, go to **Identity and Access Management**.
3.  Click **Create API client**.
4.  Select **Advanced** as the client type — this lets you customize API permissions in the next step.

### Step 2: Configure API service grants [Copied!](#step-2-configure-api-service-grants "Copy link to this section")

With the **Advanced** client type, assign the following service grants before saving the client. Only SIEM is mandatory.

#### Required grant [Copied!](#required-grant "Copy link to this section")

##### SIEM

Choose the API service named **SIEM** and set the access level to **READ-WRITE**.

Reference: [Akamai SIEM Integration - Get started](https://techdocs.akamai.com/siem-integration/reference/api-get-started)

This grant is required so Cycode can fetch:

*   WAF/SIEM security events stream (`/siem/v1/configs/{configId}`)

#### Recommended grants (for full context) [Copied!](#recommended-grants-for-full-context "Copy link to this section")

##### Application Security

Grant access to the **Application Security** API.

This grant provides enriched context for SIEM events. Without it, Cycode can still ingest events, but cannot show the details of the WAF rule that triggered them. It is required to fetch:

*   Security configurations (`/appsec/v1/configs`)
*   Security policies per configuration/version
*   Managed WAF rules per policy
*   Custom WAF rules per policy
*   API Discovery data (discovered endpoints)

##### API Definitions

Choose the API service named **API Definition** and set the access level to **READ-WRITE**.

Reference: [Akamai API Definitions - Get started](https://techdocs.akamai.com/api-definitions/reference/api-get-started)

This grant is required so Cycode can fetch:

*   Managed API endpoint inventory (`/api-definitions/v2/endpoints`)

### Step 3: Scope the API client to the correct group [Copied!](#step-3-scope-the-api-client-to-the-correct-group "Copy link to this section")

While creating the **Advanced** API client, you must select the Akamai group (or groups) the client is scoped to. The client can only see configurations, policies, and endpoints that live inside its assigned group(s).

1.  Choose the group that owns the WAF security configurations you want Cycode to ingest.
2.  Akamai groups are nested. Roles and scope cascade down to child groups, so assign at the lowest common ancestor of all WAF configs Cycode should see — not at the account root unless you intend full coverage.
3.  For the **API Definitions** service, Akamai uses the term **Access Control Group (ACG)**. The client’s ACG membership determines which hostnames and managed endpoints are visible. If the ACG does not include the hostnames behind your APIs, `/api-definitions/v2/endpoints` will return an empty or partial list with no error.

### Step 4: Assign user roles for each API service [Copied!](#step-4-assign-user-roles-for-each-api-service "Copy link to this section")

The user identity associated with the API client must have a role on the target group for each Akamai service Cycode consumes. Assign the following in **Identity and Access Management → Users → \[user\] → Edit roles**.

**Required role:**

Akamai service

Required role (or equivalent custom role)

SIEM

`Manage SIEM`

**Recommended roles (for full context):**

Akamai service

Required role (or equivalent custom role)

Application Security

`WAF Config` or `WAF Admin`

API Definitions

`API Definitions Read/Write` (or `API Definitions Viewer` if read-only suffices for your deployment)

If a required role is missing on the group that owns a given config, Akamai will return `403 Forbidden` on calls touching that object — even though the API service grant is correct. For recommended roles, a missing role will cause partial data ingestion.

#### Multiple security configurations [Copied!](#multiple-security-configurations "Copy link to this section")

If your Akamai account has more than one security configuration, additional role assignments are required:

*   **Viewer role on the parent group** — Assign the `Viewer` role at the parent group level. This grants Cycode visibility into all child security configurations nested under that group.
*   **Manage SIEM role per group** — Assign the `Manage SIEM` role for each group that contains a security configuration included in your SIEM results. This is required for Cycode to stream SIEM security events from configurations in that group.

Without the parent-group `Viewer` role, Cycode can only see configurations it has been granted access to explicitly, and child configurations will be inaccessible.

### Step 5: Download the credentials [Copied!](#step-5-download-the-credentials "Copy link to this section")

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

## Troubleshooting: 403 Forbidden errors [Copied!](#troubleshooting-403-forbidden-errors "Copy link to this section")

If Cycode reports that authentication succeeds but data is not flowing as expected, or you see `403` errors in the integration logs, use this guide to interpret them.

*   **A `403` on SIEM APIs** is critical. The integration requires SIEM access to function.
    *   The connector will test SIEM access against every security configuration it finds. The connection is only considered valid if it can access events for **at least one** configuration.
    *   If you see a `403` error for SIEM access on _some_ configurations but not others, this is expected behavior if the “SIEM Integration” feature is not enabled on every configuration in Akamai. The sync will proceed for the configurations it can access.
    *   If SIEM access fails for _all_ configurations, check that the `SIEM` API service grant and the `Manage SIEM` user role are correctly assigned.
*   **A `403` on Application Security or API Definitions APIs** is not critical. These errors indicate that the integration will ingest partial data. For example, you will still get SIEM events, but they won’t be enriched with the details of the WAF rules that generated them. If you want this data, check the grants and roles for these optional services:
    1.  **API service grant present?** In Control Center → **Identity and Access Management → API clients → \[your client\]**, confirm the failing service (Application Security or API Definitions) is listed with the correct access level.
    2.  **Client scoped to the right group?** Confirm the API client’s group assignment includes the group that owns the WAF configuration. If you set up the client at the account root but configs live in a child group, scope it down.
    3.  **User role present on the group?** Confirm the user identity that owns the API client has the matching role (see Step 4) on the group containing the target config. This is the single most common cause of post-setup `403` errors.
    4.  **ACG mismatch for API Definitions?** If managed endpoint counts look low or empty, the API client’s ACG may not include the hostnames behind your APIs. Verify ACG membership for the API Definitions service specifically.

Akamai returns `403` for many permission failure modes; the response body usually does not distinguish between them.

## Validate with the Akamai CLI (same credentials as Cycode) [Copied!](#validate-with-the-akamai-cli-same-credentials-as-cycode "Copy link to this section")

Run these against the same `.edgerc` you provided to Cycode.

First, install the plugins and list every security configuration the `.edgerc` can see:

```
1
2
3
```

```bash
akamai install appsec
akamai install siem
akamai -e ~/.edgerc -s default appsec configs
```

The `configs` command returns the full set of `configId` values your API client is scoped to. Then, for **each** `configId` returned above, run the two checks below — substituting the `configId` (and a `version`, typically the latest or production version shown in `configs` output):

```
1
2
```

```bash
akamai -e ~/.edgerc -s default appsec security-policies <configId> <version>
akamai -e ~/.edgerc -s default siem fetch --config <configId>
```

Result

Meaning

`configs` returns empty list, no error

API client is not scoped to the group that owns the configs

`configs` 403

Missing Application Security grant on the API client

`security-policies` 403 (but `configs` works)

Missing WAF Config/WAF Admin role on the group of that config

`siem fetch` 403

Missing SIEM grant or Manage SIEM role

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
