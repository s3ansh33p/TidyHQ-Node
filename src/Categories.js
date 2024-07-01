/**
 * @fileoverview This file contains functions for interacting with Categories in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Categories in TidyHQ.
 * @class
 */
class CategoriesAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {CategoriesAPI}
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
     * @returns {object} - The list of categories.
     */
    async getCategories(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset"], options)
        let categories = [];
        await this.rest.get(`/v1/categories${optionalParametersString}`, options.access_token).then((response) => {
            categories = response.data;
        }).catch((error) => {
            throw new Error(`Categories.getCategories: ${error}\n${error.response.data}`);
        });
        return categories;
    }

}

module.exports = { CategoriesAPI };