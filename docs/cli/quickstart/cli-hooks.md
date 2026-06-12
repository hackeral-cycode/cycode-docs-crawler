# Manage git hooks | Cycode Docs

Source: https://docs.cycode.com/cli/quickstart/cli-hooks

---

# Manage git hooks

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/quickstart/cli-hooks.md "Edit this page")

* * *

Git hooks run the CLI automatically before commits and pushes, catching violations before they reach the remote. The CLI integrates with the `pre-commit` framework.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

Install the `pre-commit` framework before configuring hooks:

```
1
```

```bash
pip install pre-commit
```

## Pre-commit hook [Copied!](#pre-commit-hook "Copy link to this section")

The pre-commit hook scans for secrets, IaC misconfigurations, and SAST violations before each commit.

Add the following to `.pre-commit-config.yaml` in your repository root:

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
repos:
  - repo: https://github.com/cycodehq/cycode-cli
    rev: v3.5.0  # Use the latest release tag
    hooks:
      - id: cycode        # Secrets scan
        stages: [pre-commit]
      - id: cycode-sca    # SCA scan
        stages: [pre-commit]
      - id: cycode-sast   # SAST scan
        stages: [pre-commit]
```

Then install the hook:

```
1
```

```bash
pre-commit install
```

## Pre-push hook [Copied!](#pre-push-hook "Copy link to this section")

The pre-push hook scans the commit history of commits being pushed before they reach the remote.

Add the following to `.pre-commit-config.yaml`:

```
1
2
3
4
5
6
```

```yaml
repos:
  - repo: https://github.com/cycodehq/cycode-cli
    rev: v3.5.0
    hooks:
      - id: cycode-pre-push
        stages: [pre-push]
```

Then install the hook:

```
1
```

```bash
pre-commit install --hook-type pre-push
```

## Keeping hooks up to date [Copied!](#keeping-hooks-up-to-date "Copy link to this section")

Run the following command to update the `rev` field to the latest release automatically:

```
1
```

```bash
pre-commit autoupdate
```

## Skipping hooks temporarily [Copied!](#skipping-hooks-temporarily "Copy link to this section")

To skip the Cycode pre-push or pre-receive scan for a single push, pass the `skip-cycode-scan` push option:

```
1
```

```bash
git push -o skip-cycode-scan
```

Important

Do not use `--no-verify`. That flag bypasses all hooks, not just the Cycode hook.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
