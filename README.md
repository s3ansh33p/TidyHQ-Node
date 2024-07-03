# TidyHQ API for NodeJS

This is a NodeJS wrapper for the TidyHQ API. It is a work in progress with V1 mostly complete and some support for V2 routes.

Refer to the [TidyHQ V1 API Documentation](https://dev.tidyhq.com/) and [TidyHQ V2 API Documentation](https://tidyhq.readme.io/).

## Roadmap

- Finish V2 routes
- Add tutorials

## Example Usage

### Setup
```js
const TidyHQ = require("../TidyHQ-Node");
const ACCESS_TOKEN="<your token>"
const thq = new TidyHQ(ACCESS_TOKEN);
```

### Get the authenticated user
```js
const contact = await thq.V2.Contacts.getContact();
console.log(contact)
```
```
{
    data: {
        id: 'fa50a4c0d7ef',
        contact_id_reference: 1,
        contact_id_number: 'MEM001',
        display_name: 'Example User',
        ...
        contact_links: []
    },
    status: 200,
    statusText: 'OK',
    success: true
}
```

### Overriding default token
You can ovveride the default token by passing in an `access_token` in the options object on any request.
```js
const contact = await thq.V2.Contacts.getContact('me', { access_token: '<token>'});
console.log(contact)
```
Keep in mind that you may not want to set a default access token if you are working with multiple tokens and will specify the token each time.
```js
const thq = new TidyHQ("");
```

### Failed request
Each request will return an object with `data`, `status`, `statusText` and `success`. If unsuccessful, `message` is also returned which will be the Axios error message.
```js
const contact = await thq.V2.Contacts.getContact('me', { access_token: 'mybadtoken'});
console.log(contact)
```
```
{
  data: '',
  status: 401,
  statusText: 'Unauthorized',
  message: 'Request failed with status code 401',
  success: false
}
```

### Type safety
There are types on every route with JSDoc, and generated documentation at [https://s3ansh33p.github.io/TidyHQ-Node/](https://s3ansh33p.github.io/TidyHQ-Node/), which can be built locally with `npm run docs`.


## Authors

- [**Sean McGinty**](https://github.com/s3ansh33p)
