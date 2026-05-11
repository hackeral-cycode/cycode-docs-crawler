# JFrog Artifactory and Xray | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/jfrog-artifactory-and-xray

---

# JFrog Artifactory and Xray

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/jfrog-artifactory-and-xray.md "Edit this page")

Updated on Dec 10, 2025 • Published on May 29, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

JFrog is a universal DevOps solution for hosting, managing, and distributing binaries and artifacts. Use the JFrog connector to integrate JFrog Artifactory so Cycode can pull container images for scanning, and JFrog Xray so Cycode can pull container violations that were detected by JFrog.

The JFrog connector supports both cloud and on-premise solutions.

## Domain [Copied!](#domain "Copy link to this section")

Container security

## Permissions [Copied!](#permissions "Copy link to this section")

The user must have the following permissions in order to fetch data from JFrog.

Product

Credentials

JFrog Xray

**Read** permissions.

JFrog Artifactory

User with **Read** permissions.

## Connect JFrog to Cycode [Copied!](#connect-jfrog-to-cycode "Copy link to this section")

Get the following parameters from JFrog and apply them in the Cycode connector wizard:

Parameter

Value

Required

**Instance URL**

The JFrog URL used in your JFrog instance.

Yes

**Username**

To create a user, follow the instructions in the [JFrog docs](https://jfrog.com/help/r/jfrog-platform-administration-documentation/identity-and-access) .

Yes

**Access Token**

To generate a JFrog access token, follow the instructions in the [JFrog docs](https://jfrog.com/help/r/jfrog-platform-administration-documentation/generate-scoped-tokens) .  
  
Additional information is available in the [JFrog knowledge base](https://jfrog.com/help/r/how-to-generate-an-access-token-video) .

Yes

**Choose the data you want to pull into Cycode**

Select one or both of the following options:  
• **JFrog Artifactory images**  
• **JFrog Xray container security violations**

Yes

**Use private artifactory to resolve private dependencies**

Enable this option if you want Cycode to resolve all direct and transitive dependencies of packages hosted on the custom registry and identify more accidentally related vulnerabilities.  
  
For more information, see [Resolve private dependencies for SCA scans](#resolve-private-dependencies-for-sca-scans) below.

No

### Configure container image scanning for JFrog Artifactory [Copied!](#configure-container-image-scanning-for-jfrog-artifactory "Copy link to this section")

If you integrated JFrog Artifactory with Cycode, the next step is to configure the container image scanning as described in [Scan a Container Image Repository](/scanners/ast-application-security-testing/container-image-security/configure-the-container-security-scanner) . After your JFrog data is synced in Cycode and the scanner has been configured, you’ll start to see the scan results in the platform.

### Resolve private dependencies for SCA scans [Copied!](#resolve-private-dependencies-for-sca-scans "Copy link to this section")

Cycode can resolve private packages hosted in your JFrog Artifactory repository when SCA scans are performed. This provides deeper visibility by identifying vulnerabilities in both the direct and transitive dependencies related to your private packages.

Note

This dependency resolution feature currently supports NPM packages.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
