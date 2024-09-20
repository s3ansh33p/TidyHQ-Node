/**
 * @description This class is used to interact with Events in TidyHQ.
 * @class
 */
export class EventsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of events.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {string} [options.end_at] - The end date of the events to return in ISO 8601 format.
     * @param {boolean} [options.public] - Whether to return only public events or not.
     * @returns {Promise<TidyAPI_V1_Events>} - The list of events.
     */
    getEvents(options?: {
        access_token?: string | undefined;
        limit?: number | undefined;
        offset?: number | undefined;
        start_at?: string | undefined;
        end_at?: string | undefined;
        public?: boolean | undefined;
    } | undefined): Promise<TidyAPI_V1_Events>;
    /**
     * @description Get a single event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Event>} - The event.
     */
    getEvent(event_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Event>;
    /**
     * @description Create a new event.
     * @param {Tidy_V1_EventParams} event - The event to create. Requires a name and start_at.
     * @param {Object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Event>} - The event.
     */
    createEvent(event: Tidy_V1_EventParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Event>;
    /**
     * @description Update an event.
     * @param {number} event_id - The ID of the event.
     * @param {Tidy_V1_EventParams} event - The event to update. Requires at least one parameter.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Event>} - The event.
     */
    updateEvent(event_id: number, event: Tidy_V1_EventParams, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Event>;
    /**
     * @description Delete an event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    deleteEvent(event_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_Events, TidyAPI_V1_Event, TidyAPI_Response, Tidy_V1_EventParams } from "types.js";
