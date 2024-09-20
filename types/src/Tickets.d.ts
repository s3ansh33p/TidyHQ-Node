/**
 * @description This class is used to interact with Tickets in TidyHQ.
 * @class
 */
export class TicketsAPI {
    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest: Rest);
    rest: Rest;
    /**
     * @description Get a list of all tickets from an event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Tickets>} - The list of tickets.
     */
    getTickets(event_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Tickets>;
    /**
     * @description Get a list of all tickets from an event.
     * @param {number} event_id - The ID of the event.
     * @param {string} ticket_id - The ID of the ticket.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Ticket>} - The ticket.
     */
    getTicket(event_id: number, ticket_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Ticket>;
    /**
     * @description Get a list of all sold tickets from an event.
     * @param {number} event_id - The ID of the event.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_SoldTickets>} - The list of sold tickets.
     */
    getSoldTickets(event_id: number, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_SoldTickets>;
    /**
     * @description Create a ticket category for an event.
     * @param {number} event_id - The ID of the event.
     * @param {string} name - The name for the type of ticket.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.amount] - The amount for the ticket. Default is 0.00 and is for free tickets.
     * @param {number} [options.initial_quantity] - Limit the number of tickets available. Default is null and is for unlimited.
     * @param {number} [options.maximum_purchase] - Limit the number of tickets per purchase.
     * @param {string} [options.sales_end] - The date in ISO 8601 format for sales to end. Default is null and is for no end date.
     * @returns {Promise<TidyAPI_V1_Ticket>} - The newly created ticket.
     */
    createTicket(event_id: number, name: string, options?: {
        access_token?: string | undefined;
        amount?: number | undefined;
        initial_quantity?: number | undefined;
        maximum_purchase?: number | undefined;
        sales_end?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Ticket>;
    /**
     * @description Update a ticket category for an event.
     * @param {number} event_id - The ID of the event.
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
    updateTicket(event_id: number, ticket_id: string, options?: {
        access_token?: string | undefined;
        name?: string | undefined;
        amount?: number | undefined;
        initial_quantity?: number | undefined;
        maximum_purchase?: number | undefined;
        sales_end?: string | undefined;
    } | undefined): Promise<TidyAPI_V1_Ticket>;
    /**
     * @description Delete a ticket category for an event.
     * @param {number} event_id - The ID of the event.
     * @param {string} ticket_id - The ID of the ticket.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Whether or not the ticket was deleted.
     */
    deleteTicket(event_id: number, ticket_id: string, options?: {
        access_token?: string | undefined;
    } | undefined): Promise<TidyAPI_Response>;
}
import { Rest } from "./utils/Rest.js";
import { TidyAPI_V1_Tickets, TidyAPI_V1_Ticket, TidyAPI_V1_SoldTickets, TidyAPI_Response } from "types.js";
