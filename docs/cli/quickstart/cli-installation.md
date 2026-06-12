# Install the CLI | Cycode Docs

Source: https://docs.cycode.com/cli/quickstart/cli-installation

---

# Install the CLI

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cli/quickstart/cli-installation.md "Edit this page")

* * *

Choose your preferred installation method below. Cycode CLI is available via package managers or as a standalone binary for Windows, macOS, and Linux.

## Prerequisites [Copied!](#prerequisites "Copy link to this section")

*   **Python**: The Cycode CLI requires Python 3.9 or above. To use the MCP command, use version 3.10 or above.
*   **Network connection**: The Cycode CLI requires an active network connection to your Cycode instance.

## Installation methods [Copied!](#installation-methods "Copy link to this section")

### Homebrew (macOS & Linux) [Copied!](#homebrew-macos--linux "Copy link to this section")

`cycode` is available in the [Homebrew core repository](https://formulae.brew.sh/formula/cycode) . This is the recommended method for macOS users.

```
1
```

```bash
brew install cycode
```

### Using PyPI (Cross-platform) [Copied!](#using-pypi-cross-platform "Copy link to this section")

If you have a Python environment set up, you can install cycode using pip or pip3.

```
1
2
3
4
5
```

```bash
# Install via pip
pip install cycode

# Or using pip3 explicitly
pip3 install cycode
```

### Manual installation (GitHub releases) [Copied!](#manual-installation-github-releases "Copy link to this section")

You can download the latest pre-compiled binaries from the [GitHub Releases page](https://github.com/cycodehq/cycode-cli/releases) .

**Available binaries:**

Operating System

Executable

**Windows**

`cycode-win.exe`

**Linux**

`cycode-linux`

**macOS (Intel)**

`cycode-mac`

**macOS (Apple Silicon)**

`cycode-mac-arm`

 Windows

1.  Download `cycode-win.exe`.
2.  Optionally, rename the file to `cycode.exe`
3.  Move the file to a permanent folder (e.g. `C:\bin`).
4.  Add that folder to your **System PATH**:
    *   Search for “Edit the system environment variables” in the **Start menu**.
    *   Click **Environment Variables**.
    *   Under **System Variables**, select **PATH** and click **Edit**.
    *   Click **New** and paste the path to your permanent folder (`C:\bin`).
5.  Restart your terminal.

 Linux & macOS

1.  Download the binary corresponding to your OS.
2.  Rename the file to cycode and make it executable:

```
1
2
```

```bash
chmod +x cycode-linux  # or cycode-mac / cycode-mac-arm
mv cycode-linux cycode
```

3.  Move the binary to a directory in your $PATH (e.g., `/usr/local/bin`):

```
1
```

```bash
sudo mv cycode /usr/local/bin/
```

### Verification [Copied!](#verification "Copy link to this section")

After installation, verify that the CLI is working correctly by checking the version:

```
1
```

```bash
cycode --version
```

### Shell completions [Copied!](#shell-completions "Copy link to this section")

**cycode** supports automatic shell completion for Bash, Zsh, and Fish. To enable it, run the following command and follow the on-screen instructions:

```
1
```

```bash
cycode --install-completion
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
