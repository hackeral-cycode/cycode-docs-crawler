# Managing personal access tokens | Cycode Docs

Source: https://docs.cycode.com/get-started/account-and-personal-settings/managing-personal-access-tokens

---

# Managing personal access tokens

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/get-started/account-and-personal-settings/managing-personal-access-tokens.md "Edit this page")

Updated on Aug 4, 2024 • Published on Aug 4, 2024

* * *

Access tokens allow you to create personal API access tokens based on your selected tenant. Personal access tokens enable you to access the Cycode APIs using your specific user (including all of the access your user has). We recommend not using this token for CI/CD pipelines, as a specific user may not always remain active or available. For this use case, see [Creating a Service Account Access Token](/get-started/account-and-personal-settings/managing-personal-access-tokens) for the purposes of CI/CD pipeline builds.

Note that the allowed user roles for personal access token are: Admin, Owner, Member, and Viewer.

## Viewing your personal access tokens [Copied!](#viewing-your-personal-access-tokens "Copy link to this section")

To view your personal access token, click the profile icon in the right-hand corner, select **My Profile**, and then select **Personal Access Tokens** in the left pane.

In the Personal Access Tokens page, you’ll be able to create custom API tokens based on your role in the tenant or business group. These tokens offer secure, role-based access to Cycode APIs, ensuring smooth platform use while safeguarding data and user control.

![](/assets/600f9dc-image.png)

## Adding access tokens [Copied!](#adding-access-tokens "Copy link to this section")

1.  To add a new access token, click **New Access Token**. This displays the New Access Token dialog.

![](/assets/0e62756-image.png)

2.  Enter an internal name for the access token and click **Create**. Once the new token is created, the Access Token Client ID & Secret dialog is displayed.

![](/assets/825ca69-image.png)

The new access token displays the Client IDS and Client Secret, as well as the JWT Access Token and Usage Example.

🚧 Important

Once you close the Access Token dialog, the Client Secret will no longer be recoverable. Be sure to save these IDs in a safe place.

3.  Click **Done** to close the dialog. The new token will now appear in your list of tokens:

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
