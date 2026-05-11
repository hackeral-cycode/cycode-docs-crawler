# Threat Intelligence | Cycode Docs

Source: https://docs.cycode.com/dashboards/threat-intelligence

---

# Threat Intelligence

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/dashboards/threat-intelligence.md "Edit this page")

Updated on Jan 20, 2026 • Published on Jul 31, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode is committed to ensuring that our customers always have the latest data on threats. That’s the idea behind the Threat Intelligence dashboard, which features the latest threats reported by Cycode’s Research Team.

![](/assets/81f390d-updated-threat-intelligence-281-29.png)

Cycode’s Research Team updates the Threat Intelligence Dashboard regularly with the latest industry threats and zero-day exploits. The dashboard then provides you with an indication of whether the threat was detected in your system (Violations Found) based on the specific CVE, including the number of actual violations found.

Alternatively, if Cycode finds the threat in your system given a specific combination of factors, you’ll instead see a Finding Found, which, when clicked, will switch you to Cycode’s Context Intelligence Graph, where you can explore in-depth the detection results utilizing Cycode’s out-of-the-box (OOTB) queries to trace vulnerabilities impact back to the software source, defining the moving parts in a complex supply-chain.

## View the Threat Intelligence dashboard [Copied!](#view-the-threat-intelligence-dashboard "Copy link to this section")

1.  To view the dashboard, go to the Dashboards page, and select **Threat Intelligence**.
    
2.  To learn more about the threat, click the **Learn more** link to view additional information about the threat.
    

## Understand threats found by Cycode [Copied!](#understand-threats-found-by-cycode "Copy link to this section")

1.  If Cycode detects that a CVE was found in your system as a violation, you’ll see a button **Violations Found**. Clicking the button will bring you to the [Violations](/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-violations) page, filtered by that CVE.

![](/assets/3503220-image-281-29.png)

2.  If a threat shows a **No Finding Found** button, clicking the button will switch you to the relevant query in the Context Intelligence Graph, which will display a “No Results” message.

![](/assets/7f1c747-image-281-29.png)

3.  If a threat shows a **Findings Found**, clicking the button will switch you to the full query in the Context Intelligence Graph.

![](/assets/02d639f-image-281-29.png)

4.  Click the query in the query result to view the full query, which shows where the threat itself was found in the system

![](/assets/21a7c9a-image-281-29.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
