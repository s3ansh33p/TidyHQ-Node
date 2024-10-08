/**
 * @fileoverview This file contains functions for interacting with Memberships in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.2.0
 * @license GPL-3.0
 */

const { Rest } = require("../utils/Rest.js");
const { makeURLParameters } = require("../utils/Builder.js");

/**
 * @description This class is used to interact with Memberships in TidyHQ.
 * @class
 */
class V2_MembershipLevelsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Get a list of membership levels from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-membership_levels
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {string} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of memberships per page to return.
     * @param {number} [options.offset] - The number of memberships to skip.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @returns {Promise<TidyAPI_V2_MembershipLevels>} - An array of membership levels.
     */
    async getMembershipLevels(options = {}) {
        const accessToken = options.access_token || "";
        const optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset", "all"], options)
        return await this.rest.get(`/v2/membership_levels${optionalParametersString}`, accessToken);
    }

    /**
     * @description Create a membership in TidyHQ.
     * @link https://tidyhq.readme.io/reference/create-membership-level-subscription
     * @param {string} membership_level_id - The id of the membership level to subscribe to.
     * @param {Tidy_V2_PostSubscriptionParams} subscription - The subscription parameters.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_SubscriptionPost>} - The subscription, membership, payment url and invoice id.
     */
    async createMembership(membership_level_id, subscription, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.post(`/v2/membership_levels/${membership_level_id}/subscriptions`, subscription, accessToken);
    }

}

module.exports = { V2_MembershipLevelsAPI };
