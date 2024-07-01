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
     * @param {AxiosInstance} axiosInstance - The Axios instance to use for requests.
     * @param {string} accessToken - The access token to use.
     * @constructor
     */
    constructor(axiosInstance, accessToken) {
        this.axios = axiosInstance;
        this.accessToken = accessToken;
    }

    /**
     * @description This function is used to make a request to the TidyHQ API.
     * @param {string} method - The HTTP method to use.
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<ApiResponse>} - The response from the request.
     */
    async #_request(method, path, data = {}, accessToken) {
        if (!accessToken) {
            accessToken = this.accessToken;
        }
        // console.log(`[DEBUG] Making ${method} request to ${path} with data: ${JSON.stringify(data)} and access token: ${accessToken}`)
        let response;
        try {
            response = await this.axios.request({
                method: method,
                url: path,
                data: data,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            response = {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                success: true
            }
        } catch (error) {
            response = {
                data: error?.response?.data,
                status: error?.response?.status,
                statusText: error?.response?.statusText,
                message: error.message,
                success: false
            }
        }
        
        // console.log(`[DEBUG] ${this.axios.defaults.baseURL}${path} with ${response.status} and ${JSON.stringify(response.data).substring(0, 100)}`);
        return response;
    }

    /**
     * @description Wrapper for making a GET request
     * @param {string} path - The path to request.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<ApiResponse>} - The response from the request.
     */
    async get(path, accessToken) {
        return this.#_request("GET", path, {}, accessToken);
    }

    /**
     * @description Wrapper for making a POST request
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<ApiResponse>} - The response from the request.
     */
    async post(path, data = {}, accessToken = this.accessToken) {
        return this.#_request("POST", path, data, accessToken);
    }

    /**
     * @description Wrapper for making a PUT request
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<ApiResponse>} - The response from the request.
     */
    async put(path, data = {}, accessToken = this.accessToken) {
        return this.#_request("PUT", path, data, accessToken);
    }

    /**
     * @description Wrapper for making a DELETE request
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<ApiResponse>} - The response from the request.
     */
    async delete(path, data = {}, accessToken = this.accessToken) {
        return this.#_request("DELETE", path, data, accessToken);
    }

    /**
     * @description Wrapper for making a PATCH request
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<ApiResponse>} - The response from the request.
     */
    async patch(path, data = {}, accessToken = this.accessToken) {
        return this.#_request("PATCH", path, data, accessToken);
    }
}

module.exports = { Rest };