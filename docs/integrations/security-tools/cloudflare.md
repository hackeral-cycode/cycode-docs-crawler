# Cloudflare | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/cloudflare

---

# Cloudflare

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/cloudflare.md "Edit this page")

Updated on Mar 9, 2026 • Published on Aug 25, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Cloudflare API Security connector enables unified visibility and protection by detecting unmanaged API endpoints, identifying unproxied domains, and showing Cloudflare firewall events with Cycode’s code-to-cloud context.

Additionally organizations benefit from a comprehensive view of Cloudflare’s zones, WAF rules, and managed endpoints in the Cycode platform.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

API Security

### Use cases [Copied!](#use-cases "Copy link to this section")

The Cloudflare integration with Cycode enables the following:

*   Visibility into Cloudflare assets, including:
    *   Zones
    *   WAF Rulesets
    *   Rules
    *   Website endpoints
    *   Security events
*   Visibility of security events from Cloudflare within Cycode, including code-to-cloud correlation.
*   Detection of API endpoints that aren’t managed by Cloudflare.
*   Detection of Cloudflare domains that aren’t proxied by Cloudflare.

![](/assets/image%28709%29.png)

The following data is saved to the Context Intelligence Graph for analysis:

*   Managed endpoints
*   Websites
*   Zones
*   WAF rulesets (as nodes)

Note

*   Cycode fetches a maximum of 10M events per zone.
*   Cycode doesn’t fetch WAF events that have the status **skip**.

### Violations [Copied!](#violations "Copy link to this section")

Cloudflare security events are saved as violations.

Cloudflare API security violations are firewall events aggregated over the selected input time (1 day/7 days/30 days), and are grouped by website, managed endpoint, and policy.

Cycode applies the grouping to prevent an overload of violations for the same issue from different IP sources. When viewed in the Context Intelligence Graph, violations are connected to an endpoint, website and WAF ruleset.

## Connect Cloudflare to Cycode [Copied!](#connect-cloudflare-to-cycode "Copy link to this section")

Get the relevant parameters from Cloudflare and apply them when you configure the Cycode connector wizard.

Parameter

Value

**Integration name**

Type a name for the integration.

**Bearer token**

Create a bearer token in Cloudflare for Cycode and paste it here:  
1\. In your Cloudflare dashboard, navigate to **Manage Account** > **Account API Tokens**.  
2\. Click **Create Token**.  
3\. Define the token’s name,**Read all resources** permission, and an optional expiration date and click **Create Token**.

**Account ID**

Find your account ID in Cloudflare and paste it here:  
1\. In your Cloudflare dashboard, navigate to a specific domain (zone) to view its settings.  
2\. In the Overview page, go to the API section and copy your account ID.

**Fetch security event history**

Define how far back Cycode should fetch the history of security events, which occurs every 24 hours.

**Severity of security events**

Configure the severity level of the violations that are created for the security events fetched from Cloudflare. Supported values:  
• Critical  
• High  
• Medium  
• Low  
• Info

**Data types**

Select the types of data that Cycode should fetch from Cloudflare. If no values are selected, Cycode fetches only security events. Supported values:  
• Managed endpoints  
• Websites  
• Zones  
• WAF rulesets

## Required permissions [Copied!](#required-permissions "Copy link to this section")

Permission

Description

Read all resources

Enables retrieving information about configurations, settings, and data for resources.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
