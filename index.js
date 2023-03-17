/**
 * @fileoverview This file contains the main class for the TidyHQ API.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const { ContactsAPI } = require("./src/Contacts");
const { CustomFieldsAPI } = require("./src/CustomFields");
const { GroupsAPI } = require("./src/Groups");
const { MeetingsAPI } = require("./src/Meetings");
const { MembershipsAPI } = require("./src/Memberships");
const { MembershipLevelsAPI } = require("./src/MembershipLevels");

class TidyHQ {
    constructor(clientID, clientSecret, redirectURI, accessToken) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.redirectURI = redirectURI;
        this.accessToken = accessToken;

        this.Contacts = new ContactsAPI(accessToken);
        this.CustomFields = new CustomFieldsAPI(accessToken);
        this.Groups = new GroupsAPI(accessToken);
        this.Meetings = new MeetingsAPI(accessToken);
        this.Memberships = new MembershipsAPI(accessToken);
        this.MembershipLevels = new MembershipLevelsAPI(accessToken);
    }

}

module.exports = TidyHQ;