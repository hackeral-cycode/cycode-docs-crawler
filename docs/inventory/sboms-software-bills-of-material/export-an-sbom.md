# Export an SBOM | Cycode Docs

Source: https://docs.cycode.com/inventory/sboms-software-bills-of-material/export-an-sbom

---

# Export an SBOM

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/sboms-software-bills-of-material/export-an-sbom.md "Edit this page")

Updated on May 25, 2026 • Published on Aug 5, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

You can export SBOMs for your repositories in standard industry formats from the Reports view.

## Supported SBOM formats [Copied!](#supported-sbom-formats "Copy link to this section")

Cycode supports the two leading industry standards for SBOMs, ensuring broad compatibility with third-party tools and systems.

Format

Description

Primary use case

CycloneDX

An OWASP SBOM standard designed for security contexts and the identification of known and unknown risks.

Application security, vulnerability management, and integration with modern security tooling.

SPDX

An open standard (ISO/IEC 5962:2021) focused on comprehensively capturing software component and license information.

License compliance, legal reviews, and situations requiring formal specification.

## Generate an SBOM report [Copied!](#generate-an-sbom-report "Copy link to this section")

### Step 1: Details [Copied!](#step-1-details "Copy link to this section")

In the Imported SBOMs view, click **Export SBOM** (or, in the Reports view, click **Create Report**) to launch the report wizard.

Enter a name and an optional description for the report, then click **Next**.

### Step 2: Report type [Copied!](#step-2-report-type "Copy link to this section")

_(Reports view only)_ Select **SBOM** as the report type, then click **Next**.

### Step 3: Report content [Copied!](#step-3-report-content "Copy link to this section")

Select the source for the SBOM report:

Option

Description

**Repository**

Export dependencies found in SCM repositories.

**Imported SBOM**

Export a report based on an imported SBOM.

If you selected **Repository** as the source, use one of the following methods to define the scope:

#### Basic scope selection [Copied!](#basic-scope-selection "Copy link to this section")

In the left panel, select how to group available assets:

Group by

Description

**SCM Organizations**

Groups repositories by their source control organization.

**Repository Labels**

Groups repositories by Cycode label.

The picker displays three columns:

1.  **Organizations** (or **Labels**) — select one or more groups.
2.  **Repositories** — select the repositories within the chosen group.
3.  **Branches** — select individual branches, or click **Select All Branches** to include all branches for the selected repository.

#### Granular scope selection [Copied!](#granular-scope-selection "Copy link to this section")

Early Access

This feature is in early access phase. If you want to enable it in your environment, please contact your Cycode support representative.

In the **Repository** tab, use the **Group by** toggle to organize the asset tree:

Group by

Description

**SCM Organizations** (default)

Groups repositories by their source control organization.

**Repository Labels**

Groups repositories by Cycode label.

**Cycode Projects**

Groups repositories by logical Cycode project.

The tree is organized in the following hierarchy: Grouping level > Repository > Branch > Code Project.

Select assets at any level of the hierarchy. The following table describes what is exported for each selection:

Asset selected

What is exported

**SCM Organization**

All repositories in the organization, using the default branch of each, including all code projects.

**Repository**

All code projects on the default branch.

**Branch**

All code projects on that specific branch.

**Code Project**

That exact manifest file on its branch.

**Repository Label**

All repositories attached to the label, using the default branch of each, including all code projects. SCM organizations attached to the label are not included.

**Cycode Project**

All repositories directly attached to the project, using the default branch of each, including all code projects. SCM organizations and labels attached to the project are not included.

Note

When you select a Cycode Project, only repositories that are **directly attached** to it are included. Repositories within SCM organizations or labels that are linked to the project are not exported.

Use the search bar to find repositories and code projects across all groupings. Each result displays the full ancestry path (for example, `organization / repository-name / branch / manifest-file`). For each result you can:

*   **Locate** — Scopes the tree to that specific asset.
*   **Add** — Adds the item to the selection at that exact level of granularity.

All selected assets appear in the **Selected assets** panel on the right. Click **×** to remove an item.

#### Report options [Copied!](#report-options "Copy link to this section")

The following options apply to both scope selection methods:

*   Select whether to include vulnerabilities associated with the exported code dependencies.
*   Select whether to include dev dependencies.

Click **Next**.

### Step 4: Settings [Copied!](#step-4-settings "Copy link to this section")

Select the SBOM format: **SPDX-2.2** or **CycloneDX-1.6**.

Select the output file format: **JSON** or **XML**.

Note

You can configure additional options as described in [Generate a report](/additional-cycode-features/generate-a-report) .

Click **Create report**.

After the report is generated, it appears in the report list.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
