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
     * @description Creates a note for a given user
     * @returns {object} - Success message
     */
    async createContactNote(contact_id, note) {
        let response = {};
        await axios.post(`https://${this.host}/v2/contacts/${contact_id}/notes?access_token=${this.access_token}`, {
            text: note
        }).then((response) => {
            response = response.data;
        }).catch((error) => {
            console.log(error.response.data);
            throw new Error(`V2.Contacts.createContactNote: ${error}`);
        });
        return response;
    }
}

module.exports = { ContactsAPI };