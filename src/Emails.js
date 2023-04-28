/**
 * @fileoverview This file contains functions for interacting with Emails in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");

/**
 * @description This class is used to interact with Emails in TidyHQ.
 * @class
 */
class EmailsAPI {

    /**
     * @description This function is used to create a new instance of the EmailsAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the EmailsAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get the emails associated with the access token.
     * @param {string} email_id - The ID of the event.
     * @returns {object} - The emails.
     */
    async #_getEmails(email_id = "") {
        let emails = [];
        await axios.get(`https://api.tidyhq.com/v1/emails/${email_id}?access_token=${this.access_token}`).then((response) => {
            emails = response.data;
        }).catch((error) => {
            throw new Error(`Emails.getEmails: ${error}`);
        });
        return emails;
    }

    /**
     * @description This function is used to get the emails associated with the access token.
     * @returns {object} - The emails.
     */
    async getEmails() {
        return await this.#_getEmails();
    }

    /**
     * @description This function is used to get a specific email associated with the access token.
     * @param {string} email_id - The ID of the email.
     * @returns {object} - The email.
     */
    async getEmail(email_id) {
        return await this.#_getEmails(email_id);
    }

    /**
     * @description This function is used to create a new email.
     * @param {object} email - The email to create.
     * @param {string} email.subject - The subject of the email.
     * @param {string} email.body - The body of the email.
     * @param {array} email.contacts - The contacts to send the email to.
     * @returns {object} - The email.
     */
    async createEmail(email) {
        let newEmail = [];
        await axios.post(`https://api.tidyhq.com/v1/emails?access_token=${this.access_token}`, email).then((response) => {
            newEmail = response.data;
        }).catch((error) => {
            throw new Error(`Emails.createEmail: ${error}`);
        });
        return newEmail;
    }

}

module.exports = { EmailsAPI };