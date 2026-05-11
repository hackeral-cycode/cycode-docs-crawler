# SLA widget | Cycode Docs

Source: https://docs.cycode.com/additional-cycode-features/service-level-agreement-sla/sla-widget

---

# SLA widget

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/additional-cycode-features/service-level-agreement-sla/sla-widget.md "Edit this page")

Updated on Nov 10, 2024 • Published on Nov 6, 2024

* * *

The SLA widget in the Executive dashboard is designed to help monitor the security remediation standards defined by your system administrator.

After saving the configuration, we recommend monitoring the dashboard once the SLA statuses have fully updated. This process may take some time, especially if there are a large number of violations, depending on your configuration.

![](/assets/image-1731228990713.png)

The widget provides an “early warning system” to ensure that your organization meets its own security remediation standards, warning about the number of violation deadlines that are close to being missed. Note that the data here is determined by the [settings](/additional-cycode-features/service-level-agreement-sla) you set. We also recommend using the dashboard filters to view SLA statuses for specific projects.

## Which user roles can see/enable SLA information in the dashboard? [Copied!](#which-user-roles-can-seeenable-sla-information-in-the-dashboard "Copy link to this section")

The dashboard view can have three different states:

*   If SLA is disabled and you’re the admin/owner, you can click the action button to enable SLA.
    
*   If SLA is disabled and you’re not the admin/owner, the SLA widget won’t be displayed at all.
    
*   If SLA is enabled, any user will be able to see a breakdown of the SLA status for monitored open violations.
    

## Filtering violations by SLA [Copied!](#filtering-violations-by-sla "Copy link to this section")

In the Violations table, you can filter violations by their SLA status, as well as display the SLA status column. We recommend enabling this column and then saving this in a [dedicated favorite view](/view-and-manage-violations/create-a-favorite-view) for easy access.

![](/assets/image-1731233198569.png)

Possible SLA statuses include:

*   Missed
    
*   On Track
    
*   Near Miss
    

The table also provides you with an indicator of the SLA status for each violation: simply hover over the SLA indicator to display the status.

![](/assets/violations-page-with-riskscore-and-sla-and-sla-indicator-2.png)

### Viewing the SLA status in the violation card [Copied!](#viewing-the-sla-status-in-the-violation-card "Copy link to this section")

After filtering for violations with SLA, you can now view the SLA status inside the violation card:

![](/assets/service-level-agreement-sla-image-5poa3djh.png)

The card also includes the due date calculation for that SLA.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
