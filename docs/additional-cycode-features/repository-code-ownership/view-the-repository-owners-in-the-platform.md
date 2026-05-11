# View the repository owners in the platform | Cycode Docs

Source: https://docs.cycode.com/additional-cycode-features/repository-code-ownership/view-the-repository-owners-in-the-platform

---

# View the repository owners in the platform

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/additional-cycode-features/repository-code-ownership/view-the-repository-owners-in-the-platform.md "Edit this page")

Updated on Jan 20, 2026 • Published on Oct 31, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode displays the repository owners in the following locations in the platform:

*   Through the Inventory view - in the repository and user tables and cards
    
*   Through the Context Intelligence Graph - in the repository and user tables and cards
    
*   Through the violation cards
    

In addition, for each owner, Cycode also displays the identification reason the owner was assigned to the repository.

### View repository owners through the Inventory view [Copied!](#view-repository-owners-through-the-inventory-view "Copy link to this section")

##### Viewing ownership in repository assets

1.  To view the repository owners, click **Inventory > Repositories**.

2\. Go to the **Repo Code Owner** column in the table to view the assigned owners:

![](/assets/viewing-the-repository-owners-in-the-platform-image-83nnzmh6.png)

3\. To view the method in which in owner was assigned (by Cycode or manually) - **as well as the reason** the user was assigned ownership - stand on the owner name to display the popup information:

![](/assets/viewing-the-repository-owners-in-the-platform-image-nx037z6m.png)

In the example above, the owner (Administrator) was detected by Cycode and the reason the user was assigned permission is “Admin permission”.

4\. If there are multiple owners assigned to the repository, standing on the + sign displays the complete list of owners, the method they were assigned ownership, and the reason they were assigned:

![](/assets/viewing-the-repository-owners-in-the-platform-image-lagkzyiw.png)

\#### View ownership in the repository asset card

1\. To view the repository owners, click **Inventory > Repositories**.

2\. Go to the repository you wish to view and click anywhere in the row to display the repository asset card:

![](/assets/viewing-the-repository-owners-in-the-platform-image-jmt596v7.png)

3\. To refresh the ownership list, click the refresh button to the right of the owners.

#### View ownership in user assets [Copied!](#view-ownership-in-user-assets "Copy link to this section")

1.  To view the repository owners, click **Inventory > Users**.

2\. Go to the **Owned Repositories** column in the table to view the assigned owners:

![](/assets/viewing-the-repository-owners-in-the-platform-image-aupwwaq6.png)

3\. To view the method in which in owner was assigned (by Cycode or manually) - **as well as the reason** the user was assigned ownership - stand on the owner name to display the popup information:

![](/assets/viewing-the-repository-owners-in-the-platform-image-t3sj4ez3.png)

4\. If the user owns multiple repositories, standing on the + sign displays the complete list of repositories, the method used to assign the repositories to this user, and the reason they were assigned:

![](/assets/viewing-the-repository-owners-in-the-platform-image-ij8axshp.png)

#### View ownership in the users asset card [Copied!](#view-ownership-in-the-users-asset-card "Copy link to this section")

1.  To view the repository owners, click **Inventory > Users**.
    
2.  Click the row of the user you wish to view. This displays the user card with the repositories that have been marked as owned by this user: ![](/assets/viewing-the-repository-owners-in-the-platform-image-72i80qx2.png)
    
3.  To view the repository itself, in the **Owned Repositories** column, click the repository to display the repository asset card: ![](/assets/viewing-the-repository-owners-in-the-platform-image-ztlzmbwq.png)
    
4.  To refresh the ownership list, click the refresh button to the right of the owners.
    

### View repository owners through the Context Intelligence Graph [Copied!](#view-repository-owners-through-the-context-intelligence-graph "Copy link to this section")

#### Viewing ownership by repository [Copied!](#viewing-ownership-by-repository "Copy link to this section")

1.  Go to the Context Intelligence Graph and enter the following query: Repository + Owned By User + Ownership Reason = ![](/assets/viewing-the-repository-owners-in-the-platform-image-6oic9lpa.png)

2\. Aggregate the results by clicking **Aggregate Mode**:

![](/assets/viewing-the-repository-owners-in-the-platform-image-c0p3eqjt.png)

3\. Go to the column selector and instead of the default Repository selection, select **Owned By**, and then mark the checkbox**Ownership Reason**.

![](/assets/viewing-the-repository-owners-in-the-platform-image-2swmholv.png)

4\. You now have a list of repositories and their owners, including the ownership reason:

![](/assets/viewing-the-repository-owners-in-the-platform-image-9gz8bxpu.png)

5\. Click a repository name to display its asset card:

![](/assets/viewing-the-repository-owners-in-the-platform-image-9t7svekf.png)

6\. To refresh the ownership list, click the refresh button to the right of the owners.

\#### View ownership by user

1\. Go to the Context Intelligence Graph and enter the following query:

User + Owns Repository:

![](/assets/viewing-the-repository-owners-in-the-platform-image-d011wg82.png)

2\. Aggregate the results by clicking **Aggregate Mode**:

![](/assets/viewing-the-repository-owners-in-the-platform-image-hib8xxdy.png)

You now have a list of users and the repositories they own:

![](/assets/viewing-the-repository-owners-in-the-platform-image-98ggrrz5.png)

3\. Click the repository name to display its card (see above).

4\. To refresh the ownership list, click the refresh button to the right of the owners.

\### View repository owners through the violation card

1\. To view the assigned owners through the violation card, go to **Violations > Group By None**, and select the relevant violation.

2\. In the violation card, click the**Remediation** tab.

![](/assets/viewing-the-repository-owners-in-the-platform-image-2tw1ekoc.png)

3\. In the **WHO** section you’ll see the list of repository owners.

4\. To refresh the ownership list, click the refresh button to the right of the owners.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
