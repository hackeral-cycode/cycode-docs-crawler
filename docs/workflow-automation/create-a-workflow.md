# Create a workflow | Cycode Docs

Source: https://docs.cycode.com/workflow-automation/create-a-workflow

---

# Create a workflow

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/workflow-automation/create-a-workflow.md "Edit this page")

Updated on May 27, 2026 • Published on Nov 5, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can create workflows in the Automation view.

Note

You can also create a workflow from a policy in the Policies view.

Cycode provides the following options for creating a workflow:

*   **Trigger** - create a workflow based on a specific event in the platform. For example:
    *   New violation
    *   New repository created in your SCM
*   **Workflow library** - choose a template of triggers and third-party actions provided by Cycode. You can use the template as is, or modify it to suit your requirements.

Note

Classification rules have been deprecated, and all automation activities are now handled as workflows.

## Trigger types [Copied!](#trigger-types "Copy link to this section")

When you create a workflow, the trigger defines the event that starts it. The following trigger types are available:

Trigger

Starts the workflow when…

Common uses

**New violation**

A new violation is detected for the selected policies or violation categories.

Alert on new findings, open tickets, or apply a Cycode action (set status, set severity, add label, exclude).

**Violation status change**

A violation’s status changes for the first time (for example, resolved or reopened).

Notify stakeholders when a violation is resolved or reopened.

**SLA status change**

A violation’s SLA status changes for the first time (for example, near-miss or breached).

Escalate when a violation approaches or breaches its SLA.

**Notification**

A platform notification is raised, such as an integration error or a disconnected SCM connection.

Forward integration-health and other system notifications to email, Slack, or ticketing tools.

**Graph query**

A new record is added to a saved Context Intelligence Graph query list.

Trigger alerts or actions from custom graph queries. See [Create a custom policy from a query](/context-intelligence-graph/create-a-custom-policy-from-a-query/) .

Note

Cycode actions (such as set status, set severity, add label, or exclude) are available only with the **New violation** trigger. The other triggers support third-party actions (email, Slack, ticketing, and so on).

## Create a workflow based on a trigger [Copied!](#create-a-workflow-based-on-a-trigger "Copy link to this section")

1.  In the **Automation** view, click **Create Workflow**.
2.  Provide the following information:
    
    Item
    
    Description
    
    **Name**
    
    Type a meaningful name for this workflow.
    
    **Description**
    
    Provide a useful description.
    
3.  In the workflow canvas, click **Select a Trigger**.
4.  Search for a trigger in the field, or select one of the available triggers.
5.  From the **Violation category** list, select one or more categories.
6.  From the **Policies** list, select one or more policies that should trigger the workflow when a violation is detected.
7.  Click the **+** next to the violation in the canvas to add the next step to the workflow. You can apply an action on all events that match this violation, or you can apply conditions to specify which events should trigger the workflow.

Note

A workflow is automated to get a specific set of steps done for a particular task. To keep the workflow definition narrow, best practice is to select a specific category (or even a specific policy). If you select **All Policies**, you should apply at least one condition.

The following options are available:

Item

Description

**Filters**

Add one or more conditions to your workflow, to narrow the definition of the trigger.

**Cycode actions**

Select an action that Cycode can apply. You can only select one per workflow.

**Third-party action**

Select an action that can be triggered in a third-party application. You can select more than one per workflow.

Note

If you apply a Cycode action, you can’t apply a third-party action. Additionally, if you apply a third-party action, you can’t apply a Cycode action. 8. If you configured your workflow with a Cycode action, to apply the action to all events that match the condition (including those that happened in the past) enable **Apply retroactively**. 9. If you configured a workflow that includes a third-party action, to aggregate multiple alerts in a single notification click **Agreggation** and complete the following:

Item

Description

**Send multiple alerts as a single one every**

Select a time frame from the list.

**In addition, group alerts by**

Select one or more options from the list, or leave the options unchecked for no grouping.

10\. Click **Test** to verify the workflow.

11\. Click **Publish** when the workflow is complete.

Note

If you have information missing in a workflow step, you can’t publish your workflow.

### To create a workflow from a template [Copied!](#to-create-a-workflow-from-a-template "Copy link to this section")

1.  In the **Automation** view, click **Create Workflow**.
2.  Provide the following information:
    
    Item
    
    Description
    
    **Name**
    
    Type a meaningful name for this workflow.
    
    **Description**
    
    Provide a useful description.
    
3.  Click **Start from library**.
4.  Select one of the available templates. The predefined steps for the workflow are shown on the canvas.
5.  Add the required information to any of the steps that have a blue icon.

Note

You can modify the workflow as needed by changing the value of a step, adding a step, etc.

6.  To aggregate multiple alerts in a single notification click **Agreggation** and complete the following:
    
    Item
    
    Description
    
    **Send multiple alerts as a single one every**
    
    Select a time frame from the list.
    
    **In addition, group alerts by**
    
    Select one or more options from the list, or leave the options unchecked for no grouping.
    
7.  Click **Test** to verify the workflow.
8.  Click **Publish** when the workflow is complete.

Note

If you have information missing in a workflow step, you can’t publish your workflow.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
