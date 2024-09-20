/**
 * @description This class is used to interact with Categories in TidyHQ.
 * @class
 */
export class CategoriesAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of all categories.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_Categories>} - The list of categories.
     */
    getCategories(options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Categories>;
}
import { Rest } from "./utils/Rest.js";
