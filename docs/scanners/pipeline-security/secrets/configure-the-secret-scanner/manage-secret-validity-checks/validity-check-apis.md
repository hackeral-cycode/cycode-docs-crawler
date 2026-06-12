# Validity check APIs | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/validity-check-apis

---

# Validity check APIs

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/configure-the-secret-scanner/manage-secret-validity-checks/validity-check-apis.md "Edit this page")

Updated on Sep 2, 2025 • Published on Sep 2, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

This topic describes the relevant third-party APIs that Cycode uses to check the validity of detected secrets.

Secret Type

Request Type

API Request URL (in curl)

Related Links

Adafruit IO API Key

GET

`https://io.adafruit.com/api/v2/user`

[Adafruit IO](https://io.adafruit.com/api/docs/?shell#get-user-info)

Anthropic Admin API Key

GET

`https://api.anthropic.com/v1/organizations/api_keys/`

Asana key

GET

`https://app.asana.com/api/1.0/users`

[Asana](https://developers.asana.com/reference/getusers)

AWS Access Key ID / AWS Secret Access Key

GET

`https://sts.amazonaws.com`

Beamer API Key

GET

`https://api.getbeamer.com/v0/users`

[Beamer](https://www.getbeamer.com/api#authentication)

Buildkite Access Token

GET

`https://api.buildkite.com/v2/access-token`

Checkout.com API Secret Key

GET

`https://api.sandbox.checkout.com/workflows/event-types`

[Checkout.com](https://api-reference.checkout.com/#tag/Workflows/paths/~1workflows~1event-types/get)

Contentful Content Management API Key

GET

`https://api.contentful.com/users/me`

[Contentful](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/users/user/get-the-authenticated-user/console/curl)

Datadog Token

GET

`https://api.datadoghq.com/api/v1/validate`  
`https://api.us3.datadoghq.com/api/v1/validate`  
`https://api.us5.datadoghq.com/api/v1/validate`  
`https://api.datadoghq.eu/api/v1/validate`  
`https://api.ap1.datadoghq.com/api/v1/validate`  
`https://api.ddog-gov.com/api/v1/validate`

DigitalOcean Personal Access Token

GET

`https://api.digitalocean.com/v2/account`

Doppler API Key

GET

`https://api.doppler.com/v3/logs`

Dropbox Key

POST

`https://api.dropboxapi.com/2/users/get_current_account`

[Dropbox](https://www.dropbox.com/developers/documentation/http/documentation#auth-token-revoke)

EasyPost API Key

GET

`https://api.easypost.com/v2/webhooks`

[EasyPost](https://www.easypost.com/docs/api#api-keys)

Facebook Access Token

GET

`https://graph.facebook.com/v16.0/me`

Figma Personal Access Token

GET

`https://api.figma.com/v1/me`

Frame IO Token

GET

`https://api.frame.io/v2/me`

[Frame IO](https://developer.frame.io/api/reference/operation/getMe/)

GitHub App Token

GET

`https://api.github.com/rate_limit`

[GitHub App](https://docs.github.com/en/rest/rate-limit?apiVersion=2022-11-28#get-rate-limit-status-for-the-authenticated-user)

GitHub Fine-Grained Token

GET

`https://api.github.com/rate_limit`

GitHub OAuth Access Token

GET

`https://api.github.com/rate_limit`

[GitHub OAuth](https://docs.github.com/en/rest/rate-limit?apiVersion=2022-11-28#get-rate-limit-status-for-the-authenticated-user)

GitHub Personal Access Token

GET

`https://api.github.com/rate_limit`

[GitHub Personal Access Token](https://docs.github.com/en/rest/rate-limit?apiVersion=2022-11-28#get-rate-limit-status-for-the-authenticated-user)

GitLab Runner Token

GET

`https://gitlab.com/api/v4/runners/verify`

GitLab Token

GET

`https://gitlab.com/api/v4/user/status` (overridable per-tenant)

[GitLab](https://docs.gitlab.com/ee/api/personal_access_tokens.html)

Gocardless Api Key

GET

`https://api.gocardless.com/webhooks`

[Gocardless](https://developer.gocardless.com/api-reference/#core-endpoints-webhooks)

Google Cloud API Key

GET

`https://maps.googleapis.com/maps/api/geocode/json`

Google Maps API Key

GET

`https://maps.googleapis.com/maps/api/geocode/json`

Groq API Key

GET

`https://api.groq.com/openai/v1/models`

Heroku API Key

GET

`https://api.heroku.com/account`

[Heroku](https://devcenter.heroku.com/articles/platform-api-reference#account)

HuggingFace Token

GET

`https://huggingface.co/api/whoami-v2`

Intercom Access Token

GET

`https://api.intercom.io/me`

[Intercom](https://developers.intercom.com/intercom-api-reference/reference/identifyadmin)

Ionic Token

GET

`https://api.ionic.io/apps`

[Ionic](https://ionicframework.com/)

Launch Darkly Personal Token

GET

`https://app.launchdarkly.com/api/v2/members`

[Launch Darkly](https://apidocs.launchdarkly.com/tag/Account-members#operation/getMembers)

Linear Api Key

POST

`https://api.linear.app/graphql`

[Linear](https://developers.linear.app/docs/graphql/working-with-the-graphql-api)

MailGun API Key

GET

`https://api.mailgun.net/v3/lists`

[MailGun](https://documentation.mailgun.com/en/latest/user_manual.html#mailing-lists-1)

mapbox Token

GET

`https://api.mapbox.com/search/searchbox/v1/list/category`

[mapbox](https://docs.mapbox.com/api/search/search-box/#response-get-category-list)

Npm Token

GET

`https://registry.npmjs.org/-/whoami`

[npm](https://docs.npmjs.com/creating-and-viewing-access-tokens)

OpenAI API Key

GET

`https://api.openai.com/v1/models`

Open Exchange Token

GET

`https://openexchangerates.org/api/latest.json`

OpenRouter API Key

GET

`https://openrouter.ai/api/v1/key`

Planetscale Token

GET

`https://api.planetscale.com/v1/user`

[Planetscale](https://api-docs.planetscale.com/reference/get_user)

PayPal Braintree Access Token

POST

`https://payments.braintree-api.com/graphql`

Paystack Key

GET

`https://api.paystack.co/subaccount`

[Paystack](https://paystack.com/docs/api/subaccount/)

Pinecone API Key V2

GET

`https://api.pinecone.io/indexes`

Postman Api Key

GET

`https://api.getpostman.com/me`

[Postman](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-2b9254d2-aa04-4ca2-96ec-740d31ff1667)

PubNub Subscription Key

GET

`https://ps.pndsn.com/v2/objects/{SecretValue}/uuids`

Pulumi Access Token

GET

`https://api.pulumi.com/api/user/stacks`

[Pulumi](https://www.pulumi.com/docs/pulumi-cloud/cloud-rest-api/#list-stacks)

Pushbullet Api Key

GET

`https://api.pushbullet.com/v2/users/me`

[Pubshbullet](https://docs.pubshbullet.com/)

Recaptcha Key

GET

`https://www.google.com/recaptcha/api/siteverify`

[Recaptcha](https://developers.google.com/recaptcha/docs/faq)

Rubygems Api Key

GET

`https://rubygems.org/api/v1/gems.json`

[Rubygems](https://guides.rubygems.org/rubygems-org-api/)

Samsara Api Key

GET

`https://api.samsara.com/me`

[Samsara](https://developers.samsara.com/reference/getorganizationinfo)

Segment Workspace Key

GET

`https://platform.segmentapis.com/v1beta/workspaces/myworkspace`

[Segment](https://reference.segmentapis.com/#7ed2968b-c4a5-4cfb-b4bf-7d28c7b38bd2)

Sendinblue Key

GET

`https://api.sendinblue.com/v3/account`

[Sendinblue](https://developers.sendinblue.com/reference/getaccount)

Sentry Auth Token

GET

`https://sentry.io/api/0/`

Sentry User Token

GET

`https://sentry.io/api/0/organizations/`

Shippo Api Token

GET

`https://api.goshippo.com/addresses`

[Shippo](https://docs.goshippo.com/shippoapi/public-api/#operation/ListAddresses)

Slack App Token

POST

`https://slack.com/api/auth.test`

Slack Token

POST

`https://slack.com/api/auth.test`

[Slack](https://api.slack.com/methods/auth.test)

SonarQube Docs API Key

GET

`https://sonarcloud.io/api/authentication/validate`

[SonarQube](https://sonarcloud.io/web_api/api/authentication/validate?deprecated=false)

Square Access Token

GET

`https://connect.squareupsandbox.com/v2/locations/main`

Stripe API Key

GET

`https://api.stripe.com/v1/accounts`

[Stripe](https://stripe.com/docs/api/subscriptions/list)

Telegram Bot Token

GET

`https://api.telegram.org/bot{SecretValue}/getMe`

Terraform Token

GET

`https://app.terraform.io/api/v2/account/details`

Ubidots Token

GET

`https://industrial.api.ubidots.com/api/v2.0/organizations`

[Ubidots](https://docs.ubidots.com/reference/get-all-organizations)

Yandex Predictor Api Key

GET

`https://predictor.yandex.net/api/v1/predict.json/complete`

[Yandex](https://yandex.com/dev/predictor/doc/dg/reference/complete.html)

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
