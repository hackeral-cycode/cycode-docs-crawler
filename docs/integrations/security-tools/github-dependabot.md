# GitHub Dependabot | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/github-dependabot

---

# GitHub Dependabot

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/github-dependabot.md "Edit this page")

Updated on May 12, 2025 • Published on May 12, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector for GitHub Dependabot enables pulling SCA vulnerabilities from GitHub Dependabot so you can view and manage them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

SCA

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

You must have a GitHub SCM connector connected and in place.

## Permissions [Copied!](#permissions "Copy link to this section")

Note

The Dependabot connector uses the same app as the GitHub SCM integration. The existing app doesn’t need any updates to retrieve vulnerabilities from Dependabot.

Permission

Access

Dependabot alerts

Read-Only

## Connect GitHub Dependabot to Cycode [Copied!](#connect-github-dependabot-to-cycode "Copy link to this section")

Note

If GitHub SCM is already connected, it provides all the permissions that are required to connect GitHub Dependabot.

*   Select the GitHub organization from which you want to retrieve SCA vulnerabilities and click **Sync Organizations**.

![](/assets/1dec51c-image.png)

## FAQs [Copied!](#faqs "Copy link to this section")

### How can I search for Dependabot vulnerabilities in Cycode? [Copied!](#how-can-i-search-for-dependabot-vulnerabilities-in-cycode "Copy link to this section")

In the SCA violations category, search by **Security Tool** > **Dependabot**.

![](/assets/2038c52-image.png)

![](/assets/3942e92-image.png)

### How do I add new repositories to the connector? [Copied!](#how-do-i-add-new-repositories-to-the-connector "Copy link to this section")

If the repository is part of an organization that is connected, Cycode will retrieve the associated SCA vulnerabilities.

### How do I delete the integration? [Copied!](#how-do-i-delete-the-integration "Copy link to this section")

Go to the connector page and uncheck the organization that you want to delete, then click **Save Changes**.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
