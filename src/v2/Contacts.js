/**
 * @fileoverview This file contains functions for interacting with Contacts in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.2.0
 * @license GPL-3.0
 */

const { Rest } = require("../utils/Rest.js");
const { makeURLParameters } = require("../utils/Builder.js");

/**
 * @description This class is used to interact with Contacts in TidyHQ.
 * @class
 */
class V2_ContactsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of contacts from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-contacts
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {Date} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {Date} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of contacts per page to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {boolean} [options.registered]  - When given, returns only users with / without a user account attached.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @param {string[]} [options.ids] - When given, filters to those matching the given IDs. Can be combined with scope to specify the type of ID.
     * @param {"contact_id_number" | "sports_australia_connect"} [options.scope] - If specified, applies ids to the specified type. If not given, will default to check the id reference or the id.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {string[]} [options.filter_equals] - An array of filters to use. Supports first_name, last_name, company, email_address, phone_number, kind, contact_id_number
     * @returns {Promise<ApiV2ContactsResponse>} - An array of contact objects.
     */
    async getContacts(options = {}) {
        let optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset", "registered", "all", "ids[]", "scope", "search_terms", "filter_equals[][]"], options)
        return await this.rest.get(`/v2/contacts${optionalParametersString}`, options.access_token);
    }

    /**
     * @todo REFACTOR TYPES AND TEST
     * @description Creates a new contact with the given data in TidyHQ.
     * @link https://tidyhq.readme.io/reference/create-contact
     * @param {V2_Contact} contact - The contact to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<ApiV2ContactResponse>} - The created contact.
     */
    async createContact(contact, options = {}) {
        return await this.rest.post("/v2/contacts", contact, options.access_token);
    }

    /**
     * @description This function is used to get a single contact from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-contact
     * @param {string} [contactID = "me"] - The ID of the contact to get (me / default returns the contact of the user who authorized the application)
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<ApiV2ContactResponse>} - The contact object.
     **/
    async getContact(contactID = "me", options = {}) {
        return await this.rest.get(`/v2/contacts/${contactID}`, options.access_token);
    }

    /**
     * @description Adds a note to a specified contact.
     * @link https://tidyhq.readme.io/reference/create-contact-note
     * @param {string} contact_id - The ID of the contact to create the note for.
     * @param {string} note - The note to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<ApiV2NoteResponse>} - The created note.
     */
    async createContactNote(contact_id, note, options = {}) {
        return await this.rest.post(`/v2/contacts/${contact_id}/notes`, {
            text: note
        }, options.access_token);
    }

    /**
     * @description Deletes a specified note from a specified contact.
     * @link https://tidyhq.readme.io/reference/delete-contact-note
     * @param {string} contact_id - The ID of the contact to delete the note from.
     * @param {string} note_id - The ID of the note to delete.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<ApiEmptyResponse>} - An empty response. 
     */
    async deleteContactNote(contact_id, note_id, options = {}) {
        return await this.rest.delete(`/v2/contacts/${contact_id}/notes/${note_id}`, {}, options.access_token);
    }

    /**
     * @description This function is used to update a contact in TidyHQ.
     * @link https://tidyhq.readme.io/reference/update-contact
     * @param {string} contact_id - The ID of the contact to update.
     * @param {V2_Contact} contact - The new contact data.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<ApiV2ContactResponse>} - The updated contact.
     */
    async updateContact(contact_id, contact, options = {}) {
        return await this.rest.patch(`/v2/contacts/${contact_id}`, contact, options.access_token);
    }

    /**
     * @description Gets all memberships for a given single contact.
     * @link https://tidyhq.readme.io/reference/get-contact-memberships
     * @param {string} contact_id - The ID of the contact to find memberships for.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {Date} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {Date} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of contacts per page to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @returns {Promise<ApiV2MembershipsResponse>} - An array of memberships.
     */
    async getContactMemberships(contact_id, options = {}) {
        const optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset"], options)
        return await this.rest.get(`/v2/contacts/${contact_id}/memberships${optionalParametersString}`, options.access_token);
    }

}

module.exports = { V2_ContactsAPI };