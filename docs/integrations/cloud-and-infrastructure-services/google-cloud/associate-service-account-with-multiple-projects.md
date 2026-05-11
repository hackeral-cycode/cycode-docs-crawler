# Associate service account with multiple projects | Cycode Docs

Source: https://docs.cycode.com/integrations/cloud-and-infrastructure-services/google-cloud/associate-service-account-with-multiple-projects

---

# Associate service account with multiple projects

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/cloud-and-infrastructure-services/google-cloud/associate-service-account-with-multiple-projects.md "Edit this page")

* * *

To integrate multiple accounts in GCP, you will need to first create and apply a service account across your GCP projects and folders you want to integrate using the following steps.

## Creating a Service Account in GCP [Copied!](#creating-a-service-account-in-gcp "Copy link to this section")

1.  Select the relevant project or folder that the service account will be created in

![](/assets/select_project.png)

2.  Select **IAM & Admin**\->**Service Accounts** from the main menu.

![](/assets/create_service_account.png)

3.  Click the **\+ CREATE SERVICE ACCOUNT** button to start the service account creation process

![](/assets/852ec49-start_service_account_creation.png)

4.  Enter the name of the service account in the **Service account name** box (which will also autofill the **Service account ID** box) and click the **Create and Continue** button.

![](/assets/59bb13b-service_account_name.png)

5.  Optionally, you may grant the following roles for the current project and click the **Continue** button:
    *   Compute Admin
    *   Security Reviewer
    *   Storage Object Viewer
    *   Viewer

![](/assets/8c7073c-set_roles_for_service_account.png)

6.  Click the **Done** button

![](/assets/0e2ce31-complete_serivce_account_creation.png)

7.  You will be taken to the **Service Account** list page. Verify your new service account is present in the list and copy the `Service Account ID` for use in the next set of steps.

![](/assets/27ec2ba-confirm_service_account.png)

## Adding a Service Account to a Project or Folder in GCP [Copied!](#adding-a-service-account-to-a-project-or-folder-in-gcp "Copy link to this section")

1.  Select the relevant project or folder that the service account will be added

![](/assets/a9e1da5-select_project.png)

2.  Select **IAM & Admin**\->**IAM** from the main menu.

![](/assets/7d06144-add_service_account_to_iam.png)

3.  Click the **\+ GRANT ACCESS** button

![](/assets/18a3801-grant_access_to_service_account.png)

4.  Paste the `Service Account ID` of your service account in the **New principles** box.

![](/assets/befb079-define_principle_service_account.png)

5.  Apply the following roles to the service account user
    *   Compute Admin
    *   Security Reviewer
    *   Storage Object Viewer
    *   Viewer

![](/assets/0ea8c91-assign_roles_service_account.png)

6.  Click the **Save** button.

![](/assets/32715e6-save_access_service_account.png)

7.  Preview the IAM list and verify the `Service Account ID` now shows in the list.

![](/assets/e2d1d55-service_account_access_granted.png)

8.  Repeat steps 1-7 for all projects you want to add the service account to.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
