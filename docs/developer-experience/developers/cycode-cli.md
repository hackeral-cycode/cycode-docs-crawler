# Cycode CLI | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-cli

---

# Cycode CLI

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-cli/_index.md "Edit this page")

Updated on Apr 23, 2026 • Published on Mar 28, 2024

* * *

The Cycode Command Line Interface (CLI) is a tool you install locally to scan your code for secrets, IaC misconfigurations, SCA vulnerabilities, and SAST issues — directly from your terminal. Use it for local development, pre-commit hooks, and ad-hoc security checks before changes leave your machine.

## Who is this for? [Copied!](#who-is-this-for "Copy link to this section")

### For developers [Copied!](#for-developers "Copy link to this section")

Install the CLI, run local scans, and set up pre-commit hooks to catch violations before they leave your machine.

[Get started with the CLI](/developer-experience/developers/cycode-cli/getting-started/)

### For security teams [Copied!](#for-security-teams "Copy link to this section")

Enforce scan policies in CI/CD pipelines, set up server-side pre-receive hooks, and generate compliance reports.

[CLI for security administrators](/developer-experience/security-administrators/cycode-cli/)

## Supported scan types [Copied!](#supported-scan-types "Copy link to this section")

Scan type

Description

**Secrets**

Identifies patterns that match known secret formats (for example API keys, private keys, and passwords) within tracked files and historical commits.

**Infrastructure as Code (IaC)**

Analyzes configuration files in IaC tools (for example Terraform and CloudFormation) to detect deviations from security best practices and policies.

**Software Composition Analysis (SCA)**

Examines project dependency files (for example package.json and pom.xml) to identify libraries and packages with known publicly disclosed vulnerabilities.

**Static Application Security Testing (SAST)**

Conducts static code analysis on source code files to identify security weaknesses such as injection flaws, cross-site scripting, and insecure deserialization.

## Getting started with the Cycode CLI [Copied!](#getting-started-with-the-cycode-cli "Copy link to this section")

You can install and configure the Cycode CLI to suit your specific organizational needs. The following table describes the key features and links to the relevant documentation.

Feature

Description

**Authentication**

Configure your local machine to authenticate with Cycode to authorize scan activities, retrieve policies, and report results. For more information, go to [Authentication](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#using-the-auth-command) .

**Scan targets**

Configure scanning for different scopes, including entire Git repositories, specified file paths, and the history of Git commits for secrets. For more information, go to [Scan command](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#scan-command) .

**Pre-commit hook**

Configure the CLI as a Git pre-commit hook to automatically scan staged changes before a commit, blocking commits if violations exceed a configured threshold. For more information, go to [Install pre-commit hook](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#install-pre-commit-hook) .

**Reporting**

Output scan results in various formats (plain text, JSON, formatted tables) and generate SBOM reports. For more information, go to [Report option](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#cycode-report-option) .

**Severity-based filtering**

Specify a minimum severity level for reported findings to control the verbosity of the output. For more information, go to [Severity option](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#severity-option) .

**Exclusion mechanisms**

Ignore specific findings based on the detected value, the file path, or the rule identifier that triggered the detection. For more information, go to [Ignoring scan results](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#ignoring-scan-results) .

**CI/CD integration**

Add security gates to your CI/CD pipelines to catch vulnerabilities before they merge.

## CLI scan results vs. SCM integration results [Copied!](#cli-scan-results-vs-scm-integration-results "Copy link to this section")

The Cycode CLI is designed as a developer-focused tool for local scanning and ad-hoc security checks. It is not intended to replace [native SCM integrations](/integrations/scm-source-code-management-tools/) in CI/CD pipelines.

When you run a scan using the CLI, the results appear only in the [Dev Activity > CLI Logs](/developer-experience/security-administrators/monitor-developer-activity/cli-logs) view. CLI scan results do not populate the **Violations** tab.

The **Violations** tab is populated exclusively by native SCM integrations, which scan your repositories on push events, pull request events, and scheduled scans. These integrations provide continuous monitoring, PR scanning, merge blocking, and centralized violation management.

### Exception: SCA monitor mode [Copied!](#exception-sca-monitor-mode "Copy link to this section")

The only exception to this behavior is Software Composition Analysis (SCA) scans using the `--monitor` flag. When you run an SCA scan in monitor mode, the results are pushed to the **Violations** tab.

This capability exists because SCA scanning sometimes requires local execution to resolve dependencies from private registries that are not accessible from the Cycode platform. In these cases, the `--monitor` flag enables you to run the scan locally while still reporting the results to the platform.

For more information, go to [Push CLI scan results to the platform with `--monitor`](/cli/reference/push-cli-scan-results-with-monitor/) .

Note

CLI scan results appear in **Settings > CLI Logs**, not in the **Violations** tab. The only exception is SCA scans run with `--monitor`, which push results to the Violations tab to support environments with private registries.

For more information about the `--monitor` flag, go to the [Cycode CLI docs in GitHub](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#scan-command) .

## CLI vs. native SCM integrations [Copied!](#cli-vs-native-scm-integrations "Copy link to this section")

The following table summarizes the differences between CLI scans and native SCM integration scans.

Capability

Cycode CLI

Native SCM integration

Results in Violations tab

No\*

Yes

Results in Dev Activity > CLI Logs

Yes

No

CI/CD pipeline scanning

[Yes](/cli/reference/cicd-pipeline)

Yes

Local and ad-hoc scanning

Yes

No

Pre-commit hooks

Yes

No

PR scanning and merge blocking

No

Yes

Continuous repository monitoring

No

Yes

*   Exception: SCA scans with `--monitor` mode.

To set up native SCM integrations for your CI/CD pipelines, go to [Integrations](/integrations/scm-source-code-management-tools/) .

## Workflows and policies in the CLI [Copied!](#workflows-and-policies-in-the-cli "Copy link to this section")

Cycode workflows apply to CLI and IDE scans. For example, a workflow that ignores a SAST finding for a specific repository is honored by the CLI and the IDE extension.

SAST custom policies and other platform policies are pulled and applied by the CLI at scan time. Exporting the raw YAML policy definitions through the API is not currently supported.

Custom policies created with Graph Query (RIG-based policies) are not applied to CLI scans. Violations from those policies surface only in the Cycode platform.

The CLI does not currently apply ignores set in the Cycode UI for individual violations. Only ignores produced via the merged-PR ignore flow are respected by CLI scans.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
