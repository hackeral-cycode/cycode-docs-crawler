# Create an AWS StackSet | Cycode Docs

Source: https://docs.cycode.com/integrations/cloud-and-infrastructure-services/aws/create-an-aws-stackset

---

# Create an AWS StackSet

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/cloud-and-infrastructure-services/aws/create-an-aws-stackset.md "Edit this page")

Updated on Apr 23, 2025 • Published on Apr 23, 2025

* * *

When you integrate multiple AWS accounts, you have to create a StackSet. When you create the stack for the StackSet, use the information found here.

## Create the StackSet [Copied!](#create-the-stackset "Copy link to this section")

1.  Go to **AWS CloudFormation** > **StackSets** and create a new stack in the root/master account.
    
2.  Select the new stack and click **Actions** > **Add stacks to StackSet**.  
    ![](/assets/image-20220721-140912.png)
    
3.  In **Set deployment options**, configure the following:
    
    1.  In the **Deployment targets** section, select one of the following:
    
    Option
    
    Description
    
    Deploy to organization
    
    This will deploy the stack to each organization unit by creating a new stack for all accounts
    
    Deploy to organizational units (OUs)
    
    This will deploy the stack only to selected organization units
    
    2.  In the **Specify regions** section, select one region where the stack will be created for each account to be integrated.
    3.  In the **Deployment options** section, the Maximum concurrent accounts option can be set to 100% (and will not incur any additional costs).  
        ![](/assets/image-20220721-141407.png)
    4.  In the **Region Concurrency** section, you can select **Parallel** to increase the deployment speed for the stack across accounts.  
        ![](/assets/image-20220721-143056.png)
4.  Click **Next**.
    
5.  In the **Specify overrides** section, leave the **ExternalId** value and click **Next**.  
    ![](/assets/image-20220721-143303.png)
    
6.  In the **Review** section, verify your changes and click **Submit**.  
    ![](/assets/image-20220721-143724.png)
    
7.  After the stacks are created, go to **CloudFormation**→**Stacks**→**{Your Stack Name}** and copy the **RoleARN** value and store it in a secure location, so you can apply it in the Cycode integration.  
    ![](/assets/image-20220721-144232.png)
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
