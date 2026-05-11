# List of permissions | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/global-roles-and-permissions/list-of-permissions

---

# List of permissions

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/global-roles-and-permissions/list-of-permissions.md "Edit this page")

Updated on Feb 15, 2026 • Published on Jan 26, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic provides a complete list of permissions that can be assigned to custom roles. These permissions are also mapped to the default global roles and project roles.

## Permission Groups [Copied!](#permission-groups "Copy link to this section")

Permissions marked with a warning in the Custom role window grant tenant-wide access across all Cycode projects.

### Dashboard [Copied!](#dashboard "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Manage custom dashboards

Allows creating, updating, and deleting custom dashboards and dashboard questions. This permission controls access to managing custom dashboard configurations and customizations.

Yes

Yes

X

X

X

X

X

X

View developer engagement dashboard

Allows viewing metrics and analytics displayed in the developer engagement dashboard.

Yes

Yes

X

X

X

X

X

X

### Violations [Copied!](#violations "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Update violation status

Allows changing the status of violations, including resolving, reopening, or ignoring violations. This permission is required to perform both bulk status updates and individual violation updates.

Yes

Yes

Yes

Yes

X

X

Yes

Yes

Create tickets from violations

Allows creating tickets in external issue tracking systems directly from violations in the Cycode interface.

Yes

Yes

Yes

Yes

Yes

X

Yes

Yes

Assign violations

Allows assigning violations to Cycode members.

Yes

Yes

Yes

Yes

Yes

X

Yes

Yes

Update violation priority

Allows changing the priority levels assigned to violations.

Yes

Yes

Yes

Yes

Yes

X

Yes

Yes

Manage comments

Allows creating, editing, and deleting comments across the platform.

Yes

Yes

Yes

Yes

Yes

Yes

X

X

### Groups and projects [Copied!](#groups-and-projects "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Create projects

Allows creating new Cycode projects. This permission is required to access the project creation wizard.

Yes

Yes

X

X

X

X

X

X

Delete projects

Allows deleting existing Cycode projects.

Yes

Yes

X

X

X

X

X

X

Edit project description

Allows updating the description field of a Cycode project.

Yes

Yes

Yes\*

X

X

X

Yes

X

Edit project details

Allows updating Cycode project details, including name, business impact, and type.

Yes

Yes

Yes\*

X

X

X

Yes

X

Manage project assets

Allows adding and removing assets to and from a Cycode project scope.

Yes

Yes

Yes\*

X

X

X

Yes

X

Manage project members

Allows adding Cycode project members, removing them, and updating their project-specific roles.

Yes

Yes

Yes\*

X

X

X

Yes

X

Leave project

Allows Cycode members to remove themselves from a Cycode project.

Yes

Yes

X

X

X

X

X

X

Configure issue tracking

Allows configuring issue tracking integrations for a Cycode project.

Yes

Yes

Yes\*

X

X

X

Yes

X

Manage project labels and insights

Allows updating Cycode project labels and configuring Cycode project insight settings.

Yes

Yes

Yes\*

X

X

X

Yes

X

Configure PR scanning

Allows configuring pull request scan settings for a Cycode project.

Yes

Yes

Yes\*

X

X

X

Yes

X

View groups

Allows viewing Cycode project groups and their hierarchy structure.

Yes

Yes

Yes \*\*

Yes\*\*

Yes \*\*

Yes\*\*

X

X

Create groups

Allows creating new Cycode project groups.

Yes

Yes

X

X

X

X

X

X

Edit groups

Allows updating existing Cycode project groups.

Yes

Yes

X

X

X

X

X

X

Delete groups

Allows deleting Cycode project groups.

Yes

Yes

X

X

X

X

X

X

\*For members with partial access.

\*\*For members with full access.

### Inventory and discovery [Copied!](#inventory-and-discovery "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

View asset inventory

Allows viewing the inventory of assets, repositories, and resources.

Yes

Yes

Yes \*\*

Yes\*\*

X

X

X

X

View Discovery page

Allows viewing and using the query builder to search and query data.

Yes

Yes

Yes \*\*

Yes\*\*

X

X

X

X

Manage saved queries

Allows creating, updating, and deleting saved queries in the query builder.

Yes

Yes

Yes \*\*

Yes\*\*

X

X

X

X

\*For members with full access.

### Compliance [Copied!](#compliance "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Manage compliance

Allows managing compliance, including changing control status and recalculating controls.

Yes

Yes

X

X

X

X

X

X

Create compliance evidence

Allows creating new evidence for compliance controls.

Yes

Yes

Yes

Yes

Yes

X

X

X

Manage compliance evidence

Allows updating and deleting existing compliance evidence.

Yes

Yes

Yes

Yes

Yes

X

X

X

### Policies [Copied!](#policies "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Manage policies

Allows creating, updating, and deleting policies, including saving queries as policies.

Yes

Yes

X

X

X

X

X

X

### Automation [Copied!](#automation "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

View workflows

Allows viewing workflows on the automation page and within automation-related tabs.

Yes

Yes

Yes

Yes

X

X

Yes

Yes

Create workflows

Allows creating new workflows.

Yes

Yes

Yes

Yes

X

X

Yes

Yes

Edit workflows

Allows editing existing workflows, including modifying workflow configurations, triggers, and actions.

Yes

Yes

Yes\*

X

Yes

X

Yes

X

Delete workflow

Allows deleting existing workflows.

Yes

Yes

Yes\*

X

Yes

X

Yes

X

\*For members with partial access.

### Reports [Copied!](#reports "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Manage reports

Allows creating, updating, deleting, and running reports.

Yes

Yes

Yes \*\*

