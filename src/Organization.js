/**
 * @fileoverview This file contains functions for interacting with Organizations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");

/**
 * @description This class is used to interact with Organizations in TidyHQ.
 * @class
 */
class OrganizationAPI {

    /**
     * @description This function is used to create a new instance of the OrganizationAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the OrganizationAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get the organization associated with the access token.
     * @returns {object} - The organization.
     */
    async getOrganization() {
        let organization = [];
        await axios.get(`https://api.tidyhq.com/v1/organization?access_token=${this.access_token}`).then((response) => {
            organization = response.data;
        }).catch((error) => {
            throw new Error(`Organization.getOrganization: ${error}`);
        });
        return organization;
    }

}

module.exports = { OrganizationAPI };