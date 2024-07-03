/**
 * @fileoverview This file contains functions for interacting with Tickets in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Tickets in TidyHQ.
 * @class
 */
class TicketsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Tickets>} - The list of tickets.
     */
    async getTickets(event_id, options = {}) {
        return await this.rest.get(`/v1/events/${event_id}/tickets`, options?.access_token);
    }

    /**
     * @description This function is used to get a list of all tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @param {string} ticket_id - The ID of the ticket.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Ticket>} - The ticket.
     */
    async getTicket(event_id, ticket_id, options = {}) {
        return await this.rest.get(`/v1/events/${event_id}/tickets/${ticket_id}`, options?.access_token);
    }

    /**
     * @description This function is used to get a list of all sold tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_SoldTickets>} - The list of sold tickets.
     */
    async getSoldTickets(event_id, options = {}) {
        return await this.rest.get(`/v1/events/${event_id}/tickets/sold`, options?.access_token);
    }

    /**
     * @description This function is used to create a ticket category for an event.
     * @param {string} event_id - The ID of the event.
     * @param {string} name - The name for the type of ticket.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.amount] - The amount for the ticket. Default is 0.00 and is for free tickets.
     * @param {number} [options.initial_quantity] - Limit the number of tickets available. Default is null and is for unlimited.
     * @param {number} [options.maximum_purchase] - Limit the number of tickets per purchase.
     * @param {string} [options.sales_end] - The date in ISO 8601 format for sales to end. Default is null and is for no end date.
     * @returns {Promise<TidyAPI_V1_Ticket>} - The newly created ticket.
     */
    async createTicket(event_id, name, options = {}) {
        const data = {
            name: name,
            amount: options.amount,
            initial_quantity: options.initial_quantity,
            maximum_purchase: options.maximum_purchase,
            sales_end: options.sales_end
        };
        return await this.rest.post(`/v1/events/${event_id}/tickets`, data, options?.access_token);
    }

    /**
     * @description This function is used to update a ticket category for an event.
     * @param {string} event_id - The ID of the event.
     * @param {string} ticket_id - The ID of the ticket.
     * @param {Object} [options] - The options for the ticket. At least one option is required that isn't the access token.
     * @param {string} [options.access_token] - The access token to use.
     * @param {string} [options.name] - The name for the type of ticket.
     * @param {number} [options.amount] - The amount for the ticket.
     * @param {number} [options.initial_quantity] - Limit the number of tickets available.
     * @param {number} [options.maximum_purchase] - Limit the number of tickets per purchase.
     * @param {string} [options.sales_end] - The date in ISO 8601 format for sales to end.
     * @returns {Promise<TidyAPI_V1_Ticket>} - The updated ticket.
     */
    async updateTicket(event_id, ticket_id, options) {
        const data = {
            name: options.name,
            amount: options.amount,
            initial_quantity: options.initial_quantity,
            maximum_purchase: options.maximum_purchase,
            sales_end: options.sales_end
        };
        if (Object.keys(data).length === 0) {
            throw new Error("Tickets.updateTicket: No options provided.");
        }
        return await this.rest.put(`/v1/events/${event_id}/tickets/${ticket_id}`, data, options?.access_token);
    }

    /**
     * @description This function is used to delete a ticket category for an event.
     * @param {string} event_id - The ID of the event.
     * @param {string} ticket_id - The ID of the ticket.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Whether or not the ticket was deleted.
     */
    async deleteTicket(event_id, ticket_id, options = {}) {
        return await this.rest.delete(`/v1/events/${event_id}/tickets/${ticket_id}`, {}, options?.access_token);
    }
}

module.exports = { TicketsAPI };