# How do I know if my Build, Artifacts and Cloud integrations are working properly? | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/helpful-tips-and-best-practices/how-do-i-know-if-my-integrations-are-working-properly/how-do-i-know-if-my-build-artifacts-and-cloud-integrations-are-working-properly

---

# How do I know if my Build, Artifacts and Cloud integrations are working properly?

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/helpful-tips-and-best-practices/how-do-i-know-if-my-integrations-are-working-properly/how-do-i-know-if-my-build-artifacts-and-cloud-integrations-are-working-properly.md "Edit this page")

Updated on Nov 19, 2024 • Published on Jun 23, 2024

* * *

## IaC integrations [Copied!](#iac-integrations "Copy link to this section")

Like integrations designed to detect secrets, once you’ve completed the integration of your SCM with Cycode’s platform, you can verify that the integration for IaC is working properly using the On-Demand Scans.

1.  Go to the Cycode Platform, and select **Settings > Backoffice > On-Demand Scans**.  
    ![](/assets/image-562.png)
2.  Filter the results by **Is Initial Scan = Yes** and then filter for the organization you just integrated.
3.  Finally, filter by category and select **IaC Misconfigurations**.

Verify that scan began, and that there are no cloning issues, and the data shown is the information you filtered for.

## Cloud, CI/CD and Container Image integrations [Copied!](#cloud-cicd-and-container-image-integrations "Copy link to this section")

Unlike IaC and secrets, in this case verifying that the integration is working properly requires using the Risk Intelligence Graph (RIG).

1.  Once you’ve completed an integration, and it appears in the integrations in your Settings, switch to the RIG.
2.  For example, select the option Container Registry (or Container Repository), and then filter by the provider. If the option for the provider appears, this means that data is avilable.

Note

You may need to wait a awhile to ensure that the data is available in the RIG once the integration is completed.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
