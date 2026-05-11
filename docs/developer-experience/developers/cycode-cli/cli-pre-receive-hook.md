# CLI pre-receive hook | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-cli/cli-pre-receive-hook

---

# CLI pre-receive hook

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-cli/cli-pre-receive-hook.md "Edit this page")

Updated on Sep 22, 2025 • Published on Sep 22, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Pre-receive hooks enforce rules for code contributions before developers can merge commits in a repository. The pre-receive hooks run tests on the code being pushed to ensure that contributions meet repository or organization policy. If the commit contents pass the pre-receive hook tests, the code can be merged into the repository.

Note

[Pre-commit](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#pre-commit-scan) and [Pre-push](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#pre-push-scan) hooks are available for Secrets, SAST and SCA scans.

### Prerequisites [Copied!](#prerequisites "Copy link to this section")

To use pre-receive hooks with the Cycode CLI, you need the following:

*   The Cycode CLI pre-installed on your Git server. Do the following:
    1.  Run `pip3 install cycode --user`.
    2.  Run `cycode` to verify that the installation was successful. If you receive the message `cycode: command not found`, add the installation path to the `PATH` environment variable. For more information, go to [Installing Cycode CLI](https://github.com/cycodehq-public/cycode-cli#install-cycode-cli) .
*   A Cycode service account

## Install a pre-receive hook [Copied!](#install-a-pre-receive-hook "Copy link to this section")

### Specific repository [Copied!](#specific-repository "Copy link to this section")

1.  Find the repository location in the Git server instance.
    
    *   For GitLab Enterprise: [Git server hooks | GitLab](https://docs.gitlab.com/ee/administration/server_hooks.html)
    *   For Bitbucket Server: [Identifying a repository’s ID in Bitbucket Data Center](https://confluence.atlassian.com/bitbucketserverkb/identifying-a-repository-on-the-bitbucket-server-779171333.html)
2.  To create the pre-receive hook, create a new file in the repository’s Git hook location (.git/hook) under the repository location you found in step 1, and name it `pre-receive`.
    
3.  Copy the following script to the \`pre-receive file:
    
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
    
    ```bash
    #!/bin/sh
    
    # optional
    # Update the server URL only if you have Cycode self-managed
    # export CYCODE_API_URL = "<cycode server url>"
    export CYCODE_CLIENT_ID="<client_id>"
    export CYCODE_CLIENT_SECRET="<client_secret>"
    
    set -e
    cycode scan pre_receive
    ```
    
4.  Make the file executable by running `chmod +x pre-receive`.
    
5.  Change the file owner and file group owner to `git` user:
    
    1.  Change the file owner: `chown git pre-receive`
    2.  Change the file group owner: `chgrp git pre-receive`
    3.  To verify the change, run `ls -l`. The output should be `-rwxr-xr-x 1 git git 662 Mar 2 09:15 pre-receive` (first `git` is the file owner, second `git` is the file group owner).
6.  Configure the Cycode token. There are two methods for configuring the token:
    
    *   In the script above, enter the client ID and secret.
    *   Set environment variables on the instance.
7.  \[On-premise only\] Update the Cycode API URL (optional) - Update `CYCODE_API_URL` in the pre-receive file.
    

### All repositories [Copied!](#all-repositories "Copy link to this section")

1.  Set the global hooks directory in the Git server instance.
    *   For GitLab Enterprise (see the [Gitlab docs](https://docs.gitlab.com/ee/administration/server_hooks.html#create-global-server-hooks-for-all-repositories) ):
        *   In `/etc/gitlab/gitlab.rb` set the the value `gitaly['custom_hooks_dir']`, or use the default location by uncommenting it.
        *   Run `gitlab-ctl reconfigure`.
        *   Follow the instructions for setting the pre-receive hook for a specific repository (above).
2.  Add the pre-receive hook according to the Git server requirements.
    *   For GitLab Enterprise:
        *   Go to the directory and create a directory named `pre-receive.d`.
        *   In the directory, follow the instructions for setting the pre-receive hook for a specific repository (above).

### GitLab Kubernetes cluster (Gitaly) [Copied!](#gitlab-kubernetes-cluster-gitaly "Copy link to this section")

1.  Copy the following bash to your pre-receive ConfigMap.
    
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
    
    ```hcl
    #!/bin/sh
    
    CYCODE_CLI_DIRECTORY="/tmp/cycode_app"
    CYCODE_CLI_LOCATION="$CYCODE_CLI_DIRECTORY/cycode"
    if ! [ -f "$CYCODE_CLI_LOCATION" ]; then
          echo "Downloading cycode cli to $CYCODE_CLI_LOCATION"
      curl https://cycode-public-static-assets.s3.eu-central-1.amazonaws.com/cycode_cli/cycode_cli_0.2.2 -  -create-dirs --output $CYCODE_CLI_LOCATION
        chmod +x $CYCODE_CLI_LOCATION
    fi
    
    export CYCODE_CLIENT_ID=""
    export CYCODE_CLIENT_SECRET=""
    # export CYCODE_API_URL="https://<cycode_url>" # relevant only for on-premise 
    export PATH="$PATH:$CYCODE_CLI_DIRECTORY"
    # find your gitaly-git version "ls /usr/local/bin/gitaly-git-v*""
    export GIT_PYTHON_GIT_EXECUTABLE="/usr/local/bin/gitaly-git-v2.38" # executable git location,   update you gitaly-git version
    
    set -e
    cycode scan pre_receive
    ```
    
2.  Configure the Cycode token using one of the following methods:
    
    *   In the script above, apply the client ID and secret.
    *   Set the environment variables.

## Skip the pre-receive hook [Copied!](#skip-the-pre-receive-hook "Copy link to this section")

To skip Cycode’s pre-receive hook, add `-o skip-cycode-scan` to the `git push` command.

Note

Verify that the option `receive.advertisePushOptions` is enabled in the Git instance configuration.

To enable the option, run `git config receive.advertisePushOptions true` (GitLab enables this option by default).

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
