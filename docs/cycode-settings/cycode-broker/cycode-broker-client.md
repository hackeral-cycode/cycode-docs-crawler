# Cycode Broker client | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/cycode-broker/cycode-broker-client

---

# Cycode Broker client

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/cycode-broker/cycode-broker-client.md "Edit this page")

Updated on Apr 8, 2025 • Published on Aug 6, 2024

* * *

The Cycode Broker client is a standalone .NET application that’s publicly available from DockerHub `(docker pull cycodehq/broker-client:latest`), which communicates with the broker server that resides inside the Cycode cluster.

![](/assets/56db87b-image.png)

The client is responsible for:

*   Getting tasks from the broker server
    
*   Communicating with the internal asset to get the data
    
*   Sending the data to the broker server
    

## Configuring the broker client [Copied!](#configuring-the-broker-client "Copy link to this section")

Regarding Custom Certificates

The Broker **does not** currently support the use of custom certificates (either for the internal tools to be connected or for proxies).

The client can be executed in one of two modes, standard `docker run` or as part of an existing Kubernetes cluster.

The client is configured using the following ENV variables (the installation command with the generated ENV variables is received upon broker creation in the UI, see image below):

*   `CYCODE_API_URL` - Defines which SaaS environment the broker is communicating with (api.cycode.com / api.eu.cycode.com, etc.)
    
*   `CYCODE_CLIENT_ID` and `CYCODE_CLIENT_SECRET` - Used for initial authentication with the SaaS cluster to receive a JWT with which it can authenticate to our SaaS cluster
    
*   `BROKER_ID` - Used to connect between the client and the relevant saved tenant integrations in the server
    

### Resource allocation [Copied!](#resource-allocation "Copy link to this section")

We recommend allocating a minimum of 1 CPU and 2 GB of memory to the `broker-client` image.

The requirement is already part of the Kubernetes configuration setup.

For `docker run` executions you can use the following syntax within the `docker run` command: `-m 2G --cpus="1"`

### Storage [Copied!](#storage "Copy link to this section")

To enhance the functionality and performance of the client, particularly when dealing with substantial data artifacts like large repositories and scanned container images, it is advisable to mount an external disk.

Mounting a disk provides the necessary space required for such extensive operations, thereby optimizing the overall performance of the client.

The client utilizes the `/tmp` directory for temporary file storage.

To mount the disk to the client image, add `-v /path/to/disk:/tmp` to the `docker run` command or to the Kubernetes cluster configuration.

### Logging [Copied!](#logging "Copy link to this section")

In Docker based installations, the client’s log output is saved on the host machine under `/var/lib/docker/containers/`, in a file named `-json.log`.

To prevent the depletion of disk space on the host machine due to accumulating log files, a log rotation mechanism is supported via the following `docker run` parameters, which are provided as part of the command that is shown upon broker creation:

*   `--log-opt max-size=10m`
    
*   `--log-opt max-file=3`
    

This log rotation strategy ensures that older log files are periodically compressed, archived, or deleted, maintaining optimal use of disk space while preserving essential log information for troubleshooting and monitoring purposes.

### Clone method [Copied!](#clone-method "Copy link to this section")

By default, **the broker-client performs HTTP/S based clones** using the token created during SCM integration. The same token is used to perform REST/GraphQL requests to the SCM instance.

If for some reason HTTP/S cloning does not suit you and you need the broker-client to clone repositories **via SSH**, you should follow the following instructions:

1.  On the host machine, create a SSH keypair.
    
2.  On your SCM instance, add the **public SSH key** to a user that has access to all repositories that are expected to be scanned. For example, in _Gitlab enterprise_ instances this is located under `https:////profile/keys`.
    
3.  You will need to pass the **private key** base64 encrypted content to the `broker-client` using an environment variable. First, store it in some environment variable on the host machine. For example, run `export SSH_KEY=$(base64 -w 0 /path/to/private/key)`.
    
4.  Next, add a dedicated environment variable (`SSH_CLONE_PRIVATE_KEY`) to the `docker run` command in which you provide the encoded private key we saved in the previous step. In the above example, it will be `--env SSH_CLONE_PRIVATE_KEY=$SSH_KEY`. This parameter should be added to the `docker run` command that is generated upon broker creation/modification in the Cycode UI.
    
5.  If the `broker-client` receives this environment variable, it will:
    
    1.  Verify that the private key passed represents a valid private SSH key (and will not initialize otherwise).
    2.  Save it locally so it can be used in all future SCM clones.
    3.  Set its clone execution mode to SSH.
6.  **Custom SSH port** - If you wish to use a custom SSH port for cloning (instead of the default port 22), you can do it by using a dedicated environment variable (`SSH_CLONE_CUSTOM_PORT`). For example, if you wish to perform SSH clones via port 766, add the following to the initial `docker run` command: `--env SSH_CLONE_CUSTOM_PORT=766`.
    

Note

SSH cloning is supported from version `0.16.1` onwards. Custom SSH port is supported from version `0.18.2` onwards.

### Proxy [Copied!](#proxy "Copy link to this section")

If your internal network needs a proxy to reach the internet, you can add the proxy configuration via environment variables. The relevant proxy environment variables are:

*   `HTTP_PROXY` - The proxy server used for HTTP requests.
    
*   `HTTPS_PROXY` - The proxy server used for HTTPS requests.
    
*   `NO_PROXY` - a comma-separated list of hostnames that should be excluded from proxying. Asterisks are not supported for wildcards; use a leading dot in case you want to match a subdomain. Examples:
    
    *   `NO_PROXY=.example.com` (with leading dot) will match `www.example.com`, but will not match `example.com`.
    *   `NO_PROXY=example.com` (without leading dot) will match `example.com`, but will not match `www.example.com`.

Note

In most cases, the proxy will be used by the broker client to communicate with the internet (in our case, communicate with the broker server) and will not be used to communicate with the internal asset. If that is indeed the case, you’ll need to add the internal asset domain (e.g GHE) to the `NO_PROXY` environment variable.

It is recommended to add a lowercase version of each environment variable you are using to prevent any misalignment with the OS (basically, you should have two versions for each environment variable name, lowercase and uppercase). Meaning `HTTP_PROXY` and `http_proxy`, `HTTPS_PROXY` and `https_proxy` and also `NO_PROXY` and `no_proxy`.

The value of `HTTP_PROXY` and/or `HTTPS_PROXY` **should not contain the scheme** (http/https). In the example above, it should simply be `HTTP_PROXY=example.com`.

### Allow lists [Copied!](#allow-lists "Copy link to this section")

The broker client performs outbound requests to 2 destinations:

1.  Cycode API.
    
2.  AWS S3 for large file uploads (mainly repository clones).
    

If your network contains devices that inspect / block outbound traffic, you’ll need to allow the following URLs:

*   **Cycode API**: `https://api.cycode.com` or `https://api.eu.cycode.com` (EU environment).
    
*   **S3**: `https://tenants-prod-us.s3.us-east-1.amazonaws.com/` or `https://tenants-prod-eu.s3.eu-central-1.amazonaws.com` (EU environment).
    

## Broker Security [Copied!](#broker-security "Copy link to this section")

Data is written to the mounted disk for temporary storage until it can be transferred to the Cycode SaaS for processing. To secure the data from the Cycode broker, HTTPS (encrypted with TLS 1.2) is used to transport the data to the s3 bucket for temporary storage. These code snippets are hard deleted with no back-ups after processing.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
