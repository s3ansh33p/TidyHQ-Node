/**
 * @fileoverview This file contains a wrapper for Axios to make REST requests to the TidyHQ API.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */
/**
 * @description This class is used to make REST requests to the TidyHQ API.
 * @class
 */
export class Rest {
    /**
     * @param {AxiosInstance} axiosInstance - The Axios instance to use for requests.
     * @param {string} accessToken - The access token to use.
     * @constructor
     */
    constructor(axiosInstance: AxiosInstance, accessToken: string);
    axios: import("axios").AxiosInstance;
    accessToken: string;
    /**
     * @description Wrapper for making a GET request
     * @param {string} path - The path to request.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - The response from the request.
     */
    get(path: string, accessToken: string): Promise<TidyAPI_Response>;
    /**
     * @description Wrapper for making a POST request
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - The response from the request.
     */
    post(path: string, data?: Object, accessToken?: string): Promise<TidyAPI_Response>;
    /**
     * @description Wrapper for making a PUT request
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - The response from the request.
     */
    put(path: string, data?: Object, accessToken?: string): Promise<TidyAPI_Response>;
    /**
     * @description Wrapper for making a DELETE request
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - The response from the request.
     */
    delete(path: string, data?: Object, accessToken?: string): Promise<TidyAPI_Response>;
    /**
     * @description Wrapper for making a PATCH request
     * @param {string} path - The path to request.
     * @param {Object} data - The data to send.
     * @param {string} accessToken - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - The response from the request.
     */
    patch(path: string, data?: Object, accessToken?: string): Promise<TidyAPI_Response>;
    #private;
}
