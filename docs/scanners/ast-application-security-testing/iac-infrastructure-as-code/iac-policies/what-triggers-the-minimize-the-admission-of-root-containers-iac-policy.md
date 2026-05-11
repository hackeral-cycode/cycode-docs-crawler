# What triggers the `Minimize the admission of root containers` IaC policy | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/what-triggers-the-minimize-the-admission-of-root-containers-iac-policy

---

# What triggers the \`Minimize the admission of root containers\` IaC policy

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/iac-infrastructure-as-code/iac-policies/what-triggers-the-minimize-the-admission-of-root-containers-iac-policy.md "Edit this page")

Updated on Aug 14, 2024 • Published on Aug 11, 2024

* * *

## Example use case [Copied!](#example-use-case "Copy link to this section")

Flagging a YAML that includes `allowPrivilegeEscalation`: `false` but the YAML file is using a non-root user.

When the option `runAsNonRoot` (Optional) set to `true`, this requires the container to run without root privileges.

Note

The default for `runAsNonRoot` will be false (run with root privileges).

When using `runAsUser` (optional), if the user number is anything other than 0, this requires the container to run with that user ID, which is not a root ID.

## YAML file example [Copied!](#yaml-file-example "Copy link to this section")

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
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
spec:
  containers:
  - name: secure-container
    image: busybox
    command: ["sh", "-c", "echo Hello Kubernetes! && sleep 3600"]
    securityContext:
      allowPrivilegeEscalation: false
      runAsNonRoot: true
      runAsUser: 1
```

## Code example explanation [Copied!](#code-example-explanation "Copy link to this section")

*   `allowPrivilegeEscalation: false` : This setting ensures that the container cannot gain more privileges than its parent process, and helps to prevent privilege escalation attacks.
*   `runAsNonRoot: true` : This ensures that the container runs as a non-root user; running applications as a non-root user whenever possible is a security best practice.
*   `runAsUser: 1` : This specifies that the container should run as the user with UID 1. You can adjust this to any non-zero UID that is configured within the container’s image.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
