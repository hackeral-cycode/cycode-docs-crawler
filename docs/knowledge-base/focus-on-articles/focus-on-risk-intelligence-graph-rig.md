# Focus on… Risk Intelligence Graph (RIG) | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/focus-on-articles/focus-on-risk-intelligence-graph-rig

---

# Focus on… Risk Intelligence Graph (RIG)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/focus-on-articles/focus-on-risk-intelligence-graph-rig.md "Edit this page")

Updated on Jul 7, 2024 • Published on Jul 7, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Cycode’s Risk Intelligence Graph – or RIG for short – is a powerful technology that connects and correlates alerts, events and processes across your entire software development lifecycle (SDLC). By integrating all of the information from your software delivery and AppSec tools into a single platform, Cycode’s RIG is able to determine how each of these components are connected and when potential attacks move laterally across these tools, as well as provide unified visibility of these tools, processes and activities.

In this article, we’ll cover some of the more interesting features and use cases for Cycode’s RIG to correlate data across your entire software development lifecycle (SDLC), extending the scope of Cycode platform’s protection.

Note

Before you begin working with RIG, you’ll need to make sure you have one of the following permissions:

*   Owner
*   Admin

Here are just some examples of analysis using the RIG:

*   Generate a list of repositories in your system, then select one of the repositories and move to the graph view to see how the repository is connected with other assets
*   Generate a list of all the users per repository or per organization
*   Generate a query to see all the repositories cloned by a specific user
*   Aggregate your data to see how many users are currently assigned per repository, which will help you understand which repositories have more potential contributing “violators”
*   Use the graph view - which is more visual - to explore your assets; double-click on an entity, like a repository, to see all the items connected to that entity (this is the strength of the “graph” view of the RIG)

In this article you will learn how to use the RIG for the following:

*   Obtaining visibility into the entire SDLC
*   Building custom policies based on a graph query
*   Code to cloud coverage - investigating issues
*   Understanding the problem source to help remediate it
*   Generating reports through the RIG
*   Using RIG queries in workflows
*   Using the out-of-the-box query library to search for potential violations

### Obtaining visibility into the entire SDLC [Copied!](#obtaining-visibility-into-the-entire-sdlc "Copy link to this section")

Cycode’s RIG seamlessly integrates with your SDLC tooling, aggregating data from various phases to provide a comprehensive understanding of your development process. By analyzing metadata, user behavior, configurations, policies, violations, vulnerabilities, and more, it breaks down silos between SDLC phases. Additionally, it incorporates data from scanning engines to enrich insights. Cycode’s RIG establishes meaningful connections and relationships within this data, offering a holistic view of the SDLC. This enables you to correlate activity between tools and phases, addressing common AppSec silos and enhancing security across your organization.

The RIG also enables Cycode to generate unique insights into application security by correlating data from various stages of the SDLC. These insights help prioritize risks, identify anomalies, and prevent code tampering effectively. This visibility is applied across all phases of the SDLC, including requirements gathering, development, testing, deployment, and maintenance, ensuring that security and integrity measures are consistently applied throughout the entire development process.

Here’s an example of a query that lets you do a deep dive into the SDLC.

Let’s say you want to see which repositories in your SDLC are deployed to Kubernetes Pods. To obtain this information:

1.  In the Entities pane, select Repository.
2.  Next, specify that the repository should be associated with a Build Workflow.
3.  The workflow should be associated with a Build Workflow Run.
4.  This, in turn, should be triggered by a Build Workflow Job.
5.  The job should then deploy a Container Image.
6.  Finally, the Container Image should be pulled by a Kubernetes Pod.

Using this query, we found the repositories that build Container Images that are being pulled by Kubernetes. Now, for example, if you need to track down the repositories that meet this criteria to be able to mitigate any vulnerabilities in the Container Images, you can easily detect the relevant repositories.

### Building custom policies based on a graph query [Copied!](#building-custom-policies-based-on-a-graph-query "Copy link to this section")

One of the most efficient ways of building a custom policy in the Cycode platform is by creating a query, and then generating a [custom policy from that query](/context-intelligence-graph/create-a-custom-policy-from-a-query) . This functionality, while often overlooked, enables you to quickly and easily create custom policies using data that’s already available in the RIG – no coding required. A custom policy is essentially a query on one or more entities and their relations.

For example, let’s say you want to create a custom policy that alerts when a pull request is not required for a repository’s branch protection.

1.  Generate the following query using RIG:  
    ![](/assets/focus-on-rig-image-3vol14b7.png)
2.  Next, create a custom policy using this query: go to the Save button, stand on it and select **New Policy**.  
    ![](/assets/focus-on-rig-image-qkg5rred.png)  
    This automatically opens the New Policy dialog.  
    ![](/assets/focus-on-rig-image-4pfl78l1.png)
3.  Give the new policy a name and optional description, specify the policy type and category; select an SDLC stage (optional), and finally, prescribe remediation guidelines within this policy builder.
4.  Click **Done** to save the new policy.  
    You’ve now created a new custom policy for your organization based on the query information you already have in the RIG.

