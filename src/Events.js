/**
 * @fileoverview This file contains functions for interacting with Events in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Events in TidyHQ.
 * @class
 */
class EventsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {EventsAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of events.
     * @param {object} path - The path for the request.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {string} [options.end_at] - The end date of the events to return in ISO 8601 format.
     * @param {boolean} [options.public] - Whether to return only public events or not.
     * @returns {object} - The list of events.
     * @private
     */
    async #_getEvents(path, options) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "start_at", "end_at", "public"], options)
        let events = [];
        await this.rest.get(`/v1/${path}${optionalParametersString}`, options.access_token).then((response) => {
            events = response.data;
        }).catch((error) => {
            throw new Error(`Events.getEvents: ${error}\n${error.response.data}`);
        });
        return events;
    }

    /**
     * @description This function is used to get a list of events.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {string} [options.end_at] - The end date of the events to return in ISO 8601 format.
     * @param {boolean} [options.public] - Whether to return only public events or not.
     * @returns {object} - The list of events.
     */
    async getEvents(options = {}) {
        return await this.#_getEvents("events", options);
    }

    /**
     * @description This function is used to get a list of events for an organization.
     * @param {number} organization_id - The ID of the organization.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {string} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {string} [options.end_at] - The end date of the events to return in ISO 8601 format.
     * @param {boolean} [options.public] - Whether to return only public events or not.
     * @returns {object} - The list of events.
     */
    async getOrganizationEvents(organization_id, options = {}) {
        return await this.#_getEvents(`association/organizations/${organization_id}/events`, options);
    }

    /**
     * @description This function is used to get a single event.
     * @param {number} event_id - The ID of the event.
     * @param {object} path - The path for the request.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The event.
     * @private
     */
    async #_getEvent(path, event_id, options) {
        let event = {};
        await this.rest.get(`/v1/${path}/${event_id}`, options.access_token).then((response) => {
            event = response.data;
        }).catch((error) => {
            throw new Error(`Events.getEvent: ${error}\n${error.response.data}`);
        });
        return event;
    }

    /**
     * @description This function is used to get a single event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The event.
     */
    async getEvent(event_id, options) {
        return await this.#_getEvent("events", event_id, options);
    }

    /**
     * @description This function is used to get a single event for an organization.
     * @param {number} organization_id - The ID of the organization.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The event.
     */
    async getOrganizationEvent(organization_id, event_id, options = {}) {
        return await this.#_getEvent(`association/organizations/${organization_id}/events`, event_id, options);
    }

    /**
     * @description This function is used to create a new event.
     * @param {string} name - The name of the event.
     * @param {string} start_at - The start date of the event in ISO 8601 format.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.end_at] - The end date of the event in ISO 8601 format.
     * @param {string} [options.body] - The description of the event.
     * {string} [options.location] - The location of the event. [!] ERROR IN TIDYHQ DOCUMENTATION/API
     * @param {boolean} [options.archived] - Whether the event is archived or not (showing on public events page).
     * @param {boolean} [options.hidden] - Whether the event is hidden or not (showing on public events and admin page).
     * @param {number} [options.category_id] - The ID of the category to assign the event to (defaults to tickets category).
     * @param {string} [options.location] - The location of the event.
     * @returns {object} - The event.
     */
    async createEvent(name, start_at, options = {}) {
        const access_token = options.access_token;
        delete options.access_token;

        let event = {};
        await this.rest.post(`/v1/events`, {
            name: name,
            start_at: start_at,
            ...options
        }, access_token).then((response) => {
            event = response.data;
        }).catch((error) => {
            throw new Error(`Events.createEvent: ${error}\n${error.response.data}`);
        });
        return event;
    }

    /**
     * @description This function is used to update an event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.name] - The name of the event.
     * @param {string} [options.start_at] - The start date of the event in ISO 8601 format.
     * @param {string} [options.end_at] - The end date of the event in ISO 8601 format.
     * @param {string} [options.body] - The description of the event.
     * {string} [options.location] - The location of the event. [!] ERROR IN TIDYHQ DOCUMENTATION/API
     * @param {boolean} [options.archived] - Whether the event is archived or not (showing on public events page).
     * @param {boolean} [options.hidden] - Whether the event is hidden or not (showing on public events and admin page).
     * @param {number} [options.category_id] - The ID of the category to assign the event to (defaults to tickets category).
     * @param {string} [options.location] - The location of the event.
     * @returns {object} - The event.
     */
    async updateEvent(event_id, options) {
        const access_token = options.access_token;
        delete options.access_token;

        let event = {};
        
        if (Object.keys(options).length === 0) {
            throw new Error("Events.updateEvent: No options provided.");
        }

        await this.rest.put(`/v1/events/${event_id}`, options, access_token).then((response) => {
            event = response.data;
        }).catch((error) => {
            throw new Error(`Events.updateEvent: ${error}\n${error.response.data}`);
        });
        return event;
    }

    /**
     * @description This function is used to delete an event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Success or failure.
     */
    async deleteEvent(event_id, options = {}) {
        let success = false;
        await this.rest.delete(`/v1/events/${event_id}`, {}, options.access_token).then(() => {
            success = true;
        }).catch((error) => {
            throw new Error(`Events.deleteEvent: ${error}\n${error.response.data}`);
        });
        return success;
    }

}

module.exports = { EventsAPI };