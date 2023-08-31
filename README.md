# TidyHQ API for NodeJS

This is a NodeJS wrapper for the TidyHQ API. It is a work in progress and is not yet complete.
The ComSSA ticketing system will be built on top of this API, though other applications may find it useful.

## Support for V2 API

There is now a client.V2 class which is a wrapper for the V2 API. This is still a work in progress, and routes on the V1 API will still be accessible with client.Events, client.Contacts, etc.

## Known Issues

- As of 18/March/2023, when creating or updating an event, the API returns a 500 error if a location is provided. However, in [TidyHQ's Documentation](https://dev.tidyhq.com/#events), it says that the location is optional. This appears to be an issue in the API, not the wrapper.

## Authors

- [**Sean McGinty**](https://github.com/s3ansh33p)
