/**
 * @fileoverview This file contains functions for interacting with Custom Fields in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Custom Fields in TidyHQ.
 * @class
 */
class CustomFieldsAPI {

    /**
     * @description This function is used to create a new instance of the CustomFieldsAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the CustomFieldsAPI class.
     * @constructor
     */
    constructor(access_token, host) {
        this.access_token = access_token;
        this.host = host;
    }

    /**
     * @description This function is used to get a list of custom fields from TidyHQ.
     * @returns {object} - An array of custom field objects.
     */
    async getCustomFields() {
        let customFields = [];
        await axios.get(`https://${this.host}/v1/custom_fields?access_token=${this.access_token}`).then((response) => {
            customFields = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFields: ${error}`);
        });
        return customFields;
    }

    /**
     * @description This function is used to get a single custom field from TidyHQ.
     * @param {string} CustomFieldID [0] - The ID of the CustomField to get
     * @returns {object} - A CustomField object.
     **/
    async getCustomField(CustomFieldID) {
        let customField = {};
        await axios.get(`https://${this.host}/v1/custom_fields/${CustomFieldID}?access_token=${this.access_token}`).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomField: ${error}`);
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
     * @description This function is used to create a new custom field in TidyHQ.
     * @param {string} name - The name of the custom field to create.
     * @param {"string" | "text" | "dropdown" | "boolean" | "date"} type - The type of the custom field to create.
     * @returns {object} - The newly created custom field object.
     */
    async createCustomField(name, type) {
        if (!["string", "text", "dropdown", "boolean", "date"].includes(type)) throw new Error(`CustomFields.createCustomField: Invalid type ${type}.`);
        let customField = {};
        await axios.post(`https://${this.host}/v1/custom_fields?access_token=${this.access_token}`, {
            title: name,
            type: type
        }).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.createCustomField: ${error}`);
        });
        return customField;
    }

    /**
     * @description This function is used to update a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to update.
     * @param {object} options - The options to update the custom field with.
     * @param {string} options.name - The new name of the custom field.
     * @param {"string" | "text" | "dropdown" | "boolean" | "date"} options.type - The new type of the custom field.
     * @returns {object} - The updated custom field object.
     */
    async updateCustomField(customFieldID, options) {
        if (options.type != undefined) {
            if (!["string", "text", "dropdown", "boolean", "date"].includes(options.type)) throw new Error(`CustomFields.updateCustomField: Invalid type ${options.type}.`);
        }
        if (options.name != undefined) {
            options.title = options.name
            delete options.name
        }
        let optionalParametersString = makeURLParameters(["title", "type"], options)
        if (optionalParametersString == "") throw new Error("CustomFields.updateCustomField: No valid options provided.");

        let customField = {};
        await axios.put(`https://${this.host}/v1/custom_fields/${customFieldID}?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            customField = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.updateCustomField: ${error}`);
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
        await axios.delete(`https://${this.host}/v1/custom_fields/${customFieldID}?access_token=${this.access_token}`).then((response) => {
            success = true;
        }).catch((error) => {
            if (error.response.status == 404) {
                throw new Error(`CustomFields.deleteCustomField: Custom field with ID ${customFieldID} does not exist.`);
            } else {
                throw new Error(`CustomFields.deleteCustomField: ${error}`);
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
        await axios.get(`https://${this.host}/v1/custom_fields/${customFieldID}/choices?access_token=${this.access_token}`).then((response) => {
            options = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFieldDropdownOptions: ${error}`);
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
        await axios.get(`https://${this.host}/v1/custom_fields/${customFieldID}/choices/${choiceID}?access_token=${this.access_token}`).then((response) => {
            option = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.getCustomFieldDropdownOption: ${error}`);
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
        await axios.post(`https://${this.host}/v1/custom_fields/${customFieldID}/choices?access_token=${this.access_token}`, {
            title: name
        }).then((response) => {
            option = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.createCustomFieldChoice: ${error}`);
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
        await axios.put(`https://${this.host}/v1/custom_fields/${customFieldID}/choices/${choiceID}?access_token=${this.access_token}&title=${name}`).then((response) => {
            option = response.data;
        }).catch((error) => {
            throw new Error(`CustomFields.updateCustomFieldChoice: ${error}`);
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
        await axios.delete(`https://${this.host}/v1/custom_fields/${customFieldID}/choices/${choiceID}?access_token=${this.access_token}`).then((response) => {
            success = true;
        }).catch((error) => {
            if (error.response.status == 404) {
                throw new Error(`CustomFields.deleteCustomFieldChoice: Choice with ID ${choiceID} does not exist.`);
            } else {
                throw new Error(`CustomFields.deleteCustomFieldChoice: ${error}`);
            }
        });
        return success;
    }

}

module.exports = { CustomFieldsAPI };