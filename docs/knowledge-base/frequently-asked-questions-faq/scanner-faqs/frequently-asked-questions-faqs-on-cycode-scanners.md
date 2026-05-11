# Frequently asked questions (FAQs) on Cycode scanners | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/frequently-asked-questions-faq/scanner-faqs/frequently-asked-questions-faqs-on-cycode-scanners

---

# Frequently asked questions (FAQs) on Cycode scanners

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/frequently-asked-questions-faq/scanner-faqs/frequently-asked-questions-faqs-on-cycode-scanners.md "Edit this page")

Updated on Sep 22, 2025 • Published on Sep 22, 2025

* * *

**Q:** When scanning GitHub Enterprise for the first time, is the source code saved anywhere?  
**A:** No, the source code isn’t saved; clones are cached briefly, but not saved.

* * *

**Q:** What types of repositories is Cycode able to scan?  
**A:** Cycode supports scanning Git-based repositories **only**. We’re not able to scan repositories that do not use Git (i.e., SVN or TFS).

* * *

**Q:** Does Cycode scan all branches for all scan types?  
**A:** Cycode scans the default branch for all the Cycode policies. _Note that for Secrets we scan **all** branches._

* * *

**Q:** How to track how many secrets were detected in pull requests scans  
**A:** Cycode scans secrets within the Pull Requests Scans (if configured in **Settings > Secrets > PR Settings**).  
In the [Secret Dashboard](/dashboards/scanner-dashboards/secrets-dashboard) you can look at the _Pull request scans coverage_ to see how many _secrets were detected_ from the _passed pull requests_ amount.

![](/assets/image-388.png)

To learn more about the PR scans, go to Settings > Pull Request Scans History, and set the filter _Category = Secrets_ and _Stastus = Completed_.

You can also add additional filters such as _Organization_ or _Repository_ if you wish to get a more specific results, to see the list of the completed PRs.

You can also check out the _Violations Found_ column to learn more about the PR scans that detect secret violations.

* * *

**Q:** For SCM, When the Violations statues change to auto-resolved?  
**A:** For SCM, the interval to detect the changes applied and code fixed puhsed will be by a daily routine sync job, proative triggered by Cycode.

* * *

**Q:** Does Cycode trigger rescans automatically when re-enabling policies that were previously disabled?  
**A:** No, once new policies enabled, an On-demand scan needs to be processesd and Release the scan once completed to display the violations found in the Violation page

* * *

**Q:** Do **Exists in latest code** tags get updated when a secret is removed from the “latest code”?  
**A:** Yes. Unless the secret still in the latest code in a different branch

* * *

**Q:** Do Cycode store copies of the scanned (SAST, SCA, Secrets) code?  
Do Cycode only retaining the local code snippets displayed in the violation cared or do Cycode store whole copies of the scanned code?  
**A:** Cycode stores copies for the scanning time and then only code snippets of the findings

* * *

**Q:** There is a way to revalidate the secret value in bulk and not individually?  
**A:** Currently, bulk on-demand revalidating is not supported. Cycode revalidates the secrets once a week.

* * *

**Q:** What is the synchronization interval for new repositories to appear in the Container Scanning Repositories list?  
**A:** 20 Minutes. Note that currently deleted repositories will still display in the Repositories list

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
