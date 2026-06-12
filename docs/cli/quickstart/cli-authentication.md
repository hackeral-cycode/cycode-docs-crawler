# Manage authentication | Cycode Docs

Source: https://docs.cycode.com/cli/quickstart/cli-authentication

---

# Manage authentication

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/quickstart/cli-authentication.md "Edit this page")

* * *

To use cycode, you must authenticate your local environment with your account. You can do this via the interactive browser login (recommended) or by setting environment variables for automated environments.

## Interactive login [Copied!](#interactive-login "Copy link to this section")

This is the standard way to set up your local machine. It uses a secure browser-based flow to link your CLI to your account.

1.  Open your terminal and type the following command:

```
1
```

```bash
cycode auth
```

2.  A browser window will automatically open. Enter your credentials or use a Single Sign-On (SSO) provider (GitHub, Google, etc.) to log in.
    
3.  You will be prompted to choose the tenant you want to authorize. Select the appropriate tenant from the dropdown and click Allow.
    
4.  Once you see the “Authorization approved” message in your browser, you may close the tab. Your terminal will display a confirmation message:
    

```
Successfully logged into cycode
```

## CI/CD and headless environments [Copied!](#cicd-and-headless-environments "Copy link to this section")

If you are using cycode in a CI/CD pipeline (like GitHub Actions or Jenkins) or a headless environment where a browser is unavailable, authenticate using environment variables. Set `CYCODE_CLIENT_ID` and `CYCODE_CLIENT_SECRET` (or `CYCODE_ID_TOKEN`) before running any CLI command.

For the full list of supported environment variables, see [Manage configuration](/cli/quickstart/cli-configuration/#environment-variables) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
