# Supported domains | Cycode Docs

Source: https://docs.cycode.com/before-you-begin/sdlc-coverage-per-domain/supported-domains

---

# Supported domains

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/before-you-begin/sdlc-coverage-per-domain/supported-domains.md "Edit this page")

Updated on Jan 25, 2026 • Published on Apr 23, 2025

* * *

This page provides details about the domains listed in  [SDLC coverage per domain](/before-you-begin/sdlc-coverage-per-domain/) .

## Hardcoded Secrets [Copied!](#hardcoded-secrets "Copy link to this section")

Additional information on the Hardcoded Secrets detection module.

*   All history - After integrating with the SCM, Cycode scans the entire code history of all integrated organizations and repositories.
    
*   Every commit - Cycode receives an event for every code commit to the SCM and scans the code changes of the commit.
    
*   Every branch - Cycode scans the main code branch and every other code branch.
    
*   PR Scan - Cycode can scan every pull request (PR) and does so for enabled repositories. When a violation is detected, Cycode comments on the PR or blocks it, depending on Cycode’s PR scan configuration.
    

## Leaks Detection [Copied!](#leaks-detection "Copy link to this section")

GitHub public repos - Cycode identifies leaked code by scanning public repositories in GitHub.

## CI/CD Security [Copied!](#cicd-security "Copy link to this section")

*   PR Scan - Cycode can scan every pull request (PR) and does so for enabled repositories. When a violation is detected, Cycode comments on the PR or blocks it, depending on Cycode’s PR scan configuration.

## SCA/SAST/IaC [Copied!](#scasastiac "Copy link to this section")

Additional information on the SCA/SAST/IaC modules.

*   Latest code - After integrating with the SCM, Cycode scans the latest code of the main branches of all integrated organizations and repositories.
    
*   Every commit - Cycode receives an event for every code commit to the SCM and scans the code changes of the commit.
    
*   Main branch - Cycode scans the main code branch.
    
*   PR Scan - Cycode can scan every pull request (PR) and does so for enabled repositories. When a violation is detected, Cycode comments on the PR or blocks it, depending on Cycode’s PR scan configuration.
    

## Build Runtime Protection (Cimon) [Copied!](#build-runtime-protection-cimon "Copy link to this section")

Additional information on the Cimon module.

*   GitHub Actions - Cimon includes a built-in integration to execute as a GitHub action.
    
*   GitHub Actions Self-hosted - Cimon includes a built-in integration to execute as a GitHub action for self-hosted.
    
*   Azure DevOps - Cimon includes a built-in integration to execute in Azure DevOps.
    
*   ARC (Actions Runner Controller) - Cimon includes integrations to ARC, a K8s-based runner for GitHub Actions.
    
*   Jenkins - Cimon includes an integration to VM-based runners.
    

## SLSA V1.0 [Copied!](#slsa-v10 "Copy link to this section")

Additional information on the SLSA V1.0 capabilities.

*   GitHub actions - SLSA attestation can be generated when executed in GitHub actions.
    
*   Azure DevOps Pipeline - SLSA attestation can be generated when executed in the Azure DevOps Pipeline.
    

## SBOM [Copied!](#sbom "Copy link to this section")

Additional information on the SBOM feature.

*   Discovery - Cycode Discovery can show all the dependencies of an artifact.

## PR Scans [Copied!](#pr-scans "Copy link to this section")

*   Block - PR Block is supported for GitHub and GitLab Ultimate

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
