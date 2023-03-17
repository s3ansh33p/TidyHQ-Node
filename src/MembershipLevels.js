/**
 * @fileoverview This file contains functions for interacting with Membership Levels in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Membership Levels in TidyHQ.
 * @class
 */
class MembershipLevelsAPI {

    /**
     * @description This function is used to create a new instance of the MembershipLevelsAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the MembershipLevelsAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of all membership levels.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @returns {object} - The list of membership levels.
     */
    async getMembershipLevels(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset"], options)

        let membershipLevels = [];
        await axios.get(`https://api.tidyhq.com/v1/membership_levels?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            membershipLevels = response.data;
        }).catch((error) => {
            throw new Error(`MembershipLevels.getMembershipLevels: ${error}`);
        });
        return membershipLevels;
    }

    /**
     * @description This function is used to get a single membership level.
     * @param {number} membership_level_id - The ID of the membership level.
     * @returns {object} - The membership level.
     */
    async getMembershipLevel(membership_level_id) {
        let membershipLevel = {};
        await axios.get(`https://api.tidyhq.com/v1/membership_levels/${membership_level_id}?access_token=${this.access_token}`).then((response) => {
            membershipLevel = response.data;
        }).catch((error) => {
            throw new Error(`MembershipLevels.getMembershipLevel: ${error}`);
        });
        return membershipLevel;
    }

    /**
     * @description This function is used to get pricing variations for a membership level.
     * @param {number} membership_level_id - The ID of the membership level.
     */
    async getPricingVariations(membership_level_id) {
        let pricingVariations = [];
        await axios.get(`https://api.tidyhq.com/v1/membership_levels/${membership_level_id}/pricing_variations?access_token=${this.access_token}`).then((response) => {
            pricingVariations = response.data;
        }).catch((error) => {
            if (error.response.status == 403) {
                throw new Error(`MembershipLevels.getPricingVariations: You do not have permission to access this resource.`);
            }
            throw new Error(`MembershipLevels.getPricingVariations: ${error}`);
        });
        return pricingVariations;
    }
}

module.exports = { MembershipLevelsAPI };