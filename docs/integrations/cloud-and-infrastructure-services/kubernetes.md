# Kubernetes | Cycode Docs

Source: https://docs.cycode.com/integrations/cloud-and-infrastructure-services/kubernetes

---

# Kubernetes

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/cloud-and-infrastructure-services/kubernetes.md "Edit this page")

Updated on May 30, 2024 • Published on May 30, 2024

* * *

Integrating your Kubernetes environments enables Cycode to send information about detected violations in your environments, including exposed hard-coded secrets in your public and private Kubernetes resources.

## How it’s done [Copied!](#how-its-done "Copy link to this section")

We add a workload to the cluster, using a controller pattern which includes a service account, cluster role and binding and deployment definition. The deployment defines a pod which will run in the cluster called `cycode_runner`. This pod uses the Kubernetes API from within the cluster to check configuration and look for secrets.

After successfully integrating, organize and track relevant information in your monitoring service.

## Permissions [Copied!](#permissions "Copy link to this section")

These are the permissions required for integrating with Cycode:

Type

Permissions

Action

`get`  
`list`  
`watch`

Deployments

`patch`

## Integrating with Kubernetes [Copied!](#integrating-with-kubernetes "Copy link to this section")

1.  Go to **Settings** > **Integrations** and then click **Add Integration**.
    
2.  This displays the Add Integration window. Under the Cloud section, click **Kubernetes**.
    
    ![](/assets/a683443-image.png)
    
    ![](/assets/kubernetes-add-workload.png)
    
3.  Enter a name for your workload.
    
4.  Click **Create Workload**.
    
5.  Copy the command that loads and run it on your machine.
    
6.  Click **Done**.
    
    Once you click **Done**, the Kubernetes integrations area loads and shows that your workload is connected.
    
7.  Verify the integration in the Kubernetes integrations area.
    
    ![](/assets/kubernetes-integration-confirmation.png)
    
8.  To add new workloads, click **Add Workload** from the Kubernetes integrations area.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
