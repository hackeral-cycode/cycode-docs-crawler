# Build Reports | Cycode Docs

Source: https://docs.cycode.com/inventory/build-entities/build-reports

---

# Build Reports

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/build-entities/build-reports.md "Edit this page")

Updated on Oct 21, 2024 • Published on Oct 21, 2024

* * *

The build report entity is a structured summary or detailed record generated after each run of the Cimon agent in your CI/CD pipeline, providing visibility into the security profile and activity of the build process. The build report includes:

1.  Process Execution: Details of any processes executed during the build.
    
2.  Network Access: A log of the network connections made, including destinations reached.
    
3.  File Access: Tracking file read/write operations during the build.
    

This report lets users analyze potential security issues, violations, and risks by reviewing what happened during the build. This helps you to then refine security policies and implement preventive measures. The Security Report part of the report further aids in shaping the preventive policy for securing the pipeline.

![](/assets/build-entities-image-v7cb35ou.png)

## Filters [Copied!](#filters "Copy link to this section")

Build reports can be filtered by the following filters:

*   Source: According to the source code hosting sites with which the build report is affiliated
    
*   Prevent Mode: According to whether prevent mode is enabled
    
*   Detected Risk: According to whether a risk was detected in the report
    

## Available Details [Copied!](#available-details "Copy link to this section")

The following information is provided in the Build Report table:

**Column name**

**Description**

Location

The organization where the report is located

Config. Allowed Hosts

The list of hostnames that were configured in Cimon as allowed as network connections, such as [cycode.com](http://cycode.com) and [google.com](http://google.com)

Config. Allowed IPs

The list of IP addresses that were configured in Cimon to as allowed

Last Updated

The date and time the report was last updated

Prevent Mode

An indication of whether prevent mode is enabled in the report

Detected Risk

An indication of whether a risk was detected in the report

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
