# TidyHQ API for NodeJS

This is a NodeJS wrapper for the TidyHQ API. It is a work in progress and is not yet complete.
The [ComSSA ticketing system](https://github.com/s3ansh33p/TidyHQ-App) will be built on top of this API, though other applications may find it useful.

## Support for V2 API

There is now a client.V2 class which is a wrapper for the V2 API. This is still a work in progress, and routes on the V1 API will still be accessible with client.Events, client.Contacts, etc.

## Known Issues

### Updating Location of an Event
As of 18/March/2023, when creating or updating an event, the API returns a 500 error if a location is provided. However, in [TidyHQ's Documentation](https://dev.tidyhq.com/#events), it says that the location is optional. This appears to be an issue in the API, not the wrapper.

```bash
# Output from CURL request
curl -X PUT -d location="TEST Location" https://api.tidyhq.com/v1/events/55329?access_token=<ACCESS_TOKEN>
{"message":"Something went wrong"}
# However, any other field can be updated without issue
curl -X PUT -d body="TEST BODY" https://api.tidyhq.com/v1/events/55329?access_token=<ACCESS_TOKEN>
{"id":55329,"name":"[TEST]","location":"Curtin University","start_at":"2023-09-14T16:00:00+0800","end_at":"2023-09-14T18:00:00+0800","body":"TEST BODY","created_at":"2023-09-14T15:00:45+0800","category_id":604011,"public":false,"image_url":"//cdn.tidyhq.com/assets/events/missing_show-57f613033ebf78160b10a334fa0e2d6c2d50ce54c0318486fa3f5987b59d5a3e.jpg","public_url":"https://comssa.tidyhq.com/public/events/55329-test","archived":false}

# With verbose output
curl -v -X PUT -d location="TEST Location" https://api.tidyhq.com/v1/events/55329?access_token=<ACESS_TOKEN> 
*   Trying 52.64.145.128:443...
* Connected to api.tidyhq.com (52.64.145.128) port 443 (#0)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> PUT /v1/events/55329?access_token=<ACESS_TOKEN> HTTP/1.1
> Host: api.tidyhq.com
> User-Agent: curl/8.0.1
> Accept: */*
> Content-Length: 22
> Content-Type: application/x-www-form-urlencoded
>
< HTTP/1.1 500 Internal Server Error
< Date: Thu, 14 Sep 2023 07:27:04 GMT
< Content-Type: application/json; charset=utf-8
< Transfer-Encoding: chunked
< Connection: keep-alive
< Server: nginx
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen
< X-Permitted-Cross-Domain-Policies: none
< Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: no-cache
< X-Request-Id: 62ab0c16-dce7-43ce-9925-a2c066c981a8
< X-Runtime: 0.051661
< Strict-Transport-Security: max-age=63072000; includeSubDomains
< vary: Origin
<
{"message":"Something went wrong"}* Connection #0 to host api.tidyhq.com left intact
```

### [FIXED] Getting Webhook by ID
As of 31/August/2023, the `http://api.tidyhq.com/v2/webhooks/{webhookId}` route successfully returns null instead of the webhook object. Later fixed by TidyHQ and tested on 14/September/2023.

## Webhook Events Checked for Successfully Verifying Signatures

| Event Name | Kind | Verified |
| --- | --- | --- |
| contact.activated | contact | FAILS (see notes) |
| contact.deactivated | contact | - |
| contact.merged | contact | YES |
| contact.group.added | contact.group | SOMETIMES (see notes) |
| contact.group.removed | contact.group | SOMETIMES (see notes) |
| finance.order.pending | finance.order | SOMETIMES (see notes) |
| finance.order.activated | finance.order | SOMETIMES (see notes) |
| finance.order.awaiting_payment | finance.order | - |
| finance.order.rejected | finance.order | - |
| finance.order.cancelled | finance.order | - |
| finance.order.expired | finance.order |- |
| membership.created | membership | - |
| membership.updated | membership | - |
| membership.deleted | membership | FAILS (experienced after merging contacts) |
| membership.activated | membership | FAILS (though only logged once) |
| membership.partiated | membership | - |
| membership.expired | membership | - |
| membership.cancelled | membership | - |
| subscription.created | subscription | - |
| subscription.updated | subscription | FAILS (though only logged once) |
| subscription.deleted | subscription | - |
| subscription.started | subscription | FAILS (though only logged once) |
| subscription.expired | subscription | - |
| subscription.continued | subscription | - |
| subscription.cancelled | subscription | - |
| webhook.deleted | webhook | YES |
| webhook.activated | webhook | YES |
| webhook.deactivated | webhook | YES |
| webhook.errored | webhook | YES |

Other event kinds that were found but not documented yet:
| Event Name | Kind | Verified | Notes |
| --- | --- | --- | --- |
| contact.deleted | contact | YES | - |
| contact.created | contact | - | - |
| contact.updated | contact | YES | - |
| event.created | event | YES | - |
| event.updated | event | FAILS | SOMETIMES (see notes) |
| event.deleted | event | YES | - |
| event.activated | event | FAILS | Signature Mismatch when creating an event via dashboard |

### Other notes:

#### For `contact.activated`:
- Signature Mismatch occurs for 
    - purchasing a ticket (on unpublished event though, not tested on published event yet)

#### For `contact.group.added`:
- Signature Mismatch occurs for 
    - adding a user to a group via the web dashboard

- Works for
    - merging contacts

#### For `contact.group.removed`:
- Signature Mismatch occurs for 
    - removing a user from a group via the web dashboard

#### For `event.updated`:
- Signature Mismatch occurs for 
    - creating an event via dashboard
    - updating by adding a ticket category

- Sometimes works for
    - Updating the body of an event, after one already exists (not sure why it works sometimes, but not others)
 
- Potential issues
    - There is no event/message sent after updating location

#### For `finance.order.pending`:
- Signature Mismatch occurs for 
    - body with `subscription` field

- Works for
    - body with `tickets_pack` field

#### For `finance.order.activated`:
- Same as `finance.order.pending` with regards to `subscription` and `tickets_pack` fields
- Note: for `tickets_pack` responses, there doesn't appear to be an easy way to get
information about the tickets that were purchased. The `tickets_pack` field only contains an
ID that isn't for a ticket or category, and the remaining fields are financial information/status.

#### Misc
- When tasks are added or marked as complete, no webhook event is sent.
- There is no clear event/message after a free ticket is purchased (`finance.order.activated` is theoretically sent for paid tickets, but not yet tested). Hopefully, a new event is sent when a ticket is purchased, regardless of whether it is free or not.

## Authors

- [**Sean McGinty**](https://github.com/s3ansh33p)
