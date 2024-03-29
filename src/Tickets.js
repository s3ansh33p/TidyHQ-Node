/**
 * @fileoverview This file contains functions for interacting with Tickets in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
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
     * @description This function is used to create a new instance of the TicketsAPI class.
     * @param {AxiosInstance} axios - The Axios instance to use for requests.
     * @returns {object} - A new instance of the TicketsAPI class.
     * @constructor
     */
    constructor(axios) {
        this.axios = axios;
    }

    /**
     * @description This function is used to get a list of all tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @param {boolean} soldFilter - Whether or not to show only sold tickets.
     * @returns {object} - The list of tickets.
     */
    async #_getTickets(event_id, soldFilter = false) {
        let tickets = [];
        await this.axios.get(`/v1/events/${event_id}/tickets/${soldFilter ? 'sold' : ''}`).then((response) => {
            tickets = response.data;
        }).catch((error) => {
            throw new Error(`Tickets.getTickets: ${error}\n${error.response.data}`);
        });
        return tickets;
    }

    /**
     * @description This function is used to get a list of all tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @returns {object} - The list of tickets.
     */
    async getTickets(event_id) {
        return await this.#_getTickets(event_id);
    }

    /**
     * @description This function is used to get a list of all sold tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @returns {object} - The list of tickets.
     */
    async getSoldTickets(event_id) {
        return await this.#_getTickets(event_id, true);
    }

    /**
     * @description This function is used to create a ticket category for an event.
     * @param {string} event_id - The ID of the event.
     * @param {string} name - The name for the type of ticket.
     * @param {object} [options] - The options for the ticket.
     * @param {decimal} [options.amount] - The amount for the ticket. Default is 0.00 and is for free tickets.
     * @param {number} [options.initial_quantity] - Limit the number of tickets available. Default is null and is for unlimited.
     * @param {number} [options.maximum_purchase] - Limit the number of tickets per purchase. Default is 5
     * @param {date} [options.sales_end] - The date in ISO 8601 format for sales to end. Default is null and is for no end date.
     * @returns {object} - The ticket category.
     */
    async createTicket(event_id, name, options = {}) {
        let ticket = {};
        let optionalParametersString = makeURLParameters(["amount", "initial_quantity", "maximum_purchase", "sales_end"], options);

        await this.axios.post(`/v1/events/${event_id}/tickets&name=${name}${optionalParametersString}`).then((response) => {
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
     * @param {date} [options.sales_end] - The date in ISO 8601 format for sales to end.
     * @returns {object} - The updated ticket category.
     */
    async updateTicket(event_id, ticket_id, options) {
        let ticket = {};
        let optionalParametersString = makeURLParameters(["name", "amount", "initial_quantity", "maximum_purchase", "sales_end"], options);

        if (optionalParametersString == "") {
            throw new Error("Tickets.updateTicket: No options were provided to update.");
        }

        await this.axios.put(`/v1/events/${event_id}/tickets/${ticket_id}${optionalParametersString}`).then((response) => {
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
     * @returns {boolean} - Whether or not the ticket was deleted.
     */
    async deleteTicket(event_id, ticket_id) {
        let deleted = false;
        await this.axios.delete(`/v1/events/${event_id}/tickets/${ticket_id}`).then((response) => {
            deleted = true;
        }).catch((error) => {
            throw new Error(`Tickets.deleteTicket: ${error}\n${error.response.data}`);
        });
        return deleted;
    }
}

module.exports = { TicketsAPI };