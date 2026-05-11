# How to unblock PRs scanned by Cycode | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/frequently-asked-questions-faq/scanner-faqs/how-to-unblock-prs-scanned-by-cycode

---

# How to unblock PRs scanned by Cycode

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/frequently-asked-questions-faq/scanner-faqs/how-to-unblock-prs-scanned-by-cycode.md "Edit this page")

Updated on Aug 19, 2024 • Published on Apr 8, 2024

* * *

In cases where a developer’s PR’s are blocked by policy in your organization, sometimes a violation notification is actually a false positive or there are issues with the scanner. As such, there are a number of ways in which developers can unblock PRs depending on the use case, which you can share with your developers.

**Use case 1**: If the developer believes the violation is a false positive or irrelevant, depending on the tags you’ve defined in the settings, the developer can then mark the violation with the relevant tag, e.g., for secrets, the developer could mark `#cycode_secret_ignore_here`. The developer can then take this tag and reply using interactive comments, thereby resolving the issue in the PR (assuming all the comments in the PR have been addressed).

1.  Use one of the following values in a comment in the PR to rescan the current supported pull request scan types:
    
    Comment
    
    Description
    
    **#cycode\_iac\_rescan**
    
    Execute an IaC rescan
    
    **#cycode\_insecure\_pipeline\_violation\_rescan**
    
    Execute CI/CD Configuration rescan
    
    **#cycode\_secret\_rescan**
    
    Execute a secrets rescan
    
    **#cycode\_vulnerable\_package\_rescan**
    
    Execute SCA rescan
    

**Use case 2**: If the first step doesn’t work, or the PR scan is not listed, then use the following comment to skip the scan:

Comment

Description

**#cycode\_unfail\_me**

Completely skips the Cycode PR Scans

Important

Regarding the Cycode Unfail Command While this does skip the Cycode PR Scan completely, Cycode Admins and Owners will be able to track all usage of this comment in the [Developer Audit page](/developer-experience/security-administrators/monitor-developer-activity/developer-audit) .

**Use case 3**: In cases where Cycode has some issues, you can use an API called the “panic" API, which is an HTTP call to our scan service that disables the block-PR option for Cycode scans for the entire tenant. For example:

```
1
2
3
4
5
```

```text
curl:

curl --location --request DELETE 'https://api.cycode.com/scans/api/v1/onboarding/all-organizations/block-pull-request/disable' \

--header 'Authorization: Bearer <token>'
```

Note that the token used above will need to have an Owner role.

**Use case 4**: Cycode is not available at all; in this case there are two options:

*   Use the Cycode tool that we developed to remove the block PR option for Cycode scans in GitHub SCMs: See [https://github.com/cycodehq/cycode-unblock-pull-request/](https://github.com/cycodehq/cycode-unblock-pull-request/)
*   Manually remove branch protections per repository

For each of these use cases, Cycode admins and owners should verify that the action taken is logged in the Developer Audit log, which will help prevent abuse by developers who may try to skip the scanning.

Once the issue is fixed, the PR scans will be triggered to scan for the downtime.

In cases where none of the options above work

Open a ticket with Support, using the methods described in [this article](/welcome-to-cycode/cycode-support) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
