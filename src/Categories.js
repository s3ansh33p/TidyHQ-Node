/**
 * @fileoverview This file contains functions for interacting with Categories in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Categories in TidyHQ.
 * @class
 */
class CategoriesAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all categories.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<ApiCategoriesResponse>} - The list of categories.
     */
    async getCategories(options = {}) {
        const optionalParametersString = makeURLParameters(["limit", "offset"], options)
        return await this.rest.get(`/v1/categories${optionalParametersString}`, options.access_token);
    }

}

module.exports = { CategoriesAPI };