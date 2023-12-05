/**
 * @fileoverview This file contains functions for interacting with Emails in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.1.0
 * @license GPL-3.0
 */


/**
 * @description This class is used to interact with Emails in TidyHQ.
 * @class
 */
class EmailsAPI {

    /**
     * @description This function is used to create a new instance of the EmailsAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the EmailsAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get the emails associated with the access token.
     * @param {string} email_id - The ID of the event.
     * @returns {object} - The emails.
     */
    async #_getEmails(email_id = "") {
        let emails = [];
        await this.axios.get(`/v1/emails/${email_id}`).then((response) => {
            emails = response.data;
        }).catch((error) => {
            throw new Error(`Emails.getEmails: ${error}\n${error.response.data}`);
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
        await this.axios.post(`/v1/emails`, email).then((response) => {
            newEmail = response.data;
        }).catch((error) => {
            throw new Error(`Emails.createEmail: ${error}\n${error.response.data}`);
        });
        return newEmail;
    }

}

module.exports = { EmailsAPI };