# HackerOne | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/hackerone

---

# HackerOne

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/hackerone.md "Edit this page")

Updated on May 12, 2025 • Published on Nov 10, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s connector with HackerOne enables you to pull vulnerabilities from HackerOne and to correlate them in Cycode.

Note

This is a one-way integration from the third-party API to Cycode.

## Domain [Copied!](#domain "Copy link to this section")

Bug bounty

## Get an API token [Copied!](#get-an-api-token "Copy link to this section")

1.  Log in to your HackerOne account.
2.  On the left side-bar, click on **Organization Settings** > **API Tokens** > **Create API Token**.  
    ![](/assets/image%28615%29.png)
3.  Provide an Identifier and select the Program access and permissions groups for the token –> Click on **Add API token**.

Note

Please make sure you copy and store the Identifier you provided. You will need it in order to authenticate the connector.

![](/assets/image%28616%29.png)

4.  Copy the API token and store it somewhere safe.

## FAQs [Copied!](#faqs "Copy link to this section")

### How are policy names set for HackerOne? [Copied!](#how-are-policy-names-set-for-hackerone "Copy link to this section")

Policies for Bug Bounty are created in Cycode at the moment you connect your Bug Bounty connector. In HackerOne, each policy is determined by the **weakness** name.  
For example, the image below shwos how to compare a vulneability in HackerOne to a violation in Cycode:  
![](/assets/image%28656%29.png)

![](/assets/image%28657%29.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
