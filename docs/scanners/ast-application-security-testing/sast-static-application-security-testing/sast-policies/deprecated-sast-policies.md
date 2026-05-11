# Deprecated SAST policies | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/deprecated-sast-policies

---

# Deprecated SAST policies

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/deprecated-sast-policies.md "Edit this page")

Updated on Sep 25, 2024 • Published on Jun 28, 2024

* * *

These policies have been deprecated on the Cycode platform. No new instances will be created but we provide this list as a reference for any legacy violations.

## Swift [Copied!](#swift "Copy link to this section")

Policy Name

Description

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws

This iOS mobile application seems performing an insecure use of cryptography, because the implemented cryptographic process presents some security flaws. In detail, it was detected the usage of a cryptographic feature (i.e. CommonCrypto, Apple-Swift-Crypto, IDZSwiftCommonCrypto, RNCrypt, Arcane, SwiftyRSA, Swift-Sodium or CryptoSwift) having some critical parameter (crypto key, salt or IV) set insecurely (hardcoded, null or empty). An attacker could exploit this issue in order to retrieve the original value of the encrypted data. It is recommended to adopt only cryptographic features and algorithms offered by the iOS platform that are internationally recognized as strong. It is also fundamental to ensure that the encryption parameters (crypto key, salt and IV) are generate randomly using a cryptographically strong PRNG function (as the Apple method “SecRandomCopyBytes”). In addition, if it is needed to store an encryption parameter on device, a secure storage mechanism like the iOS KeyChain must be used.

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

A random number generator was detected which is **not** _guaranteed_ to be Cryptographically secure. If the source of entropy is used for security purposes (e.g. with other Cryptographic operations), make sure to use the `SecCopyRandomBytes` API explicitly.

## JavaScript [Copied!](#javascript "Copy link to this section")

Policy Name

Description

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `puppeteer` methods it can result in Server-Side Request Forgery vulnerabilities.

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `phantom` methods it can result in Server-Side Request Forgery vulnerabilities.

Server-Side Request Forgery (SSRF)

User controlled URL reached to `wkhtmltoimage` can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `puppeteer` methods it can result in Server-Side Request Forgery vulnerabilities.

Server-Side Request Forgery (SSRF)

User controlled URL in http client libraries can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

User controlled URL reached to `wkhtmltopdf` can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

User controlled URL reached to `wkhtmltoimage` can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `puppeteer` methods it can result in Server-Side Request Forgery vulnerabilities.

Server-Side Request Forgery (SSRF)

‘If unverified user data can reach the `phantom` methods it can result in Server-Side Request Forgery vulnerabilities.’

Server-Side Request Forgery (SSRF)

User controlled URL in http client libraries can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

User controlled URL reached to `wkhtmltopdf` can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `puppeteer` methods it can result in Server-Side Request Forgery vulnerabilities.

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `puppeteer` methods it can result in Server-Side Request Forgery vulnerabilities.

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `phantom` methods it can result in Server-Side Request Forgery vulnerabilities.

Server-Side Request Forgery (SSRF)

User controlled URL reached to `wkhtmltoimage` can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `puppeteer` methods it can result in Server-Side Request Forgery vulnerabilities.

Server-Side Request Forgery (SSRF)

User controlled URL in http client libraries can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

User controlled URL reached to `wkhtmltopdf` can result in Server Side Request Forgery (SSRF).

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `phantom` methods it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `phantom` methods it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `wkhtmltopdf` methods it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `puppeteer` methods it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

User-controllable argument $DATAVAL to $METHOD passed to Axios via internal handler $INNERFUNC. This could be a server-side request forgery. A user could call a restricted API or leak internal headers to an unauthorized party. Validate your user arguments against an allowlist of known URLs, or consider refactoring so that user-controlled data is not necessary.

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `wkhtmltopdf` it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `evaluate` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `setContent` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `evaluate` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `goto` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

The following request $REQUEST.$METHOD() was found to be crafted from user-input `\$REQ` which can lead to Server-Side Request Forgery (SSRF) vulnerabilities. It is recommended where possible to not allow user-input to craft the base request, but to be treated as part of the path or query parameter. When user-input is necessary to craft the request, it is recommeneded to follow OWASP best practices to prevent abuse.

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `compileScript` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `setContent` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `evaluate` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `evaluate` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `addInitScript` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `goto` method it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `wkhtmltoimage` it can result in Server-Side Request Forgery vulnerabilities

Server-Side Request Forgery (SSRF)

If unverified user data can reach the `phantom` page methods it can result in Server-Side Request Forgery vulnerabilities

Use of a Broken or Risky Cryptographic Algorithm

Algorithm is set to none for JWT token. This can nullify the integrity of JWT signature.

Use of a Broken or Risky Cryptographic Algorithm

MD5 is a a weak hash which is known to have collision. Use a strong hashing function.

Use of a Broken or Risky Cryptographic Algorithm

SHA1 is a a weak hash which is known to have collision. Use a strong hashing function.

Use of a Broken or Risky Cryptographic Algorithm

AES with ECB mode is deterministic in nature and not suitable for encrypting large amount of repetitive data.

Use of a Broken or Risky Cryptographic Algorithm

AES algorithms requires an initialization vector (IV). Providing no or null IV in some implementation results to a 0 IV. Use of a deterministic IV makes dictionary attacks easier.

Use of a Broken or Risky Cryptographic Algorithm

A weak or broken cryptographic algorithm was identified. Using these functions will introduce vulnerabilities or downgrade the security of your application.

Use of a Broken or Risky Cryptographic Algorithm

crypto.pseudoRandomBytes()/Math.random() is a cryptographically weak random number generator.

Use of a Broken or Risky Cryptographic Algorithm

Algorithm is set to none for JWT token. This can nullify the integrity of JWT signature.

Use of a Broken or Risky Cryptographic Algorithm

A weak or broken cryptographic algorithm was identified. Using these functions will introduce vulnerabilities or downgrade the security of your application.

Use of a Broken or Risky Cryptographic Algorithm

AES algorithms requires an initialization vector (IV). Providing no or null IV in some implementation results to a 0 IV. Use of a deterministic IV makes dictionary attacks easier.

Use of a Broken or Risky Cryptographic Algorithm

AES with ECB mode is deterministic in nature and not suitable for encrypting large amount of repetitive data.

Use of a Broken or Risky Cryptographic Algorithm

SHA1 is a a weak hash which is known to have collision. Use a strong hashing function.

Use of a Broken or Risky Cryptographic Algorithm

Algorithm is set to none for JWT token. This can nullify the integrity of JWT signature.

Use of a Broken or Risky Cryptographic Algorithm

The MD5 hashing algorithm is considered to be weak. If this is used in any sensitive operation such as password hashing, or is used to ensure data integrity (collision sensitive) then you should use a stronger hashing algorithm. For passwords, consider using `Argon2id`, `scrypt`, or `bcrypt`. For data integrity, consider using `SHA-256`

Use of a Broken or Risky Cryptographic Algorithm

The SHA1 hashing algorithm is considered to be weak. If this is used in any sensitive operation such as password hashing, or is used to ensure data integrity (collision sensitive) then you should use a stronger hashing algorithm. For passwords, consider using `Argon2id`, `scrypt`, or `bcrypt`. For data integrity, consider using `SHA-256`

Use of a Broken or Risky Cryptographic Algorithm

AES with ECB mode is deterministic in nature and not suitable for encrypting large amount of repetitive data.

Use of a Broken or Risky Cryptographic Algorithm

A weak or broken cryptographic algorithm was identified. Using these functions will introduce vulnerabilities or downgrade the security of your application.

Use of a Broken or Risky Cryptographic Algorithm

crypto.pseudoRandomBytes()/Math.random() is a cryptographically weak random number generator.

Use of a Broken or Risky Cryptographic Algorithm

Detected use of the ’none’ algorithm in a JWT token. The ’none’ algorithm assumes the integrity of the token has already been verified. This would allow a malicious actor to forge a JWT token that will automatically be verified. Do not explicitly use the ’none’ algorithm. Instead, use an algorithm such as ‘HS256’.

Use of a Broken or Risky Cryptographic Algorithm

Detected use of the ’none’ algorithm in a JWT token. The ’none’ algorithm assumes the integrity of the token has already been verified. This would allow a malicious actor to forge a JWT token that will automatically be verified. Do not explicitly use the ’none’ algorithm. Instead, use an algorithm such as ‘HS256’.

Use of a Broken or Risky Cryptographic Algorithm

It looks like MD5 is used as a password hash. MD5 is not considered a secure password hash because it can be cracked by an attacker in a short amount of time. Use a suitable password hashing function such as bcrypt. You can use the `bcrypt` node.js package.

Improper Certificate Validation

The Sequelize connection string indicates that TLS certificate vailidation of database server is disabled. This is equivalent to not having TLS. An attacker can present any invalid certificate and Sequelize will make database connection ignoring certificate errors. This setting make the connection susceptible to man in the middle (MITM) attacks. Not applicable to SQLite database.

Improper Certificate Validation

Setting ‘NODE\_TLS\_REJECT\_UNAUTHORIZED’ to 0 will allow node server to accept self signed certificates and is not a secure behaviour.

Improper Certificate Validation

The Sequelize connection string indicates that TLS certificate validation of database server is disabled. This is equivalent to not having TLS. An attacker can present any invalid certificate and Sequelize will make database connection ignoring certificate errors. This setting make the connectionsusceptible to man in the middle (MITM) attacks. Not applicable to SQLite database.

Improper Certificate Validation

Setting ‘NODE\_TLS\_REJECT\_UNAUTHORIZED’ to 0 will allow node server to accept self signed certificates and is not a secure behaviour.

Improper Input Validation

Using untrusted Host header for generating dynamic URLs can result in web cache and or password reset poisoning.

Improper Input Validation

Using untrusted Host header for generating dynamic URLs can result in web cache and or password reset poisoning.

Improper Input Validation

Depending on the context, using (user-controlled) request data directly in a MongoDB query can lead to a NoSQLi vulnerability.

Improper Input Validation

Using untrusted Host header for generating dynamic URLs can result in web cache and or password reset poisoning.

Use of Externally-Controlled Format String

Detected string concatenation with a non-literal variable in a util.format / console.log function. If an attacker injects a format specifier in the string, it will forge the log message. Try to use constant values for the format string.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.runInContext()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.runInNewContext()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.compileFunction()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Unrusted data in `sandbox` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm2` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm2` sandbox can result in context injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in templating engine’s compile() function can result in Remote Code Execution via server side template injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.runInNewContext()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm2` sandbox can result in context injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.runInContext()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Unrusted data in `sandbox` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.compileFunction()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm2` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in templating engine’s compile() function can result in Remote Code Execution via server side template injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.runInContext()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.runInNewContext()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in `vm.compileFunction()` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Unrusted data in `sandbox` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm2` can result in code injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input reaching `vm2` sandbox can result in context injection.

Improper Control of Generation of Code (‘Code Injection’)

Untrusted user input in templating engine’s compile() function can result in Remote Code Execution via server side template injection.

Improper Control of Generation of Code (‘Code Injection’)

Make sure that unverified user data can not reach `vm2`.

Improper Control of Generation of Code (‘Code Injection’)

Make sure that unverified user data can not reach `\$VM`.

Improper Control of Generation of Code (‘Code Injection’)

Make sure that unverified user data can not reach `sandbox`.

Improper Control of Generation of Code (‘Code Injection’)

The `vm` module enables compiling and running code within V8 Virtual Machine contexts. The `vm` module is not a security mechanism. Do not use it to run untrusted code. If code passed to `vm` functions is controlled by user input it could result in command injection. Do not let user input in `vm` functions.

Improper Control of Generation of Code (‘Code Injection’)

Potential arbitrary code execution, piped to eval

Improper Control of Generation of Code (‘Code Injection’)

Remote debugging protocol does not perform any authentication, so exposing it too widely can be a security risk.

Improper Control of Generation of Code (‘Code Injection’)

Make sure that unverified user data can not reach `vm2`.

Improper Control of Generation of Code (‘Code Injection’)

Make sure that unverified user data can not reach `vm2`.

Improper Control of Generation of Code (‘Code Injection’)

Remote debugging protocol does not perform any authentication, so exposing it too widely can be a security risk.

Improper Control of Generation of Code (‘Code Injection’)

Make sure that unverified user data can not reach vm.runInContext.

Improper Control of Generation of Code (‘Code Injection’)

Using non-static data to retrieve and run functions from the object is dangerous. If the data is user-controlled, it may allow executing arbitrary code.

Improper Control of Generation of Code (‘Code Injection’)

Potential arbitrary code execution, whatever is provided to `toFastProperties` is sent straight to eval()

Improper Control of Generation of Code (‘Code Injection’)

Make sure that unverified user data can not reach `sandbox`.

Improper Control of Generation of Code (‘Code Injection’)

Set “rejectUnauthorized” to false is a convenient way to resolve certificate error. But this method is unsafe because it disables the server certificate verification, making the Node app open to MITM attack. “rejectUnauthorized” option must be alway set to True (default value). With self -signed certificate or custom CA, use “ca” option to define Root Certificate. This rule checks TLS configuration only for Postgresql, MariaDB and MySQL. SQLite is not really concerned by TLS configuration. This rule could be extended for MSSQL, but the dialectOptions is specific for Tedious.

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Restriction of XML External Entity Reference

Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities.

Improper Restriction of XML External Entity Reference

User controlled data in XML parsers can result in XML External or Internal Entity (XXE) Processing vulnerabilities

Improper Restriction of XML External Entity Reference

Use of ‘ondoctype’ in ‘sax’ library detected. By default, ‘sax’ won’t do anything with custom DTD entity definitions. If you’re implementing a custom DTD entity definition, be sure not to introduce XML External Entity (XXE) vulnerabilities, or be absolutely sure that external entities received from a trusted source while processing XML.

Improper Restriction of XML External Entity Reference

Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities.

Improper Restriction of XML External Entity Reference

Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities.

Improper Restriction of XML External Entity Reference

User controlled data in XML parsers can result in XML External or Internal Entity (XXE) Processing vulnerabilities

Improper Restriction of XML External Entity Reference

Use of ‘ondoctype’ in ‘sax’ library detected. By default, ‘sax’ won’t do anything with custom DTD entity definitions. If you’re implementing a custom DTD entity definition, be sure not to introduce XML External Entity (XXE) vulnerabilities, or be absolutely sure that external entitiesreceived from a trusted source while processing XML.

Improper Restriction of XML External Entity Reference

Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities.

Improper Restriction of XML External Entity Reference

Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities.

Improper Restriction of XML External Entity Reference

User controlled data in XML parsers can result in XML External or Internal Entity (XXE) Processing vulnerabilities

Improper Restriction of XML External Entity Reference

Use of ‘ondoctype’ in ‘sax’ library detected. By default, ‘sax’ won’t do anything with custom DTD entity definitions. If you’re implementing a custom DTD entity definition, be sure not to introduce XML External Entity (XXE) vulnerabilities, or be absolutely sure that external entities received from a trusted source while processing XML.

Improper Restriction of XML External Entity Reference

Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities.

Improper Restriction of XML External Entity Reference

Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities

Improper Restriction of XML External Entity Reference

Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities.

Improper Restriction of XML External Entity Reference

Detected use of parseXml() function with the `noent` field set to `true`. This can lead to an XML External Entities (XXE) attack if untrusted data is passed into it.

Improper Restriction of XML External Entity Reference

The libxml library processes user-input with the `noent` attribute is set to `true` which can lead to being vulnerable to XML External Entities (XXE) type attacks. It is recommended to set `noent` to `false` when using this feature to ensure you are protected.

Improper Restriction of XML External Entity Reference

Xml Parser is used inside Request Event. Make sure that unverified user data can not reach the XML Parser, as it can result in XML External or Internal Entity (XXE) Processing vulnerabilities

Improper Restriction of XML External Entity Reference

Use of ‘ondoctype’ in ‘sax’ library detected. By default, ‘sax’ won’t do anything with custom DTD entity definitions. If you’re implementing a custom DTD entity definition, be sure not to introduce XML External Entity (XXE) vulnerabilities, or be absolutely sure that external entities received from a trusted source while processing XML.

Improper Restriction of XML External Entity Reference

If unverified user data can reach the XML Parser it can result in XML External or Internal Entity (XXE) Processing vulnerabilities

Improper Restriction of XML External Entity Reference

If unverified user data can reach the XML Parser it can result in XML External or Internal Entity (XXE) Processing vulnerabilities

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Path constructed with user input can result in Path Traversal. Ensure that user input does not reach `join()` or `resolve()`.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction using adm-zip can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure TAR archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction using adm-zip can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

‘Path constructed with user input can result in Path Traversal. Ensure that user input does not reach `join()` or `resolve()`. '

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure TAR archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Path constructed with user input can result in Path Traversal. Ensure that user input does not reach `join()` or `resolve()`.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure ZIP archive extraction using adm-zip can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Insecure TAR archive extraction can result in arbitrary path over write and can result in code injection.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Possible writing outside of the destination, make sure that the target path is nested in the intended destination

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Detected that function argument `\$ARG` has entered the fs module. An attacker could potentially control the location of this file, to include going backwards in the directory with ‘../’. To address this, ensure that user-controlled variables in file paths are validated.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Detected possible user input going into a `path.join` or `path.resolve` function. This could possibly lead to a path traversal vulnerability, where the attacker can access arbitrary files stored in the file system. Instead, be sure to sanitize or validate user input first.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Untrusted input concatinated with raw SQL query using knex raw() or whereRaw() functions can result in SQL Injection.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Untrusted input concatinated with raw SQL query can result in SQL Injection.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Untrusted input concatinated with raw SQL query using knex raw() or whereRaw() functions can result in SQL Injection.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Untrusted input concatinated with raw SQL query can result in SQL Injection.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Untrusted input concatenated with raw SQL query can result in SQL Injection.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as Sequelize which will protect your queries.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected SQL statement that is tainted by `\$EVENT` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `connection.query('SELECT \$1 from table', [userinput])`

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected SQL statement that is tainted by `\$EVENT` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `connection.query('SELECT \$1 from table', [userinput])`

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected SQL statement that is tainted by `\$EVENT` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `knex.raw('SELECT \$1 from table', [userinput])`

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a sequelize statement that is tainted by user-input. This could lead to SQL injection if the variable is user-controlled and is not properly sanitized. In order to prevent SQL injection, it is recommended to use parameterized queries or prepared statements.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Avoiding SQL string concatenation: untrusted input concatenated with raw SQL query can result in SQL Injection. Data replacement or data binding should be used. See [https://sequelize.org/master/manual/raw-queries.html](https://sequelize.org/master/manual/raw-queries.html)

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected SQL statement that is tainted by `\$REQ` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, it is recommended to use parameterized queries or prepared statements. An example of parameterized queries like so: `knex.raw('SELECT \$1 from table', [userinput])` can help prevent SQLi.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a `\$IMPORT` SQL statement that comes from a function argument. This could lead to SQL injection if the variable is user-controlled and is not properly sanitized. In order to prevent SQL injection, it is recommended to use parameterized queries or prepared statements.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected string concatenation with a non-literal variable in a `mssql` JS SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like \`

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

User controlled data in ‘shelljs.exec()’ can result in Remote OS Command Execution.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

User controlled data in ‘child\_process.exec()’ can result in Remote OS Command Execution.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

User controlled data in ‘shelljs.exec()’ can result in Remote OS Command Execution.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

User controlled data in ‘child\_process.exec()’ can result in Remote OS Command Execution.

Improper Neutralization of Special Elements in Data Query Logic

Untrusted user input in MongoDB $where operator can result in NoSQL JavaScript Injection.

Improper Neutralization of Special Elements in Data Query Logic

Untrusted user input in findOne() function can result in NoSQL Injection.

Improper Neutralization of Special Elements in Data Query Logic

Untrusted user input in findOne() function can result in NoSQL Injection.

Improper Neutralization of Special Elements in Data Query Logic

Untrusted user input in MongoDB $where operator can result in NoSQL JavaScript Injection.

Improper Neutralization of Special Elements in Data Query Logic

Untrusted user input in MongoDB $where operator can result in NoSQL JavaScript Injection.

Improper Neutralization of Special Elements in Data Query Logic

Untrusted user input in findOne() function can result in NoSQL Injection.

Improper Neutralization of Special Elements in Data Query Logic

Detected DynamoDB query params that are tainted by `\$EVENT` object. This could lead to NoSQL injection if the variable is user-controlled and not properly sanitized. Explicitly assign query params instead of passing data from `\$EVENT` directly to DynamoDB client.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Untrusted User Input in Response will result in Reflected Cross Site Scripting Vulnerability.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Handlebars SafeString will not escape the data passed through it. Untrusted user input passing through SafeString can cause XSS.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Handlebars SafeString will not escape the data passed through it. Untrusted user input passing through SafeString can cause XSS.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Markup escaping disabled. This can be used with some template engines to escapedisabling of HTML entities, which can lead to XSS attacks.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The application was found calling `dangerouslySetInnerHTML` which may lead to Cross SiteScripting (XSS). By default, React components will encode the data properly before rendering.Calling `dangerouslySetInnerHTML` disables this encoding and allows raw markupand JavaScript to be executed.XSS is an attack which exploits a web application or system to treatuser input as markup or script code. It is important to encode the data, depending on thespecific context it is used in. There are at least six context types:- Inside HTML tags `context 1`\- Inside attributes: \`\`- Inside event attributes `button`\- Inside script blocks: `var x = "context 4"`\- Unsafe element HTML assignment: `element.innerHTML = "context 5"`\- Inside URLs: `link`Script blocks alone have multiple ways they need to be encoded. Extra care must be taken ifuser inputis ever output inside of script tags.User input that is displayed within the application must be encoded, sanitized or validatedto ensure it cannot be treated as HTML or executed as Javascript code. Care must also betakento not mix server-side templating with client-side templating, as the server-side templatingwillnot encode things like {{ 7\*7 }} which may execute client-side templating features.It is _NOT_ advised to encode user input prior to inserting into a data store. The data willneed to beencoded depending on context of where it is output. It is much safer to force the displayingsystem tohandle the encoding and not attempt to guess how it should be encoded.Remove the call to `dangerouslySetInnerHTML` or ensure that the data used in this call doesnot come from user-supplied input.For more information on dangerously setting inner HTML see:- [https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

This application is using a vulnerable method `Handlebars.SafeString(...)`.Handlebars SafeString method does not escape the data passed through it. Untrusted user input passing through SafeString method can make the application vulnerable to Cross-Site Scripting (XSS) attacks.XSS attacks are a type of security breach that occurs when an attacker manages to inject malicious scripts into web pages viewed by other users. These scripts can then execute in the context of the victim’s session, allowing the attacker to bypass access controls and potentially access sensitive information or perform actions on behalf of the user. It is important to encode the data depending on the specific context it is used in. Consider using the `Handlebars.escapeExpression` method to escape user input while constructing SafeString to avoid potential security concerns. Following is a secure code example. var returnObj = new Handlebars.SafeString(“Handlebars safe string” + Handlebars.escapeExpression(req.query.message)) res.send(returnObj.string)

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

This application accepts user input directly from the client side without validation. This could lead to Cross Site Scripting (XSS) if the input contains malicious script code and the application server does not properly escape or sanitize the output. Consider encoding input data before sending it to the client side. // safe method of sending user input data router.get(’/safe/1’, (req, res) => { var name = encodeURI(req.query.name); res.send(name);}) XSS is an attack that exploits a web application or system to treat user input as markup or script code. It is important to encode the data depending on the specific context in which it is used.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Handlebars SafeString will not escape the data passed through it. Untrusted user input passing through SafeString can cause XSS.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

DOMPurify.sanitize() was called without using RETURN\_DOM or RETURN\_DOM\_FRAGMENT. This is prone to mutation XSS, which could possibly bypass existing XSS filters. Adding one of these options will harden against potential future DOMPurify exploits.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Untrusted User Input in Response will result in Reflected Cross Site Scripting Vulnerability.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Handlebars SafeString will not escape the data passed through it. Untrusted user input passing through SafeString can cause XSS.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Handlebars SafeString will not escape the data passed through it. Untrusted user input passing through SafeString can cause XSS.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Untrusted user input in rendering reactHTMLParser can lead to an XSS

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a call to `\$FUNC()` in an attempt to HTML escape the string `\$STR`. Manually sanitizing input through a manually built list can be circumvented in many situations, and it’s better to use a well known sanitization library such as `sanitize-html` or `DOMPurify`.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Overwriting `transformLinkUri` or `transformImageUri` to something insecure, or turning `allowDangerousHtml` on, or turning `escapeHtml` off, will open the code up to XSS vectors.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

$sceDelegateProvider allowlisting can introduce security issues if wildcards are used.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsUrl can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Use of angular.element can lead to XSS if user-input is treated as part of the HTML element within `\$SINK`. It is recommended to contextually output encode user-input, before inserting into `\$SINK`. If the HTML needs to be preserved it is recommended to sanitize the input using $sce.getTrustedHTML or $sanitize.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsCss can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAs can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsJs can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $translateProvider.translations method can be dangerous if user input is provided to this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

$sceProvider is set to false. Disabling Strict Contextual escaping (SCE) in an AngularJS application could provide additional attack surface for XSS vulnerabilities.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Use of $window.location.href can lead to open-redirect if user input is used for redirection.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsHtml can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Use of angular.element can lead to XSS if user-input is treated as part of the HTML element within `\$SINK`. It is recommended to contextually output encode user-input, before inserting into `\$SINK`. If the HTML needs to be preserved it is recommended to sanitize the input using $sce.getTrustedHTML or $sanitize.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsResourceUrl can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected user input flowing into an HTML response. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected user input flowing into a manually constructed HTML string. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. To be sure this is safe, check that the HTML is rendered safely. Otherwise, use templates which will safely render HTML instead.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a `\$EL.innerHTML` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a HTML string may result in XSS

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in methods like `innerHTML`, `outerHTML` or `document.write` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a HTML string may result in XSS

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected possible DOM-based XSS. This occurs because a portion of the URL is being used to construct an element added directly to the page. For example, a malicious actor could send someone a link like this: [http://www.some.site/page.html?default=alert(document.cookie)](http://www.some.site/page.html?default=alert%28document.cookie%29) which would add the script to the page. Consider allowlisting appropriate values or using an approach which does not involve the URL.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a variable used in an anchor tag with the ‘href’ attribute. A malicious actor may be able to input the ‘javascript:’ URI, which could cause cross-site scripting (XSS). It is recommended to disallow ‘javascript:’ URIs within your application.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detection of dangerouslySetInnerHTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes from user-provided input. If you have to use dangerouslySetInnerHTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detection of $HTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes from user-provided input. If you have to use $HTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detection of $HTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes from user-provided input. If you have to use $HTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as Sequelize which will protect your queries.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User data flows into the host portion of this manually-constructed HTML. This can introduce a Cross-Site-Scripting (XSS) vulnerability if this comes from user-provided input. Consider using a sanitization library such as DOMPurify to sanitize the HTML within.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a jQuery’s `.\$METHOD(...)` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

JQuery’s `html` function is susceptible to Cross Site Scripting (XSS) attacks. If you’re just passing text, consider `text` instead. Otherwise, use a function that escapes HTML such as edX’s `HtmlUtils.setHtml()`.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a `\$(...)` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Cannot determine what ‘$UNK’ is and it is used with a ’’ tag. This could be susceptible to cross-site scripting (XSS). Ensure ‘$UNK’ is not externally controlled, or sanitize this data.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a `createNodesFromMarkup` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

If user input reaches `HoverProvider` while `supportHml` is set to `true` it may introduce an XSS vulnerability. Do not produce HTML for hovers with dynamically generated input.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected directly writing to a Response object from user-defined input. This bypasses any HTML escaping and may expose your application to a Cross-Site-scripting (XSS) vulnerability. Instead, use ‘resp.render()’ to render safely escaped HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used in a script tag. Although template variables are HTML escaped, HTML escaping does not always prevent cross-site scripting (XSS) attacks when used directly in JavaScript. If you need this data on the rendered page, consider placing it in the HTML portion (outside of a script tag). Alternatively, use a JavaScript-specific encoder, such as the one available in OWASP ESAPI.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used as the ‘src’ in a script tag. Although template variables are HTML escaped, HTML escaping does not always prevent malicious URLs from being injected and could results in a cross-site scripting (XSS) vulnerability. Prefer not to dynamically generate the ‘src’ attribute and use static URLs instead. If you must do this, carefully check URLs against an allowlist and be sure to URL-encode the result.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used in a script tag. Although template variables are HTML escaped, HTML escaping does not always prevent cross-site scripting (XSS) attacks when used directly in JavaScript. If you need this data on the rendered page, consider placing it in the HTML portion (outside of a script tag). Alternatively, use a JavaScript-specific encoder, such as the one available in OWASP ESAPI.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The Mustache escape function is being overwritten. This could bypass HTML escaping safety measures built into the rendering engine, exposing your application to cross-site scripting (XSS) vulnerabilities. If you need unescaped HTML, use the triple brace operator in your template: ‘{{{ … }}}’.

Improper Authentication

Found an initialization of the Intercom Messenger that identifies a User, but does not specify a `user_hash`.This configuration allows users to impersonate one another. See the Intercom Identity Verification docs for more context [https://www.intercom.com/help/en/articles/183-set-up-identity-verification-for-web-and-mobile](https://www.intercom.com/help/en/articles/183-set-up-identity-verification-for-web-and-mobile)

Deserialization of Untrusted Data

User controlled data in ‘yaml.load()’ function can result in Remote Code Injection.

Deserialization of Untrusted Data

Found an insecure gRPC connection. This creates a connection without encryption to a gRPC client/server. A malicious attacker could tamper with the gRPC message, which could compromise the machine.

Deserialization of Untrusted Data

User controlled data in ‘unserialize()’ or ‘deserialize()’ function can result in Object Injection or Remote Code Injection.

Deserialization of Untrusted Data

User controlled data in ‘unserialize()’ or ‘deserialize()’ function can result in Object Injection or Remote Code Injection.

Deserialization of Untrusted Data

User controlled data in ‘yaml.load()’ function can result in Remote Code Injection.

Deserialization of Untrusted Data

User controlled data in ‘unserialize()’ or ‘deserialize()’ function can result in Object Injection or Remote Code Injection.

Deserialization of Untrusted Data

User controlled data in ‘unserialize()’ or ‘deserialize()’ function can result in Object Injection or Remote Code Injection.

Deserialization of Untrusted Data

Found an insecure gRPC connection. This creates a connection without encryption to a gRPC client/server. A malicious attacker could tamper with the gRPC message, which could compromise the machine.

Deserialization of Untrusted Data

User controlled data in ‘yaml.load()’ function can result in Remote Code Injection.

Deserialization of Untrusted Data

Found an insecure gRPC connection. This creates a connection without encryption to a gRPC client/server. A malicious attacker could tamper with the gRPC message, which could compromise the machine.

Deserialization of Untrusted Data

User controlled data in ‘unserialize()’ or ‘deserialize()’ function can result in Object Injection or Remote Code Injection.

Deserialization of Untrusted Data

User controlled data in ‘unserialize()’ or ‘deserialize()’ function can result in Object Injection or Remote Code Injection.

Deserialization of Untrusted Data

Found an insecure gRPC connection. This creates a connection without encryption to a gRPC client/server. A malicious attacker could tamper with the gRPC message, which could compromise the machine.

Deserialization of Untrusted Data

The following function call $SER.$FUNC accepts user controlled data which can result in Remote Code Execution (RCE) through Object Deserialization. It is recommended to use secure data processing alternatives such as JSON.parse() and Buffer.from().

Exposure of Sensitive Information to an Unauthorized Actor

Missing ’noopener’ on an anchor tag where target=’\_blank’. This could introducea reverse tabnabbing vulnerability. Include ’noopener’ when using target=’\_blank’.

URL Redirection to Untrusted Site (‘Open Redirect’)

Untrusted user input in redirect() can result in Open Redirect vulnerability.

URL Redirection to Untrusted Site (‘Open Redirect’)

Untrusted user input in response header(‘Location’) can result in Open Redirect vulnerability.

URL Redirection to Untrusted Site (‘Open Redirect’)

Untrusted user input in redirect() can result in Open Redirect vulnerability.

URL Redirection to Untrusted Site (‘Open Redirect’)

Untrusted user input in response header(‘Location’) can result in Open Redirect vulnerability.

URL Redirection to Untrusted Site (‘Open Redirect’)

Depending on the context, user control data in `Object.assign` can cause web response to include data that it should not have or can lead to a mass assignment vulnerability.

URL Redirection to Untrusted Site (‘Open Redirect’)

The application accepts potentially user-controlled input `\$PROP` which can control the location of the current window context. This can lead two types of vulnerabilities open-redirection and Cross-Site-Scripting (XSS) with JavaScript URIs. It is recommended to validate user-controllable input before allowing it to control the redirection.

URL Redirection to Untrusted Site (‘Open Redirect’)

The application accepts potentially user-controlled input `\$PROP` which can control the location of the current window context. This can lead two types of vulnerabilities open-redirection and Cross-Site-Scripting (XSS) with JavaScript URIs. It is recommended to validate user-controllable input before allowing it to control the redirection.

URL Redirection to Untrusted Site (‘Open Redirect’)

The application redirects to a URL specified by user-supplied input `\$REQ` that is not validated. This could redirect users to malicious locations. Consider using an allow-list approach to validate URLs, or warn users they are being redirected to a third-party website.

URL Redirection to Untrusted Site (‘Open Redirect’)

It looks like ‘$UNK’ is read from user input and it is used to as a redirect. Ensure ‘$UNK’ is not externally controlled, otherwise this is an open redirect.

Cleartext Transmission of Sensitive Information

The Sequelize connection string indicates that database server does not use TLS. Non TLS connections are susceptible to man in the middle (MITM) attacks.

Cleartext Transmission of Sensitive Information

Application can load content over HTTP and that makes the app vulnerable to Man in the middle attacks.

Cleartext Transmission of Sensitive Information

‘The Sequelize connection string indicates that database server does not use TLS. Non TLS connections are susceptible to man in the middle (MITM) attacks.’

Cleartext Transmission of Sensitive Information

Application can load content over HTTP and that makes the app vulnerable to Man in the middle attacks.

Cleartext Transmission of Sensitive Information

Application can load content over HTTP and that makes the app vulnerable to Man in the middle attacks.

Cleartext Transmission of Sensitive Information

Unencrypted request over HTTP detected.

Cleartext Transmission of Sensitive Information

Checks for creation of telnet servers or attempts to connect through telnet. This is insecure as the telnet protocol supports no encryption, and data passes through unencrypted.

Cleartext Transmission of Sensitive Information

Checks for setting the environment variable NODE\_TLS\_REJECT\_UNAUTHORIZED to 0, which disables TLS verification. This should only be used for debugging purposes. Setting the option rejectUnauthorized to false bypasses verification against the list of trusted CAs, which also leads to insecure transport. These options lead to vulnerability to MTM attacks, and should not be used.

Cleartext Transmission of Sensitive Information

Checks for requests sent to http:// URLs. This is dangerous as the server is attempting to connect to a website that does not encrypt traffic with TLS. Instead, only send requests to https:// URLs.

Cleartext Transmission of Sensitive Information

Detects creations of $HTTPS servers from option objects that don’t disallow SSL v2, SSL v3, and TLS v1. These protocols are deprecated due to POODLE, man in the middle attacks, and other vulnerabilities.

Cleartext Transmission of Sensitive Information

Detects direct creations of $HTTPS servers that don’t disallow SSL v2, SSL v3, and TLS v1. These protocols are deprecated due to POODLE, man in the middle attacks, and other vulnerabilities.

Cleartext Transmission of Sensitive Information

Checks for requests to http (unencrypted) sites using some of node js’s most popular REST/HTTP libraries, including node-rest-client, axios, and got.

Cleartext Transmission of Sensitive Information

Checks for lack of usage of the “secure: true” option when sending ftp requests through the nodejs ftp module. This leads to unencrypted traffic being sent to the ftp server. There are other options such as “implicit” that still does not encrypt all traffic. ftp is the most utilized npm ftp module.

Cleartext Transmission of Sensitive Information

Checks for any usage of http servers instead of https servers. Encourages the usage of https protocol instead of http, which does not have TLS and is therefore unencrypted. Using http can lead to man-in-the-middle attacks in which the attacker is able to read sensitive information.

Cleartext Transmission of Sensitive Information

TLS1.0 and TLS1.1 are deprecated and should not be used anymore. By default, NodeJS used TLSv1.2. So, TLS min version must not be downgrade to TLS1.0 or TLS1.1. Enforce TLS1.3 is highly recommended This rule checks TLS configuration only for PostgreSQL, MariaDB and MySQL. SQLite is not really concerned by TLS configuration. This rule could be extended for MSSQL, but the dialectOptions is specific for Tedious.

Sensitive Cookie Without ‘HttpOnly’ Flag

Session middleware settings: `httpOnly` is explicitly set to false. It ensures that sensitive cookies cannot be accessed by client side JavaScript and helps to protect against cross-site scripting attacks.

Sensitive Cookie Without ‘HttpOnly’ Flag

‘Session middleware settings: `httpOnly` is explicitly set to false. It ensures that sensitive cookies cannot be accessed by client side JavaScript and helps to protect against cross-site scripting attacks.’

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

Default session middleware settings: `secure` not set. It ensures the browser only sends the cookie over HTTPS.

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

‘Default session middleware settings: `secure` not set. It ensures the browser only sends the cookie over HTTPS.’

Reliance on Untrusted Inputs in a Security Decision

User controlled data is used for application business logic decision making. This expose protected data or functionality.

Reliance on Untrusted Inputs in a Security Decision

User controlled data is used for application business logic decision making. This expose protected data or functionality.

Reliance on Untrusted Inputs in a Security Decision

User controlled data is used for application business logic decision making. This expose protected data or functionality.

Uncontrolled Resource Consumption

POST Request to Express Body Parser ‘bodyParser()’ can create Temporary files and consume space.

Uncontrolled Resource Consumption

User controlled data in RegExp() can make the application vulnerable to layer 7 DoS.

Uncontrolled Resource Consumption

Layer7 Denial of Service. Looping over user controlled objects can result in DoS.

Uncontrolled Resource Consumption

Layer7 Denial of Service. Looping over user controlled objects can result in DoS.

Uncontrolled Resource Consumption

User controlled data in RegExp() can make the application vulnerable to layer 7 DoS.

Uncontrolled Resource Consumption

POST Request to Express Body Parser ‘bodyParser()’ can create Temporary files and consume space.

Uncontrolled Resource Consumption

POST Request to Express Body Parser ‘bodyParser()’ can create Temporary files and consume space.

Uncontrolled Resource Consumption

User controlled data in RegExp() can make the application vulnerable to layer 7 DoS.

Uncontrolled Resource Consumption

Layer7 Denial of Service. Looping over user controlled objects can result in DoS.

Uncontrolled Resource Consumption

By setting `allErrors: true` in `Ajv` library, all error objects will be allocated without limit. This allows the attacker to produce a huge number of errors which can lead to denial of service. Do not use `allErrors: true` in production.

Cross-Site Request Forgery (CSRF)

Detected use of express.csrf() middleware before express.methodOverride(). This canallow GET requests (which are not checked by csrf) to turn into POST requests later.

Cross-Site Request Forgery (CSRF)

Detected use of express.csrf() middleware before express.methodOverride(). This can allow GET requests (which are not checked by csrf) to turn into POST requests later.

Cross-Site Request Forgery (CSRF)

A CSRF middleware was not detected in your express application. Ensure you are either using one such as `csurf` or `csrf` (see rule references) and/or you are properly doing CSRF validation in your routes with a token or cookies.

Origin Validation Error

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Origin Validation Error

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Origin Validation Error

Disabling webSecurity will disable the same-origin policy and allows the execution of insecure code from any domain.

Origin Validation Error

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Origin Validation Error

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Origin Validation Error

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Origin Validation Error

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Origin Validation Error

Disabling webSecurity will disable the same-origin policy and allows the execution of insecure code from any domain.

Origin Validation Error

By letting user input control CORS parameters, there is a risk that software does not properly verify that the source of data or communication is valid. Use literal values for CORS settings.

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

Depending on the context, generating weak random numbers may expose cryptographic functions,which rely on these numbers, to be exploitable. When generating numbers for sensitive valuessuch as tokens, nonces, and cryptographic keys, it is recommended that the `randomBytes` methodof the `crypto` module be used instead of `pseudoRandomBytes`.Example using `randomBytes`:// Generate 256 bytes of random dataconst randomBytes = crypto.randomBytes(256);For more information on JavaScript Cryptography see:https://nodejs.org/api/crypto.html#cryptorandombytessize-callback

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

rand-token defaults to using `crypto.pseudoRandomBytes`, insecure RNG

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

Detected usage of crypto.pseudoRandomBytes, which does not produce secure random numbers.

Improper Neutralization of Data within XPath Expressions (‘XPath Injection’)

User controlled data in xpath.parse() can result in XPATH injection vulnerability.

Improper Neutralization of Data within XPath Expressions (‘XPath Injection’)

User controlled data in xpath.parse() can result in XPATH injection vulnerability.

Insufficiently Protected Credentials

The object is passed strictly to jose.JWT.sign(…). Make sure that sensitive information is not exposed through JWT token payload.

Insufficiently Protected Credentials

No token revoking configured for `express-jwt`. A leaked token could still be used and unable to be revoked. Consider using function as the `isRevoked` option.

Insufficiently Protected Credentials

Consider changing the default session cookie name. An attacker can use it to fingerprint the server and target attacks accordingly.

Insufficiently Protected Credentials

Default session middleware use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.

Insufficiently Protected Credentials

Default session middleware use it to compare against the request path. If this and domain match, then send the cookie in the request.

Insufficiently Protected Credentials

The object is passed strictly to jose.JWT.sign(…). Make sure that sensitive information is not exposed through JWT token payload.

Insufficiently Protected Credentials

No token revoking configured for `express-jwt`. A leaked token could still be used and unable to be revoked. Consider using function as the `isRevoked` option.

Insufficiently Protected Credentials

‘Default session middleware use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.’

Insufficiently Protected Credentials

‘Default session middleware use it to compare against the request path. If this and domain match, then send the cookie in the request.’

Insufficiently Protected Credentials

Consider changing the default session cookie name. An attacker can use it to fingerprint the server and target attacks accordingly.

Insufficiently Protected Credentials

Consider changing the default session cookie name. An attacker can use it to fingerprint the server and target attacks accordingly.

Insufficiently Protected Credentials

Default session middleware settings: `secure` not set. It ensures the browser only sends the cookie over HTTPS.

Insufficiently Protected Credentials

Default session middleware settings: `sameSite` attribute is not configured to strict or lax. These configurations provides protection against Cross Site Request Forgery attacks.

Insufficiently Protected Credentials

Default session middleware settings: `httpOnly` not set. It ensures the sensitive cookies cannot be accessed by client side JavaScript and helps to protect against cross-site scripting attacks.

Insufficiently Protected Credentials

Default session middleware use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.

Insufficiently Protected Credentials

Default session middleware use it to compare against the request path. If this and domain match, then send the cookie in the request.

Insufficiently Protected Credentials

Default session middleware settings: `expires` not set. Use it to set expiration date for persistent cookies.

Insufficiently Protected Credentials

Password is exposed through JWT token payload. This is not encrypted and the password could be compromised. Do not store passwords in JWT tokens.

Insufficiently Protected Credentials

The object is passed strictly to jose.JWT.sign(…). Make sure that sensitive information is not exposed through JWT token payload.

Insufficiently Protected Credentials

No token revoking configured for `express-jwt`. A leaked token could still be used and unable to be revoked. Consider using function as the `isRevoked` option.

Insufficiently Protected Credentials

Don’t use the default session cookie name Using the default session cookie name can open your app to attacks. The security issue posed is similar to X-Powered-By: a potential attacker can use it to fingerprint the server and target attacks accordingly.

Insufficiently Protected Credentials

Default session middleware settings: `secure` not set. It ensures the browser only sends the cookie over HTTPS.

Insufficiently Protected Credentials

Default session middleware settings: `httpOnly` not set. It ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.

Insufficiently Protected Credentials

Default session middleware use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.

Insufficiently Protected Credentials

Default session middleware use it to compare against the request path. If this and domain match, then send the cookie in the request.

Insufficiently Protected Credentials

Default session middleware settings: `expires` not set. Use it to set expiration date for persistent cookies.

Insufficiently Protected Credentials

Bracket object notation with user input is present, this might allow an attacker to access all properties of the object and even it’s prototype. Use literal values for object properties.

Insufficiently Protected Credentials

No token revoking configured for `express-jwt`. A leaked token could still be used and unable to be revoked. Consider using function as the `isRevoked` option.

Insufficiently Protected Credentials

The object is passed strictly to jsonwebtoken.sign(…) Make sure that sensitive information is not exposed through JWT token payload.

Insufficiently Protected Credentials

The object is passed strictly to jose.JWT.sign(…) Make sure that sensitive information is not exposed through JWT token payload.

Selection of Less-Secure Algorithm During Negotiation (‘Algorithm Downgrade’)

The Sequelize connection string indicates that an older version of TLS is in use. TLS1.0 and TLS1.1 are deprecated and should be used. By default, Sequelize use TLSv1.2 but it’s recommended to use TLS1.3. Not applicable to SQLite database.

Selection of Less-Secure Algorithm During Negotiation (‘Algorithm Downgrade’)

‘The Sequelize connection string indicates that an older version of TLS is in use. TLS1.0 and TLS1.1 are deprecated and should be used. By default, Sequelize use TLSv1.2 but it’’s recommended to use TLS1.3. Not applicable to SQLite database.’

Observable Timing Discrepancy

String comparisons using ‘===’, ‘!==’, ‘!=’ and ‘==’ is vulnerable to timing attacks. A timing attack allows the attacker to learn potentially sensitive information by, for example, measuring how long it takes for the application to respond to a request. More info: [https://nodejs.org/en/learn/getting-started/security-best-practices#information-exposure-through-timing-attacks-cwe-208](https://nodejs.org/en/learn/getting-started/security-best-practices#information-exposure-through-timing-attacks-cwe-208)

Observable Timing Discrepancy

‘String comparisons using ‘’===’’, ‘’!==’’, ‘’!=’’ and ‘’==’’ is vulnerable to timing attacks. More info: [https://snyk.io/blog/node-js-timing-attack-ccc-ctf/'](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/%27)

Observable Timing Discrepancy

String comparisons using ‘===’, ‘!==’, ‘!=’ and ‘==’ is vulnerable to timing attacks. More info: [https://snyk.io/blog/node-js-timing-attack-ccc-ctf/](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/)

Missing Validation of OpenSSL Certificate

SSL Certificate verification for node-curl is disabled.

Missing Validation of OpenSSL Certificate

SSL Certificate verification for node-curl is disabled.

Missing Validation of OpenSSL Certificate

SSL Certificate verification for node-curl is disabled.

Incorrect Regular Expression

Ensure that the regex used to compare with user supplied input is safe from regular expression denial of service.

Incorrect Regular Expression

Ensure that the regex used to compare with user supplied input is safe from regular expression denial of service.

Improper Restriction of Operations within the Bounds of a Memory Buffer

Detected usage of noassert in Buffer API, which allows the offset the be beyond the end of the buffer. This could result in writing or reading beyond the end of the buffer.

Improper Restriction of Operations within the Bounds of a Memory Buffer

Detected usage of noassert in Buffer API, which allows the offset the be beyond the end of the buffer. This could result in writing or reading beyond the end of the buffer.

Improper Restriction of Operations within the Bounds of a Memory Buffer

Detected usage of noassert in Buffer API, which allows the offset the be beyond the end of the buffer. This could result in writing or reading beyond the end of the buffer.

Improper Restriction of Operations within the Bounds of a Memory Buffer

Detected usage of noassert in Buffer API, which allows the offset the be beyond the end of the buffer. This could result in writing or reading beyond the end of the buffer.

Improper Encoding or Escaping of Output

Markup escaping disabled. This can be used with some template engines to escape disabling of HTML entities, which can lead to XSS attacks.

Improper Encoding or Escaping of Output

Markup escaping disabled. This can be used with some template engines to escape disabling of HTML entities, which can lead to XSS attacks.

Improper Encoding or Escaping of Output

Markup escaping disabled. This can be used with some template engines to escape disabling of HTML entities, which can lead to XSS attacks.

Improper Encoding or Escaping of Output

Markup escaping disabled. This can be used with some template engines to escape disabling of HTML entities, which can lead to XSS attacks.

Improper Encoding or Escaping of Output

This template literal looks like HTML and has interpolated variables. These variables are not HTML-encoded by default. If the variables contain HTML tags, these may be interpreted by the browser, resulting in cross-site scripting (XSS).

Improper Encoding or Escaping of Output

`\$STR.replace` method will only replace the first occurrence when used with a string argument ($CHAR). If this method is used for escaping of dangerous data then there is a possibility for a bypass. Try to use sanitization library instead or use a Regex with a global flag.

Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)

Untrusted user input reaching `serialize-javascript` with `unsafe` attribute can cause Cross Site Scripting (XSS).

Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)

Disabling Escaping in Handlebars is not a secure behaviour. This can introduce XSS vulnerabilties.

Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)

This application is compiling strings with `Handlebars.compile` using an insecureoption of \`{noEvar out = Handlebars.compile(template)({res.send(out);

Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)

Untrusted user input reaching `serialize-javascript` with `unsafe` attribute can cause Cross Site Scripting (XSS).

Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)

Disabling Escaping in Handlebars is not a secure behaviour. This can introduce XSS vulnerabilities.

Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)

`serialize-javascript` used with `unsafe` parameter, this could be vulnerable to XSS.

Improper Restriction of Recursive Entity References in DTDs (‘XML Entity Expansion’)

User controlled data in XML Parsers can result in XML Internal Entity Processing vulnerabilities like in DoS.

Improper Restriction of Recursive Entity References in DTDs (‘XML Entity Expansion’)

User controlled data in XML Parsers can result in XML Internal Entity Processing vulnerabilities like in DoS.

Improper Restriction of Recursive Entity References in DTDs (‘XML Entity Expansion’)

User controlled data in XML Parsers can result in XML Internal Entity Processing vulnerabilities like in DoS.

Content Security Policy header is present

Content Security Policy header is present. More Information: [https://helmetjs.github.io/docs/csp/](https://helmetjs.github.io/docs/csp/)

Content Security Policy header is present

Content Security Policy header is present. More Information: [https://helmetjs.github.io/docs/csp/](https://helmetjs.github.io/docs/csp/)

X-Permitted-Cross-Domain-Policies header set to off

X-Permitted-Cross-Domain-Policies header set to off. More information: [https://helmetjs.github.io/docs/crossdomain/](https://helmetjs.github.io/docs/crossdomain/)

X-Permitted-Cross-Domain-Policies header set to off

X-Permitted-Cross-Domain-Policies header set to off. More information: [https://helmetjs.github.io/docs/crossdomain/](https://helmetjs.github.io/docs/crossdomain/)

Expect-CT header is present

Expect-CT header is present. More information: [https://helmetjs.github.io/docs/expect-ct/](https://helmetjs.github.io/docs/expect-ct/)

Expect-CT header is present

Expect-CT header is present. More information: [https://helmetjs.github.io/docs/expect-ct/](https://helmetjs.github.io/docs/expect-ct/)

Feature-Policy header is present

Feature-Policy header is present. More information: [https://helmetjs.github.io/docs/feature-policy/](https://helmetjs.github.io/docs/feature-policy/)

Feature-Policy header is present

Feature-Policy header is present. More information: [https://helmetjs.github.io/docs/feature-policy/](https://helmetjs.github.io/docs/feature-policy/)

X-Frame-Options header is present

X-Frame-Options header is present. More information: [https://helmetjs.github.io/docs/frameguard/](https://helmetjs.github.io/docs/frameguard/)

X-Frame-Options header is present

X-Frame-Options header is present. More information: [https://helmetjs.github.io/docs/frameguard/](https://helmetjs.github.io/docs/frameguard/)

X-DNS-Prefetch-Control header is present and DNS Prefetch Control is enabled

X-DNS-Prefetch-Control header is present and DNS Prefetch Control is enabled. More information: [https://helmetjs.github.io/docs/dns-prefetch-control/](https://helmetjs.github.io/docs/dns-prefetch-control/)

X-DNS-Prefetch-Control header is present and DNS Prefetch Control is enabled

X-DNS-Prefetch-Control header is present and DNS Prefetch Control is enabled. More information: [https://helmetjs.github.io/docs/dns-prefetch-control/](https://helmetjs.github.io/docs/dns-prefetch-control/)

Default X-Powered-By is removed or modified

Default X-Powered-By is removed or modified. More information: [https://helmetjs.github.io/docs/hide-powered-by/](https://helmetjs.github.io/docs/hide-powered-by/)

Default X-Powered-By is removed or modified

Default X-Powered-By is removed or modified. More information: [https://helmetjs.github.io/docs/hide-powered-by/](https://helmetjs.github.io/docs/hide-powered-by/)

HSTS header is present

HSTS header is present. More information: [https://helmetjs.github.io/docs/hsts/](https://helmetjs.github.io/docs/hsts/)

HSTS header is present

HSTS header is present. More information: [https://helmetjs.github.io/docs/hsts/](https://helmetjs.github.io/docs/hsts/)

X-Download-Options header is present

X-Download-Options header is present. More information: [https://helmetjs.github.io/docs/ienoopen/](https://helmetjs.github.io/docs/ienoopen/)

X-Download-Options header is present

X-Download-Options header is present. More information: [https://helmetjs.github.io/docs/ienoopen/](https://helmetjs.github.io/docs/ienoopen/)

Content-Type-Options header is present

Content-Type-Options header is present. More information: [https://helmetjs.github.io/docs/dont-sniff-mimetype/](https://helmetjs.github.io/docs/dont-sniff-mimetype/)

Content-Type-Options header is present

Content-Type-Options header is present. More information: [https://helmetjs.github.io/docs/dont-sniff-mimetype/](https://helmetjs.github.io/docs/dont-sniff-mimetype/)

Referrer-Policy header is present

Referrer-Policy header is present. More information: [https://helmetjs.github.io/docs/referrer-policy/](https://helmetjs.github.io/docs/referrer-policy/)

Referrer-Policy header is present

Referrer-Policy header is present. More information: [https://helmetjs.github.io/docs/referrer-policy/](https://helmetjs.github.io/docs/referrer-policy/)

X-XSS-Protection header is present

X-XSS-Protection header is present. More information: [https://helmetjs.github.io/docs/xss-filter/](https://helmetjs.github.io/docs/xss-filter/)

X-XSS-Protection header is present

X-XSS-Protection header is present. More information: [https://helmetjs.github.io/docs/xss-filter/](https://helmetjs.github.io/docs/xss-filter/)

This application has API rate limiting controls.

This application has API rate limiting controls.

This application has API rate limiting controls.

This application has API rate limiting controls.

This application has anti CSRF protection which prevents cross site request forgery attacks.

This application has anti CSRF protection which prevents cross site request forgery attacks.

Improper Neutralization of HTTP Headers for Scripting Syntax

Untrusted user input in response header will result in HTTP Header Injection or Response Splitting Attacks.

Improper Neutralization of HTTP Headers for Scripting Syntax

Untrusted user input in response header will result in HTTP Header Injection or Response Splitting Attacks.

Improper Neutralization of HTTP Headers for Scripting Syntax

Untrusted user input in response header will result in HTTP Header Injection or Response Splitting Attacks.

Sensitive Cookie with Improper SameSite Attribute

Default session middleware settings: `sameSite` attribute is not configured to strict or lax. These configurations provides protection against Cross Site Request Forgery attacks.

Sensitive Cookie with Improper SameSite Attribute

‘Default session middleware settings: `sameSite` attribute is not configured to strict or lax. These configurations provides protection against Cross Site Request Forgery attacks.’

Insufficient Session Expiration

Session middleware settings: `maxAge` not set. Use it to set expiration date for cookies.

Insufficient Session Expiration

‘Session middleware settings: `maxAge` not set. Use it to set expiration date for cookies.’

Protection Mechanism Failure

X-XSS-Protection header is set to 0. This will disable the browser’s XSS Filter.

Protection Mechanism Failure

X-XSS-Protection header is set to 0. This will disable the browser’s XSS Filter.

Protection Mechanism Failure

One or more Security Response header is explicitly disabled in Helmet.

Protection Mechanism Failure

Disabling context isolation can introduce Prototype Pollution vulnerabilities.

Protection Mechanism Failure

One or more Security Response header is explicitly disabled in Helmet.

Protection Mechanism Failure

X-XSS-Protection header is set to 0. This will disable the browser’s XSS Filter.

Protection Mechanism Failure

X-XSS-Protection header is set to 0. This will disable the browser’s XSS Filter.

Protection Mechanism Failure

Disabling context isolation can introduce Prototype Pollution vulnerabilities.

Protection Mechanism Failure

Disabling webSecurity will disable the same-origin policy and allows the execution of insecure code from any domain.

Protection Mechanism Failure

X-XSS-Protection header is set to 0. This will disable the browser’s XSS Filter.

Protection Mechanism Failure

X-XSS-Protection header is set to 0. This will disable the browser’s XSS Filter.

Protection Mechanism Failure

Disabling context isolation can introduce Prototype Pollution vulnerabilities.

Protection Mechanism Failure

One or more Security Response header is explicitly disabled in Helmet.

Relative Path Traversal

Untrusted user input in readFile()/readFileSync() can endup in Directory Traversal Attacks.

Relative Path Traversal

Untrusted user input in express render() function can result in arbitrary file read when hbs templating is used.

Relative Path Traversal

Untrusted user input in express render() function can result in arbitrary file read if hbs templating is used.

Relative Path Traversal

Untrusted user input in readFile()/readFileSync() can endup in Directory Traversal Attacks.

Relative Path Traversal

Untrusted user input in express render() function can result in arbitrary file read when hbs templating is used.

Relative Path Traversal

Untrusted user input in express render() function can result in arbitrary file read if hbs templating is used.

Relative Path Traversal

Untrusted user input in readFile()/readFileSync() can endup in Directory Traversal Attacks.

Generation of Error Message Containing Sensitive Information

Error messages with stack traces can expose sensitive information about the application.

Generation of Error Message Containing Sensitive Information

Error messages with stack traces may expose sensitive information about the application.

Generation of Error Message Containing Sensitive Information

Error messages with stack traces can expose sensitive information about the application.

Generation of Error Message Containing Sensitive Information

Error messages with stack traces may expose sensitive information about the application.

Generation of Error Message Containing Sensitive Information

Error messages with stack traces can expose sensitive information about the application.

Generation of Error Message Containing Sensitive Information

Error messages with stack traces may expose sensitive information about the application.

Use of Incorrectly-Resolved Name or Reference

Untrusted user input in `require()` function allows an attacker to load arbitrary code.

Use of Incorrectly-Resolved Name or Reference

Untrusted user input in `require()` function allows an attacker to load arbitrary code.

Use of Incorrectly-Resolved Name or Reference

Untrusted user input in `require()` function allows an attacker to load arbitrary code.

Use of Incorrectly-Resolved Name or Reference

If an attacker controls the x in require(x) then they can cause code to load that was not intended to run on the server.

Use of Incorrectly-Resolved Name or Reference

User controllable data `\$REQ` enters `\$RES.render(...)` this can lead to the loading of other HTML/templating pages that they may not be authorized to render. An attacker may attempt to use directory traversal techniques e.g. `../folder/index` to access other HTML pages on the file system. Where possible, do not allow users to define what should be loaded in $RES.render or use an allow list for the existing application.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

User controlled data in eval() or similar functions may result in Server Side Injection or Remote Code Injection

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

The application was found to dynamically import a module by calling `require` using anon-literal string. An adversary might be able to read the first line ofarbitrary files. If they had write access to the file system, they may also be able toexecute arbitrary code.To remediate this issue, use a hardcoded string literal when calling `require`. Never call itit with dynamically created variables or user-supplied data.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

User controlled data in eval() or similar functions may result in Server Side Injection or Remote Code Injection

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

User controlled data was found to enter a dynamic execution of JavaScript. This can lead to Remote Code Injection. Where possible do not dynamically execute user-input in functions such as eval(…).

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

The `eval()` function evaluates JavaScript code represented as a string. Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use `eval()`. Ensure evaluated content is not definable by external sources.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Detected use of dynamic execution of JavaScript which may come from user-input, which can lead to Cross-Site-Scripting (XSS). Where possible avoid including user-input in functions which dynamically execute user-input.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Detected the use of eval(). eval() can be dangerous if used to evaluate dynamic content. If this content can be input from outside the program, this may be a code injection vulnerability. Ensure evaluated content is not definable by external sources.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Found data from an Express or Next web request flowing to `eval`. If this data is user-controllable this can lead to execution of arbitrary system commands in the context of your application process. Avoid `eval` whenever possible.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Detected the use of require(variable). Calling require with a non-literal argument might allow an attacker to load and run arbitrary code, or access arbitrary files.

Least Privilege Violation

Blink’s expirimental features are enabled in this application. Some of the features may affect the security of the application.

Least Privilege Violation

Node integration exposes node.js APIs to the electron app and this can introduce remote code execution vulnerabilities to the application if the app is vulnerable to Cross Site Scripting (XSS).

Least Privilege Violation

Experimental features are not expected to be in production ready applications.

Least Privilege Violation

Blink’s expirimental features are enabled in this application. Some of the features may affect the security of the application.

Least Privilege Violation

Experimental features are not expected to be in production ready applications.

Least Privilege Violation

Node integration exposes node.js APIs to the electron app and this can introduce remote code execution vulnerabilities to the application if the app is vulnerable to Cross Site Scripting (XSS).

Least Privilege Violation

Blink’s experimental features are enabled in this application. Some of the features may affect the security of the application.

Least Privilege Violation

Node integration exposes node.js APIs to the electron app and this can introduce remote code execution vulnerabilities to the application if the app is vulnerable to Cross Site Scripting (XSS).

Least Privilege Violation

Experimental features are not expected to be in production ready applications.

External Control of File Name or Path

The application processes user-input, this is passed to res.sendFile which can allow an attacker to arbitrarily read files on the system through path traversal. It is recommended to perform input validation in addition to canonicalizing the path. This allows you to validate the path against the intended directory it should be accessing.

Use of Unmaintained Third Party Components

Detected usage of the `notevil` package, which is unmaintained and has vulnerabilities. Using any sort of `eval()` functionality can be very dangerous, but if you must, the `eval` package is an up to date alternative. Be sure that only trusted input reaches an `eval()` function.

Insufficient Verification of Data Authenticity

The target origin of the window.postMessage() API is set to “\*”. This could allow for information disclosure due to the possibility of any origin allowed to receive the message.

Insufficient Verification of Data Authenticity

No validation of origin is done by the addEventListener API. It may be possible to exploit this flaw to perform Cross Origin attacks such as Cross-Site Scripting(XSS).

Insufficient Verification of Data Authenticity

Detected the decoding of a JWT token without a verify step. JWT tokens must be verified before use, otherwise the token’s integrity is unknown. This means a malicious actor could forge a JWT token with any claims. Call ‘.verify()’ before using the token.

Allocation of Resources Without Limits or Throttling

The application was found calling the `new Buffer` constructor which has been deprecatedsince Node 8.By passing in a non-literal value, an adversary could allocate large amounts of memory.Other issues also exist with the `Buffer` // Work with bufFor more information on migrating to `Buffer.from()`/`Buffer.alloc()` see:- [https://nodejs.org/en/docs/guides/buffer-constructor-deprecation](https://nodejs.org/en/docs/guides/buffer-constructor-deprecation)

Use of Weak Hash

The MD5 hashing algorithm is considered cryptographically weak and vulnerable to collision attacks, where two different inputs generate the same output hash. When used for hashing sensitive data, attackers can exploit this weakness to generate collisions, allowing them to bypass security checks or masquerade malicious data as legitimate. This vulnerability is particularly critical in authentication mechanisms, digital signatures, SSL/TLS certificates, and data integrity checks.Rconst hash = crypto.createHash(‘sha256’).update(‘sensitive data’).digest(‘hex’);console.log(hash);

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Depending on the context, user control data in `Object.assign` can cause web response to include data that it should not have or can lead to a mass assignment vulnerability.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Possibility of prototype polluting assignment detected. By adding or modifying attributes of an object prototype, it is possible to create attributes that exist on every object, or replace critical attributes with malicious ones. This can be problematic if the software depends on existence or non-existence of certain attributes, or uses pre-defined attributes of object prototype (such as hasOwnProperty, toString or valueOf). Possible mitigations might be: freezing the object prototype, using an object without prototypes (via Object.create(null) ), blocking modifications of attributes that resolve to object prototype, using Map instead of object.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Possibility of prototype polluting function detected. By adding or modifying attributes of an object prototype, it is possible to create attributes that exist on every object, or replace critical attributes with malicious ones. This can be problematic if the software depends on existence or non-existence of certain attributes, or uses pre-defined attributes of object prototype (such as hasOwnProperty, toString or valueOf). Possible mitigations might be: freezing the object prototype, using an object without prototypes (via Object.create(null) ), blocking modifications of attributes that resolve to object prototype, using Map instead of object.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Detected string concatenation with a non-literal variable in a node-postgres JS SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `client.query('SELECT \$1 from table', [userinput])`

Inefficient Regular Expression Complexity

Ensure that the regex used to compare with user supplied input is safe from regular expression denial of service.

Inefficient Regular Expression Complexity

RegExp() called with a `\$ARG` function argument, this might allow an attacker to cause a Regular Expression Denial-of-Service (ReDoS) within your application as RegExP blocks the main thread. For this reason, it is recommended to use hardcoded regexes instead. If your regex is run on user-controlled input, consider performing input validation or use a regex checking/sanitization library such as [https://www.npmjs.com/package/recheck](https://www.npmjs.com/package/recheck) to verify that the regex does not appear vulnerable to ReDoS.

Express HTTP route $ROUTE will handle $METHOD requests

Express HTTP route $ROUTE will handle $METHOD requests

Application has anti CSRF protection

This application has anti CSRF protection which prevents cross site request forgery attacks.

Improper Neutralization of Special Elements Used in a Template Engine

User data from `\$REQ` is being compiled into the template, which can lead to a Server Side Template Injection (SSTI) vulnerability.

It looks like no matter how $CONDITION is evaluated, this expression returns $ANS

It looks like no matter how $CONDITION is evaluated, this expression returns $ANS. This is probably a copy-paste error.

Copying a prop into state in React – this is bad practice as all updates to it are ignored

Copying a prop into state in React – this is bad practice as all updates to it are ignored. Instead, read props directly in your component and avoid copying props into state.

Legacy component lifecycle was detected - $METHOD.

Legacy component lifecycle was detected - $METHOD.

It’s best practice to explicitly pass props to an HTML component rather than use the spread operator

It’s best practice to explicitly pass props to an HTML component rather than use the spread operator. The spread operator risks passing invalid HTML props to an HTML element, which can cause console warnings or worse, give malicious actors a way to inject unexpected attributes.

By declaring a styled component inside the render method of a react component, you are dynamically creating a new component on every render

By declaring a styled component inside the render method of a react component, you are dynamically creating a new component on every render. This means that React will have to discard and re-calculate that part of the DOM subtree on each subsequent render, instead of just calculating the difference of what changed between them. This leads to performance bottlenecks and unpredictable behavior.

findDOMNode is an escape hatch used to access the underlying DOM node

findDOMNode is an escape hatch used to access the underlying DOM node. In most cases, use of this escape hatch is discouraged because it pierces the component abstraction.

Use of Password Hash With Insufficient Computational Effort

Prefer Argon2id where possible. Per RFC9016, section 4 IETF recommends selecting Argon2id unless you can guarantee an adversary has no direct access to the computing environment.

User Interface (UI) Misrepresentation of Critical Information

By letting user input control `X-Frame-Options` header, there is a risk that software does not properly verify whether or not a browser should be allowed to render a page in an `iframe`.

JavaScript template string

This looks like a JavaScript template string. Are you missing a ‘$’ in front of ‘{…}’?

Assignment is useless

`\$X` is assigned twice; the first assignment is useless

JSON stringify does not produce a stable key ordering, and should not be relied on for producing object keys

JSON stringify does not produce a stable key ordering, and should not be relied on for producing object keys. Consider using json-stable-stringify instead.

The string method replaceAll is not supported in all versions of javascript, and is not supported by older browser versions

The string method replaceAll is not supported in all versions of javascript, and is not supported by older browser versions. Consider using replace() with a regex as the first argument instead like mystring.replace(/bad/g, “good”) instead of mystring.replaceAll(“bad”, “good”) ([https://discourse.threejs.org/t/replaceall-is-not-a-function/14585](https://discourse.threejs.org/t/replaceall-is-not-a-function/14585) )

Useless comparison operation

Detected a useless comparison operation `\$X == \$X` or `\$X != \$X`. This operation is always true. If testing for floating point NaN, use `math.isnan`, or `cmath.isnan` if the number is complex.

`undefined` is not a reserved keyword in Javascript, so this is “valid” Javascript but highly confusing and likely to result in bugs.

`undefined` is not a reserved keyword in Javascript, so this is “valid” Javascript but highly confusing and likely to result in bugs.

Lazy loading can complicate code bundling if care is not taken, also `require`s are run synchronously by Node.js

Lazy loading can complicate code bundling if care is not taken, also `require`s are run synchronously by Node.js. If they are called from within a function, it may block other requests from being handled at a more critical time. The best practice is to `require` modules at the beginning of each file, before and outside of any functions.

Creating and using a large number of zlib objects simultaneously can cause significant memory fragmentation

Creating and using a large number of zlib objects simultaneously can cause significant memory fragmentation. It is strongly recommended that the results of compression operations be cached or made synchronous to avoid duplication of effort.

Found alert() call

found alert() call; should this be in production code?

Found debugger call

found debugger call; should this be in production code?

Found conform() call

found confirm() call; should this be in production code?

Found prompt() call

found prompt() call; should this be in production code?

Insecure Storage of Sensitive Information

Storing JWT tokens in localStorage known to be a bad practice, consider moving your tokens from localStorage to a HTTP cookie.

Insecure Storage of Sensitive Information

Property decoded from JWT token without verifying and cannot be trustworthy.

JSX element not internationalized: ‘$MESSAGE’

JSX element not internationalized: ‘$MESSAGE’. You should support different languages in your website or app with internationalization. Instead, use packages such as `i18next` in order to internationalize your elements.

JSX Component label not internationalized: ‘$MESSAGE’

JSX Component label not internationalized: ‘$MESSAGE’

Translation key ‘$KEY’ should match format ‘MODULE.FEATURE.\*’

Translation key ‘$KEY’ should match format ‘MODULE.FEATURE.\*’

React useSelect() label is not internationalized - ‘$LABEL’

React useSelect() label is not internationalized - ‘$LABEL’. You should support different langauges in your website or app with internationalization. Instead, use packages such as `i18next` to internationalize your elements.

React MUI enqueueSnackbar() title is not internationalized: ‘$MESSAGE’

React MUI enqueueSnackbar() title is not internationalized: ‘$MESSAGE’

Exposure of Information Through Directory Listing

Directory listing/indexing is enabled, which may lead to disclosure of sensitive directories and files. It is recommended to disable directory listing unless it is a public resource. If you need directory listing, ensure that sensitive files are inaccessible when querying the resource.

Calling setState on the current state is always a no-op

Calling setState on the current state is always a no-op. Did you mean to change the state like $Y(!$X) instead?

## Go [Copied!](#go "Copy link to this section")

Policy Name

Description

Server-Side Request Forgery (SSRF)

A request was found to be crafted from user-input `\$REQUEST`. This can lead to Server-Side Request Forgery (SSRF) vulnerabilities, potentially exposing sensitive data. It is recommend where possible to not allow user-input to craft the base request, but to be treated as part of the path or query parameter. When user-input is necessary to craft the request, it is recommended to follow OWASP best practices to prevent abuse, including using an allowlist.

Inadequate Encryption Strength

RSA keys should be at least 2048 bits

Use of a Broken or Risky Cryptographic Algorithm

Go versions

Use of a Broken or Risky Cryptographic Algorithm

Usage of a cryptographically insecure algorithm has been detected. Itis recommended that alternative algorithms be used instead.

Use of a Broken or Risky Cryptographic Algorithm

Detected use of the ’none’ algorithm in a JWT token. The ’none’ algorithm assumes the integrity of the token has already been verified. This would allow a malicious actor to forge a JWT token that will automatically be verified. Do not explicitly use the ’none’ algorithm. Instead, use an algorithm such as ‘HS256’.

Use of a Broken or Risky Cryptographic Algorithm

It looks like MD5 is used as a password hash. MD5 is not considered a secure password hash because it can be cracked by an attacker in a short amount of time. Use a suitable password hashing function such as bcrypt. You can use the `golang.org/x/crypto/bcrypt` package.

Use of a Broken or Risky Cryptographic Algorithm

Detected an insecure CipherSuite via the ’tls’ module. This suite is considered weak. Use the function ’tls.CipherSuites()’ to get a list of good cipher suites. See [https://golang.org/pkg/crypto/tls/#InsecureCipherSuites](https://golang.org/pkg/crypto/tls/#InsecureCipherSuites) for why and what other cipher suites to use.

Use of a Broken or Risky Cryptographic Algorithm

SSLv3 is insecure because it has known vulnerabilities. Starting with go1.14, SSLv3 will be removed. Instead, use ’tls.VersionTLS13’.

Use of a Broken or Risky Cryptographic Algorithm

Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead.

Use of a Broken or Risky Cryptographic Algorithm

Detected SHA1 hash algorithm which is considered insecure. SHA1 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead.

Use of a Broken or Risky Cryptographic Algorithm

Detected DES cipher algorithm which is insecure. The algorithm is considered weak and has been deprecated. Use AES instead.

Use of a Broken or Risky Cryptographic Algorithm

Detected RC4 cipher algorithm which is insecure. The algorithm has many known vulnerabilities. Use AES instead.

Use of a Broken or Risky Cryptographic Algorithm

`MinVersion` is missing from this TLS configuration. By default, TLS 1.2 is currently used as the minimum when acting as a client, and TLS 1.0 when acting as a server. General purpose web applications should default to TLS 1.3 with all other protocols disabled. Only where it is known that a web server must support legacy clients with unsupported an insecure browsers (such as Internet Explorer 10), it may be necessary to enable TLS 1.0 to provide support. Add \`MinVersion: tls.VersionTLS13’ to the TLS configuration to bump the minimum version to TLS 1.3.

Use of a Broken or Risky Cryptographic Algorithm

The package `net/http/cgi` is on the import blocklist. The package is vulnerable to httpoxy attacks (CVE-2015-5386). It is recommended to use `net/http` or a web framework to build a web application instead.

Improper Control of Generation of Code (‘Code Injection’)

Detected non-static command inside Command. Audit the input to ’exec.Command’. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code.

Improper Control of Generation of Code (‘Code Injection’)

Detected non-static command inside exec.Cmd. Audit the input to ’exec.Cmd’. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code.

Improper Control of Generation of Code (‘Code Injection’)

Detected non-static command inside Exec. Audit the input to ‘syscall.Exec’. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code.

Improper Control of Generation of Code (‘Code Injection’)

Detected non-static script inside otto VM. Audit the input to ‘VM.Run’. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code.

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Restriction of XML External Entity Reference

Detected enabling of “XMLParseNoEnt”, which allows parsing of external entities and can lead to XXE if user controlled data is parsed by the library. Instead, do not enable “XMLParseNoEnt” or be sure to adequately sanitize user-controlled data when it is being parsed by this library.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

File traversal when extracting zip archive

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

`Clean` is not intended to sanitize against path traversal attacks. This function is for finding the shortest path name equivalent to the given input. Using `Clean` to sanitize file reads may expose this application to path traversal attacks, where an attacker could access arbitrary files on the server. To fix this easily, write this: `filepath.FromSlash(path.Clean("/"+strings.Trim(req.URL.Path, "/")))` However, a better solution is using the `SecureJoin` function in the package `filepath-securejoin`. See [https://pkg.go.dev/github.com/cyphar/filepath-securejoin#section-readme](https://pkg.go.dev/github.com/cyphar/filepath-securejoin#section-readme) .

Files or Directories Accessible to External Parties

The application is potentially exposing the entire filesystem by mounting the rootdirectory `/` to an HTTP handler function. Anyone who is able to access this HTTPserver may be able to access any file that the HTTP server has access to.Restrict the `http.Dir` path to only a specific folder instead of the entirefilesystem.Example server only allowing directory listing on a public directory:const path = “/var/www/html/public"fs := http.FileServer(http.Dir(path))log.Fatal(http.ListenAndServe(":9000”, fs))

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as Sequelize which will protect your queries.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected SQL statement that is tainted by `\$EVENT` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use prepared statements with the ‘Prepare’ and ‘PrepareContext’ calls.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected usage of dangerous method $METHOD which does not escape inputs (see link in references). If the argument is user-controlled, this can lead to SQL injection. When using $METHOD function, do not trust user-submitted data and only allow approved list of input (possibly, use an allowlist approach).

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

User data flows into this manually-constructed SQL string. User data can be safely inserted into SQL strings using prepared statements or an object-relational mapper (ORM). Manually-constructed SQL strings is a possible indicator of SQL injection, which could let an attacker steal or manipulate data from the database. Instead, use prepared statements (`db.Query("SELECT * FROM t WHERE id = ?", id)`) or a safe library.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

String-formatted SQL query detected. This could lead to SQL injection if the string is not sanitized properly. Audit this call to ensure the SQL is not manipulable by external data.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected string concatenation with a non-literal variable in a pgx Go SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries instead. You can use parameterized queries like so: (`SELECT \$1 FROM table`, \`data1)

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected string concatenation with a non-literal variable in a go-pg SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries instead of string concatenation. You can use parameterized queries like so: ‘(SELECT ? FROM table, data1)’

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected string concatenation with a non-literal variable in a go-pg ORM SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, do not use strings concatenated with user-controlled input. Instead, use parameterized statements.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected string concatenation with a non-literal variable in a “database/sql” Go SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use prepared statements with the ‘Prepare’ and ‘PrepareContext’ calls.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Detected non-static command inside Write. Audit the input to ‘$CW.Write’. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code.

Improper Neutralization of Special Elements used in an LDAP Query (‘LDAP Injection’)

Detected non-constant data passed into an LDAP query. If this data can becontrolled by an external user, this is an LDAP injection.Ensure data passed to an LDAP query is not controllable; or properly sanitizethe data.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Cross Site Scripting (XSS) is an attack which exploits a web application or system to treatuser inputas markup or script code. It is important to encode the data depending on the specific contextitis used in. There are at least six context err != nil { log.Fatal(err)}

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

usage of insecure template types. They are documented as a security risk. See [https://golang.org/pkg/html/template/#HTML](https://golang.org/pkg/html/template/#HTML) .

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected user input flowing into a manually constructed HTML string. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. Use the `html/template` package which will safely render HTML instead, or inspect that the HTML is rendered safely.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Found data going from url query parameters into formatted data written to ResponseWriter. This could be XSS and should not be done. If you must do this, ensure your data is sanitized or escaped.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Found a formatted template string passed to ’template.JS()’. ’template.JS()’ does not escape contents. Be absolutely sure there is no user-controlled data in this template.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Found a formatted template string passed to ’template.HTML()’. ’template.HTML()’ does not escape contents. Be absolutely sure there is no user-controlled data in this template. If user data can reach this template, you may have a XSS vulnerability.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Found a formatted template string passed to ’template. HTMLAttr()’. ’template.HTMLAttr()’ does not escape contents. Be absolutely sure there is no user-controlled data in this template or validate and sanitize the data before passing it into the template.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Found a formatted template string passed to ’template.URL()’. ’template.URL()’ does not escape contents, and this could result in XSS (cross-site scripting) and therefore confidential data being stolen. Sanitize data coming into this function or make sure that no user-controlled input is coming into the function.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected template variable interpolation in an HTML tag. This is potentially vulnerable to cross-site scripting (XSS) attacks because a malicious actor has control over HTML but without the need to use escaped characters. Use explicit tags instead.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected directly writing or similar in ‘http.ResponseWriter.write()’. This bypasses HTML escaping that prevents cross-site scripting vulnerabilities. Instead, use the ‘html/template’ package and render data using ’template.Execute()’.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected template variable interpolation in a JavaScript template string. This is potentially vulnerable to cross-site scripting (XSS) attacks because a malicious actor has control over JavaScript but without the need to use escaped characters. Instead, obtain this variable outside of the template string and ensure your template is properly escaped.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected ‘io.WriteString()’ writing directly to ‘http.ResponseWriter’. This bypasses HTML escaping that prevents cross-site scripting vulnerabilities. Instead, use the ‘html/template’ package to render data to users.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected ‘printf’ or similar in ‘http.ResponseWriter.write()’. This bypasses HTML escaping that prevents cross-site scripting vulnerabilities. Instead, use the ‘html/template’ package to render data to users.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Semgrep could not determine that the argument to ’template.HTML()’ is a constant. ’template.HTML()’ and similar does not escape contents. Be absolutely sure there is no user-controlled data in this template. If user data can reach this template, you may have a XSS vulnerability. Instead, do not use this function and use ’template.Execute()’.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected ‘Fprintf’ or similar writing to ‘http.ResponseWriter’. This bypasses HTML escaping that prevents cross-site scripting vulnerabilities. Instead, use the ‘html/template’ package to render data to users.

Exposure of Sensitive Information to an Unauthorized Actor

Detected a network listener listening on 0.0.0.0 or an empty string. This could unexpectedly expose the server publicly as it binds to all available interfaces. Instead, specify another IP address that is not 0.0.0.0 nor the empty string.

Cleartext Transmission of Sensitive Information

Checks for attempts to connect to an insecure telnet server using the package telnet. This is bad because it can lead to man in the middle attacks.

Cleartext Transmission of Sensitive Information

Checks for requests to http (unencrypted) sites using grequests, a popular HTTP client library. This is dangerous because it could result in plaintext PII being passed around the network.

Cleartext Transmission of Sensitive Information

Checks for disabling of TLS/SSL certificate verification. This should only be used for debugging purposes because it leads to vulnerability to MTM attacks.

Cleartext Transmission of Sensitive Information

Checks for requests sent via http.$FUNC to http:// URLS. This is dangerous because the server is attempting to connect to a website that does not encrypt traffic with TLS. Instead, send requests only to https:// URLS.

Cleartext Transmission of Sensitive Information

Checks for requests to http (unencrypted) sites using gorequest, a popular HTTP client library. This is dangerous because it could result in plaintext PII being passed around the network.

Cleartext Transmission of Sensitive Information

Checks for requests sent via http.NewRequest to http:// URLS. This is dangerous because the server is attempting to connect to a website that does not encrypt traffic with TLS. Instead, send requests only to https:// URLS.

Cleartext Transmission of Sensitive Information

Checks for requests to http (unencrypted) sites using gorequest, a popular HTTP client library. This is dangerous because it could result in plaintext PII being passed around the network.

Cleartext Transmission of Sensitive Information

Detects creations of tls configuration objects with an insecure MinVersion of TLS. These protocols are deprecated due to POODLE, man in the middle attacks, and other vulnerabilities.

Cleartext Transmission of Sensitive Information

Checks for outgoing connections to ftp servers with the ftp package. FTP does not encrypt traffic, possibly leading to PII being sent plaintext over the network. Instead, connect via the SFTP protocol.

Cleartext Transmission of Sensitive Information

Found an HTTP server without TLS. Use ‘http.ListenAndServeTLS’ instead. See [https://golang.org/pkg/net/http/#ListenAndServeTLS](https://golang.org/pkg/net/http/#ListenAndServeTLS) for more information.

Sensitive Cookie Without ‘HttpOnly’ Flag

A session cookie was detected without setting the ‘HttpOnly’ flag. The ‘HttpOnly’ flag for cookies instructs the browser to forbid client-side scripts from reading the cookie which mitigates XSS attacks. Set the ‘HttpOnly’ flag by setting ‘HttpOnly’ to ’true’ in the Options struct.

Sensitive Cookie Without ‘HttpOnly’ Flag

A session cookie was detected without setting the ‘HttpOnly’ flag. The ‘HttpOnly’ flag for cookies instructs the browser to forbid client-side scripts from reading the cookie which mitigates XSS attacks. Set the ‘HttpOnly’ flag by setting ‘HttpOnly’ to ’true’ in the Cookie.

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

A session cookie was detected without setting the ‘Secure’ flag. The ‘secure’ flag for cookies prevents the client from transmitting the cookie over insecure channels such as HTTP. Set the ‘Secure’ flag by setting ‘Secure’ to ’true’ in the Options struct.

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

A session cookie was detected without setting the ‘Secure’ flag. The ‘secure’ flag for cookies prevents the client from transmitting the cookie over insecure channels such as HTTP. Set the ‘Secure’ flag by setting ‘Secure’ to ’true’ in the Options struct.

Insecure Temporary File

File creation in shared tmp directory without using ioutil.Tempfile

Integer Overflow or Wraparound

Potential Integer overflow made by strconv.Atoi result conversion to int16/32

Uncontrolled Resource Consumption

Detected a possible denial-of-service via a zip bomb attack. By limiting the max bytes read, you can mitigate this attack. `io.CopyN()` can specify a size. Refer to [https://bomb.codes/](https://bomb.codes/) to learn more about this attack and other ways to mitigate it.

Cross-Site Request Forgery (CSRF)

The ‘Origin’ header of the Websocket handshake request is not checked.This could lead to Cross-Site WebSocket Hijacking vulnerability (CSWSH).

Cross-Site Request Forgery (CSRF)

The Origin header in the HTTP WebSocket handshake is used to guarantee that the connection accepted by the WebSocket is from a trusted origin domain. Failure to enforce can lead to Cross Site Request Forgery (CSRF). As per “gorilla/websocket” documentation: “A CheckOrigin function should carefully validate the request origin to prevent cross-site request forgery.”

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

Go’s `math/rand` is not meant for use in generating random numbers for any cryptographic orsecurity sensitive context. This includes generating random numbers that could be used inuser specific identifiers or where the random number that is generated is considered tobe secret.Replace all imports of `math/rand` with `crypto/rand`.

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

Do not use `math/rand`. Use `crypto/rand` instead.

In the “$LOOP” iteration, “$Y” should be added as a parameter to the goroutine

In the “$LOOP” iteration, “$Y” should be added as a parameter to the goroutine

Active Debug Code

Go has a built in profiling service that is enabled by starting an HTTP server with`net/http/pprof` imported. The `/debug/pprof` endpoint does not require anyauthentication and can be accessed by anonymous users. This profiling endpointcan leak sensitive information and should not be enabled in production.To remediate this, remove the `net/http/pprof` import from the file.

Active Debug Code

The profiling ‘pprof’ endpoint is automatically exposed on /debug/pprof. This could leak information about the server. Instead, use `import "net/http/pprof"`. See [https://www.farsightsecurity.com/blog/txt-record/go-remote-profiling-20161028/](https://www.farsightsecurity.com/blog/txt-record/go-remote-profiling-20161028/) for more information and mitigation.

Incorrect Default Permissions

Detected file permissions that are set to more than `0600` (user/owner can read and write). Setting file permissions to higher than `0600` is most likely unnecessary and violates the principle of least privilege. Instead, set permissions to be `0600` or less for os.Chmod, os.Mkdir, os.OpenFile, os.MkdirAll, and ioutil.WriteFile

An unsafe.Pointer converted to an uintptr must be used in an atomic step

An unsafe.Pointer converted to an uintptr must be used in an atomic step. Without this it is not guaranteed that the memory location uintptr points to will contain the intended structure.

os.Executable()s behaviour varies between operating systems

os.Executable()s behaviour varies between operating systems. On Linux symlinks are followed, while on MacOS and Windows they are not. Depending on context, this could lead to file replacement attacks and local privilege escalation.

fmt.Sprintf()’s %s formatting verb does not escape control characters in a string, such as \\u000a or backtick-enclosed multilines

fmt.Sprintf()’s %s formatting verb does not escape control characters in a string, such as \\u000a or backtick-enclosed multilines. This could lead to various vulnerabilities such as header injection, request smuggling, log injection, etc.

calling json.Encode() on an http.ResponseWriter will set Content-Type text/plain

calling json.Encode() on an http.ResponseWriter will set Content-Type text/plain

maybe returning wrong error

maybe returning wrong error

Misspelling of MarshalYAML.

Misspelling of MarshalYAML.

Misspelling of UnmarshalYAML.

Misspelling of UnmarshalYAML.

Use err.Error() instead

Use err.Error() instead

missing new relic end transaction

missing new relic end transaction

ctx.Done() and time.After/time.NewTicker

ctx.Done() and time.After/time.NewTicker

use net.JoinHostPort instead of fmt.Sprintf($XX, $NET)

use net.JoinHostPort instead of fmt.Sprintf($XX, $NET)

passing an http-request scoped Context to a goroutine

passing an http-request scoped Context to a goroutine

ioutil.NopCloser is deprecated

ioutil.NopCloser is deprecated

ioutil.ReadAll is deprecated

ioutil.ReadAll is deprecated

ioutil.ReadDir is deprecated

ioutil.ReadDir is deprecated

ioutil.ReadFile is deprecated

ioutil.ReadFile is deprecated

ioutil.TempDir is deprecated

ioutil.TempDir is deprecated

ioutil.TempFile is deprecated

ioutil.TempFile is deprecated

ioutil.WriteFile is deprecated

ioutil.WriteFile is deprecated

ioutil.Discard is deprecated

ioutil.Discard is deprecated

Odd use of anonymous structs for function arguments

Odd use of anonymous structs for function arguments

old-style go-fuzz fuzz function found

old-style go-fuzz fuzz function found

64-bit integer parsed and downcast to u/int32

64-bit integer parsed and downcast to u/int32

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

Odd comparison

did you want path.Join() or filepath.Join()?

did you want path.Join() or filepath.Join()?

Odd compound += or -= expression

Odd compound += or -= expression

Leaky use of time.After in for-select, see: [https://groups.google.com/g/golang-nuts/c/cCdm0Ixwi9A/m/jMiJJScAEAAJ](https://groups.google.com/g/golang-nuts/c/cCdm0Ixwi9A/m/jMiJJScAEAAJ)

Leaky use of time.After in for-select, see: [https://groups.google.com/g/golang-nuts/c/cCdm0Ixwi9A/m/jMiJJScAEAAJ](https://groups.google.com/g/golang-nuts/c/cCdm0Ixwi9A/m/jMiJJScAEAAJ)

Maybe bad sort.Slice() less function

Maybe bad sort.Slice() less function

QueryxContext rows must be closed (or use ExecContext)

QueryxContext rows must be closed (or use ExecContext)

unless checking for wall clock inconsistencies, use !$T1.After($T2)

unless checking for wall clock inconsistencies, use !$T1.After($T2)

unless checking for wall clock inconsistencies, use !$T1.Before($T2)

unless checking for wall clock inconsistencies, use !$T1.Before($T2)

TODO in error handling code

TODO in error handling code

calling hmac.New with unchanging hash.New

calling hmac.New with unchanging hash.New

return nil instead of nil value

return nil instead of nil value

MarshalJSON with a pointer receiver has surprising results: [https://github.com/golang/go/issues/22967](https://github.com/golang/go/issues/22967)

MarshalJSON with a pointer receiver has surprising results: [https://github.com/golang/go/issues/22967](https://github.com/golang/go/issues/22967)

Misspelling of MarshalJSON.

Misspelling of MarshalJSON.

Misspelling of UnmarshalJSON.

Misspelling of UnmarshalJSON.

Comparing a MAC with bytes.Equal()

Comparing a MAC with bytes.Equal()

io.ReadFull() returns err == nil iff n == len(slice)

io.ReadFull() returns err == nil iff n == len(slice)

odd hash.Sum call flow

odd hash.Sum call flow

Consider to use well-defined context

Consider to use well-defined context

use $W.Write($VAR) instead of io.WriteString when $VAR is \[\]byte

use $W.Write($VAR) instead of io.WriteString when $VAR is \[\]byte

use $W.Write($VAR) instead of fmt.Fprint when $VAR is \[\]byte

use $W.Write($VAR) instead of fmt.Fprint when $VAR is \[\]byte

use fmt.Fprintf($W, $…VALS) instead of fmt.Sprintf and \[\]byte conversion

use fmt.Fprintf($W, $…VALS) instead of fmt.Sprintf and \[\]byte conversion

it is good practice to call context cancellation function, $X(), in any case

it is good practice to call context cancellation function, $X(), in any case

Odd bitwise expression

Odd bitwise expression

Bad nil guard

Bad nil guard

Odd sequence of ifs

Odd sequence of ifs

superfluous nil err check before return

superfluous nil err check before return

use net/mail Address.String() instead of fmt.Sprintf()

use net/mail Address.String() instead of fmt.Sprintf()

Try using math/bits instead

Try using math/bits instead

New code should use errors.Is with the appropriate error type

New code should use errors.Is with the appropriate error type

New code should use errors.Is with the appropriate error type

New code should use errors.Is with the appropriate error type

New code should use errors.Is with the appropriate error type

New code should use errors.Is with the appropriate error type

New code should use errors.Is with the appropriate error type

New code should use errors.Is with the appropriate error type

Read() can return n bytes and io.EOF

Read() can return n bytes and io.EOF

Odd bits.LeadingZeros() expression should perhaps be bits.Len()

Odd bits.LeadingZeros() expression should perhaps be bits.Len()

return nil err instead of nil value

return nil err instead of nil value

Converting RemoteAddr to net.IP is probably wrong

Converting RemoteAddr to net.IP is probably wrong

Caret (^) is not exponentiation

Caret (^) is not exponentiation

Use errors.Is($ERR, net.ErrClosed) instead

Use errors.Is($ERR, net.ErrClosed) instead

Wrong lock/unlock pair?

Wrong lock/unlock pair?

Key Exchange without Entity Authentication

Disabled host key verification detected. This allows man-in-the-middle attacks. Use the ‘golang.org/x/crypto/ssh/knownhosts’ package to do host key verification. See [https://skarlso.github.io/2019/02/17/go-ssh-with-host-key-verification/](https://skarlso.github.io/2019/02/17/go-ssh-with-host-key-verification/) to learn more about the problem and how to fix it.

Use of Inherently Dangerous Function

The `unsafe` package in Go allows low-level access to memory management features.This includes pointers and direct access to memory. The Go compiler will no longerbe able to enforce type safety when working with the `unsafe` pointer types.While powerful, access to these functions can lead to many security related issues such as:- [Buffer overflows](https://owasp.org/www-community/vulnerabilities/Buffer_Overflow) whichcan lead to code execution.- [Use after free](https://owasp.org/www-community/vulnerabilities/Using_freed_memory) whichcan lead to code execution.- [Information/Memory leaks](https://owasp.org/www-community/vulnerabilities/Memory_leak) which can leak sensitive information, including data which candefeat other protection mechanisms or cause the system to run out of memory.Unless required, all calls to the `unsafe` package should be removed.

Use of Inherently Dangerous Function

Using the unsafe package in Go gives you low-level memory management and many of the strengths of the C language, but also steps around the type safety of Go and can lead to buffer overflows and possible arbitrary code execution by an attacker. Only use this package if you absolutely know what you’re doing.

Insufficient Verification of Data Authenticity

Detected the decoding of a JWT token without a verify step. Don’t use `ParseUnverified` unless you know what you’re doing This method parses the token but doesn’t validate the signature. It’s only ever useful in cases where you know the signature is valid (because it has been checked previously in the stack) and you want to extract values from it.

Channel Accessible by Non-Endpoint

Found an insecure gRPC server without ‘grpc.Creds()’ or options with credentials. This allows for a connection without encryption to this server. A malicious attacker could tamper with the gRPC message, which could compromise the machine. Include credentials derived from an SSL certificate in order to create a secure gRPC connection. You can create credentials using ‘credentials.NewServerTLSFromFile(“cert.pem”, “cert.key”)’.

Improper Neutralization of Special Elements Used in a Template Engine

A server-side template injection occurs when an attacker is able to use native template syntax to inject a malicious payload into a template, which is then executed server-side. When using “html/template” always check that user inputs are validated and sanitized before included within the template.

Detected an if block that checks for the same condition on both branches (`\$X`)

Detected an if block that checks for the same condition on both branches (`\$X`). The second condition check is useless as it is the same as the first, and therefore can be removed from the code,

Detected identical statements in the if body and the else body of an if-statement

Detected identical statements in the if body and the else body of an if-statement. This will lead to the same code being executed no matter what the if-expression evaluates to. Instead, remove the if statement.

`\$VALUE` is a loop pointer that may be exported from the loop

`\$VALUE` is a loop pointer that may be exported from the loop. This pointer is shared between loop iterations, so the exported reference will always point to the last loop value, which is likely unintentional. To fix, copy the pointer to a new pointer within the loop.

`path.Join(...)` always joins using a forward slash

`path.Join(...)` always joins using a forward slash. This may cause issues on Windows or other systems using a different delimiter. Use `filepath.Join(...)` instead which uses OS-specific path separators.

Detected useless comparison operation

Detected useless comparison operation `\$X == \$X` or `\$X != \$X`. This will always return ‘True’ or ‘False’ and therefore is not necessary. Instead, remove this comparison operation or use another comparison expression that is not deterministic.

Detected useless if statement

Detected useless if statement. ‘if (True)’ and ‘if (False)’ always result in the same behavior, and therefore is not necessary in the code. Remove the ‘if (False)’ expression completely or just the ‘if (True)’ comparison depending on which expression is in the code.

Detected a channel guarded with a mutex

Detected a channel guarded with a mutex. Channels already have an internal mutex, so this is unnecessary. Remove the mutex. See [https://hackmongo.com/page/golang-antipatterns/#guarded-channel](https://hackmongo.com/page/golang-antipatterns/#guarded-channel) for more information.

Detected a hidden goroutine

Detected a hidden goroutine. Function invocations are expected to synchronous, and this function will execute asynchronously because all it does is call a goroutine. Instead, remove the internal goroutine and call the function using ‘go’.

Improper Control of Dynamically-Managed Code Resources

‘reflect.MakeFunc’ detected. This will sidestep protections that are normally afforded by Go’s type system. Audit this call and be sure that user input cannot be used to affect the code generated by MakeFunc; otherwise, you will have a serious security vulnerability.

Improper Control of Dynamically-Managed Code Resources

Detected a potentially dynamic ClientTrace. This occurred because semgrep could not find a static definition for ‘$TRACE’. Dynamic ClientTraces are dangerous because they deserialize function code to run when certain Request events occur, which could lead to code being run without your knowledge. Ensure that your ClientTrace is statically defined.

Authentication Bypass by Alternate Name

Variable $VAR is assigned from two different sources: ‘$Y’ and ‘$R’. Make sure this is intended, as this could cause logic bugs if they are treated as they are the same object.

Use of Externally-Controlled Input to Select Classes or Code (‘Unsafe Reflection’)

If an attacker can supply values that the application then uses to determine which method or field to invoke, the potential exists for the attacker to create control flow paths through the application that were not intended by the application developers. This attack vector may allow the attacker to bypass authentication or access control checks or otherwise cause the application to behave in an unexpected manner.

Detected conversion of the result of a strconv.Atoi command to an int16

Detected conversion of the result of a strconv.Atoi command to an int16. This could lead to an integer overflow, which could possibly result in unexpected behavior and even privilege escalation. Instead, use `strconv.ParseInt`.

Detected conversion of the result of a strconv.Atoi command to an int32

Detected conversion of the result of a strconv.Atoi command to an int32. This could lead to an integer overflow, which could possibly result in unexpected behavior and even privilege escalation. Instead, use `strconv.ParseInt`.

Exposure of Information Through Directory Listing

Detected usage of ‘http.FileServer’ as handler: this allows directory listing and an attacker could navigate through directories looking for sensitive files. Be sure to disable directory listing or restrict access to specific directories/files.

## Java [Copied!](#java "Copy link to this section")

Policy Name

Description

Server-Side Request Forgery (SSRF)

User data flows into the host portion of this manually-constructed URL. This could allow an attacker to send data to their own server, potentially exposing sensitive data such as cookies or authorization information sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. (This is called server-side request forgery, or SSRF.) Do not allow arbitrary hosts. Instead, create an allowlist for approved hosts hardcode the correct host, or ensure that the user data can only affect the path or parameters.

Server-Side Request Forgery (SSRF)

A parameter being passed directly into java.net.URL function most likely lead to SSRF.

Server-Side Request Forgery (SSRF)

A parameter being passed directly into HttpClient functions most likely lead to SSRF.

Server-Side Request Forgery (SSRF)

A parameter being passed directly into CloseableHttpClient functions most likely lead to SSRF.

Server-Side Request Forgery (SSRF)

Non-exhaustive list of Libraries that provide functionality to accept URL as a parameter

Inadequate Encryption Strength

Cryptographic implementations with insufficient key length is susceptible to bruteforce attacks.

Inadequate Encryption Strength

The network communications for Hazelcast is configured to use a deprecated symmetric cipher.Consider using TLS/SSL when establishing communications across the Hazelcast cluster.For more information on configuring TLS/SSL for Hazelcast see:https://docs.hazelcast.com/imdg/4.2/security/tls-ssl

Inadequate Encryption Strength

Using less than 128 bits for Blowfish is considered insecure. Use 128 bits or more, or switch to use AES instead.

Inadequate Encryption Strength

An insecure SSL context was detected. TLS versions 1.0, 1.1, and all SSL versions are considered weak encryption and are deprecated. Use SSLContext.getInstance(“TLSv1.2”) for the best security.

Inadequate Encryption Strength

RSA keys should be at least 2048 bits based on NIST recommendation.

Inadequate Encryption Strength

Using RSA without OAEP mode weakens the encryption.

Missing Support for Integrity Check

This app does not uses SafetyNet Attestation API that provides cryptographically-signed attestation, assessing the device’s integrity. This check helps to ensure that the servers are interacting with the genuine app running on a genuine Android device.

Use of a Broken or Risky Cryptographic Algorithm

Weak encryption algorithm identified. This algorithm is vulnerable to cryptographic attacks.

Use of a Broken or Risky Cryptographic Algorithm

Weak Hash algorithm used. The hash algorithm is known to have hash collisions.

Use of a Broken or Risky Cryptographic Algorithm

SSLv3 is insecure and has multiple known vulnerabilities.

Use of a Broken or Risky Cryptographic Algorithm

The App uses ECB mode in Cryptographic encryption algorithm. ECB mode is known to be weak as it results in the same ciphertext for identical blocks of plaintext.

Use of a Broken or Risky Cryptographic Algorithm

Calling Cipher.getInstance(“AES”) will return AES ECB mode by default. ECB mode is known to be weak as it results in the same ciphertext for identical blocks of plaintext.

Use of a Broken or Risky Cryptographic Algorithm

SHA1 Hash algorithm used. The SHA1 hash is known to have hash collisions.

Use of a Broken or Risky Cryptographic Algorithm

The application was found implementing a custom `java.security.MessageDigest`. It isstrongly recommended that a standard Digest algorithm be chosen instead as implementinga digest by hand is error-prone. The National Institute of Standards andTechnology (NIST) recommends the use of SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, orSHA-512/256.Example of creating a SHA-384 // Call update with your datasha384Digest.update(input);// Only call digest once all data has been fed into the update sha384digest instancebyte\[\] output = sha384Digest.digest();// output base64 encoded version of the hashSystem.out.println("

Use of a Broken or Risky Cryptographic Algorithm

The application was found using an insecure or risky digest or signature algorithm. Both MD5and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.strongly recommended that a standard Digest algorithm be chosen instead as implementinga digest by hand is error-prone.Example of creating a SHA-384 // Call update with your datasha384Digest.update(input);// Only call digest once all data has been fed into the update sha384digest instancebyte\[\] output = sha384Digest.digest();// output base64 encoded version of the hashSystem.out.println(“For more information on secure password storage see OWASP:https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.html

Use of a Broken or Risky Cryptographic Algorithm

Detected use of the ’none’ algorithm in a JWT token. The ’none’algorithm assumes the integrity of the token has already been verified.This would allow a malicious actor to forge a JWT token that willautomatically be verified. Do not explicitly use the ’none’ algorithm.Instead, use an algorithm such as ‘HS256’.For more information on how to securely use JWT please see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/JSON\_Web\_Token\_for\_Java\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)

Use of a Broken or Risky Cryptographic Algorithm

Test message

Use of a Broken or Risky Cryptographic Algorithm

Detected use of the ’none’ algorithm in a JWT token. The ’none’ algorithm assumes the integrity of the token has already been verified. This would allow a malicious actor to forge a JWT token that will automatically be verified. Do not explicitly use the ’none’ algorithm. Instead, use an algorithm such as ‘HS256’.

Use of a Broken or Risky Cryptographic Algorithm

Detected use of the ’none’ algorithm in a JWT token. The ’none’ algorithm assumes the integrity of the token has already been verified. This would allow a malicious actor to forge a JWT token that will automatically be verified. Do not explicitly use the ’none’ algorithm. Instead, use an algorithm such as ‘HS256’.

Use of a Broken or Risky Cryptographic Algorithm

Using CBC with PKCS5Padding is susceptible to padding oracle attacks. A malicious actor could discern the difference between plaintext with valid or invalid padding. Further, CBC mode does not include any integrity checks. Use ‘AES/GCM/NoPadding’ instead.

Use of a Broken or Risky Cryptographic Algorithm

It looks like MD5 is used as a password hash. MD5 is not considered a secure password hash because it can be cracked by an attacker in a short amount of time. Use a suitable password hashing function such as PBKDF2 or bcrypt. You can use `javax.crypto.SecretKeyFactory` with `SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1")` or, if using Spring, `org.springframework.security.crypto.bcrypt`.

Use of a Broken or Risky Cryptographic Algorithm

Use of Blowfish was detected. Blowfish uses a 64-bit block size that makes it vulnerable to birthday attacks, and is therefore considered non-compliant. Instead, use a strong, secure cipher: Cipher.getInstance(“AES/CBC/PKCS7PADDING”). See [https://owasp.org/www-community/Using\_the\_Java\_Cryptographic\_Extensions](https://owasp.org/www-community/Using_the_Java_Cryptographic_Extensions) for more information.

Use of a Broken or Risky Cryptographic Algorithm

Use of RC2 was detected. RC2 is vulnerable to related-key attacks, and is therefore considered non-compliant. Instead, use a strong, secure cipher: Cipher.getInstance(“AES/CBC/PKCS7PADDING”). See [https://owasp.org/www-community/Using\_the\_Java\_Cryptographic\_Extensions](https://owasp.org/www-community/Using_the_Java_Cryptographic_Extensions) for more information.

Use of a Broken or Risky Cryptographic Algorithm

Cipher in ECB mode is detected. ECB mode produces the same output for the same input each time which allows an attacker to intercept and replay the data. Further, ECB mode does not provide any integrity checking. See [https://find-sec-bugs.github.io/bugs.htm#CIPHER\_INTEGRITY](https://find-sec-bugs.github.io/bugs.htm#CIPHER_INTEGRITY) .

Use of a Broken or Risky Cryptographic Algorithm

Use of AES with no settings detected. By default, java.crypto.Cipher uses ECB mode. ECB doesn’t provide message confidentiality and is not semantically secure so should not be used. Instead, use a strong, secure cipher: java.crypto.Cipher.getInstance(“AES/CBC/PKCS7PADDING”). See [https://owasp.org/www-community/Using\_the\_Java\_Cryptographic\_Extensions](https://owasp.org/www-community/Using_the_Java_Cryptographic_Extensions) for more information.

Use of a Broken or Risky Cryptographic Algorithm

Use of RC4 was detected. RC4 is vulnerable to several attacks, including stream cipher attacks and bit flipping attacks. Instead, use a strong, secure cipher: Cipher.getInstance(“AES/CBC/PKCS7PADDING”). See [https://owasp.org/www-community/Using\_the\_Java\_Cryptographic\_Extensions](https://owasp.org/www-community/Using_the_Java_Cryptographic_Extensions) for more information.

Use of a Broken or Risky Cryptographic Algorithm

Use of AES with ECB mode detected. ECB doesn’t provide message confidentiality and is not semantically secure so should not be used. Instead, use a strong, secure cipher: Cipher.getInstance(“AES/CBC/PKCS7PADDING”). See [https://owasp.org/www-community/Using\_the\_Java\_Cryptographic\_Extensions](https://owasp.org/www-community/Using_the_Java_Cryptographic_Extensions) for more information.

Use of a Broken or Risky Cryptographic Algorithm

NullCipher was detected. This will not encrypt anything; the cipher text will be the same as the plain text. Use a valid, secure cipher: Cipher.getInstance(“AES/CBC/PKCS7PADDING”). See [https://owasp.org/www-community/Using\_the\_Java\_Cryptographic\_Extensions](https://owasp.org/www-community/Using_the_Java_Cryptographic_Extensions) for more information.

Use of a Broken or Risky Cryptographic Algorithm

Cryptographic algorithms are notoriously difficult to get right. By implementing a custom message digest, you risk introducing security issues into your program. Use one of the many sound message digests already available to

Use of RSA Algorithm without OAEP

This App uses RSA Crypto without OAEP padding. The purpose of the padding scheme is to prevent a number of attacks on RSA that only work when the encryption is performed without padding.

Improper Certificate Validation

Insecure Implementation of SSL. Trusting all the certificates or accepting self signed certificates is a critical Security Hole. This application is vulnerable to MITM attacks.

Improper Certificate Validation

Insecure WebView Implementation. WebView ignores SSL Certificate errors and accept any SSL Certificate. This application is vulnerable to MITM attacks.

Improper Certificate Validation

This app does not enforce TLS Certificate Transparency that helps to detect SSL certificates that have been mistakenly issued by a certificate authority or maliciously acquired from an otherwise unimpeachable certificate authority.

Improper Certificate Validation

This app does not use a TLS/SSL certificate or public key pinning in code to detect or prevent MITM attacks in secure communication channel. Please verify if pinning is enabled in `network_security_config.xml`.

Improper Certificate Validation

The `org.apache.http.impl.client.DefaultHttpClient` and `javax.net.ssl.SSLContext.getInstance`object instances do not verify the hostnames upon connection.This allows for an adversary who is in between the application and the target host to interceptpotentially sensitive information or transmit malicious data.Do not use the `org.apache.http.impl.client.DefaultHttpClient();` as it is deprecated. Insteaduse the new `java.net.http.HttpClient` that was introduced in Java 9.Example connecting to a host that will automatically do TLS // Create a HttpRequest builderHttpRequest request = HttpRequest.newBuilder() // Create a URI for a website which requires TLS .uri(URI.create(”// Use the httpClient to send the request and use an HttpResponse.BodyHandlers String typeHttpResponse response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());// Debug printSystem.out.println(response);

Improper Certificate Validation

The `X509TrustManager` has been configured to return null. This effectively disables thevalidation of server or client certificates. This could allow an adversary who is in between the application and the target host to launch a Man in the middle attack (MITM) i.e intercept potentially sensitive information or inject malicious content into the communication stream.Consider using the default `TrustManager` instead of implementing a custom one. If you must overridethe default verification process, implement proper TrustManager verification for`checkServerTrusted` and `checkClientTrusted` by throwing `CertificateException` if the certificate is invalid.For most applications, using the default TrustManager provided by the Java runtime is sufficient and recommended. Following is an example using the built in `TrustManagerFactory` to manage validating certificate // Use default system KeyStore, alternatively pass in your own keystore.trustManagerFactory.init((KeyStore) null);// Create SSLContext for TLS connectionsSSLContext tlsContext = SSLContext.getInstance(“TLS”);// Initialize the tlsContext with our trust manager and a SecureRandom number generator.tlsContext.init(null, trustManagerFactory.getTrustManagers(), new SecureRandom());For more information on TLS security, refer the following OWASP documentation:https://cheatsheetseries.owasp.org/cheatsheets/Transport\_Layer\_Protection\_Cheat\_Sheet.html

Improper Certificate Validation

The `HostnameVerifier` has been set to always return `true`. This effectively disables the validation of server or client certificates. This could allow an adversary who is in between the application and the target host to launch a Man in the middle attack (MITM) i.e intercept potentially sensitive information or inject malicious content into the communication stream.To mitigate this vulnerability and enhance the security of your application, it is strongly advised to adhere to the default HostnameVerifier settings. This ensures that the validation mechanism remains intact, providing a crucial layer of security against unauthorized interception and data manipulation.Implementing the default HostnameVerifier can be achieved with the following code connection.setHostnameVerifier(HttpsURLConnection.getDefaultHostnameVerifier());For more information on TLS security, refer the following OWASP documentation:https://cheatsheetseries.owasp.org/cheatsheets/Transport\_Layer\_Protection\_Cheat\_Sheet.html

Improper Certificate Validation

Either the `HostnameVerifier` has been set to always return `true` or the `X509TrustManager`hasbeen configured to return null, or both. This effectively disables the validation of server orclient certificates.This allows for an adversary who is in between the application and the target host to interceptpotentially sensitive information or transmit malicious data.It is recommended to not override the default `HostnameVerifiers`.Consider using the default `TrustManager` instead of implementing a custom one. If you mustoverridethe default verification process, implement proper TrustManager verification for`checkServerTrusted` and`checkClientTrusted` by throwing `CertificateException` if the certificate is invalid.Example using the built in `TrustManagerFactory` to manage validating certificate // Use default system KeyStore, alternatively pass in your own keystore.trustManagerFactory.init((KeyStore) null);// Create SSLContext for TLS connectionsSSLContext tlsContext = SSLContext.getInstance(“TLS”);// Initialize the tlsContext with our trust manager and a SecureRandom number generator.tlsContext.init(null, trustManagerFactory.getTrustManagers(), new SecureRandom());For more information on TLS security see OWASP:https://cheatsheetseries.owasp.org/cheatsheets/Transport\_Layer\_Protection\_Cheat\_Sheet.html

Improper Certificate Validation

Insecure HostnameVerifier implementation detected. This will accept any SSL certificate with any hostname, which creates the possibility for man-in-the-middle attacks.

Improper Certificate Validation

Detected empty trust manager implementations. This is dangerous because it accepts any certificate, enabling man-in-the-middle attacks. Consider using a KeyStore and TrustManagerFactory instead. See [https://stackoverflow.com/questions/2642777/trusting-all-certificates-using-httpclient-over-https](https://stackoverflow.com/questions/2642777/trusting-all-certificates-using-httpclient-over-https) for more information.

Improper Input Validation

The X-Forwarded-For (XFF) HTTP header field is a common method for identifying the originatingIP address of a client connecting to a web server through an HTTP proxy or load balancer. Since this header is not set by server and can be easily spoofed by the client It may cause injection attacks if `\$ADDR`is not filtered for properly.

Improper Input Validation

The Servlet can read GET and POST parameters from various methods. The value obtained should beconsidered unsafe. You may need to validate or sanitize those values before passing them tosensitive APIs

Incorrect Type Conversion or Cast

The application is using `Integer.toHexString` on a digest array buffer whichmay lead to an incorrect version of values.Consider using the `java.util.HexFormat` object introduced in Java 17. For older Java applicationsconsider using the `javax.xml.bind.DatatypeConverter`.Example using `HexFormat` to create a human-readable // Call update with your datasha384Digest.update(“some input”.getBytes(StandardCharsets.UTF\_8));// Only call digest once all data has been fed into the update sha384digest instancebyte\[\] output = sha384Digest.digest();// Create a JDK 17 HexFormat objectHexFormat hex = HexFormat.of();// Use formatHex on the byte array to create a string (note that alphabet characters arelowercase)String hexString = hex.formatHex(output);For more information on DatatypeConverter see:https://docs.oracle.com/javase/9/docs/api/javax/xml/bind/DatatypeConverter.html#printHexBinary-byte:A-

Incorrect Type Conversion or Cast

‘Integer.toHexString()’ strips leading zeroes from each byte if read byte-by-byte. This mistake weakens the hash value computed since it introduces more collisions. Use ‘String.format("%02X", …)’ instead.

Use of Externally-Controlled Format String

The application allows user input to control format string parameters. By passing invalidformatstring specifiers an adversary could cause the application to throw exceptions or possiblyleakinternal information depending on application logic.Never allow user-supplied input to be used to create a format string. Replace all formatstringarguments with hardcoded format strings containing the necessary specifiers.Example of using `String.format` // Ensure that user input is not included in the first argument to String.formatString.format(“Hardcoded string expecting a // …

Improper Control of Generation of Code (‘Code Injection’)

The application may allow control over a template string. Providing user input directly in thetemplate bydynamically creating template strings may allow an adversary to execute arbitrary Java code,includingOS system commands.For Velocity, never call `evaluate` with user-supplied input in the template string. Use a`VelocityContext`object instead to data-bind user-supplied information as it will be treated as an underlyingdata type and nottemplate code.Example using Apache Velocity’s `VelocityContext` and escape tools to pass in user-supplieddata to a // Create a context from the tool managerContext context = manager.createContext();// For demonstration purposes, alternatively configure from a properties filecontext.put(“esc”, new EscapeTool());// For demonstration purposes, create an output bufferStringWriter stringWriter = new StringWriter();// Get userInputString userInput = “potentially malicious data”;// Use the context to pass in the userInput valuecontext.put(“userInput”, userInput);// Pass in the context, the output buffer, a logtag (demo), and the template with userInput// making sure to escape it if in the context of HTML.Velocity.evaluate(context, stringWriter, “demo”, “Hello $esc.html($userInput)”);// Work with the output buffer// …For other templating engines, please see your framework’s documentation.

Improper Control of Generation of Code (‘Code Injection’)

Detected potential code injection using ScriptEngine. Ensure user-controlled data cannot enter ‘.eval()’, otherwise, this is a code injection vulnerability.

Improper Control of Generation of Code (‘Code Injection’)

A expression is built with a dynamic value. The source of the value(s) should be verified to avoid that unfiltered values fall into this risky code evaluation.

Improper Control of Generation of Code (‘Code Injection’)

An expression is built with a dynamic value. The source of the value(s) should be verified to avoid that unfiltered values fall into this risky code evaluation.

Improper Control of Generation of Code (‘Code Injection’)

A expression is built with a dynamic value. The source of the value(s) should be verified to avoid that unfiltered values fall into this risky code evaluation.

Improper Control of Generation of Code (‘Code Injection’)

A Spring expression is built with a dynamic value. The source of the value(s) should be verified to avoid that unfiltered values fall into this risky code evaluation.

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Restriction of XML External Entity Reference

Generic XXE in `\$JC`. The ‘javax.xml.bind.Unmarshaller’ parses XML and does not support any flags for disabling XXE, it’s imperativeto parse the untrusted XML through a configurable secure parser first, generate a source object as a result, and pass thesource object to the Unmarshaller.

Improper Restriction of XML External Entity Reference

XMLDecoder should not be used to parse untrusted data.Deserializing user input can lead to arbitrary code execution.Use an alternative and explicitly disable external entities.

Improper Restriction of XML External Entity Reference

XML external entities are enabled for this XMLInputFactory. This is vulnerable to XML external entity attacks. Disable external entities by setting “javax.xml.stream.isSupportingExternalEntities” to false.

Improper Restriction of XML External Entity Reference

XML external entities are not explicitly disabled for this XMLInputFactory. This could be vulnerable to XML external entity vulnerabilities. Explicitly disable external entities by setting “javax.xml.stream.isSupportingExternalEntities” to false.

Improper Restriction of XML External Entity Reference

External XML entities are a feature of XML parsers that allow documents to contain referencestoother documents or data. This feature can be abused to read files, communicate with externalhosts,exfiltrate data, or cause a Denial of Service (DoS).The XMLReaderFactory has been deprecated. It is recommended (// Enable the feature which disallows external entities.saxParserFactory.setFeature(”// Create a new parser from this factorySAXParser parser = saxParserFactory.newSAXParser();// Parse the XML file, passing in a DefaultHandler (which also includes an empty entityResolvemethod)parser.parse(new FileInputStream(new File(“bad.xml”)), new DefaultHandler());For more information on XML security see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#java

Improper Restriction of XML External Entity Reference

External XML entities are a feature of XML parsers that allow documents to contain referencestoother documents or data. This feature can be abused to read files, communicate with externalhosts,exfiltrate data, or cause a Denial of Service (DoS).In most XML parsers, the recommendation to protect against XXE is to disable the doctypefeature.Unfortunately use of the `XMLInputFactory` requires that the doctypes feature be enabled.Insteadthe application can set the `ACCESS_EXTERNAL_DTD` to an empty string and disable`javax.xml.stream.isSupportingExternalEntities`.Creates an `XMLInputFactory` stream parser, but disables accessing external DTD or // Set the ACCESS\_EXTERNAL\_DTD property to an empty string so it won’t access// entities using protocols// (// Additionally, disable support for resolving external entitiesfactory.setProperty(“javax.xml.stream.isSupportingExternalEntities”, false);// Continue to work with the factory/stream parserFor more information on XML security see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#java

Improper Restriction of XML External Entity Reference

External XML entities are a feature of XML parsers that allow documents to contain referencestoother documents or data. This feature can be abused to read files, communicate with externalhosts,exfiltrate data, or cause a Denial of Service (DoS).It is recommended that the `SAXParser` is configured to disable DTD doctypes as this protectsagainst the majority of XXE attacks.Example creating a SAXParser with disallowing the doctypes feature // Enable the feature which disallows external entities.saxParserFactory.setFeature("// Create a new parser from this factorySAXParser parser = saxParserFactory.newSAXParser();// Parse the XML file, passing in a DefaultHandler (which also includes an empty entityResolvemethod)parser.parse(new FileInputStream(new File(“bad.xml”)), new DefaultHandler());For more information on XML security see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#java

Improper Restriction of XML External Entity Reference

XML External Entity (XXE) attacks can occur when an XML parser supports XMLentities while processing XML received from an untrusted source.

Improper Restriction of XML External Entity Reference

XML external entities are not explicitly disabled for this XMLInputFactory. This could be vulnerable to XML external entity vulnerabilities. Explicitly disable external entities by setting “javax.xml.stream.isSupportingExternalEntities” to false.

Improper Restriction of XML External Entity Reference

XML external entities are enabled for this XMLInputFactory. This is vulnerable to XML external entity attacks. Disable external entities by setting “javax.xml.stream.isSupportingExternalEntities” to false.

Improper Restriction of XML External Entity Reference

XMLDecoder should not be used to parse untrusted data. Deserializing user input can lead to arbitrary code execution. Use an alternative and explicitly disable external entities. See [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html) for alternatives and vulnerability prevention.

Improper Restriction of XML External Entity Reference

Digester being instantiated without calling the setFeature functions that are generally used for disabling entity processing

Improper Restriction of XML External Entity Reference

DocumentBuilderFactory being instantiated without calling the setFeature functions that are generally used for disabling entity processing

Improper Restriction of XML External Entity Reference

XMLInputFactory being instantiated without calling the setProperty functions that are generally used for disabling entity processing

Improper Restriction of XML External Entity Reference

SAXBuilder being instantiated without calling the setFeature functions that are generally used for disabling entity processing

Improper Restriction of XML External Entity Reference

SAXReader being instantiated without calling the setFeature functions that are generally used for disabling entity processing

Improper Restriction of XML External Entity Reference

Non-exhaustive list of Libraries that provide functionality to accept XML as an input

Improper Restriction of XML External Entity Reference

SAXParserFactory being instantiated without calling the setFeature functions that are generally used for disabling entity processing

Improper Restriction of XML External Entity Reference

External entities are allowed for $DBFACTORY. This is vulnerable to XML external entity attacks. Disable this by setting the feature “[http://xml.org/sax/features/external-general-entities"](http://xml.org/sax/features/external-general-entities%22) to false.

Improper Restriction of XML External Entity Reference

DOCTYPE declarations are enabled for this TransformerFactory. This is vulnerable to XML external entity attacks. Disable this by setting the attributes “accessExternalDTD” and “accessExternalStylesheet” to “”.

Improper Restriction of XML External Entity Reference

DOCTYPE declarations are enabled for this DocumentBuilderFactory. This is vulnerable to XML external entity attacks. Disable this by setting the feature “[http://apache.org/xml/features/disallow-doctype-decl"](http://apache.org/xml/features/disallow-doctype-decl%22) to true. Alternatively, allow DOCTYPE declarations and only prohibit external entities declarations. This can be done by setting the features “[http://xml.org/sax/features/external-general-entities"](http://xml.org/sax/features/external-general-entities%22) and “[http://xml.org/sax/features/external-parameter-entities"](http://xml.org/sax/features/external-parameter-entities%22) to false.

Improper Restriction of XML External Entity Reference

DOCTYPE declarations are enabled for this SAXParserFactory. This is vulnerable to XML external entity attacks. Disable this by setting the feature “[http://apache.org/xml/features/disallow-doctype-decl"](http://apache.org/xml/features/disallow-doctype-decl%22) to true. Alternatively, allow DOCTYPE declarations and only prohibit external entities declarations. This can be done by setting the features “[http://xml.org/sax/features/external-general-entities"](http://xml.org/sax/features/external-general-entities%22) and “[http://xml.org/sax/features/external-parameter-entities"](http://xml.org/sax/features/external-parameter-entities%22) to false.

Improper Restriction of XML External Entity Reference

DOCTYPE declarations are enabled for $DBFACTORY. Without prohibiting external entity declarations, this is vulnerable to XML external entity attacks. Disable this by setting the feature “[http://apache.org/xml/features/disallow-doctype-decl"](http://apache.org/xml/features/disallow-doctype-decl%22) to true. Alternatively, allow DOCTYPE declarations and only prohibit external entities declarations. This can be done by setting the features “[http://xml.org/sax/features/external-general-entities"](http://xml.org/sax/features/external-general-entities%22) and “[http://xml.org/sax/features/external-parameter-entities"](http://xml.org/sax/features/external-parameter-entities%22) to false.

Improper Restriction of XML External Entity Reference

External entities are allowed for $DBFACTORY. This is vulnerable to XML external entity attacks. Disable this by setting the feature “[http://xml.org/sax/features/external-parameter-entities"](http://xml.org/sax/features/external-parameter-entities%22) to false.

Improper Restriction of XML External Entity Reference

XMLReader being instantiated without calling the setFeature functions that are generally used for disabling entity processing

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

A file is opened to read its content. The filename comes from an inputparameter. If an unfiltered parameter is passed to this file API, files from anarbitrary filesystem location could be read.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

A file is opened to read its content. The filename comes from an input parameter. If anunfiltered parameter is passed to this file API, files from an arbitrary filesystem locationcould be read. This rule identifies potential path traversal vulnerabilities. In many cases,the constructed file path cannot be controlled by the user.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

A file is opened to write to its contents. The filename comes from an input parameter. If anunfiltered parameter is passed to this file API, files at an arbitrary filesystem locationcould be modified. This rule identifies potential path traversal vulnerabilities. In manycases, the constructed file path cannot be controlled by the user.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Detected a potential path traversal. A malicious actor could control the location of this file, to include going backwards in the directory with ‘../’. To address this, ensure that user-controlled variables in file paths are sanitized. You may also consider using a utility method such as org.apache.commons.io.FilenameUtils.getName(…) to only retrieve the file name from the path.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Detected a potential path traversal. A malicious actor could control the location of this file, to include going backwards in the directory with ‘../’. To address this, ensure that user-controlled variables in file paths are sanitized. You may also consider using a utility method such as org.apache.commons.io.FilenameUtils.getName(…) to only retrieve the file name from the path.

Files or Directories Accessible to External Parties

The `HttpRequest.getRequestDispatcher()`’s `include` and `forward` methods will returnany file that is resolvable within the web application context. This includes the `web.xml`file, any compiled classes, `jsp` files, and additional JAR or WAR libraries that areaccessible.Never pass user-supplied input directly to any of these methods. Use a lookup table orhardcodewhich views or paths the user should be directed to. Another option is to use a simple HTTPredirect by returning an empty response body with a 301 status code and a `Location` redirectheader. In Java servlets, this can be done by using the `response.sendRedirect(...)` method.Example using a redirect instead of a `RequestDispatcher`:// Create a look up table or pull from a data sourceHashMap lookupTable = new HashMap<>();lookupTable.put(“key1”, “/Resource1”);lookupTable.put(“key2”, “/Resource2”);// Get user inputString userInput = request.getParameter(“key”);// Look up resource to redirect to from the user inputString redirectValue = lookupTable.getOrDefault(userInput, “/Resource1”);// Redirect the userresponse.sendRedirect(redirectValue);

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

In $METHOD, $X is used to construct a SQL query via string concatenation.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as Sequelize which will protect your queries.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected SQL statement that is tainted by `\$EVENT` object. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use parameterized SQL queries or properly sanitize user input instead.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements (java.sql.PreparedStatement) instead. You can obtain a PreparedStatement using ‘connection.prepareStatement’.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Possible JDBC injection detected. Use the parameterized query feature available in queryForObject instead of concatenating or formatting '

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a string argument from a public method contract in a raw SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements (java.sql.PreparedStatement) instead. You can obtain a PreparedStatement using ‘connection.prepareStatement’.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

User data flows into this manually-constructed SQL string. User data can be safely inserted into SQL strings using prepared statements or an object-relational mapper (ORM). Manually-constructed SQL strings is a possible indicator of SQL injection, which could let an attacker steal or manipulate data from the database. Instead, use prepared statements (`connection.PreparedStatement`) or a safe library.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements (java.sql.PreparedStatement) instead. You can obtain a PreparedStatement using ‘connection.prepareStatement’.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements (java.sql.PreparedStatement) instead. You can obtain a PreparedStatement using ‘connection.prepareStatement’.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements (java.sql.PreparedStatement) instead. You can obtain a PreparedStatement using ‘connection.prepareStatement’.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected input from a HTTPServletRequest going into a SQL sink or statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use parameterized SQL queries or properly sanitize user input instead.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements (java.sql.PreparedStatement) instead. You can obtain a PreparedStatement using ‘connection.prepareStatement’.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements (java.sql.PreparedStatement) instead. You can obtain a PreparedStatement using ‘connection.prepareStatement’.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements (java.sql.PreparedStatement) instead. You can obtain a PreparedStatement using ‘connection.prepareStatement’.

External Control of System or Configuration Setting

The application was found using user-supplied input in a `java.sql.Connection`’s`setCatalog` call. This could allow an adversary to supply a different database for thelifetime of the connection. Allowing external control of system settings can disrupt serviceor cause an application to behave in unexpected, and potentially malicious ways. Most likelythis would only cause an error by providing a nonexistent catalog name.It is recommended to not use user-supplied input when selecting the database for anapplicationsdatabase connection.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

App uses SQLite Database and execute raw SQL query. Untrusted user input in raw SQL queries can cause SQL Injection. Also sensitive information should be encrypted and written to the database.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

A formatted or concatenated string was detected as input to a java.lang.Runtime call. This is dangerous if a variable is controlled by user input and could result in a command injection. Ensure your variables are not controlled by users or sufficiently sanitized.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

User controlled strings in exec() will result in command execution.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Semgrep found potential reverse shell behavior

Improper Neutralization of Special Elements used in an LDAP Query (‘LDAP Injection’)

An object-returning LDAP search will allow attackers to control the LDAP response. This could lead to Remote Code Execution.

Improper Neutralization of Special Elements used in an LDAP Query (‘LDAP Injection’)

Detected input from a HTTPServletRequest going into an LDAP query. This could lead to LDAP injection if the input is not properly sanitized, which could result in attackers modifying objects in the LDAP tree structure. Ensure data passed to an LDAP query is not controllable or properly sanitize the data.

Improper Neutralization of Special Elements used in an LDAP Query (‘LDAP Injection’)

Detected non-constant data passed into an LDAP query. If this data can be controlled by an external user, this is an LDAP injection. Ensure data passed to an LDAP query is not controllable; or properly sanitize the data.

Improper Neutralization of Special Elements in Data Query Logic

Detected non-constant data passed into a NoSQL query using the ‘where’ evaluation operator. If this data can be controlled by an external user, this is a NoSQL injection. Ensure data passed to the NoSQL query is not user controllable, or properly sanitize the data. Ideally, avoid using the ‘where’ operator at all and instead use the helper methods provided by com.mongodb.client.model.Filters with comparative operators such as eq, ne, lt, gt, etc.

Improper Neutralization of CRLF Sequences (‘CRLF Injection’)

When data from an untrusted source is put into a logger and not neutralized correctly, an attacker could forge log entries or include malicious content.

Improper Privilege Management

The application was found to permit the `RuntimePermission` of `createClassLoader`,`ReflectPermission` of `suppressAccessChecks`, or both.By granting the `RuntimePermission` of `createClassLoader`, a compromised applicationcould instantiate their own class loaders and load arbitrary classes.By granting the `ReflectPermission` of `suppressAccessChecks` an application will no longercheck Java language access checks on fields and methods of a class. This will effectivelygrant access to protected and private members.For more information on `RuntimePermission` see:https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimePermission.htmlFor more information on `ReflectPermission` see:https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/ReflectPermission.html

Improper Privilege Management

Marking code as privileged enables a piece of trusted code to temporarily enable access to more resources than are available directly to the code that called it. Be very careful in your use of the privileged construct, and always remember to make the privileged code section as small as possible.

Incorrect Permission Assignment for Critical Resource

The application was found setting file permissions to overly permissive values. Considerusing the following values if the application user is the only process to accessthe // Create a PosixFilePermission set from java.nio.file.attributeSet permissions =java.nio.file.attribute.PosixFilePermissions.fromString(“rw——-”);// Set the permissionsjava.nio.file.Files.setPosixFilePermissions(path, permissions);For all other values please see:https://en.wikipedia.org/wiki/File-system\_permissions#Symbolic\_notation

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The application is disabling Wicket’s string escaping functionality by calling`setEscapeModelStrings(false)`.This could lead to Cross Site Scripting (XSS) if used with user-supplied input. XSS is anattack which exploits a web application or system to treat user inputas markup or script code. It is important to encode the data depending on the specific contextitis used in. There are at least six context \`For more information on Wicket components see:- [https://nightlies.apache.org/wicket/apidocs/9.x/org/apache/wicket/Component.htmlFor](https://nightlies.apache.org/wicket/apidocs/9.x/org/apache/wicket/Component.htmlFor) more information on XSS see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Cross\_Site\_Scripting\_Prevention\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The application is returning user-supplied data from an HTTP request directly into an HTTPresponse outputwriter. This could lead to Cross Site Scripting (XSS) if the input were maliciousscript code and the application server is not properly validating the output.XSS is an attack which exploits a web application or system to treat user inputas markup or script code. It is important to encode the data depending on the specific contextit is used in. There are at least six context // Encode the input using the Html4 encoderString htmlEncoded = StringEscapeUtils.escapeHtml4(htmlInput);// Force the HTTP response to be content type of text/plain so it is not interpreted as HTMLresponse.setContentType(“text/plain”);// Ensure UTF-8response.setCharacterEncoding(“UTF-8”);// Write responseresponse.getWriter().write(htmlEncoded);For more information on XSS see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Cross\_Site\_Scripting\_Prevention\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The application is returning user-supplied data from an HTTP request to an HTTP response’s`sendError` method. This could lead to Cross Site Scripting (XSS) if the input were maliciousscript code and the application server is not properly validating the output. Note that ApacheTomcat 9 and above automatically encode the output and are not vulnerable.XSS is an attack which exploits a web application or system to treat user inputas markup or script code. It is important to encode the data depending on the specific contextit is used in. There are at least six context // Encode the input using the Html4 encoderString encoded = StringEscapeUtils.escapeHtml4(userInput);// Respond with the error code and valueresponse.sendError(401, encoded);For more information on XSS see OWASP:-https://cheatsheetseries.owasp.org/cheatsheets/Cross\_Site\_Scripting\_Prevention\_Cheat\_Sheet.html

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Cross-site scripting detected in HttpServletResponse writer with variable ‘$VAR’. User input was detected going directly from the HttpServletRequest into output. Ensure your data is properly encoded using org.owasp.encoder.Encode.forHtml: ‘Encode.forHtml($VAR)’.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

It looks like you’re using an implementation of XSSRequestWrapper from dzone. ([https://www.javacodegeeks.com/2012/07/anti-cross-site-scripting-xss-filter.html](https://www.javacodegeeks.com/2012/07/anti-cross-site-scripting-xss-filter.html) ) The XSS filtering in this code is not secure and can be bypassed by malicious actors. It is recommended to use a stack that automatically escapes in your view or templates instead of filtering yourself.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected user input flowing into a manually constructed HTML string. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. To be sure this is safe, check that the HTML is rendered safely. You can use the OWASP ESAPI encoder if you must render user data.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a request with potential user-input going into a OutputStream or Writer object. This bypasses any view or template environments, including HTML escaping, which may expose this application to cross-site scripting (XSS) vulnerabilities. Consider using a view technology such as JavaServer Faces (JSFs) which automatically escapes HTML views.

Improper Authentication

SAML parses attestations as an XML document. By processing XML comments, commentfields can end up modifying the interpretation of input fields. This could allowan adversary to insert an XML comment to break up the attestation’s usernameor other fields, allowing an attacker to bypass authorization or authentication checks.To remediate this issue, when using `org.opensaml.xml.parse.BasicParserPool` ensure`setIgnoreComments(false)` is not called.The default value of `ignoreComments` is true, which is safe. Ref:- [https://javadoc.io/doc/org.opensaml/xmltooling/latest/org/opensaml/xml/parse/BasicParserPool.html#ignoreCommentsFor](https://javadoc.io/doc/org.opensaml/xmltooling/latest/org/opensaml/xml/parse/BasicParserPool.html#ignoreCommentsFor) more information on how this issue can be exploited see:https://developer.okta.com/blog/2018/02/27/a-breakdown-of-the-new-saml-authentication-bypass-vulnerabilityFor more information on SAML security see OWASP:https://cheatsheetseries.owasp.org/cheatsheets/SAML\_Security\_Cheat\_Sheet.html

Improper Authentication

Detected anonymous LDAP bind. This permits anonymous users to execute LDAP statements. Consider enforcing authentication for LDAP. See [https://docs.oracle.com/javase/tutorial/jndi/ldap/auth\_mechs.html](https://docs.oracle.com/javase/tutorial/jndi/ldap/auth_mechs.html) for more information.

Deserialization of Untrusted Data

The app uses jackson deserialization library. Deserialization of untrusted input can result in arbitrary code execution. Consider using HMACs to sign the data stream to make sure it is not tampered with, or consider only transmitting object fields and populating a new object.

Deserialization of Untrusted Data

Found object deserialization using ObjectInputStream. Deserializing entire Java objects is dangerous because malicious actors can create Java object streams with unintended consequences. Ensure that the objects being deserialized are not user-controlled. Consider using HMACs to sign the data stream to make sure it is not tampered with, or consider only transmitting object fields and populating a new object.

Deserialization of Untrusted Data

$X Jackson Polymorphic Typing: Polymorphic typing may have been introduced through overriding the default Jackson type resolver.

Deserialization of Untrusted Data

Jackson Polymorphic Typing: This rule is to detect any instances of polymorphic typing to aid in determining vulnerable Jackson deserialization issues. Check if deserializing untrusted JSON to a nominal type such as `java.lang.Object` or permissive tag interfaces such as `java.io.Serializable` or `java.lang.Comparable` is occuring.

Deserialization of Untrusted Data

Jackson deserialization vulnerability in Java arises when applicationsusing the Jackson library deserialize untrusted JSON data without proper safeguards,potentially leading to severe security risks like remote code execution (RCE).1. Avoid using polymorphic type handling and avoid deserializing user input.2. Absolutely avoid using Unsafe Base Types for fields. Types considered unsafebase types include: \* java.lang.Object \* java.io.Closeable \* java.io.Serializable \* java.lang.AutoCloseable \* java.lang.Cloneable \* java.util.logging.Handler \* javax.naming.Referenceable \* javax.sql.DataSource List of types compiled from a set of all known deserialization “gadgets”, types they implement.Reference : [https://github.com/FasterXML/jackson-databind/issues/2587](https://github.com/FasterXML/jackson-databind/issues/2587) 3. For explicit per-type/per-property polymorphic handling (@JsonTypeInfo), don’tuse: \* @JsonTypeInfo(use = JsonTypeInfo.Id.CLASS) annotation  \* @JsonTypeInfo(use = JsonTypeInfo.Id.MINIMAL\_CLASS) annotationInstead use: \* @JsonTypeInfo(use = JsonTypeInfo.Id.NAME) annotation where possible.4. Use Safe Default Typing feature properly. Don’t use the deprecated ‘enableDefaultTyping()’. \* Refer: [https://cowtowncoder.medium.com/jackson-2-10-safe-default-typing-2d018f0ce2ba](https://cowtowncoder.medium.com/jackson-2-10-safe-default-typing-2d018f0ce2ba) \* Use Type Validators properly. \* Don’t explicitly allow unsafe base types5. Avoid using com.fasterxml.jackson.databind.jsontype.impl.LaissezFaireSubTypeValidator\* Does not do any validation, allows all subtypes. Only used for backwards-compatibilityreasons: users should usually NOT use such a permissive implementation but useallow-list/criteria - based implementation. \* Refer: [https://fasterxml.github.io/jackson-databind/javadoc/2.11/com/fasterxml/jackson/databind/jsontype/impl/LaissezFaireSubTypeValidator.html6](https://fasterxml.github.io/jackson-databind/javadoc/2.11/com/fasterxml/jackson/databind/jsontype/impl/LaissezFaireSubTypeValidator.html6) . Use MapperFeature.BLOCK\_UNSAFE\_POLYMORPHIC\_BASE\_TYPES where possible. \* Refer: [https://cowtowncoder.medium.com/jackson-2-11-features-40cdc1d2bdf37](https://cowtowncoder.medium.com/jackson-2-11-features-40cdc1d2bdf37) . Regularly update to the latest version of Jackson library.

Deserialization of Untrusted Data

XStream XML Deserialzation: Check that they have correctly set an allow-list and if an attacker can control input.

Deserialization of Untrusted Data

Test message

Deserialization of Untrusted Data

When a Restful webservice endpoint is configured to use wildcard mediaType {_/_} as a value for the @Consumes annotation, an attacker could abuse the SerializableProvider by sending a HTTP Request with a Content-Type of application/x-java-serialized-object. The body of that request would be processed by the SerializationProvider and could contain a malicious payload, which may lead to arbitrary code execution when calling the $Y.getObject method.

Deserialization of Untrusted Data

When a Restful webservice endpoint isn’t configured with a @Consumes annotation, an attacker could abuse the SerializableProvider by sending a HTTP Request with a Content-Type of application/x-java-serialized-object. The body of that request would be processed by the SerializationProvider and could contain a malicious payload, which may lead to arbitrary code execution. Instead, add a @Consumes annotation to the function or class.

Deserialization of Untrusted Data

JMS Object messages depend on Java Serialization for marshalling/unmarshalling of the message payload when ObjectMessage.getObject() is called. Deserialization of untrusted data can lead to security flaws; a remote attacker could via a crafted JMS ObjectMessage to execute arbitrary code with the permissions of the application listening/consuming JMS Messages. In this case, the JMS MessageListener consume an ObjectMessage type received inside the onMessage method, which may lead to arbitrary code execution when calling the $Y.getObject method.

Deserialization of Untrusted Data

Used SnakeYAML org.yaml.snakeyaml.Yaml() constructor with no arguments, which is vulnerable to deserialization attacks. Use the one-argument Yaml(…) constructor instead, with SafeConstructor or a custom Constructor as the argument.

Deserialization of Untrusted Data

When using Jackson to marshall/unmarshall JSON to Java objects, enabling default typing is dangerous and can lead to RCE. If an attacker can control `\$JSON` it might be possible to provide a malicious JSON which can be used to exploit unsecure deserialization. In order to prevent this issue, avoid to enable default typing (globally or by using “Per-class” annotations) and avoid using `Object` and other dangerous types for member variable declaration which creating classes for Jackson based deserialization.

Deserialization of Untrusted Data

Using a non-primitive class with Java RMI may be an insecure deserialization vulnerability. Depending on the underlying implementation. This object could be manipulated by a malicious actor allowing them to execute code on your system. Instead, use an integer ID to look up your object, or consider alternative serialization schemes such as JSON.

Deserialization of Untrusted Data

Using an arbitrary object (‘Object $PARAM’) with Java RMI is an insecure deserialization vulnerability. This object can be manipulated by a malicious actor allowing them to execute code on your system. Instead, use an integer ID to look up your object, or consider alternative serialization schemes such as JSON.

Deserialization of Untrusted Data

Found object deserialization using ObjectInputStream. Deserializing entire Java objects is dangerous because malicious actors can create Java object streams with unintended consequences. Ensure that the objects being deserialized are not user-controlled. If this must be done, consider using HMACs to sign the data stream to make sure it is not tampered with, or consider only transmitting object fields and populating a new object.

Exposure of Sensitive Information to an Unauthorized Actor

This app does not have capabilities to prevent tapjacking attacks. An attacker can hijack the user’s taps and tricks him into performing some critical operations that he did not intend to.

Exposure of Sensitive Information to an Unauthorized Actor

This app does not have capabilities to prevent against Screenshots from Recent Task History/ Now On Tap etc.

Exposure of Sensitive Information to an Unauthorized Actor

URL rewriting has significant security risks. Since session ID appears in the URL, it may be easily seen by third parties.

Exposure of Sensitive Information to an Unauthorized Actor

Spring Boot Actuators “$…ACTUATORS” are enabled. Depending on the actuators, this can pose a significant security risk. Please double-check if the actuators are needed and properly secured.

Exposure of Sensitive Information to an Unauthorized Actor

Spring Boot Actuator is fully enabled. This exposes sensitive endpoints such as /actuator/env, /actuator/logfile, /actuator/heapdump and others. Unless you have Spring Security enabled or another means to protect these endpoints, this functionality is available without authentication, causing a severe security risk.

Improper Validation of Certificate with Host Mismatch

The Apache commons mail client by default does not enable TLS server identity.This allows for an adversary who is in between the application and the target host to interceptpotentially sensitive information or transmit malicious data.Enable checking server identity by calling `Email.setSSLCheckServerIdentity(true)`Example email client that enables TLS and server // Configure the email hostnameemail.setHostName(“smtp.mail.example.com”);// Set the portemail.setSmtpPort(465);// Securely retrieve username and password valuesString username = getUserNameFromKMSorSecretStore();String password = getPasswordFromKMSorSecretStore();// Configure the AuthenticatorDefaultAuthenticator auth = new DefaultAuthenticator(username, password);// Set the authenticatoremail.setAuthenticator(auth);// Ensure we use SSL on connectemail.setSSLOnConnect(true);// Ensure we validate server identityemail.setSSLCheckServerIdentity(true);// configure the rest of the emailemail.setFrom(“[x@example.com](mailto:x@example.com) ”);email.setSubject(“TestMail”);email.setMsg(“This is a test mail … :-)”);email.addTo(“[y@example.com](mailto:y@example.com) ”);email.send();

Improper Validation of Certificate with Host Mismatch

Insecure SMTP connection detected. This connection will trust any SSL certificate. Enable certificate verification by setting ’email.setSSLCheckServerIdentity(true)’.

URL Redirection to Untrusted Site (‘Open Redirect’)

Application redirects to a destination URL specified by a user-supplied parameter that is not validated. This could direct users to malicious locations. Consider using an allowlist to validate URLs.

URL Redirection to Untrusted Site (‘Open Redirect’)

Application redirects a user to a destination URL specified by a user supplied parameter that is not validated.

Cleartext Transmission of Sensitive Information

Test message

Cleartext Transmission of Sensitive Information

Default session middleware settings: `setSecure` not set to true. This ensures that the cookie is sent only over HTTPS to prevent cross-site scripting attacks.

Cleartext Transmission of Sensitive Information

Checks for redefinitions of functions that check TLS/SSL certificate verification. This can lead to vulnerabilities, as simple errors in the code can result in lack of proper certificate validation. This should only be used for debugging purposes because it leads to vulnerability to MTM attacks.

Cleartext Transmission of Sensitive Information

Checks for requests sent via Java Spring RestTemplate API to http:// URLS. This is dangerous because the server is attempting to connect to a website that does not encrypt traffic with TLS. Instead, send requests only to https:// URLS.

Cleartext Transmission of Sensitive Information

Checks for outgoing connections to ftp servers via Spring plugin ftpSessionFactory. FTP does not encrypt traffic, possibly leading to PII being sent plaintext over the network.

Cleartext Transmission of Sensitive Information

Checks for requests sent via Apache HTTP Components to http:// URLS. This is dangerous because the server is attempting to connect to a website that does not encrypt traffic with TLS. Instead, send requests only to https:// URLS.

Cleartext Transmission of Sensitive Information

Checks for attempts to connect through telnet. This is insecure as the telnet protocol supports no encryption, and data passes through unencrypted.

Cleartext Transmission of Sensitive Information

Checks for requests sent via Unirest to http:// URLS. This is dangerous because the server is attempting to connect to a website that does not encrypt traffic with TLS. Instead, send requests only to https:// URLS.

Cleartext Transmission of Sensitive Information

Insecure transport rules to catch socket connections to http, telnet, and ftp servers. This is dangerous because these are protocols that do not encrypt traffic.

Cleartext Transmission of Sensitive Information

Checks for redefinitions of the checkServerTrusted function in the X509TrustManager class that disables TLS/SSL certificate verification. This should only be used for debugging purposes because it leads to vulnerability to MTM attacks.

Cleartext Transmission of Sensitive Information

Detects setting client protocols to insecure versions of TLS and SSL. These protocols are deprecated due to POODLE, man in the middle attacks, and other vulnerabilities.

Cleartext Transmission of Sensitive Information

Detects direct creations of SSLConnectionSocketFactories that don’t disallow SSL v2, SSL v3, and TLS v1. SSLSocketFactory can be used to validate the identity of the HTTPS server against a list of trusted certificates. These protocols are deprecated due to POODLE, man in the middle attacks, and other vulnerabilities.

Cleartext Transmission of Sensitive Information

Checks for requests sent via HttpClient to http:// URLS. This is dangerous because the server is attempting to connect to a website that does not encrypt traffic with TLS. Instead, send requests only to https:// URLS.

Cleartext Transmission of Sensitive Information

Detected an HTTP request sent via HttpGet. This could lead to sensitive information being sent over an insecure channel. Instead, it is recommended to send requests over HTTPS.

Cleartext Transmission of Sensitive Information

Checks for cases where java applications are allowing unsafe renegotiation. This leaves the application vulnerable to a man-in-the-middle attack where chosen plain text is injected as prefix to a TLS connection.

Cleartext Transmission of Sensitive Information

Checks for outgoing connections to ftp servers. FTP does not encrypt traffic, possibly leading to PII being sent plaintext over the network.

Cleartext Transmission of Sensitive Information

Detected an HTTP request sent via HttpURLConnection. This could lead to sensitive information being sent over an insecure channel. Instead, it is recommended to send requests over HTTPS.

Cleartext Transmission of Sensitive Information

Detected use of a Java socket that is not encrypted. As a result, the traffic could be read by an attacker intercepting the network traffic. Use an SSLSocket created by ‘SSLSocketFactory’ or ‘SSLServerSocketFactory’ instead.

Permissive Cross-domain Policy with Untrusted Domains

This application potentially allows user-supplied input into the value of the`Access-Control-Allow-Origin` response header. This header is part of ( allowedDomains.put(“sub1”, “sub1.example.com”); allowedDomains.put(“sub2”, “sub2.example.com”); // extract the allowedDomain parameters value as a key to look up which domain to providevia the allowedDomains map // if not found, sets sub1 as the default String headerValue = allowedDomains.getOrDefault(request.getParameter(“allowedDomain”),allowedDomains.get(“sub1”)); // add the header with our trusted sub1.example.com or sub2.example.com domains. response.addHeader(“Access-Control-Allow-Origin”, headerValue);}For more information on `Access-Control-Allow-Origin` see:https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin

Permissive Cross-domain Policy with Untrusted Domains

Prior to HTML5, Web browsers enforced the Same Origin Policy which ensures that in order forJavaScript to access the contents of a Web page, both the JavaScript and the Web page mustoriginate from the same domain. Without the Same Origin Policy, a malicious website could serveup JavaScript that loads sensitive information from other websites using a client’scredentials, cull through it, and communicate it back to the attacker. HTML5 makes it possiblefor JavaScript to access data across domains if a new HTTP header calledAccess-Control-Allow-Origin is defined. With this header, a Web server defines which otherdomains are allowed to access its domain using cross-origin requests. However, caution shouldbe taken when defining the header because an overly permissive CORS policy will allow amalicious application to communicate with the victim application in an inappropriate way,leading to spoofing, data theft, relay and other attacks.

Improper Neutralization of CRLF Sequences in HTTP Headers (‘HTTP Request/Response Splitting’)

Older Java application servers are vulnerable to HTTP response splitting, which may occur if an HTTP request can be injected with CRLF characters. This finding is reported for completeness; it is recommended to ensure your environment is not affected by testing this yourself.

Sensitive Cookie Without ‘HttpOnly’ Flag

The `HttpOnly` attribute when set to `true` protects the cookie value from being accessed byclient side JavaScript suchas reading the `document.cookie` values. By enabling this protection, a website that isvulnerable toCross-Site Scripting (XSS) will be able to block malicious scripts from accessing the cookievalue from JavaScript.Example of protecting a `Cookie`:// Create an HttpOnly cookie.Cookie someCookie = new Cookie(“SomeCookieName”, “SomeValue”);// Set HttpOnly flag to truesomeCookie.setHttpOnly(true);For more information see:https://jakarta.ee/specifications/servlet/4.0/apidocs/javax/servlet/http/cookie#setHttpOnly-boolean-Session cookies should be configured with the following security directives:- [HTTPOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) - [Secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) - [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)

Sensitive Cookie Without ‘HttpOnly’ Flag

A cookie was detected without setting the ‘HttpOnly’ flag. The ‘HttpOnly’ flag for cookies instructs the browser to forbid client-side scripts from reading the cookie. Set the ‘HttpOnly’ flag by calling ‘cookie.setHttpOnly(true);’

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

The `Secure` attribute when set to `true` protects the cookie value from being beingtransmitted over clear textcommunication paths such as HTTP. By enabling this protection, the cookie will only be sentover HTTPS.Example of protecting a `Cookie`:// Create an Secure cookie.Cookie someCookie = new Cookie(“SomeCookieName”, “SomeValue”);// Set Secure flag to truesomeCookie.setSecure(true);For more information see:https://jakarta.ee/specifications/servlet/4.0/apidocs/javax/servlet/http/cookie#setSecure-boolean-Session cookies should be configured with the following security directives:- [HTTPOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) - [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) - [Secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies)

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

A cookie was detected without setting the ‘secure’ flag. The ‘secure’ flag for cookies prevents the client from transmitting the cookie over insecure channels such as HTTP. Set the ‘secure’ flag by calling ‘$COOKIE.setSecure(true);’

Trust Boundary Violation

Detected input from a HTTPServletRequest going into a session command, like `setAttribute`. User input into such a command could lead to an attacker inputting malicious code into your session parameters, blurring the line between what’s trusted and untrusted, and therefore leading to a trust boundary violation. This could lead to programmers trusting unvalidated data. Instead, thoroughly sanitize user input before passing it into such function calls.

Use of Insufficiently Random Values

The App uses an insecure Random Number Generator.

Cross-Site Request Forgery (CSRF)

The application fails to protect against Cross-Site Request Forgery (CSRF)due to disabling Spring’s CSRF protection features.This vulnerability may allow attackers to carry out CSRF attacks by crafting malicious links or forms on external websites. Victims who are tricked into accessing these links while authenticated in your application could inadvertently perform actions that the attacker intends, such as changing user information, initiating transactions, or altering permissions.To remediate this issue, remove the call to `HttpSecurity.csrf().disable()` or remove the custom `CsrfConfigurer`.For more information on CSRF protection in Spring see:https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html#servlet-csrfAdditionally, consider setting all session cookies to have the `SameSite=Strict` attribute. It should be noted that this may impact usability when sharing links across other mediums.It is recommended that a two cookie based approach is taken, as outlined in ([https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-08#section-8.8.2)section](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-08#section-8.8.2%29section) of the SameSite RFC.For more information on CSRF see OWASP’s guide:https://owasp.org/www-community/attacks/csrf

Cross-Site Request Forgery (CSRF)

The application fails to protect against Cross-Site Request Forgery (CSRF)due to disabling Spring’s CSRF protection features.The vulnerability can be exploited by an adversary creating a link or form on a thirdparty site and tricking an authenticated victim to access them.To remediate this issue, remove the call to `HttpSecurity.csrf().disable()` or removethe custom `CsrfConfigurer`.For more information on CSRF protection in Spring see:https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html#servlet-csrfAdditionally, consider setting all session cookies to have the `SameSite=Strict` attribute.It should be noted that this may impact usability when sharing links across other mediums.It is recommended that a two cookie based approach is taken, as outlined in ([https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-08#section-8.8.2)sectionof](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-08#section-8.8.2%29sectionof) the SameSite RFC.For more information on CSRF see OWASP’s guide:https://owasp.org/www-community/attacks/csrf

Cross-Site Request Forgery (CSRF)

Detected a method annotated with ‘RequestMapping’ that does not specify the HTTP method. CSRF protections are not enabled for GET, HEAD, TRACE, or OPTIONS, and by default all HTTP methods are allowed when the HTTP method is not explicitly specified. This means that a method that performs state changes could be vulnerable to CSRF attacks. To mitigate, add the ‘method’ field and specify the HTTP method (such as ‘RequestMethod.POST’).

Cross-Site Request Forgery (CSRF)

Detected cookie without the SameSite attribute.

Cross-Site Request Forgery (CSRF)

CSRF protection is disabled for this configuration. This is a security risk.

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

RandomStringUtils uses java.util.Random by default which is not suitable for security

Improper Neutralization of Special Elements in Output Used by a Downstream Component (‘Injection’)

Possible Lookup injection into Log4j messages.

Improper Neutralization of Special Elements in Output Used by a Downstream Component (‘Injection’)

The application performs XSLT translation with potentially malicious input. An adversary whois able to influence theloadedXSL document could call XSL functions or exploit External XML Entity (XXE) attacks that allowfileretrieval or force the parser to connect to arbitrary servers to exfiltrate files. It isstronglyrecommended that an alternative approach is used to work with XML data.For increased security, never process user-supplied XSL style sheets. If XSLT processing isabsolutelynecessary, ensure that `FEATURE_SECURE_PROCESSING` is enabled prior to processing the XSLT// Enable the FEATURE\_SECURE\_PROCESSING featuretransformerFactory.setFeature(XMLConstants.FEATURE\_SECURE\_PROCESSING, true);// Read in the XML SourceSource xmlSource = new StreamSource(new FileInputStream(“hardcoded.xml”));// Read in the XSL template fileSource xslSource = new StreamSource(new FileInputStream(“hardcoded.xsl”));/// Create the transformer object to do the transformationTransformer transformer = transformerFactory.newTransformer(xslSource);// Create a Result object for outputResult result = new StreamResult(System.out);// Execute the transformation processtransformer.transform(xmlSource, result);For more information on XML security see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#javaFor more information on the secure processing feature see:- [https://xml.apache.org/xalan-j/features.html#secureprocessing](https://xml.apache.org/xalan-j/features.html#secureprocessing)

Improper Neutralization of Special Elements in Output Used by a Downstream Component (‘Injection’)

It is possible to attach malicious behavior to those style sheets. Therefore, if an attackercan control the content or the source of the style sheet, he might be able to trigger remotecode execution.

Improper Neutralization of Data within XPath Expressions (‘XPath Injection’)

Detected input from a HTTPServletRequest going into a XPath evaluate or compile command. This could lead to xpath injection if variables passed into the evaluate or compile commands are not properly sanitized. Xpath injection could lead to unauthorized access to sensitive information in XML documents. Instead, thoroughly sanitize user input or use parameterized xpath queries if you can.

Selection of Less-Secure Algorithm During Negotiation (‘Algorithm Downgrade’)

DefaultHTTPClient() with default constructor is not compatible with TLS 1.2.

Relative Path Traversal

Detected user input controlling a file path. An attacker could control the location of this file, to include going backwards in the directory with ‘../’. To address this, ensure that user-controlled variables in file paths are sanitized. You may also consider using a utility method such as org.apache.commons.io.FilenameUtils.getName(…) to only retrieve the file name from the path.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

The Seam logging API supports an expression language that allows developers to introduce bean properties to log messages. The expression language can also be the source to unwanted code execution. Expressions could be executed by dynamicallyinserting user-controlled input into the various logging calls. Use the \[Seam logging API format specifier\](

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Seam Logging API support an expression language to introduce bean property to log messages. The expression language can also be the source to unwanted code execution. In this context, an expression is built with a dynamic value. The source of the value(s) should be verified to avoid that unfiltered values fall into this risky code evaluation.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

A Spring expression is built with a dynamic value. The source of the value(s) should be verified to avoid that unfiltered values fall into this risky code evaluation.

Generation of Weak Initialization Vector (IV)

The App may use weak IVs like “0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00” or “0x01,0x02,0x03,0x04,0x05,0x06,0x07”. Not using a random IV makes the resulting ciphertext much more predictable and susceptible to a dictionary attack.

Generation of Predictable IV with CBC Mode

The IV for AES CBC mode should be random. A static IV makes the ciphertext vulnerable to Chosen Plaintext Attack.

Generation of Predictable IV with CBC Mode

GCM IV and key are both same source $KEY\_BYTES

Generation of Predictable IV with CBC Mode

Initialization Vectors (IVs) for block ciphers should be randomly generated each time they are used. Using a static IV means the same plaintext encrypts to the same ciphertext every time, weakening the strength of the encryption.

Reliance on Obfuscation or Encryption of Security-Relevant Inputs without Integrity Checking

The App uses the encryption mode CBC with PKCS5/PKCS7 padding. This configuration is vulnerable to padding oracle attacks.

Exposed Dangerous Method or Function

Ensure that javascript interface is implemented securely. Execution of user controlled code in WebView is a critical Security issue.

Exposed Dangerous Method or Function

WebView load files from external storage. Files in external storage can be modified by any application.

Active Debug Code

Remote WebView debugging is enabled. This allows an attacker with debugging access to interact with the webview and steal or corrupt data.

External Control of File Name or Path

WebView File System Access is enabled. An attacker able to inject script into a WebView, could exploit the opportunity to access local resources.

Insertion of Sensitive Information into Log File

The App logs information. Please ensure that sensitive information is never logged.

Incorrect Default Permissions

The file is World Readable. Any App can read from the file.

Incorrect Default Permissions

The file is World Readable and Writable. Any App can read/write to the file.

Incorrect Default Permissions

Detected file permissions that are overly permissive (read, write, and execute). It is generally a bad practices to set overly permissive file permission such as read+write+exec for all users. If the file affected is a configuration, a binary, a script or sensitive data, it can lead to privilege escalation or information leakage. Instead, follow the principle of least privilege and give users only the permissions they need.

Weaknesses in Mobile Applications

Hidden elements in view can be used to hide data from user. But this data can be leaked.

Weaknesses in Mobile Applications

This app does not have root detection capabilities. Running a sensitive application on a rooted device questions the device integrity and affects users data.

Detect portions of the Android Java code that make use of WebView, in order to check for insecure configurations

Detect portions of the Android Java code that make use of WebView, in order to check for insecure configurations. More details on vulnerable confiurations related to WebView can be found in OWASP “Android Platform APIs” document: [https://github.com/OWASP/owasp-mstg/blob/master/Document/0x05h-Testing-Platform-Interaction.md](https://github.com/OWASP/owasp-mstg/blob/master/Document/0x05h-Testing-Platform-Interaction.md)

This Java application uses a weak hashing algorithm, these hashed values result vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value

This Java application uses a weak hashing algorithm, these hashed values result vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value. It is recommended to avoid the use of weak hashing algorithms.

This Java application uses a weak cipher, the data encrypted using CBC mode block with PKCS5 and PKCS7 paddings results vulnerable to Padding Oracle attack, which could allow to retrieve its plain-text value

This Java application uses a weak cipher, the data encrypted using CBC mode block with PKCS5 and PKCS7 paddings results vulnerable to Padding Oracle attack, which could allow to retrieve its plain-text value. It is suggested to switch from CBC mode to an authenticated encryption mode like GCM or OCB; otherwise if CBC usage is required adopt cypertext authentication via MACs (like HMAC).

This Java application uses a weak cipher that does not guarantee integrity protection

This Java application uses a weak cipher that does not guarantee integrity protection. The data encrypted using ciphers like CBC, OFB, CTR or ECB mode block, is susceptible to alteration by an attacker, because these cipher modes do not provide a way to detect if data is tampered. It is suggested to use a cipher that includes a HMAC to sign the data.

This Java application uses a weak cipher, the use of NULL cipher does not perform any encryption, this does not offer any protection to the confidentiality of data

This Java application uses a weak cipher, the use of NULL cipher does not perform any encryption, this does not offer any protection to the confidentiality of data. It is recommended to avoid the use of NULL cipher.

This Java application uses a weak cipher, the data encrypted using EBC mode block results vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value (note that when none mode is specified by default ECB is used)

This Java application uses a weak cipher, the data encrypted using EBC mode block results vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value (note that when none mode is specified by default ECB is used). Note that RSA/ECB ciphers are not vulnerable and should be considered a false positive, this is due to the fact that RSA is not a block cipher and this configuration corresponds to RSA/NONE. It is recommended to avoid the use of ECB mode.

This Java application uses a weak cipher, the encryption with a RSA public key without padding exposes the encrypted data to several cryptographic attacks

This Java application uses a weak cipher, the encryption with a RSA public key without padding exposes the encrypted data to several cryptographic attacks. It is suggested to perform RSA encryption with OAEP padding (as “OAEPWithMD5AndMGF1Padding”).

This Java application does not specifies a cipher mode block when instatiating a new cipher

This Java application does not specifies a cipher mode block when instatiating a new cipher. This means that implicitly is adopted a cipher-provider specific cipher mode, which for the majority of the Java cipher-provider is the deprecated ECB mode. Data encrypted using EBC mode block results vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value. It is recommended to use transformations that fully specify not weak values for the algorithm, mode, and padding instead of relying on the defaults.

This Java application uses a weak cipher, the data encrypted using Blowfish cipher results vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value

This Java application uses a weak cipher, the data encrypted using Blowfish cipher results vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value. It is recommended to avoid the use of Blowfish cipher.

This Java application uses a weak cipher, the data encrypted using DES cipher results vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value

This Java application uses a weak cipher, the data encrypted using DES cipher results vulnerable to various cryptographic attacks, which could allow to retrieve its plain-text value. It is recommended to avoid the use of DES cipher.

The web application could be vulnerable to XXE attacks, because the XML external entities are enabled on it via XMLInputFactory

The web application could be vulnerable to XXE attacks, because the XML external entities are enabled on it via XMLInputFactory. This kind of vulnerabilities may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning, and other system impacts. It is recommended to disable external entities following the OWASP prevention cheat sheet. In particular for XMLInputFactory set the property “XMLInputFactory.SUPPORT\_DTD” to FALSE in order to disable DTDs completely. Alternatively, is possible to disable the communication protocols for XML external entities by setting to an empty string the JAXP properties “XMLConstants.ACCESS\_EXTERNAL\_DTD” and “XMLConstants.ACCESS\_EXTERNAL\_SCHEMA”.

The web application could be vulnerable to XXE attacks, because the XML external entities are enabled on it via DocumentBuilderFactory

The web application could be vulnerable to XXE attacks, because the XML external entities are enabled on it via DocumentBuilderFactory. This kind of vulnerabilities may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning, and other system impacts. It is recommended to disable external entities following the OWASP prevention cheat sheet. In particular to disable DTDs entirely for DocumentBuilderFactory it is recommended to set to TRUE the feature “[http://apache.org/xml/features/disallow-doctype-decl"](http://apache.org/xml/features/disallow-doctype-decl%22) . Alternatively it is possible to disable the communication protocols for XML external entities by setting to an empty string the JAXP properties “XMLConstants.ACCESS\_EXTERNAL\_DTD” and “XMLConstants.ACCESS\_EXTERNAL\_SCHEMA”. Another alternative mitigation could be to allow DOCTYPE declarations and only disable external entities (internal common entities are enabled) by setting to FALSE the features “[http://xml.org/sax/features/external-general-entities"](http://xml.org/sax/features/external-general-entities%22) , “[http://xml.org/sax/features/external-parameter-entities"](http://xml.org/sax/features/external-parameter-entities%22) and “[http://apache.org/xml/features/nonvalidating/load-external-dtd"](http://apache.org/xml/features/nonvalidating/load-external-dtd%22) .

The web application could be vulnerable to XXE attacks, because the XML external entities are enabled on it via XMLReader

The web application could be vulnerable to XXE attacks, because the XML external entities are enabled on it via XMLReader. This kind of vulnerabilities may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning, and other system impacts. It is recommended to disable external entities following the OWASP prevention cheat sheet. In particular is suggested to disable DTDs entirely for XMLReader set the feature “[http://apache.org/xml/features/disallow-doctype-decl"](http://apache.org/xml/features/disallow-doctype-decl%22) to TRUE. Alternatively it is possible to disable the communication protocols for XML external entities by setting to an empty string the JAXP properties “XMLConstants.ACCESS\_EXTERNAL\_DTD” and “XMLConstants.ACCESS\_EXTERNAL\_SCHEMA”. Another alternative mitigation could be to allow DOCTYPE declarations and only disable external entities (internal common entities are enabled) by setting to FALSE both features “[http://xml.org/sax/features/external-general-entities"](http://xml.org/sax/features/external-general-entities%22) , “[http://xml.org/sax/features/external-parameter-entities"](http://xml.org/sax/features/external-parameter-entities%22) and “[http://apache.org/xml/features/nonvalidating/load-external-dtd"](http://apache.org/xml/features/nonvalidating/load-external-dtd%22) .

This Java application seems having the attribute SameSite disabled on some cookies, if these cookies contain sensitive information (i.e

This Java application seems having the attribute SameSite disabled on some cookies, if these cookies contain sensitive information (i.e. session cookies) the flag SameSite should not be configured to None value. When the SameSite attribute is enabled (configured to Strict or Lax values), prevents the browser from sending the cookie along with cross-site requests, then provides some mitigations against CSRF attacks. It is recommended to properly set the security flag SameSite on the session cookies of the web application.

This Java application seems not properly setting the security flags Secure and HttpOnly on some cookies, if these cookies contain sensitive information (i.e

This Java application seems not properly setting the security flags Secure and HttpOnly on some cookies, if these cookies contain sensitive information (i.e. session cookies) the attributes Secure and HttpOnly should be enabled. The Secure flag ensures that the cookie is sent only over HTTPS, this avoid to pass the cookie in unencrypted requests. The HttpOnly flag does not allow the cookie to be accessed via a client-side script such as JavaScript, preventing session leakages. It is recommended to properly set the security flags on the session cookies of the web application.

Insufficient Verification of Data Authenticity

Detected the decoding of a JWT token without a verify step. JWT tokens must be verified before use, otherwise the token’s integrity is unknown. This means a malicious actor could forge a JWT token with any claims. Call ‘.verify()’ before using the token.

Insufficient Verification of Data Authenticity

Detected the decoding of a JWT token without a verify step. JWT tokens must be verified before use, otherwise the token’s integrity is unknown. This means a malicious actor could forge a JWT token with any claims. Call ‘.verify()’ before using the token.

Use of Weak Hash

Detected SHA1 hash algorithm which is considered insecure. SHA1 is not collision resistant and is therefore not suitable as a cryptographic signature. Instead, use PBKDF2 for password hashing or SHA256 or SHA512 for other hash function applications.

Use of Weak Hash

Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and is therefore not suitable as a cryptographic signature. Use HMAC instead.

Use of Weak Hash

Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and is therefore not suitable as a cryptographic signature. Use HMAC instead.

Reusing a Nonce, Key Pair in Encryption

GCM detected, please check that IV/nonce is not reused, an Initialization Vector (IV) is a nonce used to randomize the encryption, so that even if multiple messages with identical plaintext are encrypted, the generated corresponding ciphertexts are different. Unlike the Key, the IV usually does not need to be secret, rather it is important that it is random and unique. Certain encryption schemes the IV is exchanged in public as part of the ciphertext. Reusing same Initialization Vector with the same Key to encrypt multiple plaintext blocks allows an attacker to compare the ciphertexts and then, with some assumptions on the content of the messages, to gain important information about the data being encrypted.

Reusing a Nonce, Key Pair in Encryption

GCM IV/nonce is reused: encryption can be totally useless

ProcessBuilder in $METHOD()

ProcessBuilder in $METHOD()

JAX-RS @Provider $CLASS

JAX-RS @Provider $CLASS

JAX-RS $METHOD $PATH1/$PATH2 endpoint $CLASS.$FUNC()

JAX-RS $METHOD $PATH1/$PATH2 endpoint $CLASS.$FUNC()

JAX-RS $METHOD class $PATH1 endpoint $CLASS.$FUNC()

JAX-RS $METHOD class $PATH1 endpoint $CLASS.$FUNC()

JAX-RS $METHOD method $PATH2 endpoint $CLASS.$FUNC()

JAX-RS $METHOD method $PATH2 endpoint $CLASS.$FUNC()

JAX-RS $METHOD endpoint $CLASS.$FUNC()

JAX-RS $METHOD endpoint $CLASS.$FUNC()

JAX-RS class $CLASS.$FUNC Path $PATH1/$PATH2

JAX-RS class $CLASS.$FUNC Path $PATH1/$PATH2

JAX-RS @HttpMethod HTTP Method Annotation $INTERFACE, $TARGET annotated with this will handle $METHOD

JAX-RS @HttpMethod HTTP Method Annotation $INTERFACE, $TARGET annotated with this will handle $METHOD

JAX-RS @Consumes(”_/_”) $CLASS.$METHOD

JAX-RS @Consumes(”_/_”) $CLASS.$METHOD

JAX-RS @Consumes(”_/_”) $CLASS

JAX-RS @Consumes(”_/_”) $CLASS

JAX-RS Path “$PATH1/$PATH2” endpoint $CLASS.$FUNC()

JAX-RS Path “$PATH1/$PATH2” endpoint $CLASS.$FUNC()

JAX-RS class $CLASS Path $PATH

JAX-RS class $CLASS Path $PATH

JAX-RS class $CLASS Path $PATH

JAX-RS class $CLASS Path $PATH

JAX-RS Path Expression $PATH1/$PATH2 class $CLASS.$FUNC()

JAX-RS Path Expression $PATH1/$PATH2 class $CLASS.$FUNC()

Struts2 Action Handler class $CLASS extends ActionSupport

Struts2 Action Handler class $CLASS extends ActionSupport

Struts2 Possible Action Handler class $CLASS has execute() method

Struts2 Possible Action Handler class $CLASS has execute() method

Struts2 Convention plugin annotation $ANNOTATION params $…PARAMS package $PACKAGE

Struts2 Convention plugin annotation $ANNOTATION params $…PARAMS package $PACKAGE

Struts2 Convention plugin annotation $ANNOTATION params $…PARAMS class.method $CLASS.$METHOD

Struts2 Convention plugin annotation $ANNOTATION params $…PARAMS class.method $CLASS.$METHOD

Struts2 Convention plugin annotation $ANNOTATION params $…PARAMS class $CLASS

Struts2 Convention plugin annotation $ANNOTATION params $…PARAMS class $CLASS

Entrypoint PUT $METHOD

Entrypoint PUT $METHOD

Entrypoint PATCH $METHOD

Entrypoint PATCH $METHOD

Entrypoint POST $METHOD

Entrypoint POST $METHOD

Cross-Origin requests permitted $CLASS / $Method

Cross-Origin requests permitted $CLASS / $Method

Method return value should be bound to the web response body

Method return value should be bound to the web response body

ServletRegistrationBean SERVLET $ALWAYS\_MAP\_URL $URL\_MAPPINGS

ServletRegistrationBean SERVLET $ALWAYS\_MAP\_URL $URL\_MAPPINGS

Entrypoint DELETE $METHOD

Entrypoint DELETE $METHOD

Entrypoint RequestMapping class $CLASS or method $METHOD

Entrypoint RequestMapping class $CLASS or method $METHOD

class $CLASS implements Filter

class $CLASS implements Filter

RestController $CLASS

RestController $CLASS

Entrypoint $METHOD GET $PATH

Entrypoint $METHOD GET $PATH

@Priority $CLASS

@Priority $CLASS

@Order $CLASS / $METHOD

@Order $CLASS / $METHOD

Unsafe Spring Service Exporter func $FUNC

Unsafe Spring Service Exporter func $FUNC

Unsafe Spring Service Exporter var $VAR

Unsafe Spring Service Exporter var $VAR

Unsafe Spring Service Exporter $CLASS extends RemoteInvocationSerializingExporter

Unsafe Spring Service Exporter $CLASS extends RemoteInvocationSerializingExporter

Strings should not be compared with ‘==’

Strings should not be compared with ‘==’. This is a reference comparison operator. Use ‘.equals()’ instead.

This if statement will always have the same behavior and is therefore unnecessary.

This if statement will always have the same behavior and is therefore unnecessary.

Always true

`\$X == \$X` or `\$X != \$X` is always true. (Unless the value compared is a float or double). To test if `\$X` is not-a-number, use `Double.isNaN(\$X)`.

Assignment comparison

The value of `\$X` is being ignored and will be used in the conditional test

The Android manifest is configured to allow non-encrypted connections

The Android manifest is configured to allow non-encrypted connections. Evaluate if this is necessary for your app, and disable it if appropriate. This flag is ignored on Android 7 (API 24) and above if a Network Security Config is present.

Manifest uses both `android:usesCleartextTraffic` and Network Security Config

Manifest uses both `android:usesCleartextTraffic` and Network Security Config. The `usesCleartextTraffic` directive is ignored on Android 7 (API 24) and above if a Network Security Config is present.

Use of Externally-Controlled Input to Select Classes or Code (‘Unsafe Reflection’)

If an attacker can supply values that the application then uses to determine which class to instantiate or which method to invoke, the potential exists for the attacker to create control flow paths through the application that were not intended by the application developers. This attack vector may allow the attacker to bypass authentication or access control checks or otherwise cause the application to behave in an unexpected manner.

Permissive List of Allowed Inputs

[https://find-sec-bugs.github.io/bugs.htm#PERMISSIVE\_CORS](https://find-sec-bugs.github.io/bugs.htm#PERMISSIVE_CORS) Permissive CORS policy will allow a malicious application to communicate with the victim application in an inappropriate way, leading to spoofing, data theft, relay and other attacks.

The Network Security Config is set to allow non-encrypted connections

The Network Security Config is set to allow non-encrypted connections. Evaluate if this is necessary for your app, and disable it if appropriate. (To hide this warning, set `xmlns:tools="http://schemas.android.com/tools" tools:ignore="InsecureBaseConfiguration"` as parameters to your \`\`)

Your app uses TLS public key pinning without specifying a backup key

Your app uses TLS public key pinning without specifying a backup key. If you are forced to change TLS keys or CAs on short notice, not having a backup pin can lead to connectivity issues until you can push out an update. It is considered best practice to add at least one additional pin as a backup.

Your app uses TLS public key pinning without specifying an expiration date

Your app uses TLS public key pinning without specifying an expiration date. If your users do not update the app to receive new pins in time, expired or replaced certificates can lead to connectivity issues until they install an update. It is considered best practice to set an expiration time, after which the system will default to trusting system CAs and disregard the pin.

The Network Security Config is set to accept user-installed CAs

The Network Security Config is set to accept user-installed CAs. Evaluate if this is necessary for your app, and disable it if appropriate. (To hide this warning, set `xmlns:tools="http://schemas.android.com/tools" tools:ignore="AcceptsUserCertificates"` as parameters to your \`\`)

The Network Security Config is set to accept user-installed CAs for the domain `\$DOMAIN`

The Network Security Config is set to accept user-installed CAs for the domain `\$DOMAIN`. Evaluate if this is necessary for your app, and disable it if appropriate. (To hide this warning, set `xmlns:tools="http://schemas.android.com/tools" tools:ignore="AcceptsUserCertificates"` as parameters to your \`\`)

## Ruby [Copied!](#ruby "Copy link to this section")

Policy Name

Description

Server-Side Request Forgery (SSRF)

The application was found including unvalidated user input into `Net::HTTP` methods, which could lead to HTTP Parameter Pollution (HPP) or worse, Server Side Request Forgery (SSRF).Specifically, it looks for methods like GET, POST, DELETE, etc., being called with parameters that could be controlled by an end-user. Using untrusted input in such a manner without proper validation and sanitization can lead to a variety of security vulnerabilities, including SSRF, injection attacks, unintended data leaks, and unauthorized actions being performed on behalf of the attacker.Ensure all user-controlled input is validated against a strict set of rules (e.g., expected data types, patterns, and lengths) and sanitized to remove or encode potentially harmful characters before being used in HTTP requests. Additionally, consider using higher-level abstractions or frameworks that automatically handle some of these concerns.Secure Code Example:require ‘uri’# Validate and sanitize the user input before using it in the HTTP requestbegin user\_input = uri = URI.parse(user\_input) # Ensure the URI is HTTP/HTTPS and refers to a trusted domain if uri.scheme.match?(/\\Ahttps?\\z/) && uri.host == ‘[www.abc.com](https://www.abc.com) ’ response = Net::HTTP.get(uri) else raise “Invalid URL” endrescue URI::InvalidURIError puts “Provided URL is not valid"end

| Server-Side Request Forgery (SSRF) | Using user input when accessing files is potentially dangerous. A malicious actor could use this to modify or access files they have no right to. | | Inadequate Encryption Strength | The RSA key size $SIZE is insufficent by NIST standards. It is recommended to use a key length of 2048 or higher. The RSA algorithm, being widely used for secure data transmission, relies on key size for its security. Smaller key sizes (e.g., 1024 bits and below) are more susceptible to brute-force attacks, where an attacker uses computational power to decrypt data or forge signatures. To address this security concern, ensure that all RSA keys are generated with a size of 2048 bits or more.Folowing is a secure code example:require ‘openssl’# Generate a new RSA key of 2048 bitsrsa\_key = OpenSSL::PKey::RSA.new(2048)# To export the RSA keyprivate\_key = rsa\_key.to\_pempublic\_key = rsa\_key.public\_key.to\_pem |

| Inadequate Encryption Strength | The RSA key size $SIZE is insufficent by NIST standards. It is recommended to use a key length of 2048 or higher. | | Use of a Broken or Risky Cryptographic Algorithm | Detected use of the ’none’ algorithm in a JWT token. The ’none’ algorithm assumes the integrity of the token has already been verified. This would allow a malicious actor to forge a JWT token that will automatically be verified. Do not explicitly use the ’none’ algorithm. Instead, use an algorithm such as ‘HS256’. | | Use of a Broken or Risky Cryptographic Algorithm | It looks like MD5 is used as a password hash. MD5 is not considered a secure password hash because it can be cracked by an attacker in a short amount of time. Instead, use a suitable password hashing function such as bcrypt. You can use the `bcrypt` gem. | | Improper Certificate Validation | The application was found using `OpenSSL::SSL::VERIFY_NONE`.This effectively disables the validation of TLS certificates.This allows for an adversary who is in between the application and the target host to intercept potentially sensitive information or transmit malicious data.To remediate this issue, use ‘OpenSSL::SSL::VERIFY\_PEER’ instead. | | Improper Certificate Validation | Detected SSL that will accept an unverified connection. This makes the connections susceptible to man-in-the-middle attacks. Use ‘OpenSSL::SSL::VERIFY\_PEER’ instead. | | Improper Input Validation | Checks for models that enable nested attributes. A vulnerability in nested\_attributes\_for results in an attacker begin able to change parameters apart from the ones intended by the developer. Affected Rails versions: 3.0.0, 2.3.9. Fix: don’t use accepts\_nested\_attributes\_for or upgrade Rails version. | | Improper Input Validation | The render method in Rails versions 3.0.0 - 3.0.20, 3.1.0 - 3.1.12, and 3.2.0 - 3.2.16 are vulnerable to a denial of service attack (CVE-2014-0082), which could lead to service downtime. Upgrade to 3.2.17 or higher instead. | | Improper Input Validation | Rails versions 3.0.0 - 3.2.15 and 4.0.0 and 4.0.1 are vulnerable to a DoS attack (CVE-2013-6414). This can cause your service to be taken down for substantial amount of time. Instead, upgrade to 4.0.2 or 3.2.16 or higher. | | Improper Control of Generation of Code (‘Code Injection’) | The application was found calling dynamic method invocations in Ruby. In particular one of the methods of: `Object#send`, `Object#try`, `Object#__send__`, or `Object#public_send`. These methods are powerful Ruby features that allow calling another method on an object by name, where the method’s name is passed as a string or symbol. However, when combined with untrusted input, such as parameters from web requests, they can lead to severe security vulnerabilities, including arbitrary method execution and potentially arbitrary code execution.To mitigate these risks, it’s crucial to validate and sanitize any user input that might determine which methods are invoked. Moreover, consider using safer alternatives to direct method invocation based on user input, such as explicitly whitelisting allowed methods or using conditional logic to determine method calls.Secure Code Example:# Secure method invocation with validation and allow listsmethod\_name = .to\_symallowed\_methods = \[:allowed\_method\_1, :allowed\_method\_2, :safe\_method\]if allowed\_methods.include?(method\_name) result = object.public\_send(method\_name)else raise “Unauthorized method call"end |

| Improper Control of Generation of Code (‘Code Injection’) | The rule warns of a significant security risk in applications that use Ruby’s Marshal module for deserializing cookies. Marshal can serialize and deserialize Ruby objects, which, while powerful, poses a risk if misused. If an attacker crafts a malicious cookie that is deserialized, it could lead to remote code execution (RCE) on the server due to Marshal.load’s ability to execute code in deserialized objects. To mitigate this risk, developers are advised to switch from Marshal to JSON for cookie serialization. JSON is safer as it cannot execute arbitrary code, reducing the threat of RCE vulnerabilities from deserialized user data. The hybrid check is just to warn users to migrate to :json for best practice.Secure code example:# In Rails, configure the cookie serializer to :json# config/initializers/cookies\_serializer.rbRails.application.config.action\_dispatch.cookies\_serializer = :jsonAdditionally, always validate and sanitize user-supplied data as much as possible, even when using JSON, to further secure your application against various injection attacks. |

| Improper Control of Generation of Code (‘Code Injection’) | The application was found calling a reflection method with user-controllableinput. This practice can lead to unauthorized alteration of program behavior, including the potential execution of arbitrary code. Reflection methods allow dynamic execution of code, which is powerful but risky if not properly sanitized, as it could enable attackers to execute unintended methods or blocks.Remediation:- Validate and sanitize input: Ensure that any user input is strictly validated against a whitelist of allowed values before being passed to reflection methods. Avoid direct mapping of user input to method names or proc conversions.- Limit reflection use: Minimize the use of reflection with user input. Prefer direct method calls or other non-reflective approaches whenever possible.- Use safer alternatives: When dynamic behavior is necessary, use controlled methods like `public_send` with proper input validation to reduce risk.Secure Code Example:# Assume user input is to invoke a method on an objectuser\_method = # Define an allow list of permissible methodsallowed\_methods = \[‘safe\_method\_1’, ‘safe\_method\_2’\]if allowed\_methods.include?(user\_method) # Using public\_send for controlled method invocation result = my\_object.public\_send(user\_method)else raise ‘Unauthorized method access’end |

| Improper Control of Generation of Code (‘Code Injection’) | Detected non-static command inside $PIPE. Audit the input to ‘$PIPE’. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code. | | Improper Control of Generation of Code (‘Code Injection’) | Detected non-static command inside $EXEC. Audit the input to ‘$EXEC’. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code. | | Improper Control of Generation of Code (‘Code Injection’) | Detected non-static command inside ‘open’. Audit the input to ‘open’. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code. | | Improper Control of Generation of Code (‘Code Injection’) | Checks if code allows cookies to be deserialized using Marshal. If the attacker can craft a valid cookie, this could lead to remote code execution. The hybrid check is just to warn users to migrate to :json for best practice. | | Improper Control of Generation of Code (‘Code Injection’) | Use of eval with user-controllable input detected. This can lead to attackers running arbitrary code. Ensure external data does not reach here, otherwise this is a security vulnerability. Consider other ways to do this without eval. | | Improper Control of Generation of Code (‘Code Injection’) | ‘syscall’ is essentially unsafe and unportable. The DL ([https://apidock.com/ruby/Fiddle](https://apidock.com/ruby/Fiddle) ) library is preferred for safer and a bit more portable programming. | | Improper Control of Generation of Code (‘Code Injection’) | Checks for unsafe use of Object#send, try, **send**, and public\_send. These only account for unsafe use of a method, not target. This can lead to arbitrary calling of exit, along with arbitrary code execution. Please be sure to sanitize input in order to avoid this. | | Improper Control of Generation of Code (‘Code Injection’) | Detected non-static command inside `...`. If unverified user data can reach this call site, this is a code injection vulnerability. A malicious actor can inject a malicious script to execute arbitrary code. | | Improper Control of Generation of Code (‘Code Injection’) | Detected enabled YAML parsing. This is vulnerable to remote code execution in Rails 2.x versions up to 2.3.14. To fix, delete this line. | | Improper Control of Generation of Code (‘Code Injection’) | Found user-controllable input to a reflection method. This may allow a user to alter program behavior and potentially execute arbitrary instructions in the context of the process. Do not provide arbitrary user input to `tap`, `method`, or `to_proc` | | Improper Control of Generation of Code (‘Code Injection’) | Found user-controllable input to Ruby reflection functionality. This allows a remote user to influence runtime behavior, up to and including arbitrary remote code execution. Do not provide user-controllable input to reflection functionality. Do not call symbol conversion on user-controllable input. | | Improper Control of Generation of Code (‘Code Injection’) | Rails versions 2.3.14 are vulnerable to response splitting, allowing header injection (CVE-2011-3186). Upgrade to 2.3.14 or greater. | | Improper Control of Generation of Code (‘Code Injection’) | This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters. | | Improper Restriction of XML External Entity Reference | The JDOM backend for XmlMini has a vulnerability that lets an attacker perform a denial of service attack or gain access to files on the application server. This affects versions 3.0, but is fixed in versions 3.1.12 and 3.2.13. To fix, either upgrade or use XmlMini.backend=“REXML”. | | Improper Restriction of XML External Entity Reference | This application is using LibXML as the XML backend. LibXML can be vulnerable to XML External Entities (XXE) vulnerabilities. Use the built-in Rails XML parser, REXML, instead. | | Improper Restriction of XML External Entity Reference | This application is explicitly enabling external entities enabling an attacker to inject malicious XML to exploit an XML External Entities (XXE) vulnerability. This could let the attacker cause a denial-of-service by forcing the parser to parse large files, or at worst, let the attacker download sensitive files or user data. Use the built-in Rails XML parser, REXML, instead. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | The application dynamically constructs file or path information with user input. When an application uses data from untrusted sources (like `params`, `cookies`, or `request.env`) to perform actions on the file system, it opens up potential vulnerabilities. A malicious actor could exploit this to access, modify, or delete files they shouldn’t have access to, leading to information disclosure, data loss, or server compromise. This type of vulnerability is often referred to as a File Inclusion vulnerability or Path Traversal attack, depending on the nature of the exploit.To mitigate these risks, follow these best practices:- Validate and sanitize input: Ensure all user inputs are strictly validated and sanitized to prevent path traversal characters (like `../`) or other malicious patterns. Only allow filenames or paths that match specific, safe patterns.- Use secure libraries: Utilize libraries or frameworks that abstract file access in a secure manner, automatically handling the risks associated with raw user input.- Least privilege principle: Run your application with the minimum necessary file system permissions. Restrict the application’s access to only those directories and files it absolutely needs.- Directory whitelisting: Maintain an allow list of permitted directories for file operations, rejecting any requests for paths outside of these directories.Secure Code Example:def safe\_file\_read(filename) # Define a list of allowed files or use regex to validate the filename format allowed\_files = \[‘allowed\_file.txt’, ‘another\_safe\_file.txt’\] if allowed\_files.include?(filename) file\_path = Rails.root.join(‘safe\_directory’, filename) content = File.read(file\_path) return content else raise “Access to the requested file is not allowed.” endend |

| Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Special requests can determine whether a file exists on a filesystem that’s outside the Rails app’s root directory. To fix this, set config.serve\_static\_assets = false. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Found request parameters in a call to `render` in a dynamic context. This can allow end users to request arbitrary local files which may result in leaking sensitive information persisted on disk. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Found request parameters in a call to `render`. This can allow end users to request arbitrary local files which may result in leaking sensitive information persisted on disk. Where possible, avoid letting users specify template paths for `render`. If you must allow user input, use an allow-list of known templates or normalize the user-supplied value with `File.basename(...)`. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | All versions below 1.2.1 of the ‘actionpack\_page-caching’ gem are vulnerable to arbitrary file write and remote code execution (CVE-2020-8159). Update to version 1.2.1 or greater or remove calls to ‘caches\_page’. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | All versions below 1.2.1 of the ‘actionpack\_page-caching’ gem are vulnerable to arbitrary file write and remote code execution (CVE-2020-8159) when using caching methods. Update to version 1.2.1 or greater or remove calls to ‘caches\_page’. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Using user input when accessing files is potentially dangerous. A malicious actor could use this to modify or access files they have no right to. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Using user input when accessing files is potentially dangerous. A malicious actor could use this to modify or access files they have no right to. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Avoid rendering user input. It may be possible for a malicious user to input a path that lets them access a template they shouldn’t. To prevent this, check dynamic template paths against a predefined allowlist to make sure it’s an allowed template. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | SQL Injection is a critical vulnerability that can lead to data or system compromise. Bydynamically generating SQL query strings, user input may be able to influence the logic ofthe SQL statement. This could lead to an adversary accessing information they shouldnot have access to, or in some circumstances, being able to execute OS functionality or code.To mitigate this issue, always use parameterized queries or the ActiveRecord query interface, which ensures that inputs are properly escaped, preventing SQL injection attacks. Avoid string interpolation or concatenation with user-controlled input for constructing SQL queries.Secure Code Example:# Secure: Using parameterized queries with ActiveRecorduser\_id = User.where(“id = ?”, user\_id)# Secure: Using ActiveRecord’s query methods, which automatically handle parameterization# Converting to integer as an additional layer of input sanitizationuser\_id = .to\_i User.where(id: user\_id) |

| Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as Sequelize which will protect your queries. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use sanitize statements like so: `escaped = client.escape(user_input)` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `Example.find_by_sql ["SELECT title FROM posts WHERE author = ? AND created > ?", author_id, start_date]` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `conn.exec_params('SELECT \$1 AS a, \$2 AS b, \$3 AS c', [1, 2, nil])` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `DB['select * from items where name = ?', name]` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Found potential SQL injection due to unsafe SQL query construction via $X. Where possible, prefer parameterized queries. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected usage of `quote_table_name`, which has a vulnerability allowing malicious users to inject arbitrary SQL into a query. This is fixed in Rails versions 3.0.10, 2.3.13, and 3.1.0.rc5 and above. If updating your Rails version is not possible, sanitize input thoroughly before passing it to a `quote_table_name` call. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Discovered an application that uses MySQL and find\_by\_\* dynamic finders on potentially sensitive fields. There is a vulnerability in MySQL integer conversion, which could case “0” to match any string, and could therefore lead to sensitive data being exposed. Instead, upgrade to Rails version 4. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected string concatenation with a non-literal variable in a pg Ruby SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized queries like so: `conn.exec_params('SELECT \$1 AS a, \$2 AS b, \$3 AS c', [1, 2, nil])` And you can use prepared statements with `exec_prepared`. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | This rule checks if HTML escaping is globally disabled for JSON output, which can lead to Cross-Site Scripting (XSS) vulnerabilities. XSS attacks allow attackers to inject malicious scripts into web pages viewed by other users, compromising the integrity and confidentiality of user data. When HTML escaping is disabled, special HTML characters in JSON output are not converted to their entity equivalents, making it possible for an attacker to inject executable scripts into the web application’s output. To mitigate this risk, ensure that HTML escaping is enabled when generating JSON output, particularly in web applications that dynamically insert user-generated content into the DOM.Secure Code Example:# For an initializer configuration (e.g., in config/initializers/active\_support.rb)# Enable HTML entity escaping in JSON to prevent XSSActiveSupport.escape\_html\_entities\_in\_json = true# For application-wide configuration (e.g., in config/application.rb)module YourApplication class Application # Enable HTML entity escaping in JSON to prevent XSS config.active\_support.escape\_html\_entities\_in\_json = true endend |

| Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | The application was identified manually creating ERB templates. Manual creation of templatesmay expose your application to server-side template injection (SSTI) orcross-site scripting (XSS) attacks if user input is used to create thetemplate. Instead, create a ‘.erb’ template file and use ‘render’.Secure Code Example:# Controller: messages\_controller.rbclass MessagesController def show # Safely assign user input to an instance variable @message\_content = sanitize() # Render the static .erb template render ‘messages/show’ endend Message: |

| Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | This code includes user input in `link_to`. In Rails, the body of `link_to` is not escaped. This means that user input which reaches the body will be executed when the HTML is rendered. Even in other versions, values starting with `javascript:` or `data:` are not escaped. Mitigation Strategy:Always sanitize user input used within `link_to` method calls. For versions of Rails where `link_to` does not automatically escape the body, or when dealing with schemes that are not escaped (`javascript:`, `data:`), manually escape or validate the input against a list of safe values. Consider using the `sanitize` helper method or other Rails sanitization helpers to clean user input before rendering.Secure Code Example:user\_input = # This example uses the `sanitize` helper to ensure any HTML tags or JavaScript in the user input are escapedsafe\_link\_text = sanitize(user\_input)# Use the sanitized text as the body of the `link_to` method |

| Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | The application was found calling `render text: ...` which actually sets the content-type to ’text/html’. If external data can reach here, this exposes your application to cross-site scripting (XSS) attacks. Instead, use `render plain: ...` torender non-HTML text. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | When a ‘Hash’ with user-supplied input is encoded in JSON, Rails doesn’t provide adequate escaping. If the JSON string is supplied into HTML, the page will be vulnerable to XXS attacks. The affected Rails versions are 3.0.x, 3.1.x, 3.2.x, 4.1.x, 4.2.x. To fix, either upgrade or add an initializer. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Checks if HTML escaping is globally disabled for JSON output. This could lead to XSS. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected use of mail\_to helper used with the `:encode => :javascript option`. The attacker could specify a malicious name or email value that could lead to a XSS attack. Instead, use `:encode => :hex` or patch to Rails 3.0.4 or 2.3.11. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected user input flowing into number\_to\_currency helper. One of the parameters to the helper (unit) is not escaped correctly and could lead to XSS, which in turn could lead to sensitive data being exfiltrated. Instead, sanitize data before passing it into `number_to_currency` with the html\_escape (h) function or upgrade to Rails 4.0.2 or 3.2.16. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected use of mail\_to helper used with the `:encode => :javascript option`. The attacker could specify a malicious name or email value that could lead to a XSS attack. Instead, use `:encode => :hex` or patch to Rails 3.0.4 or 2.3.11. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected user input flowing into number\_to\_currency helper. One of the parameters to the helper (unit) is not escaped correctly and could lead to XSS, which in turn could lead to sensitive data being exfiltrated. Instead, sanitize data with the ‘html\_escape’ or ‘h’ function before passing it into `number_to_currency` or upgrade to Rails 4.0.2 or 3.2.16. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as ActiveRecord which will protect your queries. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | User data flows into the host portion of this manually-constructed URL. This could allow an attacker to send data to their own server, potentially exposing sensitive data such as cookies or authorization information sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. (This is called server-side request forgery, or SSRF.) Do not allow arbitrary hosts. Use the `ssrf_filter` gem and guard the url construction with `SsrfFilter(...)`, or create an allowlist for approved hosts. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected user input flowing into a manually constructed HTML string. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. Use the `render template` and make template files which will safely render HTML instead, or inspect that the HTML is absolutely rendered safely with a function like `sanitize`. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘render text: …’ actually sets the content-type to ’text/html’. If external data can reach here, this exposes your application to cross-site scripting (XSS) attacks. Instead, use ‘render plain: …’ to render non-HTML text. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘render inline: …’ renders an entire ERB template inline and is dangerous. If external data can reach here, this exposes your application to server-side template injection (SSTI) or cross-site scripting (XSS) attacks. Instead, consider using a partial or another safe rendering method. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘raw()’ bypasses HTML escaping. If external data can reach here, this exposes your application to cross-site scripting (XSS) attacks. If you must do this, construct individual strings and mark them as safe for HTML rendering with `html_safe()`. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘html\_safe()’ does not make the supplied string safe. ‘html\_safe()’ bypasses HTML escaping. If external data can reach here, this exposes your application to cross-site scripting (XSS) attacks. Ensure no external data reaches here. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected manual creation of an ERB template. Manual creation of templates may expose your application to server-side template injection (SSTI) or cross-site scripting (XSS) attacks if user input is used to create the template. Instead, create a ‘.erb’ template file and use ‘render’. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | This code includes user input in `link_to`. In Rails 2.x, the body of `link_to` is not escaped. This means that user input which reaches the body will be executed when the HTML is rendered. Even in other versions, values starting with `javascript:` or `data:` are not escaped. It is better to create and use a safer function which checks the body argument. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘content\_tag()’ bypasses HTML escaping for some portion of the content. If external data can reach here, this exposes your application to cross-site scripting (XSS) attacks. Ensure no external data reaches here. If you must do this, create your HTML manually and use ‘html\_safe’. Ensure no external data enters the HTML-safe string! | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a template variable used in a script tag. Although template variables are HTML escaped, HTML escaping does not always prevent cross-site scripting (XSS) attacks when used directly in JavaScript. If you need to do this, use `escape_javascript` or its alias, `j`. However, this will not protect from XSS in all circumstances; see the references for more information. Consider placing this value in the HTML portion (outside of a script tag). | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a unquoted template variable as an attribute. If unquoted, a malicious actor could inject custom JavaScript handlers. To fix this, add quotes around the template expression, like this: “”. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘raw’ renders raw HTML, as the name implies. This means that normal HTML escaping is bypassed. If user data can be controlled here, this exposes your application to cross-site scripting (XSS). If you need to do this, be sure to correctly sanitize the data using a library such as DOMPurify. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a template variable used in ’link\_to’. This will generate dynamic data in the ‘href’ attribute. This allows a malicious actor to input the ‘javascript:’ URI and is subject to cross- site scripting (XSS) attacks. If using a relative URL, start with a literal forward slash and concatenate the URL, like this: ’link\_to “Here”, “/"+@link’. You may also consider setting the Content Security Policy (CSP) header. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘html\_safe’ renders raw HTML. This means that normal HTML escaping is bypassed. If user data can be controlled here, this exposes your application to cross-site scripting (XSS). If you need to do this, be sure to correctly sanitize the data using a library such as DOMPurify. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a template variable used in an anchor tag with the ‘href’ attribute. This allows a malicious actor to input the ‘javascript:’ URI and is subject to cross- site scripting (XSS) attacks. If using a relative URL, start with a literal forward slash and concatenate the URL, like this: href=’/’. You may also consider setting the Content Security Policy (CSP) header. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | The syntax \`\` is an alias for `html_safe`. This means the content inside these tags will be rendered as raw HTML. This may expose your application to cross-site scripting. If you need raw HTML, prefer using the more explicit `html_safe` and be sure to correctly sanitize variables using a library such as DOMPurify. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘content\_tag’ exhibits unintuitive escaping behavior and may accidentally expose your application to cross-site scripting. If using Rails 2, only attribute values are escaped. If using Rails 3, content and attribute values are escaped. Tag and attribute names are never escaped. Because of this, it is recommended to use ‘html\_safe’ if you must render raw HTML data. | | Deserialization of Untrusted Data | Deserialization of a string tainted by `event` object found. Objects in Ruby can be serialized into strings, then later loaded from strings. However, uses of `load` can cause remote code execution. Loading user input with MARSHAL, YAML or CSV can potentially be dangerous. If you need to deserialize untrusted data, you should use JSON as it is only capable of returning ‘primitive’ types such as strings, arrays, hashes, numbers and nil. | | Deserialization of Untrusted Data | Unsafe deserialization from YAML. Objects in Ruby can be serialized into strings, then later loaded from strings. However, uses of load and object\_load can cause remote code execution. Loading user input with YAML can potentially be dangerous. Use JSON in a secure fashion instead. However, loading YAML from a static file is not dangerous and should not be flagged. | | Deserialization of Untrusted Data | Checks for unsafe deserialization. Objects in Ruby can be serialized into strings, then later loaded from strings. However, uses of load and object\_load can cause remote code execution. Loading user input with MARSHAL or CSV can potentially be dangerous. Use JSON in a secure fashion instead. | | Deserialization of Untrusted Data | Checks for unsafe deserialization. Objects in Ruby can be serialized into strings, then later loaded from strings. However, uses of load and object\_load can cause remote code execution. Loading user input with MARSHAL or CSV can potentially be dangerous. Use JSON in a secure fashion instead. | | Exposure of Sensitive Information to an Unauthorized Actor | Found that the setting for providing detailed exception reports in Rails is set to true. This can lead to information exposure, where sensitive system or internal information is displayed to the end user. Instead, turn this setting off. | | URL Redirection to Untrusted Site (‘Open Redirect’) | The application was found handling redirect behavior with user-supplied input. Do not pass `params` to `redirect_to` without the `:only_path => true` hash value. Using `:only_path => true` ensures that the URL is interpreted as a relative path, not allowing redirection to an arbitrary external URL, thus mitigating the risk of open redirects. Alternatively, validate or sanitize the input to ensure it’s safe and intended.Secure Code Example:# Secure - Ensuring redirection is only to internal pathsdef secure\_redirect redirect\_to , only\_path: trueend |

| URL Redirection to Untrusted Site (‘Open Redirect’) | Found potentially unsafe handling of redirect behavior $X. Do not pass `params` to `redirect_to` without the `:only_path => true` hash value. | | URL Redirection to Untrusted Site (‘Open Redirect’) | When a redirect uses user input, a malicious user can spoof a website under a trusted URL or access restricted parts of a site. When using user-supplied values, sanitize the value before using it for the redirect. | | Cleartext Transmission of Sensitive Information | Checks for creation of telnet servers or attempts to connect through telnet. This is insecure as the telnet protocol supports no encryption, and data passes through unencrypted. | | Cleartext Transmission of Sensitive Information | Checks for requests to http and ftp (unencrypted) sites using OpenURI. | | Cleartext Transmission of Sensitive Information | Checks for requests sent to http:// URLs. This is dangerous as the server is attempting to connect to a website that does not encrypt traffic with TLS. Instead, only send requests to https:// URLs. | | Cleartext Transmission of Sensitive Information | Checks for requests to http (unencrypted) sites using some of ruby’s most popular REST/HTTP libraries, including httparty and restclient. | | Cleartext Transmission of Sensitive Information | Checks for outgoing connections to ftp servers with the ’net/ftp’ package. FTP does not encrypt traffic, possibly leading to PII being sent plaintext over the network. Instead, connect via the SFTP protocol. | | Sensitive Cookie Without ‘HttpOnly’ Flag | The detected issue pertains to a Rails application where the session configuration, specifically using cookie\_store, has been identified with the $KEY attribute set to false. This setting is potentially insecure because it may relate to crucial security attributes such as HttpOnly or Secure flags not being enforced. In the context of web applications, these flags play a vital role in enhancing session security:- HttpOnly Flag: When enabled, this flag prevents client-side scriptsfrom accessing the cookie. This mitigation is crucial for reducing the risk of cross-site scripting (XSS) attacks, where an attacker might attempt to steal session cookies.- Secure Flag: This flag ensures that cookies are sent over secure, encrypted connections only (HTTPS). It’s a critical security measure that helps prevent cookies from being intercepted by attackers when transmitted over an unencrypted connection.To mitigate the identified security risk and ensure that your Rails application’s session cookies are securely configured. Secure Code Example:# config/initializers/session\_store.rbRails.application.config.session\_store :cookie\_store, key: ‘\_your\_app\_session’, httponly: true, secure: Rails.env.production? |

| Sensitive Cookie Without ‘HttpOnly’ Flag | Found a Rails `cookie_store` session configuration setting the `\$KEY` attribute to `false`. If using a cookie-based session store, the HttpOnly and Secure flags should be set. | | Cross-Site Request Forgery (CSRF) | Detected controller which does not enable cross-site request forgeryprotections using `protect_from_forgery`. When a Rails application does not use `protect_from_forgery` in its controllers, it is vulnerable to CSRF attacks. This vulnerability can allow attackers to submit unauthorized requests on behalf of authenticated users, potentially leading to unauthorized actions being performed. To mitigate this risk, Rails offers the `protect_from_forgery` method, which integrates CSRF token verification in every form submitted to your application, ensuring that requests are legitimate. Add `protect_from_forgery with: :exception` to your controller class. The `with: :exception` option configures Rails to raise an exception if a CSRF token cannot be verified, providing an additional layer of security. This approach ensures that unverified requests do not proceed silently, allowing for appropriate error handling and response measures.Secure Code Example:class YourController protect\_from\_forgery with: :exception # Your controller actions hereendFor more information on CSRF, see OWASP guide:https://owasp.org/www-community/attacks/csrf |

| Cross-Site Request Forgery (CSRF) | Detected controller which does not enable cross-site request forgery protections using ‘protect\_from\_forgery’. Add ‘protect\_from\_forgery :with => :exception’ to your controller class. | | Cross-Site Request Forgery (CSRF) | This call turns off CSRF protection allowing CSRF attacks against the application | | Improper Neutralization of Special Elements in Output Used by a Downstream Component (‘Injection’) | Rails versions 0.0.0 - 2.3.14 and 3.0.0 - 3.0.19 are vulnerable to a Remote Code Execution attack via JSON parsing (CVE-2013-0333). Either use the ‘yajl’ gem or update to Rails 2.3.16 or greater if using Rails 0.0.0 - 2.3.14 and Rails 3.0.20 or greater if using Rails 3.0.0 - 3.0.19 | | Insufficiently Protected Credentials | Password is exposed through JWT token payload. This is not encrypted and the password could be compromised. Do not store passwords in JWT tokens. | | Insufficiently Protected Credentials | The object is passed strictly to jsonwebtoken.sign(…) Make sure that sensitive information is not exposed through JWT token payload. | | Observable Timing Discrepancy | Checks for unsafe use of method http\_basic\_authenticate\_with, which is vulnerable to timing attacks as it does not use constant-time checking when comparing passwords. Affected Rails versions include: 5.0.0.beta1.1, 4.2.5.1, 4.1.14.1, 3.2.22.1. Avoid this function if possible. | | Incorrect Regular Expression | $V Found an incorrectly-bounded regex passed to `validates_format_of` or `validate ... format => ...`. Ruby regex behavior is multiline by default and lines should be terminated by `\A` for beginning of line and `\Z` for end of line, respectively. | | Generation of Error Message Containing Sensitive Information | The `consider_all_requests_local` setting was found set to true, which enables detailed exception reports. This setting, while useful during development for debugging purposes, can inadvertently expose sensitive system or application information to end users when enabled in production environments. Such information exposure could potentially aid attackers in crafting further attacks against the system.It is advisable to disable detailed exception reporting in production environments to prevent the leakage of sensitive information. Secure Configuration Example:# config/environments/production.rbRails.application.config.consider\_all\_requests\_local = false |

| Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | The `eval` method in Ruby executes a string argument as Ruby code. When `eval` is used with input that can be controlled or manipulated by an external user, it can allow arbitrary code execution. This means an attacker could potentially execute malicious code on the server, leading to unauthorized access, data leakage, or server compromise.Remediation Steps:- Validate and sanitize input: If there’s an absolute necessity to use `eval`, ensure that any user input is rigorously validated and sanitized to remove potentially harmful code. However, this is generally not recommended due to the difficulty of securely sanitizing code.- Use safer alternatives: Depending on the requirement, consider using safer alternatives to `eval`, such as `send` for calling methods dynamically or employing DSLs (Domain-Specific Languages) and safe parsing libraries designed for specific tasks.Secure Code Example:class Calculator def add(a, b) a + b endend# Safer alternative using sendcalculator = Calculator.newmethod = # Example: ‘add’ or ‘subtract’a = .to\_ib = .to\_iif calculator.respond\_to?(method) result = calculator.send(method, a, b)else puts “Invalid operation"endIn this example, `send` is used to dynamically call a method on the Calculator object based on user input. This approach is safer than eval because it strictly limits the operations to those defined in the class, preventing arbitrary code execution. |

| External Control of File Name or Path | Allowing user input to `send_file` allows a malicious user to potentially read arbitrary files from the server. Avoid accepting user input in `send_file` or normalize with `File.basename(...)` | | Incorrect Default Permissions | Default routes are enabled in this routes file. This means any public method on acontroller can be called as an action. It is easy to accidentally exposemethods. Instead, remove the offending line and explicitly include allroutes that are intended for external users to follow.Secure Code Example:# In routes.rbRails.application.routes.draw do get ‘posts’ => ‘posts#index’, as: :posts get ‘posts/:id’ => ‘posts#show’, as: :post post ‘posts’ => ‘posts#create’ # Other CRUD actions for posts can be defined similarlyend |

| Incorrect Default Permissions | The application was found retrieving session data using user input. A malicious user may be able to retrieve information from the session that was not meant to be allowed. Session manipulation can occur when an application allows user-input in session keys. Since sessions are typically considered a source of truth (e.g. to check the logged-in user or to match CSRF tokens), allowing an attacker to manipulate the session may lead to unintended behavior. To mitigate this issue, never use user input as a session key. Instead, consider an allow list approach to control access to session keys, ensuring only predefined keys are accessible, and user input is not usedto directly access the session key values. Secure Code Example:# Define an allowed list of permitted session keysALLOWED\_SESSION\_KEYS = \[‘display\_settings’, ’locale’\]user\_provided\_key = # Validate the key against the listif ALLOWED\_SESSION\_KEYS.include?(user\_provided\_key) # Access the session value safely value = else raise “Invalid session key provided.“end |

| Incorrect Default Permissions | This gets data from session using user inputs. A malicious user may be able to retrieve information from your session that you didn’t intend them to. Do not use user input as a session key. | | Incorrect Default Permissions | Default routes are enabled in this routes file. This means any public method on a controller can be called as an action. It is very easy to accidentally expose a method you didn’t mean to. Instead, remove this line and explicitly include all routes you intend external users to follow. | | Improper Check for Unusual or Exceptional Conditions | Found an improperly constructed control flow block with `request.get?`. Rails will route HEAD requests as GET requests but they will fail the `request.get?` check, potentially causing unexpected behavior unless an `elsif` condition is used.Secure Code Example:if request.get? # Handle GET request logic hereelsif request.head? # Handle HEAD request logic hereelse # Handle others if neededend |

| Insufficient Verification of Data Authenticity | Detected the decoding of a JWT token without a verify step. JWT tokens must be verified before use, otherwise the token’s integrity is unknown. This means a malicious actor could forge a JWT token with any claims. | | Use of Weak Hash | The MD5 hashing algorithm is considered cryptographically weak and vulnerable to collision attacks, where two different inputs generate the same output hash. When used for hashing sensitive data, attackers can exploit this weakness to generate collisions, allowing them to bypass security checks or masquerade malicious data as legitimate. This vulnerability is particularly critical in authentication mechanisms, digital signatures, SSL/TLS certificates, and data integrity checks.Remediation:To mitigate this vulnerability, replace the MD5 hashing algorithm with stronger cryptographic hash functions, such as SHA-256 or SHA-3. These algorithms offer significantly improved security and are resistant to collision attacks, making them suitable for cryptographic purposes in modern applications.Secure Code example:require ‘openssl’data = “sensitive information”# Using SHA-256digest = OpenSSL::Digest::SHA256.newhash = digest.digest(data)hex\_hash = digest.hexdigest(data)# Using SHA-3 (256 bits)digest = OpenSSL::Digest::SHA3.new(256)hash2 = digest.digest(data)hex\_hash2 = digest.hexdigest(data) |

| Use of Weak Hash | The SHA-1 hashing algorithm is no longer considered secure forcryptographic applications due to its vulnerability to collision attacks,where two different inputs produce the same output hash. SHA-1’ssusceptibility to collision attacks undermines the security ofcryptographic operations, allowing attackers to forge signatures ormanipulate data without detection. This poses significant risks inauthentication systems, data integrity validations, and securecommunications. Remediation: To mitigate this vulnerability, replace the SHA1 hashing algorithm with stronger cryptographic hash functions, such as SHA-256 or SHA-3. These algorithms offer significantly improved security and are resistant to collision attacks, making them suitable for cryptographic purposes in modern applications.Secure Code example : require ‘openssl’data = “sensitive information”# Using SHA-256digest = OpenSSL::Digest::SHA256.newhash = digest.digest(data)hex\_hash = digest.hexdigest(data)# Using SHA-3 (256 bits)digest = OpenSSL::Digest::SHA3.new(256)hash2 = digest.digest(data)hex\_hash2 = digest.hexdigest(data) |

| Use of Weak Hash | Should not use md5 to generate hashes. md5 is proven to be vulnerable through the use of brute-force attacks. Could also result in collisions, leading to potential collision attacks. Use SHA256 or other hashing functions instead. | | Use of Weak Hash | Should not use SHA1 to generate hashes. There is a proven SHA1 hash collision by Google, which could lead to vulnerabilities. Use SHA256, SHA3 or other hashing functions instead. | | Missing Encryption of Sensitive Data | The application was found setting `force_ssl` to `false`. This settingcan expose the application to the risk of networkinterception of unencrypted traffic. Enabling `force_ssl` by setting `config.force_ssl = true` in the application’s configuration, specifically within `config/environments/production.rb`, forces the use of HTTPS, encrypting data in transit and safeguarding against eavesdropping or data tampering. | | Missing Encryption of Sensitive Data | Checks for configuration setting of force\_ssl to false. Force\_ssl forces usage of HTTPS, which could lead to network interception of unencrypted application traffic. To fix, set config.force\_ssl = true. | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Checks for calls to `without_protection` during mass assignment (which allows record creation from hash values). This can lead to users bypassing permissions protections. Using `:without_protection => true` makes your application vulnerable to attackers who may craft malicious requests to modify sensitive attributes, leading to unauthorized access or data manipulation. For Rails 4 and higher, mass protection is on by default.To mitigate this issue, don’t use :without\_protection => true. Instead, configure attr\_accessible to control attribute access.Secure Code Example:class User # Only name and email can be updated via mass assignment attr\_accessible :name, :email # admin and account\_id are not listed here, so they cannot be mass-assignedend |

| Improperly Controlled Modification of Dynamically-Determined Object Attributes | The application was found permitting attributes which could lead to mass assignmentvulnerabilities. Permitting attributes such as `admin`, `role`, `banned` etc, without proper authorization checks can lead to security issues like unauthorized access or privilege escalation.Remediation Strategy- Explicitly permit attributes: Carefully review which attributes are permissible and avoid including sensitive ones in the list.- Role-based permissions: Implement checks that allow only authorized users (e.g., administrators) to modify sensitive attributes.- Avoid using `params.permit!`: Use specific permit statements instead of permitting all parameters to ensure only expected attributes are allowed for mass assignment.Secure Code Example:# Secure: Conditionally permit sensitive attributes based on user roledef user\_paramspermitted = params.require(:user).permit(:name, :email)= \[:role\] if current\_user.admin? && \[:role\].present?permittedenddef user\_params2 permitted\_attributes = \[:username, :email\] # Only allow ‘admin’ attribute to be updated by users with admin role permitted\_attributes params.require(:user).permit(\*permitted\_attributes)end |

| Improperly Controlled Modification of Dynamically-Determined Object Attributes | Checks for models that do not use attr\_accessible. This means there is no limiting of which variables can be manipulated through mass assignment. For newer Rails applications, parameters should be allowlisted using strong parameters. For older Rails versions, they should be allowlisted using strong\_attributes. | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Checks for strong parameter bypass through usage of create\_with. Create\_with bypasses strong parameter protection, which could allow attackers to set arbitrary attributes on models. To fix this vulnerability, either remove all create\_with calls or use the permit function to specify tags that are allowed to be set. | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Checks for dangerous permitted attributes that can lead to mass assignment vulnerabilities. Query parameters allowed using permit and attr\_accessible are checked for allowance of dangerous attributes admin, banned, role, and account\_id. Also checks for usages of params.permit!, which allows everything. Fix: don’t allow admin, banned, role, and account\_id using permit or attr\_accessible. | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Mass assignment protection disabled for ‘$MODEL’. This could permit assignment to sensitive model fields without intention. Instead, use ‘attr\_accessible’ for the model or disable mass assigment using ‘config.active\_record.whitelist\_attributes = true’. ‘:without\_protection => true’ must be removed for this to take effect. | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Checks for nested attributes vulnerability (CVE-2015-7577). Setting allow\_destroy: false in accepts\_nested\_attributes\_for can lead to attackers setting attributes to invalid values and clearing all attributes. This affects versions 3.1.0 and newer, with fixed versions 5.0.0.beta1.1, 4.2.5.1, 4.1.14.1, 3.2.22.1. To fix, upgrade to a newer version or use the initializer specified in the google groups. | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Checks for calls to without\_protection during mass assignment (which allows record creation from hash values). This can lead to users bypassing permissions protections. For Rails 4 and higher, mass protection is on by default. Fix: Don’t use :without\_protection => true. Instead, configure attr\_accessible to control attribute access. | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Calling `permit` on security-critical properties like `\$ATTRIBUTE` may leave your application vulnerable to mass assignment. | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Calling `permit` on security-critical properties like `\$ATTRIBUTE` may leave your application vulnerable to mass assignment. | | Inefficient Regular Expression Complexity | Found a potentially user-controllable argument in the construction of a regular expressions. This may result in excessive resource consumption when applied to certain inputs, or when the user is allowed to control the match target. Avoid allowing users to specify regular expressions processed by the server. If you must support user-controllable input in a regular expression, use an allow-list to restrict the expressions users may supply to limit catastrophic backtracking. | | Authorization Bypass Through User-Controlled Key | The application was found calling the `find(...)` method with user-controlled input. If the ActiveRecord model being searched against is sensitive, this may lead to Insecure Direct Object Reference (IDOR) behavior and allow users to read arbitrary records. This could lead to data breaches, including the exposure of personal information, account takeovers, and other security issues.To mitigate this risk, it’s essential to scope queries to the current user or another appropriate scope that ensures users can only access data they are authorized to see. This is done by using ActiveRecord associations and scopes to limit the records that can be retrieved. Secure Code Example:# Secure way to scope the find to the current user’s accountsdef show @account = current\_user.accounts.find()end |

| Authorization Bypass Through User-Controlled Key | Found an unscoped `find(...)` with user-controllable input. If the ActiveRecord model being searched against is sensitive, this may lead to Insecure Direct Object Reference (IDOR) behavior and allow users to read arbitrary records. Scope the find to the current user, e.g. `current_user.accounts.find()`. | | Improper Access Control | The application was found disabling controller checks by setting `skip_filter` or `skip_before_filter` with an `:except` option. This approach can inadvertently open up parts of your application to unauthorized access because it relies on a blocklist approach, where only specified actions are protected. A safer method of providing this functionality involves specifying exactly which controller actions should have checks applied using an `:only` option, effectively creating an allowlist. This method ensures that only specified actions are affected, and any new actions added to the controller will have the filters applied by default, adhering to the principle of secure by default.Secure Code Example:class UsersController # Apply the filter only to these actions, making it clear and secure by default skip\_before\_action :authenticate\_user!, only: \[:new, :create\]endIn the secure example, `:authenticate_user!` filter is explicitly skipped only for the `:new` and `:create actions`. This means any new action added to the UsersController in the future will have the `authenticate_user!` filter applied by default, ensuring that new parts of the application are secure from the start. |

| Improper Access Control | Checks for models that use attr\_protected, as use of allowlist instead of denylist is better practice. Attr\_protected was also found to be vulnerable to bypass. The fixed versions of Rails are: 3.2.12, 3.1.11, 2.3.17. To prevent bypass, use attr\_accessible instead. | | Improper Access Control | Disabled-by-default Rails controller checks make it much easier to introduce access control mistakes. Prefer an allowlist approach with `:only => [...]` rather than `except: => [...]` | | Divide By Zero | A ZeroDivisionError exception has been detected, this occurs when an arithmetic operation attempts to divide a number by zero. This can happen in various contexts, such as processing user inputs, performing calculations with variables, or working with data from external sources. Such errors not only disrupt the normal flow of the application but also can be exploited in certain scenarios to cause harm (eg. possible dos) or extract information based on the application’s response to the error.To prevent ZeroDivisionError exceptions and ensure application robustness:- Error handling: Implement error handling around division operations to catch and manage ZeroDivisionError gracefully.- Validation: Always validate inputs that are used in division operations to ensure they are not zero or unexpected values. | | Divide By Zero | Detected a possible ZeroDivisionError. | | Improper Restriction of Rendered UI Layers or Frames | Checks for use of action in Ruby routes. This can cause Rails to render an arbitrary view if an attacker creates an URL accurately. Affects 3.0 applications. Can avoid the vulnerability by providing additional constraints. | | Found a call to `render \$T` after calling `\$T.save` | Found a call to `render \$T` after calling `\$T.save`. Do not call `render` after calling `save` on an ActiveRecord object. Reloading the page will cause the state-changing operation to be repeated which may cause undesirable side effects. Use `redirect_to` instead. | | The $COLUMN column appears to be a foreign key | The $COLUMN column appears to be a foreign key. Would it benefit from an index? Having an index can improve performance. | | Use of Web Link to Untrusted Target with window.opener Access | Setting an anchor target of `_blank` without the `noopener` or `noreferrer` attribute allows reverse tabnabbing on Internet Explorer, Opera, and Android Webview. | | Trusting HTTP Permission Methods on the Server Side | Found an improperly constructed control flow block with `request.get?`. Rails will route HEAD requests as GET requests but they will fail the `request.get?` check, potentially causing unexpected behavior unless an `elif` condition is used. |

## Scala [Copied!](#scala "Copy link to this section")

Policy Name

Description

Server-Side Request Forgery (SSRF)

Server-Side Request Forgery occur when a web server executes a request to a user supplieddestination parameter that is not validated. Such vulnerabilities could allow an attacker toaccess internal services or to launch attacks from your web server.

Server-Side Request Forgery (SSRF)

A parameter being passed directly into `WSClient` most likely lead to SSRF. This could allow an attacker to send data to their own server, potentially exposing sensitive data sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. Do not allow arbitrary hosts. Instead, create an allowlist for approved hosts hardcode the correct host.

Server-Side Request Forgery (SSRF)

A parameter being passed directly into `fromURL` most likely lead to SSRF. This could allow an attacker to send data to their own server, potentially exposing sensitive data sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. Do not allow arbitrary hosts. Instead, create an allowlist for approved hosts hardcode the correct host.

Server-Side Request Forgery (SSRF)

A parameter being passed directly into `url` most likely lead to SSRF. This could allow an attacker to send data to their own server, potentially exposing sensitive data sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. Do not allow arbitrary hosts. Instead, create an allowlist for approved hosts hardcode the correct host.

Server-Side Request Forgery (SSRF)

A parameter being passed directly into `Http` most likely lead to SSRF. This could allow an attacker to send data to their own server, potentially exposing sensitive data sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. Do not allow arbitrary hosts. Instead, create an allowlist for approved hosts hardcode the correct host.

Inadequate Encryption Strength

DefaultHttpClient with default constructor is not compatible with TLS 1.2

Use of a Broken or Risky Cryptographic Algorithm

NullCipher was detected. This will not encrypt anything; the cipher text will be the same as the plain text. Use a valid, secure cipher: Cipher.getInstance(“AES/CBC/PKCS7PADDING”). See [https://owasp.org/www-community/Using\_the\_Java\_Cryptographic\_Extensions](https://owasp.org/www-community/Using_the_Java_Cryptographic_Extensions) for more information.

Use of RSA Algorithm without OAEP

Usage of RSA without OAEP (Optimal Asymmetric Encryption Padding) may weaken encryption. This could lead to sensitive data exposure. Instead, use RSA with `OAEPWithMD5AndMGF1Padding` instead.

Improper Input Validation

The Servlet can read GET and POST parameters from various methods. Thevalue obtained should be considered unsafe.”

Improper Input Validation

This method is part of a REST Web Service (JSR311). The security of this web service should beanalyzed. For example:- Authentication, if enforced, should be tested.- Access control, if enforced, should be tested.- The inputs should be tracked for potential vulnerabilities.- The communication should ideally be over SSL.- If the service supports writes (e.g., via POST), its vulnerability to CSRF should beinvestigated.

Improper Input Validation

This method is part of a SOAP Web Service (JSR224). The security of this web service should beanalyzed. For example:- Authentication, if enforced, should be tested.- Access control, if enforced, should be tested.- The inputs should be tracked for potential vulnerabilities.- The communication should ideally be over SSL.

Improper Input Validation

Form inputs should have minimal input validation. Preventive validation helps provide defensein depth against a variety of risks.

Improper Input Validation

Without proper access control, executing an LDAP statement that contains auser-controlled value can allow an attacker to abuse poorly configured LDAPcontext

Improper Handling of Unicode Encoding

Improper Handling of Unicode Encoding

Improper Control of Generation of Code (‘Code Injection’)

`eval()` function evaluates JavaScript code represented as a string. Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use `eval()`. Do not use eval(). Alternatively: Ensure evaluated content is not definable by external sources. If it’s not possible, strip everything except alphanumeric characters from an input provided for the command string and arguments.

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Restriction of XML External Entity Reference

XML External Entity (XXE) attacks can occur when an XML parser supports XMLentities while processing XML received from an untrusted source.

Improper Restriction of XML External Entity Reference

XML External Entity (XXE) attacks can occur when an XML parser supports XMLentities while processing XML received from an untrusted source.

Improper Restriction of XML External Entity Reference

XML External Entity (XXE) attacks can occur when an XML parser supports XMLentities while processing XML received from an untrusted source.

Improper Restriction of XML External Entity Reference

XMLInputFactory being instantiated without calling the setProperty functions that are generally used for disabling entity processing. User controlled data in XML Document builder can result in XML Internal Entity Processing vulnerabilities like the disclosure of confidential data, denial of service, Server Side Request Forgery (SSRF), port scanning. Make sure to disable entity processing functionality.

Improper Restriction of XML External Entity Reference

XML processor being instantiated without calling the `setFeature` functions that are generally used for disabling entity processing. User controlled data in XML Parsers can result in XML Internal Entity Processing vulnerabilities like the disclosure of confidential data, denial of service, Server Side Request Forgery (SSRF), port scanning. Make sure to disable entity processing functionality.

Improper Restriction of XML External Entity Reference

Document Builder being instantiated without calling the `setFeature` functions that are generally used for disabling entity processing. User controlled data in XML Document builder can result in XML Internal Entity Processing vulnerabilities like the disclosure of confidential data, denial of service, Server Side Request Forgery (SSRF), port scanning. Make sure to disable entity processing functionality.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

A file is opened to read its content. The filename comes from an input parameter. If anunfiltered parameter is passed to this file API, files from an arbitrary filesystem locationcould be read. This rule identifies potential path traversal vulnerabilities. In many cases,the constructed file path cannot be controlled by the user.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

A file is opened to write to its contents. The filename comes from an input parameter. If anunfiltered parameter is passed to this file API, files at an arbitrary filesystem locationcould be modified. This rule identifies potential path traversal vulnerabilities. In manycases, the constructed file path cannot be controlled by the user.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

“The software uses an HTTP request parameter to construct a pathname that should be within arestricted directory, but it does not properly neutralize sequences such as “..” that canresolve to a location that is outside of that directory. Seehttp://cwe.mitre.org/data/definitions/23.html for more information.”

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Flags cases of possible path traversal. If an unfiltered parameter is passed into ‘fromFile’, file from an arbitrary filesystem location could be read. This could lead to sensitive data exposure and other provles. Instead, sanitize the user input instead of performing direct string concatenation.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

The method identified is susceptible to injection. The input should be validated and properlyescaped.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

The input values included in SQL queries need to be passed in safely. Bindvariables in prepared statements can be used to easily mitigate the risk ofSQL injection.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Avoid using non literal values in `overrideSql(...)`.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Avoid using `#\$variable` and use `\$variable` in `sql"..."` strings instead.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

User data flows into this manually-constructed SQL string. User data can be safely inserted into SQL strings using prepared statements or an object-relational mapper (ORM). Manually-constructed SQL strings is a possible indicator of SQL injection, which could let an attacker steal or manipulate data from the database. Instead, use prepared statements (`connection.PreparedStatement`) or a safe library.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a tainted SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Avoid using using user input for generating SQL strings.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

User data flows into this manually-constructed SQL string. User data can be safely inserted into SQL strings using prepared statements or an object-relational mapper (ORM). Manually-constructed SQL strings is a possible indicator of SQL injection, which could let an attacker steal or manipulate data from the database. Instead, use prepared statements (`connection.PreparedStatement`) or a safe library.

External Control of System or Configuration Setting

An attacker can set arbitrary bean properties that can compromise system integrity. Anattacker can leverage this functionality to access special bean properties likeclass.classLoader that will allow them to override system properties and potentially executearbitrary code.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

The highlighted API is used to execute a system command. If unfiltered input is passed to thisAPI, it can lead to arbitrary command execution.

Improper Neutralization of Special Elements in Data Query Logic

Constructing SimpleDB queries containing user input can allow an attacker to view unauthorizedrecords.

Improper Neutralization of CRLF Sequences (‘CRLF Injection’)

When data from an untrusted source is put into a logger and not neutralized correctly, anattacker could forge log entries or include malicious content. Inserted false entries could beused to skew statistics, distract the administrator or even to implicate another party in thecommission of a malicious act. If the log file is processed automatically, the attacker canrender the file unusable by corrupting the format of the file or injecting unexpectedcharacters. An attacker may also inject code or other commands into the log file and takeadvantage of a vulnerability in the log processing utility (e.g. command injection or XSS).

Incorrect Permission Assignment for Critical Resource

Overly permissive file permission

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Disabling HTML escaping put the application at risk for Cross-Site Scripting (XSS).

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Avoid using custom XSS filtering. Please use standard sanitization functions.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

A potential XSS was found. It could be used to execute unwanted JavaScript in aclient’s browser.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Raw html content controlled by a variable detected. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. Try to avoid using `Html()` or consider properly sanitizing input data.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a request with potential user-input going into an `Ok()` response. This bypasses any view or template environments, including HTML escaping, which may expose this application to cross-site scripting (XSS) vulnerabilities. Consider using a view technology such as Twirl which automatically escapes HTML views.

Deserialization of Untrusted Data

Enabling extensions in Apache XML RPC server or client can lead to deserializationvulnerability which would allow an attacker to execute arbitrary code.

Exposure of Sensitive Information to an Unauthorized Actor

Applications can unintentionally leak information about their configuration, internalworkings, or violate privacy through a variety of application problems. Pages that providedifferent responses based on the validity of the data can lead to Information Leakage;specifically when data deemed confidential is being revealed as a result of the webapplication’s design.

Cleartext Transmission of Sensitive Information

Beyond using an SSL socket, you need to make sure your use of SSLSocketFactorydoes all the appropriate certificate validation checks to make sure you are notsubject to man-in-the-middle attacks. Please read the OWASP Transport LayerProtection Cheat Sheet for details on how to do this correctly.

Permissive Cross-domain Policy with Untrusted Domains

Prior to HTML5, Web browsers enforced the Same Origin Policy which ensures that in order forJavaScript to access the contents of a Web page, both the JavaScript and the Web page mustoriginate from the same domain. Without the Same Origin Policy, a malicious website could serveup JavaScript that loads sensitive information from other websites using a client’scredentials, cull through it, and communicate it back to the attacker. HTML5 makes it possiblefor JavaScript to access data across domains if a new HTTP header calledAccess-Control-Allow-Origin is defined. With this header, a Web server defines which otherdomains are allowed to access its domain using cross-origin requests. However, caution shouldbe taken when defining the header because an overly permissive CORS policy will allow amalicious application to communicate with the victim application in an inappropriate way,leading to spoofing, data theft, relay and other attacks.

Improper Neutralization of CRLF Sequences in HTTP Headers (‘HTTP Request/Response Splitting’)

This code constructs an HTTP Cookie using an untrusted HTTP parameter. If this cookie is addedto an HTTP response, it will allow a HTTP response splitting vulnerability. Seehttp://en.wikipedia.org/wiki/HTTP\_response\_splitting for more information.

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

“Storing sensitive data in a persistent cookie for an extended period can lead to a breach ofconfidentiality or account compromise.”

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

The information stored in a custom cookie should not be sensitive or related to the session.In most cases, sensitive data should only be stored in session and referenced by the user’ssession cookie.

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

Session cookie `Secure` flag is explicitly disabled. The `secure` flag for cookies prevents the client from transmitting the cookie over insecure channels such as HTTP. Set the `Secure` flag by setting `secure` to `true` in configuration file.

Trust Boundary Violation

A trust boundary can be thought of as line drawn through a program. On one sideof the line, data is untrusted. On the other side of the line, data is assumedto be trustworthy. The purpose of validation logic is to allow data to safelycross the trust boundary - to move from untrusted to trusted. A trust boundaryviolation occurs when a program blurs the line between what is trusted and whatis untrusted. By combining trusted and untrusted data in the same datastructure, it becomes easier for programmers to mistakenly trust unvalidateddata.

Use of Insufficiently Random Values

The use of a predictable random value can lead to vulnerabilities when used in certain securitycritical contexts. A quick fix could be to replace the use of scala.util.Random with somethingstronger, such as java.security.SecureRandom

Use of Insufficiently Random Values

Flags the use of a predictable random value from `scala.util.Random`. This can lead to vulnerabilities when used in security contexts, such as in a CSRF token, password reset token, or any other secret value. To fix this, use java.security.SecureRandom instead.

Cross-Site Request Forgery (CSRF)

Possibly bypassable CSRF configuration found. CSRF is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated. Make sure that Content-Type black list is configured and CORS filter is turned on.

Generation of Error Message Containing Sensitive Information

The sensitive information may be valuable information on its own (such as a password), or itmay be useful for launching other, more deadly attacks. If an attack fails, an attacker may useerror information provided by the server to launch another more focused attack. For example, anattempt to exploit a path traversal weakness (CWE-22) might yield the full pathname of theinstalled application.

Active Debug Code

Scala applications built with `debug` set to true in production may leak debug information to attackers. Debug mode also affects performance and reliability. Remove it from configuration.

Flags scala code that look for values that are greater than 0

Flags scala code that look for values that are greater than 0. This ignores the first element, which is most likely a bug. Instead, use indexOf with -1. If the intent is to check the inclusion of a value, use the contains method instead.

## PHP [Copied!](#php "Copy link to this section")

Policy Name

Description

Server-Side Request Forgery (SSRF)

The web server receives a URL or similar request from an upstream component and retrieves the contents of this URL, but it does not sufficiently ensure that the request is being sent to the expected destination. Dangerous function $FUNCS with payload $DATA

Server-Side Request Forgery (SSRF)

User data flows into the host portion of this manually-constructed URL. This could allow an attacker to send data to their own server, potentially exposing sensitive data such as cookies or authorization information sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. (This is called server-side request forgery, or SSRF.) Do not allow arbitrary hosts. Instead, create an allowlist for approved hosts hardcode the correct host.

Server-Side Request Forgery (SSRF)

File name based on user input risks server-side request forgery.

Use of a Broken or Risky Cryptographic Algorithm

It looks like MD5 is used as a password hash. MD5 is not considered a secure password hash because it can be cracked by an attacker in a short amount of time. Use a suitable password hashing function such as bcrypt. You can use `password_hash(\$PASSWORD, PASSWORD_BCRYPT, \$OPTIONS);`.

Improper Control of Generation of Code (‘Code Injection’)

Backticks use may lead to command injection vulnerabilities.

Improper Control of Generation of Code (‘Code Injection’)

Executing non-constant commands. This can lead to command injection.

Improper Control of Generation of Code (‘Code Injection’)

Executing non-constant commands. This can lead to command injection.

Improper Control of Generation of Code (‘Code Injection’)

Calling mb\_ereg\_replace with user input in the options can lead to arbitrary code execution. The eval modifier (`e`) evaluates the replacement argument as code.

Improper Control of Generation of Code (‘Code Injection’)

Backticks use may lead to command injection vulnerabilities.

Improper Control of Generation of Code (‘Code Injection’)

These functions can lead to code injection if the data inside them is user-controlled. Don’t use the input directly or validate the data properly before passing it to these functions.

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Using user input when deleting files with `unlink()` is potentially dangerous. A malicious actor could use this to modify or access files they have no right to.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

These functions can lead to Local File Inclusion (LFI) or Remote File Inclusion (RFI) if the data inside is user-controlled. Validate the data properly before passing it to these functions.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

These functions can be used to delete the files if the data inside the functions are user controlled. Use these functions carefully.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Without sufficient removal or quoting of SQL syntax in user-controllable inputs,the generated SQL query can cause those inputs to be interpreted as SQL instead of ordinary user data. This can be used to alter query logic to bypass security checks,or to insert additional statements that modify the back-end database, possiblyincluding execution of system commands.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a SQL query based on user input. This could lead to SQL injection, which could potentially result in sensitive data being exfiltrated by attackers. Instead, use parameterized queries and prepared statements.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Found a request argument passed to an `ignore()` definition in a Rule constraint. This can lead to SQL injection.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

HTTP method \[$METHOD\] to Laravel route $ROUTE\_NAME is vulnerable to SQL injection via string concatenation or unsafe interpolation.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

User data flows into this manually-constructed SQL string. User data can be safely inserted into SQL strings using prepared statements or an object-relational mapper (ORM). Manually-constructed SQL strings is a possible indicator of SQL injection, which could let an attacker steal or manipulate data from the database. Instead, use prepared statements (`\$mysqli->prepare("INSERT INTO test(id, label) VALUES (?, ?)");`) or a safe library.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected string concatenation with a non-literal variable in a Doctrine DBAL query method. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

`\$QUERY` Detected string concatenation with a non-literal variable in a Doctrine QueryBuilder method. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected unsafe API methods. This could lead to SQL Injection if the used variable in the functions are user controlled and not properly escaped or sanitized. In order to prevent SQL Injection, use safe api methods like “$wpdb->prepare” properly or escape/sanitize the data properly.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Evaluating non-constant commands. This can lead to command injection.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Evaluating non-constant commands. This can lead to command injection.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

These functions can lead to command execution if the data inside them is user-controlled. Don’t use the input directly or validate the data properly before passing it to these functions.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

`Echo`ing user input risks cross-site scripting vulnerability. You should use `htmlentities()` when showing data to users.

Improper Authentication

Detected anonymous LDAP bind. This permits anonymous users to execute LDAP statements. Consider enforcing authentication for LDAP.

Deserialization of Untrusted Data

The software receives input from an upstream component that specifies multiple attributes, properties, or fields that are to be initialized or updated in an object, but it does not properly control which attributes can be modified.

Deserialization of Untrusted Data

The software receives input from an upstream component that specifies multiple attributes, properties, or fields that are to be initialized or updated in an object, but it does not properly control which attributes can be modified.

Deserialization of Untrusted Data

Do not call ’extract()’ on user-controllable data. If you must, then you must also provide the EXTR\_SKIP flag to prevent overwriting existing variables.

Deserialization of Untrusted Data

Calling `unserialize()` with user input in the pattern can lead to arbitrary code execution. Consider using JSON or structured data approaches (e.g. Google Protocol Buffers).

Deserialization of Untrusted Data

If the data used inside the patterns are directly used without proper sanitization, then this could lead to PHP Object Injection. Do not use these function with user-supplied input, use JSON functions instead.

Exposure of Sensitive Information to an Unauthorized Actor

The ‘phpinfo’ function may reveal sensitive information about your environment.

Exposure of Sensitive Information to an Unauthorized Actor

The ‘phpinfo’ function may reveal sensitive information about your environment.

Exposure of Sensitive Information to an Unauthorized Actor

Found a configuration file where the domain attribute is not set to null. It is recommended (unless you are using sub-domain route registrations) to set this attribute to null so that only the same origin can set the cookie, thus protecting your cookies.

URL Redirection to Untrusted Site (‘Open Redirect’)

Redirecting to the current request URL may redirect to another domain, if the current path starts with two slashes. E.g. in [https://www.example.com//attacker.com](https://www.example.com//attacker.com) , the value of REQUEST\_URI is //attacker.com, and redirecting to it will redirect to that domain.

URL Redirection to Untrusted Site (‘Open Redirect’)

This function can be used to redirect to user supplied URLs. If user input is not sanitised or validated, this could lead to Open Redirect vulnerabilities. Use “wp\_safe\_redirect()” to prevent this kind of attack.

URL Redirection to Untrusted Site (‘Open Redirect’)

The `redirect()` method does not check its destination in any way. If you redirect to a URL provided by end-users, your application may be open to the unvalidated redirects security vulnerability. Consider using literal values or an allowlist to validate URLs.

Cleartext Transmission of Sensitive Information

FTP allows for unencrypted file transfers. Consider using an encrypted alternative.

Cleartext Transmission of Sensitive Information

FTP allows for unencrypted file transfers. Consider using an encrypted alternative.

Cleartext Transmission of Sensitive Information

SSL verification is disabled but should not be (currently CURLOPT\_SSL\_VERIFYPEER= $IS\_VERIFIED)

Improper Neutralization of CRLF Sequences in HTTP Headers (‘HTTP Request/Response Splitting’)

Using user input when setting headers with `header()` is potentially dangerous. This could allow an attacker to inject a new line and add a new header into the response. This is called HTTP response splitting. To fix, do not allow whitespace inside `header()`: ‘\[^\\s\]+’.

Sensitive Cookie Without ‘HttpOnly’ Flag

Found a configuration file where the lifetime attribute is over 30 minutes.

Sensitive Cookie Without ‘HttpOnly’ Flag

Found a configuration file where the HttpOnly attribute is not set to true. Setting `http_only` to true makes sure that your cookies are inaccessible from Javascript, which mitigates XSS attacks. Instead, set the ‘http\_only’ like so: `http_only` => true

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

Found a configuration file where the secure attribute is not set to ’true’. Setting ‘secure’ to ’true’ prevents the client from transmitting the cookie over unencrypted channels and therefore prevents cookies from being stolen through man in the middle attacks.

Use of Potentially Dangerous Function

Mcrypt functionality has been deprecated and/or removed in recent PHP versions. Consider using Sodium or OpenSSL.

Use of Potentially Dangerous Function

Mcrypt functionality has been deprecated and/or removed in recent PHP versions. Consider using Sodium or OpenSSL.

Detected a string starting with a SQL operation with a concatenated value

Detected a string starting with a SQL operation with a concatenated value. This could lead to SQL injection if variables in the SQL statement are not properly sanitized.

Detected a formatted string starting with a SQL operation with a concatenated value that came from a function argument

Detected a formatted string starting with a SQL operation with a concatenated value that came from a function argument. This could lead to SQL injection if variables in the SQL statement are not properly sanitized.

Cross-Site Request Forgery (CSRF)

Detected a form executing a state-changing HTTP method `\$METHOD` to route definition `\$...ROUTE` without a Laravel CSRF decorator or explicit CSRF token implementation. If this form modifies sensitive state this will open your application to Cross-Site Request Forgery (CSRF) attacks.

Cross-Site Request Forgery (CSRF)

Passing false or 0 as the third argument to this function will not cause the script to die, making the check useless.

Cross-Site Request Forgery (CSRF)

CSRF protection is disabled for this configuration. This is a security risk. Make sure that it is safe or consider setting `csrf_protection` property to `true`.

Origin Validation Error

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Origin Validation Error

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Sensitive Cookie with Improper SameSite Attribute

Found a configuration file where the same\_site attribute is not set to ’lax’ or ‘strict’. Setting ‘same\_site’ to ’lax’ or ‘strict’ restricts cookies to a first-party or same-site context, which will protect your cookies and prevent CSRF.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Calling assert with user input is equivalent to eval’ing.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Calling assert with user input is equivalent to eval’ing.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Calling assert with user input is equivalent to eval’ing.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Calling assert with user input is equivalent to eval’ing.

Generation of Predictable IV with CBC Mode

Static IV used with AES in CBC mode. Static IVs enable chosen-plaintext attacks against encrypted data.

Active Debug Code

Found an instance setting the APP\_DEBUG environment variable to true. In your production environment, this should always be false. Otherwise, you risk exposing sensitive configuration values to potential attackers. Instead, set this to false.

External Control of File Name or Path

These functions can be used to read to content of the files if the data inside is user-controlled. Don’t use the input directly or validate the data properly before passing it to these functions.

Detected a SQL operation with Yii framework with a concatenated value

Detected a SQL operation with Yii framework with a concatenated value. This could lead to SQL injection if variables in the SQL statement are not properly sanitized.

Detected a formatted string in a Yii SQL operation with a concatenated value that came from a function argument

Detected a formatted string in a Yii SQL operation with a concatenated value that came from a function argument. This could lead to SQL injection if variables in the SQL statement are not properly sanitized.

Detects potential XSS with YII framework when the content of PHP variables is put in HTML code using blocks without making use of YII XSS-safe filters.

Detects potential XSS with YII framework when the content of PHP variables is put in HTML code using blocks without making use of YII XSS-safe filters.

Authentication and authorization checks are often implemented in “beforeAction” functions in Yii framework

Authentication and authorization checks are often implemented in “beforeAction” functions in Yii framework. When an authentication or authorization check is failed, the user is usually redirected to a login page or to an exception one. The “beforeAction must return “false” also if the user is redirected, otherwise the code protected by the “beforeAction” function is executed before the redirection, posing a secrious security risk.

Authentication and authorization checks are often implemented in “beforeAction” functions in Yii framework

Authentication and authorization checks are often implemented in “beforeAction” functions in Yii framework. When an authentication or authorization check is failed, the user is usually redirected to a login page or to an exception one. The “beforeAction must return “false” also if the user is redirected, otherwise the code protected by the “beforeAction” function is executed before the redirection, posing a secrious security risk.

Unrestricted Upload of File with Dangerous Type

`\$X` is saved without proper sanitization which could lead the client to uploading maliciousfile(s) to the server.

Unrestricted Upload of File with Dangerous Type

For a trusted mime type, use `getMimeType()` instead (which guesses the mimetype based on the file content).

Improper Control of Filename for Include/Require Statement in PHP Program (‘PHP Remote File Inclusion’)

Detected possible file read caused by the the error-based oracle of PHP filter chains. It can be used to leak the content of a local file when passed to vulnerable functions even when the server does not return the file content.

Improper Control of Filename for Include/Require Statement in PHP Program (‘PHP Remote File Inclusion’)

Detected non-constant file inclusion. This can lead to local file inclusion (LFI) or remote file inclusion (RFI) if user input reaches this statement. LFI and RFI could lead to sensitive files being obtained by attackers. Instead, explicitly specify what to include. If that is not a viable solution, validate user input thoroughly.

Improper Control of Filename for Include/Require Statement in PHP Program (‘PHP Remote File Inclusion’)

Detected non-constant file inclusion. This can lead to local file inclusion (LFI) or remote file inclusion (RFI) if user input reaches this statement. LFI and RFI could lead to sensitive files being obtained by attackers. Instead, explicitly specify what to include. If that is not a viable solution, validate user input thoroughly.

Use of Weak Hash

Detected usage of weak crypto function. Consider using stronger alternatives.

Use of Weak Hash

Detected usage of weak crypto function. Consider using stronger alternatives.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Setting `\$guarded` to an empty array allows mass assignment to every property in a Laravel model. This explicitly overrides Eloquent’s safe-by-default mass assignment protections.

Improper Authorization

These hooks allow the developer to handle the custom AJAX endpoints.“wp\_ajax\_$action” hook get fires for any authenticated user and “wp\_ajax\_nopriv\_$action” hook get fires for non-authenticated users.

Improper Authorization

These are some of the patterns used for authorisation. Look properly if the authorisation is proper or not.

Incorrect Comparison

Make sure comparisons involving md5 values are strict (use `===` not `==`) to avoid type juggling issues

Use of Externally-Controlled Input to Select Classes or Code (‘Unsafe Reflection’)

disabling of HTML entities, which can lead to XSS attacks.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The application was found calling `dangerouslySetInnerHTML` which may lead to Cross SiteScripting (XSS). By default, React components will encode the data properly before rendering.Calling `dangerouslySetInnerHTML` disables this encoding and allows raw markupand JavaScript to be executed.XSS is an attack which exploits a web application or system to treatuser input as markup or script code. It is important to encode the data, depending on thespecific context it is used in. There are at least six context types:- Inside HTML tags `context 1`\- Inside attributes: \`\`- Inside event attributes `button`\- Inside script blocks: `var x = "context 4"`\- Unsafe element HTML assignment: `element.innerHTML = "context 5"`\- Inside URLs: `link`Script blocks alone have multiple ways they need to be encoded. Extra care must be taken ifuser inputis ever output inside of script tags.User input that is displayed within the application must be encoded, sanitized or validatedto ensure it cannot be treated as HTML or executed as Javascript code. Care must also betakento not mix server-side templating with client-side templating, as the server-side templatingwillnot encode things like {{ 7\*7 }} which may execute client-side templating features.It is _NOT_ advised to encode user input prior to inserting into a data store. The data willneed to beencoded depending on context of where it is output. It is much safer to force the displayingsystem tohandle the encoding and not attempt to guess how it should be encoded.Remove the call to `dangerouslySetInnerHTML` or ensure that the data used in this call doesnot come from user-supplied input.For more information on dangerously setting inner HTML see:- [https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

DOMPurify.sanitize() was called without using RETURN\_DOM or RETURN\_DOM\_FRAGMENT. This is prone to mutation XSS, which could possibly bypass existing XSS filters. Adding one of these options will harden against potential future DOMPurify exploits.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Untrusted user input in rendering reactHTMLParser can lead to an XSS

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a call to `\$FUNC()` in an attempt to HTML escape the string `\$STR`. Manually sanitizing input through a manually built list can be circumvented in many situations, and it’s better to use a well known sanitization library such as `sanitize-html` or `DOMPurify`.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Overwriting `transformLinkUri` or `transformImageUri` to something insecure, or turning `allowDangerousHtml` on, or turning `escapeHtml` off, will open the code up to XSS vectors.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

$sceDelegateProvider allowlisting can introduce security issues if wildcards are used.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsUrl can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Use of angular.element can lead to XSS if user-input is treated as part of the HTML element within `\$SINK`. It is recommended to contextually output encode user-input, before inserting into `\$SINK`. If the HTML needs to be preserved it is recommended to sanitize the input using $sce.getTrustedHTML or $sanitize.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsCss can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAs can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsJs can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

$sceProvider is set to false. Disabling Strict Contextual escaping (SCE) in an AngularJS application could provide additional attack surface for XSS vulnerabilities.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Use of $window.location.href can lead to open-redirect if user input is used for redirection.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsHtml can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Use of angular.element can lead to XSS if user-input is treated as part of the HTML element within `\$SINK`. It is recommended to contextually output encode user-input, before inserting into `\$SINK`. If the HTML needs to be preserved it is recommended to sanitize the input using $sce.getTrustedHTML or $sanitize.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The use of $sce.trustAsResourceUrl can be dangerous if unsanitized user input flows through this API.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected user input flowing into an HTML response. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected user input flowing into a manually constructed HTML string. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. To be sure this is safe, check that the HTML is rendered safely. Otherwise, use templates which will safely render HTML instead.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a `\$EL.innerHTML` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a HTML string may result in XSS

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in methods like `innerHTML`, `outerHTML` or `document.write` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a HTML string may result in XSS

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected possible DOM-based XSS. This occurs because a portion of the URL is being used to construct an element added directly to the page. For example, a malicious actor could send someone a link like this: [http://www.some.site/page.html?default=alert(document.cookie)](http://www.some.site/page.html?default=alert%28document.cookie%29) which would add the script to the page. Consider allowlisting appropriate values or using an approach which does not involve the URL.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected the use of `\$TRUST`. This can introduce a Cross-Site-Scripting (XSS) vulnerability if this comes from user-provided input. If you have to use `\$TRUST`, ensure it does not come from user-input or use the appropriate prevention mechanism e.g. input validation or sanitization depending on the context.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

X-XSS-Protection header is set to 0. This will disable the browser’s XSS Filter.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a variable used in an anchor tag with the ‘href’ attribute. A malicious actor may be able to input the ‘javascript:’ URI, which could cause cross-site scripting (XSS). It is recommended to disallow ‘javascript:’ URIs within your application.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detection of dangerouslySetInnerHTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes from user-provided input. If you have to use dangerouslySetInnerHTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detection of $HTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes from user-provided input. If you have to use $HTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detection of $HTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes from user-provided input. If you have to use $HTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as Sequelize which will protect your queries.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User data flows into the host portion of this manually-constructed HTML. This can introduce a Cross-Site-Scripting (XSS) vulnerability if this comes from user-provided input. Consider using a sanitization library such as DOMPurify to sanitize the HTML within.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a jQuery’s `.\$METHOD(...)` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

JQuery’s `html` function is susceptible to Cross Site Scripting (XSS) attacks. If you’re just passing text, consider `text` instead. Otherwise, use a function that escapes HTML such as edX’s `HtmlUtils.setHtml()`.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a `\$(...)` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Cannot determine what ‘$UNK’ is and it is used with a ’’ tag. This could be susceptible to cross-site scripting (XSS). Ensure ‘$UNK’ is not externally controlled, or sanitize this data.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

User controlled data in a `createNodesFromMarkup` is an anti-pattern that can lead to XSS vulnerabilities

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

If user input reaches `HoverProvider` while `supportHml` is set to `true` it may introduce an XSS vulnerability. Do not produce HTML for hovers with dynamically generated input.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected directly writing to a Response object from user-defined input. This bypasses any HTML escaping and may expose your application to a Cross-Site-scripting (XSS) vulnerability. Instead, use ‘resp.render()’ to render safely escaped HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

The Mustache escape function is being overwritten. This could bypass HTML escaping safety measures built into the rendering engine, exposing your application to cross-site scripting (XSS) vulnerabilities. If you need unescaped HTML, use the triple brace operator in your template: ‘{{{ … }}}’.

Deserialization of Untrusted Data

User controlled data in ‘yaml.load()’ function can result in Remote Code Injection.

Deserialization of Untrusted Data

User controlled data in ‘unserialize()’ or ‘deserialize()’ function can result in Object Injection or Remote Code Injection.

Deserialization of Untrusted Data

User controlled data in ‘unserialize()’ or ‘deserialize()’ function can result in Object Injection or Remote Code Injection.

Deserialization of Untrusted Data

Found an insecure gRPC connection. This creates a connection without encryption to a gRPC client/server. A malicious attacker could tamper with the gRPC message, which could compromise the machine.

Deserialization of Untrusted Data

Found an insecure gRPC connection. This creates a connection without encryption to a gRPC client/server. A malicious attacker could tamper with the gRPC message, which could compromise the machine.

Deserialization of Untrusted Data

The following function call $SER.$FUNC accepts user controlled data which can result in Remote Code Execution (RCE) through Object Deserialization. It is recommended to use secure data processing alternatives such as JSON.parse() and Buffer.from().

Exposure of Sensitive Information to an Unauthorized Actor

Missing ’noopener’ on an anchor tag where target=’\_blank’. This could introducea reverse tabnabbing vulnerability. Include ’noopener’ when using target=’\_blank’.

URL Redirection to Untrusted Site (‘Open Redirect’)

Depending on the context, user control data in `Object.assign` can cause web response to include data that it should not have or can lead to a mass assignment vulnerability.

URL Redirection to Untrusted Site (‘Open Redirect’)

The application accepts potentially user-controlled input `\$PROP` which can control the location of the current window context. This can lead two types of vulnerabilities open-redirection and Cross-Site-Scripting (XSS) with JavaScript URIs. It is recommended to validate user-controllable input before allowing it to control the redirection.

URL Redirection to Untrusted Site (‘Open Redirect’)

The application accepts potentially user-controlled input `\$PROP` which can control the location of the current window context. This can lead two types of vulnerabilities open-redirection and Cross-Site-Scripting (XSS) with JavaScript URIs. It is recommended to validate user-controllable input before allowing it to control the redirection.

URL Redirection to Untrusted Site (‘Open Redirect’)

The application redirects to a URL specified by user-supplied input `\$REQ` that is not validated. This could redirect users to malicious locations. Consider using an allow-list approach to validate URLs, or warn users they are being redirected to a third-party website.

URL Redirection to Untrusted Site (‘Open Redirect’)

It looks like ‘$UNK’ is read from user input and it is used to as a redirect. Ensure ‘$UNK’ is not externally controlled, otherwise this is an open redirect.

Cleartext Transmission of Sensitive Information

Unencrypted request over HTTP detected.

Cleartext Transmission of Sensitive Information

Checks for setting the environment variable NODE\_TLS\_REJECT\_UNAUTHORIZED to 0, which disables TLS verification. This should only be used for debugging purposes. Setting the option rejectUnauthorized to false bypasses verification against the list of trusted CAs, which also leads to insecure transport. These options lead to vulnerability to MTM attacks, and should not be used.

Cleartext Transmission of Sensitive Information

Detects creations of $HTTPS servers from option objects that don’t disallow SSL v2, SSL v3, and TLS v1. These protocols are deprecated due to POODLE, man in the middle attacks, and other vulnerabilities.

Cleartext Transmission of Sensitive Information

Detects direct creations of $HTTPS servers that don’t disallow SSL v2, SSL v3, and TLS v1. These protocols are deprecated due to POODLE, man in the middle attacks, and other vulnerabilities.

Cleartext Transmission of Sensitive Information

Checks for lack of usage of the “secure: true” option when sending ftp requests through the nodejs ftp module. This leads to unencrypted traffic being sent to the ftp server. There are other options such as “implicit” that still does not encrypt all traffic. ftp is the most utilized npm ftp module.

Cleartext Transmission of Sensitive Information

TLS1.0 and TLS1.1 are deprecated and should not be used anymore. By default, NodeJS used TLSv1.2. So, TLS min version must not be downgrade to TLS1.0 or TLS1.1. Enforce TLS1.3 is highly recommended This rule checks TLS configuration only for PostgreSQL, MariaDB and MySQL. SQLite is not really concerned by TLS configuration. This rule could be extended for MSSQL, but the dialectOptions is specific for Tedious.

Cleartext Transmission of Sensitive Information

Bucket $X is not set to enforce encryption-in-transit, if not explictly setting this on the bucket policy - the property “enforceSSL” should be set to true

Uncontrolled Resource Consumption

By setting `allErrors: true` in `Ajv` library, all error objects will be allocated without limit. This allows the attacker to produce a huge number of errors which can lead to denial of service. Do not use `allErrors: true` in production.

Cross-Site Request Forgery (CSRF)

Detected use of express.csrf() middleware before express.methodOverride(). This canallow GET requests (which are not checked by csrf) to turn into POST requests later.

Cross-Site Request Forgery (CSRF)

Detected use of express.csrf() middleware before express.methodOverride(). This can allow GET requests (which are not checked by csrf) to turn into POST requests later.

Cross-Site Request Forgery (CSRF)

A CSRF middleware was not detected in your express application. Ensure you are either using one such as `csurf` or `csrf` (see rule references) and/or you are properly doing CSRF validation in your routes with a token or cookies.

Origin Validation Error

By letting user input control CORS parameters, there is a risk that software does not properly verify that the source of data or communication is valid. Use literal values for CORS settings.

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

Depending on the context, generating weak random numbers may expose cryptographic functions,which rely on these numbers, to be exploitable. When generating numbers for sensitive valuessuch as tokens, nonces, and cryptographic keys, it is recommended that the `randomBytes` methodof the `crypto` module be used instead of `pseudoRandomBytes`.Example using `randomBytes`:// Generate 256 bytes of random dataconst randomBytes = crypto.randomBytes(256);For more information on JavaScript Cryptography see:https://nodejs.org/api/crypto.html#cryptorandombytessize-callback

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

Detected usage of crypto.pseudoRandomBytes, which does not produce secure random numbers.

Insufficiently Protected Credentials

Don’t use the default session cookie name Using the default session cookie name can open your app to attacks. The security issue posed is similar to X-Powered-By: a potential attacker can use it to fingerprint the server and target attacks accordingly.

Insufficiently Protected Credentials

Default session middleware settings: `secure` not set. It ensures the browser only sends the cookie over HTTPS.

Insufficiently Protected Credentials

Default session middleware settings: `httpOnly` not set. It ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.

Insufficiently Protected Credentials

Default session middleware use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next.

Insufficiently Protected Credentials

Default session middleware use it to compare against the request path. If this and domain match, then send the cookie in the request.

Insufficiently Protected Credentials

Default session middleware settings: `expires` not set. Use it to set expiration date for persistent cookies.

Insufficiently Protected Credentials

Bracket object notation with user input is present, this might allow an attacker to access all properties of the object and even it’s prototype. Use literal values for object properties.

Insufficiently Protected Credentials

No token revoking configured for `express-jwt`. A leaked token could still be used and unable to be revoked. Consider using function as the `isRevoked` option.

Insufficiently Protected Credentials

The object is passed strictly to jsonwebtoken.sign(…) Make sure that sensitive information is not exposed through JWT token payload.

Insufficiently Protected Credentials

The object is passed strictly to jose.JWT.sign(…) Make sure that sensitive information is not exposed through JWT token payload.

Improper Restriction of Operations within the Bounds of a Memory Buffer

Detected usage of noassert in Buffer API, which allows the offset the be beyond the end of the buffer. This could result in writing or reading beyond the end of the buffer.

Improper Encoding or Escaping of Output

Markup escaping disabled. This can be used with some template engines to escape disabling of HTML entities, which can lead to XSS attacks.

Improper Encoding or Escaping of Output

This template literal looks like HTML and has interpolated variables. These variables are not HTML-encoded by default. If the variables contain HTML tags, these may be interpreted by the browser, resulting in cross-site scripting (XSS).

Improper Encoding or Escaping of Output

`\$STR.replace` method will only replace the first occurrence when used with a string argument ($CHAR). If this method is used for escaping of dangerous data then there is a possibility for a bypass. Try to use sanitization library instead or use a Regex with a global flag.

Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)

`serialize-javascript` used with `unsafe` parameter, this could be vulnerable to XSS.

Use of Incorrectly-Resolved Name or Reference

If an attacker controls the x in require(x) then they can cause code to load that was not intended to run on the server.

Use of Incorrectly-Resolved Name or Reference

User controllable data `\$REQ` enters `\$RES.render(...)` this can lead to the loading of other HTML/templating pages that they may not be authorized to render. An attacker may attempt to use directory traversal techniques e.g. `../folder/index` to access other HTML pages on the file system. Where possible, do not allow users to define what should be loaded in $RES.render or use an allow list for the existing application.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

The application was found to dynamically import a module by calling `require` using anon-literal string. An adversary might be able to read the first line ofarbitrary files. If they had write access to the file system, they may also be able toexecute arbitrary code.To remediate this issue, use a hardcoded string literal when calling `require`. Never call itit with dynamically created variables or user-supplied data.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

The `eval()` function evaluates JavaScript code represented as a string. Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use `eval()`. Ensure evaluated content is not definable by external sources.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Detected use of dynamic execution of JavaScript which may come from user-input, which can lead to Cross-Site-Scripting (XSS). Where possible avoid including user-input in functions which dynamically execute user-input.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Detected the use of eval(). eval() can be dangerous if used to evaluate dynamic content. If this content can be input from outside the program, this may be a code injection vulnerability. Ensure evaluated content is not definable by external sources.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Found data from an Express or Next web request flowing to `eval`. If this data is user-controllable this can lead to execution of arbitrary system commands in the context of your application process. Avoid `eval` whenever possible.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Detected the use of require(variable). Calling require with a non-literal argument might allow an attacker to load and run arbitrary code, or access arbitrary files.

External Control of File Name or Path

The application processes user-input, this is passed to res.sendFile which can allow an attacker to arbitrarily read files on the system through path traversal. It is recommended to perform input validation in addition to canonicalizing the path. This allows you to validate the path against the intended directory it should be accessing.

Use of Unmaintained Third Party Components

Detected usage of the `notevil` package, which is unmaintained and has vulnerabilities. Using any sort of `eval()` functionality can be very dangerous, but if you must, the `eval` package is an up to date alternative. Be sure that only trusted input reaches an `eval()` function.

Insufficient Verification of Data Authenticity

The target origin of the window.postMessage() API is set to “\*”. This could allow for information disclosure due to the possibility of any origin allowed to receive the message.

Insufficient Verification of Data Authenticity

No validation of origin is done by the addEventListener API. It may be possible to exploit this flaw to perform Cross Origin attacks such as Cross-Site Scripting(XSS).

Insufficient Verification of Data Authenticity

Detected the decoding of a JWT token without a verify step. JWT tokens must be verified before use, otherwise the token’s integrity is unknown. This means a malicious actor could forge a JWT token with any claims. Call ‘.verify()’ before using the token.

Missing Authentication for Critical Function

CodeBuild Project $X is set to have a public URL. This will make the build results, logs, artifacts publically accessible, including builds prior to the project being public. Ensure this is acceptable for the project.

Missing Authentication for Critical Function

Using the GrantPublicAccess method on bucket contruct $X will make the objects in the bucket world accessible. Verify if this is intentional.

Allocation of Resources Without Limits or Throttling

The application was found calling the `new Buffer` constructor which has been deprecatedsince Node 8.By passing in a non-literal value, an adversary could allocate large amounts of memory.Other issues also exist with the `Buffer` // Work with bufFor more information on migrating to `Buffer.from()`/`Buffer.alloc()` see:- [https://nodejs.org/en/docs/guides/buffer-constructor-deprecation](https://nodejs.org/en/docs/guides/buffer-constructor-deprecation)

Missing Encryption of Sensitive Data

Add “encryption: $Y.BucketEncryption.KMS\_MANAGED” or “encryption: $Y.BucketEncryption.S3\_MANAGED” to the bucket props for Bucket construct $X

Missing Encryption of Sensitive Data

Queue $X is missing encryption at rest. Add “encryption: $Y.QueueEncryption.KMS” or “encryption: $Y.QueueEncryption.KMS\_MANAGED” to the queue props to enable encryption at rest for the queue.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Depending on the context, user control data in `Object.assign` can cause web response to include data that it should not have or can lead to a mass assignment vulnerability.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Possibility of prototype polluting assignment detected. By adding or modifying attributes of an object prototype, it is possible to create attributes that exist on every object, or replace critical attributes with malicious ones. This can be problematic if the software depends on existence or non-existence of certain attributes, or uses pre-defined attributes of object prototype (such as hasOwnProperty, toString or valueOf). Possible mitigations might be: freezing the object prototype, using an object without prototypes (via Object.create(null) ), blocking modifications of attributes that resolve to object prototype, using Map instead of object.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Possibility of prototype polluting function detected. By adding or modifying attributes of an object prototype, it is possible to create attributes that exist on every object, or replace critical attributes with malicious ones. This can be problematic if the software depends on existence or non-existence of certain attributes, or uses pre-defined attributes of object prototype (such as hasOwnProperty, toString or valueOf). Possible mitigations might be: freezing the object prototype, using an object without prototypes (via Object.create(null) ), blocking modifications of attributes that resolve to object prototype, using Map instead of object.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Detected string concatenation with a non-literal variable in a node-postgres JS SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `client.query('SELECT \$1 from table', [userinput])`

Inefficient Regular Expression Complexity

RegExp() called with a `\$ARG` function argument, this might allow an attacker to cause a Regular Expression Denial-of-Service (ReDoS) within your application as RegExP blocks the main thread. For this reason, it is recommended to use hardcoded regexes instead. If your regex is run on user-controlled input, consider performing input validation or use a regex checking/sanitization library such as [https://www.npmjs.com/package/recheck](https://www.npmjs.com/package/recheck) to verify that the regex does not appear vulnerable to ReDoS.

Express HTTP route $ROUTE will handle $METHOD requests

Express HTTP route $ROUTE will handle $METHOD requests

Improper Neutralization of Special Elements Used in a Template Engine

User data from `\$REQ` is being compiled into the template, which can lead to a Server Side Template Injection (SSTI) vulnerability.

It looks like no matter how $CONDITION is evaluated, this expression returns $ANS

It looks like no matter how $CONDITION is evaluated, this expression returns $ANS. This is probably a copy-paste error.

Copying a prop into state in React – this is bad practice as all updates to it are ignored

Copying a prop into state in React – this is bad practice as all updates to it are ignored. Instead, read props directly in your component and avoid copying props into state.

Legacy component lifecycle was detected - $METHOD.

Legacy component lifecycle was detected - $METHOD.

By declaring a styled component inside the render method of a react component, you are dynamically creating a new component on every render

By declaring a styled component inside the render method of a react component, you are dynamically creating a new component on every render. This means that React will have to discard and re-calculate that part of the DOM subtree on each subsequent render, instead of just calculating the difference of what changed between them. This leads to performance bottlenecks and unpredictable behavior.

findDOMNode is an escape hatch used to access the underlying DOM node

findDOMNode is an escape hatch used to access the underlying DOM node. In most cases, use of this escape hatch is discouraged because it pierces the component abstraction.

Use of Password Hash With Insufficient Computational Effort

Prefer Argon2id where possible. Per RFC9016, section 4 IETF recommends selecting Argon2id unless you can guarantee an adversary has no direct access to the computing environment.

User Interface (UI) Misrepresentation of Critical Information

By letting user input control `X-Frame-Options` header, there is a risk that software does not properly verify whether or not a browser should be allowed to render a page in an `iframe`.

JavaScript template string

This looks like a JavaScript template string. Are you missing a ‘$’ in front of ‘{…}’?

Assignment is useless

`\$X` is assigned twice; the first assignment is useless

JSON stringify does not produce a stable key ordering, and should not be relied on for producing object keys

JSON stringify does not produce a stable key ordering, and should not be relied on for producing object keys. Consider using json-stable-stringify instead.

The string method replaceAll is not supported in all versions of javascript, and is not supported by older browser versions

The string method replaceAll is not supported in all versions of javascript, and is not supported by older browser versions. Consider using replace() with a regex as the first argument instead like mystring.replace(/bad/g, “good”) instead of mystring.replaceAll(“bad”, “good”) ([https://discourse.threejs.org/t/replaceall-is-not-a-function/14585](https://discourse.threejs.org/t/replaceall-is-not-a-function/14585) )

Useless comparison operation

Detected a useless comparison operation `\$X == \$X` or `\$X != \$X`. This operation is always true. If testing for floating point NaN, use `math.isnan`, or `cmath.isnan` if the number is complex.

`undefined` is not a reserved keyword in Javascript, so this is “valid” Javascript but highly confusing and likely to result in bugs.

`undefined` is not a reserved keyword in Javascript, so this is “valid” Javascript but highly confusing and likely to result in bugs.

Lazy loading can complicate code bundling if care is not taken, also `require`s are run synchronously by Node.js

Lazy loading can complicate code bundling if care is not taken, also `require`s are run synchronously by Node.js. If they are called from within a function, it may block other requests from being handled at a more critical time. The best practice is to `require` modules at the beginning of each file, before and outside of any functions.

Creating and using a large number of zlib objects simultaneously can cause significant memory fragmentation

Creating and using a large number of zlib objects simultaneously can cause significant memory fragmentation. It is strongly recommended that the results of compression operations be cached or made synchronous to avoid duplication of effort.

Found alert() call

found alert() call; should this be in production code?

Found debugger call

found debugger call; should this be in production code?

Found conform() call

found confirm() call; should this be in production code?

Found prompt() call

found prompt() call; should this be in production code?

Permissive List of Allowed Inputs

Unescaped ‘.’ character in CORS domain regex $CORS: $PATTERN

Permissive List of Allowed Inputs

Access-Control-Allow-Origin response header is set to “\*”. This will disable CORS Same Origin Policy restrictions.

Insecure Storage of Sensitive Information

Storing JWT tokens in localStorage known to be a bad practice, consider moving your tokens from localStorage to a HTTP cookie.

Insecure Storage of Sensitive Information

Property decoded from JWT token without verifying and cannot be trustworthy.

JSX element not internationalized: ‘$MESSAGE’

JSX element not internationalized: ‘$MESSAGE’. You should support different languages in your website or app with internationalization. Instead, use packages such as `i18next` in order to internationalize your elements.

JSX Component label not internationalized: ‘$MESSAGE’

JSX Component label not internationalized: ‘$MESSAGE’

Translation key ‘$KEY’ should match format ‘MODULE.FEATURE.\*’

Translation key ‘$KEY’ should match format ‘MODULE.FEATURE.\*’

React useSelect() label is not internationalized - ‘$LABEL’

React useSelect() label is not internationalized - ‘$LABEL’. You should support different langauges in your website or app with internationalization. Instead, use packages such as `i18next` to internationalize your elements.

React MUI enqueueSnackbar() title is not internationalized: ‘$MESSAGE’

React MUI enqueueSnackbar() title is not internationalized: ‘$MESSAGE’

Exposure of Information Through Directory Listing

Directory listing/indexing is enabled, which may lead to disclosure of sensitive directories and files. It is recommended to disable directory listing unless it is a public resource. If you need directory listing, ensure that sensitive files are inaccessible when querying the resource.

## Python [Copied!](#python "Copy link to this section")

Policy Name

Description

Server-Side Request Forgery (SSRF)

User data flows into the host portion of this manually-constructed URL. This could allow an attacker to send data to their own server, potentially exposing sensitive data such as cookies or authorization information sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. (This is called server-side request forgery, or SSRF.) Do not allow arbitrary hosts. Instead, create an allowlist for approved hosts hardcode the correct host.

Server-Side Request Forgery (SSRF)

Data from request object is passed to a new server-side request. This could lead to a server-side request forgery (SSRF). To mitigate, ensure that schemes and hosts are validated against an allowlist, do not forward the response to the user, and ensure proper authentication and transport-layer security in the proxied request.

Server-Side Request Forgery (SSRF)

User data flows into the host portion of this manually-constructed URL. This could allow an attacker to send data to their own server, potentially exposing sensitive data such as cookies or authorization information sent with this request. They could also probe internal servers or other resources that the server runnig this code can access. (This is called server-side request forgery, or SSRF.) Do not allow arbitrary hosts. Instead, create an allowlist for approved hosts hardcode the correct host.

Server-Side Request Forgery (SSRF)

Data from request object is passed to a new server-side request. This could lead to a server-side request forgery (SSRF). To mitigate, ensure that schemes and hosts are validated against an allowlist, do not forward the response to the user, and ensure proper authentication and transport-layer security in the proxied request. See [https://owasp.org/www-community/attacks/Server\_Side\_Request\_Forgery](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery) to learn more about SSRF vulnerabilities.

Server-Side Request Forgery (SSRF)

Data from request object is passed to a new server-side request. This could lead to a server-side request forgery (SSRF), which could result in attackers gaining access to private organization data. To mitigate, ensure that schemes and hosts are validated against an allowlist, do not forward the response to the user, and ensure proper authentication and transport-layer security in the proxied request.

Inadequate Encryption Strength

The application is generating an RSA key that is less than the recommended 2048 bits.The National Institute of Standards and Technology (NIST) deprecated signing DigitalCertificates that contained RSA Public Keys of 1024 bits in December 2010. While1024-bit RSA keys have not been factored yet, advances in compute may make it possiblein the near future.Consider upgrading to the newer asymmetric algorithm such as `X25519` which handlesthe complexities of generating key pairs and choosing correct key sizes for you:from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PrivateKey# Generate a private key for use in the exchange.private\_key = X25519PrivateKey.generate()# Work with private key/exchange with a peer’s# public key to created a shared and derived key# …Otherwise use a key size greater than 2048 when generating RSA keys:from cryptography.hazmat.primitives.asymmetric import rsa# Generate a private key of 4096 bitsprivate\_key = rsa.generate\_private\_key( # do not change the exponent value from 65537 public\_exponent=65537, key\_size=4096,)# Work with the private key to sign/encrypt data# …For more information on using the cryptography module see:- [https://cryptography.io/en/latest](https://cryptography.io/en/latest)

| Inadequate Encryption Strength | The application was found using an insufficient curve size for the EllipticalCryptography (EC) asymmetric algorithm. NIST recommends using a key size of224 or greater.To remediate this issue, replace the current key size with `ec.SECP384R1`,Example using `ec.SECP384R1`:from cryptography.hazmat.primitives.asymmetric import ec# Generate an EC private key using SECP384R1private\_key = ec.generate\_private\_key( ec.SECP384R1())# Work with/sign data using the key# …For more information on the cryptography module’s EC section see:- [https://cryptography.io/en/latest/hazmat/primitives/asymmetric/ec/](https://cryptography.io/en/latest/hazmat/primitives/asymmetric/ec/) |

| Inadequate Encryption Strength | The application was found calling `ssl.wrap_socket` without a TLS protocol version specified.Additionally, `ssl.wrap_socket` has been deprecated since Python 3.7. It is stronglyrecommendedthat newer applications use TLS 1.2 or 1.3 and `SSLContext.wrap_socket`.To remediate this issue, create a new TLS context and pass in `ssl.PROTOCOL_TLS_CLIENT`for clients or `ssl.PROTOCOL_TLS_SERVER` for servers to the `ssl.SSLContext(...)` `protocol=`argument. When converting the socket to a TLS socket, use the new `SSLContext.wrap_socket`method instead.Example creating a TLS 1.3 client socket connection by using a newer version of Python(3.11.4) andthe SSL module:import sslimport socket# Create our initial socketwith socket.socket(socket.AF\_INET, socket.SOCK\_STREAM) as sock: # Connect the socket sock.connect((‘[www.example.org](https://www.example.org) ’, 443)) # Create a new SSLContext with protocol set to ssl.PROTOCOL\_TLS\_CLIENT # This will auto-select the highest grade TLS protocol version (1.3) context = ssl.SSLContext(protocol=ssl.PROTOCOL\_TLS\_CLIENT) # Load our a certificates for server certificate authentication context.load\_verify\_locations(‘cert.pem’) # Create our TLS socket, and validate the server hostname matches with context.wrap\_socket(sock, server\_hostname=“[www.example.org](https://www.example.org) ”) as tls\_sock: # Send some bytes over the socket (HTTP request in this case)\\ data = bytes(‘GET / HTTP/1.1\\r\\nHost: example.org\\r\\n\\r\\n’, ‘utf-8’) sent\_bytes = tls\_sock.send(data) # Validate number of sent bytes # … # Read the response resp = tls\_sock.recv() # Work with the response # …For more information on the ssl module see:- [https://docs.python.org/3/library/ssl.html](https://docs.python.org/3/library/ssl.html) |

| Inadequate Encryption Strength | The application was found calling an SSL module with SSL or TLS protocols that have knowndeficiencies.It is strongly recommended that newer applications use TLS 1.2 or 1.3 and`SSLContext.wrap_socket`.If using the `pyOpenSSL` module, please note that it has been deprecated and the PythonCryptographic Authoritystrongly suggests moving to use the [pyca/cryptography](https://github.com/pyca/cryptography) module instead.To remediate this issue for the `ssl` module, create a new TLS context and pass in`ssl.PROTOCOL_TLS_CLIENT` for clients or `ssl.PROTOCOL_TLS_SERVER` for servers to the`ssl.SSLContext(...)` `protocol=`argument. When converting the socket to a TLS socket, use the new `SSLContext.wrap_socket`method instead.Example creating a TLS 1.3 client socket connection by using a newer version of Python(3.11.4) andthe SSL module:import sslimport socket# Create our initial socketwith socket.socket(socket.AF\_INET, socket.SOCK\_STREAM) as sock: # Connect the socket sock.connect((‘[www.example.org](https://www.example.org) ’, 443)) # Create a new SSLContext with protocol set to ssl.PROTOCOL\_TLS\_CLIENT # This will auto-select the highest grade TLS protocol version (1.3) context = ssl.SSLContext(protocol=ssl.PROTOCOL\_TLS\_CLIENT) # Load our a certificates for server certificate authentication context.load\_verify\_locations(‘cert.pem’) # Create our TLS socket, and validate the server hostname matches with context.wrap\_socket(sock, server\_hostname=“[www.example.org](https://www.example.org) ”) as tls\_sock: # Send some bytes over the socket (HTTP request in this case)\\ data = bytes(‘GET / HTTP/1.1\\r\\nHost: example.org\\r\\n\\r\\n’, ‘utf-8’) sent\_bytes = tls\_sock.send(data) # Validate number of sent bytes # … # Read the response resp = tls\_sock.recv() # Work with the response # …For more information on the ssl module see:- [https://docs.python.org/3/library/ssl.htmlFor](https://docs.python.org/3/library/ssl.htmlFor) more information on pyca/cryptography and openssl see:- [https://cryptography.io/en/latest/openssl/](https://cryptography.io/en/latest/openssl/) |

| Inadequate Encryption Strength | Detected an insufficient key size for RSA. NIST recommends a key size of 2048 or higher. | | Inadequate Encryption Strength | Detected an insufficient key size for DSA. NIST recommends a key size of 2048 or higher. | | Inadequate Encryption Strength | Detected an insufficient key size for RSA. NIST recommends a key size of 2048 or higher. | | Inadequate Encryption Strength | Detected an insufficient curve size for EC. NIST recommends a key size of 224 or higher. For example, use ’ec.SECP256R1’. | | Inadequate Encryption Strength | Detected an insufficient key size for DSA. NIST recommends a key size of 2048 or higher. | | Inadequate Encryption Strength | An insecure SSL version was detected. TLS versions 1.0, 1.1, and all SSL versions are considered weak encryption and are deprecated. Use ‘ssl.PROTOCOL\_TLSv1\_2’ or higher. | | Inadequate Encryption Strength | The ‘ssl’ module disables insecure cipher suites by default. Therefore, use of ‘set\_ciphers()’ should only be used when you have very specialized requirements. Otherwise, you risk lowering the security of the SSL channel. | | Use of a Broken or Risky Cryptographic Algorithm | Detected use of the ’none’ algorithm in a JWT token.The ’none’ algorithm assumes the integrity of the token has alreadybeen verified. This would allow a malicious actor to forge a JWT tokenthat will automatically be verified. Do not explicitly use the ’none’algorithm. Instead, use an algorithm such as ‘HS256’. | | Use of a Broken or Risky Cryptographic Algorithm | DES, TripleDES, RC2 and RC4 are all considered broken or insecure cryptographic algorithms.Newer algorithms apply message integrity to validate ciphertext has not been tamperedwith. Consider using `ChaCha20Poly1305` instead as it is easier and faster than thealternatives such as `AES-256-GCM`.For older applications that don’t have support for `ChaCha20Poly1305`,`AES-256-GCM` is recommended, however it has many drawbacks:- Slower than `ChaCha20Poly1305`.- Catastrophic failure if nonce values are reused.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt”# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt”# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD2, MD5and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.It is strongly recommended that a standard digest algorithm be chosen instead as implementinga custom algorithm is prone to error.Example of creating a SHA-384 hash using the `cryptography` package:from cryptography.hazmat.primitives import hashes# Create a SHA384 digestdigest = hashes.Hash(hashes.SHA384())# Update the digest with some initial datadigest.update(b"some data to hash”)# Add more data to the digestdigest.update(b"some more data”)# Finalize the digest as bytesresult = digest.finalize()For more information on secure password storage see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.htmlFor](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.htmlFor) more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD2, MD4, MD5 and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example of creating a SHA-384 hash using the `cryptography` package:from cryptography.hazmat.primitives import hashes# Create a SHA384 digestdigest = hashes.Hash(hashes.SHA384())# Update the digest with some initial datadigest.update(b"some data to hash”)# Add more data to the digestdigest.update(b"some more data”)# Finalize the digest as bytesresult = digest.finalize()For more information on secure password storage see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.htmlFor](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.htmlFor) more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The Blowfish encryption algorithm was meant as a drop-in replacement for DES and was created in1993. Smaller key sizes may make the ciphertext vulnerable to [birthdayattacks](https://en.wikipedia.org/wiki/Birthday_attack) . While no known attacks againstBlowfishexist, it should never be used to encrypt files over 4GB in size. If possible considerusing ChaCha20Poly1305 or AES-GCM instead of Blowfish.For older applications that don’t have support for `ChaCha20Poly1305`, `AES-256-GCM` isrecommended, however it has many drawbacks: - Slower than `ChaCha20Poly1305`. - Catastrophic failure if nonce values are reused.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt”# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt”# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The IDEA encryption algorithm was meant as a drop-in replacement for DES and was created in1991. A number of [vulnerabilities andexploits](https://en.wikipedia.org/wiki/International_Data_Encryption_Algorithm#Security) havebeen identified to work against IDEA andit is no longer recommended. If possible considerusing ChaCha20Poly1305 or AES-GCM instead of Blowfish.For older applications that don’t have support for `ChaCha20Poly1305`, `AES-256-GCM` isrecommended, however it has many drawbacks: - Slower than `ChaCha20Poly1305`. - Catastrophic failure if nonce values are reused.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt”# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt”# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using the `xor` algorithm, which can be trivially decoded.Newer algorithms apply message integrity to validate ciphertext has not been tamperedwith. Consider using `ChaCha20Poly1305` instead as it is easier and faster than thealternatives such as `AES-256-GCM`.For older applications that don’t have support for `ChaCha20Poly1305`,`AES-256-GCM` is recommended, however it has many drawbacks:- Slower than `ChaCha20Poly1305`.- Catastrophic failure if nonce values are reused.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt”# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt”# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD5and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.It is strongly recommended that a standard digest algorithm be chosen instead as implementinga custom algorithm is prone to errors.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example of creating a SHA-384 hash using the `cryptography` package:from cryptography.hazmat.primitives import hashes# Create a SHA384 digestdigest = hashes.Hash(hashes.SHA384())# Update the digest with some initial datadigest.update(b"some data to hash”)# Add more data to the digestdigest.update(b"some more data”)# Finalize the digest as bytesresult = digest.finalize()For more information on secure password storage see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.htmlFor](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.htmlFor) more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD5and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.It is strongly recommended that a standard digest algorithm be chosen instead as implementinga custom algorithm is prone to errors.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example of creating a SHA-384 hash using the `cryptography` package:from cryptography.hazmat.primitives import hashes# Create a SHA384 digestdigest = hashes.Hash(hashes.SHA384())# Update the digest with some initial datadigest.update(b"some data to hash”)# Add more data to the digestdigest.update(b"some more data”)# Finalize the digest as bytesresult = digest.finalize()For more information on secure password storage see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.htmlFor](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.htmlFor) more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD2, MD4,MD5 and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.It is strongly recommended that a standard digest algorithm be chosen instead as implementinga custom algorithm is prone to errors.Example using `hashlib.sha384()` to create a SHA384 hash:import hashlib# Create a SHA384 digestdigest = hashlib.sha384()# Update the digest with some initial datadigest.update(b"some data to hash”)# Add more data to the digestdigest.update(b"some more data”)# Finalize the digest as bytesdigest.digest() |

| Use of a Broken or Risky Cryptographic Algorithm | The Blowfish encryption algorithm was meant as a drop-in replacement for DES and was created in1993. Smaller key sizes may make the ciphertext vulnerable to [birthdayattacks](https://en.wikipedia.org/wiki/Birthday_attack) . While no known attacks againstBlowfishexist, it should never be used to encrypt files over 4GB in size. If possible considerusing ChaCha20Poly1305 or AES-GCM instead of Blowfish.For older applications that don’t have support for `ChaCha20Poly1305`, `AES-256-GCM` isrecommended, however it has many drawbacks: - Slower than `ChaCha20Poly1305`. - Catastrophic failure if nonce values are reused.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | DES, TripleDES, RC2 and RC4 are all considered broken or insecure cryptographic algorithms.Newer algorithms apply message integrity to validate ciphertext has not been tamperedwith. Consider using `ChaCha20Poly1305` instead as it is easier and faster than thealternatives such as `AES-256-GCM`.For older applications that don’t have support for `ChaCha20Poly1305`,`AES-256-GCM` is recommended, however it has many drawbacks:- Slower than `ChaCha20Poly1305`.- Catastrophic failure if nonce values are reused.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | Cryptographic algorithms provide many different modes of operation, only some of which providemessage integrity. Without message integrity it could be possible for an adversary to attemptto tamper with the ciphertext which could lead to compromising the encryption key. Neweralgorithmsapply message integrity to validate ciphertext has not been tampered with.Instead of using an algorithm that requires configuring a cipher mode, an algorithmthat has built-in message integrity should be used. Consider using `ChaCha20Poly1305` or`AES-256-GCM` instead.For older applications that don’t have support for `ChaCha20Poly1305`, `AES-256-GCM` isrecommended, however it has many drawbacks: - Slower than `ChaCha20Poly1305`. - Catastrophic failure if nonce values are reused.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD2, MD5and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example of creating a SHA-384 hash using the `cryptography` package:from cryptography.hazmat.primitives import hashes# Create a SHA384 digestdigest = hashes.Hash(hashes.SHA384())# Update the digest with some initial datadigest.update(b"some data to hash")# Add more data to the digestdigest.update(b"some more data")# Finalize the digest as bytesresult = digest.finalize()For more information on secure password storage see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.htmlFor](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.htmlFor) more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | DES, TripleDES, RC2 and RC4 are all considered broken or insecure cryptographic algorithms.Newer algorithms apply message integrity to validate ciphertext has not been tamperedwith. Consider using `ChaCha20Poly1305` instead as it is easier and faster than thealternatives such as `AES-256-GCM`.For older applications that don’t have support for `ChaCha20Poly1305`,`AES-256-GCM` is recommended, however it has many drawbacks:- Slower than `ChaCha20Poly1305`.- Catastrophic failure if nonce values are reused.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD2, MD4, MD5 and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example of creating a SHA-384 hash using the `cryptography` package:from cryptography.hazmat.primitives import hashes# Create a SHA384 digestdigest = hashes.Hash(hashes.SHA384())# Update the digest with some initial datadigest.update(b"some data to hash")# Add more data to the digestdigest.update(b"some more data")# Finalize the digest as bytesresult = digest.finalize()For more information on secure password storage see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.htmlFor](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.htmlFor) more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD2, MD5and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.It is strongly recommended that a standard digest algorithm be chosen instead as implementinga custom algorithm is prone to errors.Example of creating a SHA-384 hash using the `cryptography` package:from cryptography.hazmat.primitives import hashes# Create a SHA384 digestdigest = hashes.Hash(hashes.SHA384())# Update the digest with some initial datadigest.update(b"some data to hash")# Add more data to the digestdigest.update(b"some more data")# Finalize the digest as bytesresult = digest.finalize()For more information on secure password storage see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.htmlFor](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.htmlFor) more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | The application was found using an insecure or risky digest or signature algorithm. MD2, MD4, MD5 and SHA1 hash algorithms have been found to be vulnerable to producing collisions.This meansthat two different values, when hashed, can lead to the same hash value. If the application istryingto use these hash methods for storing passwords, then it is recommended to switch to apassword hashingalgorithm such as Argon2id or PBKDF2.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example of creating a SHA-384 hash using the `cryptography` package:from cryptography.hazmat.primitives import hashes# Create a SHA384 digestdigest = hashes.Hash(hashes.SHA384())# Update the digest with some initial datadigest.update(b"some data to hash")# Add more data to the digestdigest.update(b"some more data")# Finalize the digest as bytesresult = digest.finalize()For more information on secure password storage see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Password\_Storage\_Cheat\_Sheet.htmlFor](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.htmlFor) more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | DES, TripleDES, RC2 and RC4 are all considered broken or insecure cryptographic algorithms.Newer algorithms apply message integrity to validate ciphertext has not been tamperedwith. Consider using `ChaCha20Poly1305` instead as it is easier and faster than thealternatives such as `AES-256-GCM`.For older applications that don’t have support for `ChaCha20Poly1305`,`AES-256-GCM` is recommended, however it has many drawbacks:- Slower than `ChaCha20Poly1305`.- Catastrophic failure if nonce values are reused.Note that the `Crypto` and `Cryptodome` Python packages are no longer recommended fornew applications, instead consider using the [cryptography](https://cryptography.io/) package.Example using `ChaCha20Poly1305`:import os# Import ChaCha20Poly1305 from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = ChaCha20Poly1305.generate\_key()# Create a new ChaCha20Poly1305 instance with our secure keychacha = ChaCha20Poly1305(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = chacha.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textchacha.decrypt(nonce, cipher\_text, aad)Example using `AESGCM`:import os# Import AESGCM from cryptographyfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM# Our plaintext to encryptplain\_text = b"Secret text to encrypt"# We do not require authenticated but unencrypted data, so set to Noneaad = None# Generate a secure keykey = AESGCM.generate\_key(bit\_length=128)# Create a new AESGCM instance with our secure keyaesgcm = AESGCM(key)# Note: nonce values _must_ be regenerated every time they are used.nonce = os.urandom(12)# Encrypt our plaintextcipher\_text = aesgcm.encrypt(nonce, plain\_text, aad)# Decrypt the plain text using the nonce and cipher\_textaesgcm.decrypt(nonce, cipher\_text, aad)For more information on the cryptography module see:- [https://cryptography.io/en/latest/](https://cryptography.io/en/latest/) |

| Use of a Broken or Risky Cryptographic Algorithm | Detected MD2 hash algorithm which is considered insecure. This algorithmhas many known vulnerabilities and has been deprecated. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected MD4 hash algorithm which is considered insecure. This algorithmhas many known vulnerabilities and has been deprecated. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected MD5 hash algorithm which is considered insecure. MD5 is notcollision resistant and is therefore not suitable as a cryptographicsignature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected SHA1 hash algorithm which is considered insecure. SHA1 is notcollision resistant and is therefore not suitable as a cryptographicsignature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Weak or insecure ‘hashlib’ module usage | | Use of a Broken or Risky Cryptographic Algorithm | Detected use of the ’none’ algorithm in a JWT token. The ’none’ algorithm assumes the integrity of the token has already been verified. This would allow a malicious actor to forge a JWT token that will automatically be verified. Do not explicitly use the ’none’ algorithm. Instead, use an algorithm such as ‘HS256’. | | Use of a Broken or Risky Cryptographic Algorithm | An encryption mode of operation is being used without proper message authentication. This can potentially result in the encrypted content to be decrypted by an attacker. Consider instead use an AEAD mode of operation like GCM. | | Use of a Broken or Risky Cryptographic Algorithm | Detected MD4 hash algorithm which is considered insecure. MD4 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected RC2 cipher algorithm which is considered insecure. This algorithm is not cryptographically secure and can be reversed easily. Use AES instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected Blowfish cipher algorithm which is considered insecure. This algorithm is not cryptographically secure and can be reversed easily. Use AES instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected MD2 hash algorithm which is considered insecure. MD2 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected XOR cipher algorithm which is considered insecure. This algorithm is not cryptographically secure and can be reversed easily. Use AES instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected ARC4 cipher algorithm which is considered insecure. This algorithm is not cryptographically secure and can be reversed easily. Use AES instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected SHA1 hash algorithm which is considered insecure. SHA1 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected DES cipher algorithm which is considered insecure. This algorithm is not cryptographically secure and can be reversed easily. Use AES instead. | | Use of a Broken or Risky Cryptographic Algorithm | An encryption mode of operation is being used without proper message authentication. This can potentially result in the encrypted content to be decrypted by an attacker. Consider instead use an AEAD mode of operation like GCM. | | Use of a Broken or Risky Cryptographic Algorithm | Detected SHA1 hash algorithm which is considered insecure. SHA1 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected ECB cipher mode which is considered insecure. The algorithm can potentially leak information about the plaintext. Use CBC mode instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected Blowfish cipher algorithm which is considered insecure. The algorithm is considered weak and has been deprecated. Use AES instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected ARC4 cipher algorithm which is considered insecure. The algorithm is considered weak and has been deprecated. Use AES instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected IDEA cipher algorithm which is considered insecure. The algorithm is considered weak and has been deprecated. Use AES instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected SHA1 hash algorithm which is considered insecure. SHA1 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead. | | Use of a Broken or Risky Cryptographic Algorithm | Detected use of an insecure MD4 or MD5 hash function. These functions have known vulnerabilities and are considered deprecated. Consider using ‘SHA256’ or a similar function instead. | | Use of a Broken or Risky Cryptographic Algorithm | It looks like MD5 is used as a password hash. MD5 is not considered a secure password hash because it can be cracked by an attacker in a short amount of time. Use a suitable password hashing function such as scrypt. You can use `hashlib.scrypt`. | | Use of a Broken or Risky Cryptographic Algorithm | Potential empty AES encryption key. Using an empty key in AES encryption can result in weak encryption and may allow attackers to easily decrypt sensitive data. Ensure that a strong, non-empty key is used for AES encryption. | | Improper Certificate Validation | The application was found creating a SSL context using the `_create_unverified_context`.This effectively disables the validation of server certificates.This allows for an adversary who is in between the application and the target host to interceptpotentially sensitive information or transmit malicious data.To remediate this issue remove the call to `_create_unverified_context` and either create adefaultcontext using `ssl.create_default_context` or create a context with TLS 1.3.Example creating a TLS 1.3 client socket connection by using a newer version of Python(3.11.4) andthe SSL module:import sslimport socket# Create our initial socketwith socket.socket(socket.AF\_INET, socket.SOCK\_STREAM) as sock: # Connect the socket sock.connect((‘[www.example.org](https://www.example.org) ’, 443)) # Create a new SSLContext with protocol set to ssl.PROTOCOL\_TLS\_CLIENT # This will auto-select the highest grade TLS protocol version (1.3) context = ssl.SSLContext(protocol=ssl.PROTOCOL\_TLS\_CLIENT) # Load our a certificates for server certificate authentication context.load\_verify\_locations(‘cert.pem’) # Create our TLS socket, and validate the server hostname matches with context.wrap\_socket(sock, server\_hostname=“[www.example.org](https://www.example.org) ”) as tls\_sock: # Send some bytes over the socket (HTTP request in this case)\\ data = bytes(‘GET / HTTP/1.1\\r\\nHost: example.org\\r\\n\\r\\n’, ‘utf-8’) sent\_bytes = tls\_sock.send(data) # Validate number of sent bytes # … # Read the response resp = tls\_sock.recv() # Work with the response # …Unverified SSL context detected. This will permit insecure connections without `verifyingSSL`certificates. Use `ssl.create_default_context()` instead. |

| Improper Certificate Validation | The application was found using the `requests` module without configuring a timeout value forconnections. The `verify=False` argument has been set, which effectively disables thevalidationof server certificates.This allows for an adversary who is in between the application and the target host to interceptpotentially sensitive information or transmit malicious data.To remediate this issue either remove the `verify=False` argument, or set `verify=True`to each`requests` call.Example verifying server certificates for an HTTP GET request:# Issue a GET request to [https://example.com](https://example.com) with a timeout of 10 seconds and verify the# server certificate explicitly.response = requests.get(‘[https://example.com](https://example.com) ’, timeout=10, verify=True)# Work with the response object# …For more information on using the requests module see:- [https://requests.readthedocs.io/en/latest/api/](https://requests.readthedocs.io/en/latest/api/) |

| Improper Certificate Validation | The HTTPSConnection API has changed frequently with minor releases of Python.Ensure you areusing the API for your version of Python securely. For example, Python 3 versions prior to3.4.3will not verify SSL certificates by default. | | Improper Certificate Validation | Certificate verification has been explicitly disabled. This permits insecure connections to insecure servers. Re-enable certification validation. | | Improper Certificate Validation | Unverified SSL context detected. This will permit insecure connections without verifying SSL certificates. Use ‘ssl.create\_default\_context’ instead. | | Improper Certificate Validation | The HTTPSConnection API has changed frequently with minor releases of Python. Ensure you are using the API for your version of Python securely. For example, Python 3 versions prior to 3.4.3 will not verify SSL certificates by default. See [https://docs.python.org/3/library/http.client.html#http.client.HTTPSConnection](https://docs.python.org/3/library/http.client.html#http.client.HTTPSConnection) for more information. | | Improper Certificate Validation | certificate verification explicitly disabled, insecure connections possible | | Improper Input Validation | The `flask.request.host` is used to construct an HTTP request. This can lead to host header injection issues. Vulnerabilities that generally occur due to this issue are authentication bypasses, password reset issues, Server-Side-Request-Forgery (SSRF), and many more. It is recommended to validate the URL before passing it to a request library, or using application logic such as authentication or password resets. | | Incorrect Type Conversion or Cast | Found user input going directly into typecast for bool(), float(), or complex(). This allows an attacker to inject Python’s not-a-number (NaN) into the typecast. This results in undefind behavior, particularly when doing comparisons. Either cast to a different type, or add a guard checking for all capitalizations of the string ’nan’. | | Incorrect Type Conversion or Cast | Found user input going directly into typecast for bool(), float(), or complex(). This allows an attacker to inject Python’s not-a-number (NaN) into the typecast. This results in undefind behavior, particularly when doing comparisons. Either cast to a different type, or add a guard checking for all capitalizations of the string ’nan’. | | Incorrect Type Conversion or Cast | Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as SQLAlchemy which will protect your queries. | | Use of Externally-Controlled Format String | Method $METHOD in API controller $CLASS provides user arg $ARG to requests method $REQMETHOD | | Improper Control of Generation of Code (‘Code Injection’) | The application was found calling the `logging.config.listen`` function, which provides theability to listen forexternal configuration files over a socket server. This listen socket parses part of theconfiguration and calls`eval`on the supplied configuration file. A local user, or an adversary who is able toexploita Server Side Request Forgery (SSRF) attack to communicate over localhost, would be able toexecute arbitrarycode by passing in a logging config that contains python code.To remediate the issue, remove the call to`logging.config.listen`method.For more information on the listen functionality see:- https://docs.python.org/3/library/logging.config.html#logging.config.listen | | Improper Control of Generation of Code ('Code Injection') | This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters. | | Improper Restriction of XML External Entity Reference | The application was found using the`xml.dom.pulldom`package for processing XML. Python'sdefault XML processors suffer from various XML parsing vulnerabilitiesand care must be taken when handling XML data. Additionally, depending on theversion of Python, more critical vulnerabilities such as eXternal XML Entityinjection maybe exploitable.The`xml.dom.pulldom\` package suffers from the following security risks as of Python 3.7.1:\* Billion laughs / exponential entity expansion - May allow an adversary to cause a Denial of Service (DoS) against the application parsing arbitrary XML.\* Quadratic blowup entity expansion - Similar to above, but requires a larger input to cause the Denial of Service.To remediate the above issues, consider using ([https://pypi.org/project/defusedxml/)library](https://pypi.org/project/defusedxml/%29library) when processing untrusted XML.Example parsing an XML document using defusedxml:from defusedxml.ElementTree import parse# Parse the inventory.xml fileet = parse(‘inventory.xml’)# Get the root elementroot = et.getroot()# Work with the root element# …For more information on the various XML parsers and their vulnerabilities please see:- [https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor](https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor) more information on XML security see OWASP’s guide:- [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#python](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html#python) |

| Improper Restriction of XML External Entity Reference | The application was found using the `xml.sax.expatreader` package for processing XML. Python’sdefault XML processors suffer from various XML parsing vulnerabilitiesand care must be taken when handling XML data. Additionally, depending on theversion of Python, more critical vulnerabilities such as eXternal XML Entityinjection maybe exploitable.The `xml.sax` package suffers from the following security risks as of Python 3.7.1:\* Billion laughs / exponential entity expansion - May allow an adversary to cause a Denial of Service (DoS) against the application parsing arbitrary XML.\* Quadratic blowup entity expansion - Similar to above, but requires a larger input to cause the Denial of Service.To remediate the above issues, consider using ([https://pypi.org/project/defusedxml/)library](https://pypi.org/project/defusedxml/%29library) when processing untrusted XML.Example parsing an XML document using defusedxml:from defusedxml.ElementTree import parse# Parse the inventory.xml fileet = parse(‘inventory.xml’)# Get the root elementroot = et.getroot()# Work with the root element# …For more information on the various XML parsers and their vulnerabilities please see:- [https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor](https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor) more information on XML security see OWASP’s guide:- [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#python](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html#python) |

| Improper Restriction of XML External Entity Reference | The application was found using the `xml.dom.expatbuilder` which calls the `xml.dom.minidom`package for processing XML. Python’s default XML processors suffer from various XML parsingvulnerabilitiesand care must be taken when handling XML data. Additionally, depending on theversion of Python, more critical vulnerabilities such as eXternal XML Entityinjection maybe exploitable.The `xml.dom.minidom` package suffers from the following security risks as of Python 3.7.1:\* Billion laughs / exponential entity expansion - May allow an adversary to cause a Denial of Service (DoS) against the application parsing arbitrary XML.\* Quadratic blowup entity expansion - Similar to above, but requires a larger input to cause the Denial of Service.To remediate the above issues, consider using ([https://pypi.org/project/defusedxml/)library](https://pypi.org/project/defusedxml/%29library) when processing untrusted XML.Example parsing an XML document using defusedxml:from defusedxml.ElementTree import parse# Parse the inventory.xml fileet = parse(‘inventory.xml’)# Get the root elementroot = et.getroot()# Work with the root element# …For more information on the various XML parsers and their vulnerabilities please see:- [https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor](https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor) more information on XML security see OWASP’s guide:- [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#python](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html#python) |

| Improper Restriction of XML External Entity Reference | The application was found using the `xml.etree` package for processing XML.Pythons default xml processors suffer from various XML parsing vulnerabilitiesand care must be taken when handling XML data. Additionally, depending on theversion of Python, more critical vulnerabilities such as eXternal XML Entityinjection maybe exploitable.The `etree` package suffers from the following security risks as of Python 3.7.1:\* Billion laughs / exponential entity expansion - May allow an adversary to cause a Denial of Service (DoS) against the application parsing arbitrary XML.\* Quadratic blowup entity expansion - Similar to above, but requires a larger input to cause the Denial of Service.To remediate the above issues, consider using ([https://pypi.org/project/defusedxml/)library](https://pypi.org/project/defusedxml/%29library) when processing untrusted XML.Example parsing an XML document using defusedxml:from defusedxml.ElementTree import parse# Parse the inventory.xml fileet = parse(‘inventory.xml’)# Get the root elementroot = et.getroot()# Work with the root element# …For more information on the various XML parsers and their vulnerabilities please see:- [https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor](https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor) more information on XML security see OWASP’s guide:- [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#python](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html#python) |

| Improper Restriction of XML External Entity Reference | The application was found using the `lxml.etree` package for processing XML.Python’s default XML processors suffer from various XML parsing vulnerabilitiesand care must be taken when handling XML data. Additionally, depending on theversion of Python, more critical vulnerabilities such as eXternal XML Entityinjection maybe exploitable.The `etree` package suffers from the following security risks as of Python 3.7.1:\* Billion laughs / exponential entity expansion - May allow an adversary to cause a Denial of Service (DoS) against the application parsing arbitrary XML.\* Quadratic blowup entity expansion - Similar to above, but requires a larger input to cause the Denial of Service.To remediate the above issues, consider using ([https://pypi.org/project/defusedxml/)library](https://pypi.org/project/defusedxml/%29library) when processing untrusted XML.Example parsing an XML document using defusedxml:from defusedxml.ElementTree import parse# Parse the inventory.xml fileet = parse(‘inventory.xml’)# Get the root elementroot = et.getroot()# Work with the root element# …For more information on the various XML parsers and their vulnerabilities please see:- [https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor](https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor) more information on XML security see OWASP’s guide:- [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#python](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html#python) |

| Improper Restriction of XML External Entity Reference | The application was found using the `xml.etree` package for processing XML.Pythons default xml processors suffer from various XML parsing vulnerabilitiesand care must be taken when handling XML data. Additionally, depending on theversion of Python, more critical vulnerabilities such as eXternal XML Entityinjection maybe exploitable.The `etree` package suffers from the following security risks as of Python 3.7.1:\* Billion laughs / exponential entity expansion - May allow an adversary to cause a Denial of Service (DoS) against the application parsing arbitrary XML.\* Quadratic blowup entity expansion - Similar to above, but requires a larger input to cause the Denial of Service.To remediate the above issues, consider using ([https://pypi.org/project/defusedxml/)library](https://pypi.org/project/defusedxml/%29library) when processing untrusted XML.Example parsing an XML document using defusedxml:from defusedxml.ElementTree import parse# Parse the inventory.xml fileet = parse(‘inventory.xml’)# Get the root elementroot = et.getroot()# Work with the root element# …For more information on the various XML parsers and their vulnerabilities please see:- [https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor](https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor) more information on XML security see OWASP’s guide:- [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#python](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html#python) |

| Improper Restriction of XML External Entity Reference | The application was found using the `xml.sax` package for processing XML.Python’s default XML processors suffer from various XML parsing vulnerabilitiesand care must be taken when handling XML data. Additionally, depending on theversion of Python, more critical vulnerabilities such as eXternal XML Entityinjection maybe exploitable.The `xml.sax` package suffers from the following security risks as of Python 3.7.1:\* Billion laughs / exponential entity expansion - May allow an adversary to cause a Denial of Service (DoS) against the application parsing arbitrary XML.\* Quadratic blowup entity expansion - Similar to above, but requires a larger input to cause the Denial of Service.To remediate the above issues, consider using ([https://pypi.org/project/defusedxml/)library](https://pypi.org/project/defusedxml/%29library) when processing untrusted XML.Example parsing an XML document using defusedxml:from defusedxml.ElementTree import parse# Parse the inventory.xml fileet = parse(‘inventory.xml’)# Get the root elementroot = et.getroot()# Work with the root element# …For more information on the various XML parsers and their vulnerabilities please see:- [https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor](https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor) more information on XML security see OWASP’s guide:- [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#python](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html#python) |

| Improper Restriction of XML External Entity Reference | The application was found using the `xml.dom.minidom` package for processing XML. Python’sdefault XML processors suffer from various XML parsing vulnerabilitiesand care must be taken when handling XML data. Additionally, depending on theversion of Python, more critical vulnerabilities such as eXternal XML Entityinjection maybe exploitable.The `xml.dom.minidom` package suffers from the following security risks as of Python 3.7.1:\* Billion laughs / exponential entity expansion - May allow an adversary to cause a Denial of Service (DoS) against the application parsing arbitrary XML.\* Quadratic blowup entity expansion - Similar to above, but requires a larger input to cause the Denial of Service.To remediate the above issues, consider using ([https://pypi.org/project/defusedxml/)library](https://pypi.org/project/defusedxml/%29library) when processing untrusted XML.Example parsing an XML document using defusedxml:from defusedxml.ElementTree import parse# Parse the inventory.xml fileet = parse(‘inventory.xml’)# Get the root elementroot = et.getroot()# Work with the root element# …For more information on the various XML parsers and their vulnerabilities please see:- [https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor](https://docs.python.org/3/library/xml.html#xml-vulnerabilitiesFor) more information on XML security see OWASP’s guide:- [https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#python](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html#python) |

| Improper Restriction of XML External Entity Reference | Insecure XML parsing functionality, prefer ‘defusedxml’ | | Improper Restriction of XML External Entity Reference | The Python documentation recommends using `defusedxml` instead of `xml` because the native Python `xml` library is vulnerable to XML External Entity (XXE) attacks. These attacks can leak confidential data and “XML bombs” can cause denial of service. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | The Python ‘zipfile’ extractextractall functions are vulnerable to arbitrary file overwrites | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | The Python ’tarfile’ extractextractall functions are vulnerable to arbitrary file overwrites | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Found request data in a call to ‘open’. Ensure the request data is validated or sanitized, otherwise it could result in path traversal attacks. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Found user-controlled request data being passed into a file open, which is them passed as an argument into the FileResponse. This is dangerous because an attacker could specify an arbitrary file to read, which could result in leaking important data. Be sure to validate or sanitize the user-inputted filename in the request data before using it in FileResponse. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Found request data in a call to ‘open’. Ensure the request data is validated or sanitized, otherwise it could result in path traversal attacks and therefore sensitive data being leaked. To mitigate, consider using os.path.abspath or os.path.realpath or the pathlib library. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Data from request is passed to a file name `\$FILE`. This is a path traversal vulnerability, which can lead to sensitive data being leaked. To mitigate, consider using os.path.abspath or os.path.realpath or the pathlib library. | | Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’) | Data from request is passed to os.path.join() and to open(). This is a path traversal vulnerability, which can lead to sensitive data being leaked. To mitigate, consider using os.path.abspath or os.path.realpath or Path library. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | SQL Injection is a critical vulnerability that can lead to data or system compromise. Bydynamically generating SQL query strings, user input may be able to influence the logic ofthe SQL statement. This could lead to an adversary accessing information they shouldnot have access to, or in some circumstances, being able to execute OS functionality or code.Replace all dynamically generated SQL queries with parameterized queries. In situations wheredynamic queries must be created, never use direct user input, but instead use a map ordictionary of valid values and resolve them using a user supplied key.For example, some database drivers do not allow parameterized queries for `>` or `operators. In these cases, do not use a user supplied` \>`or`usersupply a `gt` or `lt` value. The alphabetical values are then used to look up the `>` and `values to be used in the construction of the dynamic query. The same goes for other querieswherecolumn or table names are required but cannot be parameterized.The` QuerySet.extra`API method will be deprecated as it a source of SQL Injectionvulnerabilities and other problems. This method is especially risky as callerswill need to do their own escaping of any parameters that come from user-suppliedinformation.To remediate this issue, do not use`extra`but use other`QuerySet`methods to achievethe same goals. If for some reason this is not feasible, consider using the`RawSQL `methodand making sure that all arguments, including user-supplied ones, are only used in`params`While not recommended due to [potential SQLInjection](https://docs.djangoproject.com/en/4.2/ref/models/expressions/#raw-sql-expressions),below is an example using` RawSQL`,passing in user-supplied data as a` param`which will escape the input:# If dealing with integer based user input, restrict the values to integers only using the# path configuration: path('/someview/', views.some_view,name='someview'),# views.pydef some_view(request, user_supplied_id): # Never use string interpolation in the`sql`parameter. # Never quote the`%s`string format such as`… where id=’%s’`as this could lead to SQLInjection. # Pass the user supplied data only in the`params\` parameter. for obj in DBObject.objects.all().annotate( val=RawSQL(sql=“select id from some\_secondary\_table where id=%s”,params=\[user\_supplied\_id\])): # Work with the results from the query # …For more information on QuerySet see:- [https://docs.djangoproject.com/en/4.2/ref/models/querysets/#queryset-apiFor](https://docs.djangoproject.com/en/4.2/ref/models/querysets/#queryset-apiFor) more information on SQL Injection see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/SQL\_Injection\_Prevention\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) |

| Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | SQL Injection is a critical vulnerability that can lead to data or system compromise. Bydynamically generating SQL query strings, user input may be able to influence the logic ofthe SQL statement. This could lead to an adversary accessing information they shouldnot have access to, or in some circumstances, being able to execute OS functionality or code.Replace all dynamically generated SQL queries with parameterized queries. In situations wheredynamic queries must be created, never use direct user input, but instead use a map ordictionary of valid values and resolve them using a user supplied key.For example, some database drivers do not allow parameterized queries for `>` or `operators. In these cases, do not use a user supplied` \>`or`usersupply a `gt` or `lt` value. The alphabetical values are then used to look up the `>` and `values to be used in the construction of the dynamic query. The same goes for other querieswherecolumn or table names are required but cannot be parameterized.Example using` PreparedStatement\` queries:import sqlite3# Create a new database (in memory)con = sqlite3.connect(":memory:")# Get a cursor from the connectioncur = con.cursor()# Create a tuple of the value to be used in the parameterized queryparams = (‘user-input’,)# execute the statement, passing in the params for the valuecur.execute(“select name from sqlite\_master where name = ?”, params)# work with the resultresult = cur.fetchall()For more information on SQL Injection see OWASP:https://cheatsheetseries.owasp.org/cheatsheets/SQL\_Injection\_Prevention\_Cheat\_Sheet.html |

| Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | SQL Injections are a critical type of vulnerability that can lead to data or system compromise. By dynamically generating SQL query strings, user input may be able to influence the logic of the SQL statement. This could lead to an adversary accessing information they should not have access to, or in some circumstances, being able to execute OS functionalityor code.Replace all dynamically generated SQL queries with parameterized queries. In situations where dynamic queries must be created, never use direct user input,but instead use a map or dictionary of valid values and resolve them using a user supplied key.For example, some database drivers do not allow parameterized queries for `>` or \`\`>`or`The alphabetical values are then used to look up the `>` and `in the construction of the dynamic query. The same goes for other queries where column or table names are required but cannot be parameterized.Data that is possible user-controlled from a python request is passedto` raw()`function. To remediate this issue, use django's QuerySets, which are built with query parameterization and therefore not vulnerable to sql injection. For example, you could use`Entry.objects.filter(date=2006)`If for some reason this is not feasible, ensure calls including user-supplied data pass it in to the` params`parameter of the`raw()`method.Below is an example using`raw()`, passing in user-supplied data as` params`. This will treat the query as a parameterized query and` params`as strictly data, preventing any possibility of SQL Injection.def test(request): uname = request.GET["username"] res = User.objects.raw('SELECT * FROM myapp_user WHERE username = %s', (uname,))For more information on QuerySet see:- https://docs.djangoproject.com/en/5.0/ref/models/querysets/For more information on SQL Injection see OWASP:- https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html | | Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection') | SQL Injections are a critical type of vulnerability that can lead to data or system compromise. By dynamically generating SQL query strings, user input may be able to influence the logic of the SQL statement. This could lead to an adversary accessing information they should not have access to, or insome circumstances, being able to execute OS functionality or code.Replace all dynamically generated SQL queries with parameterized queries. In situations where dynamic queries must be created, never use direct user input, but instead use a map or dictionary of valid values and resolve them using a user supplied key.For example, some database drivers do not allow parameterized queries for`\>`or`In these cases, do not use a user supplied `>` or `value. The alphabetical values are then used to look up the` \>`and`construction of the dynamic query. The same goes for other queries where column or table names are required but cannot be parameterized.To remediate this issue, do not use `raw` or `RawSQL` but use other `QuerySet` methods to achieve the samegoals. If for some reason this is not feasible, ensure calls including user-supplied data pass it in to the `params` parameter of the `RawSQL` method.While not recommended due to [potential SQL Injection](https://docs.djangoproject.com/en/5.0/ref/models/expressions/#raw-sql-expressions) , below is an example using `RawSQL`.Passing in user-supplied data as a `param` which will escape the input:# If dealing with integer based user input, restrict the values to integers only using the# path configuration: path(’/someview/’, views.some\_view, name=‘someview’),# views.pydef some\_view(request, user\_supplied\_id): # Never use string interpolation in the `sql` parameter. # Never quote the `%s` string format such as `... where id='%s'` as this could lead to SQL Injection. # Pass the user supplied data only in the `params` parameter. for obj in DBObject.objects.all().annotate( val=RawSQL(sql=“select id from some\_secondary\_table where id=%s”, params=\[user\_supplied\_id\])): # Work with the results from the query # …For more information on QuerySets see:- [https://docs.djangoproject.com/en/4.2/ref/models/querysets/#queryset-apiFor](https://docs.djangoproject.com/en/4.2/ref/models/querysets/#queryset-apiFor) more information on SQL Injection see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/SQL\_Injection\_Prevention\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) |

| Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | SQL Injection is a critical vulnerability that can lead to data or system compromise. Bydynamically generating SQL query strings, user input may be able to influence the logic ofthe SQL statement. This could lead to an adversary accessing information they shouldnot have access to, or in some circumstances, being able to execute OS functionality or code.Replace all dynamically generated SQL queries with parameterized queries. In situations wheredynamic queries must be created, never use direct user input, but instead use a map ordictionary of valid values and resolve them using a user supplied key.For example, some database drivers do not allow parameterized queries for `>` or `operators. In these cases, do not use a user supplied` \>`or`usersupply a `gt` or `lt` value. The alphabetical values are then used to look up the `>` and `values to be used in the construction of the dynamic query. The same goes for other querieswherecolumn or table names are required but cannot be parameterized.To remediate this issue, do not use` raw`or`RawSQL`but use other`QuerySet`methods toachievethe same goals. If for some reason this is not feasible, ensure calls including user-supplieddatapass it in to the`params`parameter of the`RawSQL`method.While not recommended due to [potential SQLInjection](https://docs.djangoproject.com/en/4.2/ref/models/expressions/#raw-sql-expressions),below is an example using`RawSQL`,passing in user-supplied data as a` param`which will escape the input:# If dealing with integer based user input, restrict the values to integers only using the# path configuration: path('/someview/', views.some_view,name='someview'),# views.pydef some_view(request, user_supplied_id): # Never use string interpolation in the`sql`parameter. # Never quote the`%s`string format such as`… where id=’%s’`as this could lead to SQLInjection. # Pass the user supplied data only in the`params\` parameter. for obj in DBObject.objects.all().annotate( val=RawSQL(sql=“select id from some\_secondary\_table where id=%s”,params=\[user\_supplied\_id\])): # Work with the results from the query # …For more information on QuerySet see:- [https://docs.djangoproject.com/en/4.2/ref/models/querysets/#queryset-apiFor](https://docs.djangoproject.com/en/4.2/ref/models/querysets/#queryset-apiFor) more information on SQL Injection see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/SQL\_Injection\_Prevention\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) |

| Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Distinct, Having, Group\_by, Order\_by, and Filter in SQLAlchemy can cause sql injections if the developer inputs raw SQL into the before-mentioned clauses. This pattern captures relevant cases in which the developer inputs raw SQL into the distinct, having, group\_by, order\_by or filter clauses and injects user-input into the raw SQL with any function besides “bindparams”. Use bindParams to securely bind user-input to SQL statements. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `cursor.execute('SELECT * FROM projects WHERE status = %s', 'active')` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using an object-relational mapper (ORM) such as Sequelize which will protect your queries. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `cursor.execute('SELECT * FROM projects WHERE status = %s', ('active'))` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `cursor.execute('SELECT * FROM projects WHERE status = %s', ('active'))` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `cursor.execute('SELECT * FROM projects WHERE status = ?', 'active')` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected SQL statement that is tainted by `event` object. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use parameterized statements like so: `cursor.execute('SELECT * FROM projects WHERE status = %s', 'active')` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Avoiding SQL string concatenation: untrusted input concatenated with raw SQL query can result in SQL Injection. In order to execute raw query safely, prepared statement should be used. SQLAlchemy provides TextualSQL to easily used prepared statement with named parameters. For complex SQL composition, use SQL Expression Language or Schema Definition Language. In most cases, SQLAlchemy ORM will be a better option. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Distinct, Having, Group\_by, Order\_by, and Filter in SQLAlchemy can cause sql injections if the developer inputs raw SQL into the before-mentioned clauses. This pattern captures relevant cases in which the developer inputs raw SQL into the distinct, having, group\_by, order\_by or filter clauses and injects user-input into the raw SQL with any function besides “bindparams”. Use bindParams to securely bind user-input to SQL statements. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | sqlalchemy.text passes the constructed SQL statement to the database mostly unchanged. This means that the usual SQL injection protections are not applied and this function is vulnerable to SQL injection if user input can reach here. Use normal SQLAlchemy operators (such as or\_, and\_, etc.) to construct SQL. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected possible formatted SQL query. Use parameterized queries instead. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected a Custom Expression ‘’$EXPRESSION’’ calling ‘‘as\_sql(…).’’ This could lead to SQL injection, which can result in attackers exfiltrating sensitive data. Instead, ensure no user input enters this function or that user input is properly sanitized. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Found extension of custom expression: $CLASS. Extending expressions in this way could inadvertently lead to a SQL injection vulnerability, which can result in attackers exfiltrating sensitive data. Instead, ensure no user input enters this function or that user input is properly sanitized. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | QuerySet.extra’ does not provide safeguards against SQL injection and requires very careful use. SQL injection can lead to critical data being stolen by attackers. Instead of using ‘.extra’, use the Django ORM and parameterized queries such as `People.objects.get(name='Bob')`. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected the use of ‘RawSQL’ or ‘raw’ indicating the execution of a non-parameterized SQL query. This could lead to a SQL injection and therefore protected information could be leaked. Instead, use Django ORM and parameterized queries before raw SQL. An example of using the Django ORM is: `People.objects.get(name='Bob')` | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected string concatenation with a non-literal variable in a asyncpg Python SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can create parameterized queries like await stmt.fetch(user\_value)’ | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected string concatenation with a non-literal variable in a pg8000 Python SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can create parameterized queries like so: ‘conn.run(“SELECT :value FROM table”, value=myvalue)’. You can also create prepared statements with ‘conn.prepare’: ‘conn.prepare(“SELECT (:v) FROM table”)’ | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected string concatenation with a non-literal variable in a psycopg2 Python SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries or prepared statements instead. You can use prepared statements by creating a ‘sql.SQL’ string. You can also use the pyformat binding style to create parameterized queries. For example: ‘cur.execute(SELECT \* FROM table WHERE name=%s, user\_input)’ | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Detected string concatenation with a non-literal variable in an aiopg Python SQL statement. This could lead to SQL injection if the variable is user-controlled and not properly sanitized. In order to prevent SQL injection, use parameterized queries instead. You can create parameterized queries like so: ‘cur.execute(“SELECT %s FROM table”, (user\_value,))’. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | User-controlled data from a request is passed to ’extra()’. This could lead to a SQL injection and therefore protected information could be leaked. Instead, use parameterized queries or escape the user-controlled data by using `params` and not using quote placeholders in the SQL string. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | User-controlled data from request is passed to ‘RawSQL()’. This could lead to a SQL injection and therefore protected information could be leaked. Instead, use parameterized queries or escape the user-controlled data by using `params` and not using quote placeholders in the SQL string. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | User-controlled data from a request is passed to ’execute()’. This could lead to a SQL injection and therefore protected information could be leaked. Instead, use django’s QuerySets, which are built with query parameterization and therefore not vulnerable to sql injection. For example, you could use `Entry.objects.filter(date=2006)`. | | Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’) | Data that is possible user-controlled from a python request is passed to `raw()`. This could lead to SQL injection and attackers gaining access to protected information. Instead, use django’s QuerySets, which are built with query parameterization and therefore not vulnerable to sql injection. For example, you could use `Entry.objects.filter(date=2006)`. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | subprocess call - check for execution of untrusted input | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Python possesses many mechanisms to invoke an external executable. However,doing so may present a security issue if appropriate care is not taken tosanitize any user provided or variable input. This plugin test is part of afamily of tests built to check for process spawning and warn appropriately.Specifically, this test looks for the spawning of a subprocess without theuse of a command shell. This type of subprocess invocation is notvulnerable to shell injection attacks, but care should still be taken toensure validity of input. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Starting a process with a shell; seems safe, but may be changed in the future, considerrewriting without shell | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found dynamic content when spawning a process. This is dangerous if externaldata can reach thisfunction call because it allows a malicious actor toexecute commands. Ensure no external datareaches here. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Starting a process with a partial executable path | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Starting a process with a partial executable path | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found `subprocess` function `\$FUNC` with `shell=True`. This is dangerous because this call willspawn the command using a shell process. Doing so propagates current shell settings andvariables,which makes it much easier for a malicious actor to execute commands. Use `shell=False`instead. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | subprocess call - check for execution of untrusted input | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Unverified SSL context detected. This will permit insecure connections without `verifyingSSL`certificates. Use `ssl.create_default_context()` instead. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Starting a process with a shell; seems safe, but may be changed in the future, considerrewriting without shell | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Consider possible security implications associated with subprocess module. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found user controlled content when spawning a process. This is dangerous because it allows a malicious actor to execute commands. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found user-controlled data used in a system call. This could allow a malicious actor to execute commands. Use the ‘subprocess’ module instead, which is easier to use without accidentally exposing a command injection vulnerability. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected subprocess function ‘$FUNC’ with user controlled data. A malicious actor could leverage this to perform command injection. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found user controlled content when spawning a process. This is dangerous because it allows a malicious actor to execute commands. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected user input entering a `subprocess` call unsafely. This could result in a command injection vulnerability. An attacker could use this vulnerability to execute arbitrary commands on the host, which allows them to download malware, scan sensitive data, or run any command they wish on the server. Do not let users choose the command to run. In general, prefer to use Python API versions of system commands. If you must use subprocess, use a dictionary to allowlist a set of commands. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected asyncio subprocess function with user controlled data. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected asyncio subprocess function without a static string. If this data can be controlled by a malicious actor, it may be an instance of command injection. Audit the use of this call to ensure it is not controllable by an external resource. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected ‘create\_subprocess\_exec’ function without a static string. If this data can be controlled by a malicious actor, it may be an instance of command injection. Audit the use of this call to ensure it is not controllable by an external resource. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found user controlled content when spawning a process. This is dangerous because it allows a malicious actor to execute commands. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected subprocess function ‘$FUNC’ without a static string. If this data can be controlled by a malicious actor, it may be an instance of command injection. Audit the use of this call to ensure it is not controllable by an external resource. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected subprocess function ‘$FUNC’ with user controlled data. A malicious actor could leverage this to perform command injection. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected subprocess function ‘$LOOP.subprocess\_exec’ with user controlled data. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found dynamic content when spawning a process. This is dangerous if external data can reach this function call because it allows a malicious actor to execute commands. Ensure no external data reaches here. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found dynamic content used in a system call. This is dangerous if external data can reach this function call because it allows a malicious actor to execute commands. Use the ‘subprocess’ module instead, which is easier to use without accidentally exposing a command injection vulnerability. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found user controlled content when spawning a process. This is dangerous because it allows a malicious actor to execute commands. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found dynamic content when spawning a process. This is dangerous if external data can reach this function call because it allows a malicious actor to execute commands. Ensure no external data reaches here. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Found user-controlled data used in a system call. This could allow a malicious actor to execute commands. Use the ‘subprocess’ module instead, which is easier to use without accidentally exposing a command injection vulnerability. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected ‘create\_subprocess\_exec’ function with user controlled data. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected subprocess function ‘$LOOP.subprocess\_exec’ without a static string. If this data can be controlled by a malicious actor, it may be an instance of command injection. Audit the use of this call to ensure it is not controllable by an external resource. You may consider using ‘shlex.escape()’. | | Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’) | Detected user input entering a `subprocess` call unsafely. This could result in a command injection vulnerability. An attacker could use this vulnerability to execute arbitrary commands on the host, which allows them to download malware, scan sensitive data, or run any command they wish on the server. Do not let users choose the command to run. In general, prefer to use Python API versions of system commands. If you must use subprocess, use a dictionary to allowlist a set of commands. | | Improper Neutralization of Special Elements in Data Query Logic | Detected DynamoDB query filter that is tainted by `\$EVENT` object. This could lead to NoSQL injection if the variable is user-controlled and not properly sanitized. Explicitly assign query params instead of passing data from `\$EVENT` directly to DynamoDB client. | | Improper Neutralization of CRLF Sequences (‘CRLF Injection’) | Found user-controlled request data passed into ‘.write(…)’. This could be dangerous if a malicious actor is able to control data into sensitive files. For example, a malicious actor could force rolling of critical log files, or cause a denial-of-service by using up available disk space. Instead, ensure that request data is properly escaped or sanitized. | | Incorrect Permission Assignment for Critical Resource | The application was found setting file permissions to overly permissive values. Considerusing the following values if the application user is the only process to accessthe file:- 0400 - read only access to the file- 0200 - write only access to the file- 0600 - read/write access to the fileExample creating a file with read/write permissions for the application user:# Use octal values to set 0o600 (read/write access to the file) for the current# useros.chmod(‘somefile.txt’, 0o600)For all other values please see:https://en.wikipedia.org/wiki/File-system\_permissions#Numeric\_notation |

| Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | The application was found using mako templates without `default_filters`being passed to the `Template` or `TemplateLookup` constructors. If using in the context of HTML, this could lead to Cross-Site Scripting (XSS) attacks when rendering with user-supplied input.Unfortunately, Jinja2 does not support context-aware escaping, meaning itis insufficient to protect against XSS for the various web contexts. It is important to encode the data depending on the specific context it is used in. There are at least six context types:- Inside HTML tags `context 1`\- Inside attributes: \`\`- Inside event attributes `button`\- Inside script blocks: `var x = "context 4"`\- Unsafe element HTML assignment: `element.innerHTML = "context 5"`\- Inside URLs: `link`Script blocks alone have multiple ways they need to be encoded. Extra caremust be taken if user input is ever output inside of script tags.User input that is displayed within the application must be encoded,sanitized or validated to ensure it cannot be treated as HTML or executed as Javascript code. Care must also be taken to not mix server-side templating with client-side templating, as the server-side templating will not encode things like {{ 7\*7 }} which may execute client-side templating features.It is _NOT_ advised to encode user input prior to inserting into a datastore. The data will need to be encoded depending on context of where it is output. It is much safer to force the displaying system to handle the encoding and not attempt to guess how it should be encoded.To handle different contexts, one approach would be to write custom makofilters. Below is an example that escapes or encodes links and potentially malicious script, note this does not include other contexts such as CSS or attributes:# filters.py module:def escape\_link(value): bad\_link = “#JinjatmplZ” # Block any values that start with // as that could be used to inject # links to third party pages see:https://en.wikipedia.org/wiki/Wikipedia:Protocol-relative\_URL if value.startswith(’//’): return bad\_link # Only allow relative links # if you want to allow links that start with http or ws replace with below: # if not value.startswith(’/’): and not value.startswith(‘http’) and notvalue.startswith(‘ws’) if not value.startswith(’/’): return bad\_link return value# Create a replacement tablejs\_replacement = str.maketrans({ ‘\\0’: “\\u0000”, ‘\\t’: “\\t”, ‘\\n’: “\\n”, ‘\\v’: “\\u000b”, ‘\\f’: “\\f`", '\r': "\\r", '"': "\\u0022", '`’: “\\u0060”, ‘&’: “\\u0026”, ‘'’: “\\u0027”, ‘+’: “\\u002b”, ‘/’: “\\/”, ’ ‘>’: “\\u003e”, ‘\\’: “\\\\”, ‘(’: “\\u0028”, ‘)’: “\\u0029”,})def escape\_js(value): # Escape the input for use in context, USE WITH CAUTION # It is strongly recommended to never pass user-supplied input to # the JavaScript context. # Translate any potential characters using our translation table return value.translate(js\_replacement)###################################################################### main module: ######################################################################from mako.template import Template# Define our template, note the calls to our custom filters depending# on contexttemplate\_text = "”" My Webpage My Webpage ${html\_context} link ${script\_context escape\_js}"""# Load our template with default filters and our imported filters for# usage in template filest = Template(template\_text, # By default enable the html filter with ‘h’ default\_filters=\[‘h’\], # Import our custom filters imports=\[“from filters import escape\_link, escape\_js”\])# Render our templateprint(t.render(html\_context="", link\_context="/# onclick=alert(1)alert(1)", script\_context=“alert(1)”,)) |

| Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Cross Site Scripting (XSS) is an attack which exploits a web application or system to treatuser inputas markup or script code. It is important to encode the data depending on the specific contextitis used in. There are at least six context types:- Inside HTML tags `context 1`\- Inside attributes: \`\`- Inside event attributes `button`\- Inside script blocks: `var x = "context 4"`\- Unsafe element HTML assignment: `element.innerHTML = "context 5"`\- Inside URLs: `link`Script blocks alone have multiple ways they need to be encoded. Extra care must be taken ifuser inputis ever output inside of script tags.User input that is displayed within the application must be encoded, sanitized or validatedto ensure it cannot be treated as HTML or executed as Javascript code. Care must also betakento not mix server-side templating with client-side templating, as the server-side templatingwillnot encode things like {{ 7\*7 }} which may execute client-side templating features.It is _NOT_ advised to encode user input prior to inserting into a data store. The data willneed to beencoded depending on context of where it is output. It is much safer to force the displayingsystem tohandle the encoding and not attempt to guess how it should be encoded.Consider ([https://docs.djangoproject.com/en/4.2/ref/utils/#django.utils.html.format\_html)instead](https://docs.djangoproject.com/en/4.2/ref/utils/#django.utils.html.format_html%29instead) ofthe `django.utils.safestring` methods.Example using `format_html`:# Use format\_html to create an HTML link, using href as the parameter# which will be encoded automaticallyformat\_html(“Some Link”, href)For more information on XSS see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Cross\_Site\_Scripting\_Prevention\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) |

| Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | `mark_safe()` is used to mark a string as `safe` for HTML output.This disables escaping and could therefore subject the content toXSS attacks. Use `django.utils.html.format_html()` to build HTMLfor rendering instead. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Flask response reflects unsanitized user input. This could lead to a cross-site scripting vulnerability ([https://owasp.org/www-community/attacks/xss/](https://owasp.org/www-community/attacks/xss/) ) in which an attacker causes arbitrary code to be executed in the user’s browser. To prevent, please sanitize the user input, e.g. by rendering the response in a Jinja2 template (see considerations in [https://flask.palletsprojects.com/en/1.0.x/security/)](https://flask.palletsprojects.com/en/1.0.x/security/%29) . | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Flask does not automatically escape Jinja templates unless they have .html, .htm, .xml, or .xhtml extensions. This could lead to XSS attacks. Use .html, .htm, .xml, or .xhtml for your template extensions. See [https://flask.palletsprojects.com/en/1.1.x/templating/#jinja-setup](https://flask.palletsprojects.com/en/1.1.x/templating/#jinja-setup) for more information. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected data rendered directly to the end user via ‘Response’. This bypasses Pyramid’s built-in cross-site scripting (XSS) defenses and could result in an XSS vulnerability. Use Pyramid’s template engines to safely render HTML. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected user input flowing into an HTML response. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected user input flowing into a manually constructed HTML string. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. To be sure this is safe, check that the HTML is rendered safely. Otherwise, use templates which will safely render HTML instead. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected Flask route directly returning a formatted string. This is subject to cross-site scripting if user input can reach the string. Consider using the template engine instead and rendering pages with ‘render\_template()’. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected user input flowing into a manually constructed HTML string. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. To be sure this is safe, check that the HTML is rendered safely. Otherwise, use templates (`flask.render_template`) which will safely render HTML instead. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Mako templates do not provide a global HTML escaping mechanism. This means you must escape all sensitive data in your templates using ’ u’ for URL escaping or ’ h’ for HTML escaping. If you are using Mako to serve web content, consider using a system such as Jinja2 which enables global escaping. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | ‘mark\_safe()’ is used to mark a string as “safe” for HTML output. This disables escaping and could therefore subject the content to XSS attacks. Use ‘django.utils.html.format\_html()’ to build HTML for rendering instead. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Found user-controlled request data passed into HttpResponse. This could be vulnerable to XSS, leading to attackers gaining access to user cookies and protected information. Ensure that the request data is properly escaped or sanitzed. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Found user-controlled request data passed into a HttpResponseBadRequest. This could be vulnerable to XSS, leading to attackers gaining access to user cookies and protected information. Ensure that the request data is properly escaped or sanitzed. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected user input flowing into a manually constructed HTML string. You may be accidentally bypassing secure methods of rendering HTML by manually constructing HTML and this could create a cross-site scripting vulnerability, which could let attackers steal sensitive user data. To be sure this is safe, check that the HTML is rendered safely. Otherwise, use templates (`django.shortcuts.render`) which will safely render HTML instead. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a template variable used in an anchor tag with the ‘href’ attribute. This allows a malicious actor to input the ‘javascript:’ URI and is subject to cross- site scripting (XSS) attacks. Use ‘url\_for()’ to safely generate a URL. You may also consider setting the Content Security Policy (CSP) header. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected direct use of jinja2. If not done properly, this may bypass HTML escaping which opens up the application to cross-site scripting (XSS) vulnerabilities. Prefer using the Flask method ‘render\_template()’ and templates with a ‘.html’ extension in order to prevent XSS. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a unquoted template variable as an attribute. If unquoted, a malicious actor could inject custom JavaScript handlers. To fix this, add quotes around the template expression, like this: “{{ $…VAR }}”. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected explicitly unescaped content using ‘Markup()’. This permits the unescaped data to include unescaped HTML which could result in cross-site scripting. Ensure this data is not externally controlled, or consider rewriting to not use ‘Markup()’. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Be careful with `flask.make_response()`. If this response is rendered onto a webpage, this could create a cross-site scripting (XSS) vulnerability. `flask.make_response()` will not autoescape HTML. If you are rendering HTML, write your HTML in a template file and use `flask.render_template()` which will take care of escaping. If you are returning data from an API, consider using `flask.jsonify()`. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a template variable used in a script tag. Although template variables are HTML escaped, HTML escaping does not always prevent cross-site scripting (XSS) attacks when used directly in JavaScript. If you need this data on the rendered page, consider placing it in the HTML portion (outside of a script tag). Alternatively, use a JavaScript-specific encoder, such as the one available in OWASP ESAPI. For Django, you may also consider using the ‘json\_script’ template tag and retrieving the data in your script by using the element ID (e.g., `document.getElementById`). | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected data rendered directly to the end user via ‘HttpResponse’ or a similar object. This bypasses Django’s built-in cross-site scripting (XSS) defenses and could result in an XSS vulnerability. Use Django’s template engine to safely render HTML. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Translated strings will not be escaped when rendered in a template. This leads to a vulnerability where translators could include malicious script tags in their translations. Consider using `force_escape` to explicitly escape a translated text. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Passing a formatted string as first parameter to `format_html` disables the proper encoding of variables. Any HTML in the first parameter is not encoded. Using a formatted string as first parameter obscures which parameters are encoded. Correct use of `format_html` is passing a static format string as first parameter, and the variables to substitute as subsequent parameters. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a template variable used in an anchor tag with the ‘href’ attribute. This allows a malicious actor to input the ‘javascript:’ URI and is subject to cross- site scripting (XSS) attacks. Use the ‘url’ template tag to safely generate a URL. You may also consider setting the Content Security Policy (CSP) header. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | `html_safe()` add the `__html__` magic method to the provided class. The `__html__` method indicates to the Django template engine that the value is ‘safe’ for rendering. This means that normal HTML escaping will not be applied to the return value. This exposes your application to cross-site scripting (XSS) vulnerabilities. If you need to render raw HTML, consider instead using `mark_safe()` which more clearly marks the intent to render raw HTML than a class with a magic method. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Found a class extending ‘SafeString’, ‘SafeText’ or ‘SafeData’. These classes are for bypassing the escaping engine built in to Django and should not be used directly. Improper use of this class exposes your application to cross-site scripting (XSS) vulnerabilities. If you need this functionality, use ‘mark\_safe’ instead and ensure no user data can reach it. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected a Context with autoescape disabled. If you are rendering any web pages, this exposes your application to cross-site scripting (XSS) vulnerabilities. Remove ‘autoescape: False’ or set it to ‘True’. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | The `__html__` method indicates to the Django template engine that the value is ‘safe’ for rendering. This means that normal HTML escaping will not be applied to the return value. This exposes your application to cross-site scripting (XSS) vulnerabilities. If you need to render raw HTML, consider instead using `mark_safe()` which more clearly marks the intent to render raw HTML than a class with a magic method. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Translated strings will not be escaped when rendered in a template. This leads to a vulnerability where translators could include malicious script tags in their translations. Consider using `force_escape` to explicitly escape a translated text. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Autoescape is globally disbaled for this Django application. If you are rendering any web pages, this exposes your application to cross-site scripting (XSS) vulnerabilities. Remove ‘autoescape: False’ or set it to ‘True’. | | Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’) | Detected Django filters flagged with ‘is\_safe’. ‘is\_safe’ tells Django not to apply escaping on the value returned by this filter (although the input is escaped). Used improperly, ‘is\_safe’ could expose your application to cross-site scripting (XSS) vulnerabilities. Ensure this filter does not 1) add HTML characters, 2) remove characters, or 3) use external data in any way. Consider instead removing ‘is\_safe’ and explicitly marking safe content with ‘mark\_safe()’. | | Improper Authentication | Detected JWT token decoded with ‘verify=False’. This bypasses any integrity checks for the token which means the token could be tampered with by malicious actors. Ensure that the JWT token is verified. | | Deserialization of Untrusted Data | Consider possible security implications associated with etree module. | | Deserialization of Untrusted Data | Using various methods to parse untrusted XML data is known to be vulnerable toXML attacks. Replace vulnerable imports with the equivalent defusedxml package,or make sure defusedxml.defuse\_stdlib() is called. | | Deserialization of Untrusted Data | Using various methods to parse untrusted XML data is known to be vulnerable toXML attacks. Replace vulnerable imports with the equivalent defusedxml package. | | Deserialization of Untrusted Data | Using various methods to parse untrusted XML data is known to be vulnerableto XML attacks. Replace vulnerable imports with the equivalent defusedxmlpackage, or make sure defusedxml.defuse\_stdlib() is called. | | Deserialization of Untrusted Data | Consider possible security implications associated with pickle module. | | Deserialization of Untrusted Data | Using various methods to parse untrusted XML data is known to be vulnerable toXML attacks. Replace vulnerable imports with the equivalent defusedxml package,or make sure defusedxml.defuse\_stdlib() is called. | | Deserialization of Untrusted Data | Using various methods to parse untrusted XML data is known to be vulnerable toXML attacks. Replace vulnerable imports with the equivalent defusedxml package,or make sure defusedxml.defuse\_stdlib() is called. | | Deserialization of Untrusted Data | Consider possible security implications associated with xmlrpclib module. | | Deserialization of Untrusted Data | The Python ‘pickle’ module is not secure against maliciously constructed input | | Deserialization of Untrusted Data | The Python ‘yaml’ module’s `load`, `load_all`, `dump`, and `dump_all` functions are not secure against maliciously constructed input | | Deserialization of Untrusted Data | The Python ‘shelve’ module is not secure against maliciously constructed input | | Deserialization of Untrusted Data | The Python ‘marshal’ module is not secure against maliciously constructed input | | Deserialization of Untrusted Data | Detected the use of an insecure deserialization library in a Flask route. These libraries are prone to code execution vulnerabilities. Ensure user data does not enter this function. To fix this, try to avoid serializing whole objects. Consider instead using a serializer such as JSON. | | Deserialization of Untrusted Data | Avoid using `pickle`, which is known to lead to code execution vulnerabilities. When unpickling, the serialized data could be manipulated to run arbitrary code. Instead, consider serializing the relevant data as JSON or a similar text-based serialization format. | | Deserialization of Untrusted Data | The marshal module is not intended to be secure against erroneous or maliciously constructed data. Never unmarshal data received from an untrusted or unauthenticated source. See more details: [https://docs.python.org/3/library/marshal.html?highlight=security](https://docs.python.org/3/library/marshal.html?highlight=security) | | Deserialization of Untrusted Data | The Connection.recv() method automatically unpickles the data it receives, which can be a security risk unless you can trust the process which sent the message. Therefore, unless the connection object was produced using Pipe() you should only use the recv() and send() methods after performing some sort of authentication. See more dettails: [https://docs.python.org/3/library/multiprocessing.html?highlight=security#multiprocessing.connection.Connection](https://docs.python.org/3/library/multiprocessing.html?highlight=security#multiprocessing.connection.Connection) | | Deserialization of Untrusted Data | Avoid using `jsonpickle`, which is known to lead to code execution vulnerabilities. When unpickling, the serialized data could be manipulated to run arbitrary code. Instead, consider serializing the relevant data using `json` module. | | Deserialization of Untrusted Data | Avoid using unsafe `ruamel.yaml.YAML()`. `ruamel.yaml.YAML` can create arbitrary Python objects. A malicious actor could exploit this to run arbitrary code. Use `YAML(typ='rt')` or `YAML(typ='safe')` instead. | | Deserialization of Untrusted Data | Detected a possible YAML deserialization vulnerability. `yaml.unsafe_load`, `yaml.Loader`, `yaml.CLoader`, and `yaml.UnsafeLoader` are all known to be unsafe methods of deserializing YAML. An attacker with control over the YAML input could create special YAML input that allows the attacker to run arbitrary Python code. This would allow the attacker to steal files, download and install malware, or otherwise take over the machine. Use `yaml.safe_load` or `yaml.SafeLoader` instead. | | Deserialization of Untrusted Data | Avoid using `pickle`, which is known to lead to code execution vulnerabilities. When unpickling, the serialized data could be manipulated to run arbitrary code. Instead, consider serializing the relevant data as JSON or a similar text-based serialization format. | | Deserialization of Untrusted Data | Avoid using `cPickle`, which is known to lead to code execution vulnerabilities. When unpickling, the serialized data could be manipulated to run arbitrary code. Instead, consider serializing the relevant data as JSON or a similar text-based serialization format. | | Deserialization of Untrusted Data | Avoid using `dill`, which uses `pickle`, which is known to lead to code execution vulnerabilities. When unpickling, the serialized data could be manipulated to run arbitrary code. Instead, consider serializing the relevant data as JSON or a similar text-based serialization format. | | Deserialization of Untrusted Data | Avoid using `shelve`, which uses `pickle`, which is known to lead to code execution vulnerabilities. When unpickling, the serialized data could be manipulated to run arbitrary code. Instead, consider serializing the relevant data as JSON or a similar text-based serialization format. | | Deserialization of Untrusted Data | Avoid using insecure deserialization library, backed by `pickle`, `_pickle`, `cpickle`, `dill`, `shelve`, or `yaml`, which are known to lead to remote code execution vulnerabilities. | | Exposure of Sensitive Information to an Unauthorized Actor | Binding to all network interfaces can potentially open up a service totraffic on unintended interfaces, that may not be properly documented orsecured. By passing “0.0.0.0”, “::” or an empty string as the address to the `socket.bind`function,the application will bind to all interfaces.Consider passing in the interface ip address through an environment variable,configuration file, or by determining the primary interface(s) IP address.Example getting the IP address from an environment variable `IP_ADDRESS`:# Get the IP\_ADDRESS env variable, or bind to# 127.0.0.1 if it is not setaddress = os.getenv(“IP\_ADDRESS”, “127.0.0.1”)# Create an internet socketsock = socket.socket(socket.AF\_INET)# Set the port to listen onport = 9777# Bind to the address and port combinationsock.bind((address, port))# Listen for connectionssock.listen()# Handle the connection |

| Exposure of Sensitive Information to an Unauthorized Actor | Running `socket.bind` to 0.0.0.0, or empty string could unexpectedly expose the server publicly as it binds to all available interfaces. Consider instead getting correct address from an environment variable or configuration file. | | URL Redirection to Untrusted Site (‘Open Redirect’) | Data from request is passed to redirect(). This is an open redirect and could be exploited. Consider using ‘url\_for()’ to generate links to known locations. If you must use a URL to unknown pages, consider using ‘urlparse()’ or similar and checking if the ’netloc’ property is the same as your site’s host name. See the references for more information. | | URL Redirection to Untrusted Site (‘Open Redirect’) | Data from request ($DATA) is passed to redirect(). This is an open redirect and could be exploited. Ensure you are redirecting to safe URLs by using django.utils.http.is\_safe\_url(). See [https://cwe.mitre.org/data/definitions/601.html](https://cwe.mitre.org/data/definitions/601.html) for more information. | | Cleartext Transmission of Sensitive Information | The application was found using an FTP library. As FTP does not provide encryption, it isstrongly recommended that any file transfers be done over a more secure transport such asSSH.The [paramiko](https://www.paramiko.org/) library can be used with an SCP module to allowsecure file transfers.Example using `paramiko` SSH client and the `scp` module:import paramikoimport scp# Create an SSH clientwith paramiko.SSHClient() as ssh: # Load the system host keys so we can confirm the # host we are connecting to is legitimate ssh.load\_system\_host\_keys(’/home/appuser/.ssh/known\_hosts’) # Connect to the remote host using our SSH private key ssh.connect(hostname=‘example.org’, port=22, username=‘appuser’, key\_filename=’/home/appuser/.ssh/private\_key’) # Create an SCP client with the ssh transport and copy files with scp.SCPClient(ssh.get\_transport()) as secure\_copy: secure\_copy.get(‘remote/test.file’, ’local/test.file’) secure\_copy.put(’local/some.file’, ‘remote/some.file’)For more information on the paramiko module see:- [https://www.paramiko.org/For](https://www.paramiko.org/For) more information on the scp module see:- [https://github.com/jbardin/scp.py](https://github.com/jbardin/scp.py) |

| Cleartext Transmission of Sensitive Information | Pysnmp was detected using SNMPv3 without authentication or encryptionprotections enabled.- Use of `usmNoAuthProtocol` or `usmNoPrivProtocol` indicates thateither authentication or privacy, respectively, is not being used. - The absence of `authKey` (or `authKey=None`) implies no authentication, which is equivalent to using `usmNoAuthProtocol`. - The absence of `privKey` (or `privKey=None`) implies no privacy (encryption), which is equivalent to using `usmNoPrivProtocol`.To enhance the security of your SNMP communications, it is recommended to use bothauthentication and privacy features in SNMPv3:- Use SHA for Authentication: SHA (Secure Hash Algorithm) is a more secure option for SNMP message authentication. To use SHA, set the `authProtocol` to `usmHMACSHAAuthProtocol` and provide a strong `authKey`.- Use AES for Privacy: AES (Advanced Encryption Standard) is recommended for encrypting SNMP messages. Set the `privProtocol` to `usmAesCfb128Protocol`or a similar AES-based protocol and specify a strong `privKey`.Example of secure `UsmUserData` configuration: from pysnmp.hlapi import UsmUserData, usmHMACSHAAuthProtocol, usmAesCfb128Protocol user\_data = UsmUserData(‘username’,‘authKey’, ‘privKey’, authProtocol=usmHMACSHAAuthProtocol, privProtocol=usmAesCfb128Protocol) | | Cleartext Transmission of Sensitive Information | Pysnmp was detected using versions SNMPv1 or SNMPv2. SNPMv1 and SNMPv2 are insecureand should no longer be used as they do not offer encryption.If possible, query SNMP devices using SNMPv3 instead.Example querying a device using SNMPv3 with SHA-AES:from pysnmp.hlapi import \*# Create the snpm iteratoriterator = getCmd( SnmpEngine(), # Configure using SHA AES UsmUserData(‘usr-sha-aes’, ‘authkey1’, ‘privkey1’, authProtocol=USM\_AUTH\_HMAC96\_SHA, privProtocol=USM\_PRIV\_CFB128\_AES), UdpTransportTarget((‘demo.snmplabs.com’, 161)), ContextData(), ObjectType(ObjectIdentity(‘SNMPv2-MIB’, ‘sysDescr’, 0)))For more information on using SNMPv3 with `Pysnmp` see:- [https://pysnmp.readthedocs.io/en/latest/examples/hlapi/v3arch/asyncore/sync/manager/cmdgen/snmp-versions.html#snmpv3-auth-sha-privacy-aes128](https://pysnmp.readthedocs.io/en/latest/examples/hlapi/v3arch/asyncore/sync/manager/cmdgen/snmp-versions.html#snmpv3-auth-sha-privacy-aes128) |

| Cleartext Transmission of Sensitive Information | The application was found using a telnet library. As telnet does not provide encryption, it isstrongly recommended that communications use a more secure transport such asSSH.The [paramiko](https://www.paramiko.org/) library can be used to initiate SSH connections.Example using `paramiko` SSH client:import paramikoimport scp# Create an SSH clientwith paramiko.SSHClient() as ssh: # Load the system host keys so we can confirm the # host we are connecting to is legitimate ssh.load\_system\_host\_keys(’/home/appuser/.ssh/known\_hosts’) # Connect to the remote host using our SSH private key ssh.connect(hostname=‘example.org’, port=22, username=‘appuser’, key\_filename=’/home/appuser/.ssh/private\_key’) # Work with the connectionFor more information on the paramiko module see:- [https://www.paramiko.org/](https://www.paramiko.org/) |

| Cleartext Transmission of Sensitive Information | FTP does not encrypt communications by default. This can lead to sensitive data being exposed.Ensure use of FTP here does not expose sensitive data. | | Cleartext Transmission of Sensitive Information | functions are being called. FTP is considered insecure. Use SSH/SFTP/SCP orsome other encryptedprotocol | | Cleartext Transmission of Sensitive Information | Telnet does not encrypt communications. Use SSH instead. | | Cleartext Transmission of Sensitive Information | Initializing a security context for Dask (`distributed`) without “require\_encryption” keyword argument may silently fail to provide security. | | Cleartext Transmission of Sensitive Information | Telnet does not encrypt communications. Use SSH instead. | | Cleartext Transmission of Sensitive Information | FTP does not encrypt communications by default. This can lead to sensitive data being exposed. Ensure use of FTP here does not expose sensitive data. | | Cleartext Transmission of Sensitive Information | Detected HTTPConnectionPool. This will transmit data in cleartext. It is recommended to use HTTPSConnectionPool instead for to encrypt communications. | | Cleartext Transmission of Sensitive Information | The ‘FTP’ class sends information unencrypted. Consider using the ‘FTP\_TLS’ class instead. | | Cleartext Transmission of Sensitive Information | Detected a ‘urllib.request.Request()’ object using an insecure transport protocol, ‘ftp://’. This connection will not be encrypted. Consider using SFTP instead. urllib does not support SFTP natively, so consider using a library which supports SFTP. | | Cleartext Transmission of Sensitive Information | Detected an unsecured transmission channel. ‘OpenerDirector.open(…)’ is being used with ‘ftp://’. Information sent over this connection will be unencrypted. Consider using SFTP instead. urllib does not support SFTP, so consider a library which supports SFTP. | | Cleartext Transmission of Sensitive Information | Detected a ‘urllib.request.Request()’ object using an insecure transport protocol, ‘http://’. This connection will not be encrypted. Use ‘https://’ instead. | | Cleartext Transmission of Sensitive Information | Detected ‘urllib.urlopen()’ using ‘ftp://’. This request will not be encrypted. Consider using SFTP instead. urllib does not support SFTP, so consider switching to a library which supports SFTP. | | Cleartext Transmission of Sensitive Information | Detected an unsecured transmission channel. ‘URLopener.retrieve(…)’ is being used with ‘http://’. Use ‘https://’ instead to secure the channel. | | Cleartext Transmission of Sensitive Information | Detected an unsecured transmission channel. ‘OpenerDirector.open(…)’ is being used with ‘http://’. Use ‘https://’ instead to secure the channel. | | Cleartext Transmission of Sensitive Information | Detected an unsecured transmission channel. ‘URLopener.open(…)’ is being used with ‘http://’. Use ‘https://’ instead to secure the channel. | | Cleartext Transmission of Sensitive Information | Detected an insecure transmission channel. ‘URLopener.open(…)’ is being used with ‘ftp://’. Use SFTP instead. urllib does not support SFTP, so consider using a library which supports SFTP. | | Cleartext Transmission of Sensitive Information | Detected ‘urllib.urlretrieve()’ using ‘http://’. This request will not be encrypted. Use ‘https://’ instead. | | Cleartext Transmission of Sensitive Information | Detected an insecure transmission channel. ‘URLopener.retrieve(…)’ is being used with ‘ftp://’. Use SFTP instead. urllib does not support SFTP, so consider using a library which supports SFTP. | | Cleartext Transmission of Sensitive Information | Detected ‘urllib.urlretrieve()’ using ‘ftp://’. This request will not be encrypted. Use SFTP instead. urllib does not support SFTP, so consider switching to a library which supports SFTP. | | Cleartext Transmission of Sensitive Information | Detected ‘urllib.urlopen()’ using ‘http://’. This request will not be encrypted. Use ‘https://’ instead. | | Cleartext Transmission of Sensitive Information | Detected a request using ‘http://’. This request will be unencrypted. Use ‘https://’ instead. | | Cleartext Transmission of Sensitive Information | Detected a request using ‘http://’. This request will be unencrypted, and attackers could listen into traffic on the network and be able to obtain sensitive information. Use ‘https://’ instead. | | Cleartext Transmission of Sensitive Information | Detected a request using ‘http://’. This request will be unencrypted. Use ‘https://’ instead. | | Sensitive Cookie Without ‘HttpOnly’ Flag | Found a Pyramid cookie without the httponly option correctly set. Pyramid cookies should be handled securely by setting httponly=True in response.set\_cookie(…). If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie Without ‘HttpOnly’ Flag | Found a Pyramid Authentication Ticket cookie without the httponly option correctly set. Pyramid cookies should be handled securely by setting httponly=True. If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie Without ‘HttpOnly’ Flag | Found a Pyramid Authentication Ticket cookie without the httponly option correctly set. Pyramid cookies should be handled securely by setting httponly=True. If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie Without ‘HttpOnly’ Flag | Found a Pyramid cookie using an unsafe default for the httponly option. Pyramid cookies should be handled securely by setting httponly=True in response.set\_cookie(…). If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute | Found a Pyramid Authentication Ticket cookie using an unsafe default for the secure option. Pyramid cookies should be handled securely by setting secure=True. If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute | Found a Pyramid Authentication Ticket cookie without the secure option correctly set. Pyramid cookies should be handled securely by setting secure=True. If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute | Found a Pyramid cookie using an unsafe default for the secure option. Pyramid cookies should be handled securely by setting secure=True in response.set\_cookie(…). If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute | Found a Pyramid cookie without the secure option correctly set. Pyramid cookies should be handled securely by setting secure=True in response.set\_cookie(…). If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute | Found a Flask cookie without secure, httponly, or samesite correctly set. Flask cookies should be handled securely by setting secure=True, httponly=True, and samesite=‘Lax’ in response.set\_cookie(…). If these parameters are not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. Include the ‘secure=True’, ‘httponly=True’, samesite=‘Lax’ arguments or set these to be true in the Flask configuration. | | Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute | Django cookies should be handled securely by setting secure=True, httponly=True, and samesite=‘Lax’ in response.set\_cookie(…). If your situation calls for different settings, explicitly disable the setting. If you want to send the cookie over http, set secure=False. If you want to let client-side JavaScript read the cookie, set httponly=False. If you want to attach cookies to requests for external sites, set samesite=None. | | Use of Insufficiently Random Values | Depending on the context, generating weak random numbers may expose cryptographic functions,which rely on these numbers, to be exploitable. When generating numbers for sensitive valuessuch as tokens, nonces, and cryptographic keys, it is recommended that the `secrets` modulebe used instead.Example using the secrets module:import secrets# Generate a secure random 64 byte arrayrandom\_bytes = secrets.token\_bytes(64)print(random\_bytes)# Generate a secure random 64 byte array as a hex stringrandom\_bytes\_hex = secrets.token\_hex(64)# Generate a secure random 64 byte array base64 encoded for use in URLsrandom\_string = secrets.token\_urlsafe(64)For more information on the `secrets` module see:- [https://docs.python.org/3/library/secrets.html](https://docs.python.org/3/library/secrets.html) |

| Insecure Temporary File | The application was found creating temporary files with the insecure `mktemp` method.Depending on how the application uses this temporary file, an attacker may be able to createsymlinks that point to other files prior to the application creating or writingto the target file, leading to unintended files being created or overwritten.To remediate this issue consider using `tempfile.TemporaryFile` instead.Example using `tempfile.TemporaryFile` to write a file:import tempfile# Open a new temporary file using a context managerwith tempfile.TemporaryFile() as fp: # Write some data to the temporary file fp.write(b’Some data’) # Seek back to beginning of file fp.seek(0) # Read it data = fp.read()# File is automatically closed/removed once we exit the with contextFor more information on alternative tempfile functions see:- [https://docs.python.org/3/library/tempfile.html](https://docs.python.org/3/library/tempfile.html) |

| Insecure Temporary File | The application was found creating files in shared system temporary directories(`/tmp` or `/var/tmp`) without using the `tempfile.TemporaryFile` function. Dependingon how the application uses this temporary file, an attacker may be able to createsymlinks that point to other files prior to the application creating or writingto the target file, leading to unintended files being created or overwritten.Example using `tempfile.TemporaryFile` to write a file:import tempfile# Open a new temporary file using a context managerwith tempfile.TemporaryFile() as fp: # Write some data to the temporary file fp.write(b’Some data’) # Seek back to beginning of file fp.seek(0) # Read it data = fp.read()# File is automatically closed/removed once we exit the with contextFor more information on alternative tempfile functions see:- [https://docs.python.org/3/library/tempfile.html](https://docs.python.org/3/library/tempfile.html) |

| Insecure Temporary File | Probable insecure usage of temp file/directory. | | Insecure Temporary File | The Python `os` `tempnamtmpnam` functions are vulnerable to symlink attacks | | Insecure Temporary File | The Python ‘os’ tempnamtmpnam functions are vulnerable to symlink attacks | | Execution with Unnecessary Privileges | If unverified user data can reach the `run` or `create` method it can result in running arbitrary container. | | Uncontrolled Resource Consumption | The application was found using the `requests` module without configuring a timeout value forconnections. This could lead to uncontrolled resource consumption where the application couldrun out ofsocket descriptors, effectively causing a Denial of Service (DoS).To remediate this issue, pass in a `timeout=` argument to each `requests` call.Example using a timeout for an HTTP GET request:# Issue a GET request to [https://example.com](https://example.com) with a timeout of 10 secondsresponse = requests.get(‘[https://example.com](https://example.com) ’, timeout=10)# Work with the response object# …For more information on using the requests module see:- [https://requests.readthedocs.io/en/latest/api/](https://requests.readthedocs.io/en/latest/api/) |

| Uncontrolled Resource Consumption | Django REST framework configuration is missing default rate- limiting options. This could inadvertently allow resource starvation or Denial of Service (DoS) attacks. Add ‘DEFAULT\_THROTTLE\_CLASSES’ and ‘DEFAULT\_THROTTLE\_RATES’ to add rate-limiting to your application. | | Cross-Site Request Forgery (CSRF) | Automatic check of cross-site request forgery tokens has been explicitly disabled globally, which might leave views unprotected. Use ‘pyramid.config.Configurator.set\_default\_csrf\_options(require\_csrf=True)’ to turn the automatic check for all unsafe methods (per RFC2616). | | Cross-Site Request Forgery (CSRF) | CSRF protection is disabled for this view. This is a security risk. | | Cross-Site Request Forgery (CSRF) | Origin check for the CSRF token is disabled for this view. This might represent a security risk if the CSRF storage policy is not known to be secure. | | Cross-Site Request Forgery (CSRF) | Automatic check of the referrer for cross-site request forgery tokens has been explicitly disabled globally, which might leave views unprotected when an unsafe CSRF storage policy is used. Use ‘pyramid.config.Configurator.set\_default\_csrf\_options(check\_origin=True)’ to turn the automatic check for all unsafe methods (per RFC2616). | | Cross-Site Request Forgery (CSRF) | Setting ‘WTF\_CSRF\_ENABLED’ to ‘False’ explicitly disables CSRF protection. | | Cross-Site Request Forgery (CSRF) | Detected usage of @csrf\_exempt, which indicates that there is no CSRF token set for this route. This could lead to an attacker manipulating the user’s account and exfiltration of private data. Instead, create a function without this decorator. | | Unprotected Transport of Credentials | Authentication detected over HTTP. HTTP does not provide any encryption or protection for these authentication credentials. This may expose these credentials to unauthorized parties. Use ‘https://’ instead. | | Weak Password Requirements | ‘$VAR’ is the empty string and is being used to set the password on ‘$MODEL’. If you meant to set an unusable password, set the password to None or call ‘set\_unusable\_password()’. | | Weak Password Requirements | ‘$VAR’ is using the empty string as its default and is being used to set the password on ‘$MODEL’. If you meant to set an unusable password, set the default value to ‘None’ or call ‘set\_unusable\_password()’. | | Weak Password Requirements | The password on ‘$MODEL’ is being set without validating the password. Call django.contrib.auth.password\_validation.validate\_password() with validation functions before setting the password. See [https://docs.djangoproject.com/en/3.0/topics/auth/passwords/](https://docs.djangoproject.com/en/3.0/topics/auth/passwords/) for more information. | | Improper Neutralization of Special Elements in Output Used by a Downstream Component (‘Injection’) | Found request data in ‘send\_mail(…)’ that uses ‘html\_message’. This is dangerous because HTML emails are susceptible to XSS. An attacker could inject data into this HTML email, causing XSS. | | Improper Neutralization of Special Elements in Output Used by a Downstream Component (‘Injection’) | Found request data in an EmailMessage that is set to use HTML. This is dangerous because HTML emails are susceptible to XSS. An attacker could inject data into this HTML email, causing XSS. | | Insufficiently Protected Credentials | Password is exposed through JWT token payload. This is not encrypted and the password could be compromised. Do not store passwords in JWT tokens. | | Insufficiently Protected Credentials | The object is passed strictly to jwt.encode(…) Make sure that sensitive information is not exposed through JWT token payload. | | Improper Encoding or Escaping of Output | The application was found using Jinja2 `Environment` without autoescaping enabled. If using inthe context of HTML this could lead to Cross-Site Scripting (XSS) attacks when rendering withuser-supplied input.Unfortunately, Jinja2 does not support context-aware escaping, meaning it is insufficient toprotect againstXSS for the various web contexts. It is important to encode the data depending on the specificcontextitis used in. There are at least six context alert`1`",))# Sample template:""" My Webpage My Webpage {{ html\_context }} link {{ script\_context escape\_js }}“““For more information on autoescape see:- [https://jinja.palletsprojects.com/en/3.1.x/api/#autoescapingFor](https://jinja.palletsprojects.com/en/3.1.x/api/#autoescapingFor) more information on XSS see OWASP:- [https://cheatsheetseries.owasp.org/cheatsheets/Cross\_Site\_Scripting\_Prevention\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) |

| Improper Encoding or Escaping of Output | Detected a Jinja2 environment with ‘autoescaping’ disabled. This is dangerous if you are rendering to a browser because this allows for cross-site scripting (XSS) attacks. If you are in a web context, enable ‘autoescaping’ by setting ‘autoescape=True.’ You may also consider using ‘jinja2.select\_autoescape()’ to only enable automatic escaping for certain file extensions. | | Improper Encoding or Escaping of Output | Detected a Jinja2 environment without autoescaping. Jinja2 does not autoescape by default. This is dangerous if you are rendering to a browser because this allows for cross-site scripting (XSS) attacks. If you are in a web context, enable autoescaping by setting ‘autoescape=True.’ You may also consider using ‘jinja2.select\_autoescape()’ to only enable automatic escaping for certain file extensions. | | Improper Restriction of Recursive Entity References in DTDs (‘XML Entity Expansion’) | Detected use of xmlrpc. xmlrpc is not inherently safe from vulnerabilities. Use defusedxml.xmlrpc instead. | | Sensitive Cookie with Improper SameSite Attribute | Found a Pyramid cookie without the samesite option correctly set. Pyramid cookies should be handled securely by setting samesite=‘Lax’ in response.set\_cookie(…). If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie with Improper SameSite Attribute | Found a Pyramid Authentication Ticket without the samesite option correctly set. Pyramid cookies should be handled securely by setting samesite=‘Lax’. If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Sensitive Cookie with Improper SameSite Attribute | Found a Pyramid cookie using an unsafe value for the samesite option. Pyramid cookies should be handled securely by setting samesite=‘Lax’ in response.set\_cookie(…). If this parameter is not properly set, your cookies are not properly protected and are at risk of being stolen by an attacker. | | Use of Incorrectly-Resolved Name or Reference | Untrusted user input in `importlib.import_module()` function allows an attacker to load arbitrary code. Avoid dynamic values in `importlib.import_module()` or use a whitelist to prevent running untrusted code. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | The Python ‘compile’ function is not secure against maliciously constructed input | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | The Python ‘subprocess’ module called with ‘shell=True’ may allow for shell injection | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Detected the use of `exec/eval`.This can be dangerous if used to evaluate dynamic content. If this content can be input from outside the program, this may be a code injection vulnerability. Ensure evaluated content is not definable by external sources. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user controlled content in `run_string`. This is dangerous because it allows a malicious actor to run arbitrary Python code. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user controlled content in `run_in_subinterp`. This is dangerous because it allows a malicious actor to run arbitrary Python code. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user controlled data inside InteractiveConsole/InteractiveInterpreter method. This is dangerous if external data can reach this function call because it allows a malicious actor to run arbitrary Python code. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Detected user data flowing into eval. This is code injection and should be avoided. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Detected user data flowing into exec. This is code injection and should be avoided. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Detected the use of exec(). exec() can be dangerous if used to evaluate dynamic content. If this content can be input from outside the program, this may be a code injection vulnerability. Ensure evaluated content is not definable by external sources. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user controlled content in `run_string`. This is dangerous because it allows a malicious actor to run arbitrary Python code. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found dynamic content in `run_string`. This is dangerous if external data can reach this function call because it allows a malicious actor to run arbitrary Python code. Ensure no external data reaches here. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user controlled data inside InteractiveConsole/InteractiveInterpreter method. This is dangerous if external data can reach this function call because it allows a malicious actor to run arbitrary Python code. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Annotations passed to `typing.get_type_hints` are evaluated in `globals` and `locals` namespaces. Make sure that no arbitrary value can be written as the annotation and passed to `typing.get_type_hints` function. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user controlled content in `run_in_subinterp`. This is dangerous because it allows a malicious actor to run arbitrary Python code. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found dynamic content in `run_in_subinterp`. This is dangerous if external data can reach this function call because it allows a malicious actor to run arbitrary Python code. Ensure no external data reaches here. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Detected the use of eval(). eval() can be dangerous if used to evaluate dynamic content. If this content can be input from outside the program, this may be a code injection vulnerability. Ensure evaluated content is not definable by external sources. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found dynamic content inside InteractiveConsole/InteractiveInterpreter method. This is dangerous if external data can reach this function call because it allows a malicious actor to run arbitrary Python code. Ensure no external data reaches here. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Because portions of the logging configuration are passed through eval(), use of this function may open its users to a security risk. While the function only binds to a socket on localhost, and so does not accept connections from remote machines, there are scenarios where untrusted code could be run under the account of the process which calls listen(). To avoid this happening, use the `verify()` argument to `listen()` to prevent unrecognized configurations. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user data in a call to ’eval’. This is extremely dangerous because it can enable an attacker to execute arbitrary remote code on the system. Instead, refactor your code to not use ’eval’ and instead use a safe library for the specific functionality you need. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user data in a call to ’exec’. This is extremely dangerous because it can enable an attacker to execute arbitrary remote code on the system. Instead, refactor your code to not use ’eval’ and instead use a safe library for the specific functionality you need. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user data in a call to ’exec’. This is extremely dangerous because it can enable an attacker to execute arbitrary remote code on the system. Instead, refactor your code to not use ’eval’ and instead use a safe library for the specific functionality you need. | | Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’) | Found user data in a call to ’eval’. This is extremely dangerous because it can enable an attacker to execute remote code. See [https://owasp.org/www-community/attacks/Code\_Injection](https://owasp.org/www-community/attacks/Code_Injection) for more information. | | Active Debug Code | The Flask application is running with `debug=True` configured. By enabling this option, certainexceptions or errors could cause sensitive information to be leaked in HTTP responses.Additionally, it is not recommended to run a Flask application using `Flask.run(...)` inproduction. Instead, a WSGI server such ([https://flask.palletsprojects.com/en/2.3.x/deploying/gunicorn/)or](https://flask.palletsprojects.com/en/2.3.x/deploying/gunicorn/%29or) [waitress](https://flask.palletsprojects.com/en/2.3.x/deploying/waitress/) be used instead.For more information on deployment options for Flask applications see:- [https://flask.palletsprojects.com/en/2.3.x/deploying/](https://flask.palletsprojects.com/en/2.3.x/deploying/) | | Active Debug Code | Detected Flask app with debug=True. Do not deploy to production with this flag enabled as it will leak sensitive information. Instead, consider using Flask configuration variables or setting ‘debug’ using system environment variables. | | Active Debug Code | Hardcoded variable `TESTING` detected. Use environment variables or config files instead | | Active Debug Code | Hardcoded variable `ENV` detected. Set this by using FLASK\_ENV environment variable | | Active Debug Code | Hardcoded variable `DEBUG` detected. Set this by using FLASK\_DEBUG environment variable | | Active Debug Code | Detected a debug template tag in a Django template. This dumps debugging information to the page when debug mode is enabled. Showing debug information to users is dangerous because it may reveal information about your environment that malicious actors can use to gain access to the system. Remove the debug tag. | | External Control of File Name or Path | Detected a user-controlled `filename` that could flow to `flask.send_file()` function. This could lead to an attacker reading arbitrary file from the system, leaking private information. Make sure to properly sanitize filename or use `flask.send_from_directory` | | Incorrect Default Permissions | These permissions `\$BITS` are widely permissive and grant access to more people than may be necessary. A good default is `0o644` which gives read and write access to yourself and read access to everyone else. | | Cryptographic Issues | An IPMI-related module is being imported. IPMI is considered insecure. Use an encryptedprotocol. | | Cryptographic Issues | Weak or insecure ‘ssl’ module usage | | Cryptographic Issues | The Python third-party ‘requests’ module used with SSL verification disabled | | Cryptographic Issues | The Python third-party ‘duo\_client’ module used with SSL verfication disabled | | Cryptographic Issues | Weak or insecure ‘onelogin’ module attribute usage | | Cryptographic Issues | Weak or insecure ‘cryptography’ module attribute usage | | Cryptographic Issues | Weak or insecure ‘xmlsec’ module attribute usage | | Cryptographic Issues | The Python third-party ‘itsdangerous’ module used with ’none’ signing algorithm | | Key Exchange without Entity Authentication | The application was found to ignore host keys. Host keys are important asthey provide assurance that the client can prove that the host is trusted.By ignoring these host keys, it is impossible for the client to validate theconnection is to a trusted host.To remediate this issue, remove the call to `set_missing_host_key_policy(...)` whichsets the host key policy. Instead, load key files using either `load_system_host_keys`or `load_host_keys` to only allow known good hosts. By not setting a host key policyfor unknown hosts, `paramiko`’s default policy is to use `RejectPolicy`.Example configuration connecting to a known, trusted host, and not allowing connectionsto unknown hosts:import paramiko# Create an SSH clientwith paramiko.SSHClient() as ssh: # Load the system host keys so we can confirm the # host we are connecting to is legitimate ssh.load\_system\_host\_keys(’/home/appuser/.ssh/known\_hosts’) # Connect to the remote host using our SSH private key ssh.connect(hostname=‘example.org’, port=22, username=‘appuser’, key\_filename=’/home/appuser/.ssh/private\_key’)For more information on `set_missing_host_key_policy` see:- [https://docs.paramiko.org/en/stable/api/client.html#paramiko.client.SSHClient.set\_missing\_host\_key\_policy](https://docs.paramiko.org/en/stable/api/client.html#paramiko.client.SSHClient.set_missing_host_key_policy) |

| Key Exchange without Entity Authentication | Detected a paramiko host key policy that implicitly trusts a server’s host key. Host keys should be verified to ensure the connection is not to a malicious server. Use RejectPolicy or a custom subclass instead. | | Use of Unmaintained Third Party Components | The application was detected importing `pycrypto`. This package has been deprecated as itcontainssecurity vulnerabilities.To remediate this issue, consider using the [cryptography](https://cryptography.io/) package instead. | | Use of Unmaintained Third Party Components | The Python ‘dl’ module may cause segmentation faults or other incorrect behavior | | Use of Unmaintained Third Party Components | The Python ‘gl’ module may cause core dumps or other unsafe behavior | | Use of Unmaintained Third Party Components | The Python third-party ‘Crypto’ module is unmaintained and has known vulnerabilities and exploits | | Improper Authorization in Handler for Custom URL Scheme | The application was found passing in a non-literal value to the `urllib` methods which issuerequests. `urllib` supports the `file://` scheme, which may allow an adversary who can controlthe URL value to read arbitrary files on the file system.To remediate this issue either hardcode the URLs being used in urllib or use the `requests`module instead.Example using the `requests` module to issue an HTTPS request:import requests# Issue a GET request to [https://example.com](https://example.com) with a timeout of 10 secondsresponse = requests.get(‘[https://example.com](https://example.com) ’, timeout=10)# Work with the response object# … |

| Improper Authorization in Handler for Custom URL Scheme | Detected a dynamic value being used with urllib. urllib supports `file://` schemes, so adynamic value controlled by a malicious actor may allow them to read arbitrary files. Audituses of urllib calls to ensure user data cannot control the URLs, or consider using the`requests` library instead. | | Improper Authorization in Handler for Custom URL Scheme | Detected a dynamic value being used with urllib. urllib supports ‘file://’ schemes, so a dynamic value controlled by a malicious actor may allow them to read arbitrary files. Audit uses of urllib calls to ensure user data cannot control the URLs, or consider using the ‘requests’ library instead. | | Improper Check for Unusual or Exceptional Conditions | The application was found using `assert` in non-test code. Usually reserved for debug and testcode, the `assert`function is commonly used to test conditions before continuing execution. However, enclosedcode will be removedwhen compiling Python code to optimized byte code. Depending on the assertion and subsequentlogic, this couldlead to undefined behavior of the application or application crashes.To remediate this issue, remove the `assert` calls. If necessary, replace them with either `if`conditions or`try/except` blocks.Example using `try/except` instead of `assert`:# Below try/except is equal to the assert statement of:# assert user.is\_authenticated(), “user must be authenticated"try: if not user.is\_authenticated(): raise AuthError(“user must be authenticated”)except AuthError as e: # Handle error # … # Return, do not continue processing return |

| Improper Check for Unusual or Exceptional Conditions | The application was found using `assert` in non-test code. Usually reserved for debug and testcode, the `assert`function is commonly used to test conditions before continuing execution. However, enclosedcode will be removedwhen compiling Python code to optimized byte code. Depending on the assertion and subsequentlogic, this couldlead to undefined behavior of the application or application crashes.To remediate this issue, remove the `assert` calls. If necessary, replace them with either `if`conditions or`try/except` blocks.Example using `try/except` instead of `assert`:# Below try/except is equal to the assert statement of:# assert user.is\_authenticated(), “user must be authenticated"try: if not user.is\_authenticated(): raise AuthError(“user must be authenticated”)except AuthError as e: # Handle error # … # Return, do not continue processing return |

| Improper Neutralization of Wildcards or Matching Symbols | Detected use of the wildcard character in a system call that spawns a shell.This subjects thewildcard to normal shell expansion, which can have unintended consequences if there exist anynon-standard file names. Consider a file named `-e sh script.sh`. | | Improper Neutralization of Wildcards or Matching Symbols | Detected use of the wildcard character in a system call that spawns a shell. This subjects the wildcard to normal shell expansion, which can have unintended consequences if there exist any non-standard file names. Consider a file named ‘-e sh script.sh’ – this will execute a script when ‘rsync’ is called. See [https://www.defensecode.com/public/DefenseCode\_Unix\_WildCards\_Gone\_Wild.txt](https://www.defensecode.com/public/DefenseCode_Unix_WildCards_Gone_Wild.txt) for more information. | | Missing Encryption of Sensitive Data | Warnings disabled on insecure network requests with Python ‘urllib3’ module | | Missing Encryption of Sensitive Data | The Python ‘urllib3’ module used with SSL verfication disabled | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Mass assignment detected. This can result in assignment to model fields that are unintended and can be exploited by an attacker. Instead of using ‘\*\*request.$W’, assign each field you want to edit individually to prevent mass assignment. You can read more about mass assignment at [https://cheatsheetseries.owasp.org/cheatsheets/Mass\_Assignment\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html) . | | Improperly Controlled Modification of Dynamically-Determined Object Attributes | Detected user input used to manually construct a SQL string. This is usually bad practice because manual construction could accidentally result in a SQL injection. An attacker could use a SQL injection to steal or modify contents of the database. Instead, use a parameterized query which is available by default in most database engines. Alternatively, consider using the Django object-relational mappers (ORM) instead of raw SQL queries. | | Inefficient Regular Expression Complexity | Detected usage of re.compile with an inefficient regular expression. This can lead to regular expression denial of service, which can result in service down time. Instead, check all regexes or use safer alternatives such as pyre2. | | Improper Access Control | Consider possible security implications associated with httpoxy module. | | Flask HTTP route $ROUTE will handle $METHOD requests | Flask HTTP route $ROUTE will handle $METHOD requests | | Improper Check or Handling of Exceptional Conditions | Try, Except, Continue | | Improper Check or Handling of Exceptional Conditions | Try, Except, Pass | | `break`, `continue`, or `return` in a `finally` block | Having a `break`, `continue`, or `return` in a `finally` block will cause strange behaviors, like exceptions not being caught. | | Socket is not closed if shutdown fails | Socket is not closed if shutdown fails. When socket.shutdown fails on an OSError, socket.close is not called and the code fails to clean up the socket and allow garbage collection to release the memory used for it. The OSError on shutdown can occur when the remote side of the connection closes the connection first. | | Permission Race Condition During Resource Copy | The Python ’tempfile.mktemp’ function allows for race conditions | | Exposure of Sensitive System Information to an Unauthorized Control Sphere | The Python ‘xmlrpc’ module used with ‘allow\_dotted\_names’ is not secure against maliciously constructed input | | Improper Neutralization of Directives in Statically Saved Code (‘Static Code Injection’) | Found a template created with string formatting. This is susceptible to server-side template injection and cross-site scripting attacks. | | Improper Neutralization of Directives in Statically Saved Code (‘Static Code Injection’) | Found non static data as an index to ‘globals()’. This is extremely dangerous because it allows an attacker to execute arbitrary code on the system. Refactor your code not to use ‘globals()’. | | Improper Neutralization of Directives in Statically Saved Code (‘Static Code Injection’) | Using ’locals()’ as a context to ‘render(…)’ is extremely dangerous. This exposes Python functions to the template that were not meant to be exposed. An attacker could use these functions to execute code that was not intended to run and could compromise the application. (This is server-side template injection (SSTI)). Do not use ’locals()’. Instead, specify each variable in a dictionary or ‘django.template.Context’ object, like ‘{“var1”: “hello”}’ and use that instead. | | Improper Neutralization of Directives in Statically Saved Code (‘Static Code Injection’) | Using ‘globals()’ as a context to ‘render(…)’ is extremely dangerous. This exposes Python functions to the template that were not meant to be exposed. An attacker could use these functions to execute code that was not intended to run and could compromise the application. (This is server-side template injection (SSTI)). Do not use ‘globals()’. Instead, specify each variable in a dictionary or ‘django.template.Context’ object, like ‘{“var1”: “hello”}’ and use that instead. | | Improper Neutralization of Directives in Statically Saved Code (‘Static Code Injection’) | Found a template created with string formatting. This is susceptible to server-side template injection and cross-site scripting attacks. | | Improper Neutralization of Directives in Statically Saved Code (‘Static Code Injection’) | Found request data as an index to ‘globals()’. This is extremely dangerous because it allows an attacker to execute arbitrary code on the system. Refactor your code not to use ‘globals()’. | | Looks like `\$R` is a flask function handler that registered to two different routes | Looks like `\$R` is a flask function handler that registered to two different routes. This will cause a runtime error | | Accessing request object inside a route handle for HTTP GET command will throw due to missing request body. | Accessing request object inside a route handle for HTTP GET command will throw due to missing request body. | | Use Flask helper method flask.jsonify() | flask.jsonify() is a Flask helper method which handles the correct settings for returning JSON from Flask routes | | Flask class method GET with side effects | Flask class method GET with side effects | | Flask-caching doesn’t cache query strings by default | Flask-caching doesn’t cache query strings by default. You have to use `query_string=True`. Also you shouldn’t cache verbs that can mutate state. | | Use `click.secho(\$X)` instead | Use `click.secho(\$X)` instead. It combines click.echo() and click.style(). | | .delete().where(…) results in a no-op in SQLAlchemy unless the command is executed | .delete().where(…) results in a no-op in SQLAlchemy unless the command is executed, use .filter(…).delete() instead. | | Only comparison operators should be used inside SQLAlchemy filter expressions | Only comparison operators should be used inside SQLAlchemy filter expressions. Use `==` instead of `is`, `!=` instead of `is not`, `sqlalchemy.and_` instead of `and`, `sqlalchemy.or_` instead of `or`, `sqlalchemy.not_` instead of `not`, and `sqlalchemy.in_` instead of `in_`. | | Using QUERY.count() instead of len(QUERY.all()) | Using QUERY.count() instead of len(QUERY.all()) sends less data to the client since the SQLAlchemy method is performed server-side. | | Rather than adding one element at a time, consider batch loading to improve performance. | Rather than adding one element at a time, consider batch loading to improve performance. | | Use of Obsolete Function | Warning MONGODB-CR was deprecated with the release of MongoDB 3.6 and is no longer supported by MongoDB 4.0 (see [https://api.mongodb.com/python/current/examples/authentication.html](https://api.mongodb.com/python/current/examples/authentication.html) for details). | | The requests library has a convenient shortcut for reading JSON responses | The requests library has a convenient shortcut for reading JSON responses, which lets you stop worrying about deserializing the response yourself. | | There’s an HTTP request made with requests, but the raise\_for\_status() utility method isn’t used | There’s an HTTP request made with requests, but the raise\_for\_status() utility method isn’t used. This can result in request errors going unnoticed and your code behaving in unexpected ways, such as if your authorization API returns a 500 error while you’re only checking for a 401. | | The requests library has a convenient shortcut for sending JSON requests | The requests library has a convenient shortcut for sending JSON requests, which lets you stop worrying about serializing the body yourself. To use it, replace `body=json.dumps(...)` with `json=...`. | | Detected a ‘requests’ call without a timeout set | Detected a ‘requests’ call without a timeout set. By default, ‘requests’ calls wait until the connection is closed. This means a ‘requests’ call without a timeout will hang the program if a response is never received. Consider setting a timeout for all ‘requests’. | | source\_hash’ is only available on Python 3.7+ | source\_hash’ is only available on Python 3.7+. This does not work in lower versions, and therefore is not backwards compatible. Instead, use another hash function. | | Found ‘importlib.resources’, which is a module only available on Python 3.7+ | Found ‘importlib.resources’, which is a module only available on Python 3.7+. This does not work in lower versions, and therefore is not backwards compatible. Use importlib\_resources instead for older Python versions. | | Found usage of the ‘blocksize’ argument in a HTTPConnection call | Found usage of the ‘blocksize’ argument in a HTTPConnection call. This is only available on Python 3.7+ and is therefore not backwards compatible. Remove this in order for this code to work in Python 3.6 and below. | | Found usage of the ‘blocksize’ argument in a HTTPSConnection call | Found usage of the ‘blocksize’ argument in a HTTPSConnection call. This is only available on Python 3.7+ and is therefore not backwards compatible. Remove this in order for this code to work in Python 3.6 and below. | | Found usage of ‘importlib.abc.ResourceReader’ | Found usage of ‘importlib.abc.ResourceReader’. This module is only available on Python 3.7+ and is therefore not backwards compatible. Instead, use another loader. | | Found usage of ‘importlib.abc.ResourceReader’ | Found usage of ‘importlib.abc.ResourceReader’. This module is only available on Python 3.7+ and is therefore not backwards compatible. Instead, use another loader. | | IPv6Network.subnet\_of is only available on Python 3.7+ and is therefore not backwards compatible | IPv6Network.subnet\_of is only available on Python 3.7+ and is therefore not backwards compatible. Instead, check if the subnet is in ‘subnets’. | | IPv6Network.supernet\_of is only available on Python 3.7+ and is therefore not backwards compatible | IPv6Network.supernet\_of is only available on Python 3.7+ and is therefore not backwards compatible. Instead, check if the supernet is in ‘supernet’. | | IPv4Network.subnet\_of is only available on Python 3.7+ and is therefore not backwards compatible | IPv4Network.subnet\_of is only available on Python 3.7+ and is therefore not backwards compatible. Instead, check if the subnet is in ‘subnets’. | | IPv4Network.supernet\_of is only available on Python 3.7+ and is therefore not backwards compatible | IPv4Network.supernet\_of is only available on Python 3.7+ and is therefore not backwards compatible. Instead, check if the supernet is in ‘supernet’. | | Found usage of the ‘monetary’ argument in a function call of ’locale.format\_string’ | Found usage of the ‘monetary’ argument in a function call of ’locale.format\_string’. This is only available on Python 3.7+ and is therefore not backwards compatible. Instead, remove the ‘monetary’ argument. | | math.remainder is only available on Python 3.7+ and is therefore not backwards compatible | math.remainder is only available on Python 3.7+ and is therefore not backwards compatible. Instead, use math.fmod() or calculate $X - n\* $Y. | | multiprocessing.Process.close() is only available on Python 3.7+ and is therefore not backwards compatible | multiprocessing.Process.close() is only available on Python 3.7+ and is therefore not backwards compatible. Instead, use join(). | | multiprocessing.Process.kill() is only available on Python 3.7+ and is therefore not backwards compatible | multiprocessing.Process.kill() is only available on Python 3.7+ and is therefore not backwards compatible. Instead, use terminate(). | | os.preadv() is only available on Python 3.7+ and is therefore not backwards compatible | os.preadv() is only available on Python 3.7+ and is therefore not backwards compatible. Instead, use a combination of os.readv() and os.pread(). | | os.pwritev() is only available on Python 3.3+ and is therefore not backwards compatible | os.pwritev() is only available on Python 3.3+ and is therefore not backwards compatible. Instead, use a combination of pwrite() and writev(). | | pdb.set\_trace() with the header argument is only available on Python 3.7+ and is therefore not backwards compatible | pdb.set\_trace() with the header argument is only available on Python 3.7+ and is therefore not backwards compatible. Instead, use set\_trace() without the header argument. | | Function is only available on Python 3.6+ | this function is only available on Python 3.6+ | | The `errors` argument to Popen is only available on Python 3.6+ | the `errors` argument to Popen is only available on Python 3.6+ | | The `encoding` argument to Popen is only available on Python 3.6+ | the `encoding` argument to Popen is only available on Python 3.6+ | | Improper Neutralization of Formula Elements in a CSV File | Detected the generation of a CSV file using the built-in `csv` module. If user data is used to generate the data in this file, it is possible that an attacker could inject a formula when the CSV is imported into a spreadsheet application that runs an attacker script, which could steal data from the importing user or, at worst, install malware on the user’s computer. `defusedcsv` is a drop-in replacement with the same API that will attempt to mitigate formula injection attempts. You can use `defusedcsv` instead of `csv` to safely generate CSVs. | | Improper Neutralization of Formula Elements in a CSV File | Detected user input into a generated CSV file using the built-in `csv` module. If user data is used to generate the data in this file, it is possible that an attacker could inject a formula when the CSV is imported into a spreadsheet application that runs an attacker script, which could steal data from the importing user or, at worst, install malware on the user’s computer. `defusedcsv` is a drop-in replacement with the same API that will attempt to mitigate formula injection attempts. You can use `defusedcsv` instead of `csv` to safely generate CSVs. | | Improper Neutralization of Formula Elements in a CSV File | Detected user input into a generated CSV file using the built-in `csv` module. If user data is used to generate the data in this file, it is possible that an attacker could inject a formula when the CSV is imported into a spreadsheet application that runs an attacker script, which could steal data from the importing user or, at worst, install malware on the user’s computer. `defusedcsv` is a drop-in replacement with the same API that will attempt to mitigate formula injection attempts. You can use `defusedcsv` instead of `csv` to safely generate CSVs. | | if block checks for the same condition on both branches (`\$X`) | if block checks for the same condition on both branches (`\$X`) | | Useless if statement; both blocks have the same body | Useless if statement; both blocks have the same body | | code after return statement will not be executed | code after return statement will not be executed | | `return` only makes sense inside a function | `return` only makes sense inside a function | | key `\$X` is uselessly assigned twice | key `\$X` is uselessly assigned twice | | Useless assignment | key `\$Y` in `\$X` is assigned twice; the first assignment is useless | | Useless inner function | function `\$FF` is defined inside a function but never used | | Useless literal set | `\$X` is uselessly assigned twice inside the creation of the set | | Is function without parentheses | Is “$FUNC” a function or an attribute? If it is a function, you may have meant $X.$FUNC() because $X.$FUNC is always true. | | Improper list concat | This expression will evaluate to be ONLY value the of the `else` clause if the condition `\$EXPRESSION` is false. If you meant to do list concatenation, put parentheses around the entire concatenation expression, like this: `['a', 'b', 'c'] + (['d'] if x else ['e'])`. If this is the intended behavior, the expression may be confusing to others, and you may wish to add parentheses for readability. | | Writing to file in read mode | The file object ‘$FD’ was opened in read mode, but is being written to. This will cause a runtime error. | | Use `sys.exit` over the python shell `exit` built-in | Detected use of `exit`. Use `sys.exit` over the python shell `exit` built-in. `exit` is a helper for the interactive shell and may not be available on all Python implementations. | | Synchronous time.sleep in async code will block the event loop | Synchronous time.sleep in async code will block the event loop and not allow other tasks to execute. Use asyncio.sleep() instead. | | snapshot.assert\_match makes use of pathlib to create files | snapshot.assert\_match makes use of pathlib to create files. Patching $METHOD may result in unexpected snapshot behavior | | Remove pdb | pdb is an interactive debugging tool and you may have forgotten to remove it before committing your code | | List is modified while in a for loop | It appears that `\$LIST` is a list that is being modified while in a for loop. This will likely cause a runtime error or an infinite loop. | | Values returned by thread pool map must be read in order to raise exceptions | Values returned by thread pool map must be read in order to raise exceptions. Consider using `for _ in \$EXECUTOR.map(...): pass`. | | `return` should never appear inside a class **init** function | `return` should never appear inside a class **init** function. This will cause a runtime error. | | `yield` should never appear inside a class **init** function | `yield` should never appear inside a class **init** function. This will cause a runtime error. | | Cannot cache generators | Generators can only be consumed once, so in most cases, caching them will cause an error when the already-consumed generator is retrieved from cache. | | Detected a file object that is redefined and never closed | Detected a file object that is redefined and never closed. This could leak file descriptors and unnecessarily consume system resources. | | Baseclass attribute- override | Class $C inherits from both `\$A` and `\$B` which both have a method named `\$F`; one of these methods will be overwritten. | | Unchecked subprocess call | This is not checking the return value of this subprocess call; if it fails no exception will be raised. Consider subprocess.check\_call() instead | | Dict with items being deleted while in a for loop | It appears that `\$DICT[\$KEY]` is a dict with items being deleted while in a for loop. This is usually a bad idea and will likely lead to a RuntimeError: dictionary changed size during iteration | | Using strings as booleans in Python has unexpected results | Using strings as booleans in Python has unexpected results. `"one" and "two"` will return “two”. `"one" or "two"` will return “one”. In Python, strings are truthy, and strings with a non-zero length evaluate to True. | | Useless eqeq | This expression is always True: `\$X == \$X` or `\$X != \$X`. If testing for floating point NaN, use `math.isnan(\$X)`, or `cmath.isnan(\$X)` if the number is complex. | | `pass` is the body of function | `pass` is the body of function $X. Consider removing this or raise NotImplementedError() if this is a TODO | | `pass` body range | `pass` is the body of for $X in $Y. Consider removing this or raise NotImplementedError() if this is a TODO | | Importing the python debugger | Importing the python debugger; did you mean to leave this in? | | Missing hash with `__eq__` | Class `\$A` has defined `__eq__` which means it should also have defined `__hash__`; | | Arbitrary time.sleep() | time.sleep() call; did you mean to leave this in? | | Manually creating a defaultdict - dics | manually creating a defaultdict - use collections.defaultdict(dict) | | Manually creating a defaultdict - set | manually creating a defaultdict - use collections.defaultdict(set) | | Manually creating a defaultdict - list | manually creating a defaultdict - use collections.defaultdict(list) | | Manually creating a counter | manually creating a counter - use collections.Counter | | Detected hardcoded temp directory | Detected hardcoded temp directory. Consider using ’tempfile.TemporaryFile’ instead. | | file object opened without corresponding close | file object opened without corresponding close | | Errors should only be logged when handled | Errors should only be logged when handled. The code logs the error and propogates the exception, consider reducing the level to warning or info. | | Unspecified open encoding | Missing ’encoding’ parameter. ‘open()’ uses device locale encodings by default, corrupting files with special characters. Specify the encoding to ensure cross-platform support when opening files in text mode (e.g. encoding=“utf-8”). | | The weak argument to django.dispatch.signals.Signal.disconnect() is removed in Django 2.0 | The weak argument to django.dispatch.signals.Signal.disconnect() is removed in Django 2.0. | | django.db.backends.base.BaseDatabaseOperations.check\_aggregate\_support() is removed in Django 2.0 | django.db.backends.base.BaseDatabaseOperations.check\_aggregate\_support() is removed in Django 2.0. | | The django.forms.extras package is removed in Django 2.0 | The django.forms.extras package is removed in Django 2.0. | | The assignment\_tag helper is removed in Django 2.0 | The assignment\_tag helper is removed in Django 2.0. | | The host argument to assertRedirects is removed in Django 2.0 | The host argument to assertRedirects is removed in Django 2.0. | | path for `\$URL` is uselessly assigned twice | path for `\$URL` is uselessly assigned twice | | The path for `\$URL` is assigned once to view `\$VIEW` and once to `\$DIFFERENT_VIEW`, which can lead to unexpected behavior | The path for `\$URL` is assigned once to view `\$VIEW` and once to `\$DIFFERENT_VIEW`, which can lead to unexpected behavior. Verify what the intended target view is and delete the other route. | | path for `\$URL` is assigned twice with different names | path for `\$URL` is assigned twice with different names | | Duplicate name assignment | The name `\$NAME` is used for both `\$URL` and `\$OTHER_URL`, which can lead to unexpected behavior when using URL reversing. Pick a unique name for each path. | | Avoid using null on string-based fields | Avoid using null on string-based fields such as CharField and TextField. If a string-based field has null=True, that means it has two possible values for “no data”: NULL, and the empty string. In most cases, it’s redundant to have two possible values for “no data;” the Django convention is to use the empty string, not NULL. | | String field must set null true | If a text field declares unique=True and blank=True, null=True must also be set to avoid unique constraint violations when saving multiple objects with blank values. | | Found a FloatField used for variable $F | Found a FloatField used for variable $F. Use DecimalField for currency fields to avoid float-rounding errors. | | Detected a django model `\$MODEL` is not calling super().save() inside of the save method. | Detected a django model `\$MODEL` is not calling super().save() inside of the save method. | | null=True should be set if blank=True is set on non-text fields. | null=True should be set if blank=True is set on non-text fields. | | You should use ITEM.user\_id rather than ITEM.user.id to prevent running an extra query. | You should use ITEM.user\_id rather than ITEM.user.id to prevent running an extra query. | | Looks like you are only accessing first element of an ordered QuerySet | Looks like you are only accessing first element of an ordered QuerySet. Use `latest()` or `earliest()` instead. See [https://docs.djangoproject.com/en/3.0/ref/models/querysets/#django.db.models.query.QuerySet.latest](https://docs.djangoproject.com/en/3.0/ref/models/querysets/#django.db.models.query.QuerySet.latest) | | Looks like you need to determine the number of records | Looks like you need to determine the number of records. Django provides the count() method which is more efficient than .len(). See [https://docs.djangoproject.com/en/3.0/ref/models/querysets/](https://docs.djangoproject.com/en/3.0/ref/models/querysets/) | | Use ‘django.db.models.OneToOneField’ instead of ‘ForeignKey’ with unique=True | Use ‘django.db.models.OneToOneField’ instead of ‘ForeignKey’ with unique=True. ‘OneToOneField’ is used to create one-to-one relationships. | | You are using environment variables inside django app | You are using environment variables inside django app. Use `django-environ` as it a better alternative for deployment. | | Use JsonResponse instead | Use JsonResponse instead | | Exposure of Resource to Wrong Sphere | Running flask app with host 0.0.0.0 could expose the server publicly. | | Exposure of Resource to Wrong Sphere | top-level app.run(…) is ignored by flask. Consider putting app.run(…) behind a guard, like inside a function | | Deprecated Flask API | deprecated Flask API | | These APIs are deprecated in Bokeh | These APIs are deprecated in Bokeh see [https://docs.bokeh.org/en/latest/docs/releases.html#api-deprecations](https://docs.bokeh.org/en/latest/docs/releases.html#api-deprecations) | | Command Shell in Externally Accessible Directory | Semgrep found a Python reverse shell using $BINPATH to $IP at $PORT | | In Python3, a runtime `TypeError` will be thrown if you attempt to raise an object or class which does not inherit from `BaseException` | In Python3, a runtime `TypeError` will be thrown if you attempt to raise an object or class which does not inherit from `BaseException` | | Use tempfile.NamedTemporaryFile instead | Use tempfile.NamedTemporaryFile instead. From the official Python documentation: THIS FUNCTION IS UNSAFE AND SHOULD NOT BE USED. The file name may refer to a file that did not exist at some point, but by the time you get around to creating it, someone else may have beaten you to the punch. | | Using ‘$F.name’ without ‘.flush()’ or ‘.close()’ may cause an error | Using ‘$F.name’ without ‘.flush()’ or ‘.close()’ may cause an error because the file may not exist when ‘$F.name’ is used. Use ‘.flush()’ or close the file before using ‘$F.name’. | | In Python ‘X is not …’ is different from ‘X is (not …)’ | In Python ‘X is not …’ is different from ‘X is (not …)’. In the latter the ’not’ converts the ‘…’ directly to boolean. | | Detected strings that are implicitly concatenated inside a list | Detected strings that are implicitly concatenated inside a list. Python will implicitly concatenate strings when not explicitly delimited. Was this supposed to be individual elements of the list? | | Found identical comparison using is | Found identical comparison using is. Ensure this is what you intended. | | Found string comparison using ‘is’ operator | Found string comparison using ‘is’ operator. The ‘is’ operator is for reference equality, not value equality, and therefore should not be used to compare strings. For more information, see [https://github.com/satwikkansal/wtfpython#-how-not-to-use-is-operator"](https://github.com/satwikkansal/wtfpython#-how-not-to-use-is-operator%22) | | Function $F mutates default list $D | Function $F mutates default list $D. Python only instantiates default function arguments once and shares the instance across the function calls. If the default function argument is mutated, that will modify the instance used by all future function calls. This can cause unexpected results, or lead to security vulnerabilities whereby one function consumer can view or modify the data of another function consumer. Instead, use a default argument (like None) to indicate that no argument was provided and instantiate a new list at that time. For example: `if \$D is None: \$D = []`. |

## Csharp [Copied!](#csharp "Copy link to this section")

Policy Name

Description

Server-Side Request Forgery (SSRF)

The web server receives a URL or similar request from an upstream component and retrieves the contents of this URL, but it does not sufficiently ensure that the request is being sent to the expected destination. Many different options exist to fix this issue depending the use case (Application can send request only to identified and trusted applications, Application can send requests to ANY external IP address or domain name).

Use of a Broken or Risky Cryptographic Algorithm

Usage of the insecure ECB mode detected. You should use an authenticated encryption mode instead, which is implemented by the classes AesGcm or ChaCha20Poly1305.

Use of a Broken or Risky Cryptographic Algorithm

Usage of deprecated cipher algorithm detected. Use Aes or ChaCha20Poly1305 instead.

Use of RSA Algorithm without OAEP

You are using the outdated PKCS#1 v1.5 encryption padding for your RSA key. Use the OAEP padding instead.

Improper Certificate Validation

The `ServicePointManager.ServerCertificateValidationCallback` event has been setto always return `true`, which effectively disables the validation of servercertificates.This allows for an adversary who is in between the application and the target host to interceptpotentially sensitive information or transmit malicious data.Remove the callback function that is returning true to allow normal certificate validation toproceed.When no callback is provided, the client will validate that the certificate name matches thehostnamethat was used when creating the request.For more information on the `ServerCertificateValidationCallback` property see:https://learn.microsoft.com/en-us/dotnet/api/system.net.servicepointmanager.servercertificatevalidationcallback

Improper Certificate Validation

Validating certificates based on subject name is bad practice. Use the X509Certificate2.Verify() method instead.

Improper Control of Generation of Code (‘Code Injection’)

User-controllable string passed to Razor.Parse. This leads directly to code execution in the context of the process.

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Restriction of XML External Entity Reference

External XML entities are a feature of XML parsers that allow documents to contain referencestoother documents or data. This feature can be abused to read files, communicate with externalhosts,exfiltrate data, or cause a Denial of Service (DoS).XML parsers and document loaders must be configured to not resolve entities. This can be donesettings.DtdProcessing = DtdProcessing.Prohibit;XmlReader reader = XmlReader.Create(path, settings);For more information on XML security, see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#net

Improper Restriction of XML External Entity Reference

External XML entities are a feature of XML parsers that allow documents to contain referencestoother documents or data. This feature can be abused to read files, communicate with externalhosts,exfiltrate data, or cause a Denial of Service (DoS).XML parsers and document loaders must be configured to not resolve entities. This can be donedocument.XmlResolver = null;document.Load(“users.xml”);For more information on XML security, see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#net

Improper Restriction of XML External Entity Reference

External XML entities are a feature of XML parsers that allow documents to contain referencestoother documents or data. This feature can be abused to read files, communicate with externalhosts,exfiltrate data, or cause a Denial of Service (DoS).XML parsers and document loaders must be configured to not resolve entities. This can be donedocument.XmlResolver = null;document.Load(“users.xml”);For more information on XML security, see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/XML\_External\_Entity\_Prevention\_Cheat\_Sheet.html#net

Improper Restriction of XML External Entity Reference

XmlReaderSettings found with DtdProcessing.Parse on an XmlReader handling a string argument from a public method. Enabling Document Type Definition (DTD) parsing may cause XML External Entity (XXE) injection if supplied with user-controllable data.

Improper Restriction of XML External Entity Reference

XmlReaderSettings found with DtdProcessing.Parse on an XmlReader handling a string argument from a public method. Enabling Document Type Definition (DTD) parsing may cause XML External Entity (XXE) injection if supplied with user-controllable data.

Improper Restriction of XML External Entity Reference

XmlReaderSettings found with DtdProcessing.Parse on an XmlReader handling a string argument from a public method. Enabling Document Type Definition (DTD) parsing may cause XML External Entity (XXE) injection if supplied with user-controllable data.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

String argument $A is used to read or write data from a file via Path.Combine without direct sanitization via Path.GetFileName. If the path is user-supplied data this can lead to path traversal.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Detected a formatted string in a SQL statement. This could lead to SQL injection if variables in the SQL statement are not properly sanitized. Use a prepared statements instead. You can obtain a PreparedStatement using ‘SqlCommand’ and ‘SqlParameter’.

Improper Neutralization of Special Elements used in an LDAP Query (‘LDAP Injection’)

LDAP queries are constructed dynamically on user-controlled input. This vulnerability in code could lead to an arbitrary LDAP query execution.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Cross Site Scripting (XSS) is an attack which exploits a web application or system to treatuser inputas markup or script code. It is important to encode the data depending on the specific contextitis used in. There are at least six context types:- Inside HTML tags `context 1`\- Inside attributes: \`\`- Inside event attributes `button`\- Inside script blocks: `var x = "context 4"`\- Unsafe element HTML assignment: `element.innerHTML = "context 5"`\- Inside URLs: `link`User input that is displayed within the application must be encoded, sanitized or validatedto ensure it cannot be treated as HTML or executed as Javascript code. Care must also betakento not mix server-side templating with client-side templating, as the server-side templatingwillnot encode things like {{ 7\*7 }} which may execute client-side templating features.It is _NOT_ advised to encode user input prior to inserting into a data store. The data willneed to beencoded depending on context of where it is output. It is much safer to force the displayingsystem tohandle the encoding and not attempt to guess how it should be encoded.Consider using built-in framework capabilities for automatically encoding user input.Dependingon output context, consider using the following `System.Text.Encodings.Web` encoders:- [HtmlEncoder](https://learn.microsoft.com/en-us/dotnet/api/system.text.encodings.web.htmlencoder) - [JavaScriptEncoder](https://learn.microsoft.com/en-us/dotnet/api/system.text.encodings.web.javascriptencoder) - [UrlEncoder](https://learn.microsoft.com/en-us/dotnet/api/system.text.encodings.web.urlencoder) For more information on protecting ASP.NET Core applications from XSS see:https://learn.microsoft.com/en-us/aspnet/core/security/cross-site-scripting#accessing-encoders-in-code

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Cross Site Scripting (XSS) is an attack which exploits a web application or system to treatuser inputas markup or script code. It is important to encode the data depending on the specific contextitis used in.User input that is used within the application scripts must be encoded, sanitized or validatedto ensure it cannot change the behavior of the Javascript code.It is _NOT_ advised to encode user input prior to inserting into a data store. The data willneed to beencoded depending on context of where it is output. It is much safer to force the displayingsystem tohandle the encoding and not attempt to guess how it should be encoded.Consider using built-in framework capabilities for automatically encoding user input.Dependingon output context, consider using the following `System.Text.Encodings.Web` encoders:- [HtmlEncoder](https://learn.microsoft.com/en-us/dotnet/api/system.text.encodings.web.htmlencoder) - [JavaScriptEncoder](https://learn.microsoft.com/en-us/dotnet/api/system.text.encodings.web.javascriptencoder) - [UrlEncoder](https://learn.microsoft.com/en-us/dotnet/api/system.text.encodings.web.urlencoder) For more information on protecting ASP.NET Core applications from XSS see:https://learn.microsoft.com/en-us/aspnet/core/security/cross-site-scripting#accessing-encoders-in-code

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Unencoded JSON in HTML context is vulnerable to cross-site scripting, because \`\` is not properly encoded.

Deserialization of Untrusted Data

Deserialization attacks exploit the process of reading serialized data and turning it back into anobject. By constructing malicious objects and serializing them, an adversary may attempt to:- Inject code that is executed upon object construction, which occurs during the deserialization process.- Exploit mass assignment by including fields that are not normally a part of the serialized data but are read in during deserialization.Microsoft recommends no longer using the following serialization formats:- BinaryFormatter- SoapFormatter- NetDataContractSerializer- LosFormatter- ObjectStateFormatterConsider safer alternatives such as serializing data in the JSON format. Ensure any format chosen allowsthe application to specify exactly which object types are allowed to be deserialized. Additionally, whendeserializing, never deserialize to base object types like `Object` and only cast to the exact objecttype that is expected.To protect against mass assignment, only allow deserialization of the specific fields that are required.If this is not easily done, consider creating an intermediary type that can be serialized with only thenecessary fields exposed.For more information see Microsoft’s deserialization security guide:https://learn.microsoft.com/en-us/dotnet/standard/serialization/binaryformatter-security-guideFor more details on deserialization attacks in general, see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/Deserialization\_Cheat\_Sheet.htmlIt should be noted that [tools exist](https://github.com/pwntester/ysoserial.net) to automatically createexploit code for these vulnerabilities.

Deserialization of Untrusted Data

The LosFormatter type is dangerous and is not recommended for data processing. Applications should stop using LosFormatter as soon as possible, even if they believe the data they’re processing to be trustworthy. LosFormatter is insecure and can’t be made secure

Deserialization of Untrusted Data

TypeNameHandling $TYPEHANDLER is unsafe and can lead to arbitrary code execution in the context of the process. Use a custom SerializationBinder whenever using a setting other than TypeNameHandling.None.

Deserialization of Untrusted Data

The BinaryFormatter type is dangerous and is not recommended for data processing. Applications should stop using BinaryFormatter as soon as possible, even if they believe the data they’re processing to be trustworthy. BinaryFormatter is insecure and can’t be made secure

Deserialization of Untrusted Data

The FsPickler is dangerous and is not recommended for data processing. Default configuration tend to insecure deserialization vulnerability.

Deserialization of Untrusted Data

The NetDataContractSerializer type is dangerous and is not recommended for data processing. Applications should stop using NetDataContractSerializer as soon as possible, even if they believe the data they’re processing to be trustworthy. NetDataContractSerializer is insecure and can’t be made secure

Deserialization of Untrusted Data

Using a .NET remoting service can lead to RCE, even if you try to configure TypeFilterLevel. Recommended to switch from .NET Remoting to WCF [https://docs.microsoft.com/en-us/dotnet/framework/wcf/migrating-from-net-remoting-to-wcf](https://docs.microsoft.com/en-us/dotnet/framework/wcf/migrating-from-net-remoting-to-wcf)

Deserialization of Untrusted Data

$type extension has the potential to be unsafe, so use it with common sense and known json sources and not public facing ones to be safe

Deserialization of Untrusted Data

The SimpleTypeResolver class is insecure and should not be used. Using SimpleTypeResolver to deserialize JSON could allow the remote client to execute malicious code within the app and take control of the web server.

Deserialization of Untrusted Data

Only use DataContractResolver if you are completely sure of what information is being serialized. Malicious types can cause unexpected behavior.

Deserialization of Untrusted Data

The SoapFormatter type is dangerous and is not recommended for data processing. Applications should stop using SoapFormatter as soon as possible, even if they believe the data they’re processing to be trustworthy. SoapFormatter is insecure and can’t be made secure

Exposure of Sensitive Information to an Unauthorized Actor

Sending the trusted CA list increases the size of the handshake request and can leak system configuration information.

URL Redirection to Untrusted Site (‘Open Redirect’)

The application may allow open redirects if created using user supplied input. Open redirectsarecommonlyabused in phishing attacks where the original domain or URL looks like a legitimate link, butthenredirects a user to a malicious site. An example would be`https://example.com/redirect?url=https://%62%61%64%2e%63%6f%6d%2f%66%61%6b%65%6c%6f%67%69%6e`which,when decoded, turns into `bad.com/fakelogin`.Never redirect a client based on user input. It is recommended that the list of target linkstoredirect a user to are contained server side, and retrieved using a numerical valueas an index to return the link to be redirected to. For example, `/redirect?id=1` would causetheapplication to look up the `1` index and return a URL such as `https://example.com`. This URLwouldthen be used to redirect the user, using the 301 response code and `Location` header.For more information on open redirects see OWASP’s guide:https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated\_Redirects\_and\_Forwards\_Cheat\_Sheet.html

URL Redirection to Untrusted Site (‘Open Redirect’)

A query string parameter may contain a URL value that could cause the web application to redirect the request to a malicious website controlled by an attacker. Make sure to sanitize this parameter sufficiently.

Sensitive Cookie Without ‘HttpOnly’ Flag

The `HttpOnly` attribute when set to `true` protects the cookie value from being accessed byclient side JavaScript suchas reading the `document.cookie` values. By enabling this protection, a website that isvulnerable toCross-Site Scripting (XSS) will be able to block malicious scripts from accessing the cookievalue from JavaScript.Example of protecting an HttpCsomeCookie.HttpOnly = true;For more information see:https://learn.microsoft.com/en-us/dotnet/api/system.web.httpcookie.httponlySession cookies should be configured with the following security directives:- [HTTPOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) - [Secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) - [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

The `Secure` attribute when set to `true` protects the cookie value from being beingtransmitted over clear textcommunication paths such as HTTP. By enabling this protection, the cookie will only be sentover HTTPS.Example of protecting an HttpCsomeCookie.Secure = true;For more information see:https://learn.microsoft.com/en-us/dotnet/api/system.web.httpcookie.secureSession cookies should be configured with the following security directives:- [HTTPOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) - [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) - [Secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies)

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

Cookie Secure flag is explicitly disabled. You should enforce this value to avoid accidentally presenting sensitive cookie values over plaintext HTTP connections.

Cross-Site Request Forgery (CSRF)

The application failed to protect against Cross-Site Request Forgery (CSRF)due to not including the `[ValidateAntiForgeryToken]` attribute on anHTTP method handler that could change user state (usually in the form of POST or PUTmethods).The vulnerability can be exploited by an adversary creating a link or form on a thirdparty site and tricking an authenticated victim to access them.Add the `[ValidateAntiForgeryToken]` to all methods which take in user data and changeuser state (such as updating a database with a new value). This is especially true forfunctionality such as updating passwords or other security sensitive functions.Alternatively, applications can enable a ([https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.autovalidateantiforgerytokenattribute)filter.For](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.autovalidateantiforgerytokenattribute%29filter.For) more information on ValidateAntiForgeryToken and other CSRF protections in .NETsee the following URL:https://learn.microsoft.com/en-us/aspnet/core/security/anti-request-forgeryAdditionally, consider setting all session cookies to have the `SameSite=Strict` attribute.It should be noted that this may impact usability when sharing links across other mediums.It is recommended that a two cookie based approach is taken, as outlined in ([https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-08#section-8.8.2)sectionof](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-08#section-8.8.2%29sectionof) the SameSite RFC.For more information on CSRF see OWASP’s guide:https://owasp.org/www-community/attacks/csrf

Cross-Site Request Forgery (CSRF)

$METHOD is a state-changing MVC method that does not validate the antiforgery token or do strict content-type checking. State-changing controller methods should either enforce antiforgery tokens or do strict content-type checking to prevent simple HTTP request types from bypassing CORS preflight controls.

Origin Validation Error

The HSTS HTTP response security header is missing, allowing interaction and communication to be sent over the insecure HTTP protocol.

Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)

You are using an insecure random number generator (RNG) to create a cryptographic key. System.Random must never be used for cryptographic purposes. Use System.Security.Cryptography.RandomNumberGenerator instead.

Improper Neutralization of Special Elements in Output Used by a Downstream Component (‘Injection’)

By setting `XsltSettings.EnableScript` to true, an adversary who is able to influence theloadedXSL document could directly inject code to compromise the system. It is stronglyrecommended that an alternative approach is used to work with XML data.For increased const String stylesheet = “calc.xsl”;// Compile the style sheet.XsltSettings xslt\_settings = new XsltSettings();xslt\_settings.EnableScript = false; // disable scriptxslt\_settings.EnableDocumentFunction = false; // disable document() functionXslCompiledTransform xslt = new XslCompiledTransform();XmlResolver resolver = null; // set a null entity resolverxslt.Load(stylesheet, xslt\_settings, resolver);// Load the XML source file, using XDocument for safetyXDocument doc = XDocument.Load(filename);// do our modifications to the document before the transformation// instead of inside of a script.doc.Element(“data”).Add(new XElement(“circle”, new XElement(“radius”, 12)));// Create an XmlWriter.XmlWriterSettings settings = new XmlWriterSettings();settings.OmitXmlDeclaration = true;settings.Indent = true;XmlWriter writer = XmlWriter.Create(“output.xml”, settings);// Finally, execute the transformation.xslt.Transform(doc.CreateReader(), writer);writer.Close();For more information on security considerations when using XSL see the following URLs:- [https://learn.microsoft.com/en-us/dotnet/standard/data/xml/xslt-security-considerations-](https://learn.microsoft.com/en-us/dotnet/standard/data/xml/xslt-security-considerations-) [https://learn.microsoft.com/en-us/dotnet/api/system.xml.xsl.xslcompiledtransform?view=net-7.0#security-considerations](https://learn.microsoft.com/en-us/dotnet/api/system.xml.xsl.xslcompiledtransform?view=net-7.0#security-considerations)

Improper Neutralization of Data within XPath Expressions (‘XPath Injection’)

XPath queries are constructed dynamically on user-controlled input. This vulnerability in code could lead to an XPath Injection exploitation.

ASP.NET Misconfiguration: Not Using Input Validation Framework

The enableViewStateMac is disabled in configuration file.

ASP.NET Misconfiguration: Not Using Input Validation Framework

Web Forms controls use hidden base64 encoded fields to store state information. If sensitive information is stored there it may be leaked to the client side.

HTTP endpoint $ROUTE$PATH will handle $METHOD requests

HTTP endpoint $ROUTE$PATH will handle $METHOD requests

Improper Encoding or Escaping of Output

ASP.NET Core MVC provides an HtmlString class which isn’t automatically encoded upon output. This should never be used in combination with untrusted input as this will expose an XSS vulnerability.

Insufficient Session Expiration

The TokenValidationParameters.$LIFETIME is set to $FALSE, this means the JWT tokens lifetime is not validated. This can lead to an JWT token being used after it has expired, which has security implications. It is recommended to validate the JWT lifetime to ensure only valid tokens are used.

Generation of Error Message Containing Sensitive Information

Stacktrace information is displayed in a non-Development environment. Accidentally disclosing sensitive stack trace information in a production environment aids an attacker in reconnaissance and information gathering.

Use of Incorrectly-Resolved Name or Reference

The top level wildcard bindings $PREFIX leaves your application open to security vulnerabilities and give attackers more control over where traffic is routed. If you must use wildcards, consider using subdomain wildcard binding. For example, you can use “\*.asdf.gov” if you own all of “asdf.gov”.

Cryptographic Issues

X509Certificate2.PrivateKey is obsolete. Use a method such as GetRSAPrivateKey() or GetECDsaPrivateKey(). Alternatively, use the CopyWithPrivateKey() method to create a new instance with a private key. Further, if you set X509Certificate2.PrivateKey to `null` or set it to another key without deleting it first, the private key will be left on disk.

Improperly Controlled Modification of Dynamically-Determined Object Attributes

Mass assignment or Autobinding vulnerability in code allows an attacker to execute over-posting attacks, which could create a new parameter in the binding request and manipulate the underlying object in the application.

Inefficient Regular Expression Complexity

An attacker can then cause a program using a regular expression to enter these extreme situations and then hang for a very long time.

Inefficient Regular Expression Complexity

Specifying the regex timeout leaves the system vulnerable to a regex-based Denial of Service (DoS) attack. Consider setting the timeout to a short amount of time like 2 or 3 seconds. If you are sure you need an infinite timeout, double check that your context meets the conditions outlined in the “Notes to Callers” section at the bottom of this page: [https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.-ctor?view=net-6.0](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.-ctor?view=net-6.0)

Improper Access Control

The endpoint is potentially accessible to not authorized users. If it contains sensitiveinformation, like log files for example, it may lead to privilege escalation.

Use of Cache Containing Sensitive Information

Having the annotation \[OutputCache\] will disable the annotation \[Authorize\] forthe requests following the first one.

ASP.NET Misconfiguration: Creating Debug Binary

ASP.NET applications built with `debug` set to true in production may leak debug information to attackers. Debug mode also affects performance and reliability. Set `debug` to `false` or remove it from \`\`

Improper Management of Sensitive Trace Data

OWASP guidance recommends disabling tracing for production applications to prevent accidental leakage of sensitive application information.

Improper Output Neutralization for Logs

String interpolation in log message obscures the distinction between variables and the log message. Use structured logging instead, where the variables are passed as additional arguments and the interpolation is performed by the logging library. This reduces the possibility of log injection and makes it easier to search through logs.

Missing Authorization

Anonymous access shouldn’t be allowed unless explicit by design. Access control checks are missing and potentially can be bypassed. This finding violates the principle of least privilege or deny by default, where access should only be permitted for a specific set of roles or conforms to a custom policy or users.

Exposure of Information Through Directory Listing

An open directory listing is potentially exposed, potentially revealing sensitive information to attackers.

Improper Restriction of Excessive Authentication Attempts

A misconfigured lockout mechanism allows an attacker to execute brute-force attacks. Account lockout must be correctly configured and enabled to prevent these attacks.

Out-of-bounds Read

MemoryMarshal.CreateSpan and MemoryMarshal.CreateReadOnlySpan should be used with caution, as the length argument is not checked.

Improper Verification of Cryptographic Signature

Accepting unsigned security tokens as valid security tokens allows an attacker to remove its signature and potentially forge an identity. As a fix, set RequireSignedTokens to be true.

Double.Epsilon is defined by .NET as the smallest value that can be added to or subtracted from a zero-value Double

Double.Epsilon is defined by .NET as the smallest value that can be added to or subtracted from a zero-value Double. It is unsuitable for equality comparisons of non-zero Double values. Furthermore, the value of Double.Epsilon is framework and processor architecture dependent. Wherever possible, developers should prefer the framework Equals() method over custom equality implementations.

Potential inter-process write of RegionInfo $RI via $PIPESTREAM $P that was instantiated with a two-character culture code $REGION

Potential inter-process write of RegionInfo $RI via $PIPESTREAM $P that was instantiated with a two-character culture code $REGION. Per .NET documentation, if you want to persist a RegionInfo object or communicate it between processes, you should instantiate it by using a full culture name rather than a two-letter ISO region code.

## Kt [Copied!](#kt "Copy link to this section")

Policy Name

Description

Inadequate Encryption Strength

RSA keys should be at least 2048 bits based on NIST recommendation.

Inadequate Encryption Strength

Using RSA without OAEP mode weakens the encryption.

Use of a Broken or Risky Cryptographic Algorithm

Detected SHA1 hash algorithm which is considered insecure. SHA1 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead.

Use of a Broken or Risky Cryptographic Algorithm

Cipher in ECB mode is detected. ECB mode produces the same output for the same input each time which allows an attacker to intercept and replay the data. Further, ECB mode does not provide any integrity checking. See [https://find-sec-bugs.github.io/bugs.htm#CIPHER\_INTEGRITY](https://find-sec-bugs.github.io/bugs.htm#CIPHER_INTEGRITY) .

Use of a Broken or Risky Cryptographic Algorithm

Detected MD5 hash algorithm which is considered insecure. MD5 is not collision resistant and is therefore not suitable as a cryptographic signature. Use SHA256 or SHA3 instead.

Use of a Broken or Risky Cryptographic Algorithm

NullCipher was detected. This will not encrypt anything; the cipher text will be the same as the plain text. Use a valid, secure cipher: Cipher.getInstance(“AES/CBC/PKCS7PADDING”). See [https://owasp.org/www-community/Using\_the\_Java\_Cryptographic\_Extensions](https://owasp.org/www-community/Using_the_Java_Cryptographic_Extensions) for more information.

Incorrect Type Conversion or Cast

‘Integer.toHexString()’ strips leading zeroes from each byte if read byte-by-byte. This mistake weakens the hash value computed since it introduces more collisions. Use ‘String.format("%02X”, …)’ instead.

Improper Authentication

Detected anonymous LDAP bind. This permits anonymous users to execute LDAP statements. Consider enforcing authentication for LDAP. See [https://docs.oracle.com/javase/tutorial/jndi/ldap/auth\_mechs.html](https://docs.oracle.com/javase/tutorial/jndi/ldap/auth_mechs.html) for more information.

Cleartext Transmission of Sensitive Information

This socket is not encrypted. The traffic could be read by an attacker intercepting the network traffic. Use an SSLSocket created by ‘SSLSocketFactory’ or ‘SSLServerSocketFactory’ instead

Sensitive Cookie Without ‘HttpOnly’ Flag

A cookie was detected without setting the ‘HttpOnly’ flag. The ‘HttpOnly’ flag for cookies instructs the browser to forbid client-side scripts from reading the cookie. Set the ‘HttpOnly’ flag by calling ‘cookie.setHttpOnly(true);’

Sensitive Cookie in HTTPS Session Without ‘Secure’ Attribute

A cookie was detected without setting the ‘secure’ flag. The ‘secure’ flag for cookies prevents the client from transmitting the cookie over insecure channels such as HTTP. Set the ‘secure’ flag by calling ‘$COOKIE.setSecure(true);’

Reusing a Nonce, Key Pair in Encryption

GCM detected, please check that IV/nonce is not reused, an Initialization Vector (IV) is a nonce used to randomize the encryption, so that even if multiple messages with identical plaintext are encrypted, the generated corresponding ciphertexts are different.Unlike the Key, the IV usually does not need to be secret, rather it is important that it is random and unique. Certain encryption schemes the IV is exchanged in public as part of the ciphertext. Reusing same Initialization Vector with the same Key to encrypt multiple plaintext blocks allows an attacker to compare the ciphertexts and then, with some assumptions on the content of the messages, to gain important information about the data being encrypted.

## Nginx [Copied!](#nginx "Copy link to this section")

Policy Name

Description

Inadequate Encryption Strength

This server configuration is missing the ‘ssl\_protocols’ directive. By default, this server will use ‘ssl\_protocols TLSv1 TLSv1.1 TLSv1.2’, and versions older than TLSv1.2 are known to be broken. Explicitly specify ‘ssl\_protocols TLSv1.2 TLSv1.3’ to use secure TLS versions.

Inadequate Encryption Strength

Detected use of an insecure SSL version. Secure SSL versions are TLSv1.2 and TLS1.3; older versions are known to be broken and are susceptible to attacks. Prefer use of TLSv1.2 or later.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

The alias in this location block is subject to a path traversal because the location path does not end in a path separator (e.g., ‘/’). To fix, add a path separator to the end of the path.

Cleartext Transmission of Sensitive Information

Detected an insecure redirect in this nginx configuration. If no scheme is specified, nginx will forward the request with the incoming scheme. This could result in unencrypted communications. To fix this, include the ‘https’ scheme.

Improper Neutralization of CRLF Sequences in HTTP Headers (‘HTTP Request/Response Splitting’)

The $$VARIABLE path parameter is added as a header in the response. This could allow an attacker to inject a newline and add a new header into the response. This is called HTTP response splitting. To fix, do not allow whitespace in the path parameter: ‘\[^\\s\]+’.

Authentication Bypass by Spoofing

‘$http\_host’ and ‘$host’ variables may contain a malicious value from attacker controlled ‘Host’ request header. Use an explicitly configured host value or a allow list for validation.

Insecure configuration

The ‘add\_header’ directive is called in a ’location’ block after headers have been set at the server block. Calling ‘add\_header’ in the location block will actually overwrite the headers defined in the server block, no matter which headers are set. To fix this, explicitly set all headers or set all headers in the server block.

Insecure configuration

The protocol scheme for this proxy is dynamically determined. This can be dangerous if the scheme can be injected by an attacker because it may forcibly alter the connection scheme. Consider hardcoding a scheme for this proxy.

Insecure configuration

This location block contains a ‘proxy\_pass’ directive but does not contain the ‘internal’ directive. The ‘internal’ directive restricts access to this location to internal requests. Without ‘internal’, an attacker could use your server for server-side request forgeries (SSRF). Include the ‘internal’ directive in this block to limit exposure.

Inconsistent Interpretation of HTTP Requests (‘HTTP Request/Response Smuggling’)

Conditions for Nginx H2C smuggling identified. H2C smuggling allows upgrading HTTP/1.1 connections to lesser-known HTTP/2 over cleartext (h2c) connections which can allow a bypass of reverse proxy access controls, and lead to long-lived, unrestricted HTTP traffic directly to back-end servers. To mitigate: WebSocket support required: Allow only the value websocket for HTTP/1.1 upgrade headers (e.g., Upgrade: websocket). WebSocket support not required: Do not forward Upgrade headers.

Unintended Proxy or Intermediary (‘Confused Deputy’)

The host for this proxy URL is dynamically determined. This can be dangerous if the host can be injected by an attacker because it may forcibly alter destination of the proxy. Consider hardcoding acceptable destinations and retrieving them with ‘map’ or something similar.

## Html [Copied!](#html "Copy link to this section")

Policy Name

Description

Missing Support for Integrity Check

This tag is missing an ‘integrity’ subresource integrity attribute. The ‘integrity’ attribute allows for the browser to verify that externally hosted files (for example from a CDN) are delivered without unexpected manipulation. Without this attribute, if an attacker can modify the externally hosted resource, this could lead to XSS and other types of attacks. To prevent this, include the base64-encoded cryptographic hash of the resource (file) you’re telling the browser to fetch in the ‘integrity’ attribute for all externally hosted files.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected the use of an inner/outerHTML assignment. This can introduce a Cross-Site-Scripting (XSS) vulnerability if this comes from user-provided input. If you have to use a dangerous web API, consider using a sanitization library such as DOMPurify to sanitize the HTML before it is assigned.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected the use of eval(…). This can introduce a Cross-Site-Scripting (XSS) vulnerability if this comes from user-provided input. Follow OWASP best practices to ensure you handle XSS within a JavaScript context correct, and consider using safer APIs to evaluate user-input such as JSON.parse(…).

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used in a script tag. Although template variables are HTML escaped, HTML escaping does not always prevent cross-site scripting (XSS) attacks when used directly in JavaScript. If you need this data on the rendered page, consider placing it in the HTML portion (outside of a script tag). Alternatively, use a JavaScript-specific encoder, such as the one available in OWASP ESAPI. For Django, you may also consider using the ‘json\_script’ template tag and retrieving the data in your script by using the element ID (e.g., `document.getElementById`).

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used in an anchor tag with the ‘href’ attribute. This allows a malicious actor to input the ‘javascript:’ URI and is subject to cross- site scripting (XSS) attacks. If using Flask, use ‘url\_for()’ to safely generate a URL. If using Django, use the ‘url’ filter to safely generate a URL. If using Mustache, use a URL encoding library, or prepend a slash ‘/’ to the variable for relative links (`href="/{{link}}"`). You may also consider setting the Content Security Policy (CSP) header.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used as the ‘src’ in a script tag. Although template variables are HTML escaped, HTML escaping does not always prevent malicious URLs from being injected and could results in a cross-site scripting (XSS) vulnerability. Prefer not to dynamically generate the ‘src’ attribute and use static URLs instead. If you must do this, carefully check URLs against an allowlist and be sure to URL-encode the result.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a unquoted template variable as an attribute. If unquoted, a malicious actor could inject custom JavaScript handlers. To fix this, add quotes around the template expression, like this: “{{ expr }}”.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Unencoded JSON in HTML context is vulnerable to cross-site scripting, because \`\` is not properly encoded.

Cleartext Transmission of Sensitive Information

This link points to a plaintext HTTP URL. Prefer an encrypted HTTPS URL if possible.

Page denies crawlers from indexing the page

This page denies crawlers from indexing the page. Remove the robots ‘meta’ tag.

## Clojure [Copied!](#clojure "Copy link to this section")

Policy Name

Description

Use of a Broken or Risky Cryptographic Algorithm

MD5 hash algorithm detected. This is not collision resistant and leads to easily-cracked password hashes. Replace with current recommended hashing algorithms.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

A call to clojure.java.shell has been found, this could lead to an RCE if the inputs are user-controllable. Please ensure their origin is validated and sanitized.

Deserialization of Untrusted Data

The default core Clojure read-string method is dangerous and can lead to deserialization vulnerabilities. Use the edn/read-string instead.

## Rust [Copied!](#rust "Copy link to this section")

Policy Name

Description

Improper Certificate Validation

Dangerously accepting invalid TLS information

Improper Certificate Validation

Dangerous client config used, ensure SSL verification

Improper Certificate Validation

SSL verification disabled, this allows for MitM attacks

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Reliance on Untrusted Inputs in a Security Decision

current\_exe should not be used for security operations. From the docs: “The output of this function should not be trusted for anything that might have security implications. Basically, if users can run the executable, they can change the output arbitrarily.”

Reliance on Untrusted Inputs in a Security Decision

temp\_dir should not be used for security operations. From the thus, the creation of any files or directories in the temporary directory must use a secure method to create a uniquely named file. Creating a file or directory with a fixed or predictable name may result in “insecure temporary file” security vulnerabilities.’

Reliance on Untrusted Inputs in a Security Decision

args should not be used for security operations. From the docs: “The first element is traditionally the path of the executable, but it can be set to arbitrary text, and might not even exist. This means this property should not be relied upon for security purposes.”

Reliance on Untrusted Inputs in a Security Decision

args\_os should not be used for security operations. From the docs: “The first element is traditionally the path of the executable, but it can be set to arbitrary text, and might not even exist. This means this property should not be relied upon for security purposes.”

Use of Inherently Dangerous Function

Detected ‘unsafe’ usage, please audit for secure usage

Use of Weak Hash

Detected cryptographically insecure hashing function

Storage of Sensitive Data in a Mechanism without Access Control

Set sensitive flag on security headers with ‘set\_sensitive’ to treat data with special care

## C [Copied!](#c "Copy link to this section")

Policy Name

Description

Improper Input Validation

CWE-20: Check buffer boundaries if used in a loop including recursive loops

Use of Externally-Controlled Format String

Avoid using user-controlled format strings passed into ‘sprintf’, ‘printf’ and ‘vsprintf’. These functions put you at risk of buffer overflow vulnerabilities through the use of format string exploits. Instead, use ‘snprintf’ and ‘vsnprintf’.

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Make sure the program immediately chdir(”/”), closes file descriptors, and drops rootprivileges, and that all necessary files (and no more!) are in the new root.

Concurrent Execution using Shared Resource with Improper Synchronization (‘Race Condition’)

Use fchgrp( ) instead.

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

Perform bounds checking, use functions that limit length, or ensure that the size is largerthan the maximum possible length.

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

Check implementation on installation, or limit the size of all string inputs.

Buffer Copy without Checking Size of Input (‘Classic Buffer Overflow’)

The getpw() function is dangerous as it may overflow the providedbuffer when reading from the `/etc/passwd` file. While the passwd fileis not generally writeable, there are no protections offered by this functionto protect from reading past the bounds of the destination buffer. This functionis obsoleted by `getpwuid`.For more information please see: [https://linux.die.net/man/3/getpwuid](https://linux.die.net/man/3/getpwuid)

Use of Potentially Dangerous Function

Finding triggers whenever there is a strcat or strncat used. This is an issue because strcat or strncat can lead to buffer overflow vulns. Fix this by using strcat\_s instead.

Use of Potentially Dangerous Function

Avoid using ‘strtok()’. This function directly modifies the first argument buffer, permanently erasing the delimiter character. Use ‘strtok\_r()’ instead.

Use of Potentially Dangerous Function

Finding triggers whenever there is a strcpy or strncpy used. This is an issue because strcpy does not affirm the size of the destination array and strncpy will not automatically NULL-terminate strings. This can lead to buffer overflows, which can cause program crashes and potentially let an attacker inject code in the program. Fix this by using strcpy\_s instead (although note that strcpy\_s is an optional part of the C11 standard, and so may not be available).

Use of Potentially Dangerous Function

Avoid using ‘scanf()’. This function, when used improperly, does not consider buffer boundaries and can lead to buffer overflows. Use ‘fgets()’ instead for reading input.

Use of Potentially Dangerous Function

Avoid ‘gets()’. This function does not consider buffer boundaries and can lead to buffer overflows. Use ‘fgets()’ or ‘gets\_s()’ instead.

Buffer Over-read

This function is often discouraged by most C++ coding standards in favor of its saferalternatives provided since C++14. Consider using a form of this function:(std::equal, std::mismatch or std::is\_permutation) that checks the second iteratorbefore potentially reading past its bounds.For more information please see: [https://en.cppreference.com/w/cpp/algorithm](https://en.cppreference.com/w/cpp/algorithm)

Insertion of Sensitive Information into Log File

Use %s, %d, %c… to format your variables, otherwise this could leak information.

Improper Check for Unusual or Exceptional Conditions

Use InitializeCriticalSectionAndSpinCount instead.

Double Free

Variable ‘$VAR’ was freed twice. This can lead to undefined behavior.

Compiler Removal of Code to Clear Buffers

When handling sensitive information in a buffer, it’s important to ensure that the data is securely erased before the buffer is deleted or reused. While `memset()` is commonly used for this purpose, it can leave sensitive information behind due to compiler optimizations or other factors. To avoid this potential vulnerability, it’s recommended to use the `memset_s()` function instead. `memset_s()` is a standardized function that securely overwrites the memory with a specified value, making it more difficult for an attacker to recover any sensitive data that was stored in the buffer. By using `memset_s()` instead of `memset()`, you can help to ensure that your application is more secure and less vulnerable to exploits that rely on residual data in memory.

Use After Free

Variable ‘$VAR’ was passed to a function after being freed. This can lead to undefined behavior.

Use After Free

Variable ‘$VAR’ was used after being freed. This can lead to undefined behavior.

Allocation of File Descriptors or Handles Without Limits or Throttling

Call to ‘read()’ without error checking is susceptible to file descriptor exhaustion. Consider using the ‘getrandom()’ function.

Avoid the ‘ato\*()’ family of functions

Avoid the ‘ato\*()’ family of functions. Their use can lead to undefined behavior, integer overflows, and lack of appropriate error handling. Instead prefer the ‘strtol\*()’ family of functions.

Avoid ‘sscanf()’ for number conversions

Avoid ‘sscanf()’ for number conversions. Its use can lead to undefined behavior, slow processing, and integer overflows. Instead prefer the ‘strto\*()’ family of functions.

The second goto statement will always be executed.

The second goto statement will always be executed.

Using == on char\* performs pointer comparison, use strcmp instead

Using == on char\* performs pointer comparison, use strcmp instead

## Bash [Copied!](#bash "Copy link to this section")

Policy Name

Description

Improper Input Validation

The special variable IFS affects how splitting takes place when expanding unquoted variables. Don’t set it globally. Prefer a dedicated utility such as ‘cut’ or ‘awk’ if you need to split input data. If you must use ‘read’, set IFS locally using e.g. ‘IFS=”,” read -a my\_array’.

Improper Control of Generation of Code (‘Code Injection’)

Semgrep found a bash reverse shell

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Data is being piped into `bash` from a `curl` command. An attacker with control of the server in the `curl` command could inject malicious code into the pipe, resulting in a system compromise. Avoid piping untrusted data into `bash` or any other shell if you can. If you must do this, consider checking the SHA sum of the content returned by the server to verify its integrity.

Improper Neutralization of Directives in Dynamically Evaluated Code (‘Eval Injection’)

Data is being eval’d from a `curl` command. An attacker with control of the server in the `curl` command could inject malicious code into the `eval`, resulting in a system comrpomise. Avoid eval’ing untrusted data if you can. If you must do this, consider checking the SHA sum of the content returned by the server to verify its integrity.

Variable expansions must be double-quoted so as to prevent being split into multiple pieces

Variable expansions must be double-quoted so as to prevent being split into multiple pieces according to whitespace or whichever separator is specified by the IFS variable. If you really wish to split the variable’s contents, you may use a variable that starts with an underscore e.g. $\_X instead of $X, and semgrep will ignore it. If what you need is an array, consider using a proper bash array.

if unquoted, is split on whitespace or other separators specified by the IFS variable

The result of command substitution $(…) or `...`, if unquoted, is split on whitespace or other separators specified by the IFS variable. You should surround it with double quotes to avoid splitting the result.

Useless call to ‘cat’ in a pipeline

Useless call to ‘cat’ in a pipeline. Use ’’ for any command to read from a file or write to a file.

Iterating over ls output is fragile

Iterating over ls output is fragile. Use globs, e.g. ‘dir/\*’ instead of ‘$(ls dir)’.

## Elixir [Copied!](#elixir "Copy link to this section")

Policy Name

Description

Improper Control of Generation of Code (‘Code Injection’)

Potential insecure EEx evaluation vulnerability. Ensure user input is properly sanitized to avoid arbitrary code execution and directory traversal.

Improper Control of Generation of Code (‘Code Injection’)

Potential code execution vulnerability in ‘Code.eval’. Please ensure user input is properly sanitized.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Directory Traversal in `File` function

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Potential directory traversal vulnerability in ‘send\_download’ function. Please ensure user input is properly sanitized.

Improper Limitation of a Pathname to a Restricted Directory (‘Path Traversal’)

Potential directory traversal vulnerability in ‘send\_file’ function. Please ensure user input is properly sanitized.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Potential SQL injection vulnerability with ‘Ecto.Adapters.SQL.stream’. Please ensure user input is properly sanitized.

Improper Neutralization of Special Elements used in an SQL Command (‘SQL Injection’)

Potential SQL injection vulnerability. Please ensure user input is properly sanitized.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Potential command injection vulnerability. Ensure user input is properly sanitized in Elixir when using os.cmd/3.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Potential command injection detected. Avoid using a shell as the executable and passing the arguments as a single string.

Improper Neutralization of Special Elements used in an OS Command (‘OS Command Injection’)

Clear or override sensitive environment variables using the :env option to avoid potential security risks.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Potential XSS vulnerability when using the raw/1 function. Ensure that user input is properly sanitized before rendering it as HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Potential XSS vulnerability when using the html/1 function. Ensure that user input is properly sanitized before rendering it as HTML.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Potential XSS vulnerability in put\_resp\_content\_type. If an attacker is able to set arbitrary content types for an HTTP response containing user input, the attacker may be able to leverage this for cross-site scripting (XSS).

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Potential XSS vulnerability when using the send\_resp/3 function. Ensure that user input is properly sanitized before rendering it as an HTTP response.

Deserialization of Untrusted Data

Potential insecure use of ‘binary\_to\_term’. Please ensure user input is properly sanitized or consider using ‘safe\_binary\_to\_term’.

Cleartext Transmission of Sensitive Information

HTTPS not enabled. Without HTTPS, attackers in a privileged network position can intercept and modify traffic. Ensure that your application enforces HTTPS. To get SSL working, you will need to add the `https` key to the `config` section and set your `:url` port to 443.

Uncontrolled Resource Consumption

Potential denial of service vulnerability via ‘String.to\_atom’. In Elixir, atoms are not garbage collected. As such, if user input is passed to the `String.to_atom` function, it may result in memory exhaustion. Prefer the `String.to_existing_atom` function for untrusted user input.

Uncontrolled Resource Consumption

Potential denial of service vulnerability via unsafe atom interpolation. Atoms are not garbage collected in Elixir, and using user input to create atoms may result in memory exhaustion. Prefer ’to\_existing\_atom’ for untrusted user input.

Uncontrolled Resource Consumption

Potential denial of service vulnerability via ‘List.to\_atom’. In Elixir, atoms are not garbage collected. As such, if user input is passed to the `List.to_atom` function, it may result in memory exhaustion. Prefer the `List.to_existing_atom` function for untrusted user input.

Cross-Site Request Forgery (CSRF)

Ensure Cross-Site Request Forgery (CSRF) protection is enabled in your Phoenix application

Cross-Site Request Forgery (CSRF)

Potential CSRF vulnerability when state-changing routes share an action with GET-based routes. Ensure that you separate the actions for state-changing routes and GET-based routes to prevent CSRF attacks.

Origin Validation Error

Potential Cross-Site WebSocket Hijacking (CSWH) vulnerability. Ensure that you validate the origin header in WebSocket connections to prevent CSWH attacks.

Unprotected Transport of Credentials

HSTS not enabled. The HTTP Strict Transport Security (HSTS) header helps defend against man-in-the-middle attacks by preventing unencrypted connections. We also recommend setting `force_ssl` in your endpoint, ensuring no data is ever sent via http, always redirecting to https

Improperly Implemented Security Check for Standard

Ensure secure HTTP headers are set correctly in your Phoenix application

## Yaml [Copied!](#yaml "Copy link to this section")

Policy Name

Description

Improper Control of Generation of Code (‘Code Injection’)

Using variable interpolation `\${{...}}` with `github` context data in a `actions/github-script`’s `script:` step could allow an attacker to inject their own code into the runner. This would allow them to steal secrets and code. `github` context data can have arbitrary user input and should be treated as untrusted. Instead, use an intermediate environment variable with `env:` to store the data and use the environment variable in the `run:` script. Be sure to use double-quotes the environment variable, like this: “$ENVVAR”.

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Improper Control of Generation of Code (‘Code Injection’)

Using input or workflow parameters in here-scripts can lead to command injection or code injection. Convert the parameters to env variables instead.

Exposure of Sensitive Information to an Unauthorized Actor

Spring Boot Actuator is fully enabled. This exposes sensitive endpoints such as /actuator/env, /actuator/logfile, /actuator/heapdump and others. Unless you have Spring Security enabled or another means to protect these endpoints, this functionality is available without authentication, causing a severe security risk.

Exposure of Sensitive Information to an Unauthorized Actor

Spring Boot Actuator “$ACTUATOR” is enabled. Depending on the actuator, this can pose a significant security risk. Please double-check if the actuator is needed and properly secured.

Execution with Unnecessary Privileges

When running containers in Kubernetes, it’s important to ensure that they are properly secured to prevent privilege escalation attacks. One potential vulnerability is when a container is allowed to run applications as the root user, which could allow an attacker to gain access to sensitive resources. To mitigate this risk, it’s recommended to add a `securityContext` to the container, with the parameter `runAsNonRoot` set to `true`. This will ensure that the container runs as a non-root user, limiting the damage that could be caused by any potential attacks. By adding a `securityContext` to the container in your Kubernetes pod, you can help to ensure that your containerized applications are more secure and less vulnerable to privilege escalation attacks.

Exposed Dangerous Method or Function

The environment variable `ACTIONS_ALLOW_UNSECURE_COMMANDS` grants this workflow permissions to use the `set-env` and `add-path` commands. There is a vulnerability in these commands that could result in environment variables being modified by an attacker. Depending on the use of the environment variable, this could enable an attacker to, at worst, modify the system path to run a different command than intended, resulting in arbitrary code execution. This could result in stolen code or secrets. Don’t use `ACTIONS_ALLOW_UNSECURE_COMMANDS`. Instead, use Environment Files. See [https://github.com/actions/toolkit/blob/main/docs/commands.md#environment-files](https://github.com/actions/toolkit/blob/main/docs/commands.md#environment-files) for more information.

This Semgrep rule is missing a valid ‘subcategory’ field in the ‘metadata’

This Semgrep rule is missing a valid ‘subcategory’ field in the ‘metadata’. which should be either audit, vuln, or guardrail. For more information visit [https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/](https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/)

This Semgrep rule is missing a valid ’likelihood’ field in the ‘metadata’

This Semgrep rule is missing a valid ’likelihood’ field in the ‘metadata’. which should be either LOW, MEDIUM, or HIGH. For more information visit [https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/](https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/)

Semgrep rule impact: $VALUE detected, but the value must be LOW, MEDIUM, or HIGH

Semgrep rule impact: $VALUE detected, but the value must be LOW, MEDIUM, or HIGH. For more information visit: [https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/](https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/)

It looks like you have an additional space in your rule message, this can look awkward in the finding output, please remove the additional whitespace!

It looks like you have an additional space in your rule message, this can look awkward in the finding output, please remove the additional whitespace!

We no longer support `deepsemgrep: true`, please use `interfile:true`

We no longer support `deepsemgrep: true`, please use `interfile:true`

This Semgrep rule is missing a valid ‘confidence’ field in the ‘metadata’

This Semgrep rule is missing a valid ‘confidence’ field in the ‘metadata’. which should be either LOW, MEDIUM, or HIGH. For more information visit [https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/](https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/)

This Semgrep rule is missing a valid ‘impact’ field in the ‘metadata’

This Semgrep rule is missing a valid ‘impact’ field in the ‘metadata’. which should be either LOW, MEDIUM, or HIGH. For more information visit [https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/](https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/)

Semgrep rule likelihood: $VALUE detected, but the value must be vuln, audit, or guardrail

Semgrep rule likelihood: $VALUE detected, but the value must be vuln, audit, or guardrail. For more information visit: [https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/](https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/)

Looks like this value is deconstructing a const/var/let you need to use all three `const {...} =` `var {...} =` and `let {...} =` to provide accurate coverage consider adding the missing patterns in a `pattern-inside` for better coverage.

Looks like this value is deconstructing a const/var/let you need to use all three `const {...} =` `var {...} =` and `let {...} =` to provide accurate coverage consider adding the missing patterns in a `pattern-inside` for better coverage.

Semgrep rule confidence: $VALUE detected, but the value must be LOW, MEDIUM, or HIGH

Semgrep rule confidence: $VALUE detected, but the value must be LOW, MEDIUM, or HIGH. For more information visit: [https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/](https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/)

Semgrep rule likelihood: $VALUE detected, but the value must be LOW, MEDIUM, or HIGH

Semgrep rule likelihood: $VALUE detected, but the value must be LOW, MEDIUM, or HIGH. For more information visit: [https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/](https://semgrep.dev/docs/contributing/contributing-to-semgrep-rules-repository/)

This Gitlab CI YAML will never run on default branches due to a `changes` rule with `when:never`

This Gitlab CI YAML will never run on default branches due to a `changes` rule with `when:never`. To fix this, make sure the triggering event is a push event. You can do this with `if: '\$CI_PIPELINE_SOURCE == "push"'`. See [https://docs.gitlab.com/ee/ci/yaml/index.html#ruleschanges](https://docs.gitlab.com/ee/ci/yaml/index.html#ruleschanges)

Improper Control of Dynamically-Managed Code Resources

This GitHub Actions workflow file uses `pull_request_target` and checks out code from the incoming pull request. When using `pull_request_target`, the Action runs in the context of the target repository, which includes access to all repository secrets. Normally, this is safe because the Action only runs code from the target repository, not the incoming PR. However, by checking out the incoming PR code, you’re now using the incoming code for the rest of the action. You may be inadvertently executing arbitrary code from the incoming PR with access to repository secrets, which would let an attacker steal repository secrets. This normally happens by running build scripts (e.g., `npm build` and `make`) or dependency installation scripts (e.g., `python setup.py install`). Audit your workflow file to make sure no code from the incoming PR is executed. Please see [https://securitylab.github.com/research/github-actions-preventing-pwn-requests/](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/) for additional mitigations.

Improper Control of Dynamically-Managed Code Resources

This GitHub Actions workflow file uses `workflow_run` and checks out code from the incoming pull request. When using `workflow_run`, the Action runs in the context of the target repository, which includes access to all repository secrets. Normally, this is safe because the Action only runs code from the target repository, not the incoming PR. However, by checking out the incoming PR code, you’re now using the incoming code for the rest of the action. You may be inadvertently executing arbitrary code from the incoming PR with access to repository secrets, which would let an attacker steal repository secrets. This normally happens by running build scripts (e.g., `npm build` and `make`) or dependency installation scripts (e.g., `python setup.py install`). Audit your workflow file to make sure no code from the incoming PR is executed. Please see [https://securitylab.github.com/research/github-actions-preventing-pwn-requests/](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/) for additional mitigations.

The ‘branches’ field (in the push event configuration) contains no branches

The ‘branches’ field (in the push event configuration) contains no branches. This causes all branches to be scanned and may result in unneccessary duplicate findings across the entire codebase.

## JavaScripton [Copied!](#javascripton "Copy link to this section")

Policy Name

Description

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

## Kotlin [Copied!](#kotlin "Copy link to this section")

Policy Name

Description

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Detect portions of the Android Kotlin code that make use of WebView, in order to check for insecure configurations

Detect portions of the Android Kotlin code that make use of WebView, in order to check for insecure configurations. More details on vulnerable confiurations related to WebView can be found in OWASP “Android Platform APIs” document: [https://github.com/OWASP/owasp-mstg/blob/master/Document/0x05h-Testing-Platform-Interaction.md](https://github.com/OWASP/owasp-mstg/blob/master/Document/0x05h-Testing-Platform-Interaction.md)

Detected a string starting with a SQL operation with a concatenated value

Detected a string starting with a SQL operation with a concatenated value. This could lead to SQL injection if variables in the SQL statement are not properly sanitized.

Detected a formatted string starting with a SQL operation with a concatenated value that came from a function argument

Detected a formatted string starting with a SQL operation with a concatenated value that came from a function argument. This could lead to SQL injection if variables in the SQL statement are not properly sanitized.

Spark HTTP route $ROUTE will handle $METHOD requests

Spark HTTP route $ROUTE will handle $METHOD requests

## Lua [Copied!](#lua "Copy link to this section")

Policy Name

Description

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

## Ocaml [Copied!](#ocaml "Copy link to this section")

Policy Name

Description

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

Broken input\_line

‘input\_line’ leaves a ‘\\r’ (CR) character when reading lines from a Windows text file, whose lines end in “\\r\\n” (CRLF). This is a problem for any Windows file that is being read either on a Unix-like platform or on Windows in binary mode. If the code already takes care of removing any trailing ‘\\r’ after reading the line, add a ‘(\* nosemgrep \*)’ comment to disable this warning.

Prefer read in binary mode

‘open\_in’ behaves differently on Windows and on Unix-like systems with respect to line endings. To get the same behavior everywhere, use ‘open\_in\_bin’ or ‘open\_in\_gen \[Open\_binary\]’. If you really want CRLF-to-LF translations to take place when running on Windows, use ‘open\_in\_gen \[Open\_text\]’.

Prefer read in write mode

‘open\_out’ behaves differently on Windows and on Unix-like systems with respect to line endings. To get the same behavior everywhere, use ‘open\_out\_bin’ or ‘open\_out\_gen \[Open\_binary\]’. If you really want LF-to-CRLF translations to take place when running on Windows, use ‘open\_out\_gen \[Open\_text\]’.

Not portable tmp string

You should probably use Filename.get\_temp\_dirname().

Useless let

Useless let

Useless Comparison

This comparison is useless because the expressions being compared are identical. This is expected to always return the same result, 0, unless your code is really strange.

Useless equal

This is always true. If testing for floating point NaN, use `Float.is_nan` instead.

Useless if. Both branches are equal

Useless if. Both branches are equal.

Physical equal

You probably want the structural equality operator =

Physical not equal

You probably want the structural inequality operator <>

Length list 0

You probably want $X = \[\], which is faster.

Length more then 0

You probably want $X <> \[\], which is faster.

Comparison to boolean true

Comparison to boolean. Just use `\$X`

Comparison to boolean false

Comparison to boolean. Just use `not \$X`

Useless else. Just remove the else branch

Useless else. Just remove the else branch;

Backwards if

Backwards if. Rewrite the code as ‘if not $E then $E2’.

Hashtbl.find outside of a try

You should not use Hashtbl.find outside of a try, or you should use Hashtbl.find\_opt

List.find outside of a try

You should not use List.find outside of a try, or you should use List.find\_opt

Use instead `Str.first_chars`

Use instead `Str.first_chars`

Use instead `Str.string_after`

Use instead `Str.string_after`

Use instead `Str.last_chars`

Use instead `Str.last_chars`

Useless sprintf

Useless sprintf

You should use `incr`

You should use `incr`

You should use `decr`

You should use `decr`

Re-raise exceptions using ‘raise’

You should not re-raise exceptions using ‘raise’ because it loses track of where the exception was raised originally, leading to a useless and possibly confusing stack trace. Instead, you should obtain a stack backtrace as soon as the exception is caught using ’try … with exn -> let trace = Printexc.get\_raw\_backtrace () in …’, and keep it around until you re-raise the exception using ‘Printexc.raise\_with\_backtrace exn trace’. You must collect the stack backtrace before calling another function which might internally raise and catch exceptions. To avoid false positives from Semgrep, write ‘raise (Foo args)’ instead of ’let e = Foo args in raise e’.

## Sh [Copied!](#sh "Copy link to this section")

Policy Name

Description

Improper Control of Generation of Code (‘Code Injection’)

This code contains bidirectional (bidi) characters. While this is useful for support of right-to-left languages such as Arabic or Hebrew, it can also be used to trick language parsers into executing code in a manner that is different from how it is displayed in code editing and review tools. If this is not what you were expecting, please review this code in an editor that can reveal hidden Unicode characters.

## Regex [Copied!](#regex "Copy link to this section")

Policy Name

Description

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a segment of a Flask template where autoescaping is explicitly disabled with ’ safe’ filter. This allows rendering of raw HTML in this segment. Ensure no user data is rendered here, otherwise this is a cross-site scripting (XSS) vulnerability.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a segment of a Flask template where autoescaping is explicitly disabled with ‘{% autoescape off %}’. This allows rendering of raw HTML in this segment. Ensure no user data is rendered here, otherwise this is a cross-site scripting (XSS) vulnerability, or turn autoescape on.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable where autoescaping is explicitly disabled with ’ safeseq’ filter. This allows rendering of raw HTML in this segment. Ensure no user data is rendered here, otherwise this is a cross-site scripting (XSS) vulnerability. If you must do this, use `mark_safe` in your Python code.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template block where autoescaping is explicitly disabled with ‘{% autoescape off %}’. This allows rendering of raw HTML in this segment. Turn autoescaping on to prevent cross-site scripting (XSS). If you must do this, consider instead, using `mark_safe` in Python code.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used in a script tag. Although template variables are HTML escaped, HTML escaping does not always prevent cross-site scripting (XSS) attacks when used directly in JavaScript. If you need this data on the rendered page, consider placing it in the HTML portion (outside of a script tag). Alternatively, use a JavaScript-specific encoder, such as the one available in OWASP ESAPI.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used in an anchor tag with the ‘href’ attribute. This allows a malicious actor to input the ‘javascript:’ URI and is subject to cross- site scripting (XSS) attacks. If using a relative URL, start with a literal forward slash and concatenate the URL, like this: a(href=’/’+url). You may also consider setting the Content Security Policy (CSP) header.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a unescaped variables using ‘&attributes’. If external data can reach these locations, your application is exposed to a cross-site scripting (XSS) vulnerability. If you must do this, ensure no external data can reach this location.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected an explicit unescape in a Pug template, using either ‘!=’ or ‘!{…}’. If external data can reach these locations, your application is exposed to a cross-site scripting (XSS) vulnerability. If you must do this, ensure no external data can reach this location.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used in an anchor tag with the ‘href’ attribute. This allows a malicious actor to input the ‘javascript:’ URI and is subject to cross- site scripting (XSS) attacks. If using a relative URL, start with a literal forward slash and concatenate the URL, like this: href=’/’. You may also consider setting the Content Security Policy (CSP) header.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected an explicit unescape in an EJS template, using ’’ If external data can reach these locations, your application is exposed to a cross-site scripting (XSS) vulnerability. Use ’’ to escape this data. If you need escaping, ensure no external data can reach this location.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected a template variable used in an anchor tag with the ‘href’ attribute. This allows a malicious actor to input the ‘javascript:’ URI and is subject to cross- site scripting (XSS) attacks. If using a relative URL, start with a literal forward slash and concatenate the URL, like this: href=’/{{link}}’. You may also consider setting the Content Security Policy (CSP) header.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Detected an explicit unescape in a Mustache template, using triple braces ‘{{{…}}}’ or ampersand ‘&’. If external data can reach these locations, your application is exposed to a cross-site scripting (XSS) vulnerability. If you must do this, ensure no external data can reach this location.

Improper Neutralization of Input During Web Page Generation (‘Cross-site Scripting’)

Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use HTML interpolation on trusted content and never on user-provided content.

Cleartext Transmission of Sensitive Information

Insecure WebSocket Detected. WebSocket Secure (wss) should be used for all WebSocket connections.

Improper Encoding or Escaping of Output

Detected an Expression Language segment in a tag that does not escape output. This is dangerous because if any data in this expression can be controlled externally, it is a cross-site scripting vulnerability. Instead, use the ‘out’ tag from the JSTL taglib to escape this expression. See [https://www.tutorialspoint.com/jsp/jstl\_core\_out\_tag.htm](https://www.tutorialspoint.com/jsp/jstl_core_out_tag.htm) for more information.

Improper Encoding or Escaping of Output

Detected an Expression Language segment that does not escape output. This is dangerous because if any data in this expression can be controlled externally, it is a cross-site scripting vulnerability. Instead, use the ’escapeXml’ function from the JSTL taglib. See [https://www.tutorialspoint.com/jsp/jstl\_function\_escapexml.htm](https://www.tutorialspoint.com/jsp/jstl_function_escapexml.htm) for more information.

Improper Neutralization of Escape, Meta, or Control Sequences

Detected an element with disabled HTML escaping. If external data can reach this, this is a cross-site scripting (XSS) vulnerability. Ensure no external data can reach here, or remove ’escape=false’ from this element.

## Generic [Copied!](#generic "Copy link to this section")

Policy Name

Description

Malware indicator found in code

Malware indicator found in code

struts.xml using alwaysSelectFullNamespace

struts.xml using alwaysSelectFullNamespace

struts.xml devMode = “$…MODE”

struts.xml devMode = “$…MODE”

web.xml devMode = $MODE

web.xml devMode = $MODE

default.properties struts.devMode = $MODE

default.properties struts.devMode = $MODE

web.xml Struts2 listener-class $…LISTENER\_CLASS

web.xml Struts2 listener-class $…LISTENER\_CLASS

web.xml Struts2 filter $FILTER\_NAME class $…FILTER\_CLASS url-pattern $…URL\_PATTERN

web.xml Struts2 filter $FILTER\_NAME class $…FILTER\_CLASS url-pattern $…URL\_PATTERN

struts.xml action $…NAME

struts.xml action $…NAME

JSTL taglib directive prefix="$…PREFIX" uri="$…URI" action="$…ACTION"

JSTL taglib directive prefix="$…PREFIX" uri="$…URI" action="$…ACTION"

JSTL taglib directive prefix="$…PREFIX" uri="$…URI"

JSTL taglib directive prefix="$…PREFIX" uri="$…URI"

web.xml Struts2 filter $FILTER\_NAME class $…FILTER\_CLASS

web.xml Struts2 filter $FILTER\_NAME class $…FILTER\_CLASS

JSTL taglib directive either Dynamic Method Invocation (DMI) or Wildcard Method feature prefix="$…PREFIX" uri="$…URI" action="$…ACTION"

JSTL taglib directive either Dynamic Method Invocation (DMI) or Wildcard Method feature prefix="$…PREFIX" uri="$…URI" action="$…ACTION"

struts.xml Dynamic Method Invocation

struts.xml Dynamic Method Invocation

struts.xml action $…NAME either using Dynamic Method Invocation or Wildcard Method feature

struts.xml action $…NAME either using Dynamic Method Invocation or Wildcard Method feature

Unsafe Spring Service Exporter XML

Unsafe Spring Service Exporter XML

Insertion of Sensitive Information into Log File

Mark sensitive parameters with the @secure() decorator. This avoids logging the value or displaying it in the Azure portal, Azure CLI, or Azure PowerShell.

Improper Export of Android Application Components

Use of Exported Activity

The ‘baseURL’ is invalid

The ‘baseURL’ is invalid. This may cause links to not work if deployed. Include the scheme (e.g., http:// or https://).

The ‘baseURL’ is set to localhost

The ‘baseURL’ is set to localhost. This may cause links to not work if deployed.

`\$1` has been added to the .semgrepignore list of ignored paths

`\$1` has been added to the .semgrepignore list of ignored paths. Someone from app-sec may want to audit these changes.

## Solidity [Copied!](#solidity "Copy link to this section")

Policy Name

Description

Improper Authorization

msg.sender is not being used when calling erc20.transferFrom. Example - Alice approves this contract to spend her ERC20 tokens. Bob can call function ‘a’ and specify Alice’s address as the from parameter in transferFrom, allowing him to transfer Alice’s tokens to himself.

## Npm [Copied!](#npm "Copy link to this section")

Policy Name

Description

Download of Code Without Integrity Check

To ensure reproducible and deterministic builds, use `npm ci` rather than `npm install` in scripts. This will use the lockfile rather than updating it.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
