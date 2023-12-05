/**
 * @fileoverview This file contains functions for interacting with Transactions in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.1.0
 * @license GPL-3.0
 */

/**
 * @description This class is used to interact with Transactions in TidyHQ.
 * @class
 */
class TransactionsAPI {

    /**
     * @description This function is used to create a new instance of the TransactionsAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the TransactionsAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get a list of all transactions.
     * @returns {object} - The list of transactions.
     */
    async getTransactions() {
        let transactions = [];
        await this.axios.get(`/v1/transactions`).then((response) => {
            transactions = response.data;
        }).catch((error) => {
            throw new Error(`Transactions.getTransactions: ${error}\n${error.response.data}`);
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
        await this.axios.get(`/v1/transactions/${id}`).then((response) => {
            transaction = response.data;
        }).catch((error) => {
            throw new Error(`Transactions.getTransaction: ${error}\n${error.response.data}`);
        });
        return transaction;
    }

}

module.exports = { TransactionsAPI };