# IaC (Infrastructure as Code) | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code

---

# IaC (Infrastructure as Code)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/_index.md "Edit this page")

Updated on May 5, 2025 • Published on Nov 24, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Infrastructure as Code (IaC) refers to the process of managing and provisioning IT infrastructure, such as compute, storage, networking, etc., through machine-readable definition files describing the desired infrastructure, rather than manual one-time operations. Organizations utilize IaC to manage their IT infrastructure as software, boosting their teams’ efficiency by automating provisioning. One drawback behind this approach is that these same tools can also amplify mistakes, for example insecure configurations (a.k.a. misconfigurations) made to the company’s security configuration. Any misconfigurations in IaC code can then end up being replicated across cloud environments, at scale, throughout the entire deployment pipeline.

Cycode IaC enables security by identifying configuration errors and fixing them throughout the development lifecycle: from developer workflows to production, ensuring configurations are secure and adhere to best practices.

Cycode helps AppSec and DevOps teams – as well as developers– to easily find and fix IaC misconfigurations with automated IaC security scanning that uncovers and alerts your team to hundreds of misconfigurations, such as publicly accessible storage buckets, critical data that is not encrypted at rest, weak password policies, and non-rotated encryption keys.

The features supported in Cycode for IaC include:

*   Integration with leading IaC services such as Terraform, AWS CloudFormation, Dockerfiles, ARM, and Kubernetes YAML files.
    
*   Automated IaC security scanning to identify and fix configuration errors throughout the development lifecycle.
    
*   Embedding IaC scanning into developers’ workflows to ensure new commits and merge requests are scanned for misconfigurations.
    
*   Terraform Plan scanning to provide a comprehensive overview of impending changes and identify potential misconfigurations.
    
*   Integration with source code management (SCM) tools for seamless scanning upon pull requests.
    
*   Support for local scans using the Cycode CLI, which can be integrated into existing CI/CD pipelines.
    
*   Identification and remediation of configuration drift through integration with Terraform Cloud.
    

Note that AWS CDK is not currently supported.

## How it works [Copied!](#how-it-works "Copy link to this section")

### Setting IaC policies to prevent misconfigurations [Copied!](#setting-iac-policies-to-prevent-misconfigurations "Copy link to this section")

IaC configuration policies follow configuration best practices such as the principle of least privilege and updating to the latest version of software. These configurations grow increasingly complex, leading to the risk of compliance breaches, data loss, or service failures, which increases the importance of setting [policies that prevent misconfiguration](/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/) .

By embedding IaC scanning into your developers’ workflows, you can ensure that all new commits and merge requests are scanned for misconfigurations and adhere to industry IaC best practices such as NIST and CIS or custom build rules.

If a scan results in IaC policy violation, Cycode automatically displays these results to the developers as well as the code fix required to remedy the issue.

Here’s an example of the code fix:

![](/assets/infrastructure-as-code-iac-image-92xla04r.png)

And here’s an example of Cycode’s suggested resolution:

![](/assets/infrastructure-as-code-iac-image-6b42fjrh.png)

### Which IaC platforms are supported? [Copied!](#which-iac-platforms-are-supported "Copy link to this section")

Cycode integrates with the leading IaC services, including Terraform, AWS CloudFormation, Dockerfiles, ARM and Kubernetes YAML files. These are automatically scanned when the source code management (SCM) tools are integrated with Cycode (as detailed in the [SCM integration page](/integrations/scm-source-code-management-tools/) ).

### Code scanning [Copied!](#code-scanning "Copy link to this section")

Cycode’s developer-first approach helps to secure IaC code directly in developer workflows, by scanning for issues and blocking vulnerable code before it reaches the main branch.

#### Upon Pull Request (PR) [Copied!](#upon-pull-request-pr "Copy link to this section")

