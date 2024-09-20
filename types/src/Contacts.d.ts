/**
 * @description This class is used to interact with Contacts in TidyHQ.
 * @class
 */
export class ContactsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of contacts from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {boolean} [options.show_all] - Whether to show all contacts or not.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {number[]} [options.ids] - An array of contact IDs to get.
     * @param {string[]} [options.fields] - An array of fields to get.
     * @param {string[]} [options.filter] - An array of filters to use.
     * @returns {Promise<TidyAPI_V1_Contacts>} - An array of contacts.
     */
    getContacts(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        search_terms?: string | undefined;
        show_all?: boolean | undefined;
        updated_since?: string | undefined;
        ids?: number[] | undefined;
        fields?: string[] | undefined;
        filter?: string[] | undefined;
    } | undefined): Promise<TidyAPI_V1_Contacts>;
    /**
     * @description Get a list of contacts in a group from TidyHQ.
     * @param {string} group_id - The ID of the group to get contacts from.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {boolean} [options.show_all] - Whether to show all contacts or not.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {number[]} [options.ids] - An array of contact IDs to get.
     * @param {string[]} [options.fields] - An array of fields to get.
     * @param {string[]} [options.filter] - An array of filters to use.
     * @returns {Promise<TidyAPI_V1_Contacts>} - An array of contacts.
     */
    getContactsInGroup(group_id: string, options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        search_terms?: string | undefined;
        show_all?: boolean | undefined;
        updated_since?: string | undefined;
        ids?: number[] | undefined;
        fields?: string[] | undefined;
        filter?: string[] | undefined;
    } | undefined): Promise<TidyAPI_V1_Contacts>;
    /**
     * @description Get a single contact from TidyHQ.
     * @param {number|string} [contactID = "me"] - The ID of the contact to get ("me" returns the contact of the user who authorized the application)
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Contact>} - A contact.
     **/
    getContact(contactID?: string | number | undefined, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Contact>;
    /**
     * @description Creates a new contact with the given data in TidyHQ.
     * @param {Tidy_V1_ContactParams} contact - The contact to create. Requires a first name.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Contact>} - The newly created contact.
     */
    createContact(contact: Tidy_V1_ContactParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Contact>;
    /**
     * @description Updates a contact with the given data in TidyHQ.
     * @param {number} contact_id - The ID of the contact to update.
     * @param {Tidy_V1_ContactParams} contact - The contact to update.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Contact>} - The updated contact.
     */
    updateContact(contact_id: number, contact: Tidy_V1_ContactParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Contact>;
    /**
     * @description Deletes a contact from TidyHQ.
     * @param {number} contact_id - The ID of the contact to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    deleteContact(contact_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
    #private;
}
import { Rest } from "./utils/Rest.js";
