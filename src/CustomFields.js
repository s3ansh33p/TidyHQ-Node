/**
 * @fileoverview This file contains functions for interacting with Custom Fields in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
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
     * @description This function is used to create a new instance of the CustomFieldsAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the CustomFieldsAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get a list of custom fields from TidyHQ.
     * @returns {object} - An array of custom field objects.
     */
    async getCustomFields() {
        let customFields = [];
        await this.axios.get(`/v1/custom_fields`).then((response) => {
            customFields = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFields: ${error}\n${error.response.data}`);
        });
        return customFields;
    }

    /**
     * @description This function is used to get a single custom field from TidyHQ.
     * @param {string} customFieldID - The ID of the CustomField to get
     * @returns {object} - A CustomField object.
     **/
    async getCustomField(customFieldID) {
        let customField = {};
        await this.axios.get(`/v1/custom_fields/${customFieldID}`).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomField: ${error}\n${error.response.data}`);
        });
        return customField;
    }

    /**
     * @description This function is used to get a single custom field from TidyHQ.
     * @param {string} name - The name of the custom field to get
     * @returns {object} - A CustomField object.
     */
    async getCustomFieldByName(name) {
        let fields = await this.getCustomFields();
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
     * @returns {object} - The newly created custom field object.
     */
    async createCustomField(name, type) {
        if (!this.#_isValidType(type)) throw new Error(`CustomFields.createCustomField: Invalid type ${type}.`);
        let customField = {};
        await this.axios.post(`/v1/custom_fields`, {
            title: name,
            type: type
        }).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.createCustomField: ${error}\n${error.response.data}`);
        });
        return customField;
    }

    /**
     * @description This function is used to update a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to update.
     * @param {object} [options] - The options to update the custom field with. At least one option is required.
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
        await this.axios.put(`/v1/custom_fields/${customFieldID}${optionalParametersString}`).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.updateCustomField: ${error}\n${error.response.data}`);
        });
        return customField;
    }

    /**
     * @description This function is used to delete a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to delete.
     * @returns {boolean} - Whether the custom field was deleted successfully.
     */
    async deleteCustomField(customFieldID) {
        let success = false;
        await this.axios.delete(`/v1/custom_fields/${customFieldID}`).then((response) => {
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
     * @returns {object[]} - An array of choice objects.
     */
    async getCustomFieldChoices(customFieldID) {
        let options = [];
        await this.axios.get(`/v1/custom_fields/${customFieldID}/choices`).then((response) => {
            options = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFieldDropdownOptions: ${error}\n${error.response.data}`);
        });
        return options;
    }

    /**
     * @description This function is used to get a single choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to get the choice for.
     * @param {string} choiceID - The ID of the choice to get.
     * @returns {object} - A choice object.
     */
    async getCustomFieldChoice(customFieldID, choiceID) {
        let option = {};
        await this.axios.get(`/v1/custom_fields/${customFieldID}/choices/${choiceID}`).then((response) => {
            option = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFieldDropdownOption: ${error}\n${error.response.data}`);
        });
        return option;
    }

    /**
     * @description This function is used to get a single choice for a dropdown custom field by name.
     * @param {string} customFieldID - The ID of the custom field to get the choice for.
     * @param {string} name - The name of the choice to get.
     * @returns {object} - A choice object.
     */
    async createCustomFieldChoice(customFieldID, name) {
        let option = {};
        await this.axios.post(`/v1/custom_fields/${customFieldID}/choices`, {
            title: name
        }).then((response) => {
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
     * @returns {object} - The updated choice object.
     */
    async updateCustomFieldChoice(customFieldID, choiceID, name) {

        let option = {};
        await this.axios.put(`/v1/custom_fields/${customFieldID}/choices/${choiceID}&title=${name}`).then((response) => {
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
     * @returns {boolean} - Whether the choice was deleted successfully.
     */
    async deleteCustomFieldChoice(customFieldID, choiceID) {
        let success = false;
        await this.axios.delete(`/v1/custom_fields/${customFieldID}/choices/${choiceID}`).then((response) => {
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