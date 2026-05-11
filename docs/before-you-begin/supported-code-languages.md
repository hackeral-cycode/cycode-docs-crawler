# Supported code languages | Cycode Docs

Source: https://docs.cycode.com/before-you-begin/supported-code-languages

---

# Supported code languages

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/before-you-begin/supported-code-languages.md "Edit this page")

Updated on Jan 25, 2026 • Published on Apr 24, 2025

* * *

Cycode supports the listed languages for the following domains:

*   [SAST](/before-you-begin/supported-code-languages#sast)
*   [SCA](/before-you-begin/supported-code-languages#sca)
*   [IaC](/before-you-begin/supported-code-languages#iac)
*   [APIs](/before-you-begin/supported-code-languages#api-detection)

## SAST [Copied!](#sast "Copy link to this section")

Language

Frameworks

[C](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#c)

\-

[C++](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#c-1)

\-

[Csharp](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#csharp)

.NET

[Elixir](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#elixir)

Phoenix

[Go](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#go)

Gorilla

[Java](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#java)

Android, Spring

[JavaScript](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#javascript)

Angular, Express Hapi, React

[Kotlin](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#kotlin)

Android, Ktor Spring

[PHP](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#php)

Symfony

[Python](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#python)

Django, Flask

[Ruby](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#ruby)

Rails

[Rust](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#rust)

Actix, Axum

[Scala](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#scala)

Apache Struts, Apache Turbine Hibernate, Play Scala, Spring

[Swift](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#swift)

Cryptokit, Foundation Ios, Local Authentication Messageui, Safari Services Security, Trustkit Uikit, Webkit

[VB.NET](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/#vbnet)

.NET

For more information about supported languages in SAST, go to [SAST policies](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies) .

## SCA [Copied!](#sca "Copy link to this section")

Ecosystem

Package manager

Manifest file

Lock file

[.NET](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/net)

NuGet

.vbproj, .csproj, packages.config

packages.lock.json (optional)

[C/C++](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/c-c)

Conan

conanfile.txt, conanfile.py

conan.lock

[Dart](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/dart)

Pub

pubspec.yaml

pubspec.lock

[Elixir](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/elixir)

Mix/Hex

mix.exs

mix.lock

[Go](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/go)

Go Modules

go.mod

go.sum

[Java](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/java) (Kotlin, Groovy)

Maven

pom.xml

N/A

Gradle

build.gradle, build.gradle.kts

build.gradle.lock (optional)

Bazel

BUILD

maven\_install.json

[JavaScript](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/javascript)

Deno

deno.json

deno.lock

NPM

package.json

package-lock.json

PNPM

package.json

pnpm-lock.yaml

Yarn

package.json

yarn.lock

[PHP](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/php)

Composer

composer.json

composer.lock

[Python](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/python)

Pip

requirements.txt

N/A

setup.py

N/A

Pipenv

Pipfile

pipfile.lock

Poetry

pyproject.toml

poetry.lock

UV\*

pyproject.toml

uv.lock

[Ruby](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/ruby)

Bundler

Gemfile

gemfile.lock

[Rust](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/rust)

Cargo

Cargo.toml

cargo.lock

[Scala](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/scala)

SBT

build.sbt

build.sbt.lock

[Swift](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers/swift)

Swift Package Manager

Package.swift

Package.resolved

Carthage

Cartfile

cartfile.resolved, cartfile.private

CocoaPods

Podfile

podfile.lock

\*Early access

For more information about the SCA ecosystems and package managers that Cycode supports, go to [Supported SCA ecosystems/package managers](/scanners/ast-application-security-testing/sca-software-composition-analysis/supported-ecosystems-and-package-managers) .

## IaC [Copied!](#iac "Copy link to this section")

Language

Terraform

Terraform Plan

AWS CloudFormation

Dockerfiles

ARM

Kubernetes YAML

To learn more about supported IaC languages, see [Supported IaC languages, cloud providers, and cloud resources](/scanners/ast-application-security-testing/iac-infrastructure-as-code/supported-iac-languages-cloud-providers-and-cloud-resources) .

## API Detection [Copied!](#api-detection "Copy link to this section")

Language

Framework

OpenAPI / Swagger

—

Java

Spring

JavaScript

Express.js

Python

Django, FastAPI, Flask

C#

.Net

Ruby

Rails

To learn more about API detection, see the [Inventory APIs](/context-intelligence-graph/inventory/application-insights/apis) .

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
