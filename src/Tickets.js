/**
 * @fileoverview This file contains functions for interacting with Tickets in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>, ComSSA 2023
 * @version 1.0.0
 * @license GPL-3.0
 */

const axios = require("axios");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Tickets in TidyHQ.
 * @class
 */
class TicketsAPI {

    /**
     * @description This function is used to create a new instance of the TicketsAPI class.
     * @param {string} access_token - The access token of the application.
     * @returns {object} - A new instance of the TicketsAPI class.
     * @constructor
     */
    constructor(access_token) {
        this.access_token = access_token;
    }

    /**
     * @description This function is used to get a list of all tickets from an event.
     * @param {string} event_id - The ID of the event.
     * @param {boolean} soldFilter - Whether or not to show only sold tickets.
     * @returns {object} - The list of tickets.
     */
    async #_getTickets(event_id, soldFilter = false) {
        let tickets = [];
        await axios.get(`https://api.tidyhq.com/v1/events/${event_id}/tickets/${soldFilter ? 'sold' : ''}?access_token=${this.access_token}`).then((response) => {
            tickets = response.data;
        }).catch((error) => {
            throw new Error(`Tickets.getTickets: ${error}`);
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

}

module.exports = { TicketsAPI };

// tba
/*
List tickets
GET /events/:event_id/tickets

List tickets sold
GET /events/:event_id/tickets/sold

Get a single ticket
GET /events/:event_id/tickets

Create a ticket
POST /events/:event_id/tickets

Update a ticket
PUT /events/:event_id/tickets/:id

Delete a ticket
DELETE /events/:event_id/tickets/:id
*/