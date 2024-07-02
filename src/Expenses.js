/**
 * @fileoverview This file contains functions for interacting with Expenses in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Expenses in TidyHQ.
 * @class
 */
class ExpensesAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {ExpensesAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of expenses from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of expenses to return.
     * @param {number} [options.offset] - The number of expenses to skip.
     * @param {"activated" | "cancelled" | "all"} [options.status] - The status of the expense.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @returns {object} - An array of expenses.
     */
    async getExpenses(options = {}) {
        let expenses = [];
        if (options.status == "all") {
            options.status = "activated,cancelled";
        }
        let optionalParametersString = makeURLParameters(["limit", "offset", "status", "updated_since"], options);

        await this.rest.get(`/v1/expenses${optionalParametersString}`, options.access_token).then((response) => {
            expenses = response.data;
        }).catch((error) => {
            throw new Error(`Expenses.getExpenses: ${error}\n${error.response.data}`);
        });
        return expenses;
    }
        
    /**
     * @description This function is used to get a single expense from TidyHQ.
     * @param {string} expenseID - The ID of the expense to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - An Expense object.
     */
    async getExpense(expenseID, options = {}) {
        let expense = {};

        await this.rest.get(`/v1/expenses/${expenseID}`, options.access_token).then((response) => {
            expense = response.data;
        }).catch((error) => {
            throw new Error(`Expenses.getExpense: ${error}\n${error.response.data}`);
        });
        return expense;
    }

    /**
     * @description This function is used to create a new expense in TidyHQ.
     * @param {string} name - The name of the expense.
     * @param {decimal} amount - The amount of the expense.
     * @param {string} due_date - The due date of the expense in ISO 8601 format.
     * @param {category_id} category_id - The category of the expense.
     * @param {contact_id} contact_id - The source of the expense.
     * @param {object} [options = {}] - The options to create the expense with.
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the expense.
     * @param {string} [options.metadata] - The metadata of the expense.
     * @returns {boolean} - Success or failure.
     */
    async createExpense(name, amount, due_date, category_id, contact_id, options = {}) {
        const access_token = options.access_token;
        delete options.access_token;
        
        let success = false;

        const validOptions = ["description", "metadata"];
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            if (!validOptions.includes(keys[i])) {
                throw new Error(`Expenses.createExpense: Invalid option '${keys[i]}'`);
            }
        }
        
        await this.rest.post(`/v1/expenses`, {
            name,
            amount,
            due_date,
            category_id,
            contact_id,
            ...options
        }, access_token).then((response) => {
            if (response.status == 201) {
                success = true;
            }
        }).catch((error) => {
            console.log(error.response.data);
            throw new Error(`Expenses.createExpense: ${error}\n${error.response.data}`);
        });

        return success;
    }

    /**
     * @description This function is used to add a payment to an expense.
     * @param {string} expenseID - The ID of the expense.
     * @param {object} [options]. - The options to create the payment with. At least one option is required that isn't the access_token.
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.amount] - The amount of the payment expressed as a decimal.
     * @param {"cash" | "card" | "cheque" | "bank" | "other"} [options.payment_type] - The type of payment.
     * @param {string} [options.date] - The date of the payment in ISO 8601 format.
     * @returns {boolean} - Success or failure.
     */
    async addPayment(expenseID, options) {
        const access_token = options.access_token;
        delete options.access_token;

        let success = "";
        if (options.payment_type != undefined) {
            if (!["cash", "card", "cheque", "bank", "other"].includes(options.payment_type)) throw new Error(`Expenses.addPayment: Invalid payment type ${options.payment_type}.`);
        }
        let optionalParametersString = makeURLParameters(["amount", "payment_type", "date"], options);
        if (optionalParametersString == "") throw new Error("Expenses.addPayment: No valid options provided.");

        await this.rest.post(`/v1/expenses/${expenseID}/payments${optionalParametersString}`, {}, options.access_token).then((response) => {
            if (response.status == 201) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Expenses.addPayment: ${error}\n${error.response.data}`);
        });
        return success;
    }

    /**
     * @description This function is used to delete an expense.
     * @param {string} expenseID - The ID of the expense.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Success or failure.
     */
    async deleteExpense(expenseID, options = {}) {
        let success = false;
        await this.rest.delete(`/v1/expenses/${expenseID}`, {}, options.access_token).then((response) => {
            if (response.status == 200) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Expenses.deleteExpense: ${error}\n${error.response.data}`);
        });
        return success;
    }
}

module.exports = { ExpensesAPI };