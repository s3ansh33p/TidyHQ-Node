/**
 * @description This class is used to interact with Custom Fields in TidyHQ.
 * @class
 */
export class CustomFieldsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of custom fields from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFields>} - An array of custom fields.
     */
    getCustomFields(options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_CustomFields>;
    /**
     * @description Get a single custom field from TidyHQ.
     * @param {string} customFieldID - The ID of the CustomField to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomField>} - The custom field.
     **/
    getCustomField(customFieldID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_CustomField>;
    /**
     * @description Create a new custom field in TidyHQ.
     * @param {string} title - The title of the custom field to create.
     * @param {Tidy_V1_CustomFieldType} type - The type of the custom field to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomField>} - The newly created custom field.
     */
    createCustomField(title: string, type: Tidy_V1_CustomFieldType, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_CustomField>;
    /**
     * @description Update a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to update.
     * @param {object} [options] - The options to update the custom field with. At least one option is required that isn't the access_token.
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.title] - The new title of the custom field.
     * @param {"string" | "text" | "dropdown" | "boolean" | "date"} [options.type] - The new type of the custom field.
     * @returns {Promise<TidyAPI_V1_CustomField>} - The updated custom field.
     */
    updateCustomField(customFieldID: string, options?: {
        access_token?: string | undefined;
        title?: string | undefined;
        type?: "string" | "boolean" | "text" | "dropdown" | "date" | undefined;
    } | undefined): Promise<TidyAPI_V1_CustomField>;
    /**
     * @description Delete a custom field in TidyHQ.
     * @param {string} customFieldID - The ID of the custom field to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    deleteCustomField(customFieldID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
    /**
     * @description Get the choices for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to get the choices for.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFieldChoices>} - An array of choice objects.
     */
    getCustomFieldChoices(customFieldID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_CustomFieldChoices>;
    /**
     * @description Get a single choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to get the choice for.
     * @param {string} choiceID - The ID of the choice to get.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFieldChoice>} - A choice object.
     */
    getCustomFieldChoice(customFieldID: string, choiceID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_CustomFieldChoice>;
    /**
     * @description Get a single choice for a dropdown custom field by name.
     * @param {string} customFieldID - The ID of the custom field to get the choice for.
     * @param {string} title - The title of the choice to get.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFieldChoice>} - A choice object.
     */
    createCustomFieldChoice(customFieldID: string, title: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_CustomFieldChoice>;
    /**
     * @description Update a choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to update the choice for.
     * @param {string} choiceID - The ID of the choice to update.
     * @param {string} title - The new title of the choice.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_CustomFieldChoice>} - The updated choice object.
     */
    updateCustomFieldChoice(customFieldID: string, choiceID: string, title: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_CustomFieldChoice>;
    /**
     * @description Delete a choice for a dropdown custom field.
     * @param {string} customFieldID - The ID of the custom field to delete the choice for.
     * @param {string} choiceID - The ID of the choice to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    deleteCustomFieldChoice(customFieldID: string, choiceID: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
    #private;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_CustomFields, TidyAPI_V1_CustomField, TidyAPI_Response, TidyAPI_V1_CustomFieldChoices, TidyAPI_V1_CustomFieldChoice, Tidy_V1_CustomFieldType } from "types.js";
