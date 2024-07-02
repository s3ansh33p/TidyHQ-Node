/**
 * @fileoverview This file contains functions for interacting with Organizations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");

/**
 * @description This class is used to interact with Organizations in TidyHQ.
 * @class
 */
class OrganizationAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get the organization associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Organization>} - The organization.
     */
    async getOrganization(options = {}) {
        return await this.rest.get(`/v1/organization`, options.access_token);
    }

}

module.exports = { OrganizationAPI };