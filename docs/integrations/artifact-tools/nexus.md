# Nexus | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools/nexus

---

# Nexus

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/nexus.md "Edit this page")

Updated on Feb 4, 2026 • Published on Nov 5, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Sonatype Nexus enables Cycode to scan your code and to retrieve transitive dependencies of private packages hosted there.

Note

The Nexus Repository connector doesn’t support scanning container images. If you want to scan container images, use the [Generic container registry integration](/integrations/artifact-tools/generic-container-registry-integration) .

## Supported Nexus editions [Copied!](#supported-nexus-editions "Copy link to this section")

Cycode supports **Sonatype Nexus Repository** (the commercial edition). Nexus OSS is not supported.

## Configure container image scanning for Nexus Repository [Copied!](#configure-container-image-scanning-for-nexus-repository "Copy link to this section")

To scan container images hosted inside Nexus, use the [generic connector integration](/docs/generic-container-registry-integration) .

## Resolve private dependencies for SCA scans [Copied!](#resolve-private-dependencies-for-sca-scans "Copy link to this section")

Cycode can resolve private packages hosted in your Nexus Repository when SCA scans are performed. This provides deeper visibility by identifying vulnerabilities in both the direct and transitive dependencies related to your private packages.

Note

This dependency resolution feature currently supports Maven, and NPM packages.

## Permissions [Copied!](#permissions "Copy link to this section")

The following permissions are needed for integrating with Cycode:

Permissions

Why is access required?

Username/password

For integrating the systems.

User with read-only permissions

See below

### Create a Nexus user with read-only permissions [Copied!](#create-a-nexus-user-with-read-only-permissions "Copy link to this section")

We recommend creating a dedicated Sonatype Nexus user with read-only permissions. To do this, create a dedicated role with the `nx-repository-view-*-*-read` and `nx-repository-view-*-*-browse` permissions and assign the role to the dedicated user.

*   For instructions on how to create a role, go to the Roles page in the [Sonatype docs](https://help.sonatype.com/repomanager3/nexus-repository-administration/access-control/roles) .

## Integrate Nexus with Cycode [Copied!](#integrate-nexus-with-cycode "Copy link to this section")

1.  Go to **Settings** > **Integrations** and find the connector for **Nexus Repository**. The following page is displayed. ![](/assets/c98edcb-image.png)
    
2.  Fill in the form and click **Done**. After you confirm the integration, the integrations area reloads and shows that Nexus is connected.
    

## What’s Next? [Copied!](#whats-next "Copy link to this section")

Cycode’s SCA scans will now fetch private packages from Sonatype Nexus, adding them to your inventory and creating violations for any discovered vulnerabilities.

*   Manage violations
    
*   [Remediation](/policies/manage-policies)
    
*   [Define automated workflows](/workflow-automation/create-a-workflow)
    
*   [Define custom policies](/policies/create-and-manage-custom-policies/create-custom-secrets-policies)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
