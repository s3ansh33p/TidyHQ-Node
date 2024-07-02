/**
 * @fileoverview This file contains functions for interacting with Meetings in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Meetings in TidyHQ.
 * @class
 */
class MeetingsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all meetings.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use. - The options for the request.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_Meetings>} - The list of meetings.
     */
    async getMeetings(options) {
        const optionalParametersString = makeURLParameters(["limit", "offset"], options)
        return await this.rest.get(`/v1/events${optionalParametersString}`, options.access_token);
    }

    /**
     * @description This function is used to get a single meeting.
     * @param {string} meeting_id - The ID of the meeting.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Meeting>} - The meeting.
     */
    async getMeeting(meeting_id, options = {}) {
        return await this.rest.get(`/v1/meetings/${meeting_id}`, options.access_token);
    }
}

module.exports = { MeetingsAPI };