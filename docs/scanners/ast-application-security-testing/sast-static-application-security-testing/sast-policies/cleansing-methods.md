# Cleansing methods | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods

---

# Cleansing methods

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-policies/cleansing-methods.md "Edit this page")

Updated on May 21, 2026 • Published on May 28, 2025

* * *

Some rules such as XSS support the detection of sanitization functions to reduce false positives the details can be seen below:

### C# [Copied!](#c "Copy link to this section")

Policy Name

Functions

Unsanitized user input in HTTP response (XSS)

`System.Web.HttpUtility.HtmlEncode`  
`System.Web.HttpUtility.HtmlAttributeEncode`  
`System.Web.Security.AntiXssEncoder`  
`Ganss.Xss.HtmlSanitizer.Sanitize`

### Go [Copied!](#go "Copy link to this section")

Policy Name

Functions

Unsanitized user input in SQL query

`QuoteIdentifier`

### Java [Copied!](#java "Copy link to this section")

Policy Name

Functions

Unsanitized user input in HTTP response (XSS)

`org.apache.commons.text.unescapeJava`  
`java.net.URLEncoder`

Unsanitized user input in output stream (XSS)

`org.owasp.encoder.Encode.forHtml`  
`org.owasp.encoder.Encode.forHtmlAttribute`  
`org.owasp.encoder.Encode.forHtmlContent`  
`org.owasp.encoder.Encode.forHtmlUnquotedAttribute`  
`org.apache.commons.text.StringEscapeUtils.escapeHtml4`  
`org.apache.commons.text.StringEscapeUtils.escapeHtml3`  
`ESAPI.encoder().encodeForHTML`  
`ESAPI.encoder().encodeForHTMLAttribute`  
`ESAPI.encoder().encodeForHTMLContent`  
`Jsoup.clean`  
`org.springframework.web.util.HtmlUtils.htmlEscape`

### JavaScript [Copied!](#javascript "Copy link to this section")

Policy Name

Functions

Unsanitized user input in HTTP response (XSS)

`React.createElement`

Unsanitized user input in dynamic HTML insertion (XSS)

`DOMPurify.sanitize`  
`sanitizeHtml`  
`React.createElement`

Unsanitized user input in raw HTML strings (XSS)

`DOMPurify.sanitize`  
`sanitizeHtml`

Unsanitized input in SQL query

`mysql.escape`  
`mysql.escapeId`  
`mysql.format`

Unsanitized user input in React inner HTML method (XSS)

`DOMPurify.sanitize`  
`sanitizeHtml`

### PHP [Copied!](#php "Copy link to this section")

Policy Name

Functions

Unsanitized user input in raw HTML strings (XSS)

`htmlspecialchars`  
`htmlentities`  
`strip_tags`  
`HTMLPurifier->purify`

Unsanitized user input in ’echo’ function (XSS)

`htmlspecialchars`  
`htmlentities`  
`strip_tags`  
`HTMLPurifier->purify`

Unsanitized external input in SQL query

`mysqli_real_escape_string`  
`pg_escape_string`  
`mysql_escape_string`  
`db2_escape_string`  
`real_escape_string`  
`escape_string`  
`intval`  
`floatval`  
`quote`  
`quoteIdentifier`

### Python [Copied!](#python "Copy link to this section")

Policy Name

Functions

Unsanitized user input in output stream (XSS)

`html_sanitizer.Sanitizer().sanitize`  
`django.utils.html.escape`  
`django.utils.html.strip_tags`  
`html.escape`  
`flask.escape`  
`markupsafe.escape`  
`bleach.clean`  
`flask.render_template`

Unsanitized external input in SQL query

`mysql.connector.conversion.MySQLConverter.escape`  
`pymysql.connect.escape`  
`pymysql.connect.escape_string`  
`psycopg2.extensions.adapt.getquoted`  
`psycopg.sql.Identifier`  
`psycopg.sql.Literal`

Unsanitized input in NoSQL query

`bson.ObjectId`  
`bson.int64.Int64`  
`bson.decimal128.Decimal128`  
`bson.datetime_ms.DatetimeMS`

Unsanitized user input in raw HTML strings (XSS)

`html_sanitizer.Sanitizer().sanitize`  
`django.utils.html.escape`  
`django.utils.html.strip_tags`  
`html.escape`  
`flask.escape`  
`markupsafe.escape`  
`bleach.clean`

### Ruby [Copied!](#ruby "Copy link to this section")

Policy Name

Functions

Unsanitized user input in raw HTML strings (XSS)

`ActionView::Helpers::SanitizeHelper.strip_tags`  
`ActionView::Helpers::SanitizeHelper.sanitize`  
`Loofah::Helpers.sanitize`  
`Loofah::Helpers.strip_tags`  
`Loofah.scrub_html5_fragment`  
`Loofah.scrub_html4_fragment`  
`Sanitize.fragment`  
`Sanitize.document`

Unsanitized external input in SQL query

`ActiveRecord.Base.sanitize_sql`  
`ActiveRecord.Base.sanitize_conditions`  
`ActiveRecord.Base.sanitize_sql_array`  
`ActiveRecord.Base.sanitize_sql_for_assignment`  
`ActiveRecord.Base.sanitize_sql_for_conditions`  
`ActiveRecord.Base.sanitize_sql_hash_for_assignment`  
`ActiveRecord.Base.sanitize_sql_hash_for_conditions`  
`ActiveRecord.Base.sanitize_sql_for_order`  
`ActiveRecord.Base.sanitize_sql_like`  
`ActiveRecord.Sanitization.sanitize_sql`  
`ActiveRecord.Sanitization.sanitize_conditions`  
`ActiveRecord.Sanitization.sanitize_sql_array`  
`ActiveRecord.Sanitization.sanitize_sql_for_assignment`  
`ActiveRecord.Sanitization.sanitize_sql_for_conditions`  
`ActiveRecord.Sanitization.sanitize_sql_hash_for_assignment`  
`ActiveRecord.Sanitization.sanitize_sql_hash_for_conditions`  
`ActiveRecord.Sanitization.sanitize_sql_for_order`  
`ActiveRecord.Sanitization.sanitize_sql_like`  
`to_i`  
`to_f`

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
