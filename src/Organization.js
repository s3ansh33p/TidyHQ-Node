/**
 * @fileoverview This file contains functions for interacting with Organizations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.1.0
 * @license GPL-3.0
 */


/**
 * @description This class is used to interact with Organizations in TidyHQ.
 * @class
 */
class OrganizationAPI {

    /**
     * @description This function is used to create a new instance of the OrganizationAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the OrganizationAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get the organization associated with the access token.
     * @returns {object} - The organization.
     */
    async getOrganization() {
        let organization = [];
        await this.axios.get(`/v1/organization`).then((response) => {
            organization = response.data;
        }).catch((error) => {
            throw new Error(`Organization.getOrganization: ${error}\n${error.response.data}`);
        });
        return organization;
    }

}

module.exports = { OrganizationAPI };