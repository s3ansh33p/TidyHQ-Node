/**
 * @fileoverview This file contains functions for interacting with Groups in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Groups in TidyHQ.
 * @class
 */
class GroupsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
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
     * @returns {Promise<TidyAPI_V1_Groups>} - An array of groups.
     */
    async getGroups(options = {}) {
        const optionalParametersString = makeURLParameters(["limit", "offset", "search_terms"], options)
        return await this.rest.get(`/v1/groups${optionalParametersString}`, options.access_token);
    }

    /**
     * @description This function is used to get groups for a contact from TidyHQ.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of groups to return.
     * @param {number} [options.offset] - The number of groups to skip.
     * @param {string} [options.search_terms] - The search terms to use.
     * @returns {Promise<TidyAPI_V1_Groups>} - An array of groups.
     */
    async getGroupsForContact(contact_id, options = {}) {
        const optionalParametersString = makeURLParameters(["limit", "offset", "search_terms"], options)
        return await this.rest.get(`/v1/contacts/${contact_id}/groups${optionalParametersString}`, options.access_token);
    }

    /**
     * @description This function is used to get a single group from TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Group>} - A group.
     */
    async getGroup(group_id, options = {}) {
        return await this.rest.get(`/v1/groups/${group_id}`, options.access_token);
    }

    /**
     * @description This function is used to create a new group in TidyHQ.
     * @param {string} name - The name of the group.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.description] - The description of the group.
     * @returns {Promise<TidyAPI_V1_Group>} - The group.
     */
    async createGroup(name, options) {
        const data = {
            label: name,
            description: options.description
        }
        return await this.rest.post(`/v1/groups`, data, options.access_token);
    }

    /**
     * @description This function is used to update a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.name] - The name of the group.
     * @param {string} [options.description] - The description of the group.
     * @returns {Promise<TidyAPI_V1_Group>} - The group.
     */
    async updateGroup(group_id, options) {
        const data = {
            label: options.name,
            description: options.description
        }
        if (Object.keys(data).length === 0) throw new Error("CustomFields.updateCustomField: No valid options provided.");
        return await this.rest.put(`/v1/groups/${group_id}`, options, options.access_token);
    }

    /**
     * @description This function is used to delete a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Group>} - The group.
     */
    async deleteGroup(group_id, options = {}) {
        return await this.rest.delete(`/v1/groups/${group_id}`, {}, options.access_token);
    }

    /**
     * @description This function is used to add a contact to a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Group>} - The group.
     */
    async addContactToGroup(group_id, contact_id, options = {}) {
        return await this.rest.put(`/v1/groups/${group_id}/contacts/${contact_id}`, {}, options.access_token);
    }

    /**
     * @description This function is used to remove a contact from a group in TidyHQ.
     * @param {number} group_id - The ID of the group.
     * @param {number} contact_id - The ID of the contact.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_EmptyResponse>} - An empty response.
     */
    async removeContactFromGroup(group_id, contact_id, options = {}) {
        return await this.rest.delete(`/v1/groups/${group_id}/contacts/${contact_id}`, {}, options.access_token);
    }
}

module.exports = { GroupsAPI };