/**
 * @fileoverview This file contains functions for interacting with Contacts in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Contacts in TidyHQ.
 * @class
 */
class ContactsAPI {

    /**
     * @description This function is used to create a new instance of the ContactsAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the ContactsAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of contacts from TidyHQ.
     * @param {object} options - The options to use.
     * @param {number} options.limit - The maximum number of contacts to return.
     * @param {number} options.offset - The number of contacts to skip.
     * @param {string} options.search_terms - The search terms to use.
     * @param {boolean} options.show_all - Whether to show all contacts or not.
     * @param {date} options.updated_since - The timestamp of the last update. Ex: 2021-06-01 00:00:00
     * @param {number[]} options.ids - An array of contact IDs to get.
     * @param {string[]} options.fields - An array of fields to get.
     * @param {string[]} options.filter - An array of filters to use.
     * @returns {object[]} - An array of contact objects.
     */
    async getContacts(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "search_terms", "show_all", "updated_since", "ids[]", "fields[]", "filter[[]]"], options)

        let contacts = [];
        await axios.get(`https://api.tidyhq.com/v1/contacts?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            contacts = response.data;
        }).catch((error) => {
            throw new Error(`Contacts.getContacts: ${error}`);
        });
        return contacts;
    }

    /**
     * @description This function is used to get a single contact from TidyHQ.
     * @param {number} contactID [0] - The ID of the contact to get (0 / default returns the contact of the user who authorized the application)
     * @returns {object} - A contact object.
     **/
    async getContact(contactID=0) {
        if (contactID == 0) contactID = "me";

        let contact = {};
        await axios.get(`https://api.tidyhq.com/v1/contacts/${contactID}?access_token=${this.access_token}`).then((response) => {
            contact = response.data;
        }).catch((error) => {
            throw new Error(`Contacts.getContact: ${error}`);
        });
        return contact;
    }
}

module.exports = { ContactsAPI };