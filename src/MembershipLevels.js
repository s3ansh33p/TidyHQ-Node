/**
 * @fileoverview This file contains functions for interacting with Membership Levels in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Membership Levels in TidyHQ.
 * @class
 */
class MembershipLevelsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Get a list of all membership levels.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_MembershipLevels>} - The list of membership levels.
     */
    async getMembershipLevels(options = {}) {
        const optionalParametersString = makeURLParameters(["limit", "offset"], options)
        return await this.rest.get(`/v1/membership_levels${optionalParametersString}`, options?.access_token);
    }

    /**
     * @description Get a single membership level.
     * @param {number} membership_level_id - The ID of the membership level.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_MembershipLevel>} - The membership level.
     */
    async getMembershipLevel(membership_level_id, options = {}) {
        return await this.rest.get(`/v1/membership_levels/${membership_level_id}`, options?.access_token);
    }

    /**
     * @description Get pricing variations for a membership level.
     * @param {number} membership_level_id - The ID of the membership level.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_PricingVariation>} - The pricing variations for the membership level.
     */
    async getPricingVariations(membership_level_id, options = {}) {
        return await this.rest.get(`/v1/membership_levels/${membership_level_id}/pricing_variations`, options?.access_token);
    }
}

module.exports = { MembershipLevelsAPI };