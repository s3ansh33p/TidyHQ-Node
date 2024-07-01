/**
 * @fileoverview This file contains the main class for the TidyHQ V2 API.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 2.2.0
 * @license GPL-3.0
 */

const { Rest } = require("../utils/Rest.js");
const { V2_ContactsAPI } = require("./Contacts.js");
const { V2_OrganizationAPI } = require("./Organization.js");
const { V2_WebhooksAPI } = require("./Webhooks");

/**
 * @description This class is used to interact with the TidyHQ V2 API.
 * @link https://tidyhq.readme.io/reference
 */
class V2 {
    /**
     * @param {Rest} Rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(Rest) {
        this.Rest = Rest;

        this.Contacts = new V2_ContactsAPI(this.Rest);
        this.Organization = new V2_OrganizationAPI(this.Rest);
        this.Webhooks = new V2_WebhooksAPI(this.Rest);
    }

}

module.exports = { V2 };