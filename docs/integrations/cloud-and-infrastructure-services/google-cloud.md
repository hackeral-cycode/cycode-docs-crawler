# Google Cloud | Cycode Docs

Source: https://docs.cycode.com/integrations/cloud-and-infrastructure-services/google-cloud

---

# Google Cloud

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/cloud-and-infrastructure-services/google-cloud/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Google Cloud enables Cycode to scan your platforms and identify configuration issues in the cloud and infrastructure as code.

After successfully integrating, Cycode starts pulling the data from your environment and running its policies.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions and roles required for integrating with Cycode:

Roles

Permissions

\- Viewer  
• Storage Objects Viewer  
• Security Reviewer

`compute.googleapis.com`  
`storage-component.googleapis.com`  
`iam.googleapis.com`  
`container.googleapis.com`  
`logging.googleapis.com`  
`monitoring.googleapis.com`  
`cloudresourcemanager.googleapis.com`  
`cloudkms.googleapis.com`  
`dns.googleapis.com`  
`sqladmin.googleapis.com`  
`containerregistry.googleapis.com`

## Integrate with Google Cloud [Copied!](#integrate-with-google-cloud "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  This displays the Add Integration window. Under the Cloud section, click **Google Cloud Platform**.
    

![](/assets/a683443-image.png)

![](/assets/gcp-integration-add-project.png)

3.  Enter a name for your integration.
    
4.  Create a service account and JSON key in Google Cloud according to [these instructions](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) .
    
5.  Upload your JSON key file to Cycode.
    
6.  Enter your project ID in Cycode.
    
7.  Click **Done**. The integrations area loads and shows that your project is connected.
    

To add new projects, click **Add Project** from the integrations area.

## De-Integrating from Google Cloud [Copied!](#de-integrating-from-google-cloud "Copy link to this section")

If you choose to delete (de-integrate) a Google Cloud-Cycode integration, you can do so through the integration settings.

1.  Go to the list of integrations and from the three-dot option menu, select **Delete**.

![](/assets/4074d51-image.png)

2.  You’ll then be asked to confirm the deletion.

### What Does De-Integration Do? [Copied!](#what-does-de-integration-do "Copy link to this section")

When Cycode users integrate with a cloud account, this adds a large amount of information into the Context Intelligence Graph as well as to the Violations, workflows, and custom policy databases.

When deleting an existing integration with a cloud account, you have the following options:

*   Remove violations (using the parameter name `removeViolationsData`; if not provided, default is `true`).
*   Remove graph-related entities (using the parameter name `removeGraphData`; if not provided, default is `true`).

Note that by default, both the violations and graph entities will be removed.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
