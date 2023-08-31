# TidyHQ API for NodeJS

This is a NodeJS wrapper for the TidyHQ API. It is a work in progress and is not yet complete.
The [ComSSA ticketing system](https://github.com/s3ansh33p/TidyHQ-App) will be built on top of this API, though other applications may find it useful.

## Support for V2 API

There is now a client.V2 class which is a wrapper for the V2 API. This is still a work in progress, and routes on the V1 API will still be accessible with client.Events, client.Contacts, etc.

## Known Issues

- As of 18/March/2023, when creating or updating an event, the API returns a 500 error if a location is provided. However, in [TidyHQ's Documentation](https://dev.tidyhq.com/#events), it says that the location is optional. This appears to be an issue in the API, not the wrapper.

- As of 31/August/2023, the `http://api.tidyhq.com/v2/webhooks/{webhookId}` route successfully returns null instead of the webhook object.

## Webhook Events Checked for Successfully Verifying Signatures

| Event Name | Kind | Verified |
| --- | --- | --- |
| contact.activated | contact | - |
| contact.deactivated | contact | - |
| contact.merged | contact | YES |
| contact.group.added | contact.group | SOMETIMES (see notes) |
| contact.group.removed | contact.group | SOMETIMES (see notes) |
| finance.order.pending | finance.order | - |
| finance.order.activated | finance.order | - |
| finance.order.awaiting_payment | finance.order | - |
| finance.order.rejected | finance.order | - |
| finance.order.cancelled | finance.order | - |
| finance.order.expired | finance.order |- |
| membership.created | membership | - |
| membership.updated | membership | - |
| membership.deleted | membership | FAILS (experienced after merging contacts) |
| membership.activated | membership | - |
| membership.partiated | membership | - |
| membership.expired | membership | - |
| membership.cancelled | membership | - |
| subscription.created | subscription | - |
| subscription.updated | subscription | - |
| subscription.deleted | subscription | - |
| subscription.started | subscription | - |
| subscription.expired | subscription | - |
| subscription.continued | subscription | - |
| subscription.cancelled | subscription | - |
| webhook.deleted | webhook | YES |
| webhook.activated | webhook | YES |
| webhook.deactivated | webhook | YES |
| webhook.errored | webhook | YES |

Other event kinds that were found but not documented:
| Event Name | Kind | Verified | Notes |
| --- | --- | --- | --- |
| member.deleted | member | YES | Could be a duplicate of membership.deleted |
| member.created | member | YES | Could be a duplicate of membership.created |
| member.updated | member | YES | Could be a duplicate of membership.updated |

Other notes:
Requests for `contact.group.removed` and `contact.group.added` failed to verify the signature when the
webhook was made to allow state changes, yet work if set to false. Will need to investigate further.

## Authors

- [**Sean McGinty**](https://github.com/s3ansh33p)
