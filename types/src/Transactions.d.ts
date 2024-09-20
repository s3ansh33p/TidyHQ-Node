/**
 * @description This class is used to interact with Transactions in TidyHQ.
 * @class
 */
export class TransactionsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
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
    getTransactions(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        start_date?: string | undefined;
        end_date?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Transactions>;
    /**
     * @description Get a single transaction.
     * @param {string} id - The ID of the transaction.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Transaction>} - The transaction.
     */
    getTransaction(id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Transaction>;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_Transactions, TidyAPI_V1_Transaction } from "types.js";
