/**
 * @fileoverview This file contains functions for interacting with Associations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");

/**
 * @description This class is used to interact with Associations in TidyHQ.
 * @class
 */
class AssociationAPI {

    /**
     * @description This function is used to create a new instance of the AssociationAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the AssociationAPI class.
     * @constructor
     */
    constructor(access_token, host) {
        this.access_token = access_token;
        this.host = host;
    }

    /**
     * @description This function is used to get the organizations that fall under the association associated with the access token.
     * @returns {object} - The list of organizations.
     */
    async getOrganizations() {
        let organisations = [];
        await axios.get(`https://${this.host}/v1/association/organizations?access_token=${this.access_token}`).then((response) => {
            organisations = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizations: ${error}`);
        });
        return organisations;
    }

    /**
     * @description This function is used to get a single organization.
     * @param {string} id - The ID of the organization.
     * @returns {object} - The organization.
     */
    async getOrganization(id) {
        let organisation = [];
        await axios.get(`https://${this.host}/v1/association/organizations/${id}?access_token=${this.access_token}`).then((response) => {
            organisation = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganization: ${error}`);
        });
        return organisation;
    }

    /**
     * @description This function is used to get the contacts that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @returns {object} - The list of contacts.
     */
    async getOrganizationContacts(organization_id) {
        let contacts = [];
        await axios.get(`https://${this.host}/v1/association/organizations/${organization_id}/contacts?access_token=${this.access_token}`).then((response) => {
            contacts = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationContacts: ${error}`);
        });
        return contacts;
    }

    /**
     * @description This function is used to get the events that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @returns {object} - The list of events.
     */
    async getOrganizationEvents(organization_id) {
        let events = [];
        await axios.get(`https://${this.host}/v1/association/organizations/${organization_id}/events?access_token=${this.access_token}`).then((response) => {
            events = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationEvents: ${error}`);
        });
        return events;
    }

    /**
     * @description This function is used to get a single event that falls under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {string} event_id - The ID of the event.
     * @returns {object} - The event.
     */
    async getOrganizationEvent(organization_id, event_id) {
        let event = [];
        await axios.get(`https://${this.host}/v1/association/organizations/${organization_id}/events/${event_id}?access_token=${this.access_token}`).then((response) => {
            event = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationEvent: ${error}`);
        });
        return event;
    }

    /**
     * @description This function is used to get the meetings that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @returns {object} - The list of meetings.
     */
    async getOrganizationMeetings(organization_id) {
        let meetings = [];
        await axios.get(`https://${this.host}/v1/association/organizations/${organization_id}/meetings?access_token=${this.access_token}`).then((response) => {
            meetings = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationMeetings: ${error}`);
        });
        return meetings;
    }

    /**
     * @description This function is used to get a single meeting that falls under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {string} meeting_id - The ID of the meeting.
     * @returns {object} - The meeting.
     */
    async getOrganizationMeeting(organization_id, meeting_id) {
        let meeting = [];
        await axios.get(`https://${this.host}/v1/association/organizations/${organization_id}/meetings/${meeting_id}?access_token=${this.access_token}`).then((response) => {
            meeting = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationMeeting: ${error}`);
        });
        return meeting;
    }

}

module.exports = { AssociationAPI };