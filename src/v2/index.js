/**
 * @fileoverview This file contains the main class for the TidyHQ V2 API.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 2.0.0
 * @license GPL-3.0
 */

const { ContactsAPI } = require("./Contacts.js");
const { OrganizationAPI } = require("./Organization.js");
const { WebhooksAPI } = require("./Webhooks");

class V2 {
    constructor(accessToken, host) {
        this.accessToken = accessToken;
        this.host = host;

        this.Contacts = new ContactsAPI(accessToken, host);
        this.Organization = new OrganizationAPI(accessToken, host);
        this.Webhooks = new WebhooksAPI(accessToken, host);
    }

}

module.exports = { V2 };