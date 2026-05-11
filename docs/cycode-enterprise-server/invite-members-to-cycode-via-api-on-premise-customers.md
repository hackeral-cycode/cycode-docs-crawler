# Invite members to Cycode via API (on-premise customers) | Cycode Docs

Source: https://docs.cycode.com/cycode-enterprise-server/invite-members-to-cycode-via-api-on-premise-customers

---

# Invite members to Cycode via API (on-premise customers)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-enterprise-server/invite-members-to-cycode-via-api-on-premise-customers.md "Edit this page")

Updated on Mar 27, 2025 • Published on Mar 27, 2025

* * *

You can add members to Cycode by inviting them using a dedicated API.

**To invite members using the Cycode API**

1.  Obtain a JWT token using a Project Manager, Admin or Owner role. You can use a personal access token or the portal’s token.
    
2.  Use the following HTTP API to invite members:
    
    1.  Replace `api.cycode.com` with your on-premise domain.
        
    2.  Replace the token with the token from step 1 above.
        
    3.  Assign a role to each user (Viewer, Member, ProjectManager, Admin, Owner).
        
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
        14
        15
        ```
        
        ```bash
        curl --location 'https://api.cycode.com/projects/api/v1/members' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer eyJhbGciOiJSUzmtp...1kFWMdo6zjCMS_kxg' \
        --data-raw '[
            {
                "email": "user1@cycode.com",
                "name": "Full Name",
                "role": "Member"
            },
            {
                "email": "user2@cycode.com",
                "name": "Full Name",
                "role": "Member"
            }
        ]'
        ```
        
        The output is the list of users that were created along with their user IDs. If you are using Cycode User Management v2 without email configuration, the response also includes the users’ temporary passwords, for example:
        
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
        ```
        
        ```json
        [
            {
                "email": "user1@cycode.com",
                "id": "<user1Id>",
                "password": "E*R*sB8cfpYo"
            },
            {
                "email": "user2@cycode.com",
                "id": "<user2Id>",
                "password": "L8V#7E4lYceC"
            }
        ]
        ```
        
    4.  To invite a member to specific projects, add the `project_ids` parameter with a list of project IDs, for example:
        
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
            "email": "user1@cycode.com",
            "name": "Full Name",
            "role": "Member",
            "project_ids": [1, 3, 10]
        }
        ```
        

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
