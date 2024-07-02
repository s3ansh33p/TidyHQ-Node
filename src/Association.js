/**
 * @fileoverview This file contains functions for interacting with Associations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");

/**
 * @description This class is used to interact with Associations in TidyHQ.
 * @class
 */
class AssociationAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get the organizations that fall under the association associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<ApiOrganizationsResponse>} - The list of organizations.
     */
    async getOrganizations(options = {}) {
        return await this.rest.get(`/v1/association/organizations`, options.access_token);
    }

    /**
     * @description This function is used to get a single organization.
     * @param {string} id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<ApiOrganizationResponse>} - The organization.
     */
    async getOrganization(id, options = {}) {
        return await this.rest.get(`/v1/association/organizations/${id}`, options.access_token);
    }

    /**
     * @description This function is used to get the contacts that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<ApiOrganizationContactsResponse>} - The list of contacts.
     */
    async getOrganizationContacts(organization_id, options = {}) {
        return await this.rest.get(`/v1/association/organizations/${organization_id}/contacts`, options.access_token);
    }

    /**
     * @description This function is used to get the events that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<object>} - The list of events. [!] Type
     */
    async getOrganizationEvents(organization_id, options = {}) {
        return await this.rest.get(`/v1/association/organizations/${organization_id}/events`, options.access_token);
    }

    /**
     * @description This function is used to get a single event that falls under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {string} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<object>} - The event. [!] Type
     */
    async getOrganizationEvent(organization_id, event_id, options = {}) {
        return await this.rest.get(`/v1/association/organizations/${organization_id}/events/${event_id}`, options.access_token);
    }

    /**
     * @description This function is used to get the meetings that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<object>} - The list of meetings. [!] Type
     */
    async getOrganizationMeetings(organization_id, options = {}) {
        let meetings = [];
        await this.rest.get(`/v1/association/organizations/${organization_id}/meetings`, options.access_token).then((response) => {
            meetings = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationMeetings: ${error}\n${error.response.data}`);
        });
        return meetings;
    }

    /**
     * @description This function is used to get a single meeting that falls under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {string} meeting_id - The ID of the meeting.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<object>} - The meeting. [!] Type
     */
    async getOrganizationMeeting(organization_id, meeting_id, options = {}) {
        let meeting = [];
        await this.rest.get(`/v1/association/organizations/${organization_id}/meetings/${meeting_id}`, options.access_token).then((response) => {
            meeting = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationMeeting: ${error}\n${error.response.data}`);
        });
        return meeting;
    }

}

module.exports = { AssociationAPI };