/**
 * @description This class is used to interact with Deposits in TidyHQ.
 * @class
 */
export class DepositsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of deposits from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of deposits to return.
     * @param {number} [options.offset] - The number of deposits to skip.
     * @param {"activated" | "cancelled" | "all"} [options.status] - The status of the deposit.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Deposits>} - An array of deposits.
     */
    getDeposits(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        status?: "all" | "activated" | "cancelled" | undefined;
        updated_since?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Deposits>;
    /**
     * @description Get a single deposit from TidyHQ.
     * @param {string} depositID - The ID of the deposit to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Deposit>} - An deposit object.
     */
    getDeposit(depositID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Deposit>;
    /**
     * @description Create a new deposit in TidyHQ.
     * @param {Tidy_V1_DepositParams} deposit - The deposit to create.
     * @param {object} [options = {}] - The options to create the deposit with.
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Deposit>} - The newly created deposit.
     */
    createDeposit(deposit: Tidy_V1_DepositParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Deposit>;
}
import { Rest } from "./utils/Rest.js";
