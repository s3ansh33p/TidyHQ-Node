/**
 * @fileoverview This file contains functions for interacting with Associations in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.1.0
 * @license GPL-3.0
 */


/**
 * @description This class is used to interact with Associations in TidyHQ.
 * @class
 */
class AssociationAPI {

    /**
     * @description This function is used to create a new instance of the AssociationAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the AssociationAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get the organizations that fall under the association associated with the access token.
     * @returns {object} - The list of organizations.
     */
    async getOrganizations() {
        let organizations = [];
        await this.axios.get(`/v1/association/organizations`).then((response) => {
            organizations = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizations: ${error}\n${error.response.data}`);
        });
        return organizations;
    }

    /**
     * @description This function is used to get a single organization.
     * @param {string} id - The ID of the organization.
     * @returns {object} - The organization.
     */
    async getOrganization(id) {
        let organization = [];
        await this.axios.get(`/v1/association/organizations/${id}`).then((response) => {
            organization = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganization: ${error}\n${error.response.data}`);
        });
        return organization;
    }

    /**
     * @description This function is used to get the contacts that fall under an organization.
     * @param {string} organization_id - The ID of the organization.
     * @returns {object} - The list of contacts.
     */
    async getOrganizationContacts(organization_id) {
        let contacts = [];
        await this.axios.get(`/v1/association/organizations/${organization_id}/contacts`).then((response) => {
            contacts = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationContacts: ${error}\n${error.response.data}`);
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
        await this.axios.get(`/v1/association/organizations/${organization_id}/events`).then((response) => {
            events = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationEvents: ${error}\n${error.response.data}`);
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
        await this.axios.get(`/v1/association/organizations/${organization_id}/events/${event_id}`).then((response) => {
            event = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationEvent: ${error}\n${error.response.data}`);
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
        await this.axios.get(`/v1/association/organizations/${organization_id}/meetings`).then((response) => {
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
     * @returns {object} - The meeting.
     */
    async getOrganizationMeeting(organization_id, meeting_id) {
        let meeting = [];
        await this.axios.get(`/v1/association/organizations/${organization_id}/meetings/${meeting_id}`).then((response) => {
            meeting = response.data;
        }).catch((error) => {
            throw new Error(`Association.getOrganizationMeeting: ${error}\n${error.response.data}`);
        });
        return meeting;
    }

}

module.exports = { AssociationAPI };