# Create custom secrets policies | Cycode Docs

Source: https://docs.cycode.com/policies/create-and-manage-custom-policies/create-custom-secrets-policies

---

# Create custom secrets policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/policies/create-and-manage-custom-policies/create-custom-secrets-policies.md "Edit this page")

Updated on Nov 13, 2024 • Published on Jul 17, 2024

* * *

If the list of [Secret Detections policies](/scanners/pipeline-security/secrets/secrets-detection-policies/) does not contain a secret type you need, then Cycode provides a way to create a custom secret policy to find these values.

Note that all custom secret policies that are built will be applied to the Secrets pull request status checks and denoted as **Regex** secrets, as shown below: ![](/assets/3a184dd-pull-request-custom-secret.png)

## Creating a custom secret policy [Copied!](#creating-a-custom-secret-policy "Copy link to this section")

1.  Go to the **Policies** tab and click the **\+ Custom Policy** button in the top right-hand corner.
    
2.  In the Create New Policy dialog, click the **Policy Type** dropdown menu and select **Custom Secret**.
    

![](/assets/9fb1202-image.png)

3.  Enter the following information in the pop-up window:
    1.  Name - The name of the custom secret policy
    2.  Description - A description of the custom secret policy
        
        3\. Severity - The severity of the custom secret policy. Can be any of the following:
        
        1\. Critical
        
        2\. High
        
        3\. Medium
        
        4\. Low
        
        5\. Info
        
        4\. Company Guidelines - You can now edit each policy and add your company’s remediation guidelines and instructions.
        
        You can also add links to explain these guidelines by either pasting a link directly or entering the link using the format of brackets \[name\] followed by parentheses (URL).
        
        5\. Secret Regex - The regex of the secret value to be found
        
        6\. Test string - The test values that will test the regex
        
        1\. Provide a **single** sample string that **matches** the pattern you expect.
        
        2\. Provide a **single** sample string that **does not match** the pattern you expect.
        
        ![](/assets/80a8c90-image.png)
        
        🚧 Regex usage
        
        | | All regex used in custom secret policies goes through .NET (C#) libraries. |
        
        Important
        
        | Cycode custom secret policies have a threshold that’s designed to prevent the regex from matching too many results or from being too generic. The validation step below will first check the pattern you’ve entered before proceeding to create the custom policy. | |
        
        6\. Click the **Validate** button to validate the regex for the custom secret policy:
        
        1\. If successful, the dialog will reload with the Dry Run function:
        
        2\. If the regex is too wide (matches too many results), the validation will instead show an error:
        
        Note that if the pattern is correct but the validation strings you entered don’t test the pattern correctly, you’ll see this type of error intead:
        
        8\. Fix the pattern as needed, and then click the **Select repository** dropdown and select a repository on which to run the dry scan.
        
        9\. Click **Start Dry Run**:
        
        9\. Once the dry run scan runs, it will list any violations found that fit the custom secret policy regex. Click the **Done** button to finish creating the policy.
        
        Once the custom secret policy has been created, Cycode will scan the current integrated code base and git history for any occurrences.
        
        \### Regex examples
        
        Here are a few examples of custom secret policies created using regex:
        
        \#### Example 1: Secrets that begin with the organization’s name
        
        In some organizations, there is a form for secrets that starts with the name of the organization and then we run regex that starts with ORG\_ and then looks for the result:
        
        Please create a regex that starts with the characters org\_ and has after it 15 characters
        

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
```

```text

Result:

Regular expression created:
org_[a-zA-Z0-9]{15}

Explanation:
The regex starts with the characters 'org_' followed by 15 characters from the ranges a-z (both lower and upper case) and 0-9.

Possible matches:
org_abcdefghijklmno
org_123456789012345
org_ABCDEFGHIJKLMNO
org_098765432198765
org_xyz123abcdefghi
```

### Example 2: Secrets that contain the word test [Copied!](#example-2-secrets-that-contain-the-word-test "Copy link to this section")

Secrets often contain the word ’test':

Please create a regex that searches for secrets that include the word test - at the beginning, middle or end

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
```

```text

Result:

Regular expression created:
(\btest\w*|\w*test\w*|\w*\btest)

Explanation:
The regex uses word boundaries (\b) to ensure 'test' is a whole word and not part of another word. It then looks for 'test' at the beginning, middle, or end of a word using alternation (|).

Possible matches:
testsecret123
secret123test
mytestsecret456
testpassword789
ourowntest
```

## Editing a custom secret policy [Copied!](#editing-a-custom-secret-policy "Copy link to this section")

Custom secret policies can be found on two different pages on the **Policies** page:**Custom Policies** and **Secret Detections**.

🚧 Important

Currently, only the policy name, description, severity, and remediation guidelines details can be edited in a given custom secret policy.

1.  Go to the **Policies** tab and click **Custom Policies** or **Secret Detections**. ![](/assets/b6be36a-image.png)
    
2.  Using the Search bar, type the name of the custom secret policy to be edited or locate the policy in the list.
    
3.  Click the three-dot option menu next to the policy and select **Edit**.
    

![](/assets/356d559-image.png)

5.  In the Edit policy dialog, make the changes you need to the custom policy. For example, you can add new remediation guidelines as set by your company for this violation.
    
6.  When you’ve completed your edits, click **Done** to save your changes.
    

## Enabling/disabling a custom secret policy [Copied!](#enablingdisabling-a-custom-secret-policy "Copy link to this section")

1.  Go to the **Policies** tab and click **Custom Policies** or **Secret Detections**.
    
2.  Using the Search bar, type the name of the custom secret policy to be edited.
    
3.  Toggle the switch to enable or disable the custom secret policy: ![](/assets/0fd0996-image.png)
    

## Deleting a custom secret policy [Copied!](#deleting-a-custom-secret-policy "Copy link to this section")

1.  Go to the **Policies** page and click **Custom Policies** or **Secret Detections**.
    
2.  Using the Search bar, type the name of the custom secret policy to be deleted.
    
3.  Click the the three-dot option menu and select Delete.
    
4.  The delete policy confirmation pop-up will display. Click the **Delete** button to delete the custom secret policy.
    

![](/assets/aeaf248-edit-custom-secret-delete-confirm.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
