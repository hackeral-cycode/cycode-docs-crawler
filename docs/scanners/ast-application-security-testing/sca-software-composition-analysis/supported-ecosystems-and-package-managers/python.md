# Python | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/python

---

# Python

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/python.md "Edit this page")

Updated on Mar 2, 2026 • Published on Nov 18, 2024

* * *

Supported Versions: All

Package Registries: [PyPI](https://pypi.org/)

Reachability:Not supported

 Pip

#### Related files

Manifest

*   `requirements.txt`
*   `setup.py`

Lock

*   None

#### Classification

Development

Transitive

#### Automatic Remediation

Direct

Indirect

#### Supported features

*   None

#### Known Limitations

*   Remediation is not supported for setup.py.
*   Transitive dependencies for `requirements.txt` are not detected during scan.

 Pipenv

#### Related files

Manifest

*   `Pipfile`

Lock

*   `Pipfile.lock`

#### Classification

Development

Transitive

#### Automatic Remediation

Direct

Indirect

#### Supported features

*   None

 Poetry

#### Related files

Manifest

*   `pyproject.toml`

Lock

*   `poetry.lock`

#### Classification

Development

Transitive

#### Automatic Remediation

Direct

Indirect

#### Supported features

*   None

 UV

#### Related files

Manifest

*   `pyproject.toml`

Lock

*   `uv.lock`

#### Classification

Development

Transitive

#### Automatic Remediation

Direct

Indirect

#### Supported features

*   None

#### Known Limitations

*   Workspaces are not supported.
*   Non-registry dependencies are not supported.

Early Access

This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
