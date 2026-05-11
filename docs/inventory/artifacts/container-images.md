# Container images | Cycode Docs

Source: https://docs.cycode.com/inventory/artifacts/container-images

---

# Container images

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/artifacts/container-images.md "Edit this page")

Updated on Oct 28, 2025 • Published on Oct 20, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

The Container Image inventory page provides a centralized and detailed view of the container images discovered by the Cycode platform. This view is designed to help you assess the security posture of a specific image by aggregating its violations, vulnerabilities, and deployment contexts, enabling more efficient prioritization and remediation.

## View the container image inventory [Copied!](#view-the-container-image-inventory "Copy link to this section")

The container images inventory page contains the following information.

### Summary tiles [Copied!](#summary-tiles "Copy link to this section")

Tile

Description

Container images by provider

Donut chart that shows where the container images reside according to platform.

Container images by discovery source

Bar chart showing how many container images were detected by each discovery tool.

Open violations by risk

Bar chart showing the total violations according to the assigned risk score.

### Container image list [Copied!](#container-image-list "Copy link to this section")

The table contains the following information. You can show or hide columns as needed.

Column

Description

Shown by default

Container image

Full name of the container image.

Yes

Digest

SHA256 hash that uniquely identifies the image content.

Yes

Labels

Tags or metadata applied to the image.

No

Provider

Hosting service or registry where the image is stored.

No

Container registry

Full name or address of the container registry.

No

Container repository

Name of the specific repository within the container registry.

No

Tags

All of the version tags associated with the image.

Yes

Related code repository

Source code repository linked to the image (if the image was built from a specific repository).

Yes

Last modified

Date and time the image was last updated or changed.

Yes

Last used

Date and time the image was last used.

No

Discovery source

Security tool or source that found the image.

No

Total violations

Total number of violations that were detected in the image according to severity.

No

## Container image card [Copied!](#container-image-card "Copy link to this section")

The inventory card for each container image is organized into the tabs described below. The location of the container image (in breadcrumbs) is shown above the tabs.

### Overview tab [Copied!](#overview-tab "Copy link to this section")

#### Summary tiles [Copied!](#summary-tiles-1 "Copy link to this section")

The following information is shown in the Overview tab summary tiles.

Tile

Description

Open violations

Number of open violations detected in the image.

Provider

Platform that hosts the image.

Status

Status of the container image.

*   **Active** \- the container is in use.
*   **Inactive** \- the container isn’t in use.
*   **Unknown** \- if the container image was discovered by a third-party tool and the fetched data doesn’t include the status.

#### Container image metadata [Copied!](#container-image-metadata "Copy link to this section")

The Overview tab provides the following metadata about the image attributes. If an attribute isn’t a default property, it will only be visible if the data is available for the image (depending on the configuration defined by your organization).

Property

Description

Default

SDLC stage

Classification that Cycode assigned to this asset in the platform.

Yes

Name

Full name of the container image.

Yes

Digest

Unique SHA256 hash of the container image.

Yes

Container repository

Repository associated with the container image.

Yes

Discovery source

Yes

Image version URL

Link to the image in its source registry.

Note

Only available for container images that were discovered by Cycode.

No

Container registry

The registry where the container image is stored.

No

Container age

How old the container image is, in days.

No

Last modified

Date and time of the last time the container image was updated.

No

Last used

Date and time the container image was last pulled.

No

Uploaded by

Username of the organization member that uploaded the container image.

No

The Overview tab displays any labels that were applied to the container image. You can manually add one or more labels as necessary.

The tab also displays any tags that are associated with the container image, as a JSON.

### Violations tab [Copied!](#violations-tab "Copy link to this section")

The Violations tab is only visible if violations were detected in the container image. It contains a table that lists all of the violations along with the following information.

Column

Description

Default

Status

Current status of the violation.

Yes

Risk score

Custom score that Cycode calculates and assigns to the vulnerability.

Yes

Vulnerability

The CWE associated with this violation.

Yes

Vulnerable package

The package in the container that contains the vulnerability.

Yes

Fixed in version

Version(s) that include a fix for this vulnerability.

Yes

CVSS score

The vulnerability’s CVSS score as shown in the advisory.

No

Last detected

Date and time of the scan when the vulnerability was last detected.

Yes

### Inventory tab [Copied!](#inventory-tab "Copy link to this section")

The Inventory tab contains detailed information about the contents and usage of the container image in the following sub-tabs.

Tab

Description

Vulnerabilities

Lists all associated container vulnerabilities that were found in the container image.

Deployments

Lists all the Kubernetes clusters where this container image is currently deployed.

### Layers tab [Copied!](#layers-tab "Copy link to this section")

The Layers tab is only visible if this information is available about the container image. It displays the individual layers that constitute the container image, showing the commands used to build each layer.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
