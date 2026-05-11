# Service Level Agreement (SLA) | Cycode Docs

Source: https://docs.cycode.com/additional-cycode-features/service-level-agreement-sla

---

# Service Level Agreement (SLA)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/additional-cycode-features/service-level-agreement-sla/_index.md "Edit this page")

Updated on Jan 20, 2026 • Published on Nov 6, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s security posture settings enables you to configure features that enhance Cycode’s workflows, by adding Service Level Agreements (SLA) configurations, monitoring, and notifications. This functionality is designed to ensure your organization is promptly alerted when specific SLAs are met or breached, utilizing the existing integrations for alerting and issue tracking, ensuring that you’ll see for each violation when specific SLAs are met or breached.

As an admin, you’ll be able to configure one or more SLA timeframes by risk - from one central location - for all tenant’s violations.

#### Terminology [Copied!](#terminology "Copy link to this section")

When using this feature, you’ll see these terms used throughout:

*   SLA (Service Level Agreement): A formal agreement that outlines the expected level of service, including specific timeframes and conditions
    
*   SLI (Service Level Indicator): A quantitative measure of the performance of a service used to determine whether the service meets the SLOs and SLAs
    

### Configuring SLA settings [Copied!](#configuring-sla-settings "Copy link to this section")

1.  Go to **Settings > Security Posture > SLA**.
    
2.  Enable the SLA function.  ![](/assets/service-level-agreement-sla-image-0y1p73wq.png)
    
3.  Next, define the Service Level Indicators (SLIs) for each violation severity. For example, for violations that are a critical risk (with a risk score of 90-100), you’ll set the time - in days - by which the violation must be closed.
    
4.  Repeat this setup for each violation severity.
    
5.  Next, define the missed SLA time frame warning. This is the warning period before a violation breaches the SLA, and is also set in days.
    
6.  Next, define whether to apply the SLA retroactively or not. By default, the SLA will be applied only to future violations. To apply it retroactively, enable this toggle.
    
7.  Click **Save Changes** to save the SLA settings.
    

Note

The SLA can be updated according to your organization’s needs. However, after editing the SLA, Cycode doesn’t recalculate cycles that have already closed. Cycode will only recalculate SLAs for open violations that are in progress so they measure against your new configuration and metrics.

After you set up your SLA, you can monitor progress using the dashboards, filter for violations by their SLA in the [Violations page](/view-and-manage-violations) , and create a [Context Intelligent Graph query](/context-intelligence-graph/build-queries-with-the-query-builder) with the SLA status for the required violations, which you can then generate a report using the report creation flow.

#### Notes on configuring the SLA [Copied!](#notes-on-configuring-the-sla "Copy link to this section")

*   When you save a configuration and choose to apply it retroactively, the days will be recalculated and the count will start from the time the configuration was saved or from the day the violation was created (whichever date is more advanced). When you don’t choose retroactively, the days will be set from the day the violation was created.
    
*   The calculation of the days is done once a day, therefore a violation that has a one-day SLA, for example, will be calculated at most up to 24 hours and at least a few minutes after the violation is saved.
    
*   If you want to edit the SLA configuration, you can change the number of days or delete the days, which will recalculate the SLA of the open violations only (note that for a closed violation this won’t change the SLA).
    
*   Deleting the number of days and saving the configuration will delete all the SLA statuses for all the open violations.
    
*   Only admins and above can edit the configuration of each SLA. All other users have read-only permissions for the SLA status throughout the system to see how much time is left for the violation until it needs to be closed.
    
*   An open violation that reached a “missed” status will still allow all the remediation actions that the system has to offer, however, the SLA status will not change.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
