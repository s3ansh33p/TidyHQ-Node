/**
 * @fileoverview This file contains functions for interacting with Transactions in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Transactions in TidyHQ.
 * @class
 */
class TransactionsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Get a list of all transactions.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of transactions to return.
     * @param {number} [options.offset] - The number of transactions to skip.
     * @param {string} [options.start_date] - The timestamp to begin from in ISO 8601 format.
     * @param {string} [options.end_date] - The timestamp end at in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Transactions>} - The list of transactions.
     */
    async getTransactions(options = {}) {
        const accessToken = options.access_token || "";
        const data = {
            limit: options.limit,
            offset: options.offset,
            start_date: options.start_date,
            end_date: options.end_date
        }
        const optionalParametersString = makeURLParameters(["limit", "offset", "start_date", "end_date"], data);
        return await this.rest.get(`/v1/transactions${optionalParametersString}`, accessToken);
    }

    /**
     * @description Get a single transaction.
     * @param {string} id - The ID of the transaction.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Transaction>} - The transaction.
     */
    async getTransaction(id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/transactions/${id}`, accessToken);
    }

}

module.exports = { TransactionsAPI };