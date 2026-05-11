# API guide: Authentication and retrieving violations | Cycode Docs

Source: https://docs.cycode.com/view-and-manage-violations/api-authentication-and-retrieving-violations

---

# API guide: Authentication and retrieving violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/view-and-manage-violations/api-authentication-and-retrieving-violations.md "Edit this page")

* * *

This guide provides the steps to authenticate and interact with the Cycode API to fetch violation data.

## Step 1: Authorization [Copied!](#step-1-authorization "Copy link to this section")

Before making API requests, you must generate a Personal Access Token (PAT) from the Cycode platform.

### Generate a Personal Access Token (PAT) [Copied!](#generate-a-personal-access-token-pat "Copy link to this section")

1.  Log in to your Cycode account.
2.  Hover over the **User Profile** icon in the top right corner.
3.  Select **Personal Access Token**.
4.  Click **\+ Access Token**.
5.  Enter a **Name** for your token and click **Create**.

Important

Copy the **Client ID** and **Client Secret** immediately. You will not be able to see the secret again after you press **Done**.

### Step B: Obtain API bearer token [Copied!](#step-b-obtain-api-bearer-token "Copy link to this section")

Exchange your PAT credentials for a short-lived API bearer token.

**Endpoint**

Method

`POST`

US Region

`https://api.cycode.com/api/v1/auth/api-token`

EU Region

`https://api.eu.cycode.com/api/v1/auth/api-token`

**Request body**

```
1
2
3
4
```

```json
{
  "clientId": "YOUR_CLIENT_ID",
  "secret": "YOUR_CLIENT_SECRET"
}
```

**Response**

The returned token is valid for 35 minutes (2100 seconds).

```
1
2
3
4
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI...",
  "expires_in": 2100
}
```

## Step 2: Fetching violations (pagination) [Copied!](#step-2-fetching-violations-pagination "Copy link to this section")

The Violations API uses cursor-based pagination. You must request the first page, extract the cursor token, and use it to fetch subsequent pages.

**Endpoints (GET)**

Region

URL

US

`https://api.cycode.com/v4/violations`

EU

`https://api.eu.cycode.com/v4/violations`

**Headers**

```
Authorization: Bearer <YOUR_ACCESS_TOKEN>
Content-Type: application/json
```

### Logic flow [Copied!](#logic-flow "Copy link to this section")

1.  **Initial request** — Send a `GET` request with your desired filters (e.g., `page_size`, `status`). Omit the `next_page_token` parameter.
2.  **Process response** — Save the `items` (violations data) and extract the `next_page_token` string.
3.  **Loop:**
    *   If `next_page_token` is present, send the next request using the same parameters plus the `next_page_token` value.
    *   If `next_page_token` is `null`, retrieval is complete.

Note

Ensure you refresh your bearer token if the loop runs longer than the token’s lifespan.

## API usage example [Copied!](#api-usage-example "Copy link to this section")

**Retrieve violations endpoint:** `/v4/violations`

### 1\. Initial request [Copied!](#1-initial-request "Copy link to this section")

Fetch the first page of results. Note that the `next_page_token` is not included in the first call.

```
1
2
3
```

```bash
curl --location --request GET 'https://api.cycode.com/v4/violations?page_size=100&status=Open&category=SecretDetection' \
--header 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
--header 'Content-Type: application/json'
```

### 2\. Subsequent request (pagination) [Copied!](#2-subsequent-request-pagination "Copy link to this section")

To retrieve the next set of results, pass the `next_page_token` received in the response of the previous request.

```
1
2
3
```

```bash
curl --location --request GET 'https://api.cycode.com/v4/violations?page_size=100&status=Open&category=SecretDetection&next_page_token=abc-123-cursor-string' \
--header 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
--header 'Content-Type: application/json'
```

## Query parameters [Copied!](#query-parameters "Copy link to this section")

**Endpoint:** `/v4/violations`

Parameter

Type

Required

Description

`next_page_token`

String

Yes (after first request)

A token representing the position to fetch the next page of results from. Used for cursor-based pagination.

`risk_score_min`

Integer

No

Filter by a minimum risk score.

`status`

String

No

Filter by violation status. Options: `Open`, `Resolved`, `Dismissed`. (Default: All)

`category`

String

No

Filter by security category. Options: `SecretDetection`, `CI/CD Security`, `DAST`, `SAST`, `SCA`, `IaC`, `Cloud Security`, `Data Security`, `Container Security`, `API Security`, `Bug Bounty`. (Default: All)

`sort_by`

String

No

Specifies the field(s) to sort results by. By default, sorting is ascending. Prefix the field name with a hyphen (`-`) for descending order (e.g., `name` for ascending, `-name` for descending). Provide multiple values for multi-field sorting. Example: `created_at`

`repository_ids`

Array\[String\]

No

Filter by specific repositories using the Cycode Internal ID (retrieved via Graph Query). **Syntax:** Use indexed array notation in the query string. **Example:** `repository_ids[0]=123&repository_ids[1]=4321`

Note

To view additional filters, navigate to the API docs via the platform: **User Profile Icon** (top right) > **API Documentation** > **Violations** > **Get Violations**.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
