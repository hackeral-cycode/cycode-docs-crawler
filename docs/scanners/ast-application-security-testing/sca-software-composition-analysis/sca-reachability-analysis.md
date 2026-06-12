# SCA reachability analysis | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-reachability-analysis

---

# SCA reachability analysis

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sca-software-composition-analysis/sca-reachability-analysis.md "Edit this page")

Updated on Mar 18, 2026 • Published on Sep 1, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode analyzes vulnerabilities detected in your project’s direct dependencies to distinguish between code that is simply present and code that is actively called. Vulnerabilities in indirect (transitive) dependencies are not currently scanned for reachability. This allows security and development teams to:

*   Prioritize fixes for vulnerabilities that pose a genuine threat.
*   Reduce alert fatigue by ignoring vulnerabilities in unreachable code.
*   Accelerate development by avoiding unnecessary work on non-exploitable flaws.

### Reachability analysis in Cycode [Copied!](#reachability-analysis-in-cycode "Copy link to this section")

Cycode uses a proprietary database of vulnerable functions that acts as our rulebook, mapping specific functions to known CVEs. The Cycode SAST engine then uses these rules to scan your code, identifying any calls that match these known vulnerable functions.

When a function call in your code matches a known vulnerable function from the Cycode database, the vulnerability is confirmed as reachable. This provides concrete evidence that your application is actively using a piece of code confirmed to be insecure, allowing you to prioritize real threats.

## Function-level reachability [Copied!](#function-level-reachability "Copy link to this section")

Function-level reachability is a more granular form of reachability. It indicates that a specific function or method within an imported module or your own codebase is actively called and executed.

Function-level reachability provides critical insights into your actual risk exposure. If a specific function containing a known vulnerability has function-level reachability, it means your application has an active execution path to that vulnerable code. This significantly increases the likelihood that the vulnerability can be exploited. Conversely, if a vulnerable function exists within an imported dependency but lacks function-level reachability (meaning your code never calls that specific problematic function), the immediate risk posed by that particular vulnerability is lower, even though the broader dependency is loaded.

### Supported languages [Copied!](#supported-languages "Copy link to this section")

Cycode uses our proprietary v1 SAST engine to provide a unified experience across all supported languages.

Language

Function-Level Reachability

C/C++

No

Dart

No

Elixir

No

Go

**Yes**

Java

**Yes**

Javascript / Typescript / JSX / TSX

**Yes**

PHP

No

Python

No

Ruby

No

Rust

No

Scala

No

.NET

No

### Example: Reachability in a Node library [Copied!](#example-reachability-in-a-node-library "Copy link to this section")

1.  Install the axios library by running the following command:
    
    ```
    1
    ```
    
    ```bash
    npm install axios
    ```
    
    The library is downloaded and available in your project’s environment. However, your actual application code isn’t using it yet. It’s like having a tool in your toolbox, but you haven’t taken it out to use.
    
2.  Write an import statement in your NodeJS code to make the axios library and its contents accessible:
    
    ```
    1
    ```
    
    ```javascript
    import axios from "axios";
    ```
    
    When your application starts, this import statement instructs it to load the axious module. This means your code can now use the functions and classes provided by the axios library, even if you haven’t written the specific lines to call those functions yet.
    
3.  Write code that utilizes a specific function from the axios library:
    
    ```
    1
    2
    ```
    
    ```javascript
    const response = await axios.get('/user?ID=12345');
    console.log(response);
    ```
    
    In this scenario, the `axios.get()` function now has function-level reachability. Your application isn’t just loading the axios module; it’s actively invoking one of its specific functions.
    

### Known limitations [Copied!](#known-limitations "Copy link to this section")

*   Some CVEs refer to vulnerable package configuration where function-level reachability doesn’t apply.
*   When using dynamic function calls, Cycode’s SAST scanner may miss the vulnerable function call.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
