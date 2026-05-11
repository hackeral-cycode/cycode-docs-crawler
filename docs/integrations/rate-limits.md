# Rate limits | Cycode Docs

Source: https://docs.cycode.com/integrations/rate-limits

---

# Rate limits

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/rate-limits.md "Edit this page")

Updated on Nov 5, 2024 • Published on Jul 22, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Cycode’s SaaS platform integrates with different internal providers on your end, such as GitHub and GitLab Enterprise. Often we lack visibility into how these provider instances are provisioned or whether they have adequate rate limiting configurations in place. This uncertainty can lead to scenarios where these services might be overwhelmed by a large volume of HTTP requests originating from our platform.

To address this concern and ensure seamless integration, we’ve implemented an internal rate limiting service, which is based on the flow detailed below.

Note

The rate limit feature is for on-premise providers only

### What is the rate limit? [Copied!](#what-is-the-rate-limit "Copy link to this section")

The rate limit is a separate service that’s responsible for managing counters per domain and timeframe (note that the feature appears in as a new tab in the Integration settings).

![](/assets/rate-limits-1.png)

1.  Before each request, each service inside the cluster will send the URL to the rate limiter to ask “Can I perform this request”.
    
2.  The rate limiter will check its threshold in the configured timeframe and will return a response.
    
3.  If the domain has passed its threshold - the calling service will be notified that it can not perform the request.
    

The service will then delay the request to try and handle it once the rate limit threshold has passed.

## Managing rate limits [Copied!](#managing-rate-limits "Copy link to this section")

_**For Admin and Owner roles only**_ The rate limit feature enables you to view the current rate limit on your domains, and to modify and customize these limits based on your current needs.

About the rate limit settings

The rate limit settings are internal configurations set by Cycode, which help us to monitor usage and to ensure that we don’t overload your vendor’s systems or cause disruptions.

To view the rate limits, go to **Settings > Integrations > Rate Limits**.

Here you’ll find the rate limits set per domain. Note that all domains discovered by Cycode are assigned default rate limits. You can customize these limits by adjusting the configuration settings.

Each domain also displays the configuration assigned to it (default or custom), when the configuration was created and when it was last updated, and the current status: **Within Limits** or **Limits Exceeded**.

### Viewing a domain’s rate limits [Copied!](#viewing-a-domains-rate-limits "Copy link to this section")

Clicking any domain in the list above opens the dialog with the details of that domain:

![](/assets/rate-limits-3.png)

Here you’ll information about when when the rate limit was created, last updated, and the type of configuration, as well as an indicator (in the upper right corner) of whether the domain is currently within the limits set.

The dialog also includes the Rate Limits Statistics:

*   Rate Limit in Seconds: The timeframe during which Cycode monitors for requests
    
*   Request Threshold: The maximum amount of requests allowed in that timeframe.
    
*   Number of Hits: The number of times the rate limit threshold was reached in the given timeframe.
    
*   Rate Limit Peak: The highest request count that was calculated for this threshold in the given timeframe.
    
    Note on the Rate Limit Peak
    
    If possible, raise the threshold for the domain to this limit so that no requests are blocked. If your provider can’t handle this number of requests in the given timeframe, consider reducing Cycode’s call frequency by limiting module usage or the scan frequency.
    
*   Calculation Period: The timeframe (in hours) in which the ‘Hits’ and ‘Rate Limit Peak’ stats were calculated.
    

You can also modify (edit) the domain’s rate limits (or delete them) using the three-button option menu in the top right corner (see next section).

### Modifying an existing rate limit [Copied!](#modifying-an-existing-rate-limit "Copy link to this section")

1.  You can modify an existing rate limit using the three-button option menu in the top right corner of the Rate Limits Configuration dialog or by selecting the option menu in the main Rate Limit list next to the domain you wish to modify.

This opens the Edit Rate Limits dialog:

![](/assets/rate-limits-4.png)

2.  You can now edit the settings of the current configurations, or click **\+ Add Limit** to add a new rate limit.
    
3.  When done, click **Save Configuration**.
    

### Creating a new rate limit configuration [Copied!](#creating-a-new-rate-limit-configuration "Copy link to this section")

In some cases, you may want to create a new rate limit configuration for a domain.

1.  Click **Add Rate Limit**.

![](/assets/rate-limits-5.png)

!\[\]/assets/rate-limits-5.png)

2.  Specify the name of the domain to which the rate limit is being applied.
    
3.  In the Seconds field, enter the time window during which the request threshold should be calculated.
    
4.  In the Request Threshold field, enter the maximum number of requests allowed per limit window.
    
5.  To add additional limits for this domain, click + Add Limit and specify the additional seconds and request thresholds.
    
6.  When done, click **Add Configuration**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
