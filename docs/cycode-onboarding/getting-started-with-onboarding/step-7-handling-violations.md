# Step 7: Handling violations | Cycode Docs

Source: https://docs.cycode.com/cycode-onboarding/getting-started-with-onboarding/step-7-handling-violations

---

# Step 7: Handling violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-onboarding/getting-started-with-onboarding/step-7-handling-violations.md "Edit this page")

Updated on Oct 22, 2024 • Published on May 23, 2024

* * *

The Cycode Violations page is a centralized control panel for investigating, remediating, and resolving violations throughout the software development lifecycle (SDLC). This centralized approach provides you with a holistic view of all the violation types, which you can then break down into the relevant violation category on which you’re focusing.

The purpose of the Violations page is to help your organization understand where to start and how to begin resolving violations in the most effective and efficient manner.

Let’s go to the Violations page to view all detected violations. Choose a specific category that you want to focus on, for example SCA. Use the **Group By** option to group the violations by the criteria most relevant for you and continue to browse through the findings to focus on what matters most.

*   **Violation cards**: Cycode’s violation cards provide a value-driven approach by offering a concise snapshot of violation data and streamlining management of key aspects: Visibility, prioritization, and remediation. The violation card is where you can view all the relevant information about a violation, regardless of its type - secrets, leaks, SCA, etc. You can also use the card to manage the violation, by resolving it, ignoring it, assigning the violation, updating the violation’s priority, or opening an issue tracking ticket using the integrated ticketing system.
*   **Resolving and ignoring violations**: In the Violations page or violation card, when available, you can choose to ignore a detected violation or resolve it. You can also choose to ignore and resolve multiple values or violations by selecting multiple items in the list. Another way of ignoring/resolving a specific value is by going to the right of each detected violation, clicking the three-dot option menu and selecting ignore or resolve.
*   **Assigning violations**: Once a violation has been detected by Cycode, you can now use the Violations page (and violation card) to allocate responsibility for that violation by assigning it to a designated user.
*   **Ticketing systems**: If you’ve integrated a ticketing system with Cycode’s platform (e.g., Jira or ClickUp), you can use the Violations page or violation card to open a ticket on the violation, then track it using your ticketing system. This ensures that the violation isn’t just detected but also tracked until it’s fixed.

## Correlations of violations through Cycode’s ASPM [Copied!](#correlations-of-violations-through-cycodes-aspm "Copy link to this section")

The true power of an ASPM platform is its ability to provide context for each vulnerability. By contextualizing vulnerabilities, ASPM helps organizations garner deep insights into both individual defects and overall risk posture. As such, Cycode’s ASPM connects with different security tools to pull vulnerabilities from these tools and to correlate them into Cycode’s platform. Correlation provides the ability to cross-reference and combine alerts from diverse security tools into a coherent view, thereby reducing noise and focusing on genuine threats.

Correlation is also important to understand when multiple alerts relate to one root cause. This, in turn, minimizes alert fatigue, eliminates blindspots, and improves prioritization and remediation.Correlation from vulnerability data from other tools also enables Cycode to enrich the data on which it bases results such as the risk score.

Furthermore, Cycode correlates these alerts with data from Software Development Life Cycle (SDLC) tools, enhancing the contextual understanding of security incidents, such as providing code snippets based on data pulled from Cycode’s SCM integration. Consequently, security teams are equipped with actionable intelligence, enabling quicker response times and more effective mitigation strategies. This integration and correlation capability within Cycode ensures that security operations are more efficient and that resources are optimized, making it a vital component of any robust cybersecurity strategy.

## How does correlation improve my security posture? [Copied!](#how-does-correlation-improve-my-security-posture "Copy link to this section")

Let’s take Black Duck as an example: go to the Violations page and filter for **Security Tools > Black Duck**.

The vulnerability detected by Black Duck provides you with generic information, and not the code itself. Here’s what Black Duck provides:  
![](/assets/image-243.png)

When correlated with Cycode, the same information available from Black Duck now becomes more detailed and relevant, since Cycode is integrated with the SCM itself. By opening the violation card for that vulnerability, you can now see the code where the vulnerability was detected.

![](/assets/handling-violations1-1.png)

Therefore, using the ASPM connector, you’ve now gained additional information on the vulnerability and improved the data available using Cycode’s existing capabilities.

Here’s another example: in this case you’ll use the correlation to find the real root cause that’s triggering the violation, in a situation where that information isn’t obvious. In this example, the integration with Prisma Cloud found a Container Image vulnerability, which we’ll open in the RIG.

![](/assets/handling-violations2.png)

Using the Cycode RIG, you can now dive into that vulnerability until you find the container image in which the vulnerability is located, which file it was generated by and modified (Dockerfile), the action (Commit) and finally, the user who generated the commit.

![](/assets/handling-violations3a.png)

Now switch to Graph view to see how the pieces come together, thus providing the full root cause of the vulnerability.

![](/assets/handling-violations3.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
