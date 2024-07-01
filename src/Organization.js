/**
 * @fileoverview This file contains functions for interacting with Organizations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */


/**
 * @description This class is used to interact with Organizations in TidyHQ.
 * @class
 */
class OrganizationAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {OrganizationAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get the organization associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The organization.
     */
    async getOrganization(options = {}) {
        let organization = [];
        await this.rest.get(`/v1/organization`, options.access_token).then((response) => {
            organization = response.data;
        }).catch((error) => {
            throw new Error(`Organization.getOrganization: ${error}\n${error.response.data}`);
        });
        return organization;
    }

}

module.exports = { OrganizationAPI };