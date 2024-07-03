/**
 * @fileoverview This file contains functions for interacting with Custom Fields in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Custom Fields in TidyHQ.
 * @class
 */
class CustomFieldsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of custom fields from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFields>} - An array of custom fields.
     */
    async getCustomFields(options = {}) {
        return await this.rest.get(`/v1/custom_fields`, options?.access_token);
    }

    /**
     * @description This function is used to get a single custom field from TidyHQ.
     * @param {string} customFieldID - The ID of the CustomField to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomField>} - The custom field.
     **/
    async getCustomField(customFieldID, options = {}) {
        return await this.rest.get(`/v1/custom_fields/${customFieldID}`, options?.access_token);
    }

    /**
     * @description Helper function to determine if a custom field type is valid.
     * @param {string} type - The type to check.
     * @returns {boolean} - Whether the type is valid or not.
     */
    #_isValidType(type) {
        return ["string", "text", "dropdown", "boolean", "date"].includes(type);
    }

    /**
     * @description This function is used to create a new custom field in TidyHQ.
     * @param {string} title - The title of the custom field to create.
     * @param {Tidy_V1_CustomFieldType} type - The type of the custom field to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomField>} - The newly created custom field.
     */
    async createCustomField(title, type, options = {}) {
        if (!this.#_isValidType(type)) throw new Error(`CustomFields.createCustomField: Invalid type ${type}.`);
        return await this.rest.post(`/v1/custom_fields`, {
            title,
            type
        }, options?.access_token);
    }

    /**
     * @description This function is used to update a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to update.
     * @param {object} [options] - The options to update the custom field with. At least one option is required that isn't the access_token.
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.title] - The new title of the custom field.
     * @param {"string" | "text" | "dropdown" | "boolean" | "date"} [options.type] - The new type of the custom field.
     * @returns {Promise<TidyAPI_V1_CustomField>} - The updated custom field.
     */
    async updateCustomField(customFieldID, options) {
        if (!this.#_isValidType(options.type)) throw new Error(`CustomFields.updateCustomField: Invalid type ${options.type}.`);
        const data = {
            title: options.title,
            type: options.type
        }
        let optionalParametersString = makeURLParameters(["title", "type"], data)
        if (optionalParametersString == "") throw new Error("CustomFields.updateCustomField: No valid options provided.");

        return await this.rest.put(`/v1/custom_fields/${customFieldID}${optionalParametersString}`, {}, options?.access_token);
    }

    /**
     * @description This function is used to delete a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    async deleteCustomField(customFieldID, options = {}) {
        return await this.rest.delete(`/v1/custom_fields/${customFieldID}`, options?.access_token);
    }

    /**
     * @description This function is used to get the choices for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to get the choices for.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFieldChoices>} - An array of choice objects.
     */
    async getCustomFieldChoices(customFieldID, options = {}) {
        return await this.rest.get(`/v1/custom_fields/${customFieldID}/choices`, options?.access_token);
    }

    /**
     * @description This function is used to get a single choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to get the choice for.
     * @param {string} choiceID - The ID of the choice to get.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFieldChoice>} - A choice object.
     */
    async getCustomFieldChoice(customFieldID, choiceID, options = {}) {
        return await this.rest.get(`/v1/custom_fields/${customFieldID}/choices/${choiceID}`, options?.access_token);
    }

    /**
     * @description This function is used to get a single choice for a dropdown custom field by name.
     * @param {string} customFieldID - The ID of the custom field to get the choice for.
     * @param {string} title - The title of the choice to get.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFieldChoice>} - A choice object.
     */
    async createCustomFieldChoice(customFieldID, title, options = {}) {
        return await this.rest.post(`/v1/custom_fields/${customFieldID}/choices`, {
            title
        }, options?.access_token);
    }

    /**
     * @description This function is used to update a choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to update the choice for.
     * @param {string} choiceID - The ID of the choice to update.
     * @param {string} title - The new title of the choice.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFieldChoice>} - The updated choice object.
     */
    async updateCustomFieldChoice(customFieldID, choiceID, title, options = {}) {
        return await this.rest.put(`/v1/custom_fields/${customFieldID}/choices/${choiceID}`, {
            title
        }, options?.access_token);
    }

    /**
     * @description This function is used to delete a choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to delete the choice for.
     * @param {string} choiceID - The ID of the choice to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    async deleteCustomFieldChoice(customFieldID, choiceID, options = {}) {
        return await this.rest.delete(`/v1/custom_fields/${customFieldID}/choices/${choiceID}`, {}, options?.access_token);
    }

}

module.exports = { CustomFieldsAPI };