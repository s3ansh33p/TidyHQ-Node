/**
 * @fileoverview This file contains functions for interacting with Deposits in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */
const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Deposits in TidyHQ.
 * @class
 */
class DepositsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of deposits from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of deposits to return.
     * @param {number} [options.offset] - The number of deposits to skip.
     * @param {"activated" | "cancelled" | "all"} [options.status] - The status of the deposit.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Deposits>} - An array of deposits.
     */
    async getDeposits(options = {}) {
        const data = {
            limit: options.limit,
            offset: options.offset,
            status: options.status == "all" ? "activated,cancelled" : options.status,
            updated_since: options.updated_since
        }
        const optionalParametersString = makeURLParameters(["limit", "offset", "status", "updated_since"], data);
        return await this.rest.get(`/v1/deposits${optionalParametersString}`, options.access_token);
    }
        
    /**
     * @description This function is used to get a single deposit from TidyHQ.
     * @param {string} depositID - The ID of the deposit to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Deposit>} - An deposit object.
     */
    async getDeposit(depositID, options = {}) {
        return await this.rest.get(`/v1/deposits/${depositID}`, options.access_token);
    }

    /**
     * @description This function is used to create a new deposit in TidyHQ.
     * @param {string} name - The name of the deposit.
     * @param {number} amount - The amount of the deposit as a decimal.
     * @param {string} paid_date - The date that the deposit was paid in ISO 8601 format.
     * @param {number} category_id - The category of the deposit.
     * @param {number} contact_id - The source of the deposit.
     * @param {object} [options = {}] - The options to create the deposit with.
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the deposit.
     * @param {string} [options.metadata] - The metadata of the deposit.
     * @returns {Promise<TidyAPI_V1_Deposit>} - The newly created deposit.
     */
    async createDeposit(name, amount, paid_date, category_id, contact_id, options = {}) {
        const access_token = options.access_token;
        delete options.access_token;

        const validOptions = ["description", "metadata"];
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            if (!validOptions.includes(keys[i])) {
                throw new Error(`Deposits.createDeposit: Invalid option '${keys[i]}'`);
            }
        }

        return await this.rest.post(`/v1/deposits`, {
            name,
            amount,
            paid_date,
            category_id,
            contact_id,
            ...options
        }, access_token);
    }
}

module.exports = { DepositsAPI };