# Elasticsearch | Cycode Docs

Source: https://docs.cycode.com/integrations/alerting-tools/elasticsearch

---

# Elasticsearch

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/integrations/alerting-tools/elasticsearch.md "Edit this page")

Updated on Oct 21, 2025 • Published on Sep 28, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

When you integrate Elasticsearch with Cycode, you can create automated workflows to send violations as Elasticsearch documents.

### Create an index for the integration [Copied!](#create-an-index-for-the-integration "Copy link to this section")

Before you can export violations from Cycode, you must create an Elasticsearch index for Cycode to send the data. You can create this index in one of the following ways.

#### Cloud based [Copied!](#cloud-based "Copy link to this section")

1.  Sign in to your Elastic Cloud Console.
    
2.  Navigate to **Stack Management** > **Index Management** > **Create Index**.
    
3.  Provide an index name, for example `cycode-violations`.
    
4.  Click **Create Index**.
    

#### On premise (self hosted) [Copied!](#on-premise-self-hosted "Copy link to this section")

**With Kibana**

1.  Type the following command to open your Kibana dashboard:
    
    https:///app/management/data/index\_management/indices
    
2.  Click **Create Index**.
    
3.  Provide an index name, for example: `cycode-violations`
    
4.  Click **Create Index**.
    

**With Elastic User (API)** If Kibana is not available, you can create the index using the following Elasticsearch API:

curl -X PUT “https:///cycode-violations”  
\-H “Content-Type: application/json”  
\-u “elastic:”

```

This creates an empty index named `cycode-violations` that Cycode can use for exporting violation data.

### Required index permissions

Cycode requires the following index-level privileges to export violations into Elasticsearch.

| Permission | Reason |
| --- | --- |
| write | Used to perform insert and update operations on the index. |
| view_index_metadata | Used to resolve index names. |


  Note
  Cycode recommends that you create a dedicated API key or user for the Cycode integration. This will limit the scope of Cycode’s access to the necessary index.


## Connect Elasticsearch to Cycode

1. Provide a name for the integration.

2. Get the following parameters from Elasticsearch and apply them in the Cycode connector wizard.
    | Parameter | Value |
    | --- | --- |
    | **Base URL** | The URL of your Elasticsearch host (for example: `https://your-elastic-instance:9200`).For information on how to get the base URL, go to [Retrieve the Elasticsearch base URL](/integrations/alerting-tools/elasticsearch#retrieve-the-elasticsearch-base-url) below.  |
    | **Authentication type** | Cycode supports the following authentication modes:<br>• **Simple** – Use this option for direct connections without additional identity layers.<br>• **Modern** – Use this option for environments protected by Google Cloud Identity-Aware Proxy (IAP). |
    | **Authentication method** | For simple authentication, select one of the following methods:<br>• **Token**: Provide your Elasticsearch access token. For information on how to generate an API token, go to [Generate an API key](/integrations/alerting-tools/elasticsearch#generate-an-api-key) below.<br>• **Password**: Enter your Elasticsearch credentials. For information on how to get or create your credentials, go to [Create Elasticsearch credentials](/integrations/alerting-tools/elasticsearch#create-elasticsearch-credentials) below.<br><br>For modern authentication, provide the following:<br>• **Google IAP OAuth client ID**<br>• **Google service account file** – a JSON file containing the service account credentials.<br><br>For information on how to get your Google IAP OAuth client ID and service account file, go to [Authenticate to Google IAP](/integrations/alerting-tools/elasticsearch#authenticate-to-google-iap) below. |

### Retrieve the Elasticsearch base URL

#### Cloud based

1. Sign in to your Elastic Cloud Console and navigate to your deployment.

3. Copy the cloud endpoint, for example `https://..gcp.cloud.es.io:443`.

#### On premise (self hosted)

1. Copy the host/IP of your Elasticsearch node with the HTTP(S) port (default: **9200**), for example  `https://es.example.com:9200`.

2. Verify that the instance is reachable from your network.

### Create Elasticsearch credentials

#### Cloud based

1. Sign in to Elastic Cloud Console and navigate to your deployment.
    `https:///app/management/security/roles`

2. To create or assign a role with the necessary privileges do the following:
    1. Name the role, for example `cycode_writer_role`.
    2. Under **Index privileges**, configure the following:
        | Parameter | Value |
        | --- | --- |
        | **Indices** | cycode-* |
        | **Privileges** | writeview_index_metadata |
    3. Save the role.
    4. In the Users page, edit the **cycode_integration** user and assign the **cycode_writer_role** to it.

3. To create a dedicated Cycode user, navigate to `https:///app/management/security/users` and do the following:
    1. Click **Create user**.
    2. Configure the following:
        | Parameter | Value |
        | --- | --- |
        | **Username** | cycode-integration |
        | **Password** | Choose a strong password |
        | **Full name**/**Email** | Optional |
    3. Assign “cycode_writer_role” role.

4. To test the user credentials, from your terminal run the following command to verify access:

    curl -X GET "https:///_resolve/index/*"\
       -H "Content-Type: application/json"\
       -u "cycode-integration:"
    ```

    If the credentials are correct, you’ll see a `cycode-violations` index.

#### On premise (self hosted)

You can create a basic authentication user for Cycode using either the Kibana UI or via the Elasticsearch REST API with the elastic superuser.

**Kibana UI**
Follow the instructions in [Create Elasticsearch credentials > Cloud based](/integrations/alerting-tools/elasticsearch#cloud-based2).

**Elasticsearch API (Elastic user)**
If your cluster doesn't have a Kibana interface, you can create a user via the the REST API using the built-in Elastic account.

1. To create **cycode_writer_role**:

    curl -X POST "https:///_security/role/cycode_writer_role" \
      -H "Content-Type: application/json" \
      -u "elastic:" \
      -d '{
        "indices": [
          {
            "names": ["cycode-*"],
            "privileges": ["write", "view_index_metadata"]
          }
        ]
      }'
    ```

2. To create a **cycode-integration** user:

| curl -X POST "https:///elasticsearch/_security/user/cycode-integration" \ | -H "Content-Type: application/json" \ |
| --- | --- |
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
