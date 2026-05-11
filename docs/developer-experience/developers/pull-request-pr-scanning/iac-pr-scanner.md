# IaC PR scanner | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/pull-request-pr-scanning/iac-pr-scanner

---

# IaC PR scanner

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/pull-request-pr-scanning/iac-pr-scanner.md "Edit this page")

Updated on Nov 17, 2024 • Published on Nov 17, 2024

* * *

## Infrastructure as Code (IaC) scanning [Copied!](#infrastructure-as-code-iac-scanning "Copy link to this section")

Infrastructure as Code (IaC) scanning refers to the process of analyzing and assessing the security of infrastructure code written using Infrastructure as Code principles. IaC is a key practice in modern DevOps and cloud environments, where infrastructure is defined and managed using code rather than manual processes.

Important

**Warning** Failed status checks fail the Pull Request/Merge Request (PR) by default.

Here’s an example of an IaC scan result:

![](/assets/image-50.png)

📘 **Note**  
If you disable this feature, Cycode continues to integrate and check your repositories for violations but does not run status checks per PR.

## Setting up IaC PR Scanning [Copied!](#setting-up-iac-pr-scanning "Copy link to this section")

Administrator users (only) will need to set up PR scanning for IaC using the [PR Settings](/scanners/ast-application-security-testing/iac-infrastructure-as-code/configure-the-iac-scanner) under IaC. These settings are also used to set up how IaC violations are dismissed.

## Dismissing IaC violations [Copied!](#dismissing-iac-violations "Copy link to this section")

*   **#cycode\_iac\_fix\_this\_violation** - fix this IaC violation, within the same commit. Note that this option will be available only for the IaC policies/violations that we know how to fix. There are those that fix/remediation is not supported yet.
*   **#cycode\_ignore\_violation\_for\_resource\_everywhere** - Applies to this resource for this violation for all repositories in your organization
*   **#cycode\_ignore\_violation\_for\_resource\_here** - Applies to this resource for this violation in this request only
*   **#cycode\_ignore\_resource\_everywhere** - Applies to this resource for all repositories in your organization
*   **#cycode\_iac\_false\_positive** - Applies to this resource for this violation for all repositories in your organization

![](/assets/image-51.png)

### Mapped file extensions [Copied!](#mapped-file-extensions "Copy link to this section")

The table below provides the mapped file extensions for each IaC provider:

IaC Provider

File Conventions

DockerFile

Extensions: `".dockerfile", ".containerfile"` Names: `"Dockerfile", "Containerfile"`

Terraform

Only in an extension tf: `".tf"`

Jenkins

Only if the file has the name jenkins: “`Jenkinsfile”`

ARM (Azure Resource Manager) AWSCloudFormation Kubernetes

JSON files with the following extensions: `".json"`

Terraform Configuration Terraform State

JSON files with the following extensions: `".tf.json"`

CircleCI Configuration AWSCloudFormation GitHub Action Workflow Kubernetes

Yaml files with the following extensions: `".yaml", ".yml"`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
