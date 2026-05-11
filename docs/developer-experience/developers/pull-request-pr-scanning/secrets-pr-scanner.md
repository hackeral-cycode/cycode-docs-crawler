# Secrets PR scanner | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/pull-request-pr-scanning/secrets-pr-scanner

---

# Secrets PR scanner

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/pull-request-pr-scanning/secrets-pr-scanner.md "Edit this page")

Updated on Nov 13, 2024 • Published on Nov 13, 2024

* * *

When using Cycode to scan your pull requests (PRs) for secrets, Cycode scans the specific commit and if a secret is found, alerts within the PR itself.

Important

By default, any failed status check will fail the PR/merge request. If you disable this feature, Cycode continues to integrate and check your repositories for violations but does not run status checks per PR.

Here’s an example of a secret detected in a PR scan:

![](/assets/image-40.png)

## Setting up secrets PR scanning [Copied!](#setting-up-secrets-pr-scanning "Copy link to this section")

Administrator users (only) will need to set up PR scanning for Secrets using the PR Settings under Secrets. These settings are also used to set up how secret violations are dismissed.

[Learn more about enabling PR scanning for secrets](https://youtu.be/YtFPgBUqwik)

## Dismissing secret violations [Copied!](#dismissing-secret-violations "Copy link to this section")

*   **#cycode\_secret\_false\_positive** - mark this value to be ignored across all repositories that are integrated with Cycode. This is useful for false positives where the secret value that was found is not correct (i.e. the value is clearly not a secret).
*   **#cycode\_secret\_ignore\_here** - mark this value as a low-risk for this PR only. This is useful when the value is a real secret, but poses a low risk because it is test code or other similar reasons.
*   **#cycode\_secret\_revoked** - mark this secret as no longer a risk because it has been revoked. This is then applied across all repositories that are integrated with Cycode.
*   **#cycode\_secret\_ignore\_everywhere** - ignore this secret for any other reason across all repositories that are integrated with Cycode. This is useful if this secret is known to be used for testing purposes and is not considered a threat

![](/assets/image-41.png)

## Viewing the AI confidence score in PRs [Copied!](#viewing-the-ai-confidence-score-in-prs "Copy link to this section")

For each secret violation detected, if the detected scret has a confidence score (provided by the Cycode AI), the comment for the violation will also include the confidence score under the “severity” property:  
![](/assets/secret-ai-confidence-score-in-pr.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
