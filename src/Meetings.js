/**
 * @fileoverview This file contains functions for interacting with Meetings in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Meetings in TidyHQ.
 * @class
 */
class MeetingsAPI {

    /**
     * @description This function is used to create a new instance of the MeetingsAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the MeetingsAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of all meetings.
     * @param {object} path - The path for the request.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @returns {object} - The list of meetings.
     * @private
     */
    async #_getMeetings(path, options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset"], options)
        let meetings = [];
        await axios.get(`https://api.tidyhq.com/v1/${path}?access_token=${this.access_token}${optionalParametersString}`).then((response) => {
            meetings = response.data;
        }).catch((error) => {
            throw new Error(`Meetings.getMeetings: ${error}`);
        });
        return meetings;
    }

    /**
     * @description This function is used to get a list of all meetings.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @returns {object} - The list of meetings.
     */
    async getMeetings(options = {}) {
        return this.#_getMeetings("meetings", options);
    }

    /**
     * @description This function is used to get meetings for an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} options - The options for the request.
     * @param {string} options.limit - The number of results to return.
     * @param {string} options.offset - The number of results to skip.
     * @returns {object} - The list of meetings.
     */
    async getOrganizationMeetings(organization_id, options = {}) {
        return this.#_getMeetings(`association/organizations/${organization_id}/meetings`, options);
    }

    /**
     * @description This function is used to get a single meeting.
     * @param {string} meeting_id - The ID of the meeting.
     * @returns {object} - The meeting.
     */
    async getMeeting(meeting_id) {
        let meeting = {};
        await axios.get(`https://api.tidyhq.com/v1/meetings/${meeting_id}?access_token=${this.access_token}`).then((response) => {
            meeting = response.data;
        }).catch((error) => {
            throw new Error(`Meetings.getMeeting: ${error}`);
        });
        return meeting;
    }

    /**
     * @description This function is used to get a single meeting for an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {string} meeting_id - The ID of the meeting.
     * @returns {object} - The meeting.
     */
    async getOrganizationMeeting(organization_id, meeting_id) {
        let meeting = {};
        await axios.get(`https://api.tidyhq.com/v1/association/organizations/${organization_id}/meetings/${meeting_id}?access_token=${this.access_token}`).then((response) => {
            meeting = response.data;
        }).catch((error) => {
            throw new Error(`Meetings.getOrganizationMeeting: ${error}`);
        });
        return meeting;
    }
}

module.exports = { MeetingsAPI };