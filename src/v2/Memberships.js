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
class V2_MembershipAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Get a list of memberships from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-memberships
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {string} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of memberships per page to return.
     * @param {number} [options.offset] - The number of memberships to skip.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @param {boolean} [options.active]  - When given, returns only users with active / inactive memberships (active is partial and activated status).
     * @returns {Promise<TidyAPI_V2_Memberships>} - An array of memberships.
     */
    async getMemberships(options = {}) {
        const optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset", "all", "active"], options)
        return await this.rest.get(`/v2/memberships${optionalParametersString}`, options?.access_token);
    }

    /**
     * @description Get a single membership from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-membership
     * @param {string} membership_id - The id of the membership to get.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_Membership>} - The membership.
     */
    async getMembership(membership_id, options = {}) {
        return await this.rest.get(`/v2/memberships/${membership_id}`, options?.access_token);
    }

    /**
     * @description Create/renew a subscription for a membership in TidyHQ.
     * @link https://tidyhq.readme.io/reference/create-membership-subscription
     * @param {string} membership_id - The id of the membership to create a subscription for.
     * @param {Tidy_V2_PostSubscriptionParams} subscription - The subscription parameters.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V2_SubscriptionPost>} - The subscription, membership, payment url and invoice id.
     */
    async renewSubscriptionForMembership(membership_id, subscription, options = {}) {
        return await this.rest.post(`/v2/memberships/${membership_id}/subscriptions`, subscription, options?.access_token);
    }

}

module.exports = { V2_MembershipAPI };
