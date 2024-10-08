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
     * @description Get the organizations that fall under the association associated with the access token.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Organizations>} - The list of organizations.
     */
    async getOrganizations(options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/association/organizations`, accessToken);
    }

    /**
     * @description Get a single organization.
     * @param {string} id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Organization>} - The organization.
     */
    async getOrganization(id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/association/organizations/${id}`, accessToken);
    }

    /**
     * @description Get the contacts that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_OrganizationContacts>} - The list of contacts.
     */
    async getOrganizationContacts(organization_id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/association/organizations/${organization_id}/contacts`, accessToken);
    }

    /**
     * @description Get the events that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {string} [options.end_at] - The end date of the events to return in ISO 8601 format.
     * @param {boolean} [options.public] - Whether to return only public events or not.
     * @returns {Promise<TidyAPI_V1_Events>} - The list of events.
     */
    async getOrganizationEvents(organization_id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/association/organizations/${organization_id}/events`, accessToken);
    }

    /**
     * @description Get a single event that falls under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Event>} - The event.
     */
    async getOrganizationEvent(organization_id, event_id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/association/organizations/${organization_id}/events/${event_id}`, accessToken);
    }

    /**
     * @description Get the meetings that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_Meetings>} - The list of meetings.
     */
    async getOrganizationMeetings(organization_id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/association/organizations/${organization_id}/meetings`, accessToken);
    }

    /**
     * @description Get a single meeting that falls under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {string} meeting_id - The ID of the meeting.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Meeting>} - The meeting.
     */
    async getOrganizationMeeting(organization_id, meeting_id, options = {}) {
        const accessToken = options.access_token || "";
        return await this.rest.get(`/v1/association/organizations/${organization_id}/meetings/${meeting_id}`, accessToken);
    }

}

module.exports = { AssociationAPI };