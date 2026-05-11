# Add members to Cycode via API | Cycode Docs

Source: https://docs.cycode.com/cycode-settings/user-administration/manage-cycode-members/add-members-to-cycode-via-api

---

# Add members to Cycode via API

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/cycode-settings/user-administration/manage-cycode-members/add-members-to-cycode-via-api.md "Edit this page")

* * *

One way of adding members to Cycode is by inviting them using a dedicated API using the following procedure:

1.  Obtain a JWT token using a Project Manager, Admin or Owner role. You can use a personal access token or the portal’s token.
    
2.  Use the following HTTP API to invite members:
    
    1.  Replace the token with the token from step 1 above.
        
    2.  Assign each user with a role (Viewer, Member, ProjectManager, Admin, Owner).
        
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
        
        The output will be the list of created users with their user IDs, for example:
        
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
                "password": null
            },
            {
                "email": "user2@cycode.com",
                "id": "<user2Id>",
                "password": null
            }
        ]
        ```
        
    3.  If you want to invite a user to specific projects, add the `project_ids` parameter with a list of project ids, for example:
        
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