Once you integrate with your source code, you can control which repositories and organizations are monitored by Cycode as part of the pull request/merge request (PR) status check scanners (when enabled, every PR will be scanned for IaC misconfigurations). Depending on the settings set by the security admin, developers can then manage IaC misconfigurations in their pull requests by selecting the [relevant action(s)](/developer-experience/developers/pull-request-pr-scanning/iac-pr-scanner#setting-up-iac-pr-scanning) .

Using the IaC tools, you can automatically open pull requests with the code fix needed to remediate the specific misconfigurations detected in your IaC. This keeps your developers focused on efficiency and your infrastructure in line with best practices.

#### Local/ upon CI (Using CLI) [Copied!](#local-upon-ci-using-cli "Copy link to this section")

Efficiency is key to modern security practices, and the [Cycode CLI](/developer-experience/developers/cycode-cli/) unlocks automation options that streamline your workflows. By utilizing the –output json option, the output becomes programmatically accessible, allowing you to seamlessly integrate the scanning process into your existing pipelines and to run the scan locally.

### Terraform Plan scan [Copied!](#terraform-plan-scan "Copy link to this section")

While analyzing code is essential, Terraform Plan files contain dynamic elements, such as injected modules and variables, that can’t be fully assessed from the static code alone. By scanning Terraform Plans, you gain a comprehensive overview of impending changes, encompassing the modules and variables you’ve incorporated. This provides a holistic understanding of the potential impact before changes are applied, ensuring a stronger security posture.

#### How does the Terraform Plan work with Cycode’s CLI? [Copied!](#how-does-the-terraform-plan-work-with-cycodes-cli "Copy link to this section")

Terraform Plan scanning is delivered using the Cycode CLI, which integrates seamlessly with your CI/CD pipeline settings.. By utilizing the –output json option, the output becomes programmatically accessible, allowing you to seamlessly integrate the scanning process into your existing pipelines.

### Identifying and remediating configuration drift [Copied!](#identifying-and-remediating-configuration-drift "Copy link to this section")

Cycode’s integration with [Terraform Cloud](/integrations/cloud-and-infrastructure-services/terraform-cloud) enables you to identify configuration drift. This means you can continuously compare IaC configurations to those in production infrastructure to identify drift — a situation where the configurations are no longer aligned, often in an insecure way. If found, Cycode alerts your teams so these environments can be remediated.

## What’s in it for you? [Copied!](#whats-in-it-for-you "Copy link to this section")

Cycode’s IaC solution offers significant value to organizations by addressing the challenges associated with the dynamic and automated nature of IaC deployments. As organizations increasingly adopt IaC for managing their IT infrastructure, the risk of misconfigurations that could lead to security vulnerabilities also rises. Cycode IaC provides security by automatically identifying and fixing configuration errors throughout the development lifecycle. With automated IaC security scanning, Cycode detects hundreds of misconfigurations, including publicly accessible storage buckets, unencrypted critical data, weak password policies, and non-rotated encryption keys, ensuring that configurations adhere to industry best practices such as NIST and CIS or custom build rules.

Cycode’s approach involves setting IaC policies to prevent misconfigurations, following configuration best practices such as the principle of least privilege and staying updated on software versions. By embedding IaC scanning into developers’ workflows, Cycode ensures that all new commits and merge requests are scanned for misconfigurations, providing immediate feedback to developers.

Supported IaC platforms include Terraform, AWS CloudFormation, Dockerfiles, ARM, and Kubernetes YAML files. Cycode’s integration with source code management tools allows for seamless scanning upon pull requests, ensuring that developers can manage IaC misconfigurations efficiently.

The Cycode CLI further enhances efficiency, offering automation options for local scans and integration into existing pipelines. Additionally, Cycode’s Terraform Plan scanning provides a comprehensive overview of impending changes, allowing organizations to identify and remediate configuration drift, ultimately strengthening their overall security posture.

## Examples for customers use cases [Copied!](#examples-for-customers-use-cases "Copy link to this section")

#### Use Case 1: Preventing IaC misconfigurations in developer workflows [Copied!](#use-case-1-preventing-iac-misconfigurations-in-developer-workflows "Copy link to this section")

Organizations face the challenge of preventing misconfigurations in IaC deployments, particularly as these misconfigurations can stem from the problems in the code used in configurations.

**Cycode’s solution:**

*   Cycode’s IaC solution is designed to prevent misconfigurations right from the developer’s workflow. By scanning code used in configurations, such as Terraform files, during the development phase, Cycode ensures that potential misconfigurations are identified and addressed early in the deployment lifecycle.
    
*   Policy Enforcement: Organizations can establish IaC policies within Cycode, adhering to industry best practices and custom rules. These policies help prevent misconfigurations related to access controls, encryption, and other critical aspects by analyzing the code set up in configurations.
    
*   Enhanced Code Quality: By focusing on the code used in configurations, Cycode promotes better coding practices, leading to improved code quality and reduced security risks associated with misconfigurations.
    

#### Use Case 2: Ensuring secure IaC deployments with Terraform plan scanning [Copied!](#use-case-2-ensuring-secure-iac-deployments-with-terraform-plan-scanning "Copy link to this section")

Organizations need to ensure the secure setup of their IaC deployments, with a specific focus on the code used in configurations, especially in the dynamic environment of Terraform Plans.

**Cycode’s solution**:

*   Terraform Plan Scanning: Cycode addresses the challenge of dynamic IaC environments, such as Terraform Plans, by providing comprehensive scanning capabilities. By focusing on the code used in configurations, Cycode’s Terraform Plan scanning identifies potential misconfigurations, including injected modules and variables, providing a holistic understanding of changes before they are applied.
    
*   Integration with CI/CD Pipelines: The Cycode CLI seamlessly integrates with CI/CD pipelines, enabling organizations to incorporate Terraform Plan scanning into their existing workflows. By utilizing the –output json option, teams can programmatically access scan results, ensuring a smooth integration process.
    
*   Proactive Risk Mitigation: Cycode’s Terraform Plan scanning adds significant value by proactively identifying potential misconfigurations in dynamic IaC environments, allowing organizations to assess the impact before changes are applied, thereby mitigating risks.
    
*   Holistic Security Posture: By focusing on the code used in configurations, Cycode ensures a holistic approach to security, promoting a comprehensive understanding of impending changes and helping organizations maintain a strong and secure IaC deployment environment.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
