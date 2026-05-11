# Fetching the SBOM | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/security-privacy/fetching-the-sbom

---

# Fetching the SBOM

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/security-privacy/fetching-the-sbom.md "Edit this page")

* * *

## What is SBOM? [Copied!](#what-is-sbom "Copy link to this section")

An SBOM is a formal list that enumerates the components and dependencies of a software package. It provides a comprehensive inventory of the software components that are present in the package, including open-source software, commercial components, and proprietary code.

SBOMs are essential for software security and compliance because they enable users to identify vulnerabilities and track the origins of software components. By providing an SBOM for our Docker images, we enable our users to have better visibility into the software components used in our product.

## Downloading the Cimon SBOM [Copied!](#downloading-the-cimon-sbom "Copy link to this section")

To download the full SBOM file for the Cimon image, you can use the [cosign](https://github.com/sigstore/cosign) tool. Here are the steps to follow:

1.  Install the `cosign` tool by following the instructions provided in the official cosign documentation: [https://github.com/sigstore/cosign#installation](https://github.com/sigstore/cosign#installation)
2.  Downloading the SBOM for the desired image:

```
1
```

```bash
cosign download sbom cycodelabs/cimon:<version> > cimon-<version>.sbom.spdx.json
```

📘 Note

Replace “version” with the version of Cimon image you want to download the SBOM file for.  
You can identify the latest version of Cimon used by inspecting the tags in [https://github.com/cycodelabs/cimon-action/tags](https://github.com/cycodelabs/cimon-action/tags) .

The SBOM file will be downloaded and saved in the current working directory with the name `cimon-<version>.sbom.spdx.json`.

```
1
2
3
4
5
```

```bash
$ cat cimon-<version>.sbom.spdx.json
{
 "SPDXID": "SPDXRef-DOCUMENT",
 ...
}
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
