/**
 * @fileoverview This file contains functions for interacting with Deposits in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Deposits in TidyHQ.
 * @class
 */
class DepositsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {DepositsAPI}
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
     * @param {Date} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @returns {object} - An array of deposits.
     */
    async getDeposits(options = {}) {
        let deposits = [];
        if (options.status == "all") {
            options.status = "activated,cancelled";
        }
        let optionalParametersString = makeURLParameters(["limit", "offset", "status", "updated_since"], options);

        await this.rest.get(`/v1/deposits${optionalParametersString}`, options.access_token).then((response) => {
            deposits = response.data;
        }).catch((error) => {
            throw new Error(`Deposits.getDeposits: ${error}\n${error.response.data}`);
        });
        return deposits;
    }
        
    /**
     * @description This function is used to get a single deposit from TidyHQ.
     * @param {string} depositID - The ID of the deposit to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - An deposit object.
     */
    async getDeposit(depositID, options = {}) {
        let deposit = {};

        await this.rest.get(`/v1/deposits/${depositID}`, options.access_token).then((response) => {
            deposit = response.data;
        }).catch((error) => {
            throw new Error(`Deposits.getDeposit: ${error}\n${error.response.data}`);
        });
        return deposit;
    }

    /**
     * @description This function is used to create a new deposit in TidyHQ.
     * @param {string} name - The name of the deposit.
     * @param {decimal} amount - The amount of the deposit.
     * @param {Date} paid_date - The date that the deposit was paid in ISO 8601 format.
     * @param {category_id} category_id - The category of the deposit.
     * @param {contact_id} contact_id - The source of the deposit.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use. - The options to create the deposit with.
     * @param {string} [options.description] - The description of the deposit.
     * @param {string} [options.metadata] - The metadata of the deposit.
     * @returns {boolean} - Success or failure.
     */
    async createDeposit(name, amount, paid_date, category_id, contact_id, options = {}) {
        const access_token = options.access_token;
        delete options.access_token;

        let success = false;

        const validOptions = ["description", "metadata"];
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            if (!validOptions.includes(keys[i])) {
                throw new Error(`Deposits.createDeposit: Invalid option '${keys[i]}'`);
            }
        }

        await this.rest.post(`/v1/deposits`, {
            name,
            amount,
            paid_date,
            category_id,
            contact_id,
            ...options
        }, access_token).then((response) => {
            if (response.status == 201) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Deposits.createDeposit: ${error}\n${error.response.data}`);
        });

        return success;
    }
}

module.exports = { DepositsAPI };