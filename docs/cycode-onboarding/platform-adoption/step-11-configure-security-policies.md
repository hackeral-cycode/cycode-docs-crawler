# Step 11: Configure security policies | Cycode Docs

Source: https://docs.cycode.com/cycode-onboarding/platform-adoption/step-11-configure-security-policies

---

# Step 11: Configure security policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-onboarding/platform-adoption/step-11-configure-security-policies.md "Edit this page")

Updated on May 26, 2024 • Published on May 23, 2024

* * *

Cycode provides full visibility to its defined policies and allows you to craft your own custom policies. Go to the Policies page to see a full description of all defined policies as a long list of policies or group them by their category. From here you can learn about the policy, understand what platform and assets are relevant for the policy, change the default severity of a policy or disable it completely.

Click one of the policies, for example “Alibaba Cloud Keys”. If you are not using Alibaba Cloud in your organization, change its default severity from Critical to High. Add “Company Guidelines” specifying how you expect your developers and application security analyst to act when they triage a violation of this policy.

Now define your own new policy:

1.  Click the **Custom Policy** button.
2.  Give a name to the policy, for example “Internal secrets pattern”.
3.  Choose the policy type. Opening the policy type options will show which type of custom policies are available in Cycode. Choose for example “Custom secret”.
4.  Add a regular expression to catch violations of your policies. For example “CyXX.\*\[0-9\]ZZ”.
5.  Provide a test example for a string that is expected to be detected by the policy and another string that will not. For example: “CyXXhelloworld1ZZ” is a string that matches the regular expression and “CyABCD123ZZ” is a string that does not match the aforementioned pattern.
6.  Click the **Validate** button to validate the expression matches the examples provided and click **Done** to create the policy.
7.  Simulate committing and merging code that contains a secret of this pattern and verify that a violation is created.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
