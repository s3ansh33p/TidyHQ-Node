/**
 * @fileoverview This file contains OAuth functions for the application.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.1.0
 * @license GPL-3.0
 */

// axios is a library that allows us to make HTTP requests

/**
 * @description This function is used to authorize the application with TidyHQ and return an access token.
 * @param {string} client_id - The client ID of the application.
 * @param {string} redirect_uri - The redirect URI of the application.
 * @param {string} host - The host url of TidyHQ.
 * @returns {string} - The access token.
 */
async function authorize(client_id, redirect_uri, host = "https://accounts.tidyhq.com") {
    // must be strings
    if (typeof client_id !== "string") throw new TypeError("OAuth.authorize: client_id must be a string.");
    if (typeof redirect_uri !== "string") throw new TypeError("OAuth.authorize: redirect_uri must be a string.");
    // client_id must be 64 characters long
    if (client_id.length !== 64) throw new RangeError("OAuth.authorize: client_id must be 64 characters long.");
    // redirect_uri must be a valid URL
    if (!redirect_uri.startsWith("http")) throw new RangeError("OAuth.authorize: redirect_uri must be a valid URL.");

    // finally, we can make the request
    let code = "";
    await this.axios.get(`${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`).then((response) => {
        code = response.data;
    }).catch((error) => {
        throw new Error(`OAuth.authorize: ${error}\n${error.response.data}`);
    });
    console.log(code);
    return code;
}

/**
 * @description This function is used to authorize using a username and password.
 * @param {string} client_id - The client ID of the application.
 * @param {string} client_secret - The client secret of the application.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @param {string} domain_prefix - The domain prefix of the club.
 * @returns {string} - The access token.
 */
async function authorizeWithPassword(client_id, client_secret, username, password, domain_prefix, host = "https://accounts.tidyhq.com") {
    // check types
    if (typeof client_id !== "string") throw new TypeError("OAuth.authorizeWithPassword: client_id must be a string.");
    if (typeof client_secret !== "string") throw new TypeError("OAuth.authorizeWithPassword: client_secret must be a string.");
    if (typeof username !== "string") throw new TypeError("OAuth.authorizeWithPassword: username must be a string.");
    if (typeof password !== "string") throw new TypeError("OAuth.authorizeWithPassword: password must be a string.");
    // check lengths
    if (client_id.length !== 64) throw new RangeError("OAuth.authorizeWithPassword: client_id must be 64 characters long.");
    if (client_secret.length !== 64) throw new RangeError("OAuth.authorizeWithPassword: client_secret must be 64 characters long.");

    let accessToken = "";
    await this.axios.post(`${host}/oauth/token`, {
        client_id: client_id,
        client_secret: client_secret,
        username: username,
        password: password,
        domain_prefix: domain_prefix,
        grant_type: "password",
    }).then((response) => {
        accessToken = response.data.access_token;
    }).catch((error) => {
        throw new Error(`OAuth.authorizeWithPassword: ${error}\n${error.response.data}`);
    });
    return accessToken;
}

/**
 * @description This function is used to request an access token from TidyHQ.
 * @param {string} client_id - The client ID of the application.
 * @param {string} client_secret - The client secret of the application.
 * @param {string} redirect_uri - The redirect URI of the application.
 * @param {string} code - The code returned from the authorize function.
 * @returns {string} - The access token.
 */
async function requestAccessToken(client_id, client_secret, redirect_uri, code, host = "https://accounts.tidyhq.com") {
    // check types
    if (typeof client_id !== "string") throw new TypeError("OAuth.requestAccessToken: client_id must be a string.");
    if (typeof client_secret !== "string") throw new TypeError("OAuth.requestAccessToken: client_secret must be a string.");
    if (typeof redirect_uri !== "string") throw new TypeError("OAuth.requestAccessToken: redirect_uri must be a string.");
    if (typeof code !== "string") throw new TypeError("OAuth.requestAccessToken: code must be a string.");
    if (typeof grant_type !== "string") throw new TypeError("OAuth.requestAccessToken: grant_type must be a string.");
    // check lengths
    if (client_id.length !== 64) throw new RangeError("OAuth.requestAccessToken: client_id must be 64 characters long.");
    if (client_secret.length !== 64) throw new RangeError("OAuth.requestAccessToken: client_secret must be 64 characters long.");
    if (!redirect_uri.startsWith("http")) throw new RangeError("OAuth.requestAccessToken: redirect_uri must be a valid URL.");

    let accessToken = "";
    await this.axios.post(`${host}/oauth/token`, {
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: redirect_uri,
        code: code,
        grant_type: "authorization_code"
    }).then((response) => {
        accessToken = response.data.access_token;
    }).catch((error) => {
        throw new Error(`OAuth.requestAccessToken: ${error}\n${error.response.data}`);
    });
    console.log(accessToken);
    return accessToken;
}

module.exports = { authorize, authorizeWithPassword, requestAccessToken };