/**
 * @fileoverview This file contains OAuth functions for the application.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

// axios is a library that allows us to make HTTP requests
const axios = require("axios");

/**
 * @description This function is used to authorize the application with TidyHQ and return an access token.
 * @param {string} client_id - The client ID of the application.
 * @param {string} redirect_uri - The redirect URI of the application.
 * @param {string} response_type - The response type of the application - should be "code" in V1.
 * @returns {string} - The access token.
 */
async function authorize(client_id, redirect_uri, response_type="code") {
    // must be strings
    if (typeof client_id !== "string") throw new TypeError("OAuth.authorize: client_id must be a string.");
    if (typeof redirect_uri !== "string") throw new TypeError("OAuth.authorize: redirect_uri must be a string.");
    if (typeof response_type !== "string") throw new TypeError("OAuth.authorize: response_type must be a string.");
    // client_id must be 64 characters long
    if (client_id.length !== 64) throw new RangeError("OAuth.authorize: client_id must be 64 characters long.");
    // redirect_uri must be a valid URL
    if (!redirect_uri.startsWith("http")) throw new RangeError("OAuth.authorize: redirect_uri must be a valid URL.");
    // response_type must be "code" in V1
    if (response_type !== "code") throw new RangeError("OAuth.authorize: response_type must be \"code\" in V1.");

    // finally, we can make the request
    let code = "";
    await axios.get(`https://accounts.tidyhq.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`).then((response) => {
        code = response.data;
    }).catch((error) => {
        throw new Error(`OAuth.authorize: ${error}`);
    });
    console.log(code);
    return code;
}

/**
 * @description This function is used to request an access token from TidyHQ.
 * @param {string} client_id - The client ID of the application.
 * @param {string} client_secret - The client secret of the application.
 * @param {string} redirect_uri - The redirect URI of the application.
 * @param {string} code - The code returned from the authorize function.
 * @param {string} grant_type - The grant type of the application - should be "authorization_code" in V1.
 * @returns {string} - The access token.
 */
async function requestAccessToken(client_id, client_secret, redirect_uri, code, grant_type="authorization_code") {
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
    if (grant_type !== "authorization_code") throw new RangeError("OAuth.requestAccessToken: grant_type must be \"authorization_code\" in V1.");

    // make the request
    // post to https://accounts.tidyhq.com/oauth/token
    let accessToken = "";
    await axios.post("https://accounts.tidyhq.com/oauth/token", {
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: redirect_uri,
        code: code,
        grant_type: grant_type
    }).then((response) => {
        accessToken = response.data.access_token;
    }).catch((error) => {
        throw new Error(`OAuth.requestAccessToken: ${error}`);
    });
    console.log(accessToken);
    return accessToken;
}

module.exports = { authorize, requestAccessToken };