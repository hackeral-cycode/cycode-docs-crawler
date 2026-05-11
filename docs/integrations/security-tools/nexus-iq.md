# Nexus IQ | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/nexus-iq

---

# Nexus IQ

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/nexus-iq.md "Edit this page")

Updated on Jan 20, 2026 • Published on May 5, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Nexus IQ enables you to pull vulnerabilities from Nexus IQ so Cycode can:

*   Correlate the Nexus IQ vulnerabilities Cycode’s SCA vulnerabilities
*   Manage them in a unified platform with extended abilities (Slack, Jira and more)

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SCA

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   Sonatype host URL
*   A valid username and password combination  
    ![](/assets/image%28121%29.png)

### Permissions [Copied!](#permissions "Copy link to this section")

The user must have the following permission for this integration.

Permission

Description

View IQ elements

Allows Cycode to read vulnerabilities and component data from Nexus IQ.

## FAQs [Copied!](#faqs "Copy link to this section")

#### Under which policies can Nexus IQ’s vulnerabilities can be found? [Copied!](#under-which-policies-can-nexus-iqs-vulnerabilities-can-be-found "Copy link to this section")

Cycode syncs Nexus IQ’s following policy vulnerabilities:

*   Security risks - Risk that your software can be exploited in ways that are harmful to the business or customers.
*   License risks - Legal risk from open source license obligations. An example is the GPL license which requires public disclosure of source code.
*   Quality risks - Risk from low-quality components. We use a variety of metrics to assess quality including age and popularity.
*   Other risks - This is a catch-all category for any other kind of risk, usually related to organizational priorities. One example is ownership of a component.

Nexus’s vulnerabilities can be found in Cycode under the “Vulnerability Found In Dependency” policy.  
![](/assets/image%28122%29.png)

#### Does Cycode enrich the vulnerabilities with data from other connectors? [Copied!](#does-cycode-enrich-the-vulnerabilities-with-data-from-other-connectors "Copy link to this section")

Yes. Correlation with Cycode provides the following:

*   Risk Score
*   Package Health
*   Reachability

![](/assets/image%28123%29.png)

For Nexus IQ’s violation data, click the **Security Tools** tab:

![](/assets/image%28124%29.png)

#### Can I view Nexus IQ’s vulnerabilities in the Context Intelligence Graph? [Copied!](#can-i-view-nexus-iqs-vulnerabilities-in-the-context-intelligence-graph "Copy link to this section")

Yes. You can search for all Nexus IQ’s data in the Context Intelligence Graph with the following query:  
Search for the entity Violation and filter by Security Tool property for “NexusIqServer”.  
![](/assets/image%28125%29.png)

#### How does Cycode correlate data from Nexus IQ? [Copied!](#how-does-cycode-correlate-data-from-nexus-iq "Copy link to this section")

There are two types of vulnerabilities that are ingested by Cycode:

*   A vulnerability that exists both in Cycode and Nexus IQ. For this type, Cycode uses the following properties to correlate vulnerabilities:
    *   CVE
    *   Package name and version
    *   Repository
*   A vulnerability that exists only in Nexus IQ. For this type of vulnerability, Cycode creates a new violation that includes all relevant data from Nexus IQ.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
