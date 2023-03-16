/**
 * @fileoverview This file contains functions for interacting with Groups in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Groups in TidyHQ.
 * @class
 */
class GroupsAPI {

    /**
     * @description This function is used to create a new instance of the GroupsAPI class.
     * @param {string} access_token - The access token of the application.
     * @param {object} ContactsAPI - The ContactsAPI class.
     * @returns {object} - A new instance of the GroupsAPI class.
     * @constructor
     */
    constructor(access_token, ContactsAPI) {
        this.access_token = access_token;
        this.Contacts = ContactsAPI;
    }

    /**
     * @description This function is used to get a list of groups from TidyHQ.
     * @param {object} options - The options to use.
     * @param {number} options.limit - The maximum number of groups to return.
     * @param {number} options.offset - The number of groups to skip.
     * @param {string} options.search_terms - The search terms to use.
     * @returns {object[]} - An array of group objects.
     */
    async getGroups(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "search_terms"], options)

        let groups = [];
        await axios.get(`https://api.tidyhq.com/v1/groups?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            groups = response.data;
        }).catch((error) => {
            throw new Error(`Groups.getGroups: ${error}`);
        });
        return groups;
    }

    /**
     * @description This function is used to get groups for a contact from TidyHQ.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} options - The options to use.
     * @param {number} options.limit - The maximum number of groups to return.
     * @param {number} options.offset - The number of groups to skip.
     * @param {string} options.search_terms - The search terms to use.
     * @returns {object[]} - An array of group objects.
     */
    async getGroupsForContact(contact_id, options) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "search_terms"], options)

        let groups = [];
        await axios.get(`https://api.tidyhq.com/v1/contacts/${contact_id}/groups?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            groups = response.data;
        }).catch((error) => {
            throw new Error(`Groups.getGroupsForContact: ${error}`);
        });
        return groups;
    }

    /**
     * @description This function is used to get a single group from TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @returns {object} - A group object.
     */
    async getGroup(group_id) {
        let group = {};
        await axios.get(`https://api.tidyhq.com/v1/groups/${group_id}?access_token=${this.access_token}`).then((response) => {
            group = response.data;
        }).catch((error) => {
            throw new Error(`Groups.getGroup: ${error}`);
        });
        return group;
    }

    // get group by name
    /**
     * @description This function is used to get a single group by name from TidyHQ.
     * @param {string} name - The name of the group.
     * @returns {object} - A group object.
     */
    async getGroupByName(name) {
        let groups = await this.getGroups();
        let group = groups.find((group) => group.label == name);
        if (group == undefined) throw new Error(`Groups.getGroupByName: Group with name ${name} not found.`);
        return group;
    }

    /**
     * @description This function is used to create a new group in TidyHQ.
     * @param {object} options - The options to use.
     * @param {string} name - The name of the group.
     * @param {string} description - The description of the group.
     * @returns {object} - The group object.
     */
    async createGroup(name, description="") {
        let options = {
            label: name
        }
        if (description != "") {
            options.description = description;
        }
        let group = {};
        await axios.post(`https://api.tidyhq.com/v1/groups?access_token=${this.access_token}`, options).then((response) => {
            group = response.data;
        }).catch((error) => {
            throw new Error(`Groups.createGroup: ${error}`);
        });
        return group;
    }

    /**
     * @description This function is used to update a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} options - The options to use.
     * @param {string} options.name - The name of the group.
     * @param {string} options.description - The description of the group.
     * @returns {object} - The group object.
     */
    async updateGroup(group_id, options) {
        if (options.name != undefined) {
            options.label = options.name;
            delete options.name;
        }
        let optionalParametersString = makeURLParameters(["label", "description"], options)
        if (optionalParametersString == "") throw new Error("CustomFields.updateCustomField: No valid options provided.");

        let group = {};
        await axios.put(`https://api.tidyhq.com/v1/groups/${group_id}?access_token=${this.access_token}${optionalParametersString}`, options).then((response) => {
            group = response.data;
        }).catch((error) => {
            throw new Error(`Groups.updateGroup: ${error}`);
        });
        return group;
    }

    /**
     * @description This function is used to delete a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @returns {object} - The group object.
     */
    async deleteGroup(group_id) {
        let success = false;
        await axios.delete(`https://api.tidyhq.com/v1/groups/${group_id}?access_token=${this.access_token}`).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`Groups.deleteGroup: ${error}`);
        });
        return success;
    }

    /**
     * @description This function is used to add a contact to a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {number} contact_id - The ID of the contact.
     * @returns {object} - The group object.
     */
    async addContactToGroup(group_id, contact_id) {
        let success = false;
        await axios.put(`https://api.tidyhq.com/v1/groups/${group_id}/contacts/${contact_id}?access_token=${this.access_token}`).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`Groups.addContactToGroup: ${error}`);
        });
        return success;
    }

    /**
     * @description This function is used to remove a contact from a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {number} contact_id - The ID of the contact.
     * @returns {object} - The group object.
     */
    async removeContactFromGroup(group_id, contact_id) {
        let success = false;
        await axios.delete(`https://api.tidyhq.com/v1/groups/${group_id}/contacts/${contact_id}?access_token=${this.access_token}`).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`Groups.removeContactFromGroup: ${error}`);
        });
        return success;
    }

    /**
     * @description This function is used to get all contacts in a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @returns {object[]} - An array of contact objects.
     */
    async getGroupContacts(group_id) {
        let contacts = await this.Contacts.getContacts();

        let groupContacts = [];
        for (let i=0; i<contacts.length; i++) {
            let contact = contacts[i];
            for (let j=0; j<contact.groups.length; j++) {
                let group = contact.groups[j];
                if (group.id == group_id) {
                    groupContacts.push(contact);
                    break;
                }
            }
        }
        return groupContacts;
    }
}

module.exports = { GroupsAPI };