# Cycode CLI FAQs | Cycode Docs

Source: https://docs.cycode.com/developer-experience/developers/cycode-cli/cycode-cli-faqs

---

# Cycode CLI FAQs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/developer-experience/developers/cycode-cli/cycode-cli-faqs.md "Edit this page")

Updated on Feb 12, 2026 • Published on Aug 11, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic lists common FAQs about the Cycode CLI.

## FAQs [Copied!](#faqs "Copy link to this section")

### Are there current dependencies for the Cycode binary? [Copied!](#are-there-current-dependencies-for-the-cycode-binary "Copy link to this section")

Yes. The list of the dependencies is provided in the [Cycode CLI package in GitHub](https://github.com/cycodehq/cycode-cli/blob/7d83fba4f987278434099b8a752ac643fdda2b38/pyproject.toml#L28-L44) .

### Can I use the Cycode CLI in CI/CD instead of a native SCM integration? [Copied!](#can-i-use-the-cycode-cli-in-cicd-instead-of-a-native-scm-integration "Copy link to this section")

The CLI is not recommended as a replacement for native SCM integrations in CI/CD pipelines. CLI scan results are only visible in **Dev Activity > CLI Logs** and do not appear in the **Violations** tab. For CI/CD pipeline scanning, use a [native SCM integration](/integrations/scm-source-code-management-tools) , which populates the Violations tab and supports PR scanning, merge blocking, and continuous monitoring. The only exception is SCA scans with the `--monitor` flag, which pushes results to the Violations tab to support environments with private registries. For more information, see [CLI scan results vs. SCM integration results](/developer-experience/developers/cycode-cli) .

Also note that individual files over 5mb will be ignored in CLI scans versus SCM scans.

### Can I use multiple tenants (business groups) with the Cycode CLI? [Copied!](#can-i-use-multiple-tenants-business-groups-with-the-cycode-cli "Copy link to this section")

Yes, but not concurrently. You have to switch manually between tenants using the [Cycode config command](https://github.com/cycodehq/cycode-cli?tab=readme-ov-file#using-the-configure-command) process to change the credentials.

### Why doesn’t Cycode detect a violation when performing an SCA scan for the lock file only using `cycode scan -t sca path <lock_file_name>`? [Copied!](#why-doesnt-cycode-detect-a-violation-when-performing-an-sca-scan-for-the-lock-file-only-using-cycode-scan--t-sca-path-lock_file_name "Copy link to this section")

Cycode needs to scan both the manifest file and the lock file in order to get better scan insights. To get applicable results from the SCA scan run the scan command for the entire repository or directory, which includes both **manifest** and **lock\_** files:

`cycode scan -t sca path ./`

### Can I authenticate the Cycode CLI and run the Cycode CLI scan command directly from the Docker run command? [Copied!](#can-i-authenticate-the-cycode-cli-and-run-the-cycode-cli-scan-command-directly-from-the-docker-run-command "Copy link to this section")

Yes. After you create a [service account](/cycode-settings/user-administration/service-accounts) you can push custom environment variables like `CYCODE_APP_URL` , `CYCODE_API_URL`, `CYCODE_CLIENT_ID`, and `CYCODE_CLIENT_SECRET` to the Docker run command. This enables you to authenticate and scan directly. For example, the following example uses the Docker run command to scan the current directory data:

```
1
2
3
4
5
6
```

```bash
docker run -v "$PWD:/data" \
    -e CYCODE_APP_URL='https://app.cycode.com' \
    -e CYCODE_API_URL='https://api.cycode.com' \
    -e CYCODE_CLIENT_ID='client_id' \
    -e CYCODE_CLIENT_SECRET='client_secret' \
    cycodehq/cycode_cli:latest cycode scan path /data/
```

Another example uses the Docker run command to check the Cycode version:

```
1
2
3
4
5
6
```

```bash
docker run \
    -e CYCODE_APP_URL='https://app.cycode.com' \
    -e CYCODE_API_URL='https://api.cycode.com' \
    -e CYCODE_CLIENT_ID='client_id' \
    -e CYCODE_CLIENT_SECRET='client_secret' \
    cycodehq/cycode_cli:latest cycode version
```

### I ignored a violation via the CLI/IDE. Why do I still see it in Cycode? [Copied!](#i-ignored-a-violation-via-the-cliide-why-do-i-still-see-it-in-cycode "Copy link to this section")

When you ignore a violation via the CLI or IDE, it only applies locally. It is specific to your environment and doesn’t affect what’s displayed or processed in Cycode after your code is merged. This feature is designed for developer-specific exclusions during local development.

If you want to share ignored violations with your development team, you can commit the `.cycode/config.yaml` file. However, keep in mind that doing so may create conflicts in absolute or relative paths across different environments.

### Why can’t I scan my repository and commit history using the Cycode CLI? [Copied!](#why-cant-i-scan-my-repository-and-commit-history-using-the-cycode-cli "Copy link to this section")

You have to install the [Git SCM package](https://git-scm.com/) to enable scanning your repository and commit history using the Cycode CLI.

### What happens when working in ⁠monitor mode (–monitor)? [Copied!](#what-happens-when-working-in-monitor-mode-monitor "Copy link to this section")

When working in monitor mode, the knowledge graph will not be updated as a result of SCM events (Push, Repo creation). Curently this feature is only available for the SCA scan type.

### Does Cycode CLI support MCP (Model Context Protocol)? [Copied!](#does-cycode-cli-support-mcp-model-context-protocol "Copy link to this section")

Yes, we have experimental support available. Please see the associated [documentaiton](https://github.com/cycodehq/cycode-cli#mcp-command-experiment)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
