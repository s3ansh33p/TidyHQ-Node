/**
 * @fileoverview This file contains functions for interacting with Memberships in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2024
 * @version 2.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("../utils/Builder.js");

/**
 * @description This class is used to interact with Memberships in TidyHQ.
 * @class
 */
class MembershipAPI {

    /**
     * @description This function is used to create a new instance of the MembershipAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the MembershipAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get a list of memberships from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-memberships
     * @param {object} [options = {}] - The options to use.
     * @param {Date} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {Date} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of memberships per page to return.
     * @param {number} [options.offset] - The number of memberships to skip.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @param {boolean} [options.active]  - When given, returns only users with active / inactive memberships (active is partial and activated status).
     * @returns {object[]} - An array of membership objects.
     * @private
     */
    async getMemberships(options = {}) {
        let optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset", "registered", "active"], options)
        let memberships = [];
        await this.axios.get(`/v2/memberships${optionalParametersString}`).then((response) => {
            contacts = response.data;
        }).catch((error) => {
            console.log(error);
            throw new Error(`V2.Memberships.getMemberships: ${error}\n${error.response.data}`);
        });
        return memberships;
    }

}

module.exports = { MembershipAPI };