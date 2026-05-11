# Manage images with Cycode-Beta commands | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/manage-images-with-cycode-beta-commands

---

# Manage images with Cycode-Beta commands

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/manage-images-with-cycode-beta-commands.md "Edit this page")

* * *

Cycode Enterprise Server Documentation is in Beta

This documentation is ongoing and is being updated.

## Cycode-Beta Command [Copied!](#cycode-beta-command "Copy link to this section")

This section details the `cycode-beta` commands used for the Cycode on-premise installation.

### Install Infrastructure Images [Copied!](#install-infrastructure-images "Copy link to this section")

Installs components that make up the Cycode on-premise installation.

```
1
```

```bash
cycode-beta install-infra
```

### Uninstall Infrastructure Images [Copied!](#uninstall-infrastructure-images "Copy link to this section")

Uninstalls the images for all the infrastructure components that make up the Cycode on-premise installation.

```
1
```

```bash
cycode-beta uninstall-infra
```

### Install Monitoring Images [Copied!](#install-monitoring-images "Copy link to this section")

Installs components that make up the Cycode on-premise installation.

```
1
```

```bash
cycode-beta install-monitor
```

### Uninstall Monitoring Images [Copied!](#uninstall-monitoring-images "Copy link to this section")

Uninstalls the images for all the infrastructure components that make up the Cycode on-premise installation.

```
1
```

```bash
cycode-beta uninstall-monitor
```

### Install Services Images [Copied!](#install-services-images "Copy link to this section")

Installs the components for all the Cycode services.

```
1
```

```bash
cycode-beta install-services
```

### Uninstall Services Images [Copied!](#uninstall-services-images "Copy link to this section")

Removes the components that make up the Cycode services in the `api` and `app` namespaces.

```
1
```

```bash
cycode-beta force-delete-services
```

## Cycode-Admin Command [Copied!](#cycode-admin-command "Copy link to this section")

This section details the `cycode-admin` commands used for the Cycode on-premise installation.

### Create Tenant [Copied!](#create-tenant "Copy link to this section")

Creates a new tenant for the Cycode installation after the on-premise installation is completed. Below is an example of how to use this command:

```
1
```

```bash
cycode-admin create-tenant
```

Once you enter the command you will be prompted to enter the following information (do not include any spaces):

```
1
2
3
4
```

```bash
bash-5.1# cycode-admin create-tenant
Enter company name: wonka-industries
Enter tenant name: willy
OK --> {"company_name":"wonka-industries","tenant_name":"willy","id":"3620aada-d723-4e9e-88ae-0d7a72259b72"}
```

### List Tenants [Copied!](#list-tenants "Copy link to this section")

Returns the list of the current tenants attached to the Cycode installation. Below is an example of how to use this command:

```
1
```

```bash
cycode-admin list-tenant
```

After entering this command, you will see something like the following appear:

```
1
2
```

```bash
bash-5.1# cycode-admin list-tenant
3620aada-d723-4e9e-88ae-0d7a72259b72 willy 2022-11-08T21:27:08.158468+00:00
```

### Delete Tenant [Copied!](#delete-tenant "Copy link to this section")

Deletes the selected tenant from the Cycode installation.

Warning

This is a permanent action, so do not do this unless it is absolutely necessary.

Below is an example of how to use this command:

```
1
```

```bash
cycode-admin delete-tenant
```

After entering this command, you will be prompted to select the tenant you want to delete. Use the arrow keys to pick the file you would like to delete, then hit the Enter/Return key. Once the command finishes running, use the [list tenants](#list-tenants) command to verify the tenant was successfully deleted.

### List Users [Copied!](#list-users "Copy link to this section")

Lists the current users attached to the Cycode installation. Below is an example of how to use this command:

```
1
```

```bash
cycode-admin list-users
```

After entering this command, you will be prompted to choose a tenant. Select the one you want to look at and hit the Enter/Return key. You will see a list of users appear (as seen below):

```
1
2
```

```bash
bash-5.1# cycode-admin list-users
willy ["owner"]
```

### Create User [Copied!](#create-user "Copy link to this section")

Creates a user and attaches the user to the selected tenant in this Cycode installation. Below is an example of how to use this command:

```
1
```

```bash
cycode-admin create-user
```

After entering this command, you will be prompted to enter a email and full name, as seen below (do not include spaces here):

```
1
2
3
```

```bash
bash-5.1# cycode-admin create-user
Enter admin email: willy@wonka-industries.com
Enter admin full name: willy
```

Once the email and full name have been provided, you will be provided a list of tenants to add the user to. Select the one this user will be added to with the arrow keys and press the Enter/Return key.

If successful, you will see something like the following appear:

```
1
2
3
4
5
6
```

```json
  {
    "email": "willy@wonka-industries.com",
    "Name": "willy",
    "tenant_id" : "3620aada-d723-4e9e-88ae-0d7a72259b72",
    "roles" : [ "owner" ]
  }
```

## Cycode Command (DEPRECATED) [Copied!](#cycode-command-deprecated "Copy link to this section")

This section details the `cycode` commands used for the Cycode on-premise installation.

### Install (DEPRECATED) [Copied!](#install-deprecated "Copy link to this section")

Runs the installation and update process for Cycode. Below is an example of how to use this command:

```
1
```

```bash
cycode install
```

### Upgrade (DEPRECATED) [Copied!](#upgrade-deprecated "Copy link to this section")

Upgrades the `cycode-operator` and Cycode dependencies to the latest versions. Below is an example of how to use this command:

```
1
```

```bash
cycode upgrade
```

### Uninstall (DEPRECATED) [Copied!](#uninstall-deprecated "Copy link to this section")

This command will run the uninstall process for Cycode. Below is an example of how to use this command:

```
1
```

```bash
cycode uninstall
```

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
