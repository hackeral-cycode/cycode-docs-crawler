# Repositories | Cycode Docs

Source: https://docs.cycode.com/inventory/code-entities/repositories

---

# Repositories

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/inventory/code-entities/repositories.md "Edit this page")

Updated on May 21, 2025 • Published on Oct 21, 2024

* * *

The Repositories page contains the information described below.

## Widgets [Copied!](#widgets "Copy link to this section")

There are three widgets that show the following summary information about your repositories. When you click on specific data in the widget it applies the relevant filter. To restore the view, remove the filter.

Widget

Description

Labels

Shows the total number of labels found by the scan, broken out into the number of repositories that are associated with each label.

Primary language

Shows how many coding languages were detected in the repositories, broken out into how many repositories contain each language.

Visibility

Shows the total number of repositories and how many are public vs. private.

## View repository details [Copied!](#view-repository-details "Copy link to this section")

The **Repositories** shows a list of all the repositories in your environment, with the following details.

### Default view [Copied!](#default-view "Copy link to this section")

**Column**

**Description**

Repository

Name of the repository.

Labels

Labels assigned to the repository (for example, **private**).

Location

Organization where the repository is located.

Primary language

Programming language detected in the repository.

Repo code owner

Owner of the repository.

Technologies

Software management and other tools that were detected regarding this repository.

Security coverage

Scanners that are enabled for this repository, and type of scan that is run.

Total violations

Total number of open violations detected in this repository.

### Additional columns [Copied!](#additional-columns "Copy link to this section")

**Column**

**Description**

Cycode Project

Which Cycode projects contain the repository.

Visibility

Shows the accessibility of the repository, either private or public.

Forked

Shows what type of repository it is, either base or forked.

Archived

Shows whether the repository is archived (Yes/No).

### Inventory card [Copied!](#inventory-card "Copy link to this section")

The repository card contains the following tabs.

#### Overview tab [Copied!](#overview-tab "Copy link to this section")

The Overview tab contains the following sections.

**Section**

**Description**

Insights

At-a-glance cards showing contextual information about the repository, such as whether it has APIs, build workflows, webhooks, or Dockerfiles.

Open Violations

Total number of open violations detected in this repository, broken down by severity.

Exposure Path

Visual graph showing how the repository is connected to other entities. For more information, go to [Exposure paths](/view-and-manage-violations/exposure-paths) .

Repository Owners

Owners identified for this repository. For more information, go to [View the repository owners in the platform](/additional-cycode-features/repository-code-ownership/view-the-repository-owners-in-the-platform) .

Active Contributors

Contributors who have recently committed to this repository.

Composition

Visual breakdown of the programming languages in the repository, including file count, lines of code, and percentage for each language.

Labels

Labels assigned to the repository. You can also add labels manually.

Properties

Metadata about the repository, including SDLC stage, source, visibility, primary language, fork and archive status, merge settings, URL, and detection timestamps.

#### Inventory tab [Copied!](#inventory-tab "Copy link to this section")

The Inventory tab contains six sub-tabs.

**Technologies**

The Technologies tab shows the tools that are associated with the repository.

**API**

The API tab contains the following information about APIs that were detected in the repository.

**Item**

**Description**

Name

Path that includes the name of the API.

Method

HTTP method of the API.

Location

Source that contains the API, and the endpoints.

Language

Language in which the API is written.

Framework

Framework used for the API.

**Sensitive Data**

The Data types tab contains the following information about context of the usage of sensitive data that was detected in this repository.

**Item**

**Description**

Name

Name of the data storage entity where the data type is mentioned.

Category

Category of this data type.

Group

Group of this data type (PII, PHI or Persona Data).

Location

Name of the file where the data type is mentioned.

**Packages**

The Packages tab contains the following information about the packages that were detected in this repository.

**Item**

**Description**

Package

Path that includes the name of the API.

Version

HTTP method of the API.

Ecosystem

Source that contains the API, and the endpoints.

Licenses

License under which the package is distributed.

Publish date

Date when the package version was published.

Health score

Metric based on OpenSSF Scorecard that shows the overall quality, security, and reliability of the package.

**Container image**

The Container image table contains the following information about container images that were detected in this repository.

**Item**

**Description**

Container image

Name of the container image.

Tags

Tags that may have been added to the container image.

Related Dockerfiles

Dockerfiles that are associated with the container image.

Related code repositories

Code repositories associated with the container image.

Last modified

Datestamp of when the container image was last updated.

Discovery source

Source of the container image.

**Build workflows**

The Build workflows tab contains the following information about build workflows that run on this repository.

**Item**

**Description**

Build workflow

Name of the build workflow.

URL

Path to the location of the build workflow.

Cimon installed

Indicates whether CI/MON is used to monitor the development pipeline associated with this build workflow.

Prevent mode

Indicates the status of prevent mode for this build workflow.

Last run

Datestamp of when this build workflow was last run.

#### Violations tab [Copied!](#violations-tab "Copy link to this section")

The Violations tab shows a summary of all the detected violations along with their severity, and the following information:

Item

Description

Policy name

The policy that triggered the violation.

Violations by severity

Number of violations found in this repository that match the policy, listed according to severity.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
