/**
 * @description This class is used to interact with Expenses in TidyHQ.
 * @class
 */
export class ExpensesAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
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
    getExpenses(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        status?: "all" | "activated" | "cancelled" | undefined;
        updated_since?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Expenses>;
    /**
     * @description Get a single expense from TidyHQ.
     * @param {string} expenseID - The ID of the expense to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Expense>} - An Expense object.
     */
    getExpense(expenseID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Expense>;
    /**
     * @description Create a new expense in TidyHQ.
     * @param {Tidy_V1_ExpenseParams} expense - The expense to create.
     * @param {object} [options = {}] - The options to create the expense with.
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Expense>} - The newly created expense.
     */
    createExpense(expense: Tidy_V1_ExpenseParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Expense>;
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
    addPayment(expenseID: string, options?: {
        access_token?: string | undefined;
        amount?: number | undefined;
        payment_type?: Tidy_V1_PaymentType | undefined;
        date?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Payment>;
    /**
     * @description Delete an expense.
     * @param {string} expenseID - The ID of the expense.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    deleteExpense(expenseID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
    #private;
}
import { Rest } from "./utils/Rest.js";
