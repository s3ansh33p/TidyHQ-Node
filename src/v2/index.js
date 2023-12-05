/**
 * @fileoverview This file contains the main class for the TidyHQ V2 API.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 2.1.0
 * @license GPL-3.0
 */

const { ContactsAPI } = require("./Contacts.js");
const { OrganizationAPI } = require("./Organization.js");
const { WebhooksAPI } = require("./Webhooks");

/**
 * @description This class is used to interact with the TidyHQ V2 API.
 * @link https://tidyhq.readme.io/reference
 */
class V2 {
    constructor(axios) {
        this.axios = axios;

        this.Contacts = new ContactsAPI(this.axios);
        this.Organization = new OrganizationAPI(this.axios);
        this.Webhooks = new WebhooksAPI(this.axios);
    }

}

module.exports = { V2 };