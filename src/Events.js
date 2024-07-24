/**
 * @fileoverview This file contains functions for interacting with Events in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Events in TidyHQ.
 * @class
 */
class EventsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

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
    async getEvents(options) {
        const optionalParametersString = makeURLParameters(["limit", "offset", "start_at", "end_at", "public"], options)
        return await this.rest.get(`/v1/events${optionalParametersString}`, options?.access_token);
    }

    /**
     * @description Get a single event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Event>} - The event.
     */
    async getEvent(event_id, options = {}) {
        return await this.rest.get(`/v1/events/${event_id}`, options?.access_token);
    }

    /**
     * @description Create a new event.
     * @param {Tidy_V1_EventParams} event - The event to create. Requires a name and start_at.
     * @param {Object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Event>} - The event.
     */
    async createEvent(event, options = {}) {
        return await this.rest.post(`/v1/events`, event, options?.access_token);
    }

    /**
     * @description Update an event.
     * @param {number} event_id - The ID of the event.
     * @param {Tidy_V1_EventParams} event - The event to update. Requires at least one parameter.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Event>} - The event.
     */
    async updateEvent(event_id, event, options) {
        if (Object.keys(event).length === 0) {
            throw new Error("Events.updateEvent: No options provided.");
        }
        return await this.rest.put(`/v1/events/${event_id}`, event, options?.access_token);
    }

    /**
     * @description Delete an event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure. 
     */
    async deleteEvent(event_id, options = {}) {
        return await this.rest.delete(`/v1/events/${event_id}`, {}, options?.access_token);
    }

}

module.exports = { EventsAPI };