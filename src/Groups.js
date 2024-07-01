/**
 * @fileoverview This file contains functions for interacting with Groups in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Groups in TidyHQ.
 * @class
 */
class GroupsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {GroupsAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of groups from TidyHQ.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of groups to return.
     * @param {number} [options.offset] - The number of groups to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @returns {object[]} - An array of group objects.
     */
    async getGroups(options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "search_terms"], options)

        let groups = [];
        await this.rest.get(`/v1/groups${optionalParametersString}`, options.access_token).then((response) => {
            groups = response.data;
        }).catch((error) => {
            throw new Error(`Groups.getGroups: ${error}\n${error.response.data}`);
        });
        return groups;
    }

    /**
     * @description This function is used to get groups for a contact from TidyHQ.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of groups to return.
     * @param {number} [options.offset] - The number of groups to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @returns {object[]} - An array of group objects.
     */
    async getGroupsForContact(contact_id, options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "search_terms"], options)

        let groups = [];
        await this.rest.get(`/v1/contacts/${contact_id}/groups${optionalParametersString}`, options.access_token).then((response) => {
            groups = response.data;
        }).catch((error) => {
            throw new Error(`Groups.getGroupsForContact: ${error}\n${error.response.data}`);
        });
        return groups;
    }

    /**
     * @description This function is used to get a single group from TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - A group object.
     */
    async getGroup(group_id, options = {}) {
        let group = {};
        await this.rest.get(`/v1/groups/${group_id}`, options.access_token).then((response) => {
            group = response.data;
        }).catch((error) => {
            throw new Error(`Groups.getGroup: ${error}\n${error.response.data}`);
        });
        return group;
    }

    /**
     * @description This function is used to get a single group by name from TidyHQ.
     * @param {string} name - The name of the group.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - A group object.
     */
    async getGroupByName(name, options = {}) {
        let groups = await this.getGroups(options);
        let group = groups.find((group) => group.label == name);
        if (group == undefined) throw new Error(`Groups.getGroupByName: Group with name ${name} not found.`);
        return group;
    }

    /**
     * @description This function is used to create a new group in TidyHQ.
     * @param {string} name - The name of the group.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the group.
     * @returns {object} - The group object.
     */
    async createGroup(name, options) {
        let data = {
            label: name
        }
        if (options.description != "") {
            data.description = description;
        }
        let group = {};
        await this.rest.post(`/v1/groups`, data, options.access_token).then((response) => {
            group = response.data;
        }).catch((error) => {
            throw new Error(`Groups.createGroup: ${error}\n${error.response.data}`);
        });
        return group;
    }

    /**
     * @description This function is used to update a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.name] - The name of the group.
     * @param {string} [options.description] - The description of the group.
     * @returns {object} - The group object.
     */
    async updateGroup(group_id, options) {
        const access_token = options.access_token;
        delete options.access_token;

        if (options.name != undefined) {
            options.label = options.name;
            delete options.name;
        }
        let optionalParametersString = makeURLParameters(["label", "description"], options)
        if (optionalParametersString == "") throw new Error("CustomFields.updateCustomField: No valid options provided.");

        let group = {};
        await this.rest.put(`/v1/groups/${group_id}${optionalParametersString}`, options, access_token).then((response) => {
            group = response.data;
        }).catch((error) => {
            throw new Error(`Groups.updateGroup: ${error}\n${error.response.data}`);
        });
        return group;
    }

    /**
     * @description This function is used to delete a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The group object.
     */
    async deleteGroup(group_id, options = {}) {
        let success = false;
        await this.rest.delete(`/v1/groups/${group_id}`, {}, options.access_token).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`Groups.deleteGroup: ${error}\n${error.response.data}`);
        });
        return success;
    }

    /**
     * @description This function is used to add a contact to a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The group object.
     */
    async addContactToGroup(group_id, contact_id, options = {}) {
        let success = false;
        await this.rest.put(`/v1/groups/${group_id}/contacts/${contact_id}`, {}, options.access_token).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`Groups.addContactToGroup: ${error}\n${error.response.data}`);
        });
        return success;
    }

    /**
     * @description This function is used to remove a contact from a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Success or failure.
     */
    async removeContactFromGroup(group_id, contact_id, options = {}) {
        let success = false;
        await this.rest.delete(`/v1/groups/${group_id}/contacts/${contact_id}`, {}, options.access_token).then((response) => {
            success = true;
        }).catch((error) => {
            throw new Error(`Groups.removeContactFromGroup: ${error}\n${error.response.data}`);
        });
        return success;
    }
}

module.exports = { GroupsAPI };