/**
 * @fileoverview This file contains functions for interacting with Meetings in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Meetings in TidyHQ.
 * @class
 */
class MeetingsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {MeetingsAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all meetings.
     * @param {object} path - The path for the request.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {object} - The list of meetings.
     * @private
     */
    async #_getMeetings(path, options) {
        let optionalParametersString = makeURLParameters(["limit", "offset"], options)
        let meetings = [];
        await this.rest.get(`/v1/${path}${optionalParametersString}`, options.access_token).then((response) => {
            meetings = response.data;
        }).catch((error) => {
            throw new Error(`Meetings.getMeetings: ${error}\n${error.response.data}`);
        });
        return meetings;
    }

    /**
     * @description This function is used to get a list of all meetings.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {object} - The list of meetings.
     */
    async getMeetings(options = {}) {
        return this.#_getMeetings("meetings", options);
    }

    /**
     * @description This function is used to get meetings for an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {object} - The list of meetings.
     */
    async getOrganizationMeetings(organization_id, options = {}) {
        return this.#_getMeetings(`association/organizations/${organization_id}/meetings`, options);
    }

    /**
     * @description This function is used to get a single meeting.
     * @param {string} meeting_id - The ID of the meeting.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The meeting.
     */
    async getMeeting(meeting_id, options = {}) {
        let meeting = {};
        await this.rest.get(`/v1/meetings/${meeting_id}`, options.access_token).then((response) => {
            meeting = response.data;
        }).catch((error) => {
            throw new Error(`Meetings.getMeeting: ${error}\n${error.response.data}`);
        });
        return meeting;
    }

    /**
     * @description This function is used to get a single meeting for an organization.
     * @param {string} organization_id - The ID of the organization.
     * @param {string} meeting_id - The ID of the meeting.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The meeting.
     */
    async getOrganizationMeeting(organization_id, meeting_id, options = {}) {
        let meeting = {};
        await this.rest.get(`/v1/association/organizations/${organization_id}/meetings/${meeting_id}`, options.access_token).then((response) => {
            meeting = response.data;
        }).catch((error) => {
            throw new Error(`Meetings.getOrganizationMeeting: ${error}\n${error.response.data}`);
        });
        return meeting;
    }
}

module.exports = { MeetingsAPI };