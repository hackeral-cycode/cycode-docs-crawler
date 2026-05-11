# Orca | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/orca

---

# Orca

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/orca.md "Edit this page")

Updated on Jan 20, 2026 • Published on May 5, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Orca enables you to retrieve container image vulnerabilities from Orca and to correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The current connector pulls only Container Image vulnerabilities (i.e., vulnerabilities that are part of the “Asset Category” of type “Image”)

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   Orca Security API URL  
    The API URL specifies the endpoint for the API integration, depending on your region. The possible API URL values are:
    
    Region
    
    URL
    
    US - used by default
    
    [https://api.orcasecurity.io/api/](https://api.orcasecurity.io/api/)
    
    US2
    
    [https://api.us2.orcasecurity.io/api/](https://api.us2.orcasecurity.io/api/)
    
    Europe
    
    [https://app.eu.orcasecurity.io/api/](https://app.eu.orcasecurity.io/api/)
    
    Australia
    
    [https://app.au.orcasecurity.io/api/](https://app.au.orcasecurity.io/api/)
    
    India
    
    [https://app.in.orcasecurity.io/api/](https://app.in.orcasecurity.io/api/)
    
*   A valid API token

### Permissions [Copied!](#permissions "Copy link to this section")

The API token must be created with the following role.

Role

Description

Viewer

Read-only access to all resources required by the integration.

See the [Orca docs](https://docs.orcasecurity.io/docs/default-roles-and-permissions?highlight=roles) to learn more about Orca’s permissions and roles.

### Generate an API token [Copied!](#generate-an-api-token "Copy link to this section")

1.  Sign in to your account and go to **Settings > Users & Permissions > API**:  
    ![](/assets/image%28102%29.png)
2.  Click **Create API Token**.
3.  Fill in all the required settings.
4.  When setting the **Role** for the generated token, make sure you select **Viewer**:  
    ![](/assets/image%28103%29.png)
5.  After the token is generated, save it to a secure location.

See the [Orca docs](https://docs.orcasecurity.io/docs/managing-api-tokens) for more information about how to generate a valid token with required permissions.

## FAQs [Copied!](#faqs "Copy link to this section")

### Under which policies can Orca’s vulnerabilities be found? [Copied!](#under-which-policies-can-orcas-vulnerabilities-be-found "Copy link to this section")

Cycode syncs with Orca’s alerts that meet the following criteria (using filters):

*   **Category** = **Vulnerabilities**
*   **Asset Category** = **Image**.  
    ![](/assets/image%28104%29.png)

The above filter for matching alerts can be found in Cycode under the **Vulnerability Found In Container Image** policy in our Violations page.

For a quick view, filter by **Security Tool** and select **Orca Security**:  
![](/assets/image%28105%29.png)

### Will the connector support additional asset types? [Copied!](#will-the-connector-support-additional-asset-types "Copy link to this section")

Yes. Container Image vulnerabilities are just the beginning. For specific requests, reach out to your Customer Success Manager.

### How can I get the root cause in the code that causes the vulnerability in Orca? [Copied!](#how-can-i-get-the-root-cause-in-the-code-that-causes-the-vulnerability-in-orca "Copy link to this section")

To get the root cause, you’ll need to connect the relevant Artifact integration.  
![](/assets/image%28106%29.png)

Afterwards, in the Cycode Discovery tab, you can create a query in the Context Intelligence Graph to correlate the the Container Image Vulnerability and the relevant code entity (repository, commit, etc.) using the Dockerfile.

### Does Cycode enrich vulnerabilities with data from other connectors? [Copied!](#does-cycode-enrich-vulnerabilities-with-data-from-other-connectors "Copy link to this section")

Yes. Correlation with Cycode provides the following:

**Risk Score**  
![](/assets/image%28107%29.png)

For Orca Security’s violation data, click the **Security Tools** tab:  
![](/assets/image%28108%29.png)

### Can I view Orca’s vulnerabilities in the Graph view? [Copied!](#can-i-view-orcas-vulnerabilities-in-the-graph-view "Copy link to this section")

Yes. You can search for all of Orca’s data in the Context Intelligence Graph with the following query:

Entity type **Container Image Vulnerability** with filter by field **Security Tools** > **Contains Items That** > **Equals** > **Orca**.

![](/assets/image%28109%29.png)

### How does Cycode correlate data from Orca? [Copied!](#how-does-cycode-correlate-data-from-orca "Copy link to this section")

There are two types of vulnerabilities that are ingested by the Cycode:

*   A vulnerability that exists both in Cycode and Orca. For this type, Cycode uses the following properties to correlate vulnerabilities:
    *   CVE
    *   Package name and version
    *   Image Digest
    *   Image Repository
*   A vulnerability that exists only in Orca. For this type of vulnerability, Cycode creates a new violation that includes all relevant data from Orca.

Note

Cycode syncs images that were created in the past 3 months. Any images that are older than that aren’t synced.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
