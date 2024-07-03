/**
 * @fileoverview This file contains functions for interacting with Invoices in TidyHQ.
 * @author Sean McGinty <newfolderlocation@gmail.com>
 * @version 1.2.0
 * @license GPL-3.0
 */

const { Rest } = require("./utils/Rest.js");
const { makeURLParameters } = require("./utils/Builder.js");

/**
 * @description This class is used to interact with Invoices in TidyHQ.
 * @class
 */
class InvoicesAPI {

    /**
     * @param {Rest} rest - The rest instance to use for requests.
     * @constructor
     */
    constructor(rest) {
        this.rest = rest;
    }

    /**
     * @description This function is used to get a list of invoices from TidyHQ.
     * @param {object} [options]
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.limit] - The maximum number of invoices to return.
     * @param {number} [options.offset] - The number of invoices to skip.
     * @param {"activated" | "cancelled" | "all"} [options.status] - The status of the invoice.
     * @param {string} [options.updated_since] - The timestamp of the last update in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Invoices>} - An array of invoices.
     */
    async getInvoices(options = {}) {
        const data = {
            limit: options.limit,
            offset: options.offset,
            status: options.status == "all" ? "activated,cancelled" : options.status,
            updated_since: options.updated_since
        }
        const optionalParametersString = makeURLParameters(["limit", "offset", "status", "updated_since"], data);
        return await this.rest.get(`/v1/invoices${optionalParametersString}`, options.access_token);
    }

    /**
     * @description This function is used to get a single invoice from TidyHQ.
     * @param {string} invoiceID - The ID of the invoice to get
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Invoice>} - An invoice.
     **/
    async getInvoice(invoiceID, options = {}) {
        return await this.rest.get(`/v1/invoices/${invoiceID}`, options.access_token);
    }

    /**
     * @description This function is used to create a new invoice.
     * @param {Tidy_V1_InvoiceParams} invoice - The invoice to create.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_V1_Invoice>} - The newly created invoice.
     */
     async createInvoice(invoice, options = {}) {
        return await this.rest.post(`/v1/invoices`, {
            invoice
        }, options.access_token);
    }

    /**
     * @description Helper function to determine if a payment type is valid.
     * @param {string} type - The type to check.
     * @returns {boolean} - Whether the type is valid or not.
     */
    #_isValidType(type) {
        return ["cash", "card", "cheque", "bank", "other"].includes(type);
    }

    /**
     * @description This function is used to add a payment to an invoice.
     * @param {string} invoiceID - The ID of the invoice.
     * @param {object} [options] - The options to create the payment with. At least one option is required that isn't the access_token.
     * @param {string} [options.access_token] - The access token to use.
     * @param {number} [options.amount] - The amount of the payment expressed as a decimal.
     * @param {Tidy_V1_PaymentType} [options.payment_type] - The type of payment.
     * @param {string} [options.date] - The date of the payment in ISO 8601 format.
     * @returns {Promise<TidyAPI_V1_Payment>} - The newly created payment.
     */
    async addPayment(invoiceID, options) {
        const access_token = options.access_token;
        delete options.access_token;

        if (!this.#_isValidType(options.payment_type)) throw new Error(`Invoices.addPayment: Invalid payment type ${options.payment_type}.`);
        
        if (Object.keys(options).length == 0) throw new Error("Invoices.addPayment: No valid options provided.");

        return await this.rest.post(`/v1/invoices/${invoiceID}/payments`, options, access_token);
    }

    /**
     * @description This function is used to delete an invoice.
     * @param {string} invoiceID - The ID of the invoice.
     * @param {object} [options = {}]
     * @param {string} [options.access_token] - The access token to use.
     * @returns {Promise<TidyAPI_Response>} - Success or failure.
     */
    async deleteInvoice(invoiceID, options = {}) {
        return await this.rest.delete(`/v1/invoices/${invoiceID}`, {}, options.access_token);
    }
        
}

module.exports = { InvoicesAPI };