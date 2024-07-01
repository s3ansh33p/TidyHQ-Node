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
     * @description This function is used to get a list of memberships from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-memberships
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {Date} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {Date} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of memberships per page to return.
     * @param {number} [options.offset] - The number of memberships to skip.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @param {boolean} [options.active]  - When given, returns only users with active / inactive memberships (active is partial and activated status).
     * @returns {Promise<ApiV2MembershipsResponse>} - An array of membership objects.
     * @private
     */
    async getMemberships(options = {}) {
        const optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset", "all", "active"], options)
        return await this.rest.get(`/v2/memberships${optionalParametersString}`, options.access_token);
    }

}

module.exports = { V2_MembershipAPI };
