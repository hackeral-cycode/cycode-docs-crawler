# GitHub Package Registry | Cycode Docs

Source: https://docs.cycode.com/integrations/artifact-tools/github-package-registry

---

# GitHub Package Registry

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/artifact-tools/github-package-registry.md "Edit this page")

Updated on Dec 28, 2025 • Published on Dec 1, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s integration with GitHub Package Registry enables Software Composition Analysis (SCA) scanning of private artifacts hosted within your GitHub organizations.

### Domains [Copied!](#domains "Copy link to this section")

*   Software Composition Analysis (SCA) with the following supported ecosystems:
    
    *   Go
    *   Maven
    *   NPM
*   CNAPP
    

Note

To scan container images hosted in the GitHub Container Registry (ghcr.io), use the Generic container registry integration. For information on how to connect, go to [Generic container registry integration](/integrations/artifact-tools/generic-container-registry-integration) .

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

You need the following in order to integrate GitHub Package Registry with Cycode:

*   An active GitHub SCM integration with Cycode
    
*   A GitHub Classic Personal Access Token (PAT) with access to the target organization(s), and the permissions described below.
    

### Permissions [Copied!](#permissions "Copy link to this section")

The GitHub PAT must include the following permission in order to integrate GitHub Package Registry with Cycode:

Scope

Why is access required?

read:packages

Required to pull artifacts.

Note

This integration relies on your SCM integration to manage authentication and authorization.

## Integrate GitHub Package Registry with Cycode [Copied!](#integrate-github-package-registry-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  From the Artifacts section, click **GitHub Package Registry**.
    
3.  In the Select organizations page of the connector wizard, select one or more organizations and click **Save**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
