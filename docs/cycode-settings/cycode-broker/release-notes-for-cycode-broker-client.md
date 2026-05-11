# Release notes for Cycode Broker client | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/cycode-broker/release-notes-for-cycode-broker-client

---

# Release notes for Cycode Broker client

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/cycode-broker/release-notes-for-cycode-broker-client/_index.md "Edit this page")

Updated on Mar 17, 2026 • Published on Jan 26, 2026

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic contains release notes for the Cycode Broker client.

## Version history summary [Copied!](#version-history-summary "Copy link to this section")

Version

Date

Highlights

0.31.2

2026-03-16

Internal cleanup

0.31.1

2026-03-11

Runtime updates

0.30.5

2026-03-03

Stability fixes

0.30.4

2026-02-11

Runtime updates

0.30.3

2026-01-28

Runtime updates

0.30.2

2026-01-15

Runtime updates

0.30.1

2025-12-21

Shallow clone support

0.29.3

2025-12-17

Proxy compatibility

0.29.2

2025-12-17

Improved error messages

0.29.1

2025-12-04

Perforce P4 2025

0.28.5

2025-11-23

Perforce clone fixes

0.28.4

2025-11-22

Security hardening

0.28.3

2025-11-17

Whitespace handling

0.28.1

2025-11-13

P4 shallow clone fix

0.27.5

2025-11-11

Runtime updates

0.27.4

2025-10-15

Runtime updates

0.27.3

2025-09-10

Runtime updates

0.27.2

2025-08-31

Runtime updates

0.27.1

2025-07-29

POST streaming

0.26.6

2025-07-09

Runtime updates

0.26.5

2025-07-01

GraphQL enhancements

0.26.4

2025-06-11

Runtime updates

0.26.3

2025-05-14

Runtime updates

0.26.2

2025-05-02

Security update

0.26.1

2025-04-09

Stream handling

0.25.1

2025-03-31

Metrics endpoint

## Changelog [Copied!](#changelog "Copy link to this section")

### Version 0.31.2 [Copied!](#version-0312 "Copy link to this section")

**Release Date:** 2026-03-16

*   Internal maintenance cleanup for improved performance and reduced complexity

* * *

### Version 0.31.1 [Copied!](#version-0311 "Copy link to this section")

**Release Date:** 2026-03-11

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.30.5 [Copied!](#version-0305 "Copy link to this section")

**Release Date:** 2026-03-03

*   Fixed connection handling to prevent socket exhaustion during long-running operations
    
*   Fixed unbounded retry behavior that could cause resource exhaustion under rate limiting
    
*   Improved token refresh reliability under concurrent access
    

* * *

### Version 0.30.4 [Copied!](#version-0304 "Copy link to this section")

**Release Date:** 2026-02-11

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.30.3 [Copied!](#version-0303 "Copy link to this section")

**Release Date:** 2026-01-28

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.30.2 [Copied!](#version-0302 "Copy link to this section")

**Release Date:** 2026-01-15

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.30.1 [Copied!](#version-0301 "Copy link to this section")

**Release Date:** 2025-12-21

*   Added support for shallow clone operations, enabling faster repository cloning with reduced disk usage

* * *

### Version 0.29.3 [Copied!](#version-0293 "Copy link to this section")

**Release Date:** 2025-12-17

*   Improved compatibility with proxy and network inspection environments

* * *

### Version 0.29.2 [Copied!](#version-0292 "Copy link to this section")

**Release Date:** 2025-12-17

*   Enhanced error messages for broker connectivity issues to aid troubleshooting

* * *

### Version 0.29.1 [Copied!](#version-0291 "Copy link to this section")

**Release Date:** 2025-12-04

*   Upgraded Perforce P4 integration to version 2025

* * *

### Version 0.28.5 [Copied!](#version-0285 "Copy link to this section")

**Release Date:** 2025-11-23

*   Fixed handling of nested git directories in Perforce clones

* * *

### Version 0.28.4 [Copied!](#version-0284 "Copy link to this section")

**Release Date:** 2025-11-22

*   Security hardening of the container image

* * *

### Version 0.28.3 [Copied!](#version-0283 "Copy link to this section")

**Release Date:** 2025-11-17

*   Fixed handling of Perforce depot paths containing whitespaces
    
*   Improved git directory exclusion in Perforce clones
    

* * *

### Version 0.28.2 [Copied!](#version-0282 "Copy link to this section")

**Release Date:** 2025-11-13

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.28.1 [Copied!](#version-0281 "Copy link to this section")

**Release Date:** 2025-11-13

*   Fixed shallow clone functionality for Perforce Git P4
    
*   Improved git directory handling during clones
    

* * *

### Version 0.27.5 [Copied!](#version-0275 "Copy link to this section")

**Release Date:** 2025-11-11

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.27.4 [Copied!](#version-0274 "Copy link to this section")

**Release Date:** 2025-10-15

*   Updated runtime dependencies for improved stability and security
    
*   Performance optimizations in task handling
    

* * *

### Version 0.27.3 [Copied!](#version-0273 "Copy link to this section")

**Release Date:** 2025-09-10

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.27.2 [Copied!](#version-0272 "Copy link to this section")

**Release Date:** 2025-08-31

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.27.1 [Copied!](#version-0271 "Copy link to this section")

**Release Date:** 2025-07-29

*   Added support for POST method in streaming requests

* * *

### Version 0.26.6 [Copied!](#version-0266 "Copy link to this section")

**Release Date:** 2025-07-09

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.26.5 [Copied!](#version-0265 "Copy link to this section")

**Release Date:** 2025-07-01

*   Enhanced GraphQL support with flexible response field handling

* * *

### Version 0.26.4 [Copied!](#version-0264 "Copy link to this section")

**Release Date:** 2025-06-11

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.26.3 [Copied!](#version-0263 "Copy link to this section")

**Release Date:** 2025-05-14

*   Updated runtime dependencies for improved stability and security

* * *

### Version 0.26.2 [Copied!](#version-0262 "Copy link to this section")

**Release Date:** 2025-05-02

*   Security update addressing container image vulnerabilities

* * *

### Version 0.26.1 [Copied!](#version-0261 "Copy link to this section")

**Release Date:** 2025-04-09

*   Improved stream task handling

* * *

### Version 0.25.1 [Copied!](#version-0251 "Copy link to this section")

**Release Date:** 2025-03-31

*   Added metrics endpoint for monitoring broker client health and performance

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
