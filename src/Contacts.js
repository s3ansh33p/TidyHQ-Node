/**
 * @fileoverview This file contains functions for interacting with Contacts in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

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
     * @description Helper function to get a list of contacts from TidyHQ.
     * @param {object} path - The path for the request.
     * @param {object} [options] - The options to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {boolean} [options.show_all] - Whether to show all contacts or not.
     * @param {date} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {number[]} [options.ids] - An array of contact IDs to get.
     * @param {string[]} [options.fields] - An array of fields to get.
     * @param {string[]} [options.filter] - An array of filters to use.
     * @returns {object[]} - An array of contact objects.
     * @private
     */
    async #_getContacts(path, options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "search_terms", "show_all", "updated_since", "ids[]", "fields[]", "filter[[]]"], options)

        let contacts = [];
        await this.axios.get(`/v1/${path}${optionalParametersString}`).then((response) => {
            contacts = response.data;
        }).catch((error) => {
            throw new Error(`Contacts.getContacts: ${error}\n${error.response.data}`);
        });
        return contacts;
    }

    /**
     * @description This function is used to get a list of contacts from TidyHQ.
     * @param {object} [options] - The options to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {boolean} [options.show_all] - Whether to show all contacts or not.
     * @param {date} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {number[]} [options.ids] - An array of contact IDs to get.
     * @param {string[]} [options.fields] - An array of fields to get.
     * @param {string[]} [options.filter] - An array of filters to use.
     * @returns {object[]} - An array of contact objects.
     */
    async getContacts(options = {}) {
        return this.#_getContacts("contacts", options);
    }

    /**
     * @description This function is used to get a list of contacts in a group from TidyHQ.
     * @param {string} group_id - The ID of the group to get contacts from.
     * @param {object} [options] - The options to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @param {boolean} [options.show_all] - Whether to show all contacts or not.
     * @param {date} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @param {number[]} [options.ids] - An array of contact IDs to get.
     * @param {string[]} [options.fields] - An array of fields to get.
     * @param {string[]} [options.filter] - An array of filters to use.
     * @returns {object[]} - An array of contact objects.
     */
    async getContactsInGroup(group_id, options = {}) {
        return this.#_getContacts(`groups/${group_id}/contacts`, options);
    }

    /**
     * @description This function is used to get a single contact from TidyHQ.
     * @param {number} [contactID=0] - The ID of the contact to get (0 / default returns the contact of the user who authorized the application)
     * @returns {object} - A contact object.
     **/
    async getContact(contactID = 0) {
        if (contactID == 0) contactID = "me";

        let contact = {};
        await this.axios.get(`/v1/contacts/${contactID}`).then((response) => {
            contact = response.data;
        }).catch((error) => {
            throw new Error(`Contacts.getContact: ${error}\n${error.response.data}`);
        });
        return contact;
    }
}

module.exports = { ContactsAPI };