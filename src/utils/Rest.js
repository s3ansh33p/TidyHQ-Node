/**
 * @fileoverview This file contains a wrapper for Axios to make REST requests to the TidyHQ API.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

/**
 * @description This class is used to make REST requests to the TidyHQ API.
 * @class
 */
class Rest {

    /**
     * @description This function is used to create a new instance of the Rest class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @param {string} accessToken - The access token to use.
     * @returns {object} - A new instance of the Rest class.
     * @constructor
     */
    constructor(axiosInstance, accessToken) {
        this.axios = axiosInstance;
        this.accessToken = accessToken;
    }

    _request(method, path, data = {}, accessToken) {
        console.log(`[DEBUG] Token: ${accessToken}`);
        if (!accessToken) {
            accessToken = this.accessToken;
        }
        console.log(`[DEBUG] Requesting ${method} ${path} with data: ${JSON.stringify(data)} and access token: ${accessToken}`);
        return this.axios.request({
            method: method,
            url: path,
            data: data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    }

    async get(path, accessToken) {
        return this._request("GET", path, {}, accessToken);
    }

    async post(path, data = {}, accessToken = this.accessToken) {
        return this._request("POST", path, data, accessToken);
    }

    async put(path, data = {}, accessToken = this.accessToken) {
        return this._request("PUT", path, data, accessToken);
    }

    async delete(path, data = {}, accessToken = this.accessToken) {
        return this._request("DELETE", path, data, accessToken);
    }

    async patch(path, data = {}, accessToken = this.accessToken) {
        return this._request("PATCH", path, data, accessToken);
    }
}

module.exports = { Rest };