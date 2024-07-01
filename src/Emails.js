/**
 * @fileoverview This file contains functions for interacting with Emails in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */


/**
 * @description This class is used to interact with Emails in TidyHQ.
 * @class
 */
class EmailsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {EmailsAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get the emails associated with the access token.
     * @param {string} email_id - The ID of the email.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The emails.
     */
    async #_getEmails(email_id, options) {
        let emails = [];
        await this.rest.get(`/v1/emails/${email_id}`, options.access_token).then((response) => {
            emails = response.data;
        }).catch((error) => {
            throw new Error(`Emails.getEmails: ${error}\n${error.response.data}`);
        });
        return emails;
    }

    /**
     * @description This function is used to get the emails associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The emails.
     */
    async getEmails(options = {}) {
        return await this.#_getEmails("", options);
    }

    /**
     * @description This function is used to get a specific email associated with the access token.
     * @param {string} email_id - The ID of the email.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The email.
     */
    async getEmail(email_id, options = {}) {
        return await this.#_getEmails(email_id, options);
    }

    /**
     * @description This function is used to create a new email.
     * @param {object} email - The email to create.
     * @param {string} email.subject - The subject of the email.
     * @param {string} email.body - The body of the email.
     * @param {array} email.contacts - The contacts to send the email to.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The email.
     */
    async createEmail(email, options = {}) {
        let newEmail = [];
        await this.rest.post(`/v1/emails`, email, options.access_token).then((response) => {
            newEmail = response.data;
        }).catch((error) => {
            throw new Error(`Emails.createEmail: ${error}\n${error.response.data}`);
        });
        return newEmail;
    }

}

module.exports = { EmailsAPI };