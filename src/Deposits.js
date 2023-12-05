/**
 * @fileoverview This file contains functions for interacting with Deposits in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
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
     * @description This function is used to create a new instance of the DepositsAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the DepositsAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get a list of deposits from TidyHQ.
     * @param {object} options - The options to use.
     * @param {number} options.limit - The maximum number of deposits to return.
     * @param {number} options.offset - The number of deposits to skip.
     * @param {"activated" | "cancelled" | "all"} options.status - The status of the deposit.
     * @param {date} options.updated_since - The timestamp of the last update in ISO 8601 format.
     * @returns {object} - An array of deposits.
     */
    async getDeposits(options = {}) {
        let deposits = [];
        if (options.status == "all") {
            options.status = "activated,cancelled";
        }
        let optionalParametersString = makeURLParameters(["limit", "offset", "status", "updated_since"], options);

        await this.axios.get(`/v1/deposits${optionalParametersString}`).then((response) => {
            deposits = response.data;
        }).catch((error) => {
            throw new Error(`Deposits.getDeposits: ${error}\n${error.response.data}`);
        });
        return deposits;
    }
        
    /**
     * @description This function is used to get a single deposit from TidyHQ.
     * @param {string} depositID - The ID of the deposit to get
     * @returns {object} - An deposit object.
     */
    async getDeposit(depositID) {
        let deposit = {};

        await this.axios.get(`/v1/deposits/${depositID}`).then((response) => {
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
     * @param {date} paid_date - The date that the deposit was paid in ISO 8601 format.
     * @param {category_id} category_id - The category of the deposit.
     * @param {contact_id} contact_id - The source of the deposit.
     * @param {object} options - The options to create the deposit with.
     * @param {string} options.description - The description of the deposit.
     * @param {string} options.metadata - The metadata of the deposit.
     * @returns {boolean} - Success or failure.
     */
    async createDeposit(name, amount, paid_date, category_id, contact_id, options = {}) {
        let success = false;

        const validOptions = ["description", "metadata"];
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            if (!validOptions.includes(keys[i])) {
                throw new Error(`Deposits.createDeposit: Invalid option '${keys[i]}'`);
            }
        }
        
        await this.axios.post(`/v1/deposits`, {
            name,
            amount,
            paid_date,
            category_id,
            contact_id,
            ...options
        }).then((response) => {
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