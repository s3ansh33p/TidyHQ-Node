/**
 * @fileoverview This file contains functions for interacting with Tickets in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.1.0
 * @license GPL-3.0
 */

const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Tickets in TidyHQ.
 * @class
 */
class TicketsAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @returns {TicketsAPI}
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of all tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @param {boolean} soldFilter - Whether or not to show only sold tickets.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The list of tickets.
     */
    async #_getTickets(event_id, soldFilter, options) {
        let tickets = [];
        await this.rest.get(`/v1/events/${event_id}/tickets/${soldFilter ? 'sold' : ''}`, options.access_token).then((response) => {
            tickets = response.data;
        }).catch((error) => {
            throw new Error(`Tickets.getTickets: ${error}\n${error.response.data}`);
        });
        return tickets;
    }

    /**
     * @description This function is used to get a list of all tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The list of tickets.
     */
    async getTickets(event_id, options = {}) {
        return await this.#_getTickets(event_id, false, options);
    }

    /**
     * @description This function is used to get a list of all sold tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {object} - The list of tickets.
     */
    async getSoldTickets(event_id, options = {}) {
        return await this.#_getTickets(event_id, true, options);
    }

    /**
     * @description This function is used to create a ticket category for an event.
     * @param {string} event_id - The ID of the event.
     * @param {string} name - The name for the type of ticket.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use. - The options for the ticket.
     * @param {decimal} [options.amount] - The amount for the ticket. Default is 0.00 and is for free tickets.
     * @param {number} [options.initial_quantity] - Limit the number of tickets available. Default is null and is for unlimited.
     * @param {number} [options.maximum_purchase] - Limit the number of tickets per purchase. Default is 5
     * @param {Date} [options.sales_end] - The date in ISO 8601 format for sales to end. Default is null and is for no end date.
     * @returns {object} - The ticket category.
     */
    async createTicket(event_id, name, options = {}) {
        let ticket = {};
        let optionalParametersString = makeURLParameters(["amount", "initial_quantity", "maximum_purchase", "sales_end"], options);

        await this.rest.post(`/v1/events/${event_id}/tickets&name=${name}${optionalParametersString}`, {}, options.access_token).then((response) => {
            ticket = response.data;
        }).catch((error) => {
            throw new Error(`Tickets.createTicket: ${error}\n${error.response.data}`);
        });
        return ticket;
    }

    /**
     * @description This function is used to update a ticket category for an event.
     * @param {string} event_id - The ID of the event.
     * @param {string} ticket_id - The ID of the ticket.
     * @param {string} [options] - The options for the ticket.
     * @param {string} [options.name] - The name for the type of ticket.
     * @param {decimal} [options.amount] - The amount for the ticket.
     * @param {number} [options.initial_quantity] - Limit the number of tickets available.
     * @param {number} [options.maximum_purchase] - Limit the number of tickets per purchase.
     * @param {Date} [options.sales_end] - The date in ISO 8601 format for sales to end.
     * @returns {object} - The updated ticket category.
     */
    async updateTicket(event_id, ticket_id, options) {
        let ticket = {};
        let optionalParametersString = makeURLParameters(["name", "amount", "initial_quantity", "maximum_purchase", "sales_end"], options);

        if (optionalParametersString == "") {
            throw new Error("Tickets.updateTicket: No options were provided to update.");
        }

        await this.rest.put(`/v1/events/${event_id}/tickets/${ticket_id}${optionalParametersString}`, {}, options.access_token).then((response) => {
            ticket = response.data;
        }).catch((error) => {
            throw new Error(`Tickets.updateTicket: ${error}\n${error.response.data}`);
        });
        return ticket;
    }

    /**
     * @description This function is used to delete a ticket category for an event.
     * @param {string} event_id - The ID of the event.
     * @param {string} ticket_id - The ID of the ticket.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {boolean} - Whether or not the ticket was deleted.
     */
    async deleteTicket(event_id, ticket_id, options = {}) {
        let deleted = false;
        await this.rest.delete(`/v1/events/${event_id}/tickets/${ticket_id}`, {}, options.access_token).then((response) => {
            deleted = true;
        }).catch((error) => {
            throw new Error(`Tickets.deleteTicket: ${error}\n${error.response.data}`);
        });
        return deleted;
    }
}

module.exports = { TicketsAPI };