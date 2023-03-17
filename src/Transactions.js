/**
 * @fileoverview This file contains functions for interacting with Transactions in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");

/**
 * @description This class is used to interact with Transactions in TidyHQ.
 * @class
 */
class TransactionsAPI {

    /**
     * @description This function is used to create a new instance of the TransactionsAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the TransactionsAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of all transactions.
     * @returns {object} - The list of transactions.
     */
    async getTransactions() {
        let transactions = [];
        await axios.get(`https://api.tidyhq.com/v1/transactions?access_token=${this.access_token}`).then((response) => {
            transactions = response.data;
        }).catch((error) => {
            throw new Error(`Transactions.getTransactions: ${error}`);
        });
        return transactions;
    }

    /**
     * @description This function is used to get a single transaction.
     * @param {string} id - The ID of the transaction.
     * @returns {object} - The transaction.
     */
    async getTransaction(id) {
        let transaction = {};
        await axios.get(`https://api.tidyhq.com/v1/transactions/${id}?access_token=${this.access_token}`).then((response) => {
            transaction = response.data;
        }).catch((error) => {
            throw new Error(`Transactions.getTransaction: ${error}`);
        });
        return transaction;
    }

}

module.exports = { TransactionsAPI };