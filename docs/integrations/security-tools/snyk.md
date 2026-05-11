# Snyk | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/snyk

---

# Snyk

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/snyk.md "Edit this page")

Updated on Jan 27, 2026 • Published on May 5, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Snyk supports Snyk Open Source and Snyk Code. This connector enables pulling SCA and SAST vulnerabilities from Snyk so you can view and manage them in Cycode.

You can integrate Snyk Open Source (SCA) and Snyk Code (SAST) alone or together.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SCASAST

### Permissions [Copied!](#permissions "Copy link to this section")

The following permissions are used with the Snyk integration.

Permission

Access type

View issues

Read

View source

Read

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

Cycode works with the enterprise edition of Snyk, and uses a service account to retrieve Synk scan data. If you have the service account token available, you can use an existing service account. Otherwise, you must created a new one to use with Cycode.

### Limitations [Copied!](#limitations "Copy link to this section")

#### SCA [Copied!](#sca "Copy link to this section")

Support is limited to integrations related to package applications such as NPM, Maven, SBT, and PyPI.

Ecosystems like Dockerfile are skipped.

#### SAST [Copied!](#sast "Copy link to this section")

Cycode ignores IaC and SCA findings that have been grouped by Snyk under the SAST category.

## Configuration parameters [Copied!](#configuration-parameters "Copy link to this section")

Parameter

Description

Required

Default value

Name

A meaningful name for the connector as it will appear in Cycode.

Yes

–

URL

Base URL for Snyk REST API endpoints.

Yes

`https://api.snyk.io`

Service account token

Used by Cycode to authenticate to Snyk and initiate the needed processes:  
• SCA  
• SAST

Yes

–

Violation types

Select the types of violations that Cycode should retrieve from Snyk.

Yes

SCA

## Connect Snyk to Cycode [Copied!](#connect-snyk-to-cycode "Copy link to this section")

1.  In Snyk, create a new service account as described in the Snyk docs ([Service accounts](https://docs.snyk.io/enterprise-setup/service-accounts) ).
    
2.  Verify the base URL to use with the Snyk REST APIs. The base URL for all Snyk REST API endpoints is `https://api.snyk.io`, or, depending on your Snyk datacenter deployment, `https://api.eu.snyk.io` or `https://api.au.snyk.io`.
    
3.  (**SAST only**) Go to **Settings** > **Snyk Code**.
    
4.  In the **Enable Snyk Code** area, use the toggle to enable Snyk Code.
    
    ![](/assets/image%28677%29.png)
    

## FAQs [Copied!](#faqs "Copy link to this section")

#### Where can I view the Snyk vulnerabilities? [Copied!](#where-can-i-view-the-snyk-vulnerabilities "Copy link to this section")

Cycode syncs with Snyk’s **Vulnerability Found In Dependency** policy. You can view these vulnerabilities in Cycode under the **Vulnerability Found In Dependency** policy.

![](/assets/image%28117%29.png)

#### Does Cycode enrich the Snyk vulnerabilities with data from other scanners? [Copied!](#does-cycode-enrich-the-snyk-vulnerabilities-with-data-from-other-scanners "Copy link to this section")

Yes. Cycode correlates the Snyk vulnerabilities with the following:

*   Risk score
    
*   Package health
    
*   Reachability
    
    ![](/assets/image%28118%29.png)
    

To view the Snyk violation data, click the **Security Tools** tab:

![](/assets/image%28119%29.png)

#### Can I view Snyk vulnerabilities in the Context Intelligence Graph? [Copied!](#can-i-view-snyk-vulnerabilities-in-the-context-intelligence-graph "Copy link to this section")

Yes. You can search for all Snyk data in the Context Intelligence Graph where **entity** = **Violation**, and then filter by **Security tool** = **Snyk**.

![](/assets/image%28120%29.png)

#### How does Cycode correlate data from Snyk? [Copied!](#how-does-cycode-correlate-data-from-snyk "Copy link to this section")

Cycode ingests two types of vulnerabilities:

*   One that exists both in Cycode and Snyk. For this type, Cycode uses the following properties to correlate vulnerabilities:
    
    *   CVE
    *   Package name and version
    *   Repository
*   One that exists only in Snyk. For this type, Cycode creates a new violation that includes all relevant data from Snyk.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
