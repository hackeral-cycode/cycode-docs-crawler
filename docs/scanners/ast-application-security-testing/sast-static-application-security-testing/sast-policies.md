# SAST policies | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies

---

# SAST policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/_index.md "Edit this page")

Updated on May 21, 2026 • Published on Jun 30, 2024

* * *

Static Application Security Testing (SAST) policies analyze the source code for potential security vulnerabilities.

Cycode’s **SAST scanner** analyzes source code to uncover vulnerabilities that could be exploited by attackers. By performing a thorough examination of the codebase, the SAST scanner identifies security flaws early in the development process, allowing developers to address these issues before the code is deployed.

## Language Support [Copied!](#language-support "Copy link to this section")

Language

Coverage

Frameworks

SAST Engine

[C](#c)

40 CWEs, 8 best practices

\-

Semgrep

[C#](#c-1)

35 CWEs

.NET

Bearer by Cycode

[C++](#c-2)

31 CWEs, 8 best practices

\-

Semgrep

[Elixir](#elixir)

17 CWEs

Phoenix

Bearer by Cycode

[Go](#go)

34 CWEs

Gorilla

Bearer by Cycode

[Java](#java)

52 CWEs

Android, Spring

Bearer by Cycode

[JavaScript](#javascript)

41 CWEs

Angular, Express  
Hapi, React

Bearer by Cycode

[Kotlin](#kotlin)

32 CWEs

Android, Ktor  
Spring

Bearer by Cycode

[PHP](#php)

36 CWEs

Symfony

Bearer by Cycode

[Python](#python)

42 CWEs

Django, Flask

Bearer by Cycode

[Ruby](#ruby)

34 CWEs

Rails

Bearer by Cycode

[Rust](#rust)

12 CWEs

Actix, Axum

Bearer by Cycode

[Scala](#scala)

41 CWEs

Apache Struts, Apache Turbine  
Hibernate, Play  
Scala, Spring

Semgrep

[Swift](#swift)

7 CWEs, 11 best practices

Cryptokit, Foundation  
Ios, Local Authentication  
Messageui, Safari Services  
Security, Trustkit  
Uikit, Webkit

Semgrep

[VB.NET](#vb.net)

20 CWEs

.NET

Bearer by Cycode

Documentation on how we use file extensions for language detection can be [found here](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/file-extension-support-in-sast) . A list of deprecated policies can be [found here](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/deprecated-sast-policies) .

## C [Copied!](#c "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

The snprintf() and vsnprintf() functions return the total length of the string they tried to create

The snprintf() and vsnprintf() functions return the total length of the string they tried to create. Therefore, this return value can be larger than the size of the destination buffer. If it is used unsafely, e.g. as an index to write to the destination buffer, memory corruption might occur.

Best Practice

Medium

A compromised process might be able to regain elevated group privileges if set(e)gid() is called after set(e)uid()

A compromised process might be able to regain elevated group privileges if set(e)gid() is called after set(e)uid(). A similar case is when privileges are temporarily dropped with seteuid() and then setuid() or seteuid() are called from while under unprivileged user.

[CWE-696](https://cwe.mitre.org/data/definitions/696.html)

High

Reliance on Untrusted Inputs in a Security Decision

The `getlogin` function suffers from many bugs or unknown behaviors depending on the  
system. Often, it gives only the first 8 characters of the login name. The user  
currently logged in on the controlling TTY of our program does not necessarily mean  
it is the user who started the process.  
  
Use getpwuid(geteuid()) and extract the desired information instead.  
  
For more information please see: [https://linux.die.net/man/3/getpwuid](https://linux.die.net/man/3/getpwuid)  

[CWE-807](https://cwe.mitre.org/data/definitions/807.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)

Critical

The signal() API should be regarded as deprecated

The signal() API should be regarded as deprecated. When possible, sigaction() should be used instead, because it allows to precisely specify the desired behavior in case two signals arrive shortly after each other thus preventing many race conditions.

[CWE-364](https://cwe.mitre.org/data/definitions/364.html)

Medium

The atoi(), atol(), atof(), and similar functions don’t handle errors

The atoi(), atol(), atof(), and similar functions don’t handle errors. They don’t check for integer overflow and can return a negative value. They have undefined behavior if the value of the result cannot be represented. They return 0 (or 0.0) if the string does not represent an integer (or decimal), which is indistinguishable from a correctly formatted, zero-denoting input string.

Best Practice

Info

Use of a Broken or Risky Cryptographic Algorithm

The crypt functions are not recommended due to the significantly small  
key space. Modern hardware can crack crypt produced passwords relatively quickly.  
  
Consider using the Argon2id password hashing algorithm provided by libsodium.  
For more information please see: [https://libsodium.gitbook.io/doc/password\_hashing](https://libsodium.gitbook.io/doc/password_hashing) .  

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Critical

Use of a Broken or Risky Cryptographic Algorithm

The RC4 algorithm is vulnerable to many attacks and should no longer be used for encrypting  
data streams.  
  
Consider using libsodium’s `crypto_secretstream_xchacha20poly1305` stream cipher encryption  
functions instead. For more information please see:  
[https://libsodium.gitbook.io/doc/secret-key\_cryptography/secretstream](https://libsodium.gitbook.io/doc/secret-key_cryptography/secretstream)  
  
If you must be FIPS compliant, consider using OpenSSLs AES or 3DES ciphers.  

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Critical

Use of a Broken or Risky Cryptographic Algorithm

The DES algorithm has not been recommended for over 15 years and was withdrawn from NIST (FIPS  
46-3) in 2005.  
  
Consider using libsodium’s `crypto_secretbox_easy` authenticated encryption functions instead.  
  
For more information please see:  
[https://libsodium.gitbook.io/doc/secret-key\_cryptography/secretbox](https://libsodium.gitbook.io/doc/secret-key_cryptography/secretbox) .  
  
If you must be FIPS compliant, consider using OpenSSLs AES or 3DES ciphers.  

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Critical

Use of a Broken or Risky Cryptographic Algorithm

The detected function is not sufficient at generating security-related random numbers,  
such as those used in key and nonce creation. Consider using the libsodium library’s  
`randombytes_random` function instead. More information on libsodium’s random number  
generators can be found here: [https://libsodium.gitbook.io/doc/generating\_random\_data](https://libsodium.gitbook.io/doc/generating_random_data) .  
  
If FIPS validation is required, consider using OpenSSLs `RAND_bytes` family of functions after  
enabling the `FIPS_mode_set`.  
  
For more information on OpenSSL random numbers please see:  
[https://wiki.openssl.org/index.php/Random\_Numbers](https://wiki.openssl.org/index.php/Random_Numbers)  

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Insecure Temporary File

There exists a possible race condition in between the time that `tmpfile` returns  
a pathname, and the time that the program opens it, another program might create  
that pathname using `open`, or create it as a symbolic link.  
  
Consider using the `mkstemp` function instead, but be aware it also contains possible  
risks. Ensure the process has called the `umask` function with restricted permissions prior  
to calling `mkstemp` and validate the permissions prior to using the file descriptor.  
  
For more information on temporary files please see:  
[https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152425](https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152425)  

[CWE-377](https://cwe.mitre.org/data/definitions/377.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Info

Insecure Temporary File

There exists a possible race condition in between the time that `tempnam` or `tmpnam`  
returns a pathname, and the time that the program opens it, another program might create  
that pathname using `open`, or create it as a symbolic link.  
  
Consider using the `mkstemp` function instead, but be aware it also contains possible  
risks. Ensure the process has called the `umask` function with restricted permissions prior  
to calling `mkstemp` and validate the permissions prior to using the file descriptor.  
  
For more information on temporary files please see:  
[https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152425](https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152425)  

[CWE-377](https://cwe.mitre.org/data/definitions/377.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Insecure Temporary File

The `mktemp` function should no longer be used due to multiple flaws. Some implementations  
created random files by using known information like the process ID and a single letter. This  
allows for possible race conditions where an attacker could guess or manipulate these files  
prior to them being used.  
  
Consider using the `mkstemp` function instead, but be aware it also contains possible  
risks. Ensure the process has called the `umask` function with restricted permissions prior  
to calling `mkstemp` and validate the permissions prior to using the file descriptor.  
  
For more information on temporary files please see:  
[https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152425](https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152425)  

[CWE-377](https://cwe.mitre.org/data/definitions/377.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Critical

Insecure Temporary File

The `GetTempFileName` function works by generating a randomly named file, creating the file  
(if it does not exist) and then closing it. An application wishing to use this temporary file  
will need to reopen this file to begin working with it. This leads to a potential  
Time Of Check Time Of Use (TOCTOU) vulnerability, as an attacker could replace or modify  
the contents of the file prior to it being used by the application.  
  
Consider generating a random filename and opening the file directly in a single `CreateFile`  
or `OpenFile` call.  

[CWE-377](https://cwe.mitre.org/data/definitions/377.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Insecure Temporary File

Some older Unix-like systems, `mkstemp` would create temp files with 0666 permissions,  
meaning the file created would be read/write access for all users.  
  
Ensure the process has called the `umask` function with restricted permissions prior  
to calling `mkstemp` and validate the permissions prior to using the file descriptor.  
  
For more information on temporary files please see:  
[https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152425](https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152425)  

[CWE-377](https://cwe.mitre.org/data/definitions/377.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Info

The software directly writes into a stack buffer

The software directly writes into a stack buffer. This might lead to a stack-based buffer overflow.

[CWE-121](https://cwe.mitre.org/data/definitions/121.html)

Info

Most codebases define assertion macros which compile to a no-op on non-debug builds

Most codebases define assertion macros which compile to a no-op on non-debug builds. If assertions are the only line of defense against untrusted input, the software may be exposed to attacks that leverage the lack of proper input checks.

Best Practice

Medium

The software generates an error message that includes sensitive information about its environment, users, or associated data

The software generates an error message that includes sensitive information about its environment, users, or associated data. In particular, exposure of memory addresses might defeat ASLR.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)

Info

The program accesses command-line arguments or environment variables, which are controlled by potential attackers.

The program accesses command-line arguments or environment variables, which are controlled by potential attackers.

Best Practice

Info

The software uses the size of a source buffer when reading from or writing to a destination buffer, which may cause it to access memory that is outside of the bounds of the buffer.

The software uses the size of a source buffer when reading from or writing to a destination buffer, which may cause it to access memory that is outside of the bounds of the buffer.

[CWE-806](https://cwe.mitre.org/data/definitions/806.html)

High

The use of previously-freed memory can have any number of adverse consequences, ranging from the corruption of valid data to the execution of arbitrary code, depending on the instantiation and timing of the flaw

The use of previously-freed memory can have any number of adverse consequences, ranging from the corruption of valid data to the execution of arbitrary code, depending on the instantiation and timing of the flaw. The simplest way data corruption may occur involves the system’s reuse of the freed memory.

[CWE-416](https://cwe.mitre.org/data/definitions/416.html)

High

The strncat() function is nearly as dangerous as strcat(), in that it’s quite easy to misuse

The strncat() function is nearly as dangerous as strcat(), in that it’s quite easy to misuse. The first common mistake is supplying the size of the entire buffer instead of the size remaining in the buffer. A more subtle mistake can be made: the size parameter needs to be the amount of space left in the buffer less one; otherwise, the NUL byte is written one byte past the end of the buffer.

[CWE-787](https://cwe.mitre.org/data/definitions/787.html)

High

The rand() PRNG should not be used in applications intended to be portable when good randomness is needed

The rand() PRNG should not be used in applications intended to be portable when good randomness is needed. Instead, the use of random() is recommended.

[CWE-338](https://cwe.mitre.org/data/definitions/338.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

A function returns the address of a stack variable, which will cause unintended program behavior, typically in the form of a crash.

A function returns the address of a stack variable, which will cause unintended program behavior, typically in the form of a crash.

[CWE-562](https://cwe.mitre.org/data/definitions/562.html)

Info

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

`cuserid()` is poorly defined (e.g., some systems use the effective  
UID, like Linux, while others like System V use the real UID). Therefore, you can’t trust  
what it does. The cuserid function was included in the 1988 version of POSIX, but removed  
from the 1990 version. Also, if passed a non-null parameter, there’s a risk of a buffer  
overflow if the passed-in buffer is not at least `L_cuserid` characters long.  
  
Use `getpwuid(geteuid())` and extract the desired information instead.  
  
For more information please see: [https://linux.die.net/man/3/getpwuid](https://linux.die.net/man/3/getpwuid)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The input buffer is the number of bytes in the string, but the size  
of the output buffer is the number of characters. To avoid overflows, the  
application must determine the correct buffer size which depends on the data type  
the buffer receives.  
  
For more information see:  
[https://learn.microsoft.com/en-us/windows/win32/intl/security-considerations--international-features](https://learn.microsoft.com/en-us/windows/win32/intl/security-considerations--international-features)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Info

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `StrCpy` family of functions do not guarantee the final string to be null terminated.  
Consider  
using one of the following alternatives `StringCbCopy`, `StringCbCopyEx`, `StringCbCopyN`,  
`StringCbCopyNEx`, `StringCchCopy`, `StringCchCopyEx`, `StringCchCopyN`, or `StringCchCopyNEx`.  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

Format specifiers can take optional field widths, which should be  
used to limit how many characters are copied into the target buffer.  
  
Example:  

  
  
  const char str\[20\] = “AAAAAAAAAAAAAAAAAAA”;  
  char buf\[11\] = {0};  
  sscanf(str, “%10s”, &buf); // buf = AAAAAAAAAA\\0  

  
  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `StrCat` family of functions do not guarantee the final string to be null terminated.  
Consider using one of the following alternatives: `StringCbCat`, `StringCbCatEx`,  
`StringCbCatN`, `StringCbCatNEx`, `StringCchCat`, `StringCchCatEx`, `StringCchCatN`, or  
`StringCchCatNEx`.  
  
For more information please see: [https://learn.microsoft.com/en-us/windows/win32/api/strsafe/](https://learn.microsoft.com/en-us/windows/win32/api/strsafe/)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `strecpy` and `streadd` functions require that the destination buffer size be at least  
four  
times the size of the source due to each character potentially becoming a `\` and 3 digits.  
  
For more information please see:  
[https://docs.oracle.com/cd/E18752\_01/html/816-5172/streadd-3gen.html](https://docs.oracle.com/cd/E18752_01/html/816-5172/streadd-3gen.html)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `strcpy` family of functions do not provide the ability to limit or check buffer  
sizes before copying to a destination buffer. This can lead to buffer overflows. Consider  
using more secure alternatives such as `strncpy` and provide the correct limit to the  
destination buffer and ensure the string is null terminated.  
  
For more information please see: [https://linux.die.net/man/3/strncpy](https://linux.die.net/man/3/strncpy)  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

`getwd` does not contain a parameter to limit how many characters can be copied into the  
destination buffer. For portability and security reasons `getwd` has been deprecated in  
favor of `getcwd`.  
  
For more information please see: [https://linux.die.net/man/3/getcwd](https://linux.die.net/man/3/getcwd)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Medium

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `strcat` family of functions are unable to limit how many bytes are copied  
to the destination buffer. It is recommended to use more secure alternatives such as  
`snprintf`.  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strcat-s-wcscat-s-mbscat-s?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strcat-s-wcscat-s-mbscat-s?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `strcat` family of functions are unable to limit how many bytes are copied  
to the destination buffer. It is recommended to use more secure alternatives such as  
`snprintf`.  
  
For more information please see: [https://linux.die.net/man/3/snprintf](https://linux.die.net/man/3/snprintf)  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strcat-s-wcscat-s-mbscat-s?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strcat-s-wcscat-s-mbscat-s?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

Consider using more secure alternatives such as `snprintf`, instead of the  
`wcsncat` family of functions.  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncat-strncat-l-wcsncat-wcsncat-l-mbsncat-mbsncat-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncat-strncat-l-wcsncat-wcsncat-l-mbsncat-mbsncat-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Info

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `lstrcpyn` family of functions do not always check for invalid pointers or check if there  
is sufficient space prior to copying. The count argument limits the number of characters copied  
but does validate if the count will fit within the size of the destination buffer, leading to  
potential overflows.  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Info

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

Format specifiers can take optional field widths, which should be  
used to limit how many characters are copied into the target buffer.  
  
For more information please see: [https://linux.die.net/man/3/scanf](https://linux.die.net/man/3/scanf)  
  
Example:  

  
  
  char buf\[11\] = {0};  
  scanf("%10s", &buf); // buf = AAAAAAAAAA\\0  

  
  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/scanf-s-scanf-s-l-wscanf-s-wscanf-s-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/scanf-s-scanf-s-l-wscanf-s-wscanf-s-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `realpath` function should not be called with a destination buffer as it could  
lead to overflowing if the path is greater than PATH\_LEN. It is instead recommended  
to call `realpath` with the destination buffer set to NULL and use the return value  
as the resolved path. Be sure to free the returned pointer as realpath will allocate  
the buffer internally using `malloc`.  
  
For more information see: [https://linux.die.net/man/3/realpath](https://linux.die.net/man/3/realpath)  
  
Example:  
  

  
  
char const \*symlink\_path = “/tmp/symlink”;  
char \*resolved\_path = NULL;  
  
resolved\_path = realpath(symlink\_path, NULL);  
if (errno == 0) {  
  // … use resolved\_path…  
  free(resolved\_path);  
}  

  
  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Medium

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `strncpy` family of functions do not properly handle strings that are not null terminated.  
It is recommended to use more secure alternatives such as `snprintf`.  
  
For more information please see: [https://linux.die.net/man/3/snprintf](https://linux.die.net/man/3/snprintf)  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Info

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

Use sprintf\_s, snprintf, or vsnprintf instead. The `sprintf` family of functions do not allow  
callers to set limits on how many bytes the destination buffer can hold. Consider using more  
secure alternatives such as `snprintf`.  
  
For more information please see: [https://linux.die.net/man/3/snprintf](https://linux.die.net/man/3/snprintf)  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/sprintf-s-sprintf-s-l-swprintf-s-swprintf-s-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/sprintf-s-sprintf-s-l-swprintf-s-swprintf-s-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `lstrcpy` family of functions do not provide the ability to limit or check buffer  
sizes before copying to a destination buffer. This can lead to buffer overflows. Consider  
using more secure alternatives such as `strncpy_s`.  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncpy-s-strncpy-s-l-wcsncpy-s-wcsncpy-s-l-mbsncpy-s-mbsncpy-s-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `strncat` family of functions are easy to use incorrectly when calculating destination  
buffer  
sizes. It is recommended to use more secure alternatives such as `snprintf`.  
  
For more information please see: [https://linux.die.net/man/3/snprintf](https://linux.die.net/man/3/snprintf)  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncat-s-strncat-s-l-wcsncat-s-wcsncat-s-l-mbsncat-s-mbsncat-s-l?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strncat-s-strncat-s-l-wcsncat-s-wcsncat-s-l-mbsncat-s-mbsncat-s-l?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Info

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The gets() function reads a line from stdin into the provided buffer  
until either a terminating newline or EOF. This terminating newline or  
EOF is replaced with a null byte `'\0'`. No check for buffer overruns are  
performed so it is recommended to use `fgets()` instead. Do note  
that some platforms will continue reading data after a `'\0'` is encountered.  
  
Usage of `fgets()` is not recommended for reading binary based files or inputs,  
instead the `read` or `fread` functions should be used.  
  
For more information please see: [https://linux.die.net/man/3/fgets](https://linux.die.net/man/3/fgets)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

This function is easy to misuse by not accounting for the space necessary when transforming  
strings. Ensure that the destination buffer is large enough to fit the transformed output.  
  
For more information please see:  
[https://docs.oracle.com/cd/E36784\_01/html/E36877/strtrns-3gen.html](https://docs.oracle.com/cd/E36784_01/html/E36877/strtrns-3gen.html)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Medium

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `memcpy` family of functions require the developer to validate that the destination buffer  
is the same size or larger than the source buffer. Buffer overflows could be introduced if care  
is not taken to validate buffer sizes.  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/memcpy-s-wmemcpy-s?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/memcpy-s-wmemcpy-s?view=msvc-170)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

Info

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The `strccpy` and `strcadd` functions do not allow the caller to check that the destination  
size  
of the buffer will fit the input buffer prior to copying.  
  
For more information please see:  
[https://docs.oracle.com/cd/E18752\_01/html/816-5172/streadd-3gen.html](https://docs.oracle.com/cd/E18752_01/html/816-5172/streadd-3gen.html)  

[CWE-120](https://cwe.mitre.org/data/definitions/120.html)

High

The software attempts to return a memory resource to the system, but it calls a release function that is not compatible with the function that was originally used to allocate that resource

The software attempts to return a memory resource to the system, but it calls a release function that is not compatible with the function that was originally used to allocate that resource. Due to inherent limitations of Semgrep, this rule might generate many false positives and should therefore be customized for your codebase.

[CWE-762](https://cwe.mitre.org/data/definitions/762.html)

Info

The code does not have a default case in an expression with multiple conditions, such as a switch statement.

The code does not have a default case in an expression with multiple conditions, such as a switch statement.

[CWE-478](https://cwe.mitre.org/data/definitions/478.html)

Info

A non-void function does not have a return statement

A non-void function does not have a return statement. Hence, its return value can be considered undefined.

[CWE-393](https://cwe.mitre.org/data/definitions/393.html)

Info

The software calls free() on a pointer to memory that has a short lifetime and was not allocated using associated heap allocation functions such as malloc(), calloc(), or realloc().

The software calls free() on a pointer to memory that has a short lifetime and was not allocated using associated heap allocation functions such as malloc(), calloc(), or realloc().

[CWE-590](https://cwe.mitre.org/data/definitions/590.html)

High

A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold, or when a program attempts to put data in a memory area outside of the boundaries of a buffer.

A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold, or when a program attempts to put data in a memory area outside of the boundaries of a buffer.

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

High

Incorrect Permission Assignment for Critical Resource

Make sure that you set inheritance by hand if you wish it to inherit.  

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

Medium

Incorrect Permission Assignment for Critical Resource

When `SetSecurityDescriptorDacl` is called with a null `pDacl` parameter and the  
`bDaclPresent` flag is `TRUE`, all access to the object is allowed. An attacker  
could set the object to Deny all, which would include even the Administrator user(s).  
  
Either call `SetSecurityDescriptorDacl` with bDaclPresent as `FALSE`, or supply a valid  
non-null `pDacl` parameter value.  
  
For more information please see:  
[https://learn.microsoft.com/en-us/windows/win32/api/securitybaseapi/nf-securitybaseapi-setsecuritydescriptordacl#remarks](https://learn.microsoft.com/en-us/windows/win32/api/securitybaseapi/nf-securitybaseapi-setsecuritydescriptordacl#remarks)  

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

High

Incorrect Permission Assignment for Critical Resource

The umask function call sets the process’s file mode creation mask. umask values determine  
what permissions a file should be created with and who can read or write to these files.  
Ensure that umask is given most restrictive possible setting depending on the context,  
usually 066 or 077, for more information please see:  
[https://en.wikipedia.org/wiki/Umask#Mask\_effect](https://en.wikipedia.org/wiki/Umask#Mask_effect) .  

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

Info

The software subtracts one pointer from another in order to determine size, but this calculation can be incorrect if the pointers do not exist in the same memory chunk.

The software subtracts one pointer from another in order to determine size, but this calculation can be incorrect if the pointers do not exist in the same memory chunk.

[CWE-469](https://cwe.mitre.org/data/definitions/469.html)

Medium

The software calculates or uses an incorrect maximum or minimum value that is 1 more, or 1 less, than the correct value.

The software calculates or uses an incorrect maximum or minimum value that is 1 more, or 1 less, than the correct value.

[CWE-193](https://cwe.mitre.org/data/definitions/193.html)

Medium

Buffer Over-read

The `strlen` family of functions does not handle strings that are not null  
terminated. This can lead to buffer over reads and cause the application to  
crash by accessing unintended memory locations. It is recommended that `strnlen`  
be used instead as a `maxlen` value can be provided.  
  
For more information please see: [https://linux.die.net/man/3/strnlen](https://linux.die.net/man/3/strnlen)  
  
If developing for C Runtime Library (CRT), more secure versions of these functions should be  
used, see:  
[https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strnlen-strnlen-s?view=msvc-170](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strnlen-strnlen-s?view=msvc-170)  

[CWE-126](https://cwe.mitre.org/data/definitions/126.html)

Info

The gets() function is always unsafe because it does not perform bounds checking on the size of its input

The gets() function is always unsafe because it does not perform bounds checking on the size of its input. An attacker can easily send arbitrarily-sized input to gets() and overflow the destination buffer.

[CWE-242](https://cwe.mitre.org/data/definitions/242.html)

High

The software uses a signed primitive and performs a cast to an unsigned primitive, or uses an unsigned primitive and performs a cast to a signed primitive, which can produce an unexpected value

The software uses a signed primitive and performs a cast to an unsigned primitive, or uses an unsigned primitive and performs a cast to a signed primitive, which can produce an unexpected value. When the result of a function is to be used as a size parameter, using negative return values can have unexpected results. Although less frequent an issue, unsigned-to-signed conversion can be the precursor to buffer underwrite conditions. Buffer underwrites occur frequently when large unsigned values are cast to signed values, and then used as indexes into a buffer or for pointer arithmetic.

[CWE-195](https://cwe.mitre.org/data/definitions/195.html)

Medium

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

It is generally not recommended to call out to the operating system to execute commands.  
When the application is executing file system based commands, user input should never be used  
in  
constructing commands or command arguments. If possible, determine if a library can be used  
instead to provide the same functionality. Otherwise, consider hard coding both the command  
and arguments to be used, or at the very least restricting which arguments can be passed  
to the command execution function.  
  
Please see the compliant solutions in the following page:  
[https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152177](https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152177)  

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Due to how `CreateProcess` parses spaces, an attacker may be able to exploit this function  
by creating a binary with the same name that is loaded first, depending on the search path  
order.  
  
Ensure that quotation marks around the executable path are used, such as:  

  
  
CreateProcessA(NULL, “"C:\\Program Files\\MyApp.exe"”, …)  

  
  
For more information, please see MSDNs documentation at:  
[https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessa#security-remarks](https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessa#security-remarks)  

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Due to how `CreateProcess` parses spaces, an attacker may be able to exploit this function  
by creating a binary with the same name that is loaded first, depending on the search path  
order.  
  
Ensure that quotation marks around the executable path are used, such as:  

  
  
CreateProcessAsUser(hToken, NULL, “"C:\\Program Files\\MyApp.exe"”, …)  

  
  
For more information, please see MSDNs documentation at:  
[https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessasusera#security-remarks](https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessasusera#security-remarks)  

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

It is generally not recommended to call out to the operating system to execute commands.  
When the application is executing file system based commands, user input should never be used  
in  
constructing commands or command arguments. If possible, determine if a library can be used  
instead to provide the same functionality. Otherwise, consider hard coding both the command  
and arguments to be used, or at the very least restricting which arguments can be passed  
to the command execution function.  
  
For more information please see:  
[https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152177](https://wiki.sei.cmu.edu/confluence/pages/viewpage.action?pageId=87152177)  

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Use of Potentially Dangerous Function

The ulimit function is obsolete and no longer recommended. Use `getrlimit(2)`,  
`setrlimit`, or `sysconf` instead.  
  
For more information please see: [https://linux.die.net/man/3/setrlimit](https://linux.die.net/man/3/setrlimit)  

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

Info

Use of Potentially Dangerous Function

The `usleep` function has been deprecated, use `nanosleep` or `setitimer` instead.  
  
For more information please see: [https://linux.die.net/man/3/setitimer](https://linux.die.net/man/3/setitimer)  

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

Info

Use of Potentially Dangerous Function

The `gsignal` and `ssignal` functions are obsolete and no longer recommended. Consider  
using the `raise` or `sigaction` functions instead for process signaling.  
  
For more information please see: [https://linux.die.net/man/3/sigaction](https://linux.die.net/man/3/sigaction)  

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

Info

Use of Potentially Dangerous Function

The `memalign` function may not check that the alignment argument is correct. Calling  
free (on non Linux-based systems) may fail and in certain circumstances this failure  
may be exploitable. This function has been deprecated in favor of `posix_memalign`.  
  
For more information please see: [https://linux.die.net/man/3/memalign](https://linux.die.net/man/3/memalign)  

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

Info

Locate all calls to interesting and potentially insecure API functions (candidate points)

Locate all calls to interesting and potentially insecure API functions (candidate points). The auditor can backtrace from these candidate points to find pathways allowing access from untrusted input.

Best Practice

Medium

Improper Input Validation

The `LoadLibraryEx` function is used to load DLLs dynamically. Depending on the filepath  
parameter,  
the OS version, and the modes set for the process prior to calling LoadLibrary, DLL hijacking  
may  
be possible. Attackers can exploit this by placing DLL files with the same name in directories  
that  
are searched before the legitimate DLL is.  
  
To assist in preventing against this class of vulnerability consider:  
\- Specifying a fully qualified path when using LoadLibraryEx.  
\- Use the `LOAD_LIBRARY_SEARCH` flags with LoadLibraryEx or with SetDefaultDllDirectories.  
\- If you use SetDefaultDllDirectories, be sure to use the AddDllDirectory or SetDllDirectory  
functions to modify the list of directories.  
\- Only use `SearchPath` if the `SetSearchPathMode` function is called with  
`BASE_SEARCH_PATH_ENABLE_SAFE_SEARCHMODE`. (Note: this only moves the current directory to  
the end of the SearchPath search list.)  
  
For more information see the security remarks section of the MSDN documentation:  
[https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya#security-remarks](https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya#security-remarks)  
  
For general information securely loading dynamic link libraries, see the MSDN documentation:  
[https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-security](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-security)  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

This function is obsolete and not portable. It was in SUSv2 but removed by POSIX.2. What  
it does exactly varies considerably between systems, particularly in where its prompt is  
displayed and where it gets its data. Some systems will write to stderr instead of stdout.  
Some will read from stdin if it can not be read from /dev/tty. In some systems the  
buffer is static and limited to 127 characters, meaning the full password may not be returned  
properly.  
  
If you want to read input without terminal echoing enabled, see the description of the ECHO  
flag  
in the termios manual pager. If you ever read passwords from a terminal, be sure to zero the  
password as soon as possible, to avoid leaving the cleartext password visible in the  
process’ address space.  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Input Validation

The `LoadLibrary` function is used to load DLLs dynamically. Depending on the filepath  
parameter,  
the OS version, and the modes set for the process prior to calling LoadLibrary, DLL hijacking  
may  
be possible. Attackers can exploit this by placing DLL files with the same name in directories  
that  
are searched before the legitimate DLL is.  
  
To assist in preventing against this class of vulnerability consider:  
\- Specifying a fully qualified path when using LoadLibraryEx.  
\- Use the `LOAD_LIBRARY_SEARCH` flags with LoadLibraryEx or with SetDefaultDllDirectories.  
\- If you use SetDefaultDllDirectories, be sure to use the AddDllDirectory or SetDllDirectory  
functions to modify the list of directories.  
\- Only use `SearchPath` if the `SetSearchPathMode` function is called with  
`BASE_SEARCH_PATH_ENABLE_SAFE_SEARCHMODE`. (Note: this only moves the current directory to  
the end of the SearchPath search list.)  
  
For more information see the security remarks section of the MSDN documentation:  
[https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya#security-remarks](https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya#security-remarks)  
  
For general information securely loading dynamic link libraries, see the MSDN documentation:  
[https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-security](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-security)  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

Usage of the `readlink` function call hints at a potential Time Of Check Time Of Use (TOCTOU)  
vulnerability. An attacker may be able to modify the file being specified by the `readlink`  
function prior to the `readlink` function being called. Additionally, care must be taken  
that the buffer provided is large enough to hold the contents of the file.  
  
Instead of using `readlink`, use `lstat` prior to opening the file and confirm the attributes  
are correct. Then use `open` to get a file descriptor to this file. Call `fstat` on the  
`open` file descriptor to confirm that `st_dev` and `st_ino` are equal between the two.  
If they are, it is safe to read and operate on the file’s contents.  
  
For more information please see:  
[https://wiki.sei.cmu.edu/confluence/display/c/FIO45-C.+Avoid+TOCTOU+race+conditions+while+accessing+files](https://wiki.sei.cmu.edu/confluence/display/c/FIO45-C.+Avoid+TOCTOU+race+conditions+while+accessing+files)  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Input Validation

This function’s return value should be treated as untrusted input as it could be  
modified by an attacker. Possible risks include:  
  
\- The value being too large and causing buffer overflows  
\- Files under the attacker’s control being used maliciously  
\- Files outside of an attacker’s control becoming accessible, depending on  
access privileges.  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

This function is synonymous with `getenv("TMP")` and should be treated  
as untrusted input as it could be modified by an attacker. Possible risks  
include:  
  
\- The value being too large and causing buffer overflows  
\- Files under the attacker’s control being used maliciously  
\- Files outside of an attacker’s control becoming accessible, depending on  
access privileges.  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

This function is synonymous with `getenv("HOME")` and should be treated  
as untrusted input as it could be modified by an attacker. Possible risks  
include:  
  
\- The value being too large and causing buffer overflows  
\- Files under the attacker’s control being used maliciously  
\- Files outside of an attacker’s control becoming accessible, depending on  
access privileges.  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Truncation errors occur when a primitive is cast to a primitive of a smaller size and data is lost in the conversion

Truncation errors occur when a primitive is cast to a primitive of a smaller size and data is lost in the conversion. The value cannot be trusted and the application will be in an undefined state.

[CWE-197](https://cwe.mitre.org/data/definitions/197.html)

Medium

Use of alloca() is unsafe because it cannot ensure that the pointer returned points to a valid and usable block of memory

Use of alloca() is unsafe because it cannot ensure that the pointer returned points to a valid and usable block of memory. The allocation made may exceed the bounds of the stack, or even go further into other objects in memory, and alloca() cannot determine such an error.

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

High

C standards specify that the results are undefined if a call to sprintf(), snprintf(), vsprintf(), or vsnprintf() would cause copying to take place between objects that overlap (e.g., if the target string array and one of the supplied input arguments refer to the same buffer).

C standards specify that the results are undefined if a call to sprintf(), snprintf(), vsprintf(), or vsnprintf() would cause copying to take place between objects that overlap (e.g., if the target string array and one of the supplied input arguments refer to the same buffer).

Best Practice

Medium

Integer Overflow or Wraparound

The `atoi` family of functions can potentially overflow or underflow integer values. Consider  
using `stroul` instead.  
  
For more information please see:  
[https://wiki.sei.cmu.edu/confluence/display/c/ERR34-C.+Detect+errors+when+converting+a+string+to+a+number](https://wiki.sei.cmu.edu/confluence/display/c/ERR34-C.+Detect+errors+when+converting+a+string+to+a+number)  

[CWE-190](https://cwe.mitre.org/data/definitions/190.html)

Info

The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value

The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value. This can introduce other weaknesses when the calculation is used for resource management or execution control.

[CWE-190](https://cwe.mitre.org/data/definitions/190.html)

Medium

The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value

The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value. This can introduce other weaknesses when the calculation is used for resource management or execution control. When influenced by the size of an input it is often easier to overflow a short than an int.

[CWE-190](https://cwe.mitre.org/data/definitions/190.html)

Medium

The software constructs an OS command using externally-influenced input, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended OS command.

The software constructs an OS command using externally-influenced input, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended OS command.

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

The software omits a break statement within a switch or similar construct, causing code associated with multiple conditions to execute

The software omits a break statement within a switch or similar construct, causing code associated with multiple conditions to execute. This can cause problems when the programmer only intended to execute code associated with one condition.

[CWE-484](https://cwe.mitre.org/data/definitions/484.html)

Info

The software checks the state of a resource before using it, but the resource’s state can change between the check and the use in a way that invalidates the results of the check

The software checks the state of a resource before using it, but the resource’s state can change between the check and the use in a way that invalidates the results of the check. This canmcause the software to perform invalid actions when the resource is inman unexpected state.

[CWE-367](https://cwe.mitre.org/data/definitions/367.html)

Medium

The programmer accidentally uses the wrong operator, which changes the application logic in security-relevant ways

The programmer accidentally uses the wrong operator, which changes the application logic in security-relevant ways. This rule also covers some other common typo patterns.

[CWE-480](https://cwe.mitre.org/data/definitions/480.html)

Info

The code calls sizeof() on a malloced pointer type, which always returns the wordsize/8

The code calls sizeof() on a malloced pointer type, which always returns the wordsize/8. This can produce an unexpected result if the programmer intended to determine how much memory has been allocated.

[CWE-467](https://cwe.mitre.org/data/definitions/467.html)

Medium

If there is no NUL character byte in the first n bytes of the source string, strncpy() and stpncpy() do not NUL-terminate the destination buffer

If there is no NUL character byte in the first n bytes of the source string, strncpy() and stpncpy() do not NUL-terminate the destination buffer. If the program does not explicitly terminate the destination buffer, this will almost certainly result in information disclosure, and possibly a buffer overflow condition.

[CWE-170](https://cwe.mitre.org/data/definitions/170.html)

Medium

The software calls free() twice on the same memory address, potentially leading to memory corruption

The software calls free() twice on the same memory address, potentially leading to memory corruption. This corruption can cause the program to crash or cause two later calls to malloc() to return the same pointer.

[CWE-415](https://cwe.mitre.org/data/definitions/415.html)

High

Checking if an unsigned variable is negative makes no sense and is usually a good indication that something is probably wrong with the code.

Checking if an unsigned variable is negative makes no sense and is usually a good indication that something is probably wrong with the code.

[CWE-697](https://cwe.mitre.org/data/definitions/697.html)

Medium

Concurrent Execution using Shared Resource with Improper Synchronization (‘Race Condition’)

Usage of the `open` family of functions may hint at a potential Time Of Check Time Of Use  
(TOCTOU)  
vulnerability. An attacker may be able to modify the file being specified by the `open`  
function prior to the `open` function being called.  
  
Prior to calling `open`, use `lstat` to open the file and confirm the attributes  
are correct. Then use `open` to get a file descriptor to this file. Call `fstat` on the  
`open` file descriptor to confirm that `st_dev` and `st_ino` are equal between the two.  
If they are, it is safe to read and operate on the file’s contents.  
  
For more information please see:  
[https://wiki.sei.cmu.edu/confluence/display/c/FIO45-C.+Avoid+TOCTOU+race+conditions+while+accessing+files](https://wiki.sei.cmu.edu/confluence/display/c/FIO45-C.+Avoid+TOCTOU+race+conditions+while+accessing+files)  

[CWE-362](https://cwe.mitre.org/data/definitions/362.html)

Info

Concurrent Execution using Shared Resource with Improper Synchronization (‘Race Condition’)

Usage of the `chmod` function call hints at a potential Time Of Check Time Of Use (TOCTOU)  
vulnerability. An attacker may be able to modify the file being specified by the `chmod`  
function prior to the `chmod` function being called. Since `chmod` will resolve symbolic links,  
an attacker may be able to exploit this fact to have files outside of their control modified.  
  
It is recommended that the `fchmod` function be used instead since this function takes  
a file descriptor instead of a file. Ensure the opened file descriptor is pointing to  
the correct file or directory prior to executing `fchmod` or any other file based operations.  
  
For more information please see:  
[https://wiki.sei.cmu.edu/confluence/display/c/FIO01-C.+Be+careful+using+functions+that+use+file+names+for+identification](https://wiki.sei.cmu.edu/confluence/display/c/FIO01-C.+Be+careful+using+functions+that+use+file+names+for+identification)  

[CWE-362](https://cwe.mitre.org/data/definitions/362.html)

High

Concurrent Execution using Shared Resource with Improper Synchronization (‘Race Condition’)

The `vfork` function is suffers from portability issues and is not recommended. In  
some Linux systems `vfork` is vulnerable to a race condition while the child process  
is running as the user’s UID but hasn’t executed `execve`. The user may be able to send  
signals to this process, which in `vfork` would not be sent to the parent process. As  
a result a user may be able to cause a denial of service against the privileged process.  
  
Use `fork` instead and be aware of other potential Time Of Check Time Of Use (TOCTOU)  
vulnerabilities.  
  
For more information please see:  
[https://wiki.sei.cmu.edu/confluence/display/c/POS38-C.+Beware+of+race+conditions+when+using+fork+and+file+descriptors](https://wiki.sei.cmu.edu/confluence/display/c/POS38-C.+Beware+of+race+conditions+when+using+fork+and+file+descriptors)  

[CWE-362](https://cwe.mitre.org/data/definitions/362.html)

Info

Concurrent Execution using Shared Resource with Improper Synchronization (‘Race Condition’)

Usage of the `chown` function call hints at a potential Time Of Check Time Of Use (TOCTOU)  
vulnerability. An attacker may be able to modify the file being specified by the `chmod`  
function prior to the `chown` function being called. Since `chown` will resolve symbolic links,  
an attacker may be able to exploit this fact to have files outside of their control modified.  
  
It is recommended that the `fchown` or the `lchown` functions be used instead. The `fchown`  
function takes a file descriptor instead of a file. The `lchown` function does not follow  
symbolic links. Ensure the opened file descriptor is pointing to the correct file or  
directory prior to executing `fchown` or any other file based operations.  
  
For more information please see:  
[https://wiki.sei.cmu.edu/confluence/display/c/FIO01-C.+Be+careful+using+functions+that+use+file+names+for+identification](https://wiki.sei.cmu.edu/confluence/display/c/FIO01-C.+Be+careful+using+functions+that+use+file+names+for+identification)  

[CWE-362](https://cwe.mitre.org/data/definitions/362.html)

High

Concurrent Execution using Shared Resource with Improper Synchronization (‘Race Condition’)

Usage of the `access` function call hints at a potential Time Of Check Time Of Use (TOCTOU)  
vulnerability. Using the `access` function to check if a file exists and is readable before  
opening it, an attacker can create a race condition between the `access` call and  
opening the file. The attacker could replace the file with a different one or modify its  
content between the time the `access` function is called and the file is opened, thus  
bypassing the permission check.  
  
Call `setuid` to drop privileges on the process prior to opening any files. Instead of using  
`access`, use `lstat` prior to opening the file and confirm the attributes are correct. Then  
use `open` to get a file descriptor to this file. Call `fstat` on the `open` file descriptor  
to confirm that `st_dev` and `st_ino` are equal between the two. If they are, it is safe to  
read and operate on the file’s contents.  
  
For more information please see:  
[https://wiki.sei.cmu.edu/confluence/display/c/FIO45-C.+Avoid+TOCTOU+race+conditions+while+accessing+files](https://wiki.sei.cmu.edu/confluence/display/c/FIO45-C.+Avoid+TOCTOU+race+conditions+while+accessing+files)  

[CWE-362](https://cwe.mitre.org/data/definitions/362.html)

High

Creating and using insecure temporary files can leave application and system data vulnerable to attack.

Creating and using insecure temporary files can leave application and system data vulnerable to attack.

[CWE-377](https://cwe.mitre.org/data/definitions/377.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Use of Externally-Controlled Format String

Format string vulnerabilities allow an attacker to read or in some cases, potentially write  
data to  
and from locations in the processes’ memory. To prevent against format string attacks, do not  
allow  
users or un-validated input to provide the format specification.  
Consider using a constant for the format specification, or only allow specific  
characters to be provided to the format argument for the `printf` family of functions.  
  
For more information please see: [https://linux.die.net/man/3/fprintf](https://linux.die.net/man/3/fprintf)  
  
For more information on format string attacks please see OWASP’s attack guide:  
[https://owasp.org/www-community/attacks/Format\_string\_attack](https://owasp.org/www-community/attacks/Format_string_attack)  

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Use of Externally-Controlled Format String

Format string vulnerabilities allow an attacker to read or in some cases, potentially write  
data to  
and from locations in the processes’ memory. To prevent against format string attacks, do not  
allow  
users or un-validated input to provide the format specification.  
Consider using a constant for the format specification, or strip all format  
specifiers from the input prior to calling the `syslog` function.  
  
For more information please see: [https://capec.mitre.org/data/definitions/67.html](https://capec.mitre.org/data/definitions/67.html)  

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Use of Externally-Controlled Format String

Format string vulnerabilities allow an attacker to read or in some cases,  
potentially write data to  
and from locations in the processes’ memory. To prevent against format  
string attacks, do not allow  
users or un-validated input to provide the format specification.  
Consider using a constant for the format specification, or only allow specific  
characters to be provided to the format argument for the `fprintf` family of functions.  
  
For more information please see: [https://linux.die.net/man/3/fprintf](https://linux.die.net/man/3/fprintf)  
  
For more information on format string attacks please see OWASP’s attack  
guide: [https://owasp.org/www-community/attacks/Format\_string\_attack](https://owasp.org/www-community/attacks/Format_string_attack)  

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Use of Externally-Controlled Format String

Format string vulnerabilities allow an attacker to read or in some cases, potentially write  
data to  
and from locations in the processes’ memory. To prevent against format string attacks, do not  
allow  
users or un-validated input to provide the format specification.  
Consider using a constant for the format specification, or strip all format  
specifiers from the input prior to calling the `snprintf` family of functions.  
  
Note that some variations of this function do not always null terminate the strings.  
  
For more information on using snprintf please see: [https://linux.die.net/man/3/snprintf](https://linux.die.net/man/3/snprintf)  
  
For more information on format string attacks please see OWASP’s attack guide:  
[https://owasp.org/www-community/attacks/Format\_string\_attack](https://owasp.org/www-community/attacks/Format_string_attack)  

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

The invocation of memset() is easy to get wrong

The invocation of memset() is easy to get wrong. The second argument is the character and the third argument is the size, but sometimes these arguments are in the wrong order. This results in a no-op.

Best Practice

High

The software uses a function that accepts a format string as an argument, but the format string originates from an external source

The software uses a function that accepts a format string as an argument, but the format string originates from an external source. This can lead to buffer overflows, denial of service, or data representation problems.

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Execution with Unnecessary Privileges

These functions may be used to either drop or change account privileges. If the calls  
fail, the process will continue to run with the privileges assigned to it on start. Depending  
on  
the logic of the application, this may allow attackers to abuse the system due to privileges  
never  
being changed to a different access level.  
  
Always ensure return values of this function are checked to determine if the application should  
continue to operate.  

[CWE-250](https://cwe.mitre.org/data/definitions/250.html)

High

The software does not check the return value from a method or function, which can prevent it from detecting unexpected states and conditions.

The software does not check the return value from a method or function, which can prevent it from detecting unexpected states and conditions.

[CWE-252](https://cwe.mitre.org/data/definitions/252.html)

Medium

The software does not check the return value from a method or function, which can prevent it from detecting unexpected states and conditions

The software does not check the return value from a method or function, which can prevent it from detecting unexpected states and conditions. If the program calls a function to drop privileges but does not check the return code to ensure that privileges were successfully dropped, then the program will continue to operate with the higher privileges.

[CWE-252](https://cwe.mitre.org/data/definitions/252.html)

Medium

The strlcpy() and strlcat() functions return the total length of the string they tried to create

The strlcpy() and strlcat() functions return the total length of the string they tried to create. For strlcpy() that means the length of the source string. For strlcat() that means the initial length of the destination string plus the length of of the source string. Therefore, this return value can be larger than the size of the destination buffer. If it is used unsafely, e.g. as an index to write to the destination buffer, memory corruption might occur.

Best Practice

Medium

The software calls putenv() with a variable that has a short lifetime, such as a pointer to an automatic variable allocated on the stack

The software calls putenv() with a variable that has a short lifetime, such as a pointer to an automatic variable allocated on the stack. The correct behavior is to call putenv() with a static/global string.

[CWE-686](https://cwe.mitre.org/data/definitions/686.html)

Info

## C# [Copied!](#c-1 "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Missing HTTP Only option in cookie configuration

Not setting the HTTP Only attribute to “true” in cookie configurations leaves the cookie vulnerable to being accessed by client-side JavaScript. This oversight can lead to the exposure of cookie values, especially on websites susceptible to Cross-Site Scripting (XSS) attacks. Enabling HTTP Only is a critical step in preventing malicious scripts from reading the cookie values through JavaScript.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing Secure option in cookie configuration

Not setting the Secure option in cookie configuration can lead to unauthorized third-party access. This attribute, when enabled, ensures cookies are sent to the server only over HTTPS, enhancing security by preventing potential eavesdropping.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Permissive server network interface configuration

Binding a service to “0.0.0.0” makes it accessible on all network interfaces. This configuration can lead to unintended exposure over insecure or unintended network interfaces, creating potential security risks.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized external input in code generation

Allowing external input (dynamic or user-controlled) to directly influence code generation or scripting functions without proper sanitization can lead to code injection vulnerabilities. This occurs when an attacker is able to insert malicious code into your application, which is then executed, potentially leading to unauthorized actions or data access.

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Usage of insecure cookie settings

Configuring a cookie with both same-site mode and secure disabled is highly discouraged because it allows the cookie to be sent in a cross-origin request, over an insecure (HTTP) connection. This greatly increases the risk of session hijacking through Man-in-the-Middle (MITM) attacks. If it is necessary to set the cookie’s same-side mode to “none”, the cookie must be configured with the secure flag set to true.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Permissive HTTP Only option in cookie configuration

Leaving the HTTP Only option in cookie configuration unset or false can expose your application to attacks by allowing client-side scripts to access cookie values. This vulnerability can lead to unauthorized access or exploits.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Leakage of sensitive data in cookie

Leakage of sensitive data in cookies can lead to a data breach. This vulnerability occurs when sensitive information is stored in browser cookies, putting it at risk of unauthorized access.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Unsanitized user input in HTTP response (XSS)

Including unsanitized user input in HTTP responses exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#C#)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in initialization of trusted system properties

Using unsanitized user input to set environment variables or application switches via `Environment.SetEnvironmentVariable()` or `AppContext.SetSwitch()` allows attackers to manipulate critical runtime settings such as proxy configuration, SSL certificates, and security policies. This can lead to traffic interception, security bypass, or arbitrary behavior changes.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in deserialization method

Deserializing data from untrusted sources, like user inputs or request parameters, without proper verification is a security risk. Attackers can embed malicious code or payloads within serialized data. When your application deserializes this data without checks, it becomes vulnerable to attacks.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Unsanitized user input in ’eval’ type function

Executing code with ’eval’ type functions using unsanitized user input is risky and can lead to code injection vulnerabilities. This happens when external input is used directly in functions that execute code, allowing attackers to run malicious code within your application.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Permissive file assignment

Permissive file assignment exposes sensitive information by granting unnecessary read, write, or execute permissions to users without ownership privileges.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Usage of insecure HTTP connection

Your application is at risk when it connects to APIs using insecure HTTP connections. This vulnerability occurs because HTTP lacks encryption, making data susceptible to interception and alteration. Always verify that your application exclusively uses HTTPS connections for enhanced security.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in HTTP request (SSRF)

Directly incorporating user input into HTTP request URLs can lead to Server-Side Request Forgery (SSRF) attacks. This vulnerability occurs when an attacker can control the destination of an HTTP request sent by the server.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Leakage of sensitive information in exception message

Leakage of sensitive information in exception messages poses a significant security risk. When an exception message is displayed to users, it might reveal sensitive details about your application’s technical setup or environment. This could potentially open the door to attacks, such as path traversal. Even more concerning is the possibility of exposing user-specific data, which could lead to serious privacy breaches.

[CWE-209](https://cwe.mitre.org/data/definitions/209.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A10:2025](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)

Low

Unsanitized user input in Access-Control-Allow-Origin

Using unverified user-defined input to set the Access-Control-Allow-Origin header can result in unauthorized access to sensitive data. This vulnerability exposes your application to potential security risks by allowing attackers to specify origins that can access resources.

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Missing Secure option in cookie configuration

When a cookie lacks the Secure option, it can be transmitted over insecure connections, making it vulnerable to interception by unauthorized parties. The Secure option is important because it instructs the browser to only send the cookie over HTTPS, enhancing security.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Usage of insecure SMTP connection

Using an insecure SMTP connection exposes your data to interception by unauthorized parties. Always check that your application’s SMTP settings enforce secure connections.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Insecure temporary directory usage

Creating temporary files using methods like `Path.GetTempFileName()` can be insecure because the default temporary directory (e.g., `/tmp`) is shared among all users on the system. Files created in such directories may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in logger message

Logging unsanitized user input can lead to log forgery or malicious content injection. This vulnerability arises when user input is directly included in log messages without proper sanitization.

[CWE-117](https://cwe.mitre.org/data/definitions/117.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Low

Leakage of sensitive information in logger message

Sensitive information leakage in logger messages can compromise user privacy and security. This vulnerability occurs when sensitive data, such as personal identifiable information (PII), is included in log messages, making it accessible to unauthorized individuals.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Missing anti-forgery token attribute for Controller

Using tokens to validate the controller requests can mitigate your application’s risk of cross-site request forgery (CSRF) attacks. For ASP.NET MVC applications, it is recommended to add the `[ValidateAntiForgeryToken]` attribute to controller methods (especially those that deal with state change like PUT, POST, PATCH or DELETE requests) so that any request made to these methods will include an anti-forgery token that can be validated server-side.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Missing authorization for controller class

It is best security practice to always define the authorization attribute for ASP.NET Core controllers. Without the correct authorization checks in place, anyone (including unauthorized actors) could potentially access the controller’s endpoints.

[CWE-862](https://cwe.mitre.org/data/definitions/862.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized input in NoSQL query

Using unsanitized data in NoSQL queries exposes your application to NoSQL injection attacks. This vulnerability arises when user input, request data, or any externally influenced data is directly passed into a NoSQL query function without proper sanitization.

[CWE-943](https://cwe.mitre.org/data/definitions/943.html)

Critical

Unsanitized user input in redirect

A redirect using unsanitized user input is bad practice and puts your application at greater risk of phishing attacks.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in OS command

Directly incorporating external or user-defined input into an OS command exposes the system to possible command injection attacks. This vulnerability allows attackers to execute unauthorized commands on the operating system, potentially leading to a compromise of system integrity.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized dynamic input in file path

Using unsanitized dynamic input to determine file paths can allow attackers to gain access to files and folders outside of the intended scope. This vulnerability occurs when input provided by users is directly used to access the filesystem without proper validation or sanitization.

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Unsanitized user input in file path

Unsanitized user input in file path resolution can lead to security vulnerabilities. This issue arises when an application directly uses input from the user to determine file paths or names without proper validation or sanitization. Attackers can exploit this to access unauthorized files or directories, leading to data breaches or other security compromises.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Permissive Access-Control-Allow-Origin configuration

A permissive Access-Control-Allow-Origin configuration can expose your application to security risks. When this header is set to “\*”, it means your application’s responses can be accessed by any website, potentially leading to unauthorized access to sensitive information.

[CWE-942](https://cwe.mitre.org/data/definitions/942.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Usage of external input in code reflection

Using external input for dynamic class loading or code execution through reflection poses a significant security risk. This practice can be exploited by attackers to load harmful classes or execute malicious methods, potentially resulting in remote code execution and other severe security threats.

[CWE-470](https://cwe.mitre.org/data/definitions/470.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in regular expression

Creating regular expressions from user input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This issue arises because some regular expressions can be processed with exponential time complexity. When attackers exploit this, it can significantly drain CPU resources, effectively causing a denial of service.

[CWE-1287](https://cwe.mitre.org/data/definitions/1287.html)

Medium

Unsanitized external input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data.

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Missing SSL certificate verification

Missing SSL certificate verification can compromise the security of sensitive data. This vulnerability arises when an application fails to check for valid SSL certificates during data transmission, potentially allowing attackers to intercept or manipulate data.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Leakage of sensitive data in trace telemetry

Leaking sensitive data in trace telemtry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of weak encryption algorithm (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of ECB cipher mode

The ECB (Electronic Codebook) cipher mode is recognized as insecure and is not recommended for use in cryptographic protocols. This mode does not provide adequate data protection because it encrypts identical plaintext blocks into identical ciphertext blocks, making it vulnerable to pattern analysis. For stronger security, it’s essential to use encryption algorithms that have built-in message integrity and do not require a mode of operation to be configured, such as ChaCha20-Poly1305 or, for older applications that do not support this, AES-256-GCM.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RC2)

Your code is at risk due to the use of RC2 (Rivest’s Cipher version 2), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RSA)

Using a weak encryption algorithm, specifically 1024-bit RSA, compromises data security. This vulnerability can lead to unauthorized access to sensitive information.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library (CRC32)

The use of CRC32 for hashing is insecure. CRC32 is designed for error-checking and not for security purposes, making it vulnerable to intentional data tampering.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (MD5)

Using a weak hashing library, such as MD5, increases the risk of data breaches. MD5 itself is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library, such as SHA-1, increases the risk of data breaches. SHA-1 itself is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of inappropriate encryption algorithm on a password (AES)

AES is a strong encryption algorithm, but encryption should not be used for password storage. Since encryption is reversible, an attacker who obtains the key can recover all passwords. Passwords should be hashed using a dedicated password hashing algorithm. **Supported on V2 engine only.**

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (DES)

Using a weak encryption algorithm like DES for passwords increases the risk of security breaches. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RC2)

Using a weak encryption algorithm like RC2 for passwords increases the risk of security breaches. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RSA)

Using a weak encryption algorithm, specifically 1024-bit RSA, compromises data security. Moreover, since encryption is reversible, it is possible to retrieve the plaintext value. This makes encryption a bad choice for passwords. Instead, passwords should be hashed.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (CRC32)

The use of CRC32 for password hashing is insecure. CRC32 is designed for error-checking and not for security purposes, making it vulnerable to intentional data tampering.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for passwords increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using a weak hashing library like SHA-1 for passwords increases the risk of data breaches. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords. **Supported on V2 engine only.**

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of insecure websocket connection

Using insecure websocket connections can compromise data security. This vulnerability arises when applications connect to APIs without SSL, making the data susceptible to interception and manipulation.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in XML External Entity

Avoid parsing untrusted data such as user input as XML. Such data could include URIs that resolve to resources that are outside of the current context, leading to XML External Entity (XXE) injection. XXE injection arises when XML input containing a reference to an external entity is processed without proper sanitization, potentially allowing attackers to access internal files, cause denial of service, or execute remote code.

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Unsanitized user input in XPath

Using unsanitized user input in XPath expressions can lead to XPath injection, whereby attackers can gain unauthorized access to sensitive information in XML documents. Ensure all variables passed into XPath evaluation or compilation commands, such as `XPathNavigator.Evaluate()`, are properly sanitized.

[CWE-643](https://cwe.mitre.org/data/definitions/643.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Leakage of sensitive data to Airbrake

Leaking sensitive data to third-party loggers like Airbrake is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Algolia

Leaking sensitive data to third-party data tools like Algolia is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to BigQuery

Leaking sensitive data to third-party data tools like BigQuery is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Bugsnag

Leaking sensitive data to third-party loggers like Bugsnag is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ClickHouse

Leaking sensitive data to a third-party service like ClickHouse is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog

Leaking sensitive data to third-party loggers like Datadog is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ElasticSearch

Leaking sensitive data to third-party data tools is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Analytics

Leaking sensitive data to third-party analytics tools like Google Analytics is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Dataflow

Leaking sensitive data to a third-party service is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to New Relic

Leaking sensitive data to third-party loggers like New Relic is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to OpenAI

Leaking sensitive data to third-party services like OpenAI is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to RollBar

Leaking sensitive data to third-party loggers like Rollbar is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Sentry

Leaking sensitive data to third-party loggers like Sentry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

## C++ [Copied!](#c-2 "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

The snprintf() and vsnprintf() functions return the total length of the string they tried to create

The snprintf() and vsnprintf() functions return the total length of the string they tried to create. Therefore, this return value can be larger than the size of the destination buffer. If it is used unsafely, e.g. as an index to write to the destination buffer, memory corruption might occur.

Best Practice

Medium

A compromised process might be able to regain elevated group privileges if set(e)gid() is called after set(e)uid()

A compromised process might be able to regain elevated group privileges if set(e)gid() is called after set(e)uid(). A similar case is when privileges are temporarily dropped with seteuid() and then setuid() or seteuid() are called from while under unprivileged user.

[CWE-696](https://cwe.mitre.org/data/definitions/696.html)

High

The signal() API should be regarded as deprecated

The signal() API should be regarded as deprecated. When possible, sigaction() should be used instead, because it allows to precisely specify the desired behavior in case two signals arrive shortly after each other thus preventing many race conditions.

[CWE-364](https://cwe.mitre.org/data/definitions/364.html)

Medium

The atoi(), atol(), atof(), and similar functions don’t handle errors

The atoi(), atol(), atof(), and similar functions don’t handle errors. They don’t check for integer overflow and can return a negative value. They have undefined behavior if the value of the result cannot be represented. They return 0 (or 0.0) if the string does not represent an integer (or decimal), which is indistinguishable from a correctly formatted, zero-denoting input string.

Best Practice

Info

The software directly writes into a stack buffer

The software directly writes into a stack buffer. This might lead to a stack-based buffer overflow.

[CWE-121](https://cwe.mitre.org/data/definitions/121.html)

Info

Most codebases define assertion macros which compile to a no-op on non-debug builds

Most codebases define assertion macros which compile to a no-op on non-debug builds. If assertions are the only line of defense against untrusted input, the software may be exposed to attacks that leverage the lack of proper input checks.

Best Practice

Medium

The software generates an error message that includes sensitive information about its environment, users, or associated data

The software generates an error message that includes sensitive information about its environment, users, or associated data. In particular, exposure of memory addresses might defeat ASLR.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)

Info

The program accesses command-line arguments or environment variables, which are controlled by potential attackers.

The program accesses command-line arguments or environment variables, which are controlled by potential attackers.

Best Practice

Info

The software uses the size of a source buffer when reading from or writing to a destination buffer, which may cause it to access memory that is outside of the bounds of the buffer.

The software uses the size of a source buffer when reading from or writing to a destination buffer, which may cause it to access memory that is outside of the bounds of the buffer.

[CWE-806](https://cwe.mitre.org/data/definitions/806.html)

High

The use of previously-freed memory can have any number of adverse consequences, ranging from the corruption of valid data to the execution of arbitrary code, depending on the instantiation and timing of the flaw

The use of previously-freed memory can have any number of adverse consequences, ranging from the corruption of valid data to the execution of arbitrary code, depending on the instantiation and timing of the flaw. The simplest way data corruption may occur involves the system’s reuse of the freed memory.

[CWE-416](https://cwe.mitre.org/data/definitions/416.html)

High

The strncat() function is nearly as dangerous as strcat(), in that it’s quite easy to misuse

The strncat() function is nearly as dangerous as strcat(), in that it’s quite easy to misuse. The first common mistake is supplying the size of the entire buffer instead of the size remaining in the buffer. A more subtle mistake can be made: the size parameter needs to be the amount of space left in the buffer less one; otherwise, the NUL byte is written one byte past the end of the buffer.

[CWE-787](https://cwe.mitre.org/data/definitions/787.html)

High

The rand() PRNG should not be used in applications intended to be portable when good randomness is needed

The rand() PRNG should not be used in applications intended to be portable when good randomness is needed. Instead, the use of random() is recommended.

[CWE-338](https://cwe.mitre.org/data/definitions/338.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

A function returns the address of a stack variable, which will cause unintended program behavior, typically in the form of a crash.

A function returns the address of a stack variable, which will cause unintended program behavior, typically in the form of a crash.

[CWE-562](https://cwe.mitre.org/data/definitions/562.html)

Info

The software attempts to return a memory resource to the system, but it calls a release function that is not compatible with the function that was originally used to allocate that resource

The software attempts to return a memory resource to the system, but it calls a release function that is not compatible with the function that was originally used to allocate that resource. Due to inherent limitations of Semgrep, this rule might generate many false positives and should therefore be customized for your codebase.

[CWE-762](https://cwe.mitre.org/data/definitions/762.html)

Info

The code does not have a default case in an expression with multiple conditions, such as a switch statement.

The code does not have a default case in an expression with multiple conditions, such as a switch statement.

[CWE-478](https://cwe.mitre.org/data/definitions/478.html)

Info

A non-void function does not have a return statement

A non-void function does not have a return statement. Hence, its return value can be considered undefined.

[CWE-393](https://cwe.mitre.org/data/definitions/393.html)

Info

The software calls free() on a pointer to memory that has a short lifetime and was not allocated using associated heap allocation functions such as malloc(), calloc(), or realloc().

The software calls free() on a pointer to memory that has a short lifetime and was not allocated using associated heap allocation functions such as malloc(), calloc(), or realloc().

[CWE-590](https://cwe.mitre.org/data/definitions/590.html)

High

A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold, or when a program attempts to put data in a memory area outside of the boundaries of a buffer.

A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold, or when a program attempts to put data in a memory area outside of the boundaries of a buffer.

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

High

The software subtracts one pointer from another in order to determine size, but this calculation can be incorrect if the pointers do not exist in the same memory chunk.

The software subtracts one pointer from another in order to determine size, but this calculation can be incorrect if the pointers do not exist in the same memory chunk.

[CWE-469](https://cwe.mitre.org/data/definitions/469.html)

Medium

The software calculates or uses an incorrect maximum or minimum value that is 1 more, or 1 less, than the correct value.

The software calculates or uses an incorrect maximum or minimum value that is 1 more, or 1 less, than the correct value.

[CWE-193](https://cwe.mitre.org/data/definitions/193.html)

Medium

The gets() function is always unsafe because it does not perform bounds checking on the size of its input

The gets() function is always unsafe because it does not perform bounds checking on the size of its input. An attacker can easily send arbitrarily-sized input to gets() and overflow the destination buffer.

[CWE-242](https://cwe.mitre.org/data/definitions/242.html)

High

The software uses a signed primitive and performs a cast to an unsigned primitive, or uses an unsigned primitive and performs a cast to a signed primitive, which can produce an unexpected value

The software uses a signed primitive and performs a cast to an unsigned primitive, or uses an unsigned primitive and performs a cast to a signed primitive, which can produce an unexpected value. When the result of a function is to be used as a size parameter, using negative return values can have unexpected results. Although less frequent an issue, unsigned-to-signed conversion can be the precursor to buffer underwrite conditions. Buffer underwrites occur frequently when large unsigned values are cast to signed values, and then used as indexes into a buffer or for pointer arithmetic.

[CWE-195](https://cwe.mitre.org/data/definitions/195.html)

Medium

Locate all calls to interesting and potentially insecure API functions (candidate points)

Locate all calls to interesting and potentially insecure API functions (candidate points). The auditor can backtrace from these candidate points to find pathways allowing access from untrusted input.

Best Practice

Medium

Truncation errors occur when a primitive is cast to a primitive of a smaller size and data is lost in the conversion

Truncation errors occur when a primitive is cast to a primitive of a smaller size and data is lost in the conversion. The value cannot be trusted and the application will be in an undefined state.

[CWE-197](https://cwe.mitre.org/data/definitions/197.html)

Medium

Use of alloca() is unsafe because it cannot ensure that the pointer returned points to a valid and usable block of memory

Use of alloca() is unsafe because it cannot ensure that the pointer returned points to a valid and usable block of memory. The allocation made may exceed the bounds of the stack, or even go further into other objects in memory, and alloca() cannot determine such an error.

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

High

C standards specify that the results are undefined if a call to sprintf(), snprintf(), vsprintf(), or vsnprintf() would cause copying to take place between objects that overlap (e.g., if the target string array and one of the supplied input arguments refer to the same buffer).

C standards specify that the results are undefined if a call to sprintf(), snprintf(), vsprintf(), or vsnprintf() would cause copying to take place between objects that overlap (e.g., if the target string array and one of the supplied input arguments refer to the same buffer).

Best Practice

Medium

The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value

The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value. This can introduce other weaknesses when the calculation is used for resource management or execution control.

[CWE-190](https://cwe.mitre.org/data/definitions/190.html)

Medium

The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value

The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value. This can introduce other weaknesses when the calculation is used for resource management or execution control. When influenced by the size of an input it is often easier to overflow a short than an int.

[CWE-190](https://cwe.mitre.org/data/definitions/190.html)

Medium

The software constructs an OS command using externally-influenced input, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended OS command.

The software constructs an OS command using externally-influenced input, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended OS command.

[CWE-676](https://cwe.mitre.org/data/definitions/676.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

The software omits a break statement within a switch or similar construct, causing code associated with multiple conditions to execute

The software omits a break statement within a switch or similar construct, causing code associated with multiple conditions to execute. This can cause problems when the programmer only intended to execute code associated with one condition.

[CWE-484](https://cwe.mitre.org/data/definitions/484.html)

Info

The software checks the state of a resource before using it, but the resource’s state can change between the check and the use in a way that invalidates the results of the check

The software checks the state of a resource before using it, but the resource’s state can change between the check and the use in a way that invalidates the results of the check. This canmcause the software to perform invalid actions when the resource is inman unexpected state.

[CWE-367](https://cwe.mitre.org/data/definitions/367.html)

Medium

The programmer accidentally uses the wrong operator, which changes the application logic in security-relevant ways

The programmer accidentally uses the wrong operator, which changes the application logic in security-relevant ways. This rule also covers some other common typo patterns.

[CWE-480](https://cwe.mitre.org/data/definitions/480.html)

Info

The code calls sizeof() on a malloced pointer type, which always returns the wordsize/8

The code calls sizeof() on a malloced pointer type, which always returns the wordsize/8. This can produce an unexpected result if the programmer intended to determine how much memory has been allocated.

[CWE-467](https://cwe.mitre.org/data/definitions/467.html)

Medium

If there is no NUL character byte in the first n bytes of the source string, strncpy() and stpncpy() do not NUL-terminate the destination buffer

If there is no NUL character byte in the first n bytes of the source string, strncpy() and stpncpy() do not NUL-terminate the destination buffer. If the program does not explicitly terminate the destination buffer, this will almost certainly result in information disclosure, and possibly a buffer overflow condition.

[CWE-170](https://cwe.mitre.org/data/definitions/170.html)

Medium

The software calls free() twice on the same memory address, potentially leading to memory corruption

The software calls free() twice on the same memory address, potentially leading to memory corruption. This corruption can cause the program to crash or cause two later calls to malloc() to return the same pointer.

[CWE-415](https://cwe.mitre.org/data/definitions/415.html)

High

Checking if an unsigned variable is negative makes no sense and is usually a good indication that something is probably wrong with the code.

Checking if an unsigned variable is negative makes no sense and is usually a good indication that something is probably wrong with the code.

[CWE-697](https://cwe.mitre.org/data/definitions/697.html)

Medium

Creating and using insecure temporary files can leave application and system data vulnerable to attack.

Creating and using insecure temporary files can leave application and system data vulnerable to attack.

[CWE-377](https://cwe.mitre.org/data/definitions/377.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

The invocation of memset() is easy to get wrong

The invocation of memset() is easy to get wrong. The second argument is the character and the third argument is the size, but sometimes these arguments are in the wrong order. This results in a no-op.

Best Practice

High

The software uses a function that accepts a format string as an argument, but the format string originates from an external source

The software uses a function that accepts a format string as an argument, but the format string originates from an external source. This can lead to buffer overflows, denial of service, or data representation problems.

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

The software does not check the return value from a method or function, which can prevent it from detecting unexpected states and conditions.

The software does not check the return value from a method or function, which can prevent it from detecting unexpected states and conditions.

[CWE-252](https://cwe.mitre.org/data/definitions/252.html)

Medium

The software does not check the return value from a method or function, which can prevent it from detecting unexpected states and conditions

The software does not check the return value from a method or function, which can prevent it from detecting unexpected states and conditions. If the program calls a function to drop privileges but does not check the return code to ensure that privileges were successfully dropped, then the program will continue to operate with the higher privileges.

[CWE-252](https://cwe.mitre.org/data/definitions/252.html)

Medium

The strlcpy() and strlcat() functions return the total length of the string they tried to create

The strlcpy() and strlcat() functions return the total length of the string they tried to create. For strlcpy() that means the length of the source string. For strlcat() that means the initial length of the destination string plus the length of of the source string. Therefore, this return value can be larger than the size of the destination buffer. If it is used unsafely, e.g. as an index to write to the destination buffer, memory corruption might occur.

Best Practice

Medium

The software calls putenv() with a variable that has a short lifetime, such as a pointer to an automatic variable allocated on the stack

The software calls putenv() with a variable that has a short lifetime, such as a pointer to an automatic variable allocated on the stack. The correct behavior is to call putenv() with a static/global string.

[CWE-686](https://cwe.mitre.org/data/definitions/686.html)

Info

## Elixir [Copied!](#elixir "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Atom uncontrolled resource consumption

Potential denial of service vulnerability via ‘.to\_atom’. In Elixir, atoms are not garbage collected. As such, if dynamic input is passed to a to\_atom function, it may result in memory exhaustion.

[CWE-400](https://cwe.mitre.org/data/definitions/400.html)

Medium

Unsanitized external input in code generation

Allowing external input (dynamic or user-controlled) to directly influence code generation or scripting functions without proper sanitization can lead to code injection vulnerabilities. This occurs when an attacker is able to insert malicious code into your application, which is then executed, potentially leading to unauthorized actions or data access.

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized external input in HTTP response (XSS)

Including unsanitized external input in HTTP responses exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in initialization of trusted environment variables

Using unsanitized user input to set environment variables via `System.put_env/2` allows attackers to manipulate critical runtime settings such as proxy configuration, library loading paths, and SSL certificate locations. This can lead to traffic interception, arbitrary code execution, or security bypass.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Insecure temporary directory usage

Creating files in shared system directories like `/tmp` or `/var/tmp` is insecure because these directories are world-writable. Files created there may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive information in logger message

Sensitive information leakage in logger messages can compromise user privacy and security. This vulnerability occurs when sensitive data, such as personal identifiable information (PII), is included in log messages, making it accessible to unauthorized individuals.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Non-literal input used in OS or shell command

Directly incorporating external or user-defined input into an OS or shell command exposes the system to possible command injection attacks. This vulnerability allows attackers to execute unauthorized commands on the operating system, potentially leading to a compromise of system integrity.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized dynamic input in file path

Using unsanitized dynamic input to determine file paths can allow attackers to gain access to files and folders outside of the intended scope. This vulnerability occurs when input provided by users is directly used to access the filesystem without proper validation or sanitization.

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Unsanitized external input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data.

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Uncontrolled environment variables

Executing system commands without explicitly managing environment variables can lead to command injection vulnerabilities if an attacker is able to control in which environment the commands are executed. It is best security practice to always set or clear environment variables - especially sensitive variables like `PATH` - when using `System.cmd`.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsafe decoding of binary data

When decoding binaries from untrusted sources, the data might create non-garbage-collectable resources like atoms and remote references, potentially leading to a Denial of Service attack.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Usage of weak hashing library (MD5)

Using a weak hashing library like MD5 increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs produce the same output, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library, such as SHA-1, increases the risk of data breaches. SHA-1 itself is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for passwords increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA1)

Using a weak hashing library like SHA-1 for passwords increases the risk of data breaches. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Missing secure HTTP server configuration

Failing to configure your HTTP server to use HTTPS can expose data to interception and manipulation. HTTPS, which incorporates TLS (Transport Layer Security), encrypts data in transit and therefore provides a more secure communication channel than HTTP.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Missing check origin for WebSocket

Establishing a WebSocket connection without checking the origin of the incoming connections is a security risk. Missing origin checks mean that any origin can establish a WebSocket connection. This makes your application vulnerable to attacks such as Cross-Site WebSocket Hijacking (CSWSH).

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Missing Content-Security Policy

For Phoenix applications that use session-based authentication, it is crucial to add security-related headers to responses. In particular, it is important to include a content-security policy in your response headers, in order to mitigate the risk of Cross-Site Scripting (XSS) and click-jacking attacks.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Missing CSRF protection

For Phoenix applications that use session-based authentication, it is crucial to use the protect\_from\_forgery plug in order to mitigate the risk of Cross-Site Request Forgery attacks.

[CWE-352](https://cwe.mitre.org/data/definitions/352.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Missing HSTS configuration

The HSTS (HTTP Strict-Transport Security) mechanism adds a Strict-Transport-Security header to requests. This forces browsers to switch from HTTP to HTTPS when possible and to reject connections not using SSL/TLS. By doing this, HSTS reduces the risk of Man-in-the-Middle attacks. It is therefore a best security practice to configure your application to use HSTS.

[CWE-523](https://cwe.mitre.org/data/definitions/523.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Missing security headers for HTML requests

For Phoenix applications that process HTML requests, it is important to configure secure HTTP headers. Failure to implement proper security checks (such as secure browser headers) may put your application at risk of various security issues such as injection attacks.

[CWE-358](https://cwe.mitre.org/data/definitions/358.html)

Medium

Unsanitized external input in raw HTML (XSS)

Including unsanitized external input in HTML exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Transport layer WebSocket with check origin set to false

Not checking the origin of incoming WebSocket connections is a security risk, because this means that any origin can establish a WebSocket connection. It is therefore not advisable to disable origin checks. This makes your application vulnerable to attacks such as Cross-Site WebSocket Hijacking (CSWSH).

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

## Go [Copied!](#go "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Missing HTTP Only option in cookie configuration

The absence of the “HttpOnly” attribute in cookie settings leaves the cookie vulnerable to being accessed by client-side JavaScript, such as through “document.cookie”. This vulnerability is particularly concerning for websites susceptible to Cross-Site Scripting (XSS) attacks, as it allows malicious scripts to read the cookie value. Properly configuring the “HttpOnly” attribute is a critical step in securing cookies, especially for session management.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing Secure option in cookie configuration

The Secure attribute in cookie configuration is crucial for protecting cookies from unauthorized third-party access. When set to “true,” it ensures cookies are only sent over HTTPS, safeguarding the data during transmission.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Usage of vulnerable CGI package

The `net/http/cgi` package in Go versions before 1.6.3 is vulnerable to the Httpoxy attack. This vulnerability, identified as CVE-2016-5386, occurs because of how CGI and FastCGI protocols manage certain environment variables. Attackers can exploit this to intercept and redirect outgoing HTTP requests from the web application.

[CWE-1395](https://cwe.mitre.org/data/definitions/1395.html)

[A03:2025](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/)

Medium

Import of weak encryption algorithm (DES)

The Data Encryption Standard (DES) is an outdated encryption algorithm that is officially considered insecure and is no longer recommended for use. DES was withdrawn as a standard by the National Institute of Standards and Technology (NIST) in 2005 because of its 56-bit key size which makes it susceptible to brute-force attacks.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Import of weak hashing library (MD5)

Using a weak hashing library like MD5 increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs produce the same output, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Import of weak encryption algorithm (RCA)

The RC4 encryption algorithm is outdated and vulnerable. It has been found to have significant security flaws, including predictable key generation and weak randomization, which have been exploited in various attacks. These vulnerabilities make RC4 unsuitable for secure data encryption.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Import of weak hashing library (SHA-1)

The SHA-1 hashing algorithm is outdated and vulnerable to collision attacks, where two distinct inputs produce the same output hash. This flaw compromises the algorithm’s ability to securely verify data integrity and authenticity, making it unsuitable for cryptographic security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of insecure cipher

Using an insecure cipher suite in your application introduces a significant security risk. These weak cipher suites are susceptible to various attacks, compromising the security of your communications.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Missing verification of host keys

Lacking verification of host key during SSH connections compromises the security of your application. Host keys are essential for verifying the server’s identity to prevent Man-in-the-Middle (MitM) attacks, where an attacker could pose as the server. Without this verification, there’s no way to ensure the server’s authenticity.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library

Your code uses a weak hashing library, which means it relies on cryptographic algorithms that are no longer secure. This vulnerability can lead to compromised data confidentiality and integrity, as it makes the data susceptible to unauthorized decryption and tampering.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inadequate encryption strength

Your application uses RSA encryption with a key length shorter than the recommended 2048 bits. Keys under 2048 bits are vulnerable because of the increasing power of modern computers, which could break the encryption by factoring the key.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak Pseudo-Random Number Generator (PRNG)

The `math/rand` package in Go uses a pseudorandom number generator (PRNG) whose output is deterministic and reproducible. Given a known seed, an attacker can predict every value the generator will produce. Because code evolves and values generated by `math/rand` may flow into security-sensitive contexts over time (e.g., identifiers, tokens, session keys, or access-control decisions), using a predictable source of randomness anywhere in the codebase increases the attack surface.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of deprecated TLS version

TLS (Transport Layer Security) versions 1.0 and 1.1 have known vulnerabilities and using them introduces security risks to your application. These outdated TLS versions can lead to the interception and compromise of sensitive data during transmission.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Permissive file assignment

Setting overly permissive file permissions exposes your system to risks such as unauthorized access, data tampering, and potential system compromise. This vulnerability arises when files are created or updated without adequately restrictive permissions, allowing unauthorized users to read, modify, or execute files.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Permissive folder creation

Incorrect directory permissions can severely compromise system security.Directories with overly permissive access rights can allow unauthorized users to manipulate files, potentially leading to malicious code execution, data breaches, or full system compromise.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Missing configuration against decompression bomb

Decompression bombs pose a risk by exploiting applications that process compressed files. These attacks involve a compressed file that is small in size but expands to a significantly larger size when decompressed. This can overwhelm system resources such as CPU, memory, or disk space, causing a Denial of Service (DoS).

[CWE-409](https://cwe.mitre.org/data/definitions/409.html)

Low

Usage of Root directory mounting

Mounting the root directory (`/`) on an HTTP server exposes a significant security risk. This setup could allow unauthorized individuals to access and browse system files, potentially leading to information disclosure, data breaches, or further system exploitation.

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Unsanitized user input in file path

Using user input to dynamically construct file paths without proper sanitization introduces a high security risk. This practice can allow attackers to manipulate file paths to access or alter sensitive files, potentially leading to data breaches or system compromise. It is essential to sanitize user input before using it in file system operations to prevent path traversal attacks.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Permissive file creation

Your application sets file permissions that are overly permissive. This oversight could let unauthorized individuals read, write, or execute files, which could lead to the exposure of sensitive information or other security risks.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Permissive temporary file creation

Your application creates temporary files in shared system directories like `/tmp` or `/var/tmp` without using secure functions such as `os.CreateTemp`. This method is risky as it could lead to symlink attacks. In such attacks, an attacker predicts the name of the temporary file and creates a symlink to a target file. Consequently, when your application writes to the supposed temporary file, it could unintentionally overwrite or create unauthorized files.

[CWE-378](https://cwe.mitre.org/data/definitions/378.html)

Medium

Missing protection against ‘Zip Slip’ path traversal

Your application is vulnerable to a ‘Zip Slip’ path traversal attack when it extracts files from archives that are not trusted. This occurs because malicious archives may contain files with relative paths aiming to escape the intended directory. As a result, these files could overwrite important system files or be placed in sensitive locations, leading to security breaches.

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Usage of vulnerable ‘serve’ function

The default `serve` functions in Go’s `net/http` package are susceptible to resource consumption attacks. This vulnerability arises when attackers flood the server with incomplete or persistent connections, depleting its resources and blocking new legitimate connections.

[CWE-400](https://cwe.mitre.org/data/definitions/400.html)

High

Missing protection against ‘Slowloris’ attack

Your server configuration is missing the `ReadHeaderTimeout` setting, making it vulnerable to a type of Distributed Denial of Service (DDoS) attack known as a Slowloris attack. In such an attack, a hacker initiates many connections to your server, sending incomplete requests. Your server then keeps each connection open, waiting for the headers to be completed. This can lead to resource exhaustion, where your server cannot handle additional (legitimate) requests.

[CWE-400](https://cwe.mitre.org/data/definitions/400.html)

High

Unsanitized user input in HTTP request (SSRF)

Including unsanitized user input in HTTP requests puts your application at risk of Server-Side Request Forgery (SSRF). This is a security vulnerability that occurs when a server-side application makes HTTP requests to arbitrary URLs controlled by the user. SSRF can be exploited by attackers to target internal systems behind firewalls that are otherwise inaccessible from the external network, by tricking the server into making requests to these systems.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Unsanitized dynamic input in OS command

Using unsanitized dynamic or external input in an OS command is a critical security flaw that can enable attackers to execute unauthorized commands on the host operating system, potentially leading to a complete system takeover.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in web page generation (XSS)

Cross-Site Scripting (XSS) is a vulnerability that allows attackers to run malicious scripts in the context of a trusted web application. This can happen when an application includes untrusted data without proper validation or escaping. There are several contexts where XSS can occur, each requiring specific encoding strategies to mitigate the risk.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of active debug code (pprof enabled)

Enabling Go’s `net/http/pprof` in production environments exposes runtime profiling data via a `/debug/pprof` endpoint, creating a security vulnerability. This tool is part of Go’s standard library and, while useful for debugging, it does not have authentication controls. This can lead to sensitive information leaks about the application’s runtime state and environment if left accessible in production.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Possible integer overflow

In Go, the size of an `int` type is not fixed and depends on the system architecture (32 bits on a 32-bit system and 64 bits on a 64-bit system). This can lead to integer overflow when a value is converted from `strconv.Atoi` to a smaller integer type like `int32` or `int16`, and the value exceeds what the smaller type can hold. Integer overflow can result in unpredictable behavior and severe bugs.

[CWE-190](https://cwe.mitre.org/data/definitions/190.html)

Medium

Possible integer overflow when converting strings

When you convert strings to integers in Go using `strconv.Atoi`, you might encounter an integer overflow if you assign the result to a smaller integer type like `int16` or `int32`. This is because the size of `int` type in Go is not fixed and depends on the system architecture (32 bits on a 32-bit system and 64 bits on a 64-bit system). An overflow occurs if the `strconv.Atoi` return value is too large for the intended smaller integer type.

[CWE-190](https://cwe.mitre.org/data/definitions/190.html)

Medium

Usage of single iteration variable in range loop

In Go, using the `for ... range` loop with a single iteration variable can lead to errors. This happens because the loop uses the same memory address for the iteration variable throughout its execution. When you store or use the address of this variable across different iterations, it can overwrite values unexpectedly. This issue is especially problematic in concurrent operations or when deferring functions inside the loop.

[CWE-118](https://cwe.mitre.org/data/definitions/118.html)

Low

Permissive server network interface configuration

Binding a service to “0.0.0.0” makes it accessible on all network interfaces. This configuration can lead to unintended exposure over insecure or unintended network interfaces, creating potential security risks.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in SQL query

SQL Injection is a critical vulnerability that arises when SQL queries are dynamically constructed using unsanitized user input. This flaw allows attackers to alter the intended logic of SQL statements, potentially leading to unauthorized access to sensitive data or the execution of arbitrary code on the system. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Go)

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized external input in code execution

Unsanitized external input in code execution can result in code injection. This vulnerability arises when external or user-provided data is directly used in the execution flow of a program without proper sanitization, potentially leading to unauthorized actions or access.

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Usage of vulnerable ‘unsafe’ package

The `unsafe` package in Go allows for low-level memory management, including direct memory access and pointer manipulation. While `unsafe` is a powerful library, using it bypasses Go’s type safety checks and opens the door to security vulnerabilities and unpredictable behavior in your application.

[CWE-242](https://cwe.mitre.org/data/definitions/242.html)

High

Missing HTTP Only option in cookie configuration

Missing the HTTP Only option in cookie configuration exposes cookies to client-side script access. This vulnerability occurs when cookies are set without the `HttpOnly` attribute, allowing them to be accessible via JavaScript. This can lead to sensitive information being compromised, especially if the site is susceptible to Cross-Site Scripting (XSS) attacks.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Unsanitized user input in HTTP response (XSS)

Including unsanitized user input in HTTP responses exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in initialization of trusted environment variables

Using unsanitized user input to set environment variables via `os.Setenv()` allows attackers to manipulate critical runtime settings such as proxy configuration, library loading paths, SSL certificate locations, and Go toolchain paths. This can lead to traffic interception, arbitrary code execution, or security bypass.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in deserialization method

Deserializing data from untrusted sources, like user inputs or request parameters, without proper verification is a security risk. Attackers can embed malicious code or payloads within serialized data. When your application deserializes this data without checks, it becomes vulnerable to attacks.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Missing sanitization of HTML template tags

When user input is not sanitized, attackers can inject HTML tags, such as `<script>` tags, into templates. This unsanitized input can lead to Cross-Site Scripting (XSS) attacks when the malicious scripts are executed.

[CWE-80](https://cwe.mitre.org/data/definitions/80.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Leakage of sensitive information in exception message

Leakage of sensitive information in exception messages can compromise your application’s security. This occurs when exception messages reveal too much about your application’s internal workings or user-specific data, potentially aiding attackers in crafting targeted attacks such as path traversal.

[CWE-209](https://cwe.mitre.org/data/definitions/209.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A10:2025](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)

Low

Missing Secure option in cookie configuration

Missing the Secure option in cookie configuration can compromise cookie security. The Secure attribute, when set to true, ensures cookies are sent to the server only over HTTPS, protecting them from interception by unauthorized parties.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Usage of insufficient random value

Your application is at risk when it uses predictable random values, particularly for security-related functions.

[CWE-330](https://cwe.mitre.org/data/definitions/330.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Missing output neutralization for logs

Logging unsanitized external input directly can introduce log injection vulnerabilities. This occurs when external data is logged without being cleaned, potentially allowing attackers to insert malicious content into your logs.

[CWE-117](https://cwe.mitre.org/data/definitions/117.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Low

Leakage of sensitive information in logger message

Leakage of sensitive information in logger messages can compromise data security. This vulnerability arises when sensitive data is included in log messages, potentially leading to unauthorized access.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Leakage of information in logger message

Information leakage through logger messages can result in data breaches. This vulnerability arises when dynamic data or variables, which may contain sensitive information, are included in log messages.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Low

Missing TLS MinVersion

Older versions of TLS (Transport Layer Security) have been deprecated because of known security issues. To enhance security, it is crucial to specify the highest possible minimum version of TLS that your server will accept.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Observable Timing Discrepancy

Observable Timing Discrepancy occurs when the time it takes for certain operations to complete can be measured and observed by attackers. This vulnerability is particularly concerning when operations involve sensitive information, such as password checks or secret comparisons. If attackers can analyze how long these operations take, they might be able to deduce confidential details, putting your data at risk.

[CWE-208](https://cwe.mitre.org/data/definitions/208.html)

Medium

Unsanitized user input in redirect

Using unsanitized user input to perform redirects can expose your application to phishing attacks. This vulnerability arises when user input directly influences the destination of a redirect without proper validation, making it easier for attackers to deceive users by directing them to malicious sites.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Missing validation for regular expression

When matching with regular expressions – especially for validation purposes – it is crucial to specify the start and end of the text boundaries. This ensures the entire text is validated, not just parts of it, and prevents attackers from bypassing validation with partially matching input. Use \\A and \\z (or \\Z) over ^ and $ to specify text boundaries, because these accurately mark the beginning and end of the text, even in multiline mode.

[CWE-625](https://cwe.mitre.org/data/definitions/625.html)

Medium

Missing SSL certificate verification

Your application’s security is compromised if it fails to verify SSL certificates. This vulnerability occurs when your application communicates over HTTPS without validating the authenticity of the SSL certificate presented by the server. It exposes sensitive data to interception by attackers.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Usage of weak hashing library (MD5)

Using a weak hashing library like MD5 increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs produce the same output, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library such as SHA-1 can compromise data security. SHA-1 is no longer considered secure due to vulnerabilities that can lead to data breaches.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for password storage compromises security. MD5 is outdated and vulnerable, making it easier for attackers to crack passwords and gain unauthorized access.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using a weak hashing library like SHA-1 for passwords increases the risk of data breaches. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Unsanitized user input in XML External Entity

Unsanitized user input in XML External Entity (XXE) processing can lead to security vulnerabilities. This issue arises when XML input containing a reference to an external entity is processed without proper sanitization, potentially allowing attackers to access or interact with external systems.

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Leakage of sensitive data to Airbrake

Leaking sensitive data to third-party loggers like Airbrake is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Algolia

Leaking sensitive data to third-party data tools like Algolia is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to BigQuery

Leaking sensitive data to third-party data tools like BigQuery is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Bugsnag

Leaking sensitive data to third-party loggers like Bugsnag is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ClickHouse

Leaking sensitive data to a third-party service like ClickHouse is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog

Leaking sensitive data to third-party loggers like Datadog is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ElasticSearch

Leaking sensitive data to third-party data tools is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Analytics

Leaking sensitive data to third-party analytics tools like Google Analytics is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Dataflow

Leaking sensitive data to a third-party service is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Honeybadger

Leaking sensitive data to third-party loggers like Honeybadger is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to New Relic

Leaking sensitive data to third-party loggers like New Relic is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Open Telemetry

Leaking sensitive data to third parties like Open Telemetry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to RollBar

Leaking sensitive data to third-party loggers like Rollbar is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Segment

Leaking sensitive data to third-party analytics tools like Segment is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Sentry

Leaking sensitive data to third-party loggers like Sentry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

## Java [Copied!](#java "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Permissive screenshot option set

The Android operating system can capture screenshots of the current application view, such as when the app is minimized. This capability is controlled by the FLAG\_SECURE option. If FLAG\_SECURE is not enabled, Android can take screenshots, which might include sensitive information.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Permissive context mode for resources

Using permissive context modes like `Context.MODE_WORLD_READABLE` and `Context.MODE_WORLD_WRITEABLE` for file permissions exposes your application to significant security risks. These modes allow any application to read and write to your files, respectively. In light of these risks, these constants have been deprecated and removed from newer Android versions.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Usage of bad hex conversion on digest array

Your application is using `Integer.toHexString` for converting a digest array buffer into a hexadecimal string, which may lead to incorrect representations.

[CWE-704](https://cwe.mitre.org/data/definitions/704.html)

Medium

Usage of small key size with Blowfish encryption

Using Blowfish encryption with a small key size (128 bytes or less) makes your data susceptible to birthday attacks. This vulnerability arises because smaller key sizes don’t provide enough complexity to secure the encrypted data effectively. It is recommended to specify a larger value, such as 256, instead.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Unsanitized user input in code generation

Allowing user input to directly influence code generation or scripting functions without proper sanitization can lead to code injection vulnerabilities. This occurs when an attacker is able to insert malicious code into your application, which is then executed, potentially leading to unauthorized actions or data access.

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in cookie

Leakage of sensitive data in cookies can lead to a data breach. This vulnerability occurs when sensitive information is stored in browser cookies, putting it at risk of unauthorized access.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Missing HTTP Only option in cookie configuration

Not setting the HTTP Only attribute to “true” in cookie configurations leaves the cookie vulnerable to being accessed by client-side JavaScript. This oversight can lead to the exposure of cookie values, especially on websites susceptible to Cross-Site Scripting (XSS) attacks. Enabling HTTP Only is a critical step in preventing malicious scripts from reading the cookie values through JavaScript.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing Secure option in cookie configuration

Not setting the “Secure” attribute in cookie configuration can lead to unauthorized third-party access. This attribute, when enabled, ensures cookies are sent to the server only over HTTPS, enhancing security by preventing potential eavesdropping.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Permissive HTTP Only option in cookie configuration

Leaving the HTTP Only option in cookie configuration unset or false can expose your application to attacks by allowing client-side scripts to access cookie values. This vulnerability can lead to unauthorized access or exploits.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Possible CRLF injection detected

CRLF (Carriage Return Line Feed) injection vulnerability occurs when an attacker is able to insert a sequence of line termination characters into a log message. This can lead to forged log entries, compromising the integrity of log files.

[CWE-93](https://cwe.mitre.org/data/definitions/93.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Usage of custom Digest class

Creating your own Digest class is not recommended because manually implement cryptographic functions is a highly error-prone process. It’s safer and more secure to rely on standard Digest algorithms like SHA-256 or SHA-512.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of dangerous permissions

Granting certain (dangerous) permissions compromises application security. Specifically, allowing `RuntimePermission` of `createClassLoader` can lead to unauthorized class loaders being used to load arbitrary classes. Similarly, permitting `ReflectPermission` of `suppressAccessChecks` bypasses Java language access controls, risking unrestricted access to protected and private class members.

[CWE-269](https://cwe.mitre.org/data/definitions/269.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in initialization of trusted system properties

Using unsanitized user input to set Java system properties via `System.setProperty()` allows attackers to manipulate critical runtime settings such as proxy configuration, class paths, SSL trust stores, and security policies. This can lead to traffic interception, arbitrary code execution, or security bypass.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in deserialization method

It is bad practice to deserialize untrusted data, such as data that comes from params or cookies, without sufficient verification. Attackers can transfer payloads or malicious code via serialized data, and deserializing such data puts your application at risk.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Missing database password detected

Leaving a database password empty exposes its data to unauthorized access and manipulation. It’s crucial to implement strong authentication measures to safeguard database content.

[CWE-306](https://cwe.mitre.org/data/definitions/306.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Unsanitized user input in ’eval’ type function

Using ’eval’ or similar functions with unsanitized user input poses a high security risk. This practice can result in command injection attacks, where attackers can execute arbitrary code within your application.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in exception message

Leakage of sensitive data in exception messages can lead to data breaches. This vulnerability occurs when sensitive information is included in exceptions, making it accessible to unauthorized users.

[CWE-210](https://cwe.mitre.org/data/definitions/210.html)

Medium

Possible expression language (EL) injection detected

Expression Language (EL) injection vulnerabilities occur when external input is used to construct EL statements without proper validation. This can result in the execution of malicious code.

[CWE-917](https://cwe.mitre.org/data/definitions/917.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in SQL catalog configuration

Using unsanitized user input to configure a SQL Connection’s catalog can lead to security vulnerabilities. This practice allows attackers to manipulate the catalog name in the `setCatalog` method, potentially causing harmful or unintended actions in the application.

[CWE-15](https://cwe.mitre.org/data/definitions/15.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Usage of permissive file permission (‘other’)

Granting overly permissive file permissions, especially to ‘other’, poses a significant security risk by potentially exposing sensitive information to unauthorized users.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Unsanitized use of FileUpload filename

Using the filename from FileUpload without sanitization can lead to path traversal attacks. This vulnerability occurs when an attacker manipulates the filename to access files or directories that are outside of the intended directory.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in format string detected

Using unsanitized user input as the format string in format functions exposes your application to potential attacks. This vulnerability allows attackers to craft format strings that can lead to unauthorized data exposure or cause your application to crash.

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Possible HTTP Parameter Pollution detected

Using unsanitized user input to construct a URL can lead to HTTP Parameter Pollution (HPP) attacks. In such attacks, an attacker can manipulate the URL or request parameters to alter requests or access hidden information.

[CWE-88](https://cwe.mitre.org/data/definitions/88.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Unsanitized user input in HTTP response (XSS)

Including unsanitized user input in a HTTP response could allow an attacker inject Carriage Return Line Feed (CRLF) characters into the response. An entirely attacker-controlled response can then be returned, creating a cross-site scripting (XSS) vulnerability. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Java)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in HTTP request (SSRF)

Directly incorporating user input into HTTP request URLs can lead to Server-Side Request Forgery (SSRF) attacks. This vulnerability occurs when an attacker can control the destination of an HTTP request sent by the server.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Leakage of sensitive information in exception message

Leakage of sensitive information in exception messages poses a significant security risk. When an exception message is printed to the default output, it might reveal sensitive details about your application’s technical setup or environment. This could potentially open the door to attacks, such as path traversal. Even more concerning is the possibility of exposing user-specific data, which could lead to serious privacy breaches.

[CWE-209](https://cwe.mitre.org/data/definitions/209.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A10:2025](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)

Low

Unsanitized user input in Access-Control-Allow-Origin

Using unverified user-defined input to set the Access-Control-Allow-Origin header can result in unauthorized access to sensitive data. This vulnerability exposes your application to potential security risks by allowing attackers to specify origins that can access resources.

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Missing Secure option in cookie configuration

When a cookie lacks the Secure option, it can be transmitted over insecure connections, making it vulnerable to interception by unauthorized parties. The Secure option is important because it instructs the browser to only send the cookie over HTTPS, enhancing security.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Insecure temporary directory usage

Creating temporary files using methods like `File.createTempFile()` can be insecure because the default temporary directory (e.g., `/tmp`) is shared among all users on the system. Files created in such directories may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of insufficient random value

The use of predictable random values compromises application security, particularly when these values serve security-related functions.

[CWE-330](https://cwe.mitre.org/data/definitions/330.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Missing signature verification of JWT

Failing to verify the signature of JSON Web Tokens (JWTs) compromises the security of an application. Signature verification is crucial for confirming the authenticity and integrity of JWTs. Without this verification, your application is open to token forgery and replay attacks, where attackers can manipulate or reuse tokens to gain unauthorized access.

[CWE-347](https://cwe.mitre.org/data/definitions/347.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in LDAP request

Using unsanitized user input in an LDAP request can lead to LDAP injection, which is when attackers can modify the LDAP tree structure by injecting malicious input. It’s crucial to ensure that data passed to an LDAP query is either not controlled by the user or is properly sanitized.

[CWE-90](https://cwe.mitre.org/data/definitions/90.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Unsanitized user input in logger message

Logging unsanitized user input can lead to log forgery or malicious content injection. This vulnerability arises when user input is directly included in log messages without proper sanitization.

[CWE-117](https://cwe.mitre.org/data/definitions/117.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Low

Leakage of sensitive information in logger message

Sensitive information leakage in logger messages can compromise user privacy and security. This vulnerability occurs when sensitive data, such as personal identifiable information (PII), is included in log messages, making it accessible to unauthorized individuals.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Leakage of information in logger message

Information leakage through logger messages can compromise sensitive data. This vulnerability arises when dynamic data or variables, which may contain sensitive information, are included in log messages.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Low

Missing authentication for database

Your database is at high risk if it lacks proper authentication mechanisms. This vulnerability makes it an easy target for unauthorized access and potential security breaches.

[CWE-306](https://cwe.mitre.org/data/definitions/306.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Missing support for integrity check

If a protocol does not include integrity checks (“checksums”), it is impossible to determine whether or not an attacker has interfered with or manipulated the transmitted data. This makes it difficult to confirm whether or not the transmitted data has been tampered with or altered by unauthorized parties (Man-in-the-Middle attack).

[CWE-353](https://cwe.mitre.org/data/definitions/353.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Medium

Missing SSL host check in SMTP

Missing SSL host check in SMTP can compromise the security of email communications. This vulnerability arises when SSL certificates are not properly validated to ensure they originate from the anticipated host, potentially allowing attackers to pose as legitimate entities by leveraging valid SSL certificates from other hosts.

[CWE-297](https://cwe.mitre.org/data/definitions/297.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Observable Timing Discrepancy

Observable Timing Discrepancy occurs when the time it takes for certain operations to complete can be measured and observed by attackers. This vulnerability is particularly concerning when operations involve sensitive information, such as password checks or secret comparisons. If attackers can analyze how long these operations take, they might be able to deduce confidential details, putting your data at risk.

[CWE-208](https://cwe.mitre.org/data/definitions/208.html)

Medium

Unsanitized user input in redirect

Using unsanitized user input to perform redirects can make your application vulnerable to phishing attacks. This occurs when user input is directly used to determine the destination of a redirect without proper validation or sanitization, allowing attackers to redirect users to malicious sites, potentially compromising their security.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in OS command

Directly incorporating external or user-defined input into an OS command exposes the system to possible command injection attacks. This vulnerability allows attackers to execute unauthorized commands on the operating system, potentially leading to a compromise of system integrity.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Usage of CBC (Cipher Block Chaining) mode with padding

Using a block cipher algorithm mode, such as CBC (Cipher Block Chaining), together with a padding scheme is vulnerable to Padding Oracle attacks. This vulnerability arises because attackers can exploit the padding scheme to decrypt messages.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Unsanitized user input in file path

Unsanitized user input in file paths can compromise your system’s security. This vulnerability arises when user input is directly used to construct file names or paths without proper sanitization, potentially leading to path manipulation. Attackers could exploit this to access files or directories outside the intended scope, posing a significant security risk.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in file path

Unsanitized user input in file path resolution can lead to security vulnerabilities. This issue arises when an application directly uses input from the user to determine file paths or names without proper validation or sanitization. Attackers can exploit this to access unauthorized files or directories, leading to data breaches or other security compromises.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Permissive Access-Control-Allow-Origin configuration

A permissive Access-Control-Allow-Origin configuration can expose your application to security risks. When this header is set to “\*”, it means your application’s responses can be accessed by any website, potentially leading to unauthorized access to sensitive information.

[CWE-942](https://cwe.mitre.org/data/definitions/942.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Permissive cookie configuration

Using overly permissive cookie settings can expose your application to security risks, such as unauthorized access or exploits.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Usage of external input in code reflection

Using external input for dynamic class loading or code execution through reflection poses a significant security risk. This practice can be exploited by attackers to load harmful classes or execute malicious methods, potentially resulting in remote code execution and other severe security threats.

[CWE-470](https://cwe.mitre.org/data/definitions/470.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in regular expression

Constructing regular expressions from user input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This issue arises because certain regular expressions can be processed with exponential time complexity. If attackers exploit this, they can cause significant CPU usage spikes, effectively denying service to legitimate users.

[CWE-1287](https://cwe.mitre.org/data/definitions/1287.html)

Medium

Missing Optimal Asymmetric Encryption Padding (OAEP)

The RSA encryption algorithm becomes vulnerable without Optimal Asymmetric Encryption Padding (OAEP). This vulnerability can lead to security risks such as information disclosure.

[CWE-780](https://cwe.mitre.org/data/definitions/780.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of naive Socket class to create SSL Socket

Using the naive Socket class to create SSL sockets compromises security. Creating SSL sockets directly with `new Socket()` lacks the advanced security features provided by `SSLSocketFactory`. `SSLSocketFactory` is designed with SSL/TLS protocols in mind, offering encryption, hostname verification, and trust manager configuration. This makes it a more secure option for creating SSL sockets.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized external input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data.

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Missing or permissive SSL hostname verifier

It is best security practice to always verify the hostname when establishing a SSL/TLS connection. Failure to do so exposes your application to Man-in-the-Middle attacks. This vulnerability arises when the application fails to confirm that the server’s hostname matches the hostname in the server’s SSL certificate.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Missing TLS validation

Your code is vulnerable to Man-in-the-Middle attacks if it doesn’t validate TLS certificates. This issue arises when your application establishes a connection without verifying the server’s hostname, making it susceptible to data interception and other security risks. Using deprecated elements like `DefaultHttpClient`, which lacks hostname verification, or the SSL protocol, known for its security flaws, exacerbates these vulnerabilities.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Leakage of sensitive information to standard output stream

Exposing sensitive information in a standard output stream can compromise user privacy and security. This vulnerability occurs when Personally Identifiable Information (PII) or other confidential data is printed to standard output, making it potentially accessible to unauthorized individuals.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsafe JVM termination in managed container

Calling System.exit(), Runtime.getRuntime().exit(), or Runtime.getRuntime().halt() from a web application or J2EE component shuts down the entire JVM, terminating all running threads and requests. In a shared application-server environment this can cause denial of service for every application hosted on that server. **Supported on V2 engine only.**

[CWE-382](https://cwe.mitre.org/data/definitions/382.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Usage of trusted and untrusted data inside the same data structure

Combining trusted and untrusted data within a single data structure poses a significant security risk. This practice may result in untrusted data being incorrectly regarded as trustworthy, potentially leading to security vulnerabilities.

[CWE-501](https://cwe.mitre.org/data/definitions/501.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Usage of weak encryption algorithm (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of ECB cipher mode

The ECB (Electronic Codebook) cipher mode is recognized as insecure and is not recommended for use in cryptographic protocols. This mode does not provide adequate data protection because it encrypts identical plaintext blocks into identical ciphertext blocks, making it vulnerable to pattern analysis. For stronger security, it’s essential to use encryption algorithms that have built-in message integrity and do not require a mode of operation to be configured, such as ChaCha20-Poly1305 or, for older applications that do not support this, AES-256-GCM.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library (MD5)

Using a weak hashing library like MD5 increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs produce the same output, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library like SHA-1 increases the risk of data breaches. SHA-1 in particular is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of inappropriate encryption algorithm on a password (AES)

AES is a strong encryption algorithm, but encryption should not be used for password storage. Since encryption is reversible, an attacker who obtains the key can recover all passwords. Passwords should be hashed using a dedicated password hashing algorithm. **Supported on V2 engine only.**

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (DES)

The Data Encryption Standard (DES) is recognized as a weak encryption algorithm and should not be used for securing passwords. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for password storage compromises security. MD5 is outdated and vulnerable, making it easier for attackers to crack passwords and gain unauthorized access.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using a weak hashing library like SHA-1 for passwords increases the risk of data breaches. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords. **Supported on V2 engine only.**

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Unsanitized user input in XML External Entity

Avoid parsing untrusted data such as user input as XML. Such data could include URIs that resolve to resources that are outside of the current context, leading to XML External Entity (XXE) injection. XXE injection arises when XML input containing a reference to an external entity is processed without proper sanitization, potentially allowing attackers to access internal files, cause denial of service, or execute remote code.

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Unsanitized user input in XPath

Using unsanitized user input in XPath expressions can lead to XPath injection, whereby attackers can gain unauthorized access to sensitive information in XML documents. Ensure all variables passed into XPath `evaluate` or `compile` commands are properly sanitized.

[CWE-643](https://cwe.mitre.org/data/definitions/643.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Unsanitized user input in output stream (XSS)

Cross-site scripting (XSS) vulnerabilities occur when unsanitized user input is included in web page content. This flaw can lead to malicious scripts being executed in the context of the user’s browser, compromising the security of user data and interactions with the application. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Java)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Missing protection against session fixation attacks

A session fixation attack is when an attacker sets a user’s session ID to a known value before login. This can lead to unauthorized session hijacking. Spring framework, by default, protects against session fixation attacks by creating a new session or changing the user’s session ID upon login. Disabling this default behaviour puts your application at increased risk of session fixation attacks.

[CWE-384](https://cwe.mitre.org/data/definitions/384.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Unsanitized request data in Spring UI model (XSS)

Cross-site scripting (XSS) vulnerabilities occur when unsanitized user input is included in web page content. This flaw can lead to malicious scripts being executed in the context of the user’s browser, compromising the security of user data and interactions with the application.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Leakage of sensitive data to Airbrake

Leaking sensitive data to third-party loggers like Airbrake is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Algolia

Leaking sensitive data to third-party data tools like Algolia is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in AWS query

Including unsanitized data, such as user input or request data, in raw queries makes your application vulnerable to injection attacks.

[CWE-943](https://cwe.mitre.org/data/definitions/943.html)

Critical

Leakage of sensitive data to Bugsnag

Leaking sensitive data to third-party loggers like Bugsnag is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ClickHouse

Leaking sensitive data to a third-party service like ClickHouse is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog

Leaking sensitive data to third-party loggers like Datadog is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ElasticSearch

Leaking sensitive data to third-party data tools is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to New Relic

Leaking sensitive data to third-party loggers like New Relic is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Open Telemetry

Leaking sensitive data to third parties like Open Telemetry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to RollBar

Leaking sensitive data to third-party loggers like Rollbar is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Sentry

Leaking sensitive data to third-party loggers like Sentry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

## JavaScript [Copied!](#javascript "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Angular DOM manipulation with unsanitized user input (XSS)

Direct DOM manipulation in Angular applications using ElementRef, ViewChild, or third-party libraries with unsanitized user input bypasses Angular’s built-in XSS protections. When user input is directly inserted into DOM elements, it can execute malicious scripts and compromise application security. Angular’s template system provides automatic sanitization that should be preferred over direct DOM manipulation.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of Angular DomSanitizer bypass security methods (XSS)

Using Angular’s DomSanitizer bypass security methods can introduce security vulnerabilities by disabling Angular’s built-in XSS protections. These methods should only be used when you are absolutely certain that the content is safe and has been properly validated. Misuse of these methods can lead to Cross-Site Scripting (XSS) attacks.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Unsanitized user input in Angular template/DOM insertion (XSS)

Direct manipulation of DOM properties with user-controlled input in Angular applications bypasses Angular’s built-in XSS protections. When user input is assigned to properties like `innerHTML` or `outerHTML`, it can execute malicious scripts and compromise application security. Angular’s template system provides automatic sanitization that should be preferred over direct DOM manipulation.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Angular XSRF protection disabled

Disabling XSRF protection in Angular removes safeguards against Cross-Site Request Forgery (CSRF) attacks. XSRF attacks allow malicious websites to perform unauthorized actions on behalf of authenticated users by tricking them into making requests to your application.

[CWE-352](https://cwe.mitre.org/data/definitions/352.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Angular Cross-Site Script Inclusion (XSSi) vulnerability

Cross-Site Script Inclusion (XSSi) vulnerabilities in Angular applications occur when untrusted scripts are included or when JSONP requests are made to user-controlled URLs. This can allow attackers to execute malicious JavaScript in the context of your application, potentially stealing sensitive data or performing unauthorized actions. Angular’s HttpClient provides built-in protection against XSSi attacks by automatically stripping the anti-XSSi prefix from JSON responses. Don’t bypass these protections.

[CWE-829](https://cwe.mitre.org/data/definitions/829.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Medium

Missing HTTP Only option in cookie configuration

Your cookies are at risk if the HTTP Only option is not configured. This setting prevents client-side JavaScript, such as the code that reads “document.cookie” values, from accessing the cookie’s value. Enabling this option is crucial for websites prone to Cross-Site Scripting (XSS) attacks, because it prevents malicious scripts from obtaining the cookie’s data.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Unsanitized user input in HTTP response (XSS)

Including unsanitized user input in HTTP responses exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#JavaScript)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of default cookie configuration

Using default cookie configurations can expose your application to security risks. This vulnerability arises when cookies are set with their default values, making them predictable and easier to exploit.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Usage of default session cookie configuration

Using default session cookie configurations can expose your application to security vulnerabilities. This vulnerability arises when session cookie are set with their default values, making them predictable and easier to exploit.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Missing access restriction on directory listing

Exposing a directory listing without restrictions can lead to unauthorized access to sensitive data or source code. This vulnerability occurs when the file structure of a server or application is made visible to users without proper access control, potentially allowing attackers to exploit the exposed file structure.

[CWE-548](https://cwe.mitre.org/data/definitions/548.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Low

Unsanitized user input in HTTP send file request

Using unsanitized user input in the sendFile API call exposes your application to path manipulation attacks. This vulnerability allows attackers to access files and resources they shouldn’t be able to, by manipulating file paths in requests.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in resource rendering

Unsanitized user input in resource rendering can lead to security vulnerabilities. This issue arises when user-provided data is used directly in rendering resources without proper sanitization, potentially leading to unauthorized access or manipulation of data.

[CWE-706](https://cwe.mitre.org/data/definitions/706.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Low

Missing Helmet configuration on HTTP headers

Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately. Failing to configure Helmet for HTTP headers leaves your application vulnerable to several web attacks.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Missing secure HTTP server configuration

Failing to configure your HTTP server to use HTTPS can expose data to interception and manipulation. HTTPS, which incorporates TLS (Transport Layer Security), encrypts data in transit and therefore provides a more secure communication channel than HTTP.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in Access-Control-Allow-Origin

Using unverified user-defined input to set the Access-Control-Allow-Origin header can result in unauthorized access to sensitive data. This vulnerability exposes your application to potential security risks by allowing attackers to specify origins that can access resources.

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Missing Secure option in cookie configuration

When a cookie lacks the Secure attribute, it can be transmitted over an unencrypted connection, making it vulnerable to interception by unauthorized parties. Enabling the Secure option ensures that cookies are only sent over HTTPS, enhancing the security of data in transit.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing revoke method on JWT

Failing to implement a revoke method for JSON Web Tokens (JWTs) can lead to security vulnerabilities, especially when the tokens contain sensitive information. In order to maintain the integrity and confidentiality of any data contained within JWTs, it is best practice caching policy to always revoke them.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized input in NoSQL query

Using unsanitized data in NoSQL queries exposes your application to NoSQL injection attacks. This vulnerability arises when user input, request data, or any externally influenced data is directly passed into a NoSQL query function without proper sanitization.

[CWE-943](https://cwe.mitre.org/data/definitions/943.html)

Critical

Unsanitized user input in redirect

Using unsanitized user input for redirection can expose your application to phishing attacks. This vulnerability occurs when user input directly influences the destination of a redirect without proper validation, making it easier for attackers to redirect users to malicious sites.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in file path

Using unsanitized user input to construct file paths can allow attackers to access files and directories beyond the intended limits. This vulnerability, known as path traversal, poses a significant security risk.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Missing server configuration to reduce server fingerprinting

Reducing server fingerprinting enhances security by making it harder for attackers to identify the software your server is running. Server fingerprinting involves analyzing the unique responses of server software to specific requests, which can reveal information about the server’s software and version. While not a direct security vulnerability, minimizing this information leakage is a proactive step to obscure details that could be used in targeted attacks.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in HTTP request (SSRF)

Incorporating unsanitized user input directly into URLs for data retrieval exposes your application to server-side request forgery (SSRF) attacks. This vulnerability arises when URLs include data provided by users without adequate validation or sanitization.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Usage of session on static asset (CSRF)

Enabling sessions for static assets can inadvertently expose your application to Cross-Site Request Forgery (CSRF) attacks. This vulnerability arises because static assets, like images and stylesheets, are often cached by intermediary services such as Content Delivery Networks (CDNs). If these assets are served with session information, attackers can exploit this to hijack a user’s session.

[CWE-352](https://cwe.mitre.org/data/definitions/352.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in UI

Incorporating unsanitized user input to configure X-Frame-Options or Content-Security-Policy HTTP headers exposes your application to UI redress attacks, commonly known as clickjacking. This vulnerability arises when attackers manipulate the appearance of a webpage to deceive users into performing unintended actions.

[CWE-1021](https://cwe.mitre.org/data/definitions/1021.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in deserialization method

Deserializing untrusted data exposes your application to security risks. This vulnerability occurs when data, especially from external sources like request objects, is deserialized without proper sanitization. Attackers can embed malicious code or payloads in serialized data, compromising your application’s security upon deserialization.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Unsanitized user input in XML parsing method

Unsanitized user input in XML parsing can lead to XML External Entity (XXE) injection. This vulnerability occurs when XML input containing a reference to an external entity is processed by an XML parser. The external entity can point to a file URI or network resource, potentially allowing an attacker to access sensitive data or interact with internal systems.

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Unsanitized user input in redirect

Using unsanitized user input for redirects can make your application vulnerable to phishing attacks. This occurs when user input directly influences the destination of a redirect without any validation, potentially leading to malicious sites.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in dynamic HTML insertion (XSS)

Unsanitized user input in dynamic HTML insertion can lead to Cross-Site Scripting (XSS) attacks. This vulnerability arises when user-provided data is directly inserted into the DOM without proper sanitization, potentially allowing attackers to execute malicious scripts. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#JavaScript)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in initialization of trusted environment variables

Using unsanitized user input to set environment variables via `process.env` allows attackers to manipulate critical runtime settings such as proxy configuration, TLS validation, Node.js options, and SSL certificate locations. This can lead to traffic interception, TLS bypass, or arbitrary behavior changes.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized dynamic input in OS command

Incorporating unsanitized dynamic input directly into operating system commands poses a significant security risk. This practice could give attackers the opportunity to execute harmful commands on your system.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized dynamic input in regular expression

Creating regular expressions from dynamic input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This issue arises because some regular expressions can be processed with exponential time complexity. When attackers exploit this, it can significantly drain CPU resources, effectively causing a denial of service.

[CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)

Medium

Unsanitized user input in ’eval’ type function

Allowing user input to directly influence the behavior of `eval` and similar functions like `setTimeout` poses a significant security risk, potentially leading to remote code execution attacks. This vulnerability stems from the dynamic execution of code, which can be maliciously crafted by an attacker.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in exception message

Leakage of sensitive data in exception messages can lead to data breaches. This vulnerability occurs when sensitive information is included in exceptions, making it accessible to unauthorized users.

[CWE-210](https://cwe.mitre.org/data/definitions/210.html)

Medium

Leakage of sensitive data in dynamic file generation

Sensitive data leakage in dynamic file generation occurs when sensitive information is written to static files such as logs, backups, or data exports. This vulnerability exposes sensitive data to unauthorized access.

[CWE-313](https://cwe.mitre.org/data/definitions/313.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Permissive file assignment

Permissive file assignment exposes sensitive information by granting unnecessary read, write, or execute permissions to users without ownership privileges.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Unsanitized user input in format string

Including user input directly in a format string can lead to security vulnerabilities. This issue arises when an attacker manipulates the format specifiers in the user input, resulting in misleading or fabricated messages.

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Missing escape of HTML entities in Handlebars template compilation

In Handlebars (a templating engine that dynamically generates HTML markup), setting `noEscape` to true disables escaping HTML entities within the template output itself. This poses a security vulnerability, particularly leading to Cross-Site Scripting (XSS) attacks if the template content comes from an untrusted source.

[CWE-80](https://cwe.mitre.org/data/definitions/80.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of insecure HTTP connection

Your application is at risk when it connects to APIs using insecure HTTP connections. This vulnerability occurs because HTTP does not encrypt data, making it susceptible to interception and alteration. Ensure that your application uses HTTPS, which encrypts data in transit, for all connections.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in HTTP request (SSRF)

Constructing URLs based on user input puts your application at risk of Server-Side Request Forgery (SSRF) attacks. This vulnerability allows attackers to manipulate the application into making unintended HTTP requests.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Usage of externally controlled input to select code

Loading code dynamically from a path dictated by user input can allow attackers to execute arbitrary code on your system.

[CWE-470](https://cwe.mitre.org/data/definitions/470.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Insecure temporary directory usage

Creating files directly in shared system directories like `/tmp` or `/var/tmp` can be insecure. These directories are world-writable, and files created there may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of insufficient random value

Using predictable random values compromises your application’s security, particularly if these values serve security-related functions.

[CWE-330](https://cwe.mitre.org/data/definitions/330.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Invisible bidirectional Unicode characters

This rule detects JavaScript code that contains invisible bidirectional Unicode control characters (such as U+202A–U+202E, U+2066–U+2069) in identifiers or string literals. These characters can cause the code a developer sees to differ from the code actually parsed by the JavaScript engine, enabling Trojan Source–style attacks (CWE-506, CVE-2021-42574). Any occurrence of such characters in production code should be treated as suspicious and removed unless there is a clear, well-documented justification.

[CWE-506](https://cwe.mitre.org/data/definitions/506.html)

[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Invisible Mongolian Unicode variation/control characters

This rule detects JavaScript string literals composed entirely of characters from specific Mongolian Unicode ranges (U+180B-U+180E, U+181A-U+181F, U+1878-U+187F, U+18AA-U+18AF). These include Mongolian Free Variation Selectors and the Mongolian Vowel Separator, which are non-spacing/format controls that are often invisible in editors, as well as rare extension characters. Such strings are highly unusual in normal JavaScript and can be used to hide or encode malicious payloads, configuration, or markers (CWE-506). Any occurrence of these characters in production code should be treated as suspicious unless there is a clear, well-documented justification.

[CWE-506](https://cwe.mitre.org/data/definitions/506.html)

[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Invisible Unicode Private Use Area (PUA) characters

This rule detects JavaScript string literals that consist primarily of Unicode Private Use Area (PUA) characters in ranges such as U+E000-U+F8FF, U+FFF80-U+FFFFF, and U+10FF80-U+10FFFF. These characters have no standardized meaning and often render as invisible or unintelligible glyphs in editors, but remain present in the source and can be used to hide or encode malicious payloads, configuration, or other data. PUA-heavy strings in production code are a strong indicator of obfuscation or stealthy behavior and should be investigated and removed unless explicitly justified.

[CWE-506](https://cwe.mitre.org/data/definitions/506.html)

[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Invisible Unicode variation selectors characters

Invisible Unicode variation selectors (U+FE00-U+FE0F, U+E0100-U+E01EF) detected in JavaScript string literals, identifiers, or function calls. These characters are not rendered in most editors and can be used to hide or obfuscate malicious code, including embedding hidden payloads in variable names or function arguments.

[CWE-506](https://cwe.mitre.org/data/definitions/506.html)

[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Leakage of sensitive data in JWT

Storing sensitive data in JWTs exposes it to potential security risks. JWTs are designed for transmitting data securely among parties but are not inherently secure storage for sensitive information.

[CWE-312](https://cwe.mitre.org/data/definitions/312.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Usage of weak encryption algorithm in JWT

Implementing weak encryption algorithms in JWT (JSON Web Tokens) compromises the security of the tokens. This vulnerability occurs when an encryption algorithm that does not offer sufficient security strength is used, making the tokens susceptible to attacks.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Leakage of sensitive information in logger message

Sensitive information leakage through logger messages can compromise user privacy and security. This vulnerability occurs when sensitive data, such as personal identifiable information (PII), is included in log messages, making it accessible to unauthorized individuals.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Leakage of information in logger message

Information leakage through logger messages can compromise sensitive data. This vulnerability arises when dynamic data or variables, which may contain sensitive information, are included in log messages.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Low

Usage of manual HTML sanitization (XSS)

Manually sanitizing HTML is prone to mistakes and can lead to Cross-Site Scripting (XSS) vulnerabilities. This occurs when user input is not properly sanitized, allowing attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Missing origin check in message handler

Failing to verify the origin of message events can expose your application to Cross-Site Scripting (XSS) attacks. This vulnerability arises when an application processes messages without confirming if they come from a trusted source.

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Unsanitized dynamic input in file path

Allowing unsanitized dynamic input in file paths can lead to unauthorized file and folder access. This vulnerability arises when dynamic data is used within the file system operations, potentially allowing attackers to access unauthorized or hidden files and folders.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Observable Timing Discrepancy

Observable Timing Discrepancy occurs when the time it takes for certain operations to complete can be measured and observed by attackers. This vulnerability is particularly concerning when operations involve sensitive information, such as password checks or secret comparisons. If attackers can analyze how long these operations take, they might be able to deduce confidential details, putting your data at risk.

[CWE-208](https://cwe.mitre.org/data/definitions/208.html)

Medium

Unsanitized user input in redirect

Using unsanitized user input in redirects increases the risk of phishing attacks. This vulnerability occurs when an application dynamically redirects users to a URL that includes user-controlled input without proper validation or sanitization.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in OS command

Executing operating system commands with unsanitized user input can lead to command injection vulnerabilities. This occurs when attackers manipulate the input to execute unauthorized commands, potentially gaining control over the system.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized dynamic input in file path

Using unsanitized dynamic input to determine file paths can allow attackers to gain access to files and folders outside of the intended scope. This vulnerability occurs when input provided by users is directly used to access the filesystem without proper validation or sanitization.

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Permissive origin in postMessage

The use of a permissive origin in postMessage calls poses a security risk. When you set the target origin to “\*” in a postMessage call, it means any website can receive the message, potentially exposing sensitive information to third parties.

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Unsanitized user input in raw HTML strings (XSS)

Including unsanitized user input in HTML exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#JavaScript)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in regular expression

Creating regular expressions from user input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This issue arises because some regular expressions can be processed with exponential time complexity. When attackers exploit this, it can significantly drain CPU resources, effectively causing a denial of service.

[CWE-1287](https://cwe.mitre.org/data/definitions/1287.html)

Medium

Leakage of sensitive data in local storage

Storing sensitive data in `localStorage` poses a security risk. This vulnerability occurs when sensitive information is saved in the browser’s local storage, making it susceptible to unauthorized access.

[CWE-312](https://cwe.mitre.org/data/definitions/312.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#JavaScript)

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in deserialization method

Deserializing untrusted data is a risky practice. This vulnerability arises when data, especially from external sources like request objects, is deserialized without proper sanitization. Attackers can embed malicious payloads within serialized data, compromising your application’s security upon deserialization.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Usage of weak encryption algorithm (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RC4)

Using the RC4 (Rivest Cipher 4) encryption algorithm introduces a significant security vulnerability. RC4 is outdated and has been proven to be susceptible to various attacks, making any data encrypted with it vulnerable to unauthorized access and compromise.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library (MD5)

Using a weak hashing library like MD5 increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs produce the same output, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library like SHA-1 increases the risk of data breaches. SHA-1 in particular is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of inappropriate encryption algorithm on a password (AES)

AES is a strong encryption algorithm, but encryption should not be used for password storage. Since encryption is reversible, an attacker who obtains the key can recover all passwords. Passwords should be hashed using a dedicated password hashing algorithm.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (DES)

The Data Encryption Standard (DES) is recognized as a weak encryption algorithm and should not be used for securing passwords. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RC4)

Using RC4 for encrypting passwords is insecure. RC4 is a weak encryption algorithm that can be easily compromised, leading to potential security risks. Furthermore, using any form of encryption for passwords is not advisable because encryption is designed to be reversible. This means that given enough resources, an attacker could decrypt the passwords and access them in plain text. For securing passwords, hashing is the recommended approach because it is a one-way process that does not allow for the original password to be retrieved.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (Argon2)

Choosing a weak hashing algorithm for passwords compromises security. Argon2 has three variants: Argon2i, Argon2d, and Argon2id. Argon2id is the strongest and most recommended for password hashing because of its balanced resistance against both side-channel and GPU attack vectors.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for password storage compromises security. MD5 is outdated and vulnerable, making it easier for attackers to crack passwords and gain unauthorized access.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using weak hashing algorithms like SHA-1 for password storage compromises security. These algorithms are vulnerable to attacks, making it easier for attackers to crack passwords and access sensitive information.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of insecure websocket connection

Your application is at risk when it connects to APIs via insecure websocket connections. This vulnerability occurs because the data transmitted over these connections can be intercepted or tampered with by attackers. Ensure that all websocket connections in your application use SSL to encrypt the data in transit, safeguarding it from unauthorized access.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Missing TLS validation

Failing to validate TLS certificates exposes your application to significant security risks, including Man-in-the-Middle attacks and data interception. This vulnerability occurs when the application does not properly verify the SSL/TLS certificate of the server it is connecting to, allowing attackers to potentially intercept or alter data in transit.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Unsanitized user input in React inner HTML method (XSS)

Using React’s dangerouslySetInnerHTML with unsanitized data can introduce Cross-Site Scripting (XSS) vulnerabilities. This occurs when external input is embedded directly into the HTML without proper sanitization, allowing attackers to inject malicious scripts. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#JavaScript)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Leakage of sensitive data to Google Analytics (React)

Sending sensitive data to Google Analytics can result in data leaks. This vulnerability arises when sensitive or confidential information is inadvertently transmitted to Google Analytics, posing a risk of unauthorized access and potential data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Airbrake

Leaking sensitive data to third-party loggers like Airbrake is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Algolia

Leaking sensitive data to third-party data tools like Algolia is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Bugsnag

Leaking sensitive data to third-party loggers like Bugsnag is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog

Leaking sensitive data to third-party loggers like Datadog is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog RUM

Sensitive and private data contained in your pages may be sent to Datadog to identify elements that a user interacted with.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in DynamoDB query

Including unsanitized data, such as user input or request data, in raw queries makes your application vulnerable to injection attacks.

[CWE-943](https://cwe.mitre.org/data/definitions/943.html)

Critical

Leakage of sensitive data to ElasticSearch

Leaking sensitive data to third-party data tools is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Analytics

Leaking sensitive data to third-party analytics tools like Google Analytics is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Tag Manager

Leaking sensitive data to third-party services and tools like Google Tag Manager is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to HoneyBadget

Leaking sensitive data to third-party loggers like Honeybadger is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to New Relic

Leaking sensitive data to third-party loggers like New Relic is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Open Telemetry

Leaking sensitive data to third parties like Open Telemetry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to OpenAI

Leaking sensitive data to third-party services like OpenAI is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to RollBar

Leaking sensitive data to third-party loggers like Rollbar is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Segment

Leaking sensitive data to third-party analytics tools like Segment is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Sentry

Leaking sensitive data to third-party loggers like Sentry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

## Kotlin [Copied!](#kotlin "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Usage of Intent with sensitive data

Using Intents to pass unencrypted and sensitive information around your Android application puts this data at risk of interception and unauthorized access.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Leakage of sensitive information in logger message

Sensitive information leakage in logger messages can compromise user privacy and security. This vulnerability occurs when sensitive data, such as personal identifiable information (PII), is included in log messages, making it accessible to unauthorized individuals.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Permissive screenshot option set

The Android operating system can capture screenshots of the current application view, such as when the app is minimized. This capability is controlled by the FLAG\_SECURE option. If FLAG\_SECURE is not enabled, Android can take screenshots, which might include sensitive information.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data in SharedPreferences

When sensitive information (like passwords or PII) is stored in plain text within `SharedPreferences`, this data is vulnerable to unauthorized access. Because this data is unencrypted, any attacker who gains access to the device’s storage will be able to easily read this information, leading to potential data breaches.

[CWE-312](https://cwe.mitre.org/data/definitions/312.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data.

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Permissive WebView Setting (JavaScript enabled)

Enabling JavaScript in a WebView could put your Android application at risk of Cross-Site Scripting (XSS) attacks. Attackers may be able to inject and execute malicious scripts within your application if unsanitized external input is loaded while JavaScript is enabled.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Missing HTTP Only option in cookie configuration

Not setting the HTTP Only attribute to “true” in cookie configurations leaves the cookie vulnerable to being accessed by client-side JavaScript. This oversight can lead to the exposure of cookie values, especially on websites susceptible to Cross-Site Scripting (XSS) attacks. Enabling HTTP Only is a critical step in preventing malicious scripts from reading the cookie values through JavaScript.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing secure option in cookie configuration

Not setting the “secure” attribute in cookie configuration can lead to unauthorized third-party access. This attribute, when enabled, ensures cookies are sent to the server only over HTTPS, enhancing security by preventing potential eavesdropping.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Unsanitized user input in HTTP response (XSS)

Including unsanitized user input in HTTP responses exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in respondHtml (XSS)

Including unsanitized user input in `call.respondHtml` exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of insecure HTTP connection

Your application is at risk when it connects to APIs using insecure HTTP connections. This vulnerability occurs because HTTP lacks encryption, making data susceptible to interception and alteration. Always verify that your application exclusively uses HTTPS connections for enhanced security.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in HTTP request (SSRF)

Directly incorporating user input into HTTP request URLs can lead to Server-Side Request Forgery (SSRF) attacks. This vulnerability occurs when an attacker can control the destination of an HTTP request sent by the server.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Unsanitized user input in Access-Control-Allow-Origin

Using unverified user-defined input to set the Access-Control-Allow-Origin header can result in unauthorized access to sensitive data. This vulnerability exposes your application to potential security risks by allowing attackers to specify origins that can access resources.

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Unsanitized user input in redirect

Using unsanitized user input to perform redirects can make your application vulnerable to phishing attacks. This occurs when user input is directly used to determine the destination of a redirect without proper validation or sanitization, allowing attackers to redirect users to malicious sites, potentially compromising their security.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Permissive Access-Control-Allow-Origin configuration

A permissive Access-Control-Allow-Origin configuration can expose your application to security risks. When this header is set to “\*”, it means your application’s responses can be accessed by any website, potentially leading to unauthorized access to sensitive information.

[CWE-942](https://cwe.mitre.org/data/definitions/942.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Permissive cookie configuration

Using overly permissive cookie settings can expose your application to security risks, such as unauthorized access or exploits.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Permissive server network interface configuration

Binding a service to “0.0.0.0” makes it accessible on all network interfaces. This configuration can lead to unintended exposure over insecure or unintended network interfaces, creating potential security risks.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of small key size with Blowfish encryption

Using Blowfish encryption with a small key size (128 bytes or less) makes your data susceptible to birthday attacks. This vulnerability arises because smaller key sizes don’t provide enough complexity to secure the encrypted data effectively. It is recommended to specify a larger value, such as 256, instead.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Unsanitized user input in code generation

Allowing user input to directly influence code generation or scripting functions without proper sanitization can lead to code injection vulnerabilities. This occurs when an attacker is able to insert malicious code into your application, which is then executed, potentially leading to unauthorized actions or data access.

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in cookie

Leakage of sensitive data in cookies can lead to a data breach. This vulnerability occurs when sensitive information is stored in browser cookies, putting it at risk of unauthorized access.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Unsanitized user input in HTTP response (XSS)

Including unsanitized external input in HTTP responses exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of custom Digest class

Creating your own Digest class is not recommended because manually implement cryptographic functions is a highly error-prone process. It’s safer and more secure to rely on standard Digest algorithms like SHA-256 or SHA-512.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Unsanitized user input in initialization of trusted system properties

Using unsanitized user input to set Java system properties via `System.setProperty()` allows attackers to manipulate critical runtime settings such as proxy configuration, class paths, SSL trust stores, and security policies. This can lead to traffic interception, arbitrary code execution, or security bypass.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in deserialization method

It is bad practice to deserialize untrusted data, such as data that comes from params or cookies, without sufficient verification. Attackers can transfer payloads or malicious code via serialized data, and deserializing such data puts your application at risk.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Unsanitized user input in ’eval’ type function

Using ’eval’ or similar functions with unsanitized user input poses a high security risk. This practice can result in command injection attacks, where attackers can execute arbitrary code within your application.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in exception message

Leakage of sensitive data in exception messages can lead to data breaches. This vulnerability occurs when sensitive information is included in exceptions, making it accessible to unauthorized users.

[CWE-210](https://cwe.mitre.org/data/definitions/210.html)

Medium

Usage of permissive file permission (‘other’)

Granting overly permissive file permissions, especially to ‘other’, poses a significant security risk by potentially exposing sensitive information to unauthorized users.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Insecure temporary directory usage

Creating temporary files using methods like `File.createTempFile()` can be insecure because the default temporary directory (e.g., `/tmp`) is shared among all users on the system. Files created in such directories may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in OS command

Directly incorporating external or user-defined input into an OS command exposes the system to possible command injection attacks. This vulnerability allows attackers to execute unauthorized commands on the operating system, potentially leading to a compromise of system integrity.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Usage of CBC (Cipher Block Chaining) mode with padding

Using a block cipher algorithm mode, such as CBC (Cipher Block Chaining), together with a padding scheme is vulnerable to Padding Oracle attacks. This vulnerability arises because attackers can exploit the padding scheme to decrypt messages.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Unsanitized user input in file path

Unsanitized user input in file paths can compromise your system’s security. This vulnerability arises when user input is directly used to construct file names or paths without proper sanitization, potentially leading to path manipulation. Attackers could exploit this to access files or directories outside the intended scope, posing a significant security risk.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in file path

Unsanitized user input in file path resolution can lead to security vulnerabilities. This issue arises when an application directly uses input from the user to determine file paths or names without proper validation or sanitization. Attackers can exploit this to access unauthorized files or directories, leading to data breaches or other security compromises.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Usage of external input in code reflection

Using external input for dynamic class loading or code execution through reflection poses a significant security risk. This practice can be exploited by attackers to load harmful classes or execute malicious methods, potentially resulting in remote code execution and other severe security threats.

[CWE-470](https://cwe.mitre.org/data/definitions/470.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in regular expression

Constructing regular expressions from user input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This issue arises because certain regular expressions can be processed with exponential time complexity. If attackers exploit this, they can cause significant CPU usage spikes, effectively denying service to legitimate users.

[CWE-1287](https://cwe.mitre.org/data/definitions/1287.html)

Medium

Usage of naive Socket class to create SSL Socket

Using the naive Socket class to create SSL sockets compromises security. Creating SSL sockets directly with `Socket()` lacks the advanced security features provided by `SSLSocketFactory`. `SSLSocketFactory` is designed with SSL/TLS protocols in mind, offering encryption, hostname verification, and trust manager configuration. This makes it a more secure option for creating SSL sockets.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Missing or permissive SSL hostname verifier

It is best security practice to always verify the hostname when establishing a SSL/TLS connection. Failure to do so exposes your application to Man-in-the-Middle attacks. This vulnerability arises when the application fails to confirm that the server’s hostname matches the hostname in the server’s SSL certificate.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Missing TLS validation

Your code is vulnerable to Man-in-the-Middle attacks if it doesn’t validate TLS certificates. This issue arises when your application establishes a connection without verifying the server’s hostname, making it susceptible to data interception and other security risks.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Usage of weak encryption algorithm (Blowfish)

Using Blowfish for encryption is a security risk as it is a weak algorithm, vulnerable to collision attacks (including birthday attacks) where two different inputs can produce the same hash value, compromising data integrity and security. A weak encryption library can lead to data breaches and greater security risk.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of CTR cipher mode

The CTR (Counter) cipher mode, while providing strong confidentiality, is not recommended for use without additional integrity protection. This mode transforms AES into a stream cipher, and while it encrypts data securely, it does not provide inherent protection against data tampering. An attacker could modify the ciphertext without detection, leading to vulnerabilities such as bit-flipping attacks. For stronger security, it’s essential to use encryption algorithms that have built-in message integrity and authenticity checks, such as ChaCha20-Poly1305, or for older systems, AES-256-GCM, which combines encryption and integrity protection in one operation.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of ECB cipher mode

The ECB (Electronic Codebook) cipher mode is recognized as insecure and is not recommended for use in cryptographic protocols. This mode does not provide adequate data protection because it encrypts identical plaintext blocks into identical ciphertext blocks, making it vulnerable to pattern analysis. For stronger security, it’s essential to use encryption algorithms that have built-in message integrity and do not require a mode of operation to be configured, such as ChaCha20-Poly1305 or, for older applications that do not support this, AES-256-GCM.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library (MD5)

Using a weak hashing library like MD5 increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs produce the same output, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library like SHA-1 increases the risk of data breaches. SHA-1 in particular is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of inappropriate encryption algorithm on a password (AES)

AES is a strong encryption algorithm, but encryption should not be used for password storage. Since encryption is reversible, an attacker who obtains the key can recover all passwords. Passwords should be hashed using a dedicated password hashing algorithm.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (Blowfish)

Using a weak encryption algorithm like Blowfish for passwords increases the risk of data breaches. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (DES)

The Data Encryption Standard (DES) is recognized as a weak encryption algorithm and should not be used for securing passwords. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for password storage compromises security. MD5 is outdated and vulnerable, making it easier for attackers to crack passwords and gain unauthorized access.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using a weak hashing library like SHA-1 for passwords increases the risk of data breaches. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Unsanitized user input in XPath

Using unsanitized user input in XPath expressions can lead to XPath injection, whereby attackers can gain unauthorized access to sensitive information in XML documents. Ensure all variables passed into XPath `evaluate` or `compile` commands are properly sanitized.

[CWE-643](https://cwe.mitre.org/data/definitions/643.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Unsanitized request data in Spring UI model (XSS)

Cross-site scripting (XSS) vulnerabilities occur when unsanitized user input is included in web page content. This flaw can lead to malicious scripts being executed in the context of the user’s browser, compromising the security of user data and interactions with the application.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Leakage of sensitive data to Airbrake

Leaking sensitive data to third-party loggers like Airbrake is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Algolia

Leaking sensitive data to third-party data tools like Algolia is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in AWS query

Including unsanitized data, such as user input or request data, in raw queries makes your application vulnerable to injection attacks.

[CWE-943](https://cwe.mitre.org/data/definitions/943.html)

Critical

Leakage of sensitive data to BigQuery

Leaking sensitive data to third-party data tools like BigQuery is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Bugsnag

Leaking sensitive data to third-party loggers like Bugsnag is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ClickHouse

Leaking sensitive data to a third-party service like ClickHouse is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog

Leaking sensitive data to third-party loggers like Datadog is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ElasticSearch

Leaking sensitive data to third-party data tools is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Dataflow

Leaking sensitive data to a third-party service is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Firebase Analytics

Leaking sensitive data to third-party analytics tools like Google Analytics is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to New Relic

Leaking sensitive data to third-party loggers like New Relic is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Open Telemetry

Leaking sensitive data to third parties like Open Telemetry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to OpenAI

Leaking sensitive data to third-party services like OpenAI is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Rollbar

Leaking sensitive data to third-party loggers like Rollbar is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Segment

Leaking sensitive data to third-party analytics tools like Segment is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Sentry

Leaking sensitive data to third-party loggers like Sentry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

## PHP [Copied!](#php "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Usage of CBC (Cipher Block Chaining) with predictable Initialization Vector (IV)

When your application employs Cipher Block Chaining (CBC) mode for encryption, it’s crucial to avoid using a predictable Initialization Vector (IV). A predictable IV can make your encryption vulnerable to dictionary attacks, where attackers can guess the encryption key by trying many possibilities.

[CWE-329](https://cwe.mitre.org/data/definitions/329.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Missing HTTP Only option in cookie configuration

Not setting the “httponly” attribute to “true” in cookie configurations leaves the cookie vulnerable to being accessed by client-side JavaScript. This oversight can lead to the exposure of cookie values, especially on websites susceptible to Cross-Site Scripting (XSS) attacks. Enabling “httponly” is a critical step in preventing malicious scripts from reading the cookie values through JavaScript.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Leakage of sensitive data in cookie

Leakage of sensitive data in cookies can lead to a data breach. This vulnerability occurs when sensitive information is stored in browser cookies, putting it at risk of unauthorized access.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Unsanitized user input in initialization of trusted runtime configuration

Using unsanitized user input to set environment variables via `putenv()` or PHP runtime configuration via `ini_set()` allows attackers to manipulate critical runtime settings such as file include paths, session storage, error logging, and auto-prepend scripts. This can lead to remote code execution, session hijacking, or security bypass.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in deserialization method

Deserializing data from untrusted sources, like parameters or cookies, without proper validation is a security risk. Attackers can embed malicious code or payloads in serialized data. When your application deserializes this data, it can compromise your system’s security.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Unsanitized user input in ’eval’ type function

Executing code with ’eval’ or similar functions using unsanitized user input is risky and can lead to code injection vulnerabilities. This happens when external input is used directly in functions that execute code, allowing attackers to run malicious code within your application.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in exception message

Leakage of sensitive data in exception messages can lead to data breaches. This vulnerability occurs when sensitive information is included in exceptions, making it accessible to unauthorized users.

[CWE-210](https://cwe.mitre.org/data/definitions/210.html)

Medium

Unsanitized user input in OS command

Executing OS commands that include user-supplied data can lead to command injection vulnerabilities. This occurs when an application dynamically executes OS commands that an attacker can manipulate through user input.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in dynamic file generation

Writing sensitive data to static files, such as logs, backups, or data exports, can lead to unintended data exposure. Be vigilant against instances where your code may inadvertently save sensitive information in a format that could be accessed by unauthorized parties.

[CWE-313](https://cwe.mitre.org/data/definitions/313.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in format string

Unsanitized user input in format string can lead to security vulnerabilities. This issue arises when user input is directly incorporated into a format string, enabling attackers to manipulate the output through format specifiers, resulting in misleading or fabricated messages.

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Unsanitized user input in FTP request

Incorporating unsanitized user input directly into FTP requests poses a significant security risk. This practice can lead to code injection attacks, where attackers exploit the application to execute malicious code, or path traversal attacks, allowing unauthorized access to files and directories outside the intended area.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Usage of insecure HTTP connection

Your application is at risk when it connects to APIs using insecure HTTP connections. This vulnerability occurs because HTTP lacks encryption, making data susceptible to interception and alteration. Always verify that your application exclusively uses HTTPS connections for enhanced security.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Leakage of sensitive data in HTTP request

Sending sensitive data through URLs in HTTP requests exposes it to unnecessary risks. This method of data transmission can lead to the data being captured by intermediaries or being logged by servers, posing a significant privacy and security risk.

[CWE-598](https://cwe.mitre.org/data/definitions/598.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in HTTP request (SSRF)

Your application is vulnerable to Server-Side Request Forgery (SSRF) attacks when it connects to URLs that include user-supplied data. This vulnerability occurs because attackers can manipulate these URLs to force your application to make unintended requests to internal or external resources.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Leakage of sensitive information in exception message

Leakage of sensitive information in exception messages poses a significant security risk. When an exception message is printed to the default output, it might reveal sensitive details about your application’s technical setup or environment. This could potentially open the door to attacks, such as path traversal. Even more concerning is the possibility of exposing user-specific data, which could lead to serious privacy breaches.

[CWE-209](https://cwe.mitre.org/data/definitions/209.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A10:2025](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)

Low

Unsanitized user input in Access-Control-Allow-Origin

Using unverified user-defined input to set the Access-Control-Allow-Origin header can result in unauthorized access to sensitive data. This vulnerability exposes your application to potential security risks by allowing attackers to specify origins that can access resources.

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Missing Secure option in cookie configuration

When a cookie lacks the Secure attribute, it can be transmitted over insecure connections, making it vulnerable to interception by unauthorized parties. The Secure attribute is important because it instructs the browser to only send the cookie over HTTPS, enhancing security.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Usage of insecure FTP connection

Using insecure FTP connections can compromise the security of sensitive data. This vulnerability arises when applications that handle sensitive information communicate with FTP servers without secure protocols. Always verify that FTP connections in your application utilize SFTP for enhanced security.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Insecure temporary directory usage

Creating temporary files in shared system directories (e.g., `/tmp`) using functions like `tempnam()` or by manually constructing paths with `sys_get_temp_dir()` can be insecure. These directories are world-writable, and files created there may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data in JWT

Storing sensitive data in JWTs exposes it to potential security risks. JWTs are designed for transmitting data securely, not for storing confidential information. Guard against including sensitive data in a JWT payload.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Leakage of sensitive information in logger message

Sensitive information leakage in logger messages can compromise user privacy and security. This vulnerability occurs when sensitive data, such as personal identifiable information (PII), is included in log messages, making it accessible to unauthorized individuals.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Usage of manual HTML sanitization (XSS)

Manual HTML sanitization can introduce Cross-Site Scripting (XSS) vulnerabilities. This security risk arises when developers attempt to manually escape HTML entities, which is a process prone to errors and oversights, potentially leaving the application vulnerable to XSS attacks.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in redirect

Using unsanitized user input to perform redirects can make your application vulnerable to phishing attacks. This occurs when user input is directly used to determine the destination of a redirect without proper validation or sanitization, allowing attackers to redirect users to malicious sites, potentially compromising their security.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in file path

Unsanitized user input in file paths can compromise your system’s security. This vulnerability arises when user input is directly used to construct file names or paths without proper sanitization, potentially leading to path manipulation. Attackers could exploit this to access files or directories outside the intended scope, posing a significant security risk.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Permissive Access-Control-Allow-Origin configuration

A permissive Access-Control-Allow-Origin configuration can expose your application to security risks. When this header is set to “\*”, it means your application’s responses can be accessed by any website, potentially leading to unauthorized access to sensitive information.

[CWE-942](https://cwe.mitre.org/data/definitions/942.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Leakage of sensitive information with ‘phpinfo’ function

The use of the ‘phpinfo()’ function can lead to the leakage of sensitive information. This function outputs a large amount of information about the current state of PHP, including environment variables, server information, and PHP configuration settings, which could be exploited by unauthorized individuals.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in raw HTML strings (XSS)

Including unsanitized user input in HTML exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#PHP)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in ’echo’ function (XSS)

Including unsanitized user input in responses can lead to cross-site scripting (XSS) attacks. This vulnerability exposes your application to malicious scripts injected by attackers, compromising user data and browser security. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#PHP)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in code generation

Unsanitized user input in code generation can lead to code injection vulnerabilities. This occurs when an application dynamically generates or manipulates code using data provided by the user without proper sanitization.

[CWE-98](https://cwe.mitre.org/data/definitions/98.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in regular expression

Constructing regular expressions from user input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This occurs because certain regular expressions can be processed with exponential time complexity, leading to excessive CPU usage and potentially crashing the system when handling malicious input.

[CWE-1287](https://cwe.mitre.org/data/definitions/1287.html)

Medium

Unsanitized user input in session key

Unsanitized user input in session key poses a security risk. When user-defined data is directly used in session keys, attackers could be able to manipulate session data or perform unauthorized actions by exploiting the predictability or vulnerability of the session mechanism.

[CWE-1018](https://cwe.mitre.org/data/definitions/1018.html)

Critical

Unsanitized external input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#PHP)

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Missing SSL certificate verification

Missing SSL certificate verification can compromise the security of sensitive data. This vulnerability arises when an application fails to check for valid SSL certificates during data transmission, potentially allowing attackers to intercept or manipulate data.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Unsanitized user input in UI

Incorporating unsanitized user input to configure the X-Frame-Options or Content-Security-Policy HTTP headers exposes your application to UI redress attacks, commonly known as clickjacking. This vulnerability can be exploited to deceive users into performing unintended actions on your website.

[CWE-1021](https://cwe.mitre.org/data/definitions/1021.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Usage of weak hashing library (Adler-32)

Adler-32 is a weak hashing algorithm that offers minimal security. It is not suitable for protecting data against intentional modifications.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (CRC32)

The use of CRC32 for hashing is insecure. CRC32 is designed for error-checking and not for security purposes, making it vulnerable to intentional data tampering.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (MDx)

Using a weak hashing library, such as MD5, increases the risk of data breaches. MD5 itself is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library like SHA-1 increases the risk of data breaches. SHA-1 in particular is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library on a password (MDx)

Using a weak hashing library like MDx for passwords increases the risk of data breaches. MD5 for example is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using a weak hashing library like SHA-1 for passwords increases the risk of data breaches. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of insecure websocket connection

Using insecure websocket connections can compromise data security. This vulnerability arises when applications connect to APIs without SSL, making the data susceptible to interception and manipulation.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in XML External Entity

Unsanitized user input in XML External Entity (XXE) processing can lead to security vulnerabilities. When your application parses XML input containing untrusted data, it may interpret URIs that point to unauthorized external resources. This can result in an XXE injection, compromising the security of your application.

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Unsanitized user input in XPath

Unsanitized user input in XPath expressions can result in XPath injection. This vulnerability occurs when user input is directly used in XPath queries without proper sanitation, potentially granting unauthorized access to sensitive data within XML documents.

[CWE-643](https://cwe.mitre.org/data/definitions/643.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Missing HTTP Only option in cookie configuration

Not setting the “httpOnly” attribute to “true” in cookie configurations leaves the cookie vulnerable to being accessed by client-side JavaScript. This oversight can lead to the exposure of cookie values, especially on websites susceptible to Cross-Site Scripting (XSS) attacks. Enabling “httpOnly” is a critical step in preventing malicious scripts from reading the cookie values through JavaScript.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing Cross-Site Request Forgery (CSRF) configuration

Your application is vulnerable when Cross-Site Request Forgery (CSRF) protection is disabled. This weakness can allow attackers to deceive users into executing actions they did not intend, potentially compromising security or data integrity.

[CWE-352](https://cwe.mitre.org/data/definitions/352.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of insecure SMTP connection

An insecure SMTP connection can expose transmitted data to unauthorized access. This rule identifies if SMTP settings are configured to enforce secure connections.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Missing validation for regular expression

When validating data with regular expressions, it’s crucial to match the entire text. Failing to specify the start and end of the text can lead to incomplete validation, making your application vulnerable to malicious input. Regular expressions should always specify the start of text (\\A) and end of text (\\z or \\Z) boundaries to ensure that the entire string is evaluated, not just portions of it. Note: it is best security practice to prefer the boundary expressions \\A and \\z or \\Z over ^ and $, because ^ and $ operate as line-based boundaries when multiline mode is enabled.

[CWE-625](https://cwe.mitre.org/data/definitions/625.html)

Medium

Unsanitized user input in session key

Incorporating user-provided data directly into session keys poses a significant security risk. This practice can allow attackers to manipulate session data or perform unauthorized actions by exploiting the predictability or vulnerability of the session mechanism.

[CWE-1018](https://cwe.mitre.org/data/definitions/1018.html)

Critical

Leakage of sensitive data to Airbrake

Leaking sensitive data to third-party loggers like Airbrake is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Algolia

Leaking sensitive data to third-party data tools like Algolia is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to BigQuery

Leaking sensitive data to third-party data tools like BigQuery is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Bugsnag

Leaking sensitive data to third-party loggers like Bugsnag is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ClickHouse

Leaking sensitive data to a third-party service like ClickHouse is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog

Leaking sensitive data to third-party loggers like Datadog is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ElasticSearch

Leaking sensitive data to third-party data tools is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Honeybadger

Leaking sensitive data to third-party loggers like Honeybadger is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive information in logger message

Leaking sensitive data to loggers is a common cause of data leaks and can lead to data breaches.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Leakage of sensitive data to New Relic

Leaking sensitive data to third-party loggers like New Relic is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Open Telemetry

Leaking sensitive data to third parties like Open Telemetry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to RollBar

Leaking sensitive data to third-party loggers like Rollbar is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Scout APM

Leaking sensitive data to third-party loggers like Scout APM is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Segment

Leaking sensitive data to third-party analytics tools like Segment is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Sentry

Leaking sensitive data to third-party loggers like Sentry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

## Python [Copied!](#python "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

User input in privileged LLM instructions

Untrusted user input placed into high-authority LLM instruction channels can introduce a Prompt Injection vulnerability. This occurs when an application inserts attacker-controlled text into privileged instruction surfaces (like `system` parameter, assistant prefills, or tool descriptions) rather than treating that text as normal user data. Because these instruction channels have higher authority than regular user messages in Anthropic’s conversation hierarchy, injected content can override intended behavior, weaken or bypass guardrails, and steer the model toward unsafe actions (including risky tool usage when tools are enabled). **Supported on V2 engine only.**

[CWE-1427](https://cwe.mitre.org/data/definitions/1427.html)

[LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

Critical

User-controlled AI API consumption parameters

The application allows user input to directly control Anthropic API consumption parameters such as `max_tokens`. This creates an **Unbounded Consumption** vulnerability. Attackers can specify excessively large values for token limits to cause excessive API costs, slow response times, or exhaust rate limits. **Supported on V2 engine only.**

[CWE-770](https://cwe.mitre.org/data/definitions/770.html)

[LLM10:2025](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/)

Medium

User input in privileged LLM instructions

Untrusted user input placed into high-authority LLM instruction channels can introduce a Prompt Injection vulnerability. This occurs when an application inserts attacker-controlled text into privileged instruction surfaces (like `system_instruction`) rather than treating that text as normal user data. Because these instruction channels have higher authority than regular user messages in Gemini conversation hierarchies, injected content can override intended behavior, weaken or bypass guardrails, and steer the model toward unsafe actions (including risky tool usage when tools are enabled). **Supported on V2 engine only.**

[CWE-1427](https://cwe.mitre.org/data/definitions/1427.html)

[LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

Critical

User-controlled AI API consumption parameters

The application allows user input to directly control Google Gemini API consumption parameters such as `max_output_tokens` or `candidate_count`. This creates an **Unbounded Consumption** vulnerability. Attackers can specify excessively large values for token limits or candidate counts to cause excessive API costs, slow response times, or exhaust rate limits. **Supported on V2 engine only.**

[CWE-770](https://cwe.mitre.org/data/definitions/770.html)

[LLM10:2025](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/)

Medium

User input in privileged LLM instructions

Untrusted user input placed into high-authority LLM instruction channels can introduce a Prompt Injection vulnerability. This occurs when an application inserts attacker-controlled text into privileged instruction surfaces (like system role messages in `invoke()` calls) rather than treating that text as normal user data. Because these instruction channels have higher authority than regular user messages in LangChain conversation hierarchies, injected content can override intended behavior, weaken or bypass guardrails, and steer the model toward unsafe actions (including risky tool usage when tools are enabled). **Supported on V2 engine only.**

[CWE-1427](https://cwe.mitre.org/data/definitions/1427.html)

[LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

Critical

User-controlled AI API consumption parameters

The application allows user input to directly control LangChain AI API consumption parameters such as `max_tokens` or `logit_bias`. This creates an **Unbounded Consumption** vulnerability. Attackers can specify excessively large values for token limits or manipulate logit bias settings to cause excessive API costs, slow response times, or exhaust rate limits. **Supported on V2 engine only.**

[CWE-770](https://cwe.mitre.org/data/definitions/770.html)

[LLM10:2025](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/)

Medium

Missing OpenAI safety\_identifier on LLM requests

A missing `safety_identifier` on OpenAI API requests reduces the ability to reliably attribute activity to individual end-users. OpenAI recommends sending a stable per-user identifier (hashing a username or email to avoid transmitting identifying information, or using a session ID for anonymous previews) to help monitor and detect abuse and to enable more actionable feedback when policy violations are detected in an application. **Supported on V2 engine only.**

[CWE-778](https://cwe.mitre.org/data/definitions/778.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Low

User input in privileged LLM instructions

Untrusted user input placed into high-authority LLM instruction channels can introduce a Prompt Injection vulnerability. This occurs when an application inserts attacker-controlled text into privileged instruction surfaces (like `instructions` or `additional_instructions`, or privileged roles such as `system` and `developer`) rather than treating that text as normal user data. Because these instruction channels have higher authority than regular user messages in OpenAI-style conversation hierarchies, injected content can override intended behavior, weaken or bypass guardrails, and steer the model toward unsafe actions (including risky tool usage when tools are enabled). **Supported on V2 engine only.**

[CWE-1427](https://cwe.mitre.org/data/definitions/1427.html)

[LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

Critical

User-controlled AI API consumption parameters

The application allows user input to directly control OpenAI API consumption parameters such as `max_output_tokens`, `max_tokens`, or `logit_bias`. This creates an **Unbounded Consumption** vulnerability. Attackers can specify excessively large values for token limits or manipulate logit bias settings to cause excessive API costs, slow response times, or exhaust rate limits. **Supported on V2 engine only.**

[CWE-770](https://cwe.mitre.org/data/definitions/770.html)

[LLM10:2025](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/)

Medium

Missing HTTP Only option in cookie configuration

Not setting the HTTP Only attribute to “true” in cookie configurations leaves the cookie vulnerable to being accessed by client-side JavaScript. This oversight can lead to the exposure of cookie values, especially on websites susceptible to Cross-Site Scripting (XSS) attacks. Enabling HTTP Only is a critical step in preventing malicious scripts from reading the cookie values through JavaScript.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing Secure option in cookie configuration

Not setting the “Secure” attribute in cookie configuration can lead to unauthorized third-party access. This attribute, when enabled, ensures cookies are sent to the server only over HTTPS, enhancing security by preventing potential eavesdropping.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Leakage of sensitive data in cookie

Storing sensitive data in cookies can lead to a data breach. This vulnerability occurs when sensitive information is stored in browser cookies, putting it at risk of unauthorized access.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Possible CRLF injection detected

CRLF (Carriage Return Line Feed) injection vulnerability occurs when an attacker is able to insert a sequence of line termination characters into a log message or a file. This can lead to forged log entries, compromising the integrity of log files, or worse, a denial-of-service (DoS) if an attacker abuses the vulnerability by using up all available disk space.

[CWE-93](https://cwe.mitre.org/data/definitions/93.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Missing Cross-Site Request Forgery (CSRF) token(s)

In a Django application, using `@csrf_exempt` to disable CSRF (Cross-Site Request Forgery) protection can introduce increased security risks. CSRF is a forgery attack that tricks authenticated users into executing unintended actions on the website, potentially compromising security or data integrity of your application.

[CWE-352](https://cwe.mitre.org/data/definitions/352.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of Django debug mode

When debug mode is enabled, Django displays detailed error pages with stack traces and other sensitive information when an error occurs. While this can be useful during development, debug mode should never be enabled in production or other such environments because it can lead to the exposure of sensitive data to unauthorized users.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Permissive file assignment

Permissive file assignment exposes sensitive information by granting unnecessary read, write, or execute permissions to users without ownership privileges.

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Usage of **html** magic method

The Django template engine considers values returned by the `__html__` method as “safe” for rendering and therefore no HTML escaping is applied (escaping special characters like ampersands or quotes). Using this method exposes your application to Cross-Site Scripting (XSS) vulnerabilities.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in Access-Control-Allow-Origin

Using unverified user-defined input to set the Access-Control-Allow-Origin header can result in unauthorized access to sensitive data. This vulnerability exposes your application to potential security risks by allowing attackers to specify origins that can access resources.

[CWE-346](https://cwe.mitre.org/data/definitions/346.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Missing Secure option in cookie configuration

When a cookie lacks the Secure option, it can be transmitted over insecure connections, making it vulnerable to interception by unauthorized parties. The Secure option is important because it instructs the browser to only send the cookie over HTTPS, enhancing security.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Usage of insecure cookie settings

Using insecure cookie settings when configuring your application poses a significant security risk. If session (or CSRF) cookies are transmitted over an unencrypted HTTP connection, an attacker could capture a cookie and use this to hijack a user’s session, thereby gaining unauthorized access to - potentially sensitive - data and resources.  
  
To prevent this vulnerability, always enable to secure attributes for session and CSRF cookies in your settings.py file. This is especially important for production environments.

[CWE-693](https://cwe.mitre.org/data/definitions/693.html)

[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Usage of insecure SMTP connection

An insecure SMTP connection can expose transmitted data to unauthorized access. This rule identifies if SMTP settings are configured to enforce secure connections.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Usage of weak encryption algorithm in JWT

Implementing weak encryption algorithms in JWT (JSON Web Tokens) compromises the security of the tokens. This vulnerability occurs when an encryption algorithm that does not offer sufficient security strength is used, making the tokens susceptible to attacks.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of mark\_safe

The Django utils method `mark_safe` is used to mark a string as “safe” for output as HTML, but it does not escape special characters like ampersands or quotes, and therefore could expose your application to XSS attacks if an external string is passed to it.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in redirect

Using unsanitized user input to perform redirects can make your application vulnerable to phishing attacks. This occurs when user input is directly used to determine the destination of a redirect without proper validation or sanitization, allowing attackers to redirect users to malicious sites, potentially compromising their security.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized dynamic input in file path

Using unsanitized dynamic input to determine file paths can allow attackers to gain access to files and folders outside of the intended scope. This vulnerability occurs when input provided by users is directly used to access the filesystem without proper validation or sanitization.

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Unsanitized user input in file path

Unsanitized user input in file path resolution can lead to security vulnerabilities. This issue arises when an application directly uses input from the user to determine file paths or names without proper validation or sanitization. Attackers can exploit this to access unauthorized files or directories, leading to data breaches or other security compromises.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Permissive Access-Control-Allow-Origin configuration

A permissive Access-Control-Allow-Origin configuration can expose your application to security risks. When this header is set to “\*”, it means your application’s responses can be accessed by any website, potentially leading to unauthorized access to sensitive information.

[CWE-942](https://cwe.mitre.org/data/definitions/942.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Unsanitized user input in output stream (XSS)

Cross-site scripting (XSS) vulnerabilities occur when unsanitized user input is included in web page content. This flaw can lead to malicious scripts being executed in the context of the user’s browser, compromising the security of user data and interactions with the application. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Python)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized external input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Python)

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in web page generation (XSS)

Cross-Site Scripting (XSS) is a vulnerability that allows attackers to run malicious scripts in the context of a trusted web application. This can happen when an application includes untrusted data without proper validation or escaping. There are several contexts where XSS can occur, each requiring specific encoding strategies to mitigate the risk.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of Flask debug mode

Enabling Flask’s debug mode exposes sensitive internal information through detailed error messages, stack traces, and the interactive Werkzeug debugger. This can allow attackers to discover application internals, leak environment variables, or even execute arbitrary code.

[CWE-489](https://cwe.mitre.org/data/definitions/489.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)

Medium

Missing HTTP Only option in cookie configuration

Disabling the HttpOnly flag on Flask session cookies or persistent login cookies allows them to be accessed via JavaScript, making them vulnerable to theft through Cross-Site Scripting (XSS) attacks. This can result in session hijacking and unauthorized access to user accounts.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing Cross-Site Request Forgery (CSRF) configuration

Disabling CSRF protection via `WTF_CSRF_ENABLED = False` can make your Flask application vulnerable to Cross-Site Request Forgery attacks.  
CSRF is a forgery attack that tricks authenticated users into executing unintended actions on the website, potentially compromising security or data integrity of your application.  
Only disable CSRF in a safe, controlled testing environment.  

[CWE-352](https://cwe.mitre.org/data/definitions/352.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in HTTP response (XSS)

Including unsanitized user input in a HTTP response could allow an attacker inject Carriage Return Line Feed (CRLF) characters into the response. An entirely attacker-controlled response can then be returned, creating a cross-site scripting (XSS) vulnerability.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of insecure cookie settings

Disabling the Secure flag on Flask session cookies or persistent login cookies allows them to be sent over unencrypted HTTP connections, making them vulnerable to interception by attackers (man-in-the-middle attacks). This can result in session hijacking and unauthorized access to user accounts.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Unsanitized user input in Flask redirect

Using unsanitized user input to perform redirects can make your application vulnerable to phishing attacks. This occurs when user input is directly used to determine the destination of a redirect without proper validation or sanitization, allowing attackers to redirect users to malicious sites, potentially compromising their security.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Missing SameSite value in cookie configuration

Setting `samesite=None` in cookie configuration disables SameSite protections, making the application vulnerable to CSRF attacks. Only use `samesite=None` when necessary, and always in conjunction with the `secure` flag.

[CWE-1275](https://cwe.mitre.org/data/definitions/1275.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of unsafe Pickle libraries

Using pickle, \_pickle and cPickle can make your application vulnerable to unsafe code execution. This is because the deserialization logic of these libraries allows for arbitrary code execution. It is best practices to avoid these libraries and to use a safer serialization formats like JSON.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Permissive server network interface configuration

Binding a service to “0.0.0.0” (or an empty string) makes it accessible on all network interfaces. This configuration can lead to unintended exposure over insecure or unintended network interfaces, creating potential security risks.

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized external input in code generation

Allowing external input (dynamic or user-controlled) to directly influence code generation or scripting functions without proper sanitization can lead to code injection vulnerabilities. This occurs when an attacker is able to insert malicious code into your application, which is then executed, potentially leading to unauthorized actions or data access.

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in initialization of trusted environment variables

Using unsanitized user input to set environment variables via `os.putenv()` allows attackers to manipulate critical runtime settings such as proxy configuration, library loading paths, SSL certificates, and Python module paths. This can lead to traffic interception, arbitrary code execution, or security bypass.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in deserialization method

Deserializing data from untrusted sources, like user inputs or request parameters, without proper verification is a security risk. Attackers can embed malicious code or payloads within serialized data. When your application deserializes this data without checks, it becomes vulnerable to attacks.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Unsanitized user input in ’eval’ type function

Executing code with ’eval’ or similar functions using unsanitized user input is risky and can lead to code injection vulnerabilities. This happens when external input is used directly in functions that execute code, allowing attackers to run malicious code within your application.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in exception message

Leakage of sensitive data in exception messages can lead to data breaches. This vulnerability occurs when sensitive information is included in exceptions, making it accessible to unauthorized users.

[CWE-210](https://cwe.mitre.org/data/definitions/210.html)

Medium

Unsanitized user input in HTTP request (SSRF)

Your application is vulnerable to Server-Side Request Forgery (SSRF) attacks when it connects to URLs that include user-supplied data. This vulnerability occurs because attackers can manipulate these URLs to force your application to make unintended requests to internal or external resources.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Usage of insecure FTP connection

Using insecure FTP connections can compromise the security of sensitive data. This vulnerability arises when applications that handle sensitive information communicate with FTP servers without secure protocols. Always verify that FTP connections in your application utilize SFTP for enhanced security.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Usage of insecure HTTP connection

Your application is at risk when it connects to APIs using insecure HTTP connections. This vulnerability occurs because HTTP lacks encryption, making data susceptible to interception and alteration. Always verify that your application exclusively uses HTTPS connections for enhanced security.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Insecure temporary directory usage

Creating temporary files in shared system directories (e.g., `/tmp`) or using deprecated functions like `tempfile.mktemp()` can be insecure. These directories are accessible to all users on the system, and `mktemp()` is vulnerable to race conditions where an attacker could create a file between the name generation and file creation.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of insecure websocket connection

Using insecure websocket connections can compromise data security. This vulnerability arises when applications connect to APIs without SSL, making the data susceptible to interception and manipulation.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Missing signature verification of JWT

Failing to verify the signature of JSON Web Tokens (JWTs) compromises the security of an application. Signature verification is crucial for confirming the authenticity and integrity of JWTs. Without this verification, your application is open to token forgery and replay attacks, where attackers can manipulate or reuse tokens to gain unauthorized access.

[CWE-347](https://cwe.mitre.org/data/definitions/347.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in ’literal\_eval’ function

Using `ast.literal_eval` with unsanitized user input can lead to resource exhaustion (CWE-400). While `literal_eval` is safer than `eval` as it only evaluates literal Python data structures, malicious actors can provide deeply nested or excessively large data structures as input. This can cause the application to consume excessive memory, leading to denial of service or other performance issues.

[CWE-400](https://cwe.mitre.org/data/definitions/400.html)

High

Leakage of sensitive information in logger message

Sensitive information leakage through logger messages can compromise data security. This vulnerability arises when sensitive data is inadvertently included in log messages, posing a risk of unauthorized disclosure.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Usage of manual HTML sanitization (XSS)

Manually sanitizing HTML is prone to mistakes and can lead to Cross-Site Scripting (XSS) vulnerabilities. This occurs when user input is not properly sanitized, allowing attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized input in NoSQL query

Using unsanitized data in NoSQL queries exposes your application to NoSQL injection attacks. This vulnerability arises when user input, request data, or any externally influenced data is directly passed into a NoSQL query function without proper sanitization. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Python)

[CWE-943](https://cwe.mitre.org/data/definitions/943.html)

Critical

Unsanitized user input in OS command

Directly incorporating external or user-defined input into an OS command exposes the system to possible command injection attacks. This vulnerability allows attackers to execute unauthorized commands on the operating system, potentially leading to a compromise of system integrity.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in raw HTML strings (XSS)

Including unsanitized user input in HTML exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Python)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Usage of external input in code reflection

Using external input for dynamic class loading or code execution through reflection poses a significant security risk. This practice can be exploited by attackers to load harmful classes or execute malicious methods, potentially resulting in remote code execution and other severe security threats.

[CWE-470](https://cwe.mitre.org/data/definitions/470.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in regular expression

Creating regular expressions from user input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This issue arises because some regular expressions can be processed with exponential time complexity. When attackers exploit this, it can significantly drain CPU resources, effectively causing a denial of service.

[CWE-1287](https://cwe.mitre.org/data/definitions/1287.html)

Medium

Missing SSL certificate verification

Missing or optional SSL certificate verification can compromise the security of sensitive data. This vulnerability arises when an application fails to check for valid SSL certificates during data transmission, potentially allowing attackers to intercept or manipulate data and leading to Man-in-the-Middle attacks. To protect against these kinds of attacks and to maintain secure communication, SSL certificates should always be properly validated in production environments.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Usage of weak encryption algorithm (Blowfish)

Your code is at risk due to the use of Blowfish, a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of ECB cipher mode

The ECB (Electronic Codebook) cipher mode is recognized as insecure and is not recommended for use in cryptographic protocols. This mode does not provide adequate data protection because it encrypts identical plaintext blocks into identical ciphertext blocks, making it vulnerable to pattern analysis. For stronger security, it’s essential to use encryption algorithms that have built-in message integrity and do not require a mode of operation to be configured, such as ChaCha20-Poly1305 or, for older applications that do not support this, AES-256-GCM.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RC4)

Your code is at risk due to the use of RC4 (Rivest’s Cipher version 4), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RSA)

Using a weak encryption algorithm, specifically 1024-bit RSA, compromises data security. This vulnerability can lead to unauthorized access to sensitive information.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library (Adler-32)

Adler-32 is a weak hashing algorithm that offers minimal security. It is not suitable for protecting data against intentional modifications.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (CRC32)

The use of CRC32 for hashing is insecure. CRC32 is designed for error-checking and not for security purposes, making it vulnerable to intentional data tampering.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (DSS)

Using a weak hashing library like DSS increases the risk of data breaches. DSS has known security flaws and vulnerabilities, and its use is no longer recommended.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (MDx)

Using a weak hashing library, such as MD5, increases the risk of data breaches. MD5 itself is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library like SHA-1 increases the risk of data breaches. SHA-1 in particular is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of inappropriate encryption algorithm on a password (AES)

AES is a strong encryption algorithm, but encryption should not be used for password storage. Since encryption is reversible, an attacker who obtains the key can recover all passwords. Passwords should be hashed using a dedicated password hashing algorithm. **Supported on V2 engine only.**

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (Blowfish)

Your code is at risk due to the use of Blowfish, a weak encryption algorithm, for password encryption. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm, for password encryption. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for passwords increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RC4)

Your code is at risk due to the use of RC4 (Rivest’s Cipher version 4), a weak encryption algorithm, for password encryption. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RSA)

Using a weak encryption algorithm, specifically 1024-bit RSA, for password encryption compromises data security. This vulnerability can lead to unauthorized access to sensitive information.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using a weak hashing library like SHA-1 for passwords increases the risk of data breaches. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (Adler-32)

Adler-32 is a weak hashing algorithm that offers minimal security. It is not suitable for protecting passwords against intentional modifications.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (Argon2)

Choosing a weak hashing algorithm for passwords compromises security. Argon2 has three variants: Argon2i, Argon2d, and Argon2id. Argon2id is the strongest and most recommended for password hashing because of its balanced resistance against both side-channel and GPU attack vectors.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (CRC32)

The use of CRC32 for password hashing is insecure. CRC32 is designed for error-checking and not for security purposes, making it vulnerable to intentional data tampering.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (DSS)

Using a weak hashing library like DSS increases the risk of data breaches. DSS has known security flaws and vulnerabilities, and its use is no longer recommended.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords. **Supported on V2 engine only.**

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak Pseudo-Random Number Generator (PRNG)

The `random` module in Python uses the Mersenne Twister algorithm, a pseudorandom number generator (PRNG) whose output is deterministic and reproducible. Given enough observed values, an attacker can reconstruct the internal state and predict future and past outputs. Because code evolves and values generated by `random` may flow into security-sensitive contexts over time (e.g., identifiers, tokens, session keys, or access-control decisions), using a predictable source of randomness anywhere in the codebase increases the attack surface.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of deprecated TLS version

TLS (Transport Layer Security) versions 1.0 and 1.1 have known vulnerabilities and using them introduces security risks to your application. These outdated TLS versions can lead to the interception and compromise of sensitive data during transmission.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of vulnerable XML libraries

Certain XML parsers - like xml.sax and pulldom - are known to be vulnerable to XML parsing attacks such as Billion Laughs (exponential entity expansion). These parsers should be avoided. Avoid such vulnerable libraries, and as an additional precaution, use something like defusedxml to further mitigate XML vulnerabilities in Python.

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Unsanitized user input in XPath

Unsanitized user input in XPath expressions can result in XPath injection. This vulnerability occurs when user input is directly used in XPath queries without proper sanitation, potentially granting unauthorized access to sensitive data within XML documents.

[CWE-643](https://cwe.mitre.org/data/definitions/643.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Medium

Leakage of sensitive data to Airbrake

Leaking sensitive data to third-party loggers like Airbrake is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Algolia

Leaking sensitive data to third-party data tools like Algolia is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in AWS query

Including unsanitized data, such as user input or request data, in raw queries makes your application vulnerable to injection attacks.

[CWE-943](https://cwe.mitre.org/data/definitions/943.html)

Critical

Leakage of sensitive data to BigQuery

Leaking sensitive data to third-party data tools like BigQuery is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Bugsnag

Leaking sensitive data to third-party loggers like Bugsnag is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ClickHouse

Leaking sensitive data to a third-party service like ClickHouse is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog

Leaking sensitive data to third-party loggers like Datadog is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ElasticSearch

Leaking sensitive data to third-party data tools is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Dataflow

Leaking sensitive data to a third-party service is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Honeybadger

Leaking sensitive data to third-party loggers like Honeybadger is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to New Relic

Leaking sensitive data to third-party loggers like New Relic is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to OpenTelemetry

Leaking sensitive data to third parties like OpenTelemetry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to OpenAI

Leaking sensitive data to third-party services like OpenAI is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to RollBar

Leaking sensitive data to third-party loggers like Rollbar is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Scout APM

Leaking sensitive data to third-party loggers like Scout APM is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Sentry

Leaking sensitive data to third-party loggers like Sentry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

## Ruby [Copied!](#ruby "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Leakage of sensitive data in cookie

Storing sensitive data in cookies can lead to a data breach. This vulnerability occurs when sensitive information is stored in browser cookies, putting it at risk of unauthorized access.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Unsanitized user input in initialization of trusted environment variables

Using unsanitized user input to set environment variables via `ENV[]=` or `ENV.store()` allows attackers to manipulate critical runtime settings such as proxy configuration, library loading paths, SSL certificates, and Ruby interpreter options. This can lead to traffic interception, arbitrary code execution, or security bypass.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in deserialization method

Deserializing data from untrusted sources, like parameters or cookies, without proper validation is a security risk. Attackers can embed malicious code or payloads in serialized data. When your application deserializes this data, it can compromise your system’s security.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Usage of dangerous ’eval’ function

The use of the `eval` function, which dynamically executes code represented as strings, poses a high security risk in any programming environment. This is primarily because it can be exploited to run arbitrary and potentially harmful code, making the application vulnerable to code injection attacks.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in ’eval’ type function

Executing code with ’eval’ or similar functions using unsanitized user input is risky and can lead to code injection vulnerabilities. This happens when external input is used directly in functions that execute code, allowing attackers to run malicious code within your application.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in exception message

Leakage of sensitive data in exception messages can lead to data breaches. This vulnerability occurs when sensitive information is included in exceptions, making it accessible to unauthorized users.

[CWE-210](https://cwe.mitre.org/data/definitions/210.html)

Medium

Unsanitized user input in OS command

Executing OS commands with user input can lead to command injection attacks. This vulnerability occurs when an application dynamically generates a command to the operating system using data supplied by the user without proper sanitization.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Leakage of sensitive data in dynamic file generation

Writing sensitive data to static files, such as logs, backups, or data exports, can lead to unintended data exposure. Be wary of writing sensitive information to files, because this poses a risk of data leakage.

[CWE-313](https://cwe.mitre.org/data/definitions/313.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in format string

Including user input directly in a format string can lead to security vulnerabilities. Attackers might exploit these format strings to generate misleading or fabricated messages by inserting format specifiers into the user input.

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Unsanitized user input in FTP request

Using unsanitized user input in FTP requests can lead to severe security vulnerabilities. When your application uses raw user input in FTP operations without proper sanitization, it opens up avenues for attackers. They could exploit this to perform code injection attacks, where malicious code is executed by the application, or path traversal attacks, which allow unauthorized access to files and directories outside of the intended scope.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Leakage of sensitive data in HTTP GET parameters

Sensitive data should never be sent as part of the query string in HTTP GET requests. This is bad practice that can expose sensitive information since query strings can be cached or logged in server logs, and can be seen in browser history, making them vulnerable to unauthorized access.

[CWE-598](https://cwe.mitre.org/data/definitions/598.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Usage of insecure HTTP connection

Your application is at risk when it connects to APIs using insecure HTTP connections. This vulnerability occurs because HTTP does not encrypt data, making it susceptible to interception and alteration. Ensure that your application uses HTTPS, which encrypts data in transit, for all connections.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in HTTP request (SSRF)

Including user input when constructing URLs makes your application vulnerable to Server-Side Request Forgery (SSRF), which allows attackers to manipulate the server into making requests to unintended locations.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Usage of insecure FTP connection

Using an insecure FTP connection can expose sensitive data to interception and unauthorized access. This vulnerability occurs when applications that handle sensitive information communicate with FTP servers without secure protocols like SFTP.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Insecure temporary directory usage

Creating files directly in shared system directories like `/tmp` or `/var/tmp` can be insecure. These directories are world-writable, and files created there may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data in JWT

Storing sensitive data in JWTs exposes it to potential security risks. JWTs are designed for transmitting data securely, not for storing confidential information. Guard against including sensitive data in a JWT payload.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Leakage of sensitive information in logger message

Sensitive information leakage in logger messages can compromise user privacy and security. This vulnerability occurs when sensitive data, such as personal identifiable information (PII), is included in log messages, making it accessible to unauthorized individuals.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Usage of manual HTML sanitization (XSS)

Manual HTML sanitization can introduce Cross-Site Scripting (XSS) vulnerabilities. This security risk arises when developers attempt to manually escape HTML entities, which is a process prone to errors and oversights, potentially leaving the application vulnerable to XSS attacks.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in file path

Unsanitized user input in file paths can compromise your system’s security. This vulnerability arises when user input is directly used to construct file names or paths without proper sanitization, potentially leading to path manipulation. Attackers could exploit this to access files or directories outside the intended scope, posing a significant security risk.

[CWE-73](https://cwe.mitre.org/data/definitions/73.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

High

Unsanitized user input in raw HTML strings (XSS)

Including unsanitized user input in HTML exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Ruby)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in code generation

Using unsanitized user input in code generation can lead to code injection vulnerabilities. This issue arises when an application dynamically generates or manipulates code based on user-supplied data without proper validation or sanitization.

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in regular expression

Creating regular expressions from user input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This issue arises because some regular expressions can be processed with exponential time complexity. When attackers exploit this, it can significantly drain CPU resources, effectively causing a denial of service.

[CWE-1287](https://cwe.mitre.org/data/definitions/1287.html)

Medium

Unsanitized user input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data.

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Missing SSL certificate verification

Missing SSL certificate verification can compromise the security of sensitive data. This vulnerability arises when an application fails to check for valid SSL certificates during data transmission, potentially allowing attackers to intercept or manipulate data.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

High

Usage of weak encryption algorithm (Blowfish)

Using Blowfish for encryption is a security risk as it is a weak algorithm, vulnerable to collision attacks (including birthday attacks) where two different inputs can produce the same hash value, compromising data integrity and security. A weak encryption library can lead to data breaches and greater security risk.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (DSA)

Using a weak encryption algorithm like 1024-bit DSA (Digital Signature Algorithm) compromises data security, making it vulnerable to breaches.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RC4)

Using the RC4 encryption algorithm exposes your data to security risks. RC4 is outdated and has known vulnerabilities that can lead to data breaches.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RSA)

Using a weak encryption algorithm, specifically 1024-bit RSA, compromises data security. This vulnerability can lead to unauthorized access to sensitive information.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library (DSS)

Using a weak hashing library like DSS increases the risk of data breaches. DSS has known security flaws and vulnerabilities, and its use is no longer recommended.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (MD5)

Using a weak hashing library like MD5 increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs produce the same output, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA)

Using a weak hashing library, such as SHA or SHA-1, compromises data security. These algorithms are no longer considered secure due to vulnerabilities that can lead to data breaches.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of inappropriate encryption algorithm on a password (AES)

AES is a strong encryption algorithm, but encryption should not be used for password storage. Since encryption is reversible, an attacker who obtains the key can recover all passwords. Passwords should be hashed using a dedicated password hashing algorithm.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (Blowfish)

Using a weak encryption algorithm like Blowfish for passwords increases the risk of data breaches. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (DSA)

Using a weak encryption algorithm like DSA for passwords increases the risk of data breaches. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RC4)

Using a weak encryption algorithm like RC4 for passwords increases the risk of security breaches. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RSA)

Using a weak encryption algorithm like 1024-bit RSA for passwords increases the risk of data breaches. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (DSS)

Using a weak hashing library for password storage compromises data security. Weak hashing algorithms, such as DSS, do not provide sufficient protection against brute-force attacks, making it easier for attackers to decrypt passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for password storage compromises security. MD5 is outdated and vulnerable, making it easier for attackers to crack passwords and gain unauthorized access.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA)

Using weak hashing algorithms like SHA or SHA-1 for password storage compromises security. These algorithms are vulnerable to attacks, making it easier for attackers to crack passwords and access sensitive information.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of insecure websocket connection

Using an insecure WebSocket connection exposes data to interception and manipulation. This vulnerability occurs when WebSocket connections are not encrypted with SSL/TLS, risking the confidentiality and integrity of the data transmitted.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized input in XML External Entity

XXE vulnerabilities arise when an XML parser is allowed to process external entities, which can lead to the disclosure of sensitive data, denial-of-service attacks, and other security issues. It’s crucial to handle XML parsing with care, especially when dealing with raw, unsanitized input.

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Missing application-level encryption of sensitive data

Failing to encrypt sensitive data at the application level can lead to data breaches. This vulnerability arises when sensitive information within records is not encrypted, making it readable and accessible.

[CWE-312](https://cwe.mitre.org/data/definitions/312.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Info

Leakage of sensitive information in exception message

Leakage of sensitive information in exception messages poses a significant security risk. When an exception message is printed to the default output, it might reveal sensitive details about your application’s technical setup or environment. This could potentially open the door to attacks, such as path traversal. Even more concerning is the possibility of exposing user-specific data, which could lead to serious privacy breaches.

[CWE-209](https://cwe.mitre.org/data/definitions/209.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A10:2025](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)

Low

Possible HTTP verb confusion

In Rails applications, the same actions are often used to respond to both GET and HEAD requests. This can become problematic when actions are designed to handle both GET requests, which should not alter the application state, and requests like POST, which may alter state. Relying on `request.get?` to differentiate request types can inadvertently lead to unexpected changes in the application state.

[CWE-650](https://cwe.mitre.org/data/definitions/650.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)

Medium

Missing secure HTTP server configuration

Your application may be at risk if it does not enforce the use of SSL (Secure Sockets Layer) for all communications, especially when processing sensitive data. Be sure to enable force\_ssl at the application level to ensure that all data transmitted is encrypted. Unencrypted HTTP communication sends all requests as plain text, meaning anyone listening in can see all the traffic and extract user data.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Permissive callback disable configuration

Using the `except` option to disable a callback can inadvertently bypass critical access control logic. This oversight can compromise the security of your application by not enforcing necessary checks on certain actions.

[CWE-284](https://cwe.mitre.org/data/definitions/284.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of insecure SMTP connection

Using an insecure SMTP connection exposes your data to interception by unauthorized parties. Alwats check that your application’s SMTP settings enforce secure connections.

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Critical

Unsanitized user input in redirect

Using unsanitized user input to perform redirects can make your application vulnerable to phishing attacks. This occurs when user input is directly used to determine the destination of a redirect without proper validation or sanitization, allowing attackers to redirect users to malicious sites, potentially compromising their security.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of weak password constraint

Weak password constraints can compromise system security. Ensure that your application’s password policy enforces a minimum length of 8 characters during password creation or update processes.

[CWE-521](https://cwe.mitre.org/data/definitions/521.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A07:2025](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)

Medium

Permissive request parameters

Allowing overly permissive request parameters can allow attackers to update any model attributes they choose.

[CWE-913](https://cwe.mitre.org/data/definitions/913.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Missing validation for regular expression

When validating data with regular expressions, it’s crucial to match the entire text. Failing to specify the start and end of the text can lead to incomplete validation, making your application vulnerable to malicious input. Regular expressions should always specify the start of text (\\A) and end of text (\\z or \\Z) boundaries to ensure that the entire string is evaluated, not just portions of it.

[CWE-625](https://cwe.mitre.org/data/definitions/625.html)

Medium

Unsanitized user input in raw HTML strings (XSS)

Including unsanitized user input in HTML responses can lead to cross-site scripting (XSS) attacks. This vulnerability exposes your application to malicious scripts injected by attackers, compromising user data and browser security. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Ruby)

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Leakage of sensitive data in session cookie

Storing sensitive data in session cookies poses a security risk. This vulnerability arises when sensitive information is included within session cookies, making it susceptible to unauthorized access.

[CWE-315](https://cwe.mitre.org/data/definitions/315.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

High

Unsanitized user input in session key

Unsanitized user input in session key poses a security risk. When user-defined data is directly used in session keys, attackers could be able to manipulate session data or perform unauthorized actions by exploiting the predictability or vulnerability of the session mechanism.

[CWE-1018](https://cwe.mitre.org/data/definitions/1018.html)

Critical

Missing HTTP Only option in cookie configuration

Disabling httponly in your cookie configuration can expose your application to Cross-Site Scripting (XSS) attacks. This vulnerability occurs when session cookies can be accessed through JavaScript. Rails, by default, protects your application by enabling the HTTP only, which prevents such access. Setting httponly to `false` greatly increases your application’s risk of XSS attacks.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Unsanitized external input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data. This policy supports various [cleansing/sanitization methods](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods#Ruby)

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Possible dangerous serialization configuration

Using an unsafe serialization strategy can introduce vulnerabilities, particularly when handling untrusted data like cookies. By default, Rails uses JSON to serialize cookie values. JSON is the safest serialization strategy when dealing with untrusted data, to avoid malicious code injection. Changing this default setting can expose your application to attacks.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Possible dangerous permitted parameter key

Permitting high-risk parameter keys in Rails applications exposes them to mass assignment vulnerabilities.  
  
In Rails, mass assignment is when we use a hash to assign attributes all at once rather than individually. This feature is often used for creating or updating records.  
  
When used with an untrusted hash (for example, the `params` hash in a controller), mass assignment is open to attack because any attribute on the record that corresponds to a key in the hash will be automatically assigned the value in the hash. An attacker could exploit this vulnerability to change their role and permissions or to assign themselves as an admin.  
  
By default, Rails’ strong parameters protect against mass assignment vulnerability. However, the inclusion of sensitive or high-risk keys in the permitted list can still leave the application vulnerable.

[CWE-913](https://cwe.mitre.org/data/definitions/913.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Usage of weak model specific encryption key

Weak model-specific encryption keys can compromise data security. To ensure effective encryption, model-specific encryption keys should be 12 bytes or greater.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Leakage of sensitive data to Airbrake

Leaking sensitive data to third-party loggers like Airbrake is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Algolia

Leaking sensitive data to third-party data tools like Algolia is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to AppSignal

Leaking sensitive data to third-party loggers like AppSignal is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to BigQuery

Leaking sensitive data to third-party data tools like BigQuery is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Bugsnag

Leaking sensitive data to third-party loggers like Bugsnag is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to ClickHouse

Leaking sensitive data to a third-party service like ClickHouse is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Datadog

Leaking sensitive data to third-party loggers like Datadog is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Elasticsearch

Leaking sensitive data to third-party data tools is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Analytics

Leaking sensitive data to third-party analytics tools like Google Analytics is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Google Dataflow

Leaking sensitive data to a third-party service is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Honeybadger

Leaking sensitive data to third-party loggers like Honeybadger is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to New Relic

Leaking sensitive data to third-party loggers like New Relic is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Open Telemetry

Leaking sensitive data to third parties like Open Telemetry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Rollbar

Leaking sensitive data to third-party loggers like Rollbar is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Scout APM

Leaking sensitive data to third-party loggers like Scout APM is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Segment

Leaking sensitive data to third-party analytics tools like Segment is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Leakage of sensitive data to Sentry

Leaking sensitive data to third-party loggers like Sentry is a common cause of data leaks and can lead to data breaches.

[CWE-201](https://cwe.mitre.org/data/definitions/201.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

## Rust [Copied!](#rust "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Leakage of sensitive information in error message

Leakage of sensitive information in error messages poses a security risk. When error details such as stack traces, internal paths, or technical error messages are exposed in HTTP responses, they can reveal information about your application’s internals to potential attackers.

[CWE-209](https://cwe.mitre.org/data/definitions/209.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)  
[A10:2025](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)

Low

Unsanitized user input in initialization of trusted environment variables

Using unsanitized user input to set environment variables via `std::env::set_var()` allows attackers to manipulate critical runtime settings such as proxy configuration, library loading paths, and SSL certificate locations. This can lead to traffic interception, arbitrary code execution, or security bypass.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Unsanitized user input in HTTP request (SSRF)

Directly incorporating user input into HTTP request URLs can lead to Server-Side Request Forgery (SSRF) attacks. This vulnerability occurs when an attacker can control the destination of an HTTP request sent by the server.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Insecure temporary directory usage

Using the system temporary directory (e.g., `/tmp`) for file operations is insecure because this directory is shared among all users on the system. Files created in such directories may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in logger message

Logging unsanitized user input can lead to log forgery or malicious content injection. This vulnerability arises when user input is directly included in log messages without proper sanitization.

[CWE-117](https://cwe.mitre.org/data/definitions/117.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Low

Leakage of sensitive information in logger message

Sensitive information leakage in logger messages can compromise user privacy and security. This vulnerability occurs when sensitive data, such as personal identifiable information (PII), is included in log messages, making it accessible to unauthorized individuals.

[CWE-532](https://cwe.mitre.org/data/definitions/532.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)  
[A09:2025](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/)

Medium

Unsanitized user input in OS command

Directly incorporating external or user-defined input into an OS command exposes the system to possible command injection attacks. This vulnerability allows attackers to execute unauthorized commands on the operating system, potentially leading to a compromise of system integrity.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in file path

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in file path operations exposes your application to path traversal attacks. This vulnerability arises when externally controlled data is directly included in file paths without proper sanitation, allowing attackers to access or modify files outside the intended directory.

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data.

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Usage of weak encryption algorithm (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RC4)

Your code is at risk due to the use of RC4 (Rivest’s Cipher version 4), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RSA)

Using a weak encryption algorithm, specifically RSA with a key size less than 2048 bits, compromises data security. This vulnerability can lead to unauthorized access to sensitive information.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library (MD5)

Using a weak hashing library like MD5 increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs produce the same output, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library such as SHA-1 can compromise data security. SHA-1 is no longer considered secure due to vulnerabilities that can lead to data breaches.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of inappropriate encryption algorithm on a password (AES)

AES is a strong encryption algorithm, but encryption should not be used for password storage. Since encryption is reversible, an attacker who obtains the key can recover all passwords. Passwords should be hashed using a dedicated password hashing algorithm.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm, for password encryption. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RC4)

Your code is at risk due to the use of RC4 (Rivest’s Cipher version 4), a weak encryption algorithm, for password encryption. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RSA)

Using a weak encryption algorithm, specifically RSA with a key size less than 2048 bits, for password encryption compromises data security. This vulnerability can lead to unauthorized access to sensitive information.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for password storage compromises security. MD5 is outdated and vulnerable, making it easier for attackers to crack passwords and gain unauthorized access.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using a weak hashing library like SHA-1 for password storage compromises security. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

## Scala [Copied!](#scala "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Server-Side Request Forgery (SSRF)

Server-Side Request Forgery occur when a web server executes a request to a user supplied  
destination parameter that is not validated. Such vulnerabilities could allow an attacker to  
access internal services or to launch attacks from your web server.  

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

Critical

Use of a Broken or Risky Cryptographic Algorithm

The NullCipher implements the Cipher interface by returning ciphertext identical to the  
supplied plaintext. In a few contexts, such as testing, a NullCipher may be appropriate. Avoid  
using the NullCipher. Its accidental use can introduce a significant confidentiality risk.  

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Use of a Broken or Risky Cryptographic Algorithm

Implementing a custom MessageDigest is error-prone. National Institute of Standards and  
Technology(NIST) recommends the use of SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, or  
SHA-512/256.  

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Use of Persistent Cookies Containing Sensitive Information

“A new cookie is created without the Secure flag set. The Secure flag is a  
directive to the browser to make sure that the cookie is not sent for insecure communication  
(http://)"  

[CWE-539](https://cwe.mitre.org/data/definitions/539.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)

Medium

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

The information stored in a custom cookie should not be sensitive or related to the session.  
In most cases, sensitive data should only be stored in session and referenced by the user’s  
session cookie.  

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

“Storing sensitive data in a persistent cookie for an extended period can lead to a breach of  
confidentiality or account compromise."  

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Improper Neutralization of Special Elements used in an LDAP Query (‘LDAP Injection’)

Just like SQL, all inputs passed to an LDAP query need to be passed in safely. Unfortunately,  
LDAP doesn’t have prepared statement interfaces like SQL. Therefore, the primary defense  
against LDAP injection is strong input validation of any untrusted data before including it in  
an LDAP query.  

[CWE-90](https://cwe.mitre.org/data/definitions/90.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Incorrect Type Conversion or Cast

When converting a byte array containing a hash signature to a human readable string, a  
conversion mistake can be made if the array is read byte by byte.  

[CWE-704](https://cwe.mitre.org/data/definitions/704.html)

Medium

Improper Neutralization of Special Elements used in an Expression Language Statement (‘Expression Language Injection’)

“A expression is built with a dynamic value. The source of the value(s) should be verified to  
avoid that unfiltered values fall into this risky code evaluation."  

[CWE-917](https://cwe.mitre.org/data/definitions/917.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Files or Directories Accessible to External Parties

Constructing a server-side redirect path with user input could allow an  
attacker to download application binaries (including application classes or  
jar files) or view arbitrary files within protected directories.  

[CWE-552](https://cwe.mitre.org/data/definitions/552.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Critical

Improper Neutralization of CRLF Sequences in HTTP Headers (‘HTTP Request/Response Splitting’)

This code constructs an HTTP Cookie using an untrusted HTTP parameter. If this cookie is added  
to an HTTP response, it will allow a HTTP response splitting vulnerability. See  
[http://en.wikipedia.org/wiki/HTTP\_response\_splitting](http://en.wikipedia.org/wiki/HTTP_response_splitting) for more information.  

[CWE-113](https://cwe.mitre.org/data/definitions/113.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Neutralization of CRLF Sequences in HTTP Headers (‘HTTP Request/Response Splitting’)

When an HTTP request contains unexpected CR and LF characters, the server may respond with an  
output stream that is interpreted as two different HTTP responses (instead of one). An attacker  
can control the second response and mount attacks such as cross-site scripting and cache  
poisoning attacks.  

[CWE-113](https://cwe.mitre.org/data/definitions/113.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Neutralization of CRLF Sequences in HTTP Headers (‘HTTP Request/Response Splitting’)

This code directly writes an HTTP parameter to an HTTP header, which allows for a HTTP  
response splitting vulnerability. See [http://en.wikipedia.org/wiki/HTTP\_response\_splitting](http://en.wikipedia.org/wiki/HTTP_response_splitting) for  
more information.  

[CWE-113](https://cwe.mitre.org/data/definitions/113.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Neutralization of Special Elements used in a Command (‘Command Injection’)

Simple Mail Transfer Protocol (SMTP) is a the text based protocol used for  
email delivery. Like with HTTP, headers are separate by new line separator. If  
kuser input is place in a header line, the application should remove or replace  
new line characters (CR / LF). You should use a safe wrapper such as Apache  
Common Email and Simple Java Mail which filter special characters that can lead  
to header injection.  

[CWE-77](https://cwe.mitre.org/data/definitions/77.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Certificate Validation

A HostnameVerifier that accept any host are often use because of certificate  
reuse on many hosts. As a consequence, this is vulnerable to Man-in-the-middleattacks  
attacks since the client will trust any certificate.  

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

Medium

Improper Certificate Validation

A HostnameVerifier that accept any host are often use because of certificate  
reuse on many hosts. As a consequence, this is vulnerable to Man-in-the-middle  
attacks since the client will trust any certificate.  

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

Medium

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Avoid using custom XSS filtering. Please use standard sanitization functions.  

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Info

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Disabling HTML escaping put the application at risk for Cross-Site Scripting (XSS).  

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Servlet reflected cross site scripting vulnerability  

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

A potential XSS was found. It could be used to execute unwanted JavaScript in a  
client’s browser.  

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Use of Insufficiently Random Values

The use of a predictable random value can lead to vulnerabilities when used in certain security  
critical contexts. A quick fix could be to replace the use of scala.util.Random with something  
stronger, such as java.security.SecureRandom  

[CWE-330](https://cwe.mitre.org/data/definitions/330.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Improper Neutralization of CRLF Sequences (‘CRLF Injection’)

When data from an untrusted source is put into a logger and not neutralized correctly, an  
attacker could forge log entries or include malicious content. Inserted false entries could be  
used to skew statistics, distract the administrator or even to implicate another party in the  
commission of a malicious act. If the log file is processed automatically, the attacker can  
render the file unusable by corrupting the format of the file or injecting unexpected  
characters. An attacker may also inject code or other commands into the log file and take  
advantage of a vulnerability in the log processing utility (e.g. command injection or XSS).  

[CWE-93](https://cwe.mitre.org/data/definitions/93.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Sensitive Cookie Without ‘HttpOnly’ Flag

A new cookie is created without the HttpOnly flag set. The HttpOnly flag is a directive to the  
browser to make sure that the cookie can not be red by malicious script. When a user is the  
target of a “Cross-Site Scripting”, the attacker would benefit greatly from getting the session  
id for example.  

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

URL Redirection to Untrusted Site (‘Open Redirect’)

Unvalidated redirects occur when an application redirects a user to a  
destination URL specified by a user supplied parameter that is not validated.  
Such vulnerabilities can be used to facilitate phishing attacks.  

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Critical

Improper Handling of Unicode Encoding

Improper Handling of Unicode Encoding  

[CWE-176](https://cwe.mitre.org/data/definitions/176.html)

High

Collapse of Data into Unsafe Value

CERT: IDS11-J. Perform any string modifications before validation  

[CWE-182](https://cwe.mitre.org/data/definitions/182.html)

Medium

Collapse of Data into Unsafe Value

IDS01-J. Normalize strings before validating them  

[CWE-182](https://cwe.mitre.org/data/definitions/182.html)

Medium

External Control of System or Configuration Setting

An attacker can set arbitrary bean properties that can compromise system integrity. An  
attacker can leverage this functionality to access special bean properties like  
class.classLoader that will allow them to override system properties and potentially execute  
arbitrary code.  

[CWE-15](https://cwe.mitre.org/data/definitions/15.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

External Control of System or Configuration Setting

Allowing external control of system settings can disrupt service or cause an application to  
behave in unexpected, and potentially malicious ways. An attacker could cause an error by  
providing a nonexistent catalog name or connect to an unauthorized portion of the database.  

[CWE-15](https://cwe.mitre.org/data/definitions/15.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Improper Authentication

Ignoring XML comments in SAML may lead to authentication bypass  

[CWE-287](https://cwe.mitre.org/data/definitions/287.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

Medium

Incorrect Permission Assignment for Critical Resource

Overly permissive file permission  

[CWE-732](https://cwe.mitre.org/data/definitions/732.html)

Medium

Deserialization of Untrusted Data

Avoid using XMLDecoder to parse content from an untrusted source.  

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)

Medium

Deserialization of Untrusted Data

Enabling extensions in Apache XML RPC server or client can lead to deserialization  
vulnerability which would allow an attacker to execute arbitrary code.  

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)

Medium

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

The input values included in SQL queries need to be passed in safely. Bind  
variables in prepared statements can be used to easily mitigate the risk of  
SQL injection.  

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

The method identified is susceptible to injection. The input should be validated and properly  
escaped.  

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

The highlighted API is used to execute a system command. If unfiltered input is passed to this  
API, it can lead to arbitrary command execution.  

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

Form inputs should have minimal input validation. Preventive validation helps provide defense  
in depth against a variety of risks.  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

Without proper access control, executing an LDAP statement that contains a  
user-controlled value can allow an attacker to abuse poorly configured LDAP  
context  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Input Validation

Without proper access control, executing an LDAP statement that contains a  
user-controlled value can allow an attacker to abuse poorly configured LDAP  
context  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

The Servlet can read GET and POST parameters from various methods. The value obtained should be  
considered unsafe. You may need to validate or sanitize those values before passing them to  
sensitive APIs  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

The Servlet can read GET and POST parameters from various methods. The  
value obtained should be considered unsafe."  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

Improper Input Validation

This method is part of a REST Web Service (JSR311). The security of this web service should be  
analyzed. For example:  
\- Authentication, if enforced, should be tested.  
\- Access control, if enforced, should be tested.  
\- The inputs should be tracked for potential vulnerabilities.  
\- The communication should ideally be over SSL.  
\- If the service supports writes (e.g., via POST), its vulnerability to CSRF should be  
investigated.  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Info

Improper Input Validation

This method is part of a SOAP Web Service (JSR224). The security of this web service should be  
analyzed. For example:  
\- Authentication, if enforced, should be tested.  
\- Access control, if enforced, should be tested.  
\- The inputs should be tracked for potential vulnerabilities.  
\- The communication should ideally be over SSL.  

[CWE-20](https://cwe.mitre.org/data/definitions/20.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Info

Improper Privilege Management

Do not grant dangerous combinations of permissions.  

[CWE-269](https://cwe.mitre.org/data/definitions/269.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)

Medium

Improper Control of Generation of Code (‘Code Injection’)

A malicious user in control of a template can run malicious code on the  
server-side. Velocity templates should be seen as scripts.  

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Control of Generation of Code (‘Code Injection’)

An expression is built with a dynamic value. The source of the value(s) should be verified to  
avoid that unfiltered values fall into this risky code evaluation.  

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Control of Generation of Code (‘Code Injection’)

The software constructs all or part of a code segment using externally-influenced  
input from an upstream component, but it does not neutralize or incorrectly  
neutralizes special elements that could modify the syntax or behavior of the  
intended code segment.  

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Neutralization of Special Elements in Data Query Logic

Constructing SimpleDB queries containing user input can allow an attacker to view unauthorized  
records.  

[CWE-943](https://cwe.mitre.org/data/definitions/943.html)

High

Use of Externally-Controlled Format String

Allowing user input to control format parameters could enable an attacker to cause exceptions  
to be thrown or leak information.Attackers may be able to modify the format string argument,  
such that an exception is thrown. If this exception is left uncaught, it may crash the  
application. Alternatively, if sensitive information is used within the unused arguments,  
attackers may change the format string to reveal this information.  

[CWE-134](https://cwe.mitre.org/data/definitions/134.html)

High

Improper Restriction of XML External Entity Reference

XML External Entity (XXE) attacks can occur when an XML parser supports XML  
entities while processing XML received from an untrusted source.  

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Improper Restriction of XML External Entity Reference

The input values included in SQL queries need to be passed in safely. Bind  
variables in prepared statements can be used to easily mitigate the risk of  
SQL injection.  

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Incorrect Behavior Order

This specific mode of CBC with PKCS5Padding is susceptible to padding oracle attacks. An  
adversary could potentially decrypt the message if the system exposed the difference between  
plaintext with invalid padding or valid padding. The distinction between valid and invalid  
padding is usually revealed through distinct error messages being returned for each condition.  

[CWE-696](https://cwe.mitre.org/data/definitions/696.html)

High

Inadequate Encryption Strength

An authentication cipher mode which provides better confidentiality of the encrypted data  
should be used instead of Electronic Code Book (ECB) mode, which does not provide good  
confidentiality. Specifically, ECB mode produces the same output for the same input each time.  
This allows an attacker to intercept and replay the data.  

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Critical

Inadequate Encryption Strength

Detected an insufficient key size for DSA. NIST recommends a key size  
of 2048 or higher.  

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Inadequate Encryption Strength

Triple DES (also known as 3DES or DESede) is considered strong ciphers for modern  
applications. NIST recommends the usage of AES block ciphers instead of 3DES.  

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Inadequate Encryption Strength

DES is considered strong ciphers for modern applications. Currently, NIST recommends the usage  
of AES block ciphers instead of DES.  

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Inadequate Encryption Strength

DefaultHttpClient with default constructor is not compatible with TLS 1.2  

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Inadequate Encryption Strength

A small key size makes the ciphertext vulnerable to brute force attacks. At least 128 bits of  
entropy should be used when generating the key if use of Blowfish is required.  

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Inadequate Encryption Strength

The network communications for Hazelcast is configured to use a symmetric cipher (probably DES  
or Blowfish). Those ciphers alone do not provide integrity or secure authentication. The use of  
asymmetric encryption is preferred.  

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Trust Boundary Violation

A trust boundary can be thought of as line drawn through a program. On one side  
of the line, data is untrusted. On the other side of the line, data is assumed  
to be trustworthy. The purpose of validation logic is to allow data to safely  
cross the trust boundary - to move from untrusted to trusted. A trust boundary  
violation occurs when a program blurs the line between what is trusted and what  
is untrusted. By combining trusted and untrusted data in the same data  
structure, it becomes easier for programmers to mistakenly trust unvalidated  
data.  

[CWE-501](https://cwe.mitre.org/data/definitions/501.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)

Medium

Use of RSA Algorithm without OAEP

The software uses the RSA algorithm but does not incorporate Optimal Asymmetric  
Encryption Padding (OAEP), which might weaken the encryption.  

[CWE-780](https://cwe.mitre.org/data/definitions/780.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

A file is opened to read its content. The filename comes from an input  
parameter. If an unfiltered parameter is passed to this file API, files from an  
arbitrary filesystem location could be read.  

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

The filename provided by the FileUpload API can be tampered with by the client to reference  
unauthorized files. The provided filename should be properly validated to ensure it’s properly  
structured, contains no unauthorized path characters (e.g., / ), and refers to an authorized  
file.  

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

A file is opened to write to its contents. The filename comes from an input parameter. If an  
unfiltered parameter is passed to this file API, files at an arbitrary filesystem location  
could be modified. This rule identifies potential path traversal vulnerabilities. In many  
cases, the constructed file path cannot be controlled by the user.  

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

“The software uses an HTTP request parameter to construct a pathname that should be within a  
restricted directory, but it does not properly neutralize absolute path sequences such as  
"/abs/path” that can resolve to a location that is outside of that directory. See  
[http://cwe.mitre.org/data/definitions/36.html](http://cwe.mitre.org/data/definitions/36.html) for more information."  

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

A file is opened to read its content. The filename comes from an input parameter. If an  
unfiltered parameter is passed to this file API, files from an arbitrary filesystem location  
could be read. This rule identifies potential path traversal vulnerabilities. In many cases,  
the constructed file path cannot be controlled by the user.  

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

“The software uses an HTTP request parameter to construct a pathname that should be within a  
restricted directory, but it does not properly neutralize sequences such as “..” that can  
resolve to a location that is outside of that directory. See  
[http://cwe.mitre.org/data/definitions/23.html](http://cwe.mitre.org/data/definitions/23.html) for more information."  

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Exposure of Sensitive Information to an Unauthorized Actor

Applications can unintentionally leak information about their configuration, internal  
workings, or violate privacy through a variety of application problems. Pages that provide  
different responses based on the validity of the data can lead to Information Leakage;  
specifically when data deemed confidential is being revealed as a result of the web  
application’s design.  

[CWE-200](https://cwe.mitre.org/data/definitions/200.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

Medium

Cleartext Transmission of Sensitive Information

Beyond using an SSL socket, you need to make sure your use of SSLSocketFactory  
does all the appropriate certificate validation checks to make sure you are not  
subject to man-in-the-middle attacks. Please read the OWASP Transport Layer  
Protection Cheat Sheet for details on how to do this correctly.  

[CWE-319](https://cwe.mitre.org/data/definitions/319.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

Permissive Cross-domain Policy with Untrusted Domains

Prior to HTML5, Web browsers enforced the Same Origin Policy which ensures that in order for  
JavaScript to access the contents of a Web page, both the JavaScript and the Web page must  
originate from the same domain. Without the Same Origin Policy, a malicious website could serve  
up JavaScript that loads sensitive information from other websites using a client’s  
credentials, cull through it, and communicate it back to the attacker. HTML5 makes it possible  
for JavaScript to access data across domains if a new HTTP header called  
Access-Control-Allow-Origin is defined. With this header, a Web server defines which other  
domains are allowed to access its domain using cross-origin requests. However, caution should  
be taken when defining the header because an overly permissive CORS policy will allow a  
malicious application to communicate with the victim application in an inappropriate way,  
leading to spoofing, data theft, relay and other attacks.  

[CWE-942](https://cwe.mitre.org/data/definitions/942.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Critical

Improper Neutralization of Argument Delimiters in a Command (‘Argument Injection’)

Concatenating unvalidated user input into a URL can allow an attacker to override the value of  
a request parameter. Attacker may be able to override existing parameter values, inject a new  
parameter or exploit variables out of a direct reach. HTTP Parameter Pollution (HPP) attacks  
consist of injecting encoded query string delimiters into other existing parameters. If a web  
application does not properly sanitize the user input, a malicious user may compromise the  
logic of the application to perform either client-side or server-side attacks.  

[CWE-88](https://cwe.mitre.org/data/definitions/88.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Critical

Improper Validation of Certificate with Host Mismatch

Server identity verification is disabled when making SSL connections.  

[CWE-297](https://cwe.mitre.org/data/definitions/297.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

Critical

Missing Support for Integrity Check

The ciphertext produced is susceptible to alteration by an adversary. This mean that the  
cipher provides no way to detect that the data has been tampered with. If the ciphertext can be  
controlled by an attacker, it could be altered without detection.  

[CWE-353](https://cwe.mitre.org/data/definitions/353.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)

Medium

## Swift [Copied!](#swift "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

This iOS mobile application could be vulnerable to NoSQL Injection, because the NoSQL queries are built dynamically as string by concatenating code and untrusted input

This iOS mobile application could be vulnerable to NoSQL Injection, because the NoSQL queries are built dynamically as string by concatenating code and untrusted input. A successful NoSQL injection exploit, similar to that of a SQL injection, could allow an attacker to bypass authentication, read sensitive data from database, modify database data (Insert/Update/Delete), or even compromise the database and the underlying server. It is recommended to avoid to build NoSQL queries with string concatenation of code and untrusted input, if this is needed at least a strong validation/sanitization of input should be performed.

Best Practice

Medium

This iOS mobile application seems calling critical device features (like: send SMS, make phone call, or send email) during its functioning

This iOS mobile application seems calling critical device features (like: send SMS, make phone call, or send email) during its functioning. Given the sensitivity of these features developers must take caution when using them, because theyir misuse could expose the users to various kind of attacks (i.e. sending reserved data via cleartext SMS, spamming via emails/SMS, unintended phone call frauds, etc.).

Best Practice

Medium

This iOS mobile application seems not implementing properly the Certificate Pinning checks when connecting to external web servers, with AlamoFire libraries

This iOS mobile application seems not implementing properly the Certificate Pinning checks when connecting to external web servers, with AlamoFire libraries. An attacker could be able to abuse this vulnerability in order to intercept the communications and perform MitM attacks. It is recommended to implement the proper Certificate Pinning controls in the iOS mobile application following the official security guidelines for iOS.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

Medium

This iOS mobile application seems configured with a weak Keychain protection, because presents the deprecated Keychian attribute “kSecAttrAccessibleAlways” or “kSecAttrAccessibleAlwaysThisDeviceOnly”

This iOS mobile application seems configured with a weak Keychain protection, because presents the deprecated Keychian attribute “kSecAttrAccessibleAlways” or “kSecAttrAccessibleAlwaysThisDeviceOnly”. These weak Keychain protection attributes could allow an attacker to access the data stored in the corresponding Keychain item, regardless of whether the device is locked. It is recommended to use an adequate protection level for Keychain data possibly having the “ThisDeviceOnly” suffix, related with the level of confidentiality required for the stored data. Note that by default the kSecAttrAccessible flag for iOS Keychain is set to “kSecAttrAccessibleWhenUnlocked”.

Best Practice

Medium

This iOS mobile application could be vulnerable to Log Injection, as it seems that some untrusted input data is put into a logger without properly neutralizing it

This iOS mobile application could be vulnerable to Log Injection, as it seems that some untrusted input data is put into a logger without properly neutralizing it. This kind of vulnerabilities could lead to log forging, or injection of malicious content (i.e. XSS stored). It is suggested to perform output escaping and/or input validation/sanitization of untrusted input before write it on logs.

[CWE-117](https://cwe.mitre.org/data/definitions/117.html)

[A09:2021](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)

Medium

This iOS mobile application seems using a WKWebView object weakly configured from a security point of view, as its settings present any of the following flaws: - WKWebView has JavaScript support not explicitly disabled (enabled by default) - WKWebView has enabled JavaScript to access content from other “file://” scheme URLs (allowFileAccessFromFileURLs default false) - WKWebView has enabled JavaScript to access content from any origin (allowUniversalAccessFromFileURLs default false) This configuration of WKWebView increases the attack surface of the mobile app and could lead to various kind of vulnearbilities (i.e

This iOS mobile application seems using a WKWebView object weakly configured from a security point of view, as its settings present any of the following flaws:  
\- WKWebView has JavaScript support not explicitly disabled (enabled by default)  
\- WKWebView has enabled JavaScript to access content from other “file://” scheme URLs (allowFileAccessFromFileURLs default false)  
\- WKWebView has enabled JavaScript to access content from any origin (allowUniversalAccessFromFileURLs default false)  
This configuration of WKWebView increases the attack surface of the mobile app and could lead to various kind of vulnearbilities (i.e. reflected XSS, code injection, information disclosure, etc.). If possible it is recommended to configure WKWebView in the mobile app with JavaScript disabled, and disabling the permission to access content from any origin or other file scheme URLs.

Best Practice

Medium

This iOS mobile application seems not implementing properly the Certificate Pinning checks when connecting to external web servers, with AFNetworking libraries

This iOS mobile application seems not implementing properly the Certificate Pinning checks when connecting to external web servers, with AFNetworking libraries. An attacker could be able to abuse this vulnerability in order to intercept the communications and perform MitM attacks. It is recommended to implement the proper Certificate Pinning controls in the iOS mobile application following the official security guidelines for iOS.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

Medium

This iOS mobile application seems using a insecure storage mechanism, that does not guarantee its confidentiality, to store some data locally into the device

This iOS mobile application seems using a insecure storage mechanism, that does not guarantee its confidentiality, to store some data locally into the device. In particular, there are some insecure storage methods offered by the platform which save the data in cleartext (i.e. storing into PLIST files, using “UIImageWriteToSavedPhotosAlbum”, using “NSKeyedArchiver”, using “NSUserDefaults”, etc.). An attacker could be able in some circumstances (i.e. jailbroken device) to exploit this issue and retrieve the stored data. It is recommended to adopt any of the encryption methods/tools internationally recognized as strong for iOS (adapt to the specific mobile application context), when saving reserved data into the device.

[CWE-311](https://cwe.mitre.org/data/definitions/311.html)

[A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/)

Medium

This iOS mobile application seems configured with an exportable Keychain protection, when the accessibility level do not contain the “ThisDeviceOnly” suffix, then the Keychain data could be backed up to iCloud or via iTunes even if using unencrypted backups which can be restored to any device

This iOS mobile application seems configured with an exportable Keychain protection, when the accessibility level do not contain the “ThisDeviceOnly” suffix, then the Keychain data could be backed up to iCloud or via iTunes even if using unencrypted backups which can be restored to any device. Depending on how sensitive and private the stored data is, this may raise a privacy concern. When storing sensitive data it is recommended to use an high protection level for Keychain data having the “ThisDeviceOnly” suffix. Note that by default the kSecAttrAccessible flag for Keychain is set to “kSecAttrAccessibleWhenUnlocked”. NOTE: this rule does not find the cases of kSecAttrAccessible not explicitly set, by default the “kSecAttrAccessible” value is set to “kSecAttrAccessibleWhenUnlocked”.

Best Practice

Medium

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws. In detail, it was detected the usage of a CommonCrypto cryptographic feature having some critical parameter (crypto key, IV, keygen passphrase, etc.) set insecurely (static, hardcoded, null or empty). An attacker could exploit this issue in order to retrieve the original value of the encrypted data. It is recommended to adopt only cryptographic features and algorithms offered by the iOS platform that are internationally recognized as strong. It is also fundamental to ensure that the encryption parameters (crypto key, IV, etc.) are generate randomly using a cryptographically strong PRNG function (as the Apple method “SecRandomCopyBytes”). In addition, if it is needed to store an encryption parameter on device, a secure storage mechanism like the iOS KeyChain must be used.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws. In detail, it was detected the usage of a RNCrypt/Arcane/SwiftyRSA cryptographic feature having some critical parameter (crypto key, IV, keygen passphrase, etc.) set insecurely (static, hardcoded, null or empty). An attacker could exploit this issue in order to retrieve the original value of the encrypted data. It is recommended to adopt only cryptographic features and algorithms offered by the iOS platform that are internationally recognized as strong. It is also fundamental to ensure that the encryption parameters (crypto key, IV, etc.) are generate randomly using a cryptographically strong PRNG function (as the Apple method “SecRandomCopyBytes”). In addition, if it is needed to store an encryption parameter on device, a secure storage mechanism like the iOS KeyChain must be used.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws. In detail, it was detected the usage of an Apple-Swift-Crypto/Swift-Sodium cryptographic feature having some critical parameter (crypto key, IV, keygen passphrase, etc.) set insecurely (static, hardcoded, null or empty). An attacker could exploit this issue in order to retrieve the original value of the encrypted data. It is recommended to adopt only cryptographic features and algorithms offered by the iOS platform that are internationally recognized as strong. It is also fundamental to ensure that the encryption parameters (crypto key, IV, etc.) are generate randomly using a cryptographically strong PRNG function (as the Apple method “SecRandomCopyBytes”). In addition, if it is needed to store an encryption parameter on device, a secure storage mechanism like the iOS KeyChain must be used.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws. In detail, it was detected the usage of a IDZSwiftCommonCrypto cryptographic feature having some critical parameter (crypto key, IV, keygen passphrase, etc.) set insecurely (static, hardcoded, null or empty). An attacker could exploit this issue in order to retrieve the original value of the encrypted data. It is recommended to adopt only cryptographic features and algorithms offered by the iOS platform that are internationally recognized as strong. It is also fundamental to ensure that the encryption parameters (crypto key, IV, etc.) are generate randomly using a cryptographically strong PRNG function (as the Apple method “SecRandomCopyBytes”). In addition, if it is needed to store an encryption parameter on device, a secure storage mechanism like the iOS KeyChain must be used.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

Medium

This iOS mobile application seems containing some hardcoded information, this storage mode is insecure because does not guarantee the confidentiality of data

This iOS mobile application seems containing some hardcoded information, this storage mode is insecure because does not guarantee the confidentiality of data. An attacker could be able to retrieve the hardcoded data from the code of iOS mobile application. When saving reserved data into the device, it is recommended to adopt any of the encryption methods/tools internationally recognized as strong for iOS (adapt to the specific mobile application context).

[CWE-798](https://cwe.mitre.org/data/definitions/798.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

This iOS mobile application seems using a weak data protection class when storing some files locally into the device, this configuration could expose the files to undesiderated accesses because the data remain accessible under certain circumstances (i.e

This iOS mobile application seems using a weak data protection class when storing some files locally into the device, this configuration could expose the files to undesiderated accesses because the data remain accessible under certain circumstances (i.e. jailbroken device). In particular, the FileProtectionType weak classes that should be used carefully are: - “NSFileProtectionCompleteUnlessOpen” - “FileProtectionType.completeUnlessOpen” - “NSFileProtectionCompleteUntilFirstUserAuthentication” (default value on iOS) - “FileProtectionType.completeUntilFirstUserAuthentication” and the weak file write options are: - “DataWritingFileProtectionCompleteUnlessOpen” - “DataWritingFileProtectionCompleteUntilFirstUserAuthentication” When saving reserved data in local files it is suggested to use any of the secure data protection classes “NSFileProtectionComplete” and “FileProtectionType.complete”, or the secure file write option “NSDataWritingOptions.DataWritingFileProtectionComplete”.

Best Practice

Medium

The iOS mobile application could be vulnerable to XXE attacks, because the resolution of XML external entities in DTD is enabled on it

The iOS mobile application could be vulnerable to XXE attacks, because the resolution of XML external entities in DTD is enabled on it. This kind of vulnerabilities may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning, and other system impacts. It is recommended to disable external entities following the OWASP prevention cheat sheet. In particular, to disable XML resolution of external entities for the Swift XML parser SAXReader it is recommended to avoid to set to TRUE the “shouldResolveExternalEntities” option (by default is FALSE).

[CWE-611](https://cwe.mitre.org/data/definitions/611.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

This iOS mobile application could be vulnerable to SQL Injection, because the SQL queries are built as string by concatenating code and untrusted input

This iOS mobile application could be vulnerable to SQL Injection, because the SQL queries are built as string by concatenating code and untrusted input. A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute administration operations on the database (such as shutdown the DBMS), recover the content of a given file present on the DBMS file system and in some cases issue commands to the operating system. It is recommended to avoid to build SQL queries with string concatenation of code and untrusted input, instead adopt prepared statements with parametrized queries protection mechanisms.

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)

Medium

This iOS mobile application does not implement properly the Biometric Authentication mechanism, because is using the Local Authentication framework or the Security framework configured with a weak Keychain flag (such as: kSecAccessControlBiometryAny, kSecAccessControlTouchIDAny, kSecAccessControlTouchIDCurrentSet, kSecAccessControlUserPresence, kSecAttrAccessibleAlways, kSecAccessControlWatch, kSecAttrAccessibleAlwaysThisDeviceOnly, SecAccessControlCreateFlags.biometryAny, SecAccessControlCreateFlags.userPresence or SecAccessControlCreateFlags.watch)

This iOS mobile application does not implement properly the Biometric Authentication mechanism, because is using the Local Authentication framework or the Security framework configured with a weak Keychain flag (such as: kSecAccessControlBiometryAny, kSecAccessControlTouchIDAny, kSecAccessControlTouchIDCurrentSet, kSecAccessControlUserPresence, kSecAttrAccessibleAlways, kSecAccessControlWatch, kSecAttrAccessibleAlwaysThisDeviceOnly, SecAccessControlCreateFlags.biometryAny, SecAccessControlCreateFlags.userPresence or SecAccessControlCreateFlags.watch). The biometric authentication checks implemented using Local Authentication framework could be bypassed by an attacker. Instead when the Security framework is configured with a weak (or legacy) Keychain flag an attacker could be able to: - add/enroll his biometric data to unlock the Keychain item without invalidate it, - always access the data in the Keychain item regardless of whether the device is locked, - authenticate using a paired Apple Watch device instead of biometric data. In sensitive contexts, it is recommended to implement Biometric Authentication controls using the Security framework properly configured as stated in the official security guidelines for iOS. Specifically, the Security framework should be configured with the method “SecAccessControlCreateWithFlags” having the “protection” argument set to “kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly” or “kSecAttrAccessibleWhenPasscodeSet” values. In addition, if possible the method “SecAccessControlCreateWithFlags” should be set with any of the secure flags “kSecAccessControlBiometryCurrentSet” or “kSecAccessControlDevicePasscode”.

Best Practice

Medium

This iOS mobile application seems using a insufficient data protection class when storing some files locally into the device

This iOS mobile application seems using a insufficient data protection class when storing some files locally into the device. The usage of the data protection class “NSFileProtectionNone” or “FileProtectionType.none” means that the file is encrypted using a key derived only from the device’s UID. The usage of the file write option “NSDataWritingOptions.DataWritingFileProtectionNone” instead allows to save unencrypted the file into the device. In both cases the file is accessible any time the device is powered on, including when locked with a passcode or when booting. This configuration could expose, under certain circumstances (i.e. jailbroken device), these files to undesiderated accesses. It is suggested to use the data protection class “NSFileProtectionComplete” or “FileProtectionType.complete” or the file write option “NSDataWritingOptions.DataWritingFileProtectionComplete” when storing files containing reserved data.

Best Practice

Medium

This iOS mobile application seems using a insufficient data protection class when storing some files locally into the device

This iOS mobile application seems using a insufficient data protection class when storing some files locally into the device. The usage of the data protection class “NSFileProtectionNone” or “FileProtectionType.none” means that the file is encrypted using a key derived only from the device’s UID. The usage of the file write option “NSDataWritingOptions.DataWritingFileProtectionNone” instead allows to save unencrypted the file into the device. In both cases the file is accessible any time the device is powered on, including when locked with a passcode or when booting. This configuration could expose, under certain circumstances (i.e. jailbroken device), these files to undesiderated accesses. It is suggested to use the data protection class “NSFileProtectionComplete” or “FileProtectionType.complete” or the file write option “NSDataWritingOptions.DataWritingFileProtectionComplete” when storing files containing reserved data.

Best Practice

Medium

This iOS mobile application seems not implementing properly the Certificate Pinning checks when connecting to external web servers, with TrustKit libraries

This iOS mobile application seems not implementing properly the Certificate Pinning checks when connecting to external web servers, with TrustKit libraries. An attacker could be able to abuse this vulnerability in order to intercept the communications and perform MitM attacks. It is recommended to implement the proper Certificate Pinning controls in the iOS mobile application following the official security guidelines for iOS.

[CWE-295](https://cwe.mitre.org/data/definitions/295.html)

[A07:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

Medium

This iOS mobile application seems using an insecure WebView in-app browser, which could expose to various kind of vulnerabilities

This iOS mobile application seems using an insecure WebView in-app browser, which could expose to various kind of vulnerabilities. More specifically, the usage of the deprecated UIWebView should be avoided, because it suffers of various security issues. Also the usage of SFSafariViewController should be avoided in sensitive contexts, because it presents various potential security flaws (i.e. JavaScript disabling not supported, cookies and other data shared with Safari browser, etc.). An attacker could abuse this issue to perform various kind of injection attacks (like: XSS, code injection, stealing of reserved information, etc.). It is recommended to use the WKWebView component properly configured in the mobile app, if the usage of SFSafariViewController is a requirements, it is suggested to adopt it only in trusted contexts.

Best Practice

Medium

## VB.NET [Copied!](#vbnet "Copy link to this section")

Policy Name

Description

CWE

OWASP

Severity

Unsanitized external input in code generation

Allowing external input (dynamic or user-controlled) to directly influence code generation or scripting functions without proper sanitization can lead to code injection vulnerabilities. This occurs when an attacker is able to insert malicious code into your application, which is then executed, potentially leading to unauthorized actions or data access.

[CWE-94](https://cwe.mitre.org/data/definitions/94.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Missing HTTP Only option in cookie configuration

Not setting the HTTP Only attribute to “true” in cookie configurations leaves the cookie vulnerable to being accessed by client-side JavaScript. This oversight can lead to the exposure of cookie values, especially on websites susceptible to Cross-Site Scripting (XSS) attacks. Enabling HTTP Only is a critical step in preventing malicious scripts from reading the cookie values through JavaScript.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Missing Secure option in cookie configuration

Not setting the Secure option in cookie configuration can lead to unauthorized third-party access. This attribute, when enabled, ensures cookies are sent to the server only over HTTPS, enhancing security by preventing potential eavesdropping.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Permissive HTTP Only option in cookie configuration

Leaving the HTTP Only option in cookie configuration unset or false can expose your application to attacks by allowing client-side scripts to access cookie values. This vulnerability can lead to unauthorized access or exploits.

[CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Unsanitized user input in HTTP response (XSS)

Including unsanitized user input in HTTP responses exposes your application to cross-site scripting (XSS) attacks. This vulnerability allows attackers to inject malicious scripts into web pages viewed by other users.

[CWE-79](https://cwe.mitre.org/data/definitions/79.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in initialization of trusted system properties

Using unsanitized user input to set environment variables or application switches via `Environment.SetEnvironmentVariable()` or `AppContext.SetSwitch()` allows attackers to manipulate critical runtime settings such as proxy configuration, SSL certificates, and security policies. This can lead to traffic interception, security bypass, or arbitrary behavior changes.

[CWE-454](https://cwe.mitre.org/data/definitions/454.html)

[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)  
[A06:2025](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)

Medium

Leakage of sensitive information in debug message

Leaking sensitive data to loggers is a common cause of data leaks and can lead to data breaches. This rule looks for instances of sensitive data sent to loggers.

[CWE-215](https://cwe.mitre.org/data/definitions/215.html)

[A10:2025](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)

Medium

Unsanitized user input in deserialization method

Deserializing data from untrusted sources, like user inputs or request parameters, without proper verification is a security risk. Attackers can embed malicious code or payloads within serialized data. When your application deserializes this data without checks, it becomes vulnerable to attacks.

[CWE-502](https://cwe.mitre.org/data/definitions/502.html)

[A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)  
[A08:2025](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/)

Critical

Unsanitized user input in ’eval’ type function

Executing code with ’eval’ type functions using unsanitized user input is risky and can lead to code injection vulnerabilities. This happens when external input is used directly in functions that execute code, allowing attackers to run malicious code within your application.

[CWE-95](https://cwe.mitre.org/data/definitions/95.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized user input in HTTP response (response splitting)

Including unsanitized user input in a HTTP response could allow an attacker inject Carriage Return Line Feed (CRLF) characters into the response. An entirely attacker-controlled response can then be returned, creating cross-site scripting (XSS) or other vulnerabilities.

[CWE-113](https://cwe.mitre.org/data/definitions/113.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

High

Unsanitized user input in HTTP request (SSRF)

Directly incorporating user input into HTTP request URLs can lead to Server-Side Request Forgery (SSRF) attacks. This vulnerability occurs when an attacker can control the destination of an HTTP request sent by the server.

[CWE-918](https://cwe.mitre.org/data/definitions/918.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)  
[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

High

Missing Secure option in cookie configuration

When a cookie lacks the Secure option, it can be transmitted over insecure connections, making it vulnerable to interception by unauthorized parties. The Secure option is important because it instructs the browser to only send the cookie over HTTPS, enhancing security.

[CWE-614](https://cwe.mitre.org/data/definitions/614.html)

[A02:2025](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)  
[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

Medium

Insecure temporary directory usage

Creating temporary files using methods like `Path.GetTempFileName()` can be insecure because the default temporary directory (e.g., `/tmp`) is shared among all users on the system. Files created in such directories may be accessible to other local users, leading to information disclosure, symlink attacks, or race conditions.

[CWE-379](https://cwe.mitre.org/data/definitions/379.html)

[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Usage of insufficient random value

The use of predictable random values compromises application security, particularly when these values serve security-related functions.

[CWE-330](https://cwe.mitre.org/data/definitions/330.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Unsanitized user input in redirect

A redirect using unsanitized user input is bad practice and puts your application at greater risk of phishing attacks.

[CWE-601](https://cwe.mitre.org/data/definitions/601.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

Medium

Unsanitized user input in OS command

Directly incorporating external or user-defined input into an OS command exposes the system to possible command injection attacks. This vulnerability allows attackers to execute unauthorized commands on the operating system, potentially leading to a compromise of system integrity.

[CWE-78](https://cwe.mitre.org/data/definitions/78.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Unsanitized dynamic input in file path

Using unsanitized dynamic input to determine file paths can allow attackers to gain access to files and folders outside of the intended scope. This vulnerability occurs when input provided by users is directly used to access the filesystem without proper validation or sanitization.

[CWE-22](https://cwe.mitre.org/data/definitions/22.html)

[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)  
[A01:2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

High

Unsanitized user input in regular expression

Creating regular expressions from user input can lead to a vulnerability known as Regular Expression Denial of Service (ReDoS). This issue arises because some regular expressions can be processed with exponential time complexity. When attackers exploit this, it can significantly drain CPU resources, effectively causing a denial of service.

[CWE-1287](https://cwe.mitre.org/data/definitions/1287.html)

Medium

Unsanitized external input in SQL query

Using unsanitized data, such as user input or request data, or externally influenced data passed to a function, in SQL query exposes your application to SQL injection attacks. This vulnerability arises when externally controlled data is directly included in SQL statements without proper sanitation, allowing attackers to manipulate queries and access or modify data.

[CWE-89](https://cwe.mitre.org/data/definitions/89.html)

[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)  
[A05:2025](https://owasp.org/Top10/2025/A05_2025-Injection/)

Critical

Usage of weak encryption algorithm (DES)

Your code is at risk due to the use of DES (Data Encryption Standard), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of ECB cipher mode

The ECB (Electronic Codebook) cipher mode is recognized as insecure and is not recommended for use in cryptographic protocols. This mode does not provide adequate data protection because it encrypts identical plaintext blocks into identical ciphertext blocks, making it vulnerable to pattern analysis. For stronger security, it’s essential to use encryption algorithms that have built-in message integrity and do not require a mode of operation to be configured, such as ChaCha20-Poly1305 or, for older applications that do not support this, AES-256-GCM.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RC2)

Your code is at risk due to the use of RC2 (Rivest’s Cipher version 2), a weak encryption algorithm. This vulnerability can lead to data breaches and compromises your security measures.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm (RSA)

Using a weak encryption algorithm, specifically 1024-bit RSA, compromises data security. This vulnerability can lead to unauthorized access to sensitive information.

[CWE-327](https://cwe.mitre.org/data/definitions/327.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library (CRC32)

The use of CRC32 for hashing is insecure. CRC32 is designed for error-checking and not for security purposes, making it vulnerable to intentional data tampering.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (MD5)

Using a weak hashing library, such as MD5, increases the risk of data breaches. MD5 itself is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of weak hashing library (SHA-1)

Using a weak hashing library, such as SHA-1, increases the risk of data breaches. SHA-1 itself is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-328](https://cwe.mitre.org/data/definitions/328.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

Medium

Usage of inappropriate encryption algorithm on a password (AES)

AES is a strong encryption algorithm, but encryption should not be used for password storage. Since encryption is reversible, an attacker who obtains the key can recover all passwords. Passwords should be hashed using a dedicated password hashing algorithm.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RC2)

Using a weak encryption algorithm like RC2 for passwords increases the risk of security breaches. Encryption, being reversible, is not suitable for password storage because it allows the original password to be retrieved. Passwords should instead be hashed, an irreversible process that transforms them into a fixed-size string of characters.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak encryption algorithm on a password (RSA)

Using a weak encryption algorithm, specifically 1024-bit RSA, compromises data security. Moreover, since encryption is reversible, it is possible to retrieve the plaintext value. This makes encryption a bad choice for passwords. Instead, passwords should be hashed.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (CRC32)

The use of CRC32 for password hashing is insecure. CRC32 is designed for error-checking and not for security purposes, making it vulnerable to intentional data tampering.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (MD5)

Using a weak hashing library like MD5 for passwords increases the risk of data breaches. MD5 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of weak hashing library on a password (SHA-1)

Using a weak hashing library like SHA-1 for passwords increases the risk of data breaches. SHA-1 is vulnerable to collision attacks, where two different inputs can produce the same hash value, compromising data integrity and security.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Usage of inappropriate hashing algorithm on a password (SHA-2)

SHA-256, SHA-384, and SHA-512 are strong general-purpose hash algorithms but are not suitable for password hashing. They lack a built-in work factor, making them fast to brute-force and vulnerable to rainbow table attacks when used for passwords.

[CWE-326](https://cwe.mitre.org/data/definitions/326.html)

[A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)  
[A04:2025](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

High

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
