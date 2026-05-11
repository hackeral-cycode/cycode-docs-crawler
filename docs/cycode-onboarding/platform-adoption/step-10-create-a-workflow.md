# Step 10: Create a workflow | Cycode Docs

Source: https://docs.cycode.com/cycode-onboarding/platform-adoption/step-10-create-a-workflow

---

# Step 10: Create a workflow

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-onboarding/platform-adoption/step-10-create-a-workflow.md "Edit this page")

Updated on Sep 26, 2024 • Published on May 23, 2024

* * *

Cycode’s workflows are used to create an automated action when a specific trigger is met, which automates the way in which your system responds to violations and vulnerabilities. A workflow allows users to choose one or more specific policies and create a workflow that defines what happens when a violation of these policies is created. You can choose to open a ticket, send a notification or execute a remediation action when such an action is available. You can also define a webhook to be executed given you the flexibility to define a wide variety of actions that best match your processes.

Use any of the integrated Alerting or Issue Tracking integrations currently integrated with Cycode to create alerts and to generate tickets as part of the workflow process.

Let’s build your first workflow:

1.  Go to the Automation page and click the **Create Workflow** button.
2.  Provide a name for the workflow, for example “Open a daily Jira ticket for Secret violations”.
3.  Define the trigger for the workflow. For example, choose all the Secrets Detection policies by checking the Secrets Detection category.
4.  Choose the filter logic to focus on what is important for you. For example, choose to filter for a specific organization.
5.  Choose to aggregate alerts to one day and by repository.
6.  Finally define the action by clicking the Jira icon in the Open Ticket section.  
    Note that the Jira icon will not appear if you haven’t defined an integration with Jira.
7.  Fill in the mandatory Jira parameters and click the **Create** button.

This workflow will generate a new Jira ticket every day for every repository with new violations.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
