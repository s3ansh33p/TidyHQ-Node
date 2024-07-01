/**
 * @fileoverview This file contains functions for interacting with Transactions in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

/**
 * @description This class is used to interact with Transactions in TidyHQ.
 * @class
 */
class TransactionsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {TransactionsAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all transactions.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The list of transactions.
     */
    async getTransactions(options = {}) {
        let transactions = [];
        await this.rest.get(`/v1/transactions`, options.access_token).then((response) => {
            transactions = response.data;
        }).catch((error) => {
            throw new Error(`Transactions.getTransactions: ${error}\n${error.response.data}`);
        });
        return transactions;
    }

    /**
     * @description This function is used to get a single transaction.
     * @param {string} id - The ID of the transaction.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The transaction.
     */
    async getTransaction(id, options = {}) {
        let transaction = {};
        await this.rest.get(`/v1/transactions/${id}`, options.access_token).then((response) => {
            transaction = response.data;
        }).catch((error) => {
            throw new Error(`Transactions.getTransaction: ${error}\n${error.response.data}`);
        });
        return transaction;
    }

}

module.exports = { TransactionsAPI };