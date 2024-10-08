/**
 * @fileoverview This file contains functions for interacting with Expenses in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Expenses in TidyHQ.
 * @class
 */
class ExpensesAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Get a list of expenses from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of expenses to return.
     * @param {number} [options.offset] - The number of expenses to skip.
     * @param {"activated" | "cancelled" | "all"} [options.status] - The status of the expense.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Expenses>} - An array of expenses.
     */
    async getExpenses(options = {}) {
        const accessToken = options.access_token || "";
        const data = {
            limit: options.limit,
            offset: options.offset,
            status: options.status == "all" ? "activated,cancelled" : options.status,
            updated_since: options.updated_since
        }
        const optionalParametersString = makeURLParameters(["limit", "offset", "status", "updated_since"], data);
        return await this.rest.get(`/v1/expenses${optionalParametersString}`, accessToken);
    }
        
    /**
     * @description Get a single expense from TidyHQ.
     * @param {string} expenseID - The ID of the expense to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Expense>} - An Expense object.
     */
    async getExpense(expenseID, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/expenses/${expenseID}`, accessToken);
    }

    /**
     * @description Create a new expense in TidyHQ.
     * @param {Tidy_V1_ExpenseParams} expense - The expense to create.
     * @param {object} [options = {}] - The options to create the expense with.
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Expense>} - The newly created expense.
     */
    async createExpense(expense, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.post(`/v1/expenses`, {
            expense
        }, accessToken);
    }

    /**
     * @description Helper function to determine if a payment type is valid.
     * @param {string} type - The type to check.
     * @returns {boolean} - Whether the type is valid or not.
     */
    #_isValidType(type) {
        return ["cash", "card", "cheque", "bank", "other"].includes(type);
    }

    /**
     * @description This function is used to add a payment to an expense.
     * @param {string} expenseID - The ID of the expense.
     * @param {object} [options] - The options to create the payment with. At least one option is required that isn't the access_token.
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.amount] - The amount of the payment expressed as a decimal.
     * @param {Tidy_V1_PaymentType} [options.payment_type] - The type of payment.
     * @param {string} [options.date] - The date of the payment in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Payment>} - The newly created payment.
     */
    async addPayment(expenseID, options = {}) {
        const accessToken = options.access_token || "";
        delete options.access_token;

        const paymentType = options.payment_type || "";

        if (!this.#_isValidType(paymentType)) throw new Error(`Expenses.addPayment: Invalid payment type ${paymentType}.`);
        
        if (Object.keys(options).length == 0) throw new Error("Expenses.addPayment: No valid options provided.");

        return await this.rest.post(`/v1/expenses/${expenseID}/payments`, options, accessToken);
    }

    /**
     * @description Delete an expense.
     * @param {string} expenseID - The ID of the expense.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    async deleteExpense(expenseID, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.delete(`/v1/expenses/${expenseID}`, {}, accessToken);
    }
}

module.exports = { ExpensesAPI };