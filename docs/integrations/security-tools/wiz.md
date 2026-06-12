# Wiz | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/wiz

---

# Wiz

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/wiz.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jan 20, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with Wiz CNAPP enables you to pull container image vulnerabilities from Wiz CNAPP and correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

Note

The connector pulls container image vulnerabilities, including deployed and internet-exposed images with Wiz exposure path data.

## Domain [Copied!](#domain "Copy link to this section")

CNAPP

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   The policy Vulnerability Found in Container Image should be enabled ![](/assets/8aea4ed-image.png)
    
*   A valid Client ID and Client secret with the following permissions:
    
    *   Read: vulnerabilities
    *   Read: reports
    *   Create: reports
    *   Read: project
    *   Read: resources
    *   Read: network\_exposure
*   Client ID and Client Secret with permissions to pull vulnerabilities from relevant Wiz projects
    
*   API endpoint URL
    

### Permissions [Copied!](#permissions "Copy link to this section")

Permissions

Cycode

Why is Write Access Required?

vulnerabilities

Read

reports

Read and Create

First iteration of pulling vulnerabilities requires an API call to create vulnerability report.

project

Read

resources

Read

network\_exposure

Read

Note

The **Create: reports** permission is required because Cycode generates a downloadable Wiz report as part of its ingestion flow.

If you plan to ingest SAST findings from Wiz, your Wiz tenant needs a **Wiz Code** license (not Wiz Cloud) — SAST findings now appear in the Wiz Code module.

## Setup [Copied!](#setup "Copy link to this section")

### Get the API Endpoint URL [Copied!](#get-the-api-endpoint-url "Copy link to this section")

Navigate to your user profile and copy the API Endpoint URL.

### Get the Client ID and Client Secret from Wiz CNAPP [Copied!](#get-the-client-id-and-client-secret-from-wiz-cnapp "Copy link to this section")

1.  In the Wiz CNAPP dashboard go to **Settings** > **Service Accounts**.
    
2.  Click **Add Service Account**.
    
3.  Name the new service account, for example: Cycode connector.
    
4.  You can narrow the scope of this service account to specific projects.
    
    Note
    
    Cycode only pulls projects for which the service account has permissions.
    
5.  Add the relevant permissions as described above in [Permissions](/integrations/security-tools/wiz#permissions) .
    
6.  Copy the Client ID and Client Secret and store them somewhere safe.
    

## Top Use Cases [Copied!](#top-use-cases "Copy link to this section")

![](/assets/wiz-runtime-context-violations.png)

![](/assets/wiz-security-graph-context.png)

## FAQs [Copied!](#faqs "Copy link to this section")

#### Where can I see Wiz CNAPP vulnerabilities? [Copied!](#where-can-i-see-wiz-cnapp-vulnerabilities "Copy link to this section")

You can see the data under **Violations**–>**Container Security**–>**Vulnerability Found in Container Image** policy.

For a quick view, you can filter by **Security Tool** and select **Wiz**.

#### Is any other data retrieved and shown in Cycode? [Copied!](#is-any-other-data-retrieved-and-shown-in-cycode "Copy link to this section")

In addition to the container image vulnerabilities, you can view runtime context information. After you connect Wiz, you can filter for container security violations or images that are related with Deployed instances.

Go to **Violations** > **Container Security** and then click **Add Filter** > **Labels** > **Deployed**.

Furthermore, in the Context Intelligence Graph you can query for all deployed images.

Create the following query: **Container Image**–>**Labeled With**–>**Label – Label Name Equals – Deployed**

#### How does the Wiz integration help prioritize container security violations? [Copied!](#how-does-the-wiz-integration-help-prioritize-container-security-violations "Copy link to this section")

Cycode automatically enriches container security violations with Wiz’s **Internet Exposed** label, surfacing Wiz’s security graph exposure data directly in Cycode container security violations. This lets teams triage by real exposure risk — focusing first on vulnerabilities that are both deployed and reachable from the internet — without leaving Cycode.

To filter for internet-exposed violations, go to **Violations** > **Container Security**, click **Add Filter** > **Labels** > **Internet Exposed**.

#### How can I get the root cause in the code that caused the vulnerability in Wiz CNAPP? [Copied!](#how-can-i-get-the-root-cause-in-the-code-that-caused-the-vulnerability-in-wiz-cnapp "Copy link to this section")

In order to do so, you will need to connect the relevant Artifact integration.

Afterwards, in the Cycode Graph view, create a query in the Context Intelligence Graph to correlate between the container image vulnerability and the relevant code entity (repository, commit, etc.) using the Dockerfile.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
