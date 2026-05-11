# Sensitive data in SAST violations | Cycode Docs

Source: https://docs.cycode.com/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/sensitive-data-in-sast-violations

---

# Sensitive data in SAST violations

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/sensitive-data-in-sast-violations.md "Edit this page")

Updated on Jan 20, 2026 • Published on Sep 15, 2024

* * *

## Overview [Copied!](#overview "Copy link to this section")

Cycode’s SAST Bearer engine has the ability to detect the presence of sensitive data inside SAST violations.  
When the Bearer engine detects this type of data, you’ll be able to see its association with the violation where it was detected. As such, Cycode’s SAST solution provides a unique capablity not available with other SAST engines in the market.

Sensitive data can be grouped into four categories: Personal Data, Personal Data (Sensitive), PII and, PHI, and the categories can also overlap. There are also subcategories, such as authenticating, contact, and more. See [Supported data types](/scanners/ast-application-security-testing/sast-static-application-security-testing/sast-violations/sensitive-data-in-sast-violations#supported-data-types) for details.

## Viewing senstive data in the platform [Copied!](#viewing-senstive-data-in-the-platform "Copy link to this section")

Whenever sensitive data is available for SAST violations, you’ll be able to view the data in the following methods:

### Violations page [Copied!](#violations-page "Copy link to this section")

In the SAST violations page, you can filter the violations using the Sensitive Data filter, as shown below, then select which sub-categories to apply:  
![](/assets/image%28508%29.png)

You can also add the optional “Sensitive Data” column to the violation table:  
![](/assets/image%28511%29.png)

### Violation card [Copied!](#violation-card "Copy link to this section")

In a SAST violation where sensitive data has been detected, opening the violation card displays a specific line with the sensitive data available:  
![](/assets/image%28512%29.png)

Notes

*   Sensitive data is only available for new SAST scans (will not be applied retroactively).
*   Requires using the Bearer engine.

### Context Intelligence Graph [Copied!](#context-intelligence-graph "Copy link to this section")

In a SAST violation where sensitive data has been detected, you can use the sensitive data tag to display results with sensitive data.

Use the following tags in the query:

*   personal-identifiable-information
*   personal-health-information
*   personal-data
*   personal-information-sensitive

Run the query as follows:  
![](/assets/image%28619%29.png)

## Supported data types [Copied!](#supported-data-types "Copy link to this section")

Cycode SAST supports 122 data types including Personal Data (PD), Sensitive Personal Data, Personally Identifiable Information (PII), and Protected Health Information (PHI).

The following is a catagorized list of the supported data types.

### Personal Data [Copied!](#personal-data "Copy link to this section")

#### Authenticating [Copied!](#authenticating "Copy link to this section")

*   Mother’s Maiden Name
*   Passwords
*   PIN

#### Behavioral Information [Copied!](#behavioral-information "Copy link to this section")

*   Browsing Behavior

#### Communication [Copied!](#communication "Copy link to this section")

*   Emails
*   Telephone Recordings
*   Voice Mail

#### Computer Device [Copied!](#computer-device "Copy link to this section")

*   Browser Fingerprint
*   Device identifier
*   IP address
*   Mac address

#### Contact [Copied!](#contact "Copy link to this section")

*   Email Address
*   Physical Address
*   Telephone Number

#### Credit History [Copied!](#credit-history "Copy link to this section")

*   Credit Capacity
*   Credit Records
*   Credit Standing
*   Credit Worthiness

#### Criminal Records [Copied!](#criminal-records "Copy link to this section")

*   Charges
*   Convictions
*   Pardons

#### Demographic [Copied!](#demographic "Copy link to this section")

*   Age Range
*   Date of birth
*   Geographic
*   Income Brackets
*   Physical Traits

#### Ethnicity [Copied!](#ethnicity "Copy link to this section")

*   Accents
*   Biometric Data
*   Ethnic Origin
*   National origin
*   Race
*   Spoken Languages

#### Family [Copied!](#family "Copy link to this section")

*   Divorces
*   Family Structure
*   Marriages
*   Offspring
*   Relationships
*   Siblings

#### Financial Accounts [Copied!](#financial-accounts "Copy link to this section")

*   Bank Account
*   Credit Card Number

#### Identification [Copied!](#identification "Copy link to this section")

*   Attitude
*   Call Logs
*   Demeanor
*   Firstname
*   Fullname
*   ID Number
*   Image
*   Lastname
*   Links clicked
*   Passport Number
*   Unique Identifier
*   Username

#### Location [Copied!](#location "Copy link to this section")

*   Country
*   GPS Coordinate
*   Room Number

#### Medical and Health [Copied!](#medical-and-health "Copy link to this section")

*   Blood Type
*   Disabilities
*   DNA code
*   Drugs test results
*   Family health history
*   Health Records
*   Personal health history
*   Physical and mental health
*   Prescriptions

#### Personal Ownership [Copied!](#personal-ownership "Copy link to this section")

*   Apartments
*   Cars
*   Houses
*   Personal Possessions

#### Physical Characteristic [Copied!](#physical-characteristic "Copy link to this section")

*   Age
*   Gender
*   Hair Color
*   Height
*   Piercings
*   Skin Tone
*   Tattoos
*   Weight

#### Preference [Copied!](#preference "Copy link to this section")

*   Colors
*   Dislikes
*   Favorite Foods
*   Intentions
*   Interests
*   Likes
*   Music
*   Opinions

#### Professional Information [Copied!](#professional-information "Copy link to this section")

*   Certifications
*   Disciplinary Actions
*   Employee Files
*   Employment History
*   Evaluations
*   Interviews
*   Job Titles
*   References
*   Salary
*   School attended
*   Work History

#### Public Life [Copied!](#public-life "Copy link to this section")

*   Character
*   General Reputation
*   Interactions
*   Martial Status
*   Political Affiliation
*   Religion
*   Social Status

#### Religion, Philosophical, Political Beliefs [Copied!](#religion-philosophical-political-beliefs "Copy link to this section")

*   Knowledge
*   Philosophical beliefs
*   Religious Beliefs
*   Thoughts

#### Sexual [Copied!](#sexual "Copy link to this section")

*   Gender identity
*   Sexual History
*   Sexual Preferences

#### Social Network [Copied!](#social-network "Copy link to this section")

*   Acquaintances
*   Associations
*   Connections
*   Friends
*   Group Membership

#### Transactional [Copied!](#transactional "Copy link to this section")

*   Credit
*   Income
*   Loan Records
*   Purchases
*   Purchases and Spending Habits
*   Sales
*   Taxes
*   Transactions

### Personal Data (Sensitive) [Copied!](#personal-data-sensitive "Copy link to this section")

#### Criminal Records [Copied!](#criminal-records-1 "Copy link to this section")

*   Charges
*   Convictions
*   Pardons

#### Ethnicity [Copied!](#ethnicity-1 "Copy link to this section")

*   Accents
*   Biometric Data
*   Ethnic Origin
*   National origin
*   Race
*   Spoken Languages

#### Medical and Health [Copied!](#medical-and-health-1 "Copy link to this section")

*   Blood Type
*   Disabilities
*   DNA code
*   Drugs test results
*   Family health history
*   Health Records
*   Personal health history
*   Physical and mental health
*   Prescriptions

#### Religion, Philosophical, Political Beliefs [Copied!](#religion-philosophical-political-beliefs-1 "Copy link to this section")

*   Knowledge
*   Philosophical beliefs
*   Religious Beliefs
*   Thoughts

#### Sexual [Copied!](#sexual-1 "Copy link to this section")

*   Gender identity
*   Sexual History
*   Sexual Preferences

### PHI [Copied!](#phi "Copy link to this section")

#### Communication [Copied!](#communication-1 "Copy link to this section")

*   Emails
*   Telephone Recordings
*   Voice Mail

#### Contact [Copied!](#contact-1 "Copy link to this section")

*   Email Address
*   Physical Address
*   Telephone Number

#### Identification [Copied!](#identification-1 "Copy link to this section")

*   Attitude
*   Call Logs
*   Demeanor
*   Firstname
*   Fullname
*   ID Number
*   Image
*   Lastname
*   Links clicked
*   Passport Number
*   Unique Identifier
*   Username

#### Medical and Health [Copied!](#medical-and-health-2 "Copy link to this section")

*   Blood Type
*   Disabilities
*   DNA code
*   Drugs test results
*   Family health history
*   Health Records
*   Personal health history
*   Physical and mental health
*   Prescriptions

### PII [Copied!](#pii "Copy link to this section")

#### Authenticating [Copied!](#authenticating-1 "Copy link to this section")

*   Mother’s Maiden Name
*   Passwords
*   PIN

#### Communication [Copied!](#communication-2 "Copy link to this section")

*   Emails
*   Telephone Recordings
*   Voice Mail

#### Contact [Copied!](#contact-2 "Copy link to this section")

*   Email Address
*   Physical Address
*   Telephone Number

#### Credit History [Copied!](#credit-history-1 "Copy link to this section")

*   Credit Capacity
*   Credit Records
*   Credit Standing
*   Credit Worthiness

#### Criminal Records [Copied!](#criminal-records-2 "Copy link to this section")

*   Charges
*   Convictions
*   Pardons

#### Demographic [Copied!](#demographic-1 "Copy link to this section")

*   Age Range
*   Date of birth
*   Geographic
*   Income Brackets
*   Physical Traits

#### Ethnicity [Copied!](#ethnicity-2 "Copy link to this section")

*   Accents
*   Biometric Data
*   Ethnic Origin
*   National origin
*   Race
*   Spoken Languages

#### Family [Copied!](#family-1 "Copy link to this section")

*   Divorces
*   Family Structure
*   Marriages
*   Offspring
*   Relationships
*   Siblings

#### Financial Accounts [Copied!](#financial-accounts-1 "Copy link to this section")

*   Bank Account
*   Credit Card Number

#### Identification [Copied!](#identification-2 "Copy link to this section")

*   Attitude
*   Call Logs
*   Demeanor
*   Firstname
*   Fullname
*   ID Number
*   Image
*   Lastname
*   Links clicked
*   Passport Number
*   Unique Identifier
*   Username

#### Location [Copied!](#location-1 "Copy link to this section")

*   Country
*   GPS Coordinate
*   Room Number

#### Personal Ownership [Copied!](#personal-ownership-1 "Copy link to this section")

*   Apartments
*   Cars
*   Houses
*   Personal Possessions

#### Physical Characteristic [Copied!](#physical-characteristic-1 "Copy link to this section")

*   Age
*   Gender
*   Hair Color
*   Height
*   Piercings
*   Skin Tone
*   Tattoos
*   Weight

#### Professional Information [Copied!](#professional-information-1 "Copy link to this section")

*   Certifications
*   Disciplinary Actions
*   Employee Files
*   Employment History
*   Evaluations
*   Interviews
*   Job Titles
*   References
*   Salary
*   School attended
*   Work History

#### Public Life [Copied!](#public-life-1 "Copy link to this section")

*   Character
*   General Reputation
*   Interactions
*   Martial Status
*   Political Affiliation
*   Religion
*   Social Status

#### Religion, Philosophical, Political Beliefs [Copied!](#religion-philosophical-political-beliefs-2 "Copy link to this section")

*   Knowledge
*   Philosophical beliefs
*   Religious Beliefs
*   Thoughts

#### Sexual [Copied!](#sexual-2 "Copy link to this section")

*   Gender identity
*   Sexual History
*   Sexual Preferences

#### Social Network [Copied!](#social-network-1 "Copy link to this section")

*   Acquaintances
*   Associations
*   Connections
*   Friends
*   Group Membership

#### Transactional [Copied!](#transactional-1 "Copy link to this section")

*   Credit
*   Income
*   Loan Records
*   Purchases
*   Purchases and Spending Habits
*   Sales
*   Taxes
*   Transactions

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
