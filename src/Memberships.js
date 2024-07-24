/**
 * @fileoverview This file contains functions for interacting with Memberships in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Memberships in TidyHQ.
 * @class
 */
class MembershipsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Get a list of all memberships.
     * @param {object} path - The path for the request.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.active] - Whether to return active memberships.
     * @param {string} [options.updated_since] - The date to return memberships updated since in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Memberships>} - The list of memberships.
     */
    async #_getMemberships(path, options) {
        const optionalParametersString = makeURLParameters(["limit", "offset", "active", "updated_since"], options)
        return await this.rest.get(`/v1/${path}${optionalParametersString}`, options?.access_token);
    }

    /**
     * @description Get a list of all memberships.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.active] - Whether to return active memberships.
     * @param {string} [options.updated_since] - The date to return memberships updated since in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Memberships>} - The list of memberships.
     */
    async getMemberships(options = {}) {
        return this.#_getMemberships("memberships", options);
    }
    
    /**
     * @description Get a list of all memberships for a contact.
     * @param {string} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.active] - Whether to return active memberships.
     * @param {string} [options.updated_since] - The date to return memberships updated since in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Memberships>} - The list of memberships.
     */
    async getMembershipsForContact(contact_id, options = {}) {
        return this.#_getMemberships(`contacts/${contact_id}/memberships`, options);
    }

    /**
     * @description Get a list of all memberships for a membership level.
     * @param {string} membership_level_id - The ID of the membership level.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @param {boolean} [options.active] - Whether to return active memberships.
     * @param {string} [options.updated_since] - The date to return memberships updated since in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Memberships>} - The list of memberships.
     */
    async getMembershipsForMembershipLevel(membership_level_id, options = {}) {
        return this.#_getMemberships(`membership_levels/${membership_level_id}/memberships`, options);
    }

    /**
     * @description Get a single membership.
     * @param {string} membership_id - The ID of the membership.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Membership>} - The membership.
     */
    async getMembership(membership_id, options = {}) {
        return await this.rest.get(`/v1/memberships/${membership_id}`, options?.access_token);
    }
}

module.exports = { MembershipsAPI };