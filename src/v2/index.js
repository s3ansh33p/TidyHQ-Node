/**
 * @fileoverview This file contains the main class for the TidyHQ V2 API.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 2.0.0
 * @license GPL-3.0
 */

const { OrganizationAPI } = require("./Organization.js");
const { WebhooksAPI } = require("./Webhooks");

class V2 {
    constructor(accessToken) {
        this.accessToken = accessToken;

        this.Organization = new OrganizationAPI(accessToken);
        this.Webhooks = new WebhooksAPI(accessToken);
    }

}

module.exports = { V2 };