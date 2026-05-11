# Exposure paths | Cycode Docs

Source: https://docs.cycode.com/view-and-manage-violations/exposure-paths

---

# Exposure paths

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/view-and-manage-violations/exposure-paths.md "Edit this page")

Updated on Oct 15, 2024 • Published on Sep 4, 2024

* * *

## What’s an exposure path? [Copied!](#whats-an-exposure-path "Copy link to this section")

An exposure path illustrates the path of impact of the violation through different entities, and ultimately, leads to the root cause where the violation should be fixed.

**Lets look at the following example to under this more clearly:**  
From the DAST violation card we can see the exposure path - the route Cycode discovered from the violation to the relevant remediation location, which is the location in the source code:

![](/assets/image%28476%29.png)

### In which cases will an exposure path be available? [Copied!](#in-which-cases-will-an-exposure-path-be-available "Copy link to this section")

Exposure paths are currently available in the following cases:

*   You’ve connected a sufficient number of integrations to enable Cycode to find a path
*   There’s an existing connection for the path

Note that exposure paths are currently available for the following violation categories:

*   DAST
*   Container Image vulnerability

### Glossary [Copied!](#glossary "Copy link to this section")

*   **Entity** - Each node on the path is an entity that was created by connecting relevant integrations. For example, by connecting Kubernetes integrations, Cycode creates many cloud entities that are pulled from the integration.
*   **Edge** - A connection between 2 nodes. The edge also describes the context between the node. For example: Container Image **Assigned To** repository.
*   **Remediation Location** - The entity that represents the location where the violation needs to be fixed. The location will be assigned the following indicator:

![](/assets/image%28477%29.png)

### FAQs [Copied!](#faqs "Copy link to this section")

#### What is the path Cycode looks for? [Copied!](#what-is-the-path-cycode-looks-for "Copy link to this section")

**DAST path**:  
Violation > Endpoint > Kubernetes Ingress > Kubernetes Service (hidden) > Kubernetes Pod (hidden) > Container Image > Repository  
![](/assets/image%28478%29.png)

**Container Security path**:  
Violation > Container Image Tag > Container Image > Docker File > Repository  
![](/assets/image%28483%29.png)

#### Can a violation have more than one exposure path? [Copied!](#can-a-violation-have-more-than-one-exposure-path "Copy link to this section")

Yes.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
