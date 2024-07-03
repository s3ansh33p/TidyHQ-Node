/**
 * @fileoverview This file contains functions for interacting with Contacts in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Contacts in TidyHQ.
 * @class
 */
class ContactsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description Helper function to get a list of contacts from TidyHQ.
     * @param {object} path - The path for the request
     * @param {object} [options]
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
    async #_getContacts(path, options) {
        const optionalParametersString = makeURLParameters(["limit", "offset", "search_terms", "show_all", "updated_since", "ids[]", "fields[]", "filter[[]]"], options)
        return await this.rest.get(`/v1/${path}${optionalParametersString}`, options?.access_token);
    }

    /**
     * @description This function is used to get a list of contacts from TidyHQ.
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
    async getContacts(options = {}) {
        return this.#_getContacts("contacts", options);
    }

    /**
     * @description This function is used to get a list of contacts in a group from TidyHQ.
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
    async getContactsInGroup(group_id, options = {}) {
        return this.#_getContacts(`groups/${group_id}/contacts`, options);
    }

    /**
     * @description This function is used to get a single contact from TidyHQ.
     * @param {number|string} [contactID = "me"] - The ID of the contact to get ("me" returns the contact of the user who authorized the application)
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Contact>} - A contact.
     **/
    async getContact(contactID = "me", options = {}) {
        return await this.rest.get(`/v1/contacts/${contactID}`, options?.access_token);
    }

    /**
     * @description Creates a new contact with the given data in TidyHQ.
     * @param {Tidy_V1_ContactParams} contact - The contact to create. Requires a first name.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Contact>} - The newly created contact.
     */
    async createContact(contact, options = {}) {
        if (!contact.first_name) {
            throw new Error("First name is required to create a contact.");
        }
        return await this.rest.post("/v1/contacts", contact, options?.access_token);
    }

    /**
     * @description Updates a contact with the given data in TidyHQ.
     * @param {number} contact_id - The ID of the contact to update.
     * @param {Tidy_V1_ContactParams} contact - The contact to update.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Contact>} - The updated contact.
     */
    async updateContact(contact_id, contact, options = {}) {
        if (Object.keys(contact).length === 0) {
            throw new Error("At least one key must be set to update a contact.");
        }
        return await this.rest.put(`/v1/contacts/${contact_id}`, contact, options?.access_token);
    }

    /**
     * @description Deletes a contact from TidyHQ.
     * @param {number} contact_id - The ID of the contact to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    async deleteContact(contact_id, options = {}) {
        return await this.rest.delete(`/v1/contacts/${contact_id}`, {}, options?.access_token);
    }
}

module.exports = { ContactsAPI };