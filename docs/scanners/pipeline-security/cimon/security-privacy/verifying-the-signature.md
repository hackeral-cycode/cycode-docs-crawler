# Verifying the signature | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/cimon/security-privacy/verifying-the-signature

---

# Verifying the signature

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/cimon/security-privacy/verifying-the-signature.md "Edit this page")

* * *

To to ensure the authenticity and integrity of the Cimon image, the image is signed using the [cosign](https://github.com/sigstore/cosign) and [sigstore](https://www.sigstore.dev/) tools. Therefore, verifying the signature proves that it was signed by our provided key, which gives confidence in the provided artifact.

Here are the steps you need to take to verify the signature:

1.  Install cosign, which is the CLI tool of Sigstore. You can do that through one of the following ways:
    1.  `go install github.com/sigstore/cosign/v2/cmd/cosign@v1.13.1`
    2.  Fetch the version manually - [https://github.com/sigstore/cosign/releases/tag/v1.13.1](https://github.com/sigstore/cosign/releases/tag/v1.13.1) .

📘 Note

Cosign `v2.0.0+` uses keyless signing by default and uploading the key to the transparency log.  
Currently, we do not support this behavior, so verification can be made through the latest version before that - `v1.13.1`.

2.  Write the public key of the Cimon distribution:

```
1
2
3
4
5
6
```

```bash
cat << EOF >> cimon.pub
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEm1mmcCICdlB5j78efKNbPK8Q0UeO
rDH1UNxhD2ibPuzUDV3OzpL8wVtTnWW1jLGMi7fKiZPfP+pB2BpdUPaMSg==
-----END PUBLIC KEY-----
EOF
```

3.  Run cosign on the Cimon release to verify the signature’s existence and the claims:

```
1
2
3
4
5
6
7
8
```

```bash
$ cosign verify --key cimon.pub cycodelabs/cimon:v0.3.3

Verification for index.docker.io/cycodelabs/cimon:v0.3.3 --
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - The signatures were verified against the specified public key

[{"critical":{"identity":{"docker-reference":"index.docker.io/cycodelabs/cimon"},"image":{"docker-manifest-digest":"sha256:6d07edd74811723f8ba3f70dd86748cb36169e253a4d500cf1639dd99fa7fc77"},"type":"cosign container image signature"},"optional":{"ref":"refs/tags/v0.3.3","repo":"CycodeLabs/cimon","sha":"a882c9fe3e4deb4c078b7f33031f63588e2282ca","workflow":"Release"}}]
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
