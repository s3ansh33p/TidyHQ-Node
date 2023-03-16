/**
 * @fileoverview This file contains the main class for the TidyHQ API.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const { ContactsAPI } = require("./src/Contacts");
const { CustomFieldsAPI } = require("./src/CustomFields");
const { GroupsAPI } = require("./src/Groups");

class TidyHQ {
    constructor(clientID, clientSecret, redirectURI, accessToken) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.redirectURI = redirectURI;
        this.accessToken = accessToken;

        this.Contacts = new ContactsAPI(accessToken);
        this.CustomFields = new CustomFieldsAPI(accessToken);
        this.Groups = new GroupsAPI(accessToken, this.Contacts);
    }

}

module.exports = TidyHQ;