# SCA PR scanners | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/pull-request-pr-scanning/sca-pr-scanners

---

# SCA PR scanners

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/pull-request-pr-scanning/sca-pr-scanners.md "Edit this page")

Updated on Sep 24, 2024 • Published on Sep 24, 2024

* * *

Important

Warning Failed status checks fail the Pull Request/Merge Request (PR) by default.

When setting up SCA scanning, you’ll be able to configure two types of scanning:

*   Dependency vulnerability scanning
*   License compliance scanning

Once you’ve integrated with your SCA registries, you’ll have the ability to tell Cycode to scan the images stored in your registries.

## Supported ecosystems [Copied!](#supported-ecosystems "Copy link to this section")

SCA PR scanning is currently available for the following ecosystems: NPM, Ruby, Python, Maven and Go. See Which SCA ecosystems are supported? for details.

## Dependency vulnerability scanning [Copied!](#dependency-vulnerability-scanning "Copy link to this section")

The goal of dependency vulnerability scanning is to proactively identify and address security weaknesses in a software application before they can be exploited by attackers. By keeping dependencies up-to-date and addressing known vulnerabilities, development teams can enhance the overall security posture of their software. Many tools and services are available to automate this process, making it easier for development teams to incorporate dependency vulnerability scanning into their workflows.

Here’s an example of a dependency vulnerability:

![](/assets/image-49.png)

### Setting up dependency vulnerability scanning [Copied!](#setting-up-dependency-vulnerability-scanning "Copy link to this section")

Administrator users (only) will need to set up scanning using the [dependency vulnerability scanning settings](/scanners/ast-application-security-testing/sca-software-composition-analysis/configure-the-sca-scanner/scan-prs-for-dependency-vulnerabilities) . These settings are also used to set up how these violations are dismissed.

### Dismissing dependency vulnerability violations [Copied!](#dismissing-dependency-vulnerability-violations "Copy link to this section")

*   **#cycode\_vulnerable\_package\_fix\_this\_violation** - Fix this violation via a commit to this branch
*   **#cycode\_ignore\_package\_everywhere** - Applies to this manifest for this package for all requests in your repository
*   **#cycode\_ignore\_manifest\_here** - Applies to this manifest in this request only
*   **#cycode\_ignore\_package\_here** - Applies to this manifest for this package in this request only

![](/assets/image-48.png)

## License compliance scanning [Copied!](#license-compliance-scanning "Copy link to this section")

License compliance scanning is a process used to identify and manage the licenses associated with the software components used in a project. It’s particularly important in the context of open-source software, where different licenses come with different requirements, such as attribution, sharing modifications, or making the source code available

Here’s an example of a license compliance issue:

![](/assets/image-47.png)

### Setting up license compliance scanning [Copied!](#setting-up-license-compliance-scanning "Copy link to this section")

Administrator users (only) will need to set up scanning using the [license compliance scanning setting](/scanners/ast-application-security-testing/sca-software-composition-analysis/configure-the-sca-scanner/scan-prs-for-license-compliance) . These settings are also used to set up how these violations are dismissed.

### Dismissing license compliance violations [Copied!](#dismissing-license-compliance-violations "Copy link to this section")

*   **#cycode\_ignore\_non\_permissive\_license\_use** - Applies to this manifest for this package in this request

![](/assets/image-46.png)

## SCA scanner FAQs [Copied!](#sca-scanner-faqs "Copy link to this section")

**Q: Does Cycode scan SCA when the main branch points to a side branch?**  
A: Yes, depending on the SCM, our system will need some time to be updated with the new main branch.  
In addition, a change in the manifest file will need to take place for the scan to trigger.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
