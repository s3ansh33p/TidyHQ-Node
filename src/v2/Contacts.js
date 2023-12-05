/**
 * @fileoverview This file contains functions for interacting with Contacts in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 2.0.0
 * @license GPL-3.0
 */

const axios = require("axios");

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
    constructor(access_token, host) {
        this.access_token = access_token;
        this.host = host;
    }

    /**
     * @description This function is used to get a single contact from TidyHQ.
     * @param {number} contactID [me] - The ID of the contact to get (me / default returns the contact of the user who authorized the application)
     * @returns {object} - A contact object.
     **/
    async getContact(contactID="me") {
        let contact = {};
        await axios.get(`https://${this.host}/v2/contacts/${contactID}?access_token=${this.access_token}`).then((response) => {
            contact = response.data;
        }).catch((error) => {
            console.log(error.response.data);
            throw new Error(`V2.Contacts.getContact: ${error}`);
        });
        return contact;
    }

    /**
     * @description Creates a note for a given user
     * @returns {boolean} - Success or failure.
     */
    async createContactNote(contact_id, note) {
        let success = false;
        await axios.post(`https://${this.host}/v2/contacts/${contact_id}/notes?access_token=${this.access_token}`, {
            text: note
        }).then((response) => {
            success = true;
        }).catch((error) => {
            console.log(error.response.data);
            throw new Error(`V2.Contacts.createContactNote: ${error}`);
        });
        return success;
    }
}

module.exports = { ContactsAPI };