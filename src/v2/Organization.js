/**
 * @fileoverview This file contains functions for interacting with Organizations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.2.0
 * @license GPL-3.0
 */

const { Rest } = require("../utils/Rest.js");
const { makeURLParameters } = require("../utils/Builder.js");

/**
 * @description This class is used to interact with Organizations in TidyHQ.
 * @class
 */
class V2_OrganizationAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Returns the organization the current token is associated with.
     * @link https://tidyhq.readme.io/reference/get-organization
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Organization>} - The organization.
     */
    async getOrganization(options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v2/organization`, accessToken);
    }

    /**
     * @description Returns all admins configured / provisioned for the current organization.
     * @link https://tidyhq.readme.io/reference/get-organization-admins
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of admins to return.
     * @param {number} [options.offset] - The number of admins to skip.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {string} [options.updated_before] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V2_Contacts>} - The admins.
     */
    async getAdmins(options = {}) {
        const accessToken = options.access_token || "";
        const optionalParametersString = makeURLParameters(["limit", "offset", "updated_since", "updated_before"], options);
        return await this.rest.get(`/v2/organization/admins${optionalParametersString}`, accessToken);
    }

    /**
     * @description Returns all roles configured / provisioned for the current organization.
     * @link https://tidyhq.readme.io/reference/get-organization-roles
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of roles to return.
     * @param {number} [options.offset] - The number of roles to skip.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {string} [options.updated_before] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V2_OrganizationRoles>} - The roles.
     */
    async getRoles(options = {}) {
        const accessToken = options.access_token || "";
        const optionalParametersString = makeURLParameters(["limit", "offset", "updated_since", "updated_before"], options);
        return await this.rest.get(`/v2/organization/roles${optionalParametersString}`, accessToken);
    }

}

module.exports = { V2_OrganizationAPI };