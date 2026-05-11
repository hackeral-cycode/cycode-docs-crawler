# How does automatic resolution work? | Cycode Docs

Source: https://docs.cycode.com/policies/cycode-policies-faqs/how-does-automatic-resolution-work

---

# How does automatic resolution work?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/policies/cycode-policies-faqs/how-does-automatic-resolution-work.md "Edit this page")

Updated on Oct 15, 2024 • Published on Oct 15, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Cycode’s Automatic Resolution capability streamlines your vulnerability management process by automatically transitioning identified security issues to a “resolved” status when a previously detected vulnerability is successfully mitigated within your codebase. This is particularly important in organizations that have a lot of cloud assets, and find it difficult to communicate with all relevant teams. Automatic resolution helps the organization to focus on the bottleneck and to resolve security gaps quickly. Additionally, using automation helps to reduce Mean Time to Remediation (MTTR), making it easier for security teams to enforce SLA.

### What automatic resolution offers [Copied!](#what-automatic-resolution-offers "Copy link to this section")

Automatic resolution functions differently **depending on the type of violation** and the **security module in use**. In this knowledge base article, we’ll delve into the specifics of automatic resolution based on the detected violation type.

*   **Efficient Remediation:** When a reported vulnerability is successfully fixed, our system recognizes this proactive measure.
    
*   **Enhanced Risk Management:** A harmonious collaboration between your application security and R&D teams is vital for the success of your security program. This collaboration ensures that your security team remains aligned on the addressed issues, allowing them to focus on the remaining risks.
    
*   **Customizable Control:** Tailoring the remediation process to match the unique requirements of different teams is vital. Cycode provides various configuration options, allowing teams to decide whether just removing a secret from code is enough or if they require validation of the secret’s deactivation.
    

## Automatic resolution by category [Copied!](#automatic-resolution-by-category "Copy link to this section")

### Secrets [Copied!](#secrets "Copy link to this section")

Cycode’s automatic resolution feature empowers you to swiftly and easily resolve secrets wherever they’re discovered. You can configure your systems to automatically transition violations to a “resolved” status when a previously detected secret is addressed.

Cycode defines several scenarios for the automatic resolution of hard-coded secrets as detailed below.

#### Removed asset [Copied!](#removed-asset "Copy link to this section")

When the asset containing the secret is removed, such as a file in cloud storage, container images, code repositories, or code branches, the detected secret violation is automatically marked as resolved.

#### Secret removed from code [Copied!](#secret-removed-from-code "Copy link to this section")

One effective mitigation for hard-coded secrets is removing them from the code and securely storing them, such as with a secret management tool. While in this case the secret is still exposed in the code history, some teams might find this mitigation as sufficient. Therefore, Cycode allows teams to enable automatic remediation for removed secrets.

#### Invalid secret [Copied!](#invalid-secret "Copy link to this section")

For every secret detected, the platform checks the secret’s validity. When a secret is found to be invalid, it poses no security risk. Therefore, Cycode allows teams to enable automatic remediation for invalid secrets.

#### Deactivated secret [Copied!](#deactivated-secret "Copy link to this section")

While invalid secrets do not pose a risk, some teams might prefer to automatically resolve invalid secrets (but only if Cycode initially validated them as active and identified their deactivation when they then became invalid).

[Learn more about how to set up automatic resolution.](/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-auto-resolution)

### SAST violations [Copied!](#sast-violations "Copy link to this section")

The Static Application Security Testing (SAST) engine operates by scanning for vulnerabilities in the default branch of your codebase. Upon detecting any issues, these are flagged either directly within the platform or within a pull request (PR) for better visibility. When the issue is fixed, Cycode automatically marks it as resolved.

Upon each new code pushed to the branch, a re-scan is triggered to analyze any changes. If previously identified vulnerabilities have been modified in the new code, the system auto-resolves the prior alerts. This mechanism operates on the rationale that if problematic lines of code have been changed, it’s likely the vulnerability has been addressed. However, if new vulnerabilities surface due to changes, fresh alerts are generated to notify developers. Through this continuous scanning, flagging, and auto-resolving cycle, the SAST engine ensures a robust security posture throughout the development lifecycle.

### SCA violations [Copied!](#sca-violations "Copy link to this section")

The Software Composition Analysis (SCA) engine scans for vulnerabilities in third-party packages and libraries integrated into your project. Upon detecting issues, they’re flagged within the platform or within pull requests for improved visibility. When vulnerable packages are removed or upgraded, Cycode automatically marks the relevant vulnerabilities as resolved.

With each new code pushed to the branch, a re-scan is triggered to analyze changes. If previously identified vulnerable packages have been removed, the engine auto-resolves the prior alerts. In cases where vulnerable packages are replaced with newer versions containing vulnerabilities, new alerts are generated. Through this continuous cycle of scanning, flagging, and auto-resolving, the SCA engine aids in maintaining a strong security posture throughout the development lifecycle.

Tip

In addition to automatic resolution, Cycode offers an automated remediation process for SCA vulnerabilities. When a detected vulnerability is resolved in a newer package version, Cycode enables users to automatically create a Pull Request (PR) to update the code to use the newer package version. Using Cycode Workflows, users can automate this process and generate PR fixes for such vulnerabilities.

### CI/CD Security violations [Copied!](#cicd-security-violations "Copy link to this section")

Cycode effectively conducts configuration scanning and enforces best practices to identify insecure configurations in SCMs and CI/CD tools. It also identifies risks related to identity and access management, provides tampering detection and prevention, and analyzes pipeline compositions, among other things.

Once a configuration or a setting is changed to a secure one, the corresponding violation is automatically resolved. Cycode offers remediation actions that can be performed from the platform to fix the issues. These actions can be triggered automatically to enforce secure configurations as part of a workflow.

If an integration is deleted, all related CI/CD violations are removed from the platform.

### Infrastructure as Code (Iac) [Copied!](#infrastructure-as-code-iac "Copy link to this section")

When an Infrastructure as Code (IaC) resource that’s responsible for a violation is either fixed or removed, the detected violation is automatically marked as resolved. In other words, when you correct the issue or remove the problematic resource from your infrastructure code, the system acknowledges that the problem has been addressed and marks it as resolved.

Currently, the “auto-resolve” feature for IaC provider Kubernetes policies is not supported (i.e- `Privilege Escalation Enabled on Kubernetes Container`), manually resolving is needed to resolve the policies in question.

### Cloud Security [Copied!](#cloud-security "Copy link to this section")

Cloud resources are checked continuously for violations, and their security issues are displayed as IaC violations (Cycode utilizes the roughly 500 IaC policies to scan your cloud, using the cloud resources, turning them into an IaC representation, and then running the IaC scans and other functions on them. The results of these actions are displayed within the Cycode IaC UI). The automatic resolution mechanism for cloud security issues also uses the same concept, so if a cloud resource is fixed or removed - the violation is resolved.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
