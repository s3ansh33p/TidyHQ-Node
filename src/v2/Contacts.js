/**
 * @fileoverview This file contains functions for interacting with Contacts in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 2.1.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("../utils/Builder.js");

/**
 * @description This class is used to interact with Contacts in TidyHQ.
 * @class
 */
class ContactsAPI {

    /**
     * @description This function is used to create a new instance of the ContactsAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the ContactsAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get a list of contacts from TidyHQ.
     * @link https://tidyhq.readme.io/reference/get-contacts
     * @param {object} [options = {}] - The options to use.
     * @param {Date} [options.updated_before] - ISO8601 formatted timestamp, only returns results last updated before the given time.
     * @param {Date} [options.updated_since] - ISO8601 formatted timestamp, only returns results last updated since the given time.
     * @param {number} [options.limit] - The maximum number of contacts per pageto return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {boolean} [options.registered]  - When given, returns only users with / without a user account attached.
     * @param {boolean} [options.all] - When given, returns all (including inactive) - defaults to only returning visible / active.
     * @param {string[]} [options.ids] - When given, filters to those matching the given IDs. Can be combined with scope to specify the type of ID.
     * @param {"contact_id_number" | "sports_australia_connect"} [options.scope] - If specified, applies ids to the specified type. If not given, will default to check the id reference or the id.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {string[]} [options.filter_equals] - An array of filters to use. Supports first_name, last_name, company, email_address, phone_number, kind, contact_id_number
     * @returns {object[]} - An array of contact objects.
     * @private
     */
    async getContacts(options = {}) {
        let optionalParametersString = makeURLParameters(["updated_before", "updated_since", "limit", "offset", "registered", "all", "ids[]", "scope", "search_terms", "filter_equals[][]"], options)
        let contacts = [];
        await this.axios.get(`/v2/contacts${optionalParametersString}`).then((response) => {
            contacts = response.data;
        }).catch((error) => {
            console.log(error);
            throw new Error(`V2.Contacts.getContacts: ${error}\n${error.response.data}`);
        });
        return contacts;
    }

    /**
     * @description This function is used to get a single contact from TidyHQ.
     * @param {string} [contactID="me"] - The ID of the contact to get (me / default returns the contact of the user who authorized the application)
     * @returns {object} - A contact object.
     **/
    async getContact(contactID = "me") {
        let contact = {};
        await this.axios.get(`/v2/contacts/${contactID}`).then((response) => {
            contact = response.data;
        }).catch((error) => {
            throw new Error(`V2.Contacts.getContact: ${error}\n${error.response.data}`);
        });
        return contact;
    }

    /**
     * @description Creates a note for a given user
     * @param {string} contact_id - The ID of the contact to create the note for
     * @param {string} note - The note to create
     * @returns {boolean} - Success or failure.
     */
    async createContactNote(contact_id, note) {
        let success = false;
        await this.axios.post(`/v2/contacts/${contact_id}/notes`, {
            text: note
        }).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`V2.Contacts.createContactNote: ${error}\n${error.response.data}`);
        });
        return success;
    }
}

module.exports = { ContactsAPI };