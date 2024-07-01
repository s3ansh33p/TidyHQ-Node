/**
 * @fileoverview This file contains functions for interacting with Membership Levels in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Membership Levels in TidyHQ.
 * @class
 */
class MembershipLevelsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {MembershipLevelsAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all membership levels.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {object} - The list of membership levels.
     */
    async getMembershipLevels(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset"], options)

        let membershipLevels = [];
        await this.rest.get(`/v1/membership_levels${optionalParametersString}`, options.access_token).then((response) => {
            membershipLevels = response.data;
        }).catch((error) => {
            throw new Error(`MembershipLevels.getMembershipLevels: ${error}\n${error.response.data}`);
        });
        return membershipLevels;
    }

    /**
     * @description This function is used to get a single membership level.
     * @param {number} membership_level_id - The ID of the membership level.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The membership level.
     */
    async getMembershipLevel(membership_level_id, options = {}) {
        let membershipLevel = {};
        await this.rest.get(`/v1/membership_levels/${membership_level_id}`, options.access_token).then((response) => {
            membershipLevel = response.data;
        }).catch((error) => {
            throw new Error(`MembershipLevels.getMembershipLevel: ${error}\n${error.response.data}`);
        });
        return membershipLevel;
    }

    /**
     * @description This function is used to get pricing variations for a membership level.
     * @param {number} membership_level_id - The ID of the membership level.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     */
    async getPricingVariations(membership_level_id, options = {}) {
        let pricingVariations = [];
        await this.rest.get(`/v1/membership_levels/${membership_level_id}/pricing_variations`, options.access_token).then((response) => {
            pricingVariations = response.data;
        }).catch((error) => {
            if (error.response.status == 403) {
                throw new Error(`MembershipLevels.getPricingVariations: You do not have permission to access this resource.`);
            }
            throw new Error(`MembershipLevels.getPricingVariations: ${error}\n${error.response.data}`);
        });
        return pricingVariations;
    }
}

module.exports = { MembershipLevelsAPI };