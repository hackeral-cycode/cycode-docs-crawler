# File extension support in SAST | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/file-extension-support-in-sast

---

# File extension support in SAST

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/file-extension-support-in-sast.md "Edit this page")

Updated on May 21, 2026 • Published on Jun 19, 2024

* * *

In general we will consider the following file extensions when scanning files for a particular language. Note with some languages we may use heuristics to look in other file types to try and find code for example looking in `.html` files for JavaScript.

## Bearer by Cycode [Copied!](#bearer-by-cycode "Copy link to this section")

Language

Extensions

Go

`.go`

Java

`.jav` `.java` `.jsh`

Javascript/Typescript

`._js` `.bones` `.cjs` `.cts` `.es` `.es6` `.frag` `.gs` `.jake` `.javascript` `.js` `.jsb` `.jscad` `.jsfl` `.jslib` `.jsm` `.jspre` `.jss` `.jsx` `.mjs` `.mts` `.njs` `.pac` `.sjs` `.ssjs` `.ts` `.tsx` `.xsjs` `.xsjslib`

PHP

`.aw` `.ctp` `.fcgi` `.inc` `.php` `.php3` `.php4` `.php5` `.phps` `.phpt`

Python

`.cgi` `.fgci` `.gyp` `.gypi` `.lmi` `.py` `.py3` `.pyde` `.pyi` `.pyp` `.pyt` `.pyw` `.rpy` `.spec` `.tac` `.toml` `.wsgi` `.xpy`

Ruby

`.builder` `.eye` `.fcgi` `.gemspec` `.god` `.jbuilder` `.mspec` `.pluginspec` `.podspec` `.prawn` `.rabl` `.rake` `.rb` `.rbi` `.rbuild` `.rbw` `.rbx` `.ru` `.ruby` `.spec` `.thor` `.watchr`

Rust

`.rs` `.rlib`

C#

`.cs` `.cake` `.cs.pp` `.csx` `.linq`

Elixir

`.ex` `.exs`

Kotlin

`.kt` `.ktm` `.kts`

VB.NET

`.vb`

## Semgrep [Copied!](#semgrep "Copy link to this section")

Language

Extensions

C

`.c` `.h` `.l` `.y`

C++

`.C` `.cc` `.cpp` `.cxx` `.hh` `.hpp` `.hpx` `.tcc`

Elixir

`.ex`

Go

`.go`

Java

`.java`

Javascript/Typescript

`.js` `.jsx` `.ts` `.tsx` `.html`

Kotlin

`.kt`

PHP

`.php` `.phpt`

Python

`.py` `.pyi`

Ruby

`.rb`

Scala

`.scala` `.sc`

Swift

`.swift`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
