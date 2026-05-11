# Jira | Cycode Docs

Source: https://docs.cycode.com/integrations/issue-tracking-ticketing-tools/jira

---

# Jira

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/issue-tracking-ticketing-tools/jira/_index.md "Edit this page")

Updated on Dec 25, 2025 • Published on Mar 28, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Integrating Jira enables Cycode to send information about detected violations in your environments. After successfully integrating, you can organize and track relevant information in your monitoring service.

Note

This is a two-way integration, where data is synced from Jira to Cycode and from Cycode to Jira.

## Before you begin [Copied!](#before-you-begin "Copy link to this section")

Cycode recommends that you create a dedicated service user for the integration instead of using a personal employee account.

### Create a service user in Jira [Copied!](#create-a-service-user-in-jira "Copy link to this section")

1.  Create a new email in your domain, for example **[cycode-jira@your-company.com](mailto:cycode-jira@your-company.com)** .
    
2.  Sign in to Atlassian with this new email to activate the account.
    
3.  Invite the service user to your Jira instance, for example **[https://my-company.atlassian.net/](https://my-company.atlassian.net/)** .
    

### Configure permissions for the service user [Copied!](#configure-permissions-for-the-service-user "Copy link to this section")

Use your Jira admin account to configure permissions for the service user to enable the following for the integration with Cycode:

Cycode functionality

Permissions

Project access

The service user should have the following permissions for all projects that are integrated with Cycode:

*   **Browse Projects**
*   **Create Issues**
*   **Edit Issues**

Webhook management (optional)

If your integration includes the **Apply Jira ticket status to Cycode tickets** feature, Cycode needs to manage webhooks to sync the status of the tickets. Add the service user to the following group:

*   **jira-admins**

### Create an API token [Copied!](#create-an-api-token "Copy link to this section")

1.  Sign into Atlassian with the service user account.
    
2.  In the user profile > **Account settings** > **Security** page, click **Create and manage API tokens** and create an API token called **Cycode Integration**.
    
3.  Copy the token value and store it in a safe location. This is the only time you will see it.
    

## Integrate Jira with Cycode [Copied!](#integrate-jira-with-cycode "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the **Issue Tracking** section, click **Jira**.
    
3.  Configure the following parameters:
    
    Parameter
    
    Description
    
    **Integration name**
    
    Provide a meaningful name for the integration.
    
    **Instance URL**
    
    Provide the URL of the Jira instance, for example **[https://my-company.atlassian.net/](https://my-company.atlassian.net/)** .
    
    **Email**
    
    The email address of the service user.
    
    **API token**
    
    Provide the API token that was generated for the service user account.
    
    **Use enhanced description format**
    
    Content in the **Jira Description** field will contain richer data and additional contextual information.
    
    Note
    
    The description content format is different from the earlier version. If you use scripts that parse the description field, you may need to update them.
    
4.  To enable Jira-to-Cycode status mapping, toggle the **Enable Jira Tickets Status Display in Cycode** option on.
    
    Note
    
    This option is only visible after initial configuration. To configure, follow the instruction in [Enable status mapping](/integrations/issue-tracking-ticketing-tools/jira/#enable-status-mapping) below.
    
5.  Click **Done**. The Jira integration area loads and shows that your project is connected.
    
    ### Enable status mapping [Copied!](#enable-status-mapping "Copy link to this section")
    
    You can opt to show the status of Jira tickets in Cycode after you complete the initial integration.
    
    1.  In the Connected accounts page of the connection wizard, click the required integration.
        
    2.  In the Integration details page, toggle the new **Show the status of Jira tickets in Cycode** option on.
        
    3.  Click **Save changes**.
        
    

### About Jira 2-way integration [Copied!](#about-jira-2-way-integration "Copy link to this section")

When Jira 2-way integration is enabled, you can see the ticket ID, title, and status, as well as the user assigned for the ticket (different from the Cycode assignee) in the Violations view.

Note

*   This option requires **global** Jira admin permissions
*   If the Jira ticket ID changes in Jira, the old ID is displayed in the Violation card until it is manually updated.

This information is displayed in a dedicated **Ticket** column.

Hovering over the detected violation will display a tooltip with the above information. The assignee name is displayed with their initials. Hovering over the initials also displays the name of the assignee themselves.

If 2-way integration hasn’t been enabled, the tooltip for the violation will only show the Jira tickets assigned to the violation:

The custom fields settings also enables determining the Cycode status based not only on the Jira status but also combined with other Jira fields as well. This gives the you the ability to determine more granular Cycode statuses.

Note

Jira 2-way integration applies retroactively to tickets that were synced before the option was enabled.

### Integrate multiple Jira instances [Copied!](#integrate-multiple-jira-instances "Copy link to this section")

1.  Go to **Settings > Integrations** and click **Add Integration**.
    
2.  In the **Issue Tracking** section, click **Jira**.
    
3.  In the Connected accounts page, click **\+ Add account**.
    
4.  Enter the integration details for the relevant Jira account and click **Connect**.
    

## Third-party API calls [Copied!](#third-party-api-calls "Copy link to this section")

The custom field settings also enable determining the Cycode status, based not only on the Jira status but also combined with other Jira fields as well. This gives the you the ability to determine more granular Cycode statuses.

API call

Description

`GET api/3/project`

Get projects.

`GET api/3/jql/autocompletedata/suggestions`

Jira auto-complete.

`GET api/3/label`

Get labels.

`GET api/3/issuetype/project`

Get issue types.

`GET api/2/issue/createmeta`

Get available fields for issue types.

`GET api/3/resolution/search`

Get Jira resolutions.

`GET api/3/priority`

Get Jira priorities.

`GET api/3/users`

Get Jira users.

`GET api/3/user/assignable/multiProjectSearch`

Get users assignable for project.

`GET api/2/search`

Get searches.

`GET api/3/project/{project_id}/statuses`

Get Jira project issue statuses.

`GET api/3/issue`

Get issue details.

`POST api/3/issue`

Create issue.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