#### Additional examples [Copied!](#additional-examples "Copy link to this section")

Here are a few more examples of queries you can use to create custom policies:

*   Alert if repository was forked by an inactive user
*   Alert if repository was forked by a user outside of the organization
*   Find all users with admin privilege to all repositories
*   Alert if repositories without sufficient branch protection deployed builds to the cloud
*   Alert if repository was given privileged access by an outside collaborator
*   Alert if branch names do not conforms with organization standard

### Code to cloud coverage - investigating issues [Copied!](#code-to-cloud-coverage---investigating-issues "Copy link to this section")

Code to cloud is a cloud native security approach that has two main security aspects:

*   Identifying security issues in your code and preventing them from reaching the cloud
*   Identifying security issues in cloud deployments and tracing them back to the code

Let’s use Cycode’s RIG to look for a package vulnerability that’s found in a code dependency.

1.  In the RIG, run the following query:  
    _Search for a package vulnerability that’s found in a code dependency referenced by a code project, which is contained in a repository that’s associated with a Container Image that’s pulled by a Kubernetes pod_.  
    Package Vulnerability \[Found In Code Dependency \[Referenced By Code Project \[Contained In Repository \[Associated With Container Image \[Pulled By Kubernetes Pod\]\]\]\]\]

![](/assets/focus-on-rig-image-wllnnzig.png)

The resulting query lets you locate a known package vulnerability within any code dependency.

### Understanding the problem source to help remediate it [Copied!](#understanding-the-problem-source-to-help-remediate-it "Copy link to this section")

In this use case, we’ll run a query to identify the owner of a repository based on data from RIG such as code committers and other definitions of the repository or organization.

1.  In the RIG, run the following query:  
    _Search for a Container Image vulnerability that’s found in a Container Image, which is generated by a Dockerfile that’s been modified in a commit by a specific user:_  
    Container Image Vulnerability \[Found In Container Image \[Generated By Dockerfile \[Modified In Commit \[Generated By User\]\]\]\]

![](/assets/focus-on-rig-image-x58efoja.png)

You can now see exactly which user performed the commit that has the vulnerability, assign the violation to them (and maybe give them a heads up about any practices they’re using that aren’t up to par with your security practices).

### Generating reports through the RIG [Copied!](#generating-reports-through-the-rig "Copy link to this section")

Cycode’s Reports functionality is designed to let you generate reports according to your company’s needs based on your queries. Cycode’s Reports include predefined reporting templates for SBOM, violations and RIG queries. Creating a report based on a RIG query gives users the flexibility to custom reports based on any type of data and correlation represented in the RIG. For example, you can send a weekly report of users with 2FA enabled - from the reporting page, choose to create a query based report, choose the pre-defined query of “users with 2FA enabled” and select to generate the report on a weekly basis.

### Using RIG queries in workflows [Copied!](#using-rig-queries-in-workflows "Copy link to this section")

Currently, workflows are triggered only based on violations. But what if you want to create a workflow based on events that are not related to violations? That’s where the RIG comes into play. For example, let’s say you want to send a Slack message everytime a new secret violation is resolved and was detected as part of Cycode’s PR scanning. Here’s the relevant query for that.  
![](/assets/focus-on-rig-image-n8ac00um.png)

You can now create a custom policy based on the query. Next, you can bypass the workflow limitation of being triggered by violations-only, by setting the custom policy itself as the trigger.

Now, every time a new record will be added to that query list, the workflow will run. This can help you send a dedicated alert every time a new violation is resolved.

### Locating organization admins that aren’t using MFA [Copied!](#locating-organization-admins-that-arent-using-mfa "Copy link to this section")

Next we’re going to create a query for organization admins that aren’t MFA authorized. This is a classic use case for many organizations.

The query would then be as follows:

{Organization \[Has User\]}

{Show All Organization Admins Without MFA}

{Enumerate all organization admins without MFA}

{Show the Prioritization/Risk}

![](/assets/focus-on-rig-image-vibdj57j.png)

### Using the out-of-the-box query library to search for potential violations [Copied!](#using-the-out-of-the-box-query-library-to-search-for-potential-violations "Copy link to this section")

The RIG includes a query library with queries that Cycode created and that are relevant for different capabilities of the Cycode platform, such as SCA, compliance, secrets detection, and more. Once you select a query from the library, you can see the queries run, and can also modify and make the query even more precise by adding filters or additional correlations and properties, to make the query even more advanced and customized to your needs.

You can then **save the customized query as a new query** to the library and make it available for future use (to learn more, see [How to save a graph query to the query library](/context-intelligence-graph/useful-queries/how-to-save-a-graph-query-to-the-query-library) ). Alternatively, build your own query (see example below), then add it to the library for future use by your team.

### RIG bottom line [Copied!](#rig-bottom-line "Copy link to this section")

The bottom line here is that the RIG isn’t just for advanced users - with all the queries that are available for you in the library, the graph is designed for all types of users, and the information you can get through this tool is a unique benefit provided by Cycode.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
