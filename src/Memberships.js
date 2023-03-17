/**
 * @fileoverview This file contains functions for interacting with Memberships in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Memberships in TidyHQ.
 * @class
 */
class MembershipsAPI {

    /**
     * @description This function is used to create a new instance of the MembershipsAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the MembershipsAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of all memberships.
     * @param {object} path - The path for the request.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @param {string} options.active - Whether to return active memberships.
     * @param {string} options.updated_since - The date to return memberships updated since.
     * @returns {object} - The list of memberships.
     * @private
     */
    async #_getMemberships(path, options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "active", "updated_since"], options)
        let memberships = [];
        await axios.get(`https://api.tidyhq.com/v1/${path}?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            memberships = response.data;
        }).catch((error) => {
            throw new Error(`Memberships.getMemberships: ${error}`);
        });
        return memberships;
    }

    /**
     * @description This function is used to get a list of all memberships.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @param {string} options.active - Whether to return active memberships.
     * @param {string} options.updated_since - The date to return memberships updated since.
     * @returns {object} - The list of memberships.
     */
    async getMemberships(options = {}) {
        return this.#_getMemberships("memberships", options);
    }
    
    /**
     * @description This function is used to get a list of all memberships for a contact.
     * @param {string} contact_id - The ID of the contact.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @param {string} options.active - Whether to return active memberships.
     * @param {string} options.updated_since - The date to return memberships updated since.
     * @returns {object} - The list of memberships.
     */
    async getMembershipsForContact(contact_id, options = {}) {
        return this.#_getMemberships(`contacts/${contact_id}/memberships`, options);
    }

    /**
     * @description This function is used to get a list of all memberships for a membership level.
     * @param {string} membership_level_id - The ID of the membership level.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @param {string} options.active - Whether to return active memberships.
     * @param {string} options.updated_since - The date to return memberships updated since.
     * @returns {object} - The list of memberships.
     */
    async getMembershipsForMembershipLevel(membership_level_id, options = {}) {
        return this.#_getMemberships(`membership_levels/${membership_level_id}/memberships`, options);
    }

    /**
     * @description This function is used to get a single membership.
     * @param {string} membership_id - The ID of the membership.
     * @returns {object} - The membership.
     */
    async getMembership(membership_id) {
        let membership = {};
        await axios.get(`https://api.tidyhq.com/v1/memberships/${membership_id}?access_token=${this.access_token}`).then((response) => {
            membership = response.data;
        }).catch((error) => {
            throw new Error(`Memberships.getMembership: ${error}`);
        });
        return membership;
    }
}

module.exports = { MembershipsAPI };