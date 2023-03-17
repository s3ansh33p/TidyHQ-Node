/**
 * @fileoverview This file contains functions for interacting with Categories in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Categories in TidyHQ.
 * @class
 */
class CategoriesAPI {

    /**
     * @description This function is used to create a new instance of the CategoriesAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the CategoriesAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of all categories.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @returns {object} - The list of categories.
     */
    async getCategories(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset"], options)
        let categories = [];
        await axios.get(`https://api.tidyhq.com/v1/categories?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            categories = response.data;
        }).catch((error) => {
            throw new Error(`Categories.getCategories: ${error}`);
        });
        return categories;
    }

}

module.exports = { CategoriesAPI };