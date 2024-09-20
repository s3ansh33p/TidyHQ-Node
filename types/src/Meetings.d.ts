/**
 * @description This class is used to interact with Meetings in TidyHQ.
 * @class
 */
export class MeetingsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of all meetings.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.limit] - The number of results to return.
     * @param {string} [options.offset] - The number of results to skip.
     * @returns {Promise<TidyAPI_V1_Meetings>} - The list of meetings.
     */
    getMeetings(options?: {
        access_token?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Meetings>;
    /**
     * @description Get a single meeting.
     * @param {string} meeting_id - The ID of the meeting.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Meeting>} - The meeting.
     */
    getMeeting(meeting_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Meeting>;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_Meetings, TidyAPI_V1_Meeting } from "types.js";
