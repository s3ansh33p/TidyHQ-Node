/**
 * @fileoverview This file contains functions for interacting with Organizations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.1.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("../utils/Builder.js");

/**
 * @description This class is used to interact with Organizations in TidyHQ.
 * @class
 */
class V2_OrganizationAPI {

    /**
     * @description This function is used to create a new instance of the V2_OrganizationAPI class.
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {object} - A new instance of the V2_OrganizationAPI class.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Returns the organization the current token is associated with, including their domain prefix etc.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The organization.
     */
    async getOrganization(options = {}) {
        let organization = [];
        await this.rest.get(`/v2/organization`, options.access_token).then((response) => {
            organization = response.data;
        }).catch((error) => {
            throw new Error(`V2.Organization.getOrganization: ${error}\n${error.response.data}`);
        });
        return organization;
    }

    /**
     * @description Returns all admins configured / provisioned for the current organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of admins to return.
     * @param {number} [options.offset] - The number of admins to skip.
     * @param {Date} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {Date} [options.updated_before] - The timestamp of the last update in ISO 8601 format.
     * @returns {object} - The admins.
     */
    async getAdmins(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "updated_since", "updated_before"], options)

        let admins = [];
        await this.rest.get(`/v2/organization/admins${optionalParametersString}`, options.access_token).then((response) => {
            admins = response.data;
        }).catch((error) => {
            throw new Error(`V2.Organization.getAdmins: ${error}\n${error.response.data}`);
        });
        return admins;
    }

    /**
     * @description Returns all roles configured / provisioned for the current organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of roles to return.
     * @param {number} [options.offset] - The number of roles to skip.
     * @param {Date} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {Date} [options.updated_before] - The timestamp of the last update in ISO 8601 format.
     * @returns {object} - The roles.
     */
    async getRoles(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "updated_since", "updated_before"], options)

        let roles = [];
        await this.rest.get(`/v2/organization/roles${optionalParametersString}`, options.access_token).then((response) => {
            roles = response.data;
        }).catch((error) => {
            throw new Error(`V2.Organization.getRoles: ${error}\n${error.response.data}`);
        });
        return roles;
    }


}

module.exports = { V2_OrganizationAPI };