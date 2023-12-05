/**
 * @fileoverview This file contains functions for interacting with Events in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
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
     * @description This function is used to create a new instance of the EventsAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the EventsAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get a list of events.
     * @param {object} path - The path for the request.
     * @param {object} [options] - The options to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {date} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {date} [options.end_at] - The end date of the events to return in ISO 8601 format.
     * @param {boolean} [options.public] - Whether to return only public events or not.
     * @returns {object} - The list of events.
     * @private
     */
    async #_getEvents(path, options = {}) {
        let optionalParametersString = makeURLParameters(["limit", "offset", "start_at", "end_at", "public"], options)
        let events = [];
        await this.axios.get(`/v1/${path}${optionalParametersString}`).then((response) => {
            events = response.data;
        }).catch((error) => {
            throw new Error(`Events.getEvents: ${error}\n${error.response.data}`);
        });
        return events;
    }

    /**
     * @description This function is used to get a list of events.
     * @param {object} [options] - The options to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {date} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {date} [options.end_at] - The end date of the events to return in ISO 8601 format.
     * @param {boolean} [options.public] - Whether to return only public events or not.
     * @returns {object} - The list of events.
     */
    async getEvents(options = {}) {
        return await this.#_getEvents("events", options);
    }

    /**
     * @description This function is used to get a list of events for an organization.
     * @param {number} organization_id - The ID of the organization.
     * @param {object} [options] - The options to use.
     * @param {number} [options.limit] - The maximum number of contacts to return.
     * @param {number} [options.offset] - The number of contacts to skip.
     * @param {date} [options.start_at] - The start date of the events to return in ISO 8601 format.
     * @param {date} [options.end_at] - The end date of the events to return in ISO 8601 format.
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
     * @returns {object} - The event.
     * @private
     */
    async #_getEvent(path, event_id) {
        let event = {};
        await this.axios.get(`/v1/${path}/${event_id}`).then((response) => {
            event = response.data;
        }).catch((error) => {
            throw new Error(`Events.getEvent: ${error}\n${error.response.data}`);
        });
        return event;
    }

    /**
     * @description This function is used to get a single event.
     * @param {number} event_id - The ID of the event.
     * @returns {object} - The event.
     */
    async getEvent(event_id) {
        return await this.#_getEvent("events", event_id);
    }

    /**
     * @description This function is used to get a single event for an organization.
     * @param {number} organization_id - The ID of the organization.
     * @param {number} event_id - The ID of the event.
     * @returns {object} - The event.
     */
    async getOrganizationEvent(organization_id, event_id) {
        return await this.#_getEvent(`association/organizations/${organization_id}/events`, event_id);
    }

    /**
     * @description This function is used to create a new event.
     * @param {string} name - The name of the event.
     * @param {date} start_at - The start date of the event in ISO 8601 format.
     * @param {object} [options] - The options to use.
     * @param {date} [options.end_at] - The end date of the event in ISO 8601 format.
     * @param {string} [options.body] - The description of the event.
     * {string} [options.location] - The location of the event. ERROR IN TIDYHQ DOCUMENTATION/API
     * @param {boolean} [options.archived] - Whether the event is archived or not (showing on public events page).
     * @param {boolean} [options.hidden] - Whether the event is hidden or not (showing on public events and admin page).
     * @param {number} [options.category_id] - The ID of the category to assign the event to (defaults to tickets category).
     * @param {string} [options.location] - The location of the event.
     * @returns {object} - The event.
     */
    async createEvent(name, start_at, options = {}) {
        let event = {};
        await this.axios.post(`/v1/events`, {
            name: name,
            start_at: start_at,
            ...options
        }).then((response) => {
            event = response.data;
        }).catch((error) => {
            throw new Error(`Events.createEvent: ${error}\n${error.response.data}`);
        });
        return event;
    }

    /**
     * @description This function is used to update an event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options] - The options to use.
     * @param {string} [options.name] - The name of the event.
     * @param {date} [options.start_at] - The start date of the event in ISO 8601 format.
     * @param {date} [options.end_at] - The end date of the event in ISO 8601 format.
     * @param {string} [options.body] - The description of the event.
     * {string} [options.location] - The location of the event. ERROR IN TIDYHQ DOCUMENTATION/API
     * @param {boolean} [options.archived] - Whether the event is archived or not (showing on public events page).
     * @param {boolean} [options.hidden] - Whether the event is hidden or not (showing on public events and admin page).
     * @param {number} [options.category_id] - The ID of the category to assign the event to (defaults to tickets category).
     * @param {string} [options.location] - The location of the event.
     * @returns {object} - The event.
     */
    async updateEvent(event_id, options = {}) {
        let event = {};
        let optionalParameters = makeURLParameters(["name", "start_at", "end_at", "body", "archived", "hidden", "category_id", "location"], options);
        await this.axios.put(`/v1/events/${event_id}${optionalParameters}`, {
        }).then((response) => {
            event = response.data;
        }).catch((error) => {
            throw new Error(`Events.updateEvent: ${error}\n${error.response.data}`);
        });
        return event;
    }

    /**
     * @description This function is used to delete an event.
     * @param {number} event_id - The ID of the event.
     * @returns {boolean} - Success or failure.
     */
    async deleteEvent(event_id) {
        let success = false;
        await this.axios.delete(`/v1/events/${event_id}`).then(() => {
            success = true;
        }).catch((error) => {
            throw new Error(`Events.deleteEvent: ${error}\n${error.response.data}`);
        });
        return success;
    }

}

module.exports = { EventsAPI };