/**
 * @fileoverview This file contains functions for interacting with Expenses in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Expenses in TidyHQ.
 * @class
 */
class ExpensesAPI {

    /**
     * @description This function is used to create a new instance of the ExpensesAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the ExpensesAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of expenses from TidyHQ.
     * @param {object} options - The options to use.
     * @param {number} options.limit - The maximum number of expenses to return.
     * @param {number} options.offset - The number of expenses to skip.
     * @param {"activated" | "cancelled" | "all"} options.status - The status of the expense.
     * @param {date} options.updated_since - The timestamp of the last update in ISO 8601 format.
     * @returns {object} - An array of expenses.
     */
    async getExpenses(options = {}) {
        let expenses = [];
        if (options.status == "all") {
            options.status = "activated,cancelled";
        }
        let optionalParametersString = makeURLParameters(["limit", "offset", "status", "updated_since"], options);

        await axios.get(`https://api.tidyhq.com/v1/expenses?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            expenses = response.data;
        }).catch((error) => {
            throw new Error(`Expenses.getExpenses: ${error}`);
        });
        return expenses;
    }
        
    /**
     * @description This function is used to get a single expense from TidyHQ.
     * @param {string} expenseID - The ID of the expense to get
     * @returns {object} - An Expense object.
     */
    async getExpense(expenseID) {
        let expense = {};

        await axios.get(`https://api.tidyhq.com/v1/expenses/${expenseID}?access_token=${this.access_token}`).then((response) => {
            expense = response.data;
        }).catch((error) => {
            throw new Error(`Expenses.getExpense: ${error}`);
        });
        return expense;
    }

    /**
     * @description This function is used to create a new expense in TidyHQ.
     * @param {string} name - The name of the expense.
     * @param {decimal} amount - The amount of the expense.
     * @param {date} due_date - The due date of the expense in ISO 8601 format.
     * @param {category_id} category_id - The category of the expense.
     * @param {contact_id} contact_id - The source of the expense.
     * @param {object} options - The options to create the expense with.
     * @param {string} options.description - The description of the expense.
     * @param {string} options.metadata - The metadata of the expense.
     * @returns {boolean} - Success or failure.
     */
    async createExpense(name, amount, due_date, category_id, contact_id, options = {}) {
        let success = false;

        const validOptions = ["description", "metadata"];
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            if (!validOptions.includes(keys[i])) {
                throw new Error(`Expenses.createExpense: Invalid option '${keys[i]}'`);
            }
        }
        
        await axios.post(`https://api.tidyhq.com/v1/expenses?access_token=${this.access_token}`, {
            name,
            amount,
            due_date,
            category_id,
            contact_id,
            ...options
        }).then((response) => {
            if (response.status == 201) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Expenses.createExpense: ${error}`);
        });

        return success;
    }

    /**
     * @description This function is used to add a payment to an expense.
     * @param {string} expenseID - The ID of the expense.
     * @param {object} options - The options to create the payment with.
     * @param {decimal} options.amount - The amount of the payment expressed as a decimal.
     * @param {"cash" | "card" | "cheque" | "bank" | "other"} options.payment_type - The type of payment.
     * @param {date} options.date - The date of the payment in ISO 8601 format.
     * @returns {boolean} - Success or failure.
     */
    async addPayment(expenseID, options = {}) {
        let success = "";
        if (options.payment_type != undefined) {
            if (!["cash", "card", "cheque", "bank", "other"].includes(options.payment_type)) throw new Error(`Expenses.addPayment: Invalid payment type ${options.payment_type}.`);
        }
        let optionalParametersString = makeURLParameters(["amount", "payment_type", "date"], options);
        if (optionalParametersString == "") throw new Error("Expenses.addPayment: No valid options provided.");

        await axios.post(`https://api.tidyhq.com/v1/expenses/${expenseID}/payments?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            if (response.status == 201) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Expenses.addPayment: ${error}`);
        });
        return success;
    }

    /**
     * @description This function is used to delete an expense.
     * @param {string} expenseID - The ID of the expense.
     * @returns {boolean} - Success or failure.
     */
    async deleteExpense(expenseID) {
        let success = false;
        await axios.delete(`https://api.tidyhq.com/v1/expenses/${expenseID}?access_token=${this.access_token}`).then((response) => {
            if (response.status == 200) {
                success = true;
            }
        }).catch((error) => {
            throw new Error(`Expenses.deleteExpense: ${error}`);
        });
        return success;
    }
}

module.exports = { ExpensesAPI };