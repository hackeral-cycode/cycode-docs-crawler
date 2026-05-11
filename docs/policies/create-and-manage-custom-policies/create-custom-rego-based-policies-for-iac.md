# Create custom Rego-based policies for IaC | Cycode Docs

Source: https://docs.cycode.com/policies/create-and-manage-custom-policies/create-custom-rego-based-policies-for-iac

---

# Create custom Rego-based policies for IaC

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/policies/create-and-manage-custom-policies/create-custom-rego-based-policies-for-iac.md "Edit this page")

Updated on Jul 3, 2024 • Published on Jul 3, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

In our ever-evolving cloud-centric landscape, infrastructure as code (IaC) serves as the primary gateway to application deployment. As technologies like Kubernetes and Terraform gain widespread adoption, it’s nearly inevitable that most developers will find themselves modifying a Kubernetes or Terraform resource at some stage in their career journey.

But while updating and maintaining infrastructure can be as simple as managing a few configuration files — or as complicated as orchestrating a complex architecture with multiple cloud native stacks — one thing holds true: **infrastructure security is crucial to app security**. And even though many cloud providers and IaC scanning tools have built-in or community-contributed configuration and security rulesets, infrastructure is often too diverse and too complex for a “one-size secures all” approach. To this end, Cycode enables you to create custom policies that are based on Rego.

### How does it work [Copied!](#how-does-it-work "Copy link to this section")

In the Cycode solution, IaC files are parsed into a JSON representation, and, by design, Cycode then adds the ‘document’ prefix to every parsed IaC json representation file, which needs to be taken into account when writing the Rego query.

The Rego policy must then return the following properties as a result:

Name

Type

Description

`passed`

bool

If passed is false, a violation will be created.

`failure\_type`

Enum

The enum can get the following values: - MissingValue - State that the property missing - InvalidValue - State that the property in invalid

`failed\_check\_message`

String

The message that the user will get in the violation

`ailure\_property\_path`

String

The location of the violated property, used for viewing the exact location of the issue.

Once provided, Cycode will use the provided Rego rule over the IaC resources found in the SCM.

## Creating a custom policy in Rego [Copied!](#creating-a-custom-policy-in-rego "Copy link to this section")

1.  Go to the Policies page and click **\+ Custom Policy**.
2.  In the Create New Policy dialog, go to the Policy Type field and select **Rego Based Policy for IaC**.

![](/assets/f21986f-image.png)

3.  Enter a name and an optional description for the custom policy.
4.  In the Company Guideline field, enter remediation guidelines for any violations detected with this custom policy.
5.  Specify the severity that should be associated with the violation.
6.  Specify which platform to use (currently only the Terraform template is supported).
7.  Next, build your Rego query based on the Cycode template provided.

```
   example: package terraform.aws.ami_not_encrypted

   results[result] {	
   	ami := input.document[i].resource.aws_ami[name]	
   	ami.ebs_block_device	
       not ami.ebs_block_device.encrypted
       result := {
               "passed": false,		
       "failure_property_path": <add the property/entity location path>
       "failure_type": <add the failure type,will show in the violation details>		
       "failed_check_message": <add violation title this will show on violation details>	
       }
   }
```

![](/assets/d8c9fcd-image.png)

8.  Next, we’ll use the first of two validation mechanisms to validate the query. Click **Validate Query**.
9.  Next, test your Rego query to verify that it’s correct and catches the information you want it to catch. In the first field, enter a sample that contains the security vulnerability.
10.  In the second field, enter a sample that doesn’t have the security vulnerabillity.

![](/assets/cadc244-image.png)

11.  Click **Run Test** to test both examples.
12.  If the result is successful, click **Done** to complete the custom policy.

## Custom Rego-based examples [Copied!](#custom-rego-based-examples "Copy link to this section")

In the following sections we’ll look at some examples of using Rego-based queries for Terraform and Docker.

### Source file examples [Copied!](#source-file-examples "Copy link to this section")

Terraform:

```
1
2
3
4
5
6
```

