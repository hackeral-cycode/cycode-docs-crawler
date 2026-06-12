# Get custom connector upload history and errors | Cycode Docs

Source: https://docs.cycode.com/integrations/security-tools/create-a-custom-connector/get-custom-connector-upload-history

---

# Get custom connector upload history and errors

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/security-tools/create-a-custom-connector/get-custom-connector-upload-history.md "Edit this page")

* * *

After you push data to Cycode through a [custom connector](/integrations/security-tools/create-a-custom-connector/) , each upload is processed as a _sync_. Cycode keeps a history of these syncs, including any violations that failed to import. You can use the API described on this page to:

*   Retrieve the list of uploads (sync IDs) for a connector, with the status of each.
*   Retrieve the errors for the violations that failed to import in a specific upload.

This is useful for troubleshooting an upload — for example, to confirm that Cycode received your data and to find out why specific violations were rejected.

Note

This is a non-public API intended for advanced troubleshooting. The request and response formats may change.

## Before you begin [Copied!](#before-you-begin "Copy link to this section")

You need:

*   A **bearer token**, created the same way as in [Create a custom connector](/integrations/security-tools/create-a-custom-connector/#configure-the-custom-connector) . The token expires after 30 minutes.
*   The **Integration ID** of your custom connector. This is the same Integration ID you use to request an S3 pre-signed URL.

Pass the bearer token in the `Authorization` header of every request:

```
1
```

```http
Authorization: Bearer your-auth-token-here
```

## Step 1: Get the upload (sync) IDs [Copied!](#step-1-get-the-upload-sync-ids "Copy link to this section")

Each upload corresponds to a sync with a numeric ID. Use the following request to list the syncs for your connector, most recent first.

```
1
```

```http
GET https://api.cycode.com/external-detections/api/v1/integrationstatus/sync-history/{integrationId}/list
```

**Path parameter**

Parameter

Description

Type

Required

`integrationId`

The Integration ID of your custom connector.

GUID

Yes

**Query parameters**

Parameter

Description

Type

Required

`created_from`

Return only syncs created on or after this time. Defaults to 30 days ago.

Datetime offset (ISO 8601)

No

`skip`

Number of syncs to skip (offset). Defaults to `0`.

Integer

No

`take`

Maximum number of syncs to return.

Integer

No

**Example request**

```
1
2
3
```

```bash
curl -X GET \
  "https://api.cycode.com/external-detections/api/v1/integrationstatus/sync-history/123e4567-e89b-12d3-a456-426614174000/list?take=20" \
  -H "Authorization: Bearer your-auth-token-here"
```

**Example response**

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
```

```json
[
  {
    "id": 10245,
    "integration_type": "CustomConnector",
    "started_at": "2026-05-28T09:14:02.000Z",
    "finished_at": "2026-05-28T09:15:37.000Z",
    "modified": "2026-05-28T09:15:37.000Z",
    "counter_value": 0,
    "is_initial_sync": false,
    "sync_status": "Completed",
    "detections_count": 134
  }
]
```

**Response fields**

Field

Description

Type

`id`

The sync (upload) ID. Use this value as the `syncId` in [Step 2](#step-2-get-the-upload-errors-for-an-upload) .

Integer

`integration_type`

The type of the integration.

String

`started_at`

Time the sync started.

Datetime offset

`finished_at`

Time the sync finished. `null` if the sync hasn’t finished.

Datetime offset

`modified`

Time the sync status was last updated.

Datetime offset

`counter_value`

Internal counter value for the integration at the time of retrieval. `0` if no counter was found.

Integer

`is_initial_sync`

`true` if this is the first sync for the integration.

Boolean

`sync_status`

The current status of the sync (for example, `Completed`).

String

`detections_count`

The number of violations found during the sync.

Integer

Tip

To get only the most recent sync, omit the `/list` segment: `GET https://api.cycode.com/external-detections/api/v1/integrationstatus/sync-history/{integrationId}` This returns a single sync object in the same format.

## Step 2: Get the upload errors for an upload [Copied!](#step-2-get-the-upload-errors-for-an-upload "Copy link to this section")

Use the sync ID from Step 1 to retrieve the violations that failed to import during that upload, along with the reason each one failed.

```
1
```

```http
GET https://api.cycode.com/generic-connector/api/v1/upload-history/failed-violations/{syncId}
```

**Path parameter**

Parameter

Description

Type

Required

`syncId`

The sync (upload) ID returned by [Step 1](#step-1-get-the-upload-sync-ids) .

Integer

Yes

**Query parameters (pagination)**

Parameter

Description

Type

Required

`page_number`

The zero-based page index to retrieve. Defaults to `0` (the first page).

Integer

No

`page_size`

The maximum number of items to return per page (maximum 20000).

Integer

No

`sort_by`

Fields to sort by. Prefix a field with `-` for descending order.

Array of strings

No

**Example request**

```
1
2
3
```

```bash
curl -X GET \
  "https://api.cycode.com/generic-connector/api/v1/upload-history/failed-violations/10245?page_number=0&page_size=100" \
  -H "Authorization: Bearer your-auth-token-here"
```

**Example response**

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
```

```json
[
  {
    "time": "2026-05-28T09:15:12.000Z",
    "error_message": "Violation #42: 'severity' has an unsupported value 'Urgent'."
  },
  {
    "time": "2026-05-28T09:15:12.000Z",
    "error_message": "Violation #57: required field 'policy_unique_identifier' is missing."
  }
]
```

An empty array (`[]`) means that no violations failed to import for the given upload.

**Response fields**

Field

Description

Type

`time`

Time the violation failed to import.

Datetime offset

`error_message`

A human-readable description of why the violation was rejected.

String

**Pagination**

The response body contains the items for the requested page. Pagination metadata is returned in the `X-Pagination` response header as a JSON object:

```
1
2
3
4
5
6
7
8
```

```json
{
  "current_page": 0,
  "total_pages": 3,
  "page_size": 100,
  "total_count": 215,
  "has_more": true,
  "pagination_token": null
}
```

To retrieve the next page, increment `page_number` until `has_more` is `false`.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
