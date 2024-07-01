/**
 * @fileoverview This file contains functions for interacting with Custom Fields in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Custom Fields in TidyHQ.
 * @class
 */
class CustomFieldsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {CustomFieldsAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of custom fields from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - An array of custom field objects.
     */
    async getCustomFields(options = {}) {
        let customFields = [];
        await this.rest.get(`/v1/custom_fields`, options.access_token).then((response) => {
            customFields = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFields: ${error}\n${error.response.data}`);
        });
        return customFields;
    }

    /**
     * @description This function is used to get a single custom field from TidyHQ.
     * @param {string} customFieldID - The ID of the CustomField to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - A CustomField object.
     **/
    async getCustomField(customFieldID, options = {}) {
        let customField = {};
        await this.rest.get(`/v1/custom_fields/${customFieldID}`, options.access_token).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomField: ${error}\n${error.response.data}`);
        });
        return customField;
    }

    /**
     * @description This function is used to get a single custom field from TidyHQ.
     * @param {string} name - The name of the custom field to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - A CustomField object.
     */
    async getCustomFieldByName(name, options = {}) {
        let fields = await this.getCustomFields(options);
        let field = fields.find((field) => field.title == name);
        // check if field exists
        if (field == undefined) throw new Error(`CustomFields.getCustomFieldByName: Custom field with name ${name} does not exist.`);
        return field;
    }

    /**
     * @description Helper function to determine if a custom field type is valid.
     * @param {string} type - The type to check.
     * @returns {boolean} - Whether the type is valid or not.
     * @private
     */
    #_isValidType(type) {
        return ["string", "text", "dropdown", "boolean", "date"].includes(type);
    }

    /**
     * @description This function is used to create a new custom field in TidyHQ.
     * @param {string} name - The name of the custom field to create.
     * @param {"string" | "text" | "dropdown" | "boolean" | "date"} type - The type of the custom field to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The newly created custom field object.
     */
    async createCustomField(name, type, options = {}) {
        if (!this.#_isValidType(type)) throw new Error(`CustomFields.createCustomField: Invalid type ${type}.`);
        let customField = {};
        await this.rest.post(`/v1/custom_fields`, {
            title: name,
            type: type
        }, options.access_token).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.createCustomField: ${error}\n${error.response.data}`);
        });
        return customField;
    }

    /**
     * @description This function is used to update a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to update.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use. - The options to update the custom field with. At least one option is required.
     * @param {string} [options.name] - The new name of the custom field.
     * @param {"string" | "text" | "dropdown" | "boolean" | "date"} [options.type] - The new type of the custom field.
     * @returns {object} - The updated custom field object.
     */
    async updateCustomField(customFieldID, options) {
        if (options.type != undefined) {
            if (!this.#_isValidType(options.type)) throw new Error(`CustomFields.updateCustomField: Invalid type ${options.type}.`);
        }
        if (options.name != undefined) {
            options.title = options.name
            delete options.name
        }
        let optionalParametersString = makeURLParameters(["title", "type"], options)
        if (optionalParametersString == "") throw new Error("CustomFields.updateCustomField: No valid options provided.");

        let customField = {};
        await this.rest.put(`/v1/custom_fields/${customFieldID}${optionalParametersString}`, {}, options.access_token).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.updateCustomField: ${error}\n${error.response.data}`);
        });
        return customField;
    }

    /**
     * @description This function is used to delete a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Whether the custom field was deleted successfully.
     */
    async deleteCustomField(customFieldID, options = {}) {
        let success = false;
        await this.rest.delete(`/v1/custom_fields/${customFieldID}`, options.access_token).then((response) => {
            success = true;
        }).catch((error) => {
            if (error.response.status == 404) {
                throw new Error(`CustomFields.deleteCustomField: Custom field with ID ${customFieldID} does not exist.`);
            } else {
                throw new Error(`CustomFields.deleteCustomField: ${error}\n${error.response.data}`);
            }
        });
        return success;
    }

    /**
     * @description This function is used to get the choices for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to get the choices for.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object[]} - An array of choice objects.
     */
    async getCustomFieldChoices(customFieldID, options = {}) {
        let choices = [];
        await this.rest.get(`/v1/custom_fields/${customFieldID}/choices`, options.access_token).then((response) => {
            choices = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFieldChoice: ${error}\n${error.response.data}`);
        });
        return choices;
    }

    /**
     * @description This function is used to get a single choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to get the choice for.
     * @param {string} choiceID - The ID of the choice to get.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - A choice object.
     */
    async getCustomFieldChoice(customFieldID, choiceID, options = {}) {
        let choice = {};
        await this.rest.get(`/v1/custom_fields/${customFieldID}/choices/${choiceID}`, options.access_token).then((response) => {
            choice = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFieldChoice: ${error}\n${error.response.data}`);
        });
        return choice;
    }

    /**
     * @description This function is used to get a single choice for a dropdown custom field by name.
     * @param {string} customFieldID - The ID of the custom field to get the choice for.
     * @param {string} name - The name of the choice to get.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - A choice object.
     */
    async createCustomFieldChoice(customFieldID, name, options = {}) {
        let option = {};
        await this.rest.post(`/v1/custom_fields/${customFieldID}/choices`, {
            title: name
        }, options.access_token).then((response) => {
            option = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.createCustomFieldChoice: ${error}\n${error.response.data}`);
        });
        return option;
    }

    /**
     * @description This function is used to update a choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to update the choice for.
     * @param {string} choiceID - The ID of the choice to update.
     * @param {string} name - The new name of the choice.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The updated choice object.
     */
    async updateCustomFieldChoice(customFieldID, choiceID, name, options = {}) {
        let option = {};
        await this.rest.put(`/v1/custom_fields/${customFieldID}/choices/${choiceID}&title=${name}`, {}, options.access_token).then((response) => {
            option = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.updateCustomFieldChoice: ${error}\n${error.response.data}`);
        });
        return option;
    }

    /**
     * @description This function is used to delete a choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to delete the choice for.
     * @param {string} choiceID - The ID of the choice to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Whether the choice was deleted successfully.
     */
    async deleteCustomFieldChoice(customFieldID, choiceID, options = {}) {
        let success = false;
        await this.rest.delete(`/v1/custom_fields/${customFieldID}/choices/${choiceID}`, options.access_token).then((response) => {
            success = true;
        }).catch((error) => {
            if (error.response.status == 404) {
                throw new Error(`CustomFields.deleteCustomFieldChoice: Choice with ID ${choiceID} does not exist.`);
            } else {
                throw new Error(`CustomFields.deleteCustomFieldChoice: ${error}\n${error.response.data}`);
            }
        });
        return success;
    }

}

module.exports = { CustomFieldsAPI };