# Terraform Cloud | Cycode Docs

Source: https://docs.cycode.com/integrations/cloud-and-infrastructure-services/terraform-cloud

---

# Terraform Cloud

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/cloud-and-infrastructure-services/terraform-cloud.md "Edit this page")

Updated on Jul 14, 2024 • Published on Jul 14, 2024

* * *

Terraform Cloud is a leading infrastructure-as-code (IaC) tool that allows declarative syntax to provision, deploy, and scale cloud resources. Cycode’s integration with Terraform Cloud helps to provide visibility into Terraform Cloud configurations, to detect drift detection between deployment environments, which helps to improve governance, eliminate sources of potential vulnerabilities, and ensures that developer time is not wasted debugging IaC misconfiguration.

One of the main benefits of using IaC tools, such as Terraform, to manage and facilitate configuration changes between deployment environments is that these tools are much faster and less accident-prone than prior technologies. However, IaC is far from foolproof, as users can still make changes to an environment directly. For example, if production configurations are changed on a provisioning system via UI or a CLI interface, these changes may introduce configuration drift. In IaC, this drift occurs whenever a mismatch exists between the actual runtime configuration and predetermined build-time states.

Cycode helps establish strong governance over every point of the IaC lifecycle by creating an inventory of all users, contributors, teams, organizations, and repositories in your organization; this governance extends into providing more oversight into changes made to code as a means of further protecting key code. Cycode also helps you automatically audit access privileges to identify and reduce excessive, unused privileges and implement separation of duties. These improvements help apply security best practices for IaC code when using Terraform, Kubernetes, and CloudFormation.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating with Cycode:

Permissions

Explanation

Personal Api Token

Integration only requires the use of a personal API token in CircleCI.

## Integrating with Terraform Cloud [Copied!](#integrating-with-terraform-cloud "Copy link to this section")

1.  Go to **Settings > Integrations** and then click **Add Integration**.
    
2.  This displays the Add Integration window. Under the Cloud section, click **Terraform Cloud**.
    

![](/assets/a683443-image.png)

![](/assets/ee0a4c6-image.png)

3.  Fill in the form and click **Done**. Once you confirm the integration, the integrations area reloads and shows that Terraform is connected.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