Yes\*\*

X

X

X

X

\*\*For members with full access.

### Global settings [Copied!](#global-settings "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Manage rate limits

Allows creating, updating, and deleting rate limit configurations for the tenant.

Yes

Yes

X

X

X

X

X

X

Manage storage settings

Allows managing storage settings, including updating configurations, testing connections, and saving storage settings.

Yes

Yes

X

X

X

X

X

X

Manage session timeout

Allows enabling or disabling session timeout and changing the duration of the session timeout.

Yes

Yes

X

X

X

X

X

X

Manage service accounts

Allows creating new service accounts, and revoking or deleting existing service accounts.

Yes

Yes

X

X

X

X

X

X

View plan and subscription

Allows viewing organization plan details and subscription information.

Yes

Yes

X

X

X

X

X

X

Manage project settings

Allows managing Cycode project settings and configuration, including asset collision warnings.

Yes

Yes

X

X

X

X

X

X

Manage risk score configuration

Allows managing risk score configuration, including modifying risk score formulas.

Yes

Yes

X

X

X

X

X

X

Manage SLA configuration

Allows creating, configuring, and updating SLA settings for different risk levels.

Yes

Yes

X

X

X

X

X

X

Manage shared views

Allows creating, updating, deleting, and sharing tenant-level saved views that are visible to all tenant members.

Yes

Yes

X

X

X

X

X

X

Manage tenant notifications

Allows viewing the Important, Info, and All tabs in the Notification Center, and marking notifications as read or dismissed.

Yes

Yes

X

X

X

X

X

X

Contact support

Allows Cycode members to contact support through the platform.

Yes

Yes

Yes

Yes

Yes

Yes

X

X

\*View users

Lets you see the list of users and members in your organization. It does not allow inviting, editing, or removing users.

Yes

Yes

Yes

Yes

Yes

Yes

X

X

\*Not available in the custom role editor. Applied automatically based on role.

⌘K to generate command

make the description shorter in more user firndly

Name: View users

Description: Lets you see the list of users and members in your organization. It does not allow inviting, editing, or removing users.

give me a better wording for this:

\*Not visible in the UI for selection in the custom roles.

Some cleaner options:

*   “This permission is not shown in the custom roles UI and can’t be toggled when editing a role.”
    
*   “Not available in the custom roles editor; it’s applied automatically based on role.”
    
*   “This permission is managed by the system and doesn’t appear in the custom roles permission list.”
    

Shortest option:

*   “Not available in the custom roles editor.”

in between

“This permission is not available in the custom roles editor and is applied automatically based on role.”

### Integrations and connectors [Copied!](#integrations-and-connectors "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Manage integrations

Allows creating, updating, and deleting integrations, and managing integration configurations.

Yes

Yes

X

X

X

X

X

X

Manage Brokers

Allows creating, updating, configuring, and deleting Cycode Broker.

Yes

Yes

X

X

X

X

X

X

Manage encryption keys (BYOK)

Allows configuring and managing Bring Your Own Key (BYOK) encryption settings.

Yes

Yes

X

X

X

X

X

X

Manage GitLab configuration

Allows adding, updating, and removing GitLab configuration settings.

Yes

Yes

X

X

X

X

X

X

### AI features [Copied!](#ai-features "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Manage AI features

Allows enabling, disabling, and configuring AI features.

Yes

Yes

X

X

X

X

X

X

### Scanner settings [Copied!](#scanner-settings "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

Manage scan ignore rules

Allows managing scan ignore paths and patterns.

Yes

Yes

X

X

X

X

X

X

Manage secret scanning settings

Allows managing secret scanner settings, including exclusions, validation, and related options.

Yes

Yes

X

X

X

X

X

X

Manage CI/CD scanning

Allows configuring CI/CD scanner settings, including PR settings.

Yes

Yes

X

X

X

X

X

X

Manage SCA scanning

Allows configuring SCA scanner settings for dependencies and licenses.

Yes

Yes

X

X

X

X

X

X

Manage SAST scanning

Allows configuring SAST scanner settings, including PR settings.

Yes

Yes

X

X

X

X

X

X

Manage IaC scanning

Allows configuring Infrastructure-as-Code scanner settings.

Yes

Yes

X

X

X

X

X

X

Manage container scanning

Allows configuring container scanner settings and security options.

Yes

Yes

X

X

X

X

X

X

Manage global CIMON settings

Allows managing tenant-level default CIMON scanner settings.

Yes

Yes

X

X

X

X

X

X

Manage CIMON settings

Allows configuring CIMON settings for specific entities to override global defaults.

Yes

Yes

Yes

Yes

X

X

X

X

Manage Change Impact Analysis

Allows configuring Change Impact Analysis scanner settings.

Yes

Yes

X

X

X

X

X

X

Manage On-Demand Scans & Dev Activity

Allows managing scans, including viewing scan history, triggering on-demand scans, accessing scan logs (CLI and IDE), and using scan-related pages such as On-Demand Scans and Dev Activity.

Yes

Yes

X

X

X

X

X

X

### Audit [Copied!](#audit "Copy link to this section")

Name

Description

Global owner

Global admin

Global project manager

Global member

Global developer

Global viewer

Project manager

Project member

View and review audit logs

Allows viewing audit logs, and marking audit log entries as reviewed or unreviewed.

Yes

Yes

X

X

X

X

X

X

* * *

#### Related topics [Copied!](#related-topics "Copy link to this section")

*   [Global roles and permissions](/cycode-settings/user-administration/global-roles-and-permissions/)
    
*   [Manage global roles](/cycode-settings/user-administration/global-roles-and-permissions/manage-global-roles)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
