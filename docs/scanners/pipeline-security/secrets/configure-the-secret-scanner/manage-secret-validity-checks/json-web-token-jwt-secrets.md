# JSON Web Token (JWT) secrets | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/json-web-token-jwt-secrets

---

# JSON Web Token (JWT) secrets

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/json-web-token-jwt-secrets.md "Edit this page")

Updated on Sep 14, 2025 • Published on Oct 21, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic explains the validation logic that Cycode uses for JWT secrets.

## JWT validation logic [Copied!](#jwt-validation-logic "Copy link to this section")

Cycode implements validity checks for JWTs by leveraging the optional `exp` (expiration time) claim. The `exp` claim defines when the token expires using a Unix timestamp.

Sample JWT payload with `exp` claim:

Note

A JWT is composed of a **header**, **payload**, and **signature**. The payload contains claims, such as `exp`.

{

```
1
2
3
4
5
6
```

```json
"sub": "1234567890",
"name": "John Doe",
"admin": true,
"iat": 1516239022,
"exp": 1622029022
}
```

### How validation is performed [Copied!](#how-validation-is-performed "Copy link to this section")

Cycode uses the following logic to validate the status of JWT secrets:

1.  Cycode parses the JWT payload and checks for the `exp` attribute.
    
2.  The `exp` value is compared against the current time.
    
3.  Based on this comparison, the following results apply.
    

Result

Status

Comments

No `exp` or invalid `exp` (null/empty)

Unknown

Cycode can’t validate this secret because the `exp` attribute doesn’t contain a usable value.

Valid `exp` in the future

Unknown

Cycode can’t confirm whether a token with a future expiration date is still usable, so it remains in Unknown state until the validity status can be confirmed.

Expired `exp` (date in the past)

Inactive

### Where to find the validity status [Copied!](#where-to-find-the-validity-status "Copy link to this section")

The JWT secret validity status can be viewed in the following locations, just like for other secret types:

*   Violations table – when the table is filtered on a specific secret type, you can show the **Validity** column to see the validity status of the secrets.
    
*   Secret value card – when you view the violations grouped by secret value, the card includes a secret validity tile in the top area of the **Overview** and **Risk analysis** tabs.
    
*   Violation card – when the table is filtered on a specific secret type, the card displays the secret validity in the **Overview** tab.
    

### How automatic resolution handles JWTs [Copied!](#how-automatic-resolution-handles-jwts "Copy link to this section")

*   If you’ve enabled automatic resolution for deactivated secrets, the secret will be resolved when the validity status changes from unknown to inactive.
    
*   If you’ve enabled automatic resolution for inactive secrets, the secret will be resolved whenever the validity status is **Inactive**.
    

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
