# Which implementation do the GitHub Enterprise Cloud and Cycode SaaS and the GitHub Enterprise Cloud and Cycode Broker use? | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/frequently-asked-questions-faq/which-implementation-do-the-github-enterprise-cloud-and-cycode-saas-and-the-github-enterprise-cloud

---

# Which implementation do the GitHub Enterprise Cloud and Cycode SaaS and the GitHub Enterprise Cloud and Cycode Broker use?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/frequently-asked-questions-faq/which-implementation-do-the-github-enterprise-cloud-and-cycode-saas-and-the-github-enterprise-cloud.md "Edit this page")

Updated on Nov 25, 2024 • Published on May 1, 2024

* * *

## Answer [Copied!](#answer "Copy link to this section")

Cycode uses a JWT token during initial integration and token rotation calls. The JWT is created using the application ID and application private key and has a 10 minute TTL.

We then pass the JWT in a POST request to `installations/<app_installation_id>/access_tokens`, which returns an installation token.

Note that we don’t supply any TTL parameters to this call, so the TTL for this token is probably the default value that GitHub decides (see [here](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app#generating-an-installation-access-token) ).

In any case, Cycode rotates this token every 30 minutes, so each token is “alive” for 30 minutes only.

Note that we don’t use a user token for a GitHub app.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