```hcl
resource "azurerm_container_registry" "example" {
  name                = "exampleacr"
  resource_group_name = azurerm_resource_group.example.name
  location            = azurerm_resource_group.example.location
  anonymous_pull_enabled = true
}
```

Docker:

```
1
2
```

```dockerfile
FROM node:14
CMD ["npm", "start"]
```

Note that the Terraform example allow pulling container images without authentication, while in the Docker file example, we’re using node base image version 14.

Now lets look at the query examples

### Rego-query examples [Copied!](#rego-query-examples "Copy link to this section")

Terraform:

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
```

```rego
package example

results[result] {
	resource := input.document[i].resource
	azureregistry := resource.azurerm_container_registry[name]
    azureregistry.anonymous_pull_enabled == true

        result := {
            "passed": false,
            "failure_property_path": sprintf("resource.azurerm_container_registry.%s.anonymous_pull_enabled", [name]),
            "failure_type": "InvalidValue",
            "failed_check_message": "Azure container registry should not allow anonymous"
        }
}
```

Docker:

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
```

```rego
package example

results[result] {
	baseImageResource := input.document[d].stages[s].base
    baseTag := baseImageResource.tag
    baseTag == "14"

	result := {
		"passed": false,
		"failure_property_path": sprintf("stages.%d.base.tag", [s]),
		"failure_type": "InvalidValue",
		"failed_check_message": "Docker file contains in valid node version",
	}
}
```

In the Terraform query, we want to add a new policy that raises violation when the `anonymous_pull_enabled` is true, while in Docker, we want to create a policy that triggers a violation when the node base image version is 14.

## Creating a custom policy to handle base image references [Copied!](#creating-a-custom-policy-to-handle-base-image-references "Copy link to this section")

The IaC policy, “Specific user should be defined,” is designed to ensure that a Docker file always has a specific user defined for it (i.e, user = someone). The policy is configured to send a warning if Cycode doesn’t find a user defined in the file, since this is a security issue and a best practice.

However, sometimes the user isn’t defined in the file itself, but rather in a referenced file - known as a base image. In this case, the policy isn’t really being ignored; however, Cycode doesn’t know how to reference a base image file, and will automatically generate a warning.

### Workaround [Copied!](#workaround "Copy link to this section")

To work around this issue, we recommend creating a Rego-based Custom Policy, in which the policy states that if specific names are referenced from a base image(s), and then the base image(s) are marked as excluded, marking the source of the base images as `.*` to support regex.  
![](/assets/image%28257%29.png)

Then, provide the two examples required by the custom policy (one with a security vulnerability and one without):  
![](/assets/image%28258%29.png)

Finally, run the test to get the result (note that this may take some time).

Now the policy above won’t send a warning that the name is missing, since the custom policy addresses the issue of the referenced file.

Here’s what this will look like:

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
```

```rego
package dockerfile.specific_user_should_be_defined
import future.keywords.every

results[result] {
    excluded_base_images := [
        "^cycode.io/alpineBaseImageWithUserInstruction.*",
        "^cycode.io/baseImageWithUserInstruction.*",
    ]
    
    stages := input.document[d].stages
    stagesCount = count(stages)
    userInstructions := getInstructionsOfType(stages, "USER")
    userInstructionsCount = count(userInstructions)
    userInstructionsCount == 0
    lastStage := stages[stagesCount - 1]
    not lastStage.base.name == "scratch"
    every pattern in excluded_base_images {
    	every stage in stages {
			not regex.match(pattern, stage.base.name)
        }
	}
    result := {
        "passed": false,
        "failure_property_path": sprintf("stages[%d]", [stagesCount - 1]),
        "failure_type": "MissingField",
        "failed_check_message": "The image will run as root unless a lesser privileged user is defined",
    }
}


getInstructionsOfType(stages, instructionType) = instructions {
	instructions = [x |
		some s, i

		upper(stages[s].instructions[i].type) == upper(instructionType)

		x := {
			"instruction": stages[s].instructions[i],
			"path": sprintf("stages[%d].instructions[%d]", [s, i]),
		}
	]
}
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
