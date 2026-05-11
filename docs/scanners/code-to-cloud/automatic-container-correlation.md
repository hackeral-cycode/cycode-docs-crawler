# Automatic container correlation | Cycode Docs

Source: https://docs.cycode.com/scanners/code-to-cloud/automatic-container-correlation

---

# Automatic container correlation

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/code-to-cloud/automatic-container-correlation.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jul 13, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode has robust automatic correlation capabilities for linking container images with their originating code repositories. This provides immediate code-to-cloud visibility without manual intervention. The correlation process leverages advanced heuristics and analysis of your development pipeline to create accurate connections, enhancing your security posture with minimal user effort.

Cycode employs different approaches for automatic correlation, depending on how your container images are integrated.

### Container layer analysis [Copied!](#container-layer-analysis "Copy link to this section")

When you integrate container images through a registry such as Docker Hub, Azure Container Registry, or Amazon ECR, or through a third-party tool like Wiz, Cycode uses heuristics to identify the source. Cycode analyzes the contents and metadata of the container image and compares them to known Dockerfiles, and build artifacts in your connected code repositories. The goal is to identify unique fingerprints or characteristics that indicate a match to a specific Dockerfile that Cycode has already scanned in your SCM.

### Build Logs [Copied!](#build-logs "Copy link to this section")

When container images are integrated by analyzing CI build logs, Cycode can leverage the context provided by your build pipeline.

*   Build process identification: Cycode monitors and parses CI build logs to identify events related to building and pushing container images. This includes detecting `docker build` and `docker push` commands.
    
*   Direct linkage: By extracting repository and image information directly from the build commands and associated metadata within the logs, Cycode can accurately correlate the pushed container image with the specific code repository and commit that triggered its creation.
    

## View Correlation Data [Copied!](#view-correlation-data "Copy link to this section")

The relationships discovered through code-to-cloud correlation are available in multiple locations on the Cycode platform:

*   Exposure path: You can visualize the full path from the code repository, through the build process, to the final container image asset in the relevant asset and violation cards. This is invaluable for understanding the blast radius of a vulnerability.
    
*   Context Intelligence Graph: Use Cycode’s query engine to explore correlation data and create custom policies.
    

## Limitations [Copied!](#limitations "Copy link to this section")

If you suspect a correlation is missing, it may be due to one of the following known limitations. These are inherent to the correlation methods and can’t be configured by a user.

*   Insufficient Dockerfile instructions: The Dockerfile correlation method might not try to create a match if the file contains too few meaningful instructions to generate a reliable fingerprint.
    
*   Complex or dynamic Dockerfiles:
    
    *   Multi-stage builds: These have a lower chance of successful correlation because the fingerprinting process only analyzes instructions from the final build stage.
    *   Dynamically generated Dockerfiles: Cycode doesn’t support Dockerfiles that are created by scripts as part of a build process.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
