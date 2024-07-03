/**
 * @fileoverview This file contains functions for interacting with Emails in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");

/**
 * @description This class is used to interact with Emails in TidyHQ.
 * @class
 */
class EmailsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
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
     * @returns {Promise<TidyAPI_Response>} - The emails.
     */
    async #_getEmails(email_id, options) {
        return await this.rest.get(`/v1/emails/${email_id}`, options?.access_token);
    }

    /**
     * @description This function is used to get the emails associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Emails>} - The emails.
     */
    async getEmails(options = {}) {
        return await this.#_getEmails("", options);
    }

    /**
     * @description This function is used to get a specific email associated with the access token.
     * @param {string} email_id - The ID of the email.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Email>} - The email.
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
     * @returns {Promise<TidyAPI_V1_Email>} - The email.
     */
    async createEmail(email, options = {}) {
        return await this.rest.post(`/v1/emails`, email, options?.access_token);
    }

}

module.exports = { EmailsAPI };